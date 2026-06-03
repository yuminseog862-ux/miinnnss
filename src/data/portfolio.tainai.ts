import type {
  Accent,
  DetailMediaSection,
  FlowStep,
  HeroContent,
  MediaFit,
  StructuredBlock,
  WorkCase,
} from "@/data/portfolio";
import { workCaseMap as baseWorkCaseMap } from "@/data/portfolio";

export type FitMethodCard = {
  title: string;
  accent: Accent;
  proof: string;
  body: string;
  points: string[];
};

export type OperatingMemo = {
  title: string;
  body: string;
  tools?: string[];
};

export type OperatingLoopContent = {
  eyebrow: string;
  title: string;
  summary: string;
  process: string[];
  chips: string[];
  memos: OperatingMemo[];
};

export type FlagshipShowcaseCard = {
  src: string;
  alt: string;
  label: string;
  title: string;
  body: string;
  fit?: MediaFit;
};

export type DetailCardSection = {
  eyebrow: string;
  title: string;
  summary?: string;
  cards: StructuredBlock[];
  caption?: string;
  layout?: "default" | "three";
};

export type RecruiterQuickReadCard = {
  label: string;
  title: string;
  body: string;
  accent: Accent;
};

export type RecruiterQuickReadContent = {
  eyebrow: string;
  title: string;
  summary: string;
  orderLabel: string;
  order: string[];
  cards: RecruiterQuickReadCard[];
};

export type EmotionalEntrySample = {
  label: string;
  note: string;
  src: string;
  alt: string;
  fit?: MediaFit;
};

export type EmotionalEntryContent = {
  eyebrow: string;
  title: string;
  summary: string;
  cards: FitMethodCard[];
  supportEyebrow: string;
  supportTitle: string;
  supportBody: string;
  supportPoints: string[];
  supportShots: EmotionalEntrySample[];
  prototypeEyebrow: string;
  prototypeTitle: string;
  prototypeSummary: string;
  prototypes: EmotionalEntrySample[];
  note: string;
};

export type DomainFitContent = {
  eyebrow: string;
  title: string;
  summary: string;
  works: string[];
  observations: Array<{
    title: string;
    body: string;
  }>;
  translationLabel: string;
  translationBody: string;
  note: string;
};

export type TainaiWorkCase = WorkCase & {
  supplementalSections?: DetailCardSection[];
  hideJudgmentSlide?: boolean;
  hideStatusSlide?: boolean;
  detailProcessLayout?: "split" | "stacked";
  detailProblemGroups?: StructuredBlock[];
  detailLeadCount?: number | "all";
};

const baseAheya = baseWorkCaseMap["aheya"];
const baseIlysb = baseWorkCaseMap["ilysb"];
const baseAnderssonBell = baseWorkCaseMap["andersson-bell"];
const baseSfti = baseWorkCaseMap["sfti-cmu"];

export const siteTitle = "minnns / TainAI 지원 포트폴리오";

export const heroTitleLines = [
  "추상적인 아이디어를 기능과 화면으로 빠르게 바꾸고,",
  "직접 반응을 본 뒤 다음 결정을 내립니다.",
] as const;

export const heroContent: HeroContent = {
  eyebrow: "TainAI 지원용 포트폴리오",
  title: heroTitleLines.join(" "),
  summary:
    "AHEYA, AB-Luna, ILYSB를 중심으로 문제 정의, 구현, 공개 테스트, 보류 판단까지 직접 연결했습니다.",
  stageTitle: "가설을 만들고, MVP로 확인하고, 다음 결정을 남긴 기록입니다.",
  ctas: [
    { label: "대표 케이스 보기", href: "#flagship", variant: "primary" },
    { label: "핵심 사례 보기", href: "#selected", variant: "secondary" },
  ],
  proofs: [
    "AHEYA는 MVP 출시, 운영 실험, 보류 판단까지 맡았습니다.",
    "AB-Luna는 공통 상태 저장소 MVP를 만들고 UX를 고쳤습니다.",
    "ILYSB는 직접 테스트 뒤에 멈춘 모바일 실험입니다.",
  ],
  signals: [
    { label: "직접 맡은 범위", value: "문제 정의 -> MVP 구현 -> 공개 테스트 -> 결정" },
    { label: "일하는 방식", value: "아이디어를 기능과 흐름으로 빠르게 구조화" },
    { label: "강점", value: "문제 구조화 / AI workflow / 반응을 보고 결정" },
  ],
};

export const heroVisual = {
  src: "/appendix/bluegarage/aheya/k.webp",
  alt: "AHEYA K key visual.",
  fit: "contain" as MediaFit,
};

export const recruiterQuickReadContent: RecruiterQuickReadContent = {
  eyebrow: "한눈에 보기",
  title: "작업 방식",
  summary: "",
  orderLabel: "",
  order: [],
  cards: [
    {
      label: "일하는 방식",
      title: "문제 정의 → MVP 구현 → 공개 테스트 → 결정",
      body: "AHEYA에서는 공개 가능한 MVP를 만들고, 운영 실험과 보류 판단까지 이어갔습니다.",
      accent: "aqua",
    },
    {
      label: "문제 구조화",
      title: "아이디어를 기능과 흐름으로 빠르게 구조화",
      body: "AB-Luna에서는 GPT와 Gemini 간 handoff 단절을 공통 상태 저장소 MVP로 풀어보았습니다.",
      accent: "orange",
    },
    {
      label: "반응 기반 판단",
      title: "반응을 보고 다음 결정을 내리는 판단",
      body: "AHEYA와 ILYSB에서는 실제 반응을 보고 구조를 바꾸거나 중단 판단을 내렸습니다.",
      accent: "indigo",
    },
  ],
};

export const fitMethodContent = {
  eyebrow: "이 케이스들이 보여주는 판단",
  title: "이 케이스들이 보여주는 판단",
  summary:
    "제가 반복해서 해온 일은 문제를 기능과 화면으로 바꾸고, 작은 테스트 뒤에 구조를 다시 쓰는 일이었습니다. 이 섹션은 그 판단이 어디에 남아 있는지를 보여줍니다.",
  cards: [
    {
      title: "크게 잡은 구조를 줄였습니다",
      accent: "aqua",
      proof: "AHEYA",
      body: "AHEYA에서는 첫 반응과 확산 문제를 기준으로, 타깃과 입구를 바꾸며 더 가벼운 공개 MVP로 바꿨습니다.",
      points: ["문제 재정의", "범위 축소", "구조 변경"],
    },
    {
      title: "테스트 피드백을 보고 UX를 고쳤습니다",
      accent: "indigo",
      proof: "AB-Luna",
      body: "GPT, Gemini처럼 서로 다른 LLM 플랫폼 사이에서 상태 공유와 handoff가 끊기는 문제를 잡고, 테스트에서 버튼이 많아 첫 행동을 못 찾는 지점을 보고 홈과 세션 UX를 고쳤습니다.",
      points: ["테스트 피드백", "UX 수정", "진입 단순화"],
    },
    {
      title: "신호를 보고 줄이거나 멈췄습니다",
      accent: "orange",
      proof: "ILYSB / AHEYA",
      body: "직접 반응을 봤을 때 불편 신호가 크거나 전환이 약하면, 더 키우지 않고 멈추거나 범위를 줄이는 쪽을 택했습니다.",
      points: ["작은 테스트", "신호 확인", "중단 판단"],
    },
  ] satisfies FitMethodCard[],
};

export const emotionalEntryContent: EmotionalEntryContent = {
  eyebrow: "First Impression",
  title: "첫인상과 캐릭터 톤도 직접 시험했습니다.",
  summary:
    "AHEYA와 TainAI 맥락에서, 어떤 장면이 먼저 눈에 들어오는지 짧게 확인한 자료입니다.",
  cards: [
    {
      title: "말보다 먼저 보이는 장면을 만들었습니다",
      accent: "aqua",
      proof: "AHEYA 공개 채널",
      body: "설명만으로 약한 구간이 있어, 사람들이 먼저 기억할 장면과 톤을 따로 만들었습니다.",
      points: ["첫 장면", "캐릭터 톤", "공개 채널"],
    },
    {
      title: "톤이 다른 이미지를 바로 붙여 봤습니다",
      accent: "orange",
      proof: "AHEYA / 첫인상 테스트",
      body: "차갑고 신뢰감 있는 톤, 관계가 먼저 느껴지는 톤을 나눠 보며 어떤 인상이 더 빨리 읽히는지 봤습니다.",
      points: ["톤 분리", "빠른 반응", "인상 확인"],
    },
  ],
  supportEyebrow: "Proof Images",
  supportTitle: "AHEYA에 실제로 쓴 이미지 3개입니다.",
  supportBody: "첫인상 차이를 검증하기 위해 톤별 이미지를 실험했습니다.",
  supportPoints: ["첫 장면", "톤 분리", "반응 확인"],
  supportShots: [
    {
      label: "AHEYA Baraya K",
      note: "서비스 설명보다 먼저 관계의 결을 읽히게 한 대표 입구 이미지입니다.",
      src: "/appendix/bluegarage/aheya/k.webp",
      alt: "AHEYA Baraya K character visual.",
      fit: "cover",
    },
    {
      label: "공개 채널 실험",
      note: "빠르게 지나가는 화면에서 어떤 첫 장면이 눈에 들어오는지 보기 위한 이미지입니다.",
      src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
      alt: "AHEYA tiger zodiac public hook visual.",
      fit: "cover",
    },
    {
      label: "Trust 화면용 톤",
      note: "Trust 화면에는 더 차갑고 단단한 톤을 따로 두어 인상을 나눴습니다.",
      src: "/appendix/bluegarage/aheya/aheya_trust_yean.webp",
      alt: "AHEYA trust-facing Yean character visual.",
      fit: "contain",
    },
  ],
  prototypeEyebrow: "Quick Prototypes",
  prototypeTitle: "필요하면 캐릭터 시안도 직접 만듭니다.",
  prototypeSummary:
    "중요한 건 그림 자체보다, 어떤 관계 톤과 첫인상이 먼저 읽히는지 빨리 보는 일입니다.",
  prototypes: [
    {
      label: "남성 캐릭터 / 고대 판타지",
      note: "강한 시선과 장신구로 관계 대상으로 먼저 읽히는지 본 시안입니다.",
      src: "/appendix/bluegarage/prototypes/tainai-male-anubis-portrait.png",
      alt: "TainAI male character visual prototype in an ancient fantasy tone.",
      fit: "cover",
    },
    {
      label: "남성 캐릭터 / 도시적 차가움",
      note: "도시적이고 차가운 인상이 얼마나 빠르게 읽히는지 본 시안입니다.",
      src: "/appendix/bluegarage/prototypes/tainai-male-cyber-rose.png",
      alt: "TainAI male character visual prototype with a cyber city tone.",
      fit: "cover",
    },
    {
      label: "여성 캐릭터 / 고딕",
      note: "감정 거리가 멀고 차가운 캐릭터가 첫 장면에서 어떻게 읽히는지 본 시안입니다.",
      src: "/appendix/bluegarage/prototypes/tainai-female-goth-veil.png",
      alt: "TainAI female character visual prototype with a gothic veil.",
      fit: "cover",
    },
  ],
  note:
    "여기서는 creative 전체가 아니라, TainAI와 바로 닿는 첫 장면 실험만 가져왔습니다.",
};

