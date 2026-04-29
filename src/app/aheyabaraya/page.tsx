"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  FileText,
  GitBranch,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  collaborationEvidenceVisuals,
  collaborationWorkflowRows,
  creativeAnalyticsImages,
  dataEvidenceVisuals,
  productEvidenceMedia,
  referenceDerivationRows,
  sqlPythonEvidencePreviews,
} from "@/data/aheyabaraya.evidence";

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.52, ease: "easeOut" as const },
};

const roleChips = [
  "Vibe Coding",
  "Next.js product surface",
  "Wallet / transaction flow",
  "Smart contract integration",
  "X marketing content",
  "Grok visual assets",
  "SQL / Python evidence",
] as const;

const heroProofs = [
  { label: "Planning", value: "GPT로 문제정의와 skeleton 설계" },
  { label: "Build", value: "Codex로 제품 흐름 구현" },
  { label: "Content", value: "Grok으로 X visual asset 제작" },
  { label: "Evidence", value: "SQL/Python으로 판단 근거 정리" },
] as const;

const recruiterScanCards = [
  {
    label: "01",
    title: "Vibe coding to product",
    body:
      "아이디어 문서에서 끝내지 않고, wallet support, transaction state, feedback, dashboard까지 실제 화면과 흐름으로 구현했습니다.",
  },
  {
    label: "02",
    title: "Web3 interaction surface",
    body:
      "지갑 연결, 서명, 온체인 확인, EVM/Solana 기록, support verification을 사용자가 읽을 수 있는 상태로 나눴습니다.",
  },
  {
    label: "03",
    title: "Marketing content loop",
    body:
      "X 채널에서 문제 훅, visual entry point, 캐릭터 자산을 반복하며 메시지와 콘텐츠 반응을 분리해 읽었습니다.",
  },
  {
    label: "04",
    title: "Evidence discipline",
    body:
      "KPI, referral readiness, decision trace를 성과 주장으로 쓰지 않고 다음 판단을 위한 검토 가능한 evidence로 정리했습니다.",
  },
] as const;

const problemCards = [
  {
    title: "AI makes building faster",
    body:
      "GPT와 Codex로 제품 skeleton과 구현 속도는 빨라졌지만, 만든 제품이 첫 사용 이유와 첫 반응을 얻는 문제는 그대로 남았습니다.",
  },
  {
    title: "First signal is still hard",
    body:
      "초기 Web3 프로젝트는 큰 커뮤니티보다 먼저 작은 support, 짧은 feedback, 재사용 가능한 proof가 필요하다고 봤습니다.",
  },
  {
    title: "Wallet actions need readable states",
    body:
      "사용자에게 지갑 연결, 서명, 트랜잭션, verified 상태는 기술 단계가 아니라 다음 행동을 알려주는 제품 상태여야 했습니다.",
  },
  {
    title: "Content must explain before it sells",
    body:
      "X 콘텐츠는 유입 성과를 증명하기보다, 낯선 제품을 멈춰 보게 만들고 어떤 문제를 다루는지 먼저 읽히게 해야 했습니다.",
  },
] as const;

const toolchainCards = [
  {
    tool: "GPT",
    title: "기획과 skeleton",
    body:
      "문제정의, user flow, UI copy 초안, evidence 구조를 빠르게 잡고 제품 판단의 출발점을 만들었습니다.",
  },
  {
    tool: "Codex",
    title: "구현과 정리",
    body:
      "Next.js 화면, support flow, verification 상태, report output, 포트폴리오 evidence page까지 구현과 정리를 맡겼습니다.",
  },
  {
    tool: "Grok",
    title: "X 콘텐츠 자산",
    body:
      "캐릭터 이미지, visual mood, short-form hook에 쓸 자산을 만들고 X에서 읽히는 visual entry point로 테스트했습니다.",
  },
  {
    tool: "SQL / Python",
    title: "검토 가능한 evidence",
    body:
      "decision log, KPI snapshot, referral readiness를 CSV/brief/협업툴 output으로 바꿔 판단 근거를 검토 가능하게 만들었습니다.",
  },
] as const;

