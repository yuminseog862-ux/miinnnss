"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  ChartNoAxesCombined,
  CirclePause,
  ExternalLink,
  FileStack,
  Film,
  GitBranch,
  Home,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { PropsWithChildren } from "react";

import {
  contractEvidenceSources,
  harnessEvidenceSources,
  motionBankSources,
  toolchainEvidenceSources,
  trustEvidenceSources,
  workbenchEvidenceSources,
} from "@/lib/ai-exploration/motion-bank-sources";
import { channelPerformanceSnapshot } from "@/lib/portfolio-hub/channel-performance";

import styles from "./ai-exploration.module.css";

const AHEYA_PUBLIC_ARCHIVE_URL = "https://github.com/aheyabaraya/aheya-public-archive";
const AHEYA_CONTRACT_URL = `${AHEYA_PUBLIC_ARCHIVE_URL}/blob/main/contracts/AheyaEvmFundingRegistryRecord.sol`;

const workingPrinciples = [
  {
    index: "01",
    title: "Explore",
    body: "새 기능의 데모보다 실제 작업에서 줄일 수 있는 반복과 새로 열리는 판단을 먼저 찾습니다.",
  },
  {
    index: "02",
    title: "Structure",
    body: "기획, 생성, 검토, 승인, 기록을 분리해 AI가 맡을 일과 사람이 책임질 일을 고정합니다.",
  },
  {
    index: "03",
    title: "Validate",
    body: "후보 수보다 source, 상태, 보류 이유, 다음 단계가 실제 근거와 맞는지 확인합니다.",
  },
  {
    index: "04",
    title: "Archive",
    body: "다음 사람이 결과가 아니라 판단 과정부터 다시 읽을 수 있는 형태로 남깁니다.",
  },
];

const trendSignals = [
  {
    label: "Context-aware LLM",
    question: "프롬프트를 매번 다시 쓰지 않고, 기획 맥락 자체를 공유하면 의도를 더 오래 유지할 수 있을까?",
    experiment: "레퍼런스, 메시지, 금지선, 이전 선택을 같은 세션과 문서 구조로 넘겨 이미지·영상 기획에 적용",
    conclusion: "단일 프롬프트보다 맥락과 판단 이력이 중요했습니다. 다만 방향의 첫 단추와 최종 승인은 제가 유지했습니다.",
  },
  {
    label: "Image / video API",
    question: "세션에서 반복 생성하던 일을 API와 실행 단위로 바꾸면, 한 편의 MV를 지속적으로 만들 수 있을까?",
    experiment: "생성 요청, 파일명, 곡 section, 후보 상태, 재실행 조건을 분리하고 Aurora와 IDOL run에 적용",
    conclusion: "생성 속도보다 기획과 후보 관리가 병목이었습니다. 자동화 범위를 실행과 정리 쪽으로 다시 좁혔습니다.",
  },
  {
    label: "Tool-using agents / CLI",
    question: "AI를 답변 도구가 아니라 파일과 상태를 함께 다루는 제작 동료처럼 쓸 수 있을까?",
    experiment: "Codex, Grok CLI, OpenClaw를 기획 확장, 코드·도구 구현, queue·review·record에 서로 다르게 배치",
    conclusion: "창의 판단까지 스크립트로 고정하면 결과가 반복됐습니다. 모델은 맥락 안에서 생각하고, 시스템은 반복 상태만 통제해야 했습니다.",
  },
  {
    label: "Local media intelligence",
    question: "전문 편집 앱의 모든 기능이 아니라, 컷 선택과 순서라는 본질만 로컬에서 보조할 수 있을까?",
    experiment: "ffprobe, OpenCV, librosa, Pillow, MoviePy, ffmpeg로 프레임·비트 관찰, contact sheet, roughcut, QC를 구성",
    conclusion: "분석값이 좋은 컷을 결정하지는 못했습니다. 대신 수백 후보를 한 화면에서 비교하고 같은 recipe로 재실행할 수 있었습니다.",
  },
];

const experimentTimeline = [
  {
    date: "2025.12–2026.04",
    label: "AHEYA / Funding",
    title: "AI 빌더의 후원과 신뢰를 제품으로 만들 수 있을까?",
    trigger: "AI로 무언가를 만드는 사람에게 수수료 부담이 적은 crowdfunding과 검증 구조가 필요하다고 보았습니다.",
    test: "AI coding agent와 함께 smart contract, wallet, Infura·Alchemy, Redis, Vercel·Supabase까지 제품 구조를 직접 파고들었습니다.",
    finding: "기술 구조를 만드는 것과 사용자가 실제로 들어오는 것은 다른 문제였습니다. 개발 가능성만으로 수요를 대신할 수 없었습니다.",
    change: "후원 기능에서 Trust API와 agent 실행·평가 기록으로 탐구 범위를 옮겼습니다.",
    state: "BUILT / DEMAND NOT PROVEN",
  },
  {
    date: "2026.04",
    label: "Yui / OpenClaw",
    title: "AI agent가 탐색하고 거래해도, 그 결과를 다시 믿을 수 있을까?",
    trigger: "사람이 AI로 수행하던 탐색과 간단한 실행을 agent가 맡는다면, 다음 선택에는 결과보다 평가 기록이 더 중요하다고 보았습니다.",
    test: "marketplace browse, candidate snapshot, Trust API plan, execute, strict review, canonical record를 queue와 상태 경계로 연결했습니다.",
    finding: "외부 생태계와 시장 조건이 계속 바뀌었고, 지속 자율 운영의 성과까지 증명하지는 못했습니다.",
    change: "실행 성공과 기록 성공을 분리하는 원칙은 이후 IDOL의 stage owner, review, output registry로 이어졌습니다.",
    state: "IMPLEMENTED / MARKET HOLD",
  },
  {
    date: "2026.05.14",
    label: "Aurora V2 / 26 units",
    title: "같은 13명의 얼굴을 지키면서, 서로 다른 MV와 안무 장면을 반복 생성할 수 있을까?",
    trigger: "AHEYA 마케팅용 이미지와 짧은 클립을 만들며, 캐릭터의 얼굴을 유지한 채 콘텐츠 생산을 반복할 수 있는지 궁금해졌습니다.",
    test: "Loom Signal Deck의 13명 visual reference를 identity rail로 두고, 한 run에서 13 MV cinematic + 13 STAGE performance 제작 단위를 준비했습니다.",
    finding: "얼굴 reference와 실행 구조는 반복할 수 있었지만, 짧은 결과를 많이 만드는 것만으로 콘텐츠 성과가 좋아지지는 않았습니다.",
    change: "26개 단위 생산 실험을 full MV 제작 문제로 전환했습니다.",
    state: "26 UNITS COMPILED / IDENTITY LOCK",
  },
  {
    date: "2026.05.24",
    label: "Root Signal",
    title: "반복 생성 루프에 편집만 붙이면, 첫 full MV까지 갈 수 있을까?",
    trigger: "짧은 클립 생산 구조를 한 곡의 메시지와 장면 흐름으로 확장해 보고 싶었습니다.",
    test: "곡을 section으로 나누고 이미지와 영상 후보를 생성한 뒤, 기존 스크립트와 제작 규칙을 연결해 첫 full-MV run을 진행했습니다.",
    finding: "완주 가능성은 확인했지만 카메라 움직임, 빛, 구도가 단일했고 스크립트가 창의적 선택까지 고정했습니다.",
    change: "‘창의 작업을 스크립트화하지 않는다’는 규칙과 frame 단위 편집 탐구가 시작됐습니다.",
    state: "FIRST FULL-MV PROOF / VISUAL LIMIT",
  },
  {
    date: "2026.05.26",
    label: "LOW",
    title: "텍스트 설명만으로도 멤버의 얼굴을 계속 지킬 수 있을까?",
    trigger: "생성 속도를 높이기 위해 얼굴 reference 의존을 줄일 수 있는지 시험했습니다.",
    test: "초기 poster·video prompt 경로에서 설명 중심 identity lock을 적용했습니다.",
    finding: "실제 기록상 face reference lock이 충분하지 않아 즉시 폐기했습니다. 설명만으로는 같은 인물의 얼굴을 보장할 수 없었습니다.",
    change: "실제 face-only reference와 identity validation을 필수 gate로 올렸습니다.",
    state: "DISCARDED / FACE LOCK FAILURE",
  },
  {
    date: "2026.06.11",
    label: "Pulso",
    title: "영상은 이미지의 연속이라면, 앞뒤 프레임과 비트를 읽어 편집을 보조할 수 있을까?",
    trigger: "후보를 매번 재생하며 순서와 연결점을 찾는 시간이 생성보다 길어졌습니다.",
    test: "영상의 앞뒤 frame, 곡 section, beat cue를 관찰하고 contact sheet와 roughcut recipe로 묶는 Python·ffmpeg 편집 경로를 적용했습니다.",
    finding: "기획이 잠긴 뒤에는 keyframe과 clip 생성·배열을 빠르게 반복할 수 있었습니다. 다만 카메라와 빛의 다양성은 여전히 부족했습니다.",
    change: "레퍼런스 영상을 프레임 단위로 읽고, 구도·빛·감정까지 기획 context에 포함하기 시작했습니다.",
    state: "EDIT LOOP PROVED / CAMERA LIMIT",
  },
  {
    date: "2026.06.14–07.06",
    label: "Left In That Night",
    title: "이미지와 설정을 더 많이 쌓으면, 감정이 더 선명해질까?",
    trigger: "구도, 빛, 배경, 오브젝트를 더 풍부하게 설계해 이전 MV의 단조로움을 해결하려 했습니다.",
    test: "여러 reference와 motif를 결합하고 생성·리뷰를 반복했습니다.",
    finding: "두 번의 리뷰 뒤에도 감정의 주인, 구체 행동, 인과가 연결되지 않았습니다. 좋은 이미지가 한 이야기로 읽히지 않아 full MV를 폐기했습니다.",
    change: "생성 전 emotional owner, concrete action, causal chain, motif job, 30초 proof를 확인하는 stop rule을 만들었습니다.",
    state: "DISCARDED / PLANNING FAILURE",
  },
  {
    date: "2026.06.18",
    label: "INK",
    title: "레퍼런스의 감정과 구도까지 공유하면, AI가 같은 장면 의도를 따라올 수 있을까?",
    trigger: "이전 실패에서 문제는 모델보다 불완전한 기획과 reference 역할 정의라는 결론을 얻었습니다.",
    test: "모티브의 기원까지 거슬러 reference를 확장하고, 곡 section별 keyframe·camera·light·object 역할을 contact sheet와 stage record로 고정했습니다.",
    finding: "얼굴 유지와 함께 카메라·빛의 변화, 곡 전체의 장면 연결이 이전 run보다 안정됐습니다. 현재 공개 가능한 대표 완성 증거입니다.",
    change: "통과한 결과와 선택 이유를 output registry와 다음 제작 memory로 승격했습니다.",
    state: "RELEASED PROOF / VIDEO BELOW",
  },
  {
    date: "2026.07.05–현재",
    label: "One Move",
    title: "정적인 아름다움을 넘어, 복잡한 액션의 인과와 물리성도 유지할 수 있을까?",
    trigger: "INK로 카메라와 빛은 개선했지만, 고난도 action sequence는 아직 검증하지 못했습니다.",
    test: "행동의 시작·충돌·반응을 분리하고, action reference와 keyframe 연결을 현재 실험 중입니다.",
    finding: "아직 완성되지 않았고 성공을 주장하지 않습니다. 실제 영상은 완성 후 이 페이지에 추가합니다.",
    change: "실패 지점이 확인되면 motion·physics gate와 planning rule을 다시 갱신합니다.",
    state: "OPEN EXPERIMENT / NOT PUBLISHED",
  },
  {
    date: "2026.07.12",
    label: "Front Planning Workbench",
    title: "마지막 병목이 나의 기획이라면, 생각하는 과정 자체를 한 화면에 꺼낼 수 있을까?",
    trigger: "reference, 대화, 곡 section, 후보, 보류 이유가 흩어져 기획이 흔들리고 이전 판단을 잊는 문제가 남았습니다.",
    test: "live plan, reference intake, candidate canvas, Sequence Rail, contact sheet, pass·revise·hold를 연결한 로컬 native workbench를 만들었습니다.",
    finding: "Workbench는 생성 API를 일부러 직접 연결하지 않았습니다. 생성기가 아니라 생각과 선택을 외부화하는 의사결정 표면입니다.",
    change: "기획이 잠기면 뒤의 8 phase·29 stage production system이 반복 실행되는 현재 구조로 정리했습니다.",
    state: "RUNNABLE CHECKPOINT / REAL-SONG PILOT OPEN",
  },
];

