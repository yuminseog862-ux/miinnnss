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
    "참여형 Web3 서비스의 초기 유입을 만들기 위해 캐릭터 세계관과 공개 채널 콘텐츠를 함께 기획한 프로젝트",
  summary:
    "AHEYA는 창업자와 창작자의 초기 프로젝트 홍보와 참여 유도를 돕는 참여형 Web3 서비스입니다. 서비스 소개만으로는 반응을 얻기 어려운 상황에서, 캐릭터들과 세계관을 활용한 공개 채널 콘텐츠를 통해 유입과 관심을 만들기 위한 실험을 함께 진행했습니다.",
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
    body: "홈 화면은 참여형 Web3 서비스의 핵심 제안과 첫 참여 동선을 함께 보여줍니다.",
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
    eyebrow: "Product / Identity / Character Planning",
    title: "AHEYA",
    oneLiner:
      "참여형 Web3 크라우드펀딩 플랫폼의 초기 유입을 만들기 위해 캐릭터 세계관과 공개 채널 콘텐츠를 함께 기획한 프로젝트",
    summary:
      "AHEYA는 창업자와 창작자의 초기 프로젝트 홍보와 참여 유도를 돕는 참여형 Web3 서비스입니다. 서비스 소개만으로는 반응을 얻기 어려운 상황에서, 캐릭터들과 세계관을 활용한 공개 채널 콘텐츠를 통해 유입과 관심을 만들기 위한 실험을 함께 진행했습니다.",
    roles: ["서비스 기획", "캐릭터 세계관", "공개 채널 콘텐츠", "표현 방향 조정"],
    evidence: ["서비스 화면", "세계관 시리즈", "공개 채널 실험", "캐릭터 관계 구조"],
    status: "진행 중인 서비스 / 콘텐츠 실험",
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
        href: "https://x.com/minnns_aheya",
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
      eyebrow: "메인 캐릭터와 연결 캐릭터",
      title: "관계·감정·상징이 드러나는 K / Becca / Aurora / Yeon",
      summary:
        "메인 캐릭터와 그와 연결된 캐릭터들의 관계·감정·상징이 드러나는 시리즈형 콘텐츠를 먼저 보여주는 구성입니다.",
    },
    coverImage: {
      src: "/appendix/bluegarage/aheya/k.webp",
      alt: "AHEYA Baraya K character visual.",
      fit: "cover",
    },
    detailHeroProof: {
      label: "AHEYA Baraya K",
      note: "메인 캐릭터와 연결 캐릭터 구조의 중심으로, 서비스 설명보다 먼저 세계관의 결을 읽히게 하는 대표 이미지입니다.",
      src: "/appendix/bluegarage/aheya/k.webp",
      alt: "AHEYA Baraya K character visual.",
    },
    detailHeroHighlights: [
      {
        title: "Why this happened",
        body: "초기 업로더와 참여자 유입이 약한 문제를 보완하기 위해, 단순 소개형 포스팅보다 세계관과 관계성이 드러나는 콘텐츠가 더 관심을 끈다고 판단했습니다.",
        accent: "orange",
        items: ["초기 업로더와 참여자 유입이 약한 문제", "단순 소개형 포스팅보다 세계관과 관계성이 드러나는 콘텐츠"],
      },
      {
        title: "What I did",
        body: "12지 및 그리스 신화 등을 하나의 세계관 축으로 설정하고, 메인 캐릭터와 연결 캐릭터들의 관계·감정·상징이 드러나는 시리즈형 콘텐츠를 X에 기획·포스팅했습니다.",
        accent: "indigo",
        items: [
          "단순히 예쁜 이미지 업로드가 아니라 서비스에 대한 관심과 유입을 만들기 위한 목적",
          "X 같은 빠른 스크롤 환경에서 어떤 훅과 감정선이 더 먼저 읽히는지 확인하고 표현 방향 조정",
        ],
      },
      {
        title: "What this proves",
        body: "서비스 유입 문제를 콘텐츠 구조로 풀어보려 한 시도이자, 캐릭터와 세계관을 마케팅 자산으로 활용하고 디지털 공개 채널에서 더 빨리 읽히는 훅을 조정한 경험입니다.",
        accent: "aqua",
        items: [
          "서비스 유입 문제를 콘텐츠 구조로 풀어보려 한 시도",
          "캐릭터와 세계관을 마케팅 자산으로 활용한 경험",
          "디지털 공개 채널 반응을 보며 표현 방향을 조정한 경험",
        ],
      },
    ],
    galleryColumns: 4,
    overview: [
      "AHEYA는 창업자와 창작자의 초기 프로젝트 홍보와 참여 유도를 돕는 참여형 Web3 서비스입니다.",
      "초기 업로더와 참여자 유입이 약한 문제를 보완하기 위해, 단순 소개형 포스팅보다 세계관과 관계성이 드러나는 콘텐츠가 더 관심을 끈다고 판단했습니다.",
    ],
    whatIDid: [
      "12지 및 그리스 신화 등을 하나의 세계관 축으로 설정했습니다.",
      "메인 캐릭터와 그와 연결된 캐릭터들의 관계·감정·상징이 드러나는 시리즈형 콘텐츠를 X에 기획·포스팅했습니다.",
      "단순히 예쁜 이미지 업로드가 아니라, AHEYA Baraya 세계관과 연결된 캐릭터 포스팅을 통해 서비스에 대한 관심과 유입을 만들기 위한 목적으로 진행했습니다.",
      "공개 채널 반응을 보며 어떤 훅과 감정선이 더 잘 읽히는지 확인하고 표현 방향을 조정했습니다.",
    ],
    whatExists: [
      "서비스 한 줄 정의와 실제 서비스 화면.",
      "메인 캐릭터와 12지 및 그리스 신화 기반 변주 이미지.",
      "X 공개 채널 실험 이미지와 숏폼 일부.",
      "훅과 감정선 조정을 보여주는 공개 실험 자료.",
    ],
    keyDecisions: [
      "단순 소개형 포스팅보다 세계관과 관계성이 드러나는 콘텐츠를 우선했습니다.",
      "12지 및 그리스 신화 등을 하나의 세계관 축으로 잡고 시리즈형 콘텐츠로 확장했습니다.",
      "공개 채널 반응을 보며 어떤 훅과 감정선이 더 잘 읽히는지 확인하고 표현 방향을 조정했습니다.",
    ],
    galleryIntro: "",
    placeholderMedia: [
      {
        label: "K",
        note: "메인 캐릭터로, 관계·감정·상징이 드러나는 시리즈의 중심이 되는 대표 이미지입니다.",
        src: "/appendix/bluegarage/aheya/k.webp",
        alt: "AHEYA Baraya K character visual.",
        fit: "cover",
        position: "center center",
      },
      {
        label: "Becca",
        note: "메인 캐릭터와 연결된 인물 축을 넓혀 관계성과 감정선을 확장하는 연결 캐릭터입니다.",
        src: "/appendix/bluegarage/aheya/becca.webp",
        alt: "AHEYA Becca character image.",
        fit: "cover",
        position: "center center",
      },
      {
        label: "Aurora",
        note: "단순 소개형 포스팅보다 세계관과 감정선이 드러나는 콘텐츠 방향을 보여주는 확장 캐릭터입니다.",
        src: "/appendix/bluegarage/aheya/aurora.webp",
        alt: "AHEYA Aurora character image.",
        fit: "cover",
        position: "center center",
      },
      {
        label: "Yeon",
        note: "보다 차갑고 신뢰 중심인 분위기를 더해 세계관을 바깥으로 밀어주는 보조 캐릭터입니다.",
        src: "/appendix/bluegarage/aheya/aheya_trust_yean.webp",
        alt: "AHEYA trust Yean character still image.",
        fit: "contain",
        position: "center center",
      },
    ],
    detailMediaSections: [
      {
        eyebrow: "실제 서비스 화면",
        title: "왜 캐릭터 세계관을 시도했는지 실제 서비스 surface와 함께 보여주는 두 장",
        summary:
          "서비스 소개만으로는 반응을 얻기 어려운 상황에서, 실제 서비스 화면과 캐릭터를 함께 보면 왜 이 실험이 필요했는지가 더 직접적으로 읽힙니다.",
        columns: 2,
        layout: "grid",
        items: [
          {
            label: "K x 서비스 메인",
            note: "파란 구미호 메인 이미지를 통해 AHEYA의 첫 인상 축과 세계관 톤을 먼저 보여주는 카드입니다.",
            src: "/appendix/bluegarage/kumiho_main.webp",
            alt: "AHEYA kumiho main visual.",
            fit: "contain",
            position: "center 24%",
            href: "https://aheyabaraya.xyz/",
            hrefLabel: "AHEYA Site 보기",
          },
          {
            label: "Yeon x 구조 분리",
            note: "Yeon 축과 연결된 trust API 이미지를 통해 차갑고 신뢰 중심인 surface 인상을 보여주는 카드입니다.",
            src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
            alt: "AHEYA Yeon trust API image.",
            fit: "contain",
            position: "center center",
            href: "https://aheyabaraya.xyz/trust/whitelist",
            hrefLabel: "Trust API 보기",
          },
        ],
      },
      {
        eyebrow: "서비스 인상 보조",
        title: "공개 채널 이미지와 service surface 사이를 잇는 motion surface",
        summary:
          "정적 캐릭터 카드만으로는 부족한 감정선을 보완하기 위해, 서비스 인상 옆에서 움직임과 재질감을 더하는 자료를 따로 배치했습니다.",
        columns: 3,
        layout: "grid",
        items: [
          {
            label: "AHEYA 서비스 연결 영상",
            note: "AHEYA 전체 톤과 service surface 인상이 한 덩어리로 읽히도록 연결한 보조 motion surface입니다.",
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
            label: "Kumiho 서비스 연결 영상",
            note: "AHEYA의 초기 인상 축이 실제 서비스 맥락 옆에서 어떻게 이어지는지 보여주는 보조 motion surface입니다.",
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
            label: "Mouse 서비스 연결 영상",
            note: "Mouse 캐릭터의 더 가볍고 민첩한 인상이 서비스 인상 옆에서 어떻게 읽히는지 보여주는 보조 motion surface입니다.",
            src: "/appendix/bluegarage/mouse_vid.MP4",
            alt: "AHEYA mouse short-form experiment.",
            type: "video",
            poster: "/appendix/bluegarage/aheya/mouse-motion-poster.webp",
            autoPlay: true,
            muted: true,
            loop: true,
            showControls: false,
            displaySize: "compact",
          },
        ],
      },
      {
        eyebrow: "반응 데이터 비교",
        title: "조정 전 / 후 반응 변화 비교",
        summary: "",
        columns: 2,
        layout: "grid",
        items: [
          {
            label: "조정 전",
            note: "세계관 톤은 있었지만 감정, 훅, 캐릭터 개성이 약했던 초기 방향입니다. Views 1.1K / Watch Time 8.2h / Completion 16.5%",
            stackedMediaDirection: "row",
            stackedMedia: [
              {
                src: "/appendix/bluegarage/aheya/dog.webp",
                alt: "AHEYA dog initial character direction from March.",
                fit: "contain",
                position: "center center",
                aspectRatio: "3 / 4",
                scale: 0.9,
              },
              {
                src: "/appendix/bluegarage/aheya/312330.webp",
                alt: "AHEYA before snapshot image 312330.",
                fit: "contain",
                position: "center center",
                aspectRatio: "5 / 4",
                scale: 0.9,
              },
            ],
            stat: "조정 전",
          },
          {
            label: "조정 후",
            note: "감정, 훅, 캐릭터 개성을 더 직접적으로 읽히게 조정한 이후 방향입니다. Views 2.1K / Watch Time 18.3h / Completion 28.3%",
            stackedMediaDirection: "row",
            stackedMedia: [
              {
                src: "/appendix/bluegarage/horus_img.webp",
                alt: "AHEYA Horus character image.",
                fit: "contain",
                position: "center center",
                aspectRatio: "3 / 4",
                scale: 0.9,
              },
              {
                src: "/appendix/bluegarage/aheya/331418.webp",
                alt: "AHEYA after snapshot image 331418.",
                fit: "contain",
                position: "center center",
                aspectRatio: "5 / 4",
                scale: 0.9,
              },
            ],
            stat: "조정 후",
          },
        ],
      },
      {
        eyebrow: "공개 채널 실험",
        title: "12지 및 그리스 신화와의 연결을 실험한 공개 채널 확장",
        summary:
          "X 같은 빠른 스크롤 환경에서 어떤 상징, 감정선, 캐릭터 축이 먼저 읽히는지 직접 보기 위해 12지 및 그리스 신화 계열 변주를 공개 채널에 올리고, 반응에 따라 표현 방향을 조정한 흔적입니다.",
        columns: 4,
        layout: "grid",
        items: [
          {
            label: "Zeus 공개 채널 실험",
            note: "Zeus 축의 더 직접적이고 강한 상징성이 공개 채널에서 어떻게 첫 훅으로 읽히는지 보기 위한 실험입니다.",
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
            note: "강한 에너지와 sharper한 움직임이 첫인상에 어떤 차이를 만드는지 본 변주입니다.",
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
            note: "보다 날렵하고 사냥감 같은 긴장감을 공개 채널에서 어떻게 읽는지 보기 위한 변주입니다.",
            src: "/appendix/bluegarage/artemis_vid.MP4",
            type: "video",
            poster: "/appendix/bluegarage/artemis_data.webp",
            posterMode: "after-end",
            displaySize: "compact",
          },
          {
            label: "Dionysus",
            note: "보다 관능적이고 몽환적인 분위기가 첫인상 훅으로 얼마나 작동하는지 본 실험입니다.",
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
            note: "태양성과 상징 밀도를 더한 이집트 계열 변주가 어떤 강도로 읽히는지 확인한 실험입니다.",
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
      "서비스 유입 문제를 콘텐츠 구조로 풀어보려 한 시도",
      "캐릭터와 세계관을 마케팅 자산으로 활용한 경험",
      "X 같은 디지털 공개 채널에서 어떤 훅과 상징이 먼저 읽히는지 실험하고 조정한 경험",
    ],
  },
  {
    slug: "andersson-bell",
    section: "Selected Work",
    eyebrow: "AI creative direction / short-form",
    title: "Andersson Bell",
    oneLiner:
      "A brand-facing AI short-form case built around a dog-and-ball hook, prompt direction, and image-to-video iteration.",
    summary:
      "This case shows my strongest contribution in the Andersson Bell project: not owning the complete brand system or final retouching, but turning a shared brand reading into a concrete hook, motif rules, prompt direction, and image-to-video tests.",
    roles: [
      "Hook & motif planning",
      "Prompt & motion direction",
      "Image-to-video iteration",
    ],
    evidence: ["Dog & ball motif", "Storyboard", "Kling tests", "Short-form output"],
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
      eyebrow: "Final output",
      title: "Dog-and-ball hook에서 15초 AI 숏폼으로 이어진 결과",
      summary:
        "최종 영상과 dog-and-ball still, storyboard, Kling proof를 함께 두어 AI creative direction의 범위를 보여줍니다.",
    },
    coverImage: {
      src: "/adsb/adsb-cover.webp",
      alt: "AI-generated Andersson Bell short-form still showing a dog-and-ball motif in an urban street scene.",
    },
    detailHeroProof: {
      label: "Dog-and-ball hook",
      note: "강아지와 공, 도시 거리, 쇼핑백이 한 장면에 들어간 대표 still입니다.",
      src: "/adsb/adsb-cover.webp",
      alt: "Andersson Bell main still with dog, ball, shopping bag, and urban street.",
    },
    detailHeroHighlights: [
      {
        title: "Team role",
        body: "브랜드 리딩, 레퍼런스 논의, stakeholder feedback review는 팀 단위로 진행했습니다.",
        accent: "aqua",
        items: [
          "team-level brand reading",
          "reference discussion",
          "feedback review",
        ],
      },
      {
        title: "My main role",
        body: "공유된 브랜드 리딩을 강아지·공 훅, 프롬프트 방향, 영상화 흐름으로 바꾸는 데 집중했습니다.",
        accent: "indigo",
        items: [
          "hook / motif planning",
          "prompt & motion direction",
          "image-to-video iteration",
        ],
      },
      {
        title: "Boundary",
        body: "전체 브랜드 전략, 캠페인 성과, heavy Photoshop retouching을 내 단독 기여로 주장하지 않습니다.",
        accent: "orange",
        items: ["not complete brand system", "not campaign result proof", "not original prompt log"],
      },
    ],
    overview: [
      "A collaborative short-form project for Andersson Bell, built with students, professors, and brand stakeholders.",
      "My main contribution was making the brand mood readable through a simple dog-and-ball hook, then connecting that hook to prompt direction and image-to-video tests.",
      "This is best read as AI creative direction proof, not as campaign result proof or a post-production case.",
    ],
    whatIDid: [
      "Planned the dog-and-ball hook so first-time viewers could feel the Andersson Bell mood without needing brand context.",
      "Turned that hook into motif rules for subject, object, space, camera angle, and movement.",
      "Structured prompt direction around subject, motif, background, angle, motion, and negative constraints.",
      "Used Gemini Image and Nano Banana for visual correction, position tuning, angle adjustment, and frame preparation before video generation.",
      "Iterated Kling image-to-video prompts, informed by community examples, to find stable movement and timing.",
      "Connected storyboard beats to generated frames and final short-form output.",
      "Kept Photoshop and heavy finishing as collaborative/post-production support, not as my main ownership.",
    ],
    whatExists: [
      "Final 15-second short-form video.",
      "Dog-and-ball key visual frames.",
      "Storyboard and cut-sequence proof.",
      "Kling prompt and variation screenshots showing image-to-video iteration.",
      "Final report evidence showing storyboard, image drafts, cut sequence, and final output package.",
    ],
    keyDecisions: [
      "Make the first read clear: a viewer should feel the mood before reading an explanation.",
      "Use a simple dog-and-ball motif instead of stacking many unrelated AI scenes.",
      "Keep the camera and movement stable so the short-form does not feel like random AI motion.",
      "Use prompt direction and image adjustment to reduce generic AI fashion output.",
      "Be honest about ownership: this is hook, motif, prompt, and motion direction proof, not a retouching case.",
    ],
    galleryIntro:
      "최종 영상, dog-and-ball hook, storyboard, Kling prompt proof를 순서대로 배치해 hook planning부터 image-to-video iteration까지 읽히게 정리했습니다.",
    placeholderMedia: [
      {
        label: "Final short-form output",
        note: "Final Andersson Bell short-form video built from the dog-and-ball hook, prompt direction, and image-to-video tests.",
        src: "/adsb/adsb-result-vid.mp4",
        alt: "Final Andersson Bell AI short-form video.",
        type: "video",
        poster: "/adsb/adsb-cover.webp",
        featured: true,
        fit: "contain",
        displaySize: "compact",
      },
      {
        label: "Dog-and-ball hook",
        note: "Representative still showing the dog and ball motif used as the short-form hook.",
        src: "/adsb/adsb-cover.webp",
        alt: "Dog and colorful ball in an urban Andersson Bell short-form still.",
        fit: "cover",
      },
      {
        label: "Kling prompt preview",
        note: "Image-to-video prompt and frame preview used for motion direction.",
        src: "/adsb/adsb-kling.webp",
        alt: "Kling prompt preview and video frame for Andersson Bell image-to-video test.",
        fit: "contain",
      },
    ],
    detailMediaSections: [
      {
        eyebrow: "Reference reading",
        title: "브랜드 무드를 읽고 훅과 모티프 규칙으로 바꾼 과정",
        summary:
          "Reference는 benchmarking이나 복제가 아니라, 짧은 영상 안에서 mood, space, product cue를 압축하는 방식을 읽기 위한 자료로 사용했습니다.",
        layout: "stack",
        items: [
          {
            label: "Team-level brand reading",
            note: "공유된 브랜드 리딩을 바탕으로 dog, ball, urban street, crosswalk를 영상에서 읽히는 production rule로 바꿨습니다.",
            src: "/adsb/adsb-planning-draft.webp",
            alt: "ADSB key message, concept, moodboard, and reference board.",
            fit: "cover",
          },
          {
            label: "Prompt & motion direction",
            note: "프롬프트 원문 보존본이 아니라 subject, object, camera, motion, negative constraint를 조정한 direction logic을 보여주는 증거입니다.",
            src: "/adsb/adsb-production.webp",
            alt: "ADSB Kling production board showing prompt preview and frame variations.",
            fit: "contain",
          },
          {
            label: "Kling variation grid",
            note: "Kling image-to-video variation을 반복하며 motif가 유지되고 움직임이 안정적인 방향을 찾은 과정입니다.",
            src: "/adsb/adsb-kling-product.webp",
            alt: "ADSB Kling variation grid with repeated image-to-video tests.",
            fit: "contain",
          },
          {
            label: "Image adjustment before video",
            note: "Gemini Image와 Nano Banana는 영상화 전 오브젝트 위치, 각도, 프레임 구도를 조정하는 데 사용했습니다.",
            src: "/adsb/adsb-images-draft.webp",
            alt: "ADSB generated image drafts before video production.",
            fit: "contain",
          },
        ],
      },
    ] satisfies DetailMediaSection[],
    hideAppendixSlide: true,
    currentStatus: [
      "Closed project with visible outputs.",
      "Best read as proof of hook planning, prompt direction, and image-to-video iteration under stakeholder feedback.",
      "Positioned as a hook, prompt direction, and image-to-video iteration case, not as campaign result proof or final retouching ownership.",
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
      src: "/sfti/result.webp",
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
      src: "/sfti/sfti_1.webp",
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
        src: "/sfti/sfti-revision.webp",
        alt: "SFTI-CMU revision page screenshot.",
        fit: "contain",
      },
      {
        label: "Abstract / 1",
        note: "abstract / problem framing",
        src: "/sfti/sfti_1.webp",
        alt: "SFTI-CMU screenshot one.",
        fit: "contain",
      },
      {
        label: "2",
        note: "resource limits / symbolic content",
        src: "/sfti/sfti_2.webp",
        alt: "SFTI-CMU screenshot two.",
        fit: "contain",
      },
      {
        label: "3",
        note: "solution model / framework",
        src: "/sfti/sfti_3.webp",
        alt: "SFTI-CMU screenshot three.",
        fit: "contain",
      },
      {
        label: "4",
        note: "symbol mapping / brand reading",
        src: "/sfti/sfti_4.webp",
        alt: "SFTI-CMU screenshot four.",
        fit: "contain",
      },
      {
        label: "5",
        note: "poster layout / presentation",
        src: "/sfti/sfti_5.webp",
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

const selectedOrder = ["andersson-bell", "persona-systems", "sfti-cmu"] as const;
const archiveOrder = ["be-moon", "ilysb", "ariadne-mode-moment"] as const;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
export const archiveCases = archiveOrder.map((slug) => workCaseMap[slug]);
