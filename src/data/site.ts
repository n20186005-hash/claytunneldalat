import { DOMAIN, SITE_URL } from '../config';
import type { Locale } from '../i18n';

/**
 * Language-neutral facts about the attraction. Change a price, phone number or
 * coordinate here only — every language version and every JSON-LD graph reads
 * from this single source.
 */
export const ATTRACTION = {
  nameVi: 'Đường Hầm Điêu Khắc',
  nameEn: 'Clay Tunnel Da Lat',
  nameZh: '大叻泥雕隧道',
  nameKo: '클레이 터널 달랏',
  legalName: 'KDL Đường Hầm Điêu Khắc',
  alternateNames: [
    'Đường Hầm Điêu Khắc',
    'KDL Duong Ham Dieu Khac',
    'Clay Tunnel Da Lat',
    'Sculpture Tunnel',
    'Clay Sculpture Tunnel',
    'Đường hầm điêu khắc đất sét'
  ],
  ward: 'Ward 4 (Phường 4)',
  city: 'Da Lat',
  cityVi: 'Đà Lạt',
  province: 'Lam Dong',
  provinceVi: 'Lâm Đồng',
  country: 'Vietnam',
  countryVi: 'Việt Nam',
  countryCode: 'VN',
  postalCode: '66000',
  latitude: 11.8825052,
  longitude: 108.4115694,
  plusCode: 'VCM6+2J Xuan Huong - Da Lat, Lam Dong, Vietnam',
  phone: '+84338985899',
  phoneDisplay: '+84 333 898 599',
  mapUrl: 'https://maps.app.goo.gl/Sb8LguKYD3Kt2PHM9',
  officialUrl: 'https://vietnam.travel/',
  rating: 4.2,
  reviewCount: 16570,
  ratingMonth: 'September 2026',
  openingHours: 'Mo-Su 07:00-17:00',
  lengthKm: 1,
  distanceFromCentreKm: 12,
  nearby1: 'Tuyen Lam Lake',
  nearby1Vi: 'Hồ Tuyền Lâm',
  nearby2: 'Truc Lam Zen Monastery',
  nearby2Vi: 'Thiền Viện Trúc Lâm',
  ticketAdult: 90000,
  ticketChild: 30000,
  currency: 'VND',
  priceRange: '₫₫',
} as const;

export const MAPS_EMBED = `https://www.google.com/maps?q=${ATTRACTION.latitude},${ATTRACTION.longitude}&hl=en&z=15&output=embed`;

/** Primary display name used in JSON-LD, per language. */
export const NAME_BY_LOCALE: Record<Locale, string> = {
  en: 'Clay Tunnel Da Lat (Đường Hầm Điêu Khắc)',
  vi: 'Đường Hầm Điêu Khắc Đà Lạt (Clay Tunnel)',
  zh: '大叻泥雕隧道 Đường Hầm Điêu Khắc',
  ko: '클레이 터널 달랏 (Đường Hầm Điêu Khắc)'
};

/** SEO site name: "attraction + city + travel guide" in every language. */
export const SITE_NAME: Record<Locale, string> = {
  en: 'Clay Tunnel Da Lat (Đường Hầm Điêu Khắc) — Travel Guide',
  vi: 'Đường Hầm Điêu Khắc Đà Lạt — Hướng dẫn tham quan',
  zh: '大叻泥雕隧道（Đường Hầm Điêu Khắc）— 旅遊指南',
  ko: '클레이 터널 달랏(Đường Hầm Điêu Khắc) — 여행 가이드'
};

export function withSiteName(locale: Locale, suffix?: string): string {
  return suffix ? `${suffix} | ${SITE_NAME[locale]}` : SITE_NAME[locale];
}

/** Wikimedia Commons originals; `pnpm photos` stores them locally under these names. */
const commons = (name: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}`;

export const PHOTO_SOURCES = {
  hero: commons('Đường vào đường hầm điêu khắc đất sét - panoramio.jpg'),
  tunnel: commons('Đường vào đường hầm điêu khắc đất sét - panoramio (1).jpg'),
  lake: commons('Đường vào đường hầm điêu khắc đất sét quanh hồ tuyền lâm - panoramio.jpg'),
  tunnel2: commons('Đường vào đường hầm điêu khắc đất sét - panoramio (2).jpg'),
  lake2: commons('Đường vào đường hầm điêu khắc đất sét quanh hồ tuyền lâm - panoramio (1).jpg')
} as const;

export type PhotoKey = keyof typeof PHOTO_SOURCES;

/** src / fallback / guaranteed-local-svg chain used by <Photo>. */
export function photoChain(key: PhotoKey): { src: string; fallback: string; fallback2: string } {
  return {
    src: `/images/clay-tunnel-${key}.jpg`,
    fallback: PHOTO_SOURCES[key],
    fallback2: `/images/clay-tunnel-${key}.svg`
  };
}

/** The hero photograph, as served today: used for og:image and structured data. */
export const OG_IMAGE = PHOTO_SOURCES.hero;

export const DOMAIN_NAME = DOMAIN;
export { SITE_URL };
