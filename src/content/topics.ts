import type { Locale } from "../i18n";
import type { TopicContent } from "./types";
export type TopicKey = "ticket" | "transport" | "highlights";
export const topics: Record<Locale, Record<TopicKey, TopicContent>> = {
  en: {
    ticket: {
      metaTitle: "Ticket price and opening information | Clay Tunnel · Da Lat",
      metaDescription:
        "Current fees, categories and last entry need confirmation. Compare the dated Maps snapshot with the undated provincial directory rather than treating either as a live ticket offer.",
      h1: "Ticket price and opening information",
      lead: "Current fees, categories and last entry need confirmation. Compare the dated Maps snapshot with the undated provincial directory rather than treating either as a live ticket offer.",
      card: "Ticket price and opening information",
      updated:
        "Checked 30 October 2026. Current operator prices, hours and access are not established by an undated directory or a third-party snapshot.",
      sections: [
        {
          title: "Price information",
          paragraphs: [
            "A current operator tariff is unconfirmed. The provincial directory gives an undated 30,000–60,000 VND range without categories. Confirm the exact current offer, eligibility and included services before purchase.",
          ],
        },
        {
          title: "Hours and last entry",
          paragraphs: [
            "The provincial directory lists 06:00–18:00 without an effective date, while the 30 October 2026 Maps snapshot showed 17:00 closing. Current hours and last admission need confirmation; neither is a live opening guarantee.",
          ],
        },
        {
          title: "Before buying",
          paragraphs: [
            "Ask for the current ticket price, eligibility categories, last entry and what is included. No current operator tariff is verified here.",
          ],
          bullets: [
            "Confirm a legal drop-off and any parking charge, capacity or vehicle restriction with the venue or driver.",
            "Ask whether these facilities will be available during your visit; no on-site service is guaranteed here.",
            "Maps marks an accessible entrance. The full route, gradients, surfaces, toilets and assistance have not been independently audited.",
          ],
        },
      ],
      faq: [
        {
          q: "What is the current entrance fee?",
          a: "A current operator tariff is unconfirmed. The provincial directory gives an undated 30,000–60,000 VND range without categories. Confirm the exact current offer, eligibility and included services before purchase.",
        },
        {
          q: "What time does it close?",
          a: "The provincial directory lists 06:00–18:00 without an effective date, while the 30 October 2026 Maps snapshot showed 17:00 closing. Current hours and last admission need confirmation; neither is a live opening guarantee.",
        },
      ],
    },
    transport: {
      metaTitle: "Getting to the Clay Tunnel | Clay Tunnel · Da Lat",
      metaDescription:
        "Use the attraction’s name and directory address, then confirm the entrance and return transport. No fixed bus, fare, distance or journey time is verified.",
      h1: "Getting to the Clay Tunnel",
      lead: "Use the attraction’s name and directory address, then confirm the entrance and return transport. No fixed bus, fare, distance or journey time is verified.",
      card: "Getting to the Clay Tunnel",
      updated:
        "Checked 30 October 2026. Current operator prices, hours and access are not established by an undated directory or a third-party snapshot.",
      sections: [
        {
          title: "Address and arrival",
          paragraphs: [
            "The directory gives Đường Hoa Hồng, Khu du lịch Hồ Tuyền Lâm, Phường Xuân Hương–Đà Lạt, Lâm Đồng. Confirm the actual entrance with your driver or host; older references may still use Ward 4.",
            "Use the attraction name and Đường Hoa Hồng address in the Tuyen Lam tourism area. Confirm the actual entrance, lawful stopping point and return ride; no bus route, fixed fare or journey time is verified.",
          ],
        },
        {
          title: "Access and return journey",
          paragraphs: [
            "Use the named attraction and provincial-directory address; agree on a legal drop-off and return arrangement. No fixed travel time or distance is promised.",
            "Maps marks an accessible entrance only. Ask about the complete visitor route, surfaces, gradients, toilets and assistance; the guide has not audited them.",
          ],
        },
        {
          title: "Other destinations",
          paragraphs: [
            "Tuyen Lam Lake and Truc Lam Monastery are distinct destinations in the wider area. No same-road connection, quick transfer, cable-car access or admission is guaranteed by a visit to the sculpture attraction.",
          ],
        },
      ],
      faq: [
        {
          q: "How do I get there?",
          a: "Use the attraction name and Đường Hoa Hồng address in the Tuyen Lam tourism area. Confirm the actual entrance, lawful stopping point and return ride; no bus route, fixed fare or journey time is verified.",
        },
        {
          q: "Is the entire route accessible?",
          a: "Maps marks an accessible entrance only. Ask about the complete visitor route, surfaces, gradients, toilets and assistance; the guide has not audited them.",
        },
      ],
    },
    highlights: {
      metaTitle: "Sculpture themes and visiting checks | Clay Tunnel · Da Lat",
      metaDescription:
        "The provincial directory describes sculptural representations of Da Lat and Vietnamese architecture and landscapes. What is open and what photography is permitted still need checking.",
      h1: "Sculpture themes and visiting checks",
      lead: "The provincial directory describes sculptural representations of Da Lat and Vietnamese architecture and landscapes. What is open and what photography is permitted still need checking.",
      card: "Sculpture themes and visiting checks",
      updated:
        "Checked 30 October 2026. Current operator prices, hours and access are not established by an undated directory or a third-party snapshot.",
      sections: [
        {
          title: "Sculpture themes",
          paragraphs: [
            "A sculpture attraction in the Tuyen Lam tourism area. The provincial directory describes architectural and landscape reproductions made with unbaked clay; check admission and access before travelling.",
          ],
          bullets: [
            "The provincial directory describes reproductions of Da Lat and Vietnamese landmarks and landscapes. Treat them as artistic representations, not original historic buildings.",
            "The name does not establish a covered cave, a sheltered route or an accessible tunnel. Ask about the current visitor path and restrictions.",
            "The attraction is associated with the Tuyen Lam tourism area. A nearby lake or viewpoint is not evidence of a public route, boat access or a view from every part of the site.",
          ],
        },
        {
          title: "Photography and access",
          paragraphs: [
            "Confirm the venue’s current rules for personal photography, tripods and commercial work. Avoid restricted areas, do not climb displays, and ask before photographing people.",
            "Maps marks an accessible entrance only. Ask about the complete visitor route, surfaces, gradients, toilets and assistance; the guide has not audited them.",
          ],
        },
        {
          title: "Respect the site",
          paragraphs: [
            "Checked 30 October 2026. Current operator prices, hours and access are not established by an undated directory or a third-party snapshot.",
          ],
          bullets: [
            "Do not climb or touch displays unless expressly permitted.",
            "Follow current boundaries and staff instructions; do not enter woodland or water for a photograph.",
            "Ask before photographing identifiable people; follow any restrictions.",
            "Use permitted disposal facilities or take your litter away.",
          ],
        },
      ],
      faq: [
        {
          q: "Who operates the attraction?",
          a: "The provincial tourism directory associates it with Công ty cổ phần Sao Đà Lạt. This guide is independent and is not a verified booking or operator website.",
        },
        {
          q: "Can I take photographs?",
          a: "Confirm the venue’s current rules for personal photography, tripods and commercial work. Avoid restricted areas, do not climb displays, and ask before photographing people.",
        },
      ],
    },
  },
  vi: {
    ticket: {
      metaTitle: "Giá vé và thông tin giờ mở cửa | Clay Tunnel · Đà Lạt",
      metaDescription:
        "Cần xác nhận giá hiện tại, nhóm vé và giờ nhận khách cuối. So sánh ảnh chụp Maps có ngày với danh bạ tỉnh không ghi ngày hiệu lực; không coi là vé đang chào bán.",
      h1: "Giá vé và thông tin giờ mở cửa",
      lead: "Cần xác nhận giá hiện tại, nhóm vé và giờ nhận khách cuối. So sánh ảnh chụp Maps có ngày với danh bạ tỉnh không ghi ngày hiệu lực; không coi là vé đang chào bán.",
      card: "Giá vé và thông tin giờ mở cửa",
      updated:
        "Kiểm tra 30/10/2026. Danh bạ không ghi ngày hiệu lực hay ảnh chụp bên thứ ba không xác lập giá, giờ và lối vào hiện tại.",
      sections: [
        {
          title: "Thông tin giá",
          paragraphs: [
            "Chưa xác nhận bảng giá hiện hành của đơn vị vận hành. Danh bạ tỉnh có khoảng 30.000–60.000 VNĐ không ghi ngày và nhóm vé. Xác nhận giá hiện tại, điều kiện và dịch vụ bao gồm trước khi mua.",
          ],
        },
        {
          title: "Giờ và lượt vào cuối",
          paragraphs: [
            "Danh bạ tỉnh ghi 06:00–18:00 không có ngày hiệu lực, còn Maps ngày 30/10/2026 hiển thị đóng 17:00. Cần xác nhận giờ hiện tại và giờ nhận khách cuối; không phải bảo đảm đang mở.",
          ],
        },
        {
          title: "Trước khi mua",
          paragraphs: [
            "Hỏi giá hiện tại, nhóm vé, giờ nhận khách cuối và nội dung bao gồm. Chưa xác minh được bảng giá hiện hành của đơn vị vận hành.",
          ],
          bullets: [
            "Xác nhận chỗ dừng hợp pháp, phí, sức chứa và hạn chế phương tiện với điểm đến hoặc tài xế.",
            "Hỏi dịch vụ có hoạt động vào ngày bạn đến hay không; không bảo đảm tiện ích tại chỗ.",
            "Maps chỉ đánh dấu một lối vào tiếp cận được. Toàn tuyến, độ dốc, bề mặt, nhà vệ sinh và hỗ trợ chưa được khảo sát độc lập.",
          ],
        },
      ],
      faq: [
        {
          q: "Giá vé hiện tại là bao nhiêu?",
          a: "Chưa xác nhận bảng giá hiện hành của đơn vị vận hành. Danh bạ tỉnh có khoảng 30.000–60.000 VNĐ không ghi ngày và nhóm vé. Xác nhận giá hiện tại, điều kiện và dịch vụ bao gồm trước khi mua.",
        },
        {
          q: "Mấy giờ đóng cửa?",
          a: "Danh bạ tỉnh ghi 06:00–18:00 không có ngày hiệu lực, còn Maps ngày 30/10/2026 hiển thị đóng 17:00. Cần xác nhận giờ hiện tại và giờ nhận khách cuối; không phải bảo đảm đang mở.",
        },
      ],
    },
    transport: {
      metaTitle: "Cách đến Đường Hầm Điêu Khắc | Clay Tunnel · Đà Lạt",
      metaDescription:
        "Dùng tên điểm đến và địa chỉ trong danh bạ rồi xác nhận cổng và chuyến về. Chưa xác minh tuyến xe buýt, giá cước, khoảng cách hay thời gian cố định.",
      h1: "Cách đến Đường Hầm Điêu Khắc",
      lead: "Dùng tên điểm đến và địa chỉ trong danh bạ rồi xác nhận cổng và chuyến về. Chưa xác minh tuyến xe buýt, giá cước, khoảng cách hay thời gian cố định.",
      card: "Cách đến Đường Hầm Điêu Khắc",
      updated:
        "Kiểm tra 30/10/2026. Danh bạ không ghi ngày hiệu lực hay ảnh chụp bên thứ ba không xác lập giá, giờ và lối vào hiện tại.",
      sections: [
        {
          title: "Địa chỉ và đến nơi",
          paragraphs: [
            "Danh bạ ghi Đường Hoa Hồng, Khu du lịch Hồ Tuyền Lâm, Phường Xuân Hương–Đà Lạt, Lâm Đồng. Hãy xác nhận đúng cổng với tài xế hoặc nơi lưu trú; tài liệu cũ có thể vẫn ghi Phường 4.",
            "Dùng tên điểm đến và địa chỉ Đường Hoa Hồng trong khu du lịch hồ Tuyền Lâm. Xác nhận cổng, chỗ dừng hợp pháp và chuyến về; chưa xác minh tuyến xe buýt, giá cước hay thời gian đi.",
          ],
        },
        {
          title: "Tiếp cận và chuyến về",
          paragraphs: [
            "Dùng tên điểm đến và địa chỉ trong danh bạ tỉnh; thống nhất chỗ dừng xe hợp pháp và chuyến về. Không cam kết khoảng cách hay thời gian cố định.",
            "Maps chỉ đánh dấu lối vào. Hỏi về toàn tuyến, bề mặt, độ dốc, nhà vệ sinh và hỗ trợ; hướng dẫn này chưa khảo sát.",
          ],
        },
        {
          title: "Các điểm khác",
          paragraphs: [
            "Hồ Tuyền Lâm và Thiền Viện Trúc Lâm là các điểm riêng trong khu vực rộng hơn. Vé tham quan điêu khắc không bảo đảm đường nối cùng tuyến, chuyển xe nhanh, cáp treo hay quyền vào các điểm đó.",
          ],
        },
      ],
      faq: [
        {
          q: "Đi đến bằng cách nào?",
          a: "Dùng tên điểm đến và địa chỉ Đường Hoa Hồng trong khu du lịch hồ Tuyền Lâm. Xác nhận cổng, chỗ dừng hợp pháp và chuyến về; chưa xác minh tuyến xe buýt, giá cước hay thời gian đi.",
        },
        {
          q: "Toàn tuyến có tiếp cận được không?",
          a: "Maps chỉ đánh dấu lối vào. Hỏi về toàn tuyến, bề mặt, độ dốc, nhà vệ sinh và hỗ trợ; hướng dẫn này chưa khảo sát.",
        },
      ],
    },
    highlights: {
      metaTitle: "Chủ đề điêu khắc và lưu ý tham quan | Clay Tunnel · Đà Lạt",
      metaDescription:
        "Danh bạ tỉnh giới thiệu mô hình kiến trúc, cảnh quan Đà Lạt và Việt Nam. Khu đang mở và quy định chụp ảnh vẫn cần xác nhận.",
      h1: "Chủ đề điêu khắc và lưu ý tham quan",
      lead: "Danh bạ tỉnh giới thiệu mô hình kiến trúc, cảnh quan Đà Lạt và Việt Nam. Khu đang mở và quy định chụp ảnh vẫn cần xác nhận.",
      card: "Chủ đề điêu khắc và lưu ý tham quan",
      updated:
        "Kiểm tra 30/10/2026. Danh bạ không ghi ngày hiệu lực hay ảnh chụp bên thứ ba không xác lập giá, giờ và lối vào hiện tại.",
      sections: [
        {
          title: "Chủ đề điêu khắc",
          paragraphs: [
            "Điểm điêu khắc trong khu du lịch hồ Tuyền Lâm. Danh bạ du lịch tỉnh mô tả các mô hình kiến trúc và cảnh quan bằng đất sét không nung; hãy xác nhận vé và lối vào trước khi đi.",
          ],
          bullets: [
            "Danh bạ tỉnh mô tả các mô hình địa danh và cảnh quan Đà Lạt, Việt Nam. Đây là cách thể hiện nghệ thuật, không phải các công trình lịch sử nguyên gốc.",
            "Tên gọi không chứng minh đây là hang có mái che, tuyến trú mưa hay đường tiếp cận không bậc. Hỏi về tuyến tham quan và hạn chế hiện tại.",
            "Điểm đến gắn với khu du lịch hồ Tuyền Lâm. Vị trí gần hồ không đồng nghĩa có lối công cộng, dịch vụ thuyền hay tầm nhìn hồ ở mọi nơi.",
          ],
        },
        {
          title: "Chụp ảnh và tiếp cận",
          paragraphs: [
            "Hỏi quy định hiện tại về ảnh cá nhân, chân máy và hoạt động thương mại. Tránh khu hạn chế, không leo hiện vật và xin phép khi chụp người.",
            "Maps chỉ đánh dấu lối vào. Hỏi về toàn tuyến, bề mặt, độ dốc, nhà vệ sinh và hỗ trợ; hướng dẫn này chưa khảo sát.",
          ],
        },
        {
          title: "Tôn trọng điểm đến",
          paragraphs: [
            "Kiểm tra 30/10/2026. Danh bạ không ghi ngày hiệu lực hay ảnh chụp bên thứ ba không xác lập giá, giờ và lối vào hiện tại.",
          ],
          bullets: [
            "Không leo hay chạm hiện vật nếu không được cho phép rõ ràng.",
            "Theo ranh giới và hướng dẫn hiện tại; không vào rừng hoặc nước để chụp ảnh.",
            "Xin phép trước khi chụp người có thể nhận diện; tuân thủ hạn chế.",
            "Dùng nơi bỏ rác được phép hoặc mang rác về.",
          ],
        },
      ],
      faq: [
        {
          q: "Ai vận hành điểm đến?",
          a: "Danh bạ du lịch tỉnh gắn điểm đến với Công ty cổ phần Sao Đà Lạt. Hướng dẫn này độc lập, không phải trang vận hành hay đặt vé đã được xác nhận.",
        },
        {
          q: "Có được chụp ảnh không?",
          a: "Hỏi quy định hiện tại về ảnh cá nhân, chân máy và hoạt động thương mại. Tránh khu hạn chế, không leo hiện vật và xin phép khi chụp người.",
        },
      ],
    },
  },
  zh: {
    ticket: {
      metaTitle: "門票與開放資訊 | 泥雕隧道 · 大叻",
      metaDescription:
        "現價、票種與最後入場仍需確認。對照有日期的Maps快照與未註生效日期的省目錄，不把任一資料當作即時售票方案。",
      h1: "門票與開放資訊",
      lead: "現價、票種與最後入場仍需確認。對照有日期的Maps快照與未註生效日期的省目錄，不把任一資料當作即時售票方案。",
      card: "門票與開放資訊",
      updated:
        "核對日期2026-10-30。未註日期的目錄或第三方快照，不能證明經營方現行票價、時間與通行安排。",
      sections: [
        {
          title: "票價資料",
          paragraphs: [
            "經營方現行票價尚未核實。省目錄列未註日期、未分票種的30,000–60,000越南盾；購票前確認現價、資格與包含服務。",
          ],
        },
        {
          title: "時間與最後入場",
          paragraphs: [
            "省目錄列06:00–18:00但未註生效日期；2026-10-30 Maps快照顯示17:00關門。現行時間與最後入場仍需確認，皆不保證即時開放。",
          ],
        },
        {
          title: "購票前",
          paragraphs: [
            "向經營方確認現價、票種資格、最後入場與包含項目；本站尚未核實現行票價表。",
          ],
          bullets: [
            "向經營方或司機確認合法停靠點、費用、車位與車種限制。",
            "詢問到訪當日是否提供服務；本站不保證現場設施可用。",
            "Maps僅標示無障礙入口；全程坡度、路面、廁所與協助未經獨立實地核查。",
          ],
        },
      ],
      faq: [
        {
          q: "目前門票多少？",
          a: "經營方現行票價尚未核實。省目錄列未註日期、未分票種的30,000–60,000越南盾；購票前確認現價、資格與包含服務。",
        },
        {
          q: "幾點關門？",
          a: "省目錄列06:00–18:00但未註生效日期；2026-10-30 Maps快照顯示17:00關門。現行時間與最後入場仍需確認，皆不保證即時開放。",
        },
      ],
    },
    transport: {
      metaTitle: "如何前往泥雕隧道 | 泥雕隧道 · 大叻",
      metaDescription:
        "使用景點名及省目錄地址，另確認正確入口與回程；未核實固定公車、車資、距離或車程。",
      h1: "如何前往泥雕隧道",
      lead: "使用景點名及省目錄地址，另確認正確入口與回程；未核實固定公車、車資、距離或車程。",
      card: "如何前往泥雕隧道",
      updated:
        "核對日期2026-10-30。未註日期的目錄或第三方快照，不能證明經營方現行票價、時間與通行安排。",
      sections: [
        {
          title: "地址與抵達",
          paragraphs: [
            "目錄地址為Đường Hoa Hồng、Khu du lịch Hồ Tuyền Lâm、Phường Xuân Hương–Đà Lạt、Lâm Đồng。請向司機或住宿方確認入口；舊資料可能仍寫第4坊。",
            "使用景點名與泉林湖旅遊區Đường Hoa Hồng地址，確認入口、合法上下車與回程；尚未核實公車路線、固定車資或車程。",
          ],
        },
        {
          title: "通行與回程",
          paragraphs: [
            "使用景點名稱及省目錄地址，約定合法上下車點與回程；不承諾固定里程或車程。",
            "Maps只標示入口。全程路面、坡度、廁所及協助請另詢問；本站未實地核查。",
          ],
        },
        {
          title: "其他目的地",
          paragraphs: [
            "泉林湖與竹林禪院是較大區域內的其他目的地。參觀雕塑景點不保證同路相通、短時間接駁、纜車可用或其他景點入場。",
          ],
        },
      ],
      faq: [
        {
          q: "如何前往？",
          a: "使用景點名與泉林湖旅遊區Đường Hoa Hồng地址，確認入口、合法上下車與回程；尚未核實公車路線、固定車資或車程。",
        },
        {
          q: "全程無障礙嗎？",
          a: "Maps只標示入口。全程路面、坡度、廁所及協助請另詢問；本站未實地核查。",
        },
      ],
    },
    highlights: {
      metaTitle: "雕塑主題與參觀確認 | 泥雕隧道 · 大叻",
      metaDescription:
        "省目錄介紹大叻與越南建築、景觀的雕塑再現；當日開放區域與攝影規則仍需確認。",
      h1: "雕塑主題與參觀確認",
      lead: "省目錄介紹大叻與越南建築、景觀的雕塑再現；當日開放區域與攝影規則仍需確認。",
      card: "雕塑主題與參觀確認",
      updated:
        "核對日期2026-10-30。未註日期的目錄或第三方快照，不能證明經營方現行票價、時間與通行安排。",
      sections: [
        {
          title: "雕塑主題",
          paragraphs: [
            "位於泉林湖旅遊區的雕塑景點。省旅遊目錄介紹以未燒製黏土呈現建築與景觀的作品；出發前先確認票務與實際入口。",
          ],
          bullets: [
            "省目錄介紹大叻與越南地標、景觀的雕塑再現。這是藝術表現，並非原址歷史建築。",
            "名稱不證明此處是有頂洞穴、避雨路線或無階通道。請詢問當日參觀動線與限制。",
            "景點與泉林湖旅遊區相關；鄰近湖泊不代表有公共步道、船舶服務，或園內任何位置都能看湖。",
          ],
        },
        {
          title: "攝影與通行",
          paragraphs: [
            "先確認個人攝影、腳架與商業拍攝規定；避開限制區，不攀爬作品，拍人像先徵詢同意。",
            "Maps只標示入口。全程路面、坡度、廁所及協助請另詢問；本站未實地核查。",
          ],
        },
        {
          title: "尊重現場",
          paragraphs: [
            "核對日期2026-10-30。未註日期的目錄或第三方快照，不能證明經營方現行票價、時間與通行安排。",
          ],
          bullets: [
            "未獲明確許可時，不攀爬或觸摸展示作品。",
            "遵照現場邊界與員工指示，不為拍照進入林地或水中。",
            "拍攝可辨識人物前先徵詢同意，遵守限制。",
            "使用允許的垃圾設施，否則自行帶走。",
          ],
        },
      ],
      faq: [
        {
          q: "誰經營此景點？",
          a: "省旅遊目錄將景點與Công ty cổ phần Sao Đà Lạt連結；本站為獨立指南，並非已核實的營運或訂票網站。",
        },
        {
          q: "可以拍照嗎？",
          a: "先確認個人攝影、腳架與商業拍攝規定；避開限制區，不攀爬作品，拍人像先徵詢同意。",
        },
      ],
    },
  },
  ko: {
    ticket: {
      metaTitle: "입장료와 운영 정보 | 클레이 터널 · 달랏",
      metaDescription:
        "현재 요금, 대상 구분과 마지막 입장은 확인이 필요합니다. 날짜 있는 Maps 기록과 적용 날짜 없는 지방 목록을 비교하되 실시간 판매 조건으로 보지 마세요.",
      h1: "입장료와 운영 정보",
      lead: "현재 요금, 대상 구분과 마지막 입장은 확인이 필요합니다. 날짜 있는 Maps 기록과 적용 날짜 없는 지방 목록을 비교하되 실시간 판매 조건으로 보지 마세요.",
      card: "입장료와 운영 정보",
      updated:
        "확인일 2026-10-30. 날짜 없는 목록이나 제3자 기록은 현행 운영사 요금·시간·출입 조건을 확정하지 않습니다.",
      sections: [
        {
          title: "요금 정보",
          paragraphs: [
            "운영사의 현행 요금표는 미확인입니다. 지방 목록은 날짜·대상 구분 없이 30,000–60,000 VND를 표시합니다. 구매 전 현재 요금, 대상 조건과 포함 서비스를 확인하세요.",
          ],
        },
        {
          title: "운영 시간과 마지막 입장",
          paragraphs: [
            "날짜 없는 지방 목록은 06:00–18:00, 2026-10-30 Maps 기록은 17:00 종료입니다. 현재 시간과 마지막 입장은 확인이 필요하며 실시간 개방 보장이 아닙니다.",
          ],
        },
        {
          title: "구매 전",
          paragraphs: [
            "현재 요금, 대상 구분, 마지막 입장과 포함 항목을 문의하세요. 운영사의 현행 요금표는 확인되지 않았습니다.",
          ],
          bullets: [
            "장소나 기사에게 합법적 정차 지점, 요금, 수용 공간과 차량 제한을 확인하세요.",
            "방문일에 제공되는지 문의하세요. 현장 서비스 이용을 보장하지 않습니다.",
            "Maps는 접근 가능한 입구만 표시합니다. 전체 경사, 노면, 화장실과 도움은 독립 현장 점검을 하지 않았습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "현재 입장료는 얼마인가요?",
          a: "운영사의 현행 요금표는 미확인입니다. 지방 목록은 날짜·대상 구분 없이 30,000–60,000 VND를 표시합니다. 구매 전 현재 요금, 대상 조건과 포함 서비스를 확인하세요.",
        },
        {
          q: "언제 문을 닫나요?",
          a: "날짜 없는 지방 목록은 06:00–18:00, 2026-10-30 Maps 기록은 17:00 종료입니다. 현재 시간과 마지막 입장은 확인이 필요하며 실시간 개방 보장이 아닙니다.",
        },
      ],
    },
    transport: {
      metaTitle: "클레이 터널 가는 방법 | 클레이 터널 · 달랏",
      metaDescription:
        "명소 이름과 목록 주소를 사용한 뒤 출입구와 귀가 교통을 확인하세요. 고정 버스 노선, 요금, 거리와 이동 시간은 미확인입니다.",
      h1: "클레이 터널 가는 방법",
      lead: "명소 이름과 목록 주소를 사용한 뒤 출입구와 귀가 교통을 확인하세요. 고정 버스 노선, 요금, 거리와 이동 시간은 미확인입니다.",
      card: "클레이 터널 가는 방법",
      updated:
        "확인일 2026-10-30. 날짜 없는 목록이나 제3자 기록은 현행 운영사 요금·시간·출입 조건을 확정하지 않습니다.",
      sections: [
        {
          title: "주소와 도착",
          paragraphs: [
            "목록 주소는 Đường Hoa Hồng, Khu du lịch Hồ Tuyền Lâm, Phường Xuân Hương–Đà Lạt, Lâm Đồng입니다. 운전기사나 숙소에 실제 출입구를 확인하세요. 옛 자료에는 Ward 4가 남아 있을 수 있습니다.",
            "명소 이름과 뚜옌람 관광지구의 Đường Hoa Hồng 주소를 사용하세요. 출입구, 합법적 승하차와 귀가편을 확인하세요. 버스 노선, 고정 요금과 이동 시간은 미확인입니다.",
          ],
        },
        {
          title: "접근과 귀가편",
          paragraphs: [
            "명소 이름과 지방 목록 주소를 사용하고 합법적인 승하차 지점과 귀가편을 정하세요. 일정 거리나 이동 시간은 보장하지 않습니다.",
            "Maps는 입구만 표시합니다. 전체 노면, 경사, 화장실과 도움을 문의하세요. 이 안내는 현장 점검을 하지 않았습니다.",
          ],
        },
        {
          title: "다른 목적지",
          paragraphs: [
            "뚜옌람 호수와 쭉럼 사원은 더 넓은 지역의 별도 목적지입니다. 조각 명소 방문이 같은 길의 연결, 짧은 환승, 케이블카 이용이나 다른 장소 입장을 보장하지 않습니다.",
          ],
        },
      ],
      faq: [
        {
          q: "어떻게 가나요?",
          a: "명소 이름과 뚜옌람 관광지구의 Đường Hoa Hồng 주소를 사용하세요. 출입구, 합법적 승하차와 귀가편을 확인하세요. 버스 노선, 고정 요금과 이동 시간은 미확인입니다.",
        },
        {
          q: "전체 동선이 접근 가능한가요?",
          a: "Maps는 입구만 표시합니다. 전체 노면, 경사, 화장실과 도움을 문의하세요. 이 안내는 현장 점검을 하지 않았습니다.",
        },
      ],
    },
    highlights: {
      metaTitle: "조각 주제와 방문 확인 | 클레이 터널 · 달랏",
      metaDescription:
        "지방 목록은 달랏과 베트남의 건축·경관을 조각으로 재현한 장소로 소개합니다. 당일 개방 구역과 촬영 허용 여부는 확인이 필요합니다.",
      h1: "조각 주제와 방문 확인",
      lead: "지방 목록은 달랏과 베트남의 건축·경관을 조각으로 재현한 장소로 소개합니다. 당일 개방 구역과 촬영 허용 여부는 확인이 필요합니다.",
      card: "조각 주제와 방문 확인",
      updated:
        "확인일 2026-10-30. 날짜 없는 목록이나 제3자 기록은 현행 운영사 요금·시간·출입 조건을 확정하지 않습니다.",
      sections: [
        {
          title: "조각 주제",
          paragraphs: [
            "뚜옌람 관광지구의 조각 명소입니다. 지방 관광 목록은 굽지 않은 점토로 표현한 건축·경관 모형을 소개합니다. 출발 전 입장과 출입구를 확인하세요.",
          ],
          bullets: [
            "지방 목록은 달랏과 베트남의 명소·경관을 재현한 모형을 설명합니다. 예술적 표현이며 원래의 역사 건축물이 아닙니다.",
            "이름만으로 지붕 있는 동굴, 비를 피하는 길 또는 무단차 동선이 확인되지는 않습니다. 당일 관람로와 제한을 문의하세요.",
            "뚜옌람 관광지구와 관련된 명소입니다. 호수 인근이라는 사실이 공공 보행로, 보트 서비스나 모든 장소의 호수 전망을 보장하지 않습니다.",
          ],
        },
        {
          title: "촬영과 접근",
          paragraphs: [
            "개인 촬영, 삼각대와 상업 촬영의 현행 규정을 확인하세요. 제한 구역을 피하고 작품에 올라가지 말며 사람 촬영 전 동의를 구하세요.",
            "Maps는 입구만 표시합니다. 전체 노면, 경사, 화장실과 도움을 문의하세요. 이 안내는 현장 점검을 하지 않았습니다.",
          ],
        },
        {
          title: "현장 존중",
          paragraphs: [
            "확인일 2026-10-30. 날짜 없는 목록이나 제3자 기록은 현행 운영사 요금·시간·출입 조건을 확정하지 않습니다.",
          ],
          bullets: [
            "명시적으로 허용되지 않으면 전시물을 만지거나 올라가지 마세요.",
            "현장 경계와 직원 지시를 따르고 촬영을 위해 숲이나 물에 들어가지 마세요.",
            "식별 가능한 사람을 촬영하기 전에 동의를 구하고 제한을 따르세요.",
            "허용된 처리 시설을 이용하거나 가져간 쓰레기를 되가져오세요.",
          ],
        },
      ],
      faq: [
        {
          q: "누가 운영하나요?",
          a: "지방 관광 목록은 Công ty cổ phần Sao Đà Lạt와 연결해 소개합니다. 이 안내는 독립 사이트이며 확인된 운영·예약 사이트가 아닙니다.",
        },
        {
          q: "사진을 찍어도 되나요?",
          a: "개인 촬영, 삼각대와 상업 촬영의 현행 규정을 확인하세요. 제한 구역을 피하고 작품에 올라가지 말며 사람 촬영 전 동의를 구하세요.",
        },
      ],
    },
  },
};
