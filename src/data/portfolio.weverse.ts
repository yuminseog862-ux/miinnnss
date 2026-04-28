import type { HeroContent, MediaFit, WorkCase } from "@/data/portfolio";
import { workCaseMap as creativeWorkCaseMap } from "@/data/portfolio.creative";
import type {
  DomainFitContent,
  EmotionalEntryContent,
  FitMethodCard,
  OperatingLoopContent,
  RecruiterQuickReadContent,
  TainaiWorkCase,
} from "@/data/portfolio.tainai";
import { workCaseMap as tainaiWorkCaseMap } from "@/data/portfolio.tainai";

const adaptCase = (project: WorkCase, overrides: Partial<TainaiWorkCase> = {}): TainaiWorkCase => ({
  ...project,
  ...overrides,
});

const aheya = adaptCase(tainaiWorkCaseMap["aheya"], {
  section: "대표 케이스",
  eyebrow: "서비스 구조 / 공개 표면 / 신뢰 경계",
  oneLiner:
    "AHEYA는 공개 진입 화면, 신뢰 설명 범위, pause 판단까지 남긴 0→1 서비스기획 케이스입니다.",
  summary:
    "이 케이스의 핵심은 서비스를 예쁘게 보이게 만든 것이 아니라, 무엇을 먼저 보여주고 무엇을 뒤로 숨길지, 어떤 경로를 실제 공개 표면으로 둘지, 반응이 약할 때 어디서 멈출지를 서비스 구조로 정리한 데 있습니다.",
  roles: ["서비스 구조 설계", "공개 표면 설계", "신뢰/정책 경계", "검증 루프"],
  evidence: ["공개 진입 화면", "trust lane", "메시지 조정 기록", "pause 판단"],
  status: "실제 공개 표면과 정책 경계를 남긴 서비스기획 케이스",
  year: "2025.03 - present / paused",
  currentStatus: [
    "공개 진입 화면, trust lane, message boundary가 함께 남아 있는 0→1 서비스기획 케이스입니다.",
    "흥행 포장보다 구조 설계, 공개 범위 판단, pause decision을 읽는 것이 맞습니다.",
  ],
});

const abAurora = adaptCase(tainaiWorkCaseMap["ab-aurora"], {
  eyebrow: "요구사항 정리 / 단계 설계",
  oneLiner:
    "흐릿한 브리프를 direction 기준, 후보 비교, 선택 규칙으로 정리한 서비스 기획형 도구 케이스입니다.",
  summary:
    "AB_Aurora의 가치는 멋진 결과 이미지를 바로 뽑는 것이 아니라, 요구사항을 먼저 해석하고, 선택 기준을 세운 뒤, 그 기준 위에서 후속 단계가 움직이도록 제품 규칙을 정리한 점에 있습니다.",
  roles: ["요구사항 구조화", "stage 설계", "선택 규칙", "산출물 흐름"],
  evidence: ["direction 정의", "후보 비교", "선택 preview", "package gate"],
  status: "요구사항을 단계와 규칙으로 고정한 planning case",
});

const relay = adaptCase(tainaiWorkCaseMap["ab-luna-relay"], {
  eyebrow: "협업 handoff / 운영 구조",
  oneLiner:
    "여러 AI 도구와 대화에서 흩어진 작업 상태를 current state, blocker, next action으로 묶은 협업 구조 케이스입니다.",
  summary:
    "Relay는 새 모델을 더 붙인 도구가 아니라, 누가 이어받아도 지금 상태와 다음 할 일을 읽을 수 있게 만든 handoff layer입니다. 서비스 운영 안정화와 협업 구조 측면에서 읽는 편이 정확합니다.",
  roles: ["handoff 구조", "상태 정리", "workflow copy", "pilot 운영"],
  evidence: ["current state", "blocker", "next action", "handoff"],
  status: "초기 pilot이지만 협업 구조 설계 증거는 분명합니다.",
});

const anderssonBell = adaptCase(tainaiWorkCaseMap["andersson-bell"], {
  eyebrow: "피드백 반영 / 방향 조정",
  oneLiner:
    "실무 피드백을 받아 아이디어 spread를 줄이고 결과물 방향을 다시 고정한 협업형 기획 케이스입니다.",
  summary:
    "Andersson Bell은 AI 영상 결과물 자체보다, 모호한 아이디어를 stakeholder feedback에 맞춰 줄이고 다시 짜는 과정이 더 중요한 케이스입니다. 외부 협업과 방향 수렴 경험을 읽는 편이 정확합니다.",
  roles: ["방향 조정", "피드백 반영", "시퀀스 재구성", "결과물 정리"],
  evidence: ["피드백 반영", "방향 축소", "fixed-angle rebuild", "최종 15초"],
  status: "외부 이해관계자와의 조율과 수정 기록이 남은 케이스",
});

