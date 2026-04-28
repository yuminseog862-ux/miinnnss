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
  eyebrow: "0→1 build / 공개 표면 / 검증 루프",
  oneLiner:
    "AHEYA는 실제 서비스 표면을 만들고 반응을 읽으며 pause 판단까지 남긴 AI-native build 케이스입니다.",
  summary:
    "핵심은 완벽한 제품을 오래 다듬은 것이 아니라, 공개 가능한 표면과 trust boundary를 빠르게 만들고, 반응과 전환을 분리해서 읽고, 약한 방향을 멈출 수 있었던 실행 루프에 있습니다.",
  roles: ["서비스 표면 구현", "AI-assisted build", "trust boundary", "검증 루프"],
  evidence: ["실제 공개 화면", "trust lane", "메시지 실험", "pause 판단"],
  status: "실행 가능한 표면과 stop judgment가 함께 남은 build case",
  year: "2025.03 - present / paused",
  currentStatus: [
    "실제 공개 표면과 trust boundary, signal reading이 함께 남은 0→1 build 케이스입니다.",
    "성공담보다 build -> signal -> pause loop를 읽는 것이 맞습니다.",
  ],
});

const abAurora = adaptCase(tainaiWorkCaseMap["ab-aurora"], {
  eyebrow: "AI workflow / stage orchestration",
  oneLiner:
    "흐릿한 브리프를 direction synthesis, candidate comparison, package gate로 묶은 AI workflow product 케이스입니다.",
  summary:
    "AB_Aurora는 AI 결과물을 예쁘게 뽑는 도구보다, 사용자 입력을 direction으로 해석하고 이후 단계들을 규칙으로 묶은 orchestration case로 읽는 편이 정확합니다.",
  roles: ["workflow 설계", "stage orchestration", "selection rule", "output packaging"],
  evidence: ["direction synthesis", "Top-3 candidate", "selected preview", "package gate"],
  status: "AI workflow를 제품 규칙으로 고정한 build case",
});

const relay = adaptCase(tainaiWorkCaseMap["ab-luna-relay"], {
  eyebrow: "shared state / handoff layer",
  oneLiner:
    "여러 AI 도구에서 나온 상태를 current state, blocker, next action으로 묶어 readable handoff를 만든 협업 도구입니다.",
  summary:
    "Relay의 핵심은 또 하나의 모델이 아니라, 흩어진 AI output을 팀이 바로 이어받을 수 있는 shared-state surface로 만든 점입니다. AI application engineering role과 가장 직접적으로 맞는 케이스 중 하나입니다.",
  roles: ["shared-state framing", "handoff surface", "workflow copy", "pilot 운영"],
  evidence: ["current state", "blocker", "next action", "handoff"],
  status: "초기 pilot이지만 orchestration 방향이 분명한 case",
});

const ilysb = adaptCase(tainaiWorkCaseMap["ilysb"], {
  eyebrow: "빠른 build / direct user signal",
  oneLiner:
    "AI-assisted coding으로 모바일 앱을 빠르게 만들고, 직접 user discomfort signal을 읽어 중단한 실험입니다.",
  summary:
    "ILYSB는 ongoing product라기보다, 빠르게 build하고 직접 사용자 반응을 확인한 뒤 stop decision을 내린 speed case입니다. 완성도보다 실행과 판단을 읽는 것이 맞습니다.",
  roles: ["AI-assisted coding", "mobile prototype", "direct user test", "stop judgment"],
  evidence: ["Expo build", "login flow", "user signal", "stop decision"],
  status: "speed와 stop judgment를 보여주는 build archive",
});

const personaSystems = adaptCase(creativeWorkCaseMap["persona-systems"], {
  section: "핵심 증거",
  eyebrow: "multi-agent persona / internal system",
  oneLiner:
    "AI agent별 역할, 말투, 관계성을 분리해 상호작용 품질을 실험한 내부 multi-agent persona 구조입니다.",
  summary:
    "이 실험에서는 AI agent를 단순 기능 도구가 아니라, 역할과 말투가 다른 협업자로 두고 interaction quality를 확인했습니다. 특정 기술 깊이보다 넓은 AI tool 감각과 system framing을 보여주는 보조 증거입니다.",
  roles: ["agent cast", "persona rule", "tone separation", "internal workflow"],
  evidence: ["persona surface", "역할 차이", "tone structure", "운영 방식"],
  status: "AI interaction quality와 system framing을 보여주는 보조 케이스",
});