export const flagshipIntro = {
  eyebrow: "대표 케이스",
  title: "AHEYA",
  oneLiner:
    "창업자/창작자의 첫 반응과 확산 문제를 공개 MVP와 운영 실험으로 다룬 대표 케이스입니다.",
  summary: "",
  trustNote:
    "Trust API는 에이전트의 실행 결과와 사람의 평가를 함께 남기는 별도 신뢰 레이어로 열었습니다.",
  ctaLabel: "AHEYA 상세 보기",
  ctaHref: "/tainai/work/aheya",
  statusLabel: "이 케이스를 먼저 보는 이유",
  statusValue: "트레이딩 정보 공유 축, vibe coding 제품 축, Trust API, 보류 판단이 한 케이스 안에 함께 남아 있습니다.",
};

export const flagshipShowcaseCards: FlagshipShowcaseCard[] = [
  {
    src: "/aheya/home-hero.webp",
    alt: "AHEYA의 공개 진입 화면.",
    label: "첫 진입 화면",
    title: "제품 성격과 첫 행동이 한 화면에서 보입니다.",
    body:
      "설명문보다 먼저, 누가 어떤 행동으로 들어가는 제품인지 보이는 진입 화면입니다.",
    fit: "contain",
  },
  {
    src: "/aheya/lane-panels.webp",
    alt: "AHEYA의 제품 구조 화면.",
    label: "Creator / Backer 진입 흐름",
    title: "Creator / Backer 진입 흐름이 바로 보입니다.",
    body: "creator/backer의 진입과 핵심 액션이 잡히는 화면입니다.",
    fit: "contain",
  },
  {
    src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
    alt: "AHEYA의 공개형 평가 기록 화면.",
    label: "Trust API 레이어",
    title: "에이전트의 신뢰 레이어를 따로 분리했습니다.",
    body:
      "메인 제품과 섞지 않고, 실행 뒤 평가와 근거가 외부에서도 확인되게 남는 표면만 따로 뒀습니다.",
    fit: "contain",
  },
];

export const domainFitContent: DomainFitContent = {
  eyebrow: "Why TainAI",
  title: "여성향 콘텐츠를 취향이 아니라 다시 돌아오게 하는 구조로 봅니다.",
  summary:
    "로맨스 드라마, 웹툰·웹소설, 애니메이션, 아이돌 콘텐츠를 꾸준히 보면서 사람들이 왜 특정 관계와 캐릭터에 오래 머무는지 계속 관찰해 왔습니다. 어떤 첫 장면과 대화 톤이 실제로 몰입을 만드는지도 같이 봐 왔습니다.",
  works: ["눈물의 여왕", "선재 업고 튀어", "약사의 혼잣말", "세븐틴", "스트레이키즈"],
  observations: [
    {
      title: "첫 장면의 힘",
      body: "처음 등장한 장면만 보고도 관계와 캐릭터의 결이 읽히는지 먼저 봅니다.",
    },
    {
      title: "대화 리듬",
      body: "대사가 어떻게 당기고 미루는지, 말투와 반응 속도가 긴장을 얼마나 오래 유지하는지 봅니다.",
    },
    {
      title: "캐릭터 일관성",
      body: "설정이 많아도 캐릭터의 말투와 반응 논리가 무너지면 리텐션이 떨어진다고 생각합니다.",
    },
  ],
  translationLabel: "서비스로 옮기면",
  translationBody:
    "이 감각은 결국 여성향 AI 서비스에서 캐릭터 설정, 대화 리듬, 관계 진전, 재방문 동기를 어떻게 설계할지에 대한 문제로 이어집니다. 저는 이 영역을 취향 자랑이 아니라 캐릭터와 대화 흐름을 설계하는 문제로 보고 있습니다.",
  note: "많이 봤다는 사실보다, 어떤 장면과 반응이 다시 돌아오게 만드는지를 제품 언어로 옮길 수 있느냐가 더 중요하다고 생각합니다.",
};

export const operatingLoopContent: OperatingLoopContent = {
  eyebrow: "AI Workflow",
  title: "AI를 역할별로 나누고, 조사부터 운영까지 한 흐름으로 이어 갔습니다.",
  summary:
    "도구를 길게 나열하기보다, 질문 정리 → 구조 수립 → 구현과 운영이 끊기지 않게 묶은 흐름을 보여주고 싶었습니다.",
  process: ["질문 정리", "구조와 만들기", "운영과 이어받기"],
  chips: ["질문 정리 · GPT · Grok", "리서치 보조 · Atlas", "구현 · Codex · OpenClaw"],
  memos: [
    {
      title: "문제와 질문을 먼저 정리",
      body: "먼저 무엇을 물어볼지와 어떤 신호를 볼지 잡았습니다.",
      tools: ["GPT", "Grok"],
    },
    {
      title: "구조를 세우고 바로 구현",
      body: "판단이 서면 화면과 흐름을 붙이고, 필요한 이미지와 영상도 같이 시험했습니다.",
      tools: ["Codex", "GPT Image", "Grok"],
    },
    {
      title: "운영과 기록까지 묶음",
      body: "타깃 접근 문구와 운영 로그를 묶어, 매일 이어서 수정할 수 있게 했습니다.",
      tools: ["Atlas", "OpenClaw", "로컬 로그"],
    },
  ],
};

export const footerContent = {
  line: "문제를 정의하고, 직접 만들고, 공개 반응을 본 뒤 다음 결정을 남깁니다.",
  meta: "AHEYA / AB-Luna / ILYSB / Andersson Bell / SFTI-CMU",
};

