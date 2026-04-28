"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  FileText,
  GitBranch,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { DetailMediaGallery } from "@/components/detail-media-gallery";
import type { Accent } from "@/data/portfolio";
import { mainEvidenceContent, workCaseMap } from "@/data/portfolio.crossangle";

import {
  beforeAfterEvidenceCards,
  collaborationEvidenceVisuals,
  collaborationWorkflowRows,
  creativeAnalyticsImages,
  creativeSignalCards,
  dataEvidenceVisuals,
  externalEvidenceLinks,
  referenceDerivationRows,
  roleReadingGuide,
} from "@/data/aheyabaraya.evidence";

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.52, ease: "easeOut" as const },
};

const decisionTraceCards = [
  {
    title: "Feedback proof를 플랫폼별로 분리",
    previous: "Good/Improve feedback과 public proof가 한 흐름처럼 읽힐 수 있었음",
    decision: "core feedback은 제품 신호로 두고, X/Threads proof와 admin review queue를 별도 단위로 분리",
    current: "platform별 proof 상태와 review status를 따로 볼 수 있는 구조",
    gap: "실제 supporter proof submission history가 더 필요",
  },
  {
    title: "Wallet support 온보딩 경계 정리",
    previous: "로그인, 외부 지갑, support 시작 흐름이 한 문맥에 섞일 수 있었음",
    decision: "간단한 로그인 흐름과 wallet fallback을 분리하고 support-start 상태를 따로 보게 설계",
    current: "wallet-adjacent user가 support를 시작할 수 있는 진입 경로와 fallback이 분리됨",
    gap: "실제 login, support-start, support verify event가 더 필요",
  },
  {
    title: "Verified support 기준으로 문구와 정책 정렬",
    previous: "confirmed support와 verified support 표현이 섞여 해석 범위가 흐려질 수 있었음",
    decision: "support 의미를 투자/성과가 아니라 verified support 상태로 제한해 문구와 동의 흐름을 정렬",
    current: "support는 직접 지원과 검증 상태로만 설명하고, 권리·수익 주장과 분리",
    gap: "support 완료와 feedback completion history가 더 필요",
  },
  {
    title: "Real-domain 공개 전 gate 분리",
    previous: "demo readiness와 실제 공개 blocker가 섞여 공개 판단이 느슨해질 수 있었음",
    decision: "support, feedback, auth recovery blocker를 공개 gate와 따로 관리",
    current: "공개 전 확인할 guardrail과 공개 후 회복 경로가 분리됨",
    gap: "approved runtime usage와 recovery history가 더 필요",
  },
] as const;

const claimBoundaries = [
  {
    title: "말할 수 있는 것",
    body:
      "문제정의, 리서치 근거, 실제로 남긴 decision trace, KPI/export/backup/referral readiness 설계, 협업툴-ready output 구조.",
  },
  {
    title: "현재 단계의 해석 범위",
    body:
      "유저 성장, 활성화, 리텐션, paid efficiency, 제품 전환 성과, social-to-product causality. 이 케이스는 초기 성과 검증 전 단계에서 판단 기준과 측정 설계를 정리한 사례입니다.",
  },
  {
    title: "다음에 필요한 데이터",
    body:
      "visit, session, signup/login, support start, feedback completion, referral bind, campaign label, cost/revenue 같은 real event history와 수집 정책.",
  },
] as const;

const aheyabarayaWorkflowContent = {
  eyebrow: "AHEYABARAYA Work Flow",
  title: "Research -> Product Flow -> Evidence System",
  cards: [
    {
      step: "01",
      label: "Research",
      title: "무엇을 봤나",
      body:
        "EVM/Base와 Solana 지갑에 남는 소액 자산 흐름\n에어드랍·퀘스트 이후 실제 사용으로 이어지지 않는 구간\n작업 완료 기록과 품질 평가 기록이 분리되어야 하는 지점",
      proof: "읽은 근거 -> 잔여 자산, support UX, agent 품질 평가, public-safe Trust boundary",
      output: "도출 질문 -> 작은 support가 첫 신호와 피드백으로 이어질 수 있는가",
      accent: "aqua" as const,
    },
    {
      step: "02",
      label: "Product Flow",
      title: "무엇으로 좁혔나",
      body:
        "Creator apply: 창작자/빌더 신청과 검토 상태를 분리\nIdea launch: 프로젝트 작성, 제출, 공개 준비 흐름을 관리\nSupport / Feedback: 작은 지원과 Good / Improve 입력을 다음 판단 근거로 남김",
      proof: "제품 판단 -> creator apply, idea launch, dashboard, support, feedback을 서로 다른 운영 단위로 분리",
      output: "기능 구조 -> builder가 프로젝트를 올리고 supporter가 지원과 피드백을 남기는 흐름",
      accent: "orange" as const,
    },
    {
      step: "03",
      label: "Evidence",
      title: "어떻게 검토 가능하게 만들었나",
      body:
        "KPI snapshot, admin work, DB backup, referral readiness를 분리\nSQL staging과 Python report로 decision packet 생성\n각 산출물마다 활용 가능 범위와 다음 필요 데이터를 함께 표시",
      proof: "데이터 구조 -> KPI, decision trace, referral readiness, boundary report",
      output: "검토 산출물 -> Notion, Google Sheets, Docs, Excel, Slack digest용 output",
      accent: "indigo" as const,
    },
  ],
} as const;