const productSurfaceCards = [
  {
    label: "Creator",
    title: "Creator apply / project profile",
    body:
      "창작자·빌더가 아이디어, demo, docs, GitHub, test link를 보여줄 수 있는 project profile surface를 준비했습니다.",
    kpi: ["apply state", "profile completeness", "review queue"],
  },
  {
    label: "Launch",
    title: "Idea / project launch surface",
    body:
      "사용자가 support 전에 무엇을 열어볼 수 있는지 먼저 보도록 live idea, update note, evidence link 구조를 정리했습니다.",
    kpi: ["project readiness", "live link", "evidence link"],
  },
  {
    label: "Support",
    title: "Wallet-to-wallet support",
    body:
      "support는 결제나 투자로 보이지 않게, 사용자 지갑에서 creator address로 직접 보내는 non-custodial action으로 표현했습니다.",
    kpi: ["support receipt", "transaction state", "verification state"],
  },
  {
    label: "Feedback",
    title: "Good / Improve signal",
    body:
      "긴 리뷰 대신 Good / Improve와 짧은 note로 첫 신호를 남기고, public proof는 별도 선택 surface로 분리했습니다.",
    kpi: ["feedback completion", "proof status", "review status"],
  },
  {
    label: "Dashboard",
    title: "State memory for next decision",
    body:
      "creator가 support, feedback, proof, review state를 다시 확인하고 다음 업데이트 판단에 재사용할 수 있는 dashboard로 정리했습니다.",
    kpi: ["admin queue", "dashboard refresh", "next action"],
  },
  {
    label: "Referral",
    title: "Measurement readiness",
    body:
      "ref code와 UTM campaign label은 성과 계산이 아니라 향후 attribution event가 들어왔을 때 join할 수 있는 준비도로만 다뤘습니다.",
    kpi: ["ref link", "bind state", "campaign label"],
  },
] as const;

const buildProofCards = [
  {
    title: "EVM funding registry",
    body:
      "idea registration, creator/operator approval, funding record event를 다루는 EVM contract surface를 구현했습니다.",
    proof: "AheyaEvmFundingRegistryRecord.sol",
  },
  {
    title: "Solana funding program",
    body:
      "register idea, native support, attested funding record 흐름을 Anchor program으로 구성했습니다.",
    proof: "Solana funding program",
  },
  {
    title: "Support verification routes",
    body:
      "wallet action 이후 pending, confirmed, verified 상태를 UI와 admin/reporting evidence에서 분리해 읽을 수 있게 만들었습니다.",
    proof: "support / verify / dashboard routes",
  },
] as const;

const interactionSteps = [
  {
    step: "01",
    label: "Open project",
    title: "먼저 무엇을 열어볼 수 있는지 보여준다",
    body: "live app, demo, docs, GitHub, test link를 support 이전에 확인하도록 project surface를 정리했습니다.",
    accent: "aqua" as const,
  },
  {
    step: "02",
    label: "Connect wallet",
    title: "지갑 연결을 onboarding step으로 처리",
    body: "wallet connection은 기술 절차가 아니라 support를 시작하기 위한 준비 상태로 보이게 만들었습니다.",
    accent: "orange" as const,
  },
  {
    step: "03",
    label: "Send support",
    title: "direct support 의미를 유지",
    body: "사용자 지갑에서 creator address로 직접 보내는 wallet-to-wallet 흐름으로 copy와 상태를 분리했습니다.",
    accent: "indigo" as const,
  },
  {
    step: "04",
    label: "Verify state",
    title: "pending / confirmed / verified",
    body: "트랜잭션이 제출된 뒤 사용자가 기다려야 하는 상태와 다음 행동이 열리는 상태를 분리했습니다.",
    accent: "aqua" as const,
  },
  {
    step: "05",
    label: "Leave signal",
    title: "Good / Improve로 첫 피드백을 남긴다",
    body: "support 이후 긴 리뷰가 아니라 짧은 Good / Improve feedback을 남기는 흐름으로 낮은 진입 장벽을 만들었습니다.",
    accent: "orange" as const,
  },
  {
    step: "06",
    label: "Reuse proof",
    title: "공개 proof는 선택으로 분리",
    body: "X 공유는 필수 조건이 아니라 더 말하고 싶은 사용자가 선택하는 public proof surface로만 두었습니다.",
    accent: "indigo" as const,
  },
] as const;

