"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Orbit, RadioTower, ScanSearch, Sparkles } from "lucide-react";

import { ArchiveCaseCard, SelectedCaseCard } from "@/components/project-card";
import {
  archiveCases,
  domainFitContent,
  emotionalEntryContent,
  fitMethodContent,
  flagshipIntro,
  footerContent,
  heroContent,
  heroTitleLines,
  heroVisual,
  operatingLoopContent,
  recruiterQuickReadContent,
  selectedCases,
  siteTitle,
} from "@/data/portfolio.weverse";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const operatingIcons = [Orbit, RadioTower, ScanSearch] as const;
const selectedLayouts = ["half", "half", "half", "half"] as const;

export default function WeversePage() {
  return (
    <main className="cinema-shell bluegarage-shell tainai-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame tainai-hero-frame">
        <header className="topbar">
          <Link href="/weverse" className="brand-lockup">
            <span className="brand-dot" />
            <span>{siteTitle}</span>
          </Link>
          <nav className="topnav">
            <a href="#flagship">AHEYA</a>
            <a href="#selected">Selected</a>
            <a href="#domain-fit">Why Weverse</a>
          </nav>
        </header>

        <div className="bluegarage-hero-poster">
          <motion.section {...fadeUp} className="hero-copy tainai-hero-copy">
            <p className="eyebrow text-aqua hero-eyebrow-tight">{heroContent.eyebrow}</p>
            <p className="hero-kicker">{heroContent.stageTitle}</p>
            <h1 className="hero-title">
              {heroTitleLines.map((line) => (
                <span key={line} className="hero-title-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-summary">{heroContent.summary}</p>

            <ul className="tainai-hero-proof-list">
              {heroContent.proofs.map((proof) => (
                <li key={proof}>{proof}</li>
              ))}
            </ul>

            <div className="hero-ctas">
              {heroContent.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={cta.variant === "primary" ? "cta-primary" : "cta-secondary"}
                >
                  {cta.label}
                  {cta.variant === "primary" ? (
                    <ArrowDownRight className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="bluegarage-poster-stage tainai-hero-poster-stage"
          >
            <div className="bluegarage-poster-media-shell tainai-hero-poster-shell">
              <div className="bluegarage-poster-media">
                <Image
                  src={heroVisual.src}
                  alt={heroVisual.alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 42vw"
                  className="bluegarage-poster-image"
                  style={{ objectFit: heroVisual.fit }}
                  priority
                />
              </div>
              <div className="bluegarage-poster-overlay tainai-hero-poster-overlay" />
            </div>
          </motion.aside>
        </div>

        <motion.section {...fadeUp} className="tainai-quickread-band">
          <div className="tainai-quickread-intro">
            <div className="tainai-quickread-heading">
              <div className="tainai-quickread-heading-top">
                <p className="eyebrow text-aqua">{recruiterQuickReadContent.eyebrow}</p>
                <Sparkles className="h-4 w-4 text-white/70" />
              </div>
              <h2 className="section-title">{recruiterQuickReadContent.title}</h2>
              <p className="section-sidecopy">{recruiterQuickReadContent.summary}</p>
            </div>

            <div className="tainai-order-strip">
              <span className="tainai-order-label">{recruiterQuickReadContent.orderLabel}</span>
              <div className="case-chip-group">
                {recruiterQuickReadContent.order.map((item) => (
                  <span key={item} className="case-chip case-chip-soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="tainai-quickread-list">
            {recruiterQuickReadContent.cards.map((item) => (
              <article key={item.label} className="tainai-quickread-item" data-accent={item.accent}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </motion.section>
      </section>

      <motion.section {...fadeUp} className="page-frame fit-method-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-aqua">{fitMethodContent.eyebrow}</p>
            <h2 className="section-title">{fitMethodContent.title}</h2>
          </div>
          <p className="section-sidecopy">{fitMethodContent.summary}</p>
        </div>

        <div className="fit-method-grid">
          {fitMethodContent.cards.map((item) => (
            <article key={item.title} className="fit-method-card" data-accent={item.accent}>
              <p className={`eyebrow ${accentTextClass(item.accent)}`}>{item.title}</p>
              <p className="fit-method-proof">{item.proof}</p>
              <p className="fit-method-body">{item.body}</p>
              <div className="case-chip-group fit-method-chip-group">
                {item.points.map((point) => (
                  <span key={point} className="case-chip case-chip-soft">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame practice-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-indigo">{emotionalEntryContent.eyebrow}</p>
            <h2 className="section-title">{emotionalEntryContent.title}</h2>
          </div>
          <p className="section-sidecopy">{emotionalEntryContent.summary}</p>
        </div>

        <div className="fit-method-grid">
          {emotionalEntryContent.cards.map((item) => (
            <article key={item.title} className="fit-method-card" data-accent={item.accent}>
              <p className={`eyebrow ${accentTextClass(item.accent)}`}>{item.title}</p>
              <p className="fit-method-proof">{item.proof}</p>
              <p className="fit-method-body">{item.body}</p>
              <div className="case-chip-group fit-method-chip-group">
                {item.points.map((point) => (
                  <span key={point} className="case-chip case-chip-soft">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="bluegarage-support-grid">
          <div className="practice-intro">
            <p className="eyebrow text-indigo">{emotionalEntryContent.supportEyebrow}</p>
            <h3 className="section-title">{emotionalEntryContent.supportTitle}</h3>
            <p className="practice-summary">{emotionalEntryContent.supportBody}</p>
            <div className="case-chip-group">
              {emotionalEntryContent.supportPoints.map((item) => (
                <span key={item} className="case-chip case-chip-soft">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bluegarage-support-shot-grid">
            {emotionalEntryContent.supportShots.map((item, index) => (
              <article key={item.label} className="bluegarage-support-shot">
                <div className="bluegarage-support-shot-media">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1100px) 100vw, 25vw"
                    className="bluegarage-support-shot-image"
                    style={{ objectFit: item.fit ?? "cover" }}
                    priority={index === 0}
                  />
                </div>
                <div className="bluegarage-support-shot-copy">
                  <p className="eyebrow text-indigo">콘텐츠 엔트리 설계</p>
                  <p className="bluegarage-support-shot-title">{item.label}</p>
                  <p className="bluegarage-support-body">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="section-heading section-heading-compact">
          <div>
            <p className="eyebrow text-indigo">{emotionalEntryContent.prototypeEyebrow}</p>
            <h3 className="section-title">{emotionalEntryContent.prototypeTitle}</h3>
          </div>
          <p className="section-sidecopy">{emotionalEntryContent.prototypeSummary}</p>
        </div>

        <div className="bluegarage-support-shot-grid tainai-prototype-grid">
          {emotionalEntryContent.prototypes.map((item) => (
            <article key={item.label} className="bluegarage-support-shot">
              <div className="bluegarage-support-shot-media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 25vw"
                  className="bluegarage-support-shot-image"
                  style={{ objectFit: item.fit ?? "cover" }}
                />
              </div>
              <div className="bluegarage-support-shot-copy">
                <p className="eyebrow text-indigo">서비스 표면</p>
                <p className="bluegarage-support-shot-title">{item.label}</p>
                <p className="bluegarage-support-body">{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="section-sidecopy tainai-visual-note">{emotionalEntryContent.note}</p>
      </motion.section>

      <section id="selected" className="page-frame selected-frame">
        <motion.div {...fadeUp} className="section-heading">
          <div>
            <p className="eyebrow text-orange">Selected proof</p>
            <h2 className="section-title">AHEYA 다음에 읽으면 좋은 서비스기획 보강 증거입니다.</h2>
          </div>
          <p className="section-sidecopy">
            AB_Aurora는 요구사항과 stage rule, Relay는 handoff 구조, Andersson Bell은 feedback convergence,
            Persona System은 캐릭터 consistency 감각을 보여줍니다.
          </p>
        </motion.div>

        <div className="selected-grid">
          {selectedCases.map((project, index) => (
            <SelectedCaseCard
              key={project.slug}
              project={project}
              index={index}
              layout={selectedLayouts[index] ?? "third"}
              hrefBase="/weverse/work"
            />
          ))}
        </div>
      </section>

      <motion.section {...fadeUp} id="domain-fit" className="page-frame domain-fit-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-indigo">{domainFitContent.eyebrow}</p>
            <h2 className="section-title">{domainFitContent.title}</h2>
          </div>
          <p className="section-sidecopy">{domainFitContent.summary}</p>
        </div>

        <div className="domain-fit-grid">
          <article className="domain-fit-summary">
            <p className="domain-fit-lead">
              콘텐츠 경험은 좋아하는 작품을 나열하는 것보다, 사람들이 왜 머무르고 왜 다시 돌아오는지
              설명할 수 있느냐가 더 중요하다고 생각합니다.
            </p>
            <div className="case-chip-group">
              {domainFitContent.works.map((item) => (
                <span key={item} className="case-chip">
                  {item}
                </span>
              ))}
            </div>
            <p className="domain-fit-note">{domainFitContent.note}</p>
          </article>

          <div className="domain-fit-observations">
            {domainFitContent.observations.map((item) => (
              <article key={item.title} className="domain-fit-observation">
                <p className="eyebrow text-aqua">{item.title}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="domain-fit-translation">
          <p className="eyebrow text-indigo">{domainFitContent.translationLabel}</p>
          <p className="domain-fit-translation-copy">{domainFitContent.translationBody}</p>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="loop" className="page-frame practice-frame">
        <div className="practice-intro">
          <p className="eyebrow text-aqua">{operatingLoopContent.eyebrow}</p>
          <h2 className="section-title">{operatingLoopContent.title}</h2>
          <p className="practice-summary">{operatingLoopContent.summary}</p>
        </div>

        <div className="practice-panel">
          <div className="practice-panel-top">
            <div className="practice-track">
              {operatingLoopContent.process.map((item, index) => {
                const Icon = operatingIcons[index] ?? Sparkles;

                return (
                  <span key={item} className="track-node">
                    <Icon className="h-4 w-4" />
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="practice-protocols">
              {operatingLoopContent.chips.map((item) => (
                <span key={item} className="case-chip practice-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="practice-memo-grid">
            {operatingLoopContent.memos.map((item) => (
              <div key={item.title} className="practice-memo">
                <p className="practice-memo-label">{item.title}</p>
                <p className="practice-memo-value">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="page-frame archive-frame archive-frame-subtle">
        <motion.div {...fadeUp} className="section-heading">
          <div>
            <p className="eyebrow text-indigo">Archive</p>
            <h2 className="section-title">추가로 읽을 수 있는 구조화·검증 아카이브입니다.</h2>
          </div>
          <p className="section-sidecopy">
            핵심 채용 증거는 아니지만, 문제 정의 방식과 IA/문서화 감각을 보강해 주는 작업들입니다.
          </p>
        </motion.div>

        <div className="archive-grid archive-grid-thirds">
          {archiveCases.map((project, index) => (
            <ArchiveCaseCard key={project.slug} project={project} index={index} hrefBase="/weverse/work" />
          ))}
        </div>
      </section>

      <footer className="page-frame footer-frame">
        <p>{footerContent.line}</p>
        <span>{footerContent.meta}</span>
      </footer>
    </main>
  );
}

function accentTextClass(accent: "aqua" | "orange" | "indigo") {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}
