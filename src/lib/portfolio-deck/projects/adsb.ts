import type { Slide } from "../types";

export const adsbSlides = [
  {
    no: 30,
    section: "ADSB",
    title: "ADSB Overview",
    label: "Second Main Case",
    accent: "violet",
    variant: "evidence",
    intent: "ADSB를 AHEYA의 부록이 아니라 두 번째 메인 콘텐츠 크리에이션 케이스로 소개한다.",
    claim:
      "Andersson Bell 산학공동연구에서 dog-and-ball hook, prompt direction, image-to-video iteration으로 정리한 AI short-form creative direction case",
    include: [
      "Summary: 생성형 AI 기반 fashion short-form creative direction case",
      "Period: 2025.09.01-2025.11.07 산학공동연구",
      "My Role: dog-and-ball hook, motif rule, prompt direction, motion direction, image-to-video iteration",
      "Boundary: 전체 브랜드 전략, 캠페인 성과, 최종 retouching 단독 기여는 주장하지 않음",
    ],
    slots: [
      "Role: dog-and-ball hook / prompt & motion direction",
      "Tools: Midjourney / Gemini / Nano Banana / Kling",
      "Output: storyboard package / generated frames / 15s short-form",
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
      "핵심은 전체 브랜드 전략 소유가 아니라, 공유된 브랜드 reading을 dog-and-ball hook과 video-ready prompt/motion direction으로 좁힌 제작 판단이다.",
  },
  {
    no: 31,
    section: "ADSB",
    title: "Creative Brief & Role Boundary",
    label: "Brief Boundary",
    accent: "cyan",
    variant: "matrix",
    custom: "portfolioScopeCards",
    intent: "브랜드 맥락, 팀 단위 해석, 개인 기여 범위를 분리해 과장 없이 소개한다.",
    claim:
      "패션 브랜드 숏폼에서 제품 설명보다 먼저 읽히는 hook, motif, first-frame clarity를 정리한 케이스",
    include: ["Brand context", "Team reading", "My contribution", "Boundary"],
    slots: [
      "Brand context: Andersson Bell tone and visual logic",
      "Team reading: reference discussion and feedback review",
      "My contribution: dog-and-ball hook and prompt/motion direction",
      "Boundary: no traction, no complete brand-system claim",
    ],
    table: {
      headers: ["Scope", "Content", "Boundary"],
      rows: [
        ["Team Scope", "shared reference reading | visual tone | feedback review", "공유된 브랜드 reading과 팀 피드백"],
        ["My Scope", "dog-and-ball hook | motif rule | prompt direction | image-to-video iteration", "hook / prompt / motion direction 중심"],
        ["Not Claimed", "full brand strategy | campaign performance | final retouching as sole ownership", "기여 범위 과장 방지"],
      ],
    },
    media: { src: "/adsb/source-assets/adsb-key-msg.webp", alt: "ADSB key message visual", label: "Key message" },
    note:
      "최종보고서의 기준은 생성형 AI 활용 자체가 아니라 브랜드 정체성과 세일즈 목적을 반영한 영상 콘텐츠 제작 체계다.",
  },
  {
    no: 32,
    section: "ADSB",
    title: "Mood / Audience Insight",
    label: "Mood Insight",
    accent: "amber",
    variant: "matrix",
    custom: "portfolioMediaFocus",
    intent: "ADSB를 감각적 취향이 아니라 브랜드 톤과 숏폼 소비 방식의 해석 결과로 보여준다.",
    claim:
      "Mutated Mundane, 신호등, 횡단보도, 도시적 고정 앵글을 dog-and-ball motif와 연결해 첫 프레임의 읽힘을 높인 방향",
    include: ["Mutated Mundane", "Dog-and-ball hook", "Urban restraint", "First-frame readability"],
    slots: [
      "Mutated Mundane",
      "dog-and-ball hook",
      "fixed-angle urban sequence",
      "Audience first-frame rule",
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
      "AI was used as a workflow for brand mood, generated frames, motion testing, and feedback revision -- not as standalone asset generation proof.",
    include: [
      "Brand reading",
      "Generated frames",
      "Frame adjustment",
      "Motion test",
      "Feedback revision",
      "Final retouching ownership은 주장하지 않음",
    ],
    slots: [
      "Toolchain map",
      "Image-to-video workflow",
      "Correction rule: brand fit, impact, tone, cut flow",
      "Feedback loop: report -> storyboard -> visual -> video",
      "Final asset package",
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
        ["Frame Adjustment", "subject, object, camera, lighting, negative constraint를 보정", "image readiness"],
        ["Motion Test", "Kling으로 움직임과 컷 흐름이 유지되는지 테스트", "video readiness"],
        ["Feedback Revision", "피드백을 취향 코멘트가 아니라 다음 production rule로 반영", "revision loop"],
      ],
    },
    media: { src: "/adsb/adsb-production.webp", alt: "ADSB production workflow board", label: "Production workflow" },
    note:
      "AI was used as a workflow for brand mood, generated frames, motion testing, and feedback revision -- not as standalone asset generation proof.",
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
        ["Frame Clarity", "첫 프레임에서 dog / ball / object가 바로 읽히는지 확인", "first-frame readability"],
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
    title: "Output / Storyboard",
    label: "Output Structure",
    accent: "amber",
    variant: "matrix",
    custom: "portfolioStoryboardBeats",
    intent: "선별 이미지, 영상 프롬프트, 숏폼 스토리보드를 실제 산출물 구조로 연결한다.",
    claim:
      "dog-and-ball hook, 컷별 대표 이미지, Kling 영상, 약 15초 러닝타임으로 정리된 숏폼 패키지",
    include: [
      "Storyboard package",
      "Generated image set",
      "Cut logic / sequence structure",
      "Kling-based final short-form",
      "Process board, prompt variants, feedback revision trail",
    ],
    slots: [
      "Storyboard package",
      "Generated frame set",
      "Cut sequence",
      "Final 15s output",
      "Instagram reel / public proof",
    ],
    table: {
      headers: ["Scene", "Duration", "Visual", "Purpose"],
      rows: [
        ["Hook", "0-3s", "dog-and-ball hook / crosswalk", "first-frame readability"],
        ["Sequence", "3-12s", "fixed-angle urban motion / selected frames", "brand mood and cut flow"],
        ["Closing", "12-15s", "restrained final frame", "short-form closure"],
      ],
    },
    media: { src: "/adsb/adsb-production.webp", alt: "ADSB production board", label: "Production board" },
    links: [
      {
        label: "Final Reel",
        href: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
        description: "스토리보드와 제작 흐름이 수렴된 최종 15초 숏폼",
      },
    ],
  },
  {
    no: 37,
    section: "ADSB",
    title: "Learning & What This Shows",
    label: "Learning",
    accent: "aqua",
    variant: "evidence",
    intent: "ADSB를 통해 보여주는 콘텐츠 기획, AI 제작 워크플로우, 피드백 반영 역량을 정리한다.",
    claim:
      "생성형 AI 결과물보다 hook, prompt direction, motion direction, feedback rule을 기준으로 약한 방향을 버리고 더 읽히는 결과로 수렴시키는 판단력",
    include: [
      "Learning: hook clarity and selection judgment matter more than raw generation volume",
      "Learning: discarded directions can be as important as selected outputs",
      "Learning: stakeholder feedback should become production rules, not taste commentary",
      "What this shows: hook -> prompt -> motion -> feedback narrowing into video-ready output",
    ],
    slots: [
      "Hook clarity -> first-frame readability",
      "Feedback -> production rule",
      "What This Shows: structured AI creative direction",
    ],
    media: { src: "/adsb/adsb-kling-product.webp", alt: "ADSB Kling product output", label: "Video-ready output" },
    note:
      "마지막 문장은 'AI를 잘 다룬다'가 아니라 '브랜드-fit 콘텐츠 방향을 선택하고 실제 산출물까지 수렴시킬 수 있다'로 닫는다.",
  },
] satisfies Slide[];
