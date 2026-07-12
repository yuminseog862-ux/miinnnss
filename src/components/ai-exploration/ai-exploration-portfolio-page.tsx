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

const inquirySteps = [
  ["01", "발견", "새 모델과 도구를 X·공식 문서·실제 제품에서 확인합니다."],
  ["02", "질문", "기능이 아니라 지금 제작의 어느 병목을 바꿀 수 있는지 묻습니다."],
  ["03", "시험", "작은 실행 단위로 붙여 보고, 결과와 비용·통제 범위를 함께 봅니다."],
  ["04", "판정", "채택·보류·폐기 이유를 남기고 다음 제작 구조에 반영합니다."],
];

const trendExperiments = [
  {
    signal: "CONTEXT-AWARE LLM · CLI",
    question: "매번 프롬프트를 다시 쓰지 않고도 의도를 이어 갈 수 있을까?",
    origin: "AHEYA를 AI와 개발하며, 짧은 명령보다 목적·이전 결정·현재 상태를 같은 맥락으로 공유할 때 의도를 더 오래 유지한다는 점을 확인했습니다.",
    test: "Codex와 Grok 세션에 곡 구간, 레퍼런스의 역할, 보류 이유를 함께 넘기고, 반복 실행 정보만 스킬·레지스트리로 분리했습니다.",
    decision: "창의적 의미는 대화와 검토에 남기고, 파일 탐색·누락 검사·상태 갱신만 고정합니다.",
  },
  {
    signal: "IMAGE / VIDEO AGENT · API",
    question: "같은 얼굴을 유지한 채 서로 다른 장면을 빠르게 전개할 수 있을까?",
    origin: "AHEYA의 짧은 이미지·클립을 만들다가, 생성 속도를 하나의 IDOL 콘텐츠 시스템으로 확장해 보기로 했습니다.",
    test: "Loom의 13개 얼굴 레퍼런스를 기준으로 13개 MV와 13개 STAGE 제작 단위를 만들고, 같은 정체성이 장면과 동작에서 유지되는지 확인했습니다.",
    decision: "세션에서 먼저 시험하고, 반복이 확인된 구간만 API 실행으로 옮깁니다. 얼굴 기준과 유료 실행은 별도 승인 단계로 남깁니다.",
  },
  {
    signal: "LOCAL MEDIA · EDIT ASSIST",
    question: "생성보다 오래 걸리는 후보 비교와 컷 연결을 줄일 수 있을까?",
    origin: "Premiere Pro·After Effects·CapCut의 구조와 ComfyUI·Grok Imagine의 작업 방식을 보며, 제게 필요한 최소 기능을 작업 단위로 다시 나눴습니다.",
    test: "ffprobe·OpenCV·librosa·ffmpeg로 소스, 프레임, 움직임, 비트를 읽고 컨택트시트·roughcut·QC 자료를 만들었습니다.",
    decision: "분석값은 관찰을 돕지만 좋은 컷을 결정하지 않습니다. 최종 선택·순서·타이밍은 직접 책임집니다.",
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
    label: "AHEYA CONTENT",
    title: "반복 게시물보다 하나의 이유가 필요했습니다.",
    failure: "이미지와 10초 클립의 양을 늘려도 채널 반응이 계속 좋아지지는 않았습니다.",
    change: "짧은 게시물 생산을 멈추고, 하나의 메시지와 톤을 가진 뮤직비디오로 문제를 바꿨습니다.",
  },
  {
    label: "AURORA / 26 UNITS",
    title: "반복 가능성은 확인했지만, 반복 자체가 답은 아니었습니다.",
    failure: "얼굴은 유지됐지만 창의적 판단까지 스크립트로 고정하자 카메라·빛·포즈가 비슷해졌습니다.",
    change: "13 MV·13 STAGE의 실행 단위는 유지하고, 장면의 의미와 카메라는 매 작업에서 다시 판단하도록 분리했습니다.",
  },
  {
    label: "ROOT SIGNAL · LOW · LEFT IN THAT NIGHT",
    title: "완성보다 실패가 다음 규칙을 만들었습니다.",
    failure: "단조로운 카메라와 빛, 흔들린 얼굴 기준, 감정의 주인과 장면 인과가 연결되지 않는 문제가 각각 드러났습니다.",
    change: "face reference gate, 생성 전 장면 인과 검토, 프레임·비트 기반 편집 관찰을 다음 제작 구조에 추가했습니다.",
  },
  {
    label: "PULSO · INK · WORKBENCH",
    title: "마지막 병목은 생성기가 아니라 기획하는 저였습니다.",
    failure: "후보를 빠르게 만들 수 있어도 앞단의 방향이 흔들리면 수백 개 결과를 다시 버려야 했습니다.",
    change: "레퍼런스, 곡 구간, 후보 상태, 보류 이유를 한 화면에서 조립하는 Workbench로 기획 기억을 외부화했습니다.",
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
          <a href="#trend">탐색</a>
          <a href="#ink">INK</a>
          <a href="#evolution">변화</a>
          <a href="#system">구조</a>
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
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>AI RESEARCH & EXPLORATION / 2025.12—PRESENT</span>
          <h1>AI의 변화를<br />경험의 실험 루프로<br />바꿉니다.</h1>
          <p>
            프롬프트를 반복 입력하는 대신 기획의 맥락과 판단 기준을 공유한다면,
            한 사람이 운영하는 제작 스튜디오는 어디까지 확장될 수 있을까?
          </p>
          <div className={styles.heroActions}>
            <a href="#trend">탐구 과정 보기 <ArrowDown size={17} /></a>
            <a href="#ink">대표 결과 INK <ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <div className={styles.heroFoot}>
          <span>PERSONAL AI CREATIVE BUILD</span>
          <span>RESEARCH · CONTENT · SYSTEM · ARCHIVE</span>
          <span>신입 / 졸업예정</span>
        </div>
      </section>

      <section className={styles.thesisBand}>
        <Reveal className={styles.contentWidth}>
          <p className={styles.thesisLead}>
            저는 새 도구의 이름보다 <strong>그 기능이 실제 제작에서 무엇을 바꾸는지</strong> 먼저 봅니다.
          </p>
          <div className={styles.inquiryGrid}>
            {inquirySteps.map(([index, title, body]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.section} id="trend">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="기능 목록이 아니라 발견한 변화, 해결하려던 문제, 실제 시험, 채택·보류 판단을 한 묶음으로 보여줍니다."
            index="01"
            label="TREND → PRODUCTION"
            title="새로운 AI 기술은 실제 제작에서 무엇을 바꿀 수 있었을까?"
          />
          <div className={styles.trendList}>
            {trendExperiments.map((item, index) => (
              <article className={styles.trendRow} key={item.signal}>
                <div className={styles.trendSignal}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{item.signal}</small>
                </div>
                <div className={styles.trendQuestion}>
                  <h3>{item.question}</h3>
                  <p>{item.origin}</p>
                </div>
                <dl>
                  <div>
                    <dt>실험</dt>
                    <dd>{item.test}</dd>
                  </div>
                  <div>
                    <dt>판정</dt>
                    <dd>{item.decision}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.inkSection}`} id="ink">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="이미지 수백 장과 영상 후보 백여 개를 다루며 확인한 병목은 생성 속도가 아니라 메시지, 선택, 연결이었습니다."
            index="02"
            label="FLAGSHIP CONTENT / LOOM — INK"
            title="자동화된 제작 루프는 어떤 감각과 콘텐츠로 이어졌을까?"
          />

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
              <h3>곡의 감정을 장면마다 다시 설명하지 않아도 이어지게 만들었습니다.</h3>
              <p>
                곡을 노래 구간별로 나눈 뒤, 각 구간에서 인물·카메라·빛·오브젝트가 맡을 역할을 먼저 정했습니다.
                생성 후보는 얼굴 유지와 장면의 연결뿐 아니라, 앞 장면의 감정이 다음 장면으로 넘어가는지를 기준으로 골랐습니다.
              </p>
              <div className={styles.inkStats}>
                <div><strong>1</strong><span>공개 완성 MV</span></div>
                <div><strong>12+</strong><span>곡 구간 단위</span></div>
                <div><strong>100+</strong><span>검토한 생성 후보</span></div>
              </div>
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
              <figcaption><span>SECTION FLOW</span>곡 구간별 장면·인물·오브젝트의 흐름</figcaption>
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
            body="영상 한 편에서 멈추지 않고, 정체성·트랙·짧은 콘텐츠·참여가 같은 IP 안에서 이어지는 방식을 프로토타입으로 만들었습니다."
            index="03"
            label="CONTENT → EXPERIENCE / LOOM"
            title="생성 콘텐츠를 하나의 경험으로 확장하면 무엇이 달라질까?"
          />
          <div className={styles.loomFeature}>
            <figure>
              <img alt="Loom Signal Deck home and archive console" src="/loom-deck/desktop-contact-sheet.png" />
              <figcaption>LOOM Signal Deck / 실제 로컬 프로토타입 화면</figcaption>
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

      <section className={styles.section} id="evolution">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="완성작을 나열하지 않고, 앞 작업의 문제가 다음 실험의 구조를 어떻게 바꿨는지 한 흐름으로 정리했습니다."
            index="04"
            label="REPEATED EXPERIMENT"
            title="성공과 실패는 다음 제작 방식을 어떻게 바꿨을까?"
          />

          <div className={styles.evolutionList}>
            {evolution.map((item, index) => (
              <article key={item.label}>
                <div className={styles.evolutionIndex}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.evolutionTitle}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className={styles.evolutionShift}>
                  <div><span>확인한 문제</span><p>{item.failure}</p></div>
                  <ArrowRight aria-hidden="true" size={20} />
                  <div><span>다음 변화</span><p>{item.change}</p></div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.auroraProof}>
            <div className={styles.auroraIntro}>
              <span>AURORA V2 / 13 MV + 13 STAGE</span>
              <h3>같은 얼굴을 유지하면서 장면의 기능은 다르게</h3>
              <p>
                13명의 Loom 비주얼 레퍼런스를 기준으로, 멤버마다 cinematic MV와 choreography STAGE를 한 쌍으로 준비했습니다.
                아래는 M01과 M11의 실제 통과 보드입니다. 26개 공개 작품이 아니라 반복 제작과 identity continuity를 검증한 제작 단위입니다.
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

      <section className={`${styles.section} ${styles.systemSection}`} id="system">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="AI가 사람을 대신하는 구조가 아니라, 반복 실행과 관찰은 넘기고 방향·선택·승인·공개는 제가 책임지는 구조입니다."
            index="05"
            label="IDOL / PRODUCTION SYSTEM"
            title="제작이 길어져도 맥락과 판단을 잃지 않으려면?"
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
                <p>Live Plan, Planning Canvas, Sequence Rail, Contact Sheet와 Codex·Grok 세션을 연결했습니다. 생성기가 아니라, 레퍼런스의 역할과 보류 이유를 다음 단계에 넘기는 작업 화면입니다.</p>
                <EvidenceLink slug="front-planning-workbench-checkpoint" />
              </div>
              <img alt="Front Planning Workbench runnable checkpoint" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
            </article>

            <article className={styles.editDeskProof}>
              <div className={styles.proofCopy}>
                <span>LOCAL EDIT DESK</span>
                <h3>완성형 편집기가 아니라 후보 선택과 roughcut에 필요한 부분만 만들었습니다.</h3>
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
            index="06"
            label="INSIGHT ARCHIVE / DECISION LOG"
            title="AI 흐름을 따라가면서도 제 기준을 잃지 않으려면?"
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
            index="07"
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
          <h2>새 기능을 빠르게 소비하기보다,<br />가능성을 실제 경험으로 시험하고<br />다음 사람이 다시 읽을 수 있게 남깁니다.</h2>
          <div className={styles.closingPoints}>
            <div><span>01</span><strong>변화를 제작 문제로 번역하는 관점</strong></div>
            <div><span>02</span><strong>아이디어를 콘텐츠·도구·서비스로 만드는 실행력</strong></div>
            <div><span>03</span><strong>실패와 판단을 다음 실험에 남기는 기록 방식</strong></div>
          </div>

          <div className={styles.boundaryNote}>
            <ShieldCheck size={20} />
            <p>동일 조건의 모델 우열 비교, AHEYA의 상용 성과, Workbench의 실제 곡 승인, 완료되지 않은 리테일·공간 경험은 주장하지 않습니다.</p>
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
