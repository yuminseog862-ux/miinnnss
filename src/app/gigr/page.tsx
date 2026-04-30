"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  adVariants,
  adsbExecutionPoints,
  adsbCraftNotes,
  adsbDecisionCards,
  adsbSummaryPoints,
  aheyaAmbiguitySteps,
  aheyaCaseSummaryPoints,
  aheyaLearningPoints,
  aheyaOriginVideos,
  aheyaPageSurfaces,
  aheyaPositioningBridge,
  caseReadout,
  characterExpansionPoints,
  characterProofs,
  coreAxes,
  hermesLoop,
  hookPlanningSteps,
  loopSummaryPoints,
  planningSummaryPoints,
  planningSignals,
  recruiterFitRows,
  roleSummaryPoints,
  supportProofs,
  type GigrIconKey,
} from "@/data/portfolio.gigr";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Clapperboard,
  FileText,
  Film,
  Layers3,
  MessageSquareText,
  Route,
  Sparkles,
} from "lucide-react";

const gigrIconMap: Record<GigrIconKey, typeof Sparkles> = {
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  messageSquareText: MessageSquareText,
  chartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
};

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function BulletList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`gigr-bullet-list ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function GigrPage() {
  return (
    <main className="cinema-shell gigr-shell">
      <section className="page-frame gigr-hero-frame">
        <header className="topbar gigr-topbar">
          <Link href="/gigr" className="brand-lockup">
            <span className="brand-dot" />
            <span>minnns / GIGR</span>
          </Link>
          <nav className="topnav">
            <a href="#role">JD 매칭</a>
            <a href="#fit">작업 방식</a>
            <a href="#planning">기획 의도</a>
            <a href="#aheya">AHEYABARAYA</a>
            <a href="#aheya-assets">소재 확장</a>
            <a href="#adsb">Andersson Bell</a>
            <a href="#loop">Hermes Loop</a>
          </nav>
        </header>

        <div className="gigr-hero">
          <motion.div {...fadeUp} className="gigr-hero-copy">
            <h1 className="gigr-hero-title">
              광고 훅을 기획하고 AI 숏폼 후보로 바꾸는 제작자입니다.
            </h1>
            <p className="gigr-hero-summary">
              레퍼런스에서 멈추게 하는 장면을 찾고, 타깃이 읽을 문제 카피와 연결한 뒤 이미지와
              AI 숏폼 후보, 다음 제작 브리프까지 이어갑니다.
            </p>
            <div className="gigr-hero-brief">
              <article>
                <span>01</span>
                <strong>Reference Hook</strong>
                <p>멈추게 하는 장면의 구도와 감정을 찾습니다.</p>
              </article>
              <article>
                <span>02</span>
                <strong>AI Short-form</strong>
                <p>이미지와 영상 후보를 광고 소재처럼 판단합니다.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Learning Loop</strong>
                <p>관찰 신호를 다음 카피와 프롬프트로 되돌립니다.</p>
              </article>
            </div>
            <div className="hero-ctas">
              <a href="#aheya" className="cta-primary">
                대표 케이스 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#loop" className="cta-secondary">
                운영 루프 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="gigr-hero-proof-row">
              <span>AHEYABARAYA 캐릭터/X 훅 실험</span>
              <span>Andersson Bell AI 숏폼 제작</span>
              <span>Hermes/Aurora 자동화 루프 설계</span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="gigr-hero-board gigr-hero-board-single"
          >
            <div className="gigr-hero-media gigr-hero-media-large gigr-hero-kumiho">
              <Image
                src="/appendix/bluegarage/aheya/kumiho-motion-poster.webp"
                alt="Blue Kumiho character hook asset."
                fill
                priority
                loading="eager"
                sizes="(max-width: 760px) 100vw, 42vw"
                className="gigr-kumiho-image"
              />
              <div className="gigr-hero-caption gigr-hero-caption-overlay">
                <strong>Blue Kumiho → cinematic intro hook</strong>
                <span>초기 실험 이후 가장 영상미가 살아 있어 첫 인트로에 세운 대표 시각 훅입니다.</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} id="role" className="page-frame gigr-section gigr-role-section gigr-slide-section">
        <div className="gigr-recruiter-head">
          <div>
            <p className="eyebrow text-aqua">Recruiter View</p>
            <h2 className="section-title">GIGR 업무와 바로 연결되는 증거만 먼저 보입니다</h2>
          </div>
          <BulletList items={roleSummaryPoints} className="gigr-head-bullets" />
        </div>

        <div className="gigr-fit-table" aria-label="GIGR role fit evidence">
          {recruiterFitRows.map((row, index) => (
            <article key={row.need} className="gigr-fit-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>GIGR에서 필요한 일</small>
                <strong>{row.need}</strong>
              </div>
              <div>
                <small>이 포트폴리오의 증거</small>
                <p>{row.proof}</p>
              </div>
              <div>
                <small>확인 가능한 산출물</small>
                <p>{row.output}</p>
              </div>
              <a href={row.href} aria-label={`${row.need} evidence section`}>
                보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="fit" className="page-frame gigr-section gigr-slide-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-aqua">What I Do</p>
            <h2 className="section-title">작업 방식은 네 단계로 읽힙니다</h2>
          </div>
        </div>

        <div className="gigr-axis-grid">
          {coreAxes.map((axis) => {
            const Icon = gigrIconMap[axis.icon];

            return (
              <article key={axis.title} className="gigr-axis-card">
                <div className="gigr-axis-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="gigr-axis-title">{axis.title}</p>
                <p className="gigr-axis-proof">{axis.proof}</p>
                <p className="gigr-axis-body">{axis.body}</p>
                <div className="case-chip-group">
                  {axis.points.map((point) => (
                    <span key={point} className="case-chip case-chip-soft">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="gigr-hook-process">
          {hookPlanningSteps.map((step) => (
            <article key={step.label}>
              <span>{step.label}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="planning" className="page-frame gigr-section gigr-planning-section gigr-slide-section">
        <div className="gigr-planning-head">
          <div>
            <p className="eyebrow text-orange">Planning & Signal</p>
            <h2 className="section-title">AHEYABARAYA에서 얻은 제작 판단</h2>
          </div>
          <BulletList items={planningSummaryPoints} className="gigr-head-bullets" />
        </div>

        <div className="gigr-planning-grid">
          <div className="gigr-planning-cards">
            {planningSignals.map((item) => (
              <article key={item.title} className="gigr-planning-card">
                <p>{item.title}</p>
                <h3>{item.signal}</h3>
                <div>
                  <span>{item.body}</span>
                  <BulletList items={item.points} className="gigr-mini-bullets" />
                </div>
              </article>
            ))}
          </div>

          <aside className="gigr-character-proof-card">
            <div className="gigr-character-proof-head">
              <div>
                <p className="eyebrow text-aqua">Creative Evidence</p>
                <h3>초기 영상에서 출발해 대표 훅으로 정제한 캐릭터 자산군</h3>
              </div>
              <Link href="/creative/work/aheya" className="inline-link">
                전체 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="gigr-character-grid">
              {characterProofs.map((character) => (
                <figure key={character.name} className="gigr-character-tile">
                  <Image
                    src={character.src}
                    alt={`AHEYABARAYA ${character.name} character asset.`}
                    fill
                    sizes="(max-width: 760px) 45vw, 12vw"
                    className="gigr-media-img"
                  />
                  <figcaption>
                    <strong>{character.name}</strong>
                    <span>{character.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <BulletList items={characterExpansionPoints} className="gigr-character-note-list" />
          </aside>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="aheya" className="page-frame gigr-section gigr-aheya-section gigr-slide-section">
        <div className="gigr-case-head">
          <div>
            <p className="eyebrow text-aqua">Flagship Case</p>
            <h2 className="section-title">AHEYABARAYA는 캐릭터를 광고 훅으로 검토한 케이스입니다</h2>
          </div>
          <BulletList items={aheyaCaseSummaryPoints} className="gigr-head-bullets" />
        </div>

        <div className="gigr-case-readout">
          {caseReadout.map((item) => (
            <article key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.body}</span>
            </article>
          ))}
        </div>

        <div className="gigr-aheya-bridge">
          {aheyaPositioningBridge.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="gigr-aheya-sequence-grid">
          {aheyaAmbiguitySteps.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="aheya-assets" className="page-frame gigr-section gigr-aheya-section gigr-slide-section">
        <div className="gigr-case-head">
          <div>
            <p className="eyebrow text-aqua">Asset Expansion</p>
            <h2 className="section-title">반응을 보고 콘텐츠 생산 방향을 다시 잡았습니다</h2>
          </div>
          <BulletList items={aheyaLearningPoints} className="gigr-head-bullets" />
        </div>

        <div className="gigr-aheya-grid">
          <div className="gigr-aheya-media-wall">
            <div className="gigr-aheya-main-media">
              <Image
                src="/aheya/aheyabaraya-homepage-2026-04-28.png"
                alt="AHEYABARAYA product intro surface."
                fill
                sizes="(max-width: 1100px) 100vw, 48vw"
                className="gigr-media-contain"
                loading="eager"
              />
            </div>
            {aheyaOriginVideos.map((video) => (
              <div key={video.label} className="gigr-aheya-small-media">
                <video playsInline muted loop autoPlay preload="metadata" poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
            <div className="gigr-aheya-small-media">
              <video playsInline muted loop autoPlay preload="metadata" poster="/appendix/bluegarage/aheya/tiger-zodiac.webp">
                <source src="/appendix/bluegarage/aheya/tiger_vid.MP4" type="video/mp4" />
              </video>
            </div>
            <div className="gigr-aheya-small-media">
              <Image
                src="/aheyabaraya/evidence/k-home-pair.webp"
                alt="AHEYABARAYA K character and home copy visual pair."
                fill
                sizes="(max-width: 1100px) 50vw, 24vw"
                className="gigr-media-contain"
                loading="eager"
              />
            </div>
          </div>

          <div className="gigr-aheya-copy">
            <article className="gigr-signal-card">
              <p className="eyebrow text-orange">Learning Decision</p>
              <h3>서비스 카피가 먹히지 않은 이유를 보고 콘텐츠 방향을 다시 잡았습니다</h3>
              <div className="gigr-learning-list">
                {caseReadout.map((item) => (
                  <article key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.body}</span>
                  </article>
                ))}
              </div>
            </article>

            <div className="gigr-aheya-page-proof">
              {aheyaPageSurfaces.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.body}</span>
                </article>
              ))}
            </div>

            <div className="gigr-variant-list">
              {adVariants.map((variant) => (
                <article key={variant.name} className="gigr-variant-card">
                  <div>
                    <p className="gigr-variant-name">{variant.name}</p>
                    <h3>{variant.hook}</h3>
                  </div>
                  <dl>
                    <div>
                      <dt>Asset</dt>
                      <dd>{variant.asset}</dd>
                    </div>
                    <div>
                      <dt>Purpose</dt>
                      <dd>{variant.purpose}</dd>
                    </div>
                    <div>
                      <dt>Signal</dt>
                      <dd>{variant.signal}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            <Link href="/creative/work/aheya" className="inline-link gigr-case-link">
              AHEYABARAYA 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="adsb" className="page-frame gigr-section gigr-slide-section">
        <div className="gigr-case-head gigr-adsb-head">
          <div>
            <p className="eyebrow text-orange">External Brand Case</p>
            <h2 className="section-title">Andersson Bell은 AI 숏폼 방향을 수렴한 케이스입니다</h2>
          </div>
          <BulletList items={adsbSummaryPoints} className="gigr-head-bullets" />
        </div>
        <div className="gigr-adsb-row">
          <div className="gigr-adsb-video">
            <video playsInline muted loop autoPlay controls preload="metadata" poster="/work/andersson-bell-cover.webp">
              <source src="/video/anderssonbell.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="gigr-adsb-copy">
            <BulletList items={adsbExecutionPoints} className="gigr-execution-bullets" />
            <div className="gigr-process-strip">
              <span>Brand research</span>
              <span>Hook / motif</span>
              <span>Storyboard</span>
              <span>AI image</span>
              <span>Kling video</span>
              <span>Feedback revision</span>
            </div>
            <div className="gigr-adsb-decision-grid">
              {adsbDecisionCards.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.body}</span>
                </article>
              ))}
            </div>
            <div className="gigr-adsb-craft-grid">
              {adsbCraftNotes.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.body}</span>
                </article>
              ))}
            </div>
            <div className="gigr-adsb-proof-grid">
              <div>
                <Image
                  src="/work/andersson-bell-process.webp"
                  alt="Andersson Bell process board."
                  fill
                  sizes="(max-width: 1100px) 100vw, 22vw"
                  className="gigr-media-contain"
                  loading="eager"
                />
              </div>
              <div>
                <Image
                  src="/work/andersson-bell-variants.webp"
                  alt="Andersson Bell prompt variants."
                  fill
                  sizes="(max-width: 1100px) 100vw, 22vw"
                  className="gigr-media-contain"
                  loading="eager"
                />
              </div>
            </div>
            <Link href="/creative/work/andersson-bell" className="inline-link gigr-case-link">
              Andersson Bell 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="loop" className="page-frame gigr-section gigr-slide-section">
        <div className="gigr-loop-head">
          <div>
            <p className="eyebrow text-indigo">Operating System</p>
            <h2 className="section-title">Hermes / Aurora Creative Operating Loop</h2>
          </div>
          <BulletList items={loopSummaryPoints} className="gigr-head-bullets" />
        </div>

        <div className="gigr-loop-grid">
          <div className="gigr-loop-video-card">
            <video playsInline muted loop autoPlay controls preload="metadata" poster="/video/codex-hermes-automation-flow-poster.webp">
              <source src="/video/codex-hermes-automation-flow-4x.mp4" type="video/mp4" />
            </video>
            <div className="gigr-loop-video-caption">
              <Film className="h-4 w-4" />
              <span>Hermes/Aurora 구조를 근거 자료로 읽고, 광고 소재 운영 루프를 설명 가능한 형태로 정리하는 4배속 작업 흐름입니다.</span>
            </div>
          </div>

          <div className="gigr-loop-copy-card">
            <div className="gigr-loop-flow">
              {hermesLoop.map((item, index) => (
                <article key={item.step} className="gigr-loop-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.step}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="gigr-loop-proof-row">
          <article>
            <Layers3 className="h-5 w-5" />
            <strong>Daily creative pipeline</strong>
            <span>매일 10개 이미지 후보와 5개 영상화 계획을 준비하는 운영 목표</span>
          </article>
          <article>
            <FileText className="h-5 w-5" />
            <strong>Data contracts</strong>
            <span>CreativeBrief, ImagePromptSlot, PublishDraft, CreativeObservation로 연결</span>
          </article>
          <article>
            <Route className="h-5 w-5" />
            <strong>Automation target</strong>
            <span>제작 후보 자동화와 게시 자동화를 분리하고, API 비용을 본 뒤 승인 기반 검수 단계부터 확장</span>
          </article>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="support" className="page-frame gigr-section gigr-support-section">
        <div>
          <p className="eyebrow text-aqua">Supporting Proof</p>
          <h2 className="section-title">필요할 때만 보여주는 보조 증거</h2>
        </div>
        <div className="gigr-support-grid">
          {supportProofs.map((proof) => (
            <Link key={proof.title} href={proof.href} className="gigr-support-card">
              <h3>{proof.title}</h3>
              <p>{proof.body}</p>
              <span className="inline-link">
                보기
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </motion.section>

      <footer className="page-frame footer-frame gigr-footer">
        <p>GIGR 지원용 포트폴리오. 광고 훅, AI 숏폼 후보, 제작 학습 루프 중심으로 구성했습니다.</p>
        <span>AHEYABARAYA / Andersson Bell / Hermes Aurora</span>
      </footer>
    </main>
  );
}
