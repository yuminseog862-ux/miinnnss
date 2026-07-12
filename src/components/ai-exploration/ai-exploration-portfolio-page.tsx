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

import { getEvidenceSource } from "@/lib/ai-exploration/motion-bank-sources";
import { channelPerformanceSnapshot } from "@/lib/portfolio-hub/channel-performance";

import styles from "./ai-exploration-portfolio.module.css";

const AHEYA_ARCHIVE_URL = "https://github.com/aheyabaraya/aheya-public-archive";

const experiments = [
  {
    index: "01",
    label: "CONTEXT-AWARE LLM",
    question: "프롬프트보다 맥락을 공유하면 의도를 더 오래 유지할 수 있을까?",
    test: "메시지, 레퍼런스의 역할, 금지선, 이전 선택을 같은 기획 문서와 세션에 넣었습니다.",
    result: "모델을 바꾸는 것보다 판단 기준을 이어 주는 일이 중요했습니다.",
  },
  {
    index: "02",
    label: "IMAGE / VIDEO API",
    question: "반복 생성을 실행 단위로 바꾸면 한 편의 영상을 더 빨리 만들 수 있을까?",
    test: "곡 구간, 파일 이름, 후보 상태, 재실행 조건을 나누어 Aurora와 IDOL 제작에 적용했습니다.",
    result: "생성 속도보다 기획과 후보 관리가 더 큰 병목이라는 점을 확인했습니다.",
  },
  {
    index: "03",
    label: "AGENT / CLI",
    question: "AI가 파일과 상태를 함께 다루면 제작 흐름을 어디까지 이어 갈 수 있을까?",
    test: "기획 확장, 코드 구현, 상태 정리, 실행과 검토를 Codex, Grok CLI, OpenClaw에 나누어 맡겼습니다.",
    result: "창의적인 선택까지 스크립트로 고정하면 결과가 반복됐습니다. 자동화할 것은 상태와 반복 작업이었습니다.",
  },
  {
    index: "04",
    label: "LOCAL MEDIA ANALYSIS",
    question: "전문 편집 앱 전체가 아니라 후보 비교와 컷 연결만 보조할 수 있을까?",
    test: "ffprobe, OpenCV, librosa, Pillow, MoviePy, ffmpeg로 프레임·비트·움직임·QC 자료를 만들었습니다.",
    result: "분석값이 좋은 컷을 정하지는 못했지만, 수백 개 후보를 같은 기준으로 비교할 수 있었습니다.",
  },
];

const evolution = [
  {
    period: "2025.12–2026.04",
    title: "AHEYA와 Yui",
    question: "AI로 서비스와 신뢰 기록까지 만들 수 있을까?",
    answer: "크라우드펀딩, 스마트계약, Trust API와 agent 실행·평가 구조를 개발 수준까지 파고들었습니다. 구현과 시장 수요는 별개라는 점도 확인했습니다.",
  },
  {
    period: "2026.05",
    title: "Aurora / 26 production units",
    question: "같은 13명의 얼굴을 유지하며 다른 장면을 반복 생성할 수 있을까?",
    answer: "13개 MV 장면과 13개 STAGE 장면의 제작 단위를 구성했습니다. 공개 작품 26편이 아니라 반복 생산과 얼굴 유지 실험입니다.",
  },
  {
    period: "2026.05",
    title: "Root Signal · LOW",
    question: "반복 생성 구조만으로 첫 뮤직비디오를 완성할 수 있을까?",
    answer: "완주는 가능했지만 카메라와 빛이 단조로웠고, LOW에서는 얼굴 기준이 무너졌습니다. 창의 판단의 스크립트화와 reference 없는 생성은 중단했습니다.",
  },
  {
    period: "2026.06",
    title: "Pulso · Left In That Night",
    question: "프레임과 비트를 읽으면 편집과 서사를 함께 개선할 수 있을까?",
    answer: "Pulso에서 편집 보조 경로를 확인했습니다. 반면 Left In That Night는 감정의 주인과 인과가 연결되지 않아 폐기했고, 생성 전 기획 점검 기준을 추가했습니다.",
  },
  {
    period: "2026.06",
    title: "INK",
    question: "레퍼런스의 감정·구도·빛까지 장면의 역할로 정리하면 결과가 달라질까?",
    answer: "곡 구간마다 카메라, 빛, 오브젝트의 역할을 정하고 후보를 비교했습니다. 현재 공개 가능한 대표 완성 사례입니다.",
  },
  {
    period: "2026.07–현재",
    title: "Workbench · One Move",
    question: "가장 큰 병목인 기획과 고난도 움직임을 어떻게 다룰까?",
    answer: "기획, 레퍼런스, 후보, 보류 이유를 한 화면에 모으는 Workbench를 만들었습니다. One Move의 액션과 물리성은 아직 실험 중이며 성공을 주장하지 않습니다.",
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
    detail: "영상·오디오를 프레임, 비트, 움직임, 컨택트시트, 편집 recipe로 바꿨습니다.",
  },
  {
    tool: "OpenClaw / AHEYA",
    role: "서비스 실행과 기록",
    detail: "후보 탐색, 실행, 엄격 검토, canonical 기록을 분리하는 별도 서비스 실험에 사용했습니다.",
  },
];

