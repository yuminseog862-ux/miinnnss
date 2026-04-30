export type GigrIconKey = "sparkles" | "clapperboard" | "messageSquareText" | "chartNoAxesColumnIncreasing";

export type GigrCoreAxis = {
  title: string;
  proof: string;
  body: string;
  points: string[];
  icon: GigrIconKey;
};

export const roleSummaryPoints = [
  "광고 목적: 타깃 가설, 첫 장면, 카피 역할을 먼저 정리",
  "AI 제작: 기준 이미지 → 영상 후보 → 숏폼 광고 흐름으로 확장",
  "운영 방식: 발행 반응을 다음 소재와 카피 브리프로 되돌림",
] as const;

export const planningSummaryPoints = [
  "타깃은 확정 고객이 아니라 1차 독자 가설로 설정",
  "캐릭터 브랜딩이 서비스 카피를 더 잘 읽히게 할 것이라고 판단",
  "발행 후 카피보다 이미지와 영상 자체에 먼저 반응이 모임",
  "서비스 문제 정의를 다시 보고, 콘텐츠 생산 방향을 빠르게 전환",
] as const;

export const aheyaCaseSummaryPoints = [
  "서비스 카피와 캐릭터 영상을 함께 발행",
  "기대한 반응: 캐릭터 브랜딩을 통해 카피까지 읽히는 흐름",
  "실제 반응: 카피보다 이미지와 영상 자체에 먼저 관심이 모임",
  "현재 방향: 더 많은 사람이 멈춰 볼 수 있는 캐릭터·영상 콘텐츠 제작",
] as const;

export const aheyaLearningPoints = [
  "Initial Bet: 캐릭터 브랜딩을 붙이면 문제 문장이 더 잘 읽힐 것이라고 판단",
  "What Happened: 반응은 카피보다 이미지와 영상 자체에 먼저 모임",
  "Lesson: AHEYABARAYA의 서비스 문제 정의가 충분히 날카롭지 않았음",
  "Current Direction: 더 많은 사람이 볼 수 있는 캐릭터·영상 콘텐츠를 빠르게 제작",
] as const;

export const characterExpansionPoints = [
  "초기 구미호 영상 2개와 Yeon으로 첫인상 후보 제작",
  "Tiger, 동물 상징, 그리스·이집트 계열로 시각 훅 확장",
  "파란 구미호, K, Becca처럼 더 선명한 대표 자산으로 정제",
] as const;

export const adsbSummaryPoints = [
  "콜라주식 장면 나열은 브랜드 무드와 감정선이 흩어짐",
  "고정 앵글 15초 흐름으로 좁혀 광고 소재처럼 읽히게 조정",
  "조명, 그림자, 접지감, 카메라 움직임이 완성도 판단 기준으로 남음",
] as const;

export const adsbExecutionPoints = [
  "브랜드 무드와 대표 장면을 AI 숏폼 광고 흐름으로 수렴",
  "콜라주 중심 시도는 폐기하고 고정 앵글 기반 15초 흐름 채택",
  "개별 장면의 귀여움보다 한 장면의 감정과 브랜드 무드 유지 우선",
  "조명·그림자·접지감·카메라 움직임을 제작 체크포인트로 정리",
] as const;

export const loopSummaryPoints = [
  "자동 게시보다 제작 후보 자동화가 우선",
  "입력값: 레퍼런스, 전날 관찰 신호, 제품 메시지",
  "출력값: 이미지 후보, 영상 프롬프트, 게시 메타데이터, 다음 브리프",
] as const;

