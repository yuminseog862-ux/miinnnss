"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  FileText,
  Handshake,
  Languages,
  Megaphone,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";

import { DetailMediaGallery } from "@/components/detail-media-gallery";
import {
  collaborationEvidenceVisuals,
  creativeAnalyticsImages,
  dataEvidenceVisuals,
} from "@/data/aheyabaraya.evidence";
import { workCaseMap as creativeWorkCaseMap } from "@/data/portfolio.creative";
import {
  adsbSupportingProof,
  gtmWorkflowContent,
  mainEvidenceContent,
  sftiSupportingProof,
  web3ProductUsageNotesContent,
  workCaseMap as crossangleWorkCaseMap,
} from "@/data/portfolio.crossangle";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const heroTitleLines = [
  "Web3 마케팅 매니저 지원을 위한",
  "관련 증거 정리.",
] as const;

const roleChips = [
  "transferable proof",
  "Web3 research",
  "content packaging",
  "report writing",
  "gaps marked",
] as const;

const heroProofs = [
  {
    label: "Primary proof",
    value: "AHEYABARAYA",
    body: "직접 마케팅 경력이 아니라 Web3 프로젝트를 이해하고 정보/콘텐츠로 바꾼 증거",
  },
  {
    label: "Report proof",
    value: "SQL / Python / Sheets",
    body: "성과 주장보다 KPI boundary, decision trace, referral readiness를 정리한 증거",
  },
  {
    label: "Creative proof",
    value: "X-native hook",
    body: "커뮤니티 운영 성과가 아니라 공개 채널용 메시지/비주얼을 조정한 증거",
  },
  {
    label: "Support proof",
    value: "ADSB / SFTI-CMU",
    body: "외부 피드백 반영, 영어 문서화, 브랜드 해석 구조화의 보조 증거",
  },
] as const;

const jdFitCards = [
  {
    icon: Handshake,
    label: "파트너십 제안 / 관리",
    title: "직접 파트너십 성과는 없음, 제안 자료 구성 역량으로 연결",
    body:
      "AHEYABARAYA를 category, user, problem, solution, evidence, update note로 정리한 자료는 있습니다. 다만 컨퍼런스, 미디어, 커뮤니티 파트너십을 실제로 체결하거나 관리한 공개 증거는 없습니다.",
    proof: ["Project profile", "information structure", "partnership execution 없음"],
    accent: "aqua" as const,
  },
  {
    icon: Languages,
    label: "글로벌 클라이언트 커뮤니케이션",
    title: "영문 문서화 증거는 있음, Web3 클라이언트 영어 실무는 없음",
    body:
      "SFTI-CMU는 영문 초록과 포스터 구조화, Andersson Bell은 외부 피드백을 받아 방향을 좁힌 증거입니다. 해외 Web3 클라이언트와 영어로 데일리 커뮤니케이션한 실무 증거는 없습니다.",
    proof: ["English abstract", "external feedback loop", "Web3 client communication 없음"],
    accent: "orange" as const,
  },
  {
    icon: MessagesSquare,
    label: "커뮤니티 운영",
    title: "X 공개 채널 콘텐츠 증거는 있음, Telegram/Discord 운영은 없음",
    body:
      "AHEYABARAYA X 포스트, visual hook, Good/Improve 메시지 구조는 있습니다. Telegram/Discord 운영, 문의 응대, sentiment 관리, 캠페인 moderation 성과는 공개 가능한 증거가 없습니다.",
    proof: ["X posts", "creative hook test", "Telegram / Discord operation 없음"],
    accent: "indigo" as const,
  },
  {
    icon: BarChart3,
    label: "리포트 제작",
    title: "지원 포인트로 가장 현실적인 영역",
    body:
      "decision trace, KPI boundary, referral readiness, attribution claim boundary를 SQL/Python, Google Sheets, Docs, Notion, Slack digest용 output으로 정리했습니다. 성과 자체보다 리포팅 구조를 보여주는 증거입니다.",
    proof: ["SQL / Python", "Sheets / Docs", "reporting structure"],
    accent: "aqua" as const,
  },
] as const;

