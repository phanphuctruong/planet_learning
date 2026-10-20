/**
 * Core pure logic and helper engine for Starship Pythonia
 */

export interface CadetRank {
  level: number;
  title: string;
  minXp: number;
  badge: string;
  color: string;
}

export const CADET_RANKS: CadetRank[] = [
  { level: 1, title: 'Học Viên Tân Binh', minXp: 0, badge: '🚀', color: 'from-blue-500 to-cyan-500' },
  { level: 2, title: 'Thiếu Úy Không Gian', minXp: 150, badge: '⭐', color: 'from-cyan-500 to-teal-500' },
  { level: 3, title: 'Đại Úy Lô-Gic', minXp: 400, badge: '⚡', color: 'from-amber-500 to-yellow-500' },
  { level: 4, title: 'Cơ Trưởng Pythonia', minXp: 750, badge: '🛡️', color: 'from-purple-500 to-pink-500' },
  { level: 5, title: 'Đại Tướng Cyber Tối Cao', minXp: 1200, badge: '👑', color: 'from-rose-500 to-amber-500' },
];

export function getRankFromXp(xp: number): CadetRank {
  let currentRank = CADET_RANKS[0];
  for (const rank of CADET_RANKS) {
    if (xp >= rank.minXp) {
      currentRank = rank;
    } else {
      break;
    }
  }
  return currentRank;
}

export function getNextRankProgress(xp: number): {
  currentRank: CadetRank;
  nextRank: CadetRank | null;
  progressPercent: number;
  xpNeeded: number;
} {
  const currentRank = getRankFromXp(xp);
  const currentIndex = CADET_RANKS.findIndex(r => r.level === currentRank.level);
  const nextRank = currentIndex < CADET_RANKS.length - 1 ? CADET_RANKS[currentIndex + 1] : null;

  if (!nextRank) {
    return {
      currentRank,
      nextRank: null,
      progressPercent: 100,
      xpNeeded: 0,
    };
  }

  const range = nextRank.minXp - currentRank.minXp;
  const earnedInRange = Math.max(0, xp - currentRank.minXp);
  const progressPercent = Math.min(100, Math.round((earnedInRange / range) * 100));
  const xpNeeded = Math.max(0, nextRank.minXp - xp);

  return {
    currentRank,
    nextRank,
    progressPercent,
    xpNeeded,
  };
}

export interface CodeValidationResult {
  isValid: boolean;
  message: string;
  missingKeywords: string[];
  stillHasBlanks: boolean;
}

export function validateChallengeCode(
  userCode: string,
  options: {
    testKeywords?: string[];
    requiredPatterns?: RegExp[];
    allowBlank?: boolean;
  } = {}
): CodeValidationResult {
  const trimmed = userCode.trim();
  if (!trimmed) {
    return {
      isValid: false,
      message: 'Năng lượng code trống rỗng! Hãy nạp đạn code trước khi kích hoạt.',
      missingKeywords: options.testKeywords || [],
      stillHasBlanks: false,
    };
  }

  // Check if blanks (3 or more underscores) are still present
  const hasBlanks = /_{3,}/.test(userCode);
  if (hasBlanks && !options.allowBlank) {
    return {
      isValid: false,
      message: 'Cảnh báo! Vẫn còn các ô trống _____ chưa được giải mã!',
      missingKeywords: [],
      stillHasBlanks: true,
    };
  }

  // Check required keywords
  const missingKeywords: string[] = [];
  if (options.testKeywords && options.testKeywords.length > 0) {
    for (const kw of options.testKeywords) {
      if (!userCode.includes(kw)) {
        missingKeywords.push(kw);
      }
    }
  }

  if (missingKeywords.length > 0) {
    return {
      isValid: false,
      message: `Thiếu từ khóa năng lượng vũ trụ: ${missingKeywords.map(k => `"${k}"`).join(', ')}`,
      missingKeywords,
      stillHasBlanks: false,
    };
  }

  // Check required patterns if any
  if (options.requiredPatterns) {
    for (const pat of options.requiredPatterns) {
      if (!pat.test(userCode)) {
        return {
          isValid: false,
          message: 'Cấu trúc lệnh chưa khớp với yêu cầu vũ trụ!',
          missingKeywords: [],
          stillHasBlanks: false,
        };
      }
    }
  }

  return {
    isValid: true,
    message: 'Năng lượng code kích hoạt thành công! Trạm vũ trụ nhận lệnh!',
    missingKeywords: [],
    stillHasBlanks: false,
  };
}

