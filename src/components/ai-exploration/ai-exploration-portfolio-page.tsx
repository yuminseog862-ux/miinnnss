"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChartNoAxesCombined,
  ExternalLink,
  FileCode2,
  Home,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { PropsWithChildren } from "react";

import {
  getEvidenceDisclosureLabel,
  getEvidenceSource,
} from "@/lib/ai-exploration/motion-bank-sources";
import { channelPerformanceSnapshot } from "@/lib/portfolio-hub/channel-performance";

import styles from "./ai-exploration-portfolio.module.css";

const AHEYA_ARCHIVE_URL = "https://github.com/aheyabaraya/aheya-public-archive";

const storySpine = [
  {
    label: "출발",
    title: "AHEYA 콘텐츠",
    detail: "한 사람이 운영할 수 있는 반복 제작을 고민했습니다.",
  },
  {
    label: "첫 실험",
    title: "Aurora 26개 제작 단위",
    detail: "13명의 얼굴을 유지하며 장면을 반복 생성했습니다.",
  },
  {
    label: "전환",
    title: "뮤직비디오와 편집",
    detail: "생성 속도보다 기획과 후보 판단이 병목임을 확인했습니다.",
  },
  {
    label: "현재",
    title: "INK와 Workbench",
    detail: "기획의 맥락과 판단 기록을 다음 제작까지 이어가고 있습니다.",
  },
];

const reconstructionCases = [
  {
    index: "01",
    reference: "PREMIERE PRO · AFTER EFFECTS · CAPCUT",
    question: "SNS 영상에 정말 필요한 편집 기능은 무엇일까?",
    observation: "완성형 편집 앱 전체보다 소스 선택, 인·아웃 지점, 컷 순서, 타이밍, 마커, 연속성 검토가 먼저 필요했습니다.",
    implementation: "Python/Tk로 Source·Program 모니터와 타임라인을 만들고, ffprobe로 소스를 읽고 ffmpeg로 선택 구간을 다시 렌더링하도록 구성했습니다. OpenCV·librosa는 프레임과 비트 관찰을 보조합니다.",
    boundary: "프리미어나 애프터이펙트를 대체한다고 주장하지 않습니다. 생성 후보를 빠르게 고르고 배열하며 QC하기 위한 로컬 편집 보조 앱입니다.",
    evidenceSlug: "idol-edit-desk-implementation",
  },
  {
    index: "02",
    reference: "COMFYUI · GROK IMAGINE AGENT · FIGMA",
    question: "노드 그래프 대신, 기획자가 실제로 보고 결정해야 할 화면은 무엇일까?",
    observation: "생성 노드를 많이 연결하는 것보다 곡 구간, 레퍼런스의 역할, 후보 상태, 보류 이유와 모델 대화를 같은 맥락에서 보는 일이 더 중요했습니다.",
    implementation: "Live Plan, Planning Canvas, Sequence Rail, Contact Sheet와 Codex·Grok 터미널을 한 화면에 둔 Workbench를 만들었습니다. 생성기가 아니라 생성 전 판단과 인계를 연결하는 작업 화면입니다.",
    boundary: "ComfyUI 복제나 범용 이미지 편집기가 아닙니다. 별도 API 비용과 로컬 서버를 추가하지 않고 기존 구독형 CLI 세션과 제작 기록을 연결했습니다.",
    evidenceSlug: "front-planning-workbench-checkpoint",
  },
  {
    index: "03",
    reference: "CODEX · GROK CLI · OPENCLAW · HARNESSING",
    question: "AI에게 무엇을 맡겨야 결과가 반복되지 않을까?",
    observation: "창의적 판단까지 스크립트로 고정하면 같은 구도와 빛이 반복됐습니다. 반면 파일 경로, 실행 상태, 누락 검사, 후보 요약과 재실행은 자동화할수록 안정됐습니다.",
    implementation: "기획·생성·검토·편집·공개를 단계로 나누고, 각 단계의 입력·산출물·승인·수정 경로를 레지스트리로 연결했습니다. AI는 맥락을 이어받아 실행하고 저는 방향과 최종 통과를 결정합니다.",
    boundary: "모델을 자율 감독자로 두지 않습니다. 유료 실행, 기획 변경, 통과·보류와 공개는 명시적인 사람의 결정으로 남깁니다.",
    evidenceSlug: "idol-harness-stage-registry",
  },
];