const anderssonBell = adaptCase(tainaiWorkCaseMap["andersson-bell"], {
  eyebrow: "multimodal direction / feedback loop",
  oneLiner:
    "이미지 생성, 영상 변환, 피드백 수렴을 연결해 결과물을 압축한 multimodal workflow 케이스입니다.",
  status: "멀티모달 실험과 feedback convergence를 보여주는 archive",
});

const sfti = adaptCase(tainaiWorkCaseMap["sfti-cmu"], {
  eyebrow: "research framing / external writing",
  status: "외부 설명과 영문 구조화를 보강하는 archive",
});

const ariadne = adaptCase(creativeWorkCaseMap["ariadne-mode-moment"], {
  eyebrow: "product logic / IA archive",
  status: "concept product logic과 IA 감각을 보강하는 archive",
});

export const siteTitle = "minnns / 슈퍼센트 AI 애플리케이션 엔지니어 지원 포트폴리오";

export const heroTitleLines = [
  "AI 도구를 바로 서비스와 프로토타입으로 만들고,",
  "약하면 빨리 다시 씁니다.",
] as const;

export const heroContent: HeroContent = {
  eyebrow: "슈퍼센트 AI 애플리케이션 엔지니어 지원용 포트폴리오",
  title: heroTitleLines.join(" "),
  summary:
    "특정 스택 하나에 깊게 잠기기보다, 필요한 기술을 빨리 조합해 실제로 열어볼 수 있는 AI 기반 서비스와 실험 표면을 만드는 쪽에 강점이 있습니다.",
  stageTitle: "AI API, 워크플로우, 제품 표면을 빠르게 연결하는 실행형 엔지니어",
  ctas: [
    { label: "대표 케이스 보기", href: "#flagship", variant: "primary" },
    { label: "핵심 증거 보기", href: "#selected", variant: "secondary" },
  ],
  proofs: [
    "AHEYA에서 실제 공개 서비스 표면과 trust boundary를 만들고 signal을 읽었습니다.",
    "AB_Aurora와 Relay로 AI workflow, stage orchestration, shared-state handoff를 제품으로 정리했습니다.",
    "ILYSB는 AI-assisted coding으로 빠르게 build한 뒤 direct user signal로 stop decision까지 가져갔습니다.",
    "Persona System과 Andersson Bell로 multimodal / multi-agent 감각도 함께 실험했습니다.",
  ],
  signals: [
    { label: "핵심 역할", value: "AI tool을 서비스 표면으로 바꾸는 build engineer" },
    { label: "작업 방식", value: "build fast -> read signal -> rewire" },
    { label: "강점", value: "넓은 기술 감각 / orchestration / 실행 속도" },
  ],
};

export const heroVisual = {
  src: "/work/ab-aurora-presession.webp",
  alt: "AB_Aurora presession workspace screenshot.",
  fit: "contain" as MediaFit,
};

export const recruiterQuickReadContent: RecruiterQuickReadContent = {
  eyebrow: "먼저 보면 좋은 핵심 정리",
  title: "AI를 새 모델보다 실행 가능한 표면과 워크플로우로 다룹니다.",
  summary:
    "AHEYA를 먼저 보고, 그다음 AB_Aurora, Relay, ILYSB, Persona System 순으로 보면 어떤 방식으로 AI application engineering을 해왔는지 빠르게 읽힙니다.",
  orderLabel: "추천 읽기 순서",
  order: ["AHEYA", "AB_Aurora", "Relay", "ILYSB", "Persona System"],
  cards: [
    {
      label: "이 사람은",
      title: "AI 도구를 바로 화면과 흐름으로 연결하는 빌더",
      body: "아이디어를 오래 문서화하기보다, 바로 열어볼 수 있는 표면과 워크플로우를 만들고 판단을 앞당깁니다.",
      accent: "aqua",
    },
    {
      label: "왜 맞는가",
      title: "API, UI, workflow를 묶어 실험 가능한 상태로 만든 기록",
      body: "새 모델 자체보다, 여러 도구를 어떤 규칙과 표면으로 연결해 실제 변화를 만들지에 더 관심이 있습니다.",
      accent: "orange",
    },
    {
      label: "어디를 볼까",
      title: "AB_Aurora와 Relay, ILYSB를 먼저 보면 됩니다.",
      body: "AB_Aurora는 orchestration, Relay는 shared state, ILYSB는 build speed와 stop judgment를 가장 직접적으로 보여줍니다.",
      accent: "indigo",
    },
  ],
};

