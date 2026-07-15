"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileCode2,
  Home,
  ShieldCheck,
  Undo2,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, type PropsWithChildren } from "react";

import {
  getEvidenceDisclosureLabel,
  getEvidenceSource,
} from "@/lib/ai-exploration/motion-bank-sources";

import styles from "./ai-exploration-portfolio.module.css";

const AHEYA_ARCHIVE_URL = "https://github.com/aheyabaraya/aheya-public-archive";
const LOOM_TIKTOK_URL = "https://www.tiktok.com/@loom_mm";

const executiveProofs = [
  ["01", "MV / 3편", "Root Signal · Pulso · INK"],
  ["02", "PERSONAL SPEC CF / 2편", "Cola · Headset · unofficial"],
  ["03", "LOCAL WEB / 1개", "Loom Signal Deck"],
];

const resultSlides = [
  {
    id: "ink",
    label: "01 / LOOM MV",
    title: "INK / FINAL MASTER",
    detail: "대표 결과 · 완성한 MV",
    platform: "YOUTUBE",
    kind: "youtube",
    embedSrc: "https://www.youtube.com/embed/TyONE0lKI2s?rel=0&modestbranding=1",
    href: "https://www.youtube.com/watch?v=TyONE0lKI2s",
  },
  {
    id: "root-signal",
    label: "02 / LOOM MV",
    title: "ROOT SIGNAL / FULL MASTER",
    detail: "첫 번째 완성 MV",
    platform: "YOUTUBE",
    kind: "youtube",
    embedSrc: "https://www.youtube.com/embed/DUyCAFHZ7X0?rel=0&modestbranding=1",
    href: "https://www.youtube.com/watch?v=DUyCAFHZ7X0",
  },
  {
    id: "pulso",
    label: "03 / LOOM MV",
    title: "PULSO / FINAL MASTER",
    detail: "구간별 제작·재생 검토를 적용한 MV",
    platform: "YOUTUBE",
    kind: "youtube",
    embedSrc: "https://www.youtube.com/embed/0vV4CXL3_Qk?rel=0&modestbranding=1",
    href: "https://www.youtube.com/watch?v=0vV4CXL3_Qk",
  },
] as const;

const formationJourney = [
  {
    index: "01",
    period: "2026.05",
    project: "AURORA V2 / M-CODE",
    question: "같은 얼굴로 서로 다른 콘텐츠를 계속 만들어낼 수 있을까?",
    test: "13명의 identity reference를 먼저 고정하고, 각 M-code에 MV와 STAGE라는 서로 다른 제작 단위를 연결했습니다. 조사 → 선택 → 패킷 → 생성 → 사람 검토의 순서를 반복했습니다.",
    finding: "같은 얼굴을 유지하며 제작 단위를 늘릴 수는 있었습니다. 하지만 창의적 판단까지 하나의 규칙으로 고정하면 장면과 포즈가 서로 비슷해졌습니다.",
    change: "반복되는 identity 정보와 창의적 판단을 분리했습니다. 얼굴 레퍼런스는 재사용하되, 메시지와 장면 방향은 콘텐츠마다 다시 정하는 기준이 생겼습니다.",
    image: "/ai-exploration/aurora-v2/m01-mv-storyboard.webp",
    evidenceSlug: "aurora-v1-to-v2-archive-map",
  },
  {
    index: "02",
    period: "2026.05",
    project: "AB_AURORA / GENERATION FLOW",
    question: "기획 메시지를 주면 이미지와 영상까지 자동으로 이어 만들 수 있을까?",
    test: "brief에서 여러 방향을 만들고 후보를 비교한 뒤, 선택한 기획과 레퍼런스를 이미지 프롬프트와 영상 단계로 넘기는 흐름을 시험했습니다.",
    finding: "생성 요청과 후보 정리는 자동화할 수 있었지만, 처음 정한 메시지와 선택 이유가 다음 단계에 전달되지 않으면 결과가 다시 흔들렸습니다.",
    change: "메시지·대상·레퍼런스 역할을 먼저 고정하고, 선택한 후보와 선택 이유를 다음 작업이 읽게 하는 Workbench의 전신이 생겼습니다.",
    image: "/ai-exploration/lineage/ab-aurora-preview.png",
    evidenceSlug: "ab-aurora-direction-selection-flow",
  },
  {
    index: "03",
    period: "2026.05—06",
    project: "EDIT AUTOMATION / 04",
    question: "편집 툴의 타임라인과 마커를 JSON으로 표현하면 편집도 자동화할 수 있을까?",
    test: "Premiere Pro와 CapCut의 소스·타임라인·마커·렌더 흐름을 살펴보고, 영상 파일과 오디오를 JSON 편집 레시피와 Python 스크립트로 다루는 방식을 시험했습니다.",
    finding: "전문 편집기를 복제할 필요는 없었습니다. 소스의 in/out, 순서, 속도, 마커, 프리뷰를 구조화하면 반복 분석과 러프 편집을 자동화할 수 있었습니다.",
    change: "Source Intake → Contact Sheet → Audio·Marker → Preview → Delivery QC가 04 Edit Skill과 Python Media Toolchain으로 분리됐습니다.",
    image: null,
    evidenceSlug: "idol-edit-desk-implementation",
  },
  {
    index: "04",
    period: "2026.05.24",
    project: "ROOT SIGNAL",
    question: "생성은 되는데, 왜 기획과 장면은 평평하고 비슷한 구도로 모일까?",
    test: "첫 완성 MV에서 제한된 레퍼런스와 짧은 기획을 이미지·영상·편집까지 밀어붙이며, 장면별 결과와 수정 기록을 비교했습니다.",
    finding: "레퍼런스가 맡을 역할과 장면의 구도·카메라·인과가 충분히 정해지지 않으면 생성량이 늘어도 비슷한 화면이 반복됐습니다.",
    change: "01 단계를 단순한 방향 메모에서 스토리라인·레퍼런스 역할·카메라와 구도·장면 연결을 다루는 기획 단계로 확장했습니다.",
    image: "/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg",
    evidenceSlug: null,
  },
  {
    index: "05",
    period: "2026.06.11",
    project: "PULSO",
    question: "처음부터 스토리라인을 정하지 않으면 영상 전체가 평평하게 흐르는 걸까?",
    test: "곡을 구간으로 나누고 각 구간의 시작 상태·사건·도착 상태·다음 장면을 먼저 연결한 뒤, keyframe과 영상 후보를 섹션별로 검토했습니다.",
    finding: "좋은 장면을 따로 만드는 것보다, 한 장면이 다음 장면을 일으키는 이유를 먼저 정해야 전체 곡의 흐름이 살아났습니다.",
    change: "Front Planning에서 전체 스토리라인과 섹션별 상태 변화를 먼저 잠그고, 02A·02B·03V가 이를 새로 요약하지 않고 이어받게 했습니다.",
    image: "/ai-exploration/edit-qc/pulso-v6-logo-tail-qc.jpg",
    evidenceSlug: "pulso-front-planning-readiness",
  },
  {
    index: "06",
    period: "2026.07",
    project: "FRONT PLANNING WORKBENCH",
    question: "단조로운 기획을 더 쉽게 구체화하고, AI와 같은 방향을 보며 확장할 수 없을까?",
    test: "Grok Imagine의 대화형 생성, ComfyUI의 workflow, Figma의 canvas를 참고해 메시지·레퍼런스·곡 구간·후보 상태를 한 화면에서 조립했습니다.",
    finding: "생성 전에 레퍼런스의 역할과 장면의 순서, 보류 이유가 보이면 AI가 추가 리서치를 하더라도 처음 잡은 기획 안에서 확장할 수 있었습니다.",
    change: "Workbench가 기획의 입구가 되고, Harness가 승인·생성·편집·기록을 잇는 현재의 제작 구조로 정리됐습니다.",
    image: "/ai-exploration/workbench/front-planning-workbench-demo.png",
    evidenceSlug: "front-planning-workbench-checkpoint",
  },
] as const;

const cfCases = [
  {
    index: "01",
    label: "COLA / MEMORY-VENDING",
    status: "PERSONAL SPEC COMMERCIAL · UNOFFICIAL",
    title: "버튼을 누르면, 기억이 한 캔의 제품으로 돌아옵니다.",
    body: "버튼을 누르는 순간 눈이 반응하고, 기억의 층이 열리고, 같은 캔이 다시 조립돼 나옵니다. 이 흐름을 19.58초 세로 영상 안에 담았습니다.",
    message: "기억은 버튼을 누르는 순간 다시 제품으로 돌아온다.",
    audience: "짧은 이야기 안에서 제품의 기능을 경험하는 관객",
    flow: "BUTTON → EYE → MEMORY LAYERS → CAN BUILD → RETRIEVE",
    metric: "16 KEYFRAMES / 4 STORYBOARD JOBS / 19.58S",
    poster: "/ai-exploration/cf/cola-memory-vending-board.jpg",
    videoSrc: "/ai-exploration/cf/cola-memory-vending-final.mp4",
    evidenceSlug: "cf-cola-message-causality",
  },
  {
    index: "02",
    label: "HEADSET / SELECTIVE LISTENING",
    status: "PERSONAL SPEC COMMERCIAL · UNOFFICIAL",
    title: "헤드셋 하나로, 듣고 싶은 목소리와 소음 사이에 경계를 만들었습니다.",
    body: "미술관의 소음과 초상화의 목소리를 서로 다른 종이처럼 보이게 했습니다. 이어컵이 그 둘을 가르는 순간 제품의 기능이 보이도록 구성했습니다.",
    message: "듣고 싶은 목소리를 선택하면 불필요한 소음은 뒤로 물러난다.",
    audience: "붐비는 공간에서도 자신이 선택한 소리에 집중하고 싶은 관객",
    flow: "PUBLIC CHATTER → EARCUP BOUNDARY → WANTED VOICE REMAINS",
    metric: "12 KEYFRAMES / 4 STORYBOARD JOBS / 17.92S",
    poster: "/ai-exploration/cf/headset-selective-listening-board.png",
    videoSrc: "/ai-exploration/cf/headset-selective-listening-final.mp4",
    evidenceSlug: "cf-headset-space-rule",
  },
];

