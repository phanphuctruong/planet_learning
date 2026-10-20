export interface MissionOverview {
  lessonNumber: number; // 1 to 10 or custom
  stageId: string; // e.g. "man-1"
  codeName: string; // Mật hiệu màn chơi
  lessonTitle: string; // Tên bài học
  missionBriefing: string; // Cốt truyện dẫn dắt (2-3 câu tình huống khẩn cấp)
  unlockedSkills: string[]; // 2-3 kỹ năng cốt lõi
  requiredEquipment: string[]; // Python 3, Turtle, time, random...
  badge: {
    name: string;
    icon: string;
    description: string;
  };
}

export interface StoryboardScene {
  sceneNumber: number;
  phaseName: string; // e.g. "Cảnh 1: Báo động", "Cảnh 2: Chìa khóa..."
  duration: string; // e.g. "00:00 - 00:45"
  visual: string; // Mô tả đồ họa, cử chỉ robot, hiệu ứng 2D/3D
  voiceover: string; // Lời thoại A.X.E.L (xưng A.X.E.L, gọi Phi hành gia nhí / Chiến binh Code)
  sfx: string; // Âm thanh & hiệu ứng (SFX/BGM)
  onScreenCode: string; // Dòng code minh họa trực quan ngắn gọn
  axelMood?: 'excited' | 'warning' | 'thinking' | 'victory' | 'typing';
}

export interface GamifiedChallenge {
  id: string;
  name: string;
  isBoss: boolean;
  situation: string;
  hintLevel1: string; // 🔍 Manh mối tư duy
  hintLevel2Skeleton: string; // 🛠️ Bản đồ khung code có _____
  hintLevel3Solution: string; // 🔑 Chìa khóa năng lượng
  hintLevel3Explanation: string; // Giải thích ngắn gọn 2 dòng
  starterCode: string;
  expectedOutputSnippet?: string;
  testKeywords?: string[];
  xpReward: number;
}

export interface LessonPlan {
  id: string;
  overview: MissionOverview;
  storyboard: StoryboardScene[];
  sampleCode: string;
  sampleCodeExplanation: string;
  challenges: GamifiedChallenge[];
  isCustom?: boolean;
}
