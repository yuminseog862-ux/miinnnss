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
import type { PropsWithChildren } from "react";

import {
  getEvidenceDisclosureLabel,
  getEvidenceSource,
} from "@/lib/ai-exploration/motion-bank-sources";

import styles from "./ai-exploration-portfolio.module.css";

const AHEYA_ARCHIVE_URL = "https://github.com/aheyabaraya/aheya-public-archive";

const executiveProofs = [
  ["1", "MESSAGE SPINE", "소수의 핵심 레퍼런스에서 완성형 MV까지"],
  ["13", "SONG SECTIONS", "장면 · 이미지 · 영상 · 편집 단위"],
  ["13 + 13", "AURORA UNITS", "cinematic MV · choreography STAGE"],
  ["3 + 2", "FINAL OUTPUTS", "Loom MV 3편 · product spec 2편"],
];

const systemRoles = [
  ["01", "WORKBENCH", "입구", "기획·맥락·레퍼런스를 한 화면에서 조립"],
  ["02", "HARNESS", "뼈대", "제작 단계·상태·산출물·기록을 연결"],
  ["03", "PYTHON MEDIA TOOLCHAIN", "실행부", "프레임·컨택트시트·라벨·비트·편집 보조"],
  ["04", "LOOM CONTENT", "작동 증거", "이미지·영상·MV·웹 콘텐츠로 결과 확인"],
];

const lineageCases = [
  {
    index: "A",
    project: "AHEYA",
    role: "AUTOMATION START",
    title: "마케팅 콘텐츠를 반복 생산하려는 질문에서 시작했습니다.",
    body: "AHEYA를 AI와 함께 개발하고 이미지·짧은 클립을 만들며, 프롬프트 한 줄보다 목적·이전 결정·현재 상태를 함께 넘기는 편이 의도를 오래 유지한다는 점을 확인했습니다.",
    result: "GPT Image API와 세션 기반 제작 → IDOL 클립과 전체 MV 제작 질문으로 이동",
    image: "/aheya/aheyabaraya-homepage-2026-04-28.png",
    evidenceSlug: undefined,
  },
  {
    index: "B",
    project: "AB_AURORA",
    role: "WORKBENCH PREDECESSOR",
    title: "brief를 방향과 후보로 넓히되, 선택은 사람에게 남겼습니다.",
    body: "brief → direction → Top-3 candidate → human selection → package로 이어지는 흐름을 만들었습니다. 현재 Workbench가 레퍼런스와 방향을 먼저 조립하고 선택 상태를 다음 단계에 넘기는 구조의 전신입니다.",
    result: "생성보다 먼저 direction을 canonical source로 고정",
    image: "/ai-exploration/lineage/ab-aurora-preview.png",
    evidenceSlug: "ab-aurora-direction-selection-flow",
  },
  {
    index: "C",
    project: "AURORA V2",
    role: "LOOM CONTENT PREDECESSOR",
    title: "같은 얼굴을 두 종류의 제작 단위에서 유지해보았습니다.",
    body: "Loom의 13개 얼굴 레퍼런스를 기준으로 13개 cinematic MV와 13개 choreography STAGE 단위를 구성했습니다. 정체성 기준과 장면·동작의 기능을 분리한 구조가 이후 노래 구간별 Loom 제작으로 이어졌습니다.",
    result: "13 MV + 13 STAGE / identity continuity와 반복 제작 단위 확인",
    image: "/ai-exploration/aurora-v2/m01-mv-storyboard.webp",
    evidenceSlug: "aurora-v2-stage-decision-log",
  },
  {
    index: "D",
    project: "AB_LUNA",
    role: "HARNESS MEMORY PREDECESSOR",
    title: "여러 AI의 결과를 다음 작업이 다시 읽게 만들었습니다.",
    body: "흩어진 산출물을 Project Brief, Current State, Artifact Index, Handoff로 나누었습니다. 현재 Harness가 맥락·blocker·다음 행동·산출물 위치를 기록하고 다음 단계가 이어받는 방식의 전신입니다.",
    result: "scattered outputs → readable state → next action → handoff",
    image: "/ab-luna/source-assets/abluna-4.webp",
    evidenceSlug: "ab-luna-state-handoff-lineage",
  },
];

const cfCases = [
  {
    index: "01",
    label: "COLA / MEMORY-VENDING",
    status: "PERSONAL SPEC COMMERCIAL · UNOFFICIAL",
    title: "제품을 기억을 꺼내는 장치의 원인과 결과로 두었습니다.",
    body: "단순한 제품 beauty cut이 아니라, 버튼을 누르면 눈과 기억 카드가 반응하고 같은 캔이 조립·배출되는 규칙을 만들었습니다. 16개 최종 키프레임을 네 개의 영상 작업으로 묶어 19.58초 세로 영상으로 닫았습니다.",
    flow: "BUTTON → EYE → MEMORY LAYERS → CAN BUILD → RETRIEVE",
    metric: "16 KEYFRAMES / 4 STORYBOARD JOBS / 19.58S",
    video: "/ai-exploration/cf/cola-memory-vending-final.mp4",
    poster: "/ai-exploration/cf/cola-memory-vending-board.jpg",
    evidenceSlug: "cf-cola-message-causality",
  },
  {
    index: "02",
    label: "HEADSET / SELECTIVE LISTENING",
    status: "PERSONAL SPEC COMMERCIAL · UNOFFICIAL",
    title: "제품 기능을 미술관 공간 안의 보이는 규칙으로 바꿨습니다.",
    body: "사람들의 소음은 탁한 종이로, 초상화의 대화는 깨끗한 종이로 보이게 했습니다. 헤드셋의 이어컵이 두 흐름을 가르는 경계가 되며, 제품이 공간의 소리 규칙을 바꾸는 17.92초 장면으로 구성했습니다.",
    flow: "PUBLIC CHATTER → EARCUP BOUNDARY → WANTED VOICE REMAINS",
    metric: "12 KEYFRAMES / 4 STORYBOARD JOBS / 17.92S",
    video: "/ai-exploration/cf/headset-selective-listening-final.mp4",
    poster: "/ai-exploration/cf/headset-selective-listening-board.png",
    evidenceSlug: "cf-headset-space-rule",
  },
];