export const workCases: TainaiWorkCase[] = [
  {
    ...baseAheya,
    section: "대표 케이스",
    eyebrow: "첫 반응과 확산 문제를 공개 MVP로 풀어본 기록",
    oneLiner:
      "AHEYA는 창업자/창작자의 첫 반응과 확산 문제를 공개 MVP로 풀어본 케이스입니다.",
    summary:
      "처음에는 트레이딩 정보 공유 구조로 반응과 공유를 붙였습니다.\n이후에는 vibe coding 제품·서비스로 타깃을 좁히고 Privy를 추가했습니다.\nTrust API는 에이전트의 실행 결과와 평가를 남기는 별도 신뢰 레이어로 두었습니다.\n공개 채널 마케팅 뒤 전환이 약해 현재는 보류 상태입니다.",
    roles: ["문제 정의", "MVP 구현", "타깃 수정", "공개 운영", "보류 판단"],
    evidence: ["첫 진입 화면", "Creator / Backer 흐름", "Trust API 레이어", "변경 기록"],
    status: "MVP와 보류 판단이 함께 남은 대표 케이스",
    year: "25.11 - 25.4 / public MVP",
    detailProcessLayout: "stacked",
    detailProblemGroups: [
      {
        title: "첫 반응과 확산",
        body: "AI로 제품을 만드는 속도는 빨라졌지만, 창업자/창작자는 첫 반응과 확산을 얻기 어려웠습니다. 크립토 커뮤니티 사용자의 공유와 참여 행동도 그 흐름을 직접 돕는 구조로는 잘 이어지지 않았습니다.",
        accent: "aqua",
        items: ["첫 반응", "초기 확산", "창업자/창작자"],
      },
      {
        title: "크립토 커뮤니티 사용자 행동",
        body: "공유와 참여에는 익숙했지만, 그 행동이 창업자/창작자의 첫 반응과 확산으로 잘 이어지지는 않았습니다.",
        accent: "orange",
        items: ["공유", "참여", "확산 연결 약함"],
      },
      {
        title: "트레이딩 정보 공유 축",
        body: "처음에는 크립토 커뮤니티 사용자가 실제로 반응할 만한 트레이딩 정보 공유 구조로 참여와 공유를 붙였습니다.",
        accent: "indigo",
        items: ["트레이딩 정보 공유", "support", "X 공유"],
      },
      {
        title: "vibe coding 축 + Trust API",
        body: "이후에는 live demo가 있는 vibe coding 제품으로 타깃을 좁혀 support와 Good / Improve, 짧은 코멘트를 남기는 구조를 다시 제시했습니다. Trust API는 실행 결과와 사람의 평가를 따로 남기는 신뢰 레이어로 붙였습니다.",
        accent: "aqua",
        items: ["vibe coding", "Good / Improve", "Trust API"],
      },
    ],
    detailLeadLayout: "grid",
    coverImage: {
      src: "/aheya/home-hero.webp",
      alt: "AHEYA homepage hero screenshot.",
      fit: "contain",
    },
    externalLinks: [
      {
        label: "AHEYA Live",
        href: "https://aheyabaraya.xyz",
        kind: "site",
        accent: "aqua",
      },
      {
        label: "AHEYA 공개 근거 저장소",
        href: "https://github.com/aheyabaraya/aheya-public-evidence",
        kind: "github",
        accent: "aqua",
      },
      {
        label: "Trust 공개 저장소",
        href: "https://github.com/aheyabaraya/aheyabaraya-trust-public",
        kind: "trust",
        accent: "indigo",
      },
      {
        label: "AHEYA X",
        href: "https://x.com/minnns_aheya",
        kind: "x",
        accent: "orange",
      },
    ],
    detailHeroProof: {
      label: "첫 진입 화면",
      note: "AHEYA가 어떤 제품인지와 첫 행동이 같이 보이는 실제 진입 화면입니다.",
      src: "/aheya/home-hero.webp",
      alt: "AHEYA homepage hero screenshot.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "문제 정의",
        body: "AI로 제품을 만드는 속도는 빨라졌지만, 창업자/창작자는 첫 반응과 확산을 얻기 어려웠고 크립토 커뮤니티의 공유·참여 행동도 그 흐름을 직접 돕는 구조로는 이어지지 않았습니다.",
        accent: "aqua",
        items: ["첫 반응", "초기 확산", "제품 / 콘텐츠"],
      },
      {
        title: "제시한 구조",
        body: "처음에는 트레이딩 정보 공유 축으로, 이후에는 vibe coding 제품 축으로 공개 MVP를 바꿨고, Trust API는 에이전트의 신뢰 레이어로 따로 열었습니다.",
        accent: "orange",
        items: ["트레이딩 정보 공유", "support", "Good / Improve", "Trust API"],
      },
      {
        title: "관찰한 신호",
        body: "가상자산 규제 해석 부담, X 정책 변화, 온보딩 완료까지 잘 이어지지 않는 문제가 겹치며 반응이 전환으로 이어지지 않았습니다.",
        accent: "indigo",
        items: ["규제 부담", "X 정책 변화", "온보딩 미완료", "약한 전환"],
      },
      {
        title: "내린 결정",
        body: "트레이딩 정보 공유 축은 확장하지 않고, 타깃을 vibe coding 제품·서비스로 고친 뒤 Privy를 추가해 로그인 흐름을 다시 확인했습니다.",
        accent: "aqua",
        items: ["타깃 변경", "입구 수정", "Privy 추가", "보류"],
      },
    ],
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "첫 진입 화면 · 사용자 흐름 · Trust API 레이어",
      summary: "",
    },
    overview: [
      "AHEYA는 창업자/창작자가 첫 반응과 확산을 얻기 어렵다는 문제에서 출발했습니다.",
      "핵심은 더 많은 기능이 아니라, 첫 반응을 만들고 실제 사용까지 이어지는 더 가벼운 MVP를 찾는 일이었습니다.",
    ],
    whatIDid: [
      "처음에는 크립토 커뮤니티 사용자가 반응할 만한 트레이딩 정보 공유 축으로 support와 X 공유를 먼저 붙였습니다.",
      "X 정책 변화로 reward-posting / InfoFi형 확산 경로가 불안정해지면서, 트레이딩 정보 공유 경로는 더 밀지 않기로 했습니다.",
      "타깃을 vibe coding 제품·서비스로 바꾸고, 앞단의 블록체인 설명은 더 가볍게 줄였습니다.",
      "이후에는 live demo가 있는 제품으로 타깃을 좁히고, support, Good / Improve, 짧은 코멘트, 근거 링크가 남는 더 가벼운 구조로 바꿨습니다.",
      "진입 로그는 있었지만 온보딩 완료까지 잘 이어지지 않아, Privy를 추가해 로그인 흐름을 다시 확인했습니다.",
      "Trust API는 에이전트의 실행 결과와 사람의 평가를 함께 남기는 별도 신뢰 레이어로 따로 열었습니다.",
      "운영도 포스팅 중심에서 공개 답글 -> 반응 있는 DM -> 사례 재사용 쪽으로 바꾸고, 마지막에는 마케팅을 진행했지만 전환이 약해 보류했습니다.",
    ],
    whatExists: [
      "실제로 공개한 첫 진입 화면과 Creator / Backer 흐름.",
      "트레이딩 정보 공유 경로를 닫고 타깃을 고친 변경 기록.",
      "AHEYA 안에서 별도로 연 Trust API 레이어와 공개 근거 저장소.",
      "공개 반응과 실제 전환을 나눠 읽고 보류한 판단.",
    ],
    keyDecisions: [
      "트레이딩 정보 공유 경로는 X 정책 변화 이후 더 확장하지 않기로 했습니다.",
      "타깃을 vibe coding 제품·서비스로 고치고, 복잡한 블록체인 설명은 앞단에서 덜어냈습니다.",
      "진입 로그는 있었지만 온보딩 완료까지 잘 이어지지 않아 Privy를 추가해 로그인 흐름을 다시 확인했습니다.",
      "공개 반응을 전환으로 과대해석하지 않고 보류했습니다.",
    ],
    problemSummary: [],
    solutionSummary: [
      {
        title: "Trust API 분리 + Privy 추가",
        body: "Trust API는 에이전트의 실행 결과와 평가를 남기는 레이어로 두고, 온보딩 흐름은 Privy를 추가해 다시 확인했습니다.",
        accent: "indigo",
        items: ["Trust API", "Privy 추가", "온보딩 확인"],
      },
      {
        title: "운영도 같이 바꿨습니다",
        body: "포스팅만으로는 부족해 공개 답글, 반응 있는 DM, 사례 재사용 중심으로 운영 방식을 바꿨습니다.",
        accent: "orange",
      },
    ],
    flowHeading: "판단 흐름",
    flowSteps: [
      {
        step: "01",
        title: "트레이딩 정보 공유 + X 확산 MVP",
        body: "처음에는 창업자/창작자를 넓게 잡고, 크립토 커뮤니티 사용자가 반응할 만한 트레이딩 정보 공유 구조와 X 공유를 먼저 붙였습니다.",
        meta: "시작",
      },
      {
        step: "02",
        title: "트레이딩 정보 공유 축 종료",
        body: "X 정책 변화로 reward-posting / InfoFi형 확산 경로가 불안정해지면서, 트레이딩 정보 공유 경로는 더 확장하지 않기로 했습니다.",
        meta: "변경 1",
      },
      {
        step: "03",
        title: "타깃 수정 + 앞단 축소",
        body: "제품 타깃을 vibe coding 제품·서비스로 고치고, 앞단의 블록체인 설명을 더 가볍게 줄였습니다.",
        meta: "변경 2",
      },
      {
        step: "04",
        title: "Privy 온보딩 확인 + 운영 전환",
        body: "진입 로그는 있었지만 온보딩 완료까지 잘 이어지지 않아 Privy를 추가해 로그인 흐름을 다시 확인했고, 운영은 공개 답글과 반응 있는 DM 중심으로 바꿨습니다.",
        meta: "변경 3",
      },
      {
        step: "05",
        title: "공개 테스트 뒤 보류",
        body: "마케팅을 진행했지만 반응과 대화가 전환으로 이어지지 않아 더 키우지 않기로 했습니다.",
        meta: "보류",
      },
    ] satisfies FlowStep[],
    structureOutcome:
      "넓은 참여 가설보다, 반응 가능한 더 작은 타깃과 읽히는 신뢰 구조를 먼저 만드는 쪽이 더 적합했습니다.",
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "첫 진입 화면",
        note: "AHEYA가 어떤 제품인지, 누가 어떤 행동으로 들어가는지 한 화면에서 읽히는 진입 화면입니다.",
        src: "/aheya/home-hero.webp",
        alt: "AHEYA homepage hero screenshot.",
        fit: "contain",
      },
      {
        label: "Creator / Backer 흐름",
        note: "creator와 backer가 어디서 들어와 무엇을 남기는지 흐름이 잡히는 제품 화면입니다.",
        src: "/aheya/lane-panels.webp",
        alt: "AHEYA lane-panel screenshot.",
        fit: "contain",
      },
      {
        label: "Trust API 레이어",
        note: "에이전트의 실행 결과와 평가가 외부에서도 확인되게 남는 신뢰 레이어입니다.",
        src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
        alt: "AHEYA Trust Entry surface.",
        fit: "contain",
      },
    ],
    detailMediaSections: [
      {
        eyebrow: "제품 흐름 영상",
        title: "Creator / Backer 흐름과 Trust API 레이어",
        summary: "",
        columns: 2,
        layout: "grid",
        items: [
          {
            label: "Core Rail / Creator",
            note: "creator가 아이디어를 올리고 기본 구조를 관리하는 흐름을 담은 제품 영상입니다.",
            src: "/aheya/aheya-corerail-creator.mp4",
            alt: "AHEYA core rail creator product flow video.",
            type: "video",
            fit: "contain",
            poster: "/aheya/home-hero.webp",
          },
          {
            label: "Core Rail / Backer",
            note: "backer가 아이디어를 보고 후원과 피드백으로 들어가는 흐름을 담은 제품 영상입니다.",
            src: "/aheya/aheya-corerail-funder.mp4",
            alt: "AHEYA core rail funder product flow video.",
            type: "video",
            fit: "contain",
            poster: "/aheya/lane-panels.webp",
          },
          {
            label: "Trust API / Creator",
            note: "에이전트 등록과 실행 증빙을 연결하고, 사람이 작업 뒤 평가와 코멘트를 남기는 Trust API 흐름입니다.",
            src: "/aheya/trust-api-creator.mp4",
            alt: "AHEYA trust layer creator product flow video.",
            type: "video",
            fit: "contain",
            poster: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
          },
          {
            label: "Trust API / Backer",
            note: "에이전트 결과를 본 뒤 사람이 Good / Improve와 짧은 코멘트를 남기는 Trust API 흐름입니다.",
            src: "/aheya/trust-api-funder.mp4",
            alt: "AHEYA trust layer funder product flow video.",
            type: "video",
            fit: "contain",
            poster: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
          },
        ],
      },
    ],
    coreJudgments: undefined,
    serviceStructure: undefined,
    iaGroups: undefined,
    screenGuide: undefined,
    currentStatus: [
      "핵심 공개 화면과 Trust API는 남아 있지만 제품은 보류 상태입니다.",
      "이 케이스는 성공담보다 타깃 수정, 온보딩 재확인, 보류 판단이 남았습니다.",
    ],
    supplementalSections: [
      {
        eyebrow: "판단 지표",
        title: "어떤 흐름을 보고 UX를 줄이거나 바꾸려 했는지",
        summary: "어떤 흐름에서 막히는지 보고 UX와 운영 우선순위를 바꾸려 했습니다.",
        cards: [
          {
            title: "보려던 흐름",
            body: "support가 실제로 feedback과 proof로 이어지는지 보려 했습니다. 핵심은 support -> feedback -> proof -> 다음 참여가 끊기지 않는지 확인하는 것이었습니다.",
            accent: "aqua",
            items: [],
          },
          {
            title: "하려던 판단",
            body: "support와 feedback 순서를 붙일지 나눌지, 앞단 설명이나 기능이 무거운지, 어떤 기능을 덜어 UX를 가볍게 할지를 판단하려 했습니다.",
            accent: "orange",
            items: [],
          },
          {
            title: "운영 지표",
            body: "creator review backlog, feedback proof queue, trust queue를 함께 보며 어떤 큐를 먼저 손볼지 판단하려 했습니다.",
            accent: "indigo",
            items: [],
          },
        ],
        layout: "three",
      },
    ],
  },
  {
    ...baseIlysb,
    section: "핵심 사례",
    eyebrow: "모바일 실험 / 테스트 / 중단",
    oneLiner:
      "익명성이 호감 표현의 진입 장벽을 낮출 수 있는지 실제 앱과 Expo 테스트로 확인한 뒤, 중단 판단을 내린 모바일 실험입니다.",
    summary:
      "로그인, 검색, 전송, 힌트 흐름까지 실제로 붙여 시험했습니다. 초기 비공식 테스트는 타깃 사용자에 가까운 여성 지인 2명에게 진행했고, 한 명은 가능성은 있을 수도 있다고 봤지만 다른 한 명은 힌트만 보여도 무섭다고 반응했습니다. 이 반응을 작은 UX 문제로 덮지 않고 중단 신호로 읽었습니다.",
    roles: ["모바일 가설 실험", "실제 플로우 구현", "비공식 정성 테스트", "중단 판단"],
    evidence: ["로그인·가입 흐름", "검색·전송 분기", "힌트 잠금/해금", "중단 판단"],
    status: "비공식 테스트 뒤 중단 판단",
    year: "2025.05.20 - 2025.05.27",
    galleryColumns: 3,
    hideJudgmentSlide: false,
    hideStatusSlide: true,
    coverImage: {
      src: "/work/ilysb-main-flow.png",
      alt: "ILYSB main flow showing the search and send surface.",
      fit: "contain",
    },
    externalLinks: [
      {
        label: "ILYSB GitHub",
        href: "https://github.com/minseok227/UNSAID_ILYSB",
        kind: "github",
        accent: "aqua",
      },
    ],
    detailLeadLayout: "grid",
    detailLeadCount: "all",
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "진입, 검색, 힌트 흐름",
      summary: "",
    },
    detailHeroProof: {
      label: "검색·전송 화면",
      note: "이름과 인스타그램 ID를 넣고 상대를 찾은 뒤 감정을 보내는 핵심 흐름이 한 화면에 보이는 실제 테스트 화면입니다.",
      src: "/work/ilysb-main-flow.png",
      alt: "ILYSB main flow showing the search and send surface.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "처음 가설",
        body: "익명성이 호감 표현의 진입 장벽을 낮출 수 있다고 봤습니다.",
        accent: "aqua",
        items: ["익명 표현", "진입 장벽", "모바일 실험"],
      },
      {
        title: "만든 흐름",
        body: "로그인, 검색, 전송, 힌트까지 실제로 돌아가는 흐름을 빠르게 붙였습니다.",
        accent: "orange",
        items: ["로그인", "검색", "전송", "힌트"],
      },
      {
        title: "관찰한 신호",
        body: "비공식 테스트는 여성 지인 2명에게만 진행했습니다. 한 명은 가능성은 있다고 봤지만, 다른 한 명은 힌트만 보여도 무섭다고 반응했습니다.",
        accent: "indigo",
        items: ["여성 지인 테스트", "힌트 반응", "감정적 거부감"],
      },
      {
        title: "내린 결정",
        body: "작은 UX 수정으로 덮지 않고, 가설 자체를 더 키우지 않기로 했습니다.",
        accent: "aqua",
        items: ["실제 테스트", "중단 판단", "억지 포장 없음"],
      },
    ],
    overview: [
      "ILYSB는 익명성이 호감 표현의 진입 장벽을 낮출 수 있는지 실제로 확인해 보려는 모바일 실험이었습니다.",
      "이 케이스의 핵심은 실제 동작 앱과 직접 테스트를 거쳐, 감정적 거부 반응을 중단 신호로 읽었다는 점입니다.",
    ],
    detailProblemGroups: [
      {
        title: "주변에서 자주 들은 문제",
        body: "주변에서 누가 좋다는 이야기와 고민 상담을 자주 들었고, 조용하게 자신의 호감을 표현할 수 있는 통로가 거의 없다고 봤습니다.",
        accent: "aqua",
        items: ["주변 고민", "호감 표현", "모바일 실험"],
      },
      {
        title: "익명성과 힌트 가설",
        body: "누구인지 바로 특정되지는 않지만, 가벼운 힌트 정도만 남기면 표현의 부담이 낮아질 수 있다고 봤습니다.",
        accent: "orange",
        items: ["익명", "가벼운 힌트", "심리적 부담"],
      },
      {
        title: "붙인 제품 구조",
        body: "그래서 로그인, 검색, 전송, 힌트 잠금/해금까지 실제로 돌아가는 모바일 흐름을 빠르게 붙였습니다.",
        accent: "indigo",
        items: ["로그인", "검색", "전송", "힌트"],
      },
      {
        title: "테스트 뒤 얻은 결론",
        body: "실제로 테스트해 보니 힌트 구조 자체가 무섭다는 반응이 나왔고, 이 가설은 작은 UX 수정으로 해결할 문제가 아니라고 판단했습니다.",
        accent: "aqua",
        items: ["실제 테스트", "무섭다", "중단 판단"],
      },
    ],
    problemSummary: [],
    solutionSummary: [
      {
        title: "실제 동작 흐름을 빠르게 붙였습니다",
        body: "가설을 문서가 아니라 실제 앱 흐름으로 확인하려고 로그인부터 힌트까지 바로 붙였습니다.",
        accent: "indigo",
      },
      {
        title: "비공식 테스트를 진행했습니다",
        body: "여성 지인 2명에게 실제로 보여 주고, 가능성과 거부 반응을 함께 확인했습니다.",
        accent: "orange",
      },
      {
        title: "중단 신호로 읽었습니다",
        body: "힌트만 보여도 무섭다는 반응을 작은 수정 문제로 덮지 않고, 가설 자체를 멈출 이유로 읽었습니다.",
        accent: "aqua",
      },
    ],
    flowHeading: "판단 흐름",
    flowSteps: [
      {
        step: "01",
        title: "빠르게 구현",
        body: "조용하게 호감을 표현하는 모바일 흐름을 빠르게 붙여 실제로 써볼 수 있게 만들었습니다.",
        meta: "구현",
      },
      {
        step: "02",
        title: "실제 테스트",
        body: "여성 지인 2명에게 직접 보여 주고, 로그인부터 힌트까지 실제 흐름을 따라가게 했습니다.",
        meta: "테스트",
      },
      {
        step: "03",
        title: "엇갈린 반응",
        body: "한 명은 가능성은 있을 수도 있다고 봤지만, 다른 한 명은 힌트만 보여도 무섭다고 반응했습니다.",
        meta: "신호",
      },
      {
        step: "04",
        title: "중단 판단",
        body: "이 반응은 작은 UX 문제가 아니라 감정적 전제가 맞지 않는다는 신호라고 보고 더 키우지 않기로 했습니다.",
        meta: "중단",
      },
    ],
    whatIDid: [
      "AI-assisted coding으로 앱을 혼자 구현했습니다.",
      "로그인, 가입, 검색, 전송, 힌트 잠금/해금 흐름을 직접 정의했습니다.",
      "가벼운 백엔드 연결까지 붙여 실제로 돌아가게 만들었습니다.",
      "Expo 빌드로 직접 테스트를 진행했습니다.",
      "\"모르는 사람이 갑자기 말을 거는 느낌이라 무섭다\"는 반응을 중단 신호로 읽었습니다.",
    ],
    whatExists: [
      "로그인부터 힌트 해금까지 이어지는 실제 앱 흐름 캡처.",
      "직접 테스트에 쓴 Expo 빌드와 화면 기록.",
      "정서적 불편 반응 뒤에 내려진 명확한 중단 판단.",
    ],
    keyDecisions: [
      "가설은 문서가 아니라 실제 앱 흐름으로 바로 테스트했습니다.",
      "\"모르는 사람이 갑자기 말을 거는 느낌이라 무섭다\"는 반응을 결정적인 제품 신호로 읽었습니다.",
      "힌트만 보여도 무섭다는 반응이 나와, 감정적 전제가 틀렸다고 보고 중단 판단을 내렸습니다.",
    ],
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "진입과 첫 설정",
        note: "로그인 화면과 프로필 입력 1단계를 나란히 둬, 처음 진입과 기본 설정 흐름이 한 번에 읽히게 했습니다.",
        displaySize: "compact",
        stackedMediaDirection: "row",
        stackedMedia: [
          {
            src: "/work/ilysb-flow/01-login.png",
            alt: "ILYSB login screen.",
            fit: "contain",
          },
          {
            src: "/work/ilysb-flow/03-signup-step1.png",
            alt: "ILYSB signup step 1 screen.",
            fit: "contain",
          },
        ],
      },
      {
        label: "프로필 입력과 메인 진입",
        note: "프로필 입력 2단계와 메인 리스트를 붙여, 온보딩 뒤 어디로 들어가는지 흐름을 한 번에 보이게 했습니다.",
        displaySize: "compact",
        stackedMediaDirection: "row",
        stackedMedia: [
          {
            src: "/work/ilysb-flow/04-signup-step2.png",
            alt: "ILYSB signup step 2 screen.",
            fit: "contain",
          },
          {
            src: "/work/ilysb-flow/08-main-list.png",
            alt: "ILYSB main list screen.",
            fit: "contain",
          },
        ],
      },
      {
        label: "검색과 감정 전송 분기",
        note: "검색 후 `ILY`와 `ILYSB` 분기 모달을 함께 보여줍니다.",
        displaySize: "compact",
        stackedMediaDirection: "row",
        stackedMedia: [
          {
            src: "/work/ilysb-flow/09-main-search-ily-modal.png",
            alt: "ILYSB ILY send modal.",
            fit: "contain",
          },
          {
            src: "/work/ilysb-flow/10-main-search-ilysb-modal.png",
            alt: "ILYSB ILYSB send modal.",
            fit: "contain",
          },
        ],
      },
      {
        label: "힌트 잠금과 해금",
        note: "힌트 탭은 기본 힌트와 premium 힌트가 나뉘어 있었고, 해금 모달을 거쳐 다음 화면으로 넘어가게 했습니다.",
        displaySize: "compact",
        stackedMediaDirection: "row",
        stackedMedia: [
          {
            src: "/work/ilysb-flow/11-hints-locked.png",
            alt: "ILYSB locked hints screen.",
            fit: "contain",
          },
          {
            src: "/work/ilysb-flow/12-hint-unlock-modal.png",
            alt: "ILYSB hint unlock modal.",
            fit: "contain",
          },
        ],
      },
      {
        label: "힌트가 열린 상태",
        note: "premium 힌트가 열린 뒤의 화면입니다. 실제 테스트에서는 이 힌트 구조 자체가 무섭다는 반응으로 이어졌습니다.",
        displaySize: "compact",
        src: "/work/ilysb-flow/13-hints-unlocked.png",
        alt: "ILYSB unlocked hints screen.",
        fit: "contain",
      },
    ],
    currentStatus: [
      "비공식 테스트에서 정서적 거부 반응을 확인한 뒤 멈춘 모바일 실험입니다.",
      "완성된 제품보다 빠른 구현, 직접 테스트, 중단 판단이 먼저 보입니다.",
    ],
  },
  {
    slug: "ab-luna-relay",
    section: "핵심 사례",
    eyebrow: "공통 상태 / handoff 저장소 / UX 개선",
    title: "AB-Luna",
    oneLiner:
      "GPT와 Gemini 간 handoff 단절을 공통 상태 및 handoff 저장소 MVP로 풀어보고, UX를 개선한 early MVP입니다.",
    summary:
      "GPT와 Gemini처럼 서로 다른 LLM 플랫폼 사이에서는 작업 상태와 handoff가 이어지지 않았습니다. 그래서 공통 상태 및 handoff 저장소 MVP를 만들고, 버튼이 많아 시작점을 찾기 어렵다는 반응을 보고 홈 구조와 CTA, 파일 흐름을 다시 정리했습니다.",
    roles: ["UX 수정", "설명 문구", "작업 흐름 정리", "기본 점검 / MVP 정리"],
    evidence: ["이전 UI 4장", "3.5배속 현재 UI", "홈/CTA 수정", "handoff 흐름 정리"],
    status: "공통 상태와 handoff 저장소 MVP를 다듬은 케이스",
    tier: "selected",
    accent: "indigo",
    year: "2026.04.05 - 2026.04.14 / early MVP",
    galleryColumns: 3,
    coverImage: {
      src: "/work/relay-home-closed.png",
      alt: "AB-Luna home screen showing project-state framing in one page.",
      fit: "contain",
    },
    externalLinks: [
      {
        label: "AB-Luna Live",
        href: "https://ab-luna.vercel.app/",
        kind: "site",
        accent: "indigo",
      },
    ],
    detailHeroProof: {
      label: "현재 AB-Luna 홈 화면",
      note: "테스트 뒤 좌측 탭을 접고, 제품 이름과 첫 행동이 먼저 읽히게 바꾼 현재 홈 화면입니다.",
      src: "/work/relay-home-closed.png",
      alt: "AB-Luna home screen showing project-state framing in one page.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "문제",
        body: "GPT와 Gemini처럼 다른 LLM 플랫폼 사이에서는 작업 상태와 handoff를 바로 넘기기 어려웠습니다.",
        accent: "indigo",
        items: ["상태 공유 끊김", "handoff 누락", "도구 간 분리"],
      },
      {
        title: "만든 것",
        body: "여러 결과와 파일을 한 자리에서 묶고, 다음 작업과 handoff를 바로 보이게 하는 공통 상태 및 handoff 저장소 MVP를 만들었습니다.",
        accent: "aqua",
        items: ["공통 상태", "홈", "세션", "이어받기"],
      },
      {
        title: "관찰한 신호",
        body: "테스트에서는 버튼이 너무 많아 무엇부터 해야 하는지 못 찾았고, 무엇을 넘겨야 하는지도 흐렸습니다.",
        accent: "orange",
        items: ["버튼 과다", "첫 행동 불명확", "이어받기 불명확"],
      },
      {
        title: "바꾼 점",
        body: "좌측 탭을 접고 시작점, 핵심 파일, handoff 정보를 먼저 보이게 바꿨습니다.",
        accent: "aqua",
        items: ["CTA 축소", "파일 우선", "상태 요약"],
      },
    ],
    overview: [
      "AB-Luna는 GPT와 Gemini처럼 서로 다른 LLM 플랫폼 사이에서는 작업 상태와 handoff가 자연스럽게 이어지지 않는 문제에서 시작했습니다.",
      "그래서 공통 상태 및 handoff 저장소 MVP를 만들고, 테스트에서 버튼이 많아 첫 행동과 handoff 정보가 흐리다는 신호를 보고 홈, CTA, 세션 화면을 고쳤습니다.",
      "Codex나 Claude에서 이어지는 세션처럼, 지금 상태와 다음 handoff를 한 저장소 안에서 이어받게 하는 쪽이 더 중요하다고 봤습니다.",
    ],
    whatIDid: [
      "서로 다른 LLM 플랫폼 사이에서 어떤 상태와 결과가 handoff 대상이 되는지 먼저 정의했습니다.",
      "테스트에서 막힌 지점을 기준으로 홈과 세션 구조를 고쳤습니다.",
      "작업 시작, 파일 업로드, 핵심 상태가 먼저 보이도록 CTA와 문구를 줄였습니다.",
      "현재 UI 영상과 이전 UI 4장으로 바뀐 점을 바로 비교했습니다.",
    ],
    whatExists: ["이전 UI 4장을 2장씩 묶은 비교 화면과 현재 UI 기준 3.5배속 영상.", "공통 상태와 handoff 저장소 MVP의 현재 흐름."],
    keyDecisions: [
      "문제 정의를 여러 AI 결과 일반론이 아니라, 서로 다른 LLM 플랫폼 간 상태 공유 단절로 좁혔습니다.",
      "공통 상태와 handoff 저장소 MVP를 먼저 만들고, 그 뒤에 UX를 줄였습니다.",
      "구조 설명보다 첫 행동과 넘길 상태를 먼저 읽히게 했습니다.",
      "테스트에서 막힌 CTA와 파일 흐름을 줄였습니다.",
    ],
    detailProblemGroups: [
      {
        title: "GPT와 Gemini 사이의 끊김",
        body: "GPT와 Gemini처럼 서로 다른 LLM 플랫폼 사이에서는 상태 공유와 handoff가 자연스럽게 이어지지 않았습니다.",
        accent: "indigo",
        items: ["GPT", "Gemini", "상태 공유 끊김"],
      },
      {
        title: "왜 중요했나",
        body: "결과는 쌓이는데 지금 상태와 다음 할 일이 흐려져, 팀이 이어받을 때마다 문서를 다시 읽고 handoff를 다시 정리해야 했습니다.",
        accent: "orange",
        items: ["현재 상태", "다음 작업", "이어받기"],
      },
      {
        title: "공통 상태 저장소",
        body: "그래서 흩어진 결과를 하나의 작업 상태, 다음 작업, 이어받기로 묶는 공통 상태 및 handoff 저장소 MVP를 만들었습니다.",
        accent: "aqua",
        items: ["공통 상태", "다음 작업", "이어받기"],
      },
      {
        title: "UX 다시 쓰기",
        body: "테스트에서는 버튼이 너무 많아 무엇부터 해야 하는지 못 찾는 반응이 나와, 홈과 세션 화면에서 시작점, 핵심 파일, handoff 정보를 먼저 보이게 바꿨습니다.",
        accent: "aqua",
        items: ["CTA 축소", "파일 우선", "세션 정리"],
      },
    ],
    problemSummary: [],
    solutionSummary: [
      {
        title: "공통 상태를 먼저 잡았습니다",
        body: "서로 다른 LLM 플랫폼 사이에서 끊기는 상태 공유와 handoff가 한 작업 상태에서 이어지게 했습니다.",
        accent: "indigo",
      },
      {
        title: "첫 행동과 핵심 상태를 앞으로 뺐습니다",
        body: "작업 시작, 핵심 파일, 현재 상태가 홈과 세션 상단에서 바로 읽히게 CTA와 구조를 다시 배치했습니다.",
        accent: "aqua",
      },
      {
        title: "넘길 정보는 필요한 만큼만 뒀습니다",
        body: "항상 모든 설명을 펼치기보다, handoff에 필요한 상태와 보조 맥락만 남기도록 화면을 줄였습니다.",
        accent: "orange",
      },
    ],
    flowHeading: "바꾼 흐름",
    flowSteps: [
      {
        step: "01",
        title: "설명이 넓게 퍼진 초기 UI",
        body: "첫 행동보다 패널과 설명이 앞에 있어 시작점이 흐렸습니다.",
        meta: "이전",
      },
      {
        step: "02",
        title: "버튼이 많아 첫 행동을 못 찾음",
        body: "테스트에서는 홈과 작업 화면에서 버튼이 많아, 무엇부터 눌러야 하는지 못 찾겠다는 반응이 나왔습니다.",
        meta: "신호",
      },
      {
        step: "03",
        title: "CTA와 파일 흐름을 줄임",
        body: "작업 시작, 핵심 파일, 넘길 상태가 먼저 읽히게 홈과 세션 구조를 재설계했습니다.",
        meta: "변경",
      },
      {
        step: "04",
        title: "현재 UI 기준",
        body: "지금 화면은 시작점, 파일 상태, 이어받기용 정보가 한 흐름으로 잡히게 바꿨습니다.",
        meta: "현재",
      },
    ] satisfies FlowStep[],
    structureOutcome:
      "여러 결과를 더 쌓는 것보다, 지금 상태와 다음 handoff가 한눈에 읽히는 저장소를 먼저 만드는 편이 더 중요했습니다.",
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "현재 UI 흐름 영상 (3.5x)",
        note: "Google OAuth로 로그인한 뒤 README를 만들고 넣습니다. 다음 사람은 README와 handoff 파일을 들고 LLM에서 작업한 뒤, 결과 파일을 다시 같은 저장소에 넣는 흐름을 담은 영상입니다.",
        src: "/work/ab-luna-3_5x.mp4?v=1",
        alt: "AB-Luna current UI walkthrough at 3.5x speed.",
        poster: "/work/relay-home-closed.png",
        type: "video",
        fit: "contain",
        featured: true,
      },
      {
        label: "첫 행동이 흐린 구조",
        note: "첫 턴 시작과 핵심 파일 우선 구조를 잡으려 했지만, 여전히 첫 행동과 설명이 분리돼 있던 단계입니다.",
        stackedMediaDirection: "column",
        stackedMedia: [
          {
            src: "/work/abluna3.png",
            alt: "Older AB-Luna UI showing first turn start surface.",
            fit: "contain",
          },
          {
            src: "/work/abluna4.png",
            alt: "Older AB-Luna UI showing core files and work exchange.",
            fit: "contain",
          },
        ],
      },
      {
        label: "공유 패키지가 길었던 구조",
        note: "소유자 작업 화면과 AI 공유 팩이 분리되어 있어, 무엇을 먼저 확인하고 넘겨야 하는지가 길게 느껴지던 단계입니다.",
        stackedMediaDirection: "column",
        stackedMedia: [
          {
            src: "/work/abluna2.png",
            alt: "Older AB-Luna UI showing owner file workflow.",
            fit: "contain",
          },
          {
            src: "/work/abluna6.png",
            alt: "Older AB-Luna UI showing owner workflow and AI share pack.",
            fit: "contain",
          },
        ],
      },
    ],
    detailLeadSection: {
      eyebrow: "현재 흐름 vs 이전 UI",
      title: "현재 흐름과 이전 UI",
      summary: "",
    },
    detailLeadLayout: "comparison",
    currentStatus: [
      "현재 UI 영상과 이전 UI 비교가 함께 남아 있습니다.",
      "공통 상태와 handoff 저장소 MVP를 만들고, 실제 피드백을 보고 UX를 고쳤습니다.",
    ],
    supplementalSections: [
      {
        eyebrow: "판단 지표",
        title: "어떤 흐름이 실제 가치로 이어지는지 보려 했는가",
        summary: "첫 가치 도달과 handoff 흐름이 실제 사용으로 이어지는지 보려 했습니다.",
        cards: [
          {
            title: "보려던 흐름",
            body: "signup 이후 첫 프로젝트 생성, 첫 state view, publish, repeat usage까지 이어지는지 보려 했습니다.",
            accent: "indigo",
            items: [],
          },
          {
            title: "하려던 판단",
            body: "사용자가 첫 가치에 도달하는지, 팀 협업과 handoff가 실제로 이어지는지, 그리고 다시 돌아오는지 판단하려 했습니다.",
            accent: "aqua",
            items: [],
          },
        ],
      },
    ],
  },
  {
    ...baseAnderssonBell,
    section: "외부 협업",
    eyebrow: "External collaboration / AI short-form",
    oneLiner:
      "브랜드 실무진 피드백으로 콜라주 방향을 폐기하고, 고정 앵글 기반 15초 흐름으로 수렴한 외부 협업 작업입니다.",
    summary:
      "학생팀, 교수진, 브랜드 실무진과 함께 작업했고, 처음 제안한 콜라주 방향은 실무 피드백에서 무드 희석·시선 분산·임팩트 부족이 확인돼 폐기했습니다. 이후 고정 앵글 기반의 단일 흐름으로 다시 좁혀 최종 15초 결과물로 수렴했습니다.",
    roles: ["브랜드 분석", "스토리보드 재구성", "피드백 반영", "이미지-영상 제작"],
    evidence: ["브랜드 리포트", "스토리보드", "15초 결과물", "제작 툴 흐름"],
    status: "15초 최종 결과물 전달",
    hideJudgmentSlide: true,
    hideStatusSlide: true,
    externalLinks: [
      {
        label: "Instagram reel",
        href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
        kind: "instagram",
        accent: "orange",
      },
    ],
    detailHeroProof: {
      label: "최종 쇼트폼",
      note: "피드백을 거쳐 수렴한 최종 15초 결과물입니다.",
      src: "/adsb/adsb-result-vid.mp4",
      alt: "Andersson Bell short-form video.",
      type: "video",
      poster: "/adsb/adsb-cover.webp",
    },
    detailHeroHighlights: [
      {
        title: "초기 방향",
        body: "처음에는 콜라주 중심의 AI 숏폼으로 브랜드 무드를 밀어보려 했습니다.",
        accent: "aqua",
        items: ["콜라주", "AI 숏폼", "브랜드 무드"],
      },
      {
        title: "협업 구조",
        body: "학생팀, 교수진, 브랜드 실무진과 함께 수정했고, 외부 피드백을 받아 방향을 좁혀 갔습니다.",
        accent: "orange",
        items: ["학생팀", "교수진", "브랜드 실무진"],
      },
      {
        title: "피드백과 수렴",
        body: "무드 희석, 시선 분산, 임팩트 부족이 확인돼 콜라주를 버리고 고정 앵글 기반 15초 흐름으로 다시 좁혔습니다.",
        accent: "indigo",
        items: ["피드백 반영", "약한 방향 폐기", "15초 수렴"],
      },
      {
        title: "제작 툴",
        body: "이미지와 영상은 Midjourney, Kling, Nanobanana를 함께 써서 방향과 결과를 비교했습니다.",
        accent: "orange",
        items: ["Midjourney", "Kling", "Nanobanana"],
      },
    ],
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "최종 결과물, 과정 보드, 변주안",
      summary:
        "이 케이스는 최종 결과물만 보면 반쪽짜리입니다. 과정 보드와 변주안을 같이 봐야 왜 그 방향이 남았는지 읽힙니다.",
    },
    overview: [
      "이 프로젝트의 강점은 생성 결과 자체보다, 브랜드 피드백을 받아 실제로 남길 방향으로 좁혀 간 수정 기록에 있습니다.",
      "실제 피드백을 거치며 약한 방향을 버리고 더 타이트한 최종 흐름으로 좁혔다는 점에서 의미가 있습니다.",
    ],
    whatIDid: [
      "브랜드 분석과 스토리보드 구조를 직접 잡았습니다.",
      "브랜드 무드에 맞는 핵심 상징과 장면 축을 먼저 잡았습니다.",
      "실무진 피드백을 받고 콜라주 방향을 폐기한 뒤 장면 수를 줄이며 흐름을 다시 짰습니다.",
      "무드와 집중도를 약하게 만드는 콜라주 중심 방향을 폐기했습니다.",
      "고정 앵글 기반 흐름으로 다시 짜고 약 15초로 압축했습니다.",
    ],
    whatExists: [
      "최종 리포트와 스토리보드 패키지.",
      "생성 이미지 세트와 고정 앵글 컷 구조.",
      "약 15초로 압축된 최종 쇼트폼 결과물.",
    ],
    keyDecisions: [
      "피드백 뒤에는 장면을 더하는 대신 방향을 더 좁혔습니다.",
      "무드와 첫인상을 약하게 만드는 콜라주 방향은 바로 폐기했습니다.",
      "브랜드 무드 통제가 더 필요할 때는 고정 앵글 흐름을 택했습니다.",
      "실험 과잉보다 짧고 읽히는 결과물을 우선했습니다.",
    ],
    galleryIntro:
      "이 케이스는 최종 쇼트폼이 먼저 와야 하지만, 중간 과정 자료도 중요합니다. 어떤 장면과 상징이 남았는지 함께 봐야 하기 때문입니다.",
    placeholderMedia: [
      {
        label: "최종 쇼트폼 결과",
        note: "수정된 스토리보드와 수렴된 방향으로 만든 최종 Andersson Bell 쇼트폼 결과물입니다.",
        src: "/adsb/adsb-result-vid.mp4",
        alt: "Andersson Bell short-form video.",
        type: "video",
        poster: "/adsb/adsb-cover.webp",
        featured: true,
        fit: "contain",
        displaySize: "compact",
      },
      {
        label: "과정 보드",
        note: "쇼트폼 아이디어가 어떤 장면과 상징을 중심으로 좁혀졌는지 보여주는 과정 보드입니다.",
        src: "/adsb/adsb-production.webp",
        alt: "Andersson Bell process board.",
        fit: "contain",
      },
      {
        label: "변주안",
        note: "비교와 피드백을 통해 브랜드에 맞는 방향을 좁히기 위해 만든 이미지 변주 세트입니다.",
        src: "/adsb/adsb-images-draft.webp",
        alt: "Andersson Bell prompt variants.",
        fit: "contain",
      },
    ],
    currentStatus: [
      "최종 15초 결과물까지 전달한 종료 작업입니다.",
      "감각을 밀어붙이기보다, 피드백을 받아 방향을 좁힌 외부 협업 작업입니다.",
    ],
    supplementalSections: undefined,
  },
  {
    ...baseSfti,
    section: "아카이브",
    eyebrow: "연구 번역 / 영문 작성",
    oneLiner:
      "브랜드 해석을 영문 초록과 포스터로 옮겨 외부 제출까지 이어간 연구·발표 작업입니다.",
    summary:
      "패션 브랜드를 정체성·상징·감정 구조의 관점에서 해석하고, 이를 영어 문서와 포스터 형식으로 외부에 전달한 작업입니다.",
    roles: ["영문 초록 작성", "브랜드 해석", "포스터 구조화", "외부 제출"],
    evidence: ["영문 초록", "심사표", "포스터", "분석 틀"],
    status: "수정 후 게재 권고",
    hideJudgmentSlide: true,
    hideStatusSlide: true,
    year: "2025",
    detailLeadLayout: "carousel",
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "초록, 심사 결과, 포스터 구성",
      summary: "",
    },
    detailHeroProof: {
      label: "심사 결과",
      note: "영문 초록이 수정 후 게재 권고 평가를 받은 결과 화면입니다.",
      src: "/sfti/result.webp",
      alt: "SFTI-CMU result image.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "영어 활용",
        body: "브랜드 해석을 영어로도 설득력 있게 전달 가능한 문서와 포스터로 옮겼습니다.",
        accent: "aqua",
        items: ["영문 전달", "브랜드 해석", "외부 제출"],
      },
      {
        title: "한 일",
        body: "영문 초록을 쓰고, 비주얼 클러스터링 프레임과 포스터 형식까지 한 흐름으로 옮겼습니다.",
        accent: "indigo",
        items: ["영문 초록", "포스터", "구조화"],
      },
      {
        title: "남긴 결과",
        body: "영문 초록은 수정 후 게재 권고를 받았고, 영어로 구조화해 전달한 결과가 남았습니다.",
        accent: "orange",
        items: ["수정 후 게재 권고", "심사표", "영문 전달"],
      },
    ],
    galleryColumns: 3,
    coverImage: {
      src: "/sfti/sfti_1.webp",
      alt: "SFTI-CMU screenshot one showing the split abstract layout.",
      fit: "contain",
    },
    overview: [
      "패션 브랜드를 정체성·상징·감정 구조의 관점에서 해석하고, 이를 비주얼 클러스터링 프레임으로 옮긴 작업입니다.",
      "단순한 연구 경험이라기보다, 추상적인 브랜드 해석을 영어 문서와 시각 구조로 외부 전달 가능한 형태로 바꿔본 경험에 가깝습니다.",
    ],
    whatIDid: [
      "‘AI-Generated Emotional Content Strategy for Niche Fashion Brands: Toward Identity-Based Visual Clustering’ 주제로 영문 초록을 작성하고 제출했습니다.",
      "브랜드를 정체성, 상징, 감정 구조의 관점에서 해석했습니다.",
      "신화·상징 모티프를 연결한 비주얼 클러스터링 프레임으로 구조화했습니다.",
      "영문 포스터와 발표 자료 형식으로 확장했습니다.",
    ],
    whatExists: [
      "영문 초록과 포스터 형식의 결과물.",
      "수정 후 게재 권고가 표기된 심사표.",
      "브랜드 해석과 시각 클러스터링 틀.",
    ],
    keyDecisions: [
      "브랜드 해석을 identity-based visual clustering이라는 구조로 잡았습니다.",
      "연구 결과를 과도하게 학술적으로 쓰기보다 외부 전달 가능한 문장으로 바꿨습니다.",
      "영문 작성과 구조화 능력이 드러나는 작업으로 남겼습니다.",
    ],
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "심사 수정본",
        note: "수정 지시와 최종 초안입니다.",
        src: "/sfti/sfti-revision.webp",
        alt: "SFTI-CMU revision page screenshot.",
        fit: "contain",
      },
      {
        label: "영문 초록",
        note: "영문 초록 첫 장입니다.",
        src: "/sfti/sfti_1.webp",
        alt: "SFTI-CMU screenshot one.",
        fit: "contain",
      },
      {
        label: "자원 한계와 상징 구조",
        note: "자원 한계와 상징 구조를 설명한 장입니다.",
        src: "/sfti/sfti_2.webp",
        alt: "SFTI-CMU screenshot two.",
        fit: "contain",
      },
      {
        label: "해결 구조와 틀",
        note: "해결 구조와 분석 틀을 설명한 장입니다.",
        src: "/sfti/sfti_3.webp",
        alt: "SFTI-CMU screenshot three.",
        fit: "contain",
      },
      {
        label: "상징 연결과 브랜드 해석",
        note: "상징 연결과 브랜드 해석을 정리한 장입니다.",
        src: "/sfti/sfti_4.webp",
        alt: "SFTI-CMU screenshot four.",
        fit: "contain",
      },
      {
        label: "포스터 구성",
        note: "포스터 구성과 발표 자료 장입니다.",
        src: "/sfti/sfti_5.webp",
        alt: "SFTI-CMU screenshot five.",
        fit: "contain",
      },
    ],
    detailMediaSections: [] satisfies DetailMediaSection[],
    currentStatus: [
      "영문 초록은 수정 후 게재 권고 평가를 받았고, 현장 발표는 지도교수가 진행했습니다.",
      "추상적인 브랜드 해석을 영어 문서와 시각 구조로 외부 전달 가능한 형태로 바꿔본 경험입니다.",
    ],
  },
  {
    slug: "aheya-marketing",
    section: "AI 작업물 / 외부 증빙",
    eyebrow: "AHEYA hooks / visuals",
    title: "AHEYA Hooks + Visual Tests",
    oneLiner:
      "AHEYA를 퍼뜨리기 위해 공개 채널 훅, 대표 비주얼, 캐릭터 톤 확장 시안까지\n직접 만든 AI 작업물입니다.",
    summary:
      "서비스 소개만으로는 첫 반응을 얻기 어려워 공개 채널 훅과 대표 비주얼을 직접 만들었습니다. 주요 타깃이 남성이어서 공개 채널 실험은 여성 캐릭터를 앞세워 진행했고, 남성 시안은 톤 확장 비교용으로 따로 두었습니다.",
    roles: ["공개 채널 훅", "이미지 생성", "짧은 모션", "반응 비교"],
    evidence: ["조정 전/후 비교", "공개 채널 영상", "대표 톤 시안", "톤 확장 시안"],
    status: "공개 채널 + 시안 실험 자료",
    tier: "archive",
    accent: "orange",
    year: "2026",
    hideStatusSlide: true,
    coverImage: {
      src: "/appendix/bluegarage/prototypes/man-1.PNG",
      alt: "AHEYA male character tone test.",
      fit: "cover",
    },
    detailLeadLayout: "grid",
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "남성 시안, 대표 톤, 공개 채널 훅",
      summary: "",
    },
    hideLeadStageLabel: true,
    detailHeroProof: {
      label: "남성 캐릭터 시안",
      note: "캐릭터형 훅의 반응 가능성을 넓혀 보기 위해 만든 대표 시안입니다.",
      src: "/appendix/bluegarage/prototypes/man-1.PNG",
      alt: "AHEYA male character tone test.",
      fit: "cover",
    },
    detailHeroHighlights: [
      {
        title: "처음 문제",
        body: "AHEYA는 만드는 것보다 퍼뜨리는 일이 더 어려웠습니다.",
        accent: "orange",
        items: ["초기 확산", "첫 반응", "공개 채널"],
      },
      {
        title: "무엇을 만들었나",
        body: "공개 채널 훅과 대표 비주얼은 여성 캐릭터 중심으로, 남성 시안은 톤 확장 비교용으로 따로 만들며 어떤 톤이 먼저 걸리는지 봤습니다.",
        accent: "aqua",
        items: ["훅", "대표 비주얼", "남성 시안", "모션"],
      },
      {
        title: "관찰한 신호",
        body: "조정 뒤에는 completion과 watch time이 같이 올라가며 더 직접적인 훅이 낫다는 신호가 나왔습니다.",
        accent: "indigo",
        items: ["Views 1.1K → 2.1K", "Watch Time 8.2h → 18.3h", "Completion 16.5% → 28.3%"],
      },
      {
        title: "바꾼 점",
        body: "대표 톤은 서비스 쪽에 두고, 남성 시안은 톤 확장용으로 따로 보며 표현 방향을 조정했습니다.",
        accent: "orange",
        items: ["대표 톤", "톤 확장", "표현 조정"],
      },
    ],
    overview: [
      "AHEYA는 제품을 만드는 것보다 퍼뜨리는 쪽이 더 어려웠고, 그래서 공개 채널에서 어떤 훅이 먼저 멈추게 하는지 직접 실험했습니다.",
      "이 자료는 공개 채널 훅뿐 아니라 서비스 첫인상에 붙는 대표 비주얼과 캐릭터 톤 확장 시안까지 함께 본 AI 작업물입니다.",
    ],
    whatIDid: [
      "공개 채널에서 먼저 읽히는 상징과 감정선을 직접 골랐습니다.",
      "대표 이미지와 짧은 영상은 실제로 만들고 반응 변화를 확인했습니다.",
      "주요 타깃이 남성이어서 공개 채널 훅은 여성 캐릭터 중심으로 두고, 남성 캐릭터 시안은 별도로 만들어 톤 확장 가능성을 봤습니다.",
      "조정 전후를 비교해 더 효과적인 훅과 톤을 검증했습니다.",
    ],
    whatExists: [
      "조정 전 / 후 비교 이미지와 반응 지표.",
      "공개 채널에 올린 짧은 영상과 포스트 링크.",
      "대표 이미지, 모션, 톤 확장 시안까지 넓힌 흔적.",
    ],
    keyDecisions: [
      "서비스 설명보다 훅과 상징이 먼저 읽혀야 한다고 봤습니다.",
      "반응이 약한 표현은 오래 끌지 않고 더 직접적인 방향으로 조정했습니다.",
      "제품 소개와 공개 채널 훅을 따로 두되, 같은 세계관 안에서 대표 톤과 시안을 맞췄습니다.",
    ],
    problemSummary: [],
    solutionSummary: [],
    flowHeading: "조정 흐름",
    flowSteps: [],
    structureOutcome:
      "공개 채널 훅과 서비스 첫인상을 빠르게 조정한 작업입니다.",
    galleryIntro:
      "이 자료는 제품 화면보다 공개 채널 훅과 첫인상 시안이 중심입니다. 남성 시안, 대표 톤, 조정 전 / 후 비교 순서로 두었습니다.",
    placeholderMedia: [
      {
        label: "남성 시안 vs 대표 톤",
        note: "서비스에 실제로 붙인 대표 톤과, 캐릭터 톤 확장을 보기 위한 시안을 나란히 뒀습니다.",
        stackedMediaDirection: "row",
        stackedMedia: [
          {
            src: "/appendix/bluegarage/prototypes/man-main.PNG",
            alt: "Male main tone test image.",
            fit: "cover",
            position: "center 38%",
            scale: 1.12,
          },
          {
            src: "/appendix/bluegarage/aheya/k.webp",
            alt: "AHEYA K visual.",
            fit: "cover",
          },
        ],
      },
      {
        label: "조정 전 / 후 비교",
        note: "조정 전에는 Views 1.1K / Watch Time 8.2h / Completion 16.5%, 조정 후에는 Views 2.1K / Watch Time 18.3h / Completion 28.3%였습니다.",
        stackedMediaDirection: "row",
        stackedMedia: [
          {
            src: "/appendix/bluegarage/aheya/dog.webp",
            alt: "AHEYA public hook before adjustment.",
            fit: "contain",
            position: "center center",
          },
          {
            src: "/appendix/bluegarage/horus_img.webp",
            alt: "AHEYA public hook after adjustment.",
            fit: "contain",
            position: "center center",
          },
        ],
      },
      {
        label: "서비스 연결 영상",
        note: "서비스 분위기와 공개 채널 훅을 한 덩어리로 읽히게 한 대표 영상입니다.",
        src: "/appendix/bluegarage/aheya_vid.MP4",
        alt: "AHEYA service motion surface experiment.",
        type: "video",
        poster: "/appendix/bluegarage/aheya/aheya-motion-poster.webp",
        fit: "contain",
        displaySize: "compact",
      },
    ],
    detailMediaSections: [
      {
        eyebrow: "캐릭터 톤과 시안",
        title: "남성 시안 묶음",
        summary: "비교에 필요한 대표 남성 시안만 남겨 어떤 인상이 더 먼저 걸리는지 봤습니다.",
        columns: 3,
        layout: "grid",
        items: [
          {
            label: "남성 메인 시안",
            note: "메인 톤으로 먼저 비교한 남성 시안 2장입니다.",
            stackedMediaDirection: "row",
            stackedMedia: [
              {
                src: "/appendix/bluegarage/prototypes/man-main.PNG",
                alt: "Male main tone test 1.",
                fit: "cover",
                position: "center 38%",
                scale: 1.12,
              },
              {
                src: "/appendix/bluegarage/prototypes/man-main2.PNG",
                alt: "Male main tone test 2.",
                fit: "cover",
                position: "center 42%",
                scale: 1.1,
              },
            ],
          },
          {
            label: "남성 시안 1",
            note: "첫 남성 톤 실험 묶음입니다.",
            stackedMediaDirection: "row",
            stackedMedia: [
              { src: "/appendix/bluegarage/prototypes/man-1.PNG", alt: "Male tone test 1.", fit: "cover" },
              { src: "/appendix/bluegarage/prototypes/man-2.PNG", alt: "Male tone test 2.", fit: "cover" },
            ],
          },
          {
            label: "남성 시안 2",
            note: "더 직접적인 인상과 스타일을 보기 위해 만든 남성 시안 묶음입니다.",
            stackedMediaDirection: "row",
            stackedMedia: [
              { src: "/appendix/bluegarage/prototypes/man-7.PNG", alt: "Male tone test 7.", fit: "cover" },
              { src: "/appendix/bluegarage/prototypes/man-6.PNG", alt: "Male tone test 6.", fit: "cover" },
            ],
          },
        ],
      },
      {
        eyebrow: "공개 채널 확장",
        title: "상징과 캐릭터 훅을 달리한 영상 변주",
        summary: "어떤 방향이 더 먼저 멈추게 하는지 보기 위해 여러 영상 변주를 공개 채널에 붙였습니다.",
        columns: 4,
        layout: "grid",
        items: [
          {
            label: "Horus",
            note: "대표 공개 채널 훅으로 쓴 영상입니다.",
            src: "/appendix/bluegarage/horus_vid_1_5x.MP4",
            alt: "AHEYA Horus public-channel experiment.",
            type: "video",
            poster: "/appendix/bluegarage/horus_img.webp",
            displaySize: "compact",
          },
          {
            label: "Zeus",
            note: "더 강한 상징과 직진하는 훅을 확인한 공개 채널 변주입니다.",
            src: "/appendix/bluegarage/zeus_vid.MP4",
            alt: "AHEYA Zeus public-channel experiment.",
            type: "video",
            poster: "/appendix/bluegarage/zeus_img.webp",
            displaySize: "compact",
          },
          {
            label: "Ares",
            note: "더 날카로운 에너지와 움직임이 첫인상에 어떤 차이를 만드는지 본 변주입니다.",
            src: "/appendix/bluegarage/ares_vid.MP4",
            alt: "AHEYA Ares public-channel experiment.",
            type: "video",
            poster: "/appendix/bluegarage/ares_data.webp",
            displaySize: "compact",
          },
          {
            label: "Artemis",
            note: "긴장감과 사냥감 같은 인상을 어떻게 읽는지 보기 위한 변주입니다.",
            src: "/appendix/bluegarage/artemis_vid.MP4",
            alt: "AHEYA Artemis public-channel experiment.",
            type: "video",
            poster: "/appendix/bluegarage/artemis_data.webp",
            displaySize: "compact",
          },
        ],
      },
    ],
    currentStatus: [
      "AHEYA를 퍼뜨리기 위해 실제로 쓴 공개 채널 훅과 비주얼입니다.",
      "대표 톤과 남성 캐릭터 시안을 함께 보며 어떤 인상이 더 먼저 걸리는지 확인했습니다.",
    ],
  },
  {
    slug: "ab-aurora",
    section: "핵심 사례",
    eyebrow: "방향 기준 / 보류한 프로토타입",
    title: "Aurora",
    oneLiner:
      "브리프를 먼저 방향 기준으로 정리했지만, 실시간 제어 한계와 API 비용 때문에 보류한 프로토타입입니다.",
    summary:
      "핵심은 이미지를 바로 생성하는 것이 아니라, 먼저 direction을 고정하고 그 기준으로 선택 미리보기와 최종 결과물을 이어 붙이는 구조였습니다. 다만 전 과정을 실시간 채팅으로 제어하니 흐름이 길어졌고, API 비용도 커져 이 단계에서 보류했습니다.",
    roles: ["방향 정리", "단계별 흐름 설계", "미리보기 제어", "최종 묶음 설계"],
    evidence: ["방향 정리", "후보 3개", "선택 미리보기", "최종 결과물"],
    status: "보류한 프로토타입",
    tier: "selected",
    accent: "indigo",
    year: "2026.02.26 - 2026.03 / 보류한 프로토타입",
    hideJudgmentSlide: false,
    hideStatusSlide: true,
    coverImage: {
      src: "/work/ab-aurora-presession.webp",
      alt: "Aurora presession workspace screenshot.",
      fit: "contain",
    },
    externalLinks: [
      {
        label: "Aurora Live",
        href: "https://ab-aurora.vercel.app/",
        kind: "site",
        accent: "indigo",
      },
      {
        label: "Aurora GitHub",
        href: "https://github.com/aheyabaraya/ab_aurora",
        kind: "github",
        accent: "indigo",
      },
    ],
    detailLeadLayout: "grid",
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "작업 시작 화면과 단계 규칙",
      summary: "",
    },
    detailHeroProof: {
      label: "작업 시작 화면",
      note: "브리프 입력, 방향 정리 준비, 단계 구분이 한 화면 안에서 읽히는 작업 화면입니다.",
      src: "/work/ab-aurora-presession.webp",
      alt: "Aurora presession workspace screenshot.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "문제",
        body: "브리프가 불명확한 상태에서 바로 생성으로 가면 결과가 쉽게 흔들렸습니다.",
        accent: "aqua",
        items: ["브리프 불명확", "방향 부재", "결과 흔들림"],
      },
      {
        title: "제시한 구조",
        body: "브리프 정리, 후보 비교, 선택 미리보기, 최종 결과물을 단계 규칙으로 나눠 direction-first 흐름을 세우려 했습니다.",
        accent: "orange",
        items: ["방향 정리", "후보 비교", "선택 미리보기", "최종 결과물"],
      },
      {
        title: "멈춘 이유",
        body: "실시간 채팅으로 전 과정을 제어하려니 흐름이 길어졌고, API 비용도 이 단계에서 부담이 커 더 밀지 않았습니다.",
        accent: "indigo",
        items: ["실시간 채팅 한계", "API 비용", "보류"],
      },
      {
        title: "보류 판단",
        body: "실시간 제어 한계와 비용 문제로 이 단계에서 보류 판단을 내렸습니다.",
        accent: "orange",
        items: ["구조 보존", "더 확장하지 않음", "보류한 프로토타입"],
      },
    ],
    overview: [
      "Aurora는 실제 프로젝트 아이디어는 있지만 디자인 방향이 흐릿한 사용자를 위해, 브리프를 먼저 방향 기준으로 바꾼 뒤 단계별로 결과를 좁혀 가는 프로토타입입니다.",
      "핵심 가치는 결과 이미지 한 장이 아니라, 먼저 정한 방향을 기준으로 다음 단계가 움직이게 만든 점에 있습니다.",
    ],
    detailProblemGroups: [
      {
        title: "브리프 불명확성",
        body: "실제 프로젝트 아이디어는 있지만 방향이 흐린 상태에서 바로 생성으로 가면 결과가 쉽게 흔들렸습니다.",
        accent: "aqua",
        items: ["브리프 불명확", "방향 부재", "결과 흔들림"],
      },
      {
        title: "이미지와 방향 기준의 차이",
        body: "좋아 보이는 이미지 한 장과 실제로 쓸 수 있는 방향 기준은 달랐고, 그 기준이 먼저 필요했습니다.",
        accent: "orange",
        items: ["방향 기준", "미리보기", "패키지 일관성"],
      },
      {
        title: "direction-first 단계",
        body: "그래서 brief -> direction -> top 3 -> 선택 미리보기 -> 최종 결과물 순서로 방향을 먼저 정하고 결과를 좁히는 구조를 제시했습니다.",
        accent: "indigo",
        items: ["direction", "후보 3개", "선택 미리보기", "최종 결과물"],
      },
      {
        title: "direction-first 원칙",
        body: "핵심은 예쁜 결과를 바로 만드는 것이 아니라, 먼저 정한 방향이 이후 미리보기와 최종 결과물을 이끌게 만드는 것이었습니다.",
        accent: "aqua",
        items: ["기준 먼저", "단계 구분", "후속 결과물"],
      },
    ],
    problemSummary: [],
    whatIDid: [
      "사용자 브리프를 받아 먼저 방향을 정리하는 단계를 제품 규칙으로 세웠습니다.",
      "후보 3개와 선택 미리보기를 나눠, 비교와 선택이 먼저 일어나도록 단계를 갈랐습니다.",
      "최종 결과물 묶음은 선택 미리보기 이후에만 열리게 해 순서를 고정했습니다.",
      "브리프가 약하면 바로 생성으로 넘기지 않도록 중간 확인 단계를 뒀습니다.",
      "공유용 이미지와 UI 코드가 같은 방향에서 파생되게 맞췄습니다.",
    ],
    whatExists: [
      "작업 시작 화면과 방향 정리 화면.",
      "선택 미리보기 화면과 후보 3개 자료.",
      "direction -> top 3 -> 선택 미리보기 -> 최종 결과물을 설명하는 문서 흔적.",
      "direction을 이후 결과물의 기준으로 두는 제품 규칙.",
    ],
    keyDecisions: [
      "약한 브리프를 바로 생성으로 넘기지 않고 중간 확인 단계를 둡니다.",
      "후보 3개 비교와 선택 미리보기를 분리합니다.",
      "선택 미리보기가 준비되기 전에는 최종 결과물을 열지 않습니다.",
      "먼저 정한 방향을 이후 결과물의 기준으로 유지합니다.",
    ],
    solutionSummary: [
      {
        title: "direction을 먼저 고정",
        body: "브리프를 바로 생성하지 않고 direction 단계를 먼저 고정했습니다.",
        accent: "aqua",
        items: ["brief", "direction", "최종 결과물"],
      },
      {
        title: "선택 전 검토 단계 확보",
        body: "후보 비교와 선택 미리보기를 구분해, 방향이 서기 전에는 최종 결과물로 넘어가지 않게 했습니다.",
        accent: "orange",
        items: ["후보 3개", "선택 미리보기", "최종 결과물"],
      },
      {
        title: "보류 판단",
        body: "실시간 채팅 제어 한계와 API 비용을 함께 보고, 이 상태로는 더 밀지 않기로 결정했습니다.",
        accent: "indigo",
        items: ["실시간 채팅 한계", "API 비용", "보류"],
      },
    ],
    flowHeading: "실제 시도와 판단",
    flowSteps: [
      {
        step: "01",
        title: "direction 단계 구축",
        body: "브리프를 바로 생성하지 않고 direction 단계를 먼저 고정했습니다.",
        meta: "구축",
      },
      {
        step: "02",
        title: "후보 비교와 선택 미리보기 분리",
        body: "후보 비교와 선택 미리보기를 나눠, 방향이 서기 전에는 최종 결과물로 바로 넘어가지 않게 했습니다.",
        meta: "구분",
      },
      {
        step: "03",
        title: "실시간 채팅 제어 한계 확인",
        body: "전 과정을 채팅으로 제어하려 하니 대화가 길어지고, 단계 기준보다 대화 맥락 유지 비용이 더 커졌습니다.",
        meta: "신호",
      },
      {
        step: "04",
        title: "API 비용 기준으로 보류",
        body: "실시간 제어 한계와 API 비용을 함께 보고, 프로토타입은 direction-first 구조까지만 남기고 보류했습니다.",
        meta: "보류",
      },
    ],
    structureOutcome:
      "결과 이미지를 더 늘리기보다, 방향을 먼저 고정하는 규칙이 더 중요했습니다.",
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "작업 시작 화면",
        note: "브리프, 방향 정리 준비, 단계 구분이 한 화면 안에서 같이 보이는 작업 화면입니다.",
        src: "/work/ab-aurora-presession.webp",
        alt: "Aurora presession workspace screenshot.",
        fit: "contain",
        featured: true,
      },
    ],
    supplementalSections: undefined,
    currentStatus: [
      "흐릿한 브리프를 단계별 결과물로 바꾸려 했던 보류된 프로토타입입니다.",
      "이미지보다 먼저 방향 정리, 선택, 최종 결과물 순서를 남겼습니다.",
    ],
  },
];

export const workCaseMap = Object.fromEntries(
  workCases.map((item) => [item.slug, item]),
) as Record<string, TainaiWorkCase>;

const selectedOrder = ["ab-luna-relay", "ilysb", "ab-aurora"] as const;
const aiMediaOrder = ["aheya-marketing", "andersson-bell"] as const;
const researchOrder = ["sfti-cmu"] as const;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
export const aiMediaCases = aiMediaOrder.map((slug) => workCaseMap[slug]);
export const researchCases = researchOrder.map((slug) => workCaseMap[slug]);
