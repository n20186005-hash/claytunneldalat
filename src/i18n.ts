import { SITE_URL } from './config';

export type Locale = 'en' | 'vi' | 'zh' | 'ko';

export const locales: Locale[] = ['en', 'vi', 'zh', 'ko'];

/**
 * English is the default locale: 100% of the impressions recorded in Google
 * Search Console come from English queries ("clay tunnel dalat entrance fee",
 * "clay tunnel vietnam", ...), so the root URL keeps serving the English
 * version and x-default points at it.
 */
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; hreflang: string; label: string; short: string; prefix: string }
> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en', label: 'English', short: 'EN', prefix: '' },
  vi: { htmlLang: 'vi', ogLocale: 'vi_VN', hreflang: 'vi', label: 'Tiếng Việt', short: 'VI', prefix: '/vi' },
  zh: { htmlLang: 'zh-Hant', ogLocale: 'zh_TW', hreflang: 'zh-Hant', label: '繁體中文', short: '中文', prefix: '/zh' },
  ko: { htmlLang: 'ko', ogLocale: 'ko_KR', hreflang: 'ko', label: '한국어', short: 'KO', prefix: '/ko' }
};

/** Path slugs per locale. Keep them stable: they are used by hreflang + sitemap. */
export const routes = {
  home: { en: '', vi: '', zh: '', ko: '' },
  ticket: { en: 'ticket-price', vi: 'gia-ve', zh: 'menpiao', ko: 'ticket-price' },
  transport: { en: 'how-to-get-there', vi: 'cach-di', zh: 'jiaotong', ko: 'how-to-get-there' },
  highlights: { en: 'highlights', vi: 'diem-check-in', zh: 'liangdian', ko: 'highlights' }
} as const;

export type RouteKey = keyof typeof routes;

/** Absolute, trailing-slash URL for a route in a locale. */
export function localizedPath(locale: Locale, key: RouteKey): string {
  const slug = routes[key][locale];
  return `${localeMeta[locale].prefix}${slug ? `/${slug}` : ''}/`;
}

export function localizedUrl(locale: Locale, key: RouteKey): string {
  return new URL(localizedPath(locale, key), SITE_URL).href;
}

/** hreflang set for a page: every locale + x-default (English). */
export function hreflangAlternates(key: RouteKey): { lang: string; href: string }[] {
  const list = locales.map((locale) => ({ lang: localeMeta[locale].hreflang, href: localizedUrl(locale, key) }));
  list.push({ lang: 'x-default', href: localizedUrl(defaultLocale, key) });
  return list;
}

