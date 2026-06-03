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
      "AI-generated emotional content idea를 identity-based visual clustering 중심의 English abstract와 poster-style research structure로 정리한 research communication case",
    include: [
      "Summary: niche brand content의 single-account isolation 문제를 AI-generated emotional content와 identity clustering 관점으로 정리",
      "My Role: research framing, English abstract structuring, visual clustering framework, poster-style organization",
      "Deliverables: English abstract draft, poster-style structure, framework pages, review/revision evidence",
      "Positioning: external reader-ready research communication and visual framework",
    ],
    slots: [
      "Research framing: vague idea -> external reader-ready structure",
      "Role: English abstract structuring / poster-style organization",
      "Evidence: review result / revision comments",
    ],
    media: {
      src: "/sfti/crops/sfti-review-comments.png",
      alt: "SFTI-CMU review result and revision-comment evidence.",
      label: "Review/revision evidence, not result-status proof",
    },
    note:
      "영어 문서화, 리서치 프레이밍, poster-style 구조화를 보여주는 support case로 사용한다. 학술 성과나 발표 실적이 아니라 외부 독자가 읽을 수 있는 구조화 역량으로 닫는다.",
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
      "막연한 AI trend narrative를 niche brand content limitation, symbolic identity, identity-based visual clustering framework로 좁힌 research framing",
    include: ["Research Question", "Concept Narrowing", "Narrative Framework", "External Reader Fit"],
    slots: [
      "Initial Vague Idea",
      "Research Question",
      "Identity-based Clustering",
    ],
    table: {
      headers: ["전환 전", "전환 후", "왜 중요한가"],
      rows: [
        [
          "초기 문제",
          "niche brand content가 single-account / single-channel storytelling에 갇혀 확장성이 약해짐",
          "단순 AI 이미지 생성이 아니라 content isolation 문제로 정의",
        ],
        [
          "구조적 제약",
          "emotional / symbolic narrative를 지속적으로 생산하기 어려움",
          "resource limitation과 narrative consistency 문제로 정리",
        ],
        [
          "해결 프레임",
          "design language, narrative tone, visual identity coherence 기준의 clustering framework",
          "외부 독자가 빠르게 이해할 수 있는 research communication 구조로 정리",
        ],
      ],
    },
    media: {
      src: "/sfti/crops/sfti-framework-structure.png",
      alt: "SFTI framework page.",
      label: "Framework structure",
    },
    note:
      "이 장은 SFTI를 '영어를 잘 썼다'보다 '모호한 아이디어를 연구 프레임으로 번역했다'로 읽히게 한다. 성과 숫자나 브랜드 성과로 확장하지 않는다.",
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
      "브랜드 해석과 AI content strategy 아이디어를 English abstract draft, poster-style structure, framework pages로 정리한 external reader-ready communication case",
    include: [
      "English abstract: niche brand content limitation, symbolic narrative, and identity-based visual clustering을 한 흐름으로 정리",
      "Poster-style structure: resource limitation, symbolic structure, solution frame, brand interpretation 순서",
      "Framework pages: identity, emotional content, visual clustering을 시각적으로 분리",
      "Review use: reviewer comments에 맞춰 citation support, grammar/format, and structure clarity를 보정",
    ],
    slots: [
      "Abstract: niche brand content limitation -> symbolic narrative -> identity-based visual clustering",
      "Poster narrative: resource limitation -> symbolic structure -> solution frame",
      "Writing decision: overly academic보다 clearer external reader fit",
    ],
    media: {
      src: "/sfti/crops/sfti-abstract-structure.png",
      alt: "SFTI poster or framework page.",
      label: "Poster structure -- structure evidence, not result-status proof",
    },
    note:
      "성과보다 구조를 보여준다. problem, approach, evidence, implication이 한 장에서 보이도록 세부 내용을 채운다.",
  },
  {
    no: 48,
    section: "SFTI",
    title: "Revision Evidence & What This Shows",
    label: "Revision Evidence",
    accent: "cyan",
    variant: "evidence",
    intent: "리비전 증거와 SFTI가 보여주는 writing/research communication 역량을 정리한다.",
    claim:
      "review comments를 바탕으로 citation support, grammar/format, structure clarity를 보정할 수 있음을 보여주는 revision evidence",
    include: [
      "Revision evidence: review result and revision comments",
      "Learning: 모호한 아이디어는 연구 질문과 구조로 좁혀야 읽힌다",
      "Learning: 영어 문서는 감각 표현보다 problem, approach, contribution이 선명해야 한다",
      "What this shows: research framing, English abstract structuring, poster-style organization, revision handling",
    ],
    slots: [
      "Revision Focus: citation support, grammar/format, and structure clarity",
      "Learning: vague idea needs research frame",
      "What This Shows: external reader-ready research communication",
    ],
    media: {
      src: "/sfti/crops/sfti-revision-comments.png",
      alt: "SFTI revision evidence.",
      label: "Revision evidence, not result-status proof",
    },
    note:
      "마지막 문장은 '학술 성과'가 아니라 '외부 독자에게 전달 가능한 구조와 영어 표현으로 정리할 수 있음'으로 닫는다.",
  },
] satisfies Slide[];
