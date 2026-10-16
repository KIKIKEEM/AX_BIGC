/**
 * BIGC AX 리더 워크샵(10/16) 사후 설문 — 구글 폼 자동 생성
 * 작성 2026-10-16 · 기준 문서: 10_사후설문_설계.md (문항 번호 Q1~Q29, C1~C7, S1~S4가 이 파일 주석과 같다)
 * 도구 설명 문구(Q9·Q20)는 14_도구_사실확인.md(2026-10-16) §1·§3·§6 기준. 바꾸면 10_사후설문_설계.md §1.2도 같이 고친다(폼 생성 모의 테스트(레포 밖)가 점검).
 *
 * ───────────── 사용법 ─────────────
 * 1. script.google.com → [새 프로젝트] → 기본 코드(Code.gs)를 모두 지우고 이 파일 전체를 붙여 넣는다.
 * 2. 바로 아래 CONFIG를 확인한다.
 *    - PARTS: 운영 담당에게 받은 실제 파트 목록으로 바꾼다. 1명뿐인 파트는 다른 파트와 묶는다(사실상 실명이 되므로).
 *    - SHARED_CHANNEL: 확인 메시지에 들어갈 공유 채널 이름(예: #ax-리더). 바꾸지 않으면 '[공유 채널 이름]'이 그대로 보인다.
 *    - CEO_AGREED: 대표님께 '원문 비공개, 숫자·테마·동의한 인용만 공지 활용' 원칙을 메시지로 합의받았으면 true.
 *      true면 리더 설문 설명에 '대표님과 미리 합의한 원칙입니다'가 들어간다. 합의 전이면 false 그대로 실행한다.
 *    - INCLUDE_CORE_TASK_QUESTION: 회사 핵심 과제 3개(CRM DB화 등)가 리더들에게 공개됐으면 true → 선택 문항 Q29 추가.
 * 3. 저장(Ctrl/Cmd+S) → 위쪽 함수 목록에서 createSurvey 선택 → [실행].
 * 4. 처음 실행하면 권한 승인 창이 뜬다: 계정 선택 → ('확인되지 않은 앱' 경고가 나오면) 고급 → 프로젝트로 이동 → 허용.
 *    내 드라이브에 폼과 시트를 만드는 권한이다.
 * 5. 아래쪽 [실행 로그]에 URL이 찍힌다.
 *    - ① 리더 설문 응답 URL → 리더 단톡·채널에 배포
 *    - ② 대표 설문 응답 URL → 대표님께 개별 메시지로
 *    - ③ 오피스아워·개별 답변 신청 응답 URL → ①의 확인 메시지(제출 후 화면)에 자동으로 들어가 있다. 따로 배포하지 않아도 된다.
 *    - 편집 URL과 시트 URL은 키키만 보관한다.
 * 6. 로그 끝의 '남은 수동 설정'(약 3분)을 폼 편집 화면에서 처리한 뒤 배포한다.
 *
 * 만들어지는 것: 폼 3개 + 시트 2개
 *   ① 리더 설문 7페이지 28문항(필수 22) · ② 대표 설문 2페이지 7문항(필수 6) · ③ 오피스아워·개별 답변 신청 1페이지 4문항(필수 3)
 *   시트 A '설문 응답' = ①②가 탭으로 따로 쌓인다. 시트 B '지원 신청' = ③. 이름이 담긴 ③은 설문 응답과 다른 파일에 둔다.
 * 다시 실행하면 폼과 시트가 새로 한 벌 더 생긴다(기존 것은 그대로). 잘못 만들었으면 드라이브에서 지운다.
 * 쓰는 API: FormApp(폼 생성·문항 추가), SpreadsheetApp.create, Logger.log 뿐이다.
 */