const originSteps = [
  {
    index: "01",
    label: "AHEYA / MARKETING CONTENT",
    title: "서비스를 알리기 위한 이미지와 짧은 클립을 만들었습니다.",
    body: "GPT Image API와 세션을 오가며, 한 장의 프롬프트보다 목적과 이전 판단을 이어 주는 방식에 주목했습니다.",
  },
  {
    index: "02",
    label: "CONTEXT / GENERATION",
    title: "맥락을 공유하면 반복 제작도 의도를 이어 갈 수 있을까 물었습니다.",
    body: "매번 프롬프트를 새로 쓰는 대신, 콘텐츠의 목적·인물·이전 선택을 같은 흐름에서 생성에 넘겼습니다.",
  },
  {
    index: "03",
    label: "AURORA / 26 UNITS",
    title: "짧은 클립의 구조를 13 MV와 13 STAGE 제작 단위로 넓혔습니다.",
    body: "Loom의 13개 얼굴 레퍼런스를 기준으로, 같은 정체성이 서로 다른 장면과 동작에서도 유지되도록 제작 단위를 구성했습니다.",
  },
  {
    index: "04",
    label: "FULL MV / HYPOTHESIS",
    title: "반복 생산보다 하나의 메시지를 끝까지 만드는 쪽으로 질문을 바꿨습니다.",
    body: "콘텐츠의 양만 늘리는 방식이 반응을 지속시키지 못하자, 전체 곡을 기획·생성·편집하는 제작 방식으로 이동했습니다.",
  },
];

const trendExperiments = [
  {
    status: "채택·재구성",
    signal: "VISUAL WORKFLOW / COMFYUI · GROK IMAGINE · FIGMA",
    discovery: "생성 과정과 후보 관계를 보이는 화면",
    question: "생성 노드가 아니라 기획 맥락과 후보의 관계를 한 화면에서 이어 볼 수 있을까?",
    origin: "X에서 ComfyUI의 node workflow와 생성 UI 변화를 발견한 뒤 공식 문서와 실제 화면을 확인했습니다. Grok Imagine의 대화형 생성, Figma의 canvas 구성까지 함께 보며 제 작업에서 필요한 것은 모델 연결선보다 기획 기억과 선택 상태를 보이는 화면이라고 판단했습니다.",
    test: "Live Plan, Planning Canvas, Sequence Rail, Contact Sheet, Codex·Grok 세션을 연결해 레퍼런스의 역할·곡 구간·후보 상태·보류 이유를 같은 화면에서 조립했습니다.",
    decision: "시각적 상태 관리와 재사용 가능한 작업 흐름은 채택했습니다. ComfyUI node graph의 복제, Workbench의 직접 유료 생성, 기획 판단의 자동 확정은 제외했습니다.",
    next: "생성보다 앞단의 기획과 선택을 고정하는 Front Planning Workbench로 발전했습니다.",
    evidenceSlug: "front-planning-workbench-checkpoint",
    sourceLinks: [
      ["ComfyUI / Workflow", "https://docs.comfy.org/development/core-concepts/workflow"],
    ],
  },
  {
    status: "부분 채택",
    signal: "EDITING GRAMMAR / PREMIERE · AFTER EFFECTS · CAPCUT",
    discovery: "전문 편집 도구의 작업 구조",
    question: "생성보다 오래 걸리는 후보 비교와 컷 연결을 필요한 기능만으로 줄일 수 있을까?",
    origin: "Premiere Pro와 After Effects의 Source·Program, sequence·timeline, marker, render·QC 구조를 역으로 따라가며, 완성형 앱보다 제 제작에 필요한 편집 기능을 작업 단위로 나눴습니다. CapCut에서는 짧은 콘텐츠의 빠른 실행 흐름을 함께 살펴봤습니다.",
    test: "ffprobe·OpenCV·librosa·ffmpeg로 소스, 프레임, 움직임, 비트를 읽고 컨택트시트·roughcut·QC 자료를 만들었습니다.",
    decision: "분석값은 관찰을 돕지만 좋은 컷을 결정하지 않습니다. 최종 선택·순서·타이밍은 직접 책임하고, 전문 편집기 전체를 대체한다고 주장하지 않습니다.",
    next: "이 역탐구는 source intake → 분석·컨택트시트 → recipe·roughcut → playback review → final QC로 이어지는 편집 하네스와 로컬 Edit Desk로 발전했습니다.",
    evidenceSlug: "idol-edit-desk-implementation",
    sourceLinks: [
      ["Adobe / Source & Program", "https://helpx.adobe.com/uk/premiere/desktop/get-started/source-and-program-monitor-adjustments/about-source-monitor-and-program-monitor.html"],
      ["Adobe / After Effects Workflow", "https://helpx.adobe.com/after-effects/desktop/get-started/understand-after-effects-workflow/workflows.html"],
    ],
  },
  {
    status: "채택·보류 분리",
    signal: "AGENT HARNESS / ANTHROPIC SKILLS · MCP",
    discovery: "모델보다 오래 남는 맥락·인계·판정 구조",
    question: "여러 세션과 도구를 지나도 이전 판단을 잃지 않고, 새 기능은 안전하게 붙일 수 있을까?",
    origin: "X에서 Agent Skills·MCP·long-running harness 흐름을 발견하고 Anthropic의 영문 강연·엔지니어링 문서와 공개 skill 구조를 확인했습니다. Higgsfield의 MCP·API·CLI도 공식 자료로 조사해 기능뿐 아니라 권리·비용·외부 전송 위험까지 함께 검토했습니다.",
    test: "Codex와 Grok의 맥락은 대화에 남기고, 반복 절차는 작은 skill과 reference로 분리했습니다. stage registry, state·handoff, 사람 승인 gate, provider-neutral request 계약을 로컬 하네스에 연결했습니다.",
    decision: "절차와 실행 도구를 분리하고, 구조화된 인계와 점진적 공개는 채택했습니다. 보호 자산의 외부 MCP 전송과 자동 유료 실행은 보류하거나 금지했습니다.",
    next: "8개 phase·29개 semantic stage와 지속적인 변경 기록을 가진 IDOL Production System으로 이어졌습니다.",
    evidenceSlug: "idol-harness-ecosystem-adoption",
    sourceLinks: [
      ["Anthropic / Long-running Harness", "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"],
      ["Anthropic / Agent Skills", "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"],
    ],
  },
];

