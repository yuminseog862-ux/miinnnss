"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  FileText,
  GitBranch,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  collaborationEvidenceVisuals,
  creativeAnalyticsImages,
  dataEvidenceVisuals,
} from "@/data/aheyabaraya.evidence";

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.52, ease: "easeOut" as const },
};

const roleChips = [
  "Web3 UX Flow",
  "Wallet Interaction",
  "UI Copy",
  "Product Structuring",
  "AI-assisted Workflow",
  "Frontend Planning",
] as const;

const heroProofs = [
  { label: "Prototype", value: "wallet support + transaction state" },
  { label: "Flow", value: "Good / Improve feedback loop" },
  { label: "Evidence", value: "KPI boundary + report logic" },
  { label: "Creative", value: "visual mood + X-native hook" },
] as const;

const summaryCards = [
  {
    label: "01",
    title: "Core Flow",
    body:
      "Open idea → Wallet support → Good / Improve → Optional proof. 사용자가 아이디어를 열어보고, 지갑으로 support하고, 짧은 feedback을 남기는 핵심 흐름을 설계했습니다.",
  },
  {
    label: "02",
    title: "Web3 UX",
    body:
      "Wallet, signature, transaction state, on-chain verification. 복잡한 Web3 단계를 사용자가 이해할 수 있는 상태와 안내 문구로 나누었습니다.",
  },
  {
    label: "03",
    title: "Evidence",
    body:
      "Decision trace, KPI boundary, SQL/Python report logic. 제품 행동과 성과 주장을 분리하고, 다음 검증에 필요한 evidence structure를 설계했습니다.",
  },
  {
    label: "04",
    title: "Creative System",
    body:
      "Visual mood, character, X-native content, AI-assisted assets. 제품의 무드와 채널 진입점을 AI-assisted creative workflow로 확장했습니다.",
  },
] as const;

const problemBullets = [
  {
    title: "무엇을 여는가",
    body: "사용자가 먼저 live idea, demo, docs, GitHub, test link를 확인할 수 있어야 합니다.",
  },
  {
    title: "무엇을 보내는가",
    body: "support는 결제나 투자가 아니라, 사용자가 자신의 지갑에서 직접 보내는 wallet-to-wallet action입니다.",
  },
  {
    title: "지금 어떤 상태인가",
    body: "transaction은 pending, confirmed, verified처럼 단계별 상태를 명확히 보여줘야 합니다.",
  },
  {
    title: "다음에 무엇을 할 수 있는가",
    body: "support 이후 Good / Improve feedback으로 이어지고, 더 말하고 싶을 때만 optional proof로 확장됩니다.",
  },
] as const;

const productDecisionCards = [
  {
    label: "01",
    title: "Support is not payment",
    body:
      "support는 투자, 구매, 수익권이 아니라 creator address로 직접 전송되는 non-custodial wallet action으로 표현했습니다.",
  },
  {
    label: "02",
    title: "Feedback is not a long review",
    body:
      "초기 signal은 긴 리뷰보다 Good / Improve 선택이 더 빠르게 남습니다. 사용자는 한 번의 선택으로 제품에 대한 첫 신호를 남길 수 있습니다.",
  },
  {
    label: "03",
    title: "Public proof is optional",
    body:
      "X / Threads 공유는 core feedback과 분리했습니다. 외부 공유는 더 말하고 싶은 사용자를 위한 optional surface로만 둡니다.",
  },
  {
    label: "04",
    title: "Dashboard is state memory",
    body:
      "dashboard는 단순 통계 화면이 아니라 support, feedback, proof, review state를 다음 판단에 재사용하기 위한 상태 패널입니다.",
  },
] as const;