// ───────────── 설정 (배포 전 확인) ─────────────
const CONFIG = {
  SURVEY_SHEET_NAME: 'AX 리더워크샵 사후설문 응답 (2026-10-16)',
  ONE_ON_ONE_SHEET_NAME: 'AX 오피스아워·개별 답변 신청 응답 (10/19~11/6)',
  // [확인 필요] 실제 파트 목록으로 교체. '대표'는 넣지 않는다(대표님은 ② 대표 설문으로).
  PARTS: ['프로덕트', '개발', '디자인', 'MD·소싱', '마케팅·PR', '경영지원·법무·재무', '기타'],
  SHARED_CHANNEL: '[공유 채널 이름]',
  CEO_AGREED: false,
  INCLUDE_CORE_TASK_QUESTION: false,
};

const MANUAL_STEPS = [
  "① 리더 설문: '지금 가장 큰 허들은?'과 '다음 3주, 어떤 지원이 가장 도움이 될까요?' 문항 → 오른쪽 아래 ⋮ → '옵션 순서 섞기' 켜기(순서 효과 완화, '기타'는 맨 끝에 남음).",
  "세 폼 모두: [설정] → [응답]에서 '응답 횟수 1회로 제한'이 꺼져 있는지 확인(휴대폰에서 구글 로그인을 강요하지 않도록). 회사(Workspace) 계정으로 만들었다면 '조직 내 사용자로 제한'도 끈다.",
  "세 폼 모두: [게시] 또는 [보내기]에서 응답자 범위가 '링크가 있는 모든 사용자'인지 확인.",
  "① 리더 설문: 미리보기(눈 아이콘)를 휴대폰으로 열어 끝까지 응답 → 제출 화면의 신청 링크가 눌리는지 확인 → 폼 [응답] 탭과 시트에서 테스트 응답 삭제.",
  "파일럿: 워크샵에 없었던 1명이 '읽고 누르는 시간'만 잰다. 여기에 회상 40초 + 4L 문항당 25초를 더해 6분 30초를 넘으면 10_사후설문_설계.md §1.6의 2차 축소를 적용.",
];

// ───────────── 실행 함수 ─────────────
function createSurvey() {
  const surveySheet = SpreadsheetApp.create(CONFIG.SURVEY_SHEET_NAME);
  const oneOnOneSheet = SpreadsheetApp.create(CONFIG.ONE_ON_ONE_SHEET_NAME);

  const oneOnOne = buildOneOnOneForm_(oneOnOneSheet.getId());
  const leader = buildLeaderForm_(surveySheet.getId(), oneOnOne.getPublishedUrl());
  const ceo = buildCeoForm_(surveySheet.getId());

  Logger.log('===== 만들어진 폼 =====');
  logForm_('① 리더 설문 (리더 단톡·채널에 배포)', leader);
  logForm_('② 대표 설문 (대표님께 개별 메시지로)', ceo);
  logForm_('③ 오피스아워·개별 답변 신청 (① 제출 화면에 자동 포함)', oneOnOne);
  Logger.log('===== 응답 시트 (키키만) =====');
  Logger.log('시트 A 설문 응답(①·② 탭): ' + surveySheet.getUrl());
  Logger.log('시트 B 지원 신청(③, 이름 포함): ' + oneOnOneSheet.getUrl());
  Logger.log('탭 이름은 자동으로 붙습니다. 각 탭 첫 행의 질문 제목으로 어느 폼인지 구분하세요.');
  Logger.log('===== 남은 수동 설정 (약 3분) =====');
  MANUAL_STEPS.forEach(function (step, i) {
    Logger.log((i + 1) + '. ' + step);
  });
}

