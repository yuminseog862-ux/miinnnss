"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ProjectLinkRail } from "@/components/project-link-rail";
import type { Accent, MediaFit, WorkCase } from "@/data/portfolio";
import {
  fitMethodContent,
  footerContent,
  heroContent,
  siteTitle,
  workCaseMap,
} from "@/data/portfolio.creative";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const defaultPreviewMedia = {
  src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
  alt: "AHEYA tiger zodiac visual used as the strongest public-facing entry image.",
  fit: "cover" as MediaFit,
};

export default function CreativePage() {
  const adsbCase = workCaseMap["andersson-bell"];
  const flagshipCase = workCaseMap["aheya"];
  const sftiCase = workCaseMap["sfti-cmu"];
  const personaCase = workCaseMap["persona-systems"];
  const heroTitleLines = heroContent.title.split("\n");
  const featuredProofs = [adsbCase, flagshipCase, sftiCase];
  const heroPosterMedia = defaultPreviewMedia;
  const personaSupportBody =
    "AI agent별 역할, 성격, 말투, 관계성을 내부적으로 설계하고 운영한 페르소나 구조 실험";
  const aheyaMotionMedia =
    flagshipCase.detailMediaSections
      ?.find((section) => section.eyebrow === "서비스 인상 보조")
      ?.items.find((item) => item.label.includes("Kumiho"));
  const aheyaTigerMedia = {
    label: "Tiger 공개 채널 실험",
    note: "Tiger 계열 캐릭터가 X 같은 빠른 스크롤 환경에서 어떤 첫인상 훅으로 읽히는지 확인한 실험입니다.",
    src: "/appendix/bluegarage/aheya/tiger_vid.MP4",
    alt: "AHEYA Tiger public-channel experiment.",
    type: "video" as const,
    poster: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
  };
  const aheyaPreviewMedia = [aheyaMotionMedia, aheyaTigerMedia].filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  );
  const personaShots = [
    {
      label: "K",
      src: "/appendix/bluegarage/aheya/k.webp",
      alt: "AHEYA K character image.",
      fit: "contain" as MediaFit,
    },
    {
      label: "Becca",
      src: "/appendix/bluegarage/aheya/becca.webp",
      alt: "AHEYA Becca character image.",
      fit: "contain" as MediaFit,
    },
    {
      label: "Aurora",
      src: "/appendix/bluegarage/aheya/aurora.webp",
      alt: "AHEYA Aurora character image.",
      fit: "contain" as MediaFit,
    },
  ];
  const personaMainShots = personaShots.slice(1);
  const sftiPreviewMedia =
    sftiCase.placeholderMedia.find((item) => item.src?.includes("sfti_4")) ?? sftiCase.placeholderMedia[0];

  return (
    <main className="cinema-shell bluegarage-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame">
        <header className="topbar">
          <Link href="/creative" className="brand-lockup">
            <span className="brand-dot" />
            <span>{siteTitle}</span>
          </Link>
          <nav className="topnav">
            <a href="#flagship">대표 작업</a>
            <a href="#selected">상세 작업</a>
            <a href="#experiments">보조 증거</a>
          </nav>
        </header>

        <div className="bluegarage-hero-poster">
          <motion.section {...fadeUp} className="hero-copy bluegarage-hero-copy">
            <p className="eyebrow text-aqua hero-eyebrow-tight">{heroContent.eyebrow}</p>
            <p className="hero-kicker">{heroContent.stageTitle}</p>
            <h1 className="hero-title">
              {heroTitleLines.map((line) => (
                <span key={line} className="hero-title-line">
                  {line}
                </span>
              ))}
            </h1>
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

            <div className="bluegarage-hero-proof-row">
              {heroContent.proofs.map((proof) => (
                <span key={proof} className="case-chip case-chip-soft">
                  {proof}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="bluegarage-poster-stage"
          >
            <div className="bluegarage-poster-media-shell">
              <div className="bluegarage-poster-media">
                <Image
                  src={heroPosterMedia.src}
                  alt={heroPosterMedia.alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 48vw"
                  className="bluegarage-poster-image"
                  style={{ objectFit: heroPosterMedia.fit }}
                  priority
                />
              </div>
              <div className="bluegarage-poster-overlay" />
            </div>
            <div className="bluegarage-poster-caption">
              <p className="eyebrow text-aqua">AHEYA / 공개 채널 실험</p>
              <p className="bluegarage-poster-caption-text">
                서비스 소개만으로는 반응을 얻기 어려운 상황에서, X 같은 스크롤 환경에서 세계관과 관계성이 먼저 읽히게 한 공개 채널 엔트리 이미지.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} className="page-frame fit-method-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-aqua">{fitMethodContent.eyebrow}</p>
            <h2 className="section-title">{fitMethodContent.title}</h2>
          </div>
        </div>

        <div className="fit-method-grid">
          {fitMethodContent.cards.map((item) => (
            <article key={item.title} className="fit-method-card" data-accent={item.accent}>
              <p className={`eyebrow ${accentTextClass(item.accent)}`}>{item.title}</p>
              <p className="fit-method-proof">{item.proof}</p>
              <p className="fit-method-body">{item.body}</p>
              <div className="case-chip-group fit-method-chip-group">
                {item.points.map((point) => (
                  <span key={point} className="case-chip case-chip-soft">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="selected" className="page-frame selected-frame bluegarage-proof-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">대표 증거 3개</p>
            <h2 className="section-title">Andersson Bell / AHEYA / SFTI-CMU</h2>
          </div>
        </div>

        <div className="bluegarage-proof-wall">
          {featuredProofs.map((project, index) => {
            const preview = resolvePreviewMedia(project);

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.52, delay: index * 0.08, ease: "easeOut" }}
                className="bluegarage-proof-card"
              >
                <Link href={`/creative/work/${project.slug}`} className="bluegarage-proof-link">
                  <div className="bluegarage-proof-media">
                    <Image
                      src={preview.src}
                      alt={preview.alt}
                      fill
                      sizes="(max-width: 1100px) 100vw, 33vw"
                      className="bluegarage-proof-image"
                      style={{ objectFit: preview.fit }}
                    />
                    <div className="bluegarage-proof-wash" />
                  </div>
                  <div className="bluegarage-proof-copy">
                    <div className="bluegarage-proof-topline">
                      <span className={`eyebrow ${accentTextClass(project.accent)}`}>{project.eyebrow}</span>
                      <span className="case-year">{project.year}</span>
                    </div>
                    <h3 className="bluegarage-proof-title">{project.title}</h3>
                    <p className="bluegarage-proof-oneliner">{project.oneLiner}</p>
                    <div className="case-chip-group">
                      {project.evidence.slice(0, 4).map((item) => (
                        <span key={item} className="case-chip case-chip-soft">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="bluegarage-proof-bottom">
                      <span>{project.status}</span>
                      <span className="inline-link">
                        상세 보기
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="flagship" className="page-frame flagship-frame">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="eyebrow text-aqua">대표 작업</p>
            <h2 className="section-title">ADSB / AHEYA / SFTI</h2>
          </div>
        </div>

        <div className="bluegarage-preview-stack">
          <article className="bluegarage-preview-row">
            <div className="bluegarage-preview-media">
              <video
                className="bluegarage-preview-video"
                playsInline
                muted
                loop
                autoPlay
                preload="metadata"
                poster={adsbCase.placeholderMedia[0]?.poster}
                controls
              >
                <source src={adsbCase.placeholderMedia[0]?.src} type="video/mp4" />
              </video>
            </div>
            <div className="bluegarage-preview-copy">
              <div className="bluegarage-preview-topline">
                <span className="eyebrow text-orange">{adsbCase.eyebrow}</span>
                <span className="case-year">{adsbCase.year}</span>
              </div>
              <h3 className="bluegarage-preview-title">{adsbCase.title}</h3>
              <p className="bluegarage-preview-summary">{adsbCase.oneLiner}</p>
              <div className="case-chip-group">
                {adsbCase.evidence.map((item) => (
                  <span key={item} className="case-chip case-chip-soft">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="bluegarage-preview-list">
                {adsbCase.currentStatus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {adsbCase.externalLinks?.length ? (
                <ProjectLinkRail links={adsbCase.externalLinks} className="bluegarage-preview-links" />
              ) : null}
              <Link href="/creative/work/andersson-bell" className="inline-link">
                상세 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="bluegarage-preview-row">
            <div className="bluegarage-preview-grid">
              {aheyaPreviewMedia.map((item) => (
                <div key={item.label} className="bluegarage-preview-grid-item">
                  {item.type === "video" && item.src ? (
                    <video
                      className="bluegarage-preview-video"
                      playsInline
                      muted
                      loop
                      autoPlay
                      preload="metadata"
                      poster={item.poster}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="bluegarage-preview-copy">
              <div className="bluegarage-preview-topline">
                <span className="eyebrow text-aqua">{flagshipCase.eyebrow}</span>
                <span className="case-year">{flagshipCase.year}</span>
              </div>
              <h3 className="bluegarage-preview-title">{flagshipCase.title}</h3>
              <p className="bluegarage-preview-summary">{flagshipCase.oneLiner}</p>
              <div className="case-chip-group">
                {flagshipCase.evidence.map((item) => (
                  <span key={item} className="case-chip case-chip-soft">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="bluegarage-preview-list">
                {flagshipCase.currentStatus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {flagshipCase.externalLinks?.length ? (
                <ProjectLinkRail links={flagshipCase.externalLinks} className="bluegarage-preview-links" />
              ) : null}
              <Link href="/creative/work/aheya" className="inline-link">
                상세 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="bluegarage-preview-row">
            <div className="bluegarage-preview-media bluegarage-preview-media-doc">
              <Image
                src={sftiPreviewMedia?.src ?? heroPosterMedia.src}
                alt={sftiPreviewMedia?.alt ?? sftiCase.title}
                fill
                sizes="(max-width: 1100px) 100vw, 52vw"
                className="bluegarage-preview-image"
                style={{ objectFit: sftiPreviewMedia?.fit ?? "contain" }}
              />
            </div>
            <div className="bluegarage-preview-copy">
              <div className="bluegarage-preview-topline">
                <span className="eyebrow text-aqua">{sftiCase.eyebrow}</span>
                <span className="case-year">{sftiCase.year}</span>
              </div>
              <h3 className="bluegarage-preview-title">{sftiCase.title}</h3>
              <p className="bluegarage-preview-summary">{sftiCase.oneLiner}</p>
              <div className="case-chip-group">
                {sftiCase.evidence.map((item) => (
                  <span key={item} className="case-chip case-chip-soft">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="bluegarage-preview-list">
                {sftiCase.currentStatus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/creative/work/sfti-cmu" className="inline-link">
                상세 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="experiments" className="page-frame practice-frame">
        <div className="bluegarage-support-grid">
          <div className="practice-intro">
            <p className="eyebrow text-indigo">보조 증거</p>
            <h2 className="section-title">{personaCase.title}</h2>
            <p className="practice-summary">{personaCase.summary}</p>
            <div className="case-chip-group">
              {personaCase.evidence.map((item) => (
                <span key={item} className="case-chip case-chip-soft">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/creative/work/persona-systems"
            className="bluegarage-support-link bluegarage-support-link-text-only"
          >
            <div className="bluegarage-support-copy">
              <p className="eyebrow text-indigo">보조 케이스</p>
              <h3 className="bluegarage-support-title">{personaCase.title}</h3>
              <p className="bluegarage-support-body">{personaSupportBody}</p>
              <span className="inline-link">
                상세 보기
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>

        <div
          className={[
            "bluegarage-support-shot-grid",
            personaMainShots.length === 2 ? "bluegarage-support-shot-grid-two" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {personaMainShots.map((item, index) => (
            <article key={item.label} className="bluegarage-support-shot">
              <div className="bluegarage-support-shot-media">
                <Image
                  src={item.src}
                  alt={item.alt ?? item.label}
                  fill
                  sizes="(max-width: 1100px) 100vw, 33vw"
                  className="bluegarage-support-shot-image"
                  style={{ objectFit: item.fit ?? "cover" }}
                />
              </div>
              <div className="bluegarage-support-shot-copy">
                <p className="eyebrow text-indigo">OpenClaw 0{index + 1}</p>
                <p className="bluegarage-support-shot-title">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <footer className="page-frame footer-frame">
        <p>{footerContent.line}</p>
        {footerContent.meta ? <span>{footerContent.meta}</span> : null}
      </footer>
    </main>
  );
}

function accentTextClass(accent: Accent) {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}

function resolvePreviewMedia(project: WorkCase) {
  if (project.coverImage) {
    return {
      src: project.coverImage.src,
      alt: project.coverImage.alt,
      fit: project.coverImage.fit ?? "cover",
    } satisfies { src: string; alt: string; fit: MediaFit };
  }

  const fallbackItem = project.placeholderMedia.find((item) => item.type !== "video" && item.src);

  if (fallbackItem?.src) {
    return {
      src: fallbackItem.src,
      alt: fallbackItem.alt ?? project.title,
      fit: fallbackItem.fit ?? "cover",
    } satisfies { src: string; alt: string; fit: MediaFit };
  }

  return {
    src: defaultPreviewMedia.src,
    alt: defaultPreviewMedia.alt,
    fit: defaultPreviewMedia.fit,
  } satisfies { src: string; alt: string; fit: MediaFit };
}
