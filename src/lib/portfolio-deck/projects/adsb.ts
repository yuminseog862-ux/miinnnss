import type { Slide } from "../types";

export const adsbSlides = [
  {
    no: 30,
    section: "ADSB",
    title: "ADSB AI-assisted Short-form Execution",
    label: "2025 Industry–Academia Collaboration",
    accent: "violet",
    variant: "evidence",
    intent: "ADSB를 브랜드 리서치와 피드백 반영을 바탕으로 한 독립적인 AI 숏폼 제작 사례로 소개한다.",
    claim:
      "Andersson Bell 브랜드 무드를 dog-and-ball hook과 고정 앵글 장면 규칙으로 좁히고, 후보 비교와 피드백 반영을 15초 숏폼으로 연결한 제작 사례",
    include: [
      "Program: 생성형 AI기반 패션 브랜드 VIRTUAL CONTENT 개발",
      "Period: 2025.09.01-2025.11.07",
      "Role: brand research, shotboard, AI frame/motion direction, feedback revision",
      "Boundary: 브랜드 전략 성과, 공식 캠페인, 최종 retouching 단독 기여는 주장하지 않음",
    ],
    slots: [
      "Context: 2025 산학공동연구 · Andersson Bell",
      "Role: brand research / shotboard / frame & motion direction",
      "Tools: Midjourney / Gemini / Nano Banana / Kling",
      "Output: candidate frames / final Instagram Reel / revision record",
    ],
    media: { src: "/adsb/adsb-cover.webp", alt: "ADSB cover visual", label: "Final visual direction" },
    links: [
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
        description: "최종 숏폼 결과물 확인용 외부 링크",
      },
    ],
    note:
      "핵심은 전체 브랜드 전략 소유가 아니라, 공유된 브랜드 해석을 dog-and-ball hook과 영상화 가능한 장면·움직임 방향으로 좁힌 제작 판단이다.",
  },
  {
    no: 32,
    section: "ADSB",
    title: "Mood & First-frame Direction",
    label: "Brand Reading",
    accent: "amber",
    variant: "matrix",
    custom: "portfolioMediaFocus",
    intent: "브랜드 톤을 첫 프레임의 모티프와 장면 규칙으로 번역한 과정을 보여준다.",
    claim:
      "Mutated Mundane, 신호등, 횡단보도, 도시적 고정 앵글을 dog-and-ball motif와 연결해 첫 프레임에서 모티프가 읽히도록 정리한 방향",
    include: ["Mutated Mundane", "Dog-and-ball hook", "Urban restraint", "First-frame readability"],
    slots: [
      "Mutated Mundane",
      "dog-and-ball hook",
      "fixed-angle urban sequence",
      "First-frame rule",
    ],
    table: {
      headers: ["분석 요소", "본 내용", "콘텐츠 반영"],
      rows: [
        ["브랜드 톤", "실험적이지만 과한 판타지보다 도시적이고 절제된 인상", "고정 앵글, 도시 배경, 제한된 오브젝트 중심"],
        ["핵심 모티프", "Mutated Mundane, 신호등, 횡단보도, dog-and-ball hook으로 일상의 비틀림을 압축", "브랜드 무드가 한 컷 안에서 바로 읽히도록 반복"],
        ["무드 기준", "밝고 컬러풀한 정오 톤, 도시/외곽 공간 대비, 과거 문화유산을 현대 일상으로 옮기는 오마주 검토", "이미지 톤앤무드, 배경 후보, key message"],
        ["AI 리스크", "콜라주와 과한 생성 효과는 무드 희석, 시선 분산, 임팩트 부족으로 이어짐", "콜라주 방식 폐기, fixed-angle sequence로 재구성"],
      ],
    },
    media: { src: "/adsb/source-assets/adsb-moodboard.webp", alt: "ADSB moodboard", label: "Moodboard source" },
  },
  {
    no: 33,
    section: "ADSB",
    title: "Hook & Motif Direction",
    label: "Motif Direction",
    accent: "aqua",
    variant: "matrix",
    custom: "portfolioCriteriaCards",
    intent: "브랜드 무드 해석을 실제 콘텐츠 방향과 숏폼 장면 구조로 전환한다.",
    claim:
      "초기 확산형 아이디어를 dog-and-ball hook과 고정 앵글 컷 시퀀스로 좁혀 숏폼의 첫 인상을 정리",
    include: [
      "공유된 brand reading에서 훅, 모티프, 장면 축을 먼저 정리",
      "실무 피드백을 concept correction과 production rule로 변환",
      "콜라주 중심 방향은 무드 희석과 임팩트 부족 때문에 폐기",
      "고정 앵글 기반으로 배경, 인물, dog-and-ball object를 재배치",
    ],
    slots: [
      "Discarded direction: collage-heavy / weak focus / mood dilution",
      "Kept direction: dog + ball + crosswalk / fixed-angle / urban noon mood",
      "Feedback rule: idea diffusion을 줄이고 메시지/톤 일관성 강화",
      "Output rule: 15s, restrained, brand-fit",
    ],
    process: [
      "Shared brand reading",
      "Motif selection",
      "Discard collage-heavy direction",
      "Keep fixed-angle dog-and-ball sequence",
    ],
    table: {
      headers: ["Decision", "Content", "Use"],
      rows: [
        ["Brand Reading", "공유된 브랜드 reading에서 훅, 모티프, 장면 축을 먼저 정리", "mood alignment"],
        ["Motif Selection", "dog-and-ball hook을 fixed-angle urban sequence의 중심 오브젝트로 유지", "first-frame readability"],
        ["Discarded Direction", "collage-heavy direction은 weak focus와 mood dilution 때문에 제외", "narrowing rule"],
        ["Kept Direction", "dog + ball + crosswalk + urban noon mood를 남김", "video-ready direction"],
      ],
    },
    media: { src: "/adsb/adsb-planning-draft.webp", alt: "ADSB planning draft", label: "Planning draft" },
    note:
      "피드백을 aesthetic commentary가 아니라 production rule로 읽고, 장면을 더하는 대신 방향을 좁힌 점이 이 케이스의 핵심 판단이다.",
  },
  {
    no: 34,
    section: "ADSB",
    title: "AI Production Workflow",
    label: "AI Workflow",
    accent: "violet",
    variant: "matrix",
    custom: "portfolioCriteriaCards",
    intent: "AI를 단순 생성 도구가 아니라 제작 워크플로우로 활용한 방식을 단계별로 보여준다.",
    claim:
      "브랜드 리서치 → 후보 프레임 제작·비교 → motion test → 피드백 반영으로 이어지는 AI-assisted 숏폼 제작 흐름",
    include: [
      "Brand reading",
      "Generated frames",
      "Frame adjustment",
      "Motion test",
      "Feedback revision",
      "Final retouching ownership은 주장하지 않음",
    ],
    slots: [
      "Production flow",
      "Image-to-video test",
      "Revision criteria: brand fit, impact, tone, cut flow",
      "Feedback: report → visual direction → video",
      "Output: candidate frames → final Reel",
    ],
    process: [
      "Brand reading",
      "Generated frames",
      "Frame adjustment",
      "Motion test",
      "Feedback revision",
    ],
    table: {
      headers: ["Step", "Content", "Evidence use"],
      rows: [
        ["Brand Reading", "공유된 브랜드 무드를 dog-and-ball hook과 urban fixed-angle rule로 압축", "creative direction"],
        ["Generated Frames", "Midjourney / Gemini / Nano Banana로 후보 frame을 만들고 비교", "frame options"],
        ["Frame Adjustment", "객체·구도·배경·화면 배치를 조정", "image readiness"],
        ["Motion Test", "Kling으로 움직임과 컷 흐름이 유지되는지 테스트", "video readiness"],
        ["Feedback Revision", "피드백을 취향 코멘트가 아니라 다음 production rule로 반영", "revision loop"],
      ],
    },
    media: { src: "/adsb/adsb-production.webp", alt: "ADSB production workflow board", label: "Production workflow" },
    note:
      "AI는 단독 이미지 생성 증거가 아니라, 브랜드 무드 해석·후보 비교·영상화·피드백 반영을 잇는 제작 흐름으로 활용했다.",
  },
  {
    no: 35,
    section: "ADSB",
    title: "Prompt & Motion Direction",
    label: "Prompt Direction",
    accent: "cyan",
    variant: "matrix",
    custom: "portfolioCriteriaCards",
    intent: "프롬프트 원문 보존이 아니라 반복 기준과 선별 기준을 갖고 운영한 방향성을 보여준다.",
    claim:
      "더 많은 이미지를 만드는 과정이 아니라 subject, object, camera, motion, negative constraint를 조정하며 남길 컷의 규칙을 정한 반복 과정",
    include: ["Prompt direction", "Motion tuning", "Discard rule", "Selection criteria"],
    slots: [
      "Prompt structure: motif, subject, pose, background, camera, lighting, mood",
      "Iteration log: generate -> compare -> discard -> revise",
      "Discarded examples: collage, tone diffusion, weak impact",
      "Selected examples: fixed-angle, clear motif, stronger first frame",
      "Boundary: 프롬프트 원문 보존본을 증거로 주장하지 않음",
    ],
    table: {
      headers: ["Card", "Content", "Decision use"],
      rows: [
        ["Draft Label", "green-screen / generated variants는 final output이 아니라 prompt-movement test로 표시", "not final brand output"],
        ["Motion Readiness", "Kling으로 움직임을 붙였을 때 무드가 유지되는지 확인", "image-to-video readiness"],
        ["Selection Criteria", "과한 collage, tone diffusion, weak impact를 제거하고 남길 컷을 선택", "brand-fit selection"],
      ],
    },
    media: {
      src: "/adsb/adsb-images-draft.webp",
      alt: "ADSB generated draft variants",
      label: "Draft variants / prompt-movement test",
    },
    note:
      "Prompt & Motion Direction은 exact prompt archive가 아니라, image-to-video 테스트를 위해 subject, object, camera, motion, negative constraint를 조정한 direction logic이다.",
  },
  {
    no: 36,
    section: "ADSB",
    title: "Output",
    label: "Final Reel",
    accent: "amber",
    variant: "matrix",
    custom: "portfolioInstagramOutput",
    intent: "최종 Instagram Reel을 실제 공개 산출물로 보여준다.",
    claim:
      "dog-and-ball hook, fixed-angle crosswalk, Kling image-to-video iteration으로 수렴한 공개 Instagram Reel",
    include: [
      "Final Instagram Reel",
      "Generated image set",
      "Kling-based short-form output",
      "Prompt variants and feedback revision trail",
    ],
    slots: [
      "Final Instagram Reel",
      "Generated frame set",
      "Kling-based output",
      "Instagram reel / public proof",
    ],
    table: {
      headers: ["Proof", "Output", "Purpose"],
      rows: [
        ["Final Reel", "Published Instagram short-form", "public proof of the finished output"],
        ["Hook", "dog-and-ball / crosswalk / fixed camera", "first-frame readability"],
        ["Production", "generated frames -> motion test -> final video", "AI-assisted content execution"],
      ],
    },
    embed: {
      type: "instagram",
      src: "https://www.instagram.com/reel/DRvZIP1EosJ/embed",
      href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
      title: "ADSB final Instagram Reel",
    },
    links: [
      {
        label: "Open Reel",
        href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
        description: "Instagram에서 최종 공개 Reel 확인",
      },
    ],
  },
  {
    no: 37,
    section: "ADSB",
    title: "2025 Conference Submission Poster",
    label: "Public Context Evidence",
    accent: "cyan",
    variant: "evidence",
    intent: "2025 한국의류산업학회 추계학술대회 제출 포스터를 공개 가능한 맥락 증거로 보여준다.",
    claim:
      "2025 한국의류산업학회 추계학술대회 제출 포스터 「생성형 AI 기반 패션산업 산학협력의 새로운 패러다임 - 앤더슨벨 (Andersson Bell) 콘텐츠 제작 사례」의 공개용 버전",
    include: [
      "2025 한국의류산업학회 추계학술대회 포스터",
      "생성형 AI기반 패션 브랜드 VIRTUAL CONTENT 개발",
      "공개 포트폴리오용으로 저자·소속 라인 제외",
    ],
    slots: [
      "Source: 2025 한국의류산업학회 추계학술대회 제출 포스터",
      "Context: Andersson Bell 산학공동연구",
      "Public version: 저자·소속 라인 제외",
    ],
    media: {
      src: "/adsb/adsb-final-poster-public.png",
      alt: "Public version of the ADSB final submission PPT poster with author and affiliation name lines removed.",
      label: "2025 conference poster / public version",
    },
    note:
      "원본 PPT 포스터의 저자·소속 이름 라인은 공개 포트폴리오에서 제외하고, 산학협력 콘텐츠 제작 사례의 포스터 본문만 남긴다.",
  },
] satisfies Slide[];