const personaSystems = adaptCase(creativeWorkCaseMap["persona-systems"], {
  section: "핵심 증거",
  eyebrow: "캐릭터/역할 일관성 설계",
  oneLiner:
    "역할, 말투, 관계성을 분리해 캐릭터 일관성과 상호작용 톤을 구조화한 내부 시스템 실험입니다.",
  summary:
    "이 실험은 캐릭터를 단순한 설정 카드가 아니라, 역할 차이와 말투, 관계 톤이 일관되게 유지되도록 설계한 구조 실험입니다. 팬 경험이나 콘텐츠 서비스에서 캐릭터/관계 일관성을 어떻게 다룰지에 대한 감각으로 이어집니다.",
  roles: ["역할 구조", "말투/관계성", "interaction tone", "내부 운영"],
  evidence: ["persona surface", "역할 차이", "캐릭터 인상", "운영 구조"],
  status: "캐릭터 구조와 interaction consistency 감각을 보여주는 보조 케이스",
});

const sfti = adaptCase(tainaiWorkCaseMap["sfti-cmu"], {
  eyebrow: "영문 문서화 / 외부 설명",
  oneLiner:
    "모호한 브랜드/콘텐츠 아이디어를 영어 abstract와 poster 구조로 정리해 외부 제출 가능한 형태로 만든 케이스입니다.",
  status: "영문 구조화와 외부 설명 능력을 보강하는 archive",
});

const ilysb = adaptCase(tainaiWorkCaseMap["ilysb"], {
  eyebrow: "빠른 검증 / stop judgment",
  status: "직접 user signal을 읽고 중단한 archive case",
});

const ariadne = adaptCase(creativeWorkCaseMap["ariadne-mode-moment"], {
  eyebrow: "서비스 구조 / IA archive",
  status: "정보구조와 decision layer 감각을 보강하는 archive",
});

export const siteTitle = "minnns / Weverse 서비스기획 지원 포트폴리오";

export const heroTitleLines = [
  "팬이 머무는 구조를 정리하고,",
  "콘텐츠와 서비스 입구를 같이 설계합니다.",
] as const;

export const heroContent: HeroContent = {
  eyebrow: "Weverse 서비스기획 지원용 포트폴리오",
  title: heroTitleLines.join(" "),
  summary:
    "콘텐츠와 캐릭터를 그냥 비주얼 자산으로 두지 않고, 사람들이 어디서 이해하고 머무르고 다시 돌아오는지를 서비스 구조로 풀어온 기획자입니다.",
  stageTitle: "서비스 구조, 공개 표면, 정책 경계를 함께 설계하는 서비스 기획자",
  ctas: [
    { label: "대표 케이스 보기", href: "#flagship", variant: "primary" },
    { label: "핵심 증거 보기", href: "#selected", variant: "secondary" },
  ],
  proofs: [
    "AHEYA에서 공개 진입 화면, trust lane, message boundary를 함께 정리했습니다.",
    "Blue Garage/AHEYA 공개 채널 실험으로 캐릭터와 콘텐츠를 서비스 입구 자산으로 다뤘습니다.",
    "Relay, AB_Aurora로 handoff 구조와 stage rule을 제품 규칙으로 설계했습니다.",
    "Andersson Bell, Persona System, SFTI-CMU로 피드백 반영과 외부 문서화 경험을 남겼습니다.",
  ],
  signals: [
    { label: "핵심 역할", value: "서비스 구조와 공개 표면을 같이 설계하는 기획자" },
    { label: "집중 영역", value: "콘텐츠 엔트리 / 정책 경계 / handoff 구조" },
    { label: "강점", value: "읽는 순서 정리 -> 화면화 -> 반응 확인" },
  ],
};

export const heroVisual = {
  src: "/appendix/bluegarage/aheya/k.webp",
  alt: "AHEYA K visual used as a fandom-entry proof.",
  fit: "contain" as MediaFit,
};