const architectureLayers = [
  {
    index: "01",
    label: "DIRECTION",
    title: "제가 정하는 기획",
    detail: "메시지 · 곡 구간 · 레퍼런스의 역할 · 금지선 · 통과 기준",
  },
  {
    index: "02",
    label: "CONTEXT",
    title: "Workbench와 제작 기억",
    detail: "Live Plan · Canvas · 후보 상태 · 보류 이유 · 이전 결정",
  },
  {
    index: "03",
    label: "GENERATION",
    title: "세션과 API 실행",
    detail: "Codex · Grok · 이미지/영상 API · 재실행 가능한 작업 단위",
  },
  {
    index: "04",
    label: "REVIEW & EDIT",
    title: "후보 비교와 편집",
    detail: "컨택트시트 · 움직임/비트 관찰 · Edit Desk · ffmpeg preview",
  },
  {
    index: "05",
    label: "RECORD",
    title: "승인과 다음 학습",
    detail: "통과·보류 · 파일 계보 · 공개 기록 · 채널 반응 · 다음 기준",
  },
];

const turningPoints = [
  {
    index: "01",
    period: "2025.12—2026.04",
    technology: "CONTEXT-AWARE LLM · IMAGE API",
    title: "마케팅 콘텐츠를 만들려던 시도가 영상 제작 실험의 출발점이 됐습니다.",
    question: "한 사람이 운영해도 콘텐츠가 끊기지 않는 생산 구조를 만들 수 있을까?",
    attempt: "AHEYA를 개발하며 AI에게 매번 짧은 프롬프트를 주는 것보다, 서비스의 목적과 이전 결정을 같은 맥락으로 공유할 때 의도를 더 오래 유지한다는 점을 확인했습니다. 이 방식을 이미지와 짧은 영상 제작에도 적용했습니다.",
    friction: "이미지와 10초 클립의 생산량은 늘었지만 채널 반응은 계속 좋아지지 않았습니다. 더 많이 만드는 것만으로는 콘텐츠의 이유와 흐름이 생기지 않았습니다.",
    decision: "짧은 게시물을 반복하는 대신, 하나의 메시지와 톤을 가진 뮤직비디오를 만들기로 방향을 바꿨습니다.",
    images: [
      {
        src: "/aheya/aheyabaraya-homepage-2026-04-28.png",
        alt: "AHEYA service homepage",
        caption: "서비스 개발과 마케팅 콘텐츠 실험이 함께 진행되던 AHEYA",
      },
    ],
  },
  {
    index: "02",
    period: "2026.05",
    technology: "IMAGE / VIDEO API · IDENTITY CONTINUITY",
    title: "Aurora에서는 같은 얼굴을 유지한 채 장면을 반복 생산할 수 있는지 시험했습니다.",
    question: "13명의 얼굴을 유지하면서 서로 다른 26개 장면 단위를 만들 수 있을까?",
    attempt: "13개 MV 장면과 13개 스테이지 장면을 각각 독립된 실행 단위로 나누고, Loom의 비주얼 레퍼런스를 기준으로 이미지와 영상 후보를 생성했습니다. 공개 작품 26편이 아니라 반복 제작과 얼굴 유지 가능성을 확인하기 위한 구조였습니다.",
    friction: "얼굴 유지 가능성은 확인했지만, 창의적 선택까지 스크립트로 고정하자 카메라와 빛, 장면 구성이 비슷하게 반복됐습니다.",
    decision: "파일 이름과 실행 상태는 자동화하되, 장면의 메시지와 카메라 선택은 매 작업에서 다시 판단하도록 분리했습니다.",
    images: [
      {
        src: "/loom-deck/04-archive-members-desktop.png",
        alt: "Loom member identity archive",
        caption: "반복 생성의 기준이 된 Loom 멤버 비주얼 아카이브",
      },
    ],
  },
  {
    index: "03",
    period: "2026.05—06",
    technology: "AGENT / CLI · LOCAL MEDIA ANALYSIS",
    title: "첫 완성보다 중요했던 것은 실패가 다음 제작 방식을 바꾸게 하는 일이었습니다.",
    question: "프레임과 비트를 읽게 하면 AI가 후보 비교와 컷 연결을 어디까지 보조할 수 있을까?",
    attempt: "Root Signal과 Pulso를 만들며 ffprobe, OpenCV, librosa, ffmpeg로 영상과 음원을 프레임·비트·움직임 단위로 읽고 컨택트시트와 QC 자료로 바꿨습니다. AI는 앞뒤 프레임과 기획 기록을 함께 보고 연결 후보를 제안했습니다.",
    friction: "LOW에서는 얼굴 기준이 무너졌고, Left In That Night는 감정의 주인과 장면의 인과가 연결되지 않았습니다. 기술적으로 이어 붙일 수 있어도 기획이 흔들리면 영상은 살아나지 않았습니다.",
    decision: "편집 자동화보다 생성 전 기획을 먼저 고도화하고, 실패 이유를 다음 작업의 검토 기준으로 올렸습니다.",
    images: [
      {
        src: "/ai-exploration/edit-qc/root-signal-v11-contact-sheet.jpg",
        alt: "Root Signal edit contact sheet",
        caption: "Root Signal의 전체 컷 흐름을 프레임 단위로 다시 본 자료",
      },
      {
        src: "/ai-exploration/edit-qc/pulso-v6-logo-tail-qc.jpg",
        alt: "Pulso ending QC contact sheet",
        caption: "Pulso 엔딩 전환과 로고 타이밍을 비교한 QC 자료",
      },
    ],
  },
  {
    index: "04",
    period: "2026.06—현재",
    technology: "MULTIMODAL CONTEXT · WORKBENCH",
    title: "INK 이후에는 생성보다 앞단의 생각을 재사용하는 작업 화면을 만들고 있습니다.",
    question: "레퍼런스에서 느낀 감정과 구도, 이전의 보류 이유까지 AI와 같은 맥락으로 볼 수 있을까?",
    attempt: "INK에서는 곡 구간별로 인물·카메라·빛·오브젝트의 역할을 먼저 정하고, 레퍼런스 영상의 주요 프레임과 다양한 이미지 자료를 컨택트시트로 요약해 기획의 출발점으로 사용했습니다. 이후 이 기록을 한 화면에서 조립하는 Workbench를 만들었습니다.",
    friction: "수백 개 후보를 빠르게 만들 수 있어도 무엇을 만들지 흔들리면 제가 다시 병목이 됐습니다. Workbench도 실제 곡의 최종 승인 도구로 검증된 단계는 아닙니다.",
    decision: "AI가 기획을 대신하도록 두지 않고, 제가 정한 질문·레퍼런스·보류 이유를 공유한 뒤 확장과 실행을 맡기는 구조로 정리했습니다.",
    images: [
      {
        src: "/ai-exploration/workbench/front-planning-workbench-demo.png",
        alt: "Front Planning Workbench",
        caption: "기획, 레퍼런스, 후보와 보류 이유를 한 화면에 모은 개발 중인 Workbench",
      },
    ],
  },
];

