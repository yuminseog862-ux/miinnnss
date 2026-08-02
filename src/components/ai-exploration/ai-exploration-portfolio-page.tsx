"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  FileCode2,
  Home,
  ShieldCheck,
  Undo2,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type PropsWithChildren } from "react";

import {
  getEvidenceDisclosureLabel,
  getEvidenceSource,
} from "@/lib/ai-exploration/motion-bank-sources";

import styles from "./ai-exploration-portfolio.module.css";

const LOOM_TIKTOK_URL = "https://www.tiktok.com/@loom_mm";
const LOOM_SIGNAL_DECK_URL = "https://loom-signal-deck.vercel.app";
const CURRENT_WORKBENCH_IMAGE = "/ai-exploration/workbench/one-move-front-planning-workbench-clean-2026-07-29.png";
const HUMAN_SELECTION_MAP_IMAGE = "/ai-exploration/workbench/founder-selection-map-sanitized-2026-07-29.png";
const IONIA_FOUNDER_WORKBENCH_PREVIEW =
  "/ai-exploration/cf/ionia-veil-founder-workbench/founder-workbench.html";
const IONIA_FOUNDER_WORKBENCH_SHOTS = [
  {
    id: "core-set",
    src: "/ai-exploration/workbench/ionia-veil-founder-workbench-corecuts-2026-08-02.png",
    alt: "IONIA VEIL · Core Cuts C01–C07 reference set",
    label: "CORE SET · C01–C07",
  },
  {
    id: "core-card",
    src: "/ai-exploration/workbench/ionia-veil-founder-workbench-corecut-card-2026-08-02.png",
    alt: "IONIA VEIL · Core Cut card with member and scene references",
    label: "CORE CARD · CLUSTER",
  },
] as const;
const BLENDER_CAMERA_RIG_DEFAULT_IMAGE =
  "/ai-exploration/workbench/blender-camera-rigs-extension-default-2026-08-02.jpg";
const BLENDER_STAGE_WIDE_CURRENT_IMAGE =
  "/ai-exploration/workbench/blender-idol-stage-wide-current-2026-08-02.jpg";
const BLENDER_COMPOSITION_FILES = [
  {
    id: "camera-extension-default",
    label: "확장 기본값",
    detail: "50 mm · H 1.70 m · Aim 1.70 m · 10.0 m · 1920×1080",
    fileName: "add-camera-rigs-extension-default.blend",
    href: "/ai-exploration/harness-evidence/stage-camera-rig-v1/add-camera-rigs-extension-default.blend",
    preview: BLENDER_CAMERA_RIG_DEFAULT_IMAGE,
    shotLabel: "ADD CAMERA RIGS DEFAULT",
  },
  {
    id: "stage-current",
    label: "무대 현재값",
    detail: "35 mm · H 1.50 m · Aim 1.30 m · 12.0 m · 3840×2160",
    fileName: "idol-stage-wide-current-v1.blend",
    href: "/ai-exploration/harness-evidence/stage-camera-rig-v1/idol-stage-wide-current-v1.blend",
    preview: BLENDER_STAGE_WIDE_CURRENT_IMAGE,
    shotLabel: "IDOL STAGE WIDE v1 · CURRENT",
  },
] as const;
const PUBG_CF60_BOARD_URL = "/ai-exploration/cf/pubg-cf60/storyboard-prompt-index.html";
const PUBG_CF60_BOARD_POSTER = "/ai-exploration/cf/pubg-cf60/CF_JOB_02_storyboard.png";
const PUBG_CF60_BOARD_SHOTS = [
  {
    id: "job-02",
    src: PUBG_CF60_BOARD_POSTER,
    alt: "PUBG CF60 CF_JOB_02 스토리보드 — aircraft cabin readiness",
    label: "CF_JOB_02 · F03–F05",
  },
  {
    id: "html-index",
    src: "/ai-exploration/workbench/pubg-cf60-preflight-html-top-2026-08-02.png",
    alt: "PUBG CF60 storyboard-prompt-index HTML board overview",
    label: "HTML INDEX · ALL JOBS",
  },
] as const;
const PUBG_CF60_PROMPT_PREVIEW = `Use @Image1 as storyboard map; @Image2 F03, @Image3 F04, @Image4 F05.
Animate F03→F04→F05 in order. Vertical 9:16, 4K, photoreal live-action game-teaser commercial.

Motion:
F03: Aircraft cabin scale holds Seira inside the transport pressure.
F04: Seira tightens readiness; harness and glove read as pre-jump commitment.
F05: Jump-light countdown snaps; body stays ready for exit.

Camera:
Ultrawide cabin scale compresses into high three-quarter readiness, then into countdown tightness.

Keep:
Seira aircraft/freefall/canopy/landing ownership; no readable PUBG HUD or generated typography.`;
const HUMAN_SELECTION_REFERENCE_IMAGES = [
  "/ai-exploration/workbench/founder-selection-reference-01-2026-07-29.png",
  "/ai-exploration/workbench/founder-selection-reference-02-2026-07-29.png",
  "/ai-exploration/workbench/founder-selection-reference-03-2026-07-29.png",
] as const;

const publicDestinations = [
  {
    group: "SOCIAL / TIKTOK",
    title: "@loom_mm",
    detail: "Loom 멤버와 트랙을 짧은 영상으로 확장한 숏폼 기록",
    href: LOOM_TIKTOK_URL,
  },
  {
    group: "SOCIAL / YOUTUBE",
    title: "@Loom-idol-m",
    detail: "Loom-m · Root Signal · Pulso · INK 공개 영상 아카이브",
    href: "https://www.youtube.com/@Loom-idol-m",
  },
  {
    group: "SOCIAL / X",
    title: "@minnns_aheya",
    detail: "AHEYA에서 시작한 AI 탐구와 제작 과정 기록",
    href: "https://x.com/minnns_aheya",
  },
  {
    group: "LOOM SIGNAL DECK / MAIN",
    title: "Loom Signal Deck",
    detail: "멤버 · 트랙 · 영상 · 참여 흐름을 모은 Loom 웹페이지",
    href: LOOM_SIGNAL_DECK_URL,
  },
  {
    group: "LOOM SIGNAL DECK / VOTE",
    title: "Vote",
    detail: "다음 트랙과 멤버의 방향을 선택하는 참여 프로토타입",
    href: `${LOOM_SIGNAL_DECK_URL}/vote`,
  },
  {
    group: "LOOM SIGNAL DECK / SPEC COMMERCIAL",
    title: "Spec Commercial",
    detail: "Loom 멤버를 활용한 개인 비공식 Spec Commercial 아카이브",
    href: `${LOOM_SIGNAL_DECK_URL}/cf`,
  },
] as const;

const portfolioNavigation = [
  ["validation", "결과"],
  ["harness", "제작 방식"],
  ["rationale", "도구·경계"],
  ["research", "기준 변화"],
] as const;

const executiveProofs = [
  ["01", "MV / 3편", "Root Signal · Pulso · INK"],
  ["02", "PERSONAL SPEC COMMERCIAL / 2편", "Cola · Headset · unofficial"],
  ["03", "LOCAL WEB / 1개", "Loom Signal Deck"],
];

const resultSlides = [
  {
    id: "ink",
    label: "01 / LOOM MV",
    title: "INK / FINAL MASTER",
    detail: "대표 결과 · 완성한 MV",
    message: "정해진 선을 넘어, 스스로 빛을 향해 나아가는 순간",
    platform: "YOUTUBE",
    videoId: "TyONE0lKI2s",
    href: "https://www.youtube.com/watch?v=TyONE0lKI2s",
  },
  {
    id: "pulso",
    label: "02 / LOOM MV",
    title: "PULSO / FINAL MASTER",
    detail: "구간별 제작·재생 검토를 적용한 MV",
    message: "가슴속에 숨은 박동이 각자의 색을 깨워, 하나의 세계로 모이는 순간",
    platform: "YOUTUBE",
    videoId: "0vV4CXL3_Qk",
    href: "https://www.youtube.com/watch?v=0vV4CXL3_Qk",
  },
  {
    id: "root-signal",
    label: "03 / LOOM MV",
    title: "ROOT SIGNAL / FULL MASTER",
    detail: "첫 번째 완성 MV",
    message: "흩어진 신호가 하나의 흐름으로 이어지는 순간",
    platform: "YOUTUBE",
    videoId: "DUyCAFHZ7X0",
    href: "https://www.youtube.com/watch?v=DUyCAFHZ7X0",
  },
] as const;

