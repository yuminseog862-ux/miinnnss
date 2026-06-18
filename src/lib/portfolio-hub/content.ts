export type PortfolioProject = {
  slug: "musinsa" | "loom" | "aheya" | "adsb" | "bemoon" | "sfti";
  title: string;
  shortTitle: string;
  role: string;
  period: string;
  route: string;
  accent: "ice" | "aqua" | "green" | "violet" | "orange";
  headline: string;
  abstract: string;
  finalResult: string;
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
  keyContents: string[];
  deckLinks: {
    label: string;
    href: string;
    description: string;
  }[];
  socialLinks?: {
    label: "YouTube" | "TikTok" | "X";
    href: string;
    description: string;
  }[];
  bullets: string[];
  outputs: string[];
  resumeLine: string;
};

export const resumeProfile = {
  headline: "AI Creative Portfolio",
  subline:
    "AI를 활용해 브랜드 메시지를 숏폼 훅, 장면 흐름, 이미지·영상 콘텐츠로 기획하고 제작해 온 AI Creative 포트폴리오입니다.",
  profile:
    "브랜드·제품·IP 아이디어를 숏폼 영상, 이미지/음악 콘텐츠, 콘텐츠형 서비스 프로토타입으로 구현해왔습니다. 무신사 AI 광고제에서는 브랜드 메시지를 30초 광고 흐름으로 구체화했고, Loom에서는 13명 AI 아이돌 IP를 Root Signal, Pulso 트랙과 멤버 아카이브·Harne 투표가 있는 웹페이지로 연결했으며, ADSB에서는 브랜드 무드와 피드백을 AI 숏폼 제작 흐름으로 옮겼습니다. AHEYA는 Product/GTM 메시지를 공개 채널 콘텐츠와 시각 자산으로 풀어낸 보조 사례이고, SFTI-CMU는 감정 콘텐츠와 시각 정체성 아이디어를 영문 초록/포스터형 자료로 구조화한 리서치 커뮤니케이션 보조 사례입니다.",
  competencies: [
    ["Message Structure", "브랜드/캠페인 브리프 해석, 핵심 메시지와 CTA 구성, 고객이 이해할 수 있는 문장 설계"],
    ["AI Creative Production", "Seedance 2.0, Kling, Grok 등 생성 도구 기반 이미지/영상 제작 흐름, 결과 검수"],
    ["AI Production Harness", "PRE-00 리서치부터 publish까지 action queue와 사용자 선택/승인 gate로 이어지는 최소 개입형 제작 구조 구축. Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno, Grok Build, Grok Imagine을 단계별 도구로 사용"],
    ["Content Structure", "영상 훅, 기억 문장, 장면 구성, 콘텐츠 아카이브, 확인 가능한 결과물 근거 구성"],
    ["Building Support", "Next.js/React 기반 포트폴리오 페이지 구성, 결과물 링크와 자료 구조화"],
  ],
};