const trustLayerCards = [
  {
    title: "Resolve target",
    body:
      "평가 가능한 공개 대상인지 먼저 확인하고, private route나 내부 운영 로그를 공개 평가와 섞지 않도록 분리했습니다.",
  },
  {
    title: "Review output",
    body:
      "외부 작업 결과를 good, improve, risk flag, reason, evidence link로 나누어 다음 판단에 재사용할 수 있게 했습니다.",
  },
  {
    title: "Public-safe record",
    body:
      "Trust layer는 support/feedback core flow와 분리하고, 공개 가능한 평가 요약과 근거만 남기는 레이어로 설계했습니다.",
  },
] as const;

const creativeSignalRows = [
  {
    label: "Channel",
    value: "X only",
    body: "TikTok/Instagram은 아직 테스트 중이라 제출본에서는 제외하고, X 포스트와 visual asset만 evidence로 사용했습니다.",
  },
  {
    label: "Before",
    value: "1.1K views / 8.2h watch / 16.5% completion",
    body: "초기에는 세계관 톤은 있었지만 감정, 훅, 캐릭터 개성이 약하게 읽히는 baseline으로 봤습니다.",
  },
  {
    label: "After",
    value: "2.1K views / 18.3h watch / 28.3% completion",
    body: "2주 단위 비교에서 visual hook과 message iteration 이후 completion 지표가 크게 개선된 신호로 읽었습니다.",
  },
  {
    label: "Boundary",
    value: "not product conversion proof",
    body: "이 수치는 제품 유입이나 전환 증거가 아니라 X에서 hook과 visual entry point를 조정한 근거입니다.",
  },
] as const;

const evidenceLogicCards = [
  {
    title: "What I can claim",
    body:
      "제품 flow, code surface, smart contract support record, X content iteration, KPI/reporting 설계를 만들었다고 말할 수 있습니다.",
  },
  {
    title: "What I should not claim",
    body:
      "실제 growth, activation, retention, paid efficiency, social-to-product causality는 데이터가 없으므로 주장하지 않습니다.",
  },
  {
    title: "What data is needed next",
    body:
      "visit, login, referral bind, support, feedback completion, proof submission event가 붙은 뒤에야 attribution 분석으로 넘어갑니다.",
  },
] as const;

const roleReadingCards = [
  {
    role: "For Vibe Coder",
    body:
      "GPT로 흐름을 잡고 Codex로 product surface를 구현한 방식, wallet/transaction/smart contract evidence, 빠른 product build-to-ship 능력을 봐주세요.",
  },
  {
    role: "For Marketing Content",
    body:
      "Web3 기능을 X-native hook, visual entry point, public-safe wording, message iteration으로 바꾼 과정을 봐주세요.",
  },
] as const;

const capabilityCards = [
  {
    title: "Tool-assisted build",
    body: "기획, 구현, 콘텐츠, evidence packaging을 각 도구의 장점에 맞게 연결",
  },
  {
    title: "Web3 product flow",
    body: "wallet support, transaction state, feedback, proof, dashboard를 하나의 흐름으로 정리",
  },
  {
    title: "Marketing content",
    body: "X에서 문제 훅, 캐릭터 자산, visual entry point를 조정하며 message signal 확인",
  },
  {
    title: "Evidence system",
    body: "KPI/SQL/Python output을 성과 과장이 아니라 다음 검증 기준으로 사용",
  },
] as const;

