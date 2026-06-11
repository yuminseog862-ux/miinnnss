export type PortfolioProject = {
  slug: "musinsa" | "loom" | "aheya" | "adsb";
  title: string;
  shortTitle: string;
  role: string;
  period: string;
  route: string;
  accent: "ice" | "aqua" | "green" | "violet";
  headline: string;
  abstract: string;
  finalResult: string;
  media: {
    src: string;
    alt: string;
    label: string;
  };
  keyContents: string[];
  deckLinks: {
    label: string;
    href: string;
    description: string;
  }[];
  bullets: string[];
  outputs: string[];
  resumeLine: string;
};

export const resumeProfile = {
  headline: "AI Content Marketer / Creative Marketer",
  subline:
    "브랜드/캠페인 브리프를 고객 메시지, 숏폼 AI 영상, 콘텐츠 아카이브, SNS 게시 흐름으로 전환하는 신입 마케터",
  profile:
    "브랜드/캠페인 브리프를 타깃이 이해할 수 있는 메시지와 숏폼 콘텐츠 구조로 전환하는 데 집중. 무신사 AI 광고제, Loom/Aurora V2, AHEYA/ADSB 프로젝트에서 메시지 문장, 영상 구성, 프롬프트/모션 디렉션, 웹 포트폴리오 정리, 게시 후 초기 반응 기록까지 직접 수행. 신입 포지션 기준 성과 과장보다 기획 의도, 제작 과정, 공개 결과물을 함께 확인할 수 있는 AI 콘텐츠 마케팅 역량 설명",
  competencies: [
    ["PMM Messaging", "브랜드/캠페인 브리프 해석, 핵심 메시지와 CTA 구성, 고객이 이해할 수 있는 문장 정리"],
    ["Content Marketing", "숏폼 훅, 기억 문장, 영상 구성, 콘텐츠 아카이브, 게시 후 초기 반응 확인"],
    ["AI Creative Production", "프롬프트 디렉션, 이미지-투-비디오 제작 흐름, 모션 디렉션, 결과 검수"],
    ["SNS Publishing", "YouTube/Instagram 업로드, 게시 링크와 초기 반응 기록, 다음 개선점 정리"],
    ["Building Support", "Next.js/React 기반 포트폴리오 페이지 구성, 결과물 링크와 자료 구조화"],
  ],
};