const productionFlow = [
  ["01", "질문과 자료", "트렌드·공식 자료·레퍼런스"],
  ["02", "곡과 메시지", "오디오·가사·장면 의도"],
  ["03", "장면 설계", "카메라·빛·오브젝트·동작"],
  ["04", "생성 준비", "스토리보드·실행 단위·검증"],
  ["05", "후보 검토", "통과·보류·수정"],
  ["06", "편집과 QC", "순서·타이밍·연속성"],
  ["07", "공개와 기록", "게시·반응·다음 기획"],
];

const toolRoles = [
  {
    tool: "Codex / GPT",
    role: "기획 확장과 구현",
    detail: "곡 구간 분해, 많은 후보의 동시 검토, 제작 규칙과 도구 구현에 사용했습니다.",
  },
  {
    tool: "Grok",
    role: "빠른 시각·움직임 후보",
    detail: "기획 기준이 정리된 뒤 이미지와 짧은 클립 후보를 빠르게 시험하는 경로로 사용했습니다.",
  },
  {
    tool: "Python media tools",
    role: "관찰과 재실행",
    detail: "영상·오디오를 프레임, 비트, 움직임, 컨택트시트와 재사용 가능한 편집 조건으로 바꿨습니다.",
  },
  {
    tool: "OpenClaw / AHEYA",
    role: "서비스 실행과 기록",
    detail: "후보 탐색, 실행, 엄격 검토, 최종 기록을 분리하는 별도 서비스 실험에 사용했습니다.",
  },
];

