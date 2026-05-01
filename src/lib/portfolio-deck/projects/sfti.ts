import type { Slide } from "../types";

export const sftiSlides = [
  {
    no: 45,
    section: "SFTI",
    title: "SFTI-CMU Overview",
    label: "Research Writing Support",
    accent: "aqua",
    variant: "evidence",
    intent: "SFTI를 영어 리서치 프레이밍과 외부 제출형 문서 구조화 케이스로 소개한다.",
    claim:
      "Transforming Microbrand Identity Through AI-Generated Emotional Content를 identity-based visual clustering 중심으로 정리한 English research case",
    include: [
      "Summary: microbrand identity와 emotional narrative를 AI-generated short-form content framework로 설명",
      "My Role: research framing, English abstract writing, visual clustering framework, poster organization",
      "Deliverables: English abstract, poster structure, framework pages, accepted-with-revisions evidence",
      "Positioning: external-ready research communication and visual framework",
    ],
    slots: [
      "Project Summary: AI-generated emotional content strategy for niche fashion brands",
      "Role: research framing / English writing / poster structure",
      "Deliverables: abstract, framework, poster, revision evidence",
      "Evidence: accepted with revisions review result",
      "Positioning: external reader-ready communication",
    ],
    media: {
      src: "/sfti/source-assets/sfti-result.webp",
      alt: "SFTI-CMU accepted abstract and review result.",
      label: "Submission evidence",
    },
    note:
      "영어 문서화, 리서치 프레이밍, poster-style 구조화를 보여주는 support case로 사용한다.",
  },
  {
    no: 46,
    section: "SFTI",
    title: "Research Framing",
    label: "Research Translation",
    accent: "amber",
    variant: "matrix",
    intent: "막연한 AI 트렌드 아이디어를 외부 독자가 이해할 수 있는 연구 질문과 구조로 바꾼다.",
    claim:
      "vague AI trend narrative를 microbrand identity, emotional narrative, visual clustering framework로 좁힌 구조화",
    include: ["Research Question", "Concept Narrowing", "Narrative Framework", "External Reader Fit"],
    slots: [
      "Initial Vague Idea",
      "Research Question",
      "Identity-based Clustering",
      "Narrative Framework",
      "Reader-fit Note",
    ],
    table: {
      headers: ["전환 전", "전환 후", "왜 중요한가"],
      rows: [
        ["초기 문제", "visually similar product images와 styling content가 많아 브랜드 구분이 약해짐", "단순 이미지 생성이 아니라 microbrand differentiation 문제로 정의"],
        ["구조적 제약", "single-brand account 안에서 narrative coherence를 지속하기 어려움", "single-account isolation과 identity grouping 프레임으로 정리"],
        ["해결 프레임", "mythical symbolism, nostalgia, minimalist urban abstraction 같은 motif를 emotional narrative로 변환", "identity-based visual clustering과 visual narrative 구조"],
        ["제출 형태", "English abstract와 poster narrative", "외부 독자가 빠르게 이해할 수 있는 제출형 문서로 전환"],
      ],
    },
    media: {
      src: "/sfti/source-assets/sfti-3.webp",
      alt: "SFTI framework page.",
      label: "Framework page",
    },
    note:
      "이 장은 SFTI를 '영어를 잘 썼다'보다 '모호한 아이디어를 연구 프레임으로 번역했다'로 읽히게 한다.",
  },
  {
    no: 47,
    section: "SFTI",
    title: "English Abstract & Poster Structure",
    label: "External Writing",
    accent: "violet",
    variant: "evidence",
    intent: "영문 초록과 포스터 구조를 통해 외부 제출 가능한 커뮤니케이션 역량을 보여준다.",
    claim:
      "브랜드 해석과 콘텐츠 전략 아이디어를 English abstract, poster structure, framework page로 정리한 외부 독자용 커뮤니케이션",
    include: [
      "English abstract: Gen Z visual experience, microbrand differentiation, AI emotional content framework를 한 흐름으로 정리",
      "Poster structure: resource limitation, symbolic structure, solution frame, brand interpretation 순서",
      "Framework pages: identity, emotional content, visual clustering을 시각적으로 분리",
      "Review use: accepted-with-revisions 기준에 맞춰 문서 밀도와 구조 보정",
    ],
    slots: [
      "Abstract: Gen Z visual experience -> saturated content -> AI-generated emotional narrative",
      "Poster narrative: resource limitation -> symbolic structure -> solution frame",
      "Framework page: identity-based visual clustering",
      "Writing decision: overly academic보다 external reader fit",
      "Evidence image: poster / abstract screenshot",
    ],
    media: {
      src: "/sfti/source-assets/sfti-1.webp",
      alt: "SFTI poster or framework page.",
      label: "Poster structure",
    },
    note:
      "성과보다 구조를 보여준다. problem, approach, evidence, implication이 한 장에서 보이도록 세부 내용을 채운다.",
  },
  {
    no: 48,
    section: "SFTI",
    title: "Revision Evidence & What This Proves",
    label: "Revision Proof",
    accent: "cyan",
    variant: "evidence",
    intent: "리비전 증거와 SFTI가 증명하는 writing/research communication 역량을 정리한다.",
    claim:
      "외부 제출형 결과물에서 피드백을 받아 문서 밀도와 시각 구조를 다듬을 수 있음을 보여주는 revision evidence",
    include: [
      "Revision evidence: accepted with revisions / review result",
      "Learning: 모호한 아이디어는 연구 질문과 구조로 좁혀야 읽힌다",
      "Learning: 영어 문서는 감각 표현보다 problem, approach, contribution이 선명해야 한다",
      "Learning: emotional storytelling은 engagement/recall 주장보다 브랜드 정체성과 visual immersion의 연결로 설명해야 함",
      "What this proves: research framing, English writing, poster narrative, revision handling",
    ],
    slots: [
      "Review / Revision Evidence: accepted with revisions",
      "Revision Before / After: 문장 밀도와 구조 보정",
      "Learning: vague idea needs research frame",
      "What This Proves: external-ready English writing",
      "Role-fit Summary: research communication",
    ],
    media: {
      src: "/sfti/source-assets/sfti-revision.webp",
      alt: "SFTI revision evidence.",
      label: "Revision evidence",
    },
    note:
      "마지막 문장은 '학술 성과'가 아니라 '외부 독자에게 전달 가능한 구조와 영어 표현으로 정리할 수 있음'으로 닫는다.",
  },
] satisfies Slide[];
