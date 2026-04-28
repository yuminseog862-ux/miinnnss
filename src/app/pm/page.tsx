"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BarChart3, FileSpreadsheet, GitBranch, ShieldCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.52, ease: "easeOut" as const },
};

const quickRead = [
  {
    label: "01 · Problem",
    title: "초기 제품의 병목은 출시가 아니라 첫 피드백이었다",
    body: "제품 공개 이후에도 첫 사용자 반응과 다음 액션으로 이어지는 피드백이 늦게 쌓이는 문제를 발견했습니다.",
    accent: "aqua",
  },
  {
    label: "02 · Decision",
    title: "퀘스트형 유입보다 가벼운 피드백 루프를 우선했다",
    body: "작은 support, Good/Improve 피드백, 필요한 경우의 공개 증거 연결로 제품 루프를 단순화했습니다.",
    accent: "orange",
  },
  {
    label: "03 · Evidence",
    title: "측정 가능한 것과 추가 검증이 필요한 것을 분리했다",
    body: "운영 지표, 의사결정 로그, referral 준비 상태를 정리해 현재 판단에 쓸 수 있는 신호를 구분했습니다.",
    accent: "indigo",
  },
] as const;

const researchRows = [
  {
    source: "Market / builder research",
    question: "초기 제품을 어떤 사용자 문제로 설명해야 하는가",
    judgment: "추상적인 서비스 설명보다 launch 이후 첫 신호가 늦게 쌓이는 문제를 먼저 다뤄야 했다.",
    applied: "support, Good/Improve, optional proof 흐름으로 제품 설명을 제한했다.",
  },
  {
    source: "GTM reference research",
    question: "airdrop / quest / token 행동을 그대로 제품화해도 되는가",
    judgment: "반복되는 wallet task는 입력 신호일 뿐, 보상형 참여와 제품 가치를 분리해야 했다.",
    applied: "문제, 가치, voluntary proof 중심의 first-signal loop로 좁혔다.",
  },
  {
    source: "Agent workflow research",
    question: "AI/agent 결과물이 왜 다음 행동으로 이어지지 않는가",
    judgment: "scattered output을 readable state, next action, handoff로 바꾸는 layer가 중요했다.",
    applied: "기능 변경을 decision log, handoff, KPI snapshot으로 남기는 구조를 강화했다.",
  },
  {
    source: "KPI operating docs",
    question: "초기 단계의 KPI를 어떤 의사결정에 연결할 수 있는가",
    judgment: "KPI는 운영 병목, cutover readiness, follow-up routing을 보는 guardrail로 사용해야 했다.",
    applied: "KPI snapshot, admin work, DB backup, Vercel slot, referral readiness를 decision evidence model로 묶었다.",
  },
] as const;

const timeline = [
  {
    date: "2026.02",
    title: "Public proof와 Good/Improve core 분리",
    why: "피드백 증거가 core feedback과 섞이면 제품의 첫 신호가 흐려졌다.",
    kpi: "feedback_proof_pending",
    changed: "X/Threads proof는 optional proof로 두고, Good/Improve는 core product signal로 남겼다.",
  },
  {
    date: "2026.03",
    title: "Wallet onboarding과 Trust boundary 정리",
    why: "wallet-adjacent users가 들어오는 진입과 public/private trust contract가 동시에 불명확했다.",
    kpi: "trust_signal_queued / connector_error_count",
    changed: "Google login, embedded wallet, public Trust boundary, internal route separation을 정리했다.",
  },
  {
    date: "2026.03-04",
    title: "KPI export와 DB backup 목적 분리",
    why: "backup을 monitoring처럼 설명하면 데이터 근거가 과장될 수 있었다.",
    kpi: "kpi_snapshot_available",
    changed: "KPI export는 운영 baseline, DB backup은 recovery / reproducibility evidence로 분리했다.",
  },
  {
    date: "2026.04",
    title: "Support verification과 release gate 강화",
    why: "local success만으로 public-domain stability와 support recovery를 설명하기 어려웠다.",
    kpi: "pending_funding / feedback_proof_pending",
    changed: "manual fallback, direct-send support semantics, real-domain verification gate를 decision trace로 남겼다.",
  },
  {
    date: "2026.04",
    title: "Referral / UTM은 성과가 아니라 measurement readiness로 제한",
    why: "referral link가 있어도 visit, signup, activation event chain이 없으면 attribution 성과가 아니다.",
    kpi: "referral_link_ready / referral_bind_ready / product_attribution_blocked",
    changed: "referral code/link/bind와 UTM/ref bridge를 future campaign label contract로 모델링했다.",
  },
] as const;