const productFunctionRails = [
  {
    step: "01",
    label: "Creator Apply",
    title: "creator / builder onboarding",
    body:
      "X 계정 연결, 프로필 링크, 이메일 검증, creator terms 동의를 단계별로 분리\n신청 제출 후 review / approved 상태로 관리\n프로젝트를 올릴 수 있는 builder 자격과 공개 준비 상태를 구분",
    proof: "KPI / guardrail -> application status, profile link completeness, email verified, terms accepted",
    output: "Decision use -> 누가 프로젝트를 만들 수 있는지와 어떤 준비가 부족한지 확인",
    accent: "aqua" as const,
  },
  {
    step: "02",
    label: "Idea Launch",
    title: "project draft -> submit -> publish gate",
    body:
      "새 프로젝트 작성, draft 저장, submit, publish 확인 단계를 분리\n보고서 업로드와 support recipient 설정을 공개 준비 항목으로 관리\nlive 전에는 Support / Feedback 진입을 막아 공개 상태와 참여 상태를 구분",
    proof: "KPI / guardrail -> draft status, submit status, publish gate, report upload readiness",
    output: "Decision use -> 프로젝트가 소개 가능한 상태인지, 참여 가능한 상태인지를 분리해 판단",
    accent: "orange" as const,
  },
  {
    step: "03",
    label: "Dashboard",
    title: "creator / supporter status panel",
    body:
      "creator, supporter, admin이 각자 필요한 상태를 확인하는 dashboard 흐름\nsupport 검증 후 dashboard snapshot refresh로 참여 상태를 갱신\nreview queue, notification, ranking, referral 상태를 운영 단위로 확인",
    proof: "KPI / guardrail -> dashboard snapshot, admin queue, notification state, referral status",
    output: "Decision use -> 제품 운영 상태와 다음 처리 대상을 한 화면에서 확인",
    accent: "indigo" as const,
  },
  {
    step: "04",
    label: "Support",
    title: "wallet-adjacent support",
    body:
      "지갑에 남아 있는 작은 잔여 자산으로 창작자·빌더에게 직접 지원\n지원은 creator address로 직접 전송되는 non-custodial 흐름\n검증 후 pending -> confirmed -> verified 상태로 관리",
    proof: "KPI / guardrail -> support receipt state, transfer snapshot, dashboard refresh",
    output: "Decision use -> 지원 완료 여부와 feedback unlock 기준을 분리해 확인",
    accent: "aqua" as const,
  },
  {
    step: "05",
    label: "Feedback",
    title: "Good / Improve core signal",
    body:
      "핵심 입력은 Good / Improve와 짧은 note\nX/Threads public proof는 core feedback과 분리된 선택 surface\n미해결 proof는 admin review queue로 보류",
    proof: "KPI / guardrail -> feedback submission, proof status, review status",
    output: "Decision use -> product signal과 public share 반응을 섞지 않음",
    accent: "orange" as const,
  },
] as const;

const trustEvaluationRails = [
  {
    step: "01",
    label: "Resolve",
    title: "평가 대상을 찾고 검토 범위를 정한다",
    body:
      "외부 작업 결과나 agent output을 바로 성과로 보지 않고 평가 가능한 대상인지 먼저 확인\nprivate route가 아니라 공개 가능한 Trust contract 범위만 사용\n평가 전 self-feedback, same-owner feedback, actor boundary를 점검",
    proof: "KPI / guardrail -> eligible target, actor boundary, public route",
    output: "Decision use -> 평가 가능한 대상과 제외해야 할 대상을 먼저 분리",
    accent: "indigo" as const,
  },
  {
    step: "02",
    label: "Review",
    title: "Good / Improve / Risk로 판단을 제한한다",
    body:
      "작업 결과를 requirement fit, quality, constraint, reliability 기준으로 검토\n판정은 Good, Improve, risk flag 수준으로 제한\n긴 해석보다 다음 선택에 재사용할 수 있는 짧은 평가 이유를 남김",
    proof: "KPI / guardrail -> review completeness, reason tags, evidence bundle",
    output: "Decision use -> 완료 여부가 아니라 품질과 제약 조건을 다음 판단 근거로 남김",
    accent: "aqua" as const,
  },
  {
    step: "03",
    label: "Publish Boundary",
    title: "공개 가능한 평가 기록만 남긴다",
    body:
      "공개 Trust 기록은 제품 내부 운영 로그와 분리\n외부 독자가 이해할 수 있는 요약, 신호, 근거 링크만 남김\nprivate/admin 판단은 포트폴리오 주장 근거로 쓰지 않음",
    proof: "KPI / guardrail -> public-safe summary, signal history, private route exclusion",
    output: "Decision use -> 공개 가능한 신뢰 기록과 내부 운영 판단을 섞지 않음",
    accent: "orange" as const,
  },
] as const;

const problemInsightCards = [
  {
    label: "01 · Utility gap",
    title: "소액 온체인 자산은 남지만, 바로 쓸 이유가 약하다",
    bullets: [
      "에어드랍·퀘스트·거래 이후 지갑에는 작은 native gas token과 project token이 남습니다.",
      "거래소로 보내기엔 작고, 다시 온체인에서 쓰기엔 gas·chain·use-case 장벽이 있습니다.",
      "그래서 AHEYABARAYA에서는 이를 획득 성과가 아니라 작은 support 사용 흐름으로 재해석했습니다.",
    ],
    accent: "aqua" as const,
  },
  {
    label: "02 · Quality gap",
    title: "완료 기록만으로는 다음 선택에 쓸 품질 판단이 부족하다",
    bullets: [
      "agent 작업은 Job, Memo, 완료 상태를 남길 수 있지만 품질 판단 이유는 별도 구조가 필요합니다.",
      "정확도, 제약 조건, 재사용 가능성, 개선점을 다음 의사결정에 남기는 레이어가 필요했습니다.",
      "AHEYABARAYA에서는 Good / Improve feedback과 Trust 평가 기록을 서로 다른 판단 근거로 분리했습니다.",
    ],
    accent: "indigo" as const,
  },
] as const;

