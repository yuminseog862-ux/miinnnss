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
  flagshipFeature,
  flagshipIntro,
  flagshipPlates,
  focusContent,
  footerContent,
  heroContent,
  selectedCases,
  siteTitle,
  whyFitContent,
  workCaseMap,
} from "@/data/portfolio.bluegarage";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const experimentIcons = [Orbit, RadioTower, ScanSearch] as const;
const selectedLayouts = ["third", "third", "third"] as const;

export default function BlueGaragePage() {
  const flagshipCase = workCaseMap["aheya"];
  const aheyaImage = flagshipFeature.media;

  return (
    <main className="cinema-shell bluegarage-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame">
        <header className="topbar">
          <Link href="/bluegarage" className="brand-lockup">
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
            <p className="eyebrow text-orange">{heroContent.eyebrow}</p>
            <p className="hero-kicker">{heroContent.stageTitle}</p>
            <h1 className="hero-title">{heroContent.title}</h1>
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
            {heroContent.signals.map((item) => (
              <article key={item.label} className="hero-signal-band-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>

          <div className="hero-proof-strip">
            {heroContent.proofs.map((item) => (
              <div key={item} className="hero-proof-pill">
                {item}
              </div>
            ))}
          </div>
        </motion.section>
      </section>

      <motion.section {...fadeUp} className="page-frame role-fit-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-aqua">{whyFitContent.eyebrow}</p>
            <h2 className="section-title">{whyFitContent.title}</h2>
          </div>
          <p className="section-sidecopy">{whyFitContent.summary}</p>
        </div>

        <div className="role-fit-grid">
          {whyFitContent.items.map((item) => (
            <article key={item.title} className="role-fit-card">
              <p className={`eyebrow ${accentClass(item.accent)}`}>{item.title}</p>
              <p className="role-fit-proof">{item.proof}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="page-frame focus-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-indigo">{focusContent.eyebrow}</p>
            <h2 className="section-title">{focusContent.title}</h2>
          </div>
          <p className="section-sidecopy">{focusContent.summary}</p>
        </div>

        <div className="focus-grid">
          {focusContent.lanes.map((lane) => (
            <article key={lane.title} className="focus-lane">
              <p className={`eyebrow ${accentClass(lane.accent)}`}>{lane.title}</p>
              <p className="focus-lane-body">{lane.body}</p>
              <div className="case-chip-group focus-chip-group">
                {lane.points.map((item) => (
                  <span key={item} className="case-chip case-chip-soft">
                    {item}
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

        <div className="flagship-compact-grid">
          <article className="flagship-feature-card flagship-feature-card-compact">
            <div className="flagship-feature-media">
              <Image
                src={aheyaImage.src}
                alt={aheyaImage.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 52vw"
                className="flagship-feature-image"
                style={{ objectFit: aheyaImage.fit ?? "cover" }}
                priority
              />
            </div>
            <div className="flagship-feature-copy">
              <div className="flagship-feature-top">
                <div className="flagship-feature-logo">
                  <Image
                    src={flagshipFeature.badge.src}
                    alt={flagshipFeature.badge.alt}
                    width={56}
                    height={56}
                    className="flagship-feature-logo-image"
                  />
                </div>
                <span className="eyebrow text-aqua">{flagshipFeature.label}</span>
              </div>
              <p className="flagship-feature-title">{flagshipFeature.title}</p>
            </div>
          </article>

          <div className="flagship-rail">
            <div className="flagship-copy flagship-copy-compact">
              <p>{flagshipIntro.summary}</p>
            </div>

            <div className="flagship-inline-grid">
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
          </div>

          <div className="flagship-plate-strip">
            {flagshipPlates.map((plate) => (
              <article key={plate.title} className="flagship-plate-compact">
                <p className={`eyebrow ${accentClass(plate.accent)}`}>{plate.title}</p>
                <p className="flagship-plate-copy">{plate.body}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="selected" className="page-frame selected-frame">
        <motion.div {...fadeUp} className="section-heading">
          <div>
            <p className="eyebrow text-orange">Selected Proof</p>
            <h2 className="section-title">The clearest Blue Garage-fit cases.</h2>
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
              hrefBase="/bluegarage/work"
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
            <ArchiveCaseCard key={project.slug} project={project} index={index} hrefBase="/bluegarage/work" />
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

function accentClass(accent: "aqua" | "orange" | "indigo") {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}