const jdConnections = [
  {
    requirement: "최신 AI 기술과 트렌드 탐색",
    proof: "새 기능을 실제 제작 문제에 붙여 본 네 가지 실험과 7개월의 변화 기록",
  },
  {
    requirement: "서로 다른 유형의 AI 도구 활용",
    proof: "LLM·생성 모델·agent/CLI·Python 분석 도구를 서로 다른 작업에 배치",
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
    proof: "단계별 owner, 검토 상태, 파일 계보, 공개용 핵심 발췌",
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

  return (
    <article className={styles.evidenceExcerpt}>
      <div className={styles.evidenceBar}>
        <div>
          <span>{source.system}</span>
          <strong>{source.fileName}</strong>
        </div>
        <Link aria-label={`${source.fileName} 전체 공개 발췌 보기`} href={`/ai-exploration/motion-bank/${source.slug}`}>
          <ExternalLink size={15} />
        </Link>
      </div>
      <pre>{source.excerpt}</pre>
      <p>{source.description}</p>
    </article>
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
          <a href="#experiments">Experiments</a>
          <a href="#system">System</a>
          <a href="#ink">INK</a>
          <a href="#aheya">AHEYA</a>
          <a href="#fit">Fit</a>
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
          <h1>새로운 AI를<br />실제 제작에서<br />시험합니다.</h1>
          <p>
            새로운 기능을 써보는 데서 멈추지 않고, 실제 제작의 문제에 적용했습니다. 성공과 실패에서 얻은 판단은 다음 실험이 다시 쓸 수 있는 기록으로 남겼습니다.
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
            저는 AI 결과물을 많이 만드는 사람보다, <strong>무엇을 시험할지 정하고, 결과를 비교하고, 다음 시도에 남길 기준을 만드는 사람</strong>에 가깝습니다.
          </p>
        </Reveal>
      </section>

      <section className={styles.section} id="experiments">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="X와 공식 문서, 강연, 기술 글에서 발견한 변화를 현재 제작 과정의 문제에 직접 적용했습니다. 실제 작업 방식이 달라진 경우에만 다음 구조에 남겼습니다."
            index="01"
            label="TREND TO TEST"
            title="새 AI 기능은 실제 제작에서 무엇을 바꿨을까?"
          />

          <div className={styles.experimentGrid}>
            {experiments.map((experiment) => (
              <article key={experiment.index}>
                <div>
                  <span>{experiment.index}</span>
                  <small>{experiment.label}</small>
                </div>
                <h3>{experiment.question}</h3>
                <p>{experiment.test}</p>
                <strong>{experiment.result}</strong>
              </article>
            ))}
          </div>

          <div className={styles.evolutionHeading}>
            <span>2025.12—2026.07</span>
            <h3>실패할 때마다 제작 방식이 바뀌었습니다.</h3>
          </div>
          <div className={styles.evolutionList}>
            {evolution.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{item.period}</small>
                  <strong>{item.title}</strong>
                </div>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.systemSection}`} id="system">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="IDOL production system은 AHEYA와 별개의 영상 제작 하네스입니다. 곡의 방향을 정한 뒤 생성, 검토, 편집, 공개와 학습까지 이어지는 과정만 자동화 대상으로 삼았습니다."
            index="02"
            label="IDOL PRODUCTION SYSTEM"
            title="무엇을 자동화하고, 무엇을 직접 판단했을까?"
          />

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
              <span>FRONT PLANNING WORKBENCH</span>
              <h3>생성 전에 생각과 후보를 한 화면에 모았습니다.</h3>
              <p>
                여러 대화와 폴더에 흩어진 곡 구간, 레퍼런스, 후보, 보류 이유를 한곳에서 비교하기 위해 만든 로컬 작업 화면입니다. 현재는 실행 가능한 개발 단계이며 실제 곡의 최종 승인 도구로 완성됐다고 주장하지 않습니다.
              </p>
            </div>
            <figure>
              <img alt="Front Planning Workbench development checkpoint" src="/ai-exploration/workbench/front-planning-workbench-demo.png" />
              <figcaption>Development checkpoint / real-song production acceptance 미완료</figcaption>
            </figure>
          </div>

          <div className={styles.excerptGrid}>
            <EvidenceExcerpt slug="front-planning-workbench-checkpoint" />
            <EvidenceExcerpt slug="idol-harness-stage-registry" />
            <EvidenceExcerpt slug="idol-video-source-intake" />
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.inkSection}`} id="ink">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="INK는 이 제작 시스템이 실제 결과로 이어진 대표 사례입니다. 완성 영상만 보여주지 않고, 어떤 기준으로 장면을 설계하고 후보를 비교했는지 함께 남겼습니다."
            index="03"
            label="CASE / INK"
            title="한 편의 영상 안에서 메시지와 장면을 어떻게 이어 갔을까?"
          />

          <div className={styles.videoFeature}>
            <div>
              <span>PUBLIC PROOF</span>
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
            body="AHEYA는 IDOL 제작 하네스와 별개의 개인 서비스 실험입니다. AI coding agent를 활용해 서비스의 행동과 신뢰 기록을 어디까지 직접 구현할 수 있는지 탐구했습니다."
            index="04"
            label="SEPARATE EXPLORATION / AHEYA"
            title="AI를 콘텐츠 밖의 서비스 문제에도 적용할 수 있을까?"
          />

          <div className={styles.aheyaIntro}>
            <div>
              <span>SMART CONTRACT</span>
              <h3>후원 기록의 책임을 코드 수준까지 내려가 보았습니다.</h3>
              <p>EIP-712 서명, nonce 재사용 방지, owner/operator 권한, event 기반 기록을 실제 Solidity source로 구성했습니다. 상용 배포나 개발 경력을 주장하는 자료는 아닙니다.</p>
            </div>
            <div>
              <span>OPENCLAW YUI / TRUST API</span>
              <h3>agent의 실행 결과를 다음 선택의 기록으로 바꾸었습니다.</h3>
              <p>후보 탐색, plan, 실행, 엄격 검토, canonical 기록을 분리했습니다. 실행 성공과 기록 성공을 같은 상태로 취급하지 않았습니다.</p>
            </div>
          </div>

          <div className={styles.excerptGridTwo}>
            <EvidenceExcerpt slug="aheya-evm-funding-registry" />
            <EvidenceExcerpt slug="aheya-openclaw-orchestration-flow" />
          </div>

          <a className={styles.archiveLink} href={AHEYA_ARCHIVE_URL} rel="noreferrer" target="_blank">
            AHEYA public archive에서 실제 source 보기 <ExternalLink size={16} />
          </a>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.learningSection}`} id="archive">
        <Reveal className={styles.contentWidth}>
          <SectionHeading
            body="모든 기록을 그대로 재사용하지 않습니다. 한 작업에서 실제로 확인한 판단만 짧게 정리해 다음 기획에 반영합니다."
            index="05"
            label="ARCHIVE & LEARN"
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
              <span>PUBLIC CHANNEL SNAPSHOT / 2026.07.02</span>
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
            label="ROLE FIT"
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
              <span>CLAIM BOUNDARY</span>
              <p>동일 조건의 모델 우열 비교, AHEYA의 상용 성과, Workbench의 실제 곡 승인, 완료되지 않은 리테일·공간 경험은 주장하지 않습니다.</p>
            </div>
          </div>

          <div className={styles.brandProofs}>
            <div>
              <span>BRAND CONTENT PROOF</span>
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