const inkMethod = [
  {
    label: "01 / MESSAGE",
    title: "곡을 구간으로 나누고 감정의 흐름을 먼저 정했습니다.",
    body: "레퍼런스의 표면을 복제하지 않고, 모티브가 쓰인 이전 콘텐츠까지 거슬러 올라가 장면의 역할과 감정을 정리했습니다.",
  },
  {
    label: "02 / VISUAL SYSTEM",
    title: "인물·카메라·빛·오브젝트가 맡을 일을 나눴습니다.",
    body: "영상의 주요 프레임과 이미지 자료를 컨택트시트로 묶어, AI와 같은 화면을 보며 구도와 연결 가능성을 검토했습니다.",
  },
  {
    label: "03 / SELECTION",
    title: "많이 만드는 것보다 무엇을 남길지 결정했습니다.",
    body: "후보를 곡 구간별로 라벨링하고 얼굴, 연속성, 물리성, 감정의 방향을 기준으로 통과·보류·수정했습니다.",
  },
];

const loomExperience = [
  ["IDENTITY", "13명의 얼굴·스타일 기준을 한 아카이브에서 확인"],
  ["TRACK", "Root Signal, Pulso, INK의 영상과 제작 맥락을 트랙별로 연결"],
  ["CONTENT", "멤버별 TikTok 클립과 스토리보드·스테이지 컷을 함께 정리"],
  ["INTERACTION", "Harne identity vote, 멤버 메시지, 다음 트랙 투표를 로컬 프로토타입으로 구현"],
];

const evolution = [
  {
    date: "2026.05.24",
    label: "ROOT SIGNAL",
    state: "완성 / 편집 규칙 채택",
    title: "첫 전체 곡을 끝까지 연결했습니다.",
    test: "생성한 이미지와 영상 source를 한 곡의 흐름으로 편집하고, v11 final master까지 반복 검토했습니다.",
    finding: "완성 자체보다 어떤 source를 왜 남겼는지 다시 찾을 수 있는 edit recipe와 QC 기록이 중요했습니다.",
    change: "원본 source, 컷 선택, 수정 구간, final package를 다음 작업에서도 읽을 수 있게 남겼습니다.",
  },
  {
    date: "2026.05.26",
    label: "LOW",
    state: "폐기 / 얼굴·편집 규칙 유지",
    title: "얼굴은 붙잡았지만, 비트만 따라 자른 영상은 살아나지 않았습니다.",
    test: "face-only reference로 멤버 정체성을 유지하고, 분석한 beat grid를 기준으로 편집했습니다.",
    finding: "얼굴 유지는 개선됐지만 기계적인 beat cut은 음악과 몸, 카메라의 흐름을 따로 움직이게 했습니다.",
    change: "분석값은 참고로만 쓰고 보컬 진입, 몸의 landing, 카메라 carry, 장면 연결을 함께 보도록 바꿨습니다.",
  },
  {
    date: "2026.06.11",
    label: "PULSO",
    state: "완성 / 구간별 제작 채택",
    title: "한 곡을 노래 구간별 이미지·동작·편집 단위로 나눴습니다.",
    test: "곡 구간 분석, reference contact sheet, keyframe packet, video prompt, playback review, edit marker를 연결했습니다.",
    finding: "생성·동작·편집을 서로 다른 검토 단위로 나누자 전체 곡을 끝까지 관리할 수 있었습니다.",
    change: "audio-frame placement와 section playback QC를 다음 제작의 기본 관찰 방식으로 남겼습니다.",
  },
  {
    date: "2026.06.14",
    label: "LEFT IN THAT NIGHT",
    state: "폐기 / 인과 검토 채택",
    title: "좋은 모티브가 많아도 하나의 이야기가 되지는 않았습니다.",
    test: "도시 공간, 오브젝트, 기억 장면, 여러 영상 레퍼런스를 한 곡의 보드로 확장했습니다.",
    finding: "재료는 많았지만 감정의 주인과 장면의 인과가 약해 서로 연결되지 않은 이미지처럼 보였습니다.",
    change: "더 생성하지 않고 폐기했습니다. 이후에는 감정의 주인·보이는 행동·모티브가 일으키는 다음 장면을 먼저 확인합니다.",
  },
  {
    date: "2026.06.18",
    label: "INK",
    state: "완성 / 대표 결과",
    title: "메시지를 행동·오브젝트·공간 변화로 보이게 했습니다.",
    test: "‘남이 정한 선 밖으로 계속 나아간다’는 메시지에서 네 멤버와 13개 노래 구간의 장면을 설계했습니다.",
    finding: "인물·카메라·빛·오브젝트가 맡을 일을 먼저 나누자 후보를 고르는 기준과 장면의 연결이 선명해졌습니다.",
    change: "reference의 역할, 통과·보류 이유, 곡 구간별 결과를 다음 콘텐츠가 다시 읽을 수 있는 기록으로 남겼습니다.",
  },
  {
    date: "2026.07",
    label: "FRONT PLANNING WORKBENCH",
    state: "실행 가능 checkpoint / 계속 조정 중",
    title: "실행이 빨라진 뒤에는 기획하는 저도 병목이 됐습니다.",
    test: "레퍼런스, 곡 구간, 후보 상태, 보류 이유를 한 canvas와 Sequence Rail에서 조립하도록 만들었습니다.",
    finding: "생성 전에 방향과 선택을 고정해야 뒤 단계의 자동화가 같은 맥락을 유지할 수 있었습니다.",
    change: "Workbench는 생성기가 아니라 기획 기억과 founder decision을 다음 단계로 넘기는 작업 화면으로 두었습니다.",
  },
];