export const recruiterQuickReadContent: RecruiterQuickReadContent = {
  eyebrow: "먼저 보면 좋은 핵심 정리",
  title: "서비스 구조와 콘텐츠 입구를 따로 보지 않고 같이 다룹니다.",
  summary:
    "AHEYA를 먼저 보고, 그다음 Blue Garage/AHEYA 공개 채널 입구, Relay, AB_Aurora, Persona System 순으로 보면 어떤 방식으로 서비스기획을 해왔는지 빠르게 읽힙니다.",
  orderLabel: "추천 읽기 순서",
  order: ["AHEYA", "Blue Garage", "Relay", "AB_Aurora", "Persona System"],
  cards: [
    {
      label: "이 사람은",
      title: "무엇을 먼저 보여줄지부터 정리하는 서비스 기획자",
      body: "기능 목록을 늘리기보다, 사용자와 이해관계자가 어디서 이해하고 어디서 머무는지를 먼저 정리합니다.",
      accent: "aqua",
    },
    {
      label: "왜 맞는가",
      title: "콘텐츠 엔트리, 정책 경계, 협업 구조를 한 흐름으로 다룹니다.",
      body: "팬 경험은 화면만으로 끝나지 않기 때문에, 공개 표면과 운영 규칙을 같이 봐야 한다고 생각합니다.",
      accent: "orange",
    },
    {
      label: "어디를 볼까",
      title: "AHEYA 다음에 Relay, AB_Aurora, Persona System을 보면 됩니다.",
      body: "AHEYA는 공개 서비스 구조를, Relay는 handoff를, AB_Aurora는 stage rule을, Persona System은 캐릭터 일관성 감각을 보여줍니다.",
      accent: "indigo",
    },
  ],
};

export const fitMethodContent = {
  eyebrow: "왜 이 역할에 맞는가",
  title: "팬 경험도 결국 구조, 입구, 운영 규칙의 문제라고 봅니다.",
  summary:
    "Weverse 서비스기획은 콘텐츠와 커뮤니티를 예쁘게 보이게 하는 일이 아니라, 팬이 머무는 흐름을 구조로 만들고 운영 가능한 정책으로 고정하는 일에 가깝다고 이해했습니다.",
  cards: [
    {
      title: "서비스 표면과 정책 경계를 같이 본다",
      accent: "aqua",
      proof: "AHEYA / trust lane",
      body:
        "무엇을 먼저 공개하고 무엇을 뒤에 둘지, 어떤 설명이 public surface에 올라가도 되는지까지 함께 설계합니다.",
      points: ["공개 표면", "정책 경계", "신뢰 설명"],
    },
    {
      title: "콘텐츠 입구를 서비스 이해와 분리하지 않는다",
      accent: "orange",
      proof: "Blue Garage / AHEYA",
      body:
        "콘텐츠와 캐릭터는 장식이 아니라, 사람들이 서비스를 궁금해하게 만드는 entry asset으로 다뤘습니다.",
      points: ["첫 장면", "관심 유도", "서비스 입구"],
    },
    {
      title: "요구사항을 단계와 규칙으로 정리한다",
      accent: "indigo",
      proof: "AB_Aurora / Relay",
      body:
        "모호한 요구를 바로 실행에 넘기지 않고, direction, selection, handoff 같은 중간 규칙을 제품으로 고정합니다.",
      points: ["stage rule", "selection", "handoff"],
    },
    {
      title: "피드백과 협업 흔적을 남긴다",
      accent: "indigo",
      proof: "Andersson Bell / Persona System / SFTI-CMU",
      body:
        "외부 피드백 반영, 톤 조정, 영문 구조화까지 포함해 여러 이해관계자가 같이 읽을 수 있는 산출물로 정리해 왔습니다.",
      points: ["feedback loop", "외부 협업", "문서화"],
    },
  ] satisfies FitMethodCard[],
};

