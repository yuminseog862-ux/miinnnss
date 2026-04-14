"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Orbit,
  RadioTower,
  ScanSearch,
  Sparkles,
} from "lucide-react";

import { ArchiveCaseCard, SelectedCaseCard } from "@/components/project-card";
import {
  archiveCases,
  experimentsContent,
  fitMethodContent,
  flagshipFeature,
  flagshipIntro,
  flagshipPlates,
  footerContent,
  heroContent,
  selectedCases,
  siteTitle,
  workCaseMap,
} from "@/data/portfolio.creative";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const experimentIcons = [Orbit, RadioTower, ScanSearch] as const;
const selectedLayouts = ["third", "third", "third"] as const;

export default function CreativePage() {
  const flagshipCase = workCaseMap["aheya"];
  const heroTitleLines = [
    "I build character-led identity systems that",
    "make products easier to feel, understand, and remember.",
  ];
  const heroSignalCards = heroContent.signals.map((item, index) => ({
    ...item,
    proof: heroContent.proofs[index] ?? "",
  }));
  const aheyaCards = [
    {
      src: flagshipFeature.media.src,
      alt: flagshipFeature.media.alt,
      label: "Character front door",
      title: "One emotional front door.",
      body: "Kumiho holds entry and recall so the product face can stay clearer.",
      fit: flagshipFeature.media.fit ?? "cover",
    },
    {
      src: flagshipPlates[0].media.src,
      alt: flagshipPlates[0].media.alt,
      label: flagshipPlates[0].title,
      title: "Support and signal read fast.",
      body: "The rail spells out support, feedback, and public proof on first view.",
      fit: flagshipPlates[0].media.fit ?? "cover",
    },
    {
      src: flagshipPlates[3].media.src,
      alt: flagshipPlates[3].media.alt,
      label: "Trust surface",
      title: "Trust gets its own face.",
      body: "Transfer logic and trust surfaces stay separate instead of hiding inside brand mood.",
      fit: flagshipPlates[3].media.fit ?? "cover",
    },
  ];

  return (
    <main className="cinema-shell bluegarage-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame">
        <header className="topbar">
          <Link href="/creative" className="brand-lockup">
            <span className="brand-dot" />
            <span>{siteTitle}</span>
          </Link>
          <nav className="topnav">
            <a href="#flagship">Flagship</a>
            <a href="#selected">Selected</a>
            <a href="#experiments">Experiments</a>
          </nav>
        </header>

        <div className="hero-grid">
          <motion.section {...fadeUp} className="hero-copy">
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
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="hero-signal-band"
        >
          <div className="hero-signal-band-header">
            <div>
              <p className="eyebrow text-aqua">Hiring signal</p>
              <p className="hero-signal-band-title">{heroContent.stageTitle}</p>
            </div>
            <Sparkles className="h-4 w-4 text-white/60" />
          </div>

          <div className="hero-signal-band-grid">
            {heroSignalCards.map((item) => (
              <article key={item.label} className="hero-signal-band-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.proof}</p>
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
            <article key={item.title} className="fit-method-card">
              <p className="eyebrow text-aqua">{item.title}</p>
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

      <motion.section {...fadeUp} id="flagship" className="page-frame flagship-frame">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="eyebrow text-aqua">{flagshipIntro.eyebrow}</p>
            <h2 className="section-title flagship-title">{flagshipIntro.title}</h2>
            <p className="section-oneliner">{flagshipIntro.oneLiner}</p>
          </div>
          <Link href={flagshipIntro.ctaHref} className="inline-link">
            {flagshipIntro.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flagship-showcase-grid">
          {aheyaCards.map((item, index) => (
            <article key={item.label} className="flagship-showcase-card">
              <div className="flagship-showcase-media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 33vw"
                  className="flagship-showcase-image"
                  style={{ objectFit: item.fit }}
                  priority={index === 0}
                />
              </div>

              <div className="flagship-showcase-copy">
                <p className="eyebrow text-aqua">{item.label}</p>
                <p className="flagship-showcase-title">{item.title}</p>
                <p className="flagship-showcase-body">{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flagship-inline-grid flagship-inline-grid-wide">
          <article className="flagship-inline-card flagship-inline-card-emphasis">
            <span>{flagshipIntro.statusLabel}</span>
            <strong>{flagshipIntro.statusValue}</strong>
          </article>

          <article className="flagship-inline-card">
            <span>Core ownership</span>
            <div className="case-chip-group">
              {flagshipCase.roles.map((item) => (
                <span key={item} className="case-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="flagship-inline-card">
            <span>Visible proof</span>
            <div className="case-chip-group">
              {flagshipCase.evidence.map((item) => (
                <span key={item} className="case-chip case-chip-soft">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </motion.section>

      <section id="selected" className="page-frame selected-frame">
        <motion.div {...fadeUp} className="section-heading">
          <div>
            <p className="eyebrow text-orange">Selected Proof</p>
            <h2 className="section-title">The clearest fit cases.</h2>
          </div>
          <p className="section-sidecopy">
            Three proofs only: brand-facing execution, identity-system differentiation, and public-facing structure.
          </p>
        </motion.div>

        <div className="selected-grid selected-grid-thirds">
          {selectedCases.map((project, index) => (
            <SelectedCaseCard
              key={project.slug}
              project={project}
              index={index}
              layout={selectedLayouts[index]}
              hrefBase="/creative/work"
            />
          ))}
        </div>
      </section>

      <section className="page-frame archive-frame">
        <motion.div {...fadeUp} className="section-heading">
          <div>
            <p className="eyebrow text-indigo">Earlier Systems</p>
            <h2 className="section-title">Supporting cases kept below the main read.</h2>
          </div>
          <p className="section-sidecopy">
            Still relevant, but they should follow the flagship and role-fit read instead of competing with it.
          </p>
        </motion.div>

        <div className="archive-grid archive-grid-thirds">
          {archiveCases.map((project, index) => (
            <ArchiveCaseCard key={project.slug} project={project} index={index} hrefBase="/creative/work" />
          ))}
        </div>
      </section>

      <motion.section {...fadeUp} id="experiments" className="page-frame practice-frame">
        <div className="practice-intro">
          <p className="eyebrow text-aqua">{experimentsContent.eyebrow}</p>
          <h2 className="section-title">{experimentsContent.title}</h2>
          <p className="practice-summary">{experimentsContent.summary}</p>
        </div>

        <div className="practice-panel">
          <div className="practice-panel-top">
            <div className="practice-track">
              {experimentsContent.process.map((item, index) => {
                const Icon = experimentIcons[index] ?? Sparkles;

                return (
                  <span key={item} className="track-node">
                    <Icon className="h-4 w-4" />
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="practice-protocols">
              {experimentsContent.chips.map((item) => (
                <span key={item} className="case-chip practice-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="practice-memo-grid">
            {experimentsContent.memos.map((item) => (
              <div key={item.title} className="practice-memo">
                <p className="practice-memo-label">{item.title}</p>
                <p className="practice-memo-value">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="page-frame footer-frame">
        <p>{footerContent.line}</p>
        <span>{footerContent.meta}</span>
      </footer>
    </main>
  );
}
