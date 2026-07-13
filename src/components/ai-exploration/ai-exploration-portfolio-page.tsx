"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
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

import styles from "./ai-exploration-portfolio.module.css";

const AHEYA_ARCHIVE_URL = "https://github.com/aheyabaraya/aheya-public-archive";

const executiveProofs = [
  ["3", "COMPLETED", "Root Signal · Pulso · INK"],
  ["2", "DISCARDED", "LOW · Left in That Night"],
  ["13 + 13", "AURORA UNITS", "cinematic MV · choreography STAGE"],
  ["4", "EXPANSION TYPES", "content · interaction · tool · service"],
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
    body: "Loom의 13개 얼굴 레퍼런스를 기준으로, 같은 정체성이 서로 다른 장면과 동작에서도 유지되는지 시험했습니다.",
  },
  {
    index: "04",
    label: "FULL MV / HYPOTHESIS",
    title: "반복 생산보다 하나의 메시지를 끝까지 만드는 쪽으로 질문을 바꿨습니다.",
    body: "콘텐츠의 양만 늘리는 방식이 반응을 지속시키지 못하자, 전체 곡을 기획·생성·편집하는 제작 실험으로 이동했습니다.",
  },
];

const trendExperiments = [
  {
    status: "채택",
    signal: "CONTEXT-AWARE LLM · CLI",
    discovery: "맥락을 이어 가는 LLM",
    question: "매번 프롬프트를 다시 쓰지 않고도 의도를 이어 갈 수 있을까?",
    origin: "AHEYA를 AI와 개발하며 짧은 명령보다 목적·이전 결정·현재 상태를 함께 공유할 때 의도를 더 오래 유지할 가능성을 보았습니다. 반면 창의적 의미까지 스크립트로 고정하면 결과가 반복됐습니다.",
    test: "Codex와 Grok 세션에 곡 구간, 레퍼런스의 역할, 보류 이유를 함께 넘기고, 반복 실행 정보만 스킬·레지스트리로 분리했습니다.",
    decision: "창의적 의미는 대화와 검토에 남기고, 파일 탐색·누락 검사·상태 갱신만 고정합니다.",
    next: "대화의 맥락과 실행 상태를 분리한 IDOL production system으로 이어졌습니다.",
    evidenceSlug: "idol-harness-stage-registry",
  },
  {
    status: "부분 채택",
    signal: "IMAGE / VIDEO AGENT · API",
    discovery: "빨라진 이미지·영상 생성",
    question: "같은 얼굴을 유지한 채 서로 다른 장면을 빠르게 전개할 수 있을까?",
    origin: "AHEYA의 짧은 이미지·클립을 만들며 생성 속도를 하나의 IDOL 콘텐츠 시스템으로 확장할 가능성을 보았습니다. 다만 모든 실행을 API에 연결하면 비용과 통제 범위도 함께 커졌습니다.",
    test: "Loom의 13개 얼굴 레퍼런스를 기준으로 13개 MV와 13개 STAGE 제작 단위를 만들고, 같은 정체성이 장면과 동작에서 유지되는지 확인했습니다.",
    decision: "세션에서 먼저 시험하고, 반복이 확인된 구간만 API 실행으로 옮깁니다. 얼굴 기준과 유료 실행은 별도 승인 단계로 남깁니다.",
    next: "반복 실행과 사람의 선택을 분리하고, 통과한 제작 단위만 다음 단계로 넘겼습니다.",
    evidenceSlug: "aurora-v2-stage-decision-log",
  },
  {
    status: "부분 채택",
    signal: "LOCAL MEDIA · EDIT ASSIST",
    discovery: "편집 기능의 작업 단위",
    question: "생성보다 오래 걸리는 후보 비교와 컷 연결을 줄일 수 있을까?",
    origin: "Premiere Pro·After Effects·CapCut과 ComfyUI·Grok Imagine의 작업 방식을 보며, 완성형 앱보다 제 제작에 필요한 기능을 작업 단위로 나눠 보기 시작했습니다.",
    test: "ffprobe·OpenCV·librosa·ffmpeg로 소스, 프레임, 움직임, 비트를 읽고 컨택트시트·roughcut·QC 자료를 만들었습니다.",
    decision: "분석값은 관찰을 돕지만 좋은 컷을 결정하지 않습니다. 최종 선택·순서·타이밍은 직접 책임집니다.",
    next: "후보 선택과 roughcut에 필요한 기능만 가진 로컬 Edit Desk로 이어졌습니다.",
    evidenceSlug: "idol-edit-desk-implementation",
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
  ["INTERACTION", "Harne identity vote, 멤버 메시지, 다음 트랙 투표를 로컬 프로토타입으로 시험"],
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
    state: "실행 가능 checkpoint / 계속 실험 중",
    title: "실행이 빨라진 뒤에는 기획하는 저도 병목이 됐습니다.",
    test: "레퍼런스, 곡 구간, 후보 상태, 보류 이유를 한 canvas와 Sequence Rail에서 조립하도록 만들었습니다.",
    finding: "생성 전에 방향과 선택을 고정해야 뒤 단계의 자동화가 같은 맥락을 유지할 수 있었습니다.",
    change: "Workbench는 생성기가 아니라 기획 기억과 founder decision을 다음 단계로 넘기는 작업 화면으로 두었습니다.",
  },
];