export const emotionalEntryContent: EmotionalEntryContent = {
  eyebrow: "콘텐츠 엔트리 / 공개 채널 설계",
  title: "서비스 설명이 약한 구간은 콘텐츠와 캐릭터로 입구를 만들었습니다.",
  summary:
    "AHEYA에서는 기능 설명만으로는 사람들이 멈춰 보지 않는 구간이 분명했습니다. 그래서 공개 채널의 첫 장면, 캐릭터, 분위기, trust-facing tone까지 서비스 기획 범위로 포함해 조정했습니다.",
  cards: [
    {
      title: "왜 시도했는가",
      accent: "aqua",
      proof: "AHEYA / Blue Garage",
      body:
        "서비스 소개만으로 반응을 얻기 어려운 구간이 있었고, 팬 경험에 가까운 입구 자산이 필요하다고 판단했습니다.",
      points: ["약한 입구", "관심 유도", "entry asset"],
    },
    {
      title: "무엇을 조정했는가",
      accent: "orange",
      proof: "K / Tiger / Trust-facing tone",
      body:
        "대표 캐릭터, 공개 채널용 변주 이미지, trust surface용 더 차갑고 명확한 톤을 분리해 first impression을 조정했습니다.",
      points: ["캐릭터 톤", "공개 채널", "trust surface"],
    },
    {
      title: "왜 서비스기획 증거인가",
      accent: "indigo",
      proof: "AHEYA / Blue Garage / Persona System",
      body:
        "팬 경험 서비스에서는 콘텐츠와 캐릭터가 결국 체류 구조와 재방문 이유를 만드는 입구이기 때문에, 이 부분도 구조 설계로 봐야 한다고 생각합니다.",
      points: ["체류 구조", "재방문 동기", "일관성"],
    },
  ],
  supportEyebrow: "AHEYA / Blue Garage",
  supportTitle: "공개 채널의 첫 장면도 서비스 표면으로 설계했습니다.",
  supportBody:
    "핵심은 이미지를 많이 만든 것이 아니라, 어떤 장면과 톤이 서비스와 더 자연스럽게 연결되는지 확인하고 조정한 점입니다. 메시지, 무드, trust 톤을 한 화면으로 섞지 않고 분리했습니다.",
  supportPoints: [
    "캐릭터와 세계관을 entry asset으로 사용",
    "공개 채널에서 어떤 첫 장면이 먼저 읽히는지 확인",
    "서비스 표면과 trust-facing tone을 분리",
  ],
  supportShots: [
    {
      label: "AHEYA Baraya K",
      note: "서비스 설명보다 먼저 인상과 관계의 결을 읽히게 한 emotional front door였습니다.",
      src: "/appendix/bluegarage/aheya/k.webp",
      alt: "AHEYA Baraya K character visual.",
      fit: "cover",
    },
    {
      label: "Public hook experiment",
      note: "빠른 스크롤 환경에서 어떤 첫 장면이 더 먼저 읽히는지 보기 위한 공개 채널 테스트 비주얼입니다.",
      src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
      alt: "AHEYA tiger zodiac public hook visual.",
      fit: "cover",
    },
    {
      label: "Trust-facing tone",
      note: "trust surface에는 더 차갑고 명확한 tone을 배치해, emotional entry와 information trust를 분리했습니다.",
      src: "/appendix/bluegarage/aheya/aheya_trust_yean.webp",
      alt: "AHEYA trust-facing Yean character visual.",
      fit: "contain",
    },
  ],
  prototypeEyebrow: "서비스 표면 예시",
  prototypeTitle: "메시지, 신뢰, 무드를 분리한 공개 표면들",
  prototypeSummary:
    "팬 경험 서비스에서는 무엇을 먼저 보여주고, 무엇을 뒤에 두며, 어떤 tone을 어느 화면에 둘지가 중요하다고 생각합니다.",
  prototypes: [
    {
      label: "Entry surface",
      note: "핵심 제안과 진입 흐름이 먼저 읽히는 공개 진입 화면입니다.",
      src: "/aheya/home-hero.webp",
      alt: "AHEYA home hero.",
      fit: "contain",
    },
    {
      label: "Trust lane",
      note: "신뢰 관련 설명을 별도 lane으로 빼 first impression을 해치지 않도록 정리한 화면입니다.",
      src: "/aheya/lane-panels.webp",
      alt: "AHEYA trust lane panels.",
      fit: "contain",
    },
    {
      label: "Supporting surface",
      note: "서비스 무드와 creator-facing 톤을 보강하는 supporting surface입니다.",
      src: "/aheya/creator.webp",
      alt: "AHEYA creator surface.",
      fit: "contain",
    },
    {
      label: "Shared-state handoff",
      note: "여러 협업자가 지금 상태와 다음 할 일을 읽을 수 있게 만든 handoff surface입니다.",
      src: "/work/relay-home-open.webp",
      alt: "Relay home open screen.",
      fit: "contain",
    },
  ],
  note:
    "핵심은 비주얼 자체보다, 서비스 이해를 돕는 입구와 운영 경계를 함께 설계한 점입니다.",
};

export const flagshipIntro = {
  eyebrow: "대표 케이스",
  title: "AHEYA",
  oneLiner:
    "AHEYA는 공개 진입 화면, trust lane, message boundary를 함께 정리한 0→1 서비스기획 케이스입니다.",
  summary:
    "핵심은 크게 성공한 것처럼 포장하는 것이 아니라, 무엇을 public surface에 두고 무엇을 뒤에 두는지, 어떤 흐름을 우선순위로 남겼는지, 반응이 약할 때 어떻게 멈췄는지까지 구조로 남긴 점입니다.",
  ctaLabel: "AHEYA 상세 보기",
  ctaHref: "/weverse/work/aheya",
  statusLabel: "이 케이스를 먼저 보는 이유",
  statusValue: "서비스 구조, 공개 가능한 설명 범위, pause 판단이 함께 남아 있는 첫 번째 증거입니다.",
};