export const fitMethodContent = {
  eyebrow: "왜 이 역할에 맞는가",
  title: "AI도 결국 조합, 표면, 실행 속도의 문제라고 봅니다.",
  summary:
    "슈퍼센트 JD를 보면 특정 기술 하나보다 AI를 중심으로 다양한 기술을 조합해 빠르게 실험 가능한 프로토타입과 서비스를 만드는 감각을 더 중요하게 본다고 읽었습니다.",
  cards: [
    {
      title: "AI API와 워크플로우를 제품 규칙으로 묶는다",
      accent: "aqua",
      proof: "AB_Aurora / Relay",
      body:
        "모델을 더 붙이는 것보다, 입력 해석, 선택, handoff 같은 중간 규칙을 제품으로 정리하는 데 강점이 있습니다.",
      points: ["orchestration", "stage rule", "handoff"],
    },
    {
      title: "프론트-백-데이터 경계를 거칠게라도 직접 잇는다",
      accent: "orange",
      proof: "AHEYA / ILYSB",
      body:
        "UI만 만드는 것이 아니라, 실제로 열어볼 수 있는 흐름과 데이터 연결까지 포함해 build하는 편입니다.",
      points: ["실제 화면", "flow 연결", "data touch"],
    },
    {
      title: "완벽한 코드보다 실사용 신호를 먼저 본다",
      accent: "indigo",
      proof: "ILYSB / AHEYA pause",
      body:
        "코드의 완벽함보다 조직과 사용자 변화에 닿는 실행을 중시합니다. 약하면 멈추고 바로 다시 쓰는 쪽에 가깝습니다.",
      points: ["direct signal", "stop judgment", "execution"],
    },
    {
      title: "넓은 기술 감각으로 빠르게 조합한다",
      accent: "indigo",
      proof: "Persona System / Andersson Bell",
      body:
        "multi-agent, multimodal, AI-assisted coding처럼 이질적인 도구를 목적에 맞게 엮어보는 감각을 계속 실험해 왔습니다.",
      points: ["multi-agent", "multimodal", "tool blending"],
    },
  ] satisfies FitMethodCard[],
};