const coreFlowSteps = [
  {
    step: "01",
    label: "Open the idea",
    title: "무엇을 먼저 확인할 수 있는지 보여준다",
    body:
      "사용자는 먼저 live app, demo, docs, GitHub, test link를 확인합니다. AHEYABARAYA는 support 이전에 무엇을 열어볼 수 있는지 먼저 보여줍니다.",
    accent: "aqua" as const,
  },
  {
    step: "02",
    label: "Connect wallet",
    title: "support를 시작하기 위한 onboarding step",
    body:
      "지갑 연결은 별도 기술 절차가 아니라 support를 시작하기 위한 준비 단계로 정리했습니다. 연결 상태, 계정 상태, fallback을 분리해 막히는 지점을 줄였습니다.",
    accent: "orange" as const,
  },
  {
    step: "03",
    label: "Send support",
    title: "wallet-to-wallet direct support",
    body:
      "사용자가 자신의 지갑에서 creator address로 직접 support를 보냅니다. UI copy는 wallet-to-wallet, non-custodial, direct support 의미를 명확히 유지합니다.",
    accent: "indigo" as const,
  },
  {
    step: "04",
    label: "Track transaction state",
    title: "pending / confirmed / verified를 분리",
    body:
      "transaction 이후에는 pending, confirmed, verified 상태를 분리해 보여줍니다. 사용자는 전송됨, 확인 중, 참여 기록 반영됨을 단계별로 이해할 수 있습니다.",
    accent: "aqua" as const,
  },
  {
    step: "05",
    label: "Leave Good / Improve",
    title: "support 이후 짧은 feedback unlock",
    body:
      "support가 verified된 뒤 Good / Improve feedback이 열립니다. 긴 설명 없이도 유지할 점과 개선할 점을 빠르게 남길 수 있습니다.",
    accent: "orange" as const,
  },
  {
    step: "06",
    label: "Optional proof",
    title: "public proof는 선택 surface",
    body:
      "사용자가 더 말하고 싶다면 X / Threads에 public proof를 남길 수 있습니다. 이 단계는 core feedback과 분리된 선택 surface입니다.",
    accent: "indigo" as const,
  },
  {
    step: "07",
    label: "Reuse the signal",
    title: "support와 feedback을 다음 판단에 재사용",
    body:
      "creator는 support와 feedback을 dashboard에서 확인하고, 다음 업데이트, post, pitch, product decision에 재사용할 수 있습니다.",
    accent: "aqua" as const,
  },
] as const;

const uxTranslationRows = [
  {
    from: "Wallet connection",
    to: "Start support from your wallet",
    body: "지갑 연결을 기술 인증이 아니라 support를 시작하기 위한 준비 단계로 표현했습니다.",
  },
  {
    from: "Signature / acknowledgement",
    to: "You approve this action from your own wallet",
    body: "서명은 플랫폼이 대신 처리하는 것이 아니라 사용자가 직접 승인하는 행동임을 명확히 했습니다.",
  },
  {
    from: "Transaction pending",
    to: "Transaction submitted. Waiting for confirmation.",
    body: "사용자가 전송 이후 불안해하지 않도록 pending 상태를 별도 단계로 표시했습니다.",
  },
  {
    from: "On-chain verification",
    to: "Support confirmed. Feedback is now available.",
    body: "검증 완료 후 다음 행동이 바로 보이도록 feedback unlock과 연결했습니다.",
  },
  {
    from: "Creator address",
    to: "Your wallet sends directly to the creator address.",
    body: "수신 주소는 축약 표시, copy action, registry check 안내를 통해 신뢰 경계를 보완했습니다.",
  },
  {
    from: "Season XP",
    to: "Participation memory, not cash value.",
    body: "XP는 보상이나 수익이 아니라 참여 기록과 시즌 상태 레이어로 설명했습니다.",
  },
] as const;

const copyExamples = [
  { label: "Before support", copy: "Support this idea from your wallet." },
  { label: "Address check", copy: "Your wallet sends directly to the creator address." },
  { label: "Transaction submitted", copy: "Transaction submitted. Waiting for confirmation." },
  { label: "Confirmed", copy: "Support confirmed. You can now leave feedback." },
  { label: "Feedback", copy: "What signal would you leave? Good or Improve." },
  { label: "Optional share", copy: "Want to say more? Share your proof on X or Threads." },
  { label: "XP notice", copy: "Season XP records participation. It has no cash value." },
  { label: "Fallback", copy: "If sharing does not open automatically, copy the text and post manually." },
] as const;

const moodCards = [
  {
    title: "Supportive",
    body: "support는 결제 버튼처럼 보이기보다 아이디어에 작은 씨앗을 심는 행동처럼 느껴져야 합니다.",
  },
  {
    title: "Clear",
    body:
      "transaction, verification, feedback 상태는 과장된 그래픽보다 짧은 문장과 명확한 step state로 보여주는 것이 중요했습니다.",
  },
  {
    title: "Lightweight",
    body: "초기 사용자가 긴 리뷰를 쓰지 않아도 Good / Improve 선택으로 충분히 참여할 수 있게 설계했습니다.",
  },
  {
    title: "Reusable",
    body:
      "creator가 받은 signal은 단발성 반응이 아니라 다음 업데이트와 proof asset으로 재사용될 수 있어야 합니다.",
  },
] as const;