export const projects: PortfolioProject[] = [
  {
    slug: "musinsa",
    title: "MUSINSA Mujinjang AI Ad - 편견을 벗다, 다양성을 입다",
    shortTitle: "MUSINSA",
    role: "PMM, Content Marketing, AI Video Generation",
    period: "2026.05-2026.06",
    route: "/musinsa",
    accent: "ice",
    headline: "무신사 무진장 AI 광고제 브리프를 다양성 메시지의 24초 숏폼 CF로 전환한 프로젝트",
    abstract:
      "할인 고지형 광고가 아니라 `편견을 벗다, 다양성을 입다, 무진장을 만나다` 메시지로 읽히도록 영상 구조 정리. 다양한 인물과 스타일을 통해 무진장을 더 넓은 패션 이벤트로 보여주는 숏폼 광고 사례 배치",
    finalResult:
      "24초 AI 숏폼 광고, YouTube 공개 영상, 핵심 메시지 구조, 48시간 초기 조회 반응을 하나의 포트폴리오 사례로 정리",
    media: {
      src: "https://i.ytimg.com/vi/70blJ_6wh6s/maxresdefault.jpg",
      alt: "MUSINSA Mujinjang AI ad final video thumbnail",
      label: "MUSINSA final video thumbnail",
    },
    keyContents: [
      "`편견을 벗다, 다양성을 입다, 무진장을 만나다`를 중심으로 한 메시지 구조",
      "무신사를 할인 이벤트가 아니라 다양한 스타일을 만나는 패션 경험으로 해석",
      "게시 후 48시간 기준 Instagram 약 1,500 views / YouTube 약 1,400 views 초기 반응 기록",
    ],
    deckLinks: [
      {
        label: "MUSINSA PPT Deck",
        href: "/deck/musinsa",
        description: "CF 결과물, 메시지 구조, 공개 영상 중심의 하위 포트폴리오",
      },
      {
        label: "Project Abstract",
        href: "/musinsa",
        description: "이력서용 핵심 문장과 산출물 요약",
      },
    ],
    bullets: [
      "무신사 무진장 AI 광고제 브리프 기반 `편견을 벗다, 다양성을 입다, 무진장을 만나다` 메시지의 24초 AI 숏폼 광고 기획/제작",
      "할인 고지보다 다양한 인물과 스타일이 만나는 패션 경험이 먼저 읽히도록 콘셉트, 장면 흐름, 공개 카피 정리",
      "YouTube/Instagram 직접 게시, 게시 후 48시간 기준 Instagram 약 1,500 views, YouTube 약 1,400 views의 초기 조회 반응 기록",
    ],
    outputs: ["24s short-form CF", "diversity message concept", "YouTube public video", "Instagram/YouTube first reaction snapshot"],
    resumeLine:
      "무신사 무진장 AI 광고제 맥락에서 `편견을 벗다, 다양성을 입다, 무진장을 만나다` 메시지의 24초 AI 숏폼 광고 기획/제작, 직접 게시 후 48시간 기준 Instagram 약 1,500 views, YouTube 약 1,400 views의 초기 조회 반응 기록",
  },
  {
    slug: "loom",
    title: "Loom / Aurora V2 AI Idol Content System",
    shortTitle: "Loom / Aurora V2",
    role: "AI Content Production, Content Archive, SNS Publishing",
    period: "2026.05-2026.06",
    route: "/loom",
    accent: "violet",
    headline: "AI 아이돌 콘텐츠 IP를 웹 포트폴리오와 제작 운영 흐름으로 정리한 프로젝트",
    abstract:
      "M01 Saeyan을 첫 공개 진입점으로 두고, 13명 AI 아이돌 그룹 Loom의 Track 01, 멤버 identity board, storyboard, stage cut archive, CF lane, Harne Vote local prototype을 하나의 웹 포트폴리오로 구성. Aurora V2 제작 흐름은 제작, 검토, 패키징, 게시 계획, 반응 기록을 연결하는 운영 구조로 정리",
    finalResult:
      "M01 Saeyan 대표 공개 컷, Loom Track 01, 13명 멤버 identity, storyboard/stage archive, CF lane, Harne Vote prototype, 제작 운영 흐름을 하나의 AI 콘텐츠 마케팅 사례로 정리",
    media: {
      src: "/loom-deck/saeyan-spotlight.png",
      alt: "Loom M01 Saeyan representative spotlight",
      label: "M01 Saeyan representative spotlight",
    },
    keyContents: [
      "M01 Saeyan을 Loom의 첫 공개 진입점이자 대표 캐릭터로 배치",
      "13 character boards, 46 stage cuts, 4 storyboard anchors, 3 CF campaign entries",
      "리서치, 선곡/스토리보드, 프롬프트 패킷, 생성 결과 검토, 게시용 패키징 흐름 정리",
    ],
    deckLinks: [
      {
        label: "Loom PPT Deck",
        href: "/deck/loom",
        description: "콘텐츠 제작 운영 흐름과 공개 포트폴리오를 보여주는 하위 포트폴리오",
      },
      {
        label: "Project Abstract",
        href: "/loom",
        description: "이력서용 핵심 문장과 산출물 요약",
      },
      {
        label: "Loom Web Repo",
        href: "https://github.com/aheyabaraya/loom-signal-deck",
        description: "Track, member archive, Harne vote UX를 분리한 공개 웹 저장소",
      },
    ],
    bullets: [
      "M01 Saeyan을 첫 공개 진입점으로 둔 13명 AI 아이돌 그룹 Loom의 Track 01, 멤버 identity board, storyboard, stage cut archive, CF lane, Harne Vote prototype 웹 포트폴리오 구성",
      "13 character boards, 46 stage cuts, 4 storyboard anchors, 3 CF campaign entries 등 제작 결과물을 탐색 가능한 콘텐츠 아카이브로 정리",
      "리서치, 스토리보드, 프롬프트 패킷, 생성 결과 검토, 게시용 패키징으로 이어지는 AI 콘텐츠 제작 운영 흐름 문서화",
    ],
    outputs: ["web portfolio", "AI content archive", "production workflow", "social publishing record"],
    resumeLine:
      "M01 Saeyan을 첫 공개 진입점으로 둔 13명 AI 아이돌 그룹 Loom의 웹 포트폴리오와 AI 콘텐츠 제작 운영 흐름을 Next.js, React, TypeScript 기반으로 구현 및 문서화",
  },
  {
    slug: "aheya",
    title: "AHEYA Product-GTM Planning",
    shortTitle: "AHEYA",
    role: "PMM/GTM, Product Planning, Early Signal Design",
    period: "2025.09-2026.04",
    route: "/aheya",
    accent: "aqua",
    headline: "AI builder의 공개 아이디어를 초기 반응 흐름과 GTM 메시지로 구조화한 프로젝트",
    abstract:
      "AHEYA에서 AI builder가 공개 아이디어를 제시하고 사용자가 소액 후원, Good/Improve 피드백, X 공유, 저장 기록을 남기는 흐름을 콘텐츠 중심 GTM 관점으로 정리. PM 자체보다 마케팅 판단을 뒷받침하는 product/GTM 설계 사례로 배치",
    finalResult:
      "AHEYA의 초기 반응 흐름, PMM 메시지 구조, 이벤트 기록 설계, product/GTM 판단 흐름을 PPT형 상세 덱으로 정리",
    media: {
      src: "/aheya/aheya-home-hero.webp",
      alt: "AHEYA public surface hero",
      label: "AHEYA public surface",
    },
    keyContents: [
      "AI builder 공개 아이디어 -> 후원/피드백/공유/저장으로 이어지는 초기 반응 흐름",
      "테스트넷/링크 안내 중심 CTA를 초기 반응, 검증 근거, 직접 후원 메시지로 전환",
      "마케팅 판단을 뒷받침하는 product/GTM 구조와 이벤트 정의",
    ],
    deckLinks: [
      {
        label: "AHEYA PPT Deck",
        href: "/deck/aheya-adsb#slide-09",
        description: "AHEYA product/GTM planning 섹션으로 이동",
      },
      {
        label: "Project Abstract",
        href: "/aheya",
        description: "이력서용 핵심 문장과 산출물 요약",
      },
    ],
    bullets: [
      "AI builder의 공개 아이디어를 소액 후원, Good/Improve 피드백, X 공유, 저장 기록으로 연결하는 초기 반응 흐름 기획",
      "테스트넷/링크 안내 중심 문구를 첫 반응, 검증 근거, 직접 후원 메시지로 재구성하는 메시지 프레이밍 정리",
      "후원, 피드백, 공유, 저장 이벤트를 분리해 마케팅 판단에 활용할 수 있는 이벤트 구조 설계",
    ],
    outputs: ["초기 반응 흐름", "PMM message framing", "event tracking structure", "content-led GTM flow"],
    resumeLine:
      "AHEYA의 초기 반응 흐름과 X 공개 문구 개선 방향을 Product/GTM, 이벤트 설계, PMM 메시지 구조화 관점에서 정리",
  },
  {
    slug: "adsb",
    title: "ADSB AI-assisted Short-form Execution",
    shortTitle: "ADSB",
    role: "AI Creative Direction, Prompt/Motion Direction",
    period: "2025.09-2026.04",
    route: "/adsb",
    accent: "green",
    headline: "브랜드 무드를 15초 AI 숏폼 제작 흐름으로 전환한 프로젝트",
    abstract:
      "ADSB 산학공동연구에서 dog-and-ball hook과 urban fixed-angle sequence를 중심으로 브랜드 무드를 숏폼 샷보드, frame generation, motion test, feedback revision으로 연결. 전체 브랜드 성과가 아니라 AI creative direction과 제작 실행력의 증거로 배치",
    finalResult:
      "브랜드 mood reading, 15초 shotboard, prompt/motion direction, frame generation, feedback revision을 AI creative execution 사례로 정리",
    media: {
      src: "/adsb/adsb-cover.webp",
      alt: "ADSB AI short-form visual direction",
      label: "ADSB short-form visual direction",
    },
    keyContents: [
      "dog-and-ball hook과 urban fixed-angle sequence 중심의 숏폼 기획",
      "Midjourney/Gemini/Nano Banana/Kling 기반 frame generation과 motion test",
      "브랜드 성과가 아니라 AI creative direction과 제작 실행 증거로 배치",
    ],
    deckLinks: [
      {
        label: "ADSB PPT Deck",
        href: "/deck/aheya-adsb#slide-30",
        description: "ADSB AI-assisted content execution 섹션으로 이동",
      },
      {
        label: "Project Abstract",
        href: "/adsb",
        description: "이력서용 핵심 문장과 산출물 요약",
      },
    ],
    bullets: [
      "dog-and-ball hook과 urban fixed-angle sequence를 중심으로 브랜드 무드를 15초 숏폼 샷보드로 전환",
      "Midjourney/Gemini/Nano Banana/Kling 기반 frame generation, motion test, 피드백 반영 반복",
      "hook, prompt direction, motion direction, short-form execution workflow 관점의 AI creative direction 사례 정리",
    ],
    outputs: ["15s short-form shotboard", "frame generation", "motion test", "feedback revision loop"],
    resumeLine:
      "ADSB 15초 AI 숏폼 제작 프로세스를 브랜드 reading, prompt/motion direction, AI creative execution 관점에서 구조화",
  },
];

export const projectOrder = projects.map((project) => project.slug);

export function getProject(slug: PortfolioProject["slug"]) {
  return projects.find((project) => project.slug === slug);
}
