"use client";

import { useState } from "react";
import styles from "./portfolio-hub.module.css";

type ExpandableMediaFigureProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  showCaption?: boolean;
};

export function ExpandableMediaFigure({
  src,
  alt,
  label,
  className = styles.caseMedia,
  showCaption = true,
}: ExpandableMediaFigureProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          className={styles.expandableMediaButton}
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          aria-label={expanded ? `${label} 이미지 축소` : `${label} 이미지 확대`}
        >
          <img src={src} alt={alt} />
        </button>
        {showCaption ? <figcaption>{label}</figcaption> : null}
      </figure>
      {expanded ? (
        <button type="button" className={styles.mediaLightbox} onClick={() => setExpanded(false)} aria-label={`${label} 이미지 닫기`}>
          <img src={src} alt={alt} />
          <span>Click image to close</span>
        </button>
      ) : null}
    </>
  );
}