/**
 * Turtle command representation
 */
export interface TurtleCommand {
  type: 'forward' | 'backward' | 'left' | 'right' | 'circle' | 'color' | 'penup' | 'pendown' | 'goto' | 'speed' | 'begin_fill' | 'end_fill' | 'dot' | 'shape';
  args: (number | string)[];
}

/**
 * Parses Python turtle code into structured canvas animation commands
 */
export function parseTurtleScript(code: string): TurtleCommand[] {
  const commands: TurtleCommand[] = [];
  const lines = code.split('\n');

  // Simple regex parser for common turtle commands
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    // match t.forward(100) or forward(100) or turtle.forward(100)
    const match = line.match(/(?:[a-zA-Z0-9_]+\.)?([a-zA-Z0-9_]+)\((.*)\)/);
    if (!match) continue;

    const fnName = match[1].toLowerCase();
    const rawArgs = match[2].trim();

    const parseArgs = (argsStr: string): (number | string)[] => {
      if (!argsStr) return [];
      return argsStr.split(',').map(s => {
        const cleaned = s.trim().replace(/^['"]|['"]$/g, '');
        const num = Number(cleaned);
        return isNaN(num) ? cleaned : num;
      });
    };

    const parsedArgs = parseArgs(rawArgs);

    switch (fnName) {
      case 'forward':
      case 'fd':
        commands.push({ type: 'forward', args: [Number(parsedArgs[0]) || 50] });
        break;
      case 'backward':
      case 'bk':
      case 'back':
        commands.push({ type: 'backward', args: [Number(parsedArgs[0]) || 50] });
        break;
      case 'left':
      case 'lt':
        commands.push({ type: 'left', args: [Number(parsedArgs[0]) || 90] });
        break;
      case 'right':
      case 'rt':
        commands.push({ type: 'right', args: [Number(parsedArgs[0]) || 90] });
        break;
      case 'circle':
        commands.push({ type: 'circle', args: [Number(parsedArgs[0]) || 50] });
        break;
      case 'color':
      case 'pencolor':
        commands.push({ type: 'color', args: [String(parsedArgs[0] || 'cyan')] });
        break;
      case 'penup':
      case 'up':
        commands.push({ type: 'penup', args: [] });
        break;
      case 'pendown':
      case 'down':
        commands.push({ type: 'pendown', args: [] });
        break;
      case 'goto':
      case 'setpos':
        commands.push({ type: 'goto', args: [Number(parsedArgs[0]) || 0, Number(parsedArgs[1]) || 0] });
        break;
      case 'begin_fill':
        commands.push({ type: 'begin_fill', args: [] });
        break;
      case 'end_fill':
        commands.push({ type: 'end_fill', args: [] });
        break;
      case 'dot':
        commands.push({ type: 'dot', args: [Number(parsedArgs[0]) || 5] });
        break;
      default:
        break;
    }
  }

  return commands;
}

/**
 * Generate formatted Markdown strictly matching the prompt's 4 parts
 */
export function formatLessonToMarkdown(lesson: {
  overview: {
    codeName: string;
    lessonTitle: string;
    missionBriefing: string;
    unlockedSkills: string[];
    requiredEquipment: string[];
  };
  storyboard: Array<{
    sceneNumber: number;
    phaseName: string;
    duration: string;
    visual: string;
    voiceover: string;
    sfx: string;
    onScreenCode: string;
  }>;
  sampleCode: string;
  challenges: Array<{
    name: string;
    situation: string;
    hintLevel1: string;
    hintLevel2Skeleton: string;
    hintLevel3Solution: string;
    hintLevel3Explanation: string;
  }>;
}): string {
  const parts: string[] = [];

  // PHẦN 1: BẢNG TỔNG QUAN NHIỆM VỤ (MISSION BRIEFING)
  parts.push(`## PHẦN 1: BẢNG TỔNG QUAN NHIỆM VỤ (MISSION BRIEFING)`);
  parts.push(`- **Tên bài học / Mật hiệu màn chơi:** ${lesson.overview.codeName} - ${lesson.overview.lessonTitle}`);
  parts.push(`- **Mục tiêu mở khóa:**`);
  lesson.overview.unlockedSkills.forEach(skill => {
    parts.push(`  + ${skill}`);
  });
  parts.push(`- **Trang bị cần thiết:** ${lesson.overview.requiredEquipment.join(', ')}`);
  parts.push(`- **Cốt truyện dẫn dắt:** ${lesson.overview.missionBriefing}`);
  parts.push('');

  // PHẦN 2: STORYBOARD KỊCH BẢN PHÂN CẢNH ĐA PHƯƠNG TIỆN
  parts.push(`## PHẦN 2: STORYBOARD KỊCH BẢN PHÂN CẢNH ĐA PHƯƠNG TIỆN`);
  parts.push(`| Cảnh (#) & Thời lượng | Hình ảnh & Animation (Visual) | Lời thoại A.X.E.L (Voiceover) | Âm thanh & Hiệu ứng (SFX/BGM) | Code hiển thị màn hình (On-Screen Code) |`);
  parts.push(`| :--- | :--- | :--- | :--- | :--- |`);
  for (const scene of lesson.storyboard) {
    const visual = scene.visual.replace(/\n/g, ' ');
    const vo = scene.voiceover.replace(/\n/g, ' ');
    const sfx = scene.sfx.replace(/\n/g, ' ');
    const code = scene.onScreenCode.replace(/\n/g, '<br>`');
    parts.push(`| **${scene.phaseName}** (${scene.duration}) | ${visual} | ${vo} | ${sfx} | \`${code}\` |`);
  }
  parts.push('');

  // PHẦN 3: BỘ CODE MẪU VŨ TRỤ (CLEAN & COMMENTED CODE)
  parts.push(`## PHẦN 3: BỘ CODE MẪU VŨ TRỤ (CLEAN & COMMENTED CODE)`);
  parts.push('```python');
  parts.push(lesson.sampleCode);
  parts.push('```');
  parts.push('');

  // PHẦN 4: KHU THỰC HÀNH CHIẾN BINH (GAMIFIED CODING CHALLENGES)
  parts.push(`## PHẦN 4: KHU THỰC HÀNH CHIẾN BINH (GAMIFIED CODING CHALLENGES)`);
  for (const challenge of lesson.challenges) {
    parts.push(`### ⚔️ THỬ THÁCH: ${challenge.name}`);
    parts.push(`- **Tình huống:** ${challenge.situation}`);
    parts.push(`- **Hệ thống hỗ trợ sinh tồn (Hint System):**`);
    parts.push(`  - 🔍 **Tầng 1 (Manh mối tư duy):** ${challenge.hintLevel1}`);
    parts.push(`  - 🛠️ **Tầng 2 (Bản đồ khung code):**`);
    parts.push('```python');
    parts.push(challenge.hintLevel2Skeleton);
    parts.push('```');
    parts.push(`  - 🔑 **Tầng 3 (Chìa khóa năng lượng - Lời giải):**`);
    parts.push(`<details><summary>Nhấn để mở khóa mật mã giải cứu (Đáp án hoàn chỉnh)</summary>`);
    parts.push('');
    parts.push('```python');
    parts.push(challenge.hintLevel3Solution);
    parts.push('```');
    parts.push('');
    parts.push(`*Giải thích:* ${challenge.hintLevel3Explanation}`);
    parts.push('</details>');
    parts.push('');
  }

  return parts.join('\n');
}
