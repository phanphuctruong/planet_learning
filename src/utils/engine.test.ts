import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getRankFromXp,
  getNextRankProgress,
  validateChallengeCode,
  parseTurtleScript,
  formatLessonToMarkdown,
} from './engine.ts';

test('getRankFromXp calculates ranks correctly across milestones', () => {
  const cadet = getRankFromXp(0);
  assert.equal(cadet.level, 1);
  assert.equal(cadet.title, 'Học Viên Tân Binh');

  const rank2 = getRankFromXp(200);
  assert.equal(rank2.level, 2);
  assert.equal(rank2.title, 'Thiếu Úy Không Gian');

  const topRank = getRankFromXp(2000);
  assert.equal(topRank.level, 5);
  assert.equal(topRank.title, 'Đại Tướng Cyber Tối Cao');
});

test('getNextRankProgress calculates percentage and needed XP', () => {
  const progress = getNextRankProgress(75);
  assert.equal(progress.currentRank.level, 1);
  assert.equal(progress.nextRank?.level, 2);
  assert.equal(progress.progressPercent, 50);
  assert.equal(progress.xpNeeded, 75);

  const maxProgress = getNextRankProgress(1500);
  assert.equal(maxProgress.progressPercent, 100);
  assert.equal(maxProgress.nextRank, null);
});

test('validateChallengeCode flags blank underscores and missing keywords', () => {
  // Empty code
  const emptyRes = validateChallengeCode('');
  assert.equal(emptyRes.isValid, false);

  // Code with blanks left
  const blankRes = validateChallengeCode('print("_____")\nx = _____', { testKeywords: ['print'] });
  assert.equal(blankRes.isValid, false);
  assert.equal(blankRes.stillHasBlanks, true);

  // Code missing keywords
  const missingRes = validateChallengeCode('x = 42\ny = 100', { testKeywords: ['print', 'input'] });
  assert.equal(missingRes.isValid, false);
  assert.deepEqual(missingRes.missingKeywords, ['print', 'input']);

  // Valid code
  const validRes = validateChallengeCode('print("Xin chào Pythonia")\ninput("Tên:")', {
    testKeywords: ['print', 'input'],
  });
  assert.equal(validRes.isValid, true);
  assert.equal(validRes.missingKeywords.length, 0);
});

test('parseTurtleScript correctly extracts forward, left, color, circle', () => {
  const script = `
# Khởi động rùa không gian
t.color("cyan")
t.forward(100)
t.left(90)
t.circle(50)
t.penup()
t.backward(20)
`;
  const commands = parseTurtleScript(script);
  assert.equal(commands.length, 6);
  assert.equal(commands[0].type, 'color');
  assert.equal(commands[0].args[0], 'cyan');
  assert.equal(commands[1].type, 'forward');
  assert.equal(commands[1].args[0], 100);
  assert.equal(commands[2].type, 'left');
  assert.equal(commands[2].args[0], 90);
  assert.equal(commands[3].type, 'circle');
  assert.equal(commands[3].args[0], 50);
  assert.equal(commands[4].type, 'penup');
  assert.equal(commands[5].type, 'backward');
  assert.equal(commands[5].args[0], 20);
});

test('formatLessonToMarkdown produces all 4 mandatory parts', () => {
  const md = formatLessonToMarkdown({
    overview: {
      codeName: 'Màn 1: Nhập môn & Bản đồ câu lệnh',
      lessonTitle: 'Đánh thức Trạm Không Gian Pythonia',
      missionBriefing: 'Trạm vũ trụ mất điện! Cần truyền tín hiệu cấp cứu bằng lệnh print.',
      unlockedSkills: ['Làm chủ lệnh print()', 'Xuất chuỗi ký tự', 'Vẽ tranh ký tự ASCII'],
      requiredEquipment: ['Python 3'],
    },
    storyboard: [
      {
        sceneNumber: 1,
        phaseName: 'Cảnh 1: Khởi động',
        duration: '00:00 - 00:45',
        visual: 'A.X.E.L chớp mắt LED',
        voiceover: 'Chào Phi hành gia nhí!',
        sfx: 'Bíp bíp',
        onScreenCode: 'print("Hello")',
      },
    ],
    sampleCode: 'print("Pythonia Online!")',
    challenges: [
      {
        name: 'Bật đèn tín hiệu',
        situation: 'Xuất dòng chữ cấp cứu',
        hintLevel1: 'Dùng print',
        hintLevel2Skeleton: 'print("_____")',
        hintLevel3Solution: 'print("SOS")',
        hintLevel3Explanation: 'Lệnh print xuất chuỗi',
      },
    ],
  });

  assert.match(md, /## PHẦN 1: BẢNG TỔNG QUAN NHIỆM VỤ \(MISSION BRIEFING\)/);
  assert.match(md, /## PHẦN 2: STORYBOARD KỊCH BẢN PHÂN CẢNH ĐA PHƯƠNG TIỆN/);
  assert.match(md, /## PHẦN 3: BỘ CODE MẪU VŨ TRỤ \(CLEAN & COMMENTED CODE\)/);
  assert.match(md, /## PHẦN 4: KHU THỰC HÀNH CHIẾN BINH \(GAMIFIED CODING CHALLENGES\)/);
  assert.match(md, /🔍 \*\*Tầng 1 \(Manh mối tư duy\):\*\*/);
  assert.match(md, /🛠️ \*\*Tầng 2 \(Bản đồ khung code\):\*\*/);
  assert.match(md, /🔑 \*\*Tầng 3 \(Chìa khóa năng lượng - Lời giải\):\*\*/);
});