const metricRows = [
  ["KPI snapshot", "운영 baseline과 severity/follow-up", "어떤 queue나 risk를 먼저 볼지", "growth trend와 분리"],
  ["admin work", "creator review, feedback proof, trust signal", "운영 bottleneck과 follow-up routing", "market demand와 분리"],
  ["DB backup", "backup/export and reproducibility", "복구와 재현 가능성", "traction evidence와 분리"],
  ["Vercel slot", "deployment/log import contract", "runtime observability 준비", "live traffic 분석과 분리"],
  ["referral readiness", "code, link, cookie, bind path", "future join key와 campaign label bridge", "acquisition performance와 분리"],
  ["proxy/scenario", "claim boundary and required next data", "추가 검증이 필요한 범위", "statistical estimate와 분리"],
] as const;

const outputs = [
  "actual_decision_trace_report.csv",
  "kpi_measurement_design_report.csv",
  "referral_measurement_readiness.csv",
  "attribution_claim_boundary_report.csv",
  "decision_packet_report.csv",
  "aheyabaraya_decision_trace_workspace.xlsx",
] as const;

const heroEvidence = [
  { label: "Role fit", value: "Early Product / Product Ops", body: "문제정의, 우선순위, 운영 기준을 설명하는 케이스" },
  { label: "Evidence", value: "Decision log + KPI model", body: "기능 변경과 측정 기준을 함께 추적" },
  { label: "Tools", value: "SQL / Python / Sheets", body: "raw records를 검토 가능한 report로 변환" },
  { label: "Boundary", value: "No traction overclaim", body: "성과 지표와 준비도 지표를 분리" },
] as const;

const pmCheck = [
  { label: "보여주는 역량", body: "문제 정의, 제약 조건, tradeoff, decision trace, KPI guardrail, 다음 데이터 요구조건을 구조화했다." },
  { label: "검증 범위", body: "이 케이스는 대규모 성장 성과보다 초기 제품의 운영 설계와 판단 기준 수립 역량을 보여준다." },
  { label: "다음 보강 자료", body: "실제 decision log excerpt, instrumentation plan, 사용자 테스트 기록이 추가되면 PM case로 더 선명해진다." },
] as const;

