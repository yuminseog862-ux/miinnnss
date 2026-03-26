"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Orbit, RadioTower, ScanSearch, Sparkles } from "lucide-react";

import { SelectedCaseCard } from "@/components/project-card";
import {
  focusContent,
  flagshipFeature,
  flagshipIntro,
  flagshipPlates,
  footerContent,
  heroContent,
  practiceContent,
  siteTitle,
  workCaseMap,
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
            <ul className="hero-proof-list">
              {heroContent.proofs.map((item) => (
                <li key={item} className="hero-proof-item">
                  {item}
                </li>
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
                  <span className="eyebrow text-aqua">Hiring signal</span>
                  <Sparkles className="h-4 w-4 text-white/70" />
                </div>
                <p className="hero-stage-title">{heroContent.stageTitle}</p>
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
              <ul className="focus-list">
                {lane.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
              <article className="flagship-feature-card">
                <div className="flagship-feature-media">
                  <Image
                    src={flagshipFeature.media.src}
                    alt={flagshipFeature.media.alt}
                    fill
                    sizes="(max-width: 1100px) 100vw, 60vw"
                    className="flagship-feature-image"
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
                  <p className="flagship-feature-body">{flagshipFeature.body}</p>
                </div>
              </article>
              {flagshipPlates.map((plate) => (
                <article key={plate.title} className="flagship-plate">
                  <div className="flagship-plate-media">
                    <Image
                      src={plate.media.src}
                      alt={plate.media.alt}
                      fill
                      sizes="(max-width: 1100px) 100vw, 30vw"
                      className="flagship-plate-image"
                    />
                  </div>
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
            <h2 className="section-title">Selected proof across BD, AI creative, and product strategy.</h2>
          </div>
          <p className="section-sidecopy">
            Each case is here because it proves something hireable: live operation, concept-to-build speed,
            AI image and video direction, research translation, or web3 service logic.
          </p>
        </motion.div>

        <div className="selected-grid">
          <SelectedCaseCard project={workCaseMap["andersson-bell"]} index={0} layout="feature" />
          <SelectedCaseCard project={workCaseMap["sfti-cmu"]} index={1} layout="compact" />
          <SelectedCaseCard project={workCaseMap["be-moon"]} index={2} layout="feature" />
          <SelectedCaseCard project={workCaseMap["ilysb"]} index={3} layout="compact" />
          <SelectedCaseCard project={workCaseMap["ariadne-mode-moment"]} index={4} layout="full" />
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