const dataFlowSteps = [
  {
    label: "Input",
    title: "운영 기록을 판단 단위로 모음",
    body: "decision log, handoff, changelog, KPI snapshot, admin queue, backup, referral contract를 한 번에 읽을 수 있는 입력 단위로 정리합니다.",
    tags: ["decision log", "KPI snapshot", "admin queue", "backup"],
  },
  {
    label: "SQL Model",
    title: "기록을 staging / mart로 분리",
    body: "raw 기록은 staging에 두고, mart에서는 decision trace, KPI design, referral readiness를 판단 가능한 표로 만듭니다.",
    tags: ["staging", "decision mart", "KPI mart", "referral readiness"],
  },
  {
    label: "Python Report",
    title: "검토용 산출물로 변환",
    body: "Python은 CSV, workbook, brief, 협업툴-ready output을 생성하고 각 row에 다음 확인 데이터를 붙입니다.",
    tags: ["CSV", "XLSX", "brief", "tool output"],
  },
  {
    label: "Decision Use",
    title: "판단과 해석 범위를 함께 제출",
    body: "각 decision packet은 무엇을 판단했는지, 어떤 KPI를 봤는지, 현재 단계의 해석 범위를 어디까지로 둘지 함께 보여줍니다.",
    tags: ["decision", "KPI", "next data", "interpretation boundary"],
  },
] as const;

const reportAnswerCards = [
  {
    title: "어떤 결정을 실제로 내렸나",
    question: "이전 상태에서 무엇을 바꿨고, 지금은 어떤 상태인가?",
    answer: "decision trace가 previous state, decision made, current state, validation gap을 한 행으로 묶습니다.",
    output: "Actual decision trace",
  },
  {
    title: "어떤 KPI를 왜 준비했나",
    question: "운영 baseline, admin queue, backup, referral readiness는 각각 어떤 판단에 쓰이는가?",
    answer: "KPI design report가 지표를 성과 지표가 아니라 운영 판단과 준비도 판단으로 분류합니다.",
    output: "KPI measurement design",
  },
  {
    title: "Referral은 어디까지 말할 수 있나",
    question: "ref code, UTM, campaign label을 묶을 수 있어도 지금 성과로 말해도 되는가?",
    answer: "Referral readiness는 attribution 성과가 아니라 향후 join key 준비도만 보여줍니다.",
    output: "Referral readiness",
  },
  {
    title: "협업툴에는 무엇을 넘기나",
    question: "Slack, Notion, Sheets, Docs, Excel은 같은 데이터를 어떻게 다르게 읽는가?",
    answer: "Collaboration output matrix가 도구별 목적과 검토 단위를 분리합니다.",
    output: "Collaboration output",
  },
] as const;

const decisionPacketSamples = [
  {
    label: "Decision packet 01",
    title: "KPI export와 DB backup을 분리",
    decision: "KPI snapshot은 운영 baseline, DB backup은 recovery/reproducibility evidence로 분리했습니다.",
    kpi: "kpi snapshot availability / backup reliability / export readiness",
    next: "더 긴 snapshot history와 실제 운영 event가 쌓이면 추세 판단으로 확장",
  },
  {
    label: "Decision packet 02",
    title: "Support와 Feedback의 unlock 기준 분리",
    decision: "Support는 verified state까지의 운영 상태로, Feedback은 Good / Improve와 proof queue로 따로 봅니다.",
    kpi: "support receipt state / feedback completion / proof review status",
    next: "support 이후 feedback completion history가 생기면 제품 개선 우선순위 판단",
  },
  {
    label: "Decision packet 03",
    title: "Referral은 성과가 아니라 측정 준비도로 제한",
    decision: "ref code, bind, UTM bridge는 acquisition 성과가 아니라 향후 attribution join key로만 설명합니다.",
    kpi: "referral link ready / bind ready / campaign label bridge",
    next: "visit, login, bind, support event가 붙은 뒤에만 attribution 분석 가능",
  },
  {
    label: "Decision packet 04",
    title: "Trust는 Core Product Rail과 분리",
    decision: "Trust는 creator/supporter 핵심 흐름이 아니라 외부 작업 결과를 public-safe 평가 기록으로 남기는 별도 레이어로 둡니다.",
    kpi: "eligible target / review completeness / public-safe summary",
    next: "공개 가능한 평가 history가 쌓이면 후보 비교와 품질 판단 근거로 사용",
  },
] as const;

const evidenceSystemCards = [
  {
    label: "Input",
    title: "판단 근거를 먼저 모은다",
    body:
      "decision log, handoff, changelog, KPI snapshot, admin work, backup 상태, referral 측정 계약을 입력 자산으로 둡니다.",
    chips: ["decision log", "KPI snapshot", "backup", "referral contract"],
    accent: "aqua" as const,
  },
  {
    label: "Model",
    title: "SQL/Python으로 검토 가능한 표로 바꾼다",
    body:
      "staging table에서 raw한 기록을 정리하고, mart에서 decision trace, KPI design, referral readiness, 해석 범위 report를 만듭니다.",
    chips: ["SQL staging", "mart table", "Python report", "CSV/XLSX"],
    accent: "orange" as const,
  },
  {
    label: "Decision",
    title: "결정과 해석 범위를 함께 표시한다",
    body:
      "각 판단마다 previous state, decision made, current state, KPI/gap, 다음에 필요한 데이터를 같은 packet으로 묶습니다.",
    chips: ["state change", "guardrail", "next data", "interpretation boundary"],
    accent: "indigo" as const,
  },
] as const;

