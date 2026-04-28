import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { DetailMediaGallery } from "@/components/detail-media-gallery";
import { ProjectLinkRail } from "@/components/project-link-rail";
import type { Accent, PlaceholderMedia } from "@/data/portfolio";
import { workCaseMap, workCases } from "@/data/portfolio.supercent";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = workCaseMap[slug];

  if (!project) {
    return {
      title: "슈퍼센트 AI 애플리케이션 엔지니어 지원용 포트폴리오",
    };
  }

  return {
    title: `${project.title} / 슈퍼센트 AI 애플리케이션 엔지니어 지원용 포트폴리오`,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export default async function SupercentWorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = workCaseMap[slug];

  if (!project) {
    notFound();
  }

  const isCompactCase = project.detailDensity === "compact";
  const displayedFlowSteps = isCompactCase ? project.flowSteps?.slice(0, 4) : project.flowSteps;
  const leadMediaLayout = project.detailLeadLayout ?? "stack";
  const heroHighlightsPosition = project.detailHeroHighlightsPosition ?? "cover";
  const leadMediaCount =
    project.galleryColumns === 4
      ? Math.min(4, project.placeholderMedia.length)
      : Math.min(3, project.placeholderMedia.length);
  const leadMediaSection = project.detailLeadSection ?? {
    eyebrow: "대표 자료",
    title: "이 케이스를 가장 빠르게 읽히게 하는 핵심 자료",
    summary: "이 케이스를 가장 빠르게 읽히게 하는 자료만 먼저 배치했습니다.",
  };
  const heroHighlights =
    project.detailHeroHighlights?.length
      ? project.detailHeroHighlights
      : [
          {
            title: "개요",
            body: project.overview[0] ?? project.summary,
            accent: project.accent,
            items: project.overview.slice(1, 3),
          },
          {
            title: "주요 수행",
            body: project.whatIDid[0] ?? "",
            accent: "indigo" as const,
            items: project.whatIDid.slice(1, 3),
          },
          {
            title: "핵심 판단",
            body: project.keyDecisions[0] ?? "",
            accent: "aqua" as const,
            items: project.keyDecisions.slice(1, 3),
          },
        ].filter((item) => item.body);
  const leadMediaBaseItems =
    leadMediaLayout === "carousel"
      ? project.placeholderMedia
      : project.placeholderMedia.slice(0, leadMediaCount);
  const leadMediaItems =
    heroHighlightsPosition === "lead" && leadMediaBaseItems.length
      ? leadMediaBaseItems.map((item, index) =>
          index === 0
            ? {
                ...item,
                copyHighlights: heroHighlights,
              }
            : item,
        )
      : leadMediaBaseItems;
  const remainingMediaItems =
    leadMediaLayout === "carousel" ? [] : project.placeholderMedia.slice(leadMediaCount);
  const heroProof =
    project.detailHeroProof ??
    project.placeholderMedia.find((item) => Boolean(item.src || item.href)) ??
    (project.coverImage
      ? {
          label: "대표 자료",
          note: project.galleryIntro,
          src: project.coverImage.src,
          alt: project.coverImage.alt,
          fit: project.coverImage.fit,
        }
      : undefined);
  const hasEvidenceSlide = Boolean(
    leadMediaItems.length || remainingMediaItems.length || project.detailMediaSections?.length,
  );
  const hasStructuredAppendix = Boolean(
    !project.hideJudgmentSlide &&
      (project.problemSummary?.length ||
        project.solutionSummary?.length ||
        displayedFlowSteps?.length ||
        project.serviceStructure?.length ||
        project.iaGroups?.length ||
        project.screenGuide?.length ||
        project.coreJudgments?.length ||
        project.supplementalSections?.length),
  );
  const hasStatusInline = Boolean(!project.hideStatusSlide && project.currentStatus.length);
  const shouldShowAppendixSlide = Boolean(hasStructuredAppendix || hasStatusInline);

  return (
    <main className={`detail-shell bluegarage-shell detail-shell-${project.slug}`}>
      <div className="detail-orb detail-orb-aqua" />
      <div className="detail-orb detail-orb-indigo" />

      <header className="detail-frame topbar detail-topbar">
        <Link href="/supercent" className="brand-lockup">
          <span className="brand-dot" />
          <span>Supercent Submission</span>
        </Link>
        <nav className="topnav">
          <a href="#cover">개요</a>
          {hasEvidenceSlide ? <a href="#evidence">대표 자료</a> : null}
          {shouldShowAppendixSlide ? <a href="#appendix">프로세스</a> : null}
        </nav>
      </header>

      <section id="cover" className="detail-frame detail-slide detail-slide-cover">
        <div className="detail-slide-topline">
          <span className="detail-slide-kicker">
            {project.section} / {project.year}
          </span>
          <span className={`detail-slide-index ${accentText(project.accent)}`}>개요</span>
        </div>

        <div className="detail-mockup-hero">
          <div className="detail-mockup-copy">
            <p className={`eyebrow ${accentText(project.accent)}`}>{project.eyebrow}</p>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-oneliner">{project.oneLiner}</p>
            <p className="detail-summary-copy">{project.summary}</p>
            {project.externalLinks?.length ? (
              <ProjectLinkRail links={project.externalLinks} className="detail-project-links" />
            ) : null}
          </div>

          {heroProof ? (
            <aside className="detail-proof-card">
              <div className="detail-proof-visual-shell">
                {heroProof.href ? (
                  <a href={heroProof.href} target="_blank" rel="noreferrer" className="detail-proof-link-wrap">
                    {renderProofVisual(heroProof)}
                  </a>
                ) : (
                  renderProofVisual(heroProof)
                )}
              </div>
              <div className="detail-proof-caption">
                <strong>{heroProof.label}</strong>
                <span>{heroProof.note}</span>
                {heroProof.href ? (
                  <a href={heroProof.href} target="_blank" rel="noreferrer" className="detail-proof-link">
                    {heroProof.hrefLabel ?? "원문 보기"}
                  </a>
                ) : null}
              </div>
            </aside>
          ) : null}
        </div>

        {heroHighlightsPosition === "cover" && heroHighlights.length ? (
          <div className="detail-mockup-card-grid">
            {heroHighlights.map((card) => (
              <article key={card.title} className={`detail-mockup-card ${accentBar(card.accent ?? project.accent)}`}>
                <p className="detail-mockup-card-title">{card.title}</p>
                <p className="detail-mockup-card-body">{card.body}</p>
                {card.items?.length ? (
                  <ul className="detail-inline-list detail-inline-list-tight">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </section>

      {hasEvidenceSlide ? (
        <section id="evidence" className="detail-frame detail-slide detail-slide-summary">
          <div className="detail-slide-header">
            <div>
              <span className={`detail-slide-index ${accentText(project.accent)}`}>대표 자료</span>
            </div>
            {project.galleryIntro ? <p className="detail-slide-subcopy">{project.galleryIntro}</p> : null}
          </div>

          <div className="detail-slide-section-stack">
            {leadMediaItems.length ? (
              <section className="detail-slide-subpanel">
                <div>
                  <p className="detail-section-eyebrow">{leadMediaSection.eyebrow}</p>
                  {leadMediaSection.summary ? <p className="detail-gallery-intro">{leadMediaSection.summary}</p> : null}
                </div>

                <DetailMediaGallery
                  items={leadMediaItems}
                  columns={project.galleryColumns}
                  layout={leadMediaLayout}
                />
              </section>
            ) : null}

            {project.detailMediaSections?.map((section) => (
              <section key={section.title} className="detail-slide-subpanel">
                <div>
                  <p className="detail-section-eyebrow">{section.eyebrow}</p>
                  {section.summary ? <p className="detail-gallery-intro">{section.summary}</p> : null}
                </div>

                <DetailMediaGallery
                  items={section.items}
                  columns={section.columns}
                  layout={section.layout ?? (section.columns ? "grid" : "stack")}
                />
              </section>
            ))}

            {remainingMediaItems.length ? (
              <section className="detail-slide-subpanel">
                <div className="detail-gallery-header">
                  <div>
                    <p className="detail-section-eyebrow">추가 자료</p>
                  </div>
                </div>

                <DetailMediaGallery items={remainingMediaItems} columns={project.galleryColumns} layout="stack" />
              </section>
            ) : null}
          </div>
        </section>
      ) : null}

      {shouldShowAppendixSlide ? (
        <section id="appendix" className="detail-frame detail-slide detail-slide-appendix">
          <div className="detail-slide-header">
            <div>
              <span className={`detail-slide-index ${accentText(project.accent)}`}>프로세스</span>
            </div>
          </div>

          <div className="detail-appendix-grid">
            {project.problemSummary?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">Problem framing</p>
                <ul className="detail-inline-list">
                  {project.problemSummary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ) : null}

            {project.solutionSummary?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">Solution structure</p>
                <div className="detail-structured-list">
                  {project.solutionSummary.map((item) => (
                    <div key={item.title} className="detail-structured-item">
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {displayedFlowSteps?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">{project.flowHeading ?? "Flow"}</p>
                <div className="detail-flow-list">
                  {displayedFlowSteps.map((item) => (
                    <div key={`${item.step}-${item.title}`} className="detail-flow-item">
                      <span>{item.step}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.body}</p>
                        {item.meta ? <em>{item.meta}</em> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.serviceStructure?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">Structure</p>
                <div className="detail-structured-list">
                  {project.serviceStructure.map((item) => (
                    <div key={item.title} className="detail-structured-item">
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                      {item.items?.length ? (
                        <ul className="detail-inline-list detail-inline-list-tight">
                          {item.items.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.iaGroups?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">IA</p>
                <div className="detail-structured-list">
                  {project.iaGroups.map((group) => (
                    <div key={group.title} className="detail-structured-item">
                      <strong>{group.title}</strong>
                      <ul className="detail-inline-list detail-inline-list-tight">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.screenGuide?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">Screen guide</p>
                <div className="detail-structured-list">
                  {project.screenGuide.map((item) => (
                    <div key={item.title} className="detail-structured-item">
                      <strong>{item.title}</strong>
                      <p>{item.purpose}</p>
                      <p>{item.focus}</p>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.coreJudgments?.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">Core judgments</p>
                <div className="detail-structured-list">
                  {project.coreJudgments.map((item) => (
                    <div key={item.title} className="detail-structured-item">
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.supplementalSections?.map((section) => (
              <article key={section.title} className="detail-appendix-card">
                <p className="detail-appendix-title">{section.title}</p>
                {section.summary ? <p>{section.summary}</p> : null}
                <div className="detail-structured-list">
                  {section.cards.map((item) => (
                    <div key={item.title} className="detail-structured-item">
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            {project.currentStatus.length ? (
              <article className="detail-appendix-card">
                <p className="detail-appendix-title">Current status</p>
                <ul className="detail-inline-list">
                  {project.currentStatus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function renderProofVisual(item: PlaceholderMedia) {
  if (item.type === "video" && item.src) {
    return (
      <video
        className="detail-proof-media detail-proof-video"
        playsInline
        muted={item.muted ?? true}
        loop={item.loop ?? true}
        autoPlay={item.autoPlay ?? true}
        controls={item.showControls}
        poster={item.poster}
      >
        <source src={item.src} />
      </video>
    );
  }

  if (!item.src) {
    return null;
  }

  return (
    <Image
      src={item.src}
      alt={item.alt ?? item.label}
      fill
      sizes="(max-width: 1100px) 100vw, 40vw"
      className="detail-proof-media"
      style={{ objectFit: item.fit ?? "cover" }}
    />
  );
}

function accentBar(accent: Accent) {
  switch (accent) {
    case "aqua":
      return "detail-mockup-card-aqua";
    case "orange":
      return "detail-mockup-card-orange";
    case "indigo":
      return "detail-mockup-card-indigo";
  }
}

function accentText(accent: Accent) {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
}
