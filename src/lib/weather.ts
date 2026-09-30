import { ATTRACTION } from '../data/site';
import { ADVICE, WMO } from '../data/weather-i18n';
import type { Locale } from '../i18n';

const { latitude, longitude } = ATTRACTION;

export const WEATHER_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
  '&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
  '&forecast_days=7&timezone=Asia%2FHo_Chi_Minh';

export interface CurrentWeather {
  temp: number;
  apparent: number;
  humidity: number;
  windKmh: number;
  code: number;
  isDay: boolean;
}

export interface DailyWeather {
  date: string;
  code: number;
  min: number;
  max: number;
  precipProb: number;
  uv: number;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather[];
  todayRain: number;
  todayUv: number;
  updatedAt: string;
}

/** Fetched at build time; a failure simply leaves the page with its neutral fallback. */
export async function getWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(WEATHER_URL, { headers: { accept: 'application/json' } });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      current?: Record<string, number>;
      daily?: { time?: string[]; weather_code?: number[]; temperature_2m_max?: number[]; temperature_2m_min?: number[]; precipitation_probability_max?: number[]; uv_index_max?: number[] };
    };
    const c = json.current;
    const d = json.daily;
    if (!c || !d || !d.time?.length) return null;

    const num = (v: unknown, fallback = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : fallback);

    const daily: DailyWeather[] = d.time.map((date, i) => ({
      date,
      code: num(d.weather_code?.[i]),
      min: Math.round(num(d.temperature_2m_min?.[i])),
      max: Math.round(num(d.temperature_2m_max?.[i])),
      precipProb: Math.round(num(d.precipitation_probability_max?.[i])),
      uv: Math.round(num(d.uv_index_max?.[i]) * 10) / 10
    }));

    return {
      current: {
        temp: Math.round(num(c.temperature_2m)),
        apparent: Math.round(num(c.apparent_temperature)),
        humidity: Math.round(num(c.relative_humidity_2m)),
        windKmh: Math.round(num(c.wind_speed_10m)),
        code: num(c.weather_code),
        isDay: num(c.is_day, 1) === 1
      },
      daily,
      todayRain: daily[0]?.precipProb ?? 0,
      todayUv: daily[0]?.uv ?? 0,
      updatedAt: new Date().toISOString()
    };
  } catch {
    return null;
  }
}

export function wmoLabel(code: number, locale: Locale): string {
  const hit = WMO[code];
  if (hit) return hit[locale];
  if (code >= 95) return WMO[95][locale];
  if (code >= 80) return WMO[81][locale];
  if (code >= 71) return WMO[73][locale];
  if (code >= 61) return WMO[63][locale];
  if (code >= 51) return WMO[53][locale];
  if (code >= 45) return WMO[45][locale];
  if (code >= 1) return WMO[2][locale];
  return WMO[0][locale];
}

export function kmhToBeaufort(kmh: number): number {
  const limits = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];
  for (let i = 0; i < limits.length; i += 1) if (kmh < limits[i]) return i;
  return 12;
}

export interface AdviceGroups {
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}

/** Advice is derived from the forecast only — never presented as an official warning. */
export function buildAdvice(w: WeatherData, locale: Locale): AdviceGroups {
  const t = ADVICE[locale];
  const groups: AdviceGroups = { risk: [], outfit: [], plan: [], items: [] };
  const code = w.current.code;
  const stormy = code >= 95;
  const showery = code >= 80 && code < 95;
  const rainy = (code >= 51 && code < 80) || showery;
  const foggy = code === 45 || code === 48;
  const rain = w.todayRain;

  if (stormy) {
    groups.risk.push(t.stormRisk);
    groups.plan.push(t.stormPlan);
  }
  if (rain >= 70 || code === 65 || code === 82) {
    groups.risk.push(t.heavyRainRisk);
  }
  if (rainy || rain >= 40) {
    groups.outfit.push(t.rainOutfit);
    groups.plan.push(t.rainPlan);
    groups.items.push(t.rainItems);
  }
  if (rain < 20 && !rainy && !stormy) {
    groups.plan.push(t.clearPlan);
  }
  if (w.todayUv >= 6) {
    groups.outfit.push(t.uvOutfit);
    groups.items.push(t.uvItems);
  }
  const max = w.daily[0]?.max ?? w.current.temp;
  const min = w.daily[0]?.min ?? w.current.temp;
  if (max >= 28) {
    groups.plan.push(t.hotPlan);
    groups.items.push(t.hotItems);
  }
  if (min <= 15) {
    groups.outfit.push(t.coldOutfit);
    groups.items.push(t.coldItems);
    groups.plan.push(t.coolEvening);
  } else if (max <= 26) {
    groups.outfit.push(t.mildOutfit);
  }
  if (kmhToBeaufort(w.current.windKmh) >= 6) {
    groups.risk.push(t.windRisk);
    groups.items.push(t.windItems);
  }
  if (foggy) {
    groups.risk.push(t.fogRisk);
    groups.plan.push(t.fogPlan);
  }
  return groups;
}