const decisionLaneCards = [
  {
    label: "Support / Feedback",
    title: "지원과 피드백을 하나의 성과로 합치지 않음",
    body:
      "Support는 verified state까지의 운영 상태로 보고, Feedback은 Good/Improve와 proof queue로 따로 봅니다. 이 분리가 되어야 작은 support가 바로 채널 성과로 과장되지 않습니다.",
    kpi: "support receipt state / feedback completion / proof review status",
    output: "support 이후 어떤 feedback evidence가 남았는지 확인",
    accent: "aqua" as const,
  },
  {
    label: "Trust / Public Boundary",
    title: "공개 평가 기능과 내부 운영 경계를 분리",
    body:
      "Trust rail은 외부 작업 결과를 public-safe 평가 기록으로 남기는 기능입니다. 내부 라우트나 운영 pack이 아니라 공개 가능한 평가 항목과 evidence bundle만 포트폴리오에 남깁니다.",
    kpi: "eligible target / read record / evidence bundle / verdict completeness",
    output: "품질 평가가 재사용 가능한 trust memory가 되는지 확인",
    accent: "indigo" as const,
  },
  {
    label: "Ops / Measurement",
    title: "KPI, backup, referral readiness의 역할을 분리",
    body:
      "KPI snapshot은 운영 baseline, DB backup은 복구 가능성, referral은 향후 attribution join key 준비도로 둡니다. 현재 단계에서 growth나 acquisition 성과로 읽지 않게 막는 장치입니다.",
    kpi: "snapshot availability / backup reliability / ref-UTM bridge readiness",
    output: "다음 데이터가 생겼을 때 어떤 판단으로 넘어갈지 정의",
    accent: "orange" as const,
  },
] as const;

const creativeImages = [
  "/appendix/bluegarage/aheya/dog.webp",
  "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
  "/appendix/bluegarage/aheya/tiger-zodiac.webp",
] as const;

