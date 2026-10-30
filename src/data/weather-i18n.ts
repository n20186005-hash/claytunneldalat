import type { Locale } from "../i18n";

/** WMO weather codes → label per language. Unknown codes are reported explicitly as unknown. */
export const WMO: Record<number, Record<Locale, string>> = {
  0: { en: "Clear sky", vi: "Trời quang", zh: "晴朗", ko: "맑음" },
  1: {
    en: "Mainly clear",
    vi: "Trời ít mây",
    zh: "大致晴朗",
    ko: "대체로 맑음",
  },
  2: { en: "Partly cloudy", vi: "Có mây", zh: "局部多雲", ko: "구름 조금" },
  3: { en: "Overcast", vi: "U ám", zh: "陰天", ko: "흐림" },
  45: { en: "Fog", vi: "Sương mù", zh: "起霧", ko: "안개" },
  48: {
    en: "Freezing fog",
    vi: "Sương mù đóng băng",
    zh: "凍霧",
    ko: "어는 안개",
  },
  51: { en: "Light drizzle", vi: "Mưa nhỏ", zh: "細雨", ko: "약한 이슬비" },
  53: { en: "Drizzle", vi: "Mưa phùn", zh: "毛毛雨", ko: "이슬비" },
  55: {
    en: "Heavy drizzle",
    vi: "Mưa phùn dày",
    zh: "密集細雨",
    ko: "강한 이슬비",
  },
  56: {
    en: "Light freezing drizzle",
    vi: "Mưa phùn đóng băng nhẹ",
    zh: "輕微凍毛毛雨",
    ko: "약한 어는 이슬비",
  },
  57: {
    en: "Dense freezing drizzle",
    vi: "Mưa phùn đóng băng dày",
    zh: "濃密凍毛毛雨",
    ko: "강한 어는 이슬비",
  },
  66: {
    en: "Light freezing rain",
    vi: "Mưa đóng băng nhẹ",
    zh: "輕微凍雨",
    ko: "약한 어는 비",
  },
  67: {
    en: "Heavy freezing rain",
    vi: "Mưa đóng băng mạnh",
    zh: "強凍雨",
    ko: "강한 어는 비",
  },
  61: { en: "Light rain", vi: "Mưa nhẹ", zh: "小雨", ko: "약한 비" },
  63: { en: "Rain", vi: "Mưa", zh: "下雨", ko: "비" },
  65: { en: "Heavy rain", vi: "Mưa to", zh: "大雨", ko: "강한 비" },
  71: { en: "Light snow", vi: "Tuyết nhẹ", zh: "小雪", ko: "약한 눈" },
  73: { en: "Snow", vi: "Tuyết", zh: "下雪", ko: "눈" },
  75: { en: "Heavy snow", vi: "Tuyết dày", zh: "大雪", ko: "강한 눈" },
  77: { en: "Snow grains", vi: "Tuyết hạt", zh: "米雪", ko: "싸락눈" },
  80: {
    en: "Light showers",
    vi: "Mưa rào nhẹ",
    zh: "短暫小雨",
    ko: "약한 소나기",
  },
  81: { en: "Showers", vi: "Mưa rào", zh: "陣雨", ko: "소나기" },
  82: {
    en: "Violent showers",
    vi: "Mưa rào lớn",
    zh: "強陣雨",
    ko: "강한 소나기",
  },
  85: {
    en: "Light snow showers",
    vi: "Mưa tuyết nhẹ",
    zh: "短暫小雪",
    ko: "약한 소나기 눈",
  },
  86: { en: "Snow showers", vi: "Mưa tuyết", zh: "陣雪", ko: "소나기 눈" },
  95: { en: "Thunderstorm", vi: "Giông bão", zh: "雷雨", ko: "천둥번개" },
  96: {
    en: "Thunderstorm with hail",
    vi: "Giông kèm mưa đá",
    zh: "雷雨伴冰雹",
    ko: "우박을 동반한 천둥번개",
  },
  99: {
    en: "Thunderstorm with heavy hail",
    vi: "Giông kèm mưa đá mạnh",
    zh: "雷雨伴強冰雹",
    ko: "강한 우박을 동반한 천둥번개",
  },
};

