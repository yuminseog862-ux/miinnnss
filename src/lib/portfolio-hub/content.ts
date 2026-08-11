export type PortfolioProject = {
  slug: "musinsa" | "loom" | "aheya" | "adsb" | "sfti";
  shortTitle: string;
  role: string;
  period: string;
  route: string;
  accent: "ice" | "aqua" | "green" | "violet";
  homeTitle: string;
  homeRole: string;
  homeHeadline: string;
  homeOverview?: string;
  homeApproachLabel?: string;
  homeApproach: string[];
  homeProof: string[];
  homeTools?: string[];
  media: {
    src: string;
    alt: string;
    label: string;
    href?: string;
    layout?: "wide";
    embed?: {
      type: "youtube" | "instagram";
      src: string;
      title: string;
    };
  };
};

export const resumeProfile = {
  headline: "AI CONTENT DIRECTION / HARNESS FLOW",
  heroStatementLines: [
    "I define where target audiences stop and what they should remember, then build AI-based MV and CF content through a Workflow Harness.",
  ],
  homeFocus: "AI 콘텐츠 기획·제작 · 메시지 구조 · 제작 워크플로우",
};

export const projects: PortfolioProject[] = [
  {
    slug: "musinsa",
    shortTitle: "MUSINSA",
    role: "AI Creative, Short-form Ad, Message Structure",
    period: "2026.05-2026.06",
    route: "/deck/musinsa",
    accent: "ice",
    homeTitle: "MUSINSA Mujinjang AI Ad",
    homeRole: "메시지 구조 · 스토리보드 · AI 생성 결과 검토",
    homeHeadline: "다양성 메시지를 30초 AI 광고로 구현",
    homeOverview:
      "무신사 무진장 AI 광고 프로젝트에서 팀원과 이미지·영상 제작을 담당하며 제작 방향을 조율했습니다. 팀원이 만든 컷이 합의한 기획 및 레퍼런스와 달랐을 때 장면의 목적·행동·구도를 세부 스토리보드로 구체화해 공유하고, 수정 결과를 함께 검토해 하나의 30초 광고 흐름으로 완성했습니다.",
    homeApproachLabel: "My Role & Approach",
    homeApproach: [
      "‘편견을 벗다, 다양성을 입다, 무진장을 만나다’ 메시지를 30초 광고 흐름으로 전환",
      "팀원과 이미지·영상 제작을 담당하며 제작 방향 조율",
      "장면의 목적·행동·구도를 세부 스토리보드로 구체화해 공유",
      "수정 결과를 함께 검토해 최종 광고 흐름 완성",
    ],
    homeProof: ["30초 AI 광고 제출본", "3인 팀 제작의 메시지 구조·스토리보드·이미지 흐름"],
    homeTools: ["GPT · Codex", "Seedance 2.0", "Kling", "Grok", "CapCut"],
    media: {
      src: "https://i.ytimg.com/vi/70blJ_6wh6s/maxresdefault.jpg",
      alt: "MUSINSA Mujinjang AI ad final video thumbnail",
      label: "MUSINSA final video thumbnail",
      href: "https://youtu.be/70blJ_6wh6s",
      embed: {
        type: "youtube",
        src: "https://www.youtube.com/embed/70blJ_6wh6s?rel=0&modestbranding=1",
        title: "MUSINSA Mujinjang AI ad short",
      },
    },
  },
  {
    slug: "loom",
    shortTitle: "Loom",
    role: "AI Creative, IP Content System, Production Workflow",
    period: "2026.05-2026.07",
    route: "/deck/loom",
    accent: "violet",
    homeTitle: "Loom AI Idol Content System",
    homeRole: "AI 콘텐츠 기획·제작 · IP 콘텐츠 구조 · 제작 워크플로우",
    homeHeadline: "13명 AI 아이돌 IP를 영상·웹 콘텐츠로 확장",
    homeOverview:
      "13명의 AI 아이돌 멤버 정체성을 구축하고, 각 멤버와 곡의 메시지를 바탕으로 뮤직비디오·CF·숏폼 콘텐츠를 기획·제작하는 개인 프로젝트입니다. AI 기반 제작 워크플로우와 소셜미디어 테스트 루프를 운영하며, 멤버 아카이브·콘텐츠 탐색·팬 참여형 투표로 연결한 웹 기반 콘텐츠 경험까지 구현했습니다.",
    homeApproachLabel: "Approach",
    homeApproach: [
      "13명 AI 아이돌 IP와 멤버별 정체성을 기획하고 Harness Engineering 기반 AI 워크플로우 설계·구축",
      "타깃·메시지·레퍼런스 리서치를 바탕으로 멤버 및 곡별 콘셉트와 장면 설계",
      "하나의 메시지를 다양한 콘셉트와 장면 구성으로 확장해 여러 기획안 비교",
      "핵심 컷과 컷 순서를 스토리보드·편집 초안으로 구현해 전체 흐름 검증",
      "소셜미디어 반응을 다음 훅·메시지 가설을 점검하는 참고 신호로 정리",
    ],
    homeProof: ["3개 Track MV · 4개 CF · 13명 멤버 아카이브 · 팬 참여형 투표"],
    homeTools: ["GPT · Codex", "Suno", "Grok Imagine", "FFmpeg", "CapCut"],
    media: {
      src: "/ai-exploration/signal-deck/loom-signal-deck-home.png",
      alt: "Current Loom Signal Deck home page with the member signal map and Saeyan profile",
      label: "Loom Signal Deck · current home page",
      href: "https://loom-signal-deck.vercel.app",
    },
  },
  {
    slug: "adsb",
    shortTitle: "ADSB",
    role: "Brand Research, Shotboard, AI Frame/Motion Direction, Feedback Revision",
    period: "2025.09.01-2025.11.07",
    route: "/deck/adsb",
    accent: "green",
    homeTitle: "ADSB AI-assisted Short-form Execution",
    homeRole: "타깃·레퍼런스 조사 · 스토리보드 · AI 이미지·영상 제작 · 피드백 반영",
    homeHeadline: "브랜드 무드를 15초 AI 숏폼으로 구체화",
    homeOverview:
      "생성형 AI 기반 패션 브랜드 VIRTUAL CONTENT 개발 산학공동연구에서 브랜드 실무진의 피드백을 반영해 15초 숏폼 영상을 제작했습니다. 팀원들과 타깃과 레퍼런스를 조사하고 스토리보드를 구체화했으며, 합의된 기획을 프롬프트로 전환해 이미지와 영상 클립을 구현했습니다.",
    homeApproachLabel: "My Role & Approach",
    homeApproach: [
      "팀원들과 타깃·레퍼런스 조사 및 스토리보드 구체화",
      "합의된 기획을 프롬프트로 전환해 이미지·영상 클립 구현",
      "실무진 피드백에 따라 장면의 동작과 표현을 반복 조정",
      "전체 흐름에 맞게 연결하며 최종 숏폼 완성",
    ],
    homeProof: ["15초 최종 Instagram Reel", "타깃·레퍼런스 조사 → 스토리보드 → 생성 → 피드백 반영 → 최종 숏폼"],
    homeTools: ["Midjourney", "Nano Banana", "Kling"],
    media: {
      src: "/adsb/adsb-cover.webp",
      alt: "ADSB AI short-form execution",
      label: "ADSB short-form execution",
      href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
      embed: {
        type: "instagram",
        src: "https://www.instagram.com/reel/DRvZIP1EosJ/embed",
        title: "ADSB final Instagram Reel",
      },
    },
  },
  {
    slug: "aheya",
    shortTitle: "AHEYA",
    role: "AI Creative, First-signal Flow, Service Prototype",
    period: "2026.01-2026.04",
    route: "/deck/aheya",
    accent: "aqua",
    homeTitle: "AHEYA Service · Content Prototype",
    homeRole: "서비스·GTM 메시지 · KPI·이벤트 설계 · AI 콘텐츠 기획·제작 · 참여 루프 구현",
    homeHeadline: "창작자의 공개 아이디어를 첫 참여 흐름으로 연결",
    homeOverview:
      "AI-native 창작자가 프로토타입을 올리고, 사용자가 소액 후원·구조화된 피드백·선택적 공유·참여 기록으로 첫 시그널을 만드는 서비스·콘텐츠 기획 및 구현 사례입니다. 캐릭터·세계관 기반 이미지와 짧은 영상, 랜딩 페이지, X 홍보 콘텐츠를 통해 ‘왜 참여하는지 / 어떻게 쓰는지’를 전달하는 GTM 실험을 함께 진행했습니다.",
    homeApproachLabel: "Approach",
    homeApproach: [
      "창작자 작업 소개 ↔ 사용자 참여(후원·피드백·공유) 흐름을 연결하는 핵심 메시지 설계",
      "캐릭터·세계관 기반 이미지와 짧은 영상 시리즈 제작",
      "랜딩 페이지와 X 홍보 콘텐츠로 서비스 가치와 참여 방법 전달",
      "후원·Good/Improve 피드백·선택적 공유·참여 기록 흐름을 Next.js 웹 프로토타입으로 구현",
      "사용자 행동 KPI와 read-only snapshot을 분리해 설명·CTA·운영 상태를 재확인하는 기준 설계",
    ],
    homeProof: ["Next.js 웹 프로토타입 · 랜딩 페이지 · X 홍보 콘텐츠", "후원·Good/Improve 피드백·선택적 공유·참여 기록 · KPI 이벤트 설계"],
    homeTools: [
      "Next.js · React",
      "Supabase · Prisma",
      "Privy · RainbowKit",
      "Wagmi · Viem",
      "Base / EVM",
      "Solana · Anchor",
      "Codex",
      "Grok Imagine",
    ],
    media: {
      src: "/aheya/aheya-live-lanes.png",
      alt: "AHEYA public website lanes for supporters and builders.",
      label: "AHEYA public website lanes",
      href: "https://aheyabaraya.xyz/",
      layout: "wide",
    },
  },
  {
    slug: "sfti",
    shortTitle: "SFTI-CMU",
    role: "Research Communication, English Abstract, Poster Structure",
    period: "2025.05-2025.06",
    route: "/deck/sfti",
    accent: "aqua",
    homeTitle: "SFTI-CMU Research Communication",
    homeRole: "리서치 프레이밍 · 영문 초록 · 포스터 구조",
    homeHeadline: "감정 콘텐츠 아이디어를 리서치 구조로 구체화",
    homeOverview:
      "2025 SFTI-CMU International Conference에 니치 패션 브랜드의 감정 콘텐츠와 시각 정체성 문제를 identity-based visual clustering 관점으로 좁혀 영문 초록과 포스터형 자료를 제출했습니다. 이후 Loom 등에서 감정·정체성 기반 시각 콘텐츠를 기획할 때 참고한 리서치 프레임 사례입니다.",
    homeApproachLabel: "My Role & Approach",
    homeApproach: [
      "추상적인 AI 감정 콘텐츠 아이디어를 구체적인 연구 주제로 구체화하고 영문 초록 작성",
      "초록을 바탕으로 발표용 포스터 PPT 제작",
      "포스터에 포함되는 이미지와 영상을 Midjourney로 제작",
    ],
    homeProof: ["English abstract", "Poster-style presentation", "Midjourney 기반 이미지·영상 자료"],
    homeTools: ["Research framing", "English structuring", "Midjourney"],
    media: {
      src: "/sfti/source-assets/sfti-result.webp",
      alt: "SFTI-CMU review result and revision-comment evidence.",
      label: "Review/revision evidence and abstract structure",
    },
  },
];
