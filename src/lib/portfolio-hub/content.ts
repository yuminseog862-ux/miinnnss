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
  headline: "AI Creative Portfolio",
  subline:
    "브랜드·제품·IP 아이디어를 숏폼 영상, 이미지/음악 콘텐츠, 콘텐츠형 서비스 프로토타입으로 구현해왔습니다.",
  profile:
    "브랜드·제품·IP 아이디어를 숏폼 영상, 이미지/음악 콘텐츠, 콘텐츠형 서비스 프로토타입으로 구현해왔습니다. 무신사 AI 광고제 출품작, AI 아이돌 IP 서비스 프로토타입 Loom, ADSB AI 숏폼 크리에이티브, AHEYA 후원·피드백 서비스 기획을 진행하며 브리프 해석, 메시지 구조화, 키비주얼/스토리보드 설계, AI 생성 결과 검수, 컷 편집 흐름 조정, 사용자 행동 기준 정리까지 연결했습니다. 생성형 AI를 단순 제작 도구로 쓰는 것보다, 기획 의도를 실제 공개 가능한 콘텐츠와 서비스 경험으로 만드는 데 강점이 있습니다.",
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
    route: "/musinsa",
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
        label: "Project Abstract",
        href: "/musinsa",
        description: "이력서용 핵심 문장과 산출물 요약",
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
    route: "/loom",
    accent: "violet",
    headline: "AI 아이돌 IP를 앨범/트랙 단위 콘텐츠 제품과 최소 개입형 production harness로 구조화한 프로젝트",
    abstract:
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠 제품으로 보고, Track 01 Root Signal과 LOW track을 앨범/트랙 단위 영상 제작 흐름으로 설계. Harne 투표를 통해 멤버 정체성을 부여하는 기능 방향과 PRE-00부터 publish까지 run artifact, action queue, 사용자 선택/승인 gate로 이어지는 production harness를 함께 구축하고, 그 안에서 Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno, Grok Build, Grok Imagine을 단계별 도구로 사용",
    finalResult:
      "Loom Track 01 Root Signal, LOW track 제작 board, 13명 멤버 identity, Harne vote identity flow, storyboard/video prompt/output registry, social publishing loop를 하나의 AI creative production 사례로 구성",
    media: {
      src: "/loom-deck/saeyan-spotlight.png",
      alt: "Loom M01 Saeyan representative spotlight",
      label: "M01 Saeyan representative spotlight",
    },
    keyContents: [
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠/IP 제품으로 정의",
      "Track 01 Root Signal과 LOW track을 앨범/트랙 단위 영상 제작 흐름으로 설계",
      "PRE-00 research radar부터 05 package, publishing plan, post ledger까지 최소 개입으로 다음 작업을 산출하는 harness 구축",
      "Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno 음악 후보, Grok Build 영상 프롬프트 추출, Grok Imagine 영상 생성을 단계별 제작 도구로 사용",
    ],
    deckLinks: [
      {
        label: "Loom Webpage",
        href: "https://loom-signal-deck.vercel.app",
        description: "Track, member archive, Harne vote UX를 확인하는 공개 웹 페이지",
      },
      {
        label: "Project Abstract",
        href: "/loom",
        description: "이력서용 핵심 문장과 산출물 요약",
      },
    ],
    bullets: [
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠/IP 제품으로 보고 멤버 identity, Harne vote, track release surface 구성",
      "Track 01 Root Signal과 LOW track의 곡 해석, 멤버 파트, storyboard, video prompt, output registry, SNS loop 설계",
      "PRE-00, song lock, 02/02A/02B, 03V, 04 edit, 05 package, publishing plan/post ledger를 action queue와 사용자 선택/승인 gate로 연결하고, Codex 사용(리서치/기획, 이미지 제작 준비, 초안 편집), Suno, Grok Build, Grok Imagine을 단계별 도구로 쓰는 production harness 구축",
    ],
    outputs: ["track-based AI idol content system", "Harne vote identity flow", "PRE-00-to-publish production harness", "Codex/Suno/Grok toolchain"],
    resumeLine:
      "Loom을 13명 AI 아이돌 그룹이자 Harne 참여형 콘텐츠 제품으로 정의하고, Track 01 Root Signal/LOW track 제작 board, Harne vote identity flow, PRE-00부터 publish까지 이어지는 최소 개입형 production harness 및 Codex/Suno/Grok 기반 단계별 제작 toolchain을 웹 포트폴리오와 문서로 구성",
  },
  {
    slug: "adsb",
    title: "ADSB AI-assisted Short-form Execution",
    shortTitle: "ADSB",
    role: "AI Creative, Short-form Execution, Production Workflow",
    period: "2025.09-2026.04",
    route: "/adsb",
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
    },
    keyContents: [
      "dog-and-ball hook과 urban fixed-angle sequence 중심의 숏폼 기획",
      "Midjourney/Gemini/Nano Banana/Kling 기반 이미지 생성과 피드백 반영 반복",
      "브랜드 성과가 아니라 AI 숏폼 제작 실행 증거로 배치",
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
    route: "/aheya",
    accent: "aqua",
    headline: "AI builder의 공개 아이디어를 후원·피드백·공유·저장으로 이어지는 초기 반응 흐름으로 구조화한 프로젝트",
    abstract:
      "AHEYA에서 AI builder가 공개 아이디어를 제시하고 사용자가 소액 후원, Good/Improve 피드백, X 공유, 저장 기록을 남기는 흐름을 콘텐츠형 서비스 프로토타입으로 설계. 성과 검증보다 공개 메시지와 초기 반응 흐름을 점검한 first-signal 시도로 배치",
    finalResult:
      "AHEYA의 초기 반응 흐름, 메시지 구조, 후원·피드백·공유·저장 이벤트 기록 설계를 PPT형 상세 덱으로 구성",
    media: {
      src: "/aheya/aheya-home-hero.webp",
      alt: "AHEYA public surface hero",
      label: "AHEYA public surface",
    },
    keyContents: [
      "AI builder 공개 아이디어 -> 후원/피드백/공유/저장으로 이어지는 초기 반응 흐름",
      "테스트넷/링크 안내 중심 CTA를 초기 반응, 검증 근거, 직접 후원 메시지로 전환",
      "다음 제품/콘텐츠 판단에 활용할 수 있는 이벤트 정의",
    ],
    deckLinks: [
      {
        label: "AHEYA PPT Deck",
        href: "/deck/aheya-adsb#slide-09",
        description: "AHEYA first-signal planning 섹션으로 이동",
      },
      {
        label: "Project Abstract",
        href: "/aheya",
        description: "이력서용 핵심 문장과 산출물 요약",
      },
    ],
    bullets: [
      "AI builder의 공개 아이디어를 소액 후원, Good/Improve 피드백, X 공유, 저장 기록으로 연결하는 초기 반응 흐름 기획",
      "테스트넷/링크 안내 중심 문구를 첫 반응, 검증 근거, 직접 후원 메시지로 재구성하는 메시지 프레이밍 설계",
      "후원, 피드백, 공유, 저장 이벤트를 분리해 다음 제품/콘텐츠 판단에 활용할 수 있는 이벤트 구조 설계",
    ],
    outputs: ["초기 반응 흐름", "message framing", "event tracking structure", "service prototype flow"],
    resumeLine:
      "AHEYA의 초기 반응 흐름과 X 공개 문구 개선 방향을 메시지 구조화, 이벤트 설계, 콘텐츠형 서비스 프로토타입 관점에서 구성",
  },
];

export const projectOrder = projects.map((project) => project.slug);

export function getProject(slug: PortfolioProject["slug"]) {
  return projects.find((project) => project.slug === slug);
}