const journeyChapters = [
  {
    index: "01",
    period: "2025.12–2026.04",
    label: "AHEYA → YUI",
    title: "만든 것과 기록된 것을 분리하다",
    finding: "제품 구현만으로 수요를 증명할 수 없었고, 실행 결과와 신뢰 기록도 별도 상태로 다뤄야 했습니다.",
    next: "Trust API의 snapshot → plan → execute → review → record 구조가 이후 제작 하네스의 기록 원칙이 됐습니다.",
  },
  {
    index: "02",
    period: "2026.05",
    label: "AURORA / IDENTITY",
    title: "얼굴을 유지한 반복 생산을 시험하다",
    finding: "13명의 visual reference를 기준으로 13 MV + 13 STAGE, 총 26개 제작 단위를 준비했습니다.",
    next: "텍스트 설명만으로는 identity lock이 부족하다는 LOW의 실패 뒤, face reference와 검증 gate를 필수로 올렸습니다.",
  },
  {
    index: "03",
    period: "2026.05–06",
    label: "ROOT SIGNAL → PULSO",
    title: "생성보다 후보 선택과 연결이 병목임을 확인하다",
    finding: "첫 full MV는 완주했지만, 창의적 판단까지 스크립트화하면 카메라, 빛, 컷이 단조로워졌습니다.",
    next: "프레임·비트·section을 읽어 후보를 비교하는 Python/ffmpeg 편집 보조 경로로 범위를 다시 좁혔습니다.",
  },
  {
    index: "04",
    period: "2026.06",
    label: "LEFT IN THAT NIGHT",
    title: "좋은 이미지가 한 편의 이야기는 아니라는 실패",
    finding: "감정의 주인, 행동, 인과가 연결되지 않아 두 번의 리뷰 뒤 full MV를 폐기했습니다.",
    next: "생성 전 emotional owner, concrete action, causal chain, motif job을 확인하는 planning stop rule을 남겼습니다.",
  },
  {
    index: "05",
    period: "2026.06",
    label: "INK / RELEASED",
    title: "기획의 역할을 장면 단위로 잠그다",
    finding: "reference를 모티브의 기원까지 확장하고 section별 camera·light·object 역할을 고정해 이전보다 연결된 결과를 만들었습니다.",
    next: "통과한 결과와 이유를 output registry와 IP memory로 승격하는 구조를 실제 run에 적용했습니다.",
  },
  {
    index: "06",
    period: "2026.07–NOW",
    label: "ONE MOVE + WORKBENCH",
    title: "현재 병목인 기획을 화면 위에서 다루다",
    finding: "고난도 action의 물리성과 인과는 아직 미검증입니다. 다만 기획·reference·후보·보류 이유를 Workbench에 모아 판단을 먼저 고정하고 있습니다.",
    next: "성공 여부와 무관하게 다음 review와 memory 규칙으로 갱신하는 현재 진행형 실험입니다.",
  },
];

const harnessArchitecture = [
  {
    index: "01",
    lane: "ORIGIN / AHEYA",
    title: "실행과 기록을 분리했다",
    body: "AHEYA의 contract와 Trust API/Yui에서, 실행이 끝났다는 사실과 다음에 다시 쓸 기록이 남았다는 사실을 분리했습니다.",
    output: "snapshot · review · canonical record",
  },
  {
    index: "02",
    lane: "BRIEF / WORKBENCH",
    title: "맥락을 기획 계약으로 묶는다",
    body: "레퍼런스, 곡 section, 메시지, 금지선, 보류 이유를 한 화면에 모아 생성 전의 방향을 먼저 정리합니다.",
    output: "plan · reference role · pass/hold",
  },
  {
    index: "03",
    lane: "GENERATE / ROUTE",
    title: "도구를 역할별로 연결한다",
    body: "기획 확장과 구현은 Codex/GPT, 빠른 시각 후보와 움직임 test는 Grok 경로로 배치하되 같은 프로젝트 계약을 공유합니다.",
    output: "keyframe · clip candidate · run state",
  },
  {
    index: "04",
    lane: "OBSERVE / PYTHON",
    title: "수백 후보를 다시 읽을 수 있게 만든다",
    body: "ffprobe·OpenCV·librosa·ffmpeg가 프레임, 비트, metadata, roughcut을 정리하고 사람은 장면의 역할과 연결을 고릅니다.",
    output: "contact sheet · edit recipe · QC",
  },
  {
    index: "05",
    lane: "REVIEW / APPROVAL",
    title: "선택과 책임은 남긴다",
    body: "메시지, 카메라, 유료 생성, 외부 실행, 공개는 사람의 pass·hold·reject 없이는 다음 단계로 넘기지 않습니다.",
    output: "approved output · reject reason",
  },
  {
    index: "06",
    lane: "RELEASE / LEARN",
    title: "발행 신호를 다음 brief로 돌린다",
    body: "TikTok 공개 수치와 X 발행·관찰을 다음 가설의 참고 신호로 보관합니다. 인과나 전환 성과를 주장하지는 않습니다.",
    output: "release note · observed signal · reviewed memory",
  },
];