export const domainFitContent: DomainFitContent = {
  eyebrow: "Why Weverse / Service Planning",
  title: "콘텐츠 경험을 취향이 아니라 체류 구조로 봅니다.",
  summary:
    "사람들이 왜 특정 캐릭터와 관계에 오래 머무는지, 어떤 장면과 반복 행동이 다시 돌아오게 만드는지 계속 관찰해 왔습니다. 저에게 중요한 건 많이 봤다는 사실보다, 그 감각을 서비스 구조로 번역할 수 있느냐입니다.",
  works: ["관계 텐션", "반복 방문 이유", "콘텐츠-서비스 연결"],
  observations: [
    {
      title: "관계와 일관성",
      body: "캐릭터와 관계의 결이 유지되지 않으면 체류가 약해진다고 봅니다. 설정보다 일관성이 중요합니다.",
    },
    {
      title: "리추얼과 혜택",
      body: "사람이 계속 돌아오는 이유는 콘텐츠만이 아니라, 반복 행동의 이유와 작은 보상 구조에도 있다고 생각합니다.",
    },
    {
      title: "콘텐츠와 기능 연결",
      body: "좋은 콘텐츠 경험도 결국 서비스 안에서 어디로 이어지는지가 중요합니다. 엔트리와 후속 행동은 같이 설계돼야 합니다.",
    },
  ],
  translationLabel: "서비스로 번역하면",
  translationBody:
    "이 감각은 결국 커뮤니티, 멤버십/혜택, 콘텐츠 입구, 운영 정책을 어떻게 한 흐름으로 묶을지의 문제로 이어집니다. 저는 이 영역을 취향 설명이 아니라 체류 구조와 운영 구조 설계 문제로 읽고 싶습니다.",
  note: "팬 경험은 기능 목록보다 반복 방문 이유와 감정 구조를 먼저 봐야 한다고 생각합니다.",
};

export const operatingLoopContent: OperatingLoopContent = {
  eyebrow: "Operating loop",
  title: "서비스를 읽히게 만들고, 운영 가능한 규칙으로 고정합니다.",
  summary:
    "제가 하는 일은 아이디어를 멋있게 설명하는 것이 아니라, 사용자와 운영이 실제로 감당할 수 있는 구조와 공개 표면으로 바꾸는 것입니다.",
  process: ["요구를 구조화한다", "표면과 정책을 나눈다", "반응을 보고 다시 쓴다"],
  chips: ["서비스 구조", "정책 정의", "공개 범위", "콘텐츠 엔트리", "handoff", "피드백 수렴"],
  memos: [
    {
      title: "무엇을 먼저 보여줄지 정한다",
      body: "사용자와 이해관계자가 어디서 이해해야 하는지를 먼저 정리하고 공개 표면을 만듭니다.",
    },
    {
      title: "운영 경계를 같이 본다",
      body: "좋아 보이는 화면만이 아니라, public surface에 올려도 되는 설명 범위와 운영 경계를 같이 정합니다.",
    },
    {
      title: "협업자가 이어받기 쉬운 상태를 남긴다",
      body: "handoff가 안 되면 운영이 무너지기 때문에, current state와 next action을 같이 정리합니다.",
    },
    {
      title: "약한 방향이면 바로 다시 쓴다",
      body: "반응이 약하면 감추지 않고 방향을 다시 정리하거나 pause decision까지 결과로 남깁니다.",
    },
  ],
};

export const footerContent = {
  line: "서비스 구조, 콘텐츠 입구, 운영 경계를 함께 설계합니다.",
  meta: "AHEYA / AB_Aurora / Relay / Persona System / Andersson Bell / SFTI-CMU",
};

export const workCases: TainaiWorkCase[] = [
  aheya,
  abAurora,
  relay,
  anderssonBell,
  personaSystems,
  sfti,
  ilysb,
  ariadne,
];

export const workCaseMap = Object.fromEntries(
  workCases.map((item) => [item.slug, item]),
) as Record<string, TainaiWorkCase>;

const selectedOrder = ["ab-aurora", "ab-luna-relay", "andersson-bell", "persona-systems"] as const;
const archiveOrder = ["sfti-cmu", "ilysb", "ariadne-mode-moment"] as const;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
export const archiveCases = archiveOrder.map((slug) => workCaseMap[slug]);