const trendExperiments = [
  {
    status: "채택 / 제 방식으로 재구성",
    signal: "VISUAL WORKFLOW",
    proof: "Face Reference Library · Prompt Compile → Front Planning Workbench",
    appliedAs: "Front Planning Workbench",
    discovery: "같은 얼굴을 반복해서 써야 하는 작업에서는 승인된 identity reference를 먼저 만들고, 장면마다 필요한 참조 이미지와 프롬프트 구조를 자동으로 붙이는 방식",
    question: "같은 얼굴을 계속 쓴다면, 승인한 레퍼런스 이미지를 자동으로 불러오고 장면별 프롬프트까지 반복해서 만들 수 있지 않을까?",
    origin: "X에서 ComfyUI의 node workflow와 생성 UI 변화를 발견한 뒤 공식 문서와 실제 화면을 확인했습니다. Grok Imagine의 대화형 생성 방식과 Figma의 canvas 구성도 함께 살펴봤습니다. 여러 방식을 비교할수록 제게 필요한 것은 모델 연결선보다 기획의 이유와 선택 상태가 보이는 화면이라는 결론이 났습니다.",
    test: "Live Plan, Planning Canvas, Sequence Rail에 승인된 face reference와 장면 레퍼런스를 등록했습니다. 곡 구간과 장면 역할이 정해지면 해당 reference binding과 프롬프트 구조가 02B 요청에 이어지고, 생성 결과는 Contact Sheet에서 다시 비교하도록 연결했습니다.",
    decision: "레퍼런스와 프롬프트를 반복해서 붙이는 일은 자동화하되, 메시지·대상·identity 기준과 02A 키프레임 선택은 직접 승인하는 방식만 채택했습니다. ComfyUI의 node graph를 그대로 복제하지는 않았습니다.",
    next: "승인된 얼굴 레퍼런스와 장면 기준을 02B 프롬프트에 자동 연결.",
    evidenceSlug: "front-planning-workbench-checkpoint",
    sourceLinks: [
      ["ComfyUI / Workflow", "https://docs.comfy.org/development/core-concepts/workflow"],
      ["Figma / Design canvas", "https://help.figma.com/hc/en-us/articles/30925881896727-FD4B-Navigate-Figma-Design-files"],
    ],
  },
  {
    status: "부분 채택",
    signal: "EDITING GRAMMAR",
    proof: "선택 오디오 → 실제 소스 모션 → 마커 정렬 → 레시피 → 프리뷰·QC",
    appliedAs: "04 Edit Flow · Local Edit Desk",
    discovery: "생성된 영상 소스와 오디오·마커·프리뷰를 구조화해, 실제 재생 검토까지 연결하는 04 편집 흐름",
    question: "생성된 클립을 자동 편집하고, Premiere Pro·After Effects도 JSON 기반 제어로 연결해 편집 과정까지 자동화할 수 있을까?",
    origin: "Premiere Pro와 After Effects에서 Source와 Program, sequence와 timeline, marker, render와 QC가 어떻게 나뉘는지 살펴봤습니다. 완성형 편집 앱을 복제하기보다, 실제 04 편집에서 필요한 오디오·소스·마커·검토의 순서를 먼저 고정했습니다.",
    test: "선택 오디오의 구간·온셋·가사 진입을 먼저 읽고, 실제 영상에서 첫 유효 동작과 몸·손·발·시선·카메라 움직임을 확인했습니다. 음악 마커·소스 동작 마커·장면의 역할을 맞춘 뒤 편집 마커 플랜과 레시피를 만들고, 짧은 프리뷰와 컨택트시트로 다시 검토했습니다. ffprobe, OpenCV, librosa, ffmpeg는 이 비교를 위한 근거를 만드는 데 썼습니다.",
    decision: "상위 단계의 초 단위나 비트 표를 그대로 컷포인트로 쓰지 않았습니다. 분석값과 자동 인식은 후보를 좁히는 근거일 뿐이고, 실제 재생에서 음악·동작·이야기 흐름이 맞는지 본 뒤 최종 순서와 타이밍은 직접 결정했습니다.",
    next: "소스 분석과 마커를 편집 레시피·구간 프리뷰·QC로 연결.",
    evidenceSlug: "idol-edit-desk-implementation",
    sourceLinks: [
      ["Adobe / Source & Program", "https://helpx.adobe.com/uk/premiere/desktop/get-started/source-and-program-monitor-adjustments/about-source-monitor-and-program-monitor.html"],
      ["Adobe / After Effects Workflow", "https://helpx.adobe.com/after-effects/desktop/get-started/understand-after-effects-workflow/workflows.html"],
    ],
  },
  {
    status: "채택 / 위험 구간은 보류",
    signal: "AGENT HARNESS",
    proof: "Agent Skills · MCP → IDOL Production System",
    appliedAs: "IDOL Production System",
    discovery: "세션과 도구가 바뀌어도 메시지·단계·산출물·다음 행동을 잃지 않는 인계 구조",
    question: "여러 번 세션이 압축돼도 방향을 잃지 않고, 처음 잡은 기획을 끝까지 끌고 갈 수 있을까?",
    origin: "X에서 Agent Skills, MCP, long-running harness 흐름을 발견한 뒤 Anthropic의 영문 강연과 엔지니어링 문서, 공개 skill 구조를 확인했습니다. Higgsfield의 MCP, API, CLI도 공식 자료로 살펴봤습니다. 기능만 본 것이 아니라 권리와 비용, 보호 자산의 외부 전송 위험까지 함께 검토했습니다.",
    test: "Codex와 Grok에는 창의적인 맥락을 대화로 공유하고, 반복되는 절차는 작은 skill과 reference로 분리했습니다. 작업 단계 레지스트리와 현재 상태, 다음 작업을 위한 handoff, 사람의 승인 단계, 특정 모델에 묶이지 않는 요청 형식을 로컬 하네스에 연결했습니다.",
    decision: "작은 절차 단위와 명확한 인계, 사람의 승인 단계는 채택했습니다. 보호해야 할 자산을 외부 MCP로 보내거나, 유료 실행이 자동으로 이어지는 구조는 보류하거나 금지했습니다.",
    next: "8개 phase와 29개 stage로 맥락·승인·인계를 연결.",
    evidenceSlug: "idol-harness-ecosystem-adoption",
    sourceLinks: [
      ["Anthropic / Long-running Harness", "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"],
      ["Anthropic / Agent Skills", "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"],
    ],
  },
];

const loomExperience = [
  ["IDENTITY", "13명의 얼굴과 스타일 기준을 하나의 아카이브에서 확인합니다."],
  ["TRACK", "Root Signal, Pulso, INK의 영상과 제작 맥락을 트랙별로 탐색합니다."],
  ["CONTENT", "멤버별 TikTok 클립과 스토리보드, STAGE 컷을 함께 정리했습니다."],
  ["INTERACTION", "Harne identity vote와 멤버 메시지, 다음 트랙 투표를 로컬 인터랙션으로 구현했습니다."],
];

const systemFlow = [
  {
    index: "START",
    system: "INPUT / STARTING POINT",
    title: "출발 질문과 레퍼런스",
    items: ["초기 메시지 가설", "핵심 레퍼런스", "핵심 비주얼 · 공간"],
  },
  {
    index: "00A",
    system: "SONG / CREATE · LOCK",
    title: "곡 생성과 선택",
    items: ["레퍼런스 곡 · 타깃 분석", "Suno 후보 생성", "선택 음원 · 구간 확정"],
  },
  {
    index: "01R",
    system: "TARGET · REFERENCE",
    title: "타겟과 화면 보상 설계",
    items: ["곡·스토리·장면의 관객 분석", "타겟 → 반응 → 화면 가설", "1차 타겟 · 메시지 확정"],
  },
  {
    index: "01",
    system: "PLAN / EXPAND",
    title: "기획 맥락 확장",
    items: ["연출 · 구도 확장", "스토리라인 확장"],
  },
  {
    index: "02 + 03",
    system: "GENERATE · REVIEW",
    title: "생성 · 영상화 · 자동 편집",
    items: ["ChatGPT Image 2 / 핵심 컷 이미지", "Grok Imagine 1.5 / 영상 생성", "프레임 연결·스토리라인 기반 자동 편집"],
  },
  {
    index: "04 + 05",
    system: "EDIT · RELEASE",
    title: "편집과 배포 준비",
    items: ["음악·동작 기반 편집", "재생 검토 · 최종 QC", "플랫폼별 패키지 · API 큐"],
  },
] as const;

const harnessPhases = [
  ["01", "DISCOVERY", "브리프 · 방향 탐색"],
  ["02", "SONG", "레퍼런스 적합성 · 곡 생성 · 선택 음원 분석"],
  ["03", "CREATIVE LOCK", "Front Plan · 00 콘셉트 · 00A 곡 락"],
  ["04", "MV DIRECTION", "01R 타겟·레퍼런스 · 01 MV 방향 · 01A 비주얼"],
  ["05", "KEYFRAME", "02 커버리지 · 02A 스토리보드 · 02B 프롬프트 · 리뷰"],
  ["06", "MOTION", "오디오 배치 · 03V 모션 · 재생 검토"],
  ["07", "EDIT & FINISH", "04 편집 · 04FX 마감 효과 · QC"],
  ["08", "RELEASE & LEARN", "05 패키지 · 플랫폼 큐 · 승인 · 기록"],
];

const harnessControls = [
  ["SEMANTIC STAGE", "29개 단계와 명확한 담당"],
  ["CANONICAL ARTIFACT", "단계마다 하나의 기준 결과물"],
  ["FOUNDER GATE", "생성·검토·공개 전 사람의 승인"],
  ["TYPED FEEDBACK", "바뀐 판단은 해당 단계로만 되돌림"],
];

const scriptAutomation = [
  ["01", "SOURCE INTAKE", "idol_video_source_intake.py"],
  ["02", "CONTACT SHEET", "idol_edit_marker_contact_sheets.py"],
  ["03", "AUDIO / MARKER", "idol_video_sync_workbench.py"],
  ["04", "PREVIEW / RECIPE", "idol_edit_recipe_alignment_evidence.py"],
  ["05", "DELIVERY QC", "idol_edit_delivery_qc.py"],
];

const imagePromptStructure = [
  "곡 구간 · 스토리보드",
  "reference image · 멤버 기준",
  "구도 · 카메라 · 빛",
  "keyframe에서 확인할 행동",
];

const videoPromptStructure = [
  "통과한 keyframe",
  "camera route · frame connection",
  "motion · action",
  "구간 길이 · 다음 컷과의 인과",
];

const planningStructure = [
  ["01", "TARGET · MESSAGE CARRY", "01R에서 고른 1차 타겟 · 공감 · 메시지 · audience promise를 그대로 전달"],
  ["02", "ASSET LOCK", "identity · key object · 공간 레퍼런스 고정"],
  ["03", "STORYLINE LOCK", "전체 곡의 시작 상태 · 사건 · 도착 상태와 섹션 연결 고정"],
  ["04", "AI EXPANSION", "타겟 보상 안에서 추가 리서치로 연출 · 구도 · 장면 연결을 확장하고 사람 승인"],
];

const songStructure = [
  ["01", "REFERENCE-SONG FIT", "참고 곡의 타깃 · 훅 · 섹션 기능을 분석하고 가져올 기능과 피할 표면을 구분"],
  ["02", "SUNO PROMPT PACK", "초기 메시지 가설을 Style · Lyrics · Negative 구조로 바꾸고 한 변수씩 다른 후보를 준비"],
  ["03", "FOUNDER AUDITION", "실제 생성된 후보를 듣고 선택 take · 좋은 10~20초 · keep/change를 직접 결정"],
  ["04", "SELECTED AUDIO ANALYSIS", "BPM 감각 · 섹션 · 가사 기능 · 훅 · 온셋 · 반복 모티프를 추출"],
  ["05", "00A SONG LOCK", "선택 음원의 구간별 trigger cue와 action · edit 방향을 다음 단계에 고정"],
] as const;

const targetAnalysisLayers = [
  ["01", "TARGET", "이 곡과 MV를 가장 먼저 자기 이야기처럼 받아들일 사람"],
  ["02", "EMPATHY", "그 사람이 느끼는 욕망 · 상황 · 자기 이미지"],
  ["03", "AUDIENCE PROMISE", "왜 저장 · 재생 · 스크린샷 · 해석 · 공유하고 싶은지"],
  ["04", "SCREEN TRANSLATION", "그 보상을 세계 · 행동 · 카메라 · 오브젝트 · 편집으로 증명하는 법"],
] as const;

const targetConnectionTypes = [
  ["OVERLAP", "실제 팬덤 중첩"],
  ["ADJACENCY", "같은 보상을 원하는 인접층"],
  ["BRIDGE", "새 유입으로 이어질 다리"],
  ["SURFACE ONLY", "겉모습만 비슷해 검증·제외할 경우"],
] as const;

const targetDirectionOutputs = [
  "관객에게 줄 약속",
  "유지할 익숙한 K-pop 코드",
  "새롭게 줄 긴장과 차별점",
  "섹션별 저장 · 클립 · 해석 포인트",
  "서사·세계·액션·오브젝트·카메라·편집의 구간별 역할",
  "과한 무대화 · 뷰티컷 반복 · 가사 직역 · 억지 트렌드 제외",
] as const;

const editingStructure = [
  ["01", "SOURCE INTAKE", "통과한 03V 영상의 길이 · FPS · 해상도 · 상태 인덱스"],
  ["02", "FRAME REVIEW", "컨택트시트에서 동작 · 시선 · 카메라 · 앞뒤 프레임 비교"],
  ["03", "AUDIO + MARKER", "곡 구간 · 온셋 · 실제 소스 동작을 편집 후보 마커로 정렬"],
  ["04", "EDIT RECIPE", "source in/out · 순서 · 속도 · 컷포인트를 프리뷰로 검토"],
  ["05", "04FX + QC", "통과한 컷에만 마감 효과를 적용하고 최종 기술 QC"],
];

const releaseStructure = [
  ["01", "05 PACKAGE", "90s+ master · 45s cutdown · short derivatives를 하나의 원본 계보로 패키징"],
  ["02", "TEMPLATE ROUTING", "MV · CF · section clip에 맞는 X · TikTok · YouTube 메타데이터 템플릿 선택"],
  ["03", "RELEASE QUEUE", "메시지·설명·태그·미디어 경로를 platform-posts JSONL과 publishing plan으로 투영"],
  ["04", "PREFLIGHT", "패키지 · 파일 해시 · 제목 레지스트리 · 플랫폼 필수값을 로컬에서 검증"],
  ["05", "FOUNDER APPROVAL", "승인된 플랫폼·게시물·파일만 X · TikTok · YouTube API 초안/업로드 단계로 전달"],
] as const;