const creativeImages = [
  "/appendix/bluegarage/aheya/dog.webp",
  "/appendix/bluegarage/aheya/312330.webp",
  "/appendix/bluegarage/aheya/331418.webp",
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
            <a href="#problem">Problem</a>
            <a href="#build">Build</a>
            <a href="#marketing">Marketing</a>
            <a href="#evidence">Evidence</a>
            <a href="#roles">Fit</a>
          </nav>
        </header>

        <div className="integrated-hero-grid">
          <motion.section {...fadeUp} className="integrated-hero-copy">
            <p className="eyebrow text-aqua">GPT + Codex + Grok Web3 Build-to-Market Case</p>
            <h1>AHEYABARAYA</h1>
            <p>
              GPT로 제품 skeleton과 판단 기준을 잡고, Codex로 wallet support와 transaction flow를 구현하고,
              Grok으로 X용 visual/content asset을 만든 Web3 제품·콘텐츠 케이스입니다.
            </p>
            <p>
              핵심은 “AI로 빠르게 만들었다”가 아니라, 만든 제품을 어떤 문제에서 시작했고, 어떤 기능으로 좁혔고,
              어떤 콘텐츠와 evidence로 검토 가능하게 정리했는지 보여주는 것입니다.
            </p>
            <div className="integrated-output-list">
              {roleChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <div className="hero-ctas">
              <a href="#build" className="cta-primary">
                Build flow 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#marketing" className="cta-secondary">
                Marketing signal 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#evidence" className="cta-secondary">
                Evidence 보기
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

      <motion.section {...fadeUp} id="scan" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Recruiter scan</p>
            <h2>30초 안에 보여줘야 하는 것</h2>
          </div>
          <p>
            이 페이지는 PM 일반론보다 Vibe Coding과 Marketing Content 역할이 보는 증거에 맞췄습니다. 구현,
            Web3 flow, 콘텐츠 반복, evidence discipline을 한 흐름으로 읽게 만드는 것이 목표입니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {recruiterScanCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <ShieldCheck className="h-5 w-5" />
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
            <p className="eyebrow text-orange">Problem definition</p>
            <h2>Building got faster. First signal did not.</h2>
          </div>
          <p>
            AHEYABARAYA는 “Web3 기능을 많이 붙인 서비스”가 아니라, 빠르게 만들어진 초기 제품이 첫 support,
            짧은 feedback, 재사용 가능한 proof를 얻는 문제에서 시작했습니다.
          </p>
        </div>
        <div className="integrated-claim-grid">
          {problemCards.map((item) => (
            <article key={item.title} className="integrated-claim-card">
              <Sparkles className="h-5 w-5" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="research" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Research to judgment</p>
            <h2>레퍼런스에서 제품 판단으로</h2>
          </div>
          <p>
            리서치는 “많이 찾아봤다”가 아니라, 어떤 패턴을 보고 AHEYABARAYA의 기능·메시지·evidence 구조로
            바꾸었는지를 보여주는 용도로만 배치했습니다.
          </p>
        </div>
        <div className="integrated-reference-grid">
          {referenceDerivationRows.slice(0, 5).map((row) => (
            <article key={row.reference} className="integrated-reference-card">
              <span>{row.reference}</span>
              <h3>{row.pattern}</h3>
              <dl>
                <div>
                  <dt>Checked</dt>
                  <dd>{row.checked}</dd>
                </div>
                <div>
                  <dt>Product / GTM judgment</dt>
                  <dd>{row.implication}</dd>
                </div>
                <div>
                  <dt>AHEYABARAYA output</dt>
                  <dd>{row.output}</dd>
                </div>
                <div>
                  <dt>Boundary</dt>
                  <dd>{row.boundary}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="toolchain" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">AI toolchain</p>
            <h2>AI 도구별 역할 분리</h2>
          </div>
          <p>
            포트폴리오에서 중요한 부분은 사용한 도구 이름보다, 어떤 도구를 어떤 산출물에 배치했고 그 결과물이
            제품·콘텐츠·evidence 흐름에 어떻게 들어갔는지입니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {toolchainCards.map((item) => (
            <article key={item.tool} className="integrated-output-summary-card">
              <Code2 className="h-5 w-5" />
              <span>{item.tool}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="build" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Build proof</p>
            <h2>문서가 아니라 제품으로 구현</h2>
          </div>
          <p>
            핵심 flow는 기획 문서에 머물지 않고, 공개 가능한 제품 화면, creator/funder flow 영상, contract와
            verification 구조로 연결됩니다.
          </p>
        </div>
        <div className="integrated-product-media-grid">
          {productEvidenceMedia.map((item) => (
            <article key={item.src} className="integrated-product-media-card">
              <div className="integrated-product-media">
                {item.type === "video" ? (
                  <video src={item.src} controls muted playsInline preload="metadata" />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1100px) 100vw, 30vw"
                    style={{ objectFit: "contain" }}
                  />
                )}
              </div>
              <div>
                <span>{item.title}</span>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="integrated-output-summary-grid integrated-evidence-visual-grid-spaced">
          {buildProofCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <GitBranch className="h-5 w-5" />
              <span>{item.proof}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="product-surface" className="page-frame crossangle-workflow-panel aheyabaraya-workflow-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-orange">Product surface</p>
          <h2>Creator와 supporter 흐름을 함께 설계</h2>
          <p>
            Supporter 기능만 보여주면 제품이 반쪽으로 읽힙니다. 이 케이스에서는 creator apply, project launch,
            support, feedback, dashboard, referral readiness까지 같은 제품 표면으로 정리했습니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {productSurfaceCards.map((item, index) => (
            <article
              key={item.title}
              className="crossangle-workflow-card"
              data-accent={index % 3 === 0 ? "aqua" : index % 3 === 1 ? "orange" : "indigo"}
            >
              <div className="crossangle-workflow-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <p className="integrated-card-body">{item.body}</p>
              <div className="integrated-output-list">
                {item.kpi.map((kpi) => (
                  <span key={kpi}>{kpi}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="flow" className="page-frame crossangle-workflow-panel aheyabaraya-workflow-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-aqua">Interaction flow</p>
          <h2>Open project → support → feedback → proof</h2>
          <p>
            Vibe Coding 역할에서 봐야 할 핵심은 기술을 많이 나열한 것이 아니라, 사용자가 다음 상태를 이해하도록
            화면과 flow를 코드로 옮긴 방식입니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {interactionSteps.map((item) => (
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

      <motion.section {...fadeUp} id="trust-layer" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Separate advanced layer</p>
            <h2>Trust는 core support flow와 분리</h2>
          </div>
          <p>
            Trust layer는 support 기능에 끼워 넣지 않고, 외부 작업 결과를 public-safe evaluation record로 남기는
            별도 surface로 정리했습니다.
          </p>
        </div>
        <div className="integrated-claim-grid">
          {trustLayerCards.map((item) => (
            <article key={item.title} className="integrated-claim-card">
              <ShieldCheck className="h-5 w-5" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="marketing" className="page-frame integrated-section integrated-creative-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Marketing content</p>
            <h2>X-native hook으로 제품을 읽히게 만들기</h2>
          </div>
          <p>
            이 섹션은 제품 성과를 주장하기 위한 것이 아니라, 낯선 Web3 제품을 X에서 어떻게 설명하고 어떤 visual
            hook으로 멈춰 보게 만들었는지 보여주는 evidence입니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {creativeSignalRows.map((item) => (
            <article key={item.label} className="integrated-output-summary-card">
              <Megaphone className="h-5 w-5" />
              <span>{item.label}</span>
              <h3>{item.value}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="integrated-analytics-grid integrated-evidence-visual-grid-spaced">
          {creativeAnalyticsImages.map((item) => (
            <article key={item.src} className="integrated-analytics-card">
              <div className="integrated-analytics-media">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1100px) 100vw, 42vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span>{item.title}</span>
              <p>{item.caption}</p>
            </article>
          ))}
        </div>
        <div className="integrated-creative-media-grid integrated-evidence-visual-grid-spaced">
          {creativeImages.map((src) => (
            <div key={src} className="integrated-creative-media">
              <Image
                src={src}
                alt="AHEYABARAYA X creative visual asset."
                fill
                sizes="(max-width: 1100px) 33vw, 28vw"
                loading="eager"
              />
            </div>
          ))}
        </div>
        <div className="integrated-evidence-link-row">
          <Link href="/creative/work/aheya" className="inline-link">
            creative detail 보기
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="evidence" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">KPI / SQL / Python evidence</p>
            <h2>KPI를 판단 근거로 정리</h2>
          </div>
          <p>
            실제 유저 데이터가 부족한 상태에서 KPI를 “성과”처럼 말하지 않았습니다. 대신 어떤 판단을 했고,
            어떤 데이터가 있어야 다음 단계로 넘어갈 수 있는지 report output으로 분리했습니다.
          </p>
        </div>
        <div className="integrated-output-summary-grid">
          {evidenceLogicCards.map((item) => (
            <article key={item.title} className="integrated-output-summary-card">
              <BarChart3 className="h-5 w-5" />
              <span>interpretation rule</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="integrated-evidence-visual-grid integrated-evidence-visual-grid-spaced">
          {dataEvidenceVisuals.map((item) => (
            <article key={item.src} className="integrated-evidence-visual-card">
              <div className="integrated-evidence-visual-media">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1100px) 100vw, 42vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <span>{item.title}</span>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="reports" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Report preview</p>
            <h2>output이 답하는 질문</h2>
          </div>
          <p>
            채용 담당자가 CSV 파일을 직접 열어보지 않아도, 어떤 input을 어떤 판단 질문으로 바꿨는지 바로 읽히도록
            representative rows만 페이지에 렌더링했습니다.
          </p>
        </div>
        <div className="integrated-preview-grid">
          {sqlPythonEvidencePreviews.map((preview) => (
            <article key={preview.title} className="integrated-preview-card">
              <div className="integrated-preview-card-head">
                <FileText className="h-5 w-5" />
                <div>
                  <span>{preview.source}</span>
                  <h3>{preview.title}</h3>
                  <p>{preview.description}</p>
                </div>
              </div>
              <div className="integrated-table-wrap">
                <table className="integrated-preview-table">
                  <thead>
                    <tr>
                      {preview.columns.map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {preview.rows.slice(0, 2).map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell, index) => (
                          <td key={`${cell}-${index}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="collaboration" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Collaboration output</p>
            <h2>도구별 검토 단위로 변환</h2>
          </div>
          <p>
            Notion, Google Sheets, Google Docs, Excel/CSV, Slack digest는 실무 성과 주장이 아니라, 같은 판단
            자료를 협업툴별로 읽기 좋게 정리하는 구조를 보여주는 산출물입니다.
          </p>
        </div>
        <div className="integrated-collab-grid">
          {collaborationWorkflowRows.map((item) => (
            <article key={item.tool} className="integrated-collab-card">
              <span>{item.tool}</span>
              <h3>{item.object}</h3>
              <dl>
                <div>
                  <dt>Purpose</dt>
                  <dd>{item.purpose}</dd>
                </div>
                <div>
                  <dt>Output</dt>
                  <dd>{item.output}</dd>
                </div>
                <div>
                  <dt>Boundary</dt>
                  <dd>{item.boundary}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="integrated-collab-proof-grid integrated-evidence-visual-grid-spaced">
          {collaborationEvidenceVisuals.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="integrated-collab-proof-card">
              <div className="integrated-collab-proof-media">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1100px) 100vw, 42vw"
                  style={{ objectFit: "contain" }}
                />
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
            <h2>두 역할에 맞춰 읽기</h2>
          </div>
          <p>
            이 케이스는 사업 성과를 크게 보이게 만드는 자료가 아닙니다. 초기 Web3 제품을 빠르게 만들고, 콘텐츠로
            설명하고, evidence로 검토 가능하게 만든 과정을 보여주는 제출본입니다.
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
          <h2>GPT/Codex/Grok build와 Web3 marketing content를 한 제품 케이스로 묶는 능력</h2>
          <p>
            AHEYABARAYA를 통해 문제정의, 공식 문서 기반 리서치, 제품 구현, X 콘텐츠 반복, KPI/SQL/Python evidence,
            협업툴 output을 하나의 검토 가능한 포트폴리오 흐름으로 정리했습니다.
          </p>
          <p>
            다만 실제 제품 growth나 acquisition 성과는 주장하지 않습니다. 이 페이지가 보여주는 것은 빠른 제품 구현,
            Web3 flow 설계, 콘텐츠 메시지 전환, 그리고 과장하지 않는 evidence 관리입니다.
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
            <a href="https://aheyabaraya.xyz" target="_blank" rel="noreferrer" className="inline-link">
              Live product
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/creative/work/aheya" className="inline-link">
              Creative detail
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="https://x.com/minnns_aheya" target="_blank" rel="noreferrer" className="inline-link">
              X channel
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <Sparkles className="h-5 w-5 integrated-boundary-spark" />
      </motion.section>
    </main>
  );
}
