"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import {
  aiMediaCases,
  flagshipIntro,
  flagshipShowcaseCards,
  footerContent,
  heroContent,
  heroTitleLines,
  operatingLoopContent,
  researchCases,
  recruiterQuickReadContent,
  selectedCases,
  siteTitle,
  workCaseMap,
} from "@/data/portfolio.tainai";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function TainaiPage() {
  const flagshipCase = workCaseMap["aheya"];
  const heroPoster = flagshipCase.coverImage ?? {
    src: "/aheya/home-hero.webp",
    alt: "AHEYA homepage hero screenshot.",
    fit: "contain" as const,
  };
  const flagshipPanels =
    flagshipCase.detailHeroHighlights?.slice(0, 4).map((item) => ({
      title: item.title,
      body: item.body,
      items: item.items ?? [],
      accent: item.accent ?? flagshipCase.accent,
    })) ?? [];

  return (
    <main className="cinema-shell bluegarage-shell tainai-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame tainai-board">
        <header className="topbar tainai-board-header">
          <Link href="/tainai" className="brand-lockup">
            <span className="brand-dot" />
            <span>{siteTitle}</span>
          </Link>
          <nav className="topnav tainai-board-nav">
            <a href="#flagship">AHEYA</a>
            <a href="#selected">핵심 사례</a>
            <a href="#archive">AI 작업물</a>
          </nav>
        </header>

        <motion.section {...fadeUp} className="tainai-board-section tainai-board-section-hero">
          <div className="tainai-guide-hero">
            <div className="tainai-guide-hero-copy">
              <p className="eyebrow text-aqua">{heroContent.eyebrow}</p>
              <p className="hero-kicker tainai-guide-hero-kicker">{heroContent.stageTitle}</p>
              <h1 className="hero-title tainai-guide-hero-title">
                {heroTitleLines.map((line) => (
                  <span key={line} className="hero-title-line">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-summary tainai-guide-hero-summary">{heroContent.summary}</p>
              <div className="hero-ctas tainai-guide-hero-ctas">
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
            </div>

            <div className="tainai-guide-hero-visual">
              <a
                href="https://aheyabaraya.xyz"
                target="_blank"
                rel="noreferrer"
                className="tainai-guide-hero-media-card tainai-guide-hero-media-link"
                aria-label="Open AHEYA live site"
              >
                <div className="tainai-guide-hero-media">
                  <Image
                    src={heroPoster.src}
                    alt={heroPoster.alt}
                    fill
                    sizes="(max-width: 1100px) 100vw, 52vw"
                    className="tainai-guide-image"
                    style={{ objectFit: heroPoster.fit ?? "cover" }}
                    priority
                  />
                </div>
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="tainai-board-section tainai-board-section-quickread">
          <div className="tainai-section-lead">
            <p className="eyebrow text-aqua">{recruiterQuickReadContent.eyebrow}</p>
            <h2 className="section-title tainai-guide-section-title">{recruiterQuickReadContent.title}</h2>
            <div className="tainai-quickread-tools">
              <span className="tainai-guide-tool-label">{operatingLoopContent.eyebrow}</span>
              <div className="tainai-guide-tool-row">
                {operatingLoopContent.chips.map((tool) => (
                  <span key={tool} className="tainai-guide-tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="tainai-guide-card-grid tainai-guide-card-grid-three">
            {recruiterQuickReadContent.cards.map((item) => (
              <article key={item.label} className="tainai-guide-text-card" data-accent={item.accent}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
                <div className="case-chip-group">
                  {resolveQuickReadChips(item.label).map((chip) => (
                    <span key={chip} className="case-chip case-chip-soft">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="flagship" className="tainai-board-section tainai-board-section-flagship">
          <div className="tainai-section-lead">
            <p className="eyebrow text-aqua">{flagshipIntro.eyebrow}</p>
            <h2 className="section-title tainai-guide-flagship-title">{flagshipIntro.title}</h2>
            <p className="tainai-guide-section-date">{flagshipCase.year}</p>
            <p className="section-oneliner tainai-guide-section-oneliner">{flagshipIntro.oneLiner}</p>
            {"summaryPoints" in flagshipIntro && Array.isArray(flagshipIntro.summaryPoints) ? (
              <ul className="tainai-guide-summary-list">
                {flagshipIntro.summaryPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="section-sidecopy tainai-guide-section-copy">{flagshipIntro.summary}</p>
            )}
            <Link href={flagshipIntro.ctaHref} className="inline-link tainai-guide-link">
              {flagshipIntro.ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="tainai-flagship-rail">
            <div className="tainai-guide-showcase-grid">
              {flagshipShowcaseCards.map((item) => (
                <article key={item.label} className="tainai-guide-showcase-card">
                  <div className="tainai-guide-showcase-media">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1100px) 100vw, 26vw"
                      className="tainai-guide-image"
                      style={{ objectFit: item.fit ?? "cover" }}
                    />
                  </div>
                  <div className="tainai-guide-showcase-copy">
                    <p className={`eyebrow ${accentTextClass(resolveShowcaseAccent(item.label))}`}>{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="tainai-guide-inline-grid">
              {flagshipPanels.map((item) => (
                <article key={item.title} className="tainai-guide-inline-card" data-accent={item.accent}>
                  <span>{item.title}</span>
                  <p className="tainai-guide-inline-body">{item.body}</p>
                  <div className="tainai-guide-inline-list">
                    {item.items.map((entry) => (
                      <div key={entry} className="tainai-guide-inline-item">
                        {entry}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="selected" className="tainai-board-section tainai-board-section-selected">
          <div className="tainai-section-lead">
            <p className="eyebrow text-aqua">핵심 사례</p>
            <h2 className="section-title tainai-guide-section-title">핵심 사례</h2>
          </div>

          <div className="tainai-guide-case-grid">
            {selectedCases.map((project) => {
              const preview = resolvePreviewMedia(project);

              return (
                <article key={project.slug} className="tainai-guide-case-card">
                  <Link href={`/tainai/work/${project.slug}`} className="tainai-guide-case-link">
                    <div className="tainai-guide-case-media">
                      <Image
                        src={preview.src}
                        alt={preview.alt}
                        fill
                        sizes="(max-width: 1100px) 100vw, 24vw"
                        className="tainai-guide-image"
                        style={{ objectFit: preview.fit }}
                      />
                    </div>
                    <div className="tainai-guide-case-copy">
                      <p className={`eyebrow ${accentTextClass(project.accent)}`}>{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                      <span className="tainai-guide-card-date">{project.year}</span>
                      <p>{project.oneLiner}</p>
                      <span className="inline-link">
                        자세히 보기
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="archive" className="tainai-board-section tainai-board-section-archive">
          <div className="tainai-section-lead">
            <p className="eyebrow text-aqua">AI 작업물 / 외부 증빙</p>
            <h2 className="section-title tainai-guide-section-title">AI 이미지·영상</h2>
          </div>

          <div
            className={[
              "tainai-guide-archive-grid",
              aiMediaCases.length === 1 ? "tainai-guide-archive-grid-single" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {aiMediaCases.map((project) => {
              const preview = resolvePreviewMedia(project);

              return (
                <article key={project.slug} className="tainai-guide-archive-card">
                  <Link href={`/tainai/work/${project.slug}`} className="tainai-guide-archive-link">
                    <div className="tainai-guide-archive-copy">
                      <p className={`eyebrow ${accentTextClass(project.accent)}`}>{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                      <span className="tainai-guide-card-date">{project.year}</span>
                      <p>{project.oneLiner}</p>
                      <span className="inline-link">
                        자세히 보기
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="tainai-guide-archive-media">
                      <Image
                        src={preview.src}
                        alt={preview.alt}
                        fill
                        sizes="(max-width: 1100px) 100vw, 16vw"
                        className="tainai-guide-image"
                        style={{ objectFit: preview.fit }}
                      />
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="tainai-section-lead tainai-section-lead-subgroup">
            <p className="eyebrow text-aqua">AI 작업물 / 외부 증빙</p>
            <h2 className="section-title tainai-guide-section-title">영어 활용 / 연구</h2>
          </div>

          <div
            className={[
              "tainai-guide-archive-grid",
              researchCases.length === 1 ? "tainai-guide-archive-grid-single" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {researchCases.map((project) => {
              const preview = resolvePreviewMedia(project);

              return (
                <article key={project.slug} className="tainai-guide-archive-card">
                  <Link href={`/tainai/work/${project.slug}`} className="tainai-guide-archive-link">
                    <div className="tainai-guide-archive-copy">
                      <p className={`eyebrow ${accentTextClass(project.accent)}`}>{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                      <span className="tainai-guide-card-date">{project.year}</span>
                      <p>{project.oneLiner}</p>
                      <span className="inline-link">
                        자세히 보기
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="tainai-guide-archive-media">
                      <Image
                        src={preview.src}
                        alt={preview.alt}
                        fill
                        sizes="(max-width: 1100px) 100vw, 16vw"
                        className="tainai-guide-image"
                        style={{ objectFit: preview.fit }}
                      />
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </motion.section>
      </section>

      <footer className="page-frame footer-frame">
        <p>{footerContent.line}</p>
        <span>{footerContent.meta}</span>
      </footer>
    </main>
  );
}

function accentTextClass(accent: "aqua" | "orange" | "indigo") {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}

function resolveQuickReadChips(label: string) {
  switch (label) {
    case "일하는 방식":
      return ["문제 정의", "MVP", "테스트", "결정"];
    case "문제 구조화":
      return ["문제 구조화", "기능 설계", "흐름 설계"];
    case "반응 기반 판단":
      return ["반응 확인", "구조 변경", "중단 판단"];
    default:
      return [];
  }
}

function resolveShowcaseAccent(label: string) {
  if (label.includes("Trust API")) {
    return "indigo";
  }

  if (label.includes("Creator") || label.includes("Backer") || label.includes("흐름")) {
    return "orange";
  }

  return "aqua";
}

function resolvePreviewMedia(
  project:
    | (typeof selectedCases)[number]
    | (typeof aiMediaCases)[number]
    | (typeof researchCases)[number],
) {
  if (project.coverImage) {
    return {
      src: project.coverImage.src,
      alt: project.coverImage.alt,
      fit: project.coverImage.fit ?? "cover",
    } as const;
  }

  const fallbackItem = project.placeholderMedia.find((item) => item.type !== "video" && item.src);

  if (fallbackItem?.src) {
    return {
      src: fallbackItem.src,
      alt: fallbackItem.alt ?? project.title,
      fit: fallbackItem.fit ?? "cover",
    } as const;
  }

  return {
    src: "/aheya/home-hero.webp",
    alt: "AHEYA homepage hero screenshot.",
    fit: "cover",
  } as const;
}