function getYouTubeEmbedSrc(videoId: string) {
  const params = new URLSearchParams({
    controls: "1",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function YouTubeEmbed({ className, title, videoId }: { className?: string; title: string; videoId: string }) {
  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={className}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      src={getYouTubeEmbedSrc(videoId)}
      title={title}
    />
  );
}

const currentSystemCases = [
  {
    id: "planning",
    label: "01 / PLANNING CONTEXT",
    problem: "기획 의도와 레퍼런스가 다음 작업에서 사라짐",
    implementation: "Front Planning Workbench",
    detail: "메시지·타겟·레퍼런스·장면 조건을 한 화면에 두고, 선택한 기준만 다음 이미지 작업으로 전달합니다.",
    criterion: "메시지 · 타겟 · 레퍼런스 · 장면 조건",
    evidenceLabel: "Workbench 구현 근거 보기",
    evidenceSlug: "front-planning-workbench-checkpoint",
  },
  {
    id: "handoff",
    label: "02 / STAGE HANDOFF",
    problem: "현재 단계와 승인 이유가 세션 사이에서 사라짐",
    implementation: "Harness / Stage Registry",
    detail: "각 단계의 입력, 기준 결과물, 담당, 사람 승인과 돌아갈 지점을 기록해 다음 행동을 이어 갑니다.",
    criterion: "상태 · 기준 결과물 · 사람 승인 · 다음 행동",
    evidenceLabel: "Stage registry 구현 근거 보기",
    evidenceSlug: "idol-harness-stage-registry",
  },
  {
    id: "edit",
    label: "03 / EDIT PREPARATION",
    problem: "반복되는 편집 준비가 실제 컷 판단보다 길어짐",
    implementation: "Python Media Toolchain",
    detail: "소스 상태와 장면을 분석해 컨택트시트·마커·프리뷰·QC 자료를 준비하고, 사람은 실제 재생으로 타이밍·싱크·연결과 통과 여부를 판단합니다.",
    criterion: "컨택트시트 · 마커 · 프리뷰 · 재생 QC",
    evidenceLabel: "Media Toolchain 구현 근거 보기",
    evidenceSlug: "idol-edit-desk-implementation",
  },
] as const;

const rationaleSkillUses = {
  workbench: {
    skills: [
      "idol-front-planning-director · idol-mv-director",
      "idol-research-radar · idol-front-planning-handoff",
    ],
    contracts: "AGENTS.md · front-planning-readiness.schema.json · harness-stage-registry.yaml",
    role: "사람과 AI가 같은 기획·레퍼런스·후보 상태를 보고, 사람이 고른 기준만 다음 작업에 인계",
    cf: "SPEC COMMERCIAL · 대상·주장·콘셉트·광고 대상 근거",
  },
  api: {
    skills: ["idol-generation · idol-video-prompt"],
    contracts: "harness-stage-registry.yaml · video-prompt-manifest.schema.json",
    role: "통과한 스토리보드를 일괄 생성하고, 컨택트시트 비교 뒤 수정할 컷만 다시 실행",
    cf: "SPEC COMMERCIAL · 키프레임·영상 패킷",
  },
  editing: {
    skills: ["idol-editing-qc · idol-edit-finishing-fx"],
    contracts: "edit-recipe.schema.json · edit-effect-registry.yaml",
    role: "스토리·키프레임·오디오 마커를 읽어 러프 편집 레시피와 프리뷰를 만들고, 최종 컷 판단은 사람에게 남김",
    cf: "SPEC COMMERCIAL · 편집·패키지 QC",
  },
} as const;

const pulsoFaceAssets = Array.from({ length: 13 }, (_, index) => ({
  label: `M${String(index + 1).padStart(2, "0")}`,
  src: `/ai-exploration/iteration/pulso/faces/m${String(index + 1).padStart(2, "0")}.webp`,
}));

const formationJourney = [
  {
    index: "01",
    period: "2026.05",
    project: "AURORA V2 / LOOM 제작 단위의 전신",
    question: "같은 멤버 비주얼 아이덴티티를 유지하면서 콘텐츠 단위를 늘리는 방법",
    test: "13명의 멤버 비주얼 아이덴티티를 고정하고 각각에 MV와 STAGE 제작 단위를 연결. 조사 → 선택 → 패킷 → 생성 → 사람 검토의 반복.",
    finding: "같은 비주얼 아이덴티티의 유지와 제작 단위 확장 가능성. 13 MV + 13 STAGE의 자동화 제작 단위와 공개 완성 작품 26편의 구분. 창의적인 결정을 규칙으로 고정할 때 장면과 포즈의 유사성 증가.",
    change: "비주얼 아이덴티티 정보의 재사용, 메시지·장면 방향의 콘텐츠별 재판단 분리.",
    image: "/ai-exploration/aurora-v2/m01-mv-storyboard.webp",
    evidenceSlug: "aurora-v1-to-v2-archive-map",
  },
  {
    index: "02",
    period: "2026.05",
    project: "AB_AURORA / WORKBENCH의 전신",
    question: "처음 정한 메시지와 선택 이유를 생성 단계까지 넘기는 방법",
    test: "brief에서 여러 방향을 만들고 후보를 비교한 뒤, 선택한 기획과 레퍼런스를 이미지·영상 작업으로 전달.",
    finding: "생성 요청과 후보 정리는 빨라졌지만 메시지와 선택 이유가 다음 단계에 남지 않을 때 결과의 재흔들림.",
    change: "메시지·타겟·레퍼런스 역할과 후보 선택 이유를 다음 작업이 읽는 Workbench의 전신.",
    image: "/ai-exploration/lineage/ab-aurora-preview.png",
    evidenceSlug: "ab-aurora-direction-selection-flow",
  },
  {
    index: "03",
    period: "2026.05—06",
    project: "편집 준비 실험",
    question: "프레임과 오디오 분석으로 편집 준비를 줄이는 방법",
    test: "Premiere Pro와 CapCut의 소스·타임라인·마커·렌더 단위를 살펴보고 영상과 오디오를 JSON 편집 레시피와 Python 스크립트로 처리.",
    finding: "전문 편집기 전체의 복제는 불필요. 소스 in/out, 순서, 속도, 마커, 프리뷰의 정리만으로 반복 분석과 러프 편집 준비의 단축.",
    change: "Source Intake → Contact Sheet → Audio·Marker → Preview → Delivery QC의 Python Media Toolchain 분리.",
    image: null,
    evidenceSlug: "idol-edit-desk-implementation",
  },
  {
    index: "04",
    period: "2026.05.24",
    project: "ROOT SIGNAL",
    question: "생성량이 늘어도 화면이 비슷해지는 이유",
    test: "제한된 레퍼런스와 짧은 기획을 이미지·영상·편집까지 이어 첫 완성 MV 제작. 장면별 결과와 수정 기록의 비교.",
    finding: "레퍼런스의 역할과 구도·카메라·장면 인과가 부족할 때 생성량과 무관한 화면의 반복.",
    change: "기획 단계에서 스토리라인, 레퍼런스 역할, 카메라, 구도, 장면 순서를 먼저 정하는 방식.",
    image: "/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg",
    evidenceSlug: null,
  },
  {
    index: "05",
    period: "2026.06.11",
    project: "PULSO",
    question: "장면 사이의 원인을 먼저 정했을 때 달라지는 영상의 흐름",
    test: "곡을 구간으로 나누고 각 구간의 시작 상태·사건·도착 상태·다음 장면을 먼저 설정. 핵심 컷과 영상 후보의 섹션별 검토.",
    finding: "좋은 장면의 개별 생성보다 한 장면이 다음 장면을 일으키는 이유의 중요성.",
    change: "전체 스토리라인과 구간별 상태 변화를 기획 단계에서 먼저 정하고 이미지·영상 작업이 그대로 이어받는 방식.",
    image: "/ai-exploration/edit-qc/pulso-v6-logo-tail-qc.jpg",
    evidenceSlug: "pulso-front-planning-readiness",
  },
  {
    index: "06",
    period: "2026.07",
    project: "FRONT PLANNING WORKBENCH",
    question: "AI와 같은 기획을 보면서 장면을 구체화하는 방법",
    test: "Grok Imagine의 대화형 생성, ComfyUI의 연결 방식, Figma의 캔버스를 참고한 메시지·레퍼런스·곡 구간·후보 상태의 한 화면 배치.",
    finding: "생성 전에 레퍼런스의 역할, 장면 순서, 보류 이유가 보일 때 처음 정한 방향 안에서의 후보 확장.",
    change: "Workbench는 기획 입력, Harness는 승인·생성·수정·인계를 맡는 역할 분리.",
    image: CURRENT_WORKBENCH_IMAGE,
    evidenceSlug: "front-planning-workbench-checkpoint",
  },
] as const;

const cfCases = [
  {
    index: "01",
    label: "COLA / MEMORY-VENDING",
    status: "PERSONAL SPEC COMMERCIAL · UNOFFICIAL",
    title: "버튼을 누르면 돌아오는 한 캔의 기억",
    body: "버튼을 누르면 눈앞의 시간이 접히고, 기억 속의 한 캔이 다시 손에 닿습니다. 제품이 돌아오는 순간이 보이도록 장면을 이어 붙였습니다.",
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
    title: "듣고 싶은 목소리와 소음을 가르는 헤드셋",
    titleBreakAfter: "듣고 싶은 목소리와",
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
    title: "시각 상태 조립형 Front Planning Workbench",
    appliedAs: "Front Planning Workbench",
    discovery: "ComfyUI 연결 방식과 Figma 캔버스의 시각 상태 관리 방식",
    origin: "공식 문서·실제 화면 대조를 통한 상태·재사용 흐름 중심의 검토",
    test: "메시지·곡 구간·승인 레퍼런스·후보 상태의 Workbench 단일 화면 배치",
    decision: "레퍼런스 재사용·작업 조건 준비의 채택, 기획 자동 확정의 제외",
    evidenceSlug: "front-planning-workbench-checkpoint",
    sourceLinks: [
      ["ComfyUI / Workflow", "https://docs.comfy.org/development/core-concepts/workflow"],
      ["Figma / Design canvas", "https://help.figma.com/hc/en-us/articles/30925881896727-FD4B-Navigate-Figma-Design-files"],
    ],
  },
  {
    status: "부분 채택",
    signal: "EDITING GRAMMAR",
    title: "분석 준비와 재생 판단을 나눈 Media Toolchain",
    appliedAs: "Python Media Toolchain · Local Edit Desk",
    discovery: "편집기의 원본 확인, 타임라인, 마커, 렌더·QC가 서로 다른 작업 단위임을 확인했습니다.",
    origin: "Adobe 공식 문서와 실제 화면을 대조해 반복 준비와 최종 컷 판단을 분리했습니다.",
    test: "오디오와 영상 분석을 마커·컨택트시트·짧은 프리뷰로 정리해 실제 재생 전에 후보를 좁혔습니다.",
    decision: "분석은 후보 축소에만 쓰고, 순서와 타이밍은 직접 재생하며 결정했습니다.",
    evidenceSlug: "idol-edit-desk-implementation",
    sourceLinks: [
      ["Adobe / Source & Program", "https://helpx.adobe.com/uk/premiere/desktop/get-started/source-and-program-monitor-adjustments/about-source-monitor-and-program-monitor.html"],
      ["Adobe / After Effects Workflow", "https://helpx.adobe.com/after-effects/desktop/get-started/understand-after-effects-workflow/workflows.html"],
    ],
  },
  {
    status: "채택 / 위험 구간 보류",
    signal: "AGENT HARNESS",
    title: "세션 간 판단 인계형 Production Harness",
    appliedAs: "Production Harness",
    discovery: "긴 작업의 작은 절차·명확한 인계·사람 승인 지점 분리",
    origin: "Anthropic 공식 문서·공개 구조·권리·비용·보호 자산 위험의 병행 검토",
    test: "현재 단계·결과물·사람 승인·다음 행동 기록을 통한 도구 변경 상황의 작업 연속성 검증",
    decision: "작은 절차·사람 승인 단계의 채택, 보호 자산 외부 전송·자동 유료 실행의 차단",
    evidenceSlug: "idol-harness-ecosystem-adoption",
    sourceLinks: [
      ["Anthropic / Long-running Harness", "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"],
      ["Anthropic / Agent Skills", "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"],
    ],
  },
];

const systemFormationCases = [
  {
    id: "planning-workbench",
    index: "04—01",
    route: "PLANNING · WORKBENCH",
    period: "AURORA V2 → AB_AURORA → ONE MOVE",
    title: "기획 맥락을 Workbench로 모으기까지",
    status: "REPEATED CONTEXT → VISIBLE DECISION SURFACE",
    problem: "프로젝트가 길어질수록 처음 정한 메시지·레퍼런스 역할·선택 이유가 문서와 AI 세션 사이에서 흩어지는 문제",
    inquiry: "AURORA V2의 반복 제작 단위와 AB_AURORA의 방향 선택 흐름, ComfyUI의 연결 방식과 Figma의 시각 상태 관리를 대조했습니다.",
    applied: "메시지·타겟·곡 구간·레퍼런스·후보 상태를 한 화면에 두고, 선택한 기준만 다음 제작 단계가 읽도록 Workbench를 구현했습니다.",
    result: "ONE MOVE에서 실제 기획에 사용하는 Workbench. 사람은 기획과 선택을 맡고 Harness는 승인·생성·수정·인계를 담당합니다.",
    evidenceLabel: "Workbench 구현 근거",
    evidenceSlug: "front-planning-workbench-checkpoint",
  },
  {
    id: "research-harness",
    index: "04—02",
    route: "RESEARCH · HARNESS",
    period: "AURORA V2 → LEFT IN THAT NIGHT → INK",
    title: "리서치와 레퍼런스를 장면 기준으로 바꾸기까지",
    status: "MORE REFERENCES → CLEAR REFERENCE FUNCTION",
    problem: "레퍼런스와 모티프를 많이 모아도 장면의 주체·행동·인과가 정해지지 않으면 결과가 연결되지 않는 문제",
    inquiry: "AURORA V2의 구조화된 프롬프트를 출발점으로 삼고, Left in That Night의 폐기 이유와 INK의 메시지·행동·공간 연결을 비교했습니다.",
    applied: "레퍼런스마다 유지할 identity, 장면에서 맡을 기능, 카메라·행동 적용 범위와 제외 조건을 기록하고 변경된 판단은 원래 단계로 돌려보냈습니다.",
    result: "리서치는 방향을 대신 정하지 않고 후보를 보강합니다. 선택한 역할과 장면 기준만 09–16단계를 거쳐 다음 작업에 남습니다.",
    evidenceLabel: "Harness 단계 근거",
    evidenceSlug: "idol-harness-stage-registry",
  },
  {
    id: "api-production",
    index: "04—03",
    route: "IMAGE · VIDEO API",
    period: "ROOT SIGNAL → PULSO → INK",
    title: "이미지·영상 생성을 API와 구간 검토로 나누기까지",
    status: "STRUCTURED API + PLAYBACK REVIEW",
    problem: "손으로 생성 요청을 반복하고, 한 번에 긴 영상을 만들수록 어느 구간에서 방향이 달라졌는지 찾기 어려운 문제",
    inquiry: "Root Signal 이후 이미지 생성 요청을 구조화하고, LOW와 PULSO에서 비트 위치보다 동작의 착지·카메라 연결·장면 인과가 중요하다는 점을 확인했습니다.",
    applied: "14–16단계의 스토리보드·패킷, 17단계의 유료 실행 승인, 18–19단계의 이미지 후보 검토, 20–22단계의 구간 영상·재생 검토를 분리했습니다.",
    result: "API는 승인된 작업의 반복 실행을 맡고, 사람은 유료 실행·핵심 컷·움직임·구간 통과를 판단합니다.",
    evidenceLabel: "API 제출용 패킷·보류 상태",
    evidenceSlug: "pulso-api-submission-packet",
  },
  {
    id: "editing",
    index: "04—04",
    route: "EDIT · TOOLCHAIN",
    period: "ROOT SIGNAL → PULSO → CURRENT",
    title: "편집 준비와 최종 컷 판단을 분리하기까지",
    status: "MANUAL PREP → MEDIA TOOLCHAIN + HUMAN PLAYBACK",
    problem: "수정이 쌓일수록 통과한 원본과 선택 이유가 렌더 안에서 사라지고, 반복 분석과 프리뷰 준비가 실제 컷 판단보다 길어지는 문제",
    inquiry: "Premiere Pro의 소스·시퀀스·마커·렌더 구조를 분석하고 Root Signal과 PULSO의 실제 편집·재생 검토 기록을 비교했습니다.",
    applied: "ffprobe·OpenCV·librosa·ffmpeg와 Python으로 소스 인덱스·컨택트시트·마커·프리뷰·QC를 준비하는 Media Toolchain을 분리했습니다.",
    result: "도구는 비교 자료와 러프 편집 준비를 맡고, source in/out·속도·싱크·cutpoint와 최종 마스터는 실제 재생으로 결정합니다.",
    evidenceLabel: "Media Toolchain 구현 근거",
    evidenceSlug: "idol-edit-desk-implementation",
  },
] as const;

const loomExperience = [
  ["IDENTITY", "13명의 얼굴과 스타일 기준을 한 아카이브에서 확인."],
  ["TRACK", "Root Signal, Pulso, INK의 영상과 제작 내용을 트랙별로 탐색."],
  ["CONTENT", "멤버별 TikTok 클립, 스토리보드, STAGE 컷의 통합 정리."],
  ["INTERACTION", "멤버 선택 투표, 멤버 메시지, 다음 트랙 투표의 웹페이지 구현."],
];

const productionStoryStages = [
  {
    id: "plan",
    index: "01",
    label: "기획 기준",
    title: "메시지·곡·타겟을 하나의 기획 기준으로 정리",
    body: "초기 메시지와 레퍼런스를 곡의 시간축, 타겟의 메시지·연상·공감, 장면 방향으로 확장합니다.",
    flow: ["메시지·레퍼런스", "곡 선택·시간축", "타겟 반응·경험", "스토리·장면 방향"],
    automation: "레퍼런스 재사용 · 곡 구조 분석 · 기획 맥락 정리",
    human: "메시지 · 타겟 · 곡 선택 · 연출 방향",
    output: "기획 맥락 패킷",
  },
  {
    id: "generate",
    index: "02",
    label: "생성 루프",
    title: "통과한 기획을 핵심 컷과 구간 영상으로 확장",
    body: "승인한 구간만 이미지 후보로 만들고, 선택한 핵심 컷만 영상 작업으로 넘깁니다.",
    flow: ["기획 패킷", "핵심 컷 후보", "사람의 선택", "구간 영상"],
    automation: "프롬프트 준비 · 후보 생성 · 컨택트시트",
    human: "핵심 컷 통과 · 보류 · 재생성",
    output: "검토 가능한 구간 영상",
  },
  {
    id: "edit",
    index: "03",
    label: "편집 판단",
    title: "분석 자료로 후보를 좁히고 재생으로 최종 컷 확정",
    body: "스크립트가 프레임·오디오·동작 비교 자료를 만들고, 실제 재생 검토로 컷과 속도를 정합니다.",
    flow: ["소스 인덱스", "프레임·오디오 분석", "구간 프리뷰", "사람의 재생 검토"],
    automation: "컨택트시트 · 마커 · 프리뷰 · QC 자료",
    human: "리듬 · 장면 인과 · 최종 컷",
    output: "승인된 마스터",
  },
  {
    id: "release",
    index: "04",
    label: "공개 준비",
    title: "승인된 마스터에서 파생본과 공개 준비로 연결",
    body: "플랫폼별 파생본과 메타데이터를 준비하되, 공개 발행은 승인된 범위에서만 진행합니다.",
    flow: ["최종 마스터", "파생본", "메타데이터", "플랫폼별 공개 준비"],
    automation: "리사이즈 · 인코딩 · 패키징 · 업로드 큐",
    human: "플랫폼 · 게시물 · 공개 여부 승인",
    output: "MV · Spec Commercial · 플랫폼 파생본",
  },
] as const;

const harnessPhases = [
  {
    id: "song-evidence",
    index: "01",
    title: "SONG EVIDENCE",
    detail: "루트 · 곡 · 오디오 근거",
    stages: [
      {
        index: "01",
        title: "루트 탐색",
        humanGate: null,
        details: ["브리프와 레퍼런스에서 제작 루트 조사", "복수 방향의 근거와 제외 조건 기록"],
      },
      {
        index: "02",
        title: "곡 방향 설계",
        humanGate: null,
        details: ["메시지를 곡 스타일·가사·제외 표현으로 변환", "후보 제작 조건과 비교 기준 준비"],
      },
      {
        index: "03",
        title: "후보 트랙 분석",
        humanGate: "TRACK SELECTION",
        details: ["후보별 훅·구간·가사 기능 비교", "직접 청취해 선택 트랙 확정"],
      },
      {
        index: "04",
        title: "오디오 리듬 근거 맵",
        humanGate: null,
        details: ["실제 오디오의 구간·리듬·압력 변화 추출", "화면·동작·편집 질문으로 전달"],
      },
      {
        index: "05",
        title: "곡 프로덕션 락",
        humanGate: "PASS · HOLD · REJECT",
        details: ["선택 음원·가사·구간 타이밍 고정", "Front Planning 시작 조건 확정"],
      },
    ],
  },
  {
    id: "front-planning",
    index: "02",
    title: "FRONT PLANNING",
    detail: "Workbench · reference · whole-film spine",
    stages: [
      {
        index: "06",
        title: "Front Planning 통합",
        humanGate: "PASS · HOLD · REJECT",
        details: [
          "Workbench에서 타겟·메시지·레퍼런스 후보와 상태 비교",
          "HTML review board에서 같은 근거를 확인하고 PASS/HOLD/REJECT와 수정 메모 기록",
          "멤버·구간 배치와 전체 영상의 진행을 확정",
        ],
      },
    ],
  },
  {
    id: "still-direction",
    index: "03",
    title: "DIRECTION + STORYBOARD",
    detail: "구간 연출 · 코어컷 · 스토리보드 검토",
    stages: [
      {
        index: "07",
        title: "구간 디렉션 확장",
        humanGate: null,
        details: ["Front Planning의 구간별 행동·연기·공간 확장", "정지 화면의 카메라·구도·전환 설계"],
      },
      {
        index: "08",
        title: "코어컷·키프레임 설계",
        humanGate: null,
        details: ["구간 안의 편집 가능한 코어컷 분리", "각 컷의 1..N 키프레임과 reference binding 작성"],
      },
      {
        index: "09",
        title: "스토리보드 리뷰",
        humanGate: "PASS · HOLD · REJECT",
        details: ["HTML board에서 컷 순서·구도·카메라·동작·reference 역할·영상화 조건 검토", "통과한 보드만 keyframe과 영상화 prompt 작업으로 인계"],
      },
    ],
  },
  {
    id: "section-realization",
    index: "04",
    title: "SECTION REALIZATION",
    detail: "이미지 · 오디오 배치 · 영상 재생 검토",
    stages: [
      { index: "10", title: "이미지 프롬프트 번역", humanGate: null, details: ["통과한 02A를 실행 가능한 자연어 프롬프트로 번역", "새 장면·구도·카메라를 임의로 추가하지 않음"] },
      { index: "11", title: "이미지 생성 승인", humanGate: null, controlGate: "PAID GENERATION APPROVAL", details: ["섹션·첨부·실행 범위 확인", "명시적으로 승인된 작업만 실행"] },
      { index: "12", title: "키프레임 생성", humanGate: null, details: ["승인된 한 개 키프레임 단위 실행", "결과·식별값·작업 기록 회수"] },
      { index: "13", title: "생성 키프레임 리뷰", humanGate: "PASS · HOLD · REJECT", details: ["컨택트시트와 원본 픽셀 비교", "통과·보류·재생성 범위 결정"] },
      { index: "14", title: "오디오-프레임 배치", humanGate: null, details: ["통과한 픽셀을 실제 오디오 타이밍에 배치", "이 단계에서는 시간축 카메라를 작성하지 않음"] },
      { index: "15", title: "영상 모션 디렉션", humanGate: null, details: ["03V에서 동작·속도·시간축 카메라 경로 작성", "스토리보드와 원본 프레임의 순서 유지"] },
      { index: "16", title: "영상 재생 리뷰", humanGate: "PASS · HOLD · REJECT", details: ["실제 생성 영상을 구간별 재생", "통과한 원본만 편집 단계로 인계"] },
    ],
  },
  {
    id: "edit-and-master",
    index: "05",
    title: "EDIT + MASTER",
    detail: "편집 · 피니싱 · 마스터 패키지",
    stages: [
      { index: "17", title: "편집 어셈블리·재생 QC", humanGate: "PASS · HOLD · REJECT", details: ["통과한 구간 영상의 source in/out·순서·속도 배치", "오디오 싱크·인과·연결을 실제 재생으로 판단"] },
      { index: "18", title: "피니싱·이펙트", humanGate: "PASS · HOLD · REJECT", details: ["통과한 편집에 효과와 마감 적용", "프레임·오디오·납품 상태 확인"] },
      { index: "19", title: "마스터 패키지", humanGate: "PASS · HOLD · REJECT", details: ["승인된 마스터와 패키지 계보 정리", "외부 공개는 별도의 사람 승인 후 진행"] },
    ],
  },
] as const;

const harnessControls = [
  ["SEMANTIC STAGE", "19개 활성 작업 단위와 담당 범위"],
  ["기준 결과물", "각 stage가 다음 작업에 넘기는 하나의 기준 파일"],
  ["HUMAN GATE", "생성 · 다음 단계 · 공개 전 사람의 승인"],
  ["수정 경로", "바뀐 결정은 원래 단계로 복귀"],
];

const harnessFamilies = [
  {
    id: "planning",
    index: "01",
    label: "SONG / FRONT PLAN",
    phase: "PHASE 01—02",
    stage: "6 ACTIVE STAGES",
    human: "선택 곡 · 메시지 · 레퍼런스 · 전체 진행",
    output: "FRONT PLANNING PASS",
    note: "WORKBENCH → HTML REVIEW → HUMAN GATE",
    links: [["DETAIL", "SONG EVIDENCE + FRONT PLANNING", "#harness-planning"]],
  },
  {
    id: "direction",
    index: "02",
    label: "DIRECTION",
    phase: "PHASE 03",
    stage: "3 ACTIVE STAGES",
    human: "구간 연출 · 코어컷 · 스토리보드",
    output: "PASSED STORYBOARD",
    note: "01 → 02A → HTML STORYBOARD REVIEW",
    links: [["DETAIL", "DIRECTION + STORYBOARD", "#harness-direction"]],
  },
  {
    id: "realization",
    index: "03",
    label: "REALIZATION",
    phase: "PHASE 04",
    stage: "7 ACTIVE STAGES",
    human: "유료 생성 · 핵심 컷 · 영상 재생",
    output: "REVIEWED SECTION VIDEO",
    note: "02B → KEYFRAME REVIEW → 03V REVIEW",
    links: [["DETAIL", "IMAGE + MOTION REALIZATION", "#harness-realization"]],
  },
  {
    id: "edit-master",
    index: "04",
    label: "EDIT / MASTER",
    phase: "PHASE 05",
    stage: "3 ACTIVE STAGES",
    human: "재생 QC · 피니싱 · 마스터",
    output: "APPROVED MASTER PACKAGE",
    note: "PUBLIC RELEASE / SEPARATE HUMAN APPROVAL",
    links: [["DETAIL", "EDIT + MASTER PACKAGE", "#harness-edit-master"]],
  },
] as const;

const harnessChapters = [
  {
    id: "planning",
    index: "02—02",
    label: "HARNESS 01 / SONG + FRONT PLANNING",
    title: "실제 곡의 근거에서 Founder가 검토할 전체 방향까지",
    body: "선택 음원과 오디오 근거를 먼저 고정한 뒤, Workbench에서 타겟·메시지·레퍼런스 후보를 비교하고 HTML review board로 같은 근거와 상태를 확인합니다.",
    phaseIds: ["song-evidence", "front-planning"],
    handoffs: [
      ["INPUT", "브리프 · 레퍼런스"],
      ["SONG", "Selected Audio + 00A Lock"],
      ["WORKBENCH", "Target · Message · References"],
      ["HTML REVIEW", "Front Planning Evidence"],
      ["OUTPUT", "Front Planning PASS"],
    ],
    human: "트랙 선택 · 메시지 · 레퍼런스 역할 · 전체 영상 진행 PASS/HOLD/REJECT",
    returnPath: "곡 근거가 바뀌면 00A, 기획 판단이 바뀌면 Front Planning으로 복귀",
  },
  {
    id: "direction",
    index: "02—03",
    label: "HARNESS 02 / DIRECTION + STORYBOARD",
    title: "통과한 전체 방향을 구간·코어컷·키프레임으로 구체화",
    body: "Front Planning의 방향을 바꾸지 않고 구간별 행동과 정지 카메라를 확장해, 편집 가능한 코어컷과 검토 가능한 스토리보드로 만듭니다.",
    phaseIds: ["still-direction"],
    handoffs: [
      ["INPUT", "Front Planning PASS"],
      ["01", "Section Direction"],
      ["02A", "Core Cuts + Keyframes"],
      ["HTML REVIEW", "Storyboard Decision"],
      ["OUTPUT", "Passed Storyboard"],
    ],
    human: "구간 연출 · 코어컷 범위 · 스토리보드 PASS/HOLD/REJECT",
    returnPath: "보류 범위에 따라 01 구간 디렉션 또는 02A 스토리보드로 복귀",
  },
  {
    id: "realization",
    index: "02—04",
    label: "HARNESS 03 / IMAGE + MOTION REALIZATION",
    title: "통과한 스토리보드를 실제 이미지와 구간 영상으로 검증",
    body: "02A를 이미지 프롬프트로 번역하고 승인된 범위만 생성합니다. 통과한 픽셀을 오디오에 배치한 뒤 03V가 시간축 카메라와 동작을 작성하고 실제 재생으로 검토합니다.",
    phaseIds: ["section-realization"],
    handoffs: [
      ["INPUT", "Passed Storyboard"],
      ["02B", "Image Prompt + Paid Gate"],
      ["PIXELS", "Reviewed Keyframes"],
      ["03V", "Motion + Camera Route"],
      ["OUTPUT", "Reviewed Section Video"],
    ],
    human: "유료 실행 · 생성 키프레임 · 영상 재생 PASS/HOLD/REJECT",
    returnPath: "이미지는 02B/키프레임, 움직임은 오디오 배치/03V의 가장 작은 범위로 복귀",
  },
  {
    id: "edit-master",
    index: "02—05",
    label: "HARNESS 04 / EDIT + MASTER",
    title: "구간 영상을 실제 재생 판단과 승인된 마스터 패키지로 연결",
    body: "도구는 소스·마커·프리뷰와 QC 자료를 준비하고, 사람은 source in/out·속도·싱크·장면 연결·피니싱과 최종 마스터를 실제 재생으로 판단합니다.",
    phaseIds: ["edit-and-master"],
    handoffs: [
      ["INPUT", "Reviewed Section Video"],
      ["04", "Edit + Playback QC"],
      ["04FX", "Finishing + Effects"],
      ["05", "Master Package"],
      ["OUTPUT", "Approved Master"],
    ],
    human: "편집 재생 · 피니싱 · 마스터 PASS/HOLD/REJECT · 공개 별도 승인",
    returnPath: "장면 문제는 03V, 편집 문제는 04, 마감 문제는 04FX로 복귀",
  },
] as const;

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
  "ordered keyframe · source order",
  "camera route · frame connection",
  "motion · action · diegetic cue",
  "duration · endpoint · next-cut causality",
  "keep / exclude constraints",
];

const planningStructure = [
  ["01", "타겟 · 메시지 유지", "01R에서 정한 대상과 메시지의 계승"],
  ["02", "핵심 자산 고정", "identity · 오브젝트 · 공간 레퍼런스 선택"],
  ["03", "스토리라인 확정", "시작 상태 · 사건 · 도착 상태와 구간 순서"],
  ["04", "AI 리서치", "정한 기준 안의 연출 · 구도 · 장면 후보 보강과 사람 승인"],
];

const songStructure = [
  ["01", "REFERENCE FIT", "초기 타겟 가설과 참고 곡의 팬덤 · 훅 · 구간 기능을 대조해 가져올 기능과 피할 표현을 구분"],
  ["02", "CANDIDATE PACK", "메시지를 Style · Lyrics · Negative로 분리한 후보 준비"],
  ["03", "HUMAN AUDITION", "직접 청취를 통한 선택 take와 keep/change 결정"],
  ["04", "AUDIO ANALYSIS", "섹션 · 가사 · 훅 · 온셋 · 반복 모티프 추출"],
  ["05", "SONG LOCK", "장면 trigger와 동작 · 편집 후보의 다음 단계 전달"],
] as const;

const targetAnalysisLayers = [
  ["01", "TARGET", "이 곡과 MV의 메시지에 먼저 반응할 타겟"],
  ["02", "MESSAGE", "영상에서 느끼게 할 메시지 · 연상 · 공감"],
  ["03", "RESPONSE & EXPERIENCE", "저장 · 재생 · 스크린샷 · 해석 · 공유로 이어지는 반응과 경험"],
  ["04", "DIRECTION", "반응과 경험을 세계 · 행동 · 카메라 · 오브젝트 · 편집으로 보여주는 방식"],
] as const;

const targetConnectionTypes = [
  ["DIRECT", "메시지와 정서가 직접 닿는 타겟"],
  ["ASSOCIATION", "인접한 연상과 공감으로 이어질 타겟"],
  ["EXPERIENCE", "화면 경험을 통해 새롭게 반응할 타겟"],
  ["SURFACE ONLY", "겉모습만 비슷해 제외할 경우"],
] as const;

const targetDirectionOutputs = [
  "타겟이 느꼈으면 하는 메시지 · 연상 · 공감",
  "유지할 익숙한 K-pop 코드",
  "새롭게 줄 긴장과 차이",
  "섹션별 저장 · 클립 · 해석 포인트",
  "서사 · 세계 · 행동 · 오브젝트 · 카메라 · 편집의 역할",
  "반복할 뷰티컷 · 가사 직역 · 억지 트렌드의 제외 기준",
] as const;

const editingStructure = [
  ["01", "SOURCE INTAKE", "통과한 03V 영상의 길이 · FPS · 해상도 · 상태 인덱스"],
  ["02", "FRAME REVIEW", "컨택트시트에서 동작 · 시선 · 카메라 · 앞뒤 프레임 비교"],
  ["03", "AUDIO + MARKER", "곡 구간 · 온셋 · 실제 동작의 편집 후보 정리"],
  ["04", "EDIT RECIPE", "source in/out · 순서 · 속도 · 컷 후보의 프리뷰 검토"],
  ["05", "04FX + QC", "통과한 컷의 마감 효과와 기술 상태 확인"],
];

const releaseStructure = [
  ["01", "PACKAGE", "마스터 · cutdown · short 파생본의 원본 계보"],
  ["02", "TEMPLATE", "MV · Spec Commercial · section clip별 메타데이터 형식"],
  ["03", "RELEASE QUEUE", "메시지 · 설명 · 태그 · 미디어 경로"],
  ["04", "PREFLIGHT", "파일 · 해시 · 제목 · 플랫폼 필수값"],
  ["05", "HUMAN APPROVAL", "승인 파일만 API 초안 · 업로드 단계로 전달"],
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
    ["BOUNDARY", "X · TikTok · YouTube · Shorts API / 공개 발행 전 사람 승인"],
  ],
} as const;