export const coreAxes = [
  {
    title: "Reference-led Hook Planning",
    proof: "Pinterest / animation / shorts",
    body: "레퍼런스에서 멈추게 하는 장면을 찾고, 구도·감정·움직임을 다시 조립합니다.",
    points: ["reference scan", "scene hook", "image-to-video"],
    icon: "sparkles",
  },
  {
    title: "Scene & Mood Direction",
    proof: "Andersson Bell",
    body: "브랜드 무드를 장면, 앵글, 모션 흐름으로 좁혀 숏폼 후보로 만듭니다.",
    points: ["moodboard", "fixed-angle sequence", "15s short-form"],
    icon: "clapperboard",
  },
  {
    title: "Short Copy / X Hook",
    proof: "X posts",
    body: "긴 제품 설명을 첫 유저, 피드백, 사용성 같은 짧은 문제 훅으로 바꿉니다.",
    points: ["문제 훅", "캡션 훅", "공개 채널 문안"],
    icon: "messageSquareText",
  },
  {
    title: "Learning Loop",
    proof: "observed signal",
    body: "반응을 성과처럼 단정하지 않고, 다음 소재와 카피를 고르는 판단 재료로 봅니다.",
    points: ["관찰 신호", "문제 재정의", "다음 브리프"],
    icon: "chartNoAxesColumnIncreasing",
  },
] satisfies GigrCoreAxis[];

export const recruiterFitRows = [
  {
    need: "광고 목적 콘텐츠 기획",
    proof: "레퍼런스 장면에서 훅 구조를 뽑고, AHEYABARAYA에서 타깃 가설과 카피 실패를 다시 봤습니다.",
    output: "레퍼런스 훅 / X 포스트 후보 / 캐릭터 훅 / 짧은 CTA 카피",
    href: "#planning",
  },
  {
    need: "AI 숏폼 제작",
    proof: "Andersson Bell 무드를 고정 앵글 15초 광고 흐름으로 좁혔습니다.",
    output: "브랜드 리서치 / 스토리보드 / AI 이미지 / Kling 영상",
    href: "#adsb",
  },
  {
    need: "제작 워크플로우 효율화",
    proof: "Hermes/Aurora 구조를 광고 소재 후보 생성 루프로 정리했습니다.",
    output: "Brief → Asset → Review → Learning 운영 구조",
    href: "#loop",
  },
];

export const adVariants = [
  {
    name: "Problem Hook",
    hook: "Building got faster. Marketing didn’t.",
    asset: "AHEYABARAYA intro surface",
    purpose: "빌더가 겪는 첫 유저 반응과 피드백 문제를 기능 설명보다 먼저 제시",
    signal: "메시지 선명도",
  },
  {
    name: "Character Hook",
    hook: "Kumiho / Tiger scene",
    asset: "motion poster + character still",
    purpose: "빠른 X 피드에서 시선을 멈추게 하는 첫 장면 설계",
    signal: "시각 훅",
  },
  {
    name: "Feedback Hook",
    hook: "polite feedback haze",
    asset: "lane panel + demo/proof narrative",
    purpose: "피상적 반응보다 다음 배포로 이어지는 피드백 문제 제기",
    signal: "문제-카피 정합성",
  },
  {
    name: "Utility Hook",
    hook: "real utility on-chain",
    asset: "creator asset + low-friction CTA",
    purpose: "Web3 utility를 보상형 CTA가 아닌 실제 참여 메시지로 표현",
    signal: "타깃 적합성",
  },
];

export const planningSignals = [
  {
    title: "Initial Intent",
    body: "레퍼런스 장면 훅을 AHEYABARAYA 첫인상 후보로 옮김",
    points: ["초기 구미호 영상 2개", "Yeon 캐릭터", "서비스 카피와 함께 발행"],
    signal: "시각 자산을 카피 진입점으로 사용",
  },
  {
    title: "Target Hypothesis",
    body: "확정 타깃이 아니라 1차 독자 가설로 시작",
    points: ["AI/크립토 빌더", "초기 제품 창업자", "Web3·AI 툴 관심층"],
    signal: "AI 빌더 / Web3 유저",
  },
  {
    title: "Observed Signal",
    body: "이미지와 영상 자체에 먼저 반응이 모임",
    points: ["Tiger·동물 상징", "그리스·이집트 계열", "파란 구미호 / K / Becca로 정제"],
    signal: "시각 훅의 확장 가능성",
  },
  {
    title: "What Changed",
    body: "서비스 문제 정의가 충분히 날카롭지 않았다고 판단",
    points: ["카피보다 콘텐츠에 반응", "문제 정의 재점검", "더 많은 사람이 볼 수 있는 콘텐츠 제작"],
    signal: "서비스 문제 정의 재점검",
  },
];

