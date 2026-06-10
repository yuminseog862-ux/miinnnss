"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { DeckContent } from "@/lib/portfolio-deck/types";

import { DeckSlide } from "./deck-slide";
import styles from "./portfolio-deck.module.css";

type PortfolioDeckTheme = "classic" | "reference";

export function PortfolioDeck({ deck, theme = "classic" }: { deck: DeckContent; theme?: PortfolioDeckTheme }) {
  const isReference = theme === "reference";

  return (
    <main className={`${styles.deckPage} ${isReference ? styles.referenceDeck : ""}`}>
      <header className={styles.toolbar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark} />
          {deck.navTitle}
        </Link>

        <nav className={styles.sectionNav} aria-label="Deck sections">
          {deck.sectionMeta.map((section) => (
            <a key={section.label} href={section.href}>
              <span>{section.range}</span>
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      {deck.hideIntro ? null : (
        <>
          <section className={styles.deckIntro}>
            <div>
              <p className={styles.kicker}>{deck.introKicker}</p>
              <h1>{deck.introTitle}</h1>
            </div>
            <p>{deck.introBody}</p>
          </section>

          <section className={styles.overviewGrid} aria-label="Deck outline overview">
            {deck.sectionMeta.map((section) => (
              <a key={section.label} href={section.href} className={styles.overviewCard}>
                <span>{section.range}</span>
                <strong>{section.title}</strong>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </section>
        </>
      )}

      <section className={styles.slideStack} aria-label="Slides">
        {deck.slides.map((slide) => (
          <DeckSlide key={slide.no} slide={slide} deck={deck} theme={theme} />
        ))}
      </section>
    </main>
  );
}