// ───────────── ① 리더 설문 ─────────────
function buildLeaderForm_(sheetId, oneOnOneUrl) {
  const form = FormApp.create('AX 리더 워크샵 돌아보기: 다음 3주, 무엇을 도와드릴까요?');

  const handling = [
    '응답 처리: 이 설문은 이름을 받지 않습니다. 다만 12명 안팎이라 파트만으로도 짐작될 수 있어 \'익명\'이라고 하지 않고, 이렇게 다룹니다.',
    '- 원문은 키키만 봅니다. 분류를 돕는 AI 도구에는 파트를 지우고 넣습니다.',
    '- 회사(대표님 포함)에는 전체 숫자와 테마만 드리고, 2명 이하가 답한 항목은 다른 항목과 합칩니다.' +
      (CONFIG.CEO_AGREED ? ' 대표님과 미리 합의한 원칙입니다.' : ''),
    '- 전체 숫자와 이름 없는 인용은 해커톤 전사 안내에 쓰일 수 있습니다. 인용은 동의한 문장만 씁니다.',
    '- 오피스아워나 개별 답변을 원하시면 제출 뒤 나오는 링크로 따로 신청해 주세요.',
  ];
  const description = [
    '10/16 리더 워크샵에 함께해 주셔서 감사합니다.',
    '평가가 아니라, 해커톤 전후 3주(10/19~11/6) 동안 제가 무엇을 어떻게 도와드릴지 정하려는 설문입니다.',
    '',
    '· 약 6분, 휴대폰 OK. 서술형은 한 줄이나 키워드면 충분합니다. 중간에 나가면 저장되지 않을 수 있어 한 번에 부탁드립니다.',
    '· 10/17(토) 밤 9시까지 주시면 일요일 아침 지원 계획에 반영합니다(주말에 죄송합니다). 10/20(화)까지 주셔도 2차로 반영합니다.',
    '· 결과 요약과 3주 지원 메뉴는 10/23(금)까지 공유합니다.',
    '',
  ].concat(handling).concat(['', '키키 드림']).join('\n');

  const confirmation = [
    '감사합니다! 응답을 묶어 ① 설치·계정 지원 ② 과제 상담 ③ 오피스아워·소그룹 세션 일정 ④ 회사에 요청할 지원(시간, 데이터 권한, 플랜)을 정하고, 10/23(금)까지 결과 요약과 3주 지원 메뉴를 공유합니다.',
    '',
    '오피스아워나 개별 답변이 필요하면 여기서 신청해 주세요(이름은 이 신청서에만 받습니다): ' + oneOnOneUrl,
    '막힌 곳은 10/20(화)까지 슬랙 FAQ로 답해 드립니다. 급한 질문은 ' + CONFIG.SHARED_CHANNEL + '에 바로 올려 주세요.',
  ].join('\n');

  baseSettings_(form, description, confirmation);

  // ── 페이지 1: 시작 (폼 제목·설명 아래) ──
  // Q1 → D7 D11
  list_(form, '소속 파트/팀', CONFIG.PARTS, {
    required: true,
    help: '파트별 결과는 따로 보고하지 않습니다. 팀 상담 대상과 순서를 정할 때만 씁니다.',
  });
  // Q2 → D5 (회상 채점 분모)
  mc_(form, '오늘 어디까지 함께하셨나요?', [
    '1부(강의)와 2부(사례 코칭) 모두',
    '1부(강의)만',
    '2부(사례 코칭)만',
  ], { required: true });

  // ── 페이지 2: 기억에 남은 것 (핵심 단어가 나오는 Q8보다 반드시 앞 페이지) ──
  page_(form, '기억에 남은 것', '자료를 보지 말고 지금 기억나는 대로 적어 주세요. 정확하지 않아도 됩니다.');
  // Q3 → D5
  para_(form, "오늘 강의에서 나온 'AI를 잘 쓰는 핵심 3가지', 지금 떠오르는 만큼만 적어 주세요", {
    required: true,
    help: "확인하려는 게 아니라 복습 자료를 어디에 집중할지 정하려는 질문입니다. 단어 하나여도 좋고, 하나도 안 떠오르면 '모름'이 가장 도움이 되는 답입니다. 다른 내용이 더 기억에 남았다면 함께 적어 주세요.",
  });

  // ── 페이지 3: 오늘 돌아보기 (4L) ──
  page_(form, '오늘 돌아보기', '한 줄, 키워드도 충분합니다.');
  // Q4 → D13
  text_(form, '좋았던 것 (Liked)', { required: true, help: '예) 특정 내용, 다른 파트 과제를 들은 시간, 진행 방식' });
  // Q5 → D5
  text_(form, '배운 것 (Learned)', { required: true, help: "앞에 적은 것 말고 새로 알게 된 것. 없으면 '위와 같음'도 괜찮아요." });
  // Q6 → D5 D7 D10 D13
  text_(form, '아쉬웠던 것 (Lacked)', { required: true, help: '예) 내용, 진행 방식, 자료, 환경 중 무엇이든' });
  // Q7 → D9 외 해당 D
  text_(form, '더 바라는 것 (Longed for)', { required: true, help: '예) 다음 3주 안에 있었으면 하는 것, 해커톤에서 다뤘으면 하는 것' });

  // ── 페이지 4: 지금의 나와 도구 ──
  page_(form, '지금의 나와 도구', '지원 방식을 사람마다 다르게 짜려고 묻습니다.');
  // Q8 → D5 D7 (11월 재측정 기준선)
  grid_(form, '지금의 나: 각 항목을 어느 정도 할 수 있나요?', [
    '노하우·고객 니즈·내 선호 같은 맥락을 넣어 AI에 일 맡기기',
    '결과가 잘됐는지 판정할 기준(완료 조건)을 미리 쓰기',
    '우리 팀 과제 중 먼저 해 볼 것 하나 고르기',
    '해커톤(3인 팀, 하루)에서 만들 것의 범위 정하기',
  ], ['1', '2', '3', '4', '5'], {
    required: true,
    help: '1 전혀 못 함 · 3 도움받으면 함 · 5 혼자 함',
  });

  header_(form, '도구와 업무 환경', "모르면 '모름'을 고르셔도 됩니다.");
  // Q9 → D1 D2 D11
  cb_(form, '써 본 AI 도구를 모두 골라 주세요', [
    'ChatGPT',
    'Claude 웹(claude.ai 사이트)',
    'Claude 데스크톱 앱(PC에 까는 Claude 프로그램)',
    'Claude Code(데스크톱 앱 Code 탭 또는 터미널)',
    'Gemini',
    'Aside(브라우저형 에이전트)',
    '코딩 도구(Cursor, Codex, Copilot 등)',
    '자동화 도구(n8n, Zapier, Make 등)',
    '아직 써 본 것 없음',
  ], { required: true, other: true, help: '업무용이든 개인용이든 한 번이라도 써 봤으면 체크해 주세요. 데스크톱 앱의 Code 탭을 써 봤다면 Claude Code에도 체크해 주세요.' });
  // Q10 → D3 D1
  grid_(form, '지금 쓰는 AI 계정은 어떤 종류인가요?', ['ChatGPT', 'Claude'],
    ['안 씀', '무료', '내 돈으로 유료', '회사가 결제', '모름'], {
      required: true,
      help: "'회사가 결제' = 회사 카드나 회사 플랜으로 쓰는 경우",
    });
  // Q11 → D2 D4
  mc_(form, '업무 PC와 프로그램 설치 권한', [
    'Mac · 직접 설치할 수 있음',
    'Mac · 설치하려면 승인이 필요함',
    'Windows · 직접 설치할 수 있음',
    'Windows · 설치하려면 승인이 필요함',
    'OS나 권한을 잘 모름',
  ], { required: true, other: true, help: '기타 예) 개인 노트북으로 업무' });
  // Q12 → D1 D11
  scale_(form, '터미널(검은 창에 명령어를 입력하는 것)이 얼마나 익숙한가요?', 1, 5,
    '열어 본 적 없음', '오류가 나도 혼자 해결함', {
      required: true,
      help: '2 = 안내문 보고 복사·붙여넣기는 해 봄 · 3 = 안내문이 있으면 설치까지 혼자 함 · 4 = 자주 씀',
    });

  // ── 페이지 5: 숙제와 우리 팀 과제 ──
  page_(form, '숙제와 우리 팀 과제', '검사가 아니라 다음 주 지원 규모를 정하려는 질문입니다.');
  // Q13 → D2 D10
  grid_(form, '오늘 숙제, 다음 주에 어떻게 해 보실 것 같나요?', [
    'Aside 설치하고 한 번 써 보기',
    "반복 업무 하나를 '스킬'로 만들어 보기",
  ], ['이미 해 봄', '혼자 해 볼 수 있음', '도움이 있으면', '뭔지 잘 모름'], {
    required: true,
    help: '스킬 = 반복 업무 방법을 AI가 다시 쓸 수 있게 저장해 둔 지시서',
  });
  // Q14 → D7 D15
  mc_(form, '우리 팀 과제를 구글 시트에 옮겼나요?', [
    "옮겼고 '먼저 해 볼 과제'도 골랐음",
    '옮기는 중',
    '아직',
    '시트가 어디 있는지 모름',
    '다른 리더가 맡음',
  ], { required: true, help: "오늘 '과제는 구글 시트로 정리'하기로 한 것 기준입니다." });
  // Q15 → D8 D4 D7
  mc_(form, '우리 팀 과제에 필요한 데이터에 접근할 수 있나요?', [
    '지금 바로 쓸 수 있음',
    '요청하면 받을 수 있음',
    '권한이나 보안 승인이 필요함',
    '외부 데이터라 수집 방법부터 찾아야 함',
    '어떤 데이터가 필요한지 아직 모름',
    '데이터가 필요 없는 과제',
  ], { required: true, help: '과제가 여럿이면 먼저 해 볼 것 하나를 기준으로 답해 주세요.' });
  // Q16 → D4
  mc_(form, '그 과제에 고객·아티스트 개인정보나 계약·재무처럼 민감한 데이터가 들어가나요?',
    ['예', '아니오', '모름'], {
      required: true,
      help: '보안 가이드에 과제 유형별 예시를 넣을지 정하려는 질문입니다.',
    });
  // Q17 → D11 D2 D3
  mc_(form, '해커톤 전에 설치나 계정 세팅을 함께 해 주면 좋을 팀원은 대략 몇 명인가요?',
    ['0명', '1~2명', '3~5명', '6~10명', '11명 이상', '모름'], {
      required: true,
      help: '리더 본인은 빼고, 대략이면 충분합니다.',
    });

  // ── 페이지 6: 허들과 3주 지원 ──
  page_(form, '허들과 3주 지원', '거의 다 왔습니다. 이 페이지가 지원 계획에 가장 직접 쓰입니다.');
  // Q18 → 전체 우선순위
  cb_(form, '지금 가장 큰 허들은? (최대 2개)', [
    '무엇을 AI에 맡길지 모름',
    '설치·계정 세팅',
    '비용(누가, 얼마 내는지)',
    '보안 걱정(무엇을 넣어도 되는지)',
    '필요한 데이터에 접근 권한이 없음',
    '시간이 없음',
    '용어가 어려움(영어 포함)',
    '터미널·코딩이 낯섦',
    '팀원 협조',
    '결과 품질을 믿기 어려움',
  ], { required: true, other: true, max: 2 });
  // Q19 → D14 D9
  text_(form, '지금 딱 막힌 곳이 있다면 한 줄', {
    required: false,
    help: "화면 이름이나 오류 문구를 그대로 적어 주시면 10/20(화)까지 슬랙 FAQ로 답해 드립니다. 개별 답이 필요하면 제출 뒤 나오는 신청 링크에 함께 적어 주세요. 예) '설치 중 command not found', '스킬을 어디에 저장하는지 모름'",
  });
  // Q20 → D1
  mc_(form, '어디서 시작하고 싶으세요? (가장 끌리는 것 하나)', [
    '설치 없이, 지금 쓰는 AI(웹)에서 연습부터',
    'Claude 데스크톱 앱(PC에 까는 Claude 프로그램)부터',
    'Claude Code(데스크톱 앱 Code 탭, 유료 플랜 필요)까지 바로',
    '잘 모르겠어요. 제 PC와 계정에 맞게 추천해 주세요',
  ], { required: true, help: '정답은 없습니다. 스킬은 웹 claude.ai에서도 만들 수 있습니다. PC·계정 상황과 함께 보고 출발점을 안내해 드립니다.' });

  header_(form, '3주 지원 방식', '고른 답에 따라 세션 형식·횟수와 체크인 방식을 정합니다.');
  // Q21 → D2 D5 D7 D9 D10 D14
  cb_(form, '다음 3주, 어떤 지원이 가장 도움이 될까요? (최대 2개)', [
    '오피스아워 1:1 질문(20분)',
    '소그룹 설치 세션(3~5명, 30분)',
    '같이 만들기 세션(각자 손으로, 키키는 옆에서, 60분)',
    '우리 팀 과제 상담(팀원과 함께)',
    '무엇을 AI에 맡길지 같이 정하기',
    '누가 만든 예시(스킬, 지시서)를 받아 고쳐 쓰기',
    '단계별 체크리스트 1장',
    '5분 영상',
    '슬랙 Q&A',
  ], { required: true, max: 2 });
  // Q22 → D15 D7 D9
  mc_(form, '매주 금요일 리더 미팅의 AX 체크인, 키키가 어떻게 함께하면 좋을까요?', [
    '매주(10/23·10/30·11/6) 15~20분 참석해 진척 확인과 막힌 것 해결',
    '격주로 참석',
    '리더가 필요할 때 부르면',
    '참석 대신, 미팅 전에 구글 시트에 남긴 질문에 답',
    '잘 모르겠음',
  ], { required: true });
  // Q23 → D2 D9 D10 D12
  mc_(form, '다음 3주 동안 AX 과제에 일주일에 쓸 수 있는 시간은?',
    ['1시간 미만', '1~2시간', '2~4시간', '4시간 이상', '잘 모르겠음'], {
      required: true,
      help: '회사에 시간 확보를 요청할 근거로만 씁니다(개인 평가에 쓰지 않음).',
    });

  // ── 페이지 7: 선택 문항 ──
  page_(form, '선택 문항', '모두 선택입니다. 건너뛰고 제출하셔도 됩니다.');
  // Q24 → D6 D5
  text_(form, '오늘 내용을 우리 팀원에게 한 문장으로 전한다면?', {
    required: false,
    help: "예) '우리 일 중 ○○는 AI에 맡겨 볼 만하다', '○○부터 해 보자'",
  });
  // Q25 → D6 (opt-in 인용 동의)
  cb_(form, '인용 동의', ['위 문장을 이름과 파트 없이 해커톤 안내에 써도 됩니다'], { required: false });
  // Q26 → D12
  para_(form, 'AX를 진행하면서 걱정되는 점', {
    required: false,
    help: '예) 업무량, 역할 변화, 보안, 평가 방식, 진행 속도 등 무엇이든. 3명 이상이 말한 테마만 파트 없이 대표님께 전하고 답을 요청합니다. 2명 이하가 쓴 내용은 키키가 따로 다룹니다.',
  });
  // Q27 → D12 D3 D8
  para_(form, '회사·대표님께 바라는 지원', { required: false, help: '예) 시간 확보, 데이터 권한, 플랜·도구 비용' });
  // Q28 → D14 D5
  para_(form, '키키에게 묻고 싶은 것, 강의 중 모르는 단어', {
    required: false,
    help: '예) MCP가 뭔지. 모르는 단어는 용어집에 넣고, 채널에는 누가 물었는지 없이 정리해 올립니다.',
  });
  // Q29 (조건부) → D7 D9
  if (CONFIG.INCLUDE_CORE_TASK_QUESTION) {
    cb_(form, '우리 팀 과제가 회사 핵심 과제와 관련 있나요?', [
      'CRM DB화',
      '타깃 아티스트 DB 초기 업데이트',
      '트렌드 IR 예측 에이전트',
      '관련 없음',
      '모름',
    ], { required: false });
  }

  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheetId);
  return form;
}