export const hookPlanningSteps = [
  {
    label: "01. Reference",
    title: "장면 훅을 먼저 찾음",
    body: "Pinterest, 애니메이션, 쇼츠에서 멈춰 보게 되는 구도, 표정, 움직임, 분위기를 수집합니다.",
  },
  {
    label: "02. Rebuild",
    title: "브랜드 목적에 맞게 재구성",
    body: "그 장면을 그대로 복제하지 않고, 타깃과 카피가 읽히는 캐릭터·상징·감정선으로 다시 조립합니다.",
  },
  {
    label: "03. Image",
    title: "이미지 프롬프트로 고정",
    body: "먼저 한 장면의 얼굴, 조명, 색, 질감을 잡아 영상화해도 흔들리지 않는 기준 이미지를 만듭니다.",
  },
  {
    label: "04. Video",
    title: "이미지 기반 숏폼 후보화",
    body: "이미지를 기반으로 움직임, 카메라, 첫 1-3초 감정선을 붙여 X와 숏폼 광고 후보로 확장합니다.",
  },
];

export const aheyaOriginVideos = [
  {
    label: "Kumiho origin 01",
    src: "/appendix/bluegarage/aheya/kumiho-origin-branding-01.mp4",
    poster: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
  },
  {
    label: "Kumiho origin 02",
    src: "/appendix/bluegarage/aheya/kumiho-origin-branding-02.mp4",
    poster: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
  },
];

export const aheyaAmbiguitySteps = [
  {
    label: "01. Origin Tests",
    title: "초기 영상과 Yeon으로 출발",
    body: "완성된 캠페인 브리프가 아니라, 레퍼런스 장면 훅을 바탕으로 초기 구미호 영상 2개와 Yeon을 먼저 제작했습니다.",
  },
  {
    label: "02. Expansion",
    title: "동물 상징과 그리스 계열로 확장",
    body: "시각 훅 가능성을 보고 Tiger 같은 동물 상징과 Zeus, Hephaestus, Ares, Artemis, Dionysus, Athena 같은 그리스 계열로 넓혔습니다.",
  },
  {
    label: "03. Symbol Tests",
    title: "이집트 계열로 상징 밀도 테스트",
    body: "Horus와 Ra처럼 더 선명한 상징성과 밀도를 가진 계열도 실험해 어떤 얼굴과 분위기가 더 빠르게 읽히는지 확인했습니다.",
  },
  {
    label: "04. Refinement",
    title: "대표 훅과 반복 운영으로 정리",
    body: "이후 파란 구미호, K, Becca처럼 더 선명한 대표 훅 자산으로 정제하고, 지금은 더 많은 사람이 멈춰 볼 수 있는 캐릭터·영상 콘텐츠를 빠르게 제작 중입니다.",
  },
];

export const aheyaPositioningBridge = [
  {
    label: "Service Copy",
    title: "서비스 메시지에서 출발",
    body: "AHEYABARAYA의 문제의식과 카피를 X에서 읽히게 만드는 것이 출발점",
  },
  {
    label: "Character Branding",
    title: "낯선 서비스를 기억되는 얼굴로 확장",
    body: "AI/Web3 제품 설명만으로는 지나치기 쉬워 캐릭터와 세계관을 붙임",
  },
  {
    label: "Short-form Signal",
    title: "카피보다 이미지와 영상에 먼저 반응",
    body: "기대와 달리 문제 문장보다 이미지와 영상 자체에 관심이 먼저 모임",
  },
  {
    label: "GIGR Fit",
    title: "현재 페이지의 역할 매칭으로 정리",
    body: "이 실패를 타깃 가설, 카피 실험, AI 콘텐츠 제작, 제작 루프 증거로 재정리",
  },
];

export const aheyaPageSurfaces = [
  {
    label: "AHEYA page",
    body: "서비스 문장과 캐릭터 이미지를 함께 배치한 제품 첫인상 화면",
  },
  {
    label: "Trust Entry",
    body: "Yeon처럼 캐릭터별 진입 화면을 확장한 신뢰/구조 화면",
  },
];

