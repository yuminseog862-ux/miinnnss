import type {
  Accent,
  DetailMediaSection,
  FlagshipFeature,
  FlagshipPlate,
  HeroContent,
  WorkCase,
} from "@/data/portfolio";

export type FitMethodCard = {
  title: string;
  proof: string;
  body: string;
  points: string[];
  accent: Accent;
};

export const siteTitle = "minnns creative planning";

export const heroContent: HeroContent = {
  eyebrow: "AI Artist / Creative Planning",
  title: "캐릭터와 세계관을 더 빠르게 읽히는\n구조로 설계합니다.",
  summary:
    "저는 정체성과 감정을 캐릭터, 상징, 비주얼 콘셉트로 번역하고, 그것이 공개 채널과 결과물까지 자연스럽게 이어지도록 기획해왔습니다. 브랜드 협업형 AI 숏폼, 세계관 기반 서비스 마케팅, 영문 초록과 포스터 구조화 경험을 통해 캐릭터·비주얼·서사를 하나의 인상 구조로 연결하는 일에 집중해왔습니다.",
  stageTitle: "정체성과 감정을 캐릭터·비주얼·서사로 번역하는 AI 크리에이티브 기획자",
  ctas: [
    { label: "대표 작업 보기", href: "#flagship", variant: "primary" },
    { label: "전체 포트폴리오 보기", href: "#selected", variant: "secondary" },
  ],
  proofs: [
    "브랜드 협업형 AI 비주얼 작업에서 실무 피드백을 반영한 경험",
    "서비스 유입을 위해 캐릭터 세계관과 공개 채널 콘텐츠를 함께 기획한 경험",
    "영문 초록과 포스터로 브랜드 해석을 외부 문서화한 경험",
  ],
  signals: [],
};

export const fitMethodContent = {
  eyebrow: "Core Axes",
  title: "작업을 구성하는 네 가지 축",
  summary: "지금까지 반복해온 작업을 네 방향으로 정리했습니다.",
  cards: [
    {
      title: "Identity / Worldbuilding",
      proof: "AHEYA",
      body:
        "브랜드와 서비스가 처음 보는 사람에게 어떻게 읽히는지부터 정리하고, 캐릭터와 세계관을 통해 그 인상이 더 오래 남도록 설계합니다.",
      points: ["정체성 해석", "세계관 구조화", "상징 모티프 연결"],
      accent: "aqua",
    },
    {
      title: "Character / Persona Planning",
      proof: "Persona / Agent System",
      body: "캐릭터를 단순한 외형이 아니라 성격, 관계, 말투, 감정선까지 포함한 구조로 보고 기획합니다.",
      points: ["캐릭터 설정", "관계성 설계", "페르소나 방향"],
      accent: "orange",
    },
    {
      title: "Visual Concept / Moodboard",
      proof: "Andersson Bell",
      body:
        "무드보드와 레퍼런스 리서치를 바탕으로 비주얼 콘셉트를 좁히고, AI 이미지·영상 실험을 통해 결과물 방향을 구체화합니다.",
      points: ["무드보드", "레퍼런스 리서치", "이미지·영상 실험"],
      accent: "indigo",
    },
    {
      title: "English Writing / Research Framing",
      proof: "SFTI-CMU",
      body: "브랜드 해석과 아이디어를 영어 문서와 포스터 구조로 정리해 외부 제출 가능한 형태로 만드는 경험이 있습니다.",
      points: ["영문 초록 작성", "포스터 구조화", "외부 제출 문서"],
      accent: "indigo",
    },
  ] satisfies FitMethodCard[],
};

export const flagshipIntro = {
  eyebrow: "Product / Identity / Character Planning",
  title: "AHEYA",
  oneLiner:
    "AHEYABARAYA의 초기 유입을 만들기 위해 캐릭터 세계관과 공개 채널 콘텐츠를 함께 기획한 프로젝트",
  summary:
    "AHEYABARAYA는 초기 프로젝트 홍보와 참여 유도를 돕기 위해 실험 중인 Web3 서비스·콘텐츠 구조입니다. 서비스 소개만으로는 반응을 얻기 어려운 상황에서, 캐릭터들과 세계관을 활용한 공개 채널 콘텐츠를 통해 유입과 관심을 만들기 위한 실험을 함께 진행했습니다.",
  ctaLabel: "상세 보기",
  ctaHref: "/creative/work/aheya",
  statusLabel: "핵심 증거",
  statusValue: "서비스 운영 / 세계관 시리즈 / 공개 채널 실험 / 캐릭터 관계 구조",
};

export const flagshipFeature: FlagshipFeature = {
  label: "대표 캐릭터 이미지",
  title: "첫인상을 만드는 메인 캐릭터",
  body:
    "메인 캐릭터는 서비스 설명만으로 부족한 첫인상을 보완하며, AHEYA가 어떤 분위기의 프로젝트인지 먼저 읽히게 만듭니다.",
  media: {
    src: "/appendix/bluegarage/kumiho_main.webp",
    alt: "AHEYA kumiho main visual used as the emotional front door.",
    fit: "contain",
  },
  badge: {
    src: "/aheya/logo.webp",
    alt: "AHEYA app logo.",
  },
};

export const flagshipPlates: FlagshipPlate[] = [
  {
    title: "서비스 화면",
    body: "홈 화면은 AHEYABARAYA의 핵심 제안과 첫 참여 동선을 함께 보여줍니다.",
    accent: "aqua",
    media: {
      src: "/aheya/home-hero.webp",
      alt: "AHEYA homepage hero showing the core offer and rail.",
      fit: "contain",
    },
  },
  {
    title: "공개 채널 문구",
    body: "서비스를 바로 설명하기 어려운 구간을 보완하기 위해, 공개 채널용 문구와 캐릭터 포스팅 구조를 함께 다듬었습니다.",
    accent: "orange",
    media: {
      src: "/aheya/creator.webp",
      alt: "AHEYA supporting identity visual used across public-facing surfaces.",
      fit: "contain",
    },
  },
  {
    title: "캐릭터 구조",
    body: "메인 캐릭터와 연결 캐릭터를 함께 두어, 서비스 설명을 세계관과 관계성으로 확장할 수 있게 했습니다.",
    accent: "indigo",
    media: {
      src: "/aheya/kumiho.webp",
      alt: "AHEYA kumiho identity visual.",
      fit: "contain",
    },
  },
  {
    title: "신뢰 구조",
    body: "서비스 이해를 돕는 화면과 신뢰를 설명하는 화면을 분리해, 첫인상과 정보 전달이 섞이지 않도록 했습니다.",
    accent: "aqua",
    media: {
      src: "/aheya/lane-panels.webp",
      alt: "AHEYA homepage structure showing separated trust and support lanes.",
      fit: "contain",
    },
  },
];

export const footerContent = {
  line: "Creative portfolio. 캐릭터, 세계관, 비주얼 콘셉트, 영문 문서화를 한 구조 안에서 보여줍니다.",
  meta: "",
};