const releaseLearningSteps = [
  ["01", "Publish", "TikTok과 X에 콘텐츠·제작 기록을 발행"],
  ["02", "Observe", "공개 수치, 저장·공유, 댓글·반응 맥락을 채널 신호로 기록"],
  ["03", "Interpret", "양이 아니라 첫 장면, 멤버, 컷 길이, 메시지 가설을 다시 검토"],
  ["04", "Update", "통과한 판단만 다음 brief와 memory에 반영"],
];

const systemProofs = [
  {
    index: "01",
    title: "Front Planning Workbench",
    signal: "RUNNABLE DEVELOPMENT CHECKPOINT",
    body: "텍스트 기획, 레퍼런스 프레임, 생성 후보, 곡 순서, pass·revise·hold를 한 로컬 화면에서 다루는 판단 표면입니다.",
  },
  {
    index: "02",
    title: "IDOL Production System",
    signal: "8 PHASES / 29 SEMANTIC STAGES",
    body: "리서치부터 공개와 학습까지 각 단계의 owner, 산출물, upstream, explicit approval gate를 고정한 전체 제작 구조입니다.",
  },
  {
    index: "03",
    title: "Python Media Toolchain",
    signal: "ANALYZE / EDIT ASSIST / QC",
    body: "ffprobe, OpenCV, librosa, Pillow, MoviePy, ffmpeg를 연결해 영상 후보를 읽고 비교하고 초안 편집을 검수합니다.",
  },
  {
    index: "04",
    title: "AHEYA Smart Contract",
    signal: "PUBLIC SOURCE ARTIFACT",
    body: "콘텐츠 생성 밖에서도 AI와 함께 permit, nonce, operator, event 구조까지 내려가 제품 신뢰 기록을 탐구한 근거입니다.",
  },
  {
    index: "05",
    title: "OpenClaw Yui",
    signal: "BROWSE / PLAN / EXECUTE / REVIEW / RECORD",
    body: "외부 agent 후보를 고정하고 실행한 뒤 엄격 검토와 canonical 기록으로 다음 판단에 연결하는 Trust API 자동화입니다.",
  },
];

const harnessStages = [
  {
    index: "01",
    phase: "Discovery & brief",
    codes: "PRE-00",
    detail: "근거가 있는 제작 루트를 좁히되, 아직 창의적 결정을 잠그지 않습니다.",
  },
  {
    index: "02",
    phase: "Song evidence",
    codes: "PRE-00S → audio → lyrics → rhythm",
    detail: "오디오, 가사 의미, 리듬을 이후 화면 판단에 쓸 관찰 근거로 바꿉니다.",
  },
  {
    index: "03",
    phase: "Creative lock",
    codes: "00 → 00A",
    detail: "콘텐츠의 중심 메시지와 선택한 곡의 제작 계약을 명시적으로 잠급니다.",
  },
  {
    index: "04",
    phase: "Direction & coverage",
    codes: "01 → 01A → 02",
    detail: "세계, 퍼포먼스, 카메라, 오브젝트를 생성 커버리지로 번역합니다.",
  },
  {
    index: "05",
    phase: "Keyframe gate",
    codes: "02A → review → 02B",
    detail: "스토리보드가 창의 판단을 소유하고, 02B는 통과한 결정을 실행 단위로만 컴파일합니다.",
  },
  {
    index: "06",
    phase: "Motion & finish",
    codes: "03V → review → 04 → 04FX",
    detail: "통과 이미지, 오디오 배치, 움직임, 컷 타이밍, playback QC를 연결합니다.",
  },
  {
    index: "07",
    phase: "Release & learning",
    codes: "05 → record → analytics → memory",
    detail: "패키지, 공개 기록, 성과 관찰, 검토된 학습 승격을 각각 분리합니다.",
  },
];

const harnessLayers = [
  {
    index: "A",
    title: "Stage ownership",
    signal: "ONE OWNER PER DECISION",
    body: "같은 판단을 여러 문서가 다시 소유하지 않게 하고, 변경이 생기면 원래 단계로 돌려보냅니다.",
  },
  {
    index: "B",
    title: "Source binding",
    signal: "REFS / DIGESTS / SHA-256",
    body: "원문을 반복 복사하지 않고 source와 hash를 넘겨, 어떤 근거에서 판단했는지 추적합니다.",
  },
  {
    index: "C",
    title: "Validation",
    signal: "SCHEMA / PATH / READINESS",
    body: "자동화는 누락과 계약 위반을 찾지만 메시지, 카메라, 컷의 의미를 대신 결정하지 않습니다.",
  },
  {
    index: "D",
    title: "Human approval gate",
    signal: "PASS / HOLD / REJECT",
    body: "유료 생성, 창의 lock, 외부 실행, 공개는 명시적인 사람의 승인 없이 통과하지 않습니다.",
  },
  {
    index: "E",
    title: "Resume & memory",
    signal: "QUEUE / NEXT POINTER / REVIEWED LEARNING",
    body: "중단 후에도 현재 상태와 다음 작업을 복구하고, 검토된 판단만 재사용 메모로 올립니다.",
  },
];

const memoryPromotionSteps = [
  {
    index: "01",
    title: "Run에 원본 판단을 남긴다",
    body: "brainstorm, candidate, reject·hold 이유, review note는 해당 곡의 run이 소유합니다. 실패도 지우지 않습니다.",
  },
  {
    index: "02",
    title: "실제 결과와 다시 대조한다",
    body: "얼굴, 카메라, 빛, 동작, 편집 연결에서 무엇이 재현됐는지 확인하고, 한 번의 취향이나 미완성 생각은 제외합니다.",
  },
  {
    index: "03",
    title: "검토된 규칙만 05 memory로 올린다",
    body: "다음 곡이 과거의 전체 대화를 읽지 않아도 되도록, 반복 가능한 판단만 skill·creative bank·memory의 짧은 규칙으로 승격합니다.",
  },
];

const inkEvidenceGroups = [
  {
    label: "CASE EVIDENCE / INK / 02A",
    title: "전체 곡의 컷과 세계를 먼저 읽는다",
    body: "IDOL production system이 실제로 남긴 사례입니다. 완성 이미지의 미감보다 장면의 배경, 인물, 오브젝트, 전환이 곡 전체에서 이어지는지 확인했습니다.",
    items: [
      {
        title: "S00–S03 / Opening route",
        detail: "해안, 문, 물, 인물의 첫 진입과 오브젝트 단서를 한 흐름으로 검토",
        src: "/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp",
      },
      {
        title: "S04–S07 / Pressure and movement",
        detail: "도시, 사막, 물길, 신체 제약과 움직임 방향을 같은 화면에서 비교",
        src: "/ai-exploration/ink/contact-sheets/ink-s04-s07-keyframe-sheet-v3.webp",
      },
      {
        title: "S08–S10 / Room and relay",
        detail: "의자, 원형 구조, 인물 관계, 빛의 경로가 이어지는지 확인",
        src: "/ai-exploration/ink/contact-sheets/ink-s08-s10-keyframe-sheet-v3.webp",
      },
      {
        title: "S11–S12 / Closing route",
        detail: "인물, 오브젝트, 빛의 마지막 방향이 엔딩으로 수렴하는지 확인",
        src: "/ai-exploration/ink/contact-sheets/ink-s11-s12-keyframe-sheet-v3.webp",
      },
    ],
  },
  {
    label: "CASE EVIDENCE / INK / 02B",
    title: "통과한 컷도 움직임과 시간 단위로 다시 본다",
    body: "한 장의 결과를 그대로 넘기지 않고, 자세, 카메라, 오브젝트 움직임이 다음 컷으로 이어질 수 있는지 비교했습니다.",
    items: [
      {
        title: "S07 / Motion candidate board",
        detail: "rap face, lens surge, shoulder stop, boot/fabric pull을 모션 의도로 분해",
        src: "/ai-exploration/ink/contact-sheets/section-S07-v2-inserts-part-01.webp",
      },
      {
        title: "S08 / Environment transition board",
        detail: "four chairs, black water, ceiling reflection, mask light를 배경 변화와 행동으로 검토",
        src: "/ai-exploration/ink/contact-sheets/section-S08-v2-inserts-part-01.webp",
      },
    ],
  },
  {
    label: "CASE EVIDENCE / INK / REUSABLE RULES",
    title: "배경과 오브젝트도 다음 후보의 판단 기준으로 남긴다",
    body: "environment reference와 object system은 별도 완성작이 아니라 이후 후보가 같은 세계에 속하는지 판단하기 위한 기준판입니다.",
    items: [
      {
        title: "Environment reference contact sheet",
        detail: "해안, 복도, 천, 암석, 물, 빛의 질감을 배경 후보군으로 비교",
        src: "/ai-exploration/ink/contact-sheets/ink-space-reference-contact-sheet-v1.webp",
      },
      {
        title: "Canonical object system",
        detail: "ring, book, watch, mask가 장면 사이의 의미를 이어가도록 기준화",
        src: "/ai-exploration/ink/contact-sheets/ink-canonical-object-system-contact-sheet-v1.webp",
      },
    ],
  },
];