const jdConnections = [
  {
    requirement: "최신 AI 기술과 트렌드 탐색",
    proof: "새 기능을 실제 제작 문제에 붙여 본 네 가지 실험과 7개월의 변화 기록",
  },
  {
    requirement: "서로 다른 유형의 AI 도구 활용",
    proof: "LLM·생성 모델·AI 에이전트·Python 분석 도구를 서로 다른 작업에 배치",
  },
  {
    requirement: "경험·콘텐츠·서비스로 확장",
    proof: "IDOL 영상과 Workbench, AHEYA 서비스·신뢰 기록 프로토타입",
  },
  {
    requirement: "실험 과정과 사고 방식",
    proof: "LOW와 Left In That Night의 중단 이유를 다음 제작 기준으로 반영",
  },
  {
    requirement: "인사이트 아카이빙과 공유",
    proof: "단계별 책임, 검토 상태, 파일 계보, 공개용 핵심 발췌",
  },
];

function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.08, once: true }}
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
      <span className={styles.sectionIndex}>{index}</span>
      <div>
        <small>{label}</small>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

function EvidenceExcerpt({ slug }: { slug: string }) {
  const source = getEvidenceSource(slug);

  if (!source) {
    return null;
  }

  const disclosureLabel = getEvidenceDisclosureLabel(source);

  return (
    <article className={styles.evidenceExcerpt}>
      <div className={styles.evidenceBar}>
        <div>
          <span>{source.system}</span>
          <strong>{source.fileName}</strong>
        </div>
        <Link aria-label={`${source.fileName} 상세 공개 범위 보기`} href={`/ai-exploration/motion-bank/${source.slug}`}>
          <ExternalLink size={15} />
        </Link>
      </div>
      <div className={styles.disclosureLine}>
        <strong>{disclosureLabel}</strong>
        <span>{source.disclosureNote ?? "원본 구조를 공개용으로 다시 쓴 요약이며 실행 정보와 인증 정보는 포함하지 않습니다."}</span>
      </div>
      <pre>{source.excerpt}</pre>
      <p>{source.description}</p>
    </article>
  );
}

function EvidenceLink({ slug }: { slug: string }) {
  const source = getEvidenceSource(slug);

  if (!source) {
    return null;
  }

  return (
    <Link className={styles.evidenceLink} href={`/ai-exploration/motion-bank/${source.slug}`}>
      <span>{getEvidenceDisclosureLabel(source)}</span>
      <strong>{source.fileName}</strong>
      <ExternalLink size={15} />
    </Link>
  );
}

