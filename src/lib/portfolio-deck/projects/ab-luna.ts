import type { Slide } from "../types";

export const abLunaSlides = [
  {
    no: 38,
    section: "AB-Luna",
    title: "AB-Luna Overview",
    label: "Support Evidence",
    accent: "cyan",
    variant: "evidence",
    intent: "AB-Luna를 AI handoff와 shared-state 문제를 다룬 제품 사고 보강 케이스로 소개한다.",
    claim:
      "Support evidence, not main case. AI output 이후 상태 단절을 readable project state, clear next action, reliable handoff로 복원하는 workflow support evidence",
    include: [
      "Summary: multi-AI project work에서 생성 이후 상태와 다음 행동이 흩어지는 문제를 정의",
      "My Role: problem definition, market framing, MVP scope, UX simplification, KPI/readiness design",
      "Deliverables: home/session flow, markdown-first handoff contract, KPI canonical set, readiness review",
      "Positioning: another AI workspace가 아니라 state and handoff layer",
    ],
    slots: [
      "Project Summary",
      "Role & Scope",
      "MVP Scope: phase-1 student pilot / markdown contract",
      "Phase-2: queue/pull relay runtime and OpenClaw-backed execution",
      "Positioning: state and handoff layer",
    ],
    media: {
      src: "/ab-luna/source-assets/abluna-3.webp",
      alt: "AB-Luna home and workflow screen.",
      label: "AB-Luna surface",
    },
    note:
      "문제 정의, MVP 구조화, KPI readiness를 보여주는 AI workflow support case로 읽힌다.",
  },
  {
    no: 39,
    section: "AB-Luna",
    title: "Problem & Workflow Definition",
    label: "Problem Framing",
    accent: "violet",
    variant: "matrix",
    intent: "AB-Luna의 문제를 'AI 툴 부족'이 아니라 result-to-state handoff failure로 좁힌다.",
    claim:
      "생성 이전보다 생성 이후의 상태 단절을 제품 문제로 정의한 workflow support evidence",
    include: ["Student AI usage", "Multi-tool workflow", "Category gap", "Problem definition"],
    slots: [
      "Market Signal Summary",
      "Workflow Fragmentation",
      "Category Gap",
      "Final Problem Statement",
    ],
    table: {
      headers: ["분석 축", "관찰", "제품 해석"],
      rows: [
        ["학생 시장", "학생 팀 프로젝트에서도 GPT, Gemini, Claude, NotebookLM, Notion / Drive 등 여러 AI·문서 도구가 함께 쓰이는 환경을 관찰했다.", "문제는 AI 접근성이 아니라 AI 사용 이후의 상태 관리"],
        ["워크플로우", "GPT, Gemini, Claude, NotebookLM, Notion/Drive 등 산출물이 흩어짐", "scattered outputs를 canonical state로 복원해야 함"],
        ["경쟁 카테고리", "workspace, research notebook, PM tool은 많지만 handoff layer는 약함", "another workspace가 아니라 state/handoff layer로 포지셔닝"],
        ["최종 문제", "여러 AI 산출물이 readable project state와 next action으로 이어지지 않음", "result-to-state handoff failure로 정의"],
      ],
    },
    note:
      "핵심은 학생 팀의 AI 사용 이후 산출물이 현재 상태와 다음 액션으로 이어지지 않는 문제를 선명하게 정의하는 것이다.",
  },
  {
    no: 40,
    section: "AB-Luna",
    title: "Product Positioning & MVP Scope",
    label: "MVP Scope",
    accent: "aqua",
    variant: "matrix",
    intent: "AB-Luna가 무엇이고 무엇이 아닌지 분리해 제품 범위를 좁힌다.",
    claim:
      "더 좋은 채팅앱이나 full PM suite가 아니라 scattered artifacts를 state, next action, handoff로 정리하는 layer",
    include: ["Positioning", "Must Hold", "Must Avoid", "MVP Scope"],
    slots: [
      "One-line Positioning",
      "Must-hold Principles",
      "Must-avoid Scope",
      "MVP Feature Boundary",
    ],
    table: {
      headers: ["구분", "유지할 것", "피할 것"],
      rows: [
        ["제품 정의", "state and handoff layer for multi-AI project work", "another AI workspace, model access layer"],
        ["핵심 가치", "one readable project state, one clear next action, one reliable handoff", "generic note-taking, full project management suite"],
        ["사용자 범위", "3-5인 student teams, capstone, startup clubs, research-heavy assignments", "모든 지식노동자 대상의 넓은 협업툴"],
        ["구현 범위", "markdown-first contract, shared state, summary, result index", "복잡한 권한/운영 기능과 broad workspace battle"],
        ["진입 전략", "non-coding user first, free-tier-friendly entry, GitHub-backed bridge", "power-user repo workflow에만 갇히는 구조"],
      ],
    },
    note:
      "핵심 문장: ab luna turns scattered outputs from multiple AI tools into one readable project state, one clear next action, and one reliable handoff.",
  },
  {
    no: 41,
    section: "AB-Luna",
    title: "UX / Workflow Evidence",
    label: "Workflow Proof",
    accent: "amber",
    variant: "evidence",
    intent: "문제 정의가 실제 화면과 handoff 흐름으로 어떻게 내려왔는지 보여준다.",
    claim:
      "버튼과 기능을 늘리는 대신 첫 행동과 현재 상태를 빠르게 읽게 만드는 home/session/handoff 흐름으로 단순화",
    include: [
      "Home surface: 첫 행동을 찾기 쉽게 정리",
      "Session / detail: 작업 맥락과 산출물을 이어서 읽게 함",
      "Handoff: current state, blocker, next action을 다음 사람/agent가 이어받게 함",
      "Dashboard: project state를 팀 단위로 확인하는 구조",
      "Runtime evidence: queue/pull relay job, internal claim/complete/fail route, OpenClaw QA pass",
    ],
    slots: [
      "Home Before / After",
      "Session Detail",
      "Handoff Contract: current state / blocker / next action",
      "Runtime Contract: queue -> claim -> execute -> complete",
      "UX Simplification Note",
    ],
    media: {
      src: "/ab-luna/source-assets/abluna-4.webp",
      alt: "AB-Luna workflow evidence screen.",
      label: "Workflow evidence",
    },
    note:
      "이 장은 UI 미감보다 '상태가 이어지는가, 다음 행동이 보이는가'를 증명하는 화면 증거로 쓴다.",
  },
  {
    no: 42,
    section: "AB-Luna",
    title: "Workflow Readiness, Not Validation",
    label: "Readiness Design",
    accent: "cyan",
    variant: "matrix",
    intent: "AB-Luna가 아이디어에 머물지 않고 측정 가능한 제품 흐름으로 설계됐음을 보여준다.",
    claim:
      "Workflow readiness, not actual user validation. signup, verification, first project, state view, collaboration, publish, repeat까지 이어지는 KPI 흐름",
    include: ["Canonical KPI Set", "Collection Readiness", "Reporting Gap", "Weekly Reporting Rule"],
    slots: [
      "KPI Funnel",
      "Ready Now Metrics",
      "Mostly Ready Metrics",
      "Not Ready Yet",
      "Ready Now / Mostly Ready / Not Ready split",
      "Weekly Reporting Plan",
    ],
    table: {
      headers: ["단계", "KPI / 상태", "읽는 의미"],
      rows: [
        ["Topline", "total signed-up users, verified-user rate", "도달과 onboarding quality"],
        ["Activation", "project creation rate, first state-view rate", "첫 프로젝트와 core board value 도달"],
        ["Collaboration", "collaboration rate, state publish rate", "팀 단위 사용과 핵심 workflow 완료"],
        ["Engagement", "median time to first published state, 7-day active projects, repeat usage rate", "속도, 단기 사용 건강도, 재사용 가능성"],
        ["Readiness", "product KPI는 대부분 ready, reporting surface와 business KPI는 gap", "아이디어가 아니라 측정 가능한 운영 과제로 정리"],
      ],
    },
    note:
      "KPI는 launch 이후 signup, verification, first project, collaboration, repeat 흐름을 읽을 수 있도록 설계한다.",
  },
  {
    no: 43,
    section: "AB-Luna",
    title: "What This Supports",
    label: "Support Evidence",
    accent: "violet",
    variant: "evidence",
    intent: "AB-Luna가 포트폴리오에서 보강하는 PM/AI workflow 역량을 명확히 닫는다.",
    claim:
      "Support evidence, not main case. 새 AI 모델을 붙이는 것보다 여러 AI output 사이의 상태 단절을 읽히는 workflow로 바꾸는 제품 문제 정의",
    include: [
      "Learning: AI workflow 문제는 생성 이전보다 생성 이후에 더 크게 발생함",
      "Learning: 제품 포지셔닝은 넓은 AI workspace보다 좁은 handoff layer가 더 선명함",
      "Learning: KPI는 vanity metric보다 workflow completion을 기준으로 잡아야 함",
      "Learning: phase-2에서는 public webhook보다 queue/pull runtime이 운영 안정성에 맞음",
      "What this supports: problem framing, MVP scope, UX simplification, workflow readiness",
    ],
    slots: [
      "Learning 1: AI output 문제는 모델 성능보다 상태 정리와 handoff 문제에 가까웠다.",
      "Learning 2: 새로운 workspace보다 readable project state와 clear next action이 먼저 필요했다.",
      "Learning 3: markdown-first contract는 non-coding user도 이해 가능한 최소 handoff 구조였다.",
      "What This Supports: scattered AI output을 product workflow 문제로 정의하고, state / next action / handoff layer로 좁힐 수 있다.",
      "Role-fit Summary: PM / Product Planning 관점에서는 문제 정의, MVP scope, workflow 구조화 증거로 사용한다.",
    ],
    media: {
      src: "/ab-luna/source-assets/abluna-6.webp",
      alt: "AB-Luna supporting workflow screen.",
      label: "Workflow support",
    },
    note:
      "마지막 문장은 'AI 툴을 만들었다'가 아니라 'AI workflow의 상태 단절 문제를 제품 범위와 KPI로 구조화했다'로 닫는다.",
  },
  {
    no: 44,
    section: "AB-Luna",
    title: "User Research / Feedback Form",
    label: "Research Setup",
    accent: "amber",
    variant: "matrix",
    intent: "AB-Luna를 실제 사용자 반응을 받기 위한 리서치/피드백 수집 단계까지 연결한다.",
    claim:
      "User research setup, not completed validation. Google Form 기반으로 문제 공감, 현재 workflow, handoff pain, MVP 반응을 수집할 수 있는 준비면",
    include: ["Google Form", "User research setup", "Problem check", "MVP response"],
    slots: [
      "Form Objective: multi-AI workflow와 handoff pain 확인",
      "Target Respondent: student team / capstone / startup club / research-heavy assignment",
      "Question Blocks: current AI tools, artifact scattering, next action clarity, handoff pain",
      "Use of Result: MVP scope, product copy, onboarding flow refinement",
    ],
    table: {
      headers: ["수집 영역", "확인 질문", "판단에 쓰는 방식"],
      rows: [
        ["현재 워크플로우", "학생 팀이 어떤 AI 툴과 문서 툴을 함께 쓰는가", "AB-Luna가 들어갈 실제 사용 맥락 확인"],
        ["문제 공감", "산출물이 흩어진 뒤 현재 상태와 다음 액션이 흐려지는가", "result-to-state handoff failure의 강도 확인"],
        ["handoff pain", "다음 사람이나 다음 agent가 이어받기 어려운 지점은 무엇인가", "handoff contract와 session summary 우선순위 조정"],
        ["MVP 반응", "state board, next action, handoff layer 설명이 이해되는가", "제품 카피와 onboarding flow 개선"],
      ],
    },
    media: {
      src: "/ab-luna/source-assets/abluna-5.webp",
      alt: "AB-Luna feedback and workflow support screen.",
      label: "Research setup",
    },
    note:
      "Internal research setup only. Public deck should not expose Google Form edit links or private response data.",
  },
] satisfies Slide[];