const workflowCards = [
  {
    title: "Product Structuring",
    body: "사용자 역할, support state, feedback unlock, dashboard state를 flow 단위로 정리했습니다.",
  },
  {
    title: "UI Copy Iteration",
    body: "Web3 기능을 사용자 행동 언어로 바꾸기 위해 copy를 짧고 상태 중심으로 재작성했습니다.",
  },
  {
    title: "Creative Direction",
    body: "AHEYABARAYA의 캐릭터, 무드, visual hook을 제품 메시지와 연결했습니다.",
  },
  {
    title: "Evidence Packaging",
    body:
      "decision trace, KPI boundary, SQL/Python report logic을 포트폴리오에서 검토 가능한 evidence로 묶었습니다.",
  },
] as const;

const evidenceCards = [
  {
    title: "Decision Trace",
    body: "이전 상태, 결정한 내용, 현재 상태, 남은 validation gap을 한 줄로 정리했습니다.",
  },
  {
    title: "KPI Boundary",
    body: "support, feedback, referral, backup, dashboard snapshot을 서로 다른 evidence type으로 분리했습니다.",
  },
  {
    title: "SQL / Python Report Logic",
    body:
      "흩어진 decision log와 KPI snapshot을 reviewable table과 report output으로 바꾸는 구조를 설계했습니다.",
  },
  {
    title: "Collaboration Output",
    body:
      "Notion, Google Sheets, Docs, Excel, Slack digest용 output을 각각 다른 검토 목적에 맞게 정리했습니다.",
  },
] as const;

const decisionPackets = [
  {
    title: "Support and feedback should not be merged.",
    decision:
      "Support는 verified state까지의 운영 상태로 보고, Feedback은 Good / Improve와 proof queue로 따로 봅니다.",
    kpi: ["support receipt state", "feedback completion", "proof review status"],
    next:
      "support 이후 feedback completion history가 쌓이면 제품 개선 우선순위 판단으로 확장할 수 있습니다.",
  },
  {
    title: "Public proof should stay optional.",
    decision: "X / Threads proof는 core feedback과 분리된 optional surface로 둡니다.",
    kpi: ["proof status", "review status", "share fallback state"],
    next: "실제 proof submission history가 생기면 어떤 메시지가 public proof로 이어지는지 분석할 수 있습니다.",
  },
  {
    title: "Referral is readiness, not performance.",
    decision:
      "ref code, UTM, campaign label은 현재 성과가 아니라 향후 attribution join key 준비도로만 설명합니다.",
    kpi: ["referral link ready", "bind ready", "campaign label bridge"],
    next: "visit, login, bind, support event가 붙은 뒤에만 attribution 분석이 가능합니다.",
  },
  {
    title: "Trust should be a separate layer.",
    decision:
      "Trust는 core support flow와 섞지 않고, 외부 작업 결과를 public-safe evaluation record로 남기는 별도 layer로 둡니다.",
    kpi: ["eligible target", "review completeness", "public-safe summary"],
    next: "공개 가능한 evaluation history가 쌓이면 agent quality comparison과 trust memory로 확장할 수 있습니다.",
  },
] as const;

const trustCards = [
  {
    title: "Resolve",
    body: "평가 가능한 대상인지 먼저 확인합니다. private route가 아니라 public-safe evaluation 범위만 사용합니다.",
  },
  {
    title: "Review",
    body: "Good / Improve / Risk 수준으로 판단을 제한하고, verdict, reason, risk flag, evidence link를 분리합니다.",
  },
  {
    title: "Publish Boundary",
    body:
      "내부 운영 로그와 공개 가능한 평가 기록을 분리합니다. public trust record는 외부 독자가 이해할 수 있는 요약과 evidence만 포함합니다.",
  },
] as const;

const gtmRules = [
  {
    title: "Use support, not investment.",
    body:
      "support는 수익권이나 투자 행위가 아니라 아이디어에 대한 wallet-based participation으로 설명합니다.",
  },
  {
    title: "Use feedback, not engagement farming.",
    body: "Good / Improve는 외부 좋아요, 리포스트, 조회수와 분리된 제품 신호입니다.",
  },
  {
    title: "Use optional proof, not required sharing.",
    body: "X / Threads 공유는 선택입니다. 참여 조건이나 보상 조건으로 연결하지 않습니다.",
  },
  {
    title: "Use Season XP as status, not money.",
    body: "Season XP는 cash value가 없는 participation memory입니다.",
  },
] as const;