const systemFlow = [
  ["01", "레퍼런스 리서치·해석", "RESEARCH · YT-DLP · CONTACT SHEET", "모티브가 쓰인 콘텐츠까지 찾아, 메시지·감정·장면의 역할을 정리"],
  ["02", "기획 맥락 조립·Workbench", "LIVE PLAN · CANVAS · SEQUENCE RAIL", "곡 구간, 인물 기준, 보류 이유와 후보 상태를 같은 맥락으로 묶음"],
  ["03", "이미지·영상 생성", "LLM · SESSION · API", "정리된 맥락과 참조를 바탕으로 장면별 후보와 제작 단위를 만듦"],
  ["04", "후보 정리·분석", "PYTHON · CONTACT SHEET · MEDIA ANALYSIS", "프레임·움직임·비트·구간을 읽고, 수백 개 후보를 비교 가능한 묶음으로 정리"],
  ["05", "편집·시퀀스 구성", "FFMPEG · FFPROBE · LIBROSA · EDIT DESK", "러프컷, 마커, QC 자료를 만들고 장면이 다음 장면으로 이어지는지 확인"],
];

const decisionLogs = [
  {
    date: "2026.05",
    signal: "V1 → V2",
    title: "생산적인 구조라도 기준이 섞이면 보존하고 다시 나눕니다.",
    observed: "V1은 생성, 리서치, 검토, 게시, 분석이 한 트리에 있어 빠르게 만들 수 있었지만 무엇이 현재 기준인지 혼동하기 쉬웠습니다.",
    action: "V1을 그대로 보존한 뒤, V2에서 조사→선정→패킷→생성→사람 검토로 책임을 분리했습니다.",
    evidenceSlug: "aurora-v1-to-v2-archive-map",
  },
  {
    date: "2026.05",
    signal: "STAGE ROUTE",
    title: "자유도를 높인 경로가 안전한 포즈로 수렴하자 다시 수정했습니다.",
    observed: "캡처 없이 AI가 안무를 설계하도록 열었지만, 서로 비슷한 안전한 K-pop 포즈가 반복됐습니다.",
    action: "기계적인 점수표를 더하지 않고, 같은 춤의 흐름을 자연어 비트시트로 이어 주도록 기준을 바꿨습니다.",
    evidenceSlug: "aurora-v2-stage-decision-log",
  },
  {
    date: "2026.05",
    signal: "X · TIKTOK",
    title: "플랫폼 지표는 창작의 정답이 아니라 다음 검토 후보입니다.",
    observed: "같은 M-code를 X와 TikTok에서 비교할 수 있었지만 노출·반응 지표만으로 장면의 우열이나 원인을 확정할 수 없었습니다.",
    action: "분석 결과는 자동 적용하지 않고, 매핑이 확인된 후보만 창작자 검토 뒤 다음 스타일·포맷 검토에 반영합니다.",
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

function EvidenceExcerpt({ slug }: { slug: string }) {
  const source = getEvidenceSource(slug);
  if (!source) return null;

  return (
    <div className={styles.sourceExcerpt}>
      <div className={styles.sourceTopline}>
        <span>{source.fileName}</span>
        <small>{getEvidenceDisclosureLabel(source)}</small>
      </div>
      <pre>{source.excerpt}</pre>
      <Link href={`/ai-exploration/motion-bank/${slug}`}>
        공개 범위와 출처 확인 <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function ProductionHarnessSection() {
  return (
    <section className={`${styles.section} ${styles.systemSection}`} id="harness">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="하네스는 생성 API만을 뜻하지 않습니다. 레퍼런스 리서치, Workbench에서의 맥락 조립, 이미지·영상 생성, 후보 분석, 편집과 시퀀스 구성까지를 한 번의 콘텐츠 제작 과정으로 연결했습니다."
          index="01"
          label="ANSWER FIRST / CONTENT PRODUCTION HARNESS"
          title="한 문장의 방향을 완성형 콘텐츠까지 이어 가는 제작 구조입니다."
        />

        <div className={styles.harnessStatement}>
          <span>SUB-CORE / WHAT I BUILT</span>
          <p>
            Loom 콘텐츠를 제작하기 위해, 기획부터 생성·분석·편집·검토·아카이빙까지 이어지는
            AI 콘텐츠 자동화 루프를 구축해보려 했습니다.
          </p>
        </div>

        <div className={styles.systemRoles}>
          {systemRoles.map(([index, system, role, detail]) => (
            <article key={system}>
              <span>{index}</span>
              <div><small>{role}</small><strong>{system}</strong></div>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className={styles.systemLoopLabel}>
          <span>CONNECTED PRODUCTION FLOW</span>
          <p>Workbench → Harness → AI·Python 도구 → Loom Content → Archive / Review / Decision → Workbench</p>
        </div>

        <div className={styles.systemDiagram}>
          {systemFlow.map(([index, title, system, detail]) => (
            <article key={index}>
              <span>{index}</span>
              <small>{system}</small>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className={styles.judgementReturn}>
          <div>
            <ShieldCheck size={25} />
            <span>OUTPUT JUDGEMENT</span>
          </div>
          <p>
            제작 결과물은 제가 통과·보류·폐기·재기획으로 판단합니다. 메시지와 톤, 장면의 방향, 최종 선택은 하네스에 맡기지 않습니다.
          </p>
          <div className={styles.judgementReturnLoop}>
            <Undo2 size={17} />
            <span>다음 리서치와 맥락 조립으로 돌아감</span>
          </div>
        </div>

        <div className={styles.systemDepthLink}>
          <span>DETAILED IMPLEMENTATION</span>
          <p>도구 화면·코드·레지스트리 원문은 작동 결과와 변화 과정을 확인한 뒤 별도 섹션에서 공개합니다.</p>
          <a href="#proof">상세 구현 근거 보기 <ArrowDown size={16} /></a>
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
          body="앞에서 설명한 제작 방식이 개념에 머물지 않았음을 실제 작업 화면, 로컬 편집 코드, 단계 레지스트리의 공개 가능한 일부로 확인합니다."
          index="06"
          label="DETAILED PROOF / WORKBENCH · EDIT HARNESS · REGISTRY"
          title="이 제작 구조는 실제로 어디까지 구현되어 있을까?"
        />

        <div className={styles.systemProofGrid}>
          <article className={styles.workbenchProof}>
            <div className={styles.proofCopy}>
              <span>FRONT PLANNING WORKBENCH</span>
              <h3>리서치와 기획 맥락을 제작 흐름 안에서 조립합니다.</h3>
              <p>
                Live Plan, Planning Canvas, Sequence Rail, Contact Sheet와 Codex·Grok 세션을 연결했습니다.
                레퍼런스의 역할, 곡 구간, 후보 상태와 보류 이유를 다음 생성과 편집 과정에 넘기는 작업 화면입니다.
              </p>
              <EvidenceLink slug="front-planning-workbench-checkpoint" />
            </div>
            <img alt="Front Planning Workbench runnable checkpoint" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
          </article>

          <article className={styles.editDeskProof}>
            <div className={styles.proofCopy}>
              <span>PREMIERE · AFTER EFFECTS → EDIT HARNESS · LOCAL EDIT DESK</span>
              <h3>전문 편집 도구의 구조를 역으로 분석해 편집 하네스의 단계로 다시 조립했습니다.</h3>
              <p>
                Source·Program, sequence·timeline, marker, render·QC의 역할을 나눈 뒤, ffprobe·OpenCV·librosa로 source·프레임·움직임·비트를 읽고 ffmpeg로 컨택트시트·roughcut·QC 자료를 만들었습니다.
                이 흐름은 Python/Tk Edit Desk의 타임라인, 마커, waveform, 구간 렌더와 현재 편집 하네스로 이어집니다.
              </p>
            </div>
            <EvidenceExcerpt slug="idol-edit-desk-implementation" />
          </article>

          <article className={styles.registryProof}>
            <div className={styles.proofCopy}>
              <span>8 PHASES / 29 SEMANTIC STAGES</span>
              <h3>작업이 길어져도 맥락과 수정 경로를 잃지 않도록 구조를 남겼습니다.</h3>
              <p>
                각 단계의 입력·산출물·책임자·수정 방향을 레지스트리로 연결했습니다.
                하위 단계가 의미를 임의로 바꾸지 않고, 누락된 판단은 어느 단계에서 다시 확인해야 하는지 남깁니다.
              </p>
            </div>
            <EvidenceExcerpt slug="idol-harness-stage-registry" />
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function TrendApplicationSection() {
  return (
    <section className={`${styles.section} ${styles.trendSection}`} id="trend">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="X에서 변화를 발견한 뒤 공식 영문 자료와 실제 제품 구조를 확인하고, 제 제작 문제에 필요한 부분만 구현했습니다. 발견 채널보다 적용 결과와 채택·보류 판단을 중심으로 정리했습니다."
          index="02"
          label="EXTERNAL CHANGE → PRODUCTION TOOL → VERDICT"
          title="새로운 AI 흐름은 실제 제작 도구를 어떻게 바꿨을까?"
        />
        <div className={styles.trendIntakeRule}>
          <span>TREND INTAKE RULE</span>
          <p>X에서 발견 → 공식 문서·제품 구조 확인 → 현재 제작 문제로 번역 → 로컬 적용 → 채택·보류·금지 기록</p>
        </div>
        <div className={styles.trendList}>
          {trendExperiments.map((item, index) => (
            <article className={styles.trendRow} key={item.signal}>
              <div className={styles.trendSignal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.signal}</small>
                <b>{item.status}</b>
              </div>
              <div className={styles.trendQuestion}>
                <span>발견한 변화와 제작 문제</span>
                <strong>{item.discovery}</strong>
                <p>{item.origin}</p>
              </div>
              <div className={styles.trendPath}>
                <div>
                  <span>질문</span>
                  <h3>{item.question}</h3>
                </div>
                <div>
                  <span>적용</span>
                  <p>{item.test}</p>
                </div>
                <div>
                  <span>판정</span>
                  <p>{item.decision}</p>
                </div>
                <div>
                  <span>다음 변화</span>
                  <p>{item.next}</p>
                </div>
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
      </Reveal>
    </section>
  );
}

function ValidationSection() {
  return (
    <section className={`${styles.section} ${styles.validationSection}`} id="validation">
      <Reveal className={styles.contentWidth}>
        <SectionHeading
          body="Loom에서는 한 곡의 메시지를 전체 뮤직비디오로, CF에서는 한 제품의 기능을 짧은 장면 규칙으로 확장했습니다. 같은 제작 구조가 서로 다른 길이와 목적의 콘텐츠에서도 작동하는지 실제 결과물로 확인했습니다."
          index="03"
          label="SYSTEM VALIDATION / LOOM + PRODUCT MESSAGE"
          title="같은 제작 구조는 서로 다른 메시지를 어디까지 완성할 수 있었을까?"
        />

        <div className={styles.validationLead}>
          <figure>
            <img alt="INK song-section keyframe system" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" />
            <figcaption>LOOM / FULL-LENGTH MUSIC VIDEO</figcaption>
          </figure>
          <div>
            <span>LONG-FORM PROOF / LOOM</span>
            <h3>한 문장의 메시지를 노래 구간·장면·인물·오브젝트의 흐름으로 확장했습니다.</h3>
            <p>
              Root Signal, Pulso, INK 세 편을 끝까지 완성하고 LOW와 Left in That Night은 폐기했습니다.
              완성과 폐기의 이유가 다음 제작의 카메라·빛·장면 인과·편집 기준을 바꾸도록 기록했습니다.
            </p>
            <a className={styles.textLink} href="#ink">INK 결과와 과정 보기 <ArrowRight size={15} /></a>
          </div>
        </div>

        <div className={styles.cfIntro}>
          <span>SHORT-FORM TRANSFER</span>
          <p>
            Loom에서 만든 흐름을 제품 메시지에 그대로 복사하지 않았습니다. 제품이 장면의 원인이 되도록 먼저 규칙을 정하고,
            장면 후보·키프레임·영상 작업·편집 순서에 그 규칙이 남는지 확인했습니다.
          </p>
        </div>

        <div className={styles.cfList}>
          {cfCases.map((item) => (
            <article key={item.label}>
              <div className={styles.cfMedia}>
                <video controls playsInline poster={item.poster} preload="none">
                  <source src={item.video} type="video/mp4" />
                </video>
                <img alt={`${item.label} selected keyframe board`} src={item.poster} />
              </div>
              <div className={styles.cfCopy}>
                <div className={styles.cfMeta}><span>{item.index}</span><small>{item.label}</small></div>
                <b>{item.status}</b>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className={styles.cfFlow}><span>MESSAGE → SCENE RULE</span><strong>{item.flow}</strong></div>
                <div className={styles.cfMetric}>{item.metric}</div>
                <EvidenceLink label="메시지·장면 규칙 파일 일부" slug={item.evidenceSlug} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.specBoundary}>
          <ShieldCheck size={20} />
          <p>두 영상은 개인 비공식 spec commercial입니다. 공식 브랜드 협업·캠페인·성과로 주장하지 않으며, 현재 제작 구조가 제품 메시지와 공간 규칙으로 확장될 수 있는지를 보여주는 적용 사례로만 제시합니다.</p>
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
          <a href="#harness">시스템</a>
          <a href="#trend">기술 적용</a>
          <a href="#validation">작동 결과</a>
          <a href="#origin">형성 과정</a>
          <a href="#iteration">변화</a>
          <a href="#proof">구현 근거</a>
          <a href="#archive">기록</a>
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
          <h1>하나의 메시지는<br />어디까지 하나의<br />경험이 될 수 있을까?</h1>
          <p>
            하나의 명확한 메시지와 소수의 핵심 레퍼런스에서 출발해, AI를 통해 장면·이미지·영상·편집을 확장하고
            하나의 완성형 콘텐츠 경험으로 구축해보려 했습니다.
          </p>
          <div className={styles.heroAnswer}>
            <span>THE SYSTEM BEHIND THE WORK</span>
            <strong>Loom 콘텐츠를 제작하기 위해 기획부터 생성·분석·편집·검토·아카이빙까지 이어지는 AI 콘텐츠 자동화 루프를 구축해보려 했습니다.</strong>
          </div>
          <div className={styles.heroActions}>
            <a href="#harness">제작 구조 보기 <ArrowDown size={17} /></a>
            <a href="#validation">작동 결과 먼저 보기 <ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <div className={styles.heroFoot}>
          <span>PERSONAL AI CREATIVE BUILD</span>
          <span>RESEARCH · GENERATION · EDIT · MEMORY</span>
          <span>신입 / 졸업예정</span>
        </div>
      </section>

      <section className={styles.executiveBand}>
        <Reveal className={styles.contentWidth}>
          <div className={styles.executiveLead}>
            <span>CORE PURPOSE</span>
            <p>
              Loom의 목적은 명확한 메시지 하나와 적은 레퍼런스만으로 방향을 확장해 완성형 뮤직비디오까지 만드는 것이었습니다.
              이를 반복 가능하게 만들기 위해 리서치·기획·생성·분석·편집·기록을 하나의 제작 구조로 연결했습니다.
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

      <ProductionHarnessSection />
      <TrendApplicationSection />
      <ValidationSection />

      <section className={styles.section} id="origin">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="현재의 Workbench·Harness·Media Toolchain은 한 번에 설계한 구조가 아닙니다. AHEYA에서 시작한 맥락 기반 생성, AB_Aurora의 방향·선택 구조, Aurora V2의 반복 제작 단위, AB_Luna의 state·handoff가 Loom 제작 안에서 다시 조합됐습니다."
            index="04"
            label="FORMATION / FOUR PREDECESSORS"
            title="현재 제작 구조는 어떤 질문과 실패를 거쳐 만들어졌을까?"
          />

          <div className={styles.originThesis}>
            <span>FIRST HYPOTHESIS</span>
            <blockquote>
              매번 기획만 갖춰지면 이미지와 영상이 반복 생성되는 구조가 있다면,
              한 사람이 운영하는 제작 스튜디오는 어디까지 확장될 수 있을까?
            </blockquote>
          </div>

          <div className={styles.originGrid}>
            {originSteps.map((item) => (
              <article key={item.index}>
                <div><span>{item.index}</span><small>{item.label}</small></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.lineageIntro}>
            <span>WHAT EACH PREDECESSOR CHANGED</span>
            <p>전신 프로젝트를 별도 성과로 나열하지 않고, 지금의 제작 구조에 남은 역할을 기준으로 다시 읽었습니다.</p>
          </div>

          <div className={styles.lineageList}>
            {lineageCases.map((item) => (
              <article key={item.project}>
                <figure>
                  <img alt={`${item.project} predecessor evidence`} src={item.image} />
                  <figcaption>{item.project} / {item.role}</figcaption>
                </figure>
                <div className={styles.lineageCopy}>
                  <div className={styles.lineageMeta}><span>{item.index}</span><small>{item.project}</small><b>{item.role}</b></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className={styles.lineageResult}><span>현재 구조에 남은 것</span><strong>{item.result}</strong></div>
                  {item.evidenceSlug ? <EvidenceLink label="전신 구조의 실제 파일 일부" slug={item.evidenceSlug} /> : null}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.auroraProof}>
            <div className={styles.auroraIntro}>
              <span>AURORA V2 / ACTUAL PRODUCTION EVIDENCE</span>
              <h3>13명의 얼굴을 유지하면서, MV와 STAGE의 장면 기능은 다르게</h3>
              <p>
                Loom의 비주얼 레퍼런스를 기준으로 멤버마다 cinematic MV와 choreography STAGE를 한 쌍으로 준비했습니다.
                26개 공개 작품이 아니라, identity continuity와 반복 제작을 확인한 실제 제작 단위입니다.
              </p>
            </div>
            <div className={styles.auroraBoards}>
              <figure><img alt="Aurora V2 M01 cinematic MV storyboard" src="/ai-exploration/aurora-v2/m01-mv-storyboard.webp" /><figcaption>M01 / MV</figcaption></figure>
              <figure><img alt="Aurora V2 M01 choreography stage storyboard" src="/ai-exploration/aurora-v2/m01-stage-storyboard.webp" /><figcaption>M01 / STAGE</figcaption></figure>
              <figure><img alt="Aurora V2 M11 cinematic MV storyboard" src="/ai-exploration/aurora-v2/m11-mv-storyboard.webp" /><figcaption>M11 / MV</figcaption></figure>
              <figure><img alt="Aurora V2 M11 choreography stage storyboard" src="/ai-exploration/aurora-v2/m11-stage-storyboard.webp" /><figcaption>M11 / STAGE</figcaption></figure>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.section} id="iteration">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="완성작과 폐기한 작업을 분리해 나열하지 않고, 한 작업의 판단이 다음 작업의 제작 방식을 어떻게 바꿨는지 실제 순서로 정리했습니다."
            index="05"
            label="ITERATION / PRODUCTION CHANGE / 2026.05—07"
            title="한 편을 끝낼 때마다, 무엇을 버리고 무엇을 다음 규칙으로 남겼을까?"
          />

          <div className={styles.iterationConclusion}>
            <span>WHAT KEPT MOVING</span>
            <p>
              문제는 한 번에 발견되지 않았습니다. 얼굴, 편집, 장면 인과, 그리고 마지막에는 기획하는 저 자신까지,
              작업을 끝내거나 폐기할 때마다 다음 병목이 보였습니다.
            </p>
          </div>

          <div className={styles.evolutionList}>
            {evolution.map((item, index) => (
              <article key={item.label}>
                <div className={styles.evolutionIndex}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{item.date}</small>
                </div>
                <div className={styles.evolutionTitle}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <b>{item.state}</b>
                </div>
                <div className={styles.evolutionShift}>
                  <div><span>이번 적용</span><p>{item.test}</p></div>
                  <div><span>판정</span><p>{item.finding}</p></div>
                  <div><span>다음 변화</span><p>{item.change}</p></div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <SystemProofSection />

      <section className={`${styles.section} ${styles.inkSection}`} id="ink">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="완성 영상만이 결과는 아니었습니다. 하네스는 콘텐츠, IP 경험, 제작 도구, 그리고 다음 작업에서 다시 읽을 수 있는 판단 기록으로 남았습니다."
            index="07A"
            label="OUTCOME / CONTENT / LOOM — INK"
            title="메시지에서 장면까지, 하나의 곡을 어떻게 끝까지 연결했을까?"
          />

          <div className={styles.outcomeVerdict}>
            <span>CURRENT VERDICT</span>
            <strong>반복은 시스템에 맡길 수 있지만, 메시지와 감각을 결정하는 일은 남겨야 합니다.</strong>
            <p>그래서 빠른 생성보다 사람의 판단을 잃지 않고 다시 실행할 수 있는 구조를 결과로 남겼습니다.</p>
          </div>

          <div className={styles.inkFeature}>
            <div className={styles.videoFrame}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                src="https://www.youtube.com/embed/TyONE0lKI2s"
                title="Loom - Ink Final Master"
              />
            </div>
            <div className={styles.inkCopy}>
              <span>PUBLIC RESULT / INK FINAL MASTER</span>
              <h3>남이 정한 선 밖에서도,<br />자기 흔적을 계속 남기는 네 사람</h3>
              <p>
                “지워져도 다시 번지고, 정해진 선을 넘어 계속 쓴다”는 메시지를 먼저 고정했습니다.
                곡을 13개 노래 구간으로 나누고, 네 멤버의 행동·카메라·빛·오브젝트가 메시지를 보이도록 설계했습니다.
              </p>
              <div className={styles.inkStats}>
                <div><strong>4</strong><span>members</span></div>
                <div><strong>13</strong><span>song sections</span></div>
                <div><strong>1</strong><span>message spine</span></div>
              </div>
              <EvidenceLink label="INK production registry 일부" slug="ink-output-registry" />
            </div>
          </div>

          <div className={styles.inkMethod}>
            {inkMethod.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.inkSheets}>
            <figure className={styles.inkSheetWide}>
              <img alt="INK song-section keyframe contact sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" />
              <figcaption><span>SECTION FLOW</span>노래 구간별 장면·인물·오브젝트의 흐름</figcaption>
            </figure>
            <figure>
              <img alt="INK motion candidate contact sheet" src="/ai-exploration/ink/contact-sheets/section-S07-v2-inserts-part-01.webp" />
              <figcaption><span>MOTION CANDIDATES</span>통과 후보도 움직임과 시간 단위로 다시 비교</figcaption>
            </figure>
            <figure>
              <img alt="INK object system contact sheet" src="/ai-exploration/ink/contact-sheets/ink-canonical-object-system-contact-sheet-v1.webp" />
              <figcaption><span>OBJECT MEMORY</span>장면 사이 의미를 잇는 오브젝트 기준</figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.loomSection}`} id="experience">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="생성한 결과물을 쌓는 데서 멈추지 않고, 정체성·트랙·짧은 콘텐츠·참여를 하나의 IP 안에서 선택하고 따라갈 수 있는 로컬 경험으로 구현했습니다."
            index="07B"
            label="OUTCOME / EXPERIENCE / LOOM SIGNAL DECK"
            title="영상 한 편을 하나의 IP 경험으로 확장하면 무엇이 달라질까?"
          />
          <div className={styles.loomFeature}>
            <figure>
              <img alt="Loom Signal Deck main page" src="/loom-deck/01-home-desktop.png" />
              <figcaption>LOOM SIGNAL DECK / MAIN PAGE</figcaption>
            </figure>
            <div className={styles.loomExperienceList}>
              {loomExperience.map(([label, body]) => (
                <div key={label}>
                  <span>{label}</span>
                  <p>{body}</p>
                </div>
              ))}
              <small>투표와 메시지는 공개 서비스 성과가 아닌 로컬 인터랙션 프로토타입입니다.</small>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.archiveSection}`} id="archive">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="기록의 목적은 많이 남기는 것이 아니라, 무엇을 유지하고 무엇을 바꿨는지 다음 제작에서 다시 읽을 수 있게 하는 것입니다."
            index="08"
            label="OUTCOME / MEMORY / ARCHIVE · DECISION LOG"
            title="통과와 폐기의 이유를 다음 제작에서 다시 읽게 하려면?"
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
            <p><strong>원본은 작업별 provenance로 남기고, 반복해서 확인된 판단만 다음 스킬과 기준으로 옮깁니다.</strong> 핵심 스킬·프롬프트·운영 전문은 공개하지 않고, 판단을 증명하는 최소 발췌만 제공합니다.</p>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.aheyaSection}`} id="aheya">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="AHEYA는 영상 제작 하네스와 별개의 개인 서비스 탐구입니다. 비개발 전공자로서 AI와 함께 서비스, 스마트계약, 에이전트 실행의 경계까지 파고든 증거로만 둡니다."
            index="09"
            label="SERVICE EXPLORATION / AHEYA"
            title="AI와 함께 서비스의 실행과 신뢰 기록은 어디까지 만들 수 있을까?"
          />

          <div className={styles.aheyaFeature}>
            <img alt="AHEYA crowdfunding and trust service prototype" src="/aheya/aheyabaraya-homepage-2026-04-28.png" />
            <div>
              <span>CROWDFUNDING → TRUST API → OPENCLAW YUI</span>
              <h3>사람이 오지 않는 문제를 기능 추가로 해결할 수는 없었습니다.</h3>
              <p>
                크라우드펀딩 수수료와 신뢰 기록 문제를 다루기 위해 Solidity 스마트계약, wallet·Trust 구조, 외부 인프라를 직접 탐구했습니다.
                이후 Yui에서는 AI agent가 후보 탐색→계획→실행→엄격 검토→기록까지 이어 갈 수 있는지 직접 구현해 확인했습니다.
              </p>
              <p>
                그러나 약 2~3주의 직접 접촉에도 유효한 시장 반응이 없었고, 거시 환경과 유지 비용까지 고려해 중단했습니다.
                이 경험은 “만들 수 있음”과 “사람이 원하는 것”이 다르다는 판단을 남겼고, 콘텐츠 제작으로 방향을 바꾸는 계기가 됐습니다.
              </p>
              <div className={styles.aheyaLinks}>
                <EvidenceLink label="OpenClaw Yui 실행 흐름" slug="aheya-openclaw-orchestration-flow" />
                <EvidenceLink label="Solidity 공개 코드 일부" slug="aheya-evm-funding-registry" />
                <a href={AHEYA_ARCHIVE_URL} rel="noreferrer" target="_blank">공개 아카이브 <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.closingSection}>
        <Reveal className={styles.contentWidth}>
          <span className={styles.closingLabel}>WHAT I BRING</span>
          <h2>새 기능을 발견하면 직접 붙여 보고,<br />가능성을 콘텐츠와 도구로 구현하고,<br />판단을 다음 작업에 남깁니다.</h2>

          <div className={styles.brandTranslation}>
            <div className={styles.brandTranslationLead}>
              <span>BRAND EXPERIENCE TRANSLATION</span>
              <p>완료한 결과와 다음 적용 방향을 구분해, AI 기술이 브랜드 경험의 어느 층위까지 연결됐는지 정리했습니다.</p>
            </div>
            <div className={styles.brandTranslationRows}>
              <article><span>지금 증명한 것 / CONTENT</span><strong>하나의 메시지·제품 규칙을 이미지, 영상, MV와 짧은 광고의 장면 언어로 확장</strong></article>
              <article><span>지금 증명한 것 / WEB EXPERIENCE</span><strong>Loom의 정체성·트랙·콘텐츠·참여 흐름을 Signal Deck 로컬 프로토타입으로 연결</strong></article>
              <article><span>공간 언어의 근거 / SCENE SYSTEM</span><strong>INK의 빛·오브젝트·동선과 Headset의 미술관 소리 규칙처럼, 공간이 메시지를 수행하도록 장면을 설계</strong></article>
              <article><span>다음 적용 방향 / PHYSICAL · RETAIL</span><strong>브랜드 규칙을 다중 화면·웹 연속 경험·공간 프로토타입으로 옮기는 단계는 아직 제안이며 완료 실적으로 주장하지 않음</strong></article>
            </div>
          </div>

          <div className={styles.closingPoints}>
            <div><span>01</span><strong>새 기술을 실제 제작 질문으로 바꾸는 관점</strong></div>
            <div><span>02</span><strong>콘텐츠·도구·서비스 프로토타입까지 구현하는 실행력</strong></div>
            <div><span>03</span><strong>성공과 폐기의 판단을 다시 쓰게 만드는 기록 방식</strong></div>
          </div>

          <div className={styles.boundaryNote}>
            <ShieldCheck size={20} />
            <p>동일 조건의 모델 우열 비교와 AHEYA의 상용 성과는 주장하지 않습니다. Workbench는 실행 가능한 개발 checkpoint입니다. 물리 공간·리테일은 완료 실적이 아니며, 현재 증거는 콘텐츠 속 공간 규칙과 웹 경험까지입니다.</p>
          </div>

          <div className={styles.brandProofs}>
            <div>
              <span>SEPARATE BRAND CONTENT</span>
              <p>AI Exploration 하네스와 직접 연결하지 않고, 패션 브랜드의 메시지와 무드를 영상 흐름으로 번역한 별도 프로젝트로 제시합니다.</p>
            </div>
            <Link href="/deck/musinsa">MUSINSA <ArrowRight size={15} /></Link>
            <Link href="/deck/adsb">ADSB / Andersson Bell <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <div>
          <span>YUMINSEOK / AI CREATIVE EXPLORER</span>
          <p>프로젝트 기반으로 탐구한 신입·졸업예정 지원자의 포트폴리오입니다.</p>
        </div>
        <div className={styles.footerActions}>
          <Link href="/"><Home size={15} /> 전체 포트폴리오</Link>
          <Link href="/loom-workflow">IDOL 적용 사례 <ArrowRight size={15} /></Link>
        </div>
      </footer>
    </main>
  );
}
