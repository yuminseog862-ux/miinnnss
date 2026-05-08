import Image from "next/image";

import type { Accent, DeckContent, Slide, SlideSection, SlideVariant } from "@/lib/portfolio-deck/types";
import { paddedSlideNo } from "@/lib/portfolio-deck/types";

import { moodAsset, moodForSlide, type MoodKey } from "./mood";
import { SlideMain } from "./slide-content";
import { toSubtitleFragment } from "./subtitle";
import styles from "./portfolio-deck.module.css";

type PortfolioDeckTheme = "classic" | "reference";

const accentClass: Record<Accent, string> = {
  aqua: styles.accentAqua,
  amber: styles.accentAmber,
  violet: styles.accentViolet,
  cyan: styles.accentCyan,
  danger: styles.accentDanger,
};

const variantClass: Record<SlideVariant, string> = {
  cover: "",
  toc: "",
  split: "",
  process: "",
  matrix: "",
  evidence: "",
};

const moodClass: Record<MoodKey, string> = {
  general: styles.moodGeneral,
  abLuna: styles.moodAbLuna,
  content: styles.moodContent,
  document: styles.moodDocument,
  strategy: styles.moodStrategy,
  gtm: styles.moodGtm,
  adsb: styles.moodAdsb,
  material: styles.moodMaterial,
};

const projectClass: Partial<Record<SlideSection, string>> = {
  AHEYA: styles.projectAheya,
  ADSB: styles.projectAdsb,
  "AB-Luna": styles.projectAbluna,
  SFTI: styles.projectSfti,
};

export function DeckSlide({ slide, deck, theme }: { slide: Slide; deck: DeckContent; theme: PortfolioDeckTheme }) {
  const slideNo = paddedSlideNo(slide.no);
  const mood = moodForSlide(slide);
  const isReference = theme === "reference";

  return (
    <article
      id={`slide-${slideNo}`}
      className={`${styles.slide} ${variantClass[slide.variant]} ${accentClass[slide.accent]} ${
        projectClass[slide.section] ?? ""
      } ${
        isReference ? `${styles.referenceSlide} ${moodClass[mood]}` : ""
      }`}
    >
      {isReference ? (
        <Image
          className={styles.moodBackground}
          src={moodAsset[mood]}
          alt=""
          fill
          sizes="1600px"
          priority={slide.no <= 2}
          aria-hidden="true"
        />
      ) : null}
      <div className={styles.slideChrome}>
        <div className={styles.slideMeta}>
          <span>{slideNo}</span>
          <strong>{slide.section}</strong>
          <em>{slide.label}</em>
        </div>
        <div className={styles.slideRule} />
      </div>

      <div className={styles.slideBody}>
        <section className={styles.slideLead}>
          <p className={styles.kicker}>{slide.label}</p>
          <h2>{slide.title}</h2>
          {slide.claim.trim() ? <p className={styles.claim}>{toSubtitleFragment(slide.claim)}</p> : null}
        </section>

        <SlideMain slide={slide} deck={deck} />
      </div>

      <footer className={styles.slideFooter}>
        <span>{deck.footerNote}</span>
        <span>{slide.section}</span>
      </footer>
    </article>
  );
}