const mediaToolchain = [
  {
    tool: "yt-dlp",
    applications: "공개·사용 허용 범위의 레퍼런스를 로컬 분석 자료로 확보하고 원본 출처와 분리해 관리",
    retained: "원본을 포트폴리오에 재배포하지 않고 프레임·컨택트시트·보고서만 판단 근거로 사용",
  },
  {
    tool: "ffprobe",
    applications: "duration, frame rate, geometry, codec, color metadata를 읽어 후보 파일의 실제 상태 확인",
    retained: "모르는 값은 추정하지 않고 unknown으로 남김",
  },
  {
    tool: "OpenCV",
    applications: "optical flow 기반 motion peak와 frame sampling으로 움직임이 큰 구간을 우선 탐색",
    retained: "motion score는 관찰 보조일 뿐 좋은 컷을 자동 선택하지 않음",
  },
  {
    tool: "librosa",
    applications: "beat, onset, RMS, energy jump, harmonic/percussive cue를 편집 후보 시점으로 정리",
    retained: "분석값은 edit assist이며 컷 타이밍의 창의적 lock이 아님",
  },
  {
    tool: "Pillow + ffmpeg",
    applications: "시간표시 프레임, keyframe sheet, source sheet, 1-second QC sheet를 한 화면에 생성",
    retained: "사람이 연속성, 물리성, 개연성, 장면 역할을 비교",
  },
  {
    tool: "MoviePy + YAML",
    applications: "source in/out, 순서, duration을 recipe로 바꾸고 roughcut과 preview를 재생성",
    retained: "recipe 수정과 최종 pass·hold는 사람이 수행",
  },
  {
    tool: "PyYAML + JSON Schema",
    applications: "stage artifact, edit recipe, package의 필수 필드와 경로, 상태 계약 검증",
    retained: "형식 검증과 콘텐츠 품질 판단을 분리",
  },
];

const editSteps = [
  ["01", "Inspect", "영상 후보의 metadata와 source lineage를 먼저 확인"],
  ["02", "Summarize", "프레임과 motion peak를 시간표시 컨택트시트로 요약"],
  ["03", "Choose", "연속성, 물리성, 개연성, 컷 역할을 기준으로 사람이 선택"],
  ["04", "Recipe", "source in/out, 순서, 속도, duration을 수정 가능한 YAML로 기록"],
  ["05", "Render & QC", "roughcut과 QC sheet를 다시 만들고 재생 후 pass·hold·수정"],
];

const editEvidence = [
  {
    label: "IDOL / 04 / SOURCE-CLEAN QC",
    title: "1-second full contact sheet",
    body: "최종 master의 화면 흐름을 한 장에서 읽고, 질감과 움직임의 연속성을 다시 점검한 실제 QC 시트입니다.",
    src: "/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg",
  },
  {
    label: "IDOL / 04 / ENDING QC",
    title: "Ending transition sheet",
    body: "엔딩의 깃발, 트로피, 로고 hold가 한 호흡으로 연결되는지 확인한 실제 프레임 시트입니다.",
    src: "/ai-exploration/edit-qc/pulso-v6-logo-tail-qc.jpg",
  },
];

const contractElements = [
  {
    index: "01",
    label: "Registration",
    title: "EIP-712 permit",
    body: "creator, ideaId, metadataHash, seedWallet, deadline, nonce를 서명된 등록 단위로 묶었습니다.",
    state: "SIGNED PERMIT / REPLAY GUARD",
  },
  {
    index: "02",
    label: "Authority",
    title: "Owner and operator gates",
    body: "등록, 종료, 후원 기록, 구조 요청 권한을 역할별로 나누고 명시적 error로 실패시킵니다.",
    state: "EXPLICIT ROLE BOUNDARY",
  },
  {
    index: "03",
    label: "Evidence",
    title: "Event-only funding record",
    body: "금액을 보관하는 금융 계약이 아니라 idea, funder, reward, quantity, ref를 이벤트로 남기는 registry를 탐구했습니다.",
    state: "SOURCE ARTIFACT / NOT DEPLOYMENT CLAIM",
  },
];

const trustFlowSteps = [
  ["01", "Browse", "ACP market", "외부 agent·offering 후보를 읽고 중복을 제거한 snapshot으로 고정"],
  ["02", "Plan", "Trust API", "요청, 예산, 우선순위, 제약, 이전 평가 메모리를 반영해 실행 경로 구성"],
  ["03", "Execute", "Job + polling", "선택 plan의 stage별 job을 만들고 terminal 상태와 receipt를 기록"],
  ["04", "Review", "Strict buyer review", "요건 35 · 품질 30 · 제약 20 · 실행 안정성 15로 pass·concern·fail 판정"],
  ["05", "Record", "Canonical Trust", "선택·실행·리뷰를 다음 추천에 쓸 기록으로 남기고 기록 실패는 별도 표시"],
];

const aheyaOperatingRecords = [
  {
    index: "01",
    label: "Implementation proof",
    title: "OpenClaw Yui flow",
    body: "candidate snapshot, selected plan, stage run, deliverable, strict review, canonical 상태를 하나의 함수 흐름으로 구현했습니다.",
    state: "IMPLEMENTED / MARKET RESULT NOT CLAIMED",
  },
  {
    index: "02",
    label: "Failure boundary",
    title: "Delivery is not recording",
    body: "산출물이 성공해도 canonical write가 실패하면 recordingStatus를 failed로 남겨, 결과와 기억을 같은 성공으로 취급하지 않습니다.",
    state: "SEPARATE SUCCESS AXES",
  },
  {
    index: "03",
    label: "Operating evidence",
    title: "Redacted evidence ledger",
    body: "공개 X 기록과 집계 데이터는 계정·원문·개별 URL 없이 수치와 한계만 남겨 제품 표면의 존재를 확인합니다.",
    state: "AGGREGATE / NOT COMMERCIAL PERFORMANCE",
  },
];

const aheyaAggregateSnapshot = [
  ["65", "published ideas"],
  ["41", "verified quest submissions"],
  ["38", "public feedback proofs"],
  ["958", "Trust signals"],
];

const motionLineage = [
  {
    index: "01",
    label: "Aurora V1",
    title: "보관 자료는 현재 제작 근거와 분리",
    detail: "V2 이전 자료는 legacy archive로 남기고, 구체적인 빈칸을 복구할 때만 현재 구조의 언어로 다시 해석합니다.",
    state: "ARCHIVE ONLY / NOT ACTIVE TRUTH",
  },
  {
    index: "02",
    label: "Aurora V2",
    title: "후보 문법은 잠금 상태로 보류",
    detail: "23개 후보와 12개 검토 기록은 참고 후보일 뿐 source truth나 자동 prompt transfer 근거가 아닙니다.",
    state: "REFERENCE LOCKED / CANDIDATE ONLY",
  },
  {
    index: "03",
    label: "IDOL",
    title: "리뷰된 움직임만 제작 메모로 승격",
    detail: "오디오 cue를 몸, 오브젝트, 카메라, 컷 타이밍으로 번역하고 실제 편집 리뷰를 통과한 판단만 performance memory에 남깁니다.",
    state: "PRODUCTION MAP / REVIEWED REUSE",
  },
];

