import Image from "next/image";
import { ArrowUpRight, PanelTop, Sparkles } from "lucide-react";

import type { DeckContent, Slide } from "@/lib/portfolio-deck/types";

import styles from "./portfolio-deck.module.css";

export function SlideMain({ slide, deck }: { slide: Slide; deck: DeckContent }) {
  if (slide.variant === "cover") {
    return (
      <section className={styles.coverGrid}>
        <div className={styles.focusPanel}>
          <div className={styles.iconRow}>
            <Sparkles />
            <span>Core Focus</span>
          </div>
          <div className={styles.focusTags}>
            {deck.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <div className={styles.casePair}>
            {deck.coverCases.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.label}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <MediaSlot slide={slide} />
      </section>
    );
  }

  if (slide.variant === "process") {
    return (
      <section className={styles.processGrid}>
        <div className={styles.processRail}>
          {(slide.process ?? slide.include).map((step, index) => (
            <div key={`${slide.no}-${step}`} className={styles.processStep}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <SlotPanel slide={slide} />
      </section>
    );
  }

  if (slide.variant === "matrix" && slide.table) {
    return (
      <section className={`${styles.matrixGrid} ${slide.media ? styles.matrixWithMedia : styles.matrixOnly}`}>
        <DataTable slide={slide} />
        {slide.media ? <MediaSlot slide={slide} /> : null}
      </section>
    );
  }

  if (slide.variant === "evidence") {
    return (
      <section className={styles.evidenceGrid}>
        <SlotPanel slide={slide} />
        <MediaSlot slide={slide} />
      </section>
    );
  }

  return (
    <section className={styles.splitGrid}>
      <InfoPanel items={slide.include} />
      <SlotPanel slide={slide} />
    </section>
  );
}

function DataTable({ slide }: { slide: Slide }) {
  if (!slide.table) {
    return null;
  }

  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {slide.table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slide.table.rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoPanel({ items }: { items: string[] }) {
  return (
    <div className={styles.panel}>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SlotPanel({
  slide,
  compact = false,
}: {
  slide: Slide;
  compact?: boolean;
}) {
  return (
    <div className={`${styles.panel} ${compact ? styles.compactPanel : ""}`}>
      <div className={styles.slotGrid}>
        {slide.slots.map((slot) => (
          <div key={`${slide.no}-${slot}`} className={styles.slot}>
            <PanelTop size={15} />
            <span>{slot}</span>
          </div>
        ))}
      </div>
      {slide.links?.length ? (
        <div className={styles.linkStack}>
          {slide.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={styles.linkCard}>
              <span>
                <strong>{link.label}</strong>
                {link.description}
              </span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MediaSlot({ slide }: { slide: Slide }) {
  if (!slide.media) {
    return (
      <div className={styles.mediaSlot}>
        <div className={styles.mediaPlaceholder}>
          <Sparkles size={26} />
          <span>Evidence / Screenshot / Asset</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mediaSlot}>
      <Image
        src={slide.media.src}
        alt={slide.media.alt}
        fill
        sizes="(max-width: 1000px) 100vw, 46vw"
        {...(slide.no === 1 ? { priority: true } : { loading: "eager" as const })}
      />
      <span>{slide.media.label}</span>
    </div>
  );
}