export const characterProofs = [
  {
    name: "Kumiho",
    role: "대표 훅",
    src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
  },
  {
    name: "K",
    role: "브랜드 얼굴",
    src: "/appendix/bluegarage/aheya/k.webp",
  },
  {
    name: "Tiger",
    role: "영상 훅 후보",
    src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
  },
  {
    name: "Aurora",
    role: "세계관 톤",
    src: "/appendix/bluegarage/aheya/aurora.webp",
  },
  {
    name: "Becca",
    role: "관계 확장",
    src: "/appendix/bluegarage/aheya/becca.webp",
  },
  {
    name: "Yeon",
    role: "신뢰 화면",
    src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
  },
];

export const hermesLoop = [
  {
    step: "Input",
    body: "전날 관찰 신호, 트렌드/레퍼런스, 제품 메시지를 제작 입력값으로 모읍니다.",
  },
  {
    step: "Brief",
    body: "첫 장면 훅, 감정 훅, 메시지 키워드, 타깃 플랫폼을 브리프로 기록합니다.",
  },
  {
    step: "Asset",
    body: "이미지 프롬프트, 영상화 계획, 캡션 훅을 하나의 소재 후보로 묶습니다.",
  },
  {
    step: "Review",
    body: "빠른 실험 후보, 대표 소재 후보, 댓글 대응 후보, 보류 항목으로 분류해 제작 우선순위를 정합니다.",
  },
  {
    step: "Publish Prep",
    body: "게시 문안, 캡션, 사용 자산을 남겨 이후 관찰 로그와 다시 연결되게 합니다.",
  },
  {
    step: "Learning",
    body: "댓글, 리포스트 맥락, 저장해 둔 관찰 로그를 보고 다음 프롬프트 방향을 조정합니다.",
  },
];

export const supportProofs = [
  {
    title: "SFTI-CMU",
    body: "모호한 브랜드 해석을 영어 초록과 포스터 구조로 정리한 writing / research framing 증거입니다.",
    href: "/creative/work/sfti-cmu",
  },
  {
    title: "Persona / Agent System",
    body: "역할, 말투, 분위기 차이를 설계해 캐릭터형 상호작용 인상을 다뤄본 보조 증거입니다.",
    href: "/creative/work/persona-systems",
  },
];

export const adsbDecisionCards = [
  {
    label: "Initial Problem",
    body: "초기 콜라주 방향은 개별 장면은 있었지만 재미, 감정, 브랜드 무드가 한 방향으로 유지되지 않았습니다.",
  },
  {
    label: "Creative Choice",
    body: "고정 앵글을 유지하면 첫 장면, 인물, 제품 무드, 이동감을 한 흐름으로 읽게 만들 수 있다고 판단했습니다.",
  },
  {
    label: "Short-form Logic",
    body: "첫 1-3초에서 장면 훅을 만들고, 15초 안에서 같은 감정선이 유지되는 쪽이 광고 소재 후보에 더 가까웠습니다.",
  },
];

export const adsbCraftNotes = [
  {
    label: "Lighting",
    body: "AI 영상은 조명 방향이 흔들리면 바로 합성처럼 보이기 때문에, 장면마다 빛의 방향과 밝기를 맞추는 기준이 중요했습니다.",
  },
  {
    label: "Shadow / Grounding",
    body: "인물, 제품, 배경이 같은 공간에 있는 것처럼 보이려면 그림자와 접지감이 자연스러워야 한다는 점을 배웠습니다.",
  },
  {
    label: "Camera Control",
    body: "카메라 움직임을 과하게 만들기보다 고정 앵글과 제한된 이동을 유지할 때 브랜드 영상처럼 더 매끈하게 읽혔습니다.",
  },
  {
    label: "Mood Consistency",
    body: "컷마다 예쁜 장면을 만드는 것보다 소재, 색, 움직임, 감정선이 같은 무드로 이어지는지가 완성도를 좌우했습니다.",
  },
];

export const caseReadout = [
  {
    label: "What HR should see",
    body: "캐릭터를 많이 만든 것이 아니라, 서비스 카피가 먹히지 않은 이유를 보고 콘텐츠 방향을 다시 잡은 과정입니다.",
  },
  {
    label: "Why it matters",
    body: "GIGR 업무에서 필요한 것은 결과물 나열보다, 모호한 반응을 보고 다음 소재와 카피 방향을 바꾸는 판단입니다.",
  },
];