// ───────────── ② 대표 설문 ─────────────
function buildCeoForm_(sheetId) {
  const form = FormApp.create('AX 리더 워크샵 돌아보기 (대표님용)');

  const description = [
    '대표님, 10/16 리더 워크샵에 함께해 주셔서 감사합니다.',
    '리더 설문과 별도로 대표님께만 여쭙는 짧은 설문입니다(약 3분). 서술형은 한 줄이면 충분합니다.',
    '응답은 10/18(일) 3주 지원 계획과 10/19 주 회사 안건(플랜·권한·데이터·시간) 정리에 씁니다. 대표님 응답은 리더 응답과 섞지 않고 따로 봅니다.',
    '',
    '키키 드림',
  ].join('\n');
  const confirmation = '감사합니다. 리더 응답과 함께 10/18(일) 3주 지원 계획에 반영하고, 회사에 결정을 요청드릴 안건은 10/19 주에 한 장으로 정리해 드리겠습니다.';

  baseSettings_(form, description, confirmation);

  // ── 페이지 1: 오늘 돌아보기 ──
  // C1~C4 → D13 (리더 집계와 분리)
  text_(form, '좋았던 것 (Liked)', { required: true, help: '예) 특정 내용, 리더들의 과제 공유, 진행 방식' });
  text_(form, '배운 것 (Learned)', { required: true, help: '예) 새로 안 개념이나 도구, 생각이 바뀐 지점' });
  text_(form, '아쉬웠던 것 (Lacked)', { required: true, help: '예) 내용, 진행 방식, 자료, 환경 중 무엇이든' });
  text_(form, '더 바라는 것 (Longed for)', { required: true, help: '예) 다음 3주 안에 있었으면 하는 것, 해커톤에서 다뤘으면 하는 것' });

  // ── 페이지 2: 회사 지원과 우선순위 ──
  page_(form, '회사 지원과 우선순위', '3주 지원을 회사 우선순위에 맞추려고 여쭙니다.');
  // C5 → D3 D4 D8 D12
  cb_(form, '해커톤 전까지 회사가 리더와 팀원에게 약속할 수 있는 것을 골라 주세요', [
    'AX 과제에 쓸 업무 시간 확보',
    '유료 AI 플랜 비용',
    '설치 권한 일괄 허용',
    '과제에 필요한 데이터 접근 권한',
    '금요일 리더 미팅에 AX 시간 고정',
    '아직 정하지 않음',
  ], { required: true, other: true, help: '리더들의 요청과 나란히 놓고 10/19 주 안건으로 정리합니다.' });
  // C6 → D7 D9
  cb_(form, '3주 지원에서 먼저 챙겼으면 하는 과제 (최대 2개)', [
    'CRM DB화',
    '타깃 아티스트 DB 초기 업데이트',
    '트렌드 IR 예측 에이전트',
    '리더들이 고른 과제를 우선',
  ], { required: true, other: true, max: 2 });
  // C7 → D12
  text_(form, '이번 AX 결과를 전사에 알릴 때 보여 주고 싶은 것', {
    required: false,
    help: '예) 숙제 완료 수, 해커톤 결과물 수, 리더 한마디',
  });

  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheetId);
  return form;
}