const creativeSections = [
  {
    title: "AHEYABARAYA Visual Identity",
    body:
      "제품의 핵심 메시지인 support, signal, proof를 더 부드럽게 전달하기 위해 캐릭터와 visual mood를 함께 설계했습니다. 목표는 Web3 제품을 차갑고 기술적인 화면으로만 보이게 하는 것이 아니라, 작은 support가 아이디어의 다음 단계로 이어지는 느낌을 만드는 것이었습니다.",
  },
  {
    title: "Character and Worldbuilding",
    body:
      "AHEYABARAYA의 캐릭터는 단순 장식이 아니라 제품의 감정적 진입점을 만드는 장치로 사용했습니다. supporter가 아이디어를 발견하고, 작은 씨앗을 심고, Good / Improve signal을 남기는 흐름을 더 쉽게 상상할 수 있도록 visual narrative를 구성했습니다.",
  },
  {
    title: "X-native Hook",
    body:
      "빠른 피드 환경에서는 긴 제품 설명보다 한 문장 hook과 visual entry point가 먼저 작동합니다. AHEYABARAYA의 메시지를 problem hook → support flow → feedback / proof explanation 순서로 나누고, 각 포스트가 어떤 행동으로 이어져야 하는지 기준을 만들었습니다.",
  },
  {
    title: "Message Iteration",
    body:
      "초기 메시지는 기능 설명 중심이었지만, 이후에는 “building got faster, first signal is still hard”라는 문제 hook을 앞으로 당겼습니다. 제품을 크게 보이게 만드는 것보다 사용자가 왜 지금 이 흐름을 써야 하는지 먼저 이해하게 만드는 방향으로 copy를 조정했습니다.",
  },
  {
    title: "Visual Entry Point",
    body:
      "이미지와 short-form asset은 product activation metric으로 직접 해석하지 않았습니다. 어떤 visual mood와 hook이 사용자를 멈춰 보게 하는지, 그리고 제품 설명으로 넘어가기 전 어떤 감정적 진입점을 만드는지 확인하는 자료로 활용했습니다.",
  },
] as const;

const roleReadingCards = [
  {
    role: "For AI Vibe Coder",
    body: "wallet UX, transaction state, interaction flow, UI copy, visual mood, AI-assisted workflow를 봐주세요.",
  },
  {
    role: "For Product",
    body: "problem framing, user flow, support / feedback separation, dashboard state, PRD-style decision structure를 봐주세요.",
  },
  {
    role: "For Marketing",
    body:
      "GTM message translation, public-safe wording, X-native hook, creative experiment, channel signal interpretation을 봐주세요.",
  },
  {
    role: "For AI Service Planning",
    body:
      "feedback signal design, data collection boundary, dashboard state, policy wording, reusable evidence structure를 봐주세요.",
  },
] as const;

const capabilityCards = [
  {
    title: "UX Flow",
    body: "wallet, support, transaction, feedback, proof를 하나의 흐름으로 정리하는 능력",
  },
  {
    title: "UI Copy",
    body: "복잡한 Web3 개념을 짧고 안전한 사용자 언어로 바꾸는 능력",
  },
  {
    title: "Product Structuring",
    body: "support, feedback, proof, dashboard, trust layer를 분리해 설계하는 능력",
  },
  {
    title: "Evidence Design",
    body: "KPI와 decision trace를 성과 과장이 아니라 다음 검증 기준으로 정리하는 능력",
  },
  {
    title: "Creative Direction",
    body: "제품 메시지를 visual mood, character, X-native hook으로 확장하는 능력",
  },
] as const;

const creativeImages = [
  "/appendix/bluegarage/aheya/dog.webp",
  "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
  "/appendix/bluegarage/aheya/tiger-zodiac.webp",
] as const;