export default function PMPortfolioPage() {
  return (
    <main className="cinema-shell pm-shell">
      <section className="page-frame pm-hero-frame">
        <header className="topbar pm-topbar">
          <Link href="/" className="brand-lockup">
            <span className="brand-dot" />
            <span>minnns / PM evidence portfolio</span>
          </Link>
          <nav className="topnav pm-topnav">
            <a href="#research">Research</a>
            <a href="#timeline">Decision</a>
            <a href="#metrics">Metrics</a>
            <a href="#check">PM Fit</a>
          </nav>
        </header>

        <div className="pm-hero-grid">
          <motion.section {...fadeUp} className="pm-hero-copy">
            <p className="eyebrow text-aqua">AHEYABARAYA PM Case Study</p>
            <h1 className="pm-hero-title">초기 제품의 신호를 PM 판단 체계로 정리한 케이스</h1>
            <p className="pm-hero-summary">
              AHEYABARAYA의 리서치, 의사결정 로그, KPI 스냅샷을 바탕으로 문제 정의, 기능 우선순위,
              측정 기준, 검증 한계를 하나의 제품 판단 흐름으로 정리했습니다.
            </p>
            <div className="pm-hero-tags" aria-label="case focus">
              <span>Problem framing</span>
              <span>Decision trace</span>
              <span>SQL / Python evidence</span>
              <span>Collaboration output</span>
            </div>
            <div className="hero-ctas">
              <a href="#timeline" className="cta-primary">
                결정 흐름 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <Link href="/aheyabaraya" className="cta-secondary">
                상세 evidence 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
            className="pm-hero-visual"
          >
            <div className="pm-hero-media">
              <Image
                src="/aheyabaraya/evidence/sql-python-proof.png"
                alt="AHEYABARAYA SQL and Python evidence preview."
                fill
                sizes="(max-width: 1100px) 100vw, 44vw"
                className="pm-hero-image"
                priority
              />
            </div>
            <div className="pm-hero-stat-grid">
              {heroEvidence.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} className="page-frame pm-section">
        <div className="pm-section-head">
          <p className="eyebrow text-orange">Quick Read</p>
          <h2>이 케이스의 PM 논리</h2>
          <p>채용자가 빠르게 볼 수 있도록 문제, 판단, 근거, 검증 범위를 먼저 읽히게 구성했습니다.</p>
        </div>
        <div className="pm-card-grid pm-card-grid-three">
          {quickRead.map((item) => (
            <article key={item.label} className="pm-card" data-accent={item.accent}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="research" className="page-frame pm-section">
        <div className="pm-section-head">
          <p className="eyebrow text-aqua">Research To Problem</p>
          <h2>리서치에서 제품 문제를 도출한 과정</h2>
          <p>시장/사용자 리서치와 내부 KPI 문서를 연결해, AHEYABARAYA가 풀어야 할 초기 사용자 신호 문제를 정의했습니다.</p>
        </div>
        <div className="pm-research-table">
          <div className="pm-table-header pm-research-header" aria-hidden="true">
            <span>Source</span>
            <span>Question</span>
            <span>Judgment</span>
            <span>Applied to product</span>
          </div>
          {researchRows.map((row) => (
            <article key={row.source} className="pm-research-row">
              <div>
                <span>Source</span>
                <strong>{row.source}</strong>
              </div>
              <p><span className="pm-cell-label">Question</span>{row.question}</p>
              <p><span className="pm-cell-label">Judgment</span>{row.judgment}</p>
              <p><span className="pm-cell-label">Applied</span>{row.applied}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="timeline" className="page-frame pm-section">
        <div className="pm-section-head pm-section-head-row">
          <div>
            <p className="eyebrow text-indigo">Decision Timeline</p>
            <h2>기능 변경마다 판단 근거와 검증 과제를 남겼다</h2>
          </div>
          <p>각 변경을 이전 상태, 결정 이유, 변경 후 상태, 남은 KPI/검증 과제로 나누어 추적했습니다.</p>
        </div>
        <div className="pm-timeline">
          <div className="pm-table-header pm-timeline-header" aria-hidden="true">
            <span>Date</span>
            <span>Decision</span>
            <span>Why it changed</span>
            <span>KPI / guardrail</span>
          </div>
          {timeline.map((item) => (
            <article key={`${item.date}-${item.title}`} className="pm-timeline-card">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.why}</p>
              <dl>
                <div><dt>KPI / guardrail</dt><dd>{item.kpi}</dd></div>
                <div><dt>Changed</dt><dd>{item.changed}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="metrics" className="page-frame pm-section">
        <div className="pm-section-head">
          <p className="eyebrow text-aqua">KPI / Proxy / Referral Model</p>
          <h2>KPI를 성과 주장보다 운영 판단에 사용했다</h2>
          <p>KPI를 성장 성과로 포장하지 않고, 우선순위 판단과 다음 검증에 필요한 데이터 요구사항을 정하는 기준으로 사용했습니다.</p>
        </div>
        <div className="pm-metric-grid">
          {metricRows.map(([name, signal, decision, boundary], index) => (
            <article key={name} className={`pm-metric-card ${index < 2 ? "pm-metric-card-featured" : ""}`}>
              <BarChart3 className="h-5 w-5" />
              <h3>{name}</h3>
              <dl>
                <div><dt>Signal</dt><dd>{signal}</dd></div>
                <div><dt>Decision</dt><dd>{decision}</dd></div>
                <div><dt>Boundary</dt><dd>{boundary}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame pm-section pm-model-section">
        <div className="pm-model-copy">
          <p className="eyebrow text-orange">SQL / Python Evidence Pipeline</p>
          <h2>흩어진 운영 기록을 의사결정 자료로 정리한 구조</h2>
          <p>
            의사결정 로그, 핸드오프, 변경 기록, KPI 스냅샷, referral 설계를 SQL/Python 리포트로 정리해
            협업툴에서 바로 확인할 수 있는 판단 자료로 만들었습니다.
          </p>
          <div className="pm-output-list">
            {outputs.map((item) => (
              <span key={item}><FileSpreadsheet className="h-4 w-4" />{item}</span>
            ))}
          </div>
        </div>
        <div className="pm-flow-card">
          <GitBranch className="h-5 w-5 text-aqua" />
          <pre>{`research / BP / decision log
+ KPI snapshot / admin work
+ referral code-link-bind
+ proxy scenario rules
    -> SQL staging
    -> measurement design report
    -> decision trace report
    -> Python report
    -> Notion / Sheets / Excel / Slack-ready outputs`}</pre>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="check" className="page-frame pm-section">
        <div className="pm-section-head">
          <p className="eyebrow text-indigo">PM Portfolio Check</p>
          <h2>이 케이스가 보여주는 PM 역량</h2>
          <p>대규모 성장 성과보다 초기 제품의 문제 정의, 운영 설계, 측정 기준 수립, 검증 한계 관리 역량을 보여주는 사례입니다.</p>
        </div>
        <div className="pm-card-grid pm-card-grid-three">
          {pmCheck.map((item, index) => (
            <article key={item.label} className="pm-check-card">
              <ShieldCheck className="h-5 w-5" />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.label}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