const noEvidenceCards = [
  {
    title: "해외 Web3 프로젝트 클라이언트 대행 실무",
    body: "없음. 현재 증거는 직접 운영한 AHEYABARAYA와 공개 리서치/콘텐츠 산출물 중심입니다.",
  },
  {
    title: "Telegram / Discord 커뮤니티 운영 성과",
    body: "없음. X 공개 채널 포스트와 visual hook 실험은 있으나 Telegram/Discord 운영 지표는 없습니다.",
  },
  {
    title: "캠페인 성과 / 유저 성장 / 매출 기여",
    body: "없음. 채널 반응과 제품 KPI는 분리해 표시했고, 전환/매출 성과로 주장하지 않습니다.",
  },
  {
    title: "클라이언트 리포트 실사용 채택",
    body: "없음. Notion, Sheets, Docs, Slack digest는 검토 가능한 reporting output 설계 증거입니다.",
  },
] as const;

const reportOutputs = [
  "actual_decision_trace_report.csv",
  "kpi_measurement_design_report.csv",
  "referral_measurement_readiness.csv",
  "attribution_claim_boundary_report.csv",
  "collaboration_tool_output_matrix.csv",
] as const;

const readingOrder = [
  {
    label: "01",
    title: "AHEYABARAYA는 Web3 이해/콘텐츠화 증거로 봅니다",
    body: "프로젝트를 직접 만든 경험이 아니라, Web3 맥락을 정보 구조, X 포스트, 데모 영상, visual asset으로 바꾼 흐름을 보여줍니다.",
    href: "#aheya",
  },
  {
    label: "02",
    title: "리포트 output은 가장 방어 가능한 강점입니다",
    body: "Google Sheets/PPT류 문서 작성 역량은 SQL/Python report, Sheets matrix, Notion hub, Doc brief로 연결됩니다. 성과 과장 없이 구조를 보여줍니다.",
    href: "#reporting",
  },
  {
    label: "03",
    title: "Creative / TainAI 상세는 보조 증거입니다",
    body: "ADSB, SFTI-CMU, TainAI 상세는 콘텐츠 제작, 영어 구조화, 피드백 반영, 중단 판단을 보완합니다.",
    href: "#supporting",
  },
] as const;

