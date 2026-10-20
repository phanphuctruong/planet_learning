import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI on the server
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  aiClient = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    starship: 'Pythonia',
    aiEnabled: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Endpoint to generate custom gamified Python 5E lesson with A.X.E.L persona
app.post('/api/generate-lesson', async (req, res) => {
  const { topic, gradeLevel = '11-15', duration = '45 phút' } = req.body;

  if (!topic || typeof topic !== 'string') {
    return res.status(400).json({ error: 'Chủ đề bài học (topic) là bắt buộc.' });
  }

  const prompt = `
Bạn là A.X.E.L (Autonomous Cyber-Explorer & Logic Master) – Robot trợ lý thông minh kiêm Game Master tối cao của Tàu Thám Hiểm Vũ Trụ Pythonia.
Nhiệm vụ: Thiết kế kịch bản bài giảng E-Learning trực quan, hấp dẫn theo phương pháp Gamification kết hợp mô hình 5E dành riêng cho học sinh THCS (lứa tuổi 11 - 15) học lập trình Python.
Chủ đề bài học yêu cầu: "${topic}"
Thời lượng dự kiến: "${duration}"

Hãy xuất dữ liệu DƯỚI ĐỊNH DẠNG JSON DUY NHẤT (không bọc trong markdown tick) theo cấu trúc schema sau:
{
  "id": "custom-lesson",
  "overview": {
    "lessonNumber": 11,
    "stageId": "custom-stage",
    "codeName": "Màn Tùy Biến: [Tên mật hiệu giật gân]",
    "lessonTitle": "[Tên bài học kết hợp phiêu lưu]",
    "missionBriefing": "[Cốt truyện 2-3 câu tình huống khẩn cấp]",
    "unlockedSkills": ["Kỹ năng 1", "Kỹ năng 2", "Kỹ năng 3"],
    "requiredEquipment": ["Python 3.10+", "Thư viện liên quan"],
    "badge": {
      "name": "[Tên huy hiệu]",
      "icon": "⚡",
      "description": "[Mô tả chiến công]"
    }
  },
  "storyboard": [
    {
      "sceneNumber": 1,
      "phaseName": "Cảnh 1: Khởi động",
      "duration": "00:00 - 00:45",
      "visual": "[Mô tả đồ họa, cử chỉ robot]",
      "voiceover": "[Lời thoại xưng A.X.E.L, gọi Phi hành gia nhí / Chiến binh Code]",
      "sfx": "[Âm thanh máy móc, tiếng cảnh báo]",
      "onScreenCode": "[Code minh họa ngắn gọn]",
      "axelMood": "warning"
    },
    {
      "sceneNumber": 2,
      "phaseName": "Cảnh 2: Khám phá bí ẩn",
      "duration": "00:45 - 01:30",
      "visual": "[Mô tả]",
      "voiceover": "[Lời thoại]",
      "sfx": "[SFX]",
      "onScreenCode": "[Code]",
      "axelMood": "excited"
    },
    {
      "sceneNumber": 3,
      "phaseName": "Cảnh 3: Giải mã cốt lõi",
      "duration": "01:30 - 02:15",
      "visual": "[Mô tả]",
      "voiceover": "[Lời thoại]",
      "sfx": "[SFX]",
      "onScreenCode": "[Code]",
      "axelMood": "thinking"
    },
    {
      "sceneNumber": 4,
      "phaseName": "Cảnh 4: Kích hoạt thành công",
      "duration": "02:15 - 03:00",
      "visual": "[Mô tả]",
      "voiceover": "[Lời thoại]",
      "sfx": "[SFX]",
      "onScreenCode": "[Code]",
      "axelMood": "victory"
    }
  ],
  "sampleCode": "[Mã Python hoàn chỉnh, sạch, có chú thích bằng tiếng Việt hóm hỉnh]",
  "sampleCodeExplanation": "[Giải thích ngắn gọn 2 dòng]",
  "challenges": [
    {
      "id": "custom-c1",
      "name": "Khởi động: [Tên thử thách]",
      "isBoss": false,
      "situation": "[Mô tả nhiệm vụ cụ thể và dữ liệu đầu vào/ra kỳ vọng]",
      "hintLevel1": "[Tầng 1: Gợi ý logic/thuật toán bằng ngôn ngữ đời thường, không lộ cú pháp]",
      "hintLevel2Skeleton": "[Tầng 2: Đoạn code khung có các ô trống _____ để học sinh điền vào]",
      "hintLevel3Solution": "[Tầng 3: Lời giải hoàn chỉnh]",
      "hintLevel3Explanation": "[Giải thích ngắn gọn 2 dòng]",
      "starterCode": "# Code khung khởi đầu:\\n",
      "expectedOutputSnippet": "[Một phần kết quả mong đợi]",
      "testKeywords": ["keyword1"],
      "xpReward": 80
    },
    {
      "id": "custom-c2",
      "name": "Trùm Cuối Boss Bug: [Tên quái vật bug]",
      "isBoss": true,
      "situation": "[Tình huống tiêu diệt boss]",
      "hintLevel1": "[Tầng 1]",
      "hintLevel2Skeleton": "[Tầng 2 code khung có _____]",
      "hintLevel3Solution": "[Tầng 3 lời giải]",
      "hintLevel3Explanation": "[Giải thích 2 dòng]",
      "starterCode": "# Sửa code lỗi:\\n",
      "expectedOutputSnippet": "[Kết quả mong đợi]",
      "testKeywords": ["keyword1"],
      "xpReward": 150
    }
  ]
}
`;

  try {
    if (aiClient) {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const text = response.text || '';
      try {
        const parsed = JSON.parse(text);
        return res.json({ lesson: parsed, source: 'gemini' });
      } catch (parseErr) {
        // Fallback if JSON parse failed
      }
    }

    // Dynamic offline fallback generator for rich experience
    const fallbackLesson = {
      id: `custom-${Date.now()}`,
      overview: {
        lessonNumber: 11,
        stageId: 'custom-stage',
        codeName: `Màn Đặc Biệt: Thám Hiểm ${topic}`,
        lessonTitle: `Bí Ẩn Tinh Cầu ${topic} & Giải Cứu Trạm Pythonia`,
        missionBriefing: `Lõi năng lượng ${topic} của trạm vũ trụ đang gặp sự cố lệch từ trường! Các Phi hành gia nhí hãy nạp đạn kiến thức về ${topic} để khôi phục cân bằng cho hệ thống trước khi cơn bão hạt mang tên Bug tràn qua!`,
        unlockedSkills: [
          `Làm chủ khái niệm cốt lõi của ${topic} trong ngôn ngữ Python`,
          `Ứng dụng ${topic} để xử lý dữ liệu và thuật toán phi thuyền`,
          `Giải mã các câu đố logic và tiêu diệt quái vật Bug bảo vệ thiên hà`,
        ],
        requiredEquipment: ['Python 3.10+', 'Trình điều khiển lượng tử'],
        badge: {
          name: `Hiệp Sĩ ${topic}`,
          icon: '✨',
          description: `Chiến binh làm chủ sức mạnh ${topic} giải cứu trạm Pythonia`,
        },
      },
      storyboard: [
        {
          sceneNumber: 1,
          phaseName: 'Cảnh 1: Khởi động & Báo động Tinh Vân',
          duration: '00:00 - 00:45',
          visual: `A.X.E.L chớp mắt LED màu vàng cam, chiếu hình ba chiều mô phỏng hiện tượng ${topic} đang biến động trên màn hình kính vòm.`,
          voiceover: `Bíp bíp! Chào các Chiến binh Code! Tôi là A.X.E.L. Trạm Pythonia vừa bắt được một nguồn năng lượng cực mạnh mang tên ${topic}. Chúng ta cần khai phá nó ngay để tăng tốc phi thuyền!`,
          sfx: 'Tiếng còi cảnh báo nhẹ, âm thanh nạp điện lượng tử rù rù.',
          onScreenCode: `# Khám phá sức mạnh: ${topic}\nprint("KÍCH HOẠT HỆ THỐNG ${topic.toUpperCase()}...")`,
          axelMood: 'warning' as const,
        },
        {
          sceneNumber: 2,
          phaseName: 'Cảnh 2: Khám phá Bí Mật Cốt Lõi',
          duration: '00:45 - 01:30',
          visual: `A.X.E.L tháo rời một khối pha lê ${topic}, chỉ cho phi hành gia cấu trúc bên trong.`,
          voiceover: `Nhìn này các phi hành gia! Khái niệm ${topic} hoạt động hệt như một chiếc khóa vạn năng. Khi hiểu được quy luật của nó, bạn sẽ tiết kiệm được hàng trăm dòng lệnh thủ công!`,
          sfx: 'Tiếng lách cách cơ khí, hiệu ứng hào quang xanh lam bừng sáng.',
          onScreenCode: `# Mô hình hóa dữ liệu ${topic}\nnang_luong = 100\nprint("Hiệu suất:", nang_luong)`,
          axelMood: 'excited' as const,
        },
        {
          sceneNumber: 3,
          phaseName: 'Cảnh 3: Giải mã Cốt lõi & Tránh Bẫy Bug',
          duration: '01:30 - 02:15',
          visual: `A.X.E.L chỉ vào sơ đồ luồng dữ liệu, cảnh báo các lỗi phổ biến mà tân binh hay gặp phải.`,
          voiceover: `Cẩn thận nhé các bạn! Quái vật Bug rất thích cắn đứt các cú pháp của ${topic}. Hãy kiểm tra cẩn thận từng dấu ngoặc, dấu nháy và vị trí biến trước khi kích hoạt!`,
          sfx: 'Tiếng radar rà quét tít tít, âm thanh gõ phím nhanh.',
          onScreenCode: `# Cú pháp chuẩn xác = Vũ khí tối thượng\nif nang_luong > 50:\n    print("Trạng thái tối ưu!")`,
          axelMood: 'thinking' as const,
        },
        {
          sceneNumber: 4,
          phaseName: 'Cảnh 4: Khải Hoàn Tỏa Sáng',
          duration: '02:15 - 03:00',
          visual: `Cả khoang lái bừng sáng màu lục bảo. Bản đồ chòm sao mới hiện lên rạng rỡ.`,
          voiceover: `Xuất sắc! Năng lượng ${topic} đã hòa nhập trơn tru vào động cơ chính của tàu Pythonia! Giờ là lúc các chiến binh bước vào võ đài thực hành để nhận huy hiệu!`,
          sfx: 'Tiếng chuông chiến thắng leng keng, nhạc nền sôi nổi.',
          onScreenCode: `print("HOÀN THÀNH HUẤN LUYỆN: ${topic.toUpperCase()} SẴN SÀNG!")`,
          axelMood: 'victory' as const,
        },
      ],
      sampleCode: `# ==============================================================
# NHIỆM VỤ ĐẶC BIỆT: LÀM CHỦ ${topic.toUpperCase()}
# Hoa tiêu: A.X.E.L & Phi Hành Gia Code
# ==============================================================

print("🚀 --- KHỞI ĐỘNG CHƯƠNG TRÌNH ${topic.toUpperCase()} --- 🚀")

# 1. Khởi tạo tài nguyên
tai_nguyen_chinh = "${topic}"
muc_do_uu_tien = 1
nang_luong_khoi_tao = 95

print(f"Chuyên đề thám hiểm: {tai_nguyen_chinh}")
print(f"Mức ưu tiên: Cấp {muc_do_uu_tien}")

# 2. Xử lý thuật toán
if nang_luong_khoi_tao >= 80:
    print(f"Năng lượng {tai_nguyen_chinh} đạt chuẩn tối đa: {nang_luong_khoi_tao}%! ⚡")
else:
    print("Cần nạp thêm pin vũ trụ.")

print("Kích hoạt hoàn tất! Sẵn sàng vượt qua mọi chướng ngại vật!")
`,
      sampleCodeExplanation: `Mã nguồn hoàn chỉnh áp dụng các nguyên lý lập trình Python cho chuyên đề ${topic}, có chú thích chi tiết bằng tiếng Việt.`,
      challenges: [
        {
          id: `custom-c1`,
          name: `Khởi động: Thắp Sáng Ngọn Lửa ${topic}`,
          isBoss: false,
          situation: `Hãy viết câu lệnh Python xuất ra thông điệp: "Kích hoạt ${topic} thành công!" để báo cáo về đài chỉ huy.`,
          hintLevel1: 'Dùng lệnh `print()` quen thuộc và nhớ bao bọc văn bản bằng dấu ngoặc kép `""`.',
          hintLevel2Skeleton: `_____("Kích hoạt ${topic} thành công!")`,
          hintLevel3Solution: `print("Kích hoạt ${topic} thành công!")`,
          hintLevel3Explanation: `Lệnh print() xuất chính xác chuỗi thông báo ra màn hình điều khiển.`,
          starterCode: `# Viết câu lệnh khởi động tại đây:\n`,
          expectedOutputSnippet: `Kích hoạt ${topic} thành công!`,
          testKeywords: ['print', topic],
          xpReward: 80,
        },
        {
          id: `custom-c2`,
          name: `Trùm Cuối Boss Bug: Quái Vật Cú Pháp Hắc Ám`,
          isBoss: true,
          situation: `Một con Bug đang phong tỏa cổng năng lượng ${topic}. Hãy sửa câu lệnh điều kiện bị thiếu dấu hai chấm \`:\` và in ra "VƯỢT QUA BOSS!".`,
          hintLevel1: 'Mọi câu lệnh `if` trong Python đều phải kết thúc bằng dấu hai chấm `:` ở cuối dòng.',
          hintLevel2Skeleton: `nang_luong = 100\nif nang_luong == 100_____\n    print("VƯỢT QUA BOSS!")`,
          hintLevel3Solution: `nang_luong = 100\nif nang_luong == 100:\n    print("VƯỢT QUA BOSS!")`,
          hintLevel3Explanation: `Dấu hai chấm : mở ra khối lệnh thực thi khi điều kiện if thỏa mãn.`,
          starterCode: `nang_luong = 100\n# Sửa lỗi dòng if dưới đây:\nif nang_luong == 100\n    print("VƯỢT QUA BOSS!")\n`,
          expectedOutputSnippet: 'VƯỢT QUA BOSS!',
          testKeywords: ['if nang_luong == 100:', 'VƯỢT QUA BOSS!'],
          xpReward: 160,
        },
      ],
      isCustom: true,
    };

    return res.json({ lesson: fallbackLesson, source: 'offline-engine' });
  } catch (err: any) {
    console.error('Error generating lesson:', err);
    return res.status(500).json({ error: 'Không thể tạo bài giảng: ' + (err.message || 'Lỗi không xác định') });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Tàu Thám Hiểm Pythonia đang bay tại http://localhost:${PORT}`);
  });
}

startServer();