export interface AdviceText {
  stormRisk: string;
  stormPlan: string;
  rainOutfit: string;
  rainPlan: string;
  rainItems: string;
  heavyRainRisk: string;
  uvOutfit: string;
  uvItems: string;
  hotPlan: string;
  hotItems: string;
  coldOutfit: string;
  coldItems: string;
  windRisk: string;
  windItems: string;
  fogRisk: string;
  fogPlan: string;
  clearPlan: string;
  mildOutfit: string;
  coolEvening: string;
}

export const ADVICE: Record<Locale, AdviceText> = {
  en: {
    stormRisk:
      "Thunderstorm conditions in the model; postpone exposed outdoor activity. This is not an official warning.",
    stormPlan:
      "Use a substantial safe building if needed and follow local instructions; decorative tunnels are not verified storm shelters.",
    rainOutfit:
      "Consider rain protection and suitable footwear when rain is reported or likely.",
    rainPlan:
      "Check current conditions and venue access; a forecast does not confirm an open or safe route.",
    rainItems: "Rain jacket and protection for belongings as needed.",
    heavyRainRisk:
      "The condition code indicates heavy rain, heavy freezing rain or violent showers; reassess outdoor plans.",
    uvOutfit: "Consider a hat, sunglasses and sun protection.",
    uvItems: "Sunscreen and suitable eye protection.",
    hotPlan: "Avoid overexertion in reported heat and take breaks as needed.",
    hotItems: "Bring drinking water; refill availability is unconfirmed.",
    coldOutfit: "Use suitable layers when the forecast is cool.",
    coldItems: "Bring an extra layer if needed.",
    windRisk: "Strong modeled wind; reassess exposed activity.",
    windItems: "Secure loose items and follow local instructions.",
    fogRisk: "Fog conditions may reduce visibility.",
    fogPlan:
      "Check transport and access before travelling in reduced visibility.",
    clearPlan:
      "Weather information alone does not establish site access or route safety.",
    mildOutfit: "Choose layers appropriate to the forecast.",
    coolEvening: "Check the forecast for your return journey.",
  },
  vi: {
    stormRisk:
      "Mô hình có giông; hoãn hoạt động ngoài trời trống trải. Đây không phải cảnh báo chính thức.",
    stormPlan:
      "Nếu cần, vào công trình kiên cố an toàn và theo hướng dẫn địa phương; hầm trang trí chưa được xác minh là nơi trú giông.",
    rainOutfit:
      "Cân nhắc đồ chống mưa và giày phù hợp khi có mưa hoặc khả năng mưa.",
    rainPlan:
      "Kiểm tra điều kiện và lối vào hiện tại; dự báo không xác nhận tuyến đang mở hay an toàn.",
    rainItems: "Áo mưa và đồ bảo vệ hành lý khi cần.",
    heavyRainRisk:
      "Mã điều kiện thể hiện mưa to, mưa đóng băng mạnh hoặc mưa rào dữ dội; cân nhắc lại kế hoạch ngoài trời.",
    uvOutfit: "Cân nhắc mũ, kính và đồ chống nắng.",
    uvItems: "Kem chống nắng và kính phù hợp.",
    hotPlan: "Tránh gắng sức khi dự báo nóng, nghỉ khi cần.",
    hotItems: "Mang nước uống; chưa xác nhận nơi tiếp nước.",
    coldOutfit: "Mặc nhiều lớp phù hợp khi dự báo mát hoặc lạnh.",
    coldItems: "Mang thêm áo khi cần.",
    windRisk: "Gió mạnh trong mô hình; cân nhắc hoạt động trống trải.",
    windItems: "Giữ chặt đồ rời và theo hướng dẫn địa phương.",
    fogRisk: "Sương mù có thể giảm tầm nhìn.",
    fogPlan: "Kiểm tra giao thông và lối vào trước khi đi khi tầm nhìn kém.",
    clearPlan:
      "Thông tin thời tiết không xác nhận quyền vào hay an toàn của tuyến.",
    mildOutfit: "Chọn lớp áo theo dự báo.",
    coolEvening: "Kiểm tra dự báo cho chuyến về.",
  },
  zh: {
    stormRisk: "模式顯示雷雨，延後空曠戶外活動；這不是官方警報。",
    stormPlan:
      "必要時進入安全堅固建築，遵照當地指示；裝飾隧道未證實是避雷場所。",
    rainOutfit: "回報有雨或可能下雨時，考慮雨具及合適鞋履。",
    rainPlan: "查看現況與通行公告；預報不證明路線已開放或安全。",
    rainItems: "視需要攜帶雨衣與物品防水用品。",
    heavyRainRisk: "天氣代碼顯示大雨、強凍雨或猛烈陣雨，請重新評估戶外安排。",
    uvOutfit: "考慮帽子、太陽眼鏡與防曬。",
    uvItems: "防曬品及合適護目用品。",
    hotPlan: "預報炎熱時避免過度勞累，適時休息。",
    hotItems: "攜帶飲水，補水設施尚未確認。",
    coldOutfit: "預報偏涼時選擇合適分層衣物。",
    coldItems: "視需要帶備外套。",
    windRisk: "模式顯示強風，重新評估空曠活動。",
    windItems: "固定鬆散物品，遵照現場指示。",
    fogRisk: "起霧可能降低能見度。",
    fogPlan: "能見度不佳時，出發前確認交通與通行。",
    clearPlan: "天氣資訊本身不證明景點開放或動線安全。",
    mildOutfit: "依預報選擇分層衣物。",
    coolEvening: "確認回程時段預報。",
  },
  ko: {
    stormRisk:
      "모델에 뇌우 조건이 표시됩니다. 노출된 야외 활동을 미루세요. 공식 경보가 아닙니다.",
    stormPlan:
      "필요하면 안전하고 튼튼한 건물로 이동하고 현지 지시를 따르세요. 장식 터널은 확인된 낙뢰 대피소가 아닙니다.",
    rainOutfit:
      "비가 보고되거나 가능성이 있으면 우비와 적절한 신발을 고려하세요.",
    rainPlan:
      "현재 상황과 출입 공지를 확인하세요. 예보는 동선의 개방이나 안전을 확인하지 않습니다.",
    rainItems: "필요에 따라 우비와 소지품 방수용품을 준비하세요.",
    heavyRainRisk:
      "기상 코드가 강한 비, 강한 어는 비 또는 매우 강한 소나기를 나타냅니다. 야외 계획을 재검토하세요.",
    uvOutfit: "모자, 선글라스와 자외선 보호를 고려하세요.",
    uvItems: "자외선 차단제와 적절한 눈 보호용품.",
    hotPlan: "더운 예보에는 무리하지 말고 필요할 때 쉬세요.",
    hotItems: "물을 준비하세요. 급수 시설은 확인되지 않았습니다.",
    coldOutfit: "서늘한 예보에는 적절한 겹옷을 입으세요.",
    coldItems: "필요하면 여벌 겉옷을 준비하세요.",
    windRisk: "모델상 강풍입니다. 노출된 활동을 재검토하세요.",
    windItems: "느슨한 물건을 고정하고 현지 안내를 따르세요.",
    fogRisk: "안개가 시야를 줄일 수 있습니다.",
    fogPlan: "시야가 나쁘면 출발 전 교통과 출입을 확인하세요.",
    clearPlan: "날씨 정보만으로 개방이나 동선 안전이 확인되지는 않습니다.",
    mildOutfit: "예보에 맞게 겹옷을 고르세요.",
    coolEvening: "귀가 시간의 예보도 확인하세요.",
  },
};

export const WEEKDAYS: Record<Locale, string[]> = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  vi: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  zh: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
  ko: ["일", "월", "화", "수", "목", "금", "토"],
};