export const emotionalEntryContent: EmotionalEntryContent = {
  eyebrow: "AI build surfaces",
  title: "기획 문서보다 먼저 열어볼 수 있는 표면을 만듭니다.",
  summary:
    "실제로 남겨 둔 결과물들을 보면, 이야기만 하는 사람이 아니라 공개 화면, 워크스페이스, shared-state 화면, 빠른 모바일 prototype까지 직접 만들고 확인해 온 흐름이 보입니다.",
  cards: [
    {
      title: "서비스 표면을 먼저 만든다",
      accent: "aqua",
      proof: "AHEYA / ILYSB",
      body:
        "아이디어를 바로 사용자가 눌러볼 수 있는 화면과 플로우로 바꿔야 signal reading이 빨라진다고 생각합니다.",
      points: ["public surface", "prototype flow", "fast build"],
    },
    {
      title: "AI workflow를 규칙으로 묶는다",
      accent: "orange",
      proof: "AB_Aurora / Relay",
      body:
        "모델 호출 자체보다, 그 앞뒤 단계와 selection/handoff contract를 같이 설계합니다.",
      points: ["direction synthesis", "selection", "handoff"],
    },
    {
      title: "멀티모달 결과도 빠르게 시안화한다",
      accent: "indigo",
      proof: "Andersson Bell / prototypes",
      body:
        "필요하면 이미지, 비디오, 캐릭터 톤도 빠르게 시안화해서 실제로 어떤 인상이 나오는지 확인합니다.",
      points: ["image", "video", "first impression"],
    },
  ],
  supportEyebrow: "실제 build surface",
  supportTitle: "실제 화면, 워크스페이스, shared-state surface가 남아 있습니다.",
  supportBody:
    "핵심은 기술 설명보다, 지금 바로 열어볼 수 있는 표면과 워크플로우가 남아 있다는 점입니다. build speed와 orchestration 감각을 동시에 보여주는 자료들입니다.",
  supportPoints: [
    "public-facing service surface",
    "AI workflow workspace",
    "shared-state handoff surface",
  ],
  supportShots: [
    {
      label: "AHEYA entry surface",
      note: "핵심 제안과 진입 흐름을 실제로 열어볼 수 있게 만든 공개 서비스 화면입니다.",
      src: "/aheya/home-hero.webp",
      alt: "AHEYA home hero.",
      fit: "contain",
    },
    {
      label: "AB_Aurora workspace",
      note: "brief, direction synthesis, stage boundary가 한 화면에 모인 orchestration workspace입니다.",
      src: "/work/ab-aurora-presession.webp",
      alt: "AB_Aurora presession workspace.",
      fit: "contain",
    },
    {
      label: "Relay shared state",
      note: "current state, blocker, next action을 readable하게 정리한 shared-state surface입니다.",
      src: "/work/relay-home-open.webp",
      alt: "Relay home open screen.",
      fit: "contain",
    },
  ],
  prototypeEyebrow: "빠른 prototype 예시",
  prototypeTitle: "필요한 결과물은 빠르게 시안으로 확인합니다.",
  prototypeSummary:
    "모바일 flow든 캐릭터/에이전트 톤이든, 실제로 어떤 인상과 사용감이 나오는지 빠르게 확인해 보는 쪽에 가깝습니다.",
  prototypes: [
    {
      label: "ILYSB login flow",
      note: "가벼운 진입 흐름을 빠르게 검증하기 위해 만든 모바일 entry screen입니다.",
      src: "/work/ilysb-login.webp",
      alt: "ILYSB login screen.",
      fit: "contain",
    },
    {
      label: "ILYSB main flow",
      note: "사용자가 실제로 어떤 감정으로 받아들이는지 확인하기 위해 만든 메인 화면입니다.",
      src: "/work/ilysb-main.webp",
      alt: "ILYSB main screen.",
      fit: "contain",
    },
    {
      label: "ILYSB hints",
      note: "온보딩과 상호작용 힌트를 빠르게 붙여 직접 반응을 확인한 화면입니다.",
      src: "/work/ilysb-hints.webp",
      alt: "ILYSB hints screen.",
      fit: "contain",
    },
    {
      label: "Persona system pair",
      note: "에이전트 역할과 톤 차이를 시각적으로도 빠르게 확인해 본 internal system proof입니다.",
      src: "/appendix/bluegarage/persona/openclaw-k-pair.webp",
      alt: "OpenClaw and AHEYA K paired persona image.",
      fit: "contain",
    },
  ],
  note:
    "핵심은 한 기술의 완성도보다, 필요한 표면과 프로토타입을 빨리 만들어 signal을 앞당기는 방식입니다.",
};

export const flagshipIntro = {
  eyebrow: "대표 케이스",
  title: "AHEYA",
  oneLiner:
    "AHEYA는 실제 서비스 표면을 만들고 반응을 읽으며 pause 판단까지 남긴 AI-native build 케이스입니다.",
  summary:
    "이 케이스를 먼저 보는 이유는, public surface, trust boundary, signal reading, pause decision이 한 흐름 안에 같이 남아 있기 때문입니다. 기술 과시보다 build loop를 읽는 편이 정확합니다.",
  ctaLabel: "AHEYA 상세 보기",
  ctaHref: "/supercent/work/aheya",
  statusLabel: "이 케이스를 먼저 보는 이유",
  statusValue: "실행 가능한 표면, 검증 루프, stop judgment가 함께 남아 있는 첫 번째 build proof입니다.",
};

