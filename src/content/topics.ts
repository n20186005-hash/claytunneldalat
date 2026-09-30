import { ATTRACTION as A } from '../data/site';
import type { Locale } from '../i18n';
import type { TopicContent } from './types';

export type TopicKey = 'ticket' | 'transport' | 'highlights';

const dong = (v: number) => `${v.toLocaleString('en-US')} VND`;
const dongVi = (v: number) => `${v.toLocaleString('vi-VN')} VNĐ`;

export const topics: Record<Locale, Record<TopicKey, TopicContent>> = {
  en: {
    ticket: {
      metaTitle: `Clay Tunnel Da Lat Entrance Fee ${dong(A.ticketAdult)} — Tickets & Opening Hours`,
      metaDescription: `Clay Tunnel (${A.nameVi}) entrance fee: ${dong(A.ticketAdult)} for visitors over 1.3 m, ${dong(A.ticketChild)} for children under 1.3 m. Opening hours 07:00–17:00 daily, what the ticket includes and how to pay.`,
      h1: `Clay Tunnel entrance fee & opening hours`,
      lead: `Everything visitors ask before buying a ticket: the current indicative price, the height rule at the gate, opening hours, how long to allow and what to bring.`,
      card: 'Entrance fee, ticket rules and opening hours.',
      sections: [
        {
          title: 'How much is the entrance fee?',
          paragraphs: [
            `The entrance fee is ${dong(A.ticketAdult)} per person for visitors over 1.3 m tall and ${dong(A.ticketChild)} for children under 1.3 m. Children are measured at the gate, so the rule is applied on the spot.`,
            `Prices at family-run attractions change with the season and with new installations, so treat the figures above as indicative and confirm them at the ticket office on the day of your visit.`
          ],
          bullets: [
            `Adult / over 1.3 m: ${dong(A.ticketAdult)}`,
            `Child / under 1.3 m: ${dong(A.ticketChild)}`,
            'Cash in Vietnamese đồng is the safest way to pay',
            'Keep the ticket with you: it may be checked on the path'
          ]
        },
        {
          title: 'Opening hours and best time to arrive',
          paragraphs: [
            'The site is open daily, typically from 07:00 to 17:00. Last entry is usually in the mid-afternoon, so arriving before 10:00 gives you both softer light for photographs and a quieter path.',
            'Most visitors spend 45–90 minutes inside. Photographers and families who stop at every tableau often stay closer to two hours.'
          ]
        },
        {
          title: 'What the ticket covers',
          paragraphs: [
            `One ticket covers the whole sculpture path: the open-air clay tableaux, the covered tunnel sections and the viewpoint towards ${A.nearby1}. There is no separate charge for photography.`,
            'Drinks, snacks, souvenirs and any optional activities at the entrance area are paid separately.'
          ]
        }
      ],
      faq: [
        {
          q: 'How much is the Clay Tunnel Da Lat entrance fee?',
          a: `${dong(A.ticketAdult)} per person over 1.3 m tall and ${dong(A.ticketChild)} for children under 1.3 m. Confirm the current price at the gate on the day.`
        },
        { q: 'Is the ticket free for small children?', a: `No: children under 1.3 m pay a reduced ticket of ${dong(A.ticketChild)}. Height is checked at the entrance.` },
        { q: 'Can I pay by card?', a: 'Assume cash only. Bring Vietnamese đồng in small notes for tickets, water and small purchases.' },
        { q: 'What are the opening hours?', a: 'Daily 07:00–17:00, indicative. Last entry is usually in the mid-afternoon.' },
        { q: 'Does the ticket include photography?', a: 'Yes, photography along the path is included in the entrance fee.' }
      ],
      updated: 'Prices and hours verified against travel references in September 2026; confirm at the gate.'
    },
    transport: {
      metaTitle: `How to Get to the Clay Tunnel Da Lat — Taxi, Motorbike & Directions`,
      metaDescription: `How to reach ${A.nameVi} (Clay Tunnel) from Da Lat centre: about ${A.distanceFromCentreKm} km south via the road to ${A.nearby1}, 25–35 minutes by taxi or motorbike, parking, plus code ${A.plusCode} and map links.`,
      h1: `How to get to the Clay Tunnel (${A.nameVi})`,
      lead: `The sculpture tunnel sits about ${A.distanceFromCentreKm} km south of Da Lat centre on the road that continues to ${A.nearby1}. Here is every practical way to get there.`,
      card: 'Routes, travel time, parking and map links.',
      sections: [
        {
          title: 'From Da Lat city centre',
          paragraphs: [
            `Head south out of town on the road towards ${A.nearby1}; the site is on the wooded hillside before the lake, about ${A.distanceFromCentreKm} km from Xuan Huong Lake. A taxi or ride-hailing car takes roughly 25–35 minutes depending on traffic.`,
            `The same road passes ${A.nearby2} and the cable car station, so the stop fits naturally into a southern Da Lat loop.`
          ],
          bullets: [
            'Taxi / ride-hailing car: ~25–35 min, the simplest option for groups',
            'Rented motorbike: ~25 min, the most flexible option',
            ' organised day tour: often bundled with Tuyen Lam Lake and Truc Lam Monastery',
            'Public bus: not practical — no direct service to the gate'
          ]
        },
        {
          title: 'Finding the entrance',
          paragraphs: [
            `Use the Plus Code ${A.plusCode} or the Google Maps share link; both take drivers to the same gate. The entrance area has space for motorbikes and cars, and tour buses drop off at the gate.`,
            `From the gate the visit is a single linear path, so you cannot get lost: follow the clay sculptures and loop back.`
          ]
        },
        {
          title: 'Combining it with nearby stops',
          paragraphs: [
            `${A.nearby1} and ${A.nearby2} are a few minutes further along the same road, and the ${A.city} cable car links the monastery area with Robin Hill. A half day is enough for all three.`
          ]
        }
      ],
      faq: [
        {
          q: 'How far is the Clay Tunnel from Da Lat centre?',
          a: `About ${A.distanceFromCentreKm} km south of the centre, on the road to ${A.nearby1}. Allow 25–35 minutes by car.`
        },
        { q: 'Is there a direct bus?', a: 'No practical public-bus service reaches the gate; use a taxi, ride-hailing car, motorbike or a tour.' },
        { q: 'Is there parking at the entrance?', a: 'Yes, there is space for motorbikes and cars at the entrance area.' },
        { q: 'Can I walk from Tuyen Lam Lake?', a: 'It is a hot, exposed roadside walk; most visitors take a vehicle for the short hop.' },
        { q: 'What is the Plus Code?', a: `${A.plusCode} — paste it into Google Maps to navigate straight to the gate.` }
      ],
      updated: 'Distances and travel times are indicative and depend on traffic.'
    },
    highlights: {
      metaTitle: `Clay Tunnel Da Lat Highlights — What to See on the Sculpture Path`,
      metaDescription: `What to see at ${A.nameVi}: the clay tableaux of Da Lat and the Central Highlands, the covered tunnel sections, the viewpoint over ${A.nearby1}, the best photo spots and how long the walk takes.`,
      h1: `Highlights of the Clay Tunnel sculpture path`,
      lead: `A single winding path of about ${A.lengthKm} km, dozens of clay tableaux and a hillside viewpoint. This is what to look out for, in the order you will meet it.`,
      card: 'What to see, in order, and where to photograph.',
      sections: [
        {
          title: 'The clay tableaux',
          paragraphs: [
            `The path is lined with large clay reliefs and free-standing figures: highland village scenes, ethnic-cultural motifs and miniature versions of ${A.city} landmarks such as its old railway station, all modelled by hand by a local artisan family.`,
            'Because the works are built close to human scale, the park reads as a walk-through story rather than a gallery — plan to stop often.'
          ]
        },
        {
          title: 'The covered tunnel sections',
          paragraphs: [
            `Several stretches cut into the hillside are roofed, giving the attraction its name ${A.nameVi} ("sculpture tunnel"). They are the coolest parts of the route and the most photographed on a bright day.`
          ]
        },
        {
          title: 'The lake viewpoint and photo spots',
          paragraphs: [
            `Near the far end the pines open towards ${A.nearby1}, which is the best place for a wide landscape shot. Morning light suits the clay colours best; the middle of the day is harsh and the path is exposed.`
          ],
          bullets: [
            'Best light: 07:30–10:00',
            'Allow 45–90 minutes for the full path',
            'Do not climb the sculptures — they are fragile clay',
            'A compact rain jacket is more useful than an umbrella'
          ]
        }
      ],
      faq: [
        { q: 'How long is the sculpture path?', a: `About ${A.lengthKm} km, walked one way and then back along the same route.` },
        { q: 'How long does it take to see everything?', a: '45–90 minutes, or up to two hours if you stop for photographs at every tableau.' },
        { q: 'Is photography allowed?', a: 'Yes, and it is the main draw. Please do not climb the works.' },
        { q: 'Is it suitable in the rain?', a: `Partly: the covered tunnel stretches help, and ${A.city}'s rain usually arrives in the afternoon, so a morning visit often stays dry.` },
        { q: 'Is it good for children?', a: 'Yes — the figures are at child height and the walk is gentle, with some steps and unpaved sections.' }
      ],
      updated: 'Highlights reflect the works on display in recent seasons; new pieces are added over time.'
    }
  },

  vi: {
    ticket: {
      metaTitle: `Giá vé Đường Hầm Điêu Khắc Đà Lạt ${dongVi(A.ticketAdult)} — Giờ mở cửa & lưu ý`,
      metaDescription: `Giá vé ${A.nameVi} (Clay Tunnel): ${dongVi(A.ticketAdult)} cho khách cao trên 1,3 m, ${dongVi(A.ticketChild)} cho trẻ dưới 1,3 m. Mở cửa 07:00–17:00 hằng ngày, vé gồm những gì và cách thanh toán.`,
      h1: `Giá vé và giờ mở cửa ${A.nameVi}`,
      lead: `Tất cả những gì du khách hỏi trước khi mua vé: mức giá tham khảo hiện tại, quy định chiều cao tại cổng, giờ mở cửa, thời gian cần thiết và nên mang theo gì.`,
      card: 'Giá vé, quy định vé và giờ mở cửa.',
      sections: [
        {
          title: 'Giá vé vào cửa là bao nhiêu?',
          paragraphs: [
            `Giá vé vào cửa là ${dongVi(A.ticketAdult)} mỗi người cao trên 1,3 m và ${dongVi(A.ticketChild)} cho trẻ em dưới 1,3 m. Chiều cao được đo ngay tại cổng, nên quy định được áp dụng tại chỗ.`,
            `Giá ở các điểm do gia đình tự vận hành có thể thay đổi theo mùa và theo hạng mục mới, vì vậy hãy coi các con số trên là tham khảo và xác nhận lại tại quầy vé trong ngày tham quan.`
          ],
          bullets: [
            `Người lớn / trên 1,3 m: ${dongVi(A.ticketAdult)}`,
            `Trẻ em / dưới 1,3 m: ${dongVi(A.ticketChild)}`,
            'Tiền mặt Việt Nam đồng là cách thanh toán chắc chắn nhất',
            'Giữ vé bên mình: có thể được kiểm tra dọc đường'
          ]
        },
        {
          title: 'Giờ mở cửa và nên đến lúc nào',
          paragraphs: [
            'Khu này mở cửa hằng ngày, thường từ 07:00 đến 17:00. Lượt vào muộn nhất thường vào giữa buổi chiều, nên đến trước 10:00 bạn sẽ có cả ánh sáng đẹp để chụp ảnh lẫn đường vắng hơn.',
            'Đa số du khách ở lại 45–90 phút. Người thích chụp ảnh và gia đình dừng ở mỗi phù điêu thường ở gần hai tiếng.'
          ]
        },
        {
          title: 'Vé bao gồm những gì',
          paragraphs: [
            `Một vé cho toàn bộ đường tượng: các phù điêu đất sét ngoài trời, các đoạn hầm che và điểm nhìn ra ${A.nearby1Vi}. Chụp ảnh không thu phí riêng.`,
            'Nước uống, đồ ăn nhẹ, quà lưu niệm và các hoạt động tùy chọn ở khu cổng thanh toán riêng.'
          ]
        }
      ],
      faq: [
        {
          q: 'Giá vé vào Đường Hầm Điêu Khắc Đà Lạt là bao nhiêu?',
          a: `${dongVi(A.ticketAdult)} mỗi người cao trên 1,3 m và ${dongVi(A.ticketChild)} cho trẻ em dưới 1,3 m. Xác nhận lại tại cổng trong ngày đi.`
        },
        { q: 'Trẻ nhỏ có được miễn phí không?', a: `Không: trẻ dưới 1,3 m mua vé giảm ${dongVi(A.ticketChild)}. Chiều cao được kiểm tra tại cổng.` },
        { q: 'Có thanh toán bằng thẻ không?', a: 'Hãy chuẩn bị tiền mặt. Mang theo Việt Nam đồng mệnh giá nhỏ để mua vé, nước và các khoản nhỏ.' },
        { q: 'Giờ mở cửa như thế nào?', a: 'Hằng ngày 07:00–17:00 (tham khảo). Lượt vào muộn nhất thường vào giữa buổi chiều.' },
        { q: 'Vé đã bao gồm chụp ảnh chưa?', a: 'Rồi, chụp ảnh dọc đường đã nằm trong giá vé vào cửa.' }
      ],
      updated: 'Giá và giờ được đối chiếu với các tài liệu du lịch tháng 9 năm 2026; vui lòng xác nhận tại cổng.'
    },
    transport: {
      metaTitle: `Cách đi Đường Hầm Điêu Khắc Đà Lạt — Taxi, xe máy và chỉ đường`,
      metaDescription: `Cách đến ${A.nameVi} từ trung tâm Đà Lạt: khoảng ${A.distanceFromCentreKm} km về phía nam theo đường xuống ${A.nearby1Vi}, 25–35 phút bằng taxi hoặc xe máy, chỗ đỗ xe, Plus Code ${A.plusCode} và link bản đồ.`,
      h1: `Cách đi đến ${A.nameVi}`,
      lead: `Đường hầm nằm cách trung tâm Đà Lạt khoảng ${A.distanceFromCentreKm} km về phía nam, trên trục đường tiếp tục đi xuống ${A.nearby1Vi}. Dưới đây là mọi cách đi thực tế.`,
      card: 'Lộ trình, thời gian, chỗ đỗ xe và link bản đồ.',
      sections: [
        {
          title: 'Từ trung tâm thành phố Đà Lạt',
          paragraphs: [
            `Đi về phía nam theo đường xuống ${A.nearby1Vi}; khu này nằm trên sườn đồi có rừng thông trước khi tới hồ, cách Hồ Xuân Hương khoảng ${A.distanceFromCentreKm} km. Taxi hoặc xe công nghệ mất khoảng 25–35 phút tùy tình hình giao thông.`,
            `Cùng trục đường này đi qua ${A.nearby2Vi} và ga cáp treo, nên điểm dừng này rất tự nhiên để ghép vào vòng phía nam ${A.cityVi}.`
          ],
          bullets: [
            'Taxi / xe công nghệ: ~25–35 phút, đơn giản nhất cho nhóm đông',
            'Xe máy thuê: ~25 phút, linh hoạt nhất',
            'Tour trong ngày: thường đi kèm Hồ Tuyền Lâm và Thiền Viện Trúc Lâm',
            'Xe buýt công cộng: không thực tế — không có tuyến tới tận cổng'
          ]
        },
        {
          title: 'Tìm cổng vào',
          paragraphs: [
            `Dùng Plus Code ${A.plusCode} hoặc link chia sẻ Google Maps; cả hai đều dẫn tài xế tới cùng một cổng. Khu cổng có chỗ đỗ xe máy và ô tô, xe du lịch trả khách ngay cổng.`,
            `Từ cổng, tuyến tham quan là một đường duy nhất nên bạn khó có thể lạc: đi theo các tác phẩm đất sét rồi quay lại.`
          ]
        },
        {
          title: 'Kết hợp với các điểm lân cận',
          paragraphs: [
            `${A.nearby1Vi} và ${A.nearby2Vi} chỉ cách vài phút trên cùng trục đường, và cáp treo nối khu thiền viện với đồi Robin. Nửa ngày là đủ cho cả ba điểm.`
          ]
        }
      ],
      faq: [
        {
          q: 'Đường Hầm Điêu Khắc cách trung tâm Đà Lạt bao xa?',
          a: `Khoảng ${A.distanceFromCentreKm} km về phía nam, trên đường xuống ${A.nearby1Vi}. Dành 25–35 phút nếu đi ô tô.`
        },
        { q: 'Có xe buýt tới tận nơi không?', a: 'Không có tuyến xe buýt công cộng thực tế nào tới cổng; hãy dùng taxi, xe công nghệ, xe máy hoặc tour.' },
        { q: 'Có chỗ đỗ xe ở cổng không?', a: 'Có, khu vực cổng có chỗ đỗ xe máy và ô tô.' },
        { q: 'Có thể đi bộ từ Hồ Tuyền Lâm không?', a: 'Đường đi nắng và hở; đa số du khách dùng xe cho quãng ngắn này.' },
        { q: 'Plus Code là gì?', a: `${A.plusCode} — dán vào Google Maps để đi thẳng tới cổng.` }
      ],
      updated: 'Khoảng cách và thời gian chỉ mang tính tham khảo, phụ thuộc vào tình hình giao thông.'
    },
    highlights: {
      metaTitle: `Đường Hầm Điêu Khắc có gì xem — Các điểm nổi bật trên đường tượng`,
      metaDescription: `Xem gì tại ${A.nameVi}: các phù điêu đất sét về Đà Lạt và Tây Nguyên, đoạn hầm che, điểm nhìn xuống ${A.nearby1Vi}, góc chụp ảnh đẹp và thời gian đi bộ cần thiết.`,
      h1: `Những điểm nổi bật trên đường tượng ${A.nameVi}`,
      lead: `Một đường uốn lượn dài khoảng ${A.lengthKm} km, hàng chục phù điêu đất sét và một điểm nhìn trên sườn đồi. Dưới đây là những gì nên chú ý, theo thứ tự bạn sẽ gặp.`,
      card: 'Xem gì, theo thứ tự, và chỗ nào đẹp để chụp.',
      sections: [
        {
          title: 'Các phù điêu đất sét',
          paragraphs: [
            `Dọc đường là những phù điêu lớn và tượng khối: cảnh bản làng Tây Nguyên, họa tiết văn hóa dân tộc và mô hình thu nhỏ của các địa danh ${A.cityVi} như nhà ga cũ, tất cả do một gia đình nghệ nhân địa phương nặn bằng tay.`,
            'Vì các tác phẩm được làm gần bằng kích thước người, khu này giống một câu chuyện đi bộ hơn là một phòng trưng bày — hãy sẵn sàng dừng lại nhiều lần.'
          ]
        },
        {
          title: 'Những đoạn hầm che',
          paragraphs: [
            `Vài đoạn được khoét vào sườn đồi và có mái che, chính vì thế có tên ${A.nameVi}. Đây là những đoạn mát nhất và được chụp ảnh nhiều nhất vào ngày nắng.`
          ]
        },
        {
          title: 'Điểm nhìn ra hồ và góc chụp ảnh',
          paragraphs: [
            `Ở phía cuối, tán thông mở ra hướng ${A.nearby1Vi}, là chỗ đẹp nhất để chụp toàn cảnh. Ánh sáng buổi sáng hợp với màu đất nhất; giữa trưa nắng gắt và đường thì hở.`
          ],
          bullets: [
            'Ánh sáng đẹp: 07:30–10:00',
            'Dành 45–90 phút cho toàn bộ đường đi',
            'Không trèo lên tượng — đất sét rất dễ vỡ',
            'Áo mưa gọn hữu dụng hơn ô'
          ]
        }
      ],
      faq: [
        { q: 'Đường tượng dài bao nhiêu?', a: `Khoảng ${A.lengthKm} km, đi một lượt rồi quay lại theo cùng đường.` },
        { q: 'Xem hết mất bao lâu?', a: '45–90 phút, hoặc tới hai tiếng nếu bạn dừng chụp ảnh ở mỗi phù điêu.' },
        { q: 'Có được chụp ảnh không?', a: 'Được, đó chính là điểm hấp dẫn chính. Xin đừng trèo lên tác phẩm.' },
        { q: 'Trời mưa có đi được không?', a: `Đi được phần nào: các đoạn hầm che giúp ích, và mưa ở ${A.cityVi} thường đến vào buổi chiều nên đi buổi sáng thường vẫn khô.` },
        { q: 'Có phù hợp cho trẻ em không?', a: 'Có — các bức tượng ở tầm với của trẻ và đường đi nhẹ, chỉ có vài bậc thang và đoạn đường đất.' }
      ],
      updated: 'Các điểm nổi bật phản ánh những tác phẩm đang trưng bày trong các mùa gần đây; tác phẩm mới được bổ sung theo thời gian.'
    }
  },

  zh: {
    ticket: {
      metaTitle: `大叻泥雕隧道門票 ${dong(A.ticketAdult)}：票價與開放時間`,
      metaDescription: `${A.nameVi}（泥雕隧道／Clay Tunnel）門票：身高 1.3 公尺以上 ${dong(A.ticketAdult)}，1.3 公尺以下兒童 ${dong(A.ticketChild)}。每日 07:00–17:00 開放，含票內容與付款方式。`,
      h1: `泥雕隧道門票與開放時間`,
      lead: `購票前旅客最常問的事：目前參考票價、入口的身高規定、開放時間、建議停留時間與攜帶物品。`,
      card: '門票價格、購票規定與開放時間。',
      sections: [
        {
          title: '門票多少錢？',
          paragraphs: [
            `身高超過 1.3 公尺者門票 ${dong(A.ticketAdult)}，身高 1.3 公尺以下兒童 ${dong(A.ticketChild)}。身高在入口現場測量，因此規定當場適用。`,
            `家族經營的景點會依季節與新增設施調整票價，請將上述金額視為參考值，並於參觀當天在售票處再次確認。`
          ],
          bullets: [
            `成人／身高 1.3 公尺以上：${dong(A.ticketAdult)}`,
            `兒童／身高 1.3 公尺以下：${dong(A.ticketChild)}`,
            '以越南盾現金付款最穩妥',
            '請隨身保留票根：步道上可能會驗票'
          ]
        },
        {
          title: '開放時間與最佳抵達時段',
          paragraphs: [
            '每日開放，通常為 07:00 至 17:00。最晚入場多在午後，因此 10:00 前抵達不但光線柔和好拍，步道也比較清靜。',
            '多數旅客停留 45–90 分鐘。喜歡拍照或親子在每座浮雕前停留者，往往會待到兩小時。'
          ]
        },
        {
          title: '門票包含什麼',
          paragraphs: [
            `一張票可走完整條泥雕步道：露天泥塑浮雕、有頂隧道段，以及面向${A.nearby1}的展望點，拍照不另外收費。`,
            '入口區的飲料、小食、紀念品與任何自選活動都需另外付費。'
          ]
        }
      ],
      faq: [
        {
          q: '大叻泥雕隧道門票多少錢？',
          a: `身高 1.3 公尺以上每人 ${dong(A.ticketAdult)}，身高 1.3 公尺以下兒童 ${dong(A.ticketChild)}。請於參觀當天在入口確認最新票價。`
        },
        { q: '幼童免費嗎？', a: `不免費：身高 1.3 公尺以下兒童購買優待票 ${dong(A.ticketChild)}，身高於入口現場測量。` },
        { q: '可以刷卡嗎？', a: '請以現金為前提準備。建議攜帶小面額越南盾，方便購票、買水與小額消費。' },
        { q: '開放時間是？', a: '每日 07:00–17:00（參考值）。最晚入場通常在午後。' },
        { q: '門票含拍照嗎？', a: '含，步道沿線拍照已包含在門票內。' }
      ],
      updated: '票價與開放時間依 2026 年 9 月旅遊資料核對；請於現場再次確認。'
    },
    transport: {
      metaTitle: `大叻泥雕隧道交通方式：計程車、機車與路線指引`,
      metaDescription: `如何從大叻市中心前往${A.nameVi}：沿通往${A.nearby1}的道路南下約 ${A.distanceFromCentreKm} 公里，計程車或機車約 25–35 分鐘，含停車、Plus Code ${A.plusCode} 與地圖連結。`,
      h1: `如何前往${A.nameVi}`,
      lead: `泥雕隧道位於大叻市中心以南約 ${A.distanceFromCentreKm} 公里，就在續往${A.nearby1}的道路旁。以下是各種實際可行的交通方式。`,
      card: '路線、車程、停車與地圖連結。',
      sections: [
        {
          title: '從大叻市中心出發',
          paragraphs: [
            `沿著往${A.nearby1}的道路往南，景點位於抵達湖之前、有松林的山坡上，距春香湖約 ${A.distanceFromCentreKm} 公里。視交通狀況，計程車或叫車約 25–35 分鐘。`,
            `同一條路會經過${A.nearby2}與纜車站，因此這站很自然地可以排進大叻南線行程。`
          ],
          bullets: [
            '計程車／叫車：約 25–35 分鐘，人多時最省事',
            '租機車：約 25 分鐘，彈性最高',
            '當地一日遊：常與泉林湖、竹林禪院搭配',
            '公車：不實際——沒有直達門口的班次'
          ]
        },
        {
          title: '找到入口',
          paragraphs: [
            `使用 Plus Code ${A.plusCode} 或 Google 地圖分享連結，兩者都會把司機帶到同一個入口。入口區可停機車與汽車，遊覽車在門口上下客。`,
            `從入口開始就是單一動線，不容易迷路：沿著泥雕作品前進再折返即可。`
          ]
        },
        {
          title: '與周邊景點串遊',
          paragraphs: [
            `${A.nearby1}與${A.nearby2}都在同一條路上、車程僅數分鐘，還可搭乘大叻纜車往來禪寺一帶與羅賓山，半日時間足夠走完三處。`
          ]
        }
      ],
      faq: [
        {
          q: '泥雕隧道距離大叻市中心多遠？',
          a: `約 ${A.distanceFromCentreKm} 公里，位於往${A.nearby1}的道路上、市中心以南。開車請預留 25–35 分鐘。`
        },
        { q: '有直達公車嗎？', a: '沒有實際可行的公車班次到門口；建議搭計程車、叫車、騎機車或參加一日遊。' },
        { q: '入口有停車位嗎？', a: '有，入口區可停機車與汽車。' },
        { q: '可以從泉林湖走過去嗎？', a: '那是曝曬的馬路路段，多數旅客會搭車完成這段短路程。' },
        { q: 'Plus Code 是什麼？', a: `${A.plusCode} —— 貼到 Google 地圖即可直接導航到入口。` }
      ],
      updated: '距離與車程為參考值，實際視交通狀況而定。'
    },
    highlights: {
      metaTitle: `大叻泥雕隧道看什麼：泥雕步道亮點全覽`,
      metaDescription: `${A.nameVi}必看重點：關於大叻與西原高原的泥塑浮雕、有頂隧道段、俯瞰${A.nearby1}的展望點、最佳拍攝位置與所需步行時間。`,
      h1: `泥雕步道亮點`,
      lead: `一條約 ${A.lengthKm} 公里的蜿蜒步道、數十座泥塑浮雕，加上一處山坡展望點。以下依你會遇到的順序列出值得留意之處。`,
      card: '依序看什麼、哪裡最好拍。',
      sections: [
        {
          title: '泥塑浮雕群',
          paragraphs: [
            `步道兩側是大型浮雕與立體塑像：高原村落生活場景、民族文化圖騰，以及大叻地標（如舊火車站）的縮小模型，全由在地工藝家族手工塑成。`,
            '由於作品接近真人尺度，這裡比較像一段可以走進去的故事，而不是陳列室——請預留頻繁停留的時間。'
          ]
        },
        {
          title: '有頂隧道段',
          paragraphs: [
            `部分路段鑿入山壁並有頂蓋，這正是${A.nameVi}（泥雕隧道）名稱由來。這些是全線最陰涼的地方，晴天時也最多人拍照。`
          ]
        },
        {
          title: '湖景展望點與拍攝位置',
          paragraphs: [
            `接近尾端時松林向${A.nearby1}方向敞開，是拍攝開闊地景最好的位置。早晨光線最能襯托泥土色澤；正午光線生硬，且步道缺乏遮蔽。`
          ],
          bullets: [
            '最佳光線：07:30–10:00',
            '走完整條步道請預留 45–90 分鐘',
            '請勿攀爬雕像——泥塑相當脆弱',
            '輕便雨衣比雨傘實用'
          ]
        }
      ],
      faq: [
        { q: '泥雕步道有多長？', a: `約 ${A.lengthKm} 公里，單程走完後沿原路折返。` },
        { q: '全部看完要多久？', a: '45–90 分鐘；若在每座浮雕前停留拍照，可能接近兩小時。' },
        { q: '可以拍照嗎？', a: '可以，這正是主要賣點。但請勿攀爬作品。' },
        { q: '下雨適合去嗎？', a: `部分適合：隧道段可遮避，且大叻的雨通常在午後報到，上午前往通常仍是乾的。` },
        { q: '適合帶小孩嗎？', a: '適合——雕像約在兒童視線高度，步道也平緩，僅有少數階梯與未鋪裝路段。' }
      ],
      updated: '亮點反映近期展出中的作品；園區會隨時間新增作品。'
    }
  },

  ko: {
    ticket: {
      metaTitle: `클레이 터널 달랏 입장료 ${dong(A.ticketAdult)} — 운영시간과 티켓 안내`,
      metaDescription: `클레이 터널(${A.nameVi}) 입장료: 키 1.3m 초과 ${dong(A.ticketAdult)}, 키 1.3m 미만 어린이 ${dong(A.ticketChild)}. 매일 07:00–17:00 운영, 티켓에 포함된 내용과 결제 방법.`,
      h1: `클레이 터널 입장료와 운영시간`,
      lead: `티켓을 사기 전에 여행객이 가장 많이 묻는 것들: 현재 참고 요금, 입구의 키 기준, 운영 시간, 필요한 관람 시간과 준비물.`,
      card: '입장료, 티켓 규정, 운영 시간.',
      sections: [
        {
          title: '입장료는 얼마인가요?',
          paragraphs: [
            `키 1.3m 초과는 1인 ${dong(A.ticketAdult)}, 키 1.3m 미만 어린이는 ${dong(A.ticketChild)}입니다. 키는 입구에서 바로 측정하므로 기준이 현장에서 적용됩니다.`,
            `가족이 운영하는 명소는 계절과 새 시설에 따라 요금이 바뀔 수 있으므로 위 금액은 참고용으로 보고, 방문 당일 매표소에서 다시 확인하세요.`
          ],
          bullets: [
            `성인 / 키 1.3m 초과: ${dong(A.ticketAdult)}`,
            `어린이 / 키 1.3m 미만: ${dong(A.ticketChild)}`,
            '베트남 동 현금이 가장 확실한 결제 수단입니다',
            '티켓은 잘 보관하세요. 산책로에서 확인할 수 있습니다'
          ]
        },
        {
          title: '운영 시간과 도착하기 좋은 시간',
          paragraphs: [
            '매일 보통 07:00부터 17:00까지 엽니다. 마지막 입장은 대개 오후 중반이라, 10시 이전에 도착하면 사진 빛이 부드럽고 산책로도 한산합니다.',
            '대부분 45~90분 머무르며, 사진을 많이 찍거나 아이와 부조마다 멈추면 두 시간에 가까워집니다.'
          ]
        },
        {
          title: '티켓에 포함되는 것',
          paragraphs: [
            `티켓 한 장으로 조각 산책로 전체를 볼 수 있습니다. 야외 점토 부조, 지붕 있는 터널 구간, ${A.nearby1} 쪽 전망 포인트가 모두 포함되고 사진 촬영은 별도 요금이 없습니다.`,
            '입구 쪽 음료, 간식, 기념품과 선택 프로그램은 별도 결제입니다.'
          ]
        }
      ],
      faq: [
        {
          q: '클레이 터널 달랏 입장료는 얼마인가요?',
          a: `키 1.3m 초과 1인 ${dong(A.ticketAdult)}, 키 1.3m 미만 어린이 ${dong(A.ticketChild)}입니다. 방문 당일 입구에서 최신 요금을 확인하세요.`
        },
        { q: '어린 아이는 무료인가요?', a: `무료는 아니며 키 1.3m 미만은 할인권 ${dong(A.ticketChild)}을 냅니다. 키는 입구에서 측정합니다.` },
        { q: '카드 결제가 되나요?', a: '현금을 준비하세요. 표·물·소소한 구매를 위해 소액권 베트남 동을 챙기면 편합니다.' },
        { q: '운영 시간은 어떻게 되나요?', a: '매일 07:00–17:00(참고용). 마지막 입장은 대개 오후 중반입니다.' },
        { q: '티켓에 사진 촬영이 포함되나요?', a: '네, 산책로에서의 촬영은 입장료에 포함됩니다.' }
      ],
      updated: '요금과 운영 시간은 2026년 9월 여행 자료를 기준으로 정리했으며 현장에서 다시 확인하세요.'
    },
    transport: {
      metaTitle: `클레이 터널 달랏 가는 방법 — 택시, 오토바이, 길찾기`,
      metaDescription: `달랏 시내에서 ${A.nameVi}(클레이 터널)까지: ${A.nearby1} 방향 도로를 따라 남쪽으로 약 ${A.distanceFromCentreKm}km, 택시나 오토바이로 25~35분. 주차, 플러스 코드 ${A.plusCode}, 지도 링크 포함.`,
      h1: `${A.nameVi} 가는 방법`,
      lead: `조각 터널은 달랏 시내에서 남쪽으로 약 ${A.distanceFromCentreKm}km, ${A.nearby1}으로 이어지는 도로변에 있습니다. 실질적으로 이용할 수 있는 이동 방법을 정리했습니다.`,
      card: '경로, 소요 시간, 주차, 지도 링크.',
      sections: [
        {
          title: '달랏 시내에서',
          paragraphs: [
            `${A.nearby1} 방향 도로를 따라 남쪽으로 내려가면 호수에 닿기 전 소나무 언덕에 이곳이 있으며, 쑤언흐엉 호수에서 약 ${A.distanceFromCentreKm}km입니다. 택시나 호출 차량은 교통 상황에 따라 25~35분 정도 걸립니다.`,
            `같은 도로가 ${A.nearby2}와 케이블카 정류장을 지나므로 달랏 남부 코스에 자연스럽게 넣을 수 있습니다.`
          ],
          bullets: [
            '택시 / 호출 차량: 약 25~35분, 인원이 많을 때 가장 간편',
            '렌트 오토바이: 약 25분, 가장 자유로움',
            '당일 투어: 뚜옌럼 호수, 쭉럼 선원과 함께 묶이는 경우가 많음',
            '시내버스: 비현실적 — 입구까지 가는 노선이 없음'
          ]
        },
        {
          title: '입구 찾기',
          paragraphs: [
            `플러스 코드 ${A.plusCode} 또는 구글 지도 공유 링크를 사용하면 둘 다 같은 입구로 안내합니다. 입구 쪽에 오토바이와 차량 주차 공간이 있고 단체 버스는 입구 앞에서 하차합니다.`,
            `입구에서부터 동선이 하나뿐이라 길을 잃기 어렵습니다. 점토 조각을 따라 걷다 되돌아오면 됩니다.`
          ]
        },
        {
          title: '주변 명소와 묶어 보기',
          paragraphs: [
            `${A.nearby1}과 ${A.nearby2}는 같은 도로상에 차로 몇 분 거리이고, 달랏 케이블카가 선원 일대와 로빈 힐을 잇습니다. 반나절이면 세 곳을 모두 볼 수 있습니다.`
          ]
        }
      ],
      faq: [
        {
          q: '클레이 터널은 달랏 시내에서 얼마나 떨어져 있나요?',
          a: `시내 남쪽 ${A.nearby1} 방향 도로상에 있으며 약 ${A.distanceFromCentreKm}km입니다. 차로 25~35분 잡으세요.`
        },
        { q: '입구까지 가는 버스가 있나요?', a: '실제로 이용할 만한 노선이 없습니다. 택시, 호출 차량, 오토바이 또는 투어를 이용하세요.' },
        { q: '입구에 주차장이 있나요?', a: '네, 입구 쪽에 오토바이와 차량을 댈 수 있습니다.' },
        { q: '뚜옌럼 호수에서 걸어갈 수 있나요?', a: '햇볕이 내리쬐는 도로 구간이라 대부분 짧은 거리를 차로 이동합니다.' },
        { q: '플러스 코드가 무엇인가요?', a: `${A.plusCode} — 구글 지도에 붙여넣으면 입구로 바로 안내됩니다.` }
      ],
      updated: '거리와 소요 시간은 참고용이며 교통 상황에 따라 달라집니다.'
    },
    highlights: {
      metaTitle: `클레이 터널 달랏 볼거리 — 조각 산책로 하이라이트`,
      metaDescription: `${A.nameVi}에서 볼 것: 달랏과 중부 고원을 담은 점토 부조, 지붕 있는 터널 구간, ${A.nearby1} 전망 포인트, 사진 명소와 산책 소요 시간.`,
      h1: `조각 산책로의 볼거리`,
      lead: `약 ${A.lengthKm}km의 구불한 산책로, 수십 점의 점토 부조, 그리고 언덕 전망 포인트. 만나는 순서대로 정리했습니다.`,
      card: '순서대로 볼 것과 사진 명소.',
      sections: [
        {
          title: '점토 부조들',
          paragraphs: [
            `산책로 양옆에 큰 부조와 입체 조각이 있습니다. 고원 마을 풍경, 민족 문화 문양, 그리고 옛 기차역 같은 달랏 랜드마크 축소 모형이 현지 공예 가족의 손으로 빚어져 있습니다.`,
            '작품이 사람 키와 비슷해 전시장이라기보다 걸어 들어가는 이야기에 가깝습니다. 자주 멈출 계획을 세우세요.'
          ]
        },
        {
          title: '지붕 있는 터널 구간',
          paragraphs: [
            `언덕을 파서 만든 지붕 있는 구간이 여러 곳 있고, 여기서 ${A.nameVi}(조각 터널)이라는 이름이 나왔습니다. 가장 시원하고 맑은 날 사진이 가장 많이 찍히는 구간입니다.`
          ]
        },
        {
          title: '호수 전망과 사진 포인트',
          paragraphs: [
            `끝쪽에서 소나무 사이가 트이며 ${A.nearby1}이 보이는데, 넓은 풍경 사진에 가장 좋습니다. 오전 빛이 흙색을 가장 잘 살리고, 한낮에는 빛이 강하고 그늘이 없습니다.`
          ],
          bullets: [
            '좋은 빛: 07:30~10:00',
            '산책로 전체에 45~90분 확보',
            '조각에 올라가지 마세요 — 흙이라 약합니다',
            '우산보다 가벼운 우비가 편합니다'
          ]
        }
      ],
      faq: [
        { q: '조각 산책로 길이는 얼마나 되나요?', a: `약 ${A.lengthKm}km이며 한 방향으로 걸었다가 같은 길로 돌아옵니다.` },
        { q: '전부 보는 데 얼마나 걸리나요?', a: '45~90분, 부조마다 사진을 찍으면 두 시간에 가까워집니다.' },
        { q: '사진 촬영이 가능한가요?', a: '가능하며 이곳의 주된 매력입니다. 다만 작품 위에 올라가지 마세요.' },
        { q: '비가 와도 갈 만한가요?', a: `부분적으로 가능합니다. 터널 구간이 도움이 되고 달랏 비는 보통 오후에 오므로 오전 방문은 대체로 비를 피합니다.` },
        { q: '아이와 가기 좋나요?', a: '좋습니다. 조각이 아이 눈높이에 있고 길이 완만하며, 계단과 비포장 구간이 조금 있습니다.' }
      ],
      updated: '하이라이트는 최근 시즌에 전시 중인 작품 기준이며 새 작품이 계속 추가됩니다.'
    }
  }
};
