import { ATTRACTION as A } from '../data/site';
import type { GuideContent } from './types';

const dong = (v: number) => `${v.toLocaleString('vi-VN')} VNĐ`;

export const vi: GuideContent = {
  metaTitle: `Đường Hầm Điêu Khắc Đà Lạt: Giá vé ${dong(A.ticketAdult)}, giờ mở cửa và cách đi`,
  metaDescription: `Hướng dẫn tham quan ${A.nameVi} (Clay Tunnel) ở ${A.cityVi}, ${A.provinceVi}: giá vé ${dong(A.ticketAdult)}, mở cửa 07:00–17:00 hằng ngày, cách đi từ trung tâm Đà Lạt, xem gì và kết hợp Hồ Tuyền Lâm. Đánh giá ${A.rating}/5.`,
  heroKicker: `${A.cityVi} · ${A.provinceVi} · ${A.countryVi}`,
  heroTitle: A.nameVi,
  heroSub: `Clay Tunnel · ${A.cityVi}`,
  heroLead: `Công viên tượng đất sét ngoài trời dài khoảng ${A.lengthKm} km nằm trên đồi thông phía trên ${A.nearby1Vi}. Những phù điêu bằng đất kể lại lịch sử, văn hóa và cảnh quan của ${A.cityVi} và Tây Nguyên — một điểm dừng yên tĩnh, rất hợp chụp ảnh, cách trung tâm khoảng ${A.distanceFromCentreKm} km về phía nam.`,
  heroStats: [
    { value: `${A.lengthKm} km`, label: 'đường tượng' },
    { value: `${A.distanceFromCentreKm} km`, label: 'từ trung tâm' },
    { value: `★ ${A.rating}`, label: `${A.reviewCount.toLocaleString('vi-VN')} đánh giá` }
  ],
  about: {
    kicker: 'Từ đất sét thành địa danh',
    title: `Giới thiệu ${A.nameVi}`,
    paragraphs: [
      `${A.nameVi} — trên bản đồ thường ghi là ${A.legalName}, tiếng Anh gọi là ${A.nameEn} hay Sculpture Tunnel — là công viên tượng đất sét ngoài trời tại ${A.ward}, thành phố ${A.cityVi}, tỉnh ${A.provinceVi}, ${A.countryVi}. Một con đường uốn lượn dài khoảng ${A.lengthKm} km dẫn qua nhiều phù điêu đất sét lớn kể lại lịch sử, văn hóa và cảnh quan của ${A.cityVi} cùng Tây Nguyên.`,
      `Khu này nằm trên đồi thông phía trên ${A.nearby1Vi}, cách trung tâm khoảng ${A.distanceFromCentreKm} km về phía nam. Đa số du khách kết hợp trong cùng một buổi với ${A.nearby1Vi} và ${A.nearby2Vi}, nên nơi này xuất hiện trong nhiều lịch trình trong ngày ở ${A.cityVi}.`,
      `Đây là điểm đến do một gia đình nghệ nhân địa phương tự xây dựng, không phải công viên do nhà nước quản lý: các tác phẩm được nặn và tu bổ thủ công, vì vậy nơi này vừa là một công trình thủ công vừa là điểm tham quan.`
    ],
    breadcrumb: `${A.nameVi} → ${A.cityVi} → ${A.provinceVi} → ${A.countryVi}`
  },
  highlights: {
    kicker: 'Có gì để xem',
    title: 'Những điểm nổi bật trên đường tượng',
    intro: 'Tuyến đi là một đường duy nhất, rất dễ theo. Đây là những chỗ du khách nhớ nhất.',
    items: [
      {
        title: 'Các phù điêu đất sét',
        text: `Hàng chục phù điêu lớn và tượng khối dọc theo đường đi: cảnh sinh hoạt bản làng Tây Nguyên, họa tiết văn hóa các dân tộc, và các mô hình thu nhỏ của những địa danh ${A.cityVi}. Phong cách nặn mộc mạc, hoàn toàn thủ công.`
      },
      {
        title: 'Những đoạn hầm',
        text: `Một số đoạn đường đi qua các hầm che, khoét vào sườn đồi — chính vì thế có tên gọi ${A.nameVi}. Đây là những đoạn mát nhất và được chụp ảnh nhiều nhất vào ngày nắng.`
      },
      {
        title: 'Điểm nhìn ra hồ',
        text: `Ở phía cuối tuyến, tán thông mở ra hướng ${A.nearby1Vi}. Đây là chỗ đẹp nhất để chụp ảnh toàn cảnh và nghỉ chân trước khi quay lại.`
      },
      {
        title: 'Góc chụp ảnh',
        text: `Vì hầu hết tượng được nặn ở kích thước gần bằng người, nơi này là một trong những điểm check-in được chụp nhiều nhất ở ${A.cityVi}: ánh sáng buổi sáng làm màu đất lên đẹp nhất.`
      }
    ]
  },
  route: {
    kicker: 'Lộ trình gợi ý · 45–90 phút',
    title: `Cách tham quan ${A.nameVi}`,
    intro: 'Khu này nhỏ gọn: mua vé, đi theo một đường tượng duy nhất, nghỉ ở điểm nhìn ra hồ rồi quay lại.',
    steps: [
      {
        no: '01',
        label: 'Di chuyển',
        title: 'Từ trung tâm Đà Lạt',
        text: `Khoảng ${A.distanceFromCentreKm} km về phía nam, đi theo đường xuống ${A.nearby1Vi}. Taxi hoặc xe máy mất khoảng 25–35 phút; đường đi qua ${A.nearby2Vi}.`
      },
      {
        no: '02',
        label: 'Vào cổng',
        title: 'Mua vé tại cổng',
        text: `Vé vào cửa ${dong(A.ticketAdult)} cho khách cao trên 1,3 m và ${dong(A.ticketChild)} cho trẻ em dưới 1,3 m. Giá chỉ mang tính tham khảo — hãy xác nhận lại tại cổng trong ngày đi.`
      },
      {
        no: '03',
        label: 'Đi bộ',
        title: 'Theo đường tượng đất',
        text: `Một đường uốn lượn, hàng chục phù điêu và vài đoạn hầm che. Dành 45–90 phút tùy vào số lần bạn dừng chụp ảnh.`
      },
      {
        no: '04',
        label: 'Kết hợp',
        title: 'Thêm các điểm lân cận',
        text: `Kết hợp với ${A.nearby1Vi} và ${A.nearby2Vi}, cùng nằm trên trục đường này chỉ cách vài phút.`
      }
    ]
  },
  nearby: {
    kicker: 'Địa danh lân cận',
    title: `Quanh ${A.nameVi}`,
    text: `Đường hầm nằm trong cụm điểm đến phía nam ${A.cityVi}. Chỉ vài phút lái xe là tới ${A.nearby1Vi} — mặt hồ yên tĩnh bao quanh bởi rừng thông — và ${A.nearby2Vi}, thiền viện trên sườn đồi nhìn xuống hồ, có thể đi bằng cáp treo. Nhiều lịch trình nửa ngày kết hợp cả ba.`
  },
  history: {
    kicker: 'Từ thú vui thành địa danh',
    title: `Lịch sử ${A.nameVi}`,
    paragraphs: [
      `${A.nameVi} bắt đầu từ đầu thập niên 2000 như dự án nặn đất sét của một gia đình nghệ nhân địa phương gần ${A.nearby1Vi}. Từ một thú vui cá nhân, nơi này lớn lên thành một phòng trưng bày ngoài trời dài một cây số kể lại câu chuyện của ${A.cityVi} và Tây Nguyên — từ buổi đầu hình thành đô thị, những biệt thự thời Pháp, văn hóa các dân tộc trên cao nguyên cho tới các địa danh thiên nhiên — tất cả bằng đất sét.`,
      `Điểm đến này phản chiếu truyền thống thủ công của vùng và đã trở thành một trong những địa danh do gia đình tự xây dựng đặc biệt của ${A.cityVi}: nơi lịch sử, truyền thống và cảnh quan được đọc chậm rãi, bằng đôi chân, qua từng phù điêu. Tác phẩm mới vẫn được bổ sung, nên khách quay lại thường thấy điều khác trước.`
    ],
    note: 'Niên đại và trình tự được tóm lược từ các tài liệu du lịch; chủ khu vẫn tiếp tục mở rộng.'
  },
  visit: {
    kicker: 'Chuẩn bị cho chuyến đi',
    title: 'Thông tin cần thiết',
    rows: [
      { label: 'Địa chỉ', value: `${A.ward}, thành phố ${A.cityVi}, ${A.provinceVi} ${A.postalCode}, ${A.countryVi}` },
      { label: 'Plus Code', value: A.plusCode },
      { label: 'Điện thoại', value: A.phoneDisplay },
      { label: 'Giờ mở cửa', value: 'Hằng ngày 07:00 – 17:00 (tham khảo — nên kiểm tra trước khi đi).' },
      { label: 'Giá vé', value: `${dong(A.ticketAdult)} mỗi người lớn (trên 1,3 m) · ${dong(A.ticketChild)} mỗi trẻ em (dưới 1,3 m). Xác nhận tại cổng.` },
      { label: 'Thời gian tham quan', value: '45–90 phút cho toàn bộ đường đi.' },
      { label: 'Phù hợp nhất cho', value: 'Chụp ảnh, đi bộ thong thả, tìm hiểu thủ công địa phương và ngắm hồ.' }
    ]
  },
  facilities: {
    kicker: 'Tại chỗ',
    title: 'Tiện ích cho du khách',
    intro: 'Tiện ích ở đây khá đơn giản và thay đổi theo mùa. Đây là những dịch vụ du khách thường thấy ở khu cổng và dọc tuyến đi.',
    items: [
      { title: 'Chỗ đỗ xe', text: 'Có chỗ đỗ xe máy và ô tô ở khu vực cổng; xe du lịch thường trả khách ngay cổng.' },
      { title: 'Nhà vệ sinh', text: 'Có gần khu bán vé; nên tự mang giấy và nước rửa tay.' },
      { title: 'Nước uống & đồ ăn nhẹ', text: 'Một vài quầy nhỏ quanh cổng; hãy mang nước cho chặng đi bộ.' },
      { title: 'Chỗ nghỉ & tránh nắng', text: 'Các đoạn hầm che và ghế dọc đường giúp nghỉ chân giữa nắng cao nguyên.' },
      { title: 'Xưởng đất & quà lưu niệm', text: 'Đất sét là chủ đề của khu này, nên thường có đồ gốm nhỏ và quà lưu niệm địa phương trưng bày gần cổng.' },
      { title: 'Khả năng tiếp cận', text: 'Đa phần đường đi nhẹ, nhưng có bậc thang và đoạn đất; nên mang giày chắc, nhất là sau mưa.' }
    ]
  },
  seasonal: {
    kicker: 'Mùa khô và mùa mưa',
    title: 'Nên đi khi nào',
    intro: `${A.cityVi} có mùa khô và mùa mưa rất rõ. Cả hai đều đi được, chỉ khác ở cách chọn giờ.`,
    note: 'Mô tả khí hậu dựa trên quy luật mùa chung của Đà Lạt / Tây Nguyên; hãy xem dự báo trong ngày trước khi xuất phát.',
    columns: { season: 'Mùa', weather: 'Thời tiết thường gặp', tip: 'Cách sắp xếp' },
    rows: [
      {
        season: 'Tháng 11 – 4 (mùa khô)',
        weather: 'Sáng mát, trưa nắng, ít mưa; mùa cao điểm du lịch.',
        tip: 'Đến khoảng 08:00–10:00 để có ánh sáng đẹp và vắng người; mang áo khoác mỏng cho buổi sáng.'
      },
      {
        season: 'Tháng 5 – 10 (mùa mưa)',
        weather: 'Mưa rào thường vào buổi chiều, sáng có sương, đồi xanh hơn.',
        tip: 'Đi buổi sáng trước cơn mưa chiều; các đoạn hầm che giúp một phần lộ trình vẫn đi được.'
      },
      {
        season: 'Tháng 12 – 1 (cao điểm lễ)',
        weather: 'Những tháng lạnh nhất trong năm; ban đêm có thể xuống gần 10 °C.',
        tip: 'Đi sáng sớm và mặc thêm áo ấm; đây là thời điểm cổng đông nhất năm.'
      },
      {
        season: 'Quanh năm',
        weather: 'Khí hậu cao nguyên khoảng 1.500 m: ngày ôn hòa, chiều tối mát.',
        tip: 'Áo mưa gọn hữu dụng hơn ô trên những đoạn sườn đồi hở.'
      }
    ]
  },
  itineraries: {
    kicker: 'Lịch trình gợi ý',
    title: 'Gợi ý lộ trình',
    intro: 'Ba cách đưa đường hầm điêu khắc vào một ngày ở Đà Lạt.',
    items: [
      {
        title: 'Nửa ngày: đường hầm + hồ (3–4 giờ)',
        text: `Sáng đi xuống phía nam tới ${A.nameVi} (45–90 phút bên trong), sau đó ra ${A.nearby1Vi} ăn trưa, và kết thúc ở ${A.nearby2Vi} hoặc cáp treo buổi chiều.`
      },
      {
        title: 'Cả ngày: vòng phía nam Đà Lạt (7–8 giờ)',
        text: `Đường Hầm Điêu Khắc → ${A.nearby1Vi} → ${A.nearby2Vi} và cáp treo → vườn hoa hoặc quán cà phê trên đường về thị xã.`
      },
      {
        title: 'Cho gia đình & người thích chụp ảnh',
        text: `Đi sớm để có ánh sáng và nhiệt độ dễ chịu, dành 90 phút để trẻ em được dừng ở mỗi phù điêu, và đi các đoạn gần cổng trước vì bằng phẳng hơn.`
      }
    ]
  },
  responsibility: {
    kicker: 'Tham quan có trách nhiệm',
    title: 'Ứng xử khi tham quan',
    intro: 'Các tác phẩm được nặn thủ công và tu bổ liên tục, xung quanh là rừng thông đang khai thác.',
    items: [
      { title: 'Không chạm hay trèo lên tượng', text: 'Tác phẩm rất dễ vỡ; việc trèo lên chụp ảnh gây hư hại nhìn thấy được và phải sửa bằng tay.' },
      { title: 'Đi đúng đường', text: 'Sườn đồi là rừng thông dễ xói mòn; đi tắt sẽ làm rộng rãnh xói sau mưa.' },
      { title: 'Mang rác ra ngoài', text: 'Thùng rác dọc đường có hạn; hãy mang theo những gì mình đem vào, nhất là chai nước và giấy.' },
      { title: 'Giữ yên tĩnh', text: 'Khu này sát thiền viện và khu dân cư trên đồi — du khách được khuyến khích giữ trật tự.' },
      { title: 'Hỏi trước khi chụp ảnh người khác', text: 'Nhân viên, nghệ nhân và khách khác không phải đạo cụ; một câu hỏi nhanh là đủ.' }
    ]
  },
  reviews: {
    kicker: 'Đánh giá của du khách',
    title: 'Du khách nói gì',
    cta: 'Xem tất cả đánh giá trên Google Maps ↗',
    note: `Điểm và số lượt đánh giá được đồng bộ từ đánh giá người dùng Google Maps (tháng 9 năm 2026), chỉ mang tính tham khảo.`
  },
  sources: {
    kicker: 'Nguồn & tài liệu tham khảo',
    title: 'Sự kiện, không phải truyền thuyết',
    items: [
      {
        label: 'Google Maps',
        text: `Vị trí, Plus Code ${A.plusCode}, tọa độ ${A.latitude}, ${A.longitude} và điểm đánh giá nêu trên.`
      },
      {
        label: 'Tổng cục Du lịch Việt Nam',
        text: 'Cổng du lịch quốc gia chính thức, dùng cho bối cảnh du lịch vùng: vietnam.travel.'
      },
      {
        label: 'Tài liệu du lịch',
        text: 'Giờ mở cửa và giá vé được nêu theo các nguồn thường công bố; nên xác nhận lại tại cổng trong ngày tham quan.'
      }
    ]
  },
  faq: {
    kicker: 'Trước khi đi',
    title: 'Câu hỏi thường gặp',
    items: [
      {
        q: 'Giá vé vào Đường Hầm Điêu Khắc Đà Lạt là bao nhiêu?',
        a: `Vé vào cửa ${dong(A.ticketAdult)} mỗi người cao trên 1,3 m và ${dong(A.ticketChild)} cho trẻ em dưới 1,3 m. Giá mang tính tham khảo và có thể thay đổi theo mùa, nên hãy xác nhận tại cổng trong ngày đi.`
      },
      {
        q: 'Giờ mở cửa như thế nào?',
        a: 'Khu này mở cửa hằng ngày, thường từ 07:00 đến 17:00. Lượt vào muộn nhất thường vào giữa buổi chiều; đến trước 10:00 sẽ có ánh sáng đẹp và vắng người hơn.'
      },
      {
        q: 'Đường Hầm Điêu Khắc nằm ở đâu?',
        a: `${A.ward}, thành phố ${A.cityVi}, tỉnh ${A.provinceVi} ${A.postalCode}, ${A.countryVi}, trên đồi phía trên ${A.nearby1Vi}, cách trung tâm khoảng ${A.distanceFromCentreKm} km về phía nam. Plus Code: ${A.plusCode}.`
      },
      {
        q: 'Từ trung tâm Đà Lạt đi thế nào?',
        a: `Đi taxi hoặc xe công nghệ mất khoảng 25–35 phút theo hướng nam trên đường xuống ${A.nearby1Vi}, đi qua ${A.nearby2Vi}. Thuê xe máy là lựa chọn linh hoạt nhất; nhiều tour trong ngày cũng ghé điểm này.`
      },
      {
        q: 'Đường Hầm Điêu Khắc là gì?',
        a: `Đó là công viên tượng đất sét ngoài trời dài khoảng ${A.lengthKm} km: một đường uốn lượn với các phù điêu đất lớn về lịch sử, văn hóa và cảnh quan ${A.cityVi} cùng Tây Nguyên, gồm cả những đoạn hầm che khoét vào sườn đồi.`
      },
      {
        q: 'Tham quan mất bao lâu?',
        a: 'Đa số du khách dành 45–90 phút. Người thích chụp ảnh và gia đình dừng lại ở mỗi phù điêu thường ở gần hai tiếng.'
      },
      {
        q: 'Mùa mưa có đáng đi không?',
        a: `Có, nếu chọn giờ: mưa ở ${A.cityVi} thường đến vào buổi chiều, nên đi buổi sáng thường vẫn khô, và các đoạn hầm che che được một phần lộ trình. Mang giày có độ bám vì đường trơn sau mưa.`
      },
      {
        q: 'Có được chụp ảnh không?',
        a: 'Được. Chụp ảnh chính là lý do nhiều người đến. Tripod dùng được vào giờ vắng; xin đừng trèo lên tượng để chụp.'
      },
      {
        q: 'Có phù hợp cho trẻ em và người lớn tuổi không?',
        a: 'Lộ trình chủ yếu là đi bộ nhẹ, có vài bậc thang và đoạn đường đất. Gia đình có trẻ nhỏ thường đi được nếu không vội; địu sẽ tiện hơn xe đẩy ở các đoạn hẹp.'
      },
      {
        q: 'Có chỗ đỗ xe và nhà vệ sinh không?',
        a: 'Có chỗ đỗ xe máy và ô tô ở khu vực cổng, nhà vệ sinh gần quầy vé. Nên mang một ít tiền mặt để mua vé, nước và các khoản nhỏ.'
      },
      {
        q: 'Gần đó có gì để đi tiếp?',
        a: `${A.nearby1Vi} và ${A.nearby2Vi} chỉ cách vài phút trên cùng trục đường, và cáp treo nối khu thiền viện với đồi Robin.`
      }
    ]
  },
  explore: {
    kicker: 'Đọc thêm',
    title: 'Chuẩn bị chi tiết',
    intro: 'Ba bài hướng dẫn cho những câu hỏi du khách hỏi nhiều nhất.'
  },
  footerTagline: `Hướng dẫn tham quan độc lập cho ${A.nameVi} (${A.nameEn}) tại ${A.cityVi}, ${A.provinceVi}, ${A.countryVi}. Không phải trang web chính thức của khu du lịch.`,
  photoAlt: {
    hero: `${A.nameVi} — lối vào đường hầm điêu khắc đất sét ở ${A.cityVi}`,
    tunnel: `Các tác phẩm đất sét bên trong ${A.nameVi} (${A.nameEn})`,
    lake: `${A.nearby1Vi} nhìn từ đồi gần ${A.nameVi}`,
    tunnel2: `Đoạn hầm che của ${A.nameVi} ở ${A.cityVi}`,
    lake2: `Đồi thông và mặt nước quanh ${A.nearby1Vi}, ${A.cityVi}`
  },
  photoCredit: 'Ảnh: Wikimedia Commons (Panoramio) · CC BY-SA.',
  disclaimer: 'Giờ mở cửa và giá vé chỉ mang tính tham khảo và có thể thay đổi; vui lòng xác nhận tại cổng trước khi đi.'
};
