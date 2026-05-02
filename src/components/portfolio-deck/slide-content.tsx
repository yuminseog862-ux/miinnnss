import Image from "next/image";
import { ArrowUpRight, PanelTop, Sparkles } from "lucide-react";

import type { DeckContent, Slide } from "@/lib/portfolio-deck/types";

import styles from "./portfolio-deck.module.css";

export function SlideMain({ slide, deck }: { slide: Slide; deck: DeckContent }) {
  if (slide.custom === "aheyaTimeline") {
    return <AheyaTimeline slide={slide} />;
  }

  if (slide.custom === "aheyaResearchProblems") {
    return <AheyaResearchProblems slide={slide} />;
  }

  if (slide.custom === "aheyaProblemBridge") {
    return <AheyaProblemBridge slide={slide} />;
  }

  if (slide.custom === "aheyaCoreRail") {
    return <AheyaCoreRail slide={slide} />;
  }

  if (slide.custom === "aheyaKpiBoard") {
    return <AheyaKpiBoard slide={slide} />;
  }

  if (slide.custom === "aheyaXPostGrid") {
    return <AheyaProofGrid slide={slide} mode="x" />;
  }

  if (slide.custom === "aheyaOutreachGrid") {
    return <AheyaProofGrid slide={slide} mode="outreach" />;
  }

  if (slide.custom === "aheyaContentAssetGrid") {
    return <AheyaProofGrid slide={slide} mode="asset" />;
  }

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

function AheyaTimeline({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.timelineCanvas}>
      {rows.map((row, index) => (
        <article key={`${slide.no}-${row[0]}`} className={styles.timelineCard}>
          <span className={styles.timelineStep}>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.timelineDate}>{row[0]}</span>
          <strong>{row[1]}</strong>
          <p>{row[2]}</p>
        </article>
      ))}
    </section>
  );
}

function AheyaResearchProblems({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const problemRows = rows.slice(0, 2);
  const bridge = rows[2];

  return (
    <section className={styles.researchCanvas}>
      <div className={styles.researchProblemPair}>
        {problemRows.map((row) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.researchProblemCard}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
      {bridge ? (
        <div className={styles.researchBridge}>
          <span>{bridge[0]}</span>
          <strong>{bridge[1]}</strong>
          <p>{bridge[2]}</p>
        </div>
      ) : null}
    </section>
  );
}

function AheyaProblemBridge({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const web3 = rows[0];
  const builder = rows[1];
  const bridge = rows[2];

  return (
    <section className={styles.problemBridgeCanvas}>
      {web3 ? (
        <article className={styles.problemSideCard}>
          <span>{web3[0]}</span>
          <strong>{web3[1]}</strong>
          <p>{web3[2]}</p>
        </article>
      ) : null}
      {bridge ? (
        <article className={styles.problemCenterRail}>
          <span>{bridge[0]}</span>
          <strong>{bridge[1]}</strong>
          <p>{bridge[2]}</p>
        </article>
      ) : null}
      {builder ? (
        <article className={styles.problemSideCard}>
          <span>{builder[0]}</span>
          <strong>{builder[1]}</strong>
          <p>{builder[2]}</p>
        </article>
      ) : null}
    </section>
  );
}

function AheyaCoreRail({ slide }: { slide: Slide }) {
  const steps = slide.process ?? slide.include;

  return (
    <section className={styles.coreRailCanvas}>
      <div className={styles.coreRailFlow}>
        {steps.map((step, index) => (
          <article key={`${slide.no}-${step}`} className={styles.coreRailNode}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 ? <i aria-hidden="true" /> : null}
          </article>
        ))}
      </div>
      <div className={styles.coreRailBoundaryGrid}>
        {slide.slots.map((slot) => (
          <div key={`${slide.no}-${slot}`} className={styles.coreRailBoundary}>
            {slot}
          </div>
        ))}
      </div>
    </section>
  );
}

function AheyaKpiBoard({ slide }: { slide: Slide }) {
  const steps = slide.process ?? [];
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.kpiBoardCanvas}>
      <div className={styles.kpiRail}>
        {steps.map((step, index) => (
          <article key={`${slide.no}-${step}`} className={styles.kpiRailStep}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </article>
        ))}
      </div>
      <div className={styles.kpiBoardGrid}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.kpiMetricCard}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
            <em>{row[3]}</em>
          </article>
        ))}
      </div>
      <div className={styles.kpiBoundary}>
        {slide.slots.map((slot) => (
          <span key={`${slide.no}-${slot}`}>{slot}</span>
        ))}
      </div>
    </section>
  );
}

function AheyaProofGrid({ slide, mode }: { slide: Slide; mode: "x" | "outreach" | "asset" }) {
  const gallery = slide.gallery ?? [];

  return (
    <section className={`${styles.proofGridCanvas} ${styles[`proofGrid${capitalize(mode)}`]}`}>
      <div className={styles.proofGallery}>
        {gallery.map((item) => {
          const body = (
            <>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1000px) 100vw, 29vw" />
              <span>{item.label}</span>
              {item.caption ? <p>{item.caption}</p> : null}
            </>
          );

          return item.href ? (
            <a key={item.src} href={item.href} target="_blank" rel="noreferrer" className={styles.proofCard}>
              {body}
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <article key={item.src} className={styles.proofCard}>
              {body}
            </article>
          );
        })}
      </div>
      <div className={styles.proofExplanationGrid}>
        {slide.slots.map((slot) => (
          <article key={`${slide.no}-${slot}`}>
            <span>{slot.split(":")[0]}</span>
            <p>{slot.includes(":") ? slot.slice(slot.indexOf(":") + 1).trim() : slot}</p>
          </article>
        ))}
      </div>
      {slide.links?.length ? (
        <div className={styles.proofLinkRail}>
          {slide.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
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