const toolApplications = [
  {
    tool: "Codex",
    applications: "초기 기획 발산, 레퍼런스 확장, production contract와 스크립트·도구 구현, 검증과 문서화",
    retained: "첫 단추의 메시지, 모티브, 방향, 확장 금지선은 제가 정하고 AI가 다른 길로 새지 않게 조정",
  },
  {
    tool: "Grok",
    applications: "출처 탐색, 빠른 시각 후보, 짧은 움직임 테스트, 제가 확인한 후보의 추가 탐색",
    retained: "모델 답을 사실로 확정하지 않고 원문과 실제 결과를 다시 확인",
  },
  {
    tool: "Hermes / OpenClaw",
    applications: "queue, schedule, 상태 요약, agent 후보·실행·검토·기록 흐름 실험",
    retained: "창의 판단을 넘기지 않고 운영 상태와 예외를 보이게 만드는 역할",
  },
  {
    tool: "Python toolchain",
    applications: "영상·오디오 분석, 프레임·컨택트시트, roughcut, QC, schema 검증",
    retained: "반복 관찰과 재실행은 자동화하고 컷 선택과 최종 승인에 시간을 사용",
  },
  {
    tool: "Image / video models",
    applications: "이미지 keyframe, 영상 clip, motion candidate를 역할과 단계에 맞게 생성",
    retained: "모델 자체의 우열보다 현재 장면의 메시지, 톤, 연속성, 비용에 맞는지 판단",
  },
];

const aiExperienceTranslation = [
  {
    index: "01",
    label: "Explore",
    title: "새 기능을 작업 단위로 해석",
    proof: "Workbench + Python media toolchain",
    meaning: "기능 목록을 정리하는 데서 끝내지 않고 기획, 후보 선택, 편집, 검수 중 어디에 연결되는지 시험합니다.",
  },
  {
    index: "02",
    label: "Apply",
    title: "하나의 기술을 여러 방식으로 사용",
    proof: "Python을 분석·컨택트시트·roughcut·QC·검증에 적용",
    meaning: "같은 도구도 결과 생성보다 관찰 자료, 반복 제거, 판단 보조에 다르게 배치합니다.",
  },
  {
    index: "03",
    label: "Expand",
    title: "콘텐츠에서 서비스 구조까지 확장",
    proof: "IDOL production system + AHEYA contract/Yui",
    meaning: "AI 영상 제작에서 얻은 구조화 방식을 신뢰 기록, 외부 agent 실행, 서비스 행동의 문제로 넓혔습니다.",
  },
  {
    index: "04",
    label: "Archive",
    title: "결과보다 판단 계보를 공유",
    proof: "Stage registry, contact sheet, output registry, strict review",
    meaning: "무엇을 통과·보류했고 어떤 근거에서 다음 단계로 갔는지 다시 읽을 수 있게 남깁니다.",
  },
  {
    index: "05",
    label: "Collaborate",
    title: "자동화와 사람의 책임을 분리",
    proof: "Owner boundary, human approval gate, handoff, failure status",
    meaning: "AI는 자료와 상태를 다루고, 메시지, 선택, 유료 실행, 외부 공개는 사람이 책임지는 협업 구조를 만듭니다.",
  },
];

const holdReasons = [
  {
    attempt: "완전 자동 MV 생산",
    state: "Reframed",
    why: "한 편에 필요한 이미지·영상 후보량과 추가 API 비용을 계산해, 반복 작업만 자동화하고 창의 판단과 승인 게이트는 남겼습니다.",
  },
  {
    attempt: "같은 과업의 모델 우열 비교",
    state: "Not claimed",
    why: "동일 조건의 보존된 비교 로그가 없어 Codex와 Grok 중 어느 모델이 더 낫다고 주장하지 않습니다. 실제 역할 분리만 보여줍니다.",
  },
  {
    attempt: "전문 편집 소프트웨어 대체",
    state: "Scoped down",
    why: "Premiere·CapCut 전체 기능보다 후보 선택, 순서, 타이밍, source 관리라는 실제 병목을 줄이는 도구로 범위를 좁혔습니다.",
  },
  {
    attempt: "스마트계약 배포·agent 시장 성과",
    state: "Boundary kept",
    why: "소스와 실행 구조는 확인되지만 상용 배포, 지속 거래, 시장 성과를 뒷받침할 보존 근거는 없어 구현 탐구로만 제시합니다.",
  },
  {
    attempt: "Workbench production acceptance",
    state: "Development checkpoint",
    why: "네이티브 실행과 테스트는 통과했지만 real-song pilot, 대형 보드 성능, 실제 I2I 검증이 남아 있어 production-complete로 쓰지 않습니다.",
  },
];

function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.01, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  index,
  label,
  title,
  body,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionIndex}>{index}</div>
      <div>
        <span className={styles.eyebrow}>{label}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

function EvidenceLinks({
  sources,
  className,
  linkClassName,
}: {
  sources: typeof harnessEvidenceSources;
  className: string;
  linkClassName: string;
}) {
  return (
    <div className={className}>
      {sources.map((source) => (
        <Link className={linkClassName} href={`/ai-exploration/motion-bank/${source.slug}`} key={source.slug}>
          <span>{source.system}</span>
          <strong>{source.fileName}</strong>
          <small>{source.state}</small>
          <ExternalLink aria-hidden="true" size={16} />
        </Link>
      ))}
    </div>
  );
}

