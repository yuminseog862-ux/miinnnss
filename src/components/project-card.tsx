"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { WorkCase } from "@/data/portfolio";

type SelectedCaseCardProps = {
  project: WorkCase;
  index: number;
  layout: "feature" | "stack" | "compact" | "full";
};

type ArchiveCaseCardProps = {
  project: WorkCase;
  index: number;
};

const layoutClassMap = {
  feature: "lg:col-span-7 lg:min-h-[31rem]",
  stack: "lg:col-span-5 lg:min-h-[31rem]",
  compact: "lg:col-span-5",
  full: "lg:col-span-12 lg:min-h-[20rem]",
} as const;

export function SelectedCaseCard({ project, index, layout }: SelectedCaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`selected-card ${layoutClassMap[layout]}`}
    >
      {project.coverImage ? (
        <div className="selected-card-media">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            sizes={layout === "full" ? "100vw" : "(max-width: 1100px) 100vw, 50vw"}
            className="selected-card-image"
            style={{ objectFit: project.coverImage.fit ?? "cover" }}
          />
          <div className="selected-card-media-wash" />
        </div>
      ) : null}
      <div className="selected-card-noise" />
      <div className="selected-card-topline">
        <span className={`eyebrow ${accentTextClass(project.accent)}`}>{project.eyebrow}</span>
        <span className="case-year">{project.year}</span>
      </div>

      <div className="selected-card-copy">
        <h3 className="selected-card-title">{project.title}</h3>
        <p className="selected-card-oneliner">{project.oneLiner}</p>
      </div>

      <div className="selected-card-meta">
        <div className="case-chip-group">
          {project.roles.map((item) => (
            <span key={item} className="case-chip">
              {item}
            </span>
          ))}
        </div>
        <div className="case-chip-group">
          {project.evidence.map((item) => (
            <span key={item} className="case-chip case-chip-soft">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="selected-card-bottom">
        <span>{project.status}</span>
        <Link href={`/work/${project.slug}`} className="inline-link">
          View case
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

export function ArchiveCaseCard({ project, index }: ArchiveCaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: "easeOut" }}
      className="archive-card"
    >
      <div className="archive-card-header">
        <span className={`eyebrow ${accentTextClass(project.accent)}`}>{project.eyebrow}</span>
        <span className="archive-card-status">{project.status}</span>
      </div>
      <h3 className="archive-card-title">{project.title}</h3>
      <p className="archive-card-summary">{project.oneLiner}</p>

      <div className="archive-card-column">
        <p className="archive-card-label">What exists now</p>
        <p className="archive-card-text">{project.whatExists[0]}</p>
      </div>

      <div className="archive-card-column">
        <p className="archive-card-label">What will be added</p>
        <div className="case-chip-group">
          {project.placeholderMedia.map((item) => (
            <span key={item.label} className="case-chip archive-chip">
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <Link href={`/work/${project.slug}`} className="inline-link archive-link">
        Open archive case
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}

function accentTextClass(accent: WorkCase["accent"]) {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}