const systemFlow = [
  ["01", "질문·리서치", "사람", "메시지와 레퍼런스의 역할을 정함"],
  ["02", "Front Planning", "사람 + AI", "곡 구간과 후보를 한 맥락에서 확장"],
  ["03", "생성 준비", "AI 보조", "스토리보드·참조·실행 단위를 검증"],
  ["04", "이미지·영상 생성", "API / SESSION", "승인된 단위만 실행하고 계보를 기록"],
  ["05", "검토·편집", "사람 + LOCAL", "통과·보류·수정, 순서·타이밍·QC"],
  ["06", "공개·분석", "사람", "지표를 다음 질문의 후보로만 사용"],
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
    action: "분석 결과는 자동 적용하지 않고, 매핑이 확인된 후보만 창작자 검토 뒤 다음 스타일·포맷 실험에 반영합니다.",
    evidenceSlug: "aurora-platform-signal-boundary",
  },
];

function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.14, once: true }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
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
          <a href="#origin">시작</a>
          <a href="#trend">탐색</a>
          <a href="#iteration">반복</a>
          <a href="#ink">결과</a>
          <a href="#aheya">서비스</a>
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
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>AI RESEARCH & EXPLORATION / 2025.12—PRESENT</span>
          <h1>AI의 변화를<br />실제 콘텐츠에<br />붙여 봅니다.</h1>
          <p>
            기획의 맥락을 AI와 공유하고 반복 작업을 자동화한다면,
            한 사람이 운영하는 제작 스튜디오는 어디까지 확장될 수 있을까?
          </p>
          <div className={styles.heroAnswer}>
            <span>CURRENT ANSWER</span>
            <strong>자동화할수록 병목은 실행에서 기획과 판단으로 이동했습니다.</strong>
          </div>
          <div className={styles.heroActions}>
            <a href="#origin">탐구 과정 보기 <ArrowDown size={17} /></a>
            <a href="#ink">결과와 근거 보기 <ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <div className={styles.heroFoot}>
          <span>PERSONAL AI CREATIVE BUILD</span>
          <span>DISCOVERY · TEST · VERDICT · MEMORY</span>
          <span>신입 / 졸업예정</span>
        </div>
      </section>

      <section className={styles.executiveBand}>
        <Reveal className={styles.contentWidth}>
          <div className={styles.executiveLead}>
            <span>ANSWER FIRST</span>
            <p>
              반복 실행은 AI와 로컬 도구에 맡길 수 있었습니다. 대신 메시지·톤·후보 선택·최종 승인은 직접 책임하고,
              실패와 판단은 다음 제작에서 다시 쓸 수 있도록 남겼습니다.
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

      <section className={styles.section} id="origin">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="처음부터 제작 병목을 해결하려 한 것이 아닙니다. AHEYA의 마케팅 콘텐츠에서 발견한 가능성이 짧은 클립, IDOL 제작 단위, 전체 뮤직비디오라는 질문으로 커졌습니다."
            index="01"
            label="ORIGIN / POSSIBILITY"
            title="마케팅용 이미지 한 장은 어떻게 한 사람의 제작 스튜디오라는 질문으로 커졌을까?"
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

      <section className={`${styles.section} ${styles.trendSection}`} id="trend">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="도구 이름을 늘어놓는 대신, 발견한 변화가 어떤 제작 질문이 됐고 실제 사용 뒤 무엇을 채택했는지 세 기록으로 압축했습니다."
            index="02"
            label="DISCOVERY → TEST → VERDICT"
            title="새 기능이 나올 때마다, 무엇을 실제 제작에 붙여 봤을까?"
          />
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
                    <span>시험</span>
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
                <EvidenceLink label="실제 구조 일부 보기" slug={item.evidenceSlug} />
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.section} id="iteration">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="완성작과 실패작을 분리해 나열하지 않고, 한 작업의 판단이 다음 작업의 제작 방식을 어떻게 바꿨는지 실제 순서로 정리했습니다."
            index="03"
            label="REPEATED EXPERIMENT / 2026.05—07"
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
                  <div><span>이번 시험</span><p>{item.test}</p></div>
                  <div><span>판정</span><p>{item.finding}</p></div>
                  <div><span>다음 변화</span><p>{item.change}</p></div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.inkSection}`} id="ink">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="완성 영상만이 결과는 아니었습니다. 반복 실험은 콘텐츠, IP 경험, 제작 도구, 그리고 다음 작업에서 다시 읽을 수 있는 판단 기록으로 남았습니다."
            index="04A"
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
            body="생성한 결과물을 쌓는 데서 멈추지 않고, 정체성·트랙·짧은 콘텐츠·참여를 하나의 IP 안에서 선택하고 따라갈 수 있는 로컬 경험으로 시험했습니다."
            index="04B"
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

      <section className={`${styles.section} ${styles.systemSection}`} id="system">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="AI가 사람을 대신하는 구조가 아니라, 반복 실행과 관찰은 넘기고 방향·선택·승인·공개는 제가 책임지는 구조입니다."
            index="04C"
            label="OUTCOME / PRODUCTION / WORKBENCH · EDIT DESK · HARNESS"
            title="반복 실행과 사람의 판단을 어떻게 서로 다른 단계로 나눴을까?"
          />

          <div className={styles.systemDiagram}>
            {systemFlow.map(([index, title, owner, detail]) => (
              <article key={index}>
                <span>{index}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <small>{owner}</small>
              </article>
            ))}
          </div>

          <div className={styles.humanGate}>
            <ShieldCheck size={26} />
            <div>
              <span>HUMAN DECISION GATE</span>
              <p>메시지·톤·레퍼런스 해석·최종 선택·유료 실행·외부 공개는 자동 승인하지 않습니다.</p>
            </div>
          </div>

          <div className={styles.systemProofGrid}>
            <article className={styles.workbenchProof}>
              <div className={styles.proofCopy}>
                <span>FRONT PLANNING WORKBENCH</span>
                <h3>기획의 맥락을 생성 전에 한 화면에서 조립합니다.</h3>
                <p>Live Plan, Planning Canvas, Sequence Rail, Contact Sheet와 Codex·Grok 세션을 연결했습니다. 레퍼런스의 역할과 보류 이유를 다음 단계에 넘기는 작업 화면입니다.</p>
                <EvidenceLink slug="front-planning-workbench-checkpoint" />
              </div>
              <img alt="Front Planning Workbench runnable checkpoint" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
            </article>

            <article className={styles.editDeskProof}>
              <div className={styles.proofCopy}>
                <span>LOCAL EDIT DESK</span>
                <h3>후보 선택과 roughcut에 필요한 기능을 로컬로 만들었습니다.</h3>
                <p>Source·Program 모니터, 타임라인, 마커, waveform, 구간 렌더를 Python/Tk와 기존 미디어 런타임으로 연결했습니다.</p>
              </div>
              <EvidenceExcerpt slug="idol-edit-desk-implementation" />
            </article>

            <article className={styles.registryProof}>
              <div className={styles.proofCopy}>
                <span>8 PHASES / 29 SEMANTIC STAGES</span>
                <h3>파일명이 바뀌어도 책임과 수정 경로는 남도록 했습니다.</h3>
                <p>각 단계의 입력·산출물·owner·승인·수정 방향을 레지스트리로 연결합니다. 하위 단계가 의미를 임의로 바꾸지 않고, 누락된 판단은 앞 단계로 되돌립니다.</p>
              </div>
              <EvidenceExcerpt slug="idol-harness-stage-registry" />
            </article>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.archiveSection}`} id="archive">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="기록의 목적은 많이 남기는 것이 아니라, 무엇을 유지하고 무엇을 바꿨는지 다음 실험에서 다시 읽을 수 있게 하는 것입니다."
            index="04D"
            label="OUTCOME / MEMORY / ARCHIVE · DECISION LOG"
            title="성공과 폐기의 이유를 다음 제작에서 다시 읽게 하려면?"
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
            index="05"
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
                이후 Yui에서는 AI agent가 후보 탐색→계획→실행→엄격 검토→기록까지 이어 갈 수 있는지 시험했습니다.
              </p>
              <p>
                그러나 약 2~3주의 직접 접촉에도 유효한 시장 반응이 없었고, 거시 환경과 유지 비용까지 고려해 중단했습니다.
                이 경험은 “만들 수 있음”과 “사람이 원하는 것”이 다르다는 판단을 남겼고, 콘텐츠 제작 실험으로 방향을 바꾸는 계기가 됐습니다.
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
          <h2>새 기능을 발견하면 직접 붙여 보고,<br />가능성을 콘텐츠와 도구로 시험하고,<br />판단을 다음 작업에 남깁니다.</h2>
          <div className={styles.closingPoints}>
            <div><span>01</span><strong>새 기술을 실제 제작 질문으로 바꾸는 관점</strong></div>
            <div><span>02</span><strong>콘텐츠·도구·서비스 프로토타입까지 시험하는 실행력</strong></div>
            <div><span>03</span><strong>성공과 폐기의 판단을 다시 쓰게 만드는 기록 방식</strong></div>
          </div>

          <div className={styles.boundaryNote}>
            <ShieldCheck size={20} />
            <p>동일 조건의 모델 우열 비교와 AHEYA의 상용 성과는 주장하지 않습니다. Workbench는 실행 가능한 개발 checkpoint이며, 리테일·공간은 완료 실적이 아닌 다음 탐구 영역입니다.</p>
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