// ───────────── ③ 오피스아워·개별 답변 신청 ─────────────
function buildOneOnOneForm_(sheetId) {
  const form = FormApp.create('AX 오피스아워·개별 답변 신청 (10/19~11/6)');

  const description = [
    '10/19~11/6 동안 쓰는 지원 신청서입니다(1분).',
    '이름은 이 신청서에만 받고, 리더 설문 응답과 연결하지 않습니다.',
    "신청을 주제별로 묶어 온라인 오피스아워(회당 60분 이내, 소그룹 또는 20분 슬롯)로 시간을 잡아 슬랙으로 연락드립니다. 개별 질문은 2영업일 안에 슬랙으로 답합니다. 진행은 '내가 손으로, 키키는 옆에서' 방식입니다.",
  ].join('\n');
  const confirmation = '신청 감사합니다. 주제별로 묶어 슬랙으로 시간을 잡아 연락드리겠습니다. 급한 질문은 ' + CONFIG.SHARED_CHANNEL + '에 바로 올려 주세요.';

  baseSettings_(form, description, confirmation);

  // S1 → D9
  text_(form, '이름', { required: true, help: '슬랙 표시 이름도 괜찮아요.' });
  // S2 → D1 D9 D14
  cb_(form, '원하는 지원', [
    '내 PC·계정에 맞는 시작 지점 추천',
    '설치 점검 세션(소그룹)',
    '같이 만들기 세션(스킬, 각자 손으로)',
    '우리 팀 과제 상담(과제 정의 클리닉)',
    '막힌 곳 개별 답변(슬랙)',
  ], { required: true, other: true });
  // S3 → D9
  cb_(form, '가능한 시간대 (모두 선택)', [
    '평일 오전 업무 시작 직후',
    '점심시간',
    '평일 오후',
    '퇴근 후',
    '수요일 재택일(온라인)',
    '금요일 리더 미팅 앞뒤',
  ], { required: true });
  // S4 → D9 D14
  para_(form, '미리 알려 주실 것', {
    required: false,
    help: '막힌 화면·오류 문구, PC 종류(Mac/Windows), 쓰는 Claude 계정 종류(무료/유료/회사)를 적어 주시면 시간을 아낄 수 있어요.',
  });

  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheetId);
  return form;
}