export const domainFitContent: DomainFitContent = {
  eyebrow: "Why Supercent / AI Build Fit",
  title: "AI를 기능이 아니라 실행 레이어로 봅니다.",
  summary:
    "새 모델이 나올 때마다 모델 이름을 외우는 것보다, 지금 무엇을 빠르게 실험하고 팀과 사용자 변화를 만들 수 있는지가 더 중요하다고 생각합니다.",
  works: ["API 조합", "shared state", "빠른 prototype"],
  observations: [
    {
      title: "problem-first",
      body: "어떤 모델을 쓸지보다, 어떤 문제를 가장 빨리 풀 수 있는지가 먼저라고 봅니다.",
    },
    {
      title: "broad stack literacy",
      body: "프론트, 백, 데이터, 배포, AI API를 넓게 이해하고 필요한 만큼 빠르게 이어붙이는 편입니다.",
    },
    {
      title: "signal over polish",
      body: "완벽한 코드보다 조직과 사용자가 실제로 변화를 체감하는지를 더 중요하게 둡니다.",
    },
  ],
  translationLabel: "슈퍼센트에 맞춰 말하면",
  translationBody:
    "AI 프로덕트 기획자와 같이 전략을 기술로 옮기고, API/프롬프트/UI/워크플로우를 빠르게 묶어 실험 가능한 surface를 만드는 방식으로 기여할 수 있습니다.",
  note: "완벽한 아키텍처보다 먼저 실행 가능한 프로토타입을 만들고 판단을 앞당기는 쪽에 가깝습니다.",
};

export const operatingLoopContent: OperatingLoopContent = {
  eyebrow: "Operating loop",
  title: "빠르게 만들고, 신호를 읽고, 구조를 다시 씁니다.",
  summary:
    "제가 반복해 온 루프는 단순합니다. build 가능한 상태로 만들고, engagement와 adoption을 분리해서 읽고, 약하면 바로 다시 씁니다.",
  process: ["빠르게 만든다", "신호를 읽는다", "다시 짜거나 멈춘다"],
  chips: ["AI-assisted build", "orchestration", "shared state", "direct signal", "stop judgment", "multimodal"],
  memos: [
    {
      title: "문서를 오래 끌지 않는다",
      body: "바로 열어볼 수 있는 화면과 워크플로우를 먼저 만들어 판단 비용을 낮춥니다.",
    },
    {
      title: "engagement와 adoption을 분리한다",
      body: "반응이 있다는 사실과 실제 사용으로 이어진다는 사실을 섞지 않고 따로 읽습니다.",
    },
    {
      title: "AI workflow를 규칙으로 묶는다",
      body: "모델 호출보다 앞뒤 단계와 handoff contract를 정리해 팀이 쓸 수 있는 도구로 만듭니다.",
    },
    {
      title: "약하면 미련 없이 정리한다",
      body: "되기 어려운 방향을 억지로 포장하지 않고, stop과 pause도 결과로 남깁니다.",
    },
  ],
};

export const footerContent = {
  line: "AI 도구를 실행 가능한 표면과 워크플로우로 바꿉니다.",
  meta: "AHEYA / AB_Aurora / Relay / ILYSB / Persona System / Andersson Bell",
};

export const workCases: TainaiWorkCase[] = [
  aheya,
  abAurora,
  relay,
  ilysb,
  personaSystems,
  anderssonBell,
  sfti,
  ariadne,
];

export const workCaseMap = Object.fromEntries(
  workCases.map((item) => [item.slug, item]),
) as Record<string, TainaiWorkCase>;

const selectedOrder = ["ab-aurora", "ab-luna-relay", "ilysb", "persona-systems"] as const;
const archiveOrder = ["andersson-bell", "sfti-cmu", "ariadne-mode-moment"] as const;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
export const archiveCases = archiveOrder.map((slug) => workCaseMap[slug]);
