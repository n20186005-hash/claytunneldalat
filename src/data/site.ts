import { DOMAIN, SITE_URL } from "../config";
import type { Locale } from "../i18n";

/**
 * Language-neutral facts about the attraction. Change a price, phone number or
 * coordinate here only — every language version and every JSON-LD graph reads
 * from this single source.
 */
export const ATTRACTION = {
  nameVi: "Đường Hầm Điêu Khắc",
  nameEn: "Clay Tunnel Da Lat",
  nameZh: "大叻泥雕隧道",
  nameKo: "클레이 터널 달랏",
  legalName: "KDL Đường Hầm Điêu Khắc",
  alternateNames: [
    "Đường Hầm Điêu Khắc",
    "KDL Duong Ham Dieu Khac",
    "Clay Tunnel Da Lat",
    "Sculpture Tunnel",
    "Clay Sculpture Tunnel",
    "Đường hầm điêu khắc đất sét",
  ],
  ward: "Phường Xuân Hương–Đà Lạt",
  city: "Da Lat",
  cityVi: "Đà Lạt",
  province: "Lam Dong",
  provinceVi: "Lâm Đồng",
  country: "Vietnam",
  countryVi: "Việt Nam",
  countryCode: "VN",
  postalCode: "66000",
  latitude: 11.94,
  longitude: 108.44,
  phone: "+84947289269",
  phoneDisplay: "+84 947 289 269",
  mapUrl: "https://maps.app.goo.gl/Sb8LguKYD3Kt2PHM9",
  officialUrl: "https://visitlamdong.vn/vi/duonghamdieukhacdl",
  rating: 4.2,
  reviewCount: 16640,
  ratingMonth: "2026-10-30",
  nearby1: "Tuyen Lam Lake",
  nearby1Vi: "Hồ Tuyền Lâm",
  nearby2: "Truc Lam Zen Monastery",
  nearby2Vi: "Thiền Viện Trúc Lâm",
  currency: "VND",
} as const;

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ATTRACTION.nameVi + ", Da Lat, Lam Dong")}&hl=en&z=15&output=embed`;

/** Primary display name used in JSON-LD, per language. */
export const NAME_BY_LOCALE: Record<Locale, string> = {
  en: "Clay Tunnel Da Lat (Đường Hầm Điêu Khắc)",
  vi: "Đường Hầm Điêu Khắc Đà Lạt (Clay Tunnel)",
  zh: "大叻泥雕隧道 Đường Hầm Điêu Khắc",
  ko: "클레이 터널 달랏 (Đường Hầm Điêu Khắc)",
};

/** SEO site name: "attraction + city + travel guide" in every language. */
export const SITE_NAME: Record<Locale, string> = {
  en: "Clay Tunnel Da Lat (Đường Hầm Điêu Khắc) — Travel Guide",
  vi: "Đường Hầm Điêu Khắc Đà Lạt — Hướng dẫn tham quan",
  zh: "大叻泥雕隧道（Đường Hầm Điêu Khắc）— 旅遊指南",
  ko: "클레이 터널 달랏(Đường Hầm Điêu Khắc) — 여행 가이드",
};

export function withSiteName(locale: Locale, suffix?: string): string {
  return suffix ? `${suffix} | ${SITE_NAME[locale]}` : SITE_NAME[locale];
}

/** Locally created symbolic illustrations, not site photographs or maps. */
export const PHOTO_SOURCES = {
  hero: "/images/clay-tunnel-hero.svg",
  tunnel: "/images/clay-tunnel-tunnel.svg",
  lake: "/images/clay-tunnel-lake.svg",
  tunnel2: "/images/clay-tunnel-tunnel2.svg",
  lake2: "/images/clay-tunnel-lake2.svg",
} as const;
export type PhotoKey = keyof typeof PHOTO_SOURCES;
export const OG_IMAGE = `${SITE_URL}/images/clay-cover.png`;

export const DOMAIN_NAME = DOMAIN;
export { SITE_URL };