export function AiExplorationPortfolioPage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 28, mass: 0.25, stiffness: 150 });

  return (
    <main className={styles.page}>
      <motion.div className={styles.progress} style={{ scaleX: progress }} />

      <header className={styles.topbar}>
        <Link className={styles.brand} href="/">
          <span>YS</span>
          <strong>AI Creative</strong>
        </Link>
        <nav aria-label="AI Research & Exploration portfolio navigation">
          <a href="#experiments">탐색</a>
          <a href="#system">제작 시스템</a>
          <a href="#ink">INK</a>
          <a href="#aheya">AHEYA</a>
          <a href="#fit">직무 연결</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <img
          alt="INK music video keyframe exploration contact sheet"
          className={styles.heroImage}
          src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp"
        />
        <div className={styles.heroShade} />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroCopy}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>AI RESEARCH & EXPLORATION / PROCESS PORTFOLIO</span>
          <h1>AI 도구를 분해해<br />제작 시스템으로<br />다시 조립합니다.</h1>
          <p>
            프리미어 프로, ComfyUI, 생성·에이전트 도구가 실제로 해결하는 작업을 파악하고, 제 기획·생성·검토 흐름에 필요한 기능만 로컬 앱과 API, 제작 규칙으로 다시 만들었습니다.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#experiments">
              실험 과정 보기 <ArrowDown size={17} />
            </a>
            <a className={styles.secondaryAction} href="#fit">
              JD 연결 보기 <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
        <div className={styles.heroMeta}>
          <span>패션마케팅 전공</span>
          <span>신입 / 졸업예정</span>
          <span>생성 · 자동화 · 인터랙션</span>
        </div>
      </section>

      <section className={styles.positioningBand}>
        <Reveal className={styles.contentWidth}>
          <p>
            저는 AI 툴을 많이 써본 사람보다, 새로운 툴이 나오면 <strong>“이 기능은 내 제작에서 무엇을 줄일 수 있는가?”를 묻고 필요한 부분을 직접 다시 만드는 사람</strong>에 가깝습니다.
          </p>
          <div className={styles.storySpine}>
            {storySpine.map((item, index) => (
              <div key={item.label}>
                <span>{String(index + 1).padStart(2, "0")} / {item.label}</span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.section} id="experiments">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="완성된 도구를 그대로 도입하기보다, 그 안에서 실제로 작동하는 작업 단위를 찾았습니다. 필요한 기능은 현재 제작 흐름에 맞게 더 작고 명확한 로컬 도구와 자동화 단계로 다시 조립했습니다."
            index="01"
            label="핵심 탐구 방식 / REVERSE ENGINEERING"
            title="기성 AI 도구에서 무엇을 가져오고, 무엇을 만들지 않았을까?"
          />

          <div className={styles.reverseEngineeringLead}>
            <div>
              <span>핵심 질문</span>
              <h3>“저 도구를 써야 하나?”보다 “저 도구는 어떤 일을 하고 있나?”에서 시작했습니다.</h3>
            </div>
            <p>구독 비용을 피하기 위한 접근이 아니라, 기능의 본질을 이해해 제 작업에 맞는 제작 루프로 바꾸기 위한 접근입니다. 기능 전체를 복제하지 않고 실제 병목을 줄이는 최소 단위만 구현했습니다.</p>
          </div>

          <div className={styles.reconstructionCases}>
            {reconstructionCases.map((item) => (
              <article key={item.index}>
                <header>
                  <span>{item.index}</span>
                  <small>{item.reference}</small>
                </header>
                <blockquote>{item.question}</blockquote>
                <dl>
                  <div>
                    <dt>관찰한 본질</dt>
                    <dd>{item.observation}</dd>
                  </div>
                  <div>
                    <dt>실제 구현</dt>
                    <dd>{item.implementation}</dd>
                  </div>
                  <div>
                    <dt>만들지 않은 것</dt>
                    <dd>{item.boundary}</dd>
                  </div>
                </dl>
                <EvidenceLink slug={item.evidenceSlug} />
              </article>
            ))}
          </div>

          <div className={styles.architectureBlueprint}>
            <div className={styles.blueprintHeading}>
              <span>IDOL / AUTOMATION ARCHITECTURE</span>
              <h3>기획만 던지고 전부 맡긴 것이 아니라, 판단이 흘러가는 구조를 만들었습니다.</h3>
              <p>앞 단계의 결정이 다음 단계의 입력이 되고, 실패하면 생성 결과를 억지로 고치는 대신 원인이 생긴 단계로 돌아갑니다.</p>
            </div>
            <div className={styles.founderRail}>
              <span>사람의 결정이 필요한 지점</span>
              <strong>방향 설정</strong>
              <strong>후보 선택</strong>
              <strong>유료 실행 승인</strong>
              <strong>최종 공개</strong>
            </div>
            <div className={styles.architectureFlow}>
              {architectureLayers.map((layer) => (
                <article key={layer.index}>
                  <span>{layer.index}</span>
                  <small>{layer.label}</small>
                  <h4>{layer.title}</h4>
                  <p>{layer.detail}</p>
                </article>
              ))}
            </div>
            <div className={styles.blueprintBoundary}>
              <span>자동화의 경계</span>
              <p><strong>자동화:</strong> 자료 정리, 상태·경로 관리, 누락 검사, 후보 요약, 반복 생성과 렌더링</p>
              <p><strong>직접 판단:</strong> 메시지, 레퍼런스의 역할, 장면 방향, 통과·보류, 비용 집행과 공개</p>
            </div>
          </div>

          <div className={styles.historyLead}>
            <span>어떻게 여기까지 왔나</span>
            <h3>이 구조는 한 번에 설계한 것이 아니라, 실패할 때마다 바뀌었습니다.</h3>
          </div>

          <div className={styles.turningPointList}>
            {turningPoints.map((item) => (
              <article key={item.index}>
                <figure>
                  <div className={item.images.length > 1 ? styles.turningVisualGrid : undefined}>
                    {item.images.map((image) => (
                      <div key={image.src}>
                        <img alt={image.alt} src={image.src} />
                        <small>{image.caption}</small>
                      </div>
                    ))}
                  </div>
                </figure>
                <div className={styles.turningCopy}>
                  <div className={styles.turningMeta}>
                    <span>{item.index}</span>
                    <small>{item.period}</small>
                    <strong>{item.technology}</strong>
                  </div>
                  <h3>{item.title}</h3>
                  <blockquote>{item.question}</blockquote>
                  <dl>
                    <div>
                      <dt>시도</dt>
                      <dd>{item.attempt}</dd>
                    </div>
                    <div>
                      <dt>막힌 지점</dt>
                      <dd>{item.friction}</dd>
                    </div>
                    <div>
                      <dt>다음 변화</dt>
                      <dd>{item.decision}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.systemSection}`} id="system">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="IDOL 제작 시스템은 AHEYA와 별개로 만든 영상 제작 구조입니다. 곡의 방향을 정한 뒤 생성, 검토, 편집, 공개와 학습까지 이어지는 반복 작업만 자동화 대상으로 삼았습니다."
            index="02"
            label="제작 시스템 / IDOL"
            title="무엇을 자동화하고, 무엇을 직접 판단했을까?"
          />

          <div className={styles.caseSummary}>
            <div>
              <span>문제</span>
              <p>기획, 생성 후보, 검토 결과가 여러 대화와 폴더에 흩어져 다음 작업을 이어가기 어려웠습니다.</p>
            </div>
            <div>
              <span>만든 것</span>
              <p>곡의 방향부터 생성, 검토, 편집, 공개 기록까지 이어지는 7단계 제작 흐름을 만들었습니다.</p>
            </div>
            <div>
              <span>내가 맡은 판단</span>
              <p>메시지, 레퍼런스의 역할, 카메라와 컷, 통과·보류, 유료 실행과 공개를 직접 결정했습니다.</p>
            </div>
            <div>
              <span>확인한 변화</span>
              <p>누락과 반복 작업은 줄었지만, 기획과 최종 선택은 자동화할수록 결과가 단조로워졌습니다.</p>
            </div>
          </div>

          <div className={styles.productionFlow}>
            {productionFlow.map(([index, title, detail]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>

          <div className={styles.systemSummary}>
            <div>
              <span>자동화한 것</span>
              <p>자료 정리, 실행 상태, 파일 경로, 누락 검증, 후보 요약, 반복 렌더링</p>
            </div>
            <div>
              <span>직접 판단한 것</span>
              <p>메시지, 레퍼런스의 역할, 카메라, 컷 순서, 통과·보류, 유료 실행, 공개</p>
            </div>
          </div>

          <div className={styles.proofFeature}>
            <div className={styles.proofCopy}>
              <span>FRONT PLANNING WORKBENCH / 개발 중인 작동 버전</span>
              <h3>생성 전에 생각과 후보를 한 화면에 모았습니다.</h3>
              <p>
                여러 대화와 폴더에 흩어진 곡 구간, 레퍼런스, 후보, 보류 이유를 한곳에서 비교하기 위해 만든 로컬 작업 화면입니다. 현재는 실행 가능한 개발 단계이며 실제 곡의 최종 승인 도구로 완성됐다고 주장하지 않습니다.
              </p>
            </div>
            <figure>
              <img alt="Front Planning Workbench development checkpoint" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
              <figcaption>실제 곡을 사용한 최종 제작 검증 전 단계</figcaption>
            </figure>
          </div>

          <div className={styles.excerptGrid}>
            <EvidenceExcerpt slug="front-planning-workbench-checkpoint" />
            <EvidenceExcerpt slug="idol-harness-stage-registry" />
            <EvidenceExcerpt slug="idol-video-source-intake" />
            <EvidenceExcerpt slug="idol-edit-desk-implementation" />
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.inkSection}`} id="ink">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="INK는 이 제작 시스템이 실제 결과로 이어진 대표 사례입니다. 완성 영상만 보여주지 않고, 어떤 기준으로 장면을 설계하고 후보를 비교했는지 함께 남겼습니다."
            index="03"
            label="적용 사례 / INK"
            title="한 편의 영상 안에서 메시지와 장면을 어떻게 이어 갔을까?"
          />

          <div className={styles.caseSummary}>
            <div>
              <span>목표</span>
              <p>곡의 감정과 메시지가 장면마다 달라지지 않으면서도 카메라와 빛은 반복되지 않게 만들고자 했습니다.</p>
            </div>
            <div>
              <span>방법</span>
              <p>곡을 구간별로 나누고, 각 구간의 인물·카메라·빛·오브젝트 역할을 먼저 정했습니다.</p>
            </div>
            <div>
              <span>결과</span>
              <p>얼굴 유지와 장면 연결이 이전 작업보다 안정됐고, 현재 공개 가능한 한 편의 영상으로 완성했습니다.</p>
            </div>
            <div>
              <span>남은 한계</span>
              <p>영상 전문가의 촬영·편집 완성도에는 미치지 못하며, 복잡한 액션의 물리성은 One Move에서 별도로 실험 중입니다.</p>
            </div>
          </div>

          <div className={styles.videoFeature}>
            <div>
              <span>공개 결과</span>
              <h3>Loom — INK</h3>
              <p>곡 구간마다 카메라, 빛, 오브젝트의 역할을 정하고, 얼굴 유지와 장면 연결을 함께 검토한 현재 대표 완성본입니다.</p>
            </div>
            <div className={styles.videoFrame}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                src="https://www.youtube.com/embed/TyONE0lKI2s"
                title="Loom - Ink Final Master"
              />
            </div>
          </div>

          <div className={styles.inkProcessGrid}>
            <figure>
              <img alt="INK opening keyframe contact sheet" src="/ai-exploration/ink/contact-sheets/ink-s00-s03-keyframe-sheet-v2.webp" />
              <figcaption>
                <span>01 / 전체 흐름</span>
                <strong>곡 구간별 배경·인물·오브젝트를 한 화면에서 비교</strong>
              </figcaption>
            </figure>
            <figure>
              <img alt="INK motion candidate board" src="/ai-exploration/ink/contact-sheets/section-S07-v2-inserts-part-01.webp" />
              <figcaption>
                <span>02 / 움직임 후보</span>
                <strong>자세·카메라·오브젝트의 다음 동작 가능성을 검토</strong>
              </figcaption>
            </figure>
            <figure>
              <img alt="INK object system reference" src="/ai-exploration/ink/contact-sheets/ink-canonical-object-system-contact-sheet-v1.webp" />
              <figcaption>
                <span>03 / 재사용 기준</span>
                <strong>장면 사이의 의미를 이어 주는 오브젝트 기준을 기록</strong>
              </figcaption>
            </figure>
          </div>

          <div className={styles.failureBand}>
            <div>
              <span>LOW</span>
              <strong>얼굴 reference 기준이 부족해 폐기</strong>
              <p>이후 face-only reference와 identity 검증을 필수 단계로 올렸습니다.</p>
            </div>
            <div>
              <span>LEFT IN THAT NIGHT</span>
              <strong>감정의 주인과 인과가 연결되지 않아 폐기</strong>
              <p>이후 생성 전에 행동·인과·모티브의 역할을 확인하도록 바꿨습니다.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.aheyaSection}`} id="aheya">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="AHEYA는 IDOL 제작 시스템과 별개의 개인 서비스 실험입니다. AI 코딩 에이전트와 함께 서비스의 실행과 신뢰 기록을 어디까지 직접 구현할 수 있는지 탐구했습니다."
            index="04"
            label="별도 서비스 실험 / AHEYA"
            title="AI를 콘텐츠 밖의 서비스 문제에도 적용할 수 있을까?"
          />

          <div className={styles.caseSummary}>
            <div>
              <span>시작한 문제</span>
              <p>AI 빌더가 아이디어를 공개하고 후원을 받는 과정에서 수수료와 신뢰 기록을 함께 다루고자 했습니다.</p>
            </div>
            <div>
              <span>만든 것</span>
              <p>스마트계약, Trust API, AI 에이전트의 후보 탐색·실행·검토·기록 흐름을 AI 코딩 도구와 함께 구현했습니다.</p>
            </div>
            <div>
              <span>확인한 것</span>
              <p>비개발 전공자도 AI와 함께 복잡한 기술 구조를 끝까지 파고들 수 있었지만, 구현 가능성이 시장 수요를 뜻하지는 않았습니다.</p>
            </div>
            <div>
              <span>중단한 이유</span>
              <p>초기 사용자 반응과 시장 조건이 약해 서비스를 더 확장하지 않았고, 구현·실행·기록을 분리한 경험만 남겼습니다.</p>
            </div>
          </div>

          <div className={styles.aheyaIntro}>
            <div>
              <span>스마트계약</span>
              <h3>후원 기록의 책임을 코드 수준까지 내려가 보았습니다.</h3>
              <p>EIP-712 서명, nonce 재사용 방지, 운영 권한, 이벤트 기반 기록을 실제 Solidity 코드로 구성했습니다. 상용 배포나 개발 경력을 주장하는 자료는 아닙니다.</p>
            </div>
            <div>
              <span>OpenClaw Yui / Trust API</span>
              <h3>AI 에이전트의 실행 결과를 다음 선택에 쓸 기록으로 바꾸었습니다.</h3>
              <p>후보 탐색, 계획, 실행, 엄격 검토, 최종 기록을 분리했습니다. 작업이 실행됐다는 사실과 그 결과가 기록됐다는 사실을 같은 상태로 취급하지 않았습니다.</p>
            </div>
          </div>

          <div className={styles.excerptGridTwo}>
            <EvidenceExcerpt slug="aheya-evm-funding-registry" />
            <EvidenceExcerpt slug="aheya-openclaw-orchestration-flow" />
          </div>

          <a className={styles.archiveLink} href={AHEYA_ARCHIVE_URL} rel="noreferrer" target="_blank">
            AHEYA 공개 아카이브에서 실제 코드 보기 <ExternalLink size={16} />
          </a>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.learningSection}`} id="archive">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="모든 기록을 그대로 재사용하지 않습니다. 한 작업에서 실제로 확인한 판단만 짧게 정리해 다음 기획에 반영합니다."
            index="05"
            label="기록과 학습"
            title="실험 결과를 다음 작업에 어떻게 다시 쓸까?"
          />

          <div className={styles.learningRoute}>
            <article>
              <span>01</span>
              <h3>원본 기록</h3>
              <p>후보, 보류 이유, 검토 메모는 해당 작업에 그대로 남깁니다.</p>
            </article>
            <article>
              <span>02</span>
              <h3>결과 대조</h3>
              <p>얼굴, 카메라, 빛, 움직임, 편집에서 실제로 재현된 것을 확인합니다.</p>
            </article>
            <article>
              <span>03</span>
              <h3>다음 기준</h3>
              <p>반복해서 쓸 수 있는 판단만 짧은 규칙과 작업 메모로 옮깁니다.</p>
            </article>
          </div>

          <div className={styles.channelBand}>
            <ChartNoAxesCombined size={25} />
            <div>
              <span>공개 채널 기록 / 2026.07.02</span>
              <h3>발행 결과는 정답이 아니라 다음 질문의 근거로 사용했습니다.</h3>
              <p>{channelPerformanceSnapshot.contentCases[0].metrics}</p>
              <small>공개 수치만 사용했으며, 관리자용 audience 데이터·전환·인과 성과는 주장하지 않습니다.</small>
            </div>
          </div>

          <div className={styles.toolRoleTable}>
            {toolRoles.map((item) => (
              <article key={item.tool}>
                <strong>{item.tool}</strong>
                <span>{item.role}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.fitSection}`} id="fit">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="이 페이지는 GENTLE MONSTER AI Research & Exploration 공고의 포트폴리오 요구를 실제 자료와 연결해 구성했습니다."
            index="06"
            label="직무 연결"
            title="이 경험이 AI Research & Exploration 업무와 어떻게 연결될까?"
          />

          <div className={styles.fitList}>
            {jdConnections.map((item, index) => (
              <article key={item.requirement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.requirement}</h3>
                <p>{item.proof}</p>
              </article>
            ))}
          </div>

          <div className={styles.boundaryBlock}>
            <ShieldCheck size={23} />
            <div>
              <span>이 포트폴리오가 주장하지 않는 것</span>
              <p>동일 조건의 모델 우열 비교, AHEYA의 상용 성과, Workbench의 실제 곡 승인, 완료되지 않은 리테일·공간 경험은 주장하지 않습니다.</p>
            </div>
          </div>

          <div className={styles.brandProofs}>
            <div>
              <span>별도 브랜드 콘텐츠 근거</span>
              <h3>브랜드 메시지를 영상으로 옮긴 별도 프로젝트</h3>
              <p>AI Exploration과 직접 연결된 하네스 사례는 아니지만, MUSINSA와 ADSB에서 패션 브랜드의 메시지와 무드를 장면 흐름으로 번역했습니다.</p>
            </div>
            <div>
              <Link href="/deck/musinsa">MUSINSA <ArrowRight size={16} /></Link>
              <Link href="/deck/adsb">ADSB / Andersson Bell <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <div>
          <FileCode2 size={27} />
          <h2>반복 작업은 자동화하고,<br />방향과 선택은 직접 책임집니다.</h2>
          <p>프로젝트 기반으로 탐구한 신입/졸업예정 지원자의 포트폴리오입니다.</p>
        </div>
        <div className={styles.footerActions}>
          <Link href="/"><Home size={16} /> 전체 포트폴리오</Link>
          <Link href="/loom-workflow">IDOL 적용 사례 <ArrowRight size={16} /></Link>
        </div>
      </footer>
    </main>
  );
}