export default function ExilistPortfolioPage() {
  const flagshipCase = crossangleWorkCaseMap["aheya"];
  const aheyaCreativeCase = creativeWorkCaseMap["aheya"];
  const aheyaCreativePreview =
    aheyaCreativeCase.coverImage ?? aheyaCreativeCase.placeholderMedia.find((item) => item.src);
  const heroPoster = flagshipCase.detailHeroProof ?? {
    src: "/aheya/aheyabaraya-homepage-2026-04-28.png",
    alt: "AHEYABARAYA homepage screenshot.",
    fit: "contain" as const,
  };

  return (
    <main className="cinema-shell bluegarage-shell tainai-shell crossangle-shell integrated-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame tainai-hero-frame integrated-hero-frame">
        <header className="topbar">
          <Link href="/exilist" className="brand-lockup">
            <span className="brand-dot" />
            <span>minnns / Exilist Role-Fit Draft</span>
          </Link>
          <nav className="topnav">
            <a href="#jd-fit">JD Fit</a>
            <a href="#aheya">AHEYABARAYA</a>
            <a href="#reporting">Reports</a>
            <a href="#gaps">No Evidence</a>
          </nav>
        </header>

        <div className="bluegarage-hero-poster">
          <motion.section {...fadeUp} className="hero-copy tainai-hero-copy">
            <p className="eyebrow text-aqua hero-eyebrow-tight">Exilist Web3 블록체인 마케팅 매니저 지원 검토용</p>
            <p className="hero-kicker">직접 경력처럼 보이지 않게, 전환 가능한 증거와 없는 증거를 분리</p>
            <h1 className="hero-title">
              {heroTitleLines.map((line) => (
                <span key={line} className="hero-title-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-summary">
              CrossAngle용 Web3 GTM 페이지, AHEYABARAYA evidence page, creative 상세 페이지, TainAI 상세 페이지를
              모두 확인한 뒤 Exilist JD와 연결 가능한 자료만 다시 묶었습니다. 직접 해본 증거가 없는 항목은 아래에
              명시적으로 표시했습니다.
            </p>

            <div className="case-chip-group crossangle-hero-jd-chips" aria-label="Exilist JD fit chips">
              {roleChips.map((chip) => (
                <span key={chip} className="case-chip case-chip-soft">
                  {chip}
                </span>
              ))}
            </div>

            <div className="hero-ctas">
              <a href="#jd-fit" className="cta-primary">
                관련 증거 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#gaps" className="cta-secondary">
                부족한 점 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="bluegarage-poster-stage tainai-hero-poster-stage"
          >
            <a
              href="https://aheyabaraya.xyz"
              target="_blank"
              rel="noreferrer"
              className="bluegarage-poster-media-shell tainai-hero-poster-shell crossangle-hero-live-link"
              aria-label="AHEYABARAYA live site open"
            >
              <div className="bluegarage-poster-media">
                <Image
                  src={heroPoster.src ?? "/aheya/aheyabaraya-homepage-2026-04-28.png"}
                  alt={heroPoster.alt ?? "AHEYABARAYA product surface."}
                  fill
                  sizes="(max-width: 1100px) 100vw, 42vw"
                  className="bluegarage-poster-image"
                  style={{ objectFit: heroPoster.fit ?? "contain" }}
                  priority
                />
              </div>
              <div className="bluegarage-poster-overlay tainai-hero-poster-overlay" />
            </a>
            <div className="integrated-hero-proof-grid">
              {heroProofs.map((item) => (
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

      <motion.section {...fadeUp} id="jd-fit" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">JD Fit</p>
            <h2>직무 요구를 증거와 공백으로 나눠 매핑했습니다.</h2>
          </div>
          <p>
            Exilist JD의 핵심은 Web3 한국 GTM, 파트너십, 글로벌 커뮤니케이션, 커뮤니티 운영, 리포트 제작입니다.
            이 페이지는 직접 증거, 전환 가능한 증거, 없는 증거를 한 화면에서 분리합니다.
          </p>
        </div>

        <div className="integrated-output-summary-grid">
          {jdFitCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.label} className="integrated-output-summary-card" data-accent={card.accent}>
                <Icon className="h-5 w-5" />
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ul>
                  {card.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-orange">Reading Order</p>
            <h2>채용자가 읽기 좋은 순서</h2>
          </div>
          <p>기존 포트폴리오 전체를 그대로 나열하지 않고, 이 직무에서 먼저 확인해야 하는 증거만 앞에 둡니다.</p>
        </div>
        <div className="pm-card-grid pm-card-grid-three">
          {readingOrder.map((item) => (
            <article key={item.label} className="pm-card" data-accent="aqua">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href={item.href} className="inline-link">
                섹션으로 이동
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame crossangle-usage-notes-panel" aria-labelledby="usage-notes-title">
        <div className="crossangle-usage-notes-copy">
          <p className="eyebrow text-aqua">{web3ProductUsageNotesContent.eyebrow}</p>
          <h2 id="usage-notes-title">
            {web3ProductUsageNotesContent.titleLines.map((line) => (
              <span key={line} className="crossangle-usage-notes-title-line">
                {line}
              </span>
            ))}
          </h2>
          <p>{web3ProductUsageNotesContent.summary}</p>
          <strong>{web3ProductUsageNotesContent.connection}</strong>
        </div>

        <div className="crossangle-usage-notes-grid" aria-label="Web3 product usage evidence thumbnails">
          {web3ProductUsageNotesContent.cards.map((card) => (
            <article key={card.label} className="crossangle-usage-note-card" data-accent={card.accent}>
              <div className="crossangle-usage-note-media">
                <Image src={card.image.src} alt={card.image.alt} fill sizes="(max-width: 900px) 50vw, 14vw" />
              </div>
              <div className="crossangle-usage-note-copy">
                <span>{card.label}</span>
                <small>{card.tag}</small>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="aheya" className="page-frame crossangle-workflow-panel">
        <div className="crossangle-workflow-head">
          <p className="eyebrow text-aqua">{gtmWorkflowContent.eyebrow}</p>
          <h2>AHEYABARAYA를 직무 관련 증거로 읽는 방법</h2>
          <p>
            Web3 행동 관찰을 프로젝트 정보, 한국 시장용 설명, X 콘텐츠, 미디어 업데이트로 전환한 흐름입니다.
          </p>
        </div>
        <div className="crossangle-workflow-grid">
          {gtmWorkflowContent.cards.map((item) => (
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
                  <span>{item.proof.split("→")[0].trim()}</span>
                  <ul>
                    {item.proof
                      .split("→")
                      .slice(1)
                      .join("→")
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

      <motion.section {...fadeUp} id="content" className="page-frame crossangle-main-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">{mainEvidenceContent.content.eyebrow}</p>
            <h2 className="section-title">X 포스트와 영상 콘텐츠를 검토 단위로 정리</h2>
          </div>
          <Link href="/crossangle#content" className="inline-link">
            CrossAngle 원본 섹션 보기
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="crossangle-main-x-embed-grid" aria-label="AHEYABARAYA X posting samples">
          <DetailMediaGallery
            columns={5}
            items={mainEvidenceContent.content.posts.map((post) => ({
              label: `${post.label} · ${post.date}`,
              note: post.title,
              hideText: true,
              embedType: "x" as const,
              embedUrl: post.href,
              embedText: post.original || post.title,
              href: post.href,
              hrefLabel: "X에서 보기",
              src: post.src,
              alt: post.alt,
              fit: post.fit,
              displaySize: "compact" as const,
            }))}
          />
        </div>

        <div className="crossangle-video-strip">
          {mainEvidenceContent.content.videos.map((video) => (
            <article key={video.title} className="crossangle-video-card">
              <video className="crossangle-video" controls playsInline preload="metadata" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
              </video>
              <div>
                <span>{video.label}</span>
                <h3>{video.title}</h3>
                <p>{video.note}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="reporting" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-aqua">Report / Data Analysis</p>
            <h2>리포트 제작 역량은 별도 증거로 제시합니다.</h2>
          </div>
          <p>
            Exilist JD의 리포트 제작 요구와 가장 직접적으로 맞는 부분입니다. 성과를 과장하지 않고, 어떤 데이터를 어떤 판단과
            협업툴 output으로 바꿨는지 보여줍니다.
          </p>
        </div>

        <div className="pm-model-section">
          <div className="pm-model-copy">
            <p className="eyebrow text-orange">SQL / Python Evidence Pipeline</p>
            <h2>판단 기록을 리포트처럼 읽히는 단위로 변환</h2>
            <p>
              KPI snapshot, decision trace, referral readiness, attribution boundary를 성과 주장과 분리해 보고 가능한 output으로
              정리했습니다.
            </p>
            <div className="pm-output-list">
              {reportOutputs.map((item) => (
                <span key={item}>
                  <FileText className="h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="pm-flow-card">
            <BarChart3 className="h-5 w-5 text-aqua" />
            <pre>{`research / decision log
+ KPI snapshot / admin work
+ referral code-link-bind
+ proxy scenario rules
    -> SQL staging
    -> measurement design report
    -> decision trace report
    -> Python report
    -> Notion / Sheets / Docs / Slack-ready outputs`}</pre>
          </div>
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

      <motion.section {...fadeUp} id="collaboration" className="page-frame integrated-section">
        <div className="integrated-section-head integrated-section-head-wide">
          <div>
            <p className="eyebrow text-indigo">Collaboration Output</p>
            <h2>Google Sheets / Docs / Notion / Slack 형식으로 검토 가능하게 정리</h2>
          </div>
          <p>
            실제 조직에서 채택된 운영 성과는 아니므로 그렇게 주장하지 않습니다. 대신 같은 판단 자료를 협업툴별 검토 단위로
            바꿀 수 있다는 증거로 배치합니다.
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

      <motion.section {...fadeUp} id="supporting" className="page-frame crossangle-main-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">Supporting Proof</p>
            <h2 className="section-title">콘텐츠 제작, 외부 피드백, 영어 문서화 보조 증거</h2>
          </div>
        </div>

        <Link href="/creative/work/aheya" className="crossangle-aheya-creative-card">
          {aheyaCreativePreview?.src ? (
            <div className="crossangle-aheya-creative-card-media">
              <Image
                src={aheyaCreativePreview.src}
                alt={aheyaCreativePreview.alt ?? "AHEYA creative preview image."}
                fill
                sizes="(max-width: 1100px) 100vw, 34vw"
                className="crossangle-aheya-creative-card-image"
                style={{ objectFit: aheyaCreativePreview.fit ?? "cover" }}
              />
              <div className="crossangle-aheya-creative-card-wash" />
            </div>
          ) : null}
          <div className="crossangle-aheya-creative-card-copy">
            <div className="crossangle-aheya-creative-card-topline">
              <span className="eyebrow text-aqua">{aheyaCreativeCase.eyebrow}</span>
              <span>{aheyaCreativeCase.year}</span>
            </div>
            <h3>{aheyaCreativeCase.title}</h3>
            <p>{aheyaCreativeCase.oneLiner}</p>
            <div className="case-chip-group">
              {aheyaCreativeCase.evidence.slice(0, 4).map((item) => (
                <span key={item} className="case-chip case-chip-soft">
                  {item}
                </span>
              ))}
            </div>
            <div className="crossangle-aheya-creative-card-bottom">
              <span>{aheyaCreativeCase.status}</span>
              <span className="inline-link">
                creative/work/aheya
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>

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

        <article className="crossangle-adsb-proof-card">
          <div className="crossangle-adsb-proof-media">
            <video className="crossangle-video" controls playsInline preload="metadata" poster={adsbSupportingProof.media.poster}>
              <source src={adsbSupportingProof.media.src} type="video/mp4" />
            </video>
          </div>

          <div className="crossangle-adsb-proof-copy">
            <span className="crossangle-card-label">{adsbSupportingProof.label}</span>
            <small className="crossangle-support-period">{adsbSupportingProof.period}</small>
            <h3>{adsbSupportingProof.caseTitle}</h3>
            <p>{adsbSupportingProof.body}</p>
            <ul className="crossangle-solution-list">
              {adsbSupportingProof.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="crossangle-adsb-proof-caveat">{adsbSupportingProof.caveat}</p>
            <Link href={adsbSupportingProof.detailHref} className="inline-link">
              ADSB 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <article className="crossangle-adsb-proof-card crossangle-sfti-proof-card">
          <div className="crossangle-adsb-proof-media crossangle-sfti-proof-media">
            <Image
              src={sftiSupportingProof.image.src}
              alt={sftiSupportingProof.image.alt}
              width={1200}
              height={1600}
              className="crossangle-sfti-proof-image"
              sizes="(max-width: 1100px) 100vw, 46vw"
            />
          </div>

          <div className="crossangle-adsb-proof-copy">
            <span className="crossangle-card-label">{sftiSupportingProof.label}</span>
            <small className="crossangle-support-period">{sftiSupportingProof.period}</small>
            <h3>{sftiSupportingProof.caseTitle}</h3>
            <p>{sftiSupportingProof.body}</p>
            <ul className="crossangle-solution-list">
              {sftiSupportingProof.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="crossangle-adsb-proof-caveat">{sftiSupportingProof.caveat}</p>
            <Link href={sftiSupportingProof.detailHref} className="inline-link">
              SFTI 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </motion.section>

      <motion.section {...fadeUp} id="gaps" className="page-frame integrated-section integrated-boundary-section">
        <ShieldCheck className="h-5 w-5" />
        <div>
          <p className="eyebrow text-orange">Explicit No Evidence</p>
          <h2>없는 것은 없음으로 표시합니다.</h2>
          <p>
            이 포트폴리오는 Exilist JD에 맞게 구성했지만, 아래 항목은 현재 공개 가능한 증거가 없습니다. 면접에서는
            “가능한 전환 역량”과 “직접 해본 증거”를 구분해 설명해야 합니다.
          </p>
          <div className="integrated-decision-packet-grid">
            {noEvidenceCards.map((item) => (
              <article key={item.title} className="integrated-decision-packet-card">
                <div className="integrated-preview-card-head">
                  <Megaphone className="h-5 w-5" />
                  <div>
                    <span>없음 / 공개 증거 없음</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="integrated-boundary-links">
            <Link href="/crossangle" className="inline-link">
              CrossAngle GTM 원본
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/aheyabaraya" className="inline-link">
              AHEYABARAYA evidence
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/creative" className="inline-link">
              Creative archive
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/tainai" className="inline-link">
              TainAI 상세
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <ShieldCheck className="h-5 w-5 integrated-boundary-spark" />
      </motion.section>
    </main>
  );
}