const studioAutomationLanes = [
  ["REUSE", "멤버 아이덴티티 · 레퍼런스 · 메타데이터 재사용"],
  ["COMPILE", "메시지와 곡 구간에 맞춘 반복 작업 자동화"],
  ["COMPARE", "컨택트시트·마커·프리뷰를 같은 형식의 QC·리뷰 자료로 준비"],
  ["PREPARE", "플랫폼별 카피와 미디어 패키지 준비, 승인 API 작업 실행"],
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

const evidenceLogic: Record<string, [string, string]> = {
  "front-planning-workbench-checkpoint": [
    "이 Python 원문은 선택된 로컬 레퍼런스가 경로·해시·캔버스 계약을 통과한 뒤에만 revision에 반영되는 구조를 보여줍니다.",
    "Workbench가 창작 판단을 자동 확정하는 도구가 아니라, 사람이 고른 기획 맥락을 안전하게 유지·인계하는 작업 환경이라는 근거입니다.",
  ],
  "idol-edit-desk-implementation": [
    "이 Python 파일은 영상 길이·마커·파형·클립을 같은 타임라인에 놓고, 선택한 구간만 프리뷰로 렌더합니다.",
    "분석값은 비교할 근거를 만들며, 스토리보드 순서의 러프 편집에서 원본 in/out·속도·싱크·연결의 통과 여부를 직접 재생해 검토합니다.",
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
    title: "빠른 제작보다 먼저 필요한 기준의 분리",
    observed: "V1에서 생성·리서치·검토·게시·분석이 한곳에 모이며 현재 기준과 이전 결과가 섞였습니다.",
    action: "V1의 archive를 보존하고, V2에서 조사 → 선정 → 패킷 → 생성 → 사람 검토로 책임을 다시 분리했습니다.",
    evidenceSlug: "aurora-v1-to-v2-archive-map",
  },
  {
    date: "2026.05",
    signal: "STAGE ROUTE",
    title: "자유도를 넓힌 뒤 반복된 안전한 포즈",
    observed: "참조 동작 없이 AI가 안무를 만들 때 서로 닮은 K-pop 포즈로 결과가 모였습니다.",
    action: "점수표를 추가하는 대신 같은 춤의 전후 동작을 잇는 자연어 비트시트를 남겼습니다.",
    evidenceSlug: "aurora-v2-stage-decision-log",
  },
  {
    date: "2026.05",
    signal: "X · TIKTOK",
    title: "정답이 아닌 재검토 후보로 사용한 플랫폼 수치",
    observed: "같은 제작 단위의 X·TikTok 비교는 가능했지만 노출과 반응만으로 장면의 우열이나 반응 원인을 확정할 수 없었습니다.",
    action: "지표를 자동 적용하지 않고 다시 볼 후보만 선별했습니다. 이후 직접 검토해 다음 스타일과 포맷을 정했습니다.",
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
  body?: string;
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
        {body ? <p>{body}</p> : null}
      </div>
    </div>
  );
}

function EvidenceLink({
  slug,
  label = "근거 파일 일부 보기",
  badgeLabel,
}: {
  slug: string;
  label?: string;
  badgeLabel?: string;
}) {
  const source = getEvidenceSource(slug);
  if (!source) return null;

  return (
    <Link className={styles.evidenceLink} href={`/ai-exploration/motion-bank/${slug}`}>
      <span>{badgeLabel ?? getEvidenceDisclosureLabel(source)}</span>
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

function SectionHandoff({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <a className={styles.sectionHandoff} href={href}>
      <span>{label}</span>
      <strong>{title}</strong>
      <ArrowDown aria-hidden="true" size={18} />
    </a>
  );
}

function ProductionChapterIntroV2({ stage }: { stage: (typeof productionStoryStages)[number] }) {
  return (
    <div className={styles.productionChapterIntro}>
      <header>
        <span>{stage.index} / {stage.label}</span>
        <h3>{stage.title}</h3>
        <p>{stage.body}</p>
      </header>
      <ol>
        {stage.flow.map((item, index) => (
          <li key={item}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{item}</strong>
            {index < stage.flow.length - 1 ? <ArrowRight aria-hidden="true" size={15} /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProductionDecisionRailV2({ stage }: { stage: (typeof productionStoryStages)[number] }) {
  return (
    <dl className={styles.productionDecisionRail}>
      <div><dt>AUTOMATION</dt><dd>{stage.automation}</dd></div>
      <div><dt>HUMAN GATE</dt><dd>{stage.human}</dd></div>
      <div><dt>OUTPUT</dt><dd>{stage.output}</dd></div>
    </dl>
  );
}

function ProductionProcessListV2({ items }: { items: readonly (readonly string[])[] }) {
  return (
    <ol className={styles.productionProcessList}>
      {items.map(([index, title, detail]) => (
        <li key={`${index}-${title}`}>
          <span>{index}</span>
          <div><strong>{title}</strong><p>{detail}</p></div>
        </li>
      ))}
    </ol>
  );
}

function ProductionPageHeaderV2({ body, label, title }: { body: string; label: string; title?: string }) {
  return (
    <div className={styles.productionPageHeader}>
      <span>{label}</span>
      <div>
        {title ? <h3>{title}</h3> : null}
        <p>{body}</p>
      </div>
    </div>
  );
}

function HarnessPhaseTrack({
  phase,
  showGateLabels = false,
}: {
  phase: (typeof harnessPhases)[number];
  showGateLabels?: boolean;
}) {
  return (
    <article className={styles.harnessPhaseTrack} style={{ flexGrow: phase.stages.length }}>
      <header>
        <b>{phase.index}</b>
        <span>{phase.title}</span>
        <small>{phase.stages.length} {phase.stages.length === 1 ? "STAGE" : "STAGES"}</small>
      </header>
      <ol className={styles.harnessPhaseStages}>
        {phase.stages.map((stage) => {
          const controlGate = "controlGate" in stage && typeof stage.controlGate === "string" ? stage.controlGate : null;

          return (
            <li
              className={stage.humanGate ? styles.harnessStageHuman : controlGate ? styles.harnessStageControl : undefined}
              key={stage.index}
            >
              <span>{stage.index}</span>
              <strong>{stage.title}</strong>
              {showGateLabels && stage.humanGate ? <em>{stage.humanGate}</em> : null}
              {showGateLabels && controlGate ? <em className={styles.harnessControlLabel}>{controlGate}</em> : null}
              <div className={styles.harnessStageDetails}>
                {stage.details.map((detail, index) => (
                  <p key={detail}><span>{String(index + 1).padStart(2, "0")}</span>{detail}</p>
                ))}
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}

function HarnessSummaryScore() {
  return (
    <div className={styles.harnessFamilyScore} aria-label="4개 Harness로 묶은 5개 제작 phase와 19개 활성 작업 단계">
      <div className={styles.harnessFamilyPath}>
        {harnessFamilies.map((family) => (
            <article key={family.id}>
              <small>{family.index} / {family.phase}</small>
              <strong>{family.label}</strong>
              <span>{family.stage}</span>
              <p><i aria-hidden="true" />HUMAN / {family.human}</p>
              <em>{family.output}</em>
              <small className={styles.harnessFamilyNote}>{family.note}</small>
              <nav aria-label={`${family.label} 상세 페이지`}>
                {family.links.map(([index, label, href]) => (
                  <a href={href} key={href}><small>{index}</small><strong>{label}</strong><ArrowRight aria-hidden="true" size={11} /></a>
                ))}
              </nav>
            </article>
        ))}
      </div>
    </div>
  );
}

function HarnessChapterPage({ chapter }: { chapter: (typeof harnessChapters)[number] }) {
  const phases = harnessPhases.filter((phase) => chapter.phaseIds.some((phaseId) => phaseId === phase.id));
  const stageCount = phases.reduce((total, phase) => total + phase.stages.length, 0);
  const isDense = stageCount >= 7;
  const pageDensityClass = isDense ? styles.harnessDetailPageDense : styles.harnessDetailPageCompact;
  const scoreDensityClass = isDense ? styles.harnessDetailDense : styles.harnessDetailCompact;
  const phaseTitles = phases.map((phase) => phase.title).join(" → ");

  return (
    <section className={`${styles.productionPage} ${styles.harnessDetailPage} ${styles.harnessDetailPageCollapsed} ${styles.harnessDetailFlow} ${pageDensityClass}`} id={`harness-${chapter.id}`}>
      <header className={`${styles.harnessPageHeading} ${styles.harnessChapterHeading}`}>
        <div className={styles.harnessPageFolio}><span>{chapter.index}</span><small>{chapter.label}</small></div>
        <div className={styles.harnessChapterTitle}>
          <p>DETAIL / {phaseTitles}</p>
          <h3>{chapter.title}</h3>
          <p className={styles.harnessChapterBody}>{chapter.body}</p>
        </div>
        <aside className={styles.harnessChapterMeta}>
          <div className={styles.harnessChapterCount}>
            <span>{String(phases.length).padStart(2, "0")} PHASE</span>
            <span>{String(stageCount).padStart(2, "0")} STAGES</span>
          </div>
          <div className={styles.harnessChapterDecision}>
            <small>HUMAN DECISION</small>
            <strong>{chapter.human}</strong>
          </div>
          <div className={styles.harnessChapterHandoff}>
            <small>NEXT-STAGE RESULT</small>
            <p>{chapter.handoffs.map(([, detail]) => detail).join(" → ")}</p>
          </div>
        </aside>
      </header>

      <p className={styles.harnessDetailReturnLine}>RETURN / {chapter.returnPath}</p>

      <details className={styles.harnessStageDisclosure}>
        <summary>
          <span>STAGE MAP</span>
          <strong>{phaseTitles} · {String(stageCount).padStart(2, "0")} stages</strong>
          <small>상세 펼치기</small>
        </summary>
        <div className={`${styles.harnessDetailScore} ${scoreDensityClass}`} aria-label={`${chapter.label} stage map`}>
          {phases.map((phase) => <HarnessPhaseTrack key={phase.id} phase={phase} showGateLabels />)}
        </div>
      </details>
    </section>
  );
}

const humanSelectionTargets = [
  {
    id: "reference-01",
    image: HUMAN_SELECTION_REFERENCE_IMAGES[0],
    label: "01 / REFERENCE DIRECTION",
    detail: "WARM / TACTILE",
  },
  {
    id: "reference-02",
    image: HUMAN_SELECTION_REFERENCE_IMAGES[1],
    label: "02 / REFERENCE DIRECTION",
    detail: "COLLECTED / EXPRESSIVE",
  },
  {
    id: "reference-03",
    image: HUMAN_SELECTION_REFERENCE_IMAGES[2],
    label: "03 / REFERENCE DIRECTION",
    detail: "SOFT-TECH / PRECISE",
  },
] as const;

type HumanSelectionDecision = "PASS" | "HOLD" | "REJECT";

function HumanSelectionReviewSurface() {
  const [decisions, setDecisions] = useState<Record<string, HumanSelectionDecision>>({});
  const decisionCount = Object.keys(decisions).length;

  const selectDecision = (targetId: string, decision: HumanSelectionDecision) => {
    setDecisions((current) => {
      const next = { ...current };

      if (decision === "PASS") {
        Object.entries(next).forEach(([id, currentDecision]) => {
          if (currentDecision === "PASS" && id !== targetId) delete next[id];
        });
      }

      next[targetId] = decision;
      return next;
    });
  };

  return (
    <article className={styles.harnessSelectionBoard}>
      <header>
        <div>
          <span>02 / HTML REVIEW BOARD</span>
          <strong>HUMAN SELECTION</strong>
        </div>
        <small>BRAND DETAILS REMOVED</small>
      </header>

      <div className={styles.harnessSelectionRows}>
        {humanSelectionTargets.map((target) => (
          <section key={target.id}>
            <img alt={`${target.detail} 레퍼런스 방향 요약`} loading="lazy" src={target.image} />
            <div>
              <span>{target.label}</span>
              <strong>{target.detail}</strong>
            </div>
            <div className={styles.harnessSelectionActions} aria-label={`${target.detail} 선택`}>
              {(["PASS", "HOLD", "REJECT"] as const).map((decision) => (
                <button
                  aria-pressed={decisions[target.id] === decision}
                  key={decision}
                  onClick={() => selectDecision(target.id, decision)}
                  type="button"
                >
                  {decision}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <figure>
        <img
          alt="브랜드 고유 내용을 제거한 사람 선택용 레퍼런스 결정 지도"
          loading="lazy"
          src={HUMAN_SELECTION_MAP_IMAGE}
        />
        <figcaption>OVERVIEW / 선택 이후 공간·모션 항목으로 검토 범위 확장</figcaption>
      </figure>

      <footer>
        <span>PORTFOLIO EXCERPT · 선택은 이 화면 밖의 제작 단계를 자동 승인하지 않음</span>
        <strong>{decisionCount} / {humanSelectionTargets.length} DECIDED · DEMO ONLY</strong>
      </footer>
    </article>
  );
}

function BlenderCompositionHandoff() {
  return (
    <section className={styles.harnessSplit} aria-labelledby="composition-handoff-title">
      <div className={styles.harnessSplitMedia} aria-label="Blender 구도 조정 스크린샷">
        <div className={styles.harnessComposeShots}>
          {BLENDER_COMPOSITION_FILES.map((file) => (
            <figure className={styles.harnessComposeShot} key={file.id}>
              <header>
                <span>{file.shotLabel}</span>
                <strong>BLENDER · VIEWPORT</strong>
              </header>
              <a download={file.fileName} href={file.preview}>
                <img alt={`${file.label} — ${file.detail}`} loading="lazy" src={file.preview} />
              </a>
              <figcaption>
                <span>{file.detail}</span>
                <strong>{file.label}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.harnessSplitCopy}>
        <p className={styles.harnessSplitEyebrow}>AFTER REFERENCE SELECTION · HUMAN-ADJUSTED INPUT</p>
        <p className={styles.harnessSplitLead}>
          레퍼런스 비교와 사람의 선택 뒤, 무대의 카메라 위치·화각·프레이밍을 Blender에서 조정해
          이미지 생성 시 수정할 구도를 명확히 인계합니다.
        </p>

        <div className={styles.harnessCompositionFiles} aria-label="Blender 구도 조정 파일">
          {BLENDER_COMPOSITION_FILES.map((file) => (
            <a download={file.fileName} href={file.href} key={file.id}>
              <span>BLENDER FILE</span>
              <strong>{file.label}</strong>
              <small>{file.detail}</small>
              <em>
                DOWNLOAD <ArrowDown aria-hidden="true" size={12} />
              </em>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductionHarnessSection() {
  return (
    <section className={`${styles.section} ${styles.systemSection} ${styles.handoffSection}`} id="harness">
      <Reveal className={styles.contentWidth}>
        <div className={`${styles.productionDeck} ${styles.harnessProductionDeck}`}>
          <section className={`${styles.productionPage} ${styles.harnessSummaryPage}`} id="harness-summary">
            <header className={styles.harnessSummaryHeading}>
              <div className={styles.harnessPageFolio}><span>02—01</span><small>HARNESS SUMMARY</small></div>
              <div className={styles.harnessSummaryCopy}>
                <p>SUMMARY / ACTIVE HARNESS · REGISTRY V3</p>
                <h2>네 개의 Harness로 이어지는 한 편의 제작</h2>
                <p className={styles.harnessSummaryThesis}>
                  메시지를 끝까지 하나의 경험으로 밀려면, 판단이 세션 사이에서 사라져서는 안 됩니다. 그래서 단계·결과물·사람 승인·복귀 지점을 남기는 Harness로 제작을 묶었습니다.
                </p>
                <small>현재의 5개 canonical phase를 네 개의 작업 Harness로 묶었습니다. 이전 8 phases / 28 stages와 00·01A·02 활성 라벨은 기록으로만 남고, 현재 제작은 19개 활성 stage를 따릅니다.</small>
              </div>
              <div className={styles.harnessSummaryStats} aria-label="5개 phase와 19개 활성 작업 단계">
                <span><strong>05</strong><small>PHASES</small></span>
                <i aria-hidden="true" />
                <span><strong>19</strong><small>ACTIVE STAGES</small></span>
              </div>
            </header>

            <HarnessSummaryScore />

            <div className={styles.harnessStageContract} aria-label="모든 세부 작업 단계의 공통 기준">
              <p>EVERY STAGE KEEPS</p>
              <div>
                <span><small>OWNER</small><strong>판단 책임</strong></span><i>→</i>
                <span><small>STAGE RESULT</small><strong>결과물</strong></span><i>→</i>
                <span className={styles.harnessContractHuman}><small>HUMAN GATE</small><strong>통과 · 보류 · 수정</strong></span><i>→</i>
                <span><small>NEXT</small><strong>다음 행동</strong></span>
              </div>
              <small>RETURN / 변경된 판단은 그 결정을 맡은 단계로 복귀</small>
            </div>
          </section>

          {harnessChapters.map((chapter) => <HarnessChapterPage chapter={chapter} key={chapter.id} />)}

          <section className={`${styles.productionPage} ${styles.harnessPrinciplePage}`} id="harness-principle">
            <header className={styles.harnessPageHeading}>
              <div className={styles.harnessPageFolio}><span>02—06</span><small>OPERATING PRINCIPLE</small></div>
              <div>
                <p>RESPONSIBILITY BOUNDARY</p>
                <h3>반복 작업의 자동화와 창작 결정의 유지</h3>
                <p>Harness와 Toolchain은 다음 판단에 필요한 자료와 상태를 준비하고, 메시지·장면 방향·후보 선택·재생 통과·공개 여부는 사람이 결정합니다.</p>
              </div>
            </header>

            <div className={styles.harnessPrincipleLanes}>
              <section>
                <span>AUTOMATION</span>
                <div className={styles.harnessPrincipleGrid}>
                  {studioAutomationLanes.map(([label, detail]) => (
                    <p key={label}><small>{label}</small><strong>{detail}</strong></p>
                  ))}
                </div>
              </section>
              <section className={styles.harnessPrincipleHuman}>
                <span>HUMAN</span>
                <div className={styles.harnessPrincipleGrid}>
                  <p><small>PLAN</small><strong>메시지 · 타겟 · 곡 · 장면의 주요 기획 방향 정립</strong></p>
                  <p><small>SELECT</small><strong>핵심 컷 · 구간 영상 · 편집 재생 통과</strong></p>
                  <p><small>APPROVE</small><strong>API를 통한 생성 · 최종 마스터 · 소셜미디어 공개 승인</strong></p>
                  <p><small>LEARN</small><strong>다음 제작 기준으로 승격할 판단</strong></p>
                </div>
              </section>
            </div>
          </section>
        </div>

        <section className={styles.harnessNow} aria-labelledby="harness-now-title" id="harness-update">
          <details className={styles.harnessVersionDisclosure}>
            <summary>
              <span>02B</span>
              <strong>VERSION LOG</strong>
              <small>REVIEW SURFACE UPDATE · 2026.07.29</small>
              <em>전체 펼치기</em>
            </summary>

            <div className={styles.harnessVersionBody}>
              <article className={`${styles.harnessNowPage} ${styles.harnessNowPagePrimary}`}>
                <header className={styles.harnessNowHeading}>
                  <div className={styles.harnessNowFolio}>
                    <span>02B</span>
                    <small>VERSION LOG</small>
                  </div>
                  <div className={styles.harnessNowLead}>
                    <p className={styles.harnessNowEyebrow}>REVIEW SURFACE UPDATE · 2026.07.29</p>
                    <h3 id="harness-now-title">레퍼런스 비교와 사람의 선택</h3>
                    <p className={styles.harnessNowBody}>
                      Harness 검토 표면이 어떻게 바뀌었는지 기록합니다. 후보 비교·사람 선택·수정 인계를
                      한 흐름으로 연결한 현재 버전(V2.1)과, 그 이전 형식(V1)의 차이를 남깁니다.
                    </p>
                  </div>
                  <span className={styles.harnessNowBadge}>V2.1 / CURRENT</span>
                </header>

                <section className={styles.harnessSplit} aria-label="VERSION LOG — what changed">
                  <figure className={styles.harnessSplitMedia}>
                    <header>
                      <span>CURRENT SURFACE / FOUNDER WORKBENCH</span>
                      <strong>CF_LOL_IONIA_PERFUME_001</strong>
                    </header>
                    <div className={styles.harnessBoardPair} aria-label="HTML review board screenshots">
                      {IONIA_FOUNDER_WORKBENCH_SHOTS.map((shot) => (
                        <a
                          className={styles.harnessBoardPairItem}
                          href={IONIA_FOUNDER_WORKBENCH_PREVIEW}
                          key={shot.id}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <img alt={shot.alt} loading="lazy" src={shot.src} />
                          <span>{shot.label}</span>
                        </a>
                      ))}
                    </div>
                    <figcaption>
                      <span>HTML REVIEW BOARD · CORE CUTS</span>
                      <strong>C01–C07 클러스터 진입</strong>
                    </figcaption>
                  </figure>

                  <div className={styles.harnessSplitCopy}>
                    <ol className={styles.harnessVersionList} aria-label="Production Harness version history">
                      <li className={styles.harnessVersionArchived}>
                        <span>V1 / PREVIOUS</span>
                        <div>
                          <strong>HTML Review Board</strong>
                          <p>작업 뒤에 레퍼런스·근거·상태를 모아 확인하던 후행 검토 보드.</p>
                          <small>LIMIT / 후보를 고르는 앞단의 비교 과정은 보드 밖에 남음</small>
                        </div>
                      </li>
                      <li className={styles.harnessVersionCurrent}>
                        <span>V2.1 / CURRENT</span>
                        <div>
                          <strong>Workbench + Human Selection</strong>
                          <p>
                            Workbench에서 후보를 먼저 정리하고, HTML review board가 같은 근거를 선택과
                            수정 요청이 가능한 결정 화면으로 이어받는 구조.
                          </p>
                          <small>CHANGE / 비교 과정·사람 선택·수정 인계를 하나의 버전 흐름으로 연결</small>
                        </div>
                      </li>
                    </ol>

                    <ol className={styles.harnessCurrentFlow} aria-label="Current Workbench and HTML review flow">
                      <li>
                        <span>01 / PREPARE</span>
                        <strong>Workbench에서 레퍼런스 후보와 역할·상태 정리</strong>
                      </li>
                      <li>
                        <span>02 / DECIDE</span>
                        <strong>HTML board에서 PASS · HOLD · REJECT와 수정 메모 기록</strong>
                      </li>
                      <li>
                        <span>02A / COMPOSE</span>
                        <strong>Blender에서 카메라·화각·프레이밍을 조정해 이미지 생성 수정 조건으로 인계</strong>
                      </li>
                      <li>
                        <span>03 / RETURN</span>
                        <strong>결정 영수증을 원래 제작 단계의 다음 행동으로 인계</strong>
                      </li>
                    </ol>
                  </div>
                </section>
              </article>

              <article className={`${styles.harnessNowPage} ${styles.harnessNowPageCompose}`} id="harness-compose" aria-labelledby="composition-handoff-title">
                <header className={styles.harnessNowPageHeader}>
                  <span>02B—01 / COMPOSE</span>
                  <h3 id="composition-handoff-title">이미지 생성 전, 구도를 조정합니다</h3>
                </header>
                <BlenderCompositionHandoff />
              </article>

              <article className={`${styles.harnessNowPage} ${styles.harnessNowPageBoard}`} id="harness-preflight" aria-labelledby="harness-preflight-title">
                <header className={styles.harnessNowPageHeader}>
                  <span>02B—02 / PREFLIGHT</span>
                  <h3 id="harness-preflight-title">영상화 직전 설계 보드</h3>
                </header>

                <section className={styles.harnessSplit} aria-label="VIDEO PREFLIGHT board">
                  <div className={styles.harnessSplitMedia}>
                    <header>
                      <span>03 / VIDEO PREFLIGHT BOARD</span>
                      <strong>ATTACHED ARTIFACT</strong>
                    </header>
                    <div className={styles.harnessBoardPair} aria-label="Preflight board screenshots">
                      {PUBG_CF60_BOARD_SHOTS.map((shot) => (
                        <a
                          className={styles.harnessBoardPairItem}
                          href={PUBG_CF60_BOARD_URL}
                          key={shot.id}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <img alt={shot.alt} loading="lazy" src={shot.src} />
                          <span>{shot.label}</span>
                        </a>
                      ))}
                    </div>

                    <div className={styles.harnessPreflightPrompt} aria-label="Paste-ready prompt preview">
                      <header>
                        <span>PASTE-READY PROMPT</span>
                        <strong>CF_JOB_02 / F03–F05</strong>
                      </header>
                      <pre>{PUBG_CF60_PROMPT_PREVIEW}</pre>
                      <small>전체 프롬프트와 10개 작업 단위는 HTML 보드에서 확인</small>
                    </div>

                    <footer className={styles.harnessSplitMediaFoot}>
                      <span>VIDEO / PRE-FLIGHT</span>
                      <strong>전체 HTML 보드 열기</strong>
                    </footer>
                  </div>

                  <div className={styles.harnessSplitCopy}>
                    <p className={styles.harnessSplitEyebrow}>GENERATION PRE-CHECK</p>
                    <p className={styles.harnessSplitLead}>
                      10개 작업 단위마다 스토리보드, 프레임 순서, 카메라, 동작, 시간과 제약 조건을 묶어
                      생성 전에 검토할 수 있도록 정리한 실제 첨부 보드입니다. 같은 Harness를 Loom MV 밖
                      Spec·팬메이드 작업에도 그대로 이식한 예입니다.
                    </p>

                    <div className={styles.harnessPreflightMeta} aria-label="Preflight board scope">
                      <span>10 JOBS</span>
                      <span>F01–F21</span>
                      <span>FAN-MADE / UNOFFICIAL</span>
                    </div>

                    <dl className={styles.harnessNowDetails}>
                      <div>
                        <dt>UPDATING</dt>
                        <dd>후보 비교 → HTML 검토 → 다음 단계 인계</dd>
                      </div>
                      <div>
                        <dt>KEPT</dt>
                        <dd>사람 승인 게이트 · 생성 전 검토 순서</dd>
                      </div>
                      <div>
                        <dt>VERIFY NEXT</dt>
                        <dd>준비·인계 시간이 줄어도 검토 기준이 유지되는지 확인</dd>
                      </div>
                    </dl>

                    <a className={styles.harnessPreflightLink} href={PUBG_CF60_BOARD_URL} rel="noreferrer" target="_blank">
                      전체 HTML 보드 보기 <ExternalLink aria-hidden="true" size={14} />
                    </a>
                  </div>
                </section>
              </article>
            </div>
          </details>
        </section>

        <div className={styles.systemDepthLink}>
          <span>NEXT / ACTUAL APPLICATION</span>
          <p>Workbench, Harness, Media Toolchain이 실제 기획·인계·재생 검토에서 쓰이는 방식.</p>
          <a href="#rationale">03 / 도구·경계 보기 <ArrowDown size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function LegacyProductionHarnessSection() {
  return (
    <section className={`${styles.section} ${styles.systemSection} ${styles.handoffSection}`} id="harness">
      <Reveal className={styles.contentWidth}>
        <div className={styles.productionDeck}>
          <section className={`${styles.productionPage} ${styles.productionRoutePage}`}>
            <SectionHeading
              body="Workbench의 기획 입력, Harness의 제작 인계, Python Media Toolchain의 비교·편집 보조, Loom 콘텐츠의 결과 검증."
              index="02"
              label="AI 콘텐츠 반자동화 시스템"
              title="메시지부터 편집까지 연결하는 Production System"
            />
            <div className={styles.productionHandoff} aria-label="Production System handoff">
              <div><span>INPUT</span><strong>{productionStoryStages[0].flow[0]}</strong></div>
              <ArrowRight aria-hidden="true" size={18} />
              <div><span>AUTOMATION</span><strong>{studioAutomationLanes[1][1]}</strong></div>
              <ArrowRight aria-hidden="true" size={18} />
              <div><span>HUMAN GATE</span><strong>기획 승인 → 핵심 컷 선택 → 영상 검토 → 최종 컷 · 공개 승인</strong></div>
              <ArrowRight aria-hidden="true" size={18} />
              <div><span>OUTPUT</span><strong>{productionStoryStages[3].output}</strong></div>
              <ArrowRight aria-hidden="true" size={18} />
              <div className={styles.productionReturn}>
                <span>{harnessControls[3][0]}</span>
                <strong>{harnessControls[3][1]}</strong>
                <Undo2 aria-hidden="true" size={16} />
              </div>
            </div>
          </section>

          <nav className={`${styles.productionPage} ${styles.productionOverviewPage}`} aria-label="제작 흐름 핵심 요약">
            {productionStoryStages.map((stage) => (
              <a href={`#production-${stage.id}`} key={stage.id}>
                <small>{stage.index} / {stage.label}</small>
                <strong>{stage.title}</strong>
                <span>{stage.output}</span>
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            ))}
          </nav>

          <div className={styles.productionChapter} id="production-plan">
            <section className={`${styles.productionPage} ${styles.productionEvidencePage}`}>
              <ProductionChapterIntroV2 stage={productionStoryStages[0]} />
              <ProductionPageHeaderV2
                body="초기 타겟 가설과 레퍼런스 곡의 훅·구간 기능을 분석합니다. Suno 후보를 직접 들은 뒤 선택한 take만 장면과 편집의 기준으로 사용합니다."
                label="PRE-00S + 00A / SONG STRUCTURE"
                title="곡 후보에서 장면의 시간축까지"
              />
              <div className={styles.productionEvidenceLayout}>
                <figure className={styles.productionPageMedia}>
                  <img src={CURRENT_WORKBENCH_IMAGE} alt="ONE MOVE 레퍼런스 후보에서 장면의 시간축까지" loading="lazy" />
                </figure>
                <ProductionProcessListV2 items={songStructure} />
              </div>
              <div className={styles.productionContractRail}>
                <div><span>INPUT</span><strong>메시지 · 초기 타겟 가설 · 레퍼런스 곡</strong></div>
                <ArrowRight aria-hidden="true" size={15} />
                <div><span>CANDIDATES</span><strong>Style · Lyrics · Negative</strong></div>
                <ArrowRight aria-hidden="true" size={15} />
                <div><span>SELECTED AUDIO</span><strong>section · hook · onset · motif</strong></div>
                <ArrowRight aria-hidden="true" size={15} />
                <div><span>NEXT</span><strong>장면 trigger · 동작 · 편집 후보</strong></div>
              </div>
            </section>

            <section className={`${styles.productionPage} ${styles.productionTargetPage}`}>
              <ProductionPageHeaderV2
                body="초기 가설과 선택한 곡, 핵심 레퍼런스의 적합성 검토를 통한 타겟의 메시지·연상·공감과 화면 경험 설정."
                label="01R / TARGET · REFERENCE DIRECTION"
                title="초기 가설·곡·레퍼런스 적합성 검토와 타겟 반응·경험 설계"
              />
              <div className={styles.targetBaseline}>
                <div><span>초기 타겟 검토</span><strong>MESSAGE · SONG · REFERENCE</strong></div>
                <p>초기 메시지 가설과 선택한 곡, 핵심 레퍼런스를 대조해 어떤 타겟이 이 영상의 메시지에 반응하고, 무엇을 연상하거나 공감할지를 검토합니다.</p>
              </div>
              <div className={styles.productionTargetLayout}>
                <div className={styles.targetAnalysisGrid}>
                  {targetAnalysisLayers.map(([index, title, detail]) => (
                    <article key={index}><span>{index}</span><strong>{title}</strong><p>{detail}</p></article>
                  ))}
                </div>
                <div className={styles.targetConnectionModel}>
                  <div className={styles.targetConnectionHeading}>
                    <span>타겟 반응·경험 가설</span>
                    <p>초기 가설과 선택한 곡, 레퍼런스의 적합성을 비교해 타겟이 영상에서 느껴야 할 메시지와 연상·공감을 정리하고, 이 반응이 어떤 화면 경험으로 보일지 설계합니다.</p>
                  </div>
                  <div className={styles.targetCausalityRail}>
                    <div><small>TARGET</small><strong>어떤 타겟이 메시지에 반응하는가</strong></div>
                    <ArrowRight aria-hidden="true" size={15} />
                    <div><small>RESPONSE</small><strong>어떤 메시지 · 연상 · 공감이 남는가</strong></div>
                    <ArrowRight aria-hidden="true" size={15} />
                    <div><small>ON SCREEN</small><strong>어떤 화면 경험으로 전달하는가</strong></div>
                  </div>
                  <div className={styles.targetConnectionRail}>
                    {targetConnectionTypes.map(([label, detail]) => (
                      <div key={label}><span>{label}</span><strong>{detail}</strong></div>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className={styles.targetLockExample}>
                <span>TARGET LOCK / EXAMPLE</span>
                <p>초기 메시지 가설·선택한 곡·핵심 레퍼런스의 적합성 검토 → 타겟이 느낄 메시지·연상·공감 정리 → 장면·행동·카메라·오브젝트를 통한 화면 경험 번역.</p>
              </blockquote>
              <div className={styles.targetDirectionOutputs}>
                <div><span>01R MUST CLOSE WITH</span><strong>타겟 확정 뒤 남겨야 할 연출 기준</strong></div>
                <ol>{targetDirectionOutputs.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
              </div>
            </section>

            <section className={`${styles.productionPage} ${styles.productionEvidencePage}`}>
              <ProductionPageHeaderV2
                body="identity·핵심 오브젝트·공간 레퍼런스를 고정하고 곡 전체의 시작·사건·도착 상태를 먼저 정합니다. AI 리서치는 이 기준 안에서 장면 후보를 넓히는 역할입니다."
                label="FRONT + 01 / PLANNING STRUCTURE"
                title="타겟과 메시지에서 스토리와 연출까지"
              />
              <div className={styles.productionEvidenceLayout}>
                <figure className={styles.productionPageMedia}>
                  <img src="/ai-exploration/ink/contact-sheets/ink-space-reference-contact-sheet-v1.webp" alt="타겟과 메시지에서 스토리와 연출까지" loading="lazy" />
                </figure>
                <ProductionProcessListV2 items={planningStructure} />
              </div>
              <ProductionDecisionRailV2 stage={productionStoryStages[0]} />
            </section>
          </div>

          <div className={styles.productionChapter} id="production-generate">
            <section className={`${styles.productionPage} ${styles.productionEvidencePage}`}>
              <ProductionChapterIntroV2 stage={productionStoryStages[1]} />
              <ProductionPageHeaderV2
                body="한 곡 전체의 일괄 생성이 아닌 구간별 작업 단위. 통과한 핵심 컷만 다음 영상 단계로 전달합니다."
                label="02B + 03V / JOB STRUCTURE"
              />
              <div className={styles.productionEvidenceLayout}>
                <figure className={styles.productionPageMedia}>
                  <img src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" alt="통과한 기획의 핵심 컷 후보" loading="lazy" />
                </figure>
                <div className={styles.productionPromptColumn}>
                  <span>IMAGE / 02B</span>
                  <h3>통과한 기획의 핵심 컷 후보</h3>
                  <p>곡 구간, 스토리보드, identity reference, 출력 조건을 먼저 확인합니다. 승인한 구간만 생성하고 컨택트시트에서 후보를 비교합니다.</p>
                  <ol className={styles.promptStructure}>{imagePromptStructure.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                </div>
              </div>
              <div className={styles.recipeRail}>
                <span>PREPARE</span><i aria-hidden="true">→</i><span>PREFLIGHT</span><i aria-hidden="true">→</i><span>APPROVE</span><i aria-hidden="true">→</i><strong>BATCH API</strong><i aria-hidden="true">→</i><span>02A REVIEW</span>
              </div>
            </section>

            <section className={`${styles.productionPage} ${styles.productionEvidencePage}`}>
              <div className={styles.productionEvidenceLayout}>
                <figure className={styles.productionPageMedia}>
                  <img src="/ai-exploration/ink/contact-sheets/section-S07-v2-inserts-part-01.webp" alt="통과한 핵심 컷의 구간 영상화" loading="lazy" />
                </figure>
                <div className={styles.productionPromptColumn}>
                  <span>VIDEO / 03V</span>
                  <h3>통과한 핵심 컷의 구간 영상화</h3>
                  <p>시작 이미지, 카메라 경로, 동작, 도착 프레임, 앞뒤 장면의 관계를 한 작업 단위로 전달합니다. 구간 재생 검토를 통과한 소스만 편집 단계로 보냅니다.</p>
                  <ol className={styles.promptStructure}>{videoPromptStructure.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                </div>
              </div>
              <div className={styles.recipeRail}>
                <span>KEYFRAME</span><i aria-hidden="true">→</i><span>VIDEO PROMPT</span><i aria-hidden="true">→</i><span>GENERATE</span><i aria-hidden="true">→</i><strong>SECTION REVIEW</strong><i aria-hidden="true">→</i><span>04 EDIT</span>
              </div>
              <ProductionDecisionRailV2 stage={productionStoryStages[1]} />
            </section>
          </div>

          <div className={styles.productionChapter} id="production-edit">
            <section className={`${styles.productionPage} ${styles.productionEvidencePage}`}>
              <ProductionChapterIntroV2 stage={productionStoryStages[2]} />
              <ProductionPageHeaderV2
                body="Python 스크립트가 소스 상태, 프레임, 오디오, 동작과 마커를 비교 자료로 바꿉니다. 실제 컷과 속도는 재생 검토로 결정하고, 통과한 편집에만 마감 효과와 QC를 적용합니다."
                label="04 + 04FX / EDIT STRUCTURE"
                title="분석으로 좁힌 후보, 재생으로 고른 컷"
              />
              <div className={styles.productionEvidenceLayout}>
                <figure className={styles.productionPageMedia}>
                  <img src="/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg" alt="분석으로 좁힌 후보, 재생으로 고른 컷" loading="lazy" />
                </figure>
                <ProductionProcessListV2 items={editingStructure} />
              </div>
            </section>

            <section className={`${styles.productionPage} ${styles.productionDecisionPage}`}>
              <figure className={styles.productionPageMedia}>
                <img src="/ai-exploration/edit-qc/pulso-v6-logo-tail-qc.jpg" alt="음악 신호 + 실제 영상 동작" loading="lazy" />
              </figure>
              <div className={styles.audioEditBridge}>
                <div className={styles.audioEditHeading}>
                  <span>음악 신호 + 실제 영상 동작</span>
                  <p>음악의 후보 시점과 영상의 동작·카메라·장면 인과를 함께 놓고 재생한 뒤 최종 컷을 정합니다.</p>
                </div>
                <div className={styles.audioEditSignals}>
                  <div><small>SELECTED AUDIO</small><strong>가사 진입 · 비트/온셋 · 훅 반복 · 밀도 변화</strong><span>librosa · audio-motion map</span></div>
                  <i aria-hidden="true">+</i>
                  <div><small>ACTUAL VIDEO</small><strong>몸·손·발 착지 · 시선 · 카메라 정지 · 장면 전환</strong><span>ffprobe · OpenCV · contact sheet</span></div>
                  <i aria-hidden="true">→</i>
                  <div className={styles.audioEditGate}><small>PLAYBACK REVIEW</small><strong>후보 마커 → 프리뷰 → 사람의 컷 확정</strong><span>04 edit recipe</span></div>
                </div>
              </div>
              <ProductionDecisionRailV2 stage={productionStoryStages[2]} />
            </section>
          </div>

          <div className={styles.productionChapter} id="production-release">
            <section className={`${styles.productionPage} ${styles.productionFlowPage}`}>
              <ProductionChapterIntroV2 stage={productionStoryStages[3]} />
              <ProductionPageHeaderV2
                body="최종 마스터에서 파생본, 메타데이터, 플랫폼별 큐를 준비합니다. 외부 업로드와 공개 발행은 승인한 플랫폼·게시물·파일에 한정합니다."
                label="05 / RELEASE AUTOMATION"
                title="파생본과 업로드 준비의 반복 축소"
              />
              <ProductionProcessListV2 items={releaseStructure.slice(0, 4)} />
            </section>

            <section className={`${styles.productionPage} ${styles.productionDecisionPage}`}>
              <div className={styles.productionApprovalGate}>
                <span>{releaseStructure[4][0]}</span><strong>{releaseStructure[4][1]}</strong><p>{releaseStructure[4][2]}</p>
              </div>
              <div className={styles.platformReleaseRail}>
                <div><span>X</span><strong>전용 API adapter</strong><small>영상 우선 카피 · board reply</small></div>
                <div><span>TIKTOK</span><strong>Draft / inbox upload</strong><small>section clip · hook loop</small></div>
                <div><span>YOUTUBE</span><strong>API draft / upload</strong><small>master · cutdown · Shorts</small></div>
                <div><span>INSTAGRAM</span><strong>Manual package</strong><small>현재는 승인용 패키지만 준비</small></div>
              </div>
              <ProductionDecisionRailV2 stage={productionStoryStages[3]} />
            </section>
          </div>

          <section className={`${styles.productionPage} ${styles.productionPrinciplePage}`}>
            <div className={styles.studioConclusion}>
              <div className={styles.studioConclusionHeading}>
                <span>OPERATING PRINCIPLE / 필요한 지점에서만 개입</span>
                <h3>반복 작업의 자동화, 창작 결정의 유지</h3>
                <p>레퍼런스 재사용, 프롬프트 준비, 후보 정리, 오디오 분석, 프리뷰, QC, 플랫폼 패키지는 Workbench·Harness·스크립트의 역할. 메시지, 타겟, 장면 방향, 후보 선택, 최종 컷, 공개 여부는 사람의 책임.</p>
              </div>
              <div className={styles.studioAutomationLanes}>
                {studioAutomationLanes.map(([label, detail], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")} / {label}</span><p>{detail}</p></article>)}
              </div>
              <div className={styles.studioBoundaryRail}>
                <div><small>HUMAN</small><strong>기획 승인 → 핵심 컷 선택 → 영상 검토 → 최종 컷 · 공개 승인</strong></div>
                <div><small>AUTOMATION</small><strong>재사용 → 생성 준비 → 분석 → 편집 보조 → 패키징</strong></div>
              </div>
            </div>
          </section>

          <div className={styles.productionProof}>
            <details className={styles.productionAppendix}>
              <summary><span>DETAIL MAP / ALWAYS OPEN</span><strong>HARNESS / PRODUCTION FRAME</strong><p>5개 제작 phase 아래의 19개 활성 stage에 담당, 기준 결과물, 사람 승인, 수정 경로를 지정합니다.</p></summary>
              <div className={styles.harnessArchitecture}>
                <div className={styles.phaseRail} aria-label="IDOL production system phase flow">
                  {harnessPhases.map((phase, phaseIndex) => <article key={phase.index}><span>{phase.index}</span><strong>{phase.title}</strong><small>{phase.detail}</small>{phaseIndex < harnessPhases.length - 1 ? <i aria-hidden="true">→</i> : null}</article>)}
                </div>
                <div className={styles.harnessControls}>
                  {harnessControls.map(([title, detail]) => <div key={title}><span>{title}</span><p>{detail}</p></div>)}
                </div>
              </div>
              <div className={styles.productionToolProof}>
                <section>
                  <header><span>01 / DETAILED FLOW</span><strong>곡·타겟·스토리·연출 상세 구조</strong></header>
                  {[...stageToolEvidence.song, ...stageToolEvidence.target, ...stageToolEvidence.planning].map(([label, detail], index) => <div key={`${label}-${index}`}><span>{label}</span><p>{detail}</p></div>)}
                </section>
                <section><header><span>02 / DETAILED FLOW</span><strong>이미지·영상 작업 단위의 상세 구조</strong></header>{stageToolEvidence.generation.map(([label, detail]) => <div key={label}><span>{label}</span><p>{detail}</p></div>)}</section>
                <section><header><span>03 / DETAILED FLOW</span><strong>편집 판단과 비교 자료의 상세 구조</strong></header>{stageToolEvidence.editing.map(([label, detail]) => <div key={label}><span>{label}</span><p>{detail}</p></div>)}</section>
                <section><header><span>04 / DETAILED FLOW</span><strong>파생본과 공개 준비의 상세 구조</strong></header>{stageToolEvidence.release.map(([label, detail]) => <div key={label}><span>{label}</span><p>{detail}</p></div>)}</section>
              </div>
              <div className={styles.scriptAutomation}>
                <div className={styles.scriptAutomationHeading}>
                  <FileCode2 size={20} />
                  <div><span>PYTHON MEDIA TOOLCHAIN / 비교 자료 제작</span><p>소스 인덱스, 컨택트시트, 오디오 마커, 프리뷰, QC 자료의 자동 준비. 최종 컷 선택과 무관한 보조 역할.</p></div>
                </div>
                <ol>{scriptAutomation.map(([index, title, detail]) => <li key={index}><span>{index}</span><strong>{title}</strong><small>{detail}</small></li>)}</ol>
              </div>
            </details>

            <details className={styles.productionAppendix}>
              <summary><span>CONTRACT / HANDOFF</span><strong>대표 인계 기준 3개</strong><p>전체 계약이 아닌 기획·영상·편집 사이에 실제로 넘기는 공개 가능한 기준.</p></summary>
              <div className={styles.schemaBridge}>
                <div className={styles.schemaBridgeHeading}><span>대표 인계 기준 3개</span><p>전체 계약이 아닌 기획·영상·편집 사이에 실제로 넘기는 공개 가능한 기준.</p></div>
                <div className={styles.schemaBridgeRail}>
                  {schemaConnection.map((schema, index) => <article key={schema.file}><span>{schema.index} / {schema.label}</span><strong>{schema.file}</strong><ul>{schema.fields.map((field) => <li key={field}>{field}</li>)}</ul><p>{schema.role}</p>{index < schemaConnection.length - 1 ? <i aria-hidden="true">→</i> : null}</article>)}
                </div>
                <div className={styles.schemaBridgeOutcome}><span>OUTCOME</span><strong>메시지 · 핵심 레퍼런스 → 핵심 컷 → 구간 영상 → 편집 후보</strong></div>
              </div>
            </details>
          </div>
        </div>

        <div className={styles.systemDepthLink}>
          <span>NEXT / WHY + IMPLEMENTATION</span>
          <p>긴 작업에서 판단 기준이 사라지는 문제와 Workbench, Harness, Python Media Toolchain으로 나눈 대응.</p>
          <a href="#rationale">03 / 도구·경계 보기 <ArrowDown size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function CurrentSystemCasePage({ activeCase }: { activeCase: (typeof currentSystemCases)[number] }) {
  return (
    <article className={`${styles.currentSystemCarousel} ${styles.currentSystemCasePage}`} id={`rationale-${activeCase.id}`}>
      <div className={styles.currentSystemVisualStage}>
        <div className={styles.currentSystemVisualMotion}>
          {activeCase.id === "planning" ? (
            <figure className={styles.currentSystemHeroFigure}>
              <img alt="ONE MOVE Front Planning Workbench current implementation" src={CURRENT_WORKBENCH_IMAGE} />
              <figcaption><span>ACTUAL RUN / 2026.07.28</span><strong>ONE MOVE · FRONT PLANNING WORKBENCH</strong></figcaption>
            </figure>
          ) : null}

          {activeCase.id === "handoff" ? (
            <div className={styles.currentSystemHeroMap} aria-label="Harness stage handoff summary">
              <header><span>HARNESS / CURRENT STAGE CONTRACT</span><strong>판단이 다음 작업으로 남는 구조</strong></header>
              <div className={styles.currentSystemHeroMapRail}>
                <div><small>INPUT</small><strong>목표 · 기준</strong></div><i aria-hidden="true">→</i>
                <div><small>STAGE</small><strong>현재 작업</strong></div><i aria-hidden="true">→</i>
                <div><small>ARTIFACT</small><strong>기준 결과물</strong></div><i aria-hidden="true">→</i>
                <div className={styles.currentSystemHeroHuman}><small>HUMAN GATE</small><strong>승인 · 수정</strong></div><i aria-hidden="true">→</i>
                <div><small>HANDOFF</small><strong>다음 행동</strong></div>
              </div>
              <p>입력과 결과물은 시스템이 정리하고, 통과 여부와 돌아갈 지점은 사람의 판단으로 남깁니다.</p>
            </div>
          ) : null}

          {activeCase.id === "edit" ? (
            <div className={styles.currentSystemHeroSheets}>
              <figure><img alt="Cola editing contact sheet" src="/ai-exploration/cf/cola-memory-vending-board.jpg" /><figcaption>01 / COLA</figcaption></figure>
              <figure><img alt="INK editing contact sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" /><figcaption>02 / INK</figcaption></figure>
              <figure><img alt="Headset editing contact sheet" src="/ai-exploration/cf/headset-selective-listening-board.png" /><figcaption>03 / HEADSET</figcaption></figure>
            </div>
          ) : null}
        </div>
      </div>

      <aside className={styles.currentSystemCarouselMeta}>
        <div>
          <span>{activeCase.label}</span>
          <small>PROBLEM</small>
          <h3>{activeCase.problem}</h3>
          <div className={styles.currentSystemSolution}>
            <small>CURRENT IMPLEMENTATION</small>
            <strong>{activeCase.implementation}</strong>
            <p>{activeCase.detail}</p>
          </div>
          <div className={styles.currentSystemRetention}>
            <small>WHAT REMAINS</small>
            <strong>{activeCase.criterion}</strong>
          </div>
        </div>

        <div className={styles.currentSystemCarouselFooter}>
          <EvidenceLink label={activeCase.evidenceLabel} slug={activeCase.evidenceSlug} />
        </div>
      </aside>
    </article>
  );
}

function RationaleSkillUse({ kind }: { kind: keyof typeof rationaleSkillUses }) {
  const item = rationaleSkillUses[kind];

  return (
    <dl className={styles.rationaleSkillUse}>
      <div>
        <dt>USED SKILLS</dt>
        <dd>{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</dd>
      </div>
      <div>
        <dt>INSTRUCTION · CONTRACT</dt>
        <dd>{item.contracts}</dd>
      </div>
      <div>
        <dt>USED FOR</dt>
        <dd>{item.role}</dd>
      </div>
      <div>
        <dt>PERSONAL SPEC COMMERCIAL</dt>
        <dd>{item.cf}</dd>
      </div>
    </dl>
  );
}

function PublicSafeExcerpt({
  children,
  source,
  title,
}: PropsWithChildren<{ source: string; title: string }>) {
  return (
    <details className={styles.rationaleExcerpt}>
      <summary>
        <span>PUBLIC-SAFE EXCERPT</span>
        <strong>{title}</strong>
        <FileCode2 aria-hidden="true" size={15} />
      </summary>
      <div className={styles.rationaleExcerptBody}>
        <span>SOURCE / {source}</span>
        <pre>{children}</pre>
        <small>내부 전문·민감 경로·계정 정보는 제외한 실제 구조 발췌입니다.</small>
      </div>
    </details>
  );
}

function CurrentSystemSection() {
  return (
    <section className={`${styles.section} ${styles.rationaleRebuild}`} id="rationale">
      <Reveal className={`${styles.contentWidth} ${styles.rationaleRebuildInner}`}>
        <SectionHeading
          body="02에서 정한 사람·AI 경계를 실제 제작에 쓰기 위해, 코딩 에이전트·Workbench·생성 모델·API·편집 도구를 나눴습니다. 아래는 왜 골랐는지와 어디까지 맡겼는지만 남깁니다."
          index="03"
          label="WHY THESE TOOLS · BOUNDARIES"
          title="같은 기준을 유지하며, 판단은 사람이 남기기 위해"
        />

        <div className={styles.rationalePages}>
          {/* A · Coding Agent (+ Codex / Grok 배분) */}
          <article className={`${styles.rationalePage} ${styles.rationaleResultPage}`} id="rationale-scale">
            <div className={`${styles.rationaleResultMedia} ${styles.rationaleScaleMedia}`}>
              <figure className={styles.rationaleScaleGallery}>
                <img alt="Actual Grok Imagine candidate gallery preserved in the IDOL harness" src="/ai-exploration/rationale-assets/grok-imagine-gallery-2026-06-19.png" />
                <figcaption>HARNESS SOURCE / GROK IMAGINE CANDIDATE GALLERY · 2026.06.19</figcaption>
              </figure>
              <div className={styles.rationaleAgentFileRail} aria-label="File first agent handoff">
                <div><span>01</span><strong>PLAN · SOURCE</strong><small>기획·원본·선택 기준</small></div><i aria-hidden="true">→</i>
                <div><span>02</span><strong>AGENT ROUTE</strong><small>작업 성격에 맞춰 배분</small></div><i aria-hidden="true">→</i>
                <div><span>03</span><strong>ARTIFACT</strong><small>파일·시트·프리뷰</small></div><i aria-hidden="true">→</i>
                <div className={styles.rationaleAgentHuman}><span>04</span><strong>HUMAN REVIEW</strong><small>통과·보류·수정</small></div>
              </div>
            </div>

            <aside className={styles.rationaleResultMeta}>
              <header className={styles.rationaleResultHeader}>
                <span>03—01 / CODING AGENT</span>
                <h3>한 장씩 만들고, 세션마다 다시 설명하지 않기 위해</h3>
                <p>채팅형 LLM은 세션이 바뀔 때마다 스토리·레퍼런스·통과 기준을 다시 설명해야 했습니다. 코딩 에이전트는 파일·후보 비교 시트를 같은 기준으로 읽고, 다음 세션·편집까지 작업 상태를 이을 수 있었습니다. <strong>넓은 맥락·하네스 갱신은 Codex, 빠른 탐색·분류는 Grok Build</strong>로 나눴고, 둘 다 같은 기준 파일과 사람 승인 지점을 읽습니다.</p>
              </header>
              <div className={styles.rationaleReasonGrid}>
                <div><span>01 / REPEAT</span><strong>리서치·분류·프롬프트를 단위로 나눔</strong><p>곡 구간·컷·승인 단위로 반복 작업을 나눕니다.</p></div>
                <div><span>02 / SAME CRITERIA</span><strong>대화 요약이 아니라 기준 파일</strong><p>Markdown·HTML·스키마에 메시지와 선택 이유를 남깁니다.</p></div>
                <div><span>03 / MINIMUM INTERVENTION</span><strong>AI가 좁히고, 최종은 사람</strong><p>통과·보류·수정과 최종 선택은 직접 결정합니다.</p></div>
              </div>
              <p className={styles.rationaleReviewMetricBoundary}>이 구조로 Pulso 54개 키프레임 패킷을 구간 단위로 검토·재실행할 수 있었습니다.</p>
              <div className={styles.rationaleBenchmarkNote}>
                <span>AGENT ROUTE / OFFICIAL LINKS</span>
                <p>우열표가 아니라 작업 배분입니다. 사실 확인은 공식 원문을 기준으로 합니다.</p>
                <div>
                  <a href="https://openai.com/index/introducing-upgrades-to-codex/" rel="noreferrer" target="_blank">OpenAI / Codex <ExternalLink size={11} /></a>
                  <a href="https://x.ai/news/grok-4-5" rel="noreferrer" target="_blank">xAI / Grok <ExternalLink size={11} /></a>
                </div>
              </div>
              <PublicSafeExcerpt source="front-planning-handoff.schema.json" title="같은 기준과 작업 상태를 다음 세션에 잇는 항목">
{`"scope": { "required": ["section_id", "selected_asset_ids"] },
"session_boundary": {
  "transcript_included": { "const": false },
  "canonical_write_authority": "founder_or_structured_single_writer_only"
}`}
              </PublicSafeExcerpt>
            </aside>
          </article>

          {/* B · Workbench */}
          <article className={`${styles.rationalePage} ${styles.rationaleResultPage}`} id="rationale-repeat">
            <div className={`${styles.rationaleResultMedia} ${styles.rationalePlanningMedia}`}>
              <div className={styles.rationaleEvidenceColumn}>
                <div className={styles.planningEvidenceStage}>
                  <figure className={styles.planningBoardFigure}>
                    <img alt="ONE MOVE master rules table from the reference and flow board" src="/ai-exploration/rationale-assets/one-move-flow-rules-table-crop.png" />
                    <figcaption>
                      <span>ONE MOVE / MASTER RULES TABLE</span>
                      <a href="/ai-exploration/one-move/run/review/front-planning/0715-one-move-ref-flow-board-v1.html" rel="noreferrer" target="_blank">전체 HTML 보기 <ExternalLink size={12} /></a>
                    </figcaption>
                  </figure>
                  <div className={styles.planningVideoFigure}>
                    <div className={styles.planningVideoPair}>
                      {[
                        {
                          label: "OPENING / 00—04S",
                          poster: "/ai-exploration/rationale-assets/one-move-planning-opening-4s-poster.png",
                          src: "/ai-exploration/rationale-assets/one-move-planning-opening-4s.m4v",
                        },
                        {
                          label: "HANDOFF / FINAL 04S",
                          poster: "/ai-exploration/rationale-assets/one-move-planning-handoff-4s-poster.png",
                          src: "/ai-exploration/rationale-assets/one-move-planning-handoff-4s.m4v",
                        },
                      ].map(({ label, poster, src }) => (
                        <figure key={label}>
                          <video controls muted playsInline poster={poster} preload="metadata" src={src} />
                          <figcaption>{label}</figcaption>
                        </figure>
                      ))}
                    </div>
                    <div><span>WORKBENCH / OPENING → HANDOFF</span><p>같은 29초 녹화의 시작과 마지막 4초 — 기획 화면이 후보·에이전트 반환 상태로 바뀌는 과정.</p></div>
                  </div>
                </div>
              </div>
            </div>

            <aside className={styles.rationaleResultMeta}>
              <header className={styles.rationaleResultHeader}>
                <span>03—02 / WORKBENCH</span>
                <h3>사람과 AI가 같은 기획을 보게 하기 위해</h3>
                <p>에이전트가 뒤에서 무엇을 보고 골랐는지 결과만으로는 확인하기 어려웠습니다. 메시지·타겟·곡 구간·레퍼런스·후보 상태를 한 화면에 두고, 선택한 기준만 다음 단계가 읽게 했습니다.</p>
              </header>
              <div className={styles.llmProblemStatement}>
                <span>WHY IT EXISTS</span>
                <p>세션마다 맥락을 다시 설명하거나, AI 기준을 결과만 보고 추측해야 했습니다.</p>
                <i aria-hidden="true">→</i>
                <strong>Workbench는 생성기가 아니라, 같은 자료를 보며 선택하는 작업 환경입니다.</strong>
              </div>
              <p className={styles.rationaleReviewMetricBoundary}>ONE MOVE 등 현재 기획에서 같은 화면으로 후보·인계 상태를 확인합니다.</p>
              <div className={styles.rationaleEvidenceLinks}>
                <EvidenceLink label="Workbench 실제 구조 보기" slug="front-planning-workbench-checkpoint" />
                <EvidenceLink label="Harness 인계 기준 보기" slug="idol-harness-stage-registry" />
              </div>
            </aside>
          </article>

          {/* C · Model + API */}
          <article className={`${styles.rationalePage} ${styles.rationaleResultPage} ${styles.rationaleModelRoutePage}`} id="rationale-model-routing">
            <div className={`${styles.rationaleResultMedia} ${styles.rationaleApiMedia}`}>
              <div className={styles.rationaleApiEvidence}>
                <figure>
                  <a href="https://developers.openai.com/api/docs/models/gpt-image-2" rel="noreferrer" target="_blank">
                    <img alt="Official OpenAI GPT Image 2 capability table" src="/ai-exploration/rationale-assets/gpt-image-2-official-doc-crop-2026-07-20.png" />
                  </a>
                  <figcaption>OPENAI / GPT IMAGE 2 · 공식 문서</figcaption>
                </figure>
                <div className={styles.rationalePacketOriginal}>
                  <header><span>PULSO / 02B-PROMPT-PACKETS.YAML</span><strong>ORIGINAL PACKET FIELDS</strong></header>
                  <div className={styles.rationalePacketFieldGrid}>
                    <div><span>PACKET · TRACE</span><pre>{`packet_id: PKT_C01_M01_INTRO_CHEST
cut_id: C01_S00_INTRO_PRIVATE_SPARK
generation_lane: mv_lane
output_role: adaptive_keyframe
source_time_range: 0:00-0:08`}</pre></div>
                    <div><span>REVIEW ASSEMBLY</span><pre>{`assembly: local_after_generation
preferred_group_size: 3`}</pre></div>
                  </div>
                </div>
              </div>
              <div className={styles.rationaleModelRail}>
                <span>OFFICIAL CAPABILITY</span><i aria-hidden="true">→</i><span>PROJECT TEST</span><i aria-hidden="true">→</i><span>SCENE ROUTE</span><i aria-hidden="true">→</i><span>API BATCH</span>
              </div>
            </div>

            <aside className={styles.rationaleResultMeta}>
              <header className={styles.rationaleResultHeader}>
                <span>03—03 / IMAGE · VIDEO · API</span>
                <h3>장면마다 다른 생성 능력을 쓰고, 확정 컷만 일괄 실행하기 위해</h3>
                <p>모델을 하나로 고정하지 않았습니다. <strong>핵심 스틸·정체성</strong>은 GPT Image 2, <strong>빠른 후보</strong>는 Grok Imagine Image, <strong>통과 프레임의 짧은 영상</strong>은 Grok Imagine Video 1.5. 사람이 확정한 구간만 API로 묶고, 실패·중복은 후보 시트에서 먼저 좁힌 뒤 <strong>수정 컷만 재실행</strong>합니다.</p>
              </header>
              <div className={styles.rationaleModelRoles}>
                <div>
                  <span>GPT IMAGE 2</span>
                  <strong>KEY STILL · IDENTITY</strong>
                  <p>얼굴·지시 정밀도가 필요한 핵심 프레임.</p>
                  <a href="https://developers.openai.com/api/docs/models/gpt-image-2" rel="noreferrer" target="_blank">공식 모델 문서 <ExternalLink size={11} /></a>
                </div>
                <div>
                  <span>GROK IMAGINE</span>
                  <strong>CANDIDATE → SHORT VIDEO</strong>
                  <p>후보 확장과, 통과 프레임의 짧은 영상화.</p>
                  <a href="https://docs.x.ai/developers/models/grok-imagine-image" rel="noreferrer" target="_blank">공식 모델 문서 <ExternalLink size={11} /></a>
                </div>
                <div>
                  <span>API BATCH</span>
                  <strong>승인 범위 · 선택 재실행</strong>
                  <p>유료 실행은 사람 승인 범위만. 통과 자산은 러프 편집으로 인계.</p>
                  <a href="https://docs.x.ai/developers/pricing" rel="noreferrer" target="_blank">공식 가격 <ExternalLink size={11} /></a>
                </div>
              </div>
              <p className={styles.rationaleReviewMetricBoundary}>더 긴 컷·다른 움직임이 필요할 때만 Kling·Seedance 등을 검토합니다. 기본 경로는 에이전트·API·파일 인계 효율을 우선합니다.</p>
              <div className={styles.rationaleCfRoute}>
                <span>PERSONAL SPEC COMMERCIAL</span>
                <p>Cola·Headset도 같은 보드 → 영상 → 사람 검토 경계 안에서 만들었습니다.</p>
              </div>
              <EvidenceLink label="이미지·영상 API 패킷 구조 보기" slug="pulso-api-submission-packet" />
            </aside>
          </article>

          {/* D · Review + Edit */}
          <article className={`${styles.rationalePage} ${styles.rationaleResultPage} ${styles.rationaleReviewPage}`} id="rationale-human-gates">
            <div className={`${styles.rationaleResultMedia} ${styles.rationaleAttitudeMedia}`}>
              <div className={styles.attitudeEvidenceGrid}>
                <figure className={styles.attitudeContactSheet}>
                  <img alt="INK edit window and ring seal one-second contact sheet" src="/ai-exploration/edit-qc/ink-edit-windows-1s-contact-sheet.jpg" />
                  <figcaption>
                    <span>INK / EDIT + RING SEAL FRAME SHEET</span>
                    <strong>1 SEC INTERVAL / 17-FRAME REVIEW</strong>
                  </figcaption>
                </figure>
                <div className={styles.attitudeSectionVideos}>
                  <figure>
                    <video controls playsInline preload="metadata" src="/ai-exploration/edit-qc/ink-final-edit-window-01.mp4" />
                    <figcaption>EDIT WINDOW / 26—38S</figcaption>
                  </figure>
                  <figure>
                    <a className={styles.rationaleReviewImageLink} href="/ai-exploration/iteration/evolution/pulso-api-window-16-28-contact-sheet.jpg" rel="noreferrer" target="_blank">
                      <img alt="PULSO 16-to-28-second API output review contact sheet" src="/ai-exploration/iteration/evolution/pulso-api-window-16-28-contact-sheet.jpg" />
                    </a>
                    <figcaption>PULSO / 12 FRAMES · 16—28S</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <aside className={styles.rationaleResultMeta}>
              <header className={styles.rationaleResultHeader}>
                <span>03—04 / REVIEW · EDIT</span>
                <h3>한 장씩 맞추지 않고, 비교 자료로 좁힌 뒤 재생으로 확정하기 위해</h3>
                <p>12–16프레임 시트와 구간 프리뷰로 누락·중복·연결을 먼저 보고, 편집 레시피(순서·in/out·속도)로 러프 프리뷰를 만듭니다. <strong>장면 인과·싱크·최종 마스터는 실제 재생으로 결정</strong>합니다.</p>
              </header>
              <p className={styles.rationaleReviewMetricBoundary}>
                Pulso 54 패킷 · 시트 12–16프레임 · 수정 컷만 재실행. 검토량은 실제 패킷·시트 기준이며, 시간 단축률은 계측하지 않아 표시하지 않습니다.
              </p>
              <div className={styles.humanGateList}>
                {[
                  ["01", "CRITERIA INPUT", "스토리·레퍼런스 역할·통과 기준을 함께 읽음"],
                  ["02", "AGENT FIRST PASS", "누락·중복·연결 위험을 1차 비교"],
                  ["03", "ROUGH ASSEMBLY · PREVIEW", "컷 순서·in/out·속도로 짧은 프리뷰"],
                  ["04", "HUMAN PLAYBACK · FINAL", "장면 인과·싱크·최종 마스터"],
                ].map(([index, title, detail]) => (
                  <div key={index}><span>{index}</span><strong>{title}</strong><small>{detail}</small></div>
                ))}
              </div>
              <EvidenceLink label="편집 레시피·도구 구현 근거 보기" slug="idol-edit-desk-implementation" />
            </aside>
          </article>
        </div>

        <div className={styles.rationaleBoundary}>
          <span>OPERATING BOUNDARY</span>
          <p><strong>현재 제외:</strong> 자동 유료 실행 · 기획 자동 확정 · 보호 자산 외부 전송.</p>
          <a href="#research">04 / 기준이 바뀐 과정 보기 <ArrowDown size={16} /></a>
        </div>

        <SectionHandoff
          href="#research"
          label="04 / FORMATION + ITERATION"
          title="문제가 다음 제작 기준을 바꾼 과정"
        />
      </Reveal>
    </section>
  );
}

function SystemProofSection() {
  return (
    <section className={`${styles.section} ${styles.proofSection}`} id="proof">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="본문의 판단을 뒷받침하는 실제 화면과 작업 흐름입니다. 실행 가능한 Workbench, 개발 중인 편집 보조 도구, 공개 가능한 단계 기록을 구분해 정리했습니다."
          index="APPENDIX / IMPLEMENTATION"
          label="DETAILED IMPLEMENTATION PROOF"
          title="세 가지 제작 도구의 실제 근거"
        />

        <div className={styles.systemProofGrid}>
          <article className={styles.workbenchProof}>
            <div className={styles.proofCopy}>
              <span>FRONT PLANNING WORKBENCH</span>
              <h3>메시지와 레퍼런스를 놓고 장면을 고르는 화면</h3>
              <p>
                메시지·타겟·핵심 레퍼런스·곡 구간을 한 화면에 배치합니다. 후보의 통과·보류 이유를 남기고 선택한 레퍼런스와 장면 조건만 다음 이미지 작업으로 전달합니다.
              </p>
              <EvidenceLink label="Workbench 구현 근거 보기" slug="front-planning-workbench-checkpoint" />
              <EvidenceLogicNote slug="front-planning-workbench-checkpoint" />
            </div>
            <img alt="ONE MOVE Front Planning Workbench runnable checkpoint" src={CURRENT_WORKBENCH_IMAGE} />
            <div className={`${styles.workflowDiagram} ${styles.workbenchLoopDiagram}`}>
              <div className={styles.workflowDiagramHeading}>
                <span>기획 → 이미지 후보 선택</span>
                <p>기획 기준을 생성 요청과 후보 비교까지 전달.</p>
              </div>
              <div className={styles.workflowRail}>
                <div className={styles.workflowNode}>
                  <small>기준 입력</small>
                  <strong>메시지 · 타겟<br />핵심 레퍼런스</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeAccent}`}>
                  <small>WORKBENCH</small>
                  <strong>레퍼런스 · 장면<br />후보 상태</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>HARNESS</small>
                  <strong>생성 요청<br />현재 단계</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>IMAGE GENERATION</small>
                  <strong>이미지 후보</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={styles.workflowNode}>
                  <small>CONTACT SHEET</small>
                  <strong>한 화면 비교</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div className={`${styles.workflowNode} ${styles.workflowNodeGate}`}>
                  <small>HUMAN SELECTION</small>
                  <strong>통과 · 보류 · 수정</strong>
                </div>
              </div>
              <div className={styles.workflowOutcomes}>
                <span className={styles.workflowHold}><Undo2 size={14} /> 보류·수정 → Workbench</span>
                <span className={styles.workflowPass}>통과 → 선택한 핵심 컷</span>
              </div>
            </div>
          </article>

          <article className={styles.editDeskProof}>
            <div className={styles.proofCopy}>
              <span>PYTHON MEDIA TOOLCHAIN / LOCAL EDIT DESK</span>
              <h3>음악과 실제 동작을 겹쳐 좁힌 편집 후보</h3>
              <ol className={styles.editWorkflow}>
                <li><span>01</span><strong>선택 음원과 장면 의도</strong></li>
                <li><span>02</span><strong>소스 인테이크와 컨택트시트</strong></li>
                <li><span>03</span><strong>음악 · 동작 · 장면 마커 정렬</strong></li>
                <li><span>04</span><strong>편집 후보 · 구간 프리뷰 · QC</strong></li>
              </ol>
              <p>
                ffprobe·OpenCV·librosa로 영상 상태, 프레임, 움직임, 오디오 신호를 분석하고 ffmpeg로 컨택트시트와 프리뷰를 만듭니다. Python과 Tk로 만든 Edit Desk는 이 자료를 한 타임라인에서 확인하는 개발 중 보조 MVP입니다. 전문 편집기를 대체하지 않으며 최종 컷은 실제 재생 검토로 결정합니다.
              </p>
            </div>
            <EvidenceExcerpt label="공개 범위와 출처 보기" slug="idol-edit-desk-implementation" />
            <div className={styles.generationContractProof}>
              <header>
                <span>02B + 03V / GENERATION JOB CONTRACT</span>
                <p>본문의 Keyframe·Motion 흐름을 실행 가능한 작업 조건과 정본 산출물로 풀어낸 상세 근거.</p>
              </header>
              <div className={styles.generationContractJobs}>
                <article>
                  <span>IMAGE JOB / 02B</span>
                  <strong>12 Direction Map → 14–15 Passed Storyboard → 16 Prompt Packets</strong>
                  <ol>{imagePromptStructure.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                </article>
                <div className={styles.generationContractGate}>
                  <span>HUMAN GATE</span>
                  <strong>APPROVED FRAMES</strong>
                </div>
                <article>
                  <span>VIDEO JOB / 03V</span>
                  <strong>Approved Frames → Reviewed Section Video</strong>
                  <ol>{videoPromptStructure.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                </article>
              </div>
              <div className={styles.generationContractTools}>
                {stageToolEvidence.generation.map(([label, detail]) => <div key={label}><span>{label}</span><p>{detail}</p></div>)}
              </div>
            </div>
            <div className={`${styles.workflowDiagram} ${styles.editLoopDiagram}`}>
              <div className={styles.workflowDiagramHeading}>
                <span>영상 생성 → 편집 검토</span>
                <p>스크립트의 비교 자료, 사람의 재생 결정.</p>
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
                  <small>PYTHON TOOLCHAIN</small>
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
                <span className={styles.workflowPass}>통과 → Loom MV · 개인 비공식 Spec Commercial</span>
              </div>
            </div>
          </article>

          <article className={styles.registryProof}>
            <div className={styles.proofCopy}>
              <span>5 PHASES / 19 ACTIVE STAGES</span>
              <h3>작업이 멈춰도 다시 시작할 지점의 기록</h3>
              <p>
                각 단계의 입력, 결과물, 담당, 승인, 돌아갈 지점을 레지스트리에 기록합니다. 문제 발생 시 앞선 결정을 임의로 바꾸지 않고 해당 결정을 맡은 단계로 복귀합니다.
              </p>
            </div>
            <EvidenceExcerpt label="공개 범위와 출처 보기" slug="idol-harness-stage-registry" />
            <div className={`${styles.workflowDiagram} ${styles.harnessLifecycleDiagram}`}>
              <div className={styles.workflowDiagramHeading}>
                <span>HARNESS / 상태 · 결과물 · 인계</span>
                <p>현재 단계와 결과물, 승인, 다음 행동을 남기는 작업 인계.</p>
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
                  <small>HUMAN GATE</small>
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

function PublicLinksSection() {
  return (
    <section aria-labelledby="public-links-title" className={`${styles.section} ${styles.publicLinksSection}`} id="explore">
      <Reveal className={`${styles.contentWidth} ${styles.publicLinksLayout}`}>
        <header className={styles.publicLinksHeading}>
          <span>PUBLIC LINKS</span>
          <h2 id="public-links-title">EXPLORE</h2>
          <p>Loom의 공개 영상과 소셜 계정, Signal Deck을 직접 확인할 수 있습니다.</p>
        </header>

        <nav aria-label="AI Exploration public links" className={styles.publicLinksList}>
          {publicDestinations.map((destination) => (
            <a href={destination.href} key={destination.href} rel="noopener noreferrer" target="_blank">
              <span>{destination.group}</span>
              <div>
                <strong>{destination.title}</strong>
                <p>{destination.detail}</p>
              </div>
              <ExternalLink aria-hidden="true" size={18} />
            </a>
          ))}
        </nav>
      </Reveal>
    </section>
  );
}

function VisualWorkflowReference() {
  return (
    <div className={styles.adoptionVisual}>
      <figure className={`${styles.localUiFigure} ${styles.referenceWorkflowFigure}`}>
        <img alt="ComfyUI Z-Image Turbo node workflow reference" src="/ai-exploration/workbench/comfyui-z-image-turbo-workflow-reference.png" />
        <figcaption>REFERENCE / COMFYUI NODE WORKFLOW</figcaption>
      </figure>
      <figure className={styles.localUiFigure}>
        <img alt="ONE MOVE Front Planning Workbench canvas and session interface" src={CURRENT_WORKBENCH_IMAGE} />
        <figcaption>LOCAL APPLICATION / FRONT PLANNING WORKBENCH</figcaption>
      </figure>
    </div>
  );
}

function EditingGrammarEvidence() {
  return (
    <div className={`${styles.adoptionVisual} ${styles.editingPreviewEvidence}`}>
      <div className={styles.editingPreviewHeading}>
        <span>ACTUAL REVIEW MATERIALS</span>
        <strong>Cola · INK · Headset에서 사용한 프리뷰 컨택트시트</strong>
      </div>
      <div className={styles.editingPreviewGrid}>
        <figure className={styles.localUiFigure}>
          <img alt="Cola preview contact sheet" src="/ai-exploration/cf/cola-memory-vending-board.jpg" />
          <figcaption>COLA / PREVIEW CONTACT SHEET</figcaption>
        </figure>
        <figure className={styles.localUiFigure}>
          <img alt="INK keyframe preview contact sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" />
          <figcaption>INK / KEYFRAME CONTACT SHEET</figcaption>
        </figure>
        <figure className={styles.localUiFigure}>
          <img alt="Headset preview contact sheet" src="/ai-exploration/cf/headset-selective-listening-board.png" />
          <figcaption>HEADSET / PREVIEW CONTACT SHEET</figcaption>
        </figure>
      </div>
      <ol className={styles.editingPreviewRail}>
        {scriptAutomation.map(([index, title]) => (
          <li key={index}><span>{index}</span><strong>{title}</strong></li>
        ))}
      </ol>
    </div>
  );
}

function HarnessAdoptionDiagram() {
  return (
    <div className={styles.harnessAdoptionDiagram}>
      <div className={styles.harnessAdoptionHeading}>
        <span>세션이 바뀌어도 남겨야 할 것</span>
        <p>현재 단계·결과물·승인 기준·다음 행동의 유지.</p>
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
        <div className={styles.harnessMermaidGate}><small>HUMAN GATE</small><strong>검토 · 승인</strong></div><i aria-hidden="true">→</i>
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

function SystemFormationVisual({ id }: { id: (typeof systemFormationCases)[number]["id"] }) {
  if (id === "editing") {
    return (
      <div className={styles.formationRootEvidence}>
        <div className={styles.formationRootBoards}>
          <figure className={styles.formationRootTimelinePart}><img alt="Root Signal V11 final edit contact sheet first half" src="/ai-exploration/edit-qc/root-signal-v11-contact-sheet-01.jpg" /><figcaption>V11 FINAL / EDIT TIMELINE · 01</figcaption></figure>
          <figure className={styles.formationRootTimelinePart}><img alt="Root Signal V11 final edit contact sheet second half" src="/ai-exploration/edit-qc/root-signal-v11-contact-sheet-02.jpg" /><figcaption>V11 FINAL / EDIT TIMELINE · 02</figcaption></figure>
          <figure className={styles.formationRootStoryboardPrimary}><img alt="Root Signal first storyboard board" src="/ai-exploration/iteration/root-signal/storyboard-sheet-01.webp" /><figcaption>STORYBOARD / 01—04</figcaption></figure>
          <figure className={styles.formationRootStoryboardSecondary}><img alt="Root Signal second storyboard board" src="/ai-exploration/iteration/root-signal/storyboard-sheet-02.webp" /><figcaption>STORYBOARD / 05—08</figcaption></figure>
        </div>
        <div className={styles.formationMediaRail}>
          {[
            ["01", "SOURCE INDEX"],
            ["02", "FRAME · MARKER"],
            ["03", "ROUGH ASSEMBLY"],
            ["04", "PLAYBACK QC"],
          ].map(([index, label]) => <div key={index}><span>{index}</span><strong>{label}</strong></div>)}
        </div>
      </div>
    );
  }

  if (id === "api-production") {
    return (
      <div className={styles.formationApiEvidence}>
        <div className={styles.formationPulsoStage}>
          <div className={styles.formationPulsoFaces}>
            {pulsoFaceAssets.slice(0, 8).map((face) => <figure key={face.label}><img alt={`Pulso ${face.label} visual identity`} src={face.src} /><figcaption>{face.label}</figcaption></figure>)}
          </div>
          <div className={styles.formationPulsoReviewSheets}>
            <figure className={styles.formationPulsoPreview}><img alt="Pulso final playback review contact sheet" src="/ai-exploration/iteration/pulso/final-preview-contact-sheet.jpg" /><figcaption>PULSO / FINAL PLAYBACK REVIEW</figcaption></figure>
            <figure className={styles.formationPulsoPreview}><img alt="Pulso ending and logo quality-control contact sheet from the production harness" src="/ai-exploration/edit-qc/pulso-final-qc-contact-sheet.jpg" /><figcaption>HARNESS SOURCE / ENDING · LOGO QC</figcaption></figure>
          </div>
        </div>
        <div className={styles.formationMediaRail}>
          {[
            ["14–15", "STORYBOARD"],
            ["16–17", "PACKET · APPROVAL"],
            ["18–19", "KEYFRAME REVIEW"],
            ["20–22", "VIDEO · REVIEW"],
          ].map(([index, label]) => <div key={index}><span>{index}</span><strong>{label}</strong></div>)}
        </div>
      </div>
    );
  }

  if (id === "research-harness") {
    return (
      <div className={styles.formationCausalEvidence}>
        <div className={styles.formationCausalPair}>
          <div className={styles.formationLeftGeneratedGrid}>
            {[
              ["M01 · SAEYAN", "/ai-exploration/iteration/left-in-that-night/generated-m01-saeyan.png"],
              ["M03 · YEUL", "/ai-exploration/iteration/left-in-that-night/generated-m03-yeul.png"],
              ["M04 · LUA", "/ai-exploration/iteration/left-in-that-night/generated-m04-lua.png"],
              ["M05 · FAYE", "/ai-exploration/iteration/left-in-that-night/generated-m05-faye.png"],
              ["M09 · ARIA", "/ai-exploration/iteration/left-in-that-night/generated-m09-aria.png"],
            ].map(([label, src]) => (
              <figure key={label}><img alt={`Left in That Night generated portrait ${label}`} src={src} /><figcaption>LEFT / GENERATED · {label}</figcaption></figure>
            ))}
          </div>
          <figure className={styles.formationInkThirtySecond}><img alt="INK final master contact sheet around thirty seconds" src="/ai-exploration/edit-qc/ink-final-30s-contact-sheet.jpg" /><figcaption>INK / FINAL MASTER 26—38S · 12-FRAME REVIEW SHEET</figcaption></figure>
        </div>
        <div className={styles.formationMediaRail}>
          {[
            ["01", "RESEARCH"],
            ["02", "REFERENCE FUNCTION"],
            ["03", "SCENE · CAUSE"],
            ["04", "HARNESS RULE"],
          ].map(([index, label]) => <div key={index}><span>{index}</span><strong>{label}</strong></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formationWorkbenchEvidence}>
      <div className={styles.formationWorkbenchGrid}>
        <figure className={styles.formationWorkbenchMain}><img alt="ONE MOVE Front Planning Workbench current checkpoint" src={CURRENT_WORKBENCH_IMAGE} /><figcaption>LOCAL APPLICATION / CURRENT CHECKPOINT</figcaption></figure>
        <figure><img alt="ComfyUI workflow used as a reusable visual-state reference" src="/ai-exploration/workbench/comfyui-z-image-turbo-workflow-reference.png" /><figcaption>REFERENCE / COMFYUI FLOW</figcaption></figure>
        <figure><video controls muted playsInline poster="/ai-exploration/rationale-assets/one-move-planning-last-5s-poster.jpg" preload="metadata" src="/ai-exploration/rationale-assets/one-move-planning-last-5s.mp4" /><figcaption>ONE MOVE / CURRENT USE</figcaption></figure>
      </div>
      <div className={styles.formationMediaRail}>
        {[
          ["01", "REFERENCE"],
          ["02", "VISUAL STATE"],
          ["03", "SELECT · HOLD"],
          ["04", "HARNESS HANDOFF"],
        ].map(([index, label]) => <div key={index}><span>{index}</span><strong>{label}</strong></div>)}
      </div>
    </div>
  );
}

function ResearchFormationSection() {
  return (
    <section className={styles.researchFormationSection} id="research">
      <Reveal className={`${styles.contentWidth} ${styles.researchFormationInner}`}>
        <div className={styles.researchFormationIntro}>
          <SectionHeading
            body="03에서 설명한 도구를 다시 소개하지 않습니다. Workbench·리서치·API 생성·편집이라는 선택이 실제 작업의 문제·폐기·완성을 거치며 어떻게 현재 기준으로 바뀌었는지 보여줍니다."
            index="04"
            label="RESEARCH + SYSTEM FORMATION"
            title="선택한 방식이 실제 작업을 거치며 바뀐 과정"
          />
          <nav className={styles.researchFormationRoute} aria-label="제작 시스템 형성 과정">
            {systemFormationCases.map((item) => (
              <a href={`#research-${item.id}`} key={item.id}><span>{item.index}</span><strong>{item.route}</strong></a>
            ))}
          </nav>
        </div>

        <div className={styles.researchFormationPages}>
          {systemFormationCases.map((item) => (
            <article className={styles.systemFormationPage} id={`research-${item.id}`} key={item.id}>
              <div className={styles.systemFormationMedia}><SystemFormationVisual id={item.id} /></div>
              <aside className={styles.systemFormationMeta}>
                <header>
                  <span>{item.index} / {item.period}</span>
                  <small>{item.status}</small>
                  <h3>{item.title}</h3>
                </header>
                <dl className={styles.systemFormationEvidence}>
                  <div><dt>문제</dt><dd>{item.problem}</dd></div>
                  <div><dt>탐구·분석</dt><dd>{item.inquiry}</dd></div>
                  <div><dt>직접 한 것</dt><dd>{item.applied}</dd></div>
                  <div className={styles.systemFormationResult}><dt>남은 기준</dt><dd>{item.result}</dd></div>
                </dl>
                {item.evidenceSlug && item.evidenceLabel ? <EvidenceLink label={item.evidenceLabel} slug={item.evidenceSlug} /> : <span className={styles.systemFormationRecord}>FINAL RECORD / LOCAL IDOL SOURCE</span>}
              </aside>
            </article>
          ))}
        </div>

        <SectionHandoff
          href="#explore"
          label="PUBLIC LINKS"
          title="공개 영상·계정·Signal Deck으로 이어보기"
        />
      </Reveal>
    </section>
  );
}

function ResearchValidationSection() {
  const visuals = [
    <VisualWorkflowReference key="visual-workflow" />,
    <EditingGrammarEvidence key="editing-grammar" />,
    <HarnessAdoptionDiagram key="agent-harness" />,
  ];

  return (
    <section className={styles.researchValidationSection} id="research">
      <Reveal className={`${styles.contentWidth} ${styles.researchValidationInner}`}>
        <div className={styles.researchValidationIntro}>
          <SectionHeading
            body="공식 자료 확인 → 현재 제작 문제의 소규모 적용 → 실제 효용 검증 변화의 제작 기준 반영"
            index="04"
            label="RESEARCH + VALIDATION"
            title="새 방법을 제작 기준으로 올리는 검증 루프"
          />
          <ol className={styles.researchValidationRoute} aria-label="새 방법 검증 순서">
            {[
              ["01", "발견", "새 화면·기능·작업 방식"],
              ["02", "공식 확인", "원문·실제 화면·제약"],
              ["03", "작게 적용", "현재 제작 문제 안의 시험"],
              ["04", "판정", "채택·부분 채택·보류"],
            ].map(([index, title, detail]) => (
              <li key={index}><span>{index}</span><strong>{title}</strong><small>{detail}</small></li>
            ))}
          </ol>
        </div>

        <div className={styles.researchValidationPages}>
          {trendExperiments.map((item, index) => (
            <article className={styles.researchValidationPage} id={`research-${index + 1}`} key={item.signal}>
              <div className={styles.researchValidationMedia}>{visuals[index]}</div>
              <aside className={styles.researchValidationMeta}>
                <header>
                  <span>04—0{index + 1} / {item.signal}</span>
                  <small>{item.status}</small>
                  <h3>{item.title}</h3>
                  <p>CURRENT / {item.appliedAs}</p>
                </header>
                <dl className={styles.researchValidationEvidence}>
                  <div><dt>발견</dt><dd>{item.discovery}</dd></div>
                  <div><dt>공식 확인</dt><dd>{item.origin}</dd></div>
                  <div><dt>작게 적용</dt><dd>{item.test}</dd></div>
                  <div className={styles.researchValidationVerdict}><dt>판정</dt><dd>{item.decision}</dd></div>
                </dl>
                <nav aria-label={`${item.signal} 공식 자료`}>
                  {item.sourceLinks.map(([label, href]) => (
                    <a href={href} key={href} rel="noreferrer" target="_blank">{label} <ExternalLink size={11} /></a>
                  ))}
                </nav>
              </aside>
            </article>
          ))}
        </div>

        <SectionHandoff
          href="#formation"
          label="05 / FORMATION + ITERATION"
          title="제작을 거치며 누적된 다음 기준"
        />
      </Reveal>
    </section>
  );
}

function TrendApplicationSection() {
  return (
    <section className={`${styles.section} ${styles.iterationRebuild} ${styles.handoffSection}`} id="research">
      <Reveal className={`${styles.contentWidth} ${styles.iterationRebuildInner}`}>
        <SectionHeading
          body="실제 MV 제작·폐기·완성에서 드러난 문제만 시간순으로 남깁니다. 도구 재소개는 하지 않습니다."
          index="04"
          label="FORMATION + ITERATION / 2026.05—07"
          title="문제가 다음 제작 기준을 바꾼 과정"
        />

        <nav className={styles.iterationRoute} aria-label="Production system formation route">
          {[
            ["origin-aurora", "ORIGIN", "AURORA V2"],
            ["iteration-root", "01", "ROOT SIGNAL"],
            ["iteration-low", "02", "LOW"],
            ["iteration-pulso", "03", "PULSO"],
            ["iteration-left", "04", "LEFT"],
            ["iteration-ink", "05", "INK"],
          ].map(([href, index, title]) => (
            <a href={`#${href}`} key={href}><span>{index}</span><strong>{title}</strong></a>
          ))}
        </nav>

        <div className={styles.iterationPages}>
          <article className={`${styles.iterationPage} ${styles.iterationOriginPage}`} id="origin-aurora">
            <header className={styles.iterationPageHeader}>
              <div><span>04—00 / AURORA V2</span><b>LEGACY / RETIRED</b></div>
              <h3>반복 단위는 됐지만, 장면까지 규칙으로 고정하니 결과가 닮았습니다</h3>
              <p>13명 identity로 MV·STAGE 반복 제작은 가능했습니다. 장면·포즈·카메라까지 규칙으로 고정하자 결과가 서로 닮아갔고, 현재 제작 경로에서 제외했습니다. <strong>Identity만 재사용하고, 메시지·장면·카메라는 콘텐츠마다 다시 판단</strong>하는 기준으로 바꿨습니다.</p>
            </header>
            <div className={styles.auroraOriginVisual}>
              <figure><img alt="Aurora V2 M01 MV storyboard" src="/ai-exploration/aurora-v2/m01-mv-storyboard.webp" /><figcaption>M01 / MV UNIT</figcaption></figure>
              <figure><img alt="Aurora V2 M01 stage storyboard" src="/ai-exploration/aurora-v2/m01-stage-storyboard.webp" /><figcaption>M01 / STAGE UNIT</figcaption></figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>가능했던 것</span><p>Identity · 반복 제작 단위 재사용</p></div>
              <div><span>문제</span><p>창작 판단까지 재사용 → 장면·포즈 유사</p></div>
              <div className={styles.iterationChanged}><span>다음 기준</span><p>인물 기준만 재사용 · 메시지·장면·카메라는 콘텐츠별 재판단</p></div>
            </div>
          </article>

          <article className={styles.iterationPage} id="iteration-root">
            <header className={styles.iterationPageHeader}>
              <div><span>04—01 / ROOT SIGNAL</span><b>V2 → V11 FINAL</b></div>
              <h3>전체 재검토가 아니라, 변경 구간만의 검토</h3>
              <p>첫 전체 MV를 V2→V11까지 고치며, 매 수정마다 전체를 다시 분석하면 통과 구간까지 반복된다는 문제를 확인했습니다. 레시피·구간 프리뷰·컨택트시트를 검토 캐시로 남기고, <strong>바뀐 구간만</strong> 다시 분석·재생했습니다.</p>
            </header>
            <div className={`${styles.rootSignalCropBoard} ${styles.rootSignalEvidenceStage}`} aria-label="Root Signal V11 edit evidence">
              <figure className={styles.rootTimelineEvidence}><img alt="Middle section of the Root Signal V11 edit review cache" src="/ai-exploration/edit-qc/root-signal-v11-contact-sheet-middle.jpg" /><figcaption>V11 / EDIT REVIEW CACHE · MIDDLE</figcaption></figure>
              <figure className={styles.rootEditWindowSheet}><img alt="Root Signal V11 cached frame sheet from 48 to 60 seconds" src="/ai-exploration/iteration/evolution/root-signal-v11-edit-window-48-60-contact-sheet.jpg" /><figcaption>V11 / 48—60S CACHED FRAME SHEET</figcaption></figure>
              <figure className={styles.rootEditWindowVideo}><video controls muted playsInline poster="/ai-exploration/iteration/evolution/root-signal-v11-edit-window-48-60-poster.jpg" preload="metadata" src="/ai-exploration/iteration/evolution/root-signal-v11-edit-window-48-60.mp4" /><figcaption>V11 / CHANGED WINDOW PLAYBACK</figcaption></figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>문제</span><p>버전마다 전체 재검토 → 통과 구간까지 반복</p></div>
              <div><span>검토 캐시</span><p>V2—V11 레시피 · 구간 프리뷰 · 컨택트시트</p></div>
              <div className={styles.iterationChanged}><span>바뀐 기준</span><p>통과 구간 유지 · 변경 구간만 분석·재생</p></div>
            </div>
          </article>

          <article className={`${styles.iterationPage} ${styles.lowArchivePage}`} id="iteration-low">
            <header className={styles.iterationPageHeader}>
              <div><span>04—02 / LOW</span><b>ARCHIVE · BRIDGE TO PULSO</b></div>
              <h3>얼굴 기준의 유지와, 기계적 비트 그리드의 폐기</h3>
              <p>얼굴 기준은 유지하되 표정·시선은 현재 장면에 맞게 생성했습니다. 비트 위치만 따르는 편집은 폐기하고, <strong>가사 진입·동작 착지·카메라 연결</strong>을 함께 보는 기준으로 바꿨습니다. 이 판단이 Pulso 구간 제작으로 이어집니다.</p>
            </header>
            <div className={styles.lowDecisionStage}>
              <div className={styles.lowLearningPair}>
                <div><span>KEPT</span><h4>FACE-ONLY REFERENCE</h4><p>얼굴 기준 유지 · 표정·시선은 장면별 생성</p></div>
                <div><span>REJECTED</span><h4>MECHANICAL BEAT GRID</h4><p>비트만 맞추지 않고 가사·동작·카메라 연속성을 함께 검토</p></div>
              </div>
            </div>
          </article>

          <article className={styles.iterationPage} id="iteration-pulso">
            <header className={styles.iterationPageHeader}>
              <div><span>04—03 / PULSO</span><b>SECTION-BASED PRODUCTION</b></div>
              <h3>일괄 수정이 아니라, 구간 단위의 통과</h3>
              <p>얼굴 기준 → 핵심 컷 → 영상 프롬프트 → 구간 재생 → 편집 마커를 따로 승인했습니다. 54 패킷 단위로 문제 구간만 복귀합니다.</p>
            </header>
            <div className={styles.pulsoEvidenceStage}>
              <figure className={styles.pulsoPreviewSheet}>
                <img alt="Pulso section contact sheet from 64 to 76 seconds" src="/ai-exploration/iteration/evolution/pulso-section-window-64-76-contact-sheet.jpg" />
                <figcaption>PULSO / 64—76S FRAME SHEET</figcaption>
              </figure>
              <figure className={styles.pulsoEvolutionVideo}>
                <video controls muted playsInline poster="/ai-exploration/iteration/evolution/pulso-section-window-64-76-poster.jpg" preload="metadata" src="/ai-exploration/iteration/evolution/pulso-section-window-64-76.mp4" />
                <figcaption>PULSO / 64—76S SECTION PLAYBACK</figcaption>
              </figure>
              <div className={styles.pulsoPacketReceipt}><span>ACTUAL PRODUCTION UNIT</span><strong>54 KEYFRAME PACKETS</strong><p>구간별 패킷 → 컨택트시트 → 재생 검토 → 필요한 구간만 복귀</p></div>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>문제</span><p>생성·동작·편집을 한 단위에서 판단하면 복귀 위치가 불명확</p></div>
              <div><span>검토 방식</span><p>가사 진입·동작 착지·카메라와 다음 장면을 함께 재생</p></div>
              <div className={styles.iterationChanged}><span>바뀐 기준</span><p>단계별 통과 상태 기록 · 문제 구간·단계만 재실행</p></div>
            </div>
          </article>

          <article className={`${styles.iterationPage} ${styles.leftDiscardPage}`} id="iteration-left">
            <header className={styles.iterationPageHeader}>
              <div><span>04—04 / LEFT IN THAT NIGHT</span><b>FORMALLY DISCARDED / REFERENCE MIXING FAILURE</b></div>
              <h3>레퍼런스 다량 투입과, 역할 분배의 차이</h3>
              <p>군중 전개, 교차로·코트, 오렌지, 배구공처럼 주고받는 마이크 동작을 한 기획에 넣었습니다. AI는 눈에 띄는 요소를 한 흐름에 섞었고, <strong>각 레퍼런스가 어느 장면에서 어떤 역할만 할지</strong>를 제가 먼저 나누지 않은 것이 원인이었습니다. 감정·이야기로 이어지지 않아 전체 MV를 중단하고 30초 테스트만 남겼습니다.</p>
            </header>
            <div className={`${styles.leftEvidenceStage} ${styles.leftDiscardEvidenceStage}`}>
              <figure className={styles.leftUpperBodyContactSheet}>
                <a href="/ai-exploration/iteration/left-in-that-night/upper-body-portrait-board.png" rel="noreferrer" target="_blank">
                  <img alt="Left in That Night five-member upper-body identity contact sheet" src="/ai-exploration/iteration/left-in-that-night/upper-body-portrait-board.png" />
                </a>
              </figure>
              <div className={styles.leftMixedOutputGrid} aria-label="Generated outputs showing mixed reference motifs">
                {[
                  ["ORANGE · TIME OBJECT", "/ai-exploration/iteration/left-in-that-night/generated-scene-orange-table-preview.jpg"],
                  ["STREET · PERFORMANCE SPACE", "/ai-exploration/iteration/left-in-that-night/generated-scene-street-route-preview.jpg"],
                  ["VOLLEYBALL · ACTION MOTIF", "/ai-exploration/iteration/left-in-that-night/generated-scene-volleyball-preview.jpg"],
                  ["BAND · CROWD PERFORMANCE", "/ai-exploration/iteration/left-in-that-night/generated-scene-band-performance-preview.jpg"],
                ].map(([label, src]) => <figure key={label}><img alt={`Left in That Night generated output: ${label}`} src={src} /><figcaption>{label}</figcaption></figure>)}
              </div>
            </div>
            <div className={`${styles.iterationChangeBand} ${styles.leftConclusionBand}`}>
              <div className={styles.leftDiscardStamp}><span>REFERENCE INPUTS</span><strong>MIXED WITHOUT ROLES</strong><small>HOLD → DISCARD</small></div>
              <div><span>문제</span><p>눈에 띄는 요소가 한 흐름에 혼합</p></div>
              <div><span>원인</span><p>역할·적용 구간·우선순위·제외 요소를 먼저 고정하지 않음</p></div>
              <div className={styles.iterationChanged}><span>바뀐 기준</span><p>레퍼런스마다 역할·구간·우선순위·혼합 금지 요소를 먼저 고정</p></div>
            </div>
          </article>

          <article className={styles.iterationPage} id="iteration-ink">
            <header className={styles.iterationPageHeader}>
              <div><span>04—05 / INK</span><b>58 KEYFRAMES · S00—S12 · FINAL MASTER</b></div>
              <h3>이전 실패의 장면 기준과 구간 구조 적용</h3>
              <p>Left에서 실패한 ‘역할 없는 레퍼런스 혼합’을, INK에서는 메시지·역할·구간 행동으로 먼저 잠가 해결했습니다. “남이 정한 선 밖으로 계속 나아간다”에서 인물·오브젝트·공간·행동을 정하고 S00–S12로 나눴습니다. 얼굴 중심 후보는 주체·공간 변화가 약해 다시 섞었고, <strong>통과 키프레임만</strong> 구간 영상·최종 편집으로 이어갔습니다.</p>
            </header>
            <div className={styles.inkEvolutionStage}>
              <figure><img alt="INK S00 to S03 keyframe sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" /><figcaption>LOCKED SYSTEM / S00—S03</figcaption></figure>
              <figure><img alt="INK S11 to S12 keyframe sheet" src="/ai-exploration/ink/contact-sheets/ink-s11-s12-keyframe-sheet-v3.webp" /><figcaption>REVISED SUBJECT MIX / S11—S12</figcaption></figure>
              <figure><img alt="INK final master contact sheet from 130 to 142 seconds" src="/ai-exploration/iteration/evolution/ink-final-window-130-142-contact-sheet.jpg" /><figcaption>FINAL MASTER / 130—142S FRAME SHEET</figcaption></figure>
              <figure className={styles.inkEvolutionVideo}><video controls muted playsInline poster="/ai-exploration/iteration/evolution/ink-final-window-130-142-poster.jpg" preload="metadata" src="/ai-exploration/iteration/evolution/ink-final-window-130-142.mp4" /><figcaption>FINAL MASTER / 130—142S PLAYBACK</figcaption></figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>먼저 고정</span><p>메시지 · 멤버 역할 · 오브젝트 · 공간 · 구간 행동</p></div>
              <div><span>사람이 수정</span><p>얼굴 비중 ↓ · 인과·행동·공간·카메라 ↑</p></div>
              <div className={styles.iterationChanged}><span>확인한 것</span><p>같은 기준이 기획 → 키프레임 → 영상 → 편집까지 이어질 때 한 편의 흐름 유지</p></div>
            </div>
          </article>
        </div>

        <div className={styles.iterationConclusionRebuild}>
          <span>CURRENT STANDARD</span>
          <ol className={styles.iterationCurrentStandardList}>
            <li>Identity·통과 구간은 재사용한다.</li>
            <li>레퍼런스는 개수가 아니라 역할·구간·제외로 고정한다.</li>
            <li>생성·편집은 구간 단위로 통과하고, 문제 단계로만 복귀한다.</li>
          </ol>
        </div>

        <SectionHandoff
          href="#explore"
          label="PUBLIC LINKS"
          title="공개 영상·계정·Signal Deck으로 이어보기"
        />
      </Reveal>
    </section>
  );
}

function LegacyTrendApplicationSection() {
  return (
      <Reveal className={`${styles.contentWidth} ${styles.iterationRebuildInner}`}>
        <SectionHeading
          body="Aurora V2의 반복 제작부터 다섯 번의 MV 제작·폐기·완성까지, 작업에서 드러난 문제를 다음 제작의 기준으로 바꿔 왔습니다."
          index="05"
          label="FORMATION + ITERATION / 2026.05—07"
          title="제작을 거치며 누적된 다음 기준"
        />

        <nav className={styles.iterationRoute} aria-label="Production system formation route">
          {[
            ["origin-aurora", "ORIGIN", "AURORA V2"],
            ["iteration-root", "01", "ROOT SIGNAL"],
            ["iteration-low", "02", "LOW"],
            ["iteration-pulso", "03", "PULSO"],
            ["iteration-left", "04", "LEFT IN THAT NIGHT"],
            ["iteration-ink", "05", "INK"],
            ["iteration-workbench", "CURRENT", "WORKBENCH"],
          ].map(([href, index, title]) => (
            <a href={`#${href}`} key={href}><span>{index}</span><strong>{title}</strong></a>
          ))}
        </nav>

        <div className={styles.iterationPages}>
          <article className={`${styles.iterationPage} ${styles.iterationOriginPage}`} id="origin-aurora">
            <header className={styles.iterationPageHeader}>
              <div><span>ORIGIN / AURORA V2</span><b>REPEATABLE UNIT</b></div>
              <h3>같은 비주얼 아이덴티티를 유지하는 두 가지 제작 단위</h3>
              <p>13명의 멤버 비주얼 아이덴티티를 고정하고 MV와 STAGE를 나눈 조사 → 선택 → 패킷 → 생성 → 사람 검토의 반복 구조.</p>
            </header>
            <div className={styles.auroraOriginVisual}>
              <figure><img alt="Aurora V2 M01 MV storyboard" src="/ai-exploration/aurora-v2/m01-mv-storyboard.webp" /><figcaption>M01 / MV UNIT</figcaption></figure>
              <figure><img alt="Aurora V2 M01 stage storyboard" src="/ai-exploration/aurora-v2/m01-stage-storyboard.webp" /><figcaption>M01 / STAGE UNIT</figcaption></figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>가능했던 것</span><p>비주얼 아이덴티티 정보와 반복 제작 단위의 재사용</p></div>
              <div><span>드러난 한계</span><p>창의적인 결정을 규칙으로 고정할수록 장면과 포즈의 유사성</p></div>
              <div className={styles.iterationChanged}><span>다음 기준</span><p>비주얼 아이덴티티 기준의 재사용, 메시지·장면 방향의 콘텐츠별 재판단</p></div>
            </div>
          </article>

          <article className={styles.iterationPage} id="iteration-root">
            <header className={styles.iterationPageHeader}>
              <div><span>01 / ROOT SIGNAL</span><b>2026.05.24 → V11 FINAL</b></div>
              <h3>첫 전체 MV가 남긴 편집 판단 기록</h3>
              <p>통과한 컷이 이전 렌더에 묻히지 않도록 원본 소스, 검토 기록, 다음 단계 인계 기준을 만들었습니다.</p>
            </header>
            <div className={`${styles.rootSignalCropBoard} ${styles.rootSignalEvidenceStage}`} aria-label="Root Signal storyboard and final edit evidence">
              <figure className={styles.rootTimelineEvidence}><img alt="Root Signal V11 edit timeline contact sheet" src="/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg" /><figcaption>V11 / EDIT TIMELINE CONTACT SHEET</figcaption></figure>
              <figure className={styles.rootStoryboardPrimary}><img alt="Root Signal first storyboard board" src="/ai-exploration/iteration/root-signal/storyboard-sheet-01.webp" /><figcaption>STORYBOARD / SOURCE 01</figcaption></figure>
              <figure className={styles.rootStoryboardSecondary}><img alt="Root Signal second storyboard board" src="/ai-exploration/iteration/root-signal/storyboard-sheet-02.webp" /><figcaption>STORYBOARD / SOURCE 02</figcaption></figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>PROBLEM</span><p>수정이 늘수록 통과한 원본과 선택 이유가 렌더 안에서 사라짐</p></div>
              <div><span>REFERENCE PRINCIPLE</span><p>편집기의 원본 · 시퀀스 · 마커 · 렌더 구조</p></div>
              <div className={styles.iterationChanged}><span>CHANGED</span><p>원본 복귀 · 검토 기록 · QC · 패키지 · 다음 단계 인계</p></div>
            </div>
          </article>

          <article className={`${styles.iterationPage} ${styles.lowArchivePage}`} id="iteration-low">
            <header className={styles.iterationPageHeader}>
              <div><span>02 / LOW</span><b>ARCHIVE ONLY / NO ACTIVE VISUAL</b></div>
              <h3>얼굴 기준의 유지, 기계적 비트 편집의 폐기</h3>
            </header>
            <div className={styles.lowDecisionStage}>
              <figure className={styles.lowBaselineBoard}>
                <img alt="Root Signal visual baseline reused to explain the LOW comparison" src="/ai-exploration/iteration/root-signal/storyboard-sheet-01.webp" />
                <figcaption><span>PREVIOUS BASELINE / ROOT SIGNAL</span><strong>LOW가 유지한 얼굴 기준과 폐기한 편집 기준의 비교</strong></figcaption>
                <b>ARCHIVE ONLY</b>
              </figure>
              <div className={styles.lowLearningPair}>
                <div><span>KEPT</span><h4>FACE-ONLY REFERENCE</h4><p>얼굴 기준은 유지하고 표정과 시선은 현재 장면에 맞게 생성.</p></div>
                <div><span>REJECTED</span><h4>MECHANICAL BEAT GRID</h4><p>비트 위치만 따르지 않고 가사 진입, 몸 동작의 착지, 카메라 연결과 동작의 연속성을 함께 검토.</p></div>
              </div>
            </div>
          </article>

          <article className={styles.iterationPage} id="iteration-pulso">
            <header className={styles.iterationPageHeader}>
              <div><span>03 / PULSO</span><b>SECTION-BASED PRODUCTION</b></div>
              <h3>구간별로 분리한 생성·동작·편집 검토</h3>
              <p>곡 전체를 한 번에 결정하지 않고 얼굴 기준 → 구간 핵심 컷 → 영상 프롬프트 → 재생 검토 → 편집 마커를 차례로 통과시켰습니다.</p>
            </header>
            <div className={styles.pulsoEvidenceStage}>
              <div className={styles.pulsoFaceStrip}>
                {pulsoFaceAssets.slice(0, 8).map((face) => <figure key={face.label}><img alt={`Pulso ${face.label} identity face`} src={face.src} /><figcaption>{face.label}</figcaption></figure>)}
              </div>
              <figure className={styles.pulsoPreviewSheet}>
                <img alt="Pulso final preview contact sheet" src="/ai-exploration/iteration/pulso/final-preview-contact-sheet.jpg" />
                <figcaption>FINAL PREVIEW / 15 REVIEW FRAMES</figcaption>
              </figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>PROBLEM</span><p>생성·동작·편집을 한 단위에서 판단하면 수정 위치가 불명확</p></div>
              <div><span>REFERENCE PRINCIPLE</span><p>음원·프레임 배치 · 구간 재생 QC</p></div>
              <div className={styles.iterationChanged}><span>CHANGED</span><p>얼굴 기준 → 핵심 컷 → 영상 생성 → 재생 검토 → 편집 마커의 독립 승인</p></div>
            </div>
          </article>

          <article className={`${styles.iterationPage} ${styles.leftDiscardPage}`} id="iteration-left">
            <header className={styles.iterationPageHeader}>
              <div><span>04 / LEFT IN THAT NIGHT</span><b>FORMALLY DISCARDED / 2026.07.06</b></div>
              <h3>레퍼런스보다 먼저 필요한 장면의 인과</h3>
              <p>인물 기준과 레퍼런스 분석은 충분했지만 감정의 주체, 보이는 행동, 장면 인과가 정해지지 않았습니다. 더 생성하는 대신 전체 MV 제작을 중단했습니다.</p>
            </header>
            <div className={styles.leftEvidenceStage}>
              <figure className={styles.leftPortraitBoard}><img alt="Left in That Night upper body portrait lock board" src="/ai-exploration/iteration/left-in-that-night/upper-body-portrait-board.png" /><figcaption>IDENTITY / UPPER-BODY PORTRAIT LOCK</figcaption></figure>
              <div className={styles.leftReferencePair}>
                <figure><img alt="Left in That Night Be Who You Are reference analysis" src="/ai-exploration/iteration/left-in-that-night/reference-sheet-be-who-you-are.jpg" /><figcaption>REFERENCE ANALYSIS / MOTIF + CUT</figcaption></figure>
                <figure><img alt="Left in That Night Stereo Hearts reference analysis" src="/ai-exploration/iteration/left-in-that-night/reference-sheet-stereo-hearts.jpg" /><figcaption>REFERENCE ANALYSIS / ACTION + GROUP</figcaption></figure>
              </div>
            </div>
            <div className={`${styles.iterationChangeBand} ${styles.leftConclusionBand}`}>
              <div className={styles.leftDiscardStamp}><span>NOT TOO FEW IDEAS</span><strong>NO CAUSAL SPINE</strong><small>HOLD → DISCARD</small></div>
              <div><span>PROBLEM</span><p>모티브와 공간이 쌓였지만 서로 다음 장면의 원인이 되지 못함</p></div>
              <div><span>STOP RULE</span><p>연결되지 않는다는 피드백이 반복되면 이미지 확장을 중단</p></div>
              <div className={styles.iterationChanged}><span>CHANGED</span><p>감정의 주체 · 구체적 행동 · 인과의 흐름 · 모티프 역할 · 30초 테스트를 보드보다 먼저 승인</p></div>
            </div>
          </article>

          <article className={styles.iterationPage} id="iteration-ink">
            <header className={styles.iterationPageHeader}>
              <div><span>05 / INK</span><b>MESSAGE → VISUAL SYSTEM → FINAL MASTER</b></div>
              <h3>메시지에서 인물·오브젝트·공간·구간으로 이어진 시각 체계</h3>
              <p>“남이 정한 선 밖으로 계속 나아간다”는 문장에서 출발해 네 멤버와 13개 곡 구간의 행동·오브젝트·공간 변화를 연결했습니다.</p>
            </header>
            <div className={styles.inkEvolutionStage}>
              <figure><img alt="INK S00 to S03 keyframe sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" /><figcaption>KEYFRAME REVIEW / S00—S03</figcaption></figure>
              <figure><img alt="INK S04 to S07 keyframe sheet" src="/ai-exploration/ink/contact-sheets/ink-s04-s07-keyframe-sheet-v3.webp" /><figcaption>KEYFRAME REVIEW / S04—S07</figcaption></figure>
              <figure><img alt="INK S08 to S10 keyframe sheet" src="/ai-exploration/ink/contact-sheets/ink-s08-s10-keyframe-sheet-v3.webp" /><figcaption>KEYFRAME REVIEW / S08—S10</figcaption></figure>
              <figure><img alt="INK S11 to S12 keyframe sheet" src="/ai-exploration/ink/contact-sheets/ink-s11-s12-keyframe-sheet-v3.webp" /><figcaption>KEYFRAME REVIEW / S11—S12</figcaption></figure>
            </div>
            <div className={styles.iterationChangeBand}>
              <div><span>LOCKED FIRST</span><p>공개 메시지 · 멤버 역할 · 구간별 행동</p></div>
              <div><span>HUMAN REVIEW</span><p>얼굴 · 인과 · 카메라 · 빛 · 다음 장면 연결</p></div>
              <div className={styles.iterationChanged}><span>PROVED</span><p>메시지 → 시각 체계 → 핵심 컷 → 구간 영상 → 최종 편집본의 연결</p></div>
            </div>
          </article>

          <article className={`${styles.iterationPage} ${styles.workbenchCurrentPage}`} id="iteration-workbench">
            <header className={styles.iterationPageHeader}>
              <div><span>CURRENT / FRONT PLANNING WORKBENCH</span><b>RUNNABLE DEVELOPMENT CHECKPOINT</b></div>
              <h3>기획 맥락과 선택 상태를 모은 한 화면</h3>
              <p>앞선 프로젝트에서 잃어버렸던 메시지·레퍼런스 역할·곡 구간·후보 상태·선택 이유를 다음 이미지·영상 작업이 읽는 현재의 기획 환경입니다.</p>
            </header>
            <div className={styles.workbenchEvolutionVisual}>
              <figure className={styles.workbenchActualFigure}>
                <video controls muted playsInline poster="/ai-exploration/rationale-assets/one-move-planning-last-5s-poster.jpg" preload="metadata" src="/ai-exploration/rationale-assets/one-move-planning-last-5s.mp4" />
                <figcaption>ACTUAL WORKFLOW / LAST 5 SEC</figcaption>
              </figure>
              <figure className={styles.workbenchCurrentFigure}><img alt="ONE MOVE Front Planning Workbench current checkpoint" src={CURRENT_WORKBENCH_IMAGE} /><figcaption>LOCAL APPLICATION / CURRENT CHECKPOINT</figcaption></figure>
              <figure className={styles.workbenchReferenceFigure}><img alt="ComfyUI node workflow used as visual state reference" src="/ai-exploration/workbench/comfyui-z-image-turbo-workflow-reference.png" /><figcaption>REFERENCE / VISUAL STATE + REUSABLE FLOW</figcaption></figure>
            </div>
            <div className={styles.workbenchReferencePrinciples}>
              <div><span>COMFYUI · FIGMA CANVAS</span><p>시각적 상태와 재사용 흐름을 참고</p></div>
              <div><span>EDITING TOOLS</span><p>원본 · 시퀀스 · 마커 · 검토 단위를 참고</p></div>
              <div><span>AGENT SKILLS · HARNESS</span><p>작은 절차 · 상태 · 인계 · 사람 승인 지점을 참고</p></div>
              <div className={styles.workbenchExcluded}><span>NOT ADOPTED</span><p>기획 판단 자동 확정 · 보호 자산 외부 전송 · 자동 유료 실행</p></div>
            </div>
          </article>
        </div>

        <div className={styles.iterationConclusionRebuild}>
          <span>CURRENT STANDARD</span>
          <p>완성과 폐기의 이유를 다음 제작 기준으로 남깁니다.</p>
        </div>

        <SectionHandoff
          href="#explore"
          label="PUBLIC LINKS"
          title="공개 영상·계정·Signal Deck으로 이어보기"
        />
      </Reveal>
  );
}

function DecisionRecordSection() {
  return (
    <section className={`${styles.section} ${styles.archiveSection} ${styles.handoffSection}`} id="updates">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="하나의 결과에서 끝내지 않고, 실제 제작의 실패와 04에서 검증한 변화를 다음 작업이 다시 사용할 수 있는 기준으로 남깁니다."
          index="05A"
          label="SYSTEM UPDATE RECORD"
          title="실험의 기준을 기록하고 다음 경험으로 확장하는 구조"
        />

        <div className={styles.updateLoop} aria-label="System update loop">
          <div><span>01</span><strong>문제</strong></div><i aria-hidden="true">→</i>
          <div><span>02</span><strong>실험</strong></div><i aria-hidden="true">→</i>
          <div><span>03</span><strong>발견</strong></div><i aria-hidden="true">→</i>
          <div><span>04</span><strong>바꾼 기준</strong></div><i aria-hidden="true">→</i>
          <div><span>05</span><strong>다음 제작</strong></div>
        </div>

        <div className={styles.updateEvidenceRail}>
          <figure>
            <img alt={`${formationJourney[0].project} formation evidence`} src={formationJourney[0].image ?? undefined} />
            <figcaption><span>문제</span><strong>{formationJourney[0].project}</strong></figcaption>
          </figure>
          <figure>
            <img alt={`${formationJourney[1].project} formation evidence`} src={formationJourney[1].image ?? undefined} />
            <figcaption><span>실험</span><strong>{formationJourney[1].project}</strong></figcaption>
          </figure>
          <figure>
            <img alt={`${formationJourney[3].project} formation evidence`} src={formationJourney[3].image ?? undefined} />
            <figcaption><span>발견</span><strong>{formationJourney[3].project}</strong></figcaption>
          </figure>
          <figure>
            <img alt={`${formationJourney[4].project} formation evidence`} src={formationJourney[4].image ?? undefined} />
            <figcaption><span>바꾼 기준</span><strong>{formationJourney[4].project}</strong></figcaption>
          </figure>
          <figure>
            <img alt={`${formationJourney[5].project} formation evidence`} src={formationJourney[5].image ?? undefined} />
            <figcaption><span>다음 제작</span><strong>{formationJourney[5].project}</strong></figcaption>
          </figure>
        </div>

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
          <p><strong>원본은 작업별 출처와 함께 보존하고, 여러 작업에서 반복 확인된 결정만 다음 제작 기준으로 옮깁니다.</strong> 전체 skill·prompt·운영 문서는 공개하지 않고 선택과 변경 이유를 확인할 수 있는 최소한의 발췌만 제공합니다.</p>
        </div>

        <SectionHandoff
          href="#origin"
          label="FORMATION + ITERATION / 2026.05—07"
          title="문제가 다음 제작 기준을 바꾼 여섯 번의 업데이트"
        />
      </Reveal>
    </section>
  );
}

function ResultCarousel() {
  return (
    <div className={styles.resultCarousel}>
      {resultSlides.map((slide) => (
        <article className={styles.resultFilm} key={slide.id}>
          <div className={styles.resultMediaStage}>
            <YouTubeEmbed
              className={styles.resultVideoEmbed}
              title={`${slide.title} public ${slide.platform} embed`}
              videoId={slide.videoId}
            />
          </div>
          <div className={styles.resultCarouselMeta}>
            <div>
              <span>{slide.label}</span>
              <h3>{slide.title}</h3>
              <p>{slide.detail}</p>
            </div>
            <div className={styles.resultCarouselMessage}><p>{slide.message}</p></div>
            <a href={slide.href} rel="noopener" target="_blank">{slide.platform}에서 보기 <ExternalLink size={14} /></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function ValidationSection() {
  return (
    <section className={`${styles.section} ${styles.validationSection}`} id="validation">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="대표 완성작 INK와 개인 비공식 Spec Commercial, 그리고 추가 Loom MV입니다."
          index="01"
          label="AUTOMATION SYSTEM / RESULTS"
          title="완성한 Loom MV 3편과 개인 비공식 Spec Commercial 2편"
        />

        <ResultCarousel />

        <div className={styles.cfIntro}>
          <span>LOOM MEMBER SPEC COMMERCIAL</span>
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
                <h3>{item.titleBreakAfter ? <>{item.titleBreakAfter}<br />{item.title.slice(item.titleBreakAfter.length).trimStart()}</> : item.title}</h3>
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
          <p>Cola와 Headset은 Loom 멤버를 활용해 개인적으로 만든 비공식 Spec Commercial입니다. 실제 브랜드 협업이나 공식 캠페인, 성과 사례가 아닙니다.</p>
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
          body="결과에서 제작 방식으로 넘어가기 전, INK에 쓰인 역할 분담만 짧게 남깁니다."
          index="01B"
          label="INK · PRODUCTION SUMMARY"
          title="PLAN · COMPARE · REVIEW"
        />

        <ol className={styles.inkGateRail} aria-label="INK production role split">
          <li>
            <span>01 / PLAN</span>
            <strong>메시지 · 오브젝트 · 멤버 역할</strong>
            <small>준비 · 레퍼런스 재사용 · 구간 정리</small>
          </li>
          <li>
            <span>02 / COMPARE</span>
            <strong>구간별 keyframe 후보</strong>
            <small>컨택트시트 · 프리뷰 · QC 자료</small>
          </li>
          <li>
            <span>03 / REVIEW</span>
            <strong>재생 · 최종 마스터</strong>
            <small>핵심 컷 · 편집 · 공개 여부</small>
          </li>
        </ol>

        <div className={styles.inkToHarness}>
          <span>RESULT → CURRENT PRODUCTION SYSTEM</span>
          <p>이 분담을 02의 단계·인계 구조로 확장했습니다.</p>
          <div className={styles.inkToHarnessActions}>
            <EvidenceLink label="INK 기획·결과 기록" slug="ink-output-registry" />
            <a href="#harness">02 / 제작 방식 보기 <ArrowDown size={16} /></a>
          </div>
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
          index="01A"
          label="WEB EXTENSION · LOOM WEBPAGE"
          title="Loom의 세계를 다시 탐색하는 웹페이지"
        />
        <div className={styles.loomFeature}>
          <figure>
            <a className={styles.loomSignalDeckLink} href={LOOM_SIGNAL_DECK_URL} rel="noopener" target="_blank">
              <img alt="Loom Signal Deck main page" src="/ai-exploration/signal-deck/loom-signal-deck-home.png" />
            </a>
            <figcaption><span>LOOM WEBPAGE</span><a href={LOOM_SIGNAL_DECK_URL} rel="noopener" target="_blank">LOOM SIGNAL DECK <ExternalLink size={12} /></a></figcaption>
          </figure>
          <div className={styles.loomExperienceList}>
            {loomExperience.map(([label, body]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{body}</p>
              </div>
            ))}
            <small>투표와 메시지는 공개 서비스 성과와 구분되는 웹페이지 내 참여 요소입니다. 콘텐츠 감상 이후 선택과 참여로 넘어가는 방식을 구현했습니다.</small>
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
          body="완성 MV와 Loom Webpage 뒤에 있던 참여 가설과, 공개 투표 성과와 구분되는 웹페이지 구현 범위를 정리했습니다."
          index="APPENDIX A"
          label="LOOM · CONTENT IP · PARTICIPATION"
          title="Loom을 콘텐츠 IP로 확장한 가설"
        />

        <div className={styles.loomAppendixThesis}>
          <div>
            <span>STARTING HYPOTHESIS</span>
            <h3>얼굴보다 먼저 기억되는 메시지와 역할</h3>
          </div>
          <p>13명의 identity 고정에서 끝나지 않고 Root Signal·Pulso·INK처럼 서로 다른 메시지와 장면을 가진 콘텐츠로 확장. 다음 질문은 시청자가 결과를 보는 데서 끝나지 않고 다음 콘텐츠의 역할과 방향에 참여할 수 있는가에 대한 탐색.</p>
        </div>

        <div className={styles.loomParticipationLoop}>
          <article><span>01 / CONTENT</span><strong>메시지와 역할이 읽히는 MV·클립</strong><p>선택할 이유가 먼저 보이는 콘텐츠.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02 / ONE QUESTION</span><strong>다음 역할·감정·조합에 관한 한 가지 질문</strong><p>인기 순위가 아닌 콘텐츠를 본 사람이 답할 수 있는 질문.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03 / LOCAL RECEIPT</span><strong>남긴 선택과 다음 확인 시점</strong><p>자동 설정이 아닌 사람 검토 전의 로컬 기록.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>04 / NEXT CONTENT</span><strong>검토한 방향의 다음 콘텐츠 후보</strong><p>참여 신호를 그대로 사용하지 않고 확인한 방향만 다음 제작 후보로 전달.</p></article>
        </div>

        <div className={styles.loomVoteProof} id="appendix-loom-vote">
          <figure>
            <img alt="Actual Loom Signal Deck vote page" src="/ai-exploration/signal-deck/loom-signal-deck-vote.png" />
            <figcaption>LOOM SIGNAL DECK / ACTUAL VOTE PAGE</figcaption>
          </figure>
          <div className={styles.loomVoteContext}>
            <span>ACTUAL IMPLEMENTATION / LOOM SIGNAL DECK</span>
            <small>/VOTE · LOCAL PROTOTYPE</small>
            <h3>실제 투표 화면에 두 가지 선택 흐름을 구현</h3>
            <div className={styles.loomVoteFacts}>
              <p><b>01</b><strong>NEXT TRACK</strong><span>트랙 단서를 남기고 다음 멤버 또는 조합을 선택</span></p>
              <p><b>02</b><strong>IDENTITY THREAD</strong><span>멤버별 다음 비주얼·서사 방향을 선택</span></p>
              <p><b>03</b><strong>LOCAL RECEIPT</strong><span>브라우저에 선택을 저장하고 사람의 최종 검토와 분리</span></p>
            </div>
            <a className={styles.loomVoteLink} href="https://loom-signal-deck.vercel.app/vote" rel="noreferrer" target="_blank">실제 투표 페이지 열기 <ExternalLink size={14} /></a>
          </div>
        </div>

        <div className={styles.appendixBoundary}>
          <ShieldCheck size={20} />
          <p><strong>현재 확인한 범위:</strong> Signal Deck 안의 멤버 선택 투표, 다음 트랙 후보, 선택 영수증의 로컬 작동. <strong>아직 확인하지 않은 범위:</strong> 공개 참여율, 재방문, 투표가 실제 콘텐츠 선택에 미치는 효과.</p>
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
          body="실제 제작에서 통과한 기준을 다음 작업이 바로 읽을 수 있도록 문서와 실행 단위로 나눠 관리합니다."
          index="APPENDIX C"
          label="HARNESS · SKILL MANAGEMENT"
          title="다음 작업에 넘기는 기준 문서"
        />

        <div className={styles.harnessKnowledgeMap}>
          <div className={styles.harnessKnowledgeLead}>
            <span>KNOWLEDGE MAP / 다음 세션을 위한 작업 기준</span>
            <h3>다음 작업에 넘기는 문서 구조</h3>
            <p>상위 원칙, 전체 지도, 실행 절차, 데이터 기준, 반복 스크립트, 변경 이유를 나눠 둡니다. 같은 규칙을 여러 문서에 복제하지 않고 바뀐 단계와 연결된 문서만 함께 고칩니다.</p>
          </div>
          <div className={styles.harnessKnowledgeLayers}>
            <article><span>AUTHORITY</span><strong>AGENTS.md · policies/</strong><p>항상 지켜야 할 창작·보안·승인 경계</p></article>
            <article><span>MAP</span><strong>wiki/production-system.md</strong><p>전체 단계와 상세 문서의 위치</p></article>
            <article><span>PROCEDURE</span><strong>skills/*/SKILL.md</strong><p>현재 작업에서 따라야 할 실행 절차</p></article>
            <article><span>CONTRACT</span><strong>schemas/*.schema.json</strong><p>단계 사이의 입력·결과·상태 기준</p></article>
            <article><span>EXECUTION</span><strong>scripts/ · registry</strong><p>검증·컨택트시트·프리뷰·패키지 준비</p></article>
            <article><span>MEMORY</span><strong>Git · decision record</strong><p>무엇을 왜 바꿨는지와 이전 기준</p></article>
          </div>
        </div>

        <div className={styles.appendixBoundary}>
          <ShieldCheck size={20} />
          <p>외부의 새 방법은 곧바로 현재 기준이 되지 않습니다. 출처·품질·권한·비용·보호 자산 경계를 확인하고 실제 제작 문제를 해결한 변화만 Harness에 반영합니다.</p>
        </div>
      </Reveal>
    </section>
  );
}

export function AiExplorationPortfolioPage() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 180 });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const probe = window.scrollY + window.innerHeight * 0.34;
      let nextSection = "";

      portfolioNavigation.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= probe) nextSection = id;
      });

      setActiveSection((current) => current === nextSection ? current : nextSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className={styles.page}>
      <motion.div className={styles.progress} style={{ scaleX: progress }} />

      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">
          YUMINSEOK / AI RESEARCH & EXPLORATION
        </Link>
        <nav aria-label="AI exploration sections">
          {portfolioNavigation.map(([id, label]) => (
            <a aria-current={activeSection === id ? "location" : undefined} href={`#${id}`} key={id}>{label}</a>
          ))}
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
          <div className={styles.heroAnswer}>
            <span>CORE APPROACH</span>
            <strong>AI가 사람의 판단을 대신하는 것이 아니라, 같은 의도와 기준을 공유하며 표현의 가능성을 넓히는 제작 방식을 탐구했습니다.</strong>
          </div>
          <div className={styles.heroActions}>
            <a href="#validation">완성 결과 보기 <ArrowDown size={17} /></a>
            <a href="#harness">제작 방식 보기 <ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <div className={styles.heroFoot}>
          <span>PERSONAL AI CONTENT PROJECT</span>
          <span>RESEARCH · PLAN · MAKE · REVIEW</span>
          <span>신입 · 졸업예정</span>
        </div>
      </section>

      <section className={styles.executiveBand}>
        <Reveal className={styles.contentWidth}>
          <div className={styles.executiveLead}>
            <span>COMPLETED OUTPUTS</span>
            <p>
              Loom MV 3편 · 개인 비공식 Spec Commercial 2편 · Loom Webpage 1개
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
      <ProductionHarnessSection />
      <CurrentSystemSection />

      <TrendApplicationSection />

      {false ? (
        <>
          <DecisionRecordSection />

          <section className={`${styles.section} ${styles.trendSection} ${styles.handoffSection}`} id="origin">
        <Reveal className={`${styles.contentWidth} ${styles.formationOrigin}`}>
          <SectionHeading
            body="AURORA V2에서 Front Planning Workbench까지, 문제·실험·발견·바꾼 기준·다음 제작의 순서로 이어진 여섯 번의 업데이트."
            index="05B"
            label="FORMATION + ITERATION / 2026.05—07"
            title="문제가 다음 제작 기준을 바꾼 여섯 번의 업데이트"
          />

          <div className={styles.originThesis}>
            <span>FIRST QUESTION</span>
            <blockquote>
              같은 identity를 유지하면서 콘텐츠마다 다른 메시지와 장면을 만드는 방법
            </blockquote>
          </div>

          <nav className={styles.developmentSummaryRail} aria-label="발전 과정 핵심 요약">
            {formationJourney.map((item) => (
              <a href={`#formation-${item.index}`} key={item.index}>
                <small>{item.index} / {item.period}</small>
                <strong>{item.project}</strong>
                <span>{item.change}</span>
              </a>
            ))}
          </nav>

          <div className={styles.formationJourney}>
            {formationJourney.map((item) => (
              <article className={styles.formationStep} id={`formation-${item.index}`} key={item.index}>
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
                    <div className={styles.formationChange}><span>다음에 바꾼 것</span><p>{item.change}</p></div>
                    {item.evidenceSlug ? <EvidenceLink label="실제 구조와 판단 근거 보기" slug={item.evidenceSlug} /> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.formationOutcome}>
            <div className={styles.formationOutcomeHeading}>
              <span>CURRENT / LOOM + WORKBENCH</span>
              <p>INK에서 먼저 정한 메시지, 멤버, 오브젝트, 공간, 구간별 스토리라인. 현재는 이를 Workbench에서 다루고 Harness가 이미지·영상·편집 작업과 인계를 관리.</p>
            </div>
            <div className={styles.formationOutcomeRail}>
              <div><span>01</span><strong>IDENTITY REFERENCE</strong><small>얼굴과 스타일 기준 재사용</small></div>
              <div><span>02</span><strong>WORKBENCH</strong><small>메시지 · 타겟 · 레퍼런스 · 스토리라인</small></div>
              <div><span>03</span><strong>IMAGE & VIDEO</strong><small>사람 검토 · 이미지 · 구간 영상</small></div>
              <div><span>04</span><strong>EDIT & QC</strong><small>편집 후보 · 재생 검토 · 최종 QC</small></div>
            </div>
            <a className={styles.auroraTikTok} href={LOOM_TIKTOK_URL} rel="noreferrer" target="_blank">
              Loom 제작 결과 / @loom_mm <ExternalLink size={14} />
            </a>
          </div>

          <SectionHandoff
            href="#explore"
            label="PUBLIC LINKS"
            title="공개 영상·계정·Signal Deck으로 이어보기"
          />
        </Reveal>
          </section>
        </>
      ) : null}

      <section className={styles.closingSection}>
        <Reveal className={`${styles.contentWidth} ${styles.closingPage} ${styles.closingPageSingle}`}>
          <span className={styles.closingLabel}>AI RESEARCH & EXPLORATION / CONCLUSION</span>
          <h2>하나의 메시지는 어디까지 하나의 경험이 될 수 있을까?</h2>
          <p className={styles.closingAnswer}>AI가 사람의 판단을 대신하는 것이 아니라, 같은 의도와 기준을 공유하며 표현의 가능성을 넓히는 제작 방식을 탐구했습니다.</p>

          <div className={styles.brandTranslation}>
            <div className={styles.brandTranslationLead}>
              <span>FROM EXPLORATION TO BRAND EXPERIENCE</span>
              <p>새 기술을 기능 목록으로 소비하지 않고, 실제 제작의 문제에 적용해 선택과 실패의 이유를 다음 실험으로 연결했습니다.</p>
              <small>확인하지 않은 가능성은 성과로 말하지 않고, 다음 실험 과제로 구분합니다.</small>
            </div>
            <div className={styles.brandTranslationRows}>
              <article><span>EXPLORE · TEST</span><strong>새 AI 도구를 제작 문제에 맞춰 비교하고, 성공과 실패의 이유를 다음 실험 기준으로 바꿨습니다.</strong></article>
              <article><span>MAKE · SELECT</span><strong>Loom MV 3편·개인 비공식 Spec Commercial 2편·웹 프로토타입을 만들며 메시지·장면·최종 선택은 사람이 맡았습니다.</strong></article>
              <article><span>ARCHIVE · SHARE</span><strong>Workbench·Harness·컨택트시트에 입력·결과·통과·보류 이유를 남겨 다른 사람이 검토하고 이어받을 수 있게 했습니다.</strong></article>
              <article><span>NEXT · APPLY</span><strong>다음 프로젝트에서도 기술보다 해결할 문제를 먼저 정하고, 작게 시험해 확인한 방식만 실제 제작으로 확장하겠습니다.</strong></article>
            </div>
          </div>
        </Reveal>
      </section>

      <SignalDeckOutcomeSection />
      <PublicLinksSection />

      <footer className={styles.footer}>
        <div>
          <span>YUMINSEOK / AI RESEARCH & EXPLORATION</span>
          <p>Workbench · Harness · Python 도구로 반복 제작을 줄인 AI Research & Exploration.</p>
        </div>
        <div className={styles.footerActions}>
          <Link href="/"><Home size={15} /> 전체 포트폴리오</Link>
          <Link href="/loom-workflow">Loom 제작 사례 <ArrowRight size={15} /></Link>
        </div>
      </footer>
    </main>
  );
}
