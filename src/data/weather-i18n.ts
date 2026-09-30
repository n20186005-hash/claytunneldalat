import type { Locale } from '../i18n';

/** WMO weather codes → label per language. Unknown codes fall back to the closest group. */
export const WMO: Record<number, Record<Locale, string>> = {
  0: { en: 'Clear sky', vi: 'Trời quang', zh: '晴朗', ko: '맑음' },
  1: { en: 'Mainly clear', vi: 'Trời ít mây', zh: '大致晴朗', ko: '대체로 맑음' },
  2: { en: 'Partly cloudy', vi: 'Có mây', zh: '局部多雲', ko: '구름 조금' },
  3: { en: 'Overcast', vi: 'U ám', zh: '陰天', ko: '흐림' },
  45: { en: 'Fog', vi: 'Sương mù', zh: '起霧', ko: '안개' },
  48: { en: 'Freezing fog', vi: 'Sương mù dày', zh: '濃霧', ko: '짙은 안개' },
  51: { en: 'Light drizzle', vi: 'Mưa nhỏ', zh: '細雨', ko: '약한 이슬비' },
  53: { en: 'Drizzle', vi: 'Mưa phùn', zh: '毛毛雨', ko: '이슬비' },
  55: { en: 'Heavy drizzle', vi: 'Mưa phùn dày', zh: '密集細雨', ko: '강한 이슬비' },
  61: { en: 'Light rain', vi: 'Mưa nhẹ', zh: '小雨', ko: '약한 비' },
  63: { en: 'Rain', vi: 'Mưa', zh: '下雨', ko: '비' },
  65: { en: 'Heavy rain', vi: 'Mưa to', zh: '大雨', ko: '강한 비' },
  71: { en: 'Light snow', vi: 'Tuyết nhẹ', zh: '小雪', ko: '약한 눈' },
  73: { en: 'Snow', vi: 'Tuyết', zh: '下雪', ko: '눈' },
  75: { en: 'Heavy snow', vi: 'Tuyết dày', zh: '大雪', ko: '강한 눈' },
  77: { en: 'Snow grains', vi: 'Tuyết hạt', zh: '米雪', ko: '싸락눈' },
  80: { en: 'Light showers', vi: 'Mưa rào nhẹ', zh: '短暫小雨', ko: '약한 소나기' },
  81: { en: 'Showers', vi: 'Mưa rào', zh: '陣雨', ko: '소나기' },
  82: { en: 'Violent showers', vi: 'Mưa rào lớn', zh: '強陣雨', ko: '강한 소나기' },
  85: { en: 'Light snow showers', vi: 'Mưa tuyết nhẹ', zh: '短暫小雪', ko: '약한 소나기 눈' },
  86: { en: 'Snow showers', vi: 'Mưa tuyết', zh: '陣雪', ko: '소나기 눈' },
  95: { en: 'Thunderstorm', vi: 'Giông bão', zh: '雷雨', ko: '천둥번개' },
  96: { en: 'Thunderstorm with hail', vi: 'Giông kèm mưa đá', zh: '雷雨伴冰雹', ko: '우박을 동반한 천둥번개' },
  99: { en: 'Severe thunderstorm', vi: 'Giông mạnh', zh: '強烈雷雨', ko: '강한 천둥번개' }
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
    stormRisk: 'Thunderstorm in the forecast for Da Lat today — plan indoor or sheltered stops and avoid exposed hillside sections during the storm.',
    stormPlan: 'Visit in the morning and keep the rest of the day flexible; the covered tunnel stretches are the safest place to wait out a shower.',
    rainOutfit: 'A light rain jacket and shoes with grip — the clay and unpaved path turns slick when wet.',
    rainPlan: 'Rain in Da Lat usually arrives in the afternoon, so a morning visit is the safer bet.',
    rainItems: 'Compact rain jacket, a dry bag for your camera or phone, and a small towel.',
    heavyRainRisk: 'Heavy rain expected: sections of the hillside path can become muddy and slippery.',
    uvOutfit: 'Sun hat and sunglasses — the highland sun is stronger than the temperature suggests.',
    uvItems: 'Sunscreen and lip balm with UV protection.',
    hotPlan: 'Walk the open stretches early, then use the shaded tunnel sections around midday.',
    hotItems: 'A bottle of water; there are few refill points along the path.',
    coldOutfit: 'Layers plus a windproof jacket — Da Lat mornings and evenings can drop near 10 °C.',
    coldItems: 'A warm layer for the ride back into town after sunset.',
    windRisk: 'Strong wind on the exposed hillside: secure hats and loose items.',
    windItems: 'Windproof outer layer.',
    fogRisk: 'Morning fog may hide the lake viewpoint — visibility improves later in the day.',
    fogPlan: 'If the lake view matters to you, delay the visit until the fog lifts.',
    clearPlan: 'Clear conditions: the morning light between 07:30 and 10:00 suits the clay colours best.',
    mildOutfit: 'Light clothing for the day plus one warm layer for the evening.',
    coolEvening: 'Temperatures drop quickly after sunset at 1,500 m — carry a layer even on warm days.'
  },
  vi: {
    stormRisk: 'Dự báo hôm nay ở Đà Lạt có giông — hãy ưu tiên các điểm có mái che và tránh các đoạn sườn đồi hở trong lúc có giông.',
    stormPlan: 'Đi buổi sáng và giữ phần còn lại của ngày linh hoạt; các đoạn hầm che là chỗ trú mưa an toàn nhất.',
    rainOutfit: 'Áo mưa mỏng và giày có độ bám — đường đất và đất sét rất trơn khi ướt.',
    rainPlan: 'Mưa ở Đà Lạt thường đến vào buổi chiều, nên đi buổi sáng là phương án an toàn hơn.',
    rainItems: 'Áo mưa gọn, túi chống nước cho máy ảnh/điện thoại và một chiếc khăn nhỏ.',
    heavyRainRisk: 'Dự báo mưa to: một số đoạn sườn đồi có thể lầy và trơn.',
    uvOutfit: 'Mũ và kính râm — nắng cao nguyên mạnh hơn cảm giác nhiệt độ.',
    uvItems: 'Kem chống nắng và son dưỡng có chống UV.',
    hotPlan: 'Đi các đoạn hở sớm, rồi tận dụng các đoạn hầm che quanh giữa trưa.',
    hotItems: 'Một chai nước; dọc đường ít có chỗ tiếp nước.',
    coldOutfit: 'Mặc nhiều lớp cùng áo khoác chắn gió — sáng và tối ở Đà Lạt có thể xuống gần 10 °C.',
    coldItems: 'Một lớp áo ấm cho chặng về thị xã sau hoàng hôn.',
    windRisk: 'Gió mạnh trên sườn đồi hở: hãy giữ chặt mũ và đồ vật dễ bay.',
    windItems: 'Áo khoác ngoài chắn gió.',
    fogRisk: 'Sương mù buổi sáng có thể che điểm nhìn ra hồ — tầm nhìn thường cải thiện sau đó.',
    fogPlan: 'Nếu bạn muốn ngắm hồ, hãy dời lịch đến khi sương tan.',
    clearPlan: 'Trời quang: ánh sáng buổi sáng từ 07:30 đến 10:00 làm màu đất lên đẹp nhất.',
    mildOutfit: 'Trang phục nhẹ ban ngày cộng thêm một lớp ấm cho buổi tối.',
    coolEvening: 'Nhiệt độ giảm nhanh sau hoàng hôn ở độ cao 1.500 m — hãy mang theo một lớp áo ngay cả ngày ấm.'
  },
  zh: {
    stormRisk: '今日大叻預報有雷雨 — 請以有遮蔽的景點為主，雷雨期間避開開闊的山坡路段。',
    stormPlan: '安排在上午參觀，其餘行程保持彈性；有頂隧道段是等待陣雨最安全的地方。',
    rainOutfit: '輕便雨衣與抓地力好的鞋 — 泥土路與未鋪裝路段遇水會變滑。',
    rainPlan: '大叻的雨通常在午後報到，上午前往是較穩妥的選擇。',
    rainItems: '輕便雨衣、相機／手機防水袋與一條小毛巾。',
    heavyRainRisk: '預報有大雨：山坡部分路段可能泥濘濕滑。',
    uvOutfit: '帽子與太陽眼鏡 — 高原紫外線比體感溫度顯示的更強。',
    uvItems: '防曬乳與具防曬係數的護唇膏。',
    hotPlan: '趁早走開闊路段，接近中午改走有遮蔭的隧道段。',
    hotItems: '一瓶水；步道沿線補水點很少。',
    coldOutfit: '多層次穿著加防風外套 — 大叻清晨與夜晚可降至 10 °C 左右。',
    coldItems: '日落後回程多帶一件保暖衣物。',
    windRisk: '開闊山坡風勢較強：請固定帽子與易飛的物品。',
    windItems: '防風外套。',
    fogRisk: '清晨濃霧可能遮蔽湖景展望點 — 稍晚能見度通常會好轉。',
    fogPlan: '若湖景是重點，建議等霧散後再前往。',
    clearPlan: '天氣晴朗：07:30–10:00 的早晨光線最能襯托泥土色澤。',
    mildOutfit: '白天輕薄衣物，再加一件保暖層供傍晚使用。',
    coolEvening: '海拔 1,500 公尺，日落後氣溫下降很快 — 即使白天暖和也請帶一件外套。'
  },
  ko: {
    stormRisk: '오늘 달랏에 천둥번개 예보가 있습니다 — 지붕 있는 구간 위주로 동선을 짜고, 번개가 칠 때는 트인 언덕 구간을 피하세요.',
    stormPlan: '오전에 방문하고 남은 일정은 유연하게 두세요. 소나기를 피하기에는 지붕 있는 터널 구간이 가장 안전합니다.',
    rainOutfit: '가벼운 우비와 접지력 좋은 신발 — 흙길과 비포장 구간은 젖으면 미끄럽습니다.',
    rainPlan: '달랏 비는 보통 오후에 오므로 오전 방문이 더 안전합니다.',
    rainItems: '가벼운 우비, 카메라·휴대전화 방수 파우치, 작은 수건.',
    heavyRainRisk: '강한 비 예보가 있습니다. 언덕 일부 구간이 진흙탕이 되고 미끄러울 수 있습니다.',
    uvOutfit: '모자와 선글라스 — 고원 지대 햇볕은 기온이 주는 인상보다 강합니다.',
    uvItems: '자외선 차단제와 UV 차단 립밤.',
    hotPlan: '트인 구간은 일찍 걷고, 한낮에는 그늘진 터널 구간을 활용하세요.',
    hotItems: '물 한 병. 산책로에 물을 채울 곳이 거의 없습니다.',
    coldOutfit: '여러 겹 옷과 방풍 재킷 — 달랏은 아침·저녁에 10°C 가까이 내려갑니다.',
    coldItems: '해가 진 뒤 시내로 돌아갈 때 입을 따뜻한 겉옷.',
    windRisk: '트인 언덕에 강한 바람이 붑니다. 모자와 가벼운 물건을 잘 고정하세요.',
    windItems: '방풍 겉옷.',
    fogRisk: '아침 안개가 호수 전망을 가릴 수 있습니다. 시간이 지나면 시야가 좋아집니다.',
    fogPlan: '호수 전망이 중요하다면 안개가 걷힌 뒤에 방문하세요.',
    clearPlan: '맑은 날씨입니다. 07:30~10:00의 오전 빛이 흙색을 가장 예쁘게 보여 줍니다.',
    mildOutfit: '낮에는 가벼운 옷, 저녁용으로 따뜻한 겉옷 한 벌.',
    coolEvening: '해발 1,500m라 해가 지면 기온이 빠르게 내려갑니다. 따뜻한 날에도 겉옷을 챙기세요.'
  }
};

export const WEEKDAYS: Record<Locale, string[]> = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  vi: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  zh: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  ko: ['일', '월', '화', '수', '목', '금', '토']
};
