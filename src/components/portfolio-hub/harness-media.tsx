"use client";

import { useState } from "react";
import styles from "./portfolio-hub.module.css";

type HarnessMediaMode = "workbench" | "capture";

const harnessMedia = {
  workbench: {
    label: "Core workbench",
    caption: "ONE MOVE · Front Planning workbench",
    meta: "HARNESS CORE",
  },
  capture: {
    label: "Edit / QA capture",
    caption: "프레임 분석과 타임라인 검수 기록",
    meta: "17.1s",
  },
} as const;

export function HarnessMediaFigure() {
  const [mode, setMode] = useState<HarnessMediaMode>("workbench");
  const activeMedia = harnessMedia[mode];

  return (
    <figure className={`${styles.caseMedia} ${styles.harnessMedia}`}>
      <div className={styles.harnessMediaSwitch} aria-label="Harness media view">
        {(Object.keys(harnessMedia) as HarnessMediaMode[]).map((mediaMode, index) => {
          const media = harnessMedia[mediaMode];
          const isActive = mode === mediaMode;

          return (
            <button
              key={mediaMode}
              type="button"
              className={styles.harnessMediaToggle}
              onClick={() => setMode(mediaMode)}
              aria-pressed={isActive}
              aria-controls="harness-media-stage"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {media.label}
            </button>
          );
        })}
      </div>

      <div className={styles.harnessMediaStage} id="harness-media-stage">
        {mode === "workbench" ? (
          <img
            src="/ai-exploration/workbench/one-move-front-planning-workbench-clean-2026-07-29.png"
            alt="ONE MOVE Front Planning workbench showing workflow position, reference selection, sequence rail, and agent terminals"
          />
        ) : (
          <video
            src="/loom-deck/media/harness-process-capture-full-cut.mp4"
            aria-label="프레임 분석과 타임라인 검수 과정 화면 녹화"
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
          />
        )}
      </div>

      <figcaption aria-live="polite">
        <span>{activeMedia.caption}</span>
        <span className={styles.harnessMediaMeta}>{activeMedia.meta}</span>
      </figcaption>
    </figure>
  );
}