const stageToolEvidence = {
  planning: [
    ["SKILLS", "idol-front-planning-director · idol-mv-director"],
    ["SCRIPTS", "idol_reference_hub.py · idol_reference_section_segments.py"],
    ["INPUT", "01R target · message · audience promise · screen translation"],
    ["CANONICAL OUTPUT", "Front Planning · 01 MV Direction"],
  ],
  song: [
    ["SKILLS", "idol-research-radar · idol-suno-prompt · idol-song-lock"],
    ["SCRIPTS", "idol_reference_music_feature_extract.py · audio marker sidecars"],
    ["PYTHON", "librosa · NumPy · soundfile · PyYAML"],
    ["CANONICAL OUTPUT", "Reference-song Fit · Selected Audio Analysis · 00A Song Lock"],
  ],
  target: [
    ["OWNER", "01R / idol-mv-director"],
    ["SOURCES", "creative-production-constitution.md · global-kpop-fandom-target-v1.md"],
    ["METHOD", "target → common response mechanism → screen translation"],
    ["CANONICAL OUTPUT", "research/mv-direction-reference-mining-vN.yaml · target/message/screen contract"],
  ],
  generation: [
    ["SKILLS", "idol-generation · idol-video-prompt"],
    ["SCRIPTS", "idol_export_02b_prompt_manifests.py · idol_02b_batch_api_runner.py"],
    ["PYTHON", "PyYAML · urllib · hashlib"],
    ["CANONICAL OUTPUT", "02B Prompt Packets · 03V Video Prompt Manifest"],
  ],
  editing: [
    ["SKILLS", "idol-editing-qc · idol-edit-finishing-fx"],
    ["SCRIPTS", "idol_video_sync_workbench.py · idol_edit_marker_contact_sheets.py · idol_edit_delivery_qc.py"],
    ["PYTHON", "OpenCV · librosa · NumPy · MoviePy · jsonschema"],
    ["RUNTIME / OUTPUT", "ffmpeg · ffprobe → Edit Recipe · Preview · Delivery QC"],
  ],
  release: [
    ["SKILLS", "idol-social-metadata-upload · x-posting-template · reels-tiktok-template"],
    ["SCRIPTS", "idol_social_release_sync.py · idol_platform_draft_upload.py"],
    ["DATA", "05-package.yaml · platform-posts.jsonl · publishing-plan.md"],
    ["BOUNDARY", "X · TikTok · YouTube · Shorts API / public publish requires Founder approval"],
  ],
} as const;

const studioAutomationLanes = [
  ["REUSE", "승인된 얼굴·레퍼런스·메타데이터를 다음 작업이 자동으로 불러옵니다."],
  ["COMPILE", "메시지와 곡 구간을 이미지·영상·편집·배포 작업 단위로 변환합니다."],
  ["COMPARE", "컨택트시트·오디오 마커·프리뷰·QC로 사람이 볼 비교 근거를 만듭니다."],
  ["DISTRIBUTE", "플랫폼별 카피와 미디어 패키지를 준비하고 승인된 API 작업만 실행합니다."],
] as const;

const schemaConnection = [
  {
    index: "01",
    label: "PLANNING CONTRACT",
    file: "front-planning-readiness.schema.json",
    fields: ["target_message_screen_contract", "storyline_creative_lock", "downstream_handoff"],
    role: "메시지 · 타깃 · 레퍼런스 · 스토리라인을 다음 단계의 기준으로 고정",
  },
  {
    index: "02",
    label: "GENERATION JOB",
    file: "video-prompt-manifest.schema.json",
    fields: ["source_images", "screen_motion_route", "camera_route", "previous_next_continuity"],
    role: "02B에서 통과한 이미지와 03V의 카메라 · 동작 · 연결 규칙을 구간별 작업으로 전달",
  },
  {
    index: "03",
    label: "EDIT RECIPE",
    file: "edit-recipe.schema.json",
    fields: ["source_in / source_out", "output frames", "retime · geometry", "effects · qc_requirements"],
    role: "실제 소스의 컷과 속도, 마감 효과, QC를 프레임 기준 편집 결과로 확정",
  },
] as const;

const humanReviewGates = [
  ["01", "01R · PLANNING APPROVAL", "1차 타겟 · 공감 · audience promise · 메시지 · 화면 번역 · 초기 스토리라인 승인"],
  ["02", "02A REVIEW", "섹션별 구도와 키프레임, 전체 영상의 연결성 승인"],
  ["03", "03V SECTION REVIEW", "생성된 영상의 동작 · 프레임 연결 · 다음 편집 투입 여부 승인"],
] as const;

const evidenceLogic: Record<string, [string, string]> = {
  "front-planning-workbench-checkpoint": [
    "이 Markdown checkpoint는 구현된 화면, 로컬 계약 테스트, 실제 제품 클라이언트 통과, 아직 수락되지 않은 조건을 구분합니다.",
    "실행 가능한 화면이 있다는 사실과 실제 곡·규모·품질 조건을 통과했다는 주장을 분리하는 기준으로 사용합니다.",
  ],
  "idol-edit-desk-implementation": [
    "이 Python 파일은 영상 길이·마커·파형·클립을 같은 타임라인에 놓고, 선택한 구간만 프리뷰로 렌더합니다.",
    "분석값은 비교할 근거를 만들며, 실제 컷의 통과와 순서는 재생 검토에서 직접 결정합니다.",
  ],
  "idol-harness-stage-registry": [
    "이 YAML 레지스트리는 단계마다 기준 산출물과 판단 책임을 고정해, 다음 단계가 앞선 결정을 임의로 바꾸지 않게 합니다.",
    "수정은 원래 판단을 가진 단계로 되돌리고, 영향받은 아래 단계만 다시 갱신하도록 합니다.",
  ],
};

const decisionLogs = [
  {
    date: "2026.05",
    signal: "V1 → V2",
    title: "빠르더라도 기준이 섞이면 그대로 두지 않았습니다.",
    observed: "V1에서는 생성과 리서치, 검토, 게시, 분석이 한 구조에 있었습니다. 빠르게 움직일 수 있었지만 무엇이 현재 기준이고 무엇이 이전 결과인지 자주 헷갈렸습니다.",
    action: "V1은 지우지 않고 그대로 보존했습니다. V2에서는 조사 → 선정 → 패킷 → 생성 → 사람 검토로 책임을 다시 나눴습니다.",
    evidenceSlug: "aurora-v1-to-v2-archive-map",
  },
  {
    date: "2026.05",
    signal: "STAGE ROUTE",
    title: "자유도를 높였더니 비슷한 안전한 포즈만 반복됐습니다.",
    observed: "캡처 없이 AI가 안무를 설계하도록 열어두자, 서로 닮은 안전한 K-pop 포즈로 결과가 모였습니다.",
    action: "기계적인 점수표를 더 만들지 않았습니다. 대신 같은 춤의 흐름이 이어지도록 자연어 비트시트로 동작의 전후 관계를 설명했습니다.",
    evidenceSlug: "aurora-v2-stage-decision-log",
  },
  {
    date: "2026.05",
    signal: "X · TIKTOK",
    title: "숫자는 정답이 아니라, 다시 볼 대상을 고르는 신호로만 썼습니다.",
    observed: "같은 M-code를 X와 TikTok에서 비교할 수 있었지만, 노출과 반응만으로 장면의 우열이나 반응의 원인을 확정할 수는 없었습니다.",
    action: "지표를 자동으로 다음 작업에 적용하지 않았습니다. 같은 콘텐츠로 확인된 후보만 제가 다시 보고, 다음 스타일과 포맷을 검토하는 데 사용했습니다.",
    evidenceSlug: "aurora-platform-signal-boundary",
  },
];

function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={false}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  body,
  index,
  label,
  title,
}: {
  body: string;
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionIndex}>
        <span>{index}</span>
        <small>{label}</small>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

function EvidenceLink({ slug, label = "근거 파일 일부 보기" }: { slug: string; label?: string }) {
  const source = getEvidenceSource(slug);
  if (!source) return null;

  return (
    <Link className={styles.evidenceLink} href={`/ai-exploration/motion-bank/${slug}`}>
      <span>{getEvidenceDisclosureLabel(source)}</span>
      <strong>{label}</strong>
      <ArrowRight size={15} />
    </Link>
  );
}