export const projects: PortfolioProject[] = [
  {
    slug: "musinsa",
    title: "MUSINSA Mujinjang AI Ad - 편견을 벗다, 다양성을 입다",
    shortTitle: "MUSINSA",
    role: "AI Creative, Short-form Ad, Message Structure",
    period: "2026.05-2026.06",
    route: "/deck/musinsa",
    accent: "ice",
    headline: "무신사 무진장 AI 광고제 브리프를 다양성 메시지의 30초 팀 숏폼 광고로 전환한 프로젝트",
    abstract:
      "3인 팀 작업에서 서브기획과 제작 과정을 리딩하며 `편견을 벗다, 다양성을 입다, 무진장을 만나다` 메시지가 먼저 읽히도록 영상 구조를 설계. Seedance 2.0, Kling, Grok 기반 생성 결과를 검토하며 다양한 인물과 스타일을 통해 무진장을 더 넓은 패션 경험으로 보여주는 30초 광고 제출본 제작",
    finalResult:
      "30초 AI 숏폼 광고 제출본, 3인 팀 제작 흐름, 핵심 메시지 구조, 생성 결과 검토와 컷 흐름 조정을 하나의 포트폴리오 사례로 구성",
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
    keyContents: [
      "`편견을 벗다, 다양성을 입다, 무진장을 만나다`를 중심으로 한 메시지 구조",
      "3인 팀 프로젝트에서 서브기획, 주요 스토리보드, 장면 순서 설계 리딩",
      "Seedance 2.0, Kling, Grok 기반 생성 결과를 검토하며 컷 흐름, 전환, 최종 방향 조정",
    ],
    deckLinks: [
      {
        label: "MUSINSA PPT Portfolio",
        href: "/musinsa/record/presentation/musinsa-mujinjang-case-study.html",
        description: "최종 영상, 기획 스파인, 역할, 제작 과정, 산출물 구분을 담은 9장 포트폴리오",
      },
      {
        label: "YouTube Link",
        href: "https://youtu.be/70blJ_6wh6s",
        description: "무신사 무진장 AI 광고 최종 영상",
      },
    ],
    bullets: [
      "무신사 무진장 AI 광고제 브리프 기반 `편견을 벗다, 다양성을 입다, 무진장을 만나다` 메시지의 30초 AI 숏폼 광고 제출본 기획/제작",
      "3인 팀 작업에서 서브기획, 주요 스토리보드, 장면 순서 설계, 제작 과정 리딩",
      "Seedance 2.0, Kling, Grok 기반 이미지/영상 생성 결과를 검토하며 컷 흐름, 전환, 최종 방향 조정",
    ],
    outputs: ["30s team short-form ad", "diversity message concept", "sub-planning/storyboard lead", "Seedance 2.0/Kling/Grok generation review"],
    resumeLine:
      "무신사 무진장 AI 광고제 맥락에서 `편견을 벗다, 다양성을 입다, 무진장을 만나다` 메시지의 30초 AI 숏폼 광고 제출본을 3인 팀으로 제작하고, 서브기획/스토리보드/제작 과정 리딩 및 Seedance 2.0, Kling, Grok 생성 결과 검수를 수행",
  },
  {
    slug: "loom",
    title: "Loom AI Idol Track Production Harness",
    shortTitle: "Loom",
    role: "AI Creative, IP Content System, Production Workflow",
    period: "2026.05-2026.06",
    route: "/deck/loom",
    accent: "violet",
    headline: "AI 아이돌 IP를 앨범/트랙 단위 콘텐츠 제품과 최소 개입형 production harness로 구조화한 프로젝트",
    abstract:
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠 제품으로 보고, Root Signal과 Pulso를 앨범/트랙 단위 영상 제작 흐름과 공개 웹 경험으로 설계. 멤버 아카이브, 트랙/스토리보드, CF 콘셉트, Harne 투표를 통해 IP 탐색과 참여 구조를 확장하고, PRE-00부터 publish까지 run artifact, action queue, 사용자 선택/승인 gate로 이어지는 production harness를 함께 구축. 그 안에서 Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno, Grok Build, Grok Imagine을 단계별 도구로 사용",
    finalResult:
      "Loom 최신 웹페이지, Root Signal/Pulso track board, 13명 멤버 identity, Harne vote identity flow, storyboard/video prompt/output registry, social publishing loop를 하나의 AI creative production 사례로 구성",
    media: {
      src: "/loom-deck/saeyan-spotlight.png",
      alt: "Loom M01 Saeyan representative spotlight",
      label: "M01 Saeyan representative spotlight",
      href: "https://loom-signal-deck.vercel.app",
    },
    keyContents: [
      "역할: Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠/IP 제품으로 정의하고 Root Signal/Pulso 트랙 방향, 멤버 identity, 투표 경험을 기획",
      "제작 흐름: PRE-00 research radar부터 song lock, storyboard/prompt, generation review, 05 package, publishing plan, post ledger까지 다음 작업을 산출하는 harness 구축",
      "공개 산출물: 최신 Loom 웹에서 홈, 멤버 아카이브, 트랙, 스토리보드, CF 콘셉트, Harne 투표를 탐색 가능한 proof surface로 구성",
      "Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno 음악 후보, Grok Build 영상 프롬프트 추출, Grok Imagine 영상 생성을 단계별 제작 도구로 사용",
    ],
    deckLinks: [
      {
        label: "Loom Webpage",
        href: "https://loom-signal-deck.vercel.app",
        description: "Root Signal, Pulso, member archive, Harne vote UX를 확인하는 공개 웹 페이지",
      },
    ],
    socialLinks: [
      {
        label: "YouTube",
        href: "https://youtu.be/0vV4CXL3_Qk",
        description: "Pulso official track",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@loom_mm",
        description: "Loom member dance clips",
      },
      {
        label: "X",
        href: "https://x.com/minnns_aheya",
        description: "Public X updates",
      },
    ],
    bullets: [
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠/IP 제품으로 보고 멤버 identity, Harne vote, track release surface, updated web proof surface 구성",
      "Root Signal과 Pulso의 곡 해석, 멤버 파트, storyboard, video prompt, output registry, SNS loop 설계",
      "PRE-00, song lock, 02/02A/02B, 03V, 04 edit, 05 package, publishing plan/post ledger를 action queue와 사용자 선택/승인 gate로 연결하고, Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno, Grok Build, Grok Imagine을 단계별 도구로 쓰는 production harness 구축",
    ],
    outputs: ["updated Loom web proof surface", "Root Signal/Pulso track system", "Harne vote identity flow", "PRE-00-to-publish production harness", "Codex/Suno/Grok toolchain"],
    resumeLine:
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠 제품으로 정의하고, 최신 Loom 웹에 Root Signal/Pulso track board, 멤버 아카이브, Harne vote identity flow, PRE-00부터 publish까지 이어지는 최소 개입형 production harness 및 Codex/Suno/Grok 기반 단계별 제작 toolchain을 구성",
  },
  {
    slug: "adsb",
    title: "ADSB AI-assisted Short-form Execution",
    shortTitle: "ADSB",
    role: "AI Creative, Short-form Execution, Production Workflow",
    period: "2025.09-2026.04",
    route: "/deck/adsb",
    accent: "green",
    headline: "브랜드 무드를 15초 AI 숏폼 제작 흐름으로 전환한 프로젝트",
    abstract:
      "ADSB 산학공동연구에서 dog-and-ball hook과 urban fixed-angle sequence를 중심으로 브랜드 무드를 15초 숏폼 샷보드와 제작 반복, 피드백 반영 흐름으로 연결. 전체 브랜드 성과가 아니라 AI 숏폼 제작 실행의 증거로 배치",
    finalResult:
      "브랜드 mood reading, 15초 shotboard, 제작 반복, feedback revision을 AI creative execution 사례로 구성",
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
    keyContents: [
      "dog-and-ball hook과 urban fixed-angle sequence 중심의 숏폼 기획",
      "Midjourney/Gemini/Nano Banana/Kling 기반 이미지 생성과 피드백 반영 반복",
      "브랜드 성과가 아니라 AI 숏폼 제작 실행 증거로 배치",
    ],
    deckLinks: [
      {
        label: "ADSB PPT Deck",
        href: "/deck/adsb",
        description: "ADSB AI-assisted content execution 단독 덱으로 이동",
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
        description: "ADSB AI-assisted short-form 최종 공개 Reel",
      },
    ],
    bullets: [
      "dog-and-ball hook과 urban fixed-angle sequence를 중심으로 브랜드 무드를 15초 숏폼 샷보드로 전환",
      "Midjourney/Gemini/Nano Banana/Kling 기반 이미지 생성과 피드백 반영 반복",
      "hook, shotboard, short-form execution workflow 관점의 AI creative execution 사례 구성",
    ],
    outputs: ["15s short-form shotboard", "AI short-form execution", "feedback revision loop"],
    resumeLine:
      "ADSB 15초 AI 숏폼 제작 프로세스를 브랜드 reading, shotboard, AI creative execution 관점에서 구조화",
  },
  {
    slug: "aheya",
    title: "AHEYA First-Signal Service Prototype",
    shortTitle: "AHEYA",
    role: "AI Creative, First-signal Flow, Service Prototype",
    period: "2025.09-2026.04",
    route: "/deck/aheya",
    accent: "aqua",
    headline: "AI builder의 공개 아이디어를 후원·피드백·공유·저장으로 이어지는 초기 반응 흐름으로 구조화한 프로젝트",
    abstract:
      "AHEYA에서 AI builder가 공개 아이디어를 제시하고 사용자가 소액 후원, Good/Improve 피드백, 외부 공유, 저장 기록을 남기는 흐름을 콘텐츠형 서비스 프로토타입으로 설계. 성과 검증보다 공개 메시지와 초기 반응 흐름을 점검한 first-signal 시도로 배치",
    finalResult:
      "AHEYA의 초기 반응 흐름, 메시지 구조, 후원·피드백·공유·저장 이벤트 기록 설계를 PPT형 상세 덱으로 구성",
    media: {
      src: "/aheya/aheya-live-lanes.png",
      alt: "AHEYA public website lanes for supporters and builders.",
      label: "AHEYA public website lanes",
      href: "https://aheyabaraya.xyz/",
      layout: "wide",
    },
    keyContents: [
      "AI builder 공개 아이디어 -> 후원/피드백/외부 공유/저장으로 이어지는 초기 반응 흐름",
      "테스트넷/링크 안내 중심 CTA를 초기 반응, 검증 근거, 직접 후원 메시지로 전환",
      "다음 제품/콘텐츠 판단에 활용할 수 있는 이벤트 정의",
    ],
    deckLinks: [
      {
        label: "AHEYA PPT Deck",
        href: "/deck/aheya",
        description: "AHEYA first-signal planning 단독 덱으로 이동",
      },
      {
        label: "AHEYABARAYA Site",
        href: "https://aheyabaraya.xyz/",
        description: "AHEYA 공개 사이트",
      },
    ],
    bullets: [
      "AI builder의 공개 아이디어를 소액 후원, Good/Improve 피드백, 외부 공유, 저장 기록으로 연결하는 초기 반응 흐름 기획",
      "테스트넷/링크 안내 중심 문구를 첫 반응, 검증 근거, 직접 후원 메시지로 재구성하는 메시지 프레이밍 설계",
      "후원, 피드백, 공유, 저장 이벤트를 분리해 다음 제품/콘텐츠 판단에 활용할 수 있는 이벤트 구조 설계",
    ],
    outputs: ["초기 반응 흐름", "message framing", "event tracking structure", "service prototype flow"],
    resumeLine:
      "AHEYA의 초기 반응 흐름과 공개 메시지 개선 방향을 메시지 구조화, 이벤트 설계, 콘텐츠형 서비스 프로토타입 관점에서 구성",
  },
  {
    slug: "bemoon",
    title: "BE;MOON Fashion Trust Rail",
    shortTitle: "BE;MOON",
    role: "Fashion Startup Capstone, Product Strategy, Trust-system Flow",
    period: "2024.09-2024.12",
    route: "",
    accent: "orange",
    headline: "패션 제품의 진위 검증, 디지털 보증서, OMS 연동을 하나의 운영 레일로 정리한 스타트업 기획",
    abstract:
      "BE;MOON은 패션 브랜드가 DPP 압력, 가품 유통, 2차 거래 신뢰 문제를 동시에 다룰 수 있도록 구매 인증, QR/WL 인증, 디지털 보증서 발급, 검증, 혜택/거래 확장, OMS 상태 동기화를 하나의 서비스 구조로 묶은 온라인 패션스타트업 캡스톤디자인 케이스입니다.",
    finalResult:
      "문제 정의, MVP 흐름, 디지털 보증서 SaaS 구조, 검증/거래 플랫폼 방향, 브랜드 운영 적합성, 수익화 가정을 학교 제출용 포트폴리오 섹션으로 재구성",
    media: {
      src: "/bemoon/bemoon-trust-rail.svg",
      alt: "BE;MOON trust rail diagram showing purchase authentication, proof issuance, verification, and OMS sync.",
      label: "BE;MOON trust rail source diagram",
    },
    keyContents: [
      "DPP 규제 대응, 가품 유통, 내부 보증서의 외부 검증 한계를 하나의 문제로 재정의",
      "브랜드 OMS와 연결되는 디지털 보증서 발급 SaaS 및 검증 레일 구성",
      "구매 인증, QR/WL 인증, 지갑/계정 기반 증명 발급, 진위 확인, 혜택/거래, OMS 상태 반영 흐름 정리",
      "브랜드/OMS, BE;MOON Core, 메타데이터/계약, 소비자/외부 채널로 나뉘는 MVP 구조 정리",
      "보증서 발급 SaaS, 검증 시스템, 1차/2차 거래 플랫폼을 사업계획서 가정으로 분리",
      "PPT 원본이 없는 자료는 문서 소스팩으로 별도 정리하고, 최종 편입 시 유민석 외 이름 제거",
    ],
    deckLinks: [],
    bullets: [
      "온라인 패션스타트업 캡스톤디자인 맥락에서 BE;MOON의 DPP/디지털 보증서/검증 플랫폼 기획을 정리",
      "구매 인증, QR/WL 인증, 증명 발급, 진위 검증, 혜택/거래, OMS 동기화를 하나의 패션 trust rail로 구조화",
      "사업계획서와 one-page flow 문서를 기반으로 MVP 구조, 시장 진입 가정, 수익화 가정을 학교 제출용 포트폴리오 섹션으로 정리",
    ],
    outputs: ["problem-solution-flow", "digital warranty SaaS thesis", "verification rail", "OMS sync model", "MVP structure", "business assumption map"],
    resumeLine:
      "BE;MOON에서 패션 브랜드의 DPP 대응, 가품 방지, 디지털 보증서 검증 문제를 구매 인증-QR/WL 인증-증명 발급-진위 확인-OMS 동기화로 이어지는 trust-system flow와 MVP 사업 구조로 정리",
  },
  {
    slug: "sfti",
    title: "SFTI-CMU Research Communication Support",
    shortTitle: "SFTI-CMU",
    role: "Research Communication, English Abstract, Poster Structure",
    period: "2025.05-2025.06",
    route: "/deck/sfti",
    accent: "aqua",
    headline: "감정 콘텐츠와 시각 정체성 아이디어를 영어 초록과 포스터형 자료로 구체화한 리서치 커뮤니케이션 보조 사례",
    abstract:
      "SFTI-CMU는 자소서 본문에서 앞세우는 MUSINSA, ADSB, Loom을 대체하는 메인 성과가 아니라, 추상적인 AI-generated emotional content 아이디어를 niche fashion brand의 콘텐츠 확장 한계와 identity-based visual clustering 관점으로 좁혀 외부 독자가 읽을 수 있는 English abstract와 poster-style structure로 만든 보조 사례입니다.",
    finalResult:
      "English abstract draft, poster-style research structure, identity-based visual clustering framework, review result/revision comments를 공개 가능한 지원 사례로 구성",
    media: {
      src: "/sfti/source-assets/sfti-result.webp",
      alt: "SFTI-CMU review result and revision-comment evidence.",
      label: "Review/revision evidence and abstract structure",
    },
    keyContents: [
      "vague AI trend idea를 niche fashion brand의 content limitation과 identity-based visual clustering 문제로 좁힌 framing",
      "English abstract draft와 poster-style structure로 problem, approach, framework를 외부 독자용 흐름으로 정리",
      "review result와 revision comments를 바탕으로 citation support, grammar/format, structure clarity를 보정",
      "AHEYA의 서비스 첫인상, 캐릭터, 이미지·짧은 영상 자산으로 이어지는 감정 콘텐츠/시각 정체성 프레임의 앞단 증거로 배치",
    ],
    deckLinks: [
      {
        label: "SFTI PPT Deck",
        href: "/deck/sfti",
        description: "SFTI research communication support 단독 덱으로 이동",
      },
    ],
    bullets: [
      "AI-generated emotional content idea를 English abstract와 poster-style research structure로 정리",
      "niche brand content limitation과 identity-based visual clustering을 중심으로 research framing 구성",
      "review result/revision comments 기반 citation support, grammar/format, structure clarity 보정",
    ],
    outputs: ["English abstract draft", "poster-style research structure", "identity-based visual clustering framework", "review/revision evidence"],
    resumeLine:
      "2025 SFTI-CMU International Conference 제출 자료에서 AI-generated emotional content strategy를 niche fashion brand의 content limitation과 identity-based visual clustering 관점으로 좁혀 English abstract draft, poster-style research structure, review/revision evidence로 구성",
  },
];

export const projectOrder = projects.map((project) => project.slug);

export function getProject(slug: PortfolioProject["slug"]) {
  return projects.find((project) => project.slug === slug);
}