// ───────────── 도우미 (이름 끝 _ = 실행 목록에 안 보임) ─────────────
function baseSettings_(form, description, confirmation) {
  form.setDescription(description);
  form.setConfirmationMessage(confirmation);
  form.setProgressBar(true);
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
}

function applyOptions_(item, o) {
  if (o && o.help) item.setHelpText(o.help);
  item.setRequired(Boolean(o && o.required));
  return item;
}

function page_(form, title, help) {
  const item = form.addPageBreakItem().setTitle(title);
  if (help) item.setHelpText(help);
  return item;
}

function header_(form, title, help) {
  const item = form.addSectionHeaderItem().setTitle(title);
  if (help) item.setHelpText(help);
  return item;
}

function list_(form, title, choices, o) {
  return applyOptions_(form.addListItem().setTitle(title).setChoiceValues(choices), o);
}

function mc_(form, title, choices, o) {
  const item = form.addMultipleChoiceItem().setTitle(title).setChoiceValues(choices);
  if (o && o.other) item.showOtherOption(true);
  return applyOptions_(item, o);
}

function cb_(form, title, choices, o) {
  const item = form.addCheckboxItem().setTitle(title).setChoiceValues(choices);
  if (o && o.other) item.showOtherOption(true);
  if (o && o.max) {
    item.setValidation(FormApp.createCheckboxValidation().requireSelectAtMost(o.max).build());
  }
  return applyOptions_(item, o);
}

function text_(form, title, o) {
  return applyOptions_(form.addTextItem().setTitle(title), o);
}

function para_(form, title, o) {
  return applyOptions_(form.addParagraphTextItem().setTitle(title), o);
}

function scale_(form, title, lower, upper, lowerLabel, upperLabel, o) {
  const item = form.addScaleItem().setTitle(title).setBounds(lower, upper).setLabels(lowerLabel, upperLabel);
  return applyOptions_(item, o);
}

function grid_(form, title, rows, columns, o) {
  return applyOptions_(form.addGridItem().setTitle(title).setRows(rows).setColumns(columns), o);
}

function logForm_(label, form) {
  Logger.log(label);
  Logger.log('  응답 URL(배포용): ' + form.getPublishedUrl());
  Logger.log('  편집 URL(키키만): ' + form.getEditUrl());
  Logger.log('  폼 ID: ' + form.getId());
}