export default function AheyabarayaEvidencePage() {
  return (
    <main id="hero" className="cinema-shell integrated-shell">
      <section className="page-frame integrated-hero-frame">
        <header className="topbar integrated-topbar">
          <Link href="/" className="brand-lockup">
            <span className="brand-dot" />
            <span>minnns / selected work</span>
          </Link>
          <nav className="topnav integrated-nav">
            <a href="#work">Work</a>
            <a href="#hero">AHEYABARAYA</a>
            <a href="#ux-prototype">UX Prototype</a>
            <a href="#evidence">Evidence</a>
            <a href="#creative">Creative</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="integrated-hero-grid">
          <motion.section {...fadeUp} className="integrated-hero-copy">
            <p className="eyebrow text-aqua">AHEYABARAYA</p>
            <h1>AI-assisted Web3 UX Prototype</h1>
            <p>
              지갑 기반 support, transaction state, Good / Improve feedback을 사용자가 이해하기 쉬운
              interaction flow로 설계한 Web3 UX prototype입니다.
            </p>
            <p>
              Web3 기능을 복잡한 기술 설명이 아니라, 사용자가 무엇을 해야 하고 지금 어떤 상태인지 바로
              이해할 수 있는 화면 구조, UI copy, interaction flow로 바꾸는 데 집중했습니다.
            </p>
            <div className="integrated-output-list">
              {roleChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <div className="hero-ctas">
              <a href="#ux-prototype" className="cta-primary">
                Interaction Flow 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#evidence" className="cta-secondary">
                Evidence System 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#creative" className="cta-secondary">
                Creative Appendix 보기
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
              {heroProofs.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} id="work" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">What I built and structured</p>
            <h2>Web3 support와 feedback을 하나의 UX flow로 정리</h2>
          </div>
          <p>
            AHEYABARAYA는 초기 아이디어가 첫 support, 명확한 feedback, 재사용 가능한 proof를 얻도록
            돕는 Web3 support + feedback system입니다.
          </p>
        </div>
        <p className="integrated-section-lead">
          저는 이 프로젝트에서 지갑 연결, support transaction, feedback unlock, optional proof,
          dashboard state를 하나의 사용자 흐름으로 정리하고, 각 단계가 사용자에게 부담스럽지 않게 보이도록
          UX copy와 interaction structure를 설계했습니다.
        </p>
        <div className="integrated-output-summary-grid">
          {summaryCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <BarChart3 className="h-5 w-5" />
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="problem" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Problem</p>
            <h2>Web3 products often make users think too much before they act.</h2>
          </div>
          <p>
            지갑 연결, 서명, 트랜잭션, 가스비, confirmation, verification 같은 단계는 Web3 제품에서는
            필수적이지만, 일반 사용자에게는 어렵고 불안하게 느껴질 수 있습니다.
          </p>
        </div>
        <p className="integrated-section-lead">
          AHEYABARAYA의 문제는 단순히 support 기능을 만드는 것이 아니었습니다. 핵심은 사용자가 무엇을
          열고, 무엇을 보내고, 지금 어떤 상태이며, 다음에 무엇을 할 수 있는지 쉽게 이해하게 만드는 것이었습니다.
        </p>
        <div className="integrated-claim-grid">
          {problemBullets.map((item) => (
            <article key={item.title} className="integrated-claim-card">
              <ShieldCheck className="h-5 w-5" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="product-decision" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Product Decision</p>
            <h2>Make Web3 actions feel like a simple product flow.</h2>
          </div>
          <p>
            AHEYABARAYA를 generic crowdfunding product로 보여주기보다, 사용자가 실제로 열어보고,
            support하고, feedback을 남기는 first-signal loop로 정리했습니다.
          </p>
        </div>
        <p className="integrated-section-lead">
          핵심 판단은 Web3 기능을 많이 보여주는 것이 아니라, 사용자가 해야 할 행동을 적게 느끼게 만드는 것이었습니다.
        </p>
        <div className="integrated-output-summary-grid">
          {productDecisionCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <GitBranch className="h-5 w-5" />
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="ux-prototype" className="page-frame crossangle-workflow-panel aheyabaraya-workflow-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-aqua">Core Interaction Flow</p>
          <h2>From live idea to reusable proof</h2>
          <p>
            AHEYABARAYA의 핵심 UX는 사용자가 많은 설명을 읽지 않아도 현재 단계와 다음 행동을 이해할 수 있도록
            설계했습니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {coreFlowSteps.map((item) => (
            <article key={item.step} className="crossangle-workflow-card" data-accent={item.accent}>
              <div className="crossangle-workflow-topline">
                <span>{item.step}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <p className="integrated-card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="ux-translation" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Web3 UX Translation</p>
            <h2>Turning wallet complexity into user-readable states</h2>
          </div>
          <p>
            가장 중요한 UX 과제는 Web3 요소를 숨기는 것이 아니라, 사용자가 이해할 수 있는 행동과 상태로
            바꾸는 것이었습니다.
          </p>
        </div>
        <div className="integrated-decision-packet-grid">
          {uxTranslationRows.map((item) => (
            <article key={item.from} className="integrated-decision-packet-card">
              <div className="integrated-preview-card-head">
                <FileText className="h-5 w-5" />
                <div>
                  <span>{item.from}</span>
                  <h3>{item.to}</h3>
                </div>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="copy-system" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">UI Copy System</p>
            <h2>Short, state-based, non-financial</h2>
          </div>
          <p>
            AHEYABARAYA의 UI copy는 Web3 전문어를 줄이고, 사용자가 지금 해야 할 행동과 현재 상태를 이해하는 데
            집중했습니다.
          </p>
        </div>
        <div className="integrated-data-flow-map">
          {copyExamples.map((item) => (
            <article key={item.label} className="integrated-data-flow-step">
              <div className="integrated-data-flow-step-head">
                <Sparkles className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
              <h3>{item.copy}</h3>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="visual-mood" className="page-frame integrated-section integrated-creative-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Visual Mood & Interaction Direction</p>
            <h2>Make the product feel supportive, not financial.</h2>
          </div>
          <p>
            AHEYABARAYA의 시각 방향은 Web3 금융 제품처럼 차갑게 보이는 것이 아니라, 작은 support와
            feedback이 아이디어의 다음 단계로 이어지는 느낌을 만드는 데 집중했습니다.
          </p>
        </div>
        <div className="integrated-creative-grid">
          <div className="integrated-output-summary-grid">
            {moodCards.map((item) => (
              <article key={item.title} className="integrated-output-summary-card">
                <Sparkles className="h-5 w-5" />
                <span>mood</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="integrated-creative-media-grid">
            {creativeImages.map((src) => (
              <div key={src} className="integrated-creative-media">
                <Image
                  src={src}
                  alt="AHEYABARAYA visual mood asset."
                  fill
                  sizes="(max-width: 1100px) 33vw, 14vw"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="workflow" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Implementation / AI-assisted Workflow</p>
            <h2>Fast prototype thinking with product constraints</h2>
          </div>
          <p>
            단순히 화면을 예쁘게 구성하는 것보다, 제품 흐름, 정책 경계, 상태 설계, copy, visual mood를 함께
            정리하는 데 집중했습니다.
          </p>
        </div>
        <p className="integrated-section-lead">
          AI tools were used as workflow accelerators: 아이디어 정리, UI copy iteration, visual direction,
          report structuring, prototype content packaging을 빠르게 반복했습니다.
        </p>
        <div className="integrated-output-summary-grid">
          {workflowCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <BarChart3 className="h-5 w-5" />
              <span>workflow</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="evidence" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Evidence System</p>
            <h2>From product decisions to reviewable evidence</h2>
          </div>
          <p>
            AHEYABARAYA는 단순한 아이디어 소개가 아니라, 초기 제품에서 어떤 판단을 왜 내렸고 다음 검증에 어떤
            데이터가 필요한지 남기는 evidence case로도 정리했습니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {evidenceCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <BarChart3 className="h-5 w-5" />
              <span>evidence</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="integrated-evidence-visual-grid integrated-evidence-visual-grid-spaced">
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

      <motion.section {...fadeUp} id="decision-packets" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Decision Packet Preview</p>
            <h2>product decision → KPI / guardrail → next data</h2>
          </div>
          <p>대표 판단을 product decision, KPI / guardrail, next data 순서로 정리했습니다.</p>
        </div>
        <div className="integrated-decision-packet-grid">
          {decisionPackets.map((item) => (
            <article key={item.title} className="integrated-decision-packet-card">
              <div className="integrated-preview-card-head">
                <GitBranch className="h-5 w-5" />
                <div>
                  <span>Decision packet</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <dl>
                <div><dt>Decision</dt><dd>{item.decision}</dd></div>
                <div>
                  <dt>KPI / Guardrail</dt>
                  <dd>{item.kpi.join(" / ")}</dd>
                </div>
                <div><dt>Next Data</dt><dd>{item.next}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="trust-layer" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Advanced Layer</p>
            <h2>Trust Evaluation Layer</h2>
          </div>
          <p>
            AHEYABARAYA의 Trust layer는 core support flow와 분리했습니다. creator apply, support, feedback과
            섞지 않고, 외부 작업 결과나 agent output을 평가 가능한 기록으로 바꾸는 별도 layer로 설계했습니다.
          </p>
        </div>
        <div className="integrated-claim-grid">
          {trustCards.map((item) => (
            <article key={item.title} className="integrated-claim-card">
              <ShieldCheck className="h-5 w-5" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="research" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">GTM Translation</p>
            <h2>From technical product logic to public-safe messaging</h2>
          </div>
          <p>
            Web3 제품은 기능보다 먼저 오해를 줄이는 메시지 구조가 필요했습니다. support, feedback, proof,
            XP를 각각 다른 의미로 정리해 사용자가 제품을 투자나 reward farming으로 읽지 않도록 조정했습니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {gtmRules.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <Megaphone className="h-5 w-5" />
              <span>GTM rule</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="creative" className="page-frame integrated-section integrated-creative-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Creative Appendix</p>
            <h2>AI-assisted creative and channel experiments</h2>
          </div>
          <p>
            제품 흐름을 외부 채널에서 더 쉽게 이해시키기 위해 캐릭터, visual mood, short-form hook,
            X-native copy, 이미지/영상 asset을 함께 실험했습니다.
          </p>
        </div>
        <p className="integrated-section-lead">
          이 섹션은 제품의 핵심 기능을 설명하기보다, 사용자가 처음 멈춰 보고 분위기를 이해하고 다음 행동으로
          이동할 수 있는 visual entry point를 만드는 데 초점을 둡니다.
        </p>
        <div className="integrated-creative-grid">
          <div className="integrated-creative-copy">
            <div className="integrated-creative-signal-list">
              {creativeSections.map((item) => (
                <article key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.body}</p>
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
                  alt="AHEYABARAYA creative appendix asset."
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
            <p className="eyebrow text-aqua">Collaboration Output</p>
            <h2>Evidence를 협업툴별 검토 단위로 정리</h2>
          </div>
          <p>
            Notion, Google Sheets, Docs, Excel, Slack digest용 output은 실제 성과 주장이 아니라, 같은 판단
            자료를 각 도구의 검토 방식에 맞춰 재구성하는 예시입니다.
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
      </motion.section>

      <motion.section {...fadeUp} id="roles" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">How to read this case</p>
            <h2>이 케이스는 사업 성과가 아니라 구조화 역량을 보여준다</h2>
          </div>
          <p>
            초기 Web3 제품에서 문제정의, 사용자 흐름, interaction design, UI copy, KPI boundary, GTM message를
            어떻게 하나의 검토 가능한 포트폴리오 case로 구조화했는지 보여주는 자료입니다.
          </p>
        </div>
        <div className="integrated-role-grid">
          {roleReadingCards.map((item) => (
            <article key={item.role} className="integrated-role-card">
              <div className="integrated-role-card-top">
                <ShieldCheck className="h-5 w-5" />
                <strong>{item.role}</strong>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="contact" className="page-frame integrated-section integrated-boundary-section">
        <Sparkles className="h-5 w-5" />
        <div>
          <p className="eyebrow text-orange">What this case proves</p>
          <h2>복잡한 Web3 제품 구조를 사용자 중심 UX flow로 바꾸는 능력</h2>
          <p>
            AHEYABARAYA를 통해 복잡한 Web3 제품 구조를 사용자가 이해할 수 있는 UX flow와 UI copy로 바꾸고,
            그 뒤의 제품 판단을 KPI / evidence / creative output으로 정리했습니다.
          </p>
          <p>
            핵심은 단순히 아이디어를 설명하는 것이 아니라, 사용자가 어떤 행동을 해야 하는지, 제품은 어떤 상태를
            보여줘야 하는지, 다음 검증에는 어떤 데이터가 필요한지를 구조화하는 것이었습니다.
          </p>
          <div className="integrated-collab-grid">
            {capabilityCards.map((item) => (
              <article key={item.title} className="integrated-collab-card">
                <span>{item.title}</span>
                <h3>{item.body}</h3>
              </article>
            ))}
          </div>
          <div className="integrated-boundary-links">
            <Link href="/creative/work/aheya" className="inline-link">Creative appendix <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/pm" className="inline-link">PM front door <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/crossangle" className="inline-link">Web3 front door <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <Sparkles className="h-5 w-5 integrated-boundary-spark" />
      </motion.section>
    </main>
  );
}
