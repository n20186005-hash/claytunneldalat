import { ATTRACTION as A } from '../data/site';
import type { GuideContent } from './types';

const dong = (v: number) => `${v.toLocaleString('en-US')} 越南盾`;

export const zh: GuideContent = {
  metaTitle: `大叻泥雕隧道（Đường Hầm Điêu Khắc）門票 ${dong(A.ticketAdult)}、開放時間與交通方式`,
  metaDescription: `${A.city}泥雕隧道（Clay Tunnel／${A.nameVi}）參觀指南：門票 ${dong(A.ticketAdult)}、每日 07:00–17:00 開放、從大叻市中心出發的交通方式、必看亮點與順遊泉林湖。Google 評價 ${A.rating}/5。`,
  heroKicker: `${A.city}大叻 · ${A.province}林同 · 越南`,
  heroTitle: A.nameVi,
  heroSub: `泥雕隧道 · 大叻`,
  heroLead: `位於${A.nearby1}上方松林丘陵的露天泥雕公園，全長約 ${A.lengthKm} 公里。一座座泥塑浮雕訴說大叻與西原高原的歷史、文化與地景，距離市中心以南約 ${A.distanceFromCentreKm} 公里，清靜又好拍。`,
  heroStats: [
    { value: `${A.lengthKm} 公里`, label: '泥雕步道' },
    { value: `${A.distanceFromCentreKm} 公里`, label: '距市中心' },
    { value: `★ ${A.rating}`, label: `${A.reviewCount.toLocaleString('en-US')} 則評價` }
  ],
  about: {
    kicker: '從泥土到地標',
    title: `關於${A.nameVi}`,
    paragraphs: [
      `${A.nameVi}（地圖上多標為 ${A.legalName}，英文稱 ${A.nameEn} 或 Sculpture Tunnel）是越南${A.province}省${A.city}市${A.ward}的露天泥雕公園。一條約 ${A.lengthKm} 公里的蜿蜒步道沿途排滿大型泥塑浮雕，訴說大叻與西原高原的歷史、文化與自然景觀。`,
      `園區坐落在${A.nearby1}上方的松林丘陵，距市中心以南約 ${A.distanceFromCentreKm} 公里。多數旅客會把它與${A.nearby1}、${A.nearby2}安排在同一個半日行程，因此它常出現在大叻一日遊路線中。`,
      `這裡是當地工藝家族自行打造的景點，並非市政公園：作品全由手工塑形與維護，與其說是觀光設施，不如說是一座仍在持續創作的工藝場。`
    ],
    breadcrumb: `${A.nameVi} → ${A.city} → ${A.province} → ${A.country}`
  },
  highlights: {
    kicker: '看什麼',
    title: '泥雕步道亮點',
    intro: '路線是單一動線，非常好走。以下是旅客印象最深的幾個重點。',
    items: [
      {
        title: '泥塑浮雕群',
        text: `步道兩側有數十座大型浮雕與立體塑像：西原村落生活場景、各民族的文化圖騰，以及大叻地標的縮小模型，塑形風格刻意保留手作質感。`
      },
      {
        title: '隧道段',
        text: `部分路段穿過鑿入山壁、有頂蓋的隧道狀通道，這正是「${A.nameVi}」（泥雕隧道）名稱的由來。晴天時這些路段最陰涼，也最多人拍照。`
      },
      {
        title: '湖景展望點',
        text: `接近步道尾端時樹冠會向${A.nearby1}方向敞開，是拍攝開闊地景最好的位置，也適合坐下休息再折返。`
      },
      {
        title: '拍照熱點',
        text: `由於幾乎每座雕像都接近真人尺度，這裡成為大叻最多人拍照的景點之一；早晨的柔光最能襯出泥土的色澤。`
      }
    ]
  },
  route: {
    kicker: '建議動線 · 45–90 分鐘',
    title: `如何參觀${A.nameEn}`,
    intro: '園區不大：買票、沿著唯一的泥雕步道前進、在湖景展望點休息，再原路折返。',
    steps: [
      {
        no: '01',
        label: '交通',
        title: '從大叻市中心出發',
        text: `往南約 ${A.distanceFromCentreKm} 公里，沿著通往${A.nearby1}的道路前進。計程車或機車約 25–35 分鐘，途中會經過${A.nearby2}。`
      },
      {
        no: '02',
        label: '入場',
        title: '在入口購票',
        text: `身高超過 1.3 公尺者門票 ${dong(A.ticketAdult)}，身高 1.3 公尺以下兒童 ${dong(A.ticketChild)}。票價僅供參考，請於現場再次確認。`
      },
      {
        no: '03',
        label: '步行',
        title: '沿泥雕步道前進',
        text: `一條蜿蜒步道、數十座浮雕，以及幾段有頂蓋的隧道。視停留拍照的次數，約需 45–90 分鐘。`
      },
      {
        no: '04',
        label: '順遊',
        title: '串起周邊景點',
        text: `可接著前往${A.nearby1}與${A.nearby2}，兩者都在同一條路上，車程僅數分鐘。`
      }
    ]
  },
  nearby: {
    kicker: '周邊地標',
    title: `${A.nameEn}一帶`,
    text: `泥雕隧道位於大叻南側景點群之中。車程數分鐘內可達${A.nearby1}——被松林環繞的寧靜湖泊，以及位於山坡上、俯瞰湖面的${A.nearby2}，可搭乘大叻纜車前往。不少半日行程會把三處串在一起。`
  },
  history: {
    kicker: '從興趣到地標',
    title: `${A.nameVi}的歷史`,
    paragraphs: [
      `${A.nameVi}起源於 2000 年代初期，是${A.nearby1}附近一個在地工藝家族的泥塑計畫。原本只是個人的手作興趣，逐漸發展成長達一公里的露天展場，用泥土說完大叻與西原高原的故事——從城市開埠、法式別墅時期、高原民族文化到自然地景，全以泥塑呈現。`,
      `這座景點體現了當地的手作傳統，也成為大叻最具特色的家族自建景點之一：歷史、傳說與地景需要用雙腳慢慢讀，一座浮雕接一座。新作品仍持續增加，回訪的旅客常會發現與上次不同之處。`
    ],
    note: '年代與沿革整理自旅遊資料；經營團隊仍持續擴建園區。'
  },
  visit: {
    kicker: '行前規劃',
    title: '實用資訊',
    rows: [
      { label: '地址', value: `${A.ward}，${A.city}市，${A.province}省 ${A.postalCode}，${A.country}` },
      { label: 'Plus Code', value: A.plusCode },
      { label: '電話', value: A.phoneDisplay },
      { label: '開放時間', value: '每日 07:00 – 17:00（參考值，出發前請再次確認）。' },
      { label: '門票', value: `成人（身高 1.3 公尺以上）${dong(A.ticketAdult)} · 兒童（身高 1.3 公尺以下）${dong(A.ticketChild)}。請以現場公告為準。` },
      { label: '建議停留', value: '走完整條步道約 45–90 分鐘。' },
      { label: '適合', value: '拍照、緩步散步、認識在地工藝與湖景。' }
    ]
  },
  facilities: {
    kicker: '園區設施',
    title: '旅客設施',
    intro: '園區設施相當簡樸，並會隨季節調整。以下是入口區與步道沿線常見的服務類型。',
    items: [
      { title: '停車', text: '入口區可停放機車與汽車；遊覽車通常在門口上下客。' },
      { title: '洗手間', text: '位於售票區附近；建議自備衛生紙與乾洗手。' },
      { title: '飲料與小食', text: '入口周邊有小型攤位；步道上請自備飲水。' },
      { title: '遮蔭與休息點', text: '隧道段與沿途座椅可在高原豔陽下稍作休息。' },
      { title: '泥塑工坊與紀念品', text: '泥塑是本園主題，入口附近通常會展示小型陶土作品與在地紀念品。' },
      { title: '無障礙', text: '路線多為緩坡，但仍有階梯與未鋪裝路段；雨後建議穿抓地力好的鞋子。' }
    ]
  },
  seasonal: {
    kicker: '旱季與雨季',
    title: '何時前往',
    intro: `大叻的旱季與雨季分明。兩季都適合造訪，差別只在於時段安排。`,
    note: '氣候描述依據大叻／西原高原的一般季節規律；出發前請查看當日預報。',
    columns: { season: '季節', weather: '常見天氣', tip: '行程建議' },
    rows: [
      {
        season: '11 月 – 4 月（旱季）',
        weather: '早晨涼爽、午間晴朗、少雨；旅遊旺季。',
        tip: '約 08:00–10:00 抵達，光線柔和、人潮較少；清晨記得帶薄外套。'
      },
      {
        season: '5 月 – 10 月（雨季）',
        weather: '午後常有陣雨，早晨多霧，山色更綠。',
        tip: '安排在上午、避開慣常的午後降雨；隧道段可讓部分路線不受影響。'
      },
      {
        season: '12 月 – 1 月（連假高峰）',
        weather: '全年最涼的月份，夜間可降至 10 °C 左右。',
        tip: '清晨前往並加一件保暖衣物；這是一年中入口最擁擠的時期。'
      },
      {
        season: '全年',
        weather: '海拔約 1,500 公尺的高原氣候：白天溫和、傍晚轉涼。',
        tip: '在開闊的山坡路段，輕便雨衣比雨傘實用。'
      }
    ]
  },
  itineraries: {
    kicker: '現成行程',
    title: '建議行程',
    intro: '三種把泥雕隧道排進大叻一天的方式。',
    items: [
      {
        title: '半日：隧道 + 湖（3–4 小時）',
        text: `上午往南前往${A.nameVi}（園內 45–90 分鐘），接著到${A.nearby1}午餐，下午再到${A.nearby2}或搭纜車。`
      },
      {
        title: '全日：大叻南線（7–8 小時）',
        text: `泥雕隧道 → ${A.nearby1} → ${A.nearby2}與纜車 → 回程順遊花園或咖啡館。`
      },
      {
        title: '親子與攝影',
        text: `提早出發以取得柔和光線與舒適氣溫，預留 90 分鐘讓孩子在每座浮雕前停留；先走靠近入口、地勢較平緩的路段。`
      }
    ]
  },
  responsibility: {
    kicker: '好好參觀',
    title: '負責任的旅遊',
    intro: '作品全為手工製作並持續修復，周邊則是經營中的松林。',
    items: [
      { title: '請勿觸摸或攀爬泥塑', text: '作品相當脆弱，為了拍照攀爬會造成肉眼可見的損壞，且只能以手工修補。' },
      { title: '走在步道上', text: '山坡是易受侵蝕的松林地，抄捷徑會在雨後擴大蝕溝。' },
      { title: '垃圾自行帶走', text: '沿途垃圾桶有限，請把自己帶進來的東西帶走，尤其是寶特瓶與紙巾。' },
      { title: '降低音量', text: '園區緊鄰禪寺與山腰住宅區，請保持安靜。' },
      { title: '拍人之前先詢問', text: '工作人員、工藝師與其他旅客不是道具，開口問一聲就足夠。' }
    ]
  },
  reviews: {
    kicker: '旅客評分與評價',
    title: '旅客怎麼說',
    cta: '在 Google 地圖查看全部評價 ↗',
    note: `評分與評價數同步自 Google 地圖使用者評價（2026 年 9 月），僅供參考。`
  },
  sources: {
    kicker: '資料來源',
    title: '以事實為本',
    items: [
      {
        label: 'Google 地圖',
        text: `地點、Plus Code ${A.plusCode}、座標 ${A.latitude}, ${A.longitude} 與上述旅客評分。`
      },
      {
        label: '越南國家旅遊局',
        text: '官方國家旅遊入口網站，用於地區旅遊背景資料：vietnam.travel。'
      },
      {
        label: '旅遊資料',
        text: '開放時間與門票價格為常見公告值，請於參觀當天以現場公告為準。'
      }
    ]
  },
  faq: {
    kicker: '出發前',
    title: '常見問題',
    items: [
      {
        q: '大叻泥雕隧道門票多少錢？',
        a: `身高超過 1.3 公尺者每人 ${dong(A.ticketAdult)}，身高 1.3 公尺以下兒童 ${dong(A.ticketChild)}。票價僅供參考，可能隨季節調整，請於參觀當天在入口確認。`
      },
      {
        q: '開放時間是？',
        a: '每日開放，通常為 07:00 至 17:00。最晚入場多在午後；10:00 前抵達光線最柔和、人潮也最少。'
      },
      {
        q: '泥雕隧道在哪裡？',
        a: `${A.ward}，${A.city}市，${A.province}省 ${A.postalCode}，${A.country}，位於${A.nearby1}上方的丘陵，距市中心以南約 ${A.distanceFromCentreKm} 公里。Plus Code：${A.plusCode}。`
      },
      {
        q: '從大叻市中心怎麼去？',
        a: `搭計程車或叫車約 25–35 分鐘，沿往${A.nearby1}的道路南下，途中會經過${A.nearby2}。租機車最具彈性，也有不少一日遊行程含此站。`
      },
      {
        q: '泥雕隧道到底是什麼？',
        a: `它是一座約 ${A.lengthKm} 公里長的露天泥塑公園：蜿蜒步道兩側排列大型泥塑浮雕，主題涵蓋大叻與西原高原的歷史、文化與地景，並包含鑿入山壁、有頂蓋的隧道段。`
      },
      {
        q: '參觀需要多久？',
        a: '多數旅客停留 45–90 分鐘。喜歡拍照或親子在每座浮雕前停留者，往往會待到兩小時。'
      },
      {
        q: '雨季值得去嗎？',
        a: `值得，只要挑對時段：大叻的降雨多出現在午後，上午前往通常仍是乾的，隧道段也能遮住部分路線。雨後路面濕滑，請穿抓地力好的鞋。`
      },
      {
        q: '可以拍照嗎？',
        a: '可以，拍照正是許多人前來的主因。離峰時段可使用腳架；請勿為了取景攀爬雕像。'
      },
      {
        q: '適合兒童與長輩嗎？',
        a: '路線多為緩坡步行，但有階梯與未鋪裝路段。帶幼兒的家庭從容些通常沒問題；狹窄路段用背帶會比推車方便。'
      },
      {
        q: '有停車位和洗手間嗎？',
        a: '入口區可停機車與汽車，售票處附近有洗手間。建議帶些現金購票、買水與小額消費。'
      },
      {
        q: '附近還能去哪裡？',
        a: `${A.nearby1}與${A.nearby2}都在同一條路上、車程僅數分鐘，還可搭纜車往來禪寺一帶與羅賓山。`
      }
    ]
  },
  explore: {
    kicker: '延伸閱讀',
    title: '把細節弄清楚',
    intro: '三篇針對旅客最常問問題的主題指南。'
  },
  footerTagline: `${A.nameVi}（${A.nameEn}）獨立參觀指南，位於${A.country}${A.province}省${A.city}市。本站並非該景區官方網站。`,
  photoAlt: {
    hero: `${A.nameVi} — 大叻泥雕隧道入口步道`,
    tunnel: `${A.nameVi}（${A.nameEn}）內的泥塑作品`,
    lake: `從${A.nameVi}附近丘陵眺望${A.nearby1}`,
    tunnel2: `${A.city}${A.nameVi}的有頂隧道段`,
    lake2: `${A.city}${A.nearby1}周邊的松林與水面`
  },
  photoCredit: '圖片：Wikimedia Commons（Panoramio）· CC BY-SA。',
  disclaimer: '開放時間與門票價格為參考值並可能變動，出發前請以現場公告為準。'
};