export default function AheyabarayaEvidencePage() {
  const flagshipCase = workCaseMap["aheya"];
  const aheyaResearchSteps = flagshipCase.flowSteps?.slice(0, 2) ?? [];
  const projectPackageSection = flagshipCase.detailMediaSections?.[0];

  return (
    <main className="cinema-shell integrated-shell">
      <section className="page-frame integrated-hero-frame">
        <header className="topbar integrated-topbar">
          <Link href="/" className="brand-lockup">
            <span className="brand-dot" />
            <span>minnns / decision evidence portfolio</span>
          </Link>
          <nav className="topnav integrated-nav">
            <a href="#problem">Workflow</a>
            <a href="#research">Research</a>
            <a href="#project-package">Project</a>
            <a href="#data">Data</a>
            <a href="#decisions">Decisions</a>
            <a href="#gtm">GTM</a>
            <a href="#roles">Roles</a>
          </nav>
        </header>

        <div className="integrated-hero-grid">
          <motion.section {...fadeUp} className="integrated-hero-copy">
            <p className="eyebrow text-aqua">AHEYABARAYA Decision Evidence Case</p>
            <h1>AHEYABARAYA Decision Evidence Case</h1>
            <p>
              초기 제품에서 문제정의, 운영 판단, 측정 경계, 시장 메시지 전환을 설계한 기록입니다.
              초기 단계에서 어떤 판단을 왜 내렸고, KPI/SQL/Python 산출물로 성과 해석 기준을 어떻게 설계했는지 보여줍니다.
            </p>
            <div className="hero-ctas">
              <a href="#problem" className="cta-primary">
                흐름 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#data" className="cta-secondary">
                evidence preview
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
            className="integrated-hero-visual"
          >
            <div className="integrated-hero-media">
              <Image
                src="/aheya/aheyabaraya-homepage-2026-04-28.png"
                alt="AHEYABARAYA product surface."
                fill
                sizes="(max-width: 1100px) 100vw, 44vw"
                className="integrated-hero-image"
                priority
              />
            </div>
            <div className="integrated-hero-proof-grid">
              <div><span>Problem</span><strong>first-signal gap</strong></div>
              <div><span>Decision</span><strong>support + feedback boundary</strong></div>
              <div><span>Data</span><strong>KPI / SQL / Python preview</strong></div>
              <div><span>Output</span><strong>collaboration-ready reports</strong></div>
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} id="problem" className="page-frame crossangle-workflow-panel aheyabaraya-workflow-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-aqua">{aheyabarayaWorkflowContent.eyebrow}</p>
          <h2>{aheyabarayaWorkflowContent.title}</h2>
          <p>
            이 케이스의 앞단은 “문제를 정의했다”는 문장 하나가 아니라, 어떤 리서치를 보고
            어떤 제품 흐름으로 좁혔고, 그 판단을 어떤 KPI/SQL/Python 증거로 남겼는지를 보여주는 흐름입니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {aheyabarayaWorkflowContent.cards.map((item) => (
            <article key={item.label} className="crossangle-workflow-card" data-accent={item.accent}>
              <div className="crossangle-workflow-topline">
                <span>{item.step}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <ul className="crossangle-workflow-body-list">
                {item.body.split("\n").map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
              <div className="crossangle-workflow-proof">
                <div>
                  <span>{item.proof.split("->")[0].trim()}</span>
                  <ul>
                    {item.proof
                      .split("->")
                      .slice(1)
                      .join("->")
                      .split(",")
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <span>{item.output.split("->")[0].trim()}</span>
                  <ul>
                    {item.output
                      .split("->")
                      .slice(1)
                      .join("->")
                      .split(",")
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="research"
        className="page-frame crossangle-main-frame crossangle-detail-shell detail-shell-aheya crossangle-inline-detail-shell"
      >
        {aheyaResearchSteps.map((item, index) => {
          const stepAccent = aheyaStepAccent(index, "aqua");
          const researchFields = parseResearchBody(item.body);

          return (
            <section
              key={item.step + item.title}
              id={`research-0${index + 1}`}
              className="detail-slide detail-stage detail-stage-research-slide"
            >
              <div className="detail-stage-topline">
                <span className={`detail-slide-index ${accentText(stepAccent)}`}>
                  {String(index + 2).padStart(2, "0")}. Research 0{index + 1}
                </span>
              </div>
              <div className="detail-stage-copy">
                <p className={`eyebrow ${accentText(stepAccent)}`}>{flagshipCase.flowHeading}</p>
                <h2 className="detail-slide-title">{item.title}</h2>
                <p className="detail-slide-subcopy">
                  각 리서치를 질문, 방식, 근거/출처, 도출 결론 순서로 한 장에 압축했습니다.
                </p>
              </div>

              <div className="detail-research-slide-grid">
                <article className={`detail-research-panel detail-research-panel-main ${accentBar(stepAccent)}`}>
                  <span className="detail-research-panel-label">조사 설계</span>
                  <dl className="detail-research-fields detail-research-fields-large">
                    <div>
                      <dt>조사 목적</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "조사 목적"))}</dd>
                    </div>
                    <div>
                      <dt>조사한 것 / 방식</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "조사한 것 / 방식"))}</dd>
                    </div>
                    <div>
                      <dt>근거 / 출처</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "근거 / 출처"))}</dd>
                    </div>
                  </dl>
                </article>

                <article className={`detail-research-panel detail-research-panel-proof ${accentBar(stepAccent)}`}>
                  <span className="detail-research-panel-label">도출 결론</span>
                  {renderAheyaResearchVisual(index)}
                  <div className="detail-research-metric-list">
                    {getAheyaResearchMetrics(index).map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                  <dl className="detail-research-fields detail-research-fields-large">
                    <div>
                      <dt>결론 / 해석</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "판단"))}</dd>
                    </div>
                  </dl>
                  {item.meta ? <span className="detail-process-step-meta">{item.meta}</span> : null}
                </article>
              </div>
            </section>
          );
        })}
      </motion.section>

      <motion.section {...fadeUp} id="problem-insight" className="page-frame crossangle-problem-solution-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">{mainEvidenceContent.problem.eyebrow}</p>
            <h2 className="section-title">{mainEvidenceContent.problem.title}</h2>
          </div>
        </div>

        <div className="crossangle-problem-solution-grid">
          <div className="crossangle-problem-stack">
            {problemInsightCards.map((item) => (
              <article key={item.title} className="crossangle-problem-card" data-accent={item.accent}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <ul className="integrated-problem-bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="crossangle-problem-arrow" aria-hidden="true">
            <span>→</span>
          </div>

          <article className="crossangle-solution-card">
            <div className="crossangle-solution-copy">
              <p className="eyebrow text-aqua">{mainEvidenceContent.solution.eyebrow}</p>
              <h3>{mainEvidenceContent.solution.title}</h3>
              <p>{mainEvidenceContent.solution.oneLiner}</p>
              <ul className="crossangle-solution-list">
                {mainEvidenceContent.solution.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={mainEvidenceContent.solution.ctaHref} className="inline-link tainai-guide-link">
                {mainEvidenceContent.solution.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </motion.section>

      {projectPackageSection ? (
        <motion.section
          {...fadeUp}
          id="project-package"
          className="page-frame crossangle-main-frame crossangle-detail-shell detail-shell-aheya crossangle-inline-detail-shell"
        >
          <section className="detail-slide detail-stage detail-stage-evidence">
            <div className="detail-stage-topline">
              <span className="detail-slide-index text-aqua">05. Project Profile</span>
            </div>
            <div className="detail-stage-copy">
              <p className="eyebrow text-aqua">{projectPackageSection.eyebrow}</p>
              <h2 className="detail-slide-title">{projectPackageSection.title}</h2>
              <p className="detail-slide-subcopy">
                리서치와 문제정의가 실제 제품 설명, Dust mode, Trust 평가 레이어로 어떻게 바뀌었는지 보여주는 소개 섹션입니다.
              </p>
            </div>
            <DetailMediaGallery
              items={projectPackageSection.items}
              columns={projectPackageSection.columns ?? 3}
              layout={projectPackageSection.layout}
            />
          </section>
        </motion.section>
      ) : null}

      <motion.section {...fadeUp} id="feature-rails" className="page-frame crossangle-workflow-panel aheyabaraya-feature-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-orange">Core Product Rails</p>
          <h2>builder와 supporter를 연결하는 핵심 흐름</h2>
          <p>
            Core product는 supporter 행동만이 아니라 creator 신청, 프로젝트 작성/공개, dashboard 운영,
            support, feedback까지 포함합니다. Trust는 아래 별도 평가 레이어로 분리합니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {productFunctionRails.map((item) => (
            <article key={item.label} className="crossangle-workflow-card" data-accent={item.accent}>
              <div className="crossangle-workflow-topline">
                <span>{item.step}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <ul className="crossangle-workflow-body-list">
                {item.body.split("\n").map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
              <div className="crossangle-workflow-proof">
                <div>
                  <span>{item.proof.split("->")[0].trim()}</span>
                  <ul>
                    {item.proof
                      .split("->")
                      .slice(1)
                      .join("->")
                      .split(",")
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <span>{item.output.split("->")[0].trim()}</span>
                  <ul>
                    {item.output
                      .split("->")
                      .slice(1)
                      .join("->")
                      .split(",")
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="trust-layer" className="page-frame crossangle-workflow-panel aheyabaraya-trust-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-indigo">Trust Evaluation Layer</p>
          <h2>Trust는 core rail이 아니라 별도 평가 레이어</h2>
          <p>
            Trust는 creator apply나 support flow와 섞지 않습니다. 외부 작업 결과를 공개 가능한 평가 기록으로
            바꾸는 별도 레이어이며, 내부 운영 로그나 성과 주장과 분리해 읽어야 합니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {trustEvaluationRails.map((item) => (
            <article key={item.label} className="crossangle-workflow-card" data-accent={item.accent}>
              <div className="crossangle-workflow-topline">
                <span>{item.step}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <ul className="crossangle-workflow-body-list">
                {item.body.split("\n").map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
              <div className="crossangle-workflow-proof">
                <div>
                  <span>{item.proof.split("->")[0].trim()}</span>
                  <ul>
                    {item.proof
                      .split("->")
                      .slice(1)
                      .join("->")
                      .split(",")
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <span>{item.output.split("->")[0].trim()}</span>
                  <ul>
                    {item.output
                      .split("->")
                      .slice(1)
                      .join("->")
                      .split(",")
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="data" className="page-frame integrated-section integrated-decision-system-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">KPI / SQL / Python Evidence System</p>
            <h2>기록을 검토 가능한 표로 바꾸는 구조</h2>
          </div>
          <p>
            여기서 SQL/Python은 장식이 아닙니다. 흩어진 판단 로그와 KPI 설계를 reviewable table로 바꾸고,
            각 판단마다 무엇을 봤는지와 현재 단계의 해석 범위를 같이 남기는 장치입니다.
          </p>
        </div>

        <div className="integrated-evidence-system-grid">
          {evidenceSystemCards.map((item) => (
            <article key={item.label} className="integrated-evidence-system-card" data-accent={item.accent}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div>
                {item.chips.map((chip) => (
                  <small key={chip}>{chip}</small>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="integrated-data-flow-map">
          {dataFlowSteps.map((step, index) => (
            <article key={step.label} className="integrated-data-flow-step">
              <div className="integrated-data-flow-step-head">
                <Boxes className="h-5 w-5" />
                <span>{String(index + 1).padStart(2, "0")} · {step.label}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div>
                {step.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame integrated-section integrated-output-summary-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Report Questions</p>
            <h2>산출물은 파일이 아니라 판단 질문으로 읽힌다</h2>
          </div>
          <p>
            채용 담당자가 바로 이해할 수 있도록 “무슨 파일을 만들었는가”보다 “어떤 판단 질문에 답하는가”로 정리했습니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {reportAnswerCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <BarChart3 className="h-5 w-5" />
              <span>{item.output}</span>
              <h3>{item.title}</h3>
              <p>{item.question}</p>
              <strong>{item.answer}</strong>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame integrated-section integrated-evidence-visual-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Evidence Preview</p>
            <h2>코드와 협업툴 산출물을 화면 증거로 연결</h2>
          </div>
          <p>
            SQL/Python 코드와 새로 생성한 Google Workspace 산출물을 포트폴리오에서 바로 확인할 수 있는 evidence preview로 정리했습니다.
          </p>
        </div>
        <div className="integrated-evidence-visual-grid">
          {dataEvidenceVisuals.map((item) => (
            <article key={item.src} className="integrated-evidence-visual-card">
              <div className="integrated-evidence-visual-media">
                <Image src={item.src} alt={item.title} fill sizes="(max-width: 1100px) 100vw, 42vw" />
              </div>
              <div>
                <span>{item.title}</span>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame integrated-section integrated-report-sample-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Decision Packet Sample</p>
            <h2>대표 row만 뽑아 의사결정 흐름으로 보여준다</h2>
          </div>
          <p>
            전체 표는 협업툴과 workbook에서 확인하고, 상세페이지에서는 “판단 → KPI → 다음 데이터”가
            한 번에 읽히는 대표 packet만 보여줍니다.
          </p>
        </div>
        <div className="integrated-decision-packet-grid">
          {decisionPacketSamples.map((item) => (
            <article key={item.title} className="integrated-decision-packet-card">
              <div className="integrated-preview-card-head">
                <FileText className="h-5 w-5" />
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <dl>
                <div><dt>Decision</dt><dd>{item.decision}</dd></div>
                <div><dt>KPI / guardrail</dt><dd>{item.kpi}</dd></div>
                <div><dt>Next data</dt><dd>{item.next}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="decisions" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Actual Decision Trace</p>
            <h2>결정, KPI, 다음 데이터가 한 줄로 이어진다</h2>
          </div>
          <p>
            결정 로그를 그대로 나열하지 않고, 어떤 운영 판단을 내렸는지와 그 판단을 확인하기 위해
            어떤 KPI/guardrail을 붙였는지로 다시 묶었습니다.
          </p>
        </div>

        <div className="integrated-decision-lane-grid">
          {decisionLaneCards.map((item) => (
            <article key={item.label} className="integrated-decision-lane-card" data-accent={item.accent}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <dl>
                <div><dt>KPI / guardrail</dt><dd>{item.kpi}</dd></div>
                <div><dt>Decision use</dt><dd>{item.output}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <div className="integrated-decision-grid">
          {decisionTraceCards.map((item) => (
            <article key={item.title} className="integrated-decision-card">
              <GitBranch className="h-5 w-5" />
              <h3>{item.title}</h3>
              <dl>
                <div><dt>Previous state</dt><dd>{item.previous}</dd></div>
                <div><dt>Decision made</dt><dd>{item.decision}</dd></div>
                <div><dt>Current state</dt><dd>{item.current}</dd></div>
                <div><dt>Validation gap</dt><dd>{item.gap}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <div className="integrated-stage-subsection">
          <div className="integrated-section-head">
            <p className="eyebrow text-orange">Decision Trace Detail</p>
            <h2>핵심 판단을 이전 상태와 현재 상태로 정리</h2>
            <p>
              상세 로그를 그대로 노출하지 않고, 제출용으로 이해 가능한 판단 단위만 추렸습니다.
              각 카드는 무엇을 바꿨고 어떤 KPI/guardrail로 확인하려 했는지를 보여줍니다.
            </p>
          </div>
          <div className="integrated-before-after-grid">
            {beforeAfterEvidenceCards.map((item) => (
              <article key={item.title} className="integrated-before-after-card">
                <span>{item.screenStatus}</span>
                <h3>{item.title}</h3>
                <blockquote>{item.decisionLogExcerpt}</blockquote>
                <dl>
                  <div><dt>Prior state</dt><dd>{item.before}</dd></div>
                  <div><dt>Decision</dt><dd>{item.change}</dd></div>
                  <div><dt>Current state</dt><dd>{item.after}</dd></div>
                  <div><dt>KPI / guardrail</dt><dd>{item.kpi}</dd></div>
                  <div><dt>Claim boundary</dt><dd>{item.boundary}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="boundary" className="page-frame integrated-section integrated-claim-section">
        <div className="integrated-section-head">
          <p className="eyebrow text-indigo">Interpretation Boundary</p>
          <h2>이 케이스의 주장 범위와 해석 기준</h2>
          <p>
            초기 성과 검증 전 단계에서 가장 중요한 것은 “어디까지 해석할 수 있는가”입니다.
            그래서 proxy/scenario는 성과 대체 용도가 아닌 성과 해석 기준으로 둡니다.
          </p>
        </div>
        <div className="integrated-claim-grid">
          {claimBoundaries.map((item) => (
            <article key={item.title} className="integrated-claim-card">
              <LineChart className="h-5 w-5" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="gtm" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">GTM Reference Derivation</p>
            <h2>시장조사를 산출물 판단으로 압축</h2>
          </div>
          <p>
            레퍼런스 조사량보다 실무 적용 방식이 드러나도록 Reference → Pattern → GTM implication → Output → Claim boundary로 정리했습니다.
            그래서 마케팅 인접 직무에서는 리서치 기반 메시지 전환 역량으로 읽히게 됩니다.
          </p>
        </div>
        <div className="integrated-reference-grid">
          {referenceDerivationRows.map((item) => (
            <article key={item.reference} className="integrated-reference-card">
              <span>{item.reference}</span>
              <dl>
                <div><dt>What I checked</dt><dd>{item.checked}</dd></div>
                <div><dt>Pattern found</dt><dd>{item.pattern}</dd></div>
                <div><dt>GTM implication</dt><dd>{item.implication}</dd></div>
                <div><dt>AHEYABARAYA output</dt><dd>{item.output}</dd></div>
                <div><dt>Claim boundary</dt><dd>{item.boundary}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="creative" className="page-frame integrated-section integrated-creative-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Channel / Creative Signal</p>
            <h2>채널 반응을 메시지 개선 근거로 활용</h2>
          </div>
          <p>
            creative 수치는 제품 전환 지표와 분리해, 메시지와 시각 진입점 개선 근거로 활용했습니다.
            여기서는 X-native hook, visual entry point, message iteration을 봅니다.
          </p>
        </div>
        <div className="integrated-creative-grid">
          <div className="integrated-creative-copy">
            <Megaphone className="h-5 w-5" />
            <h3>별도 creative 상세와 연결되는 사용 방식</h3>
            <div className="integrated-creative-signal-list">
              {creativeSignalCards.map((item) => (
                <article key={item.title}>
                  <span>{item.title}</span>
                  <p><strong>Signal</strong>{item.signal}</p>
                  <p><strong>Evidence</strong>{item.evidence}</p>
                  <p><strong>Use</strong>{item.use}</p>
                  <p><strong>Boundary</strong>{item.boundary}</p>
                </article>
              ))}
            </div>
            <div className="integrated-analytics-grid">
              {creativeAnalyticsImages.map((item) => (
                <article key={item.src} className="integrated-analytics-card">
                  <div className="integrated-analytics-media">
                    <Image src={item.src} alt={item.title} fill sizes="(max-width: 1100px) 100vw, 32vw" />
                  </div>
                  <span>{item.title}</span>
                  <p>{item.caption}</p>
                </article>
              ))}
            </div>
            <Link href="/creative/work/aheya" className="inline-link">
              creative evidence 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="integrated-creative-media-grid">
            {creativeImages.map((src) => (
              <div key={src} className="integrated-creative-media">
                <Image
                  src={src}
                  alt="AHEYABARAYA channel creative signal asset."
                  fill
                  sizes="(max-width: 1100px) 33vw, 14vw"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="collaboration" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Collaboration Workflow</p>
            <h2>협업툴별로 output 목적을 다르게 둔다</h2>
          </div>
          <p>
            협업툴별 검토 방식에 맞춰 같은 SQL/Python output을 Slack, Notion,
            Google Workspace, Excel/CSV가 각각 읽기 쉬운 보고 단위로 재구성했습니다.
          </p>
        </div>
        <div className="integrated-collab-proof-grid">
          {collaborationEvidenceVisuals.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="integrated-collab-proof-card">
              <div className="integrated-collab-proof-media">
                <Image src={item.src} alt={item.title} fill sizes="(max-width: 1100px) 100vw, 42vw" />
              </div>
              <div>
                <span>{item.title}</span>
                <p>{item.caption}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="integrated-evidence-link-row">
          {externalEvidenceLinks.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="inline-link">
              {item.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="integrated-collab-grid">
          {collaborationWorkflowRows.map((item) => (
            <article key={item.tool} className="integrated-collab-card">
              <span>{item.tool}</span>
              <h3>{item.object}</h3>
              <dl>
                <div><dt>Purpose</dt><dd>{item.purpose}</dd></div>
                <div><dt>Output</dt><dd>{item.output}</dd></div>
                <div><dt>Boundary</dt><dd>{item.boundary}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="roles" className="page-frame integrated-section">
        <div className="integrated-section-head">
          <p className="eyebrow text-indigo">How to read this case by role</p>
          <h2>역할별로 어디를 봐야 하는가</h2>
          <p>
            이 섹션은 역할별 검토 관점과 확인할 역량 범위를 정리합니다.
            같은 상세페이지를 제출하더라도 직무별로 읽어야 할 evidence가 다릅니다.
          </p>
        </div>
        <div className="integrated-role-grid">
          {roleReadingGuide.map((item) => (
            <article key={item.role} className="integrated-role-card">
              <div className="integrated-role-card-top">
                <ShieldCheck className="h-5 w-5" />
                <strong>{item.role}</strong>
              </div>
              <dl>
                <div><dt>보여주는 역량</dt><dd>{item.shows}</dd></div>
                <div><dt>봐야 할 섹션</dt><dd>{item.sections}</dd></div>
                <div><dt>해석 제외 범위</dt><dd>{item.doNotClaim}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame integrated-section integrated-boundary-section">
        <Sparkles className="h-5 w-5" />
        <div>
          <p className="eyebrow text-orange">Submission Use</p>
          <h2>공통 상세페이지를 직무별 요약 페이지와 연결한다</h2>
          <p>
            이 페이지는 PM/Ops/GTM 인접 직무에서 공통 evidence page로 두고,
            앞에 붙는 요약 페이지에서 문제정의, 리서치, 데이터 모델링, channel signal 중 필요한 축만 강조하는 일관된 제출 구조입니다.
          </p>
          <div className="integrated-boundary-links">
            <Link href="/pm" className="inline-link">PM front door <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/crossangle" className="inline-link">Web3 front door <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/creative" className="inline-link">Creative front door <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <Sparkles className="h-5 w-5 integrated-boundary-spark" />
      </motion.section>
    </main>
  );
}


function accentText(accent: Accent) {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}

function accentBar(accent: Accent) {
  switch (accent) {
    case "aqua":
      return "detail-card-aqua";
    case "orange":
      return "detail-card-orange";
    case "indigo":
      return "detail-card-indigo";
  }
}

function aheyaStepAccent(index: number, fallback: Accent): Accent {
  const accents: Accent[] = ["aqua", "orange", "indigo", "orange"];

  return accents[index] ?? fallback;
}

function getResearchField(fields: Array<{ label: string; value: string }>, label: string) {
  return fields.find((field) => field.label === label)?.value ?? "";
}

function renderResearchFieldValue(value: string) {
  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return value;
  }

  return (
    <ul className="detail-research-field-list">
      {lines.map((line) => (
        <li key={line}>{line.replace(/^•\s*/, "")}</li>
      ))}
    </ul>
  );
}

function getAheyaResearchMetrics(index: number) {
  if (index === 1) {
    return [
      "ACP: Job / Memo / Escrow",
      "Flow: Request -> Evaluation -> Completion",
      "결론: 품질 평가 기록 필요",
    ];
  }

  return [
    "조사: EVM/Base·Solana 잔여 자산 흐름",
    "잔여 형태: native gas token + project token",
    "적용: 제품·서비스 소비 / 소액 후원",
  ];
}

function parseResearchBody(body: string) {
  const labelMap = [
    { marker: "질문", label: "조사 목적" },
    { marker: "방식", label: "조사한 것 / 방식" },
    { marker: "근거", label: "근거 / 출처" },
    { marker: "판단", label: "판단" },
  ] as const;
  const positions = labelMap
    .map((item) => {
      const index = body.indexOf(`${item.marker}:`);

      return index >= 0 ? { ...item, index } : null;
    })
    .filter((item): item is (typeof labelMap)[number] & { index: number } => Boolean(item))
    .sort((a, b) => a.index - b.index);

  if (!positions.length) {
    return [{ label: "요약", value: body }];
  }

  return positions.map((item, index) => {
    const start = item.index + item.marker.length + 1;
    const end = positions[index + 1]?.index ?? body.length;

    return {
      label: item.label,
      value: body.slice(start, end).trim().replace(/\.$/, ""),
    };
  });
}

function renderAheyaResearchVisual(index: number) {
  if (index === 1) {
    return (
      <div className="detail-research-visual detail-research-flow" aria-label="ACP lifecycle and quality evaluation gap">
        {["Request", "Negotiation", "Transaction", "Evaluation", "Completion"].map((item) => (
          <span key={item}>{item}</span>
        ))}
        <strong>+ 품질 평가 기록</strong>
      </div>
    );
  }

  return (
    <div className="detail-research-visual detail-research-timeline detail-research-conclusion" aria-label="Research 01 conclusion from residual on-chain assets to product/service use">
      {[
        ["조사 대상", "에어드랍·퀘스트·거래 이후 지갑 잔여"],
        ["남는 형태", "소액 native gas token + project token"],
        ["방치 이유", "금액·gas·체인\n용도 장벽"],
        ["AHEYA 적용", "제품·서비스 소비 / 소액 후원 / 피드백"],
      ].map(([date, label]) => (
        <div key={date}>
          <strong>{date}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
