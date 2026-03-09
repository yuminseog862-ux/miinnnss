"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Orbit, RadioTower, ScanSearch, Sparkles } from "lucide-react";

import { SelectedCaseCard } from "@/components/project-card";
import {
  flagshipIntro,
  flagshipPlates,
  footerContent,
  heroContent,
  practiceContent,
  selectedCases,
  siteTitle,
} from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <main className="cinema-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame">
        <header className="topbar">
          <Link href="/" className="brand-lockup">
            <span className="brand-dot" />
            <span>{siteTitle}</span>
          </Link>
          <nav className="topnav">
            <a href="#flagship">Flagship</a>
            <a href="#selected">Selected</a>
            <a href="#practice">Practice</a>
          </nav>
        </header>

        <div className="hero-grid">
          <motion.section {...fadeUp} className="hero-copy">
            <p className="eyebrow text-orange">{heroContent.eyebrow}</p>
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

          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-stage"
          >
            <div className="hero-stage-frame">
              <div className="hero-stage-line hero-stage-line-aqua" />
              <div className="hero-stage-line hero-stage-line-orange" />
              <div className="hero-stage-line hero-stage-line-indigo" />
              <div className="hero-stage-card">
                <div className="hero-stage-top">
                  <span className="eyebrow text-aqua">Current frame</span>
                  <Sparkles className="h-4 w-4 text-white/70" />
                </div>
                <p className="hero-stage-title">
                  A curated portfolio for live products, research output, and venture studies.
                </p>
                <div className="hero-signal-list">
                  {heroContent.signals.map((item) => (
                    <div key={item.label} className="hero-signal-row">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

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

        <div className="flagship-grid">
          <div className="flagship-copy">
            <p>{flagshipIntro.summary}</p>
            <div className="flagship-status">
              <span>{flagshipIntro.statusLabel}</span>
              <strong>{flagshipIntro.statusValue}</strong>
            </div>
          </div>

          <div className="flagship-stage">
            <div className="flagship-stage-glow" />
            <div className="flagship-stage-shell">
              {flagshipPlates.map((plate) => (
                <article key={plate.title} className="flagship-plate">
                  <p className={`eyebrow ${accentClass(plate.accent)}`}>{plate.title}</p>
                  <p className="flagship-plate-copy">{plate.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section id="selected" className="page-frame selected-frame">
        <motion.div {...fadeUp} className="section-heading">
          <div>
            <p className="eyebrow text-orange">Selected Cases</p>
            <h2 className="section-title">Built work, research proof, and venture studies in one edited field.</h2>
          </div>
          <p className="section-sidecopy">
            This selection now includes everything worth surfacing publicly beyond AHEYA: collaboration,
            research, rapid build-and-test work, and stronger venture studies with visible structure.
          </p>
        </motion.div>

        <div className="selected-grid">
          <SelectedCaseCard project={selectedCases[0]} index={0} layout="feature" />
          <SelectedCaseCard project={selectedCases[2]} index={1} layout="stack" />
          <SelectedCaseCard project={selectedCases[3]} index={2} layout="feature" />
          <SelectedCaseCard project={selectedCases[1]} index={3} layout="compact" />
          <SelectedCaseCard project={selectedCases[4]} index={4} layout="full" />
        </div>
      </section>

      <motion.section {...fadeUp} id="practice" className="page-frame practice-frame">
        <div className="practice-intro">
          <p className="eyebrow text-aqua">{practiceContent.eyebrow}</p>
          <h2 className="section-title">{practiceContent.title}</h2>
          <p className="practice-summary">{practiceContent.summary}</p>
        </div>

        <div className="practice-panel">
          <div className="practice-panel-top">
            <div className="practice-track">
              <span className="track-node">
                <Orbit className="h-4 w-4" />
                Participate
              </span>
              <span className="track-node">
                <RadioTower className="h-4 w-4" />
                Observe
              </span>
              <span className="track-node">
                <ScanSearch className="h-4 w-4" />
                Structure
              </span>
            </div>
            <div className="practice-protocols">
              {practiceContent.protocols.map((item) => (
                <span key={item} className="case-chip practice-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="practice-memo-grid">
            {practiceContent.memos.map((item) => (
              <div key={item.label} className="practice-memo">
                <p className="practice-memo-label">{item.label}</p>
                <p className="practice-memo-value">{item.value}</p>
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
