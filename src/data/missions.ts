import { LessonPlan } from '../types';

export const MISSIONS: LessonPlan[] = [
  {
    id: 'man-1',
    overview: {
      lessonNumber: 1,
      stageId: 'man-1',
      codeName: 'Màn 1: Nhập môn & Bản đồ câu lệnh',
      lessonTitle: 'Đánh thức Trạm Vũ Trụ Pythonia & Pháo hiệu Tín hiệu SOS',
      missionBriefing:
        'Cảnh báo cấp 1! Trạm vũ trụ Pythonia vừa trôi dạt vào tinh vân Đen sau một vụ nổ thiên thạch. Toàn bộ màn hình điều khiển đều tối đen! Các Phi hành gia nhí hãy nạp đạn code với lệnh `print()` để thắp sáng đài chỉ huy và bắn tín hiệu cứu hộ ASCII xuyên qua không gian!',
      unlockedSkills: [
        'Làm chủ cú pháp lệnh print() và quy tắc bao bọc chuỗi (quotes)',
        'Kỹ thuật in nhiều dòng, ký tự đặc biệt (\\n, \\t) tạo hiệu ứng thị giác',
        'Sáng tạo phi thuyền và pháo hiệu không gian bằng nghệ thuật ASCII Art',
      ],
      requiredEquipment: ['Python 3.10+', 'Trình thông dịch dòng lệnh Terminal Vũ Trụ'],
      badge: {
        name: 'Ngọn Đuốc Pythonia',
        icon: '🔦',
        description: 'Chiến binh thắp sáng bảng điều khiển trạm không gian',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Báo động Tinh vân Đen',
        duration: '00:00 - 00:45',
        visual: 'Màn hình chớp nháy màu đỏ báo động. Robot A.X.E.L xuất hiện với mắt LED xoay tròn lo lắng, tay vẫy gọi người chơi.',
        voiceover:
          'Bíp bíp! Tỉnh dậy mau các Chiến binh Code ơi! Trạm Pythonia vừa va phải mảnh vỡ thiên thạch, hệ thống điều khiển trung tâm tắt ngúm rồi! Tôi là A.X.E.L – hoa tiêu robot của các bạn. Chúng ta cần câu lệnh đầu tiên để đánh thức lõi năng lượng ngay lập tức!',
        sfx: 'Tiếng còi báo động khẩn cấp (Klaxon), tiếng tia lửa điện lách tách rẹt rẹt.',
        onScreenCode: '# Trạng thái trạm: HẾT NĂNG LƯỢNG!\nprint("HỆ THỐNG KHỞI ĐỘNG...")',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Chìa khóa Thần kỳ print()',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L giơ lên một chiếc chìa khóa phát sáng neon màu ngọc lam, chỉ vào cặp ngoặc tròn `()` và cặp nháy kép `""`.',
        voiceover:
          'Nhìn này các phi hành gia! Trong thế giới Python, lệnh `print()` giống hệt như chiếc loa phóng thanh siêu lượng tử. Mọi thông điệp bạn muốn truyền ra vũ trụ đều phải nằm ngoan ngoãn trong cặp nháy kép "" và chiếc ngoặc tròn (). Quên một chiếc nháy kép là quái vật SyntaxError sẽ nuốt chửng tín hiệu ngay!',
        sfx: 'Tiếng sạc năng lượng "Wub-wub-vrooom", hiệu ứng tia sáng xanh phát ra.',
        onScreenCode: 'print("Tín hiệu từ A.X.E.L: Đã nạp đạn!")',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Bản đồ Sao & Ký tự Đặc biệt',
        duration: '01:30 - 02:15',
        visual: 'A.X.E.L phóng to một ma trận ký tự sao lấp lánh, giải thích cách ngắt dòng `\\n` biến một dòng chữ dài thành tháp tên lửa.',
        voiceover:
          'Muốn gửi tọa độ phân tầng? Hãy gắn thêm siêu năng lực `\\n` – ký tự tàng hình sẽ tự động dịch chuyển con trỏ sang dòng tiếp theo như bước nhảy Hyper-jump! Một lệnh print duy nhất có thể dựng cả trạm không gian!',
        sfx: 'Tiếng teleport "Woosh!", tiếng gõ phím cơ tích tắc thanh thoát.',
        onScreenCode: 'print("Tầng 1: Động cơ\\nTầng 2: Buồng lái\\nTầng 3: Radar")',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Pháo hoa ASCII Khải hoàn',
        duration: '02:15 - 03:00',
        visual: 'Toàn bộ màn hình phụ bừng sáng màu cyan và vàng kim. Một phi thuyền ASCII Art hiện lên kiêu hãnh giữa ngàn vì sao.',
        voiceover:
          'Tuyệt đỉnh phi hành gia! Nhìn kìa, đài chỉ huy đã bừng sáng rực rỡ! Phi thuyền cứu hộ đã nhìn thấy pháo hiệu ASCII của chúng ta! Giờ là lúc các chiến binh bước vào khoang thực hành để tự tay chế tạo pháo hiệu chiến thắng!',
        sfx: 'Nhạc nền chiến thắng sôi động, tiếng reo hò robot điện tử "Chiptune cheer".',
        onScreenCode: 'print("  /\\\\  \\n ( == ) \\n /|  |\\\\ \\n/_|__|_\\\\")',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 1: KHỞI ĐỘNG HỆ THỐNG TRẠM VŨ TRỤ PYTHONIA
# Tác giả: A.X.E.L & Phi Hành Gia Code
# ==============================================================

# 1. Phát loa thông báo chào mừng phi hành đoàn
print("==================================================")
print("  🚀 CHÀO MỪNG ĐẾN VỚI TÀU THÁM HIỂM PYTHONIA 🚀  ")
print("==================================================")

# 2. Kiểm tra các chỉ số sinh tồn của trạm
print("Trạng thái oxy: [100%] Bình thường")
print("Lõi năng lượng Plasma: [85%] Ổn định")
print("Vị trí: Tinh vân Orion - Tọa độ 42.0.7")

# 3. Pháo hiệu phi thuyền ASCII Art cứu viện
print("\\n[PHÁO HIỆU KHẨN CẤP ĐANG PHÁT RA VŨ TRỤ]")
print("      /\\\\      ")
print("     /  \\\\     ")
print("    / ~~ \\\\    ")
print("   |  AX  |   ")
print("   |  EL  |   ")
print("  /|======|\\\\  ")
print(" / |      | \\\\ ")
print("/__|______|_\\\\")
print("    ******    ")
print("     ****     ")
print("      **      ")
print("PYTHONIA SẴN SÀNG CẤT CÁNH!")
`,
    sampleCodeExplanation: 'Đoạn mã kích hoạt toàn bộ hệ thống đài chỉ huy bằng lệnh print, sử dụng \\n để giãn cách và tạo mô hình tên lửa ASCII tuyệt đẹp.',
    challenges: [
      {
        id: 'c1-1',
        name: 'Khởi động: Bật Đèn Đèn Tín Hiệu SOS',
        isBoss: false,
        situation: 'Trạm chỉ huy cần bạn gửi dòng chữ chính xác: `SOS: Pythonia da thuc giac!` để các vệ tinh xung quanh nhận diện.',
        hintLevel1: 'Dùng lệnh in quen thuộc `print(...)` và nhớ bọc thông điệp trong cặp ngoặc kép.',
        hintLevel2Skeleton: '# Điền lệnh in thích hợp vào ô trống bên dưới:\n_____("SOS: Pythonia da thuc giac!")',
        hintLevel3Solution: 'print("SOS: Pythonia da thuc giac!")',
        hintLevel3Explanation: 'Lệnh print() xuất nguyên văn chuỗi ký tự trong ngoặc kép ra màn hình điều khiển.',
        starterCode: '# Gõ code nạp năng lượng phát tín hiệu SOS tại đây:\n',
        expectedOutputSnippet: 'SOS: Pythonia da thuc giac!',
        testKeywords: ['print', 'SOS: Pythonia da thuc giac!'],
        xpReward: 50,
      },
      {
        id: 'c1-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Cú Pháp Thiếu Ngoặc',
        isBoss: true,
        situation:
          'Một con bọ vũ trụ mang tên SyntaxError đã cắn đứt một nửa câu lệnh xuất radar! Nhiệm vụ của bạn là sửa chữa đoạn mã lỗi sau để hiển thị 3 dòng radar: "RADAR ACTIVE", "QUÉT GÓC 360", "AN TOÀN".',
        hintLevel1: 'Hãy quan sát kỹ xem câu lệnh print đã đủ cả dấu ngoặc mở tròn `(`, ngoặc đóng tròn `)`, và cả 2 dấu nháy kép `"` chưa.',
        hintLevel2Skeleton: '# Sửa lại câu lệnh bị cắn cụt đuôi:\nprint("RADAR ACTIVE")\nprint(____QUÉT GÓC 360____)\nprint("AN TOÀN")',
        hintLevel3Solution: 'print("RADAR ACTIVE")\nprint("QUÉT GÓC 360")\nprint("AN TOÀN")',
        hintLevel3Explanation: 'Mọi chuỗi ký tự đều phải bắt đầu và kết thúc bằng cặp nháy đồng nhất cùng ngoặc tròn.',
        starterCode: '# Hãy tiêu diệt Boss Bug bằng cách sửa code dưới đây:\nprint("RADAR ACTIVE")\nprint("QUÉT GÓC 360)\nprint AN TOÀN\n',
        expectedOutputSnippet: 'AN TOÀN',
        testKeywords: ['print("RADAR ACTIVE")', 'print("QUÉT GÓC 360")', 'print("AN TOÀN")'],
        xpReward: 100,
      },
    ],
  },
  {
    id: 'man-2',
    overview: {
      lessonNumber: 2,
      stageId: 'man-2',
      codeName: 'Màn 2: Thùng chứa năng lượng',
      lessonTitle: 'Kho Chứa Năng Lượng Tử & Phép Thuật Biến Số',
      missionBriefing:
        'Trọng lực nhân tạo đang suy yếu! Lõi phản ứng cần tính toán chính xác dung lượng pin, số lượng thỏi Uranium và phần trăm khiên năng lượng. Các chiến binh hãy biến các ô nhớ thành "Thùng chứa năng lượng" (Biến số), thực hiện phép cộng trừ nhân chia và ép kiểu dữ liệu để cứu trạm!',
      unlockedSkills: [
        'Quy tắc đặt tên biến chuẩn sci-fi (snake_case, không khoảng trắng)',
        'Phân biệt 4 chủng loại dữ liệu vũ trụ: int (nguyên), float (thực), str (chuỗi), bool (logic)',
        'Sử dụng các toán tử số học (+, -, *, /, //, %) và hàm ép kiểu str(), int()',
      ],
      requiredEquipment: ['Python 3.10+', 'Thước đo năng lượng toán tử'],
      badge: {
        name: 'Bậc Thầy Tích Trữ',
        icon: '🔋',
        description: 'Chuyên gia điều phối dung lượng và ép kiểu biến số',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Cảnh báo Hụt Pin',
        duration: '00:00 - 00:40',
        visual: 'A.X.E.L ôm một cục pin to tướng đang nhấp nháy 15%. Màn hình hiển thị các thùng chứa rỗng không có nhãn dán.',
        voiceover:
          'Báo cáo thuyền trưởng! Năng lượng trạm chỉ còn một mẩu nhỏ xíu! Chúng ta có vô số thỏi năng lượng rải rác nhưng không có nhãn ghi tên. Chúng ta cần những chiếc hộp thần kỳ mang tên BIẾN SỐ để lưu trữ và quản lý tài nguyên!',
        sfx: 'Âm thanh máy đo pin yếu "Tít... tít... tít", tiếng đóng mở rương kim loại.',
        onScreenCode: 'pin_hien_tai = 15\nthoi_plasma = 6',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Đặt Tên Chiếc Hộp Ma Thuật',
        duration: '00:40 - 01:25',
        visual: 'A.X.E.L dùng bút laser khắc tên `ten_phi_thuyen = "Phượng Hoàng Lửa"` lên chiếc hộp chứa.',
        voiceover:
          'Quy tắc vũ trụ số 1: Tên biến phải viết liền không dấu, dùng gạch dưới `_` để nối từ, và tuyệt đối không bắt đầu bằng số nhé! Dấu bằng `=` ở đây không phải phép bằng trong sách toán đâu, mà là PHÉP GÁN – rót giá trị bên phải vào chiếc hộp bên trái!',
        sfx: 'Tiếng bút laser xoèn xoẹt, hiệu ứng hạt bụi sao lấp lánh.',
        onScreenCode: 'toc_do_anh_sang = 299792\nkhiem_nang_luong = True',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Bẫy Ép Kiểu & Máy Ghép Chuỗi',
        duration: '01:25 - 02:10',
        visual: 'A.X.E.L cố gắng ghép số 100 với chữ "Vôn" nhưng bị giật điện té khói! Mắt biến thành hình dấu hỏi xám xịt.',
        voiceover:
          'Ái chà chà! Bạn không thể lấy một con số (int) đem cộng thẳng với một dòng chữ (str) được, quái vật TypeError sẽ phóng điện ngay! Hãy dùng bùa chú `str(so_dien)` để biến số thành chữ trước khi ghép nối nhé!',
        sfx: 'Tiếng điện giật "Zzzap!", A.X.E.L lắc đầu kêu leng keng.',
        onScreenCode: '# SAI: "Năng lượng: " + 100\n# ĐÚNG: "Năng lượng: " + str(100)',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Phục Hồi Khiên Bảo Vệ',
        duration: '02:10 - 03:00',
        visual: 'Vòm kính trạm bọc một lớp màng bảo vệ màu ngọc bích óng ánh khi công thức toán tử hoàn tất.',
        voiceover:
          'Khiên bảo vệ đã được nạp đầy 100%! Nhờ có các biến số, trạm Pythonia đã tính toán được chính xác công suất chịu lực của 10 cơn bão mặt trời sắp tới!',
        sfx: 'Âm thanh khiên bảo vệ kích hoạt "Shhzzzzz-ping!", tiếng nhạc hùng tráng.',
        onScreenCode: 'tong_nang_luong = thoi_plasma * 20\nprint("Khiên:", tong_nang_luong, "%")',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 2: QUẢN LÝ KHO LƯƠNG THỰC & NĂNG LƯỢNG TRẠM
# ==============================================================

# Khởi tạo các thùng chứa biến số
ten_chien_binh = "Alex Thần Tốc"     # Kiểu chuỗi (str)
so_vien_nang_oxy = 45                # Kiểu số nguyên (int)
luong_nuoc_uong = 12.5               # Kiểu số thực (float)
khiem_chan_hoat_dong = True          # Kiểu logic (bool)

# Tính toán mức tiêu thụ sau 3 ngày
so_ngay = 3
oxy_da_dung = so_ngay * 5
oxy_con_lai = so_vien_nang_oxy - oxy_da_dung

# Ép kiểu dữ liệu và in báo cáo sinh tồn
print("--- NHẬT KÝ SINH TỒN CHIẾN BINH ---")
print("Phi hành gia: " + ten_chien_binh)
print("Oxy ban đầu: " + str(so_vien_nang_oxy) + " viên")
print("Oxy đã dùng sau " + str(so_ngay) + " ngày: " + str(oxy_da_dung) + " viên")
print("Oxy còn lại trong kho: " + str(oxy_con_lai) + " viên!")

# Kiểm tra năng lượng còn an toàn không
muc_an_toan = oxy_con_lai > 20
print("Trạng thái oxy an toàn: " + str(muc_an_toan))
`,
    sampleCodeExplanation: 'Chương trình khai báo các biến số, thực hiện phép nhân trừ và dùng str() để ghép chuỗi in báo cáo trạng thái oxy.',
    challenges: [
      {
        id: 'c2-1',
        name: 'Khởi động: Đong Đếm Tinh Thể Pha Lê',
        isBoss: false,
        situation: 'Mỗi tinh thể pha lê cung cấp 15 đơn vị giáp. Bạn đang có 8 tinh thể. Hãy dùng biến để tính và in ra tổng giáp `tong_giap`.',
        hintLevel1: 'Tạo biến `tinh_the = 8`, `nang_luong_moi_vien = 15`, rồi dùng phép nhân `*`.',
        hintLevel2Skeleton: 'tinh_the = 8\ngiap_moi_vien = 15\ntong_giap = _____ * giap_moi_vien\nprint("Tổng giáp:", tong_giap)',
        hintLevel3Solution: 'tinh_the = 8\ngiap_moi_vien = 15\ntong_giap = tinh_the * giap_moi_vien\nprint("Tổng giáp:", tong_giap)',
        hintLevel3Explanation: 'Biến tong_giap chứa kết quả phép nhân 8 * 15 = 120 đơn vị giáp.',
        starterCode: '# Viết code tính tổng giáp bảo vệ tại đây:\n',
        expectedOutputSnippet: 'Tổng giáp: 120',
        testKeywords: ['tong_giap', '*', 'print'],
        xpReward: 60,
      },
      {
        id: 'c2-2',
        name: 'Trùm Cuối Boss Bug: Quái Thú Ép Kiểu TypeError',
        isBoss: true,
        situation:
          'Boss TypeError đang phong tỏa cửa hầm! Câu lệnh ghép nối `print("Năng lượng: " + muc_pin)` bị nổ tung vì muc_pin là số nguyên. Hãy thuần hóa nó!',
        hintLevel1: 'Hàm `str(x)` sẽ biến số nguyên x thành chuỗi ký tự hiền hòa.',
        hintLevel2Skeleton: 'muc_pin = 99\n# Sửa dòng dưới bằng cách bọc str() quanh muc_pin\nprint("Năng lượng: " + _____(muc_pin) + "%")',
        hintLevel3Solution: 'muc_pin = 99\nprint("Năng lượng: " + str(muc_pin) + "%")',
        hintLevel3Explanation: 'Ép kiểu số 99 thành chuỗi "99" trước khi dùng dấu + để ghép nối.',
        starterCode: 'muc_pin = 99\n# Sửa lỗi dòng dưới:\nprint("Năng lượng: " + muc_pin + "%")\n',
        expectedOutputSnippet: 'Năng lượng: 99%',
        testKeywords: ['str(muc_pin)', 'print'],
        xpReward: 110,
      },
    ],
  },
  {
    id: 'man-3',
    overview: {
      lessonNumber: 3,
      stageId: 'man-3',
      codeName: 'Màn 3: Cổng giao tiếp hai chiều',
      lessonTitle: 'Cổng Liên Lạc NPC & Hàm input() Thần Kỳ',
      missionBriefing:
        'Trạm phát hiện một tín hiệu vô tuyến lạ từ một sinh vật ngoài hành tinh mang tên Zorblax! Hắn yêu cầu xác minh danh tính và mật khẩu trước khi mở cổng không gian. Hãy lập trình cổng giao tiếp hai chiều bằng hàm `input()` để trò chuyện và đàm phán hòa bình!',
      unlockedSkills: [
        'Thu nhận dữ liệu từ bàn phím người dùng qua hàm input()',
        'Tạo lời nhắc sinh động (prompt) hướng dẫn tương tác',
        'Xử lý và ép kiểu dữ liệu đầu vào (int(input()), float(input())) để tính toán',
      ],
      requiredEquipment: ['Python 3.10+', 'Bộ chuyển mã ngôn ngữ vũ trụ'],
      badge: {
        name: 'Đại Sứ Thiên Hà',
        icon: '📡',
        description: 'Bậc thầy giao tiếp và đàm phán cùng NPC vũ trụ',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Tiếng Gõ Cửa Không Gian',
        duration: '00:00 - 00:45',
        visual: 'Màn hình hiện bóng một người ngoài hành tinh 3 mắt vui nhộn gõ cộc cộc vào kính trạm.',
        voiceover:
          'Grừ... bíp! Có ai ở nhà không? Một NPC vũ trụ đang đứng trước cổng! Nhưng trạm của chúng ta trước giờ chỉ biết nói một chiều bằng print thôi. Phải mở cổng giao tiếp hai chiều ngay!',
        sfx: 'Tiếng gõ cửa "Knock knock", tiếng sóng radio rè rè.',
        onScreenCode: '# Chế độ độc thoại: CŨ\n# Cần chế độ đàm thoại: MỚI!',
        axelMood: 'excited',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Chiếc Micro Lượng Tử input()',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L đưa micro ra phía trước, con trỏ nhấp nháy đợi người dùng nhập chữ.',
        voiceover:
          'Hàm `input()` hoạt động như một chiếc micro lượng tử! Khi Python gặp lệnh này, nó sẽ dừng chương trình lại, kiên nhẫn đợi phi hành gia gõ phím và nhấn Enter. Mọi thứ bạn nói sẽ được thu gọn vào chiếc hộp biến số!',
        sfx: 'Tiếng con trỏ nhấp nháy "Blip... blip...", tiếng gõ phím cơ rộn rã.',
        onScreenCode: 'ten = input("Ngươi tên là gì hỡi kẻ lạ? ")',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Bí Ẩn Chuỗi Ký Tự',
        duration: '01:30 - 02:15',
        visual: 'A.X.E.L nhập tuổi là 15 nhưng khi cộng với 1 lại thành "151" chứ không phải 16!',
        voiceover:
          'Khoan đã! Chú ý cảnh báo đỏ! Bất kỳ thứ gì đi qua chiếc micro input() đều mặc định biến thành DÒNG CHỮ (str). Nếu muốn tính toán tuổi tác hay số điểm, bạn phải bọc bùa chú `int(input())` để hóa phép nó thành con số thực thụ nhé!',
        sfx: 'Tiếng còi huýt nhắc nhở "Tweet!", icon bóng đèn sáng trên đầu A.X.E.L.',
        onScreenCode: 'tuoi = int(input("Nhập tuổi của bạn: "))\ntuoi_sang_nam = tuoi + 1',
        axelMood: 'warning',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Bắt Tay Hòa Bình',
        duration: '02:15 - 03:00',
        visual: 'Người ngoài hành tinh Zorblax cười tươi, tặng phi hành đoàn một giỏ bánh quy sao.',
        voiceover:
          'Hoan hô! Cổng giao tiếp đã thông suốt! Zorblax đã nhận được danh xưng của bạn và mở khóa cánh cửa dẫn vào khoang đồ họa!',
        sfx: 'Tiếng vỗ tay hoan hô, âm thanh nhận quà "Ting ting ting!".',
        onScreenCode: 'print(f"Chào mừng chiến binh {ten} gia nhập liên minh!")',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 3: CỔNG ĐỐI THOẠI CÙNG NPC VŨ TRỤ ZORBLAX
# ==============================================================

print("📡 --- ĐÀI THU PHÁT LIÊN HÀNH TINH KÍCH HOẠT --- 📡")

# Thu thập thông tin từ phi hành gia
ten_cadet = input("A.X.E.L: Xin chào! Danh xưng phi hành gia của bạn là gì? ")
hanh_tinh_que_huong = input("Bạn đến từ hành tinh nào (Ví dụ: Trái Đất, Hỏa Tinh)? ")

# Thu thập số liệu có ép kiểu
nam_sinh = int(input("Năm sinh của bạn theo lịch Trái Đất: "))
nam_hien_tai = 2050
so_tuoi_tuong_lai = nam_hien_tai - nam_sinh

# Trình diễn kết quả đối thoại
print("\\n[A.X.E.L ĐANG PHÂN TÍCH DỮ LIỆU...]")
print("Xác nhận danh tính:")
print("- Tên: " + ten_cadet)
print("- Quê hương: " + hanh_tinh_que_huong)
print("- Đến năm 2050, bạn sẽ chu du vũ trụ ở tuổi: " + str(so_tuoi_tuong_lai))
print("NPC Zorblax gật đầu: 'Chào đón " + ten_cadet + " bước vào trạm!'")
`,
    sampleCodeExplanation: 'Mã sử dụng input() để nhận tên và quê hương, kết hợp int(input()) để tính số tuổi vào năm 2050.',
    challenges: [
      {
        id: 'c3-1',
        name: 'Khởi động: Lấy Mật Khẩu Qua Cổng',
        isBoss: false,
        situation: 'Hệ thống an ninh trạm hỏi: "Nhập mật mã trạm: ". Hãy dùng input() lưu vào biến `mat_ma` và in ra "Mật mã tiếp nhận: " kèm mật mã đó.',
        hintLevel1: 'Dùng lệnh `mat_ma = input(...)` rồi dùng `print()` để xuất kết quả.',
        hintLevel2Skeleton: 'mat_ma = _____("Nhập mật mã trạm: ")\nprint("Mật mã tiếp nhận:", mat_ma)',
        hintLevel3Solution: 'mat_ma = input("Nhập mật mã trạm: ")\nprint("Mật mã tiếp nhận:", mat_ma)',
        hintLevel3Explanation: 'input() dừng màn hình và trả về chuỗi văn bản người dùng gõ.',
        starterCode: '# Nhập mật khẩu qua cổng an ninh:\n',
        expectedOutputSnippet: 'Mật mã tiếp nhận',
        testKeywords: ['input', 'mat_ma', 'print'],
        xpReward: 60,
      },
      {
        id: 'c3-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Nối Số Thành Chữ',
        isBoss: true,
        situation:
          'Zorblax muốn bạn nhập số thỏi vàng thiên thạch (ví dụ 5) rồi gấp đôi nó lên để chia đôi thưởng. Nhưng hệ thống đang cộng "5" + "5" = "55"! Hãy sửa bằng `int()`.',
        hintLevel1: 'Hãy bọc `int(...)` bên ngoài hàm `input(...)`.',
        hintLevel2Skeleton: '# Sửa dòng input thành kiểu số nguyên:\nso_vang = _____(input("Số vàng bạn tìm thấy: "))\ngap_doi = so_vang * 2\nprint("Thưởng gấp đôi:", gap_doi)',
        hintLevel3Solution: 'so_vang = int(input("Số vàng bạn tìm thấy: "))\ngap_doi = so_vang * 2\nprint("Thưởng gấp đôi:", gap_doi)',
        hintLevel3Explanation: 'int(input()) ép chuỗi vừa nhập thành số nguyên để phép nhân * thực hiện đúng số học.',
        starterCode: 'so_vang = input("Số vàng bạn tìm thấy: ")\ngap_doi = so_vang * 2\nprint("Thưởng gấp đôi:", gap_doi)\n',
        expectedOutputSnippet: 'Thưởng gấp đôi',
        testKeywords: ['int(input', 'gap_doi', 'print'],
        xpReward: 120,
      },
    ],
  },
  {
    id: 'man-4',
    overview: {
      lessonNumber: 4,
      stageId: 'man-4',
      codeName: 'Màn 4: Bản đồ đồ họa cùng Rùa Không Gian',
      lessonTitle: 'Hạm Đội Rùa Không Gian & Vẽ Bản Đồ Tinh Cầu',
      missionBriefing:
        'Hệ thống radar quang học bị sương mù vũ trụ bao phủ! Để tìm đường thoát khỏi vành đai tiểu hành tinh, chúng ta cần phóng "Rùa Thám Hiểm" (Thư viện Turtle). Bằng cách điều khiển tọa độ x/y, góc xoay độ và màu mực plasma, bạn sẽ vẽ nên bản đồ thiên hà và khiên bảo hộ tam giác!',
      unlockedSkills: [
        'Khai thác thư viện đồ họa chuẩn mực: import turtle',
        'Làm chủ hệ tọa độ Cartesian (x, y) và các chuyển động: forward(), backward(), left(), right()',
        'Thiết lập phong cách đồ họa sci-fi: pensize, color, speed, begin_fill, end_fill',
      ],
      requiredEquipment: ['Python 3.10+', 'Thư viện Turtle Graphic', 'Màn hình Canvas Lượng Tử'],
      badge: {
        name: 'Họa Sĩ Tinh Hà',
        icon: '🐢',
        description: 'Chỉ huy Rùa Không Gian vẽ bản đồ chòm sao tuyệt mỹ',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Đánh Thức Rùa Cơ Khí',
        duration: '00:00 - 00:45',
        visual: 'Một chú rùa robot kim loại màu xanh neon mang mai phản lực bay lơ lửng trên màn hình đen vũ trụ.',
        voiceover:
          'Xin giới thiệu người bạn đồng hành mới: Rùa Cơ Khí T-800! Chú rùa này mang theo một cây bút vẽ laser plasma siêu hạng. Chỉ cần bạn ra lệnh bằng tiếng Python, chú sẽ lướt qua màn hình để vẽ nên mọi kỳ quan!',
        sfx: 'Tiếng khởi động phản lực mini "Vroooosh", tiếng tít tít tọa độ.',
        onScreenCode: 'import turtle\nt = turtle.Turtle()',
        axelMood: 'excited',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: La Bàn Không Gian 360 Độ',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L chỉ vào một vòng tròn la bàn xoay. Rùa quay sang trái 90 độ, rồi bay thẳng 100 bước.',
        voiceover:
          'Hai câu thần chú cơ bản nhất của rùa: `forward(100)` tiến lên 100 bước, và `left(90)` xoay mũi tàu sang trái một góc vuông! Muốn rùa rẽ phải? Đơn giản gọi `right(góc)`. Hãy nhớ rùa luôn nhìn về hướng Đông khi xuất phát nhé!',
        sfx: 'Tiếng động cơ bước "Clack-turn-whir", vệt bút vẽ sáng loáng.',
        onScreenCode: 't.forward(100)\nt.left(90)\nt.forward(100)',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Tô Màu Khiên Năng Lượng',
        duration: '01:30 - 02:15',
        visual: 'Hình vuông vừa vẽ được đổ đầy màu ngọc lam rực rỡ nhờ cặp bùa chú `begin_fill()` và `end_fill()`.',
        voiceover:
          'Không chỉ vẽ nét đơn độc đâu! Bạn có thể dặn rùa: "Hãy bắt đầu đổ sơn" bằng `begin_fill()`, vẽ xong hình thì gọi `end_fill()`. Chiếc khiên hình vuông hay ngôi sao sẽ biến thành lá chắn năng lượng đặc kín!',
        sfx: 'Tiếng sơn lấp lánh như phép màu "Shimmer... ding!".',
        onScreenCode: 't.color("cyan", "blue")\nt.begin_fill()\n# Vẽ hình\nt.end_fill()',
        axelMood: 'excited',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Bản Đồ Chòm Sao Hoàn Tất',
        duration: '02:15 - 03:00',
        visual: 'Một chòm sao Bắc Đẩu và hình phi thuyền hiện ra hoàn mỹ trên nền sao đen thẫm.',
        voiceover:
          'Tuyệt vời! Lộ trình an toàn đã hiện rõ trước mắt phi hành đoàn. Con đường vượt qua vành đai thiên thạch đã mở! Hãy cầm bút lên và vẽ tiếp nào!',
        sfx: 'Tiếng chuông ngân vang, A.X.E.L vẫy cờ hoa chúc mừng.',
        onScreenCode: 'turtle.done()',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 4: VẼ KHIÊN NĂNG LƯỢNG HÌNH VUÔNG BẢO VỆ TRẠM
# ==============================================================

import turtle

# Thiết lập cửa sổ vũ trụ
man_hinh = turtle.Screen()
man_hinh.bgcolor("black")
man_hinh.title("TRẠM VŨ TRỤ PYTHONIA - HỆ THỐNG PHÒNG THỦ TURTLE")

# Khởi tạo chiến binh Rùa
rua = turtle.Turtle()
rua.shape("turtle")
rua.color("cyan", "darkblue")
rua.pensize(4)
rua.speed(3)

# Bắt đầu đổ màu khiên năng lượng
rua.begin_fill()

# Vẽ cạnh 1
rua.forward(120)
rua.left(90)

# Vẽ cạnh 2
rua.forward(120)
rua.left(90)

# Vẽ cạnh 3
rua.forward(120)
rua.left(90)

# Vẽ cạnh 4 hoàn tất hình vuông
rua.forward(120)
rua.left(90)

# Kết thúc đổ màu khiên
rua.end_fill()

# Rùa bay lên tâm khiên vẽ lõi năng lượng
rua.penup()
rua.goto(60, 60)
rua.pendown()
rua.color("yellow")
rua.dot(30)

print("Khiên bảo vệ hình vuông đã vẽ xong!")
turtle.done()
`,
    sampleCodeExplanation: 'Mã điều khiển rùa đi 4 cạnh góc 90 độ, đổ màu xanh cyan và chấm một điểm năng lượng vàng ở tâm.',
    challenges: [
      {
        id: 'c4-1',
        name: 'Khởi động: Khiên Tam Giác Cân Bằng',
        isBoss: false,
        situation: 'Để che chắn mũi tàu nhọn, hãy điều khiển rùa vẽ một tam giác đều 3 cạnh 100 bước, mỗi góc xoay 120 độ.',
        hintLevel1: 'Tam giác có 3 cạnh, mỗi lần quay sang trái gọi `rua.left(120)`.',
        hintLevel2Skeleton: 'rua.forward(100)\nrua.left(120)\nrua.forward(100)\nrua.left(____)\nrua.forward(100)',
        hintLevel3Solution: 'rua.forward(100)\nrua.left(120)\nrua.forward(100)\nrua.left(120)\nrua.forward(100)',
        hintLevel3Explanation: 'Tổng các góc ngoài của tam giác là 360 độ, mỗi góc xoay là 360 / 3 = 120 độ.',
        starterCode: '# Vẽ tam giác bảo vệ mũi tàu:\nrua.forward(100)\n',
        expectedOutputSnippet: 'left(120)',
        testKeywords: ['forward', 'left', '120'],
        xpReward: 70,
      },
      {
        id: 'c4-2',
        name: 'Trùm Cuối Boss Bug: Ngôi Sao 5 Cánh Lạc Hướng',
        isBoss: true,
        situation:
          'Boss Gốc Tọa Độ khiến rùa vẽ ngôi sao bị méo vì góc xoay sai! Hãy lập trình cho rùa vẽ đủ 5 cánh ngôi sao với góc xoay chuẩn `144` độ.',
        hintLevel1: 'Ngôi sao 5 cánh cần xoay góc `144` độ sau mỗi cạnh.',
        hintLevel2Skeleton: '# Hoàn thành 5 cạnh ngôi sao:\nfor i in range(5):\n    rua.forward(150)\n    rua.right(_____)',
        hintLevel3Solution: 'for i in range(5):\n    rua.forward(150)\n    rua.right(144)',
        hintLevel3Explanation: 'Ngôi sao 5 cánh khép kín có góc quay ngoài là 144 độ (720 / 5).',
        starterCode: '# Chỉnh sửa góc xoay để hoàn thành ngôi sao:\nfor i in range(5):\n    rua.forward(150)\n    rua.right(90) # Góc này đang sai!\n',
        expectedOutputSnippet: '144',
        testKeywords: ['forward', '144'],
        xpReward: 130,
      },
    ],
  },
  {
    id: 'man-5',
    overview: {
      lessonNumber: 5,
      stageId: 'man-5',
      codeName: 'Màn 5: Ngã rẽ quyết định',
      lessonTitle: 'Ngã Rẽ Vận Mệnh & Cấu Trúc Điều Kiện if - elif - else',
      missionBriefing:
        'Phát hiện vật thể bay không xác định đang lao tới với tốc độ 5000 km/h! Hệ thống phòng thủ tự động phải phân loại ngay lập tức: Nếu là thiên thạch -> Khai hỏa laser; Nếu là tàu đồng minh -> Mở cổng tiếp đón; Ngược lại nếu là cướp biển vũ trụ -> Kích hoạt khiên tàng hình! Tất cả dựa vào trí thông minh của cấu trúc `if - elif - else`!',
      unlockedSkills: [
        'Cú pháp rẽ nhánh điều kiện: if, elif, else và quy tắc thụt đầu dòng (indentation)',
        'Sử dụng các toán tử so sánh logic (==, !=, >, <, >=, <=)',
        'Kết hợp nhiều điều kiện phức tạp với toán tử logic (and, or, not)',
      ],
      requiredEquipment: ['Python 3.10+', 'Cảm biến nhận diện bạn hay thù'],
      badge: {
        name: 'Trọng Tài Không Gian',
        icon: '⚖️',
        description: 'Bậc thầy đưa ra quyết định chớp nhoáng giải cứu phi thuyền',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Vật Thể Lạ Trên Radar',
        duration: '00:00 - 00:45',
        visual: 'Màn hình radar nhấp nháy một chấm đỏ bí ẩn. A.X.E.L đeo kính bảo hộ tác chiến, tay cầm cần gạt quyết định.',
        voiceover:
          'Báo động đỏ! Radar phát hiện mục tiêu lạ đang tiếp cận! Nếu chúng ta bắn nhầm bạn bè thì nguy to, nhưng nếu để kẻ địch lọt vào thì trạm sẽ nổ tung! Phải trao cho máy tính khả năng SUY NGHĨ và ĐƯA RA QUYẾT ĐỊNH ngay!',
        sfx: 'Tiếng radar xoay vù vù, tiếng nhạc hồi hộp kịch tính.',
        onScreenCode: 'vat_the = "thien_thach"\n# Làm sao để máy tính tự chọn hành động?',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Ngã Rẽ if Đầu Tiên',
        duration: '00:45 - 01:30',
        visual: 'Một ngã ba đường phát sáng hiện ra. Biển báo bên trái ghi `if`, bên phải ghi `else`.',
        voiceover:
          'Từ khóa `if` mang nghĩa "NẾU". Nếu điều kiện đúng (True), máy tính sẽ rẽ vào con đường đó. Chú ý dấu hai chấm `:` ở cuối câu lệnh nhé, nó giống như cánh cổng mở ra căn phòng hành động. Và đừng quên lùi vào 4 phím cách (Indent) nha các chiến binh!',
        sfx: 'Tiếng cơ khí chuyển đường ray "Clank-chunk!".',
        onScreenCode: 'if khoang_cach < 50:\n    print("CẢNH BÁO: QUÁ GẦN!")',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Trợ Thủ elif Đa Năng',
        duration: '01:30 - 02:15',
        visual: 'A.X.E.L mở rộng ngã ba thành ngã tư, ngã năm với nhiều lựa chọn `elif` (else if).',
        voiceover:
          'Nhưng đời vũ trụ đâu chỉ có 2 ngả đường! Nếu không phải thiên thạch mà là tàu chở hàng thì sao? Lúc đó hãy gọi người anh em `elif`! Bạn có thể thêm bao nhiêu elif tùy thích để quét sạch mọi trường hợp!',
        sfx: 'Âm thanh máy tính phân tích dữ liệu nhanh "Beep-boop-beep".',
        onScreenCode: 'elif loai == "dong_minh":\n    print("Chào đồng chí!")\nelse:\n    print("Bật khiên!")',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Tránh Bẫy Thụt Dòng IndentationError',
        duration: '02:15 - 03:00',
        visual: 'A.X.E.L cầm thước kẻ căn thẳng hàng các dòng lệnh con bên trong khối if, mỉm cười tán thưởng.',
        voiceover:
          'Nhớ kỹ thần chú: Lệnh nằm trong if PHẢI thụt vào trong so với chữ if. Nếu đứng thụt thò lộn xộn, quái vật IndentationError sẽ cắn đứt dây điện ngay! Giờ thì trạm Pythonia đã có bộ não phán đoán siêu việt rồi!',
        sfx: 'Tiếng thước kẻ "Snap!", tiếng pháo giấy ăn mừng.',
        onScreenCode: '# Thụt lề chuẩn mực = Sức mạnh tuyệt đối!',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 5: BỘ LỌC AN NINH NHẬN DIỆN MỤC TIÊU TỰ ĐỘNG
# ==============================================================

print("🛡️ --- HỆ THỐNG AN NINH PHÒNG THỦ KHỞI ĐỘNG --- 🛡️")

loai_vat_the = "dong_minh"  # Thử đổi thành "thien_thach", "hai_tac" hoặc thứ khác
khoang_cach_km = 35

print(f"Mục tiêu tiếp cận: {loai_vat_the.upper()} ở khoảng cách {khoang_cach_km} km")

# Cấu trúc rẽ nhánh đưa ra phán quyết
if loai_vat_the == "thien_thach":
    if khoang_cach_km < 50:
        print("HÀNH ĐỘNG: Bắn đại bác Plasma tiêu diệt ngay lập tức! 💥")
    else:
        print("HÀNH ĐỘNG: Khóa mục tiêu, tiếp tục theo dõi.")
elif loai_vat_the == "dong_minh":
    print("HÀNH ĐỘNG: Phát tín hiệu chào mừng, mở cổng vòm số 3! 🛸")
elif loai_vat_the == "hai_tac":
    print("HÀNH ĐỘNG: Bật toàn bộ khiên tàng hình và nạp đạn EMP! ⚡")
else:
    print("HÀNH ĐỘNG: Vật thể không xác định! Bật còi báo động vàng! ⚠️")

print("Hệ thống an ninh hoàn tất chu kỳ quét an toàn.")
`,
    sampleCodeExplanation: 'Mã sử dụng if-elif-else kết hợp toán tử so sánh == và < để ra quyết định tác chiến tương ứng.',
    challenges: [
      {
        id: 'c5-1',
        name: 'Khởi động: Kiểm Tra Bình Oxy',
        isBoss: false,
        situation: 'Cho biến `oxy = 18`. Nếu `oxy < 20`, hãy in ra "Báo động: Oxy thấp!". Ngược lại (else), in ra "Oxy ổn định!".',
        hintLevel1: 'Dùng cú pháp `if oxy < 20:` và nhớ dấu hai chấm `:` ở cuối.',
        hintLevel2Skeleton: 'oxy = 18\nif oxy < 20:\n    print("_____")\nelse:\n    print("_____")',
        hintLevel3Solution: 'oxy = 18\nif oxy < 20:\n    print("Báo động: Oxy thấp!")\nelse:\n    print("Oxy ổn định!")',
        hintLevel3Explanation: 'Vì 18 nhỏ hơn 20 nên điều kiện if đúng, nhánh đầu tiên được thực thi.',
        starterCode: 'oxy = 18\n# Viết điều kiện if - else kiểm tra oxy:\n',
        expectedOutputSnippet: 'Báo động: Oxy thấp!',
        testKeywords: ['if', 'else', 'oxy < 20', 'print'],
        xpReward: 70,
      },
      {
        id: 'c5-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Nhầm Lẫn Giữa = Và ==',
        isBoss: true,
        situation:
          'Boss Bug đã đánh tráo dấu so sánh bằng `==` thành dấu gán `=`. Đoạn code `if pin = 100:` gây ra SyntaxError nghiêm trọng! Hãy trừng trị nó!',
        hintLevel1: 'Gán giá trị dùng 1 dấu `=`, còn so sánh bằng phải dùng 2 dấu liên tiếp `==`.',
        hintLevel2Skeleton: 'pin = 100\n# Sửa dấu bằng trong câu lệnh if:\nif pin ____ 100:\n    print("Pin đã đầy 100%!")\nelse:\n    print("Đang sạc...")',
        hintLevel3Solution: 'pin = 100\nif pin == 100:\n    print("Pin đã đầy 100%!")\nelse:\n    print("Đang sạc...")',
        hintLevel3Explanation: 'Toán tử == dùng để kiểm tra tính bằng nhau trong điều kiện if.',
        starterCode: 'pin = 100\n# Sửa lỗi dòng if dưới đây:\nif pin = 100:\n    print("Pin đã đầy 100%!")\n',
        expectedOutputSnippet: 'Pin đã đầy 100%!',
        testKeywords: ['if pin == 100:', 'print'],
        xpReward: 140,
      },
    ],
  },
  {
    id: 'man-6',
    overview: {
      lessonNumber: 6,
      stageId: 'man-6',
      codeName: 'Màn 6: Cỗ máy nhân bản',
      lessonTitle: 'Cỗ Máy Nhân Bản Vòng Lặp for & Vòng Tròn Ma Thuật Mandala',
      missionBriefing:
        'Trạm cần xây dựng một hàng rào gồm 100 tấm pin mặt trời và một mê cung bảo vệ hình hoa văn Mandala! Nếu viết tay 100 dòng lệnh giống nhau, hoa tiêu sẽ kiệt sức trước khi bão mặt trời ập đến. Hãy kích hoạt "Cỗ máy nhân bản" – vòng lặp `for` và hàm `range()` để thực hiện hàng triệu chu kỳ chỉ trong tích tắc!',
      unlockedSkills: [
        'Vòng lặp xác định số lần: for variable in range(...)',
        'Làm chủ 3 tham số bí truyền của range(start, stop, step)',
        'Ứng dụng vòng lặp lồng nhau kết hợp Turtle để tạo đồ họa hình học đối xứng Mandala',
      ],
      requiredEquipment: ['Python 3.10+', 'Thư viện Turtle (tùy chọn)', 'Bộ nhân bản chu kỳ'],
      badge: {
        name: 'Kỹ Sư Vạn Năng',
        icon: '🌀',
        description: 'Bậc thầy lặp lại tác vụ tạo ma trận phòng thủ vĩ đại',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Cơn Ác Mộng Sao Chép Dán',
        duration: '00:00 - 00:45',
        visual: 'A.X.E.L thở hồng hộc, xung quanh là hàng trăm trang giấy code ghi `print("Lắp pin 1")`, `print("Lắp pin 2")`...',
        voiceover:
          'Ối giời ôi! Tôi phải lắp đặt 100 tấm pin mặt trời mà viết tay từng dòng một thế này thì đến năm 3000 mới xong mất! Có cách nào chỉ cần ra lệnh một lần mà máy tự động làm đi làm lại không?',
        sfx: 'Tiếng thở dốc của robot, tiếng giấy rơi loẹt xoẹt.',
        onScreenCode: '# Cách thủ công khổ sở:\nprint("Tấm pin 1")\nprint("Tấm pin 2")... đến 100',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Khởi Động Vòng Lặp for',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L kéo cần gạt. Một băng chuyền tự động hiện ra chạy vun vút.',
        voiceover:
          'Vừng ơi mở ra! Vòng lặp `for` chính là chiếc băng chuyền vạn năng. Cú pháp cực ngắn: `for i in range(10):`. Chữ `i` như một chú công nhân đếm lượt, lần lượt nhận giá trị từ 0 đến 9!',
        sfx: 'Tiếng băng chuyền chạy rầm rập "Chug-chug-whirrrr!".',
        onScreenCode: 'for i in range(5):\n    print("Lắp đặt tấm pin số", i + 1)',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Bí Ẩn range(start, stop, step)',
        duration: '01:30 - 02:15',
        visual: 'A.X.E.L chỉ vào chiếc đồng hồ 3 kim: Điểm xuất phát (start), Điểm dừng (stop) và Bước nhảy (step).',
        voiceover:
          'Bí kíp của các phi hành gia bậc thầy: `range(1, 11, 2)` sẽ xuất phát từ 1, nhảy cóc 2 bước mỗi lần (1, 3, 5, 7, 9) và dừng trước số 11! Bạn có thể đếm ngược từ 10 về 1 để phóng tên lửa nữa đấy!',
        sfx: 'Tiếng đếm ngược "3... 2... 1... Ignition!".',
        onScreenCode: 'for dem in range(10, 0, -1):\n    print(dem)\nprint("PHÓNG!")',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Trận Đồ Hoa Văn Mandala',
        duration: '02:15 - 03:00',
        visual: 'Rùa không gian xoay tròn 36 lần, vẽ nên một bông hoa Mandala laser nhiều màu rực rỡ.',
        voiceover:
          'Chỉ với 4 dòng code vòng lặp kết hợp rùa, một bông hoa Mandala bảo hộ đa sắc đã bừng sáng bảo vệ cả con tàu! Sức mạnh của cỗ máy nhân bản thật phi thường!',
        sfx: 'Tiếng nhạc du dương huyền ảo kết hợp chùm tia sáng rực rỡ.',
        onScreenCode: 'for i in range(36):\n    t.circle(80)\n    t.left(10)',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 6: KÍCH HOẠT HÀNG RÀO PIN VÀ HOA VĂN MANDALA
# ==============================================================

# 1. Đếm ngược phóng tên lửa bằng vòng lặp step âm
print("--- BẮT ĐẦU ĐẾM NGƯỢC RỜI BỆ PHÓNG ---")
for giay in range(5, 0, -1):
    print(f"T-minus: {giay} giây... [Kiểm tra động cơ]")
print("🚀 VÙNG TRỜI RỰC LỬA! PHÓNG THÀNH CÔNG! 🚀\\n")

# 2. Xây dựng ma trận 4 trạm tiếp sóng
print("--- LẮP ĐẶT MA TRẬN 4 TRẠM TIẾP SÓNG ---")
for tram_id in range(1, 5):
    nang_luong = tram_id * 25
    print(f"Trạm phát sóng #{tram_id}: Năng lượng đạt {nang_luong}%")

# 3. Tạo hoa văn rùa Mandala (nếu có turtle)
# for goc in range(0, 360, 30):
#     rua.circle(50)
#     rua.left(30)
`,
    sampleCodeExplanation: 'Chương trình minh họa vòng lặp đếm ngược với range(5, 0, -1) và lắp đặt 4 trạm tiếp sóng với range(1, 5).',
    challenges: [
      {
        id: 'c6-1',
        name: 'Khởi động: Bắn 7 Quả Pháo Sao',
        isBoss: false,
        situation: 'Dùng vòng lặp `for` với `range(7)` để in ra 7 dòng: "Bắn pháo hoa sao số 1", "Bắn pháo hoa sao số 2", ..., số 7.',
        hintLevel1: 'Dùng `for i in range(1, 8):` để biến đếm i chạy từ 1 đến 7.',
        hintLevel2Skeleton: 'for i in range(1, _____):\n    print("Bắn pháo hoa sao số", i)',
        hintLevel3Solution: 'for i in range(1, 8):\n    print("Bắn pháo hoa sao số", i)',
        hintLevel3Explanation: 'range(1, 8) tạo chuỗi số từ 1 đến 7 (dừng trước 8).',
        starterCode: '# Dùng for range để bắn 7 phát pháo hoa:\n',
        expectedOutputSnippet: 'Bắn pháo hoa sao số 7',
        testKeywords: ['for', 'range', 'print'],
        xpReward: 70,
      },
      {
        id: 'c6-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Lệch Chỉ Số Index-Off-By-One',
        isBoss: true,
        situation:
          'Boss Bug khiến bệ phóng chỉ đếm đến 9 vì viết `range(10)` (chỉ chạy từ 0 đến 9)! Hãy sửa lại để in đúng từ 1 đến 10.',
        hintLevel1: 'Hãy truyền 2 tham số vào hàm range: điểm bắt đầu là 1 và điểm dừng là 11.',
        hintLevel2Skeleton: '# Sửa lại range để in đủ từ 1 đến 10:\nfor so in range(_____, _____):\n    print("Nạp năng lượng mức:", so)',
        hintLevel3Solution: 'for so in range(1, 11):\n    print("Nạp năng lượng mức:", so)',
        hintLevel3Explanation: 'range(1, 11) bao gồm các số từ 1 đến 10 vì luôn dừng trước cận trên.',
        starterCode: '# Sửa lỗi để lặp đủ từ 1 đến 10:\nfor so in range(10):\n    print("Nạp năng lượng mức:", so)\n',
        expectedOutputSnippet: 'Nạp năng lượng mức: 10',
        testKeywords: ['range(1, 11)', 'print'],
        xpReward: 140,
      },
    ],
  },
  {
    id: 'man-7',
    overview: {
      lessonNumber: 7,
      stageId: 'man-7',
      codeName: 'Màn 7: Bẫy thời gian vô tận',
      lessonTitle: 'Bẫy Thời Gian Vô Tận & Vòng Lặp while Siêu Đẳng',
      missionBriefing:
        'Trạm Pythonia rơi vào hố đen thời gian lặp đi lặp lại không ngừng! Một con quái vật vòng lặp vô tận (Infinite Loop) đang ngấu nghiến toàn bộ bộ nhớ RAM của tàu. Chỉ có vòng lặp `while` với điều kiện thoát chính xác, lệnh `break` khẩn cấp và thư viện `random` mới có thể bẻ gãy bẫy thời gian!',
      unlockedSkills: [
        'Vòng lặp dựa trên điều kiện: while condition:',
        'Kỹ thuật cập nhật biến đếm tránh rơi vào bẫy vô tận (Hang/Crash)',
        'Sử dụng lệnh break (phanh gấp), continue (bỏ qua lượt) và random.randint()',
      ],
      requiredEquipment: ['Python 3.10+', 'Thư viện random', 'Nút phanh khẩn cấp break'],
      badge: {
        name: 'Chúa Tể Thời Không',
        icon: '⏳',
        description: 'Chiến binh bẻ gãy vòng lặp vô tận giải cứu con tàu',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Kẹt Trong Vòng Lặp Thời Gian',
        duration: '00:00 - 00:45',
        visual: 'Đồng hồ trạm quay tít mù, A.X.E.L cứ lặp đi lặp lại một hành động nói "Xin chào" không dứt.',
        voiceover:
          'Cứu... cứu với! Chúng ta bị kẹt trong một khe nứt thời gian! Vòng lặp đang chạy mãi mãi và nhiệt độ CPU trạm đã lên tới 1000 độ C! Chúng ta cần hiểu rõ vòng lặp `while` trước khi toàn bộ bo mạch bị nướng chín!',
        sfx: 'Tiếng đồng hồ tích tắc dồn dập, tiếng quạt tản nhiệt rú gầm rú.',
        onScreenCode: 'while True:\n    print("KẸT RỒI!") # NGUY HIỂM!',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Chiếc Phanh Khẩn Cấp break',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L đập mạnh vào nút bấm màu đỏ có chữ `break`. Toàn bộ chuyển động đóng băng tức thì.',
        voiceover:
          'Két... ét! Lệnh `break` hoạt động như chiếc phanh khẩn cấp trên tàu cao tốc! Bất kể vòng lặp while có hung hãn đến đâu, chỉ cần chạm vào `break`, nó sẽ bị văng ra ngoài ngay lập tức! Nhớ trang bị phanh này trong mọi cỗ máy nhé!',
        sfx: 'Tiếng phanh xe rít chói tai, tiếng hơi khí nén xì xì.',
        onScreenCode: 'if mat_ma == "GIAI_CUU":\n    print("Mở cửa!")\n    break',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Xúc Xắc May Rủi random',
        duration: '01:30 - 02:15',
        visual: 'Một viên xúc xắc 20 mặt phát sáng lăn tròn trên bàn chỉ huy, xuất hiện các con số ngẫu nhiên.',
        voiceover:
          'Để đánh lừa hố đen, chúng ta cần tung ra những đòn tấn công bất ngờ không ai đoán trước được! Thư viện `random` với hàm `random.randint(1, 6)` sẽ tạo ra những con số ngẫu nhiên đầy ma thuật!',
        sfx: 'Tiếng xúc xắc lách cách trên đĩa thủy tinh.',
        onScreenCode: 'import random\nxuc_xac = random.randint(1, 6)',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Thoát Khỏi Hố Đen',
        duration: '02:15 - 03:00',
        visual: 'Trạm vụt bay ra khỏi vùng xoáy đen, trở lại không gian đầy sao bình yên.',
        voiceover:
          'Bẫy thời gian đã vỡ tan tành! Phi thuyền đã lấy lại kiểm soát thời gian thực. Giờ hãy vào đấu trường và đối đầu với Boss Xúc Xắc!',
        sfx: 'Tiếng động cơ Hyperdrive kích hoạt vang dội, tiếng chuông chiến thắng.',
        onScreenCode: '# Trạng thái: THOÁT KHỎI HỐ ĐEN THÀNH CÔNG!',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 7: MINI-GAME BẺ KHÓA MẬT MÃ TRỐNG THỜI GIAN
# ==============================================================

import random

print("🎲 --- MẬT MÃ TRỐNG THỜI GIAN ĐÃ BỊ KHÓA --- 🎲")
con_so_bi_mat = random.randint(1, 10)
so_lan_doan = 0
toi_da_lan = 4

print("Hệ thống: Tôi đã nghĩ ra một số bí mật từ 1 đến 10.")
print("Bạn có tối đa 4 lần đoán trước khi bẫy sập!\\n")

# Vòng lặp while kiểm tra số lần còn lại
while so_lan_doan < toi_da_lan:
    so_lan_doan += 1
    # Trong môi trường thực tế ta dùng input():
    # doan = int(input(f"Lần {so_lan_doan}: Nhập số đoán: "))
    # Ở đây giả lập lượt đoán ngẫu nhiên của robot thám hiểm:
    doan = con_so_bi_mat if so_lan_doan == 2 else 99
    
    print(f"Lượt #{so_lan_doan}: Đoán số {doan}")
    
    if doan == con_so_bi_mat:
        print("🎉 CHÍNH XÁC! Cổng thoát hiểm đã mở! Bẻ gãy bẫy thời gian!")
        break  # Phanh khẩn cấp thoát khỏi vòng lặp
    elif doan < con_so_bi_mat:
        print("Gợi ý: Số bí mật LỚN HƠN!")
    else:
        print("Gợi ý: Số bí mật NHỎ HƠN!")

print("Trò chơi kết thúc an toàn!")
`,
    sampleCodeExplanation: 'Chương trình dùng while để cho phép đoán tối đa 4 lần, sử dụng break khi đoán đúng số ngẫu nhiên.',
    challenges: [
      {
        id: 'c7-1',
        name: 'Khởi động: Bơm Nhiên Liệu Đến Mức Đầy',
        isBoss: false,
        situation: 'Biến `binh_xang = 0`. Dùng vòng lặp `while binh_xang < 100:` để bơm mỗi lần 25 lít (`binh_xang += 25`) và in ra mức xăng.',
        hintLevel1: 'Trong thân vòng lặp nhớ tăng `binh_xang += 25` nếu không vòng lặp sẽ chạy mãi mãi!',
        hintLevel2Skeleton: 'binh_xang = 0\nwhile binh_xang < 100:\n    binh_xang += _____\n    print("Mức xăng:", binh_xang)',
        hintLevel3Solution: 'binh_xang = 0\nwhile binh_xang < 100:\n    binh_xang += 25\n    print("Mức xăng:", binh_xang)',
        hintLevel3Explanation: 'Mỗi vòng lặp cộng thêm 25, sau 4 lượt binh_xang đạt 100 và điều kiện while ngừng.',
        starterCode: 'binh_xang = 0\n# Viết vòng lặp while bơm xăng tại đây:\n',
        expectedOutputSnippet: 'Mức xăng: 100',
        testKeywords: ['while', 'binh_xang', 'print'],
        xpReward: 80,
      },
      {
        id: 'c7-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Vô Tận Treo Máy',
        isBoss: true,
        situation:
          'Boss Bug đã xóa dòng tăng biến đếm khiến đoạn code `dem = 1; while dem <= 5: print(dem)` bị kẹt mãi ở số 1. Hãy cứu vớt chương trình!',
        hintLevel1: 'Cần thêm dòng `dem += 1` hoặc `dem = dem + 1` ở cuối thân vòng lặp while.',
        hintLevel2Skeleton: 'dem = 1\nwhile dem <= 5:\n    print("Đếm:", dem)\n    dem _____ # Thêm phép tăng biến đếm',
        hintLevel3Solution: 'dem = 1\nwhile dem <= 5:\n    print("Đếm:", dem)\n    dem += 1',
        hintLevel3Explanation: 'Nếu không tăng dem, biến dem mãi bằng 1 và điều kiện dem <= 5 luôn đúng gây treo máy.',
        starterCode: '# Sửa bẫy vô tận bằng cách cập nhật biến dem:\ndem = 1\nwhile dem <= 5:\n    print("Đếm:", dem)\n',
        expectedOutputSnippet: 'Đếm: 5',
        testKeywords: ['dem += 1', 'while', 'print'],
        xpReward: 150,
      },
    ],
  },
  {
    id: 'man-8',
    overview: {
      lessonNumber: 8,
      stageId: 'man-8',
      codeName: 'Màn 8: Túi trang bị thần kỳ',
      lessonTitle: 'Túi Trang Bị Lượng Tử & Danh Sách List Không Giới Hạn',
      missionBriefing:
        'Kho chứa đồ của trạm bị xáo trộn sau trận bão từ! Bạn vừa nhặt được kiếm laser, bình cứu thương, la bàn sao và khiên titan. Thay vì tạo 100 chiếc hộp biến số rời rạc, hãy sử dụng "Túi trang bị thần kỳ" (List trong Python) để thu gom, sắp xếp, trang bị và loại bỏ vật phẩm một cách chuyên nghiệp!',
      unlockedSkills: [
        'Khởi tạo và làm chủ danh sách Python: tui_do = [item1, item2, ...]',
        'Quy tắc đánh số thứ tự chỉ mục (Index từ 0 đến N-1 và chỉ mục âm -1)',
        'Thao tác thay đổi danh sách: append() (thêm), remove() (xóa), len() (đếm), sort() (sắp xếp)',
      ],
      requiredEquipment: ['Python 3.10+', 'Ba lô không gian đa ngăn'],
      badge: {
        name: 'Thủ Kho Vũ Trụ',
        icon: '🎒',
        description: 'Chuyên gia quản lý túi trang bị và dữ liệu dạng danh sách',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Đồ Đạc Bay Tứ Tung',
        duration: '00:00 - 00:45',
        visual: 'Các bình oxy, súng laser bay lơ lửng trong môi trường không trọng lực. A.X.E.L vất vả đuổi theo chụp từng món.',
        voiceover:
          'Ôi thôi xong! Mất trọng lực khiến kho trang bị nổ tung! Nếu tạo từng biến `mon_do_1`, `mon_do_2`... thì tôi sẽ phát điên mất! Các chiến binh mau ném cho tôi chiếc TÚI TRANG BỊ MA THUẬT (List) có hai chiếc móc vuông `[]` ngay!',
        sfx: 'Tiếng đồ đạc va quẹt leng keng, tiếng kim loại va chạm.',
        onScreenCode: 'tui_do = ["kiem_laser", "binh_oxy", "la_ban"]',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Bí Quyết Đếm Từ Số 0',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L chỉ vào các ngăn kéo được dán số: Ngăn đầu tiên dán số 0, ngăn thứ hai dán số 1.',
        voiceover:
          'Chú ý quy tắc kỳ lạ của dân lập trình: Ngăn đầu tiên trong túi đồ không phải số 1 đâu, mà là SỐ 0 tròn trĩnh! Muốn lấy kiếm laser ở đầu túi? Hãy gọi `tui_do[0]`. Còn muốn lấy món đồ cuối cùng? Siêu năng lực `tui_do[-1]` sẽ lấy ngay lập tức!',
        sfx: 'Tiếng mở ngăn kéo "Kétttt-cạch", hiệu ứng số 0 phát sáng.',
        onScreenCode: 'print(tui_do[0])   # Món đầu tiên\nprint(tui_do[-1])  # Món cuối cùng',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Thêm & Vứt Đồ Thần Tốc',
        duration: '01:30 - 02:15',
        visual: 'A.X.E.L nhặt được một viên ngọc sao và nhét vào túi bằng lệnh `.append()`, sau đó vứt đi quả bom xịt bằng `.remove()`.',
        voiceover:
          'Nhặt được vũ khí mới? Chỉ cần niệm chú `.append("ngoc_sao")` – nó sẽ tự động chui vào cuối túi! Dùng xong bình máu rồi thì gọi `.remove("binh_oxy")` để dọn chỗ trống. Đếm xem có bao nhiêu món? Gọi bác bảo vệ `len(tui_do)` là biết ngay!',
        sfx: 'Tiếng nhặt vật phẩm "Ding-dong!", tiếng vứt đồ "Poof!".',
        onScreenCode: 'tui_do.append("giap_titan")\ntui_do.remove("la_ban")\nprint(len(tui_do))',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Ba Lô Gọn Gàng Sẵn Sàng Chiến Đấu',
        duration: '02:15 - 03:00',
        visual: 'A.X.E.L đeo ba lô phát sáng gọn gàng, tay cầm kiếm laser sẵn sàng xung trận.',
        voiceover:
          'Túi đồ đã ngăn nắp, trang bị đã sẵn sàng trên tay! Với kỹ năng quản lý List này, không một thử thách nào có thể làm khó phi hành đoàn được nữa!',
        sfx: 'Tiếng kiếm laser kích hoạt "Zzz-vuum!", tiếng kèn xung trận.',
        onScreenCode: '# Sẵn sàng cho mọi trận chiến!',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 8: QUẢN LÝ KHO ĐỒ CHIẾN BINH PYTHONIA
# ==============================================================

# Khởi tạo túi trang bị ban đầu
ba_lo = ["Kiếm Laser", "Bình Nước Bạc", "Bản Đồ Sao"]
print("Túi đồ ban đầu:", ba_lo)
print("Số lượng trang bị:", len(ba_lo))

# Mở rương nhặt thêm bảo bối
print("\\n[MỞ RƯƠNG THIÊN THẠCH]")
ba_lo.append("Áo Giáp Plasma")
ba_lo.append("Khiên Titan")
print("Túi đồ sau khi nhặt thêm:", ba_lo)

# Sử dụng và vứt bỏ Bình Nước Bạc
print("\\n[SỬ DỤNG VẬT PHẨM]")
print("Uống hết:", ba_lo[1])
ba_lo.remove("Bình Nước Bạc")

# Duyệt toàn bộ túi đồ để kiểm kê
print("\\n--- DANH MỤC TRANG BỊ SẴN SÀNG CHIẾN ĐẤU ---")
for vi_tri, vat_pham in enumerate(ba_lo):
    print(f"Ngăn {vi_tri}: {vat_pham}")

print(f"\\nVũ khí hạng nặng cuối túi đồ: {ba_lo[-1]}")
`,
    sampleCodeExplanation: 'Mã khởi tạo list, dùng append để thêm đồ, remove để xóa đồ và duyệt list bằng for để in ra từng vật phẩm.',
    challenges: [
      {
        id: 'c8-1',
        name: 'Khởi động: Nhặt Thêm Khiên Năng Lượng',
        isBoss: false,
        situation: 'Cho danh sách `trang_bi = ["Dao găm", "Đèn pin"]`. Hãy dùng lệnh thích hợp để thêm `"Khiên năng lượng"` vào cuối danh sách.',
        hintLevel1: 'Dùng phương thức `.append(...)` của danh sách.',
        hintLevel2Skeleton: 'trang_bi = ["Dao găm", "Đèn pin"]\ntrang_bi._____("Khiên năng lượng")\nprint(trang_bi)',
        hintLevel3Solution: 'trang_bi = ["Dao găm", "Đèn pin"]\ntrang_bi.append("Khiên năng lượng")\nprint(trang_bi)',
        hintLevel3Explanation: 'append() chèn phần tử mới vào vị trí cuối cùng của list.',
        starterCode: 'trang_bi = ["Dao găm", "Đèn pin"]\n# Thêm Khiên năng lượng vào list:\n',
        expectedOutputSnippet: 'Khiên năng lượng',
        testKeywords: ['append', 'Khiên năng lượng', 'print'],
        xpReward: 80,
      },
      {
        id: 'c8-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Vượt Quá Chỉ Mục IndexError',
        isBoss: true,
        situation:
          'Boss Bug khiến phi hành gia gọi `danh_sach[3]` trên một danh sách chỉ có 3 phần tử (vị trí 0, 1, 2) gây nổ tung IndexError! Hãy lấy phần tử cuối cùng bằng `-1`.',
        hintLevel1: 'Trong Python, chỉ mục `-1` luôn an toàn trỏ thẳng vào phần tử cuối cùng.',
        hintLevel2Skeleton: 'vu_khi = ["Cung sao", "Kiếm plasma", "Lựu đạn EMP"]\n# Lấy món vũ khí cuối cùng bằng chỉ mục âm an toàn:\nmon_cuoi = vu_khi[_____]\nprint("Vũ khí cuối:", mon_cuoi)',
        hintLevel3Solution: 'vu_khi = ["Cung sao", "Kiếm plasma", "Lựu đạn EMP"]\nmon_cuoi = vu_khi[-1]\nprint("Vũ khí cuối:", mon_cuoi)',
        hintLevel3Explanation: 'Danh sách có 3 phần tử thì chỉ mục là 0, 1, 2. Dùng -1 sẽ lấy phần tử cuối cùng không sợ lỗi.',
        starterCode: 'vu_khi = ["Cung sao", "Kiếm plasma", "Lựu đạn EMP"]\n# Sửa chỉ mục sai dưới đây:\nmon_cuoi = vu_khi[3]\nprint("Vũ khí cuối:", mon_cuoi)\n',
        expectedOutputSnippet: 'Vũ khí cuối: Lựu đạn EMP',
        testKeywords: ['vu_khi[-1]', 'print'],
        xpReward: 160,
      },
    ],
  },
  {
    id: 'man-9',
    overview: {
      lessonNumber: 9,
      stageId: 'man-9',
      codeName: 'Màn 9: Đóng gói phép thuật',
      lessonTitle: 'Đóng Gói Phép Thuật & Hàm def Tái Sử Dụng',
      missionBriefing:
        'Cảnh báo quá tải! Hệ thống điều khiển động cơ, khiên chắn và pháo laser liên tục gọi hàng trăm phép tính giống nhau làm nghẽn đường truyền. Đã đến lúc các kỹ sư trưởng học cách "Đóng gói phép thuật" – tạo hàm với từ khóa `def`, truyền tham số (parameters) và nhận kết quả trả về (`return`) để code ngắn gọn, sạch đẹp và mạnh mẽ gấp bội!',
      unlockedSkills: [
        'Cú pháp định nghĩa hàm: def ten_ham(tham_so):',
        'Phân biệt lời gọi hàm (call) và định nghĩa hàm (define)',
        'Sử dụng giá trị trả về với từ khóa return và phạm vi biến (Local vs Global Scope)',
      ],
      requiredEquipment: ['Python 3.10+', 'Khuôn đúc hàm vạn năng'],
      badge: {
        name: 'Đại Pháp Sư Code',
        icon: '📦',
        description: 'Bậc thầy đóng gói logic thành những mô-đun siêu gọn nhẹ',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Đống Rác Code Trùng Lặp',
        duration: '00:00 - 00:45',
        visual: 'A.X.E.L chỉ vào màn hình code dài 500 dòng nhưng có đến 20 đoạn tính sát thương y hệt nhau.',
        voiceover:
          'Nhìn này các phi hành gia! Cứ mỗi lần bắn đại bác ta lại phải copy dán 10 dòng tính toán lực bắn, cự ly, góc gió. Nếu muốn sửa công thức, ta phải đi tìm và sửa 20 chỗ khác nhau! Quá nguy hiểm! Đã đến lúc đóng gói nó thành một VIÊN PHÉP THUẬT duy nhất!',
        sfx: 'Tiếng cuộn giấy code dài lê thê "Vvvrrrt", tiếng thở dài ngán ngẩm.',
        onScreenCode: '# Trùng lặp = Kẻ thù số 1 của lập trình viên!',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Chiếc Khuôn Đúc def Thần Thánh',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L đặt chiếc khuôn đúc có dán nhãn `def` lên bàn. Bỏ nguyên liệu vào đầu này, sản phẩm bắn ra đầu kia.',
        voiceover:
          'Từ khóa `def` (viết tắt của define – định nghĩa) giống như tạo ra một chiếc máy ép nước mía! Bạn chỉ cần chế tạo chiếc máy một lần, sau đó bất cứ khi nào khát nước (cần bắn pháo), chỉ việc gọi tên chiếc máy và bỏ mía (tham số) vào thôi!',
        sfx: 'Tiếng máy dập khuôn "Thump-ding!", ánh hào quang tỏa ra.',
        onScreenCode: 'def ban_phao(luc_ban):\n    print("Bắn với lực:", luc_ban)',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Chiếc Hộp Quà Trả Về return',
        duration: '01:30 - 02:15',
        visual: 'A.X.E.L đưa một bài toán tính tổng vào hàm, hàm gửi trả lại một chiếc hộp quà chứa kết quả có nơ đỏ.',
        voiceover:
          'Chú ý sự khác nhau giữa `print` và `return` nhé! Print chỉ là hét to lên màn hình cho mắt người xem, còn `return` là ĐÓNG GÓI KẾT QUẢ vào hộp quà trao lại cho chương trình tiếp tục tính toán! Không có return, hàm sẽ trả về None trống rỗng!',
        sfx: 'Tiếng mở hộp quà "Ting-ta-da!", pháo sáng lấp lánh.',
        onScreenCode: 'def tinh_sat_thuong(suc_manh):\n    return suc_manh * 2.5',
        axelMood: 'thinking',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Trạm Vũ Trụ Siêu Tinh Gọn',
        duration: '02:15 - 03:00',
        visual: 'Đoạn code 500 dòng thu gọn lại chỉ còn 5 dòng gọi hàm tinh tế và uy lực.',
        voiceover:
          'Tuyệt vời! Mã nguồn của trạm giờ đây đẹp như một bài thơ không gian. Mọi module đã được đóng gói hoàn hảo. Giờ là lúc tiến thẳng vào Màn 10 – TRẬN CHIẾN TRÙM CUỐI!',
        sfx: 'Nhạc chiến thắng hoành tráng, A.X.E.L giương súng laser sẵn sàng.',
        onScreenCode: '# Code sạch đẹp = Sẵn sàng diệt trùm!',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# NHIỆM VỤ MÀN 9: HỆ THỐNG ĐÓNG GÓI CHIẾN ĐẤU VŨ TRỤ
# ==============================================================

# 1. Định nghĩa hàm tính sát thương laser
def tinh_sat_thuong(nang_luong_goc, he_so_khuech_dai=1.5):
    """Tính sát thương thực tế sau khi qua lăng kính khuếch đại."""
    tong_sat_thuong = nang_luong_goc * he_so_khuech_dai
    return tong_sat_thuong

# 2. Định nghĩa hàm kiểm tra sinh tồn
def kiem_tra_mau(mau_hien_tai):
    """Kiểm tra chiến binh còn sức chiến đấu không."""
    if mau_hien_tai > 50:
        return "💚 Tình trạng tốt"
    elif mau_hien_tai > 0:
        return "⚠️ Cảnh báo nguy hiểm"
    else:
        return "☠️ Bất tỉnh"

# --- CHƯƠNG TRÌNH CHÍNH (GỌI HÀM) ---
print("🚀 --- KHOANG ĐIỀU KHIỂN HÀM TÁC CHIẾN --- 🚀")

dan_1 = tinh_sat_thuong(100, 2.0)
dan_2 = tinh_sat_thuong(80)  # Dùng hệ số mặc định 1.5

print("Đạn pháo 1 gây sát thương:", dan_1)
print("Đạn pháo 2 gây sát thương:", dan_2)

trang_thai = kiem_tra_mau(35)
print("Trạng thái chiến binh:", trang_thai)
`,
    sampleCodeExplanation: 'Mã tạo 2 hàm: tinh_sat_thuong() có return giá trị số và kiem_tra_mau() return chuỗi trạng thái.',
    challenges: [
      {
        id: 'c9-1',
        name: 'Khởi động: Hàm Chào Đón Tân Binh',
        isBoss: false,
        situation: 'Viết hàm `chao_mung(ten)` nhận vào tham số `ten` và in ra "Xin chào chiến binh " kèm tên đó.',
        hintLevel1: 'Dùng từ khóa `def chao_mung(ten):` và thụt đầu dòng lệnh `print()`.',
        hintLevel2Skeleton: 'def chao_mung(ten):\n    print("Xin chào chiến binh " + _____)\n\n# Thử gọi hàm:\nchao_mung("Alex")',
        hintLevel3Solution: 'def chao_mung(ten):\n    print("Xin chào chiến binh " + ten)\n\nchao_mung("Alex")',
        hintLevel3Explanation: 'Tham số ten nhận giá trị truyền vào khi hàm được gọi.',
        starterCode: '# Viết hàm chao_mung tại đây:\n',
        expectedOutputSnippet: 'Xin chào chiến binh Alex',
        testKeywords: ['def chao_mung', 'print'],
        xpReward: 90,
      },
      {
        id: 'c9-2',
        name: 'Trùm Cuối Boss Bug: Quái Vật Quên Trả Quà return',
        isBoss: true,
        situation:
          'Boss Bug đã xóa mất từ khóa `return` trong hàm `tinh_gap_doi(x)`, khiến kết quả trả về là `None`! Hãy khôi phục lại món quà.',
        hintLevel1: 'Thay vì dùng print, hãy dùng `return x * 2`.',
        hintLevel2Skeleton: 'def tinh_gap_doi(x):\n    _____ x * 2\n\nkq = tinh_gap_doi(50)\nprint("Kết quả:", kq)',
        hintLevel3Solution: 'def tinh_gap_doi(x):\n    return x * 2\n\nkq = tinh_gap_doi(50)\nprint("Kết quả:", kq)',
        hintLevel3Explanation: 'Từ khóa return gửi kết quả 100 về cho biến kq đón nhận.',
        starterCode: 'def tinh_gap_doi(x):\n    # Hàm này đang thiếu return!\n    ket_qua = x * 2\n\nkq = tinh_gap_doi(50)\nprint("Kết quả:", kq)\n',
        expectedOutputSnippet: 'Kết quả: 100',
        testKeywords: ['return', 'print'],
        xpReward: 170,
      },
    ],
  },
  {
    id: 'man-10',
    overview: {
      lessonNumber: 10,
      stageId: 'man-10',
      codeName: 'Màn 10: Trận chiến trùm cuối',
      lessonTitle: 'Trận Chiến Trùm Cuối: Đồ Án Tổng Hợp Space Blaster',
      missionBriefing:
        'CẢNH BÁO TỐI CAO CẤP VŨ TRỤ! Quái Trùm Hư Không "Void-Titan" đã bao vây trạm Pythonia! Đây là trận chiến quyết định vận mệnh thiên hà. Các Phi hành gia nhí phải huy động toàn bộ kiến thức từ Màn 1 đến Màn 9: Biến số, Rẽ nhánh if-else, Vòng lặp while, Danh sách List và Hàm def để lập trình nên tựa game chiến đấu Space Blaster hoặc Cuộc Đua Rùa Thiên Hà!',
      unlockedSkills: [
        'Tư duy kiến trúc dự án phần mềm tổng hợp (Game Loop, State Management)',
        'Kết hợp liên hoàn tất cả các cấu trúc cốt lõi đã học trong 9 tuần',
        'Debug, tối ưu hóa và xuất bản đồ án game hoàn chỉnh mang phong cách riêng',
      ],
      requiredEquipment: ['Python 3.10+', 'Thư viện Turtle / Random / Time', 'Bộ điều khiển phi thuyền Game Master'],
      badge: {
        name: 'Cơ Trưởng Huyền Thoại',
        icon: '👑',
        description: 'Tốt nghiệp học viện Pythonia và tiêu diệt trùm cuối bảo vệ vũ trụ',
      },
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Void-Titan Xuất Hiện',
        duration: '00:00 - 00:45',
        visual: 'Bầu trời vũ trụ nứt toác. Một quái vật máy khổng lồ màu tím thẫm với đôi mắt laser đỏ rực bước ra.',
        voiceover:
          'Báo động cực hạn! Void-Titan đã xuất hiện! Hắn mang theo 500 điểm máu giáp và đạo quân bọ Bug vô tận! Đây không còn là bài tập nữa, đây là trận chiến bảo vệ toàn thể vũ trụ Pythonia!',
        sfx: 'Tiếng sấm sét không gian nổ vang trời, tiếng nhạc Boss Fight hào hùng dồn dập.',
        onScreenCode: 'boss_mau = 500\nphi_thuyen_hp = 100',
        axelMood: 'warning',
      },
      {
        sceneNumber: 2,
        phaseName: 'Cảnh 2: Hợp Thể Vũ Khí 9 Màn Chơi',
        duration: '00:45 - 01:30',
        visual: 'A.X.E.L triệu hồi các biểu tượng từ Màn 1 đến Màn 9 bay quanh người như các viên ngọc vô cực.',
        voiceover:
          'Các chiến binh, hãy nhớ lại: Màn 2 cho ta Biến số chứa máu, Màn 5 cho ta if-else né đòn, Màn 7 cho ta vòng lặp game loop chiến đấu, Màn 8 cho ta túi đạn dược, và Màn 9 giúp ta tung đòn combo bằng hàm! HÃY HỢP NHẤT TẤT CẢ LẠI!',
        sfx: 'Tiếng ngọc dung hợp "Whooosh... Ping... Flash!", tiếng hô quyết chiến.',
        onScreenCode: 'def tan_cong(vu_khi):\n    # Hợp nhất toàn bộ tri thức!',
        axelMood: 'excited',
      },
      {
        sceneNumber: 3,
        phaseName: 'Cảnh 3: Đại Chiến Không Gian',
        duration: '01:30 - 02:15',
        visual: 'Phi thuyền của người chơi phóng đạn laser chớp nhoáng, né thiên thạch và rút từng giọt máu của Boss.',
        voiceover:
          'Bắn pháo photon! Trúng đích! Void-Titan đang rung chuyển! Hãy dùng vòng lặp while để giữ nhịp trận đánh, kiểm tra nếu máu Boss <= 0 thì gọi lệnh `break` ngay để tung đòn kết liễu!',
        sfx: 'Tiếng pháo laser liên thanh "Pew pew pew!", tiếng nổ vang dội "BOOOM!".',
        onScreenCode: 'while boss_mau > 0:\n    boss_mau -= sat_thuong\n    if boss_mau <= 0: break',
        axelMood: 'excited',
      },
      {
        sceneNumber: 4,
        phaseName: 'Cảnh 4: Bình Minh Trở Lại Pythonia',
        duration: '02:15 - 03:00',
        visual: 'Void-Titan nổ tung thành ngàn vì sao sáng. Vũ trụ trở lại vẻ thanh bình rực rỡ. A.X.E.L trao cúp vàng cho người chơi.',
        voiceover:
          'CHÚNG TA ĐÃ THẮNG! Trùm cuối đã bị đánh bại! Các bạn không còn là những tân binh bỡ ngỡ của Màn 1 nữa, mà chính là những CƠ TRƯỞNG LẬP TRÌNH VĨ ĐẠI NHẤT VŨ TRỤ PYTHONIA! Chúc mừng lễ tốt nghiệp vinh quang!',
        sfx: 'Tiếng pháo hoa nổ ròn rã, bài ca khải hoàn chiến thắng rền vang.',
        onScreenCode: 'print("TỐT NGHIỆP XUẤT SẮC - HUY CHƯƠNG VÀNG PYTHONIA!")',
        axelMood: 'victory',
      },
    ],
    sampleCode: `# ==============================================================
# ĐỒ ÁN MÀN 10: MINI-GAME BATTLE SPACE BLASTER VS VOID-TITAN
# ==============================================================

import random

def tan_cong_nguoi_choi(loai_vu_khi):
    """Tính toán đòn đánh của phi hành gia dựa vào vũ khí."""
    if loai_vu_khi == "laser":
        return random.randint(30, 50)
    elif loai_vu_khi == "ten_lua":
        return random.randint(50, 90)
    else:
        return 20

def tan_cong_boss():
    """Đòn phản công ngẫu nhiên của Trùm Hư Không."""
    return random.randint(15, 35)

print("⚔️ =================================================== ⚔️")
print("  TRẬN CHIẾN TRÙM CUỐI: SPACE BLASTER VS VOID-TITAN  ")
print("⚔️ =================================================== ⚔️\\n")

mau_phi_thuyen = 100
mau_boss = 200
kho_vu_khi = ["laser", "ten_lua", "laser", "ten_lua"]
hiep_dau = 1

# Game Loop chính
while mau_phi_thuyen > 0 and mau_boss > 0:
    print(f"--- HIỆP {hiep_dau} ---")
    print(f"HP Phi Thuyền: {mau_phi_thuyen} | HP Boss Void-Titan: {mau_boss}")
    
    # Người chơi chọn vũ khí từ túi đồ
    if kho_vu_khi:
        vu_khi = kho_vu_khi.pop(0)  # Lấy vũ khí đầu tiên ra bắn
    else:
        vu_khi = "sung_luc"
        
    sat_thuong_ta = tan_cong_nguoi_choi(vu_khi)
    mau_boss -= sat_thuong_ta
    print(f"🚀 Bạn khai hỏa [{vu_khi.upper()}] gây {sat_thuong_ta} sát thương!")
    
    # Kiểm tra Boss chết chưa
    if mau_boss <= 0:
        print("\\n💥 ÙNGGGG! VOID-TITAN ĐÃ BỊ TIÊU DIỆT HOÀN TOÀN! 💥")
        print("🏆 BẠN ĐÃ TRỞ THÀNH CƠ TRƯỞNG HUYỀN THOẠI CỦA PYTHONIA! 🏆")
        break
        
    # Boss phản công
    sat_thuong_dich = tan_cong_boss()
    mau_phi_thuyen -= sat_thuong_dich
    print(f"👾 Void-Titan phóng tia hắc ám gây {sat_thuong_dich} sát thương!")
    
    if mau_phi_thuyen <= 0:
        print("\\n☠️ Phi thuyền đã cạn năng lượng! Trạm Pythonia rơi vào bóng tối...")
        break
        
    hiep_dau += 1
    print()
`,
    sampleCodeExplanation: 'Game mô phỏng hoàn chỉnh vòng lặp chiến đấu theo lượt, kết hợp hàm tan_cong, list kho_vu_khi, if-else phán quyết và while loop.',
    challenges: [
      {
        id: 'c10-1',
        name: 'Khởi động: Lắp Đạn Tên Lửa Cho Trận Đấu',
        isBoss: false,
        situation: 'Tạo hàm `nap_dan()` trả về danh sách 3 viên đạn: `["laser", "ten_lua", "sieu_phao"]`.',
        hintLevel1: 'Dùng từ khóa `def nap_dan():` và `return` một danh sách.',
        hintLevel2Skeleton: 'def nap_dan():\n    return ["laser", "ten_lua", "_____"]\n\ntui_dan = nap_dan()\nprint("Đạn đã nạp:", tui_dan)',
        hintLevel3Solution: 'def nap_dan():\n    return ["laser", "ten_lua", "sieu_phao"]\n\ntui_dan = nap_dan()\nprint("Đạn đã nạp:", tui_dan)',
        hintLevel3Explanation: 'Hàm trả về danh sách 3 loại đạn sẵn sàng chiến đấu.',
        starterCode: '# Viết hàm nap_dan trả về danh sách đạn:\n',
        expectedOutputSnippet: 'Đạn đã nạp: [\'laser\', \'ten_lua\', \'sieu_phao\']',
        testKeywords: ['def nap_dan', 'return', 'print'],
        xpReward: 100,
      },
      {
        id: 'c10-2',
        name: 'Trùm Cuối Tối Thượng: Đòn Kết Liễu Final Smash',
        isBoss: true,
        situation:
          'Khi `mau_boss <= 0`, hệ thống cần in ra "CHIẾN THẮNG!" và thoát khỏi vòng lặp ngay lập tức bằng `break`. Hãy hoàn thiện logic kết liễu này!',
        hintLevel1: 'Dùng câu lệnh `if mau_boss <= 0:` bên trong thân vòng lặp, sau đó gọi `print("CHIẾN THẮNG!")` và `break`.',
        hintLevel2Skeleton: 'mau_boss = 10\nmau_boss -= 15  # Đòn đánh gây -15 máu\n\nif mau_boss <= 0:\n    print("_____")\n    _____  # Thoát vòng lặp',
        hintLevel3Solution: 'mau_boss = 10\nmau_boss -= 15\n\nif mau_boss <= 0:\n    print("CHIẾN THẮNG!")\n    break',
        hintLevel3Explanation: 'Khi máu Boss nhỏ hơn hoặc bằng 0, in thông điệp chiến thắng và break dừng game loop.',
        starterCode: 'mau_boss = 10\nmau_boss -= 15\n# Hoàn thiện logic phán quyết chiến thắng:\nif mau_boss <= 0:\n    print("CHIẾN THẮNG!")\n',
        expectedOutputSnippet: 'CHIẾN THẮNG!',
        testKeywords: ['if mau_boss <= 0', 'print("CHIẾN THẮNG!")', 'break'],
        xpReward: 250,
      },
    ],
  },
];