export function AiExplorationPage() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    damping: 28,
    mass: 0.25,
    stiffness: 150,
  });

  return (
    <main className={styles.page}>
      <motion.div className={styles.progress} style={{ scaleX: progress }} />

      <header className={styles.topbar}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>YS</span>
          <span>AI Creative</span>
        </Link>
        <nav aria-label="AI Exploration navigation" className={styles.nav}>
          <a href="#journey">Journey</a>
          <a href="#systems">Systems</a>
          <a href="#harness">Harness</a>
          <a href="#toolchain">Python</a>
          <a href="#aheya">AHEYA</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <img
          alt="IDOL Front Planning Workbench development demo"
          className={styles.heroImage}
          src="/ai-exploration/workbench/one-move-front-planning-workbench-clean-2026-07-29.png"
        />
        <div className={styles.heroShade} />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroCopy}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.heroLabel}>GENTLE MONSTER / AI EXPERIENCE PROCESS PORTFOLIO</span>
          <h1>AI EXPLORATION</h1>
          <p className={styles.heroStatement}>기획만 명확하다면, 한 사람이 AI를 하네싱해 스튜디오처럼 반복 가능한 영상 제작 루프를 만들 수 있을까?</p>
          <p className={styles.heroBody}>
            AHEYA의 제품 실험에서 시작해 Yui, 26개의 IDOL 제작 단위, 여러 MV의 성공과 폐기, INK, Workbench까지.
            새 기술을 발견할 때마다 어떤 제작 병목에 적용했고, 실패가 다음 구조를 어떻게 바꿨는지 보여줍니다.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#journey">
              실험의 흐름 보기 <ArrowDown size={17} />
            </a>
            <a className={styles.secondaryAction} href="#application">
              JD 연결 보기 <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
        <div className={styles.heroFoot}>
          <span>26 production units</span>
          <span>13 MV + 13 STAGE</span>
          <span>8 phases / 29 stages</span>
          <span>INK / current proof</span>
        </div>
      </section>

      <section className={styles.introBand}>
        <Reveal className={styles.introInner}>
          <span className={styles.eyebrow}>Working principle</span>
          <p className={styles.introStatement}>
            최신 AI를 안다는 말보다, 어디에서 무엇을 해결하기 위해 시험했고 그 결과 작업 방식이 어떻게 바뀌었는지를 보여주겠습니다.
          </p>
          <div className={styles.roleGrid}>
            {workingPrinciples.map((role) => (
              <article key={role.index}>
                <span>{role.index}</span>
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.journeySection} id="journey">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="X와 공식 문서·강연·기술 글에서 변화를 찾고, 실제 MV 제작의 병목에 붙여 봅니다. 유행을 기록하는 것으로 끝내지 않고, 작업 방식이 바뀐 경우에만 다음 하네스에 남깁니다."
            index="01"
            label="Trend to production / repeated exploration"
            title="새로운 AI 변화는, 실제 제작에서 무엇을 바꿀 수 있었을까?"
          />

          <div className={styles.trendSignalGrid}>
            {trendSignals.map((signal, index) => (
              <article key={signal.label}>
                <span>{String(index + 1).padStart(2, "0")} / {signal.label}</span>
                <h3>{signal.question}</h3>
                <p>{signal.experiment}</p>
                <strong>바뀐 점: {signal.conclusion}</strong>
              </article>
            ))}
          </div>

          <div className={styles.timelineHeading}>
            <span>Experiment journal / 2025.12–2026.07</span>
            <h3>무엇을 만들었는가보다, 다음 구조를 바꾼 순간을 남겼습니다.</h3>
            <p>각 장면은 AHEYA, Aurora V2, IDOL repository의 run·review·handoff 기록과 공개 source를 대조해 압축했습니다.</p>
          </div>

          <div className={styles.journeyRoute}>
            {journeyChapters.map((item) => (
              <article key={item.index}>
                <div className={styles.timelineMeta}>
                  <span>{item.index}</span>
                  <small>{item.period}</small>
                  <strong>{item.label}</strong>
                </div>
                <div className={styles.timelineStory}>
                  <h3>{item.title}</h3>
                  <div className={styles.journeyColumns}>
                    <div>
                      <span>확인한 것</span>
                      <p>{item.finding}</p>
                    </div>
                    <div>
                      <span>다음에 바꾼 것</span>
                      <p>{item.next}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <figure className={styles.identityProofFigure}>
            <figcaption>
              <span>Visual identity proof / Loom Signal Deck</span>
              <strong>13명의 얼굴을 캐릭터 보드 설명이 아니라 실제 visual reference로 고정했습니다.</strong>
              <p>Aurora의 MV·STAGE 생성은 이 얼굴 reference를 identity lock으로 사용했고, 이후 LOW의 실패를 거치며 reference 없는 설명 중심 생성은 폐기했습니다.</p>
            </figcaption>
            <img alt="Loom Signal Deck main page showing member signals and the active visual identity" src="/loom-deck/01-home-desktop.png" />
          </figure>
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.loopExperiment}`} id="systems">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="이 페이지의 핵심은 파일 목록이 아니라, AHEYA에서 시작해 기획·생성·관찰·발행·다음 기획으로 돌아오는 하나의 제작 구조입니다."
            index="02"
            label="Connected harness / architecture"
            title="한 편을 만들고 끝내지 않으려면, 어떤 흐름이 필요할까?"
          />

          <div className={styles.architectureLead}>
            <GitBranch size={24} />
            <p>자동화는 반복 상태와 관찰을 맡고, 메시지·장면·승인 같은 창의적 책임은 사람이 남깁니다.</p>
          </div>

          <div aria-label="AHEYA to IDOL connected production harness" className={styles.harnessArchitecture}>
            {harnessArchitecture.map((node, index) => (
              <article key={node.index}>
                <div className={styles.architectureMeta}>
                  <span>{node.index}</span>
                  <small>{node.lane}</small>
                </div>
                <h3>{node.title}</h3>
                <p>{node.body}</p>
                <strong>{node.output}</strong>
                {index < harnessArchitecture.length - 1 ? <ArrowDown aria-hidden="true" size={18} /> : null}
              </article>
            ))}
          </div>

          <div className={styles.channelLearningLoop}>
            <div className={styles.channelLearningIntro}>
              <ChartNoAxesCombined size={24} />
              <div>
                <span>Channel learning loop / public snapshot</span>
                <h3>발행 뒤의 신호는, 다음 생성의 정답이 아니라 다음 질문의 재료입니다.</h3>
                <p>
                  {channelPerformanceSnapshot.contentCases[0].metrics} 공개 수치에는 TikTok admin audience 데이터나 인과 분석이 없으므로, 채널·콘텐츠 신호로만 해석합니다.
                </p>
              </div>
            </div>
            <div className={styles.channelLearningSteps}>
              {releaseLearningSteps.map(([index, title, body]) => (
                <article key={index}>
                  <span>{index}</span>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.harnessBoundary}>
            <div>
              <span>What this proves</span>
              <p>AHEYA의 신뢰 기록 실험과 IDOL의 영상 제작을 분리된 작업으로 두되, 실행·검토·기록 원칙은 하나의 하네스로 이어 왔습니다.</p>
            </div>
            <div>
              <span>What this does not prove</span>
              <p>ML 연구, LLMOps 경력, 전문 개발자 경력, 상용 서비스 성과를 주장하지 않습니다.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.loopExperiment}`} id="workbench">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="아이디어, 레퍼런스, 생성 후보, 곡 순서가 여러 화면과 대화에 흩어지는 문제를 하나의 로컬 의사결정 표면으로 묶었습니다."
            index="03"
            label="IDOL / Front Planning Workbench"
            title="생성 전에, 무엇을 선택하고 보류할지 한 화면에서 볼 수 있을까?"
          />

          <div className={styles.workbenchProof}>
            <div className={styles.workbenchCopy}>
              <span className={styles.statusRunning}>Runnable development checkpoint / 2026.07.12</span>
              <h3>기획 문서와 시각 후보 사이에, 실제 판단 표면을 만들었습니다.</h3>
              <p>
                Native AppKit과 WKWebView로 동작하며 localhost를 열지 않습니다. 텍스트 계획, reference frame, 생성 후보,
                infinite canvas, Sequence Rail, contact sheet, pass·revise·hold를 연결하고, review 결과는 source hash가 있는
                readiness record로만 다음 단계에 넘깁니다.
              </p>
              <div className={styles.workbenchSignals}>
                <div>
                  <span>Implemented</span>
                  <strong>live plan · frame intake · candidate canvas · Sequence Rail · review</strong>
                </div>
                <div>
                  <span>Verified</span>
                  <strong>native build/tests · provider turns · persistence/reopen · no TCP listener</strong>
                </div>
                <div>
                  <span>Still open</span>
                  <strong>real-song pilot · real I2I · 150/500-card performance · signed app packaging</strong>
                </div>
              </div>
            </div>
            <figure className={styles.workbenchFigure}>
              <img alt="ONE MOVE Front Planning Workbench current run" src="/ai-exploration/workbench/one-move-front-planning-workbench-clean-2026-07-29.png" />
              <figcaption>Development demo board. 실제 곡의 최종 선택이나 production acceptance 화면이 아닙니다.</figcaption>
            </figure>
          </div>

          <EvidenceLinks
            className={styles.workbenchSourceList}
            linkClassName={styles.workbenchSourceLink}
            sources={workbenchEvidenceSources}
          />
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.loopExperiment}`} id="harness">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="IDOL repository의 production system은 한 작품의 workflow proof가 아니라, 리서치부터 공개와 학습까지 판단 소유권과 승인 경계를 유지하기 위한 전체 하네스입니다."
            index="04"
            label="IDOL / Full production system"
            title="제작이 길어져도, 판단과 책임을 잃지 않으려면?"
          />

          <div className={styles.harnessDetail}>
            <div className={styles.harnessHeading}>
              <div>
                <span className={styles.eyebrow}>Implemented structure / 8 phases / 29 stages</span>
                <h3>각 단계가 하나의 결정을 소유하고, 다음 단계는 그 결정을 다시 만들지 않습니다.</h3>
              </div>
              <p>
                02A는 컷·카메라·키프레임의 창의 truth를 소유하고, 02B는 이를 생성 요청으로만 컴파일합니다. 리뷰가 상류
                판단을 바꾸면 downstream 문서에서 몰래 고치지 않고 원래 owner로 돌아가 revision과 invalidation을 남깁니다.
              </p>
            </div>

            <div aria-label="IDOL production stages" className={styles.harnessStageRail}>
              {harnessStages.map((stage) => (
                <article key={stage.index}>
                  <span>{stage.index}</span>
                  <small>{stage.phase}</small>
                  <strong>{stage.codes}</strong>
                  <p>{stage.detail}</p>
                </article>
              ))}
            </div>

            <div className={styles.harnessLayers}>
              {harnessLayers.map((layer) => (
                <article key={layer.index}>
                  <span>{layer.index}</span>
                  <h4>{layer.title}</h4>
                  <strong>{layer.signal}</strong>
                  <p>{layer.body}</p>
                </article>
              ))}
            </div>

            <div className={styles.harnessBoundary}>
              <div>
                <span>Automation can</span>
                <p>현재 상태를 읽고, 누락·blocker를 찾고, 계약을 검증하고, 다음 작업 단위와 재개 포인터를 갱신합니다.</p>
              </div>
              <div>
                <span>Automation cannot</span>
                <p>메시지, 카메라, 컷, 최종 선택, 유료 생성, 외부 실행, 공개 승인을 추정하거나 대신 통과시키지 않습니다.</p>
              </div>
            </div>

            <div className={styles.memoryPromotion}>
              <div className={styles.memoryPromotionHeading}>
                <span>05 / Reviewed learning</span>
                <h3>뮤직비디오 한 편의 기록을, 다음 콘텐츠가 다시 쓸 수 있는 IP memory로 어떻게 바꿀까?</h3>
                <p>전체 스킬과 지침을 공개하지 않고, 학습이 승격되는 경계만 보여줍니다.</p>
              </div>
              <div className={styles.memoryPromotionSteps}>
                {memoryPromotionSteps.map((step) => (
                  <article key={step.index}>
                    <span>{step.index}</span>
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.harnessEvidenceHeading}>
              <div>
                <span>Curated evidence archive</span>
                <h3>전체 하네스 대신, 공개해도 구조가 보이는 핵심만 남겼습니다.</h3>
              </div>
              <p>
                stage registry, queue, context pack, gate refresh, INK output registry의 핵심 계약만 발췌합니다. 운영 전문,
                현재 run 내용, 인증 정보는 공개하지 않습니다.
              </p>
            </div>

            <EvidenceLinks
              className={styles.harnessSourceList}
              linkClassName={styles.harnessSourceLink}
              sources={harnessEvidenceSources}
            />
          </div>

          <div className={styles.inkEvidenceBlock} id="ink">
            <div className={styles.inkEvidenceHeading}>
              <div>
                <span className={styles.eyebrow}>CASE EVIDENCE / IDOL / INK</span>
                <h3>이 구조는 실제 작업에서 어떤 판단 자료를 남겼을까?</h3>
              </div>
              <p>
                INK는 이 페이지의 주인공이 아니라 하네스가 남긴 사례입니다. 같은 결과도 02A에서는 전체 컷과 세계,
                02B에서는 움직임 후보, reference board에서는 재사용 기준을 확인하는 서로 다른 증거로 사용했습니다.
              </p>
            </div>

            <div className={styles.inkVideoBlock}>
              <div className={styles.inkVideoCopy}>
                <span>Current public proof / INK</span>
                <h4>실험의 결과는, 실제 한 편의 흐름으로 이어졌을까?</h4>
                <p>
                  현재는 INK 한 편만 공개 증거로 둡니다. One Move는 action sequence 실험이 끝난 뒤 성공과 실패를 함께
                  정리할 수 있을 때 추가합니다.
                </p>
              </div>
              <div className={styles.inkVideoFrame}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  src="https://www.youtube.com/embed/TyONE0lKI2s"
                  title="Loom - Ink Final Master V24"
                />
              </div>
            </div>

            <div className={styles.inkEvidenceGroups}>
              {inkEvidenceGroups.map((group) => (
                <section className={styles.inkEvidenceGroup} key={group.label}>
                  <div className={styles.inkEvidenceGroupHeader}>
                    <span>{group.label}</span>
                    <h4>{group.title}</h4>
                    <p>{group.body}</p>
                  </div>
                  <div className={styles.inkEvidenceGrid}>
                    {group.items.map((item) => (
                      <figure className={styles.inkEvidenceFigure} key={item.src}>
                        <img alt={item.title} src={item.src} />
                        <figcaption>
                          <strong>{item.title}</strong>
                          <p>{item.detail}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className={styles.inkEvidenceBoundary}>
              <FileStack size={21} />
              <p>
                실제로 남아 있는 catalog derivative와 registered output만 선별했습니다. 전체 계보와 최종 승인 경계는{" "}
                <Link href="/ai-exploration/motion-bank/ink-output-registry">INK output registry 발췌</Link>에서 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.editExperiment}`} id="toolchain">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="생성된 영상 후보를 눈으로만 반복 재생하지 않도록, 분석·요약·편집 초안·검수에 필요한 로컬 Python 환경과 도구를 묶었습니다."
            index="05"
            label="IDOL / Python media toolchain"
            title="후보가 수백 개가 되면, 무엇을 먼저 자동화해야 할까?"
          />

          <div className={styles.applicationTable} role="table" aria-label="Python media toolchain">
            <div className={styles.tableHeader} role="row">
              <span role="columnheader">Tool</span>
              <span role="columnheader">Automated observation</span>
              <span role="columnheader">Human decision retained</span>
            </div>
            {mediaToolchain.map((item) => (
              <div className={styles.tableRow} key={item.tool} role="row">
                <strong role="cell">{item.tool}</strong>
                <p role="cell">{item.applications}</p>
                <p role="cell">{item.retained}</p>
              </div>
            ))}
          </div>

          <div className={styles.editSequence}>
            {editSteps.map(([index, title, body]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className={styles.boundaryLine}>
            <Film size={24} />
            <p>
              목표는 Premiere Pro나 CapCut을 복제하는 것이 아닙니다. 후보 선택, 순서, 타이밍, source 관리라는 실제
              병목을 줄이고, 메시지와 장면 흐름을 고르는 일에 시간을 돌려주는 편집 보조 구조입니다. yt-dlp는 공개·사용
              허용 범위의 레퍼런스를 로컬 분석할 때만 쓰고 원본 영상은 포트폴리오에 재배포하지 않습니다.
            </p>
          </div>

          <div className={styles.harnessEvidenceHeading}>
            <div>
              <span>Implementation excerpts</span>
              <h3>패키지 이름보다, 실제로 어떤 관찰과 재실행을 만들었는지 보여줍니다.</h3>
            </div>
            <p>고정 런타임, source intake, beat-aware roughcut의 핵심만 공개하고 전체 제작 recipe와 운영 파일은 제외합니다.</p>
          </div>

          <EvidenceLinks
            className={styles.harnessSourceList}
            linkClassName={styles.harnessSourceLink}
            sources={toolchainEvidenceSources}
          />
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.agentExperiment}`} id="aheya">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="AHEYA에서는 AI를 콘텐츠 생성에만 쓰지 않고, 제품의 신뢰 기록과 외부 agent 실행을 어떤 구조로 만들 수 있는지 개발 수준까지 탐구했습니다."
            index="06"
            label="AHEYA / Contract + Trust automation"
            title="콘텐츠 밖의 기술 구조도, AI와 함께 끝까지 파고들 수 있을까?"
          />

          <div className={styles.trustEvidenceBand}>
            <div className={styles.evidenceBlock}>
              <span className={styles.statusObserved}>Public source artifact</span>
              <h3>제품 아이디어와 후원 기록의 책임을 스마트계약으로 내려가 보았습니다.</h3>
              <p>
                EIP-712 permit, deadline, nonce replay guard, creator allowlist, owner/operator gate, event-only funding record를
                실제 Solidity source로 구성했습니다. 비개발 전공자가 AI를 활용해 제품의 행동과 책임 경계를 코드 수준까지
                검토한 근거이며, 상용 배포나 운영 성과를 뜻하지 않습니다.
              </p>
            </div>
            <div className={styles.trustSourceList}>
              <a className={styles.trustSourceLink} href={AHEYA_CONTRACT_URL} rel="noreferrer" target="_blank">
                <span>AHEYA / GITHUB PUBLIC ARCHIVE</span>
                <strong>AheyaEvmFundingRegistryRecord.sol</strong>
                <small>Actual public source · EIP-712 permit · operator-gated record</small>
                <ExternalLink aria-hidden="true" size={16} />
              </a>
              {contractEvidenceSources.map((source) => (
                <Link className={styles.trustSourceLink} href={`/ai-exploration/motion-bank/${source.slug}`} key={source.slug}>
                  <span>{source.system}</span>
                  <strong>{source.fileName}</strong>
                  <small>{source.state}</small>
                  <ExternalLink aria-hidden="true" size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div aria-label="AHEYA smart contract elements" className={styles.aheyaOperatingRecords}>
            {contractElements.map((record) => (
              <article key={record.index}>
                <span>{record.index}</span>
                <small>{record.label}</small>
                <h3>{record.title}</h3>
                <p>{record.body}</p>
                <strong>{record.state}</strong>
              </article>
            ))}
          </div>

          <div className={styles.harnessDetail}>
            <div className={styles.harnessHeading}>
              <div>
                <span className={styles.eyebrow}>OpenClaw Yui / Trust API automation</span>
                <h3>한 번의 agent 실행을, 다음 선택의 근거로 바꿀 수 있을까?</h3>
              </div>
              <p>
                Yui는 단순 workflow proof가 아닙니다. 외부 marketplace 후보를 snapshot으로 고정하고, AHEYA Trust API로
                plan을 만든 뒤 실제 job 실행, strict buyer review, canonical record까지 연결하도록 구현한 자동화 흐름입니다.
              </p>
            </div>

            <div aria-label="AHEYA OpenClaw orchestration flow" className={styles.trustFlow}>
              {trustFlowSteps.map(([index, title, system, detail], stepIndex) => (
                <article key={index}>
                  <span>{index}</span>
                  <small>{system}</small>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  {stepIndex < trustFlowSteps.length - 1 ? <ArrowRight aria-hidden="true" size={18} /> : null}
                </article>
              ))}
            </div>

            <div aria-label="AHEYA operating records" className={styles.aheyaOperatingRecords}>
              {aheyaOperatingRecords.map((record) => (
                <article key={record.index}>
                  <span>{record.index}</span>
                  <small>{record.label}</small>
                  <h3>{record.title}</h3>
                  <p>{record.body}</p>
                  <strong>{record.state}</strong>
                </article>
              ))}
            </div>

            <div className={styles.aheyaAggregateBand}>
              <div>
                <span>Redacted product evidence / 2026.05 snapshot</span>
                <p>
                  계정, 원문, 개인 URL을 제외한 test/runtime 집계입니다. 제품 표면의 존재를 확인하는 자료이며 사용자 성장,
                  매출, 파트너십 성과로 해석하지 않습니다.
                </p>
              </div>
              <div className={styles.aheyaAggregateGrid}>
                {aheyaAggregateSnapshot.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.trustEvidenceBand}>
              <div className={styles.evidenceBlock}>
                <span className={styles.statusObserved}>Evidence boundary</span>
                <h3>구현과 결과, 결과와 기록을 같은 성공으로 쓰지 않습니다.</h3>
                <p>
                  공개 archive는 제품 코드와 개발 이력을, private Yui source는 Trust execution 구조를 증명합니다. 실제 한
                  건의 시장 거래 결과나 지속 자율 운영 성과는 보존 근거를 찾지 못해 주장하지 않습니다.
                </p>
              </div>
              <div className={styles.trustSourceList}>
                <a className={styles.trustSourceLink} href={AHEYA_PUBLIC_ARCHIVE_URL} rel="noreferrer" target="_blank">
                  <span>AHEYA / GITHUB PUBLIC ARCHIVE</span>
                  <strong>aheya-public-archive</strong>
                  <small>Sanitized product code · contract · archived development history</small>
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
                {trustEvidenceSources.map((source) => (
                  <Link className={styles.trustSourceLink} href={`/ai-exploration/motion-bank/${source.slug}`} key={source.slug}>
                    <span>{source.system}</span>
                    <strong>{source.fileName}</strong>
                    <small>{source.state}</small>
                    <ExternalLink aria-hidden="true" size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.motionExperiment}`} id="archive">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="서로 다른 시기의 파일을 하나의 AI 데이터로 섞지 않고, 보관 자료, 잠긴 후보, 제작 지시, 리뷰된 학습을 상태별로 분리합니다."
            index="07"
            label="Motion Bank / Archive lineage"
            title="기록이 많아질수록, 무엇을 다시 써도 되는지 어떻게 알 수 있을까?"
          />

          <div className={styles.motionLineage}>
            {motionLineage.map((stage) => (
              <article key={stage.index}>
                <div className={styles.lineageMeta}>
                  <span>{stage.index}</span>
                  <small>{stage.label}</small>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
                <strong>{stage.state}</strong>
              </article>
            ))}
          </div>

          <div className={styles.motionEvidenceHeading}>
            <div>
              <span>Curated archive excerpts</span>
              <h3>후보는 후보로, 제작 지시는 제작 지시로 남깁니다.</h3>
            </div>
            <p>공개용 발췌는 상태와 재사용 조건만 보여주며 현재 운영 원본이나 전체 모션 데이터를 제공하지 않습니다.</p>
          </div>

          <div className={styles.motionSourceList}>
            {motionBankSources.map((source) => (
              <article className={styles.motionSourceRow} key={source.slug}>
                <div className={styles.motionSourceOrigin}>
                  <span>{source.system}</span>
                  <small>{source.period}</small>
                </div>
                <div className={styles.motionSourceFile}>
                  <code>{source.fileName}</code>
                  <span>{source.fileType}</span>
                </div>
                <div className={styles.motionSourceDescription}>
                  <strong>{source.state}</strong>
                  <p>{source.description}</p>
                </div>
                <Link
                  aria-label={`${source.fileName} 공개용 발췌 열기`}
                  className={styles.motionSourceAction}
                  href={`/ai-exploration/motion-bank/${source.slug}`}
                >
                  열기 <ExternalLink size={16} />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.applicationExperiment}`}>
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="동일 조건의 모델 우열표는 없지만, 하나의 기획 계약을 여러 도구와 로컬 도구에 어떻게 연결했는지는 Workbench와 production system에 남아 있습니다."
            index="08"
            label="Connected tools / shared project contract"
            title="도구의 우열 대신, 역할을 연결한 구조를 보여줄 수 있을까?"
          />

          <div className={styles.toolContractBand}>
            <div>
              <span>Shared across the route</span>
              <strong>message · reference role · song section · candidate state · hold reason</strong>
            </div>
            <p>
              Workbench와 IDOL harness는 이 공통 맥락을 유지하는 표면입니다. Codex/GPT와 Grok은 같은 답을 겨루게 한 것이 아니라, 이 계약 안에서 기획 확장·구현·시각 후보·짧은 움직임 test에 다르게 연결했습니다.
            </p>
          </div>

          <div className={styles.applicationTable} role="table" aria-label="AI tool applications">
            <div className={styles.tableHeader} role="row">
              <span role="columnheader">Tool</span>
              <span role="columnheader">Actual application</span>
              <span role="columnheader">Decision retained</span>
            </div>
            {toolApplications.map((item) => (
              <div className={styles.tableRow} key={item.tool} role="row">
                <strong role="cell">{item.tool}</strong>
                <p role="cell">{item.applications}</p>
                <p role="cell">{item.retained}</p>
              </div>
            ))}
          </div>

          <div className={styles.comparisonNote}>
            <Braces size={24} />
            <div>
              <span>Claim boundary</span>
              <p>
                Codex와 Grok에 같은 과업을 같은 조건으로 수행시킨 보존 기록은 없습니다. 따라서 모델의 환각률이나 품질
                우열을 개인 검증 결과처럼 쓰지 않습니다. 이 페이지가 증명하는 것은 역할 분리, 공통 맥락 유지, 실행·관찰·보류의 연결 구조입니다.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.experiment} ${styles.applicationFitSection}`} id="application">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="GENTLE MONSTER AI Experience가 요구하는 탐색, 다양한 적용, 경험 확장, 아카이빙, 협업을 각각 실제 근거와 연결했습니다."
            index="09"
            label="AI Experience / JD translation"
            title="이 실험들은, AI Experience 업무에서 어떤 역할을 할 수 있을까?"
          />

          <div className={styles.aiExperienceTranslation}>
            {aiExperienceTranslation.map((item) => (
              <article key={item.index}>
                <div className={styles.translationMeta}>
                  <span>{item.index}</span>
                  <small>{item.label}</small>
                </div>
                <h3>{item.title}</h3>
                <strong>{item.proof}</strong>
                <p>{item.meaning}</p>
              </article>
            ))}
          </div>

          <div className={styles.applicationBoundary}>
            <ShieldCheck size={22} />
            <p>
              이 페이지에는 실제 source와 구현 상태를 확인한 내용만 넣었습니다. 완료하지 않은 실험은 강점으로 바꾸지
              않고 Hold로 남기며, 프로젝트는 정규 경력이 아니라 개인·팀·산학 프로젝트의 근거로만 설명합니다.
            </p>
          </div>
        </Reveal>
      </section>

      <section className={styles.holdSection}>
        <Reveal className={styles.contentWidth}>
          <div className={styles.holdHeader}>
            <CirclePause size={28} />
            <div>
              <span className={styles.eyebrow}>Hold is also a result</span>
              <h2>멈춘 실험은, 무엇을 남겨야 다음에 쓸 수 있을까?</h2>
              <p>실패와 미검증 상태를 지우지 않고, 다음 실험에서 반복하지 않을 판단 기준으로 남깁니다.</p>
            </div>
          </div>

          <div className={styles.holdList}>
            {holdReasons.map((item, index) => (
              <article key={item.attempt}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.attempt}</h3>
                <strong>{item.state}</strong>
                <p>{item.why}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.finalSection}>
        <Reveal className={styles.finalInner}>
          <Layers3 size={32} />
          <span className={styles.eyebrow}>Final responsibility</span>
          <h2>반복은 자동화하고, 방향과 선택은 직접 책임집니다.</h2>
          <p>
            AI는 더 많은 후보와 더 빠른 관찰을 가능하게 합니다. 그러나 어떤 질문을 시작할지, 무엇을 버릴지, 어떤
            메시지와 톤을 남길지, 언제 실행하고 공개할지는 제가 결정합니다.
          </p>
          <div className={styles.finalActions}>
            <Link className={styles.primaryAction} href="/">
              <Home size={17} /> 전체 포트폴리오
            </Link>
            <Link className={styles.secondaryAction} href="/loom-workflow">
              IDOL 적용 사례 <ArrowRight size={17} />
            </Link>
            <a className={styles.secondaryAction} href={AHEYA_PUBLIC_ARCHIVE_URL} rel="noreferrer" target="_blank">
              AHEYA public archive <ExternalLink size={17} />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