function EvidenceExcerpt({ slug, label = "공개 범위와 출처 보기" }: { slug: string; label?: string }) {
  const source = getEvidenceSource(slug);
  if (!source) return null;
  const logic = evidenceLogic[slug];

  return (
    <div className={styles.sourceExcerpt}>
      <div className={styles.sourceTopline}>
        <span>{source.fileName}</span>
        <small>{getEvidenceDisclosureLabel(source)}</small>
      </div>
      {logic ? (
        <div className={styles.sourceLogic}>
          <span>FILE LOGIC</span>
          <p>{logic[0]}</p>
          <p>{logic[1]}</p>
        </div>
      ) : null}
      <pre>{source.excerpt}</pre>
      <Link href={`/ai-exploration/motion-bank/${slug}`}>
        {label} <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function EvidenceLogicNote({ slug }: { slug: string }) {
  const logic = evidenceLogic[slug];
  if (!logic) return null;

  return (
    <div className={styles.evidenceLogicNote}>
      <span>FILE LOGIC</span>
      <p>{logic[0]} {logic[1]}</p>
    </div>
  );
}

function ProductionHarnessSection() {
  return (
    <section className={`${styles.section} ${styles.systemSection}`} id="harness">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="Codex와 Grok Build가 초기 기획을 바탕으로 이미지 생성·영상화·편집까지 확장·자동화할 수 있도록, 맥락과 반복 작업을 하나의 흐름으로 묶어 보았습니다."
          index="02"
          label="PRODUCTION FLOW"
          title="기획의 맥락을 이미지·영상·편집까지 자동화할 수 있을까?"
        />

        <div className={styles.systemDiagram}>
          {systemFlow.map(({ index, title, system, items }, flowIndex) => (
            <article className={flowIndex === 0 ? styles.systemStart : undefined} key={index}>
              <span>{index}</span>
              <small>{system}</small>
              <h3>{title}</h3>
              <ol className={styles.systemChecklist}>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </article>
          ))}
        </div>

        <div className={styles.harnessArchitecture}>
          <div className={styles.harnessArchitectureHeading}>
            <span>HARNESS / ACTUAL PRODUCTION SYSTEM</span>
            <p>8개 phase와 29개 semantic stage로 작업의 순서·기준 결과물·승인·수정 경로를 고정합니다.</p>
          </div>

          <div className={styles.phaseRail} aria-label="IDOL production system phase flow">
            {harnessPhases.map(([index, title, detail], phaseIndex) => (
              <article key={index}>
                <span>{index}</span>
                <strong>{title}</strong>
                <small>{detail}</small>
                {phaseIndex < harnessPhases.length - 1 ? <i aria-hidden="true">→</i> : null}
              </article>
            ))}
          </div>

          <div className={styles.harnessControls}>
            {harnessControls.map(([title, detail]) => (
              <div key={title}>
                <span>{title}</span>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stageDetailSequence}>
          <article className={`${styles.stageDetail} ${styles.songStage}`}>
            <div className={styles.stageDetailHeading}>
              <span>PRE-00S + 00A / SONG STRUCTURE</span>
              <div>
                <h3>초기 메시지 가설과 레퍼런스에 맞는 곡을 만들고, 선택한 음원을 영상과 편집의 시간축으로 바꿉니다.</h3>
                <p>참고 곡의 이름만 프롬프트에 넣지 않습니다. 타깃·훅·구간 기능을 먼저 분석해 Suno 후보를 만들고, 직접 들은 뒤 선택한 take만 섹션·가사·온셋·반복 모티프 단위로 분석해 00A Song Lock으로 넘깁니다.</p>
              </div>
            </div>
            <div className={`${styles.stageProcessRail} ${styles.songProcessRail}`}>
              {songStructure.map(([index, title, detail], itemIndex) => (
                <div key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                  {itemIndex < songStructure.length - 1 ? <i aria-hidden="true">→</i> : null}
                </div>
              ))}
            </div>
            <div className={styles.songContract}>
              <div><span>INPUT</span><strong>메시지 · 타깃 · 레퍼런스 곡</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>SONG CANDIDATES</span><strong>Style · Lyrics · Negative</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>SELECTED AUDIO</span><strong>section · hook · onset · motif</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>DOWNSTREAM</span><strong>장면 trigger · 동작 · 편집 후보</strong></div>
            </div>
            <div className={styles.stageToolStrip}>
              {stageToolEvidence.song.map(([label, detail]) => (
                <div key={label}><span>{label}</span><p>{detail}</p></div>
              ))}
            </div>
          </article>

          <article className={`${styles.stageDetail} ${styles.targetStage}`}>
            <div className={styles.stageDetailHeading}>
              <span>01R / TARGET · REFERENCE DIRECTION</span>
              <div>
                <h3>누가 이 곡과 MV를 자기 이야기처럼 받아들이고, 무엇을 보상으로 느낄지 먼저 정합니다.</h3>
                <p>연령·국가·성별만 적지 않습니다. 선택한 곡과 레퍼런스 곡, 메인 스토리와 장면이 어떤 관객을 끌어들이는지 비교하고, 그 관객에게 건넬 메시지가 세계·행동·카메라·오브젝트·편집에서 어떻게 보일지까지 한 번에 연결합니다.</p>
              </div>
            </div>

            <div className={styles.targetBaseline}>
              <div>
                <span>DEFAULT STARTING POINT</span>
                <strong>GLOBAL K-POP FANDOM</strong>
              </div>
              <p>멤버성·콘셉트·시네마틱 MV 세계·스크린샷·팬 편집·해석·재시청 문법을 이미 이해하는 관객에서 시작합니다. 이것은 무대나 팬캠을 기본 포맷으로 삼는다는 뜻이 아니라, 완성형 시네마틱 MV를 먼저 설계한다는 관객 기준입니다.</p>
            </div>

            <div className={styles.targetAnalysisGrid}>
              {targetAnalysisLayers.map(([index, title, detail]) => (
                <article key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </article>
              ))}
            </div>

            <div className={styles.targetConnectionModel}>
              <div className={styles.targetConnectionHeading}>
                <span>2—4 CONNECTION HYPOTHESES</span>
                <p>레퍼런스 팬덤을 전부 합치지 않습니다. 곡·아티스트·장르·비주얼 세계·플랫폼마다 누가 끌리고, 무엇을 기대하며, 어디서 이탈하는지 적은 뒤 근거가 가장 강한 연결 하나를 1차 타겟으로 고정합니다.</p>
              </div>
              <div className={styles.targetConnectionRail}>
                {targetConnectionTypes.map(([label, detail]) => (
                  <div key={label}><span>{label}</span><strong>{detail}</strong></div>
                ))}
              </div>
              <div className={styles.targetCausalityRail}>
                <div><small>TARGET</small><strong>누가 자기 이야기로 받는가</strong></div>
                <i aria-hidden="true">→</i>
                <div><small>COMMON RESPONSE</small><strong>어떤 욕망과 보상을 공유하는가</strong></div>
                <i aria-hidden="true">→</i>
                <div><small>SCREEN TRANSLATION</small><strong>무엇을 화면에서 보여줘야 증명되는가</strong></div>
              </div>
            </div>

            <blockquote className={styles.targetLockExample}>
              <span>TARGET LOCK / EXAMPLE</span>
              <p>글로벌 K-pop 팬 중, 겉으로는 통제되어 보이지만 자기 욕망을 더 크게 드러내고 싶은 사람. 이 곡을 통해 ‘내가 나를 선택해도 된다’는 자신감을 얻는다. 그래서 MV는 예쁜 멤버 컷을 반복하지 않고, 억눌린 공간이 후렴에서 개방되는 세계 변화와 결정적인 시선·카메라 전환을 준다.</p>
            </blockquote>

            <div className={styles.targetDirectionOutputs}>
              <div>
                <span>01R MUST CLOSE WITH</span>
                <strong>타겟 분석은 아래 연출 결정을 남긴 뒤에만 다음 단계로 넘어갑니다.</strong>
              </div>
              <ol>
                {targetDirectionOutputs.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
              </ol>
            </div>

            <div className={styles.stageToolStrip}>
              {stageToolEvidence.target.map(([label, detail]) => (
                <div key={label}><span>{label}</span><p>{detail}</p></div>
              ))}
            </div>
          </article>

          <article className={styles.stageDetail}>
            <div className={styles.stageDetailHeading}>
              <span>FRONT + 01 / PLANNING STRUCTURE</span>
              <div>
                <h3>01R에서 잠근 타겟과 메시지를, AI와 함께 전체 스토리와 연출로 확장합니다.</h3>
                <p>타겟에게 줄 보상과 화면 번역을 기준으로 identity·오브젝트·공간 레퍼런스를 고정하고 전체 스토리라인을 설계합니다. AI의 추가 리서치는 그 경계 안에서 연출·구도·장면 연결을 넓히는 데 사용합니다.</p>
              </div>
            </div>
            <div className={`${styles.stageProcessRail} ${styles.planningProcessRail}`}>
              {planningStructure.map(([index, title, detail], itemIndex) => (
                <div key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                  {itemIndex < planningStructure.length - 1 ? <i aria-hidden="true">→</i> : null}
                </div>
              ))}
            </div>
            <div className={styles.stageToolStrip}>
              {stageToolEvidence.planning.map(([label, detail]) => (
                <div key={label}><span>{label}</span><p>{detail}</p></div>
              ))}
            </div>
          </article>

          <article className={`${styles.stageDetail} ${styles.generationStage}`}>
            <div className={styles.generationRecipeHeading}>
              <span>02B + 03V / JOB STRUCTURE</span>
              <p>한 곡을 통째로 생성하지 않습니다. 곡 구간별로 필요한 장면만 작업 단위로 만들고, 통과한 키프레임만 영상 단계로 넘깁니다.</p>
            </div>
            <div className={styles.generationRecipeGrid}>
              <article>
                <div>
                  <span>IMAGE / 02B</span>
                  <h3>승인된 레퍼런스와 기획을 핵심 컷 이미지로 컴파일합니다.</h3>
                  <p>곡 구간·스토리보드·identity reference·출력 경로를 preflight로 확인하고, 승인된 섹션 묶음만 Batch API에 보낸 뒤 결과를 Contact Sheet와 registry로 회수합니다.</p>
                </div>
                <ol className={styles.promptStructure}>
                  {imagePromptStructure.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
                </ol>
                <div className={styles.recipeRail}>
                  <span>PREPARE</span><i aria-hidden="true">→</i><span>PREFLIGHT</span><i aria-hidden="true">→</i><span>APPROVE</span><i aria-hidden="true">→</i><strong>BATCH API</strong><i aria-hidden="true">→</i><span>02A REVIEW</span>
                </div>
              </article>
              <article>
                <div>
                  <span>VIDEO / 03V</span>
                  <h3>통과한 핵심 컷을 필요한 노래 구간만 영상화합니다.</h3>
                  <p>영상 프롬프트에는 시작 이미지와 카메라·동작·도착 프레임·앞뒤 장면의 연결을 함께 넘기고, 생성 뒤에는 섹션별 재생 검토를 통과한 소스만 04 편집으로 보냅니다.</p>
                </div>
                <ol className={styles.promptStructure}>
                  {videoPromptStructure.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
                </ol>
                <div className={styles.recipeRail}>
                  <span>KEYFRAME</span><i aria-hidden="true">→</i><span>VIDEO PROMPT</span><i aria-hidden="true">→</i><span>GENERATE</span><i aria-hidden="true">→</i><strong>SECTION REVIEW</strong><i aria-hidden="true">→</i><span>04 EDIT</span>
                </div>
              </article>
            </div>
            <div className={styles.stageToolStrip}>
              {stageToolEvidence.generation.map(([label, detail]) => (
                <div key={label}><span>{label}</span><p>{detail}</p></div>
              ))}
            </div>
          </article>

          <article className={styles.stageDetail}>
            <div className={styles.stageDetailHeading}>
              <span>04 + 04FX / EDIT STRUCTURE</span>
              <div>
                <h3>생성된 영상을 분석하고, 실제 재생을 보며 편집합니다.</h3>
                <p>스크립트가 소스 상태·프레임·오디오·동작·마커를 비교 가능한 근거로 만들면, 04에서 컷과 속도를 정하고 04FX에서 통과한 편집에만 마감 효과와 QC를 적용합니다.</p>
              </div>
            </div>
            <div className={styles.stageProcessRail}>
              {editingStructure.map(([index, title, detail], itemIndex) => (
                <div key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                  {itemIndex < editingStructure.length - 1 ? <i aria-hidden="true">→</i> : null}
                </div>
              ))}
            </div>
            <div className={styles.stageToolStrip}>
              {stageToolEvidence.editing.map(([label, detail]) => (
                <div key={label}><span>{label}</span><p>{detail}</p></div>
              ))}
            </div>
            <div className={styles.audioEditBridge}>
              <div className={styles.audioEditHeading}>
                <span>SONG → EDIT POINTS / TWO SIGNALS, ONE PLAYBACK DECISION</span>
                <p>곡 분석이 컷을 자동 확정하지 않습니다. 음악에서 얻은 후보 시점과 실제 영상에서 보이는 동작·카메라·장면 인과를 한 화면에 겹친 뒤, 재생하면서 최종 컷을 정합니다.</p>
              </div>
              <div className={styles.audioEditSignals}>
                <div>
                  <small>SELECTED AUDIO</small>
                  <strong>가사 진입 · 비트/온셋 · 훅 반복 · 밀도 변화</strong>
                  <span>librosa · audio-motion map</span>
                </div>
                <i aria-hidden="true">+</i>
                <div>
                  <small>ACTUAL VIDEO SOURCE</small>
                  <strong>몸·손·발 착지 · 시선 · 카메라 정지 · 장면 전환</strong>
                  <span>ffprobe · OpenCV · contact sheet</span>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.audioEditGate}>
                  <small>PLAYBACK GATE</small>
                  <strong>후보 마커 → 프리뷰 → 사람이 컷 확정</strong>
                  <span>04 edit recipe</span>
                </div>
              </div>
            </div>
            <div className={styles.scriptAutomation}>
              <div className={styles.scriptAutomationHeading}>
                <FileCode2 size={20} />
                <div>
                  <span>SCRIPT AUTOMATION / EVIDENCE, NOT CREATIVE JUDGEMENT</span>
                  <p>스크립트는 상태·파일·분석·프리뷰·QC 근거를 만들고, 실제 컷의 통과와 선택은 제가 판단합니다.</p>
                </div>
              </div>
              <ol>
                {scriptAutomation.map(([index, title, detail]) => (
                  <li key={index}>
                    <span>{index}</span>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article className={`${styles.stageDetail} ${styles.releaseStage}`}>
            <div className={styles.stageDetailHeading}>
              <span>05 / RELEASE AUTOMATION</span>
              <div>
                <h3>완성할 때마다 같은 업로드 문서와 템플릿을 다시 쓰지 않도록 했습니다.</h3>
                <p>최종 마스터에서 플랫폼별 파생본과 메시지 중심 메타데이터를 만들고, X·TikTok·YouTube·YouTube Shorts용 큐와 패키지를 자동으로 준비합니다. 템플릿은 매번 복사하는 문서가 아니라 콘텐츠 유형에 따라 선택·채워지는 skill이며, 외부 업로드와 공개 발행은 승인된 파일에 한해서만 실행합니다.</p>
              </div>
            </div>
            <div className={`${styles.stageProcessRail} ${styles.releaseProcessRail}`}>
              {releaseStructure.map(([index, title, detail], itemIndex) => (
                <div key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                  {itemIndex < releaseStructure.length - 1 ? <i aria-hidden="true">→</i> : null}
                </div>
              ))}
            </div>
            <div className={styles.platformReleaseRail}>
              <div><span>X</span><strong>전용 API adapter</strong><small>영상 우선 카피 · board reply</small></div>
              <div><span>TIKTOK</span><strong>Draft / inbox upload</strong><small>section clip · hook loop</small></div>
              <div><span>YOUTUBE</span><strong>API draft / upload</strong><small>master · cutdown · Shorts</small></div>
              <div><span>INSTAGRAM</span><strong>Manual package</strong><small>현재는 승인용 패키지만 준비</small></div>
            </div>
            <div className={styles.stageToolStrip}>
              {stageToolEvidence.release.map(([label, detail]) => (
                <div key={label}><span>{label}</span><p>{detail}</p></div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.schemaBridge}>
          <div className={styles.schemaBridgeHeading}>
            <span>THREE REPRESENTATIVE SCHEMAS / CONTEXT HANDOFF</span>
            <p>전문을 공개하지 않고, 메시지와 메인 레퍼런스가 이미지·영상·편집으로 이어지는 대표 필드만 요약했습니다.</p>
          </div>
          <div className={styles.schemaBridgeRail}>
            {schemaConnection.map((schema, index) => (
              <article key={schema.file}>
                <span>{schema.index} / {schema.label}</span>
                <strong>{schema.file}</strong>
                <ul>{schema.fields.map((field) => <li key={field}>{field}</li>)}</ul>
                <p>{schema.role}</p>
                {index < schemaConnection.length - 1 ? <i aria-hidden="true">→</i> : null}
              </article>
            ))}
          </div>
          <div className={styles.schemaBridgeOutcome}>
            <span>MESSAGE + MAIN REFERENCES</span>
            <strong>기획 맥락을 잃지 않고 핵심 컷 생성 → 구간 영상화 → 프레임 기준 편집까지 연결</strong>
          </div>
        </div>

        <div className={styles.studioConclusion}>
          <div className={styles.studioConclusionHeading}>
            <span>CURRENT DIRECTION / MINIMUM-INTERVENTION CONTENT STUDIO</span>
            <h3>최소한의 개입으로, 반복 작업과 AI가 처리할 수 있는 제작 구간을 최대한 자동화합니다.</h3>
            <p>사람은 메시지와 타깃, 02A 키프레임, 03V 영상, 최종 편집과 공개 여부를 판단합니다. 그 사이의 레퍼런스 재사용·프롬프트 컴파일·후보 정리·오디오 분석·프리뷰·QC·플랫폼 패키징은 하네스와 스크립트가 이어받습니다.</p>
          </div>
          <div className={styles.studioAutomationLanes}>
            {studioAutomationLanes.map(([label, detail], index) => (
              <article key={label}>
                <span>{String(index + 1).padStart(2, "0")} / {label}</span>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className={styles.studioBoundaryRail}>
            <div><small>HUMAN</small><strong>기획 승인 → 02A 리뷰 → 03V 리뷰 → 최종 컷·공개 승인</strong></div>
            <div><small>AUTOMATION</small><strong>재사용 → 생성 → 분석 → 편집 보조 → 패키징 → 승인된 API 실행</strong></div>
          </div>
        </div>

        <div className={styles.judgementReturn}>
          <div>
            <ShieldCheck size={25} />
            <span>MY DECISION</span>
          </div>
          <p>
            무엇을 통과시키고, 보류하고, 버리고, 다시 기획할지는 제가 정합니다. 시스템은 반복을 줄이고 그 판단을 기록할 뿐, 메시지와 감각을 대신 결정하지 않습니다.
          </p>
          <div className={styles.judgementReturnLoop}>
            <Undo2 size={17} />
            <span>판단 변경 → 해당 소유 단계 수정 → 영향받은 아래 단계만 갱신</span>
          </div>
        </div>

        <div className={styles.systemDepthLink}>
          <span>HOW IT WORKS</span>
          <p>뒤에서 실제 Workbench 화면과 로컬 편집 도구, 단계 레지스트리의 공개 가능한 일부를 보여드립니다.</p>
          <a href="#proof">구현 범위 보기 <ArrowDown size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function SystemProofSection() {
  return (
    <section className={`${styles.section} ${styles.proofSection}`} id="proof">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="완성된 제품처럼 보이게 하지 않고, 현재 실행할 수 있는 Workbench와 개발 중인 로컬 편집 도구, 공개 가능한 단계 레지스트리만 보여드립니다."
          index="06"
          label="WHAT EXISTS NOW"
          title="지금 실제로 돌아가는 범위입니다."
        />

        <div className={styles.systemProofGrid}>
          <article className={styles.workbenchProof}>
            <div className={styles.proofCopy}>
              <span>FRONT PLANNING WORKBENCH</span>
              <h3>레퍼런스와 기획 판단을 한 화면에서 조립합니다.</h3>
              <p>
                Live Plan, Planning Canvas, Sequence Rail, Contact Sheet에 Codex와 Grok 세션을 연결했습니다.
                레퍼런스가 왜 필요한지, 곡의 어느 구간인지, 어떤 후보를 남겼고 무엇을 보류했는지 정리해 다음 생성과 편집 단계로 넘깁니다.
                AI가 찾고 조합한 레퍼런스를 그대로 받는 대신, 제가 정한 메시지와 대상, 장면 방향 안에서만 비교하고 선택하게 했습니다.
                초기 기획부터 AI가 같은 메시지와 기획안을 공유한 채 만들어가도록 맥락과 선택 이유를 함께 넘깁니다.
              </p>
              <EvidenceLink label="Workbench 근거 보기" slug="front-planning-workbench-checkpoint" />
              <EvidenceLogicNote slug="front-planning-workbench-checkpoint" />
            </div>
            <img alt="Front Planning Workbench runnable checkpoint" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
            <div className={`${styles.workflowDiagram} ${styles.workbenchLoopDiagram}`}>
              <div className={styles.workflowDiagramHeading}>
                <span>01 / PLANNING · IMAGE GENERATION LOOP</span>
                <p>기획의 기준을 생성과 후보 선택까지 함께 넘깁니다.</p>
              </div>
              <div className={styles.workflowRail}>
                <div className={styles.workflowNode}>
                  <small>MESSAGE LOCK</small>
                  <strong>메시지 · 대상<br />핵심 레퍼런스</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeAccent}`}>
                  <small>WORKBENCH</small>
                  <strong>리서치·조합 제어<br />장면·후보 기준</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>HARNESS CONTEXT</small>
                  <strong>현재 맥락 · 생성 요청<br />단계 상태</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>AI IMAGE GENERATION</small>
                  <strong>생성 후보</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>CANDIDATE BOARD</small>
                  <strong>후보 보드<br />컨택트시트</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeGate}`}>
                  <small>HUMAN SELECTION</small>
                  <strong>통과 · 보류 · 수정</strong>
                </div>
              </div>
              <div className={styles.workflowOutcomes}>
                <span className={styles.workflowHold}><Undo2 size={14} /> 보류·수정 → Workbench</span>
                <span className={styles.workflowPass}>통과 → 선택된 키프레임</span>
              </div>
            </div>
          </article>

          <article className={styles.editDeskProof}>
            <div className={styles.proofCopy}>
              <span>EDIT HARNESS / LOCAL EDIT DESK</span>
              <h3>선택 오디오와 실제 소스 모션을 맞춰 컷을 정합니다.</h3>
              <ol className={styles.editWorkflow}>
                <li><span>01</span><strong>선택 오디오와 장면 의도 읽기</strong></li>
                <li><span>02</span><strong>소스 인테이크와 컨택트시트 검토</strong></li>
                <li><span>03</span><strong>음악 · 소스 동작 · 장면 역할 마커 정렬</strong></li>
                <li><span>04</span><strong>편집 레시피 · 구간 프리뷰 · 최종 QC</strong></li>
              </ol>
              <p>
                Premiere Pro와 After Effects에서 소스 화면과 프로그램 화면, 타임라인, 마커, 렌더, QC가 어떻게 나뉘는지 살펴봤습니다.
                ffprobe, OpenCV, librosa로 소스와 프레임, 움직임, 비트를 읽고 ffmpeg로 컨택트시트와 러프컷, QC 자료를 만듭니다.
                Python과 Tk로 만든 Edit Desk는 이 흐름을 타임라인과 마커, 파형, 구간 렌더로 확인하기 위해 개발 중인 보조 MVP입니다. 전문 편집기를 대체하는 제품은 아닙니다.
                04 편집에서는 비트 표나 앞 단계의 초 단위만 따라 자르지 않고, 실제 영상의 몸 동작·시선·카메라 이동과 가사·온셋, 다음 장면의 인과를 재생하면서 확인합니다.
                프레임 시트와 분석값은 후보를 좁히는 근거일 뿐, 컷의 최종 선택은 제가 합니다.
              </p>
            </div>
            <EvidenceExcerpt label="공개 범위와 출처 보기" slug="idol-edit-desk-implementation" />
            <div className={`${styles.workflowDiagram} ${styles.editLoopDiagram}`}>
              <div className={styles.workflowDiagramHeading}>
                <span>04 / VIDEO · EDIT LOOP</span>
                <p>스크립트가 비교 근거를 만들고, 재생 검토에서 컷을 결정합니다.</p>
              </div>
              <div className={styles.workflowRail}>
                <div className={styles.workflowNode}>
                  <small>PASSED KEYFRAME</small>
                  <strong>통과한<br />키프레임</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>VIDEO GENERATION</small>
                  <strong>영상 소스</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeAccent}`}>
                  <small>SCRIPT AUTOMATION</small>
                  <strong>인덱스 · 프레임 · 마커<br />프리뷰 · QC</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeGate}`}>
                  <small>HUMAN PLAYBACK REVIEW</small>
                  <strong>음악 · 동작 · 장면 인과 · 톤</strong>
                </div>
              </div>
              <ol className={styles.editScriptRail}>
                {scriptAutomation.map(([index, title, script], scriptIndex) => (
                  <li key={index}>
                    <span>{index}</span>
                    <strong>{title}</strong>
                    <small>{script}</small>
                    {scriptIndex < scriptAutomation.length - 1 ? <i aria-hidden="true">→</i> : null}
                  </li>
                ))}
              </ol>
              <div className={styles.workflowOutcomes}>
                <span className={styles.workflowHold}><Undo2 size={14} /> 보류·재편집·재생성 → Workbench</span>
                <span className={styles.workflowPass}>통과 → Loom MV · CF · 웹 결과</span>
              </div>
            </div>
          </article>

          <article className={styles.registryProof}>
            <div className={styles.proofCopy}>
              <span>8 PHASES / 29 STAGES</span>
              <h3>작업이 길어져도 어디서 다시 시작할지 찾을 수 있게 했습니다.</h3>
              <p>
                각 단계에 무엇이 들어오고, 무엇이 나가며, 누가 판단하고, 문제가 생기면 어디로 돌아가야 하는지를 레지스트리로 남겼습니다.
                하위 단계가 앞에서 정한 의미를 임의로 바꾸지 않게 하고, 빠진 판단이 있다면 어느 단계에서 다시 확인해야 하는지 찾을 수 있게 했습니다.
              </p>
            </div>
            <EvidenceExcerpt label="공개 범위와 출처 보기" slug="idol-harness-stage-registry" />
            <div className={`${styles.workflowDiagram} ${styles.harnessLifecycleDiagram}`}>
              <div className={styles.workflowDiagramHeading}>
                <span>HARNESS LIFECYCLE / STATE · ARTIFACT · HANDOFF</span>
                <p>각 작업은 현재 단계, 산출물, 승인과 다음 행동을 남긴 채 이어집니다.</p>
              </div>
              <div className={styles.workflowRail}>
                <div className={styles.workflowNode}>
                  <small>BRIEF</small>
                  <strong>목표 · 레퍼런스<br />완료 기준</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>CURRENT STAGE</small>
                  <strong>입력 · 실행할 일<br />완료 조건</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>RUN</small>
                  <strong>AI 세션 · 생성<br />스크립트 실행</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>ARTIFACT</small>
                  <strong>파일 · 버전<br />시트 · 프리뷰</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeGate}`}>
                  <small>FOUNDER GATE</small>
                  <strong>검토 · 승인</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeOutput}`}>
                  <small>HANDOFF</small>
                  <strong>현재 상태 · 산출물<br />다음 행동</strong>
                </div>
              </div>
              <div className={styles.workflowOutcomes}>
                <span className={styles.workflowHold}><Undo2 size={14} /> HOLD → 막힌 지점 기록 후 같은 단계 재실행</span>
                <span className={styles.workflowPass}>PASS → 다음 단계 인계 · 결정 이유 축적</span>
                <span className={styles.workflowReplan}><Undo2 size={14} /> REJECT · REPLAN → Workbench</span>
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function VisualWorkflowReference() {
  return (
    <div className={styles.adoptionVisual}>
      <div className={styles.referenceUiPanel}>
        <div className={styles.referenceUiHeading}>
          <span>REFERENCE UI PATTERNS</span>
          <strong>ComfyUI의 노드 연결과 Figma의 캔버스·사이드바</strong>
        </div>
        <div className={styles.referenceUiGrid}>
          <div className={styles.comfyReferenceUi}>
            <small>COMFYUI / NODE GRAPH</small>
            <div><span>REFERENCE</span><i aria-hidden="true">→</i><span>PROMPT</span><i aria-hidden="true">→</i><span>IMAGE</span></div>
          </div>
          <div className={styles.figmaReferenceUi}>
            <small>FIGMA / CANVAS</small>
            <div><span>LAYERS</span><b>PLANNING<br />CANVAS</b><span>PROPERTIES</span></div>
          </div>
        </div>
        <p>노드 자체를 복제하는 대신, 연결된 맥락과 선택 상태가 한 화면에 보이는 방식을 가져왔습니다.</p>
      </div>
      <figure className={styles.localUiFigure}>
        <img alt="Front Planning Workbench canvas and session interface" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
        <figcaption>LOCAL APPLICATION / FRONT PLANNING WORKBENCH</figcaption>
      </figure>
    </div>
  );
}

function EditingGrammarEvidence() {
  return (
    <div className={styles.adoptionVisual}>
      <figure className={styles.localUiFigure}>
        <img alt="Root Signal edit contact sheet used for detailed frame review" src="/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg" />
        <figcaption>FRAME CONTACT SHEET / DETAILED REVIEW</figcaption>
      </figure>
      <div className={styles.editScriptPanel}>
        <div>
          <span>LOCAL SCRIPT FLOW</span>
          <strong>프레임·오디오·마커를 비교 자료로 바꾸는 Python 스크립트</strong>
        </div>
        <ol>
          {scriptAutomation.map(([index, title, script]) => (
            <li key={index}>
              <span>{index}</span>
              <strong>{title}</strong>
              <small>{script}</small>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function HarnessAdoptionDiagram() {
  return (
    <div className={styles.harnessAdoptionDiagram}>
      <div className={styles.harnessAdoptionHeading}>
        <span>WHY THE HARNESS WAS ADDED</span>
        <p>세션이 바뀌거나 작업이 길어질 때 기획과 판단이 사라지는 문제에서 시작해, 현재 상태·산출물·다음 행동을 남기는 흐름으로 바꿨습니다.</p>
      </div>
      <div className={styles.harnessChangeCards}>
        <article><span>TRIGGER</span><strong>세션·도구가 바뀔 때<br />이전 판단이 흩어짐</strong></article>
        <article><span>CHANGE</span><strong>현재 단계 · 산출물<br />승인 기준 · 다음 행동</strong></article>
        <article><span>RULE</span><strong>판단이 바뀌면<br />원래 단계로만 복귀</strong></article>
      </div>
      <div className={styles.harnessMermaidRail} aria-label="Harness production system loop">
        <div><small>BRIEF</small><strong>목표 · 레퍼런스</strong></div><i aria-hidden="true">→</i>
        <div><small>STAGE</small><strong>입력 · 완료 기준</strong></div><i aria-hidden="true">→</i>
        <div><small>RUN</small><strong>AI 세션 · 스크립트</strong></div><i aria-hidden="true">→</i>
        <div><small>ARTIFACT</small><strong>파일 · 시트 · 프리뷰</strong></div><i aria-hidden="true">→</i>
        <div className={styles.harnessMermaidGate}><small>FOUNDER GATE</small><strong>검토 · 승인</strong></div><i aria-hidden="true">→</i>
        <div className={styles.harnessMermaidOutput}><small>HANDOFF</small><strong>다음 행동 · 기록</strong></div>
      </div>
      <div className={styles.harnessMermaidOutcomes}>
        <span>HOLD → 막힌 지점 기록 후 같은 단계 재실행</span>
        <strong>PASS → 다음 단계 인계</strong>
        <span>REJECT · REPLAN → Workbench로 복귀</span>
      </div>
    </div>
  );
}

function TrendApplicationSection() {
  return (
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="X에서 새로운 흐름을 발견하면 공식 문서와 실제 제품 구조를 확인했습니다. 그대로 따라 만들기보다, 지금 막혀 있는 한 부분에 작게 붙여본 뒤 쓸지 말지를 정했습니다."
          index="03"
          label="FROM TREND TO TOOL"
          title="새 기능을 보면, 제 작업에서 쓸 이유부터 찾았습니다."
        />
        <div className={styles.trendIntakeRule}>
          <span>HOW I ADOPT A TOOL</span>
          <p>발견 → 공식 자료 확인 → 내 문제로 다시 정의 → 작게 적용 → 채택 · 보류 · 금지</p>
        </div>
        <div className={styles.trendEvidenceStrip}>
          {trendExperiments.map((item, index) => (
            <article key={item.signal}>
              <span>{String(index + 1).padStart(2, "0")} / RESEARCH INPUT → LOCAL APPLICATION</span>
              <strong>{item.proof}</strong>
              <EvidenceLink label="적용 근거 보기" slug={item.evidenceSlug} />
            </article>
          ))}
        </div>
        <div className={styles.trendList}>
          {trendExperiments.map((item, index) => (
            <article className={styles.trendRow} key={item.signal}>
              <div className={styles.trendSignal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.signal}</small>
                <b>{item.status}</b>
              </div>
              <div className={styles.trendApplied}>
                <span>APPLIED AS</span>
                <h3>{item.appliedAs}</h3>
                <strong>{item.proof}</strong>
                <p>{item.next}</p>
              </div>
              <div className={styles.trendStory}>
                <div>
                  <span>QUESTION · DISCOVERY</span>
                  <h3>{item.question}</h3>
                  <p>{item.discovery}</p>
                </div>
              </div>
              <div className={styles.trendApplicationDetail}>
                <span>실제 적용</span>
                <p>{item.test}</p>
              </div>
              <div className={styles.trendDecisionDetail}>
                <span>판단</span>
                <p>{item.decision}</p>
              </div>
              <div className={styles.trendAdoptionEvidence}>
                {index === 0 ? <VisualWorkflowReference /> : null}
                {index === 1 ? <EditingGrammarEvidence /> : null}
                {index === 2 ? <HarnessAdoptionDiagram /> : null}
              </div>
              <div className={styles.trendEvidence}>
                <EvidenceLink label="로컬 적용 근거 보기" slug={item.evidenceSlug} />
                <div className={styles.trendSources}>
                  <span>OFFICIAL / ENGLISH INPUT</span>
                  {item.sourceLinks.map(([label, href]) => (
                    <a href={href} key={href} rel="noreferrer" target="_blank">{label} <ExternalLink size={12} /></a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.humanReviewSummary}>
          <div className={styles.humanReviewHeading}>
            <span>WHERE I INTERVENE / THREE HUMAN GATES</span>
            <p>자동으로 이어지는 것은 레퍼런스 바인딩·프롬프트 컴파일·후보 생성·분석입니다. 아래 세 지점의 창의적 판단은 자동화하지 않았습니다.</p>
          </div>
          <div className={styles.humanReviewRail}>
            {humanReviewGates.map(([index, title, detail], itemIndex) => (
              <article key={index}>
                <span>{index}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
                {itemIndex < humanReviewGates.length - 1 ? <i aria-hidden="true">→ AUTOMATION →</i> : null}
              </article>
            ))}
          </div>
        </div>
      </Reveal>
  );
}

function ResultCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = resultSlides[activeIndex];
  const changeSlide = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + resultSlides.length) % resultSlides.length);
  };

  return (
    <div className={styles.resultCarousel}>
      <div className={styles.resultMediaStage}>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={styles.resultMediaMotion}
          initial={{ opacity: 0, y: 10 }}
          key={activeSlide.id}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.resultVideoEmbed}
            loading="lazy"
            src={activeSlide.embedSrc}
            title={`${activeSlide.title} public ${activeSlide.platform} embed`}
          />
        </motion.div>
      </div>

      <aside className={styles.resultCarouselMeta}>
        <div>
          <span>{activeSlide.label}</span>
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.detail}</p>
        </div>
        <div className={styles.resultCarouselControls}>
          <small>{String(activeIndex + 1).padStart(2, "0")} / {String(resultSlides.length).padStart(2, "0")}</small>
          <div>
            <button aria-label="이전 결과 보기" onClick={() => changeSlide(-1)} type="button"><ChevronLeft size={20} /></button>
            <button aria-label="다음 결과 보기" onClick={() => changeSlide(1)} type="button"><ChevronRight size={20} /></button>
          </div>
        </div>
        <a href={activeSlide.href} rel="noreferrer" target="_blank">{activeSlide.platform}에서 보기 <ExternalLink size={14} /></a>
      </aside>
    </div>
  );
}

function ValidationSection() {
  return (
    <section className={`${styles.section} ${styles.validationSection}`} id="validation">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="AI 콘텐츠 자동화 시스템으로 만든 결과 중, 완성한 Loom MV 세 편과 대표 사례 INK를 정리했습니다."
          index="01"
          label="AUTOMATION SYSTEM / RESULTS"
          title="AI 콘텐츠 자동화 시스템으로 완성한 Loom MV 3편"
        />

        <ResultCarousel />

        <div className={styles.cfIntro}>
          <span>LOOM MEMBER CF / PERSONAL SPEC</span>
          <p>
            같은 Loom 멤버를 짧은 제품 광고 안에 넣었습니다. 제품이 배경에 놓인 소품이 아니라, 장면을 움직이는 이유가 되도록 만들었습니다.
          </p>
        </div>

        <div className={styles.cfList}>
          {cfCases.map((item) => (
            <article key={item.label}>
              <div className={styles.cfMedia}>
                <figure className={styles.cfBoard}>
                  <img alt={`${item.label} selected keyframe board`} src={item.poster} />
                </figure>
                <figure className={styles.cfVideo}>
                  <video autoPlay controls loop muted playsInline preload="metadata" src={item.videoSrc} />
                </figure>
              </div>
              <div className={styles.cfCopy}>
                <div className={styles.cfMeta}><span>{item.index}</span><small>{item.label}</small></div>
                <b>{item.status}</b>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className={styles.intentPair}>
                  <div><span>핵심 메시지</span><strong>{item.message}</strong></div>
                  <div><span>전하고 싶었던 대상</span><strong>{item.audience}</strong></div>
                </div>
                <div className={styles.cfFlow}><span>장면 흐름</span><strong>{item.flow}</strong></div>
                <div className={styles.cfMetric}>제작 단위 · {item.metric}</div>
                <EvidenceLink label="메시지와 장면 규칙 보기" slug={item.evidenceSlug} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.specBoundary}>
          <ShieldCheck size={20} />
          <p>Cola와 Headset은 Loom 멤버를 활용해 개인적으로 만든 비공식 spec commercial입니다. 실제 브랜드 협업이나 공식 캠페인, 성과 사례가 아닙니다.</p>
        </div>
      </Reveal>
    </section>
  );
}

function InkOutcomeSection() {
  return (
    <section className={`${styles.section} ${styles.inkSection}`} id="ink">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="INK를 만들며 한 번 정한 메시지와 레퍼런스, 후보 선택, 편집 판단을 다음 단계까지 끊기지 않게 넘기는 일이 필요하다는 것을 확인했습니다."
          index="01A"
          label="THE PROBLEM BEHIND INK"
          title="생성은 빨랐지만, 기획과 프롬프트, 편집은 매번 다시 시작됐습니다."
        />

        <div className={styles.inkProblemStatement}>
          <span>WHAT WAS REPEATING</span>
          <strong>이미지와 영상은 빠르게 만들 수 있었지만, 기획을 다시 설명하고 프롬프트를 만들고 편집 판단을 잇는 시간은 줄지 않았습니다.</strong>
        </div>

        <div className={styles.inkBuildSteps}>
          <article className={styles.inkBuildStep}>
            <header>
              <span>01</span>
              <small>PLAN / CONTEXT LOCK</small>
            </header>
            <div className={styles.inkBuildContent}>
              <div className={styles.inkBuildHeading}>
                <h3>기획(메시지), key object, member를 고정했습니다.</h3>
                <p>‘남이 정한 선 밖에서도 자기 방향을 계속 써 내려간다’는 메시지를 기준으로 공간과 오브젝트, 네 멤버가 맡을 장면의 역할을 정했습니다.</p>
              </div>
              <div className={styles.inkPlanMedia}>
                <figure>
                  <img alt="INK key visual and space reference board" src="/ai-exploration/ink/contact-sheets/ink-space-reference-contact-sheet-v1.webp" />
                  <figcaption>KEY VISUAL / SPACE REFERENCE</figcaption>
                </figure>
                <figure>
                  <img alt="INK key object system board" src="/ai-exploration/ink/contact-sheets/ink-canonical-object-system-contact-sheet-v1.webp" />
                  <figcaption>KEY OBJECT / OBJECT SYSTEM</figcaption>
                </figure>
              </div>
              <div className={styles.inkMemberMedia}>
                <figure>
                  <img alt="INK member key visual for Saeyan" src="/ai-exploration/ink/members/saeyan-solo-reference-sheet-v1.png" />
                  <figcaption>MEMBER KEY VISUAL / SAEYAN</figcaption>
                </figure>
                <figure>
                  <img alt="INK member key visual for Yeul" src="/ai-exploration/ink/members/yeul-solo-reference-sheet-v1.png" />
                  <figcaption>MEMBER KEY VISUAL / YEUL</figcaption>
                </figure>
                <figure>
                  <img alt="INK member key visual for Faye" src="/ai-exploration/ink/members/faye-solo-reference-sheet-v1.png" />
                  <figcaption>MEMBER KEY VISUAL / FAYE</figcaption>
                </figure>
                <figure>
                  <img alt="INK member key visual for Rena" src="/ai-exploration/ink/members/rena-solo-reference-sheet-v1.png" />
                  <figcaption>MEMBER KEY VISUAL / RENA</figcaption>
                </figure>
              </div>
              <EvidenceLink label="INK 기획과 출력 기록 보기" slug="ink-output-registry" />
            </div>
          </article>

          <article className={styles.inkBuildStep}>
            <header>
              <span>02</span>
              <small>IMAGE / CANDIDATE REVIEW</small>
            </header>
            <div className={styles.inkBuildContent}>
              <div className={styles.inkBuildHeading}>
                <h3>01에서 고정한 기획을 연출·구도·스토리라인으로 확장한 뒤, 핵심 컷 이미지를 생성했습니다.</h3>
                <p>곡 구간별 keyframe과 인서트 후보를 한 화면에서 보며 얼굴·빛·다음 장면으로의 연결을 검토했습니다.</p>
              </div>
              <div className={styles.inkGeneratedMedia}>
                <figure>
                  <img alt="INK keyframe selection contact sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" />
                  <figcaption>KEYFRAME SELECTION / SECTION S00—S03</figcaption>
                </figure>
                <figure>
                  <img alt="INK motion candidate contact sheet" src="/ai-exploration/ink/contact-sheets/section-S07-v2-inserts-part-01.webp" />
                  <figcaption>MOTION CANDIDATES / SECTION S07</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article className={styles.inkBuildStep}>
            <header>
              <span>03</span>
              <small>VIDEO / PLAYBACK REVIEW</small>
            </header>
            <div className={styles.inkBuildContent}>
              <div className={styles.inkBuildHeading}>
                <h3>02의 핵심 컷 이미지를 영상화한 뒤, AI를 활용해 편집 초안을 자동화했습니다.</h3>
                <p>생성된 영상의 핵심 프레임과 앞뒤 연결, 음악과 스토리라인을 기준으로 실제 재생에서 보류·재생성·편집을 결정했습니다.</p>
              </div>
              <div className={styles.inkTikTokMedia}>
                <figure>
                  <iframe loading="lazy" src="https://www.tiktok.com/embed/v2/7654624880796699924" title="Loom TikTok video 7654624880796699924" />
                  <figcaption>LOOM TIKTOK / PLAYBACK SAMPLE 01</figcaption>
                </figure>
                <figure>
                  <iframe loading="lazy" src="https://www.tiktok.com/embed/v2/7654903853669715221" title="Loom TikTok video 7654903853669715221" />
                  <figcaption>LOOM TIKTOK / PLAYBACK SAMPLE 02</figcaption>
                </figure>
                <figure>
                  <iframe loading="lazy" src="https://www.tiktok.com/embed/v2/7654903498840198420" title="Loom TikTok video 7654903498840198420" />
                  <figcaption>LOOM TIKTOK / PLAYBACK SAMPLE 03</figcaption>
                </figure>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.inkToHarness}>
          <span>SO I BUILT THE HARNESS</span>
          <p>이 반복 문제를 해결하기 위해, 기획의 맥락과 생성·검토·편집을 연결하는 Harness를 만들었습니다.</p>
          <a href="#harness">02 / 자동화 흐름 보기 <ArrowDown size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function SignalDeckOutcomeSection() {
  return (
    <section className={`${styles.section} ${styles.loomSection}`} id="experience">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="멤버의 정체성과 트랙, 장면 자산을 한곳에서 다시 볼 수 있도록 만든 로컬 웹 프로토타입입니다."
          index="01B"
          label="WEB OUTPUT / LOOM SIGNAL DECK"
          title="MV에서 만든 세계를 웹에서도 다시 탐색하게 했습니다."
        />
        <div className={styles.loomFeature}>
          <figure>
            <img alt="Loom Signal Deck main page" src="/ai-exploration/signal-deck/loom-signal-deck-home.png" />
            <figcaption>LOOM SIGNAL DECK / LOCAL PROTOTYPE</figcaption>
          </figure>
          <div className={styles.loomExperienceList}>
            {loomExperience.map(([label, body]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{body}</p>
              </div>
            ))}
            <small>투표와 메시지는 실제 공개 서비스에서 얻은 성과가 아닙니다. 사람들이 콘텐츠를 보는 데서 끝나지 않고 선택과 참여로 이어지는 흐름을 확인하기 위해 만든 로컬 프로토타입입니다.</small>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function LoomAppendixSection() {
  return (
    <section className={`${styles.section} ${styles.loomAppendixSection}`} id="appendix-loom">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="완성한 MV와 웹 프로토타입 뒤에 있던 콘텐츠 IP 가설입니다. 실제 공개 투표 성과가 아니라, 로컬에서 작동시켜 본 참여 구조와 앞으로 확인할 질문을 분리해 적었습니다."
          index="APPENDIX A"
          label="WHY LOOM / CONTENT IP · PARTICIPATION"
          title="비슷한 AI 얼굴이 많아질수록, 기억되는 것은 어떤 콘텐츠를 보여줬는지가 아닐까?"
        />

        <div className={styles.loomAppendixThesis}>
          <div>
            <span>STARTING HYPOTHESIS</span>
            <h3>얼굴을 생성하는 것보다, 그 얼굴이 어떤 메시지와 역할을 가진 콘텐츠에 등장하는지가 더 중요하다고 생각했습니다.</h3>
          </div>
          <p>그래서 Loom은 13명의 identity를 고정하는 데서 끝내지 않고, Root Signal·Pulso·INK처럼 서로 다른 메시지와 장면을 가진 콘텐츠를 계속 만들 수 있는 IP로 확장했습니다. 다음 질문은 시청자가 결과만 보는 대신, 다음 콘텐츠가 풀 질문과 역할 조합에 참여하게 할 수 있는가였습니다.</p>
        </div>

        <div className={styles.loomParticipationLoop}>
          <article><span>01 / CONTENT</span><strong>메시지와 역할이 읽히는 MV·클립</strong><p>투표만 따로 열지 않고, 먼저 선택할 이유가 보이는 콘텐츠를 만듭니다.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02 / ONE QUESTION</span><strong>다음에 필요한 역할·감정·조합</strong><p>인기 순위가 아니라, 콘텐츠를 본 사람이 답할 수 있는 한 가지 질문을 둡니다.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03 / RECEIPT</span><strong>내가 남긴 선택과 다음 확인 시점</strong><p>선택이 자동으로 설정이 되지는 않으며, Founder 검토 뒤 결과로 돌아옵니다.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>04 / NEXT CONTENT</span><strong>선택된 방향을 다시 볼 가치 있는 결과로</strong><p>참여 신호를 그대로 제작에 쓰지 않고, 검토된 방향만 다음 콘텐츠로 연결합니다.</p></article>
        </div>

        <div className={styles.loomVoteProof}>
          <figure>
            <img alt="Loom Signal Deck local web prototype" src="/ai-exploration/signal-deck/loom-signal-deck-home.png" />
            <figcaption>LOOM SIGNAL DECK / CONTENT ARCHIVE + PARTICIPATION ENTRY</figcaption>
          </figure>
          <div className={styles.votePrototypeCard}>
            <span>HARNE VOTE / LOCAL PROTOTYPE</span>
            <small>M01 · SAEYAN</small>
            <h3>Which thread does Saeyan open first?</h3>
            <div>
              <span>PRISM SIGNAL</span>
              <span>RAIN-GLASS MEMORY</span>
              <span>FIRST LIGHT HOOK</span>
            </div>
            <p><strong>LOCAL RECEIPT</strong> 선택은 이 브라우저에만 저장되며, 실제 공개 결과나 자동 제작 명령이 아닙니다.</p>
          </div>
        </div>

        <div className={styles.appendixBoundary}>
          <ShieldCheck size={20} />
          <p><strong>현재 확인된 것:</strong> Signal Deck 안에서 멤버 identity vote·다음 트랙 후보·선택 영수증이 로컬로 작동합니다. <strong>아직 확인하지 않은 것:</strong> 실제 공개 참여율, 재방문, 투표가 콘텐츠 선택에 미치는 효과입니다.</p>
        </div>
      </Reveal>
    </section>
  );
}

function HarnessManagementAppendix() {
  return (
    <section className={`${styles.section} ${styles.harnessAppendixSection}`} id="appendix-harness">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="하네스는 한 번 만든 자동화 도구가 아니라, 실제 제작에서 드러난 문제와 외부의 새로운 방법을 검증해 계속 고치는 운영 체계입니다."
          index="APPENDIX C"
          label="HARNESS · SKILL MANAGEMENT"
          title="새로운 AI 흐름을 어떻게 현재 제작 방식에 안전하게 반영하는가"
        />

        <div className={styles.harnessMaintenanceLoop}>
          <article><span>01 / WATCH</span><strong>Anthropic · Karpathy · X practitioners</strong><p>에이전트·skill·context·tool use의 새로운 흐름을 후보 신호로 수집합니다.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02 / VERIFY</span><strong>공식 문서 · 실제 화면 · 로컬 문제</strong><p>유행어를 바로 채택하지 않고, 원문과 실제 구조를 확인해 지금 막힌 제작 문제와 연결합니다.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03 / ADAPT</span><strong>작은 skill · schema · script</strong><p>절차는 skill, 데이터 계약은 schema, 반복 실행은 script로 나눠 가장 작은 단위로 붙입니다.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>04 / TEST & PROMOTE</span><strong>shadow test · Founder gate · canon</strong><p>실제 작업에서 통과한 변화만 wiki와 production system의 현재 기준으로 승격합니다.</p></article>
        </div>

        <div className={styles.harnessKnowledgeMap}>
          <div className={styles.harnessKnowledgeLead}>
            <span>WIKI AS THE OPERATING MAP</span>
            <h3>긴 대화가 아니라, 다음 세션도 읽을 수 있는 계약으로 관리합니다.</h3>
            <p>상위 원칙과 단계 지도, 실행 방법, 데이터 구조, 반복 스크립트의 책임을 분리합니다. 한 규칙을 여러 문서에 복제하지 않고, 바뀐 단계의 schema·skill·wiki를 함께 고친 뒤 검증합니다.</p>
          </div>
          <div className={styles.harnessKnowledgeLayers}>
            <article><span>AUTHORITY</span><strong>AGENTS.md · policies/</strong><p>항상 지켜야 할 창의·보안·승인 경계</p></article>
            <article><span>MAP</span><strong>wiki/production-system.md</strong><p>전체 단계와 각 상세 문서로 가는 라우터</p></article>
            <article><span>PROCEDURE</span><strong>skills/*/SKILL.md</strong><p>현재 작업에서 따라야 할 실행 절차</p></article>
            <article><span>CONTRACT</span><strong>schemas/*.schema.json</strong><p>단계 간 산출물과 상태의 기계 검증</p></article>
            <article><span>EXECUTION</span><strong>scripts/ · registry</strong><p>검증·컨택트시트·프리뷰·패키징 자동화</p></article>
            <article><span>MEMORY</span><strong>Git · decision record</strong><p>왜 바꿨는지와 이전 기준을 추적</p></article>
          </div>
        </div>

        <div className={styles.appendixBoundary}>
          <ShieldCheck size={20} />
          <p>외부의 새 방법은 영감이 아니라 <strong>검토 후보</strong>로 들어옵니다. 품질·출처·권한·비용·보호 자산 경계를 통과하고, 실제 제작 문제를 해결한 변화만 현재 하네스에 남깁니다.</p>
        </div>
      </Reveal>
    </section>
  );
}

export function AiExplorationPortfolioPage() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 180 });

  return (
    <main className={styles.page}>
      <motion.div className={styles.progress} style={{ scaleX: progress }} />

      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">
          YUMINSEOK / AI EXPLORATION
        </Link>
        <nav aria-label="AI exploration sections">
          <a href="#validation">결과</a>
          <a href="#harness">제작 흐름</a>
          <a href="#origin">형성 · 시행착오</a>
          <a href="#proof">구현 범위</a>
          <a href="#archive">기록</a>
          <a href="#appendix-loom">부록</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <img
          alt="INK music video keyframe exploration contact sheet"
          className={styles.heroImage}
          src="/ai-exploration/ink/contact-sheets/ink-s04-s07-keyframe-sheet-v3.webp"
        />
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroCopy}
          initial={false}
        >
          <span className={styles.eyebrow}>AI RESEARCH & EXPLORATION / 2025.12—PRESENT</span>
          <h1>하나의 메시지는 어디까지<br />하나의 경험이 될 수 있을까?</h1>
          <p>
            하나의 메시지와 몇 개의 핵심 레퍼런스에서 시작해 AI로 장면·이미지·영상을 확장하고, 마지막에는 한 편의 콘텐츠로 직접 엮었습니다.
          </p>
          <div className={styles.heroAnswer}>
            <span>WHY I AUTOMATED</span>
            <strong>매번 기획을 다시 설명하고 프롬프트를 처음부터 쓰는 시간을 줄이되, 무엇을 말하고 어떤 장면을 남길지는 직접 결정하고 싶었습니다.</strong>
          </div>
          <div className={styles.heroActions}>
            <a href="#validation">결과부터 보기 <ArrowDown size={17} /></a>
            <a href="#harness">제작 방식 보기 <ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <div className={styles.heroFoot}>
          <span>PERSONAL AI CREATIVE PROJECT</span>
          <span>RESEARCH · MAKE · EDIT · RECORD</span>
          <span>신입 · 졸업예정</span>
        </div>
      </section>

      <section className={styles.executiveBand}>
        <Reveal className={styles.contentWidth}>
          <div className={styles.executiveLead}>
            <span>AUTOMATION SYSTEM OUTPUTS</span>
            <p>
              AI 콘텐츠 자동화 시스템을 적용한 MV 3편 · 개인 비공식 CF 2편 · Web prototype 1편
            </p>
          </div>
          <div className={styles.executiveProofs}>
            {executiveProofs.map(([value, label, detail]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <ValidationSection />
      <SignalDeckOutcomeSection />
      <InkOutcomeSection />
      <ProductionHarnessSection />

      <section className={`${styles.section} ${styles.trendSection}`} id="origin">
        <TrendApplicationSection />
        <Reveal className={`${styles.contentWidth} ${styles.formationOrigin}`}>
          <SectionHeading
            body="같은 얼굴을 반복해 만드는 실험에서 시작해, 생성과 편집의 자동화, 평평한 기획과 부족한 스토리라인의 문제를 차례로 고쳤습니다. 각 작업에서 드러난 문제가 다음 하네스 단계를 만들었습니다."
            index="04"
            label="FORMATION + ITERATION / 2026.05—07"
            title="이 시스템은 질문과 시행착오를 따라 만들어졌습니다."
          />

          <div className={styles.originThesis}>
            <span>FIRST QUESTION</span>
            <blockquote>
              같은 얼굴을 유지한 채 콘텐츠를 계속 만들 수 있다면,
              기획과 생성, 편집까지 하나의 흐름으로 이어갈 수 있지 않을까?
            </blockquote>
          </div>

          <div className={styles.formationJourney}>
            {formationJourney.map((item) => (
              <article className={styles.formationStep} key={item.index}>
                <header className={styles.formationStepHeading}>
                  <div><span>{item.index}</span><small>{item.period}</small><b>{item.project}</b></div>
                  <h3>{item.question}</h3>
                </header>

                <div className={styles.formationStepBody}>
                  <div className={styles.formationEvidenceVisual}>
                    {item.index === "01" ? (
                      <div className={styles.formationAuroraPair}>
                        <figure><img alt="Aurora V2 M01 MV storyboard" src={item.image ?? undefined} /><figcaption>M01 / MV UNIT</figcaption></figure>
                        <figure><img alt="Aurora V2 M01 stage storyboard" src="/ai-exploration/aurora-v2/m01-stage-storyboard.webp" /><figcaption>M01 / STAGE UNIT</figcaption></figure>
                      </div>
                    ) : item.index === "03" ? (
                      <div className={styles.editAutomationMini}>
                        <span>EDIT RECIPE / JSON</span>
                        <div><small>SOURCE</small><strong>path · in/out · FPS</strong></div>
                        <i aria-hidden="true">→</i>
                        <div><small>TIMELINE</small><strong>order · marker · retime</strong></div>
                        <i aria-hidden="true">→</i>
                        <div><small>RENDER</small><strong>preview · 04FX · QC</strong></div>
                      </div>
                    ) : (
                      <figure>
                        <img alt={`${item.project} formation evidence`} src={item.image ?? undefined} />
                        <figcaption>{item.project} / ACTUAL EVIDENCE</figcaption>
                      </figure>
                    )}
                  </div>

                  <div className={styles.formationCausality}>
                    <div><span>해본 것</span><p>{item.test}</p></div>
                    <div><span>드러난 문제</span><p>{item.finding}</p></div>
                    <div className={styles.formationChange}><span>하네스의 다음 변화</span><p>{item.change}</p></div>
                    {item.evidenceSlug ? <EvidenceLink label="실제 구조와 판단 근거 보기" slug={item.evidenceSlug} /> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.formationOutcome}>
            <div className={styles.formationOutcomeHeading}>
              <span>CURRENT / INK + WORKBENCH</span>
              <p>INK에서는 메시지와 멤버·오브젝트·공간, 섹션별 스토리라인을 먼저 고정했습니다. 지금은 그 기획을 Workbench에서 조립하고 Harness가 생성·검토·편집·기록으로 이어갑니다.</p>
            </div>
            <div className={styles.formationOutcomeRail}>
              <div><span>01</span><strong>IDENTITY REFERENCE</strong><small>같은 얼굴의 재사용 기준</small></div>
              <div><span>02</span><strong>WORKBENCH</strong><small>메시지 · 레퍼런스 · 스토리라인</small></div>
              <div><span>03</span><strong>02A → 02B → 03V</strong><small>사람 검토 · 이미지 · 영상</small></div>
              <div><span>04</span><strong>04 EDIT → 04FX</strong><small>편집 레시피 · 재생 검토 · QC</small></div>
            </div>
            <a className={styles.auroraTikTok} href={LOOM_TIKTOK_URL} rel="noreferrer" target="_blank">
              AURORA·LOOM 제작 결과 / @loom_mm <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </section>

      <SystemProofSection />

      <section className={`${styles.section} ${styles.archiveSection}`} id="archive">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="기록을 많이 쌓으려는 것이 아니었습니다. 다음 작업에서 같은 판단을 다시 처음부터 하지 않기 위해, 유지한 기준과 바꾼 이유를 남겼습니다."
            index="08"
            label="DECISIONS I KEPT"
            title="결과보다, 왜 남기고 왜 버렸는지를 기록했습니다."
          />

          <div className={styles.decisionList}>
            {decisionLogs.map((item) => (
              <article key={item.signal}>
                <div className={styles.decisionMeta}><span>{item.date}</span><strong>{item.signal}</strong></div>
                <div className={styles.decisionCopy}>
                  <h3>{item.title}</h3>
                  <div><span>관찰</span><p>{item.observed}</p></div>
                  <div><span>반영</span><p>{item.action}</p></div>
                </div>
                <EvidenceLink label="실제 결정 기록 보기" slug={item.evidenceSlug} />
              </article>
            ))}
          </div>

          <div className={styles.archiveRule}>
            <FileCode2 size={25} />
            <p><strong>원본은 작업별 출처와 함께 보존합니다. 여러 작업에서 반복해서 확인된 판단만 다음 기준으로 옮깁니다.</strong> 전체 스킬과 프롬프트, 운영 문서는 공개하지 않습니다. 대신 제가 어떤 판단을 내렸는지 확인할 수 있는 최소한의 발췌만 보여드립니다.</p>
          </div>
        </Reveal>
      </section>

      <section className={styles.closingSection}>
        <Reveal className={styles.contentWidth}>
          <span className={styles.closingLabel}>WHAT I AM BUILDING</span>
          <h2>최소한의 개입으로<br />반복 제작을 이어 가는<br />AI 콘텐츠 스튜디오를 만들고 있습니다.</h2>

          <div className={styles.brandTranslation}>
            <div className={styles.brandTranslationLead}>
              <span>FROM CONTENT TO BRAND EXPERIENCE</span>
              <p>지금 실제로 만든 것과 아직 가설인 것을 나눴습니다. 콘텐츠와 웹에서는 결과가 있고, 물리 공간과 리테일은 다음에 작게 확인해볼 방향입니다.</p>
            </div>
            <div className={styles.brandTranslationRows}>
              <article><span>CONTENT</span><strong>하나의 메시지나 제품의 기능을 이미지와 영상, MV, 짧은 광고의 장면으로 만들었습니다.</strong></article>
              <article><span>WEB EXPERIENCE</span><strong>Loom의 멤버와 트랙, 콘텐츠, 참여 흐름을 Signal Deck 로컬 프로토타입으로 연결했습니다.</strong></article>
              <article><span>SCENE SYSTEM</span><strong>INK에서는 빛과 오브젝트, 인물의 동선이 메시지를 보여주게 했습니다. Headset에서는 미술관의 소리 규칙이 제품의 기능을 보이게 했습니다.</strong></article>
              <article><span>NEXT / PHYSICAL · RETAIL</span><strong>이 장면 규칙을 여러 화면과 현장, 웹이 이어지는 경험이나 공간 프로토타입으로 옮기는 일은 아직 다음 가설입니다. 완료한 결과처럼 말하지 않습니다.</strong></article>
            </div>
          </div>

          <div className={styles.closingPoints}>
            <div><span>01</span><strong>새 기술을 실제 제작 문제로 바꾸는 관점</strong></div>
            <div><span>02</span><strong>아이디어를 콘텐츠와 도구, 서비스 프로토타입까지 직접 구현하는 실행력</strong></div>
            <div><span>03</span><strong>성공과 폐기의 이유를 다음 작업의 기준으로 남기는 습관</strong></div>
          </div>

          <div className={styles.boundaryNote}>
            <ShieldCheck size={20} />
            <p>동일한 조건에서 모델 간 우열을 검증했다고 말하지 않습니다. AHEYA에는 상용 성과가 없었습니다. Workbench는 현재 실행 가능한 개발 체크포인트이며 완성된 상용 제품이 아닙니다. 물리 공간과 리테일 역시 완료한 실적이 아닙니다. 현재 확인한 범위는 콘텐츠 안의 공간 규칙과 로컬 웹 경험까지입니다.</p>
          </div>

          <div className={styles.brandProofs}>
            <div>
              <span>OTHER BRAND PROJECTS</span>
              <p>MUSINSA와 ADSB는 이 AI 제작 시스템의 결과로 묶지 않았습니다. 두 프로젝트는 패션 브랜드의 메시지와 무드를 이해하고, 팀과 이해관계자의 피드백 안에서 영상의 흐름을 조정한 별도의 브랜드 콘텐츠 작업입니다.</p>
            </div>
            <Link href="/deck/musinsa">MUSINSA <ArrowRight size={15} /></Link>
            <Link href="/deck/adsb">ADSB / Andersson Bell <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </section>

      <LoomAppendixSection />

      <section className={`${styles.section} ${styles.aheyaSection}`} id="aheya">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="콘텐츠 제작 하네스의 구성 요소로 섞지 않는 별도 서비스 탐구입니다. AI agent의 수행을 어떻게 평가할지에서 시작해, AI로 만든 프로젝트를 지원하는 크라우드펀딩과 블록체인 기반 신뢰·수수료 구조까지 직접 구현해 보았습니다."
            index="APPENDIX B"
            label="WHY AHEYA / AGENT · FUNDING · TRUST"
            title="AI가 더 많은 것을 만들게 될 때, 그 결과를 어떻게 평가하고 지원할 수 있을까?"
          />

          <div className={styles.aheyaQuestionRail}>
            <article><span>01 / EVALUATION</span><strong>AI agent의 수행 결과와 신뢰를 어떻게 확인할까?</strong></article>
            <i aria-hidden="true">→</i>
            <article><span>02 / FUNDING</span><strong>AI로 만든 프로젝트를 위한 크라우드펀딩이 있다면?</strong></article>
            <i aria-hidden="true">→</i>
            <article><span>03 / BLOCKCHAIN</span><strong>수수료와 실행 기록을 스마트계약으로 더 투명하게 만들 수 있을까?</strong></article>
          </div>

          <div className={styles.aheyaFeature}>
            <img alt="AHEYA crowdfunding and trust service prototype" src="/aheya/aheyabaraya-homepage-2026-04-28.png" />
            <div>
              <span>AHEYA / SMART CONTRACT · VIBE CODING</span>
              <h3>만들 수 있다는 것과, 사람들이 공통 서비스로 필요로 한다는 것은 달랐습니다.</h3>
              <p>
                AI agent의 작업 결과를 평가하고 기록하는 Trust 구조에서 시작해, AI builder의 프로젝트를 지원하는 크라우드펀딩과 Solidity 스마트계약, wallet, 외부 인프라를 구현했습니다. 이후 Yui에서는 AI agent가 후보 탐색부터 계획과 실행, 엄격한 검토, 기록까지 이어갈 수 있는지 시험했습니다.
              </p>
              <p>
                하지만 각 창작자와 서비스가 결제를 독립적으로 쉽게 붙일 수 있다는 현실을 충분히 반영하지 못해, 공통 펀딩·결제 레이어의 필요를 과대평가했습니다. 약 2~3주 동안 X에서 직접 연락했음에도 유효한 시장 반응을 얻지 못했고, 거시 환경과 유지 비용까지 고려해 프로젝트를 중단했습니다.
              </p>
              <p>
                이 경험을 통해 기능을 더 만드는 것보다 먼저 누가 왜 이 공통 구조를 필요로 하는지, 이미 더 간단한 대안이 있는지를 확인해야 한다는 기준을 얻었습니다. 이후에는 기술 가설과 시장 가설을 분리해 보고, 제 관심을 실제 결과와 반복 검증이 가능한 콘텐츠 제작으로 옮겼습니다.
              </p>
              <div className={styles.aheyaLinks}>
                <EvidenceLink label="OpenClaw Yui 실행 흐름 보기" slug="aheya-openclaw-orchestration-flow" />
                <EvidenceLink label="Solidity 공개 코드 보기" slug="aheya-evm-funding-registry" />
                <a href={AHEYA_ARCHIVE_URL} rel="noreferrer" target="_blank">AHEYA 공개 아카이브 <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>

          <article className={styles.optionalExploration}>
            <img alt="AB LUNA state and handoff exploration" src="/ab-luna/source-assets/abluna-4.webp" />
            <div>
              <span>AB_LUNA / STATE · HANDOFF EXPLORATION</span>
              <h3>흩어진 결과를 다음 작업이 읽을 수 있는 상태로 바꿨습니다.</h3>
              <p>여러 AI가 만든 결과를 Project Brief, Current State, Artifact Index, Handoff로 나눴습니다. 무엇이 끝났고, 무엇이 막혔고, 다음에 무엇을 해야 하는지 남겼습니다.</p>
              <EvidenceLink label="전신 구조의 실제 파일 일부" slug="ab-luna-state-handoff-lineage" />
            </div>
          </article>
        </Reveal>
      </section>

      <HarnessManagementAppendix />

      <footer className={styles.footer}>
        <div>
          <span>YUMINSEOK / AI CREATIVE EXPLORATION</span>
          <p>메시지와 선택은 직접 책임하고, 반복 가능한 제작과 배포 준비는 하네스와 스크립트로 연결해 온 과정입니다.</p>
        </div>
        <div className={styles.footerActions}>
          <Link href="/"><Home size={15} /> 전체 포트폴리오</Link>
          <Link href="/loom-workflow">Loom 제작 사례 <ArrowRight size={15} /></Link>
        </div>
      </footer>
    </main>
  );
}