export const workCases: WorkCase[] = [
  {
    slug: "aheya",
    section: "Flagship",
    eyebrow: "Creative Hook System / AHEYABARAYA",
    title: "AHEYABARAYA Creative Hook System",
    oneLiner:
      "브랜드의 첫인상을 캐릭터, 장면, 짧은 문장으로 압축해 X 카피와 숏폼 후보의 진입점으로 설계한 프로젝트",
    summary:
      "AHEYABARAYA는 AI/크립토 빌더와 Web3 커뮤니티 유저가 복잡한 제품 설명을 지나치지 않도록, 캐릭터와 영상을 X 카피의 시각적 진입점으로 사용한 콘텐츠 실험입니다. 이미지와 영상은 문제 공감 자체를 만드는 장치가 아니라, 피드에서 먼저 멈추게 한 뒤 문제 정의와 카피를 읽게 만드는 역할로 설계했습니다.",
    roles: ["광고 훅 기획", "캐릭터 세계관", "X 카피 구조", "AI 이미지/숏폼 후보", "표현 방향 조정"],
    evidence: ["타깃/목적 정의", "구미호 대표 훅", "캐릭터 시스템", "X 카피 진입점", "학습/다음 브리프"],
    status: "진행 중인 브랜드 채널 / 콘텐츠 기획 실험",
    tier: "flagship",
    accent: "aqua",
    year: "2025 - present",
    externalLinks: [
      {
        label: "AHEYA Site",
        href: "https://aheyabaraya.xyz/",
        kind: "site",
        accent: "aqua",
      },
      {
        label: "AHEYA Trust API",
        href: "https://aheyabaraya.xyz/trust/whitelist",
        kind: "trust",
        accent: "orange",
      },
      {
        label: "X Account",
        href: "https://x.com/aheya_baraya?s=21",
        kind: "x",
        accent: "indigo",
      },
      {
        label: "GitHub Evidence",
        href: "https://github.com/aheyabaraya/aheya-public-evidence",
        kind: "github",
        accent: "aqua",
      },
    ],
    detailLeadLayout: "grid",
    detailLeadSection: {
      eyebrow: "대표 훅과 캐릭터 시스템",
      title: "구미호를 대표 훅으로 세우고, K / Becca / Aurora / Yeon으로 확장",
      summary:
        "구미호는 한눈에 남는 대표 훅으로, 다른 캐릭터들은 세계관·관계·감정선을 확장하는 광고 소재 후보군으로 정리했습니다.",
    },
    coverImage: {
      src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
      alt: "AHEYABARAYA blue Kumiho character hook.",
      fit: "contain",
    },
    detailHeroProof: {
      label: "Blue Kumiho",
      note: "신화성, 한국적 상징, AI-native한 푸른 에너지를 한눈에 압축한 대표 시각 훅입니다.",
      src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
      alt: "AHEYABARAYA blue Kumiho character hook.",
      fit: "contain",
    },
    detailHeroSummaryLines: [
      "AHEYABARAYA / AI 빌더, Web3 유저, 에이전트·AI 툴 관심자를 위한 브랜드 채널 실험",
      "타깃과 광고 목적을 먼저 잡고, 캐릭터·장면·짧은 문장을 X 카피와 숏폼 후보의 진입점으로 전환",
      "시각 훅은 주목을 만들고, 문제 인식은 카피와 CTA에서 만들어져야 한다는 학습으로 정리",
    ],
    detailHeroHighlights: [
      {
        title: "Target / Objective",
        body: "AI/크립토 빌더, 초기 제품 창업자, Web3 커뮤니티 유저, 에이전트·AI 툴 관심자가 X 피드에서 멈추고 문제 인식을 담은 카피까지 읽도록 만드는 것이 목적이었습니다.",
        accent: "orange",
        items: ["제품은 만들었지만 첫 유저 반응을 얻기 어려움", "피드백이 얕고 브랜드 첫인상이 약함", "Web3 설명이 복잡해 빠르게 지나침"],
      },
      {
        title: "Creative Decision",
        body: "구미호를 대표 훅으로 세운 뒤, K / Becca / Aurora / Yeon 등 캐릭터 자산을 확장했습니다. 대표 훅은 기억되는 첫인상, 확장 캐릭터는 세계관과 감정선의 후보군입니다.",
        accent: "indigo",
        items: [
          "신화성, 한국적 상징, AI-native한 푸른 에너지",
          "해외 타깃에게도 낯설지만 이해 가능한 선명한 첫인상",
          "이미지와 영상은 카피를 읽게 하는 시각적 진입점",
        ],
      },
      {
        title: "Learning",
        body: "구미호와 영상은 시각 훅으로 가능성이 있었지만, 반응은 제품 문제 공감보다 AI 이미지/영상 제작 관심층에 가까웠습니다. 그래서 주목 장치와 문제 인식 장치를 분리했습니다.",
        accent: "aqua",
        items: [
          "시각 훅: 피드에서 멈추게 하는 첫 장면",
          "카피 장치: 타깃 문제를 직접 건드리는 짧은 문장",
          "다음 브리프: 캐릭터 훅은 유지하고 문제 카피를 더 선명하게 테스트",
        ],
      },
    ],
    galleryColumns: 4,
    overview: [
      "AHEYABARAYA는 AI/크립토 빌더와 Web3 커뮤니티 유저가 복잡한 제품 설명을 지나치지 않도록, 캐릭터와 영상을 X 카피의 시각적 진입점으로 사용한 콘텐츠 실험입니다.",
      "이미지나 영상 자체가 문제 공감을 만든다고 보지 않았습니다. 먼저 멈추게 만드는 시각 훅과, 타깃 문제를 읽게 만드는 카피 장치를 분리해 설계했습니다.",
    ],
    whatIDid: [
      "AI/크립토 빌더, 초기 제품 창업자, Web3 커뮤니티 유저, 에이전트·AI 툴 관심자를 1차 타깃으로 잡았습니다.",
      "제품을 만들었지만 첫 유저 반응을 얻기 어렵고, 피드백이 얕고, 브랜드 첫인상이 약한 문제를 X 카피의 출발점으로 잡았습니다.",
      "구미호를 대표 시각 훅으로 세우고, K / Becca / Aurora / Yeon 등 캐릭터 자산을 세계관과 감정선의 후보군으로 확장했습니다.",
      "이미지와 영상은 문제 공감 자체가 아니라, X 피드에서 멈추고 카피를 읽게 만드는 진입점으로 사용했습니다.",
      "관찰한 반응을 보고 시각 훅과 문제 메시지 정합성을 분리해 다음 소재 브리프를 다시 잡았습니다.",
    ],
    whatExists: [
      "AHEYABARAYA 공개 페이지와 브랜드 채널.",
      "구미호, K, Tiger, Becca, Aurora, Yeon 등 캐릭터 기반 시각 훅 자산.",
      "X 카피와 함께 붙일 이미지/영상 후보.",
      "문제 훅, 캐릭터 훅, 피드백 훅, 유틸리티 훅으로 나눈 소재 후보 구조.",
      "시각 훅과 문제 메시지 정합성을 분리한 다음 브리프.",
    ],
    keyDecisions: [
      "기능 설명보다 타깃 문제를 먼저 건드리는 X 훅을 우선했습니다.",
      "대표 훅은 구미호 하나로 강하게 세우고, 나머지 캐릭터는 확장 시스템으로 배치했습니다.",
      "이미지/영상은 시각적 진입점, 카피는 문제 인식 장치로 분리했습니다.",
      "반응이 AI 이미지/영상 제작 관심층으로 기운 지점을 숨기지 않고, 다음 테스트에서 문제 카피를 더 직접적으로 좁히는 판단으로 정리했습니다.",
    ],
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "Kumiho",
        note: "신비감, 강렬함, 푸른 에너지, 한국적 상징을 한 장면으로 압축한 대표 시각 훅입니다.",
        src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
        alt: "AHEYABARAYA blue Kumiho character hook.",
        fit: "contain",
        position: "center center",
      },
      {
        label: "K",
        note: "대표 훅 이후 브랜드의 얼굴과 성격을 더 구체적으로 읽히게 하는 캐릭터 자산입니다.",
        src: "/appendix/bluegarage/aheya/k.webp",
        alt: "AHEYA Baraya K character visual.",
        fit: "cover",
        position: "center center",
      },
      {
        label: "Becca",
        note: "관계성과 감정선을 확장해 캐릭터 시스템이 단일 이미지에서 끝나지 않게 만드는 연결 캐릭터입니다.",
        src: "/appendix/bluegarage/aheya/becca.webp",
        alt: "AHEYA Becca character image.",
        fit: "cover",
        position: "center center",
      },
      {
        label: "Aurora",
        note: "세계관의 톤과 AI-native한 분위기를 더 강하게 밀어주는 확장 캐릭터입니다.",
        src: "/appendix/bluegarage/aheya/aurora.webp",
        alt: "AHEYA Aurora character image.",
        fit: "cover",
        position: "center center",
      },
      {
        label: "Yeon",
        note: "trust lane과 연결되는 차갑고 신뢰 중심의 분위기를 담당하는 캐릭터입니다.",
        src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
        alt: "AHEYA trust Yean character still image.",
        fit: "contain",
        position: "center center",
      },
    ],
    detailMediaSections: [
      {
        eyebrow: "기획 의도",
        title: "타깃과 광고 목적을 먼저 잡고 시각 훅과 카피 장치를 분리",
        summary:
          "이 실험은 AI 이미지 제작 자체가 아니라, X 피드에서 멈추게 한 뒤 문제 카피를 읽게 만드는 광고 소재 후보 구조를 잡는 작업이었습니다.",
        columns: 4,
        layout: "grid",
        items: [
          {
            label: "Target",
            note: "AI/크립토 빌더, 초기 제품 창업자, Web3 커뮤니티 유저, 에이전트·AI 툴 관심자를 1차 타깃으로 잡았습니다.",
          },
          {
            label: "Problem",
            note: "제품은 만들었지만 첫 유저 반응을 얻기 어렵고, 피드백이 얕고, 브랜드 첫인상이 약하며, Web3 설명이 복잡하다고 봤습니다.",
          },
          {
            label: "Visual Hook",
            note: "구미호와 캐릭터 영상은 문제 공감 자체가 아니라, X 피드에서 멈추고 카피를 읽게 만드는 첫 장면입니다.",
          },
          {
            label: "Copy Layer",
            note: "공감은 이미지가 아니라 'Building got faster. Marketing didn’t.' 같은 짧은 문제 문장과 CTA에서 만들어져야 한다고 판단했습니다.",
          },
        ],
      },
      {
        eyebrow: "서비스 화면과 카피 진입점",
        title: "제품 설명을 앞세우기보다 캐릭터와 한 문장으로 진입하게 한 화면",
        summary:
          "복잡한 Web3/AI-native 제품 설명을 길게 제시하기보다, 캐릭터 첫인상과 짧은 문제 카피를 먼저 보여주는 방향으로 정리했습니다.",
        columns: 3,
        layout: "grid",
        items: [
          {
            label: "AHEYABARAYA intro surface",
            note: "제품이 무엇인지 길게 설명하기 전에, 첫 화면에서 대상과 문제 분위기를 빠르게 읽히게 한 소개 화면입니다.",
            src: "/aheya/aheyabaraya-homepage-2026-04-28.png",
            alt: "AHEYABARAYA homepage intro surface.",
            fit: "contain",
            position: "center center",
            href: "https://aheyabaraya.xyz/",
            hrefLabel: "AHEYABARAYA Site 보기",
          },
          {
            label: "K x home copy",
            note: "캐릭터와 홈 카피를 함께 두어 시각 훅이 카피를 읽게 하는 진입점으로 작동하도록 만든 페어입니다.",
            src: "/aheyabaraya/evidence/k-home-pair.webp",
            alt: "AHEYABARAYA K character and home copy pair.",
            fit: "contain",
            position: "center center",
            href: "https://aheyabaraya.xyz/",
            hrefLabel: "Site 보기",
          },
          {
            label: "Yeon x trust lane",
            note: "세계관의 감정 훅과 신뢰 구조가 분리되어 읽히도록, Yeon을 trust lane의 시각 자산으로 사용했습니다.",
            src: "/aheyabaraya/evidence/yeon-lane-pair.webp",
            alt: "AHEYABARAYA Yeon trust lane pair.",
            fit: "contain",
            position: "center center",
            href: "https://aheyabaraya.xyz/trust/whitelist",
            hrefLabel: "Trust API 보기",
          },
        ],
      },
      {
        eyebrow: "Visual Hook Assets",
        title: "정지 이미지에서 끝내지 않고 X 피드용 숏폼 후보로 확장",
        summary:
          "정지 이미지는 빠르게 지나칠 수 있지만, 영상은 장면과 움직임까지 함께 설계할 수 있습니다. 첫 1-3초에 신비감과 호기심을 만들 수 있는지 보기 위해 숏폼 후보로 확장했습니다.",
        columns: 3,
        layout: "grid",
        items: [
          {
            label: "AHEYABARAYA motion surface",
            note: "브랜드의 신비로운 첫인상과 서비스 톤이 일관된 인상으로 읽히도록 만든 영상 후보입니다.",
            src: "/appendix/bluegarage/aheya_vid.MP4",
            alt: "AHEYA service motion surface experiment.",
            type: "video",
            poster: "/appendix/bluegarage/aheya/aheya-motion-poster.webp",
            autoPlay: true,
            muted: true,
            loop: true,
            showControls: false,
            displaySize: "compact",
          },
          {
            label: "Kumiho motion hook",
            note: "구미호를 대표 훅으로 선택한 이유를 직접적으로 보여주는 영상 후보입니다. 익숙한 신화적 상징을 AI-native한 푸른 에너지로 전환했습니다.",
            src: "/appendix/bluegarage/kumiho_vid.MP4",
            alt: "AHEYA kumiho short-form experiment.",
            type: "video",
            poster: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
            autoPlay: true,
            muted: true,
            loop: true,
            showControls: false,
            displaySize: "compact",
            href: "https://x.com/minnns_aheya/status/2034643089806217398?s=46",
            hrefLabel: "Kumiho 포스트 보기",
          },
          {
            label: "Tiger short-form hook",
            note: "구미호 외에도 강한 동물 상징과 움직임이 X 피드에서 첫 장면으로 읽히는지 보기 위한 확장 후보입니다.",
            src: "/appendix/bluegarage/aheya/tiger_vid.MP4",
            alt: "AHEYABARAYA tiger short-form experiment.",
            type: "video",
            poster: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
            autoPlay: true,
            muted: true,
            loop: true,
            showControls: false,
            displaySize: "compact",
          },
        ],
      },
      {
        eyebrow: "Hook Variants",
        title: "문제 훅, 캐릭터 훅, 피드백 훅, 유틸리티 훅으로 소재 후보를 분리",
        summary:
          "AHEYABARAYA의 메시지를 하나의 설명문으로 처리하지 않고, 타깃이 피드에서 멈추고 읽을 수 있는 훅 단위로 나눴습니다.",
        columns: 4,
        layout: "grid",
        items: [
          {
            label: "Problem Hook",
            note: "Building got faster. Marketing didn’t. AI로 제품 제작은 빨라졌지만 첫 유저 반응과 마케팅은 여전히 막힌다는 문제에서 나온 카피입니다.",
          },
          {
            label: "Character Hook",
            note: "Kumiho / Tiger scene. 기능 설명보다 먼저 기억나는 얼굴과 장면을 세워 X 피드에서 멈추게 하는 훅입니다.",
          },
          {
            label: "Feedback Hook",
            note: "polite feedback haze. 첫 유저 반응은 있는데 피드백이 얕아 다음 배포에 쓰기 어렵다는 문제를 제기하는 훅입니다.",
          },
          {
            label: "Utility Hook",
            note: "real utility on-chain. Web3 설명을 보상/퀘스트가 아니라 실제 사용과 참여 메시지로 좁혀보려는 훅입니다.",
          },
        ],
      },
      {
        eyebrow: "Learning / Next Brief",
        title: "시각 훅은 가능성이 있었지만 문제 메시지는 더 선명하게 좁혀야 함",
        summary:
          "시각적으로 완성도 높은 AI 이미지/영상에 대한 반응과 AHEYABARAYA 문제에 대한 공감은 다릅니다. 이 차이를 인정하고 다음 테스트를 더 좁히는 것이 핵심 학습입니다.",
        columns: 3,
        layout: "grid",
        items: [
          {
            label: "Observed",
            note: "구미호와 영상은 피드에서 멈추게 하는 시각 훅으로 가능성이 있었지만, 반응은 제품 문제 공감보다 AI 이미지/영상 제작 관심층에 가까웠습니다.",
          },
          {
            label: "Decision",
            note: "캐릭터는 주목 장치, 카피는 문제 인식 장치로 분리했습니다. 완성도 높은 이미지가 곧 좋은 광고 메시지는 아니라고 판단했습니다.",
          },
          {
            label: "Next Creative Brief",
            note: "캐릭터 훅은 유지하되 AI/크립토 빌더의 첫 유저·피드백 문제를 더 직접적으로 건드리는 카피와 CTA를 함께 테스트해야 합니다.",
          },
        ],
      },
      {
        eyebrow: "공개 채널 실험",
        title: "세계관, 캐릭터, 감정, 첫 훅을 확장한 공개 채널 후보군",
        summary:
          "구미호 이후 여러 캐릭터를 만든 이유는 세계관 확장을 보여주기 위해서만이 아니라, 어떤 상징과 감정선이 첫 훅 후보가 될 수 있는지 보기 위해서였습니다.",
        columns: 4,
        layout: "grid",
        items: [
          {
            label: "Zeus 공개 채널 실험",
            note: "Zeus 모티프의 직접적이고 강한 상징성이 공개 채널에서 어떻게 첫 훅으로 읽히는지 보기 위한 실험입니다.",
            src: "/appendix/bluegarage/zeus_vid.MP4",
            alt: "AHEYA Zeus public-channel experiment.",
            type: "video",
            poster: "/appendix/bluegarage/zeus_img.webp",
            displaySize: "compact",
          },
          {
            label: "Hephaestus",
            note: "무거운 재질감과 제작자적 분위기가 얼마나 빠르게 읽히는지 본 공개 채널 실험입니다.",
            src: "/appendix/bluegarage/hephaestus_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/hepaitos_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
            href: "https://x.com/minnns_aheya/status/2043014685545631843?s=46",
            hrefLabel: "Hephaestus 포스트 보기",
          },
          {
            label: "Horus",
            note: "보다 선명한 상징성과 첫인상을 확인하기 위한 이집트 계열 변주입니다.",
            src: "/appendix/bluegarage/horus_vid_1_5x.MP4",
            type: "video",
            poster: "/appendix/bluegarage/horus_img.webp",
            posterMode: "after-end",
            displaySize: "compact",
          },
          {
            label: "Ares",
            note: "강한 에너지와 더 날카로운 움직임이 첫인상에 어떤 차이를 만드는지 본 변주입니다.",
            src: "/appendix/bluegarage/ares_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/ares_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
            href: "https://x.com/minnns_aheya/status/2042937122060222498?s=46",
            hrefLabel: "Ares 포스트 보기",
          },
          {
            label: "Artemis",
            note: "보다 날렵하고 긴장감 있는 분위기가 공개 채널에서 어떻게 읽히는지 보기 위한 변주입니다.",
            src: "/appendix/bluegarage/artemis_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/artemis_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
          },
          {
            label: "Dionysus",
            note: "보다 몽환적이고 강한 분위기가 첫인상 훅으로 얼마나 작동하는지 본 실험입니다.",
            src: "/appendix/bluegarage/dionysus_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/dionysus_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
          },
          {
            label: "Athena",
            note: "차갑고 지적인 권위를 더한 변주가 공개 채널에서 어떻게 인지되는지 확인한 실험입니다.",
            src: "/appendix/bluegarage/athena_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/athena_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
          },
          {
            label: "Ra",
            note: "태양성과 상징 밀도를 더한 이집트 계열 변주가 얼마나 선명하게 읽히는지 확인한 실험입니다.",
            src: "/appendix/bluegarage/ra_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/ra_vid_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
          },
        ],
      },
    ] satisfies DetailMediaSection[],
    hideAppendixSlide: true,
    currentStatus: [
      "광고 목적과 타깃을 먼저 잡고 캐릭터/장면/짧은 문장으로 전환한 케이스",
      "이미지와 영상은 X 카피를 읽게 하는 시각적 진입점으로 사용",
      "시각 훅과 문제 메시지 정합성을 분리해 다음 소재 브리프를 잡은 학습",
    ],
  },
  {
    slug: "andersson-bell",
    section: "Selected Work",
    eyebrow: "Brand short-form / Visual Concept",
    title: "Andersson Bell",
    oneLiner:
      "생성형 AI 기반 브랜드 숏폼을 기획·제작하며, 실무 피드백을 바탕으로 브랜드 톤에 맞는 방향으로 좁혀간 산학협력 프로젝트",
    summary:
      "이 프로젝트는 AI 이미지를 만드는 데서 끝나지 않고, Andersson Bell의 톤과 장면 흐름에 맞는 방향을 찾고 이를 광고 자산 후보로 읽히는 고정 앵글 숏폼 흐름으로 정리한 과정이었습니다.",
    roles: [
      "콘셉트 기획",
      "훅 / 모티프 설계",
      "프롬프트 설계",
      "실무 피드백 반영",
    ],
    evidence: ["무드보드", "레퍼런스 보드", "스토리보드", "최종 숏폼"],
    status: "산학협력 프로젝트 / 숏폼 완료",
    tier: "selected",
    accent: "orange",
    year: "2025",
    externalLinks: [
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
        kind: "instagram",
        accent: "orange",
      },
    ],
    detailLeadLayout: "stack",
    detailHeroHighlightsPosition: "lead",
    detailLeadSection: {
      eyebrow: "최종 숏폼",
      title: "브랜드 톤과 장면 흐름이 약 15초 숏폼으로 수렴된 결과",
      summary:
        "브랜드 톤에 맞는 방향만 남기고 정리한 최종 숏폼입니다.",
    },
    coverImage: {
      src: "/work/andersson-bell-cover.webp",
      alt: "A generated Andersson Bell visual showing a stylized crosswalk and product atmosphere.",
    },
    detailHeroProof: {
      label: "최종 숏폼 메인 컷",
      note: "강아지와 쇼핑백을 든 인물이 함께 보이는 메인 컷으로, 브랜드 톤과 장면 흐름이 가장 직관적으로 읽히는 이미지입니다.",
      src: "/work/andersson-bell-cover.webp",
      alt: "Andersson Bell main image with dog and shopping bag.",
    },
    detailHeroHighlights: [
      {
        title: "What I did",
        body: "기획과 프롬프트 설계를 맡아 훅, 모티프, 장면 흐름을 정리했습니다.",
        accent: "aqua",
        items: [
          "3인 팀 내 기획·프롬프트 설계 담당",
          "브랜드 리서치 기반 훅·모티프 정리",
          "이미지-영상 제작 흐름 구축",
        ],
      },
      {
        title: "What changed",
        body: "콜라주 중심의 방향은 시선이 분산되고 감정 흐름이 약해 완성도가 낮게 읽힐 수 있다고 판단했습니다. 그래서 고정 앵글 중심 15초 흐름으로 좁혀 브랜드 무드를 선명하게 만들었습니다.",
        accent: "indigo",
        items: [
          "콜라주식 시선 분산 정리",
          "고정 앵글 중심 15초 흐름",
          "한 장면의 감정과 브랜드 무드 유지",
        ],
      },
      {
        title: "Ad Asset Logic",
        body: "여러 장면을 빠르게 나열하는 것보다, 첫 1-3초에 장면과 감정이 읽히고 끝까지 같은 무드가 유지되는 쪽을 숏폼 광고 후보로 판단했습니다.",
        accent: "orange",
        items: ["첫 1-3초 장면 훅", "감정 흐름 유지", "피드백 기반 수정"],
      },
    ],
    overview: [
      "브랜드 톤에 맞는 훅과 장면 흐름을 찾고, 그것을 반복 가능한 스토리보드와 이미지·영상 구조로 정리해간 프로젝트였습니다.",
      "초기에는 콜라주 중심의 방향도 시도했지만, 완성도가 낮게 읽히고 감정 흐름이 약하다는 피드백을 반영해 고정 앵글 15초 흐름으로 좁혀갔습니다.",
    ],
    whatIDid: [
      "3인 팀 프로젝트에서 브랜드 숏폼의 주요 기획 및 이미지·영상 프롬프트 설계 담당",
      "브랜드 리서치와 실무진 피드백을 바탕으로 초기 훅, 모티프, 장면 구조, 무드보드 방향성 기획",
      "분산된 시각 방향과 콜라주식 장면 구성을 정리하고, 고정 앵글 중심의 스토리보드와 컷 시퀀스로 재구성해 약 15초 분량의 숏폼 완성",
      "Midjourney, Nano Banana, Kling, Photoshop을 활용해 이미지 시안 제작, 동작 보정, 영상화 진행",
    ],
    whatExists: [
      "프로세스 보드와 레퍼런스 정리 자료.",
      "장면 흐름과 스토리보드 방향을 보여주는 시안.",
      "최종 숏폼과 비주얼 시안 비교 자료.",
    ],
    keyDecisions: [
      "이미지의 장식성보다 브랜드 톤에 맞는 훅과 모티프를 우선했습니다.",
      "콜라주식 귀여움은 시선 분산과 낮은 완성도로 읽힐 수 있어 정리했습니다.",
      "첫 1-3초에 장면과 감정이 읽히고 끝까지 같은 무드가 유지되는 고정 앵글 흐름만 남겼습니다.",
      "실무 피드백을 기준으로 방향을 선택·폐기·수정하는 루프를 경험했습니다.",
    ],
    galleryIntro:
      "무드보드, 레퍼런스 보드, 스토리보드, before / after 비교, 최종 숏폼이 어떤 순서로 좁혀졌는지 읽히도록 정리했습니다.",
    placeholderMedia: [
      {
        label: "최종 숏폼",
        note: "브랜드 톤과 장면 흐름에 맞는 방향으로 수렴된 최종 숏폼입니다.",
        src: "/video/anderssonbell.mp4",
        alt: "Andersson Bell short-form video.",
        type: "video",
        poster: "/work/andersson-bell-cover.webp",
        fit: "contain",
        displaySize: "compact",
      },
    ],
    detailMediaSections: [
      {
        eyebrow: "작업 흐름",
        title: "무드보드와 레퍼런스 정리부터 Kling 제작과 결과물까지 이어진 순서",
        summary:
          "무드보드, 레퍼런스 보드, 스토리보드, before / after 비교, 최종 숏폼이 어떤 순서로 좁혀졌는지 한 줄 흐름으로 확인할 수 있도록 정리했습니다.",
        layout: "stack",
        items: [
          {
            label: "1-4. 컨셉 / 무드 / 리서치",
            note: "브랜드 리서치와 실무진 협업을 바탕으로 초기 훅, 모티프, 장면 구조를 기획하고, 무드보드와 레퍼런스 리서치로 방향을 정리한 단계입니다.",
            src: "/appendix/bluegarage/adsb/stage-direction-wide.webp",
            alt: "ADSB concept, mood, and research collage.",
            fit: "contain",
          },
          {
            label: "5-7. 수정 전 시안 3개",
            note: "초기에는 콜라주식 시도도 있었지만, 완성도가 낮게 읽히고 감정 흐름이 약해 어떤 장면이 Andersson Bell의 톤에 더 가까운지 다시 비교하며 방향을 좁혀간 단계입니다.",
            src: "/appendix/bluegarage/adsb/stage-drafts.webp",
            alt: "ADSB draft comparison collage.",
            fit: "contain",
          },
          {
            label: "8-9. Kling 제작 / 결과 프레임",
            note: "선별한 시안을 Kling, Photoshop 등으로 영상화하며 고정 앵글 중심의 15초 장면 흐름으로 재구성하고, 첫 1-3초 훅과 감정 유지가 가능한 최종 수렴 지점을 보여주는 단계입니다.",
            src: "/appendix/bluegarage/adsb/stage-production.webp",
            alt: "ADSB production and final frame collage.",
            fit: "contain",
          },
        ],
      },
      {
        eyebrow: "GIGR 관점 제작 판단",
        title: "왜 고정 앵글과 15초 흐름으로 좁혔는가",
        summary:
          "AI 결과물을 많이 나열하는 것보다 광고 소재 후보로 읽히는 장면 구조가 중요하다고 봤습니다.",
        columns: 3,
        layout: "grid",
        items: [
          {
            label: "Initial Problem",
            note: "초기 콜라주 방향은 개별 장면은 있었지만 재미, 감정, 브랜드 무드가 한 방향으로 유지되지 않았습니다.",
          },
          {
            label: "Creative Choice",
            note: "고정 앵글을 유지하면 첫 장면, 인물, 제품 무드, 이동감을 한 흐름으로 읽히게 만들 수 있다고 판단했습니다.",
          },
          {
            label: "Short-form Logic",
            note: "첫 1-3초에서 장면 훅을 만들고, 15초 안에서 같은 감정선이 유지되도록 하는 쪽이 광고 소재 후보에 더 가깝다고 봤습니다.",
          },
        ],
      },
    ] satisfies DetailMediaSection[],
    hideAppendixSlide: true,
    currentStatus: [
      "3인 팀 프로젝트에서 브랜드 숏폼의 주요 기획 및 이미지·영상 프롬프트 설계 담당",
      "브랜드 리서치와 실무진 피드백을 바탕으로 초기 훅, 모티프, 장면 구조, 무드보드 방향성 기획",
      "콜라주식 시선 분산을 정리하고, 고정 앵글 중심의 스토리보드와 컷 시퀀스로 재구성해 약 15초 분량의 숏폼 완성",
      "Midjourney, Nano Banana, Kling, Photoshop을 활용해 이미지 시안 제작, 동작 보정, 영상화 진행",
    ],
  },
  {
    slug: "persona-systems",
    section: "Selected Work",
    eyebrow: "Persona / Agent System",
    title: "Persona / Agent System",
    oneLiner: "AI agent별 역할, 성격, 말투, 관계성을 내부적으로 설계하고 운영한 페르소나 구조 실험",
    summary:
      "이 실험에서는 AI agent를 단순한 기능 도구가 아니라, 각기 다른 역할과 말투, 성격을 가진 협업 대상으로 설정해 사용했습니다. 이를 통해 페르소나 설계가 상호작용의 분위기와 인식에 어떤 차이를 만드는지 내부적으로 확인했습니다.",
    roles: ["agent cast", "역할 분리", "성격 / 말투", "관계성"],
    evidence: ["persona surface", "AHEYA 연결 캐릭터", "역할 차이", "운영 구조"],
    status: "보조 케이스 / 내부 실험",
    tier: "selected",
    accent: "indigo",
    year: "2025 - present",
    detailLeadLayout: "stack",
    detailLeadSection: {
      eyebrow: "OpenClaw / AHEYA Baraya",
      title: "업무 관계 / 에이전트들 간의 관계 / K · Becca · Aurora를 함께 보는 메인 자료",
      summary:
        "실제 chatting 영상을 두 구간으로 나누고, K / Becca / Aurora 이미지를 함께 둬 역할 / 성격 / 말투 / 관계 구조 차이가 어떤 캐릭터 인상으로 읽히는지 한 번에 보이게 정리했습니다.",
    },
    detailHeroProof: {
      label: "OpenClaw x K",
      note: "대표 agent 화면과 AHEYA Baraya K를 같이 묶어, 역할과 말투의 차이가 어떤 캐릭터 인상과 맞닿는지 먼저 보여주는 페어 이미지입니다.",
      src: "/appendix/bluegarage/persona/openclaw-k-pair.webp",
      alt: "OpenClaw and AHEYA K paired persona image.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "What to show",
        body: "agent cast overview와 역할 / 성격 / 말투 / 관계성 차이, OpenClaw 사용 화면, 왜 이렇게 나눴는지에 대한 짧은 설명만 보여줍니다.",
        accent: "aqua",
        items: ["agent cast overview", "역할 / 성격 / 말투 / 관계성 차이", "OpenClaw 사용 화면"],
      },
      {
        title: "Why it matters",
        body: "성격, 말투, 감정 구조, 관계성을 실제 대화와 인상 차이로 연결해본 보조 증거입니다.",
        accent: "orange",
        items: ["보조 케이스", "역할 / 말투 / 관계 구조"],
      },
      {
        title: "주의",
        body: "내부 운영 문서 전체는 공개하지 않고, 공개 가능한 수준의 화면과 역할표, 사용 방식만 요약합니다.",
        accent: "indigo",
        items: ["내부 운영 문서 전체 공개 금지", "공개 가능한 수준으로만 요약"],
      },
    ],
    coverImage: {
      src: "/appendix/bluegarage/persona/openclaw-k-pair.webp",
      alt: "OpenClaw and AHEYA K paired persona image.",
      fit: "contain",
    },
    overview: [
      "이 실험에서는 AI agent를 단순한 기능 도구가 아니라, 각기 다른 역할과 말투, 성격을 가진 협업 대상으로 설정해 사용했습니다.",
      "이를 통해 페르소나 설계가 상호작용의 분위기와 인식에 어떤 차이를 만드는지 내부적으로 확인했습니다.",
    ],
    whatIDid: [
      "agent별 역할과 담당 범위를 구분해 사용했습니다.",
      "성격, 말투, 분위기 차이를 반영해 각 페르소나의 인상을 분명히 나눴습니다.",
      "AHEYA Baraya 캐릭터와 연결해 어떤 agent가 어떤 인상 구조로 읽히는지 묶어보았습니다.",
      "협업 상황에서 각 페르소나가 어떤 분위기와 역할을 만드는지 관찰하고 정리했습니다.",
    ],
    whatExists: [
      "OpenClaw agent 화면과 캐릭터를 함께 보여주는 페어 이미지.",
      "AHEYA 내부 화면과 연결된 캐릭터 이미지.",
      "역할과 말투 차이를 보여주는 운영 화면 일부.",
      "내부 운영에서 정리한 역할과 말투 차이에 대한 보조 기준.",
    ],
    keyDecisions: [
      "AI agent를 기능 도구가 아니라 협업 대상으로 다뤘습니다.",
      "역할, 성격, 말투 차이를 분명히 나눠 인상 차이를 만들었습니다.",
      "공개 가능한 화면과 연결 캐릭터만 노출하고 내부 운영 문서는 감췄습니다.",
      "페르소나 설계를 실제 상호작용 인상과 연결 캐릭터 이미지로 읽히게 했습니다.",
    ],
    galleryIntro:
      "OpenClaw chatting을 업무 관계와 에이전트들 간의 관계 두 구간으로 나누고, K / Becca / Aurora를 함께 둬 각 agent의 역할 / 말투 / 관계 구조 차이가 어떤 캐릭터 인상으로 연결되는지 바로 읽히게 정리했습니다.",
    placeholderMedia: [
      {
        label: "업무 관계",
        note: "실제 업무 맥락에서 각 agent가 어떤 역할로 반응하고 판단을 돕는지 빠르게 훑어볼 수 있도록 2배속으로 정리한 첫 번째 chatting 구간입니다.",
        src: "/appendix/bluegarage/persona/openclaw-chat-work-2x.mp4",
        alt: "OpenClaw work-relationship clip showing agent role differences.",
        type: "video",
        poster: "/appendix/bluegarage/persona/openclaw-chat-work-poster.webp",
        showControls: true,
        copyMedia: {
          src: "/appendix/bluegarage/aheya/k.webp",
          alt: "AHEYA K character image.",
          fit: "contain",
          position: "center center",
        },
      },
      {
        label: "에이전트들 간의 관계",
        note: "agent들이 서로를 어떤 역할과 감정선으로 인지하는지 빠르게 확인할 수 있도록 2배속으로 정리한 두 번째 chatting 구간입니다.",
        src: "/appendix/bluegarage/persona/openclaw-chat-relationship-2x.mp4",
        alt: "OpenClaw inter-agent relationship clip.",
        type: "video",
        poster: "/appendix/bluegarage/persona/openclaw-chat-relationship-poster.webp",
        showControls: true,
        copyMedia: {
          src: "/appendix/bluegarage/aheya/becca.webp",
          alt: "AHEYA Becca character image.",
          fit: "contain",
          position: "center center",
        },
      },
      {
        label: "Aurora",
        note: "같은 역할 구조가 더 부드럽고 몽환적인 인상으로도 읽힐 수 있음을 보여주는 연결 캐릭터입니다.",
        hideText: true,
        src: "/appendix/bluegarage/aheya/aurora.webp",
        alt: "AHEYA Aurora character image.",
        fit: "contain",
        position: "center center",
      },
    ],
    detailMediaSections: [] satisfies DetailMediaSection[],
    hideAppendixSlide: true,
    currentStatus: [
      "성격, 말투, 감정 구조, 관계성을 실제 상호작용으로 연결해본 보조 증거",
      "내부 운영 문서 전체는 공개하지 않고 공개 가능한 수준으로만 요약한 케이스",
    ],
  },
  {
    slug: "sfti-cmu",
    section: "Selected Work",
    eyebrow: "Research / English Writing",
    title: "SFTI-CMU",
    oneLiner:
      "브랜드를 정체성·상징·감정 구조의 관점에서 해석해 영문 초록과 포스터 형식으로 구조화한 연구·발표 프로젝트",
    summary:
      "이 프로젝트는 패션 브랜드를 정체성·상징·감정 구조의 관점에서 해석하고, 이를 비주얼 클러스터링 프레임으로 정리해 영어 문서와 포스터 형식으로 만든 작업입니다.",
    roles: ["영문 초록 작성", "브랜드 해석", "포스터 구조화", "외부 제출"],
    evidence: ["abstract", "review form", "poster", "framework"],
    status: "Accept with revisions",
    tier: "selected",
    accent: "aqua",
    year: "2025",
    detailLeadLayout: "carousel",
    detailLeadSection: {
      eyebrow: "대표 자료",
      title: "Revision 포함 / 1-5 문서 흐름",
      summary:
        "핵심 문서를 끊김 없이 넘겨보며 전체 흐름을 확인하는 구성입니다.",
    },
    detailHeroProof: {
      label: "Review form",
      note: "영문 초록이 Accept with revisions 평가를 받은 결과 화면입니다.",
      src: "/appendix/bluegarage/sfti/result.webp",
      alt: "SFTI-CMU result image.",
      fit: "contain",
    },
    detailHeroHighlights: [
      {
        title: "What I did",
        body: "‘AI-Generated Emotional Content Strategy for Niche Fashion Brands: Toward Identity-Based Visual Clustering’ 주제로 영문 초록을 작성하고 제출했습니다.",
        accent: "aqua",
        items: [
          "브랜드를 정체성, 상징, 감정 구조의 관점에서 해석",
          "신화·상징 모티프를 연결한 비주얼 클러스터링 프레임으로 구조화",
          "영문 포스터·발표 자료 형식으로 확장",
        ],
      },
      {
        title: "Result",
        body: "영문 초록은 Accept with revisions 평가를 받았고, 현장 발표는 지도교수가 진행했습니다.",
        accent: "indigo",
        items: ["Accept with revisions", "현장 발표는 지도교수가 진행"],
      },
      {
        title: "Why it matters",
        body: "이 작업은 단순한 연구 경험보다도, 추상적인 브랜드 해석을 영어 문서와 시각 구조로 외부 전달 가능한 형태로 바꿔본 경험이라는 점에서 의미가 있습니다.",
        accent: "orange",
        items: ["abstract", "review form", "poster", "framework diagram"],
      },
    ],
    galleryColumns: 3,
    coverImage: {
      src: "/appendix/bluegarage/sfti/sfti_1.webp",
      alt: "SFTI-CMU screenshot one showing the split abstract layout.",
      fit: "contain",
    },
    overview: [
      "패션 브랜드를 정체성·상징·감정 구조의 관점에서 해석하고, 이를 비주얼 클러스터링 프레임으로 정리한 작업입니다.",
      "단순한 연구 경험이라기보다, 추상적인 브랜드 해석을 영어 문서와 시각 구조로 외부 전달 가능한 형태로 바꿔본 경험에 가깝습니다.",
    ],
    whatIDid: [
      "‘AI-Generated Emotional Content Strategy for Niche Fashion Brands: Toward Identity-Based Visual Clustering’ 주제로 영문 초록을 작성하고 제출했습니다.",
      "브랜드를 정체성, 상징, 감정 구조의 관점에서 해석했습니다.",
      "신화·상징 모티프를 연결한 비주얼 클러스터링 프레임으로 구조화했습니다.",
      "영문 포스터와 발표 자료 형식으로 확장했습니다.",
    ],
    whatExists: [
      "영문 초록과 포스터 형식으로 정리된 결과물.",
      "Accept with revisions가 표기된 review form.",
      "브랜드 해석과 visual clustering framework.",
    ],
    keyDecisions: [
      "브랜드 해석을 identity-based visual clustering이라는 구조로 잡았습니다.",
      "연구 결과를 과도하게 학술적으로 쓰기보다 외부 전달 가능한 문장으로 정리했습니다.",
      "영문 작성과 구조화 능력을 보여주는 증거로 사용했습니다.",
    ],
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "Revision",
        note: "revision / redline / final draft",
        src: "/appendix/bluegarage/sfti/sfti-revision.webp",
        alt: "SFTI-CMU revision page screenshot.",
        fit: "contain",
      },
      {
        label: "Abstract / 1",
        note: "abstract / problem framing",
        src: "/appendix/bluegarage/sfti/sfti_1.webp",
        alt: "SFTI-CMU screenshot one.",
        fit: "contain",
      },
      {
        label: "2",
        note: "resource limits / symbolic content",
        src: "/appendix/bluegarage/sfti/sfti_2.webp",
        alt: "SFTI-CMU screenshot two.",
        fit: "contain",
      },
      {
        label: "3",
        note: "solution model / framework",
        src: "/appendix/bluegarage/sfti/sfti_3.webp",
        alt: "SFTI-CMU screenshot three.",
        fit: "contain",
      },
      {
        label: "4",
        note: "symbol mapping / brand reading",
        src: "/appendix/bluegarage/sfti/sfti_4.webp",
        alt: "SFTI-CMU screenshot four.",
        fit: "contain",
      },
      {
        label: "5",
        note: "poster layout / presentation",
        src: "/appendix/bluegarage/sfti/sfti_5.webp",
        alt: "SFTI-CMU screenshot five.",
        fit: "contain",
      },
    ],
    detailMediaSections: [] satisfies DetailMediaSection[],
    hideAppendixSlide: true,
    currentStatus: [
      "영문 초록은 Accept with revisions 평가를 받았고, 현장 발표는 지도교수가 진행했습니다.",
      "추상적인 브랜드 해석을 영어 문서와 시각 구조로 외부 전달 가능한 형태로 바꿔본 경험입니다.",
    ],
  },
  {
    slug: "be-moon",
    section: "Earlier Systems",
    eyebrow: "Trust-system concept",
    title: "BE;MOON",
    oneLiner:
      "A product thesis for digital warranty, ownership verification, and post-purchase trust in fashion.",
    summary:
      "BE;MOON reads best here as a trust-system case. The important part is the operating rail: purchase authentication, proof issuance, verification, and OMS sync built as one usable layer a brand could actually operate.",
    roles: ["Trust-system framing", "Service design", "Verification flow", "Operational fit"],
    evidence: ["Problem / solution logic", "MVP rail", "Figma surfaces", "Verification model"],
    status: "Strategic concept with trust architecture",
    tier: "archive",
    accent: "orange",
    year: "2024",
    overview: [
      "BE;MOON started from a simple question: how should a fashion brand prove ownership and authenticity once regulation, resale, and post-purchase trust all start to matter at the same time?",
      "The strongest output was not a branding layer but an MVP service rail: issuance, proof, verification, and OMS sync treated as one operating system for digital warranty.",
    ],
    whatIDid: [
      "Defined the case around traceability pressure, counterfeit circulation, and the gap between internal warranty systems and external trust moments.",
      "Turned that into a product rail covering purchase authentication, proof issuance, verification, ownership state, and OMS linkage.",
      "Translated the thesis into service structure and interface surfaces strong enough to communicate the model publicly.",
    ],
    whatExists: [
      "A clear one-page problem / solution / flow logic.",
      "Figma-based product surfaces showing the warranty and verification layer.",
      "A service structure that can be explained without exposing the original planning documents.",
    ],
    keyDecisions: [
      "Start from the auth rail first instead of pretending the value is perks from day one.",
      "Keep OMS state sync tightly connected to ownership so the warranty does not drift away from real product data.",
      "Treat downstream benefits as a second layer after trust and verification become stable.",
    ],
    problemSummary: [
      "Fashion brands are facing rising DPP pressure and higher operational complexity around traceability and post-purchase record keeping.",
      "At the same time, counterfeit circulation weakens resale trust and makes existing internal warranty records hard to use in external verification moments.",
      "The real gap is not visual branding. It is the missing operating rail that connects purchase, ownership, verification, and brand-side system sync.",
    ],
    solutionSummary: [
      {
        title: "Trust layer first",
        body: "Position the product as a digital warranty SaaS that connects product identity, user-linked proof, and verification before adding broader member logic.",
        accent: "orange",
      },
      {
        title: "Issuance to verification",
        body: "Build the first usable rail around purchase auth, proof issuance, verification, and benefits so the service has one defensible core loop.",
        accent: "aqua",
      },
      {
        title: "Operational fit",
        body: "Keep ownership state connected to OMS and product status so external trust does not split from internal brand operations.",
        accent: "indigo",
      },
    ],
    flowHeading: "Issuance -> Proof -> Verification",
    flowSteps: [
      {
        step: "01",
        title: "Purchase / QR auth",
        body: "The rail starts from product purchase and a brand-controlled entry point that confirms the buyer and the item.",
        meta: "Entry surface",
      },
      {
        step: "02",
        title: "Proof issuance + account auth",
        body: "The warranty becomes a user-linked proof object rather than staying inside a private database only.",
        meta: "Ownership proof",
      },
      {
        step: "03",
        title: "Verification / benefits",
        body: "The user can verify ownership and unlock downstream utility, while the brand keeps the proof legible beyond the original checkout moment.",
        meta: "Trust surface",
      },
      {
        step: "04",
        title: "OMS state sync",
        body: "Ownership and product state are reflected back into brand systems so the digital warranty remains operationally grounded.",
        meta: "System sync",
      },
    ],
    serviceStructure: [
      {
        title: "Brand / OMS",
        body: "Product records, order data, and brand-issued entry conditions begin the warranty rail.",
        accent: "orange",
        items: ["Product purchase data", "OMS linkage", "Brand-side issuance control"],
      },
      {
        title: "BE;MOON core",
        body: "The middle layer handles issuance SaaS, verification logic, and ownership state management.",
        accent: "aqua",
        items: ["Issuance SaaS", "Verification engine", "Status and ownership database"],
      },
      {
        title: "Portable proof layer",
        body: "Proof objects, metadata storage, and verification logs make the warranty portable enough to support resale trust later.",
        accent: "indigo",
        items: ["Metadata storage", "Portable proof object", "Verification log"],
      },
      {
        title: "Consumer / external channels",
        body: "The proof becomes usable in verification, benefit access, and future external trust moments instead of staying locked inside one brand system.",
        accent: "orange",
        items: ["Consumer account", "Benefit check", "External trust surface"],
      },
    ],
    structureOutcome:
      "The draft lands on a simple claim: digital warranty is not just a novelty feature. It is an operating rail for brand trust, verification, and ownership continuity.",
    galleryIntro:
      "The supporting surfaces below stay secondary. The center of this case is the product logic, while the Figma images act as proof that the service model was already translated into visible interfaces.",
    placeholderMedia: [
      {
        label: "Figma overview",
        note: "Core interface surfaces and information architecture.",
        src: "/work/bemoon-ui.webp",
        alt: "BE;MOON Figma board with multiple screens.",
        fit: "contain",
        featured: true,
      },
      {
        label: "Verification surface",
        note: "Verification-oriented product evidence and portable proof exploration.",
        src: "/work/bemoon-nft.webp",
        alt: "BE;MOON verification and proof surface.",
        fit: "contain",
      },
    ],
    currentStatus: [
      "A strong draft-level case because the product logic is already web-native and legible.",
      "Best read as proof that I can frame trust and verification around brand operations, not abstraction.",
    ],
  },
  {
    slug: "ilysb",
    section: "Earlier Systems",
    eyebrow: "0 -> 1 build test",
    title: "ILYSB",
    oneLiner:
      "A solo mobile experiment that proved build speed, user-testing judgment, and the willingness to stop weak ideas early.",
    summary:
      "ILYSB belongs here because it moved from concept to interface to user signal quickly enough to make a real product decision. The value is not that it became a business. The value is judgment under speed.",
    roles: ["0 -> 1 product build", "UI direction", "User testing", "Fast execution"],
    evidence: ["Working mobile app", "Screenshots", "User test", "Kill decision"],
    status: "Built, tested, then stopped",
    tier: "archive",
    accent: "aqua",
    year: "2025",
    overview: [
      "A solo-built mobile app concept developed as a direct experiment rather than a long planning exercise.",
      "Its value lies in speed, implementation, and learning from clear user reaction.",
    ],
    whatIDid: [
      "Defined the concept and shaped the interface solo.",
      "Built the app flow and visual layer directly.",
      "Ran a small early test with five people.",
      "Used the reaction to decide quickly not to keep pushing the concept.",
    ],
    whatExists: [
      "Built mobile interface and screen evidence.",
      "Small test signal with a clear emotional response.",
      "A useful example of concept-to-decision velocity.",
    ],
    keyDecisions: [
      "Move quickly into build instead of over-planning.",
      "Treat discomfort as a real signal rather than forcing the idea forward.",
      "Keep the case as evidence of testing discipline, not as a success narrative.",
    ],
    galleryIntro:
      "This page holds the captured screens as proof of build speed and testing, not as a polished product launch.",
    placeholderMedia: [
      {
        label: "Main page UI",
        note: "Captured interface showing the list and action state.",
        src: "/work/ilysb-main.webp",
        alt: "ILYSB mobile main page screenshot.",
        fit: "contain",
        featured: true,
      },
      {
        label: "Hint screen",
        note: "One of the core reveal surfaces in the app flow.",
        src: "/work/ilysb-hints.webp",
        alt: "ILYSB hint screen with social clues.",
        fit: "contain",
      },
      {
        label: "Entry screen",
        note: "Login and opening access point of the app.",
        src: "/work/ilysb-login.webp",
        alt: "ILYSB entry screen with Kakao login.",
        fit: "contain",
      },
    ],
    currentStatus: [
      "Useful as a build-and-test case, not as an ongoing product.",
      "Shows that I can ship, read the signal, and make the hard call early.",
    ],
  },
  {
    slug: "ariadne-mode-moment",
    section: "Earlier Systems",
    eyebrow: "Product system concept",
    title: "Ariadne / ModeMoment",
    oneLiner:
      "A decision-layer fashion service showing strong product strategy, IA, and monetization thinking before full build.",
    summary:
      "Ariadne matters because the structure is already specific. Instead of another fashion discovery feed, it focuses on the decision moment after recommendation, with ModeMoment extending the same strategic line into a broader venture direction.",
    roles: ["Product strategy", "Interaction design", "IA planning", "Business model thinking"],
    evidence: ["Problem / solution flow", "IA map", "Service structure", "Screen guide"],
    status: "Strategic concept with system depth",
    tier: "archive",
    accent: "indigo",
    year: "2023 - 2024",
    detailDensity: "compact",
    overview: [
      "Ariadne was built around a sharper observation than a generic fashion community pitch: the harder problem is not finding items, but choosing one final option out of several saved candidates.",
      "ModeMoment extends the same line of thought outward as a wider venture direction, but the core public case stays centered on Ariadne's decision-layer logic.",
    ],
    whatIDid: [
      "Defined the product around cart-stage decision support instead of trend discovery.",
      "Mapped the interaction logic for taste input, vote-based feedback, unified storage, and post-decision routing back to original sellers.",
      "Extended the concept into ModeMoment as a broader venture path without splitting the underlying service thesis into separate products.",
    ],
    whatExists: [
      "A complete problem / solution / flow logic strong enough to explain the concept publicly.",
      "Information architecture, service-layer mapping, and screen guidance across the key product surfaces.",
      "A public-facing case structure that can hold future diagrams and screens without exposing raw handoff files.",
    ],
    keyDecisions: [
      "Compete on the decision layer, not on checkout or inventory.",
      "Use a multi-platform storage model as the real differentiator instead of a single-platform recommendation feature.",
      "Keep the community useful by making every feed unit something people can judge quickly, not just scroll past.",
    ],
    problemSummary: [
      "The harder pain point in fashion shopping is often the final decision moment, not early discovery. People already get enough recommendations but still hesitate at the cart stage.",
      "Users move across multiple shopping apps and brand malls, yet they cannot compare saved candidates in one place, so they rely on screenshots, DMs, or private overthinking.",
      "Ariadne reframes that gap as a product opportunity: reduce decision cost through similar-taste feedback and a unified storage layer.",
    ],
    coreJudgments: [
      {
        title: "Decision beats discovery",
        body: "Recommendation and ranking products already exist. The empty space is the last-mile decision moment when someone has to choose one actual item.",
        accent: "indigo",
      },
      {
        title: "Checkout stays outside",
        body: "Ariadne should not compete with large shopping platforms on payment. It works best as a layer on top of those systems.",
        accent: "aqua",
      },
      {
        title: "Storage is the moat",
        body: "The differentiator is not a single voting feature. It is the ability to gather candidates from multiple sources and make them comparable in one decision space.",
        accent: "orange",
      },
    ],
    solutionSummary: [
      {
        title: "Taste segmentation",
        body: "A short onboarding layer captures mood, favorite items, and purchase priorities so the feed can start from comparable taste profiles.",
        accent: "indigo",
      },
      {
        title: "Vote feed",
        body: "The main unit becomes a judgment card with 2 to 5 candidates, context tags, and fast feedback from people with similar taste.",
        accent: "aqua",
      },
      {
        title: "Unified storage",
        body: "Candidates from multiple shopping apps and brand malls are organized like a comparison-first cart instead of a passive wishlist.",
        accent: "orange",
      },
      {
        title: "Tags and reports",
        body: "Signals from votes, tags, and saved combinations feed ranking, report views, and later recommendation logic.",
        accent: "indigo",
      },
    ],
    flowHeading: "Decision flow",
    flowSteps: [
      {
        step: "01",
        title: "External shopping app / brand mall",
        body: "The process begins outside Ariadne, where users discover items across existing shopping platforms.",
        meta: "Discovery stays external",
      },
      {
        step: "02",
        title: "Save / capture",
        body: "Users bring candidates in through saves, uploads, or screenshots instead of restarting the search from zero.",
        meta: "Candidate intake",
      },
      {
        step: "03",
        title: "Upload vote",
        body: "A structured question is created with selected candidates and context tags so the feed can respond to a real decision moment.",
        meta: "Question layer",
      },
      {
        step: "04",
        title: "Similar-taste response",
        body: "Votes, comments, and saves from similar users create fast judgment input rather than open-ended discussion only.",
        meta: "Feedback layer",
      },
      {
        step: "05",
        title: "Organize storage",
        body: "Candidates can keep moving through folders, filters, and comparison groups as the user narrows the choice.",
        meta: "Decision workspace",
      },
      {
        step: "06",
        title: "Purchase at original seller",
        body: "Once the user decides, the actual checkout returns to the original shopping platform or brand mall.",
        meta: "Checkout stays external",
      },
    ],
    serviceStructure: [
      {
        title: "Input layer",
        body: "Product candidates come from outside shopping apps, brand malls, user uploads, and storage imports.",
        accent: "indigo",
        items: ["External shopping apps", "Brand mall captures", "Screenshot / upload intake"],
      },
      {
        title: "Interaction layer",
        body: "Voting, saving, comments, tags, and feed sorting turn private indecision into a lightweight social decision process.",
        accent: "aqua",
        items: ["Vote cards", "Saves and comments", "Context tags", "Similar-taste feed sort"],
      },
      {
        title: "Intelligence layer",
        body: "Taste graphs, tag-driven reports, and later recommendation rules structure what the product learns from each decision.",
        accent: "orange",
        items: ["Taste graph", "Tag-based report", "Recommendation / reordering"],
      },
      {
        title: "Business layer",
        body: "The concept opens into taste-based ads, brand research, and point-driven revisit mechanics without changing the core decision loop.",
        accent: "indigo",
        items: ["Taste-based ads", "Brand research / demand sensing", "Points and revisit hooks"],
      },
    ],
    iaGroups: [
      {
        title: "Home / Feed",
        items: ["For You", "Similar Taste", "Vote", "Recommendation", "Small talk", "Detail / card view"],
      },
      {
        title: "Compose",
        items: ["Vote composition", "Recommendation post", "Candidate select", "Context tag input"],
      },
      {
        title: "Storage",
        items: ["Folders", "Search / filter", "Category split", "Purchase links", "Unified cart"],
      },
      {
        title: "Report",
        items: ["Tag ranking", "Situation / style ranking", "Report detail"],
      },
      {
        title: "My",
        items: ["My posts", "Unorganized items", "Points / alerts", "Folder management"],
      },
    ],
    screenGuide: [
      {
        title: "Screen 01. Taste segmentation",
        purpose: "Capture a user's style axis quickly after sign-up so the feed can sort around real preferences.",
        components: ["Mood chips", "Favorite item cards", "Purchase-priority chips", "Next CTA"],
        focus: "Fast choice matters more than visual decoration because this screen defines the recommendation baseline.",
      },
      {
        title: "Screen 02. Vote feed card",
        purpose: "Let users read one question and respond immediately inside a compact decision card.",
        components: [
          "Author + taste label",
          "One-line question",
          "2 to 3 candidate tiles",
          "Vote / save actions",
          "Context tags",
        ],
        focus: "The feed unit should feel judgeable at a glance, not like a generic social post.",
      },
      {
        title: "Screen 03. Vote composition",
        purpose: "Turn saved candidates into a structured question without making the flow feel heavy.",
        components: ["Source selector", "2 to 5 candidate slots", "Question input", "Tag chips", "Optional self-photo toggle"],
        focus: "The sequence should stay explicit: add candidates, write the question, attach the context, then publish.",
      },
      {
        title: "Screen 04. Storage",
        purpose: "Make saved candidates behave like a comparison-first cart instead of a flat wishlist.",
        components: ["Search bar", "Folder cards", "Filter chips", "Saved-item grid", "Purchase links"],
        focus: "Storage must read as an active decision workspace that can later expand into a unified cart.",
      },
    ],
    structureOutcome:
      "The concept lands as a decision-layer SNS: recommendation can happen elsewhere, but the actual choice becomes faster, more social, and easier to organize here.",
    galleryIntro:
      "The visual layer stays intentionally light for now. The important part is that the service logic, IA, and screen guidance are already strong enough to stand as a public concept case.",
    placeholderMedia: [
      { label: "Decision map", note: "Problem / solution / flow logic translated into the page structure." },
      { label: "IA notes", note: "Feed, compose, storage, report, and my-page groups." },
      { label: "Screen guide", note: "The first four surfaces that make the concept legible." },
    ],
    currentStatus: [
      "Strong enough to sit in earlier systems because the service logic is already specific and transferable.",
      "Useful as proof of structured product thinking even before a full build exists.",
    ],
  },
];

export const workCaseMap = Object.fromEntries(workCases.map((item) => [item.slug, item])) as Record<string, WorkCase>;

workCaseMap.adsb = {
  ...workCaseMap["andersson-bell"],
  slug: "adsb",
  eyebrow: "ADSB / Brand short-form / Visual Concept",
  title: "ADSB / Andersson Bell",
};

const selectedOrder = ["andersson-bell", "persona-systems", "sfti-cmu"] as const;
const archiveOrder = ["be-moon", "ilysb", "ariadne-mode-moment"] as const;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
export const archiveCases = archiveOrder.map((slug) => workCaseMap[slug]);