export interface UiStrings {
  skip: string;
  nav: { about: string; visit: string; weather: string; reviews: string; faq: string };
  cta: { directions: string; call: string; maps: string; official: string };
  langLabel: string;
  cookie: { text: string; accept: string; reject: string };
  weather: {
    kicker: string;
    title: string;
    current: string;
    feels: string;
    humidity: string;
    wind: string;
    rain: string;
    uv: string;
    forecast: string;
    outfit: string;
    plan: string;
    items: string;
    risk: string;
    beaufort: string;
    updated: string;
    unavailable: string;
    source: string;
  };
  unit: { kmh: string; percent: string };
  footer: { home: string; explore: string; legal: string; privacy: string; terms: string; cookies: string; credits: string };
  breadcrumb: { home: string };
  updated: string;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    skip: 'Skip to content',
    nav: { about: 'About', visit: 'Visit', weather: 'Weather', reviews: 'Reviews', faq: 'FAQ' },
    cta: { directions: 'Get directions ↗', call: 'Call the site ↗', maps: 'View on Google Maps ↗', official: 'Vietnam Tourism ↗' },
    langLabel: 'Language',
    cookie: {
      text: 'This site only stores a local preference to remember your cookie choice. No analytics are loaded by default.',
      accept: 'Accept',
      reject: 'Essentials only'
    },
    weather: {
      kicker: 'Highland weather',
      title: 'Da Lat weather right now',
      current: 'Now',
      feels: 'Feels like',
      humidity: 'Humidity',
      wind: 'Wind',
      rain: 'Rain chance',
      uv: 'UV index',
      forecast: 'Next 7 days',
      outfit: 'What to wear',
      plan: 'How to plan the visit',
      items: 'What to bring',
      risk: 'Weather to watch',
      beaufort: 'bf',
      updated: 'Updated',
      unavailable: 'Current conditions are temporarily unavailable. Please check again shortly.',
      source: 'Local forecast for Da Lat, Lam Dong.'
    },
    unit: { kmh: 'km/h', percent: '%' },
    footer: {
      home: 'Guide',
      explore: 'Explore',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookie settings',
      credits: 'Photo credits'
    },
    breadcrumb: { home: 'Guide' },
    updated: 'Updated'
  },
  vi: {
    skip: 'Chuyển đến nội dung',
    nav: { about: 'Giới thiệu', visit: 'Tham quan', weather: 'Thời tiết', reviews: 'Đánh giá', faq: 'Hỏi đáp' },
    cta: { directions: 'Chỉ đường ↗', call: 'Gọi điện ↗', maps: 'Xem trên Google Maps ↗', official: 'Du lịch Việt Nam ↗' },
    langLabel: 'Ngôn ngữ',
    cookie: {
      text: 'Trang chỉ lưu một tùy chọn cục bộ để ghi nhớ lựa chọn cookie của bạn. Không có công cụ phân tích nào được tải mặc định.',
      accept: 'Đồng ý',
      reject: 'Chỉ cần thiết'
    },
    weather: {
      kicker: 'Thời tiết cao nguyên',
      title: 'Thời tiết Đà Lạt hiện tại',
      current: 'Hiện tại',
      feels: 'Cảm giác như',
      humidity: 'Độ ẩm',
      wind: 'Gió',
      rain: 'Khả năng mưa',
      uv: 'Chỉ số UV',
      forecast: '7 ngày tới',
      outfit: 'Trang phục',
      plan: 'Sắp xếp lịch tham quan',
      items: 'Mang theo',
      risk: 'Thời tiết cần lưu ý',
      beaufort: 'bf',
      updated: 'Cập nhật',
      unavailable: 'Hiện chưa lấy được dữ liệu thời tiết. Vui lòng thử lại sau ít phút.',
      source: 'Dự báo cho khu vực Đà Lạt, Lâm Đồng.'
    },
    unit: { kmh: 'km/giờ', percent: '%' },
    footer: {
      home: 'Hướng dẫn',
      explore: 'Khám phá',
      legal: 'Pháp lý',
      privacy: 'Bảo mật',
      terms: 'Điều khoản',
      cookies: 'Cài đặt cookie',
      credits: 'Ghi nhận hình ảnh'
    },
    breadcrumb: { home: 'Hướng dẫn' },
    updated: 'Cập nhật'
  },
  zh: {
    skip: '直接前往主要內容',
    nav: { about: '景點介紹', visit: '參觀資訊', weather: '天氣', reviews: '評價', faq: '常見問題' },
    cta: { directions: 'Google 地圖導航 ↗', call: '撥打電話 ↗', maps: '在 Google 地圖查看 ↗', official: '越南觀光局 ↗' },
    langLabel: '語言',
    cookie: {
      text: '本站僅在瀏覽器儲存你的 cookie 選擇，預設不載入任何分析工具。',
      accept: '接受',
      reject: '僅必要'
    },
    weather: {
      kicker: '高原天氣',
      title: '大叻即時天氣',
      current: '現在',
      feels: '體感溫度',
      humidity: '濕度',
      wind: '風力',
      rain: '降雨機率',
      uv: '紫外線指數',
      forecast: '未來 7 天',
      outfit: '穿搭建議',
      plan: '行程安排',
      items: '隨身物品',
      risk: '天氣提醒',
      beaufort: '級',
      updated: '更新時間',
      unavailable: '目前無法取得即時天氣，請稍後再試。',
      source: '大叻（林同省）當地預報。'
    },
    unit: { kmh: '公里/小時', percent: '%' },
    footer: {
      home: '指南',
      explore: '延伸閱讀',
      legal: '法律條款',
      privacy: '隱私政策',
      terms: '使用條款',
      cookies: 'Cookie 設定',
      credits: '圖片來源'
    },
    breadcrumb: { home: '指南' },
    updated: '更新'
  },
  ko: {
    skip: '본문 바로가기',
    nav: { about: '소개', visit: '방문 정보', weather: '날씨', reviews: '후기', faq: '자주 묻는 질문' },
    cta: { directions: '길찾기 ↗', call: '전화 걸기 ↗', maps: '구글 지도에서 보기 ↗', official: '베트남 관광청 ↗' },
    langLabel: '언어',
    cookie: {
      text: '이 사이트는 쿠키 선택을 기억하기 위한 로컬 설정만 저장하며, 기본적으로 분석 도구를 불러오지 않습니다.',
      accept: '동의',
      reject: '필수만'
    },
    weather: {
      kicker: '고원 지대 날씨',
      title: '달랏 현재 날씨',
      current: '현재',
      feels: '체감 온도',
      humidity: '습도',
      wind: '바람',
      rain: '강수 확률',
      uv: '자외선 지수',
      forecast: '향후 7일',
      outfit: '옷차림',
      plan: '관람 계획',
      items: '준비물',
      risk: '날씨 주의',
      beaufort: 'bf',
      updated: '업데이트',
      unavailable: '현재 날씨 정보를 불러올 수 없습니다. 잠시 후 다시 확인해 주세요.',
      source: '달랏(럼동성) 지역 예보입니다.'
    },
    unit: { kmh: 'km/h', percent: '%' },
    footer: {
      home: '가이드',
      explore: '더 보기',
      legal: '약관',
      privacy: '개인정보',
      terms: '이용 약관',
      cookies: '쿠키 설정',
      credits: '사진 출처'
    },
    breadcrumb: { home: '가이드' },
    updated: '업데이트'
  }
};
