import { ATTRACTION } from "../data/site";
import { ADVICE, WMO } from "../data/weather-i18n";
import type { Locale } from "../i18n";

// Regional model point for Da Lat, not a surveyed attraction entrance or weather station.
export const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${ATTRACTION.latitude}&longitude=${ATTRACTION.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&forecast_days=7&timezone=Asia%2FHo_Chi_Minh`;
export const MAX_CLIENT_AGE = 15 * 60 * 1000;
export interface WeatherData {
  current: {
    temp: number;
    apparent: number;
    humidity: number;
    windKmh: number;
    code: number;
    isDay: boolean;
  };
  daily: {
    date: string;
    code: number;
    min: number;
    max: number;
    precipProb: number;
    uv: number;
  }[];
  todayRain: number;
  todayUv: number;
  updatedAt: string;
  fetchedAt: number;
}
const finite = (v: unknown, min: number, max: number): v is number =>
  typeof v === "number" && Number.isFinite(v) && v >= min && v <= max;
const code = (v: unknown): v is number =>
  typeof v === "number" && Number.isInteger(v) && Object.hasOwn(WMO, v);
export function parseWeather(
  value: unknown,
  now = Date.now(),
): WeatherData | null {
  if (!value || typeof value !== "object") return null;
  const j = value as Record<string, any>,
    c = j.current,
    d = j.daily;
  if (
    j.current_units?.temperature_2m !== "°C" ||
    j.current_units?.apparent_temperature !== "°C" ||
    j.current_units?.relative_humidity_2m !== "%" ||
    j.current_units?.wind_speed_10m !== "km/h" ||
    j.daily_units?.temperature_2m_min !== "°C" ||
    j.daily_units?.temperature_2m_max !== "°C" ||
    j.daily_units?.precipitation_probability_max !== "%"
  )
    return null;
  if (
    !c ||
    !d ||
    j.utc_offset_seconds !== 25200 ||
    typeof c.time !== "string" ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(c.time)
  )
    return null;
  const stamp = Date.parse(c.time + "+07:00");
  if (
    !Number.isFinite(stamp) ||
    now - stamp > 45 * 60 * 1000 ||
    stamp - now > 5 * 60 * 1000
  )
    return null;
  if (
    !finite(c.temperature_2m, -90, 65) ||
    !finite(c.apparent_temperature, -110, 80) ||
    !finite(c.relative_humidity_2m, 0, 100) ||
    !finite(c.wind_speed_10m, 0, 250) ||
    !code(c.weather_code) ||
    ![0, 1].includes(c.is_day)
  )
    return null;
  const today = new Date(now + 25200000).toISOString().slice(0, 10);
  const fields = [
    "time",
    "weather_code",
    "temperature_2m_min",
    "temperature_2m_max",
    "precipitation_probability_max",
    "uv_index_max",
  ];
  if (
    fields.some((k) => !Array.isArray(d[k]) || d[k].length !== 7) ||
    d.time[0] !== today
  )
    return null;
  const daily = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(Date.parse(today + "T00:00:00Z") + i * 86400000)
      .toISOString()
      .slice(0, 10);
    if (
      d.time[i] !== date ||
      !code(d.weather_code[i]) ||
      !finite(d.temperature_2m_min[i], -90, 65) ||
      !finite(d.temperature_2m_max[i], -90, 65) ||
      d.temperature_2m_min[i] > d.temperature_2m_max[i] ||
      !finite(d.precipitation_probability_max[i], 0, 100) ||
      !finite(d.uv_index_max[i], 0, 30)
    )
      return null;
    daily.push({
      date,
      code: d.weather_code[i],
      min: Math.round(d.temperature_2m_min[i]),
      max: Math.round(d.temperature_2m_max[i]),
      precipProb: Math.round(d.precipitation_probability_max[i]),
      uv: Math.round(d.uv_index_max[i] * 10) / 10,
    });
  }
  return {
    current: {
      temp: Math.round(c.temperature_2m),
      apparent: Math.round(c.apparent_temperature),
      humidity: Math.round(c.relative_humidity_2m),
      windKmh: Math.round(c.wind_speed_10m),
      code: c.weather_code,
      isDay: c.is_day === 1,
    },
    daily,
    todayRain: daily[0].precipProb,
    todayUv: daily[0].uv,
    updatedAt: new Date(stamp).toISOString(),
    fetchedAt: now,
  };
}
export async function getWeather(): Promise<WeatherData | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const r = await fetch(WEATHER_URL, {
      cache: "no-store",
      signal: controller.signal,
      headers: { accept: "application/json" },
    });
    if (!r.ok) return null;
    return parseWeather(await r.json());
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
export function wmoLabel(c: number, locale: Locale): string {
  return (
    WMO[c]?.[locale] ??
    {
      en: "Unknown condition",
      vi: "Chưa rõ điều kiện",
      zh: "狀況未知",
      ko: "알 수 없는 상태",
    }[locale]
  );
}
export function kmhToBeaufort(kmh: number): number {
  const limits = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];
  for (let i = 0; i < limits.length; i++) if (kmh < limits[i]) return i;
  return 12;
}
export interface AdviceGroups {
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}
export function buildAdvice(w: WeatherData, locale: Locale): AdviceGroups {
  const t = ADVICE[locale],
    g: AdviceGroups = { risk: [], outfit: [], plan: [], items: [] };
  const c = w.current.code;
  const storm = [95, 96, 99].includes(c),
    rainy = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(c);
  if (storm) {
    g.risk.push(t.stormRisk);
    g.plan.push(t.stormPlan);
  }
  if ([65, 67, 82].includes(c)) g.risk.push(t.heavyRainRisk);
  if (rainy || w.todayRain >= 40) {
    g.outfit.push(t.rainOutfit);
    g.plan.push(t.rainPlan);
    g.items.push(t.rainItems);
  }
  if (!rainy && !storm) g.plan.push(t.clearPlan);
  if (w.todayUv >= 6) {
    g.outfit.push(t.uvOutfit);
    g.items.push(t.uvItems);
  }
  if (w.daily[0].max >= 28) {
    g.plan.push(t.hotPlan);
    g.items.push(t.hotItems);
  }
  if (w.daily[0].min <= 15) {
    g.outfit.push(t.coldOutfit);
    g.items.push(t.coldItems);
    g.plan.push(t.coolEvening);
  } else g.outfit.push(t.mildOutfit);
  if (kmhToBeaufort(w.current.windKmh) >= 6) {
    g.risk.push(t.windRisk);
    g.items.push(t.windItems);
  }
  if ([45, 48].includes(c)) {
    g.risk.push(t.fogRisk);
    g.plan.push(t.fogPlan);
  }
  return g;
}
