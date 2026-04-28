import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { DetailMediaGallery } from "@/components/detail-media-gallery";
import { ProjectLinkRail } from "@/components/project-link-rail";
import type { Accent, PlaceholderMedia } from "@/data/portfolio";
import { siteTitle, workCaseMap, workCases } from "@/data/portfolio.creative";

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
      title: "Creative Portfolio",
    };
  }

  return {
    title: `${project.title} / Creative Portfolio`,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return [...workCases.map((item) => ({ slug: item.slug })), { slug: "adsb" }];
}

export default async function CreativeWorkDetailPage({ params }: WorkPageProps) {
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
    eyebrow: "대표 이미지 / 영상",
    title: "이 케이스를 가장 빠르게 읽히게 하는 핵심 자료",
    summary: "이 케이스를 가장 빠르게 읽히게 하는 핵심 자료만 먼저 배치했습니다.",
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
  const hasEvidenceSlide = Boolean(leadMediaItems.length || remainingMediaItems.length || project.detailMediaSections?.length);
  const hasProcessSlide = Boolean(
    project.problemSummary?.length ||
      project.solutionSummary?.length ||
      displayedFlowSteps?.length ||
      project.serviceStructure?.length ||
      project.iaGroups?.length ||
      project.screenGuide?.length ||
      project.coreJudgments?.length,
  );
  const hasAppendixSlide = Boolean(hasProcessSlide || project.currentStatus.length);
  const shouldShowAppendixSlide = !project.hideAppendixSlide && hasAppendixSlide;

  return (
    <main className={`detail-shell bluegarage-shell detail-shell-${project.slug}`}>
      <div className="detail-orb detail-orb-aqua" />
      <div className="detail-orb detail-orb-indigo" />

      <header className="detail-frame topbar detail-topbar">
        <Link href="/creative" className="brand-lockup">
          <span className="brand-dot" />
          <span>{siteTitle}</span>
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
                  <div>
                    <p className="detail-section-eyebrow">{leadMediaSection.eyebrow}</p>
                    {leadMediaSection.summary ? <p className="detail-gallery-intro">{leadMediaSection.summary}</p> : null}
                  </div>
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
              <h2 className="detail-slide-title">프로세스 / 보조 자료</h2>
            </div>
          </div>

          <div className="detail-slide-section-stack">
            {project.problemSummary ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">문제 배경</p>
                    <h2 className="detail-structured-title">왜 이 문제가 중요했는가</h2>
                  </div>
                </div>
                <div className="detail-statement-grid">
                  {project.problemSummary.map((item, index) => (
                    <article key={item} className="detail-statement-card">
                      <span className="detail-statement-index">{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {project.coreJudgments ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">방향 설정 근거</p>
                    <h2 className="detail-structured-title">이 방향을 택한 핵심 판단</h2>
                  </div>
                </div>
                <div className="detail-block-grid detail-block-grid-judgments">
                  {project.coreJudgments.map((item) => (
                    <article key={item.title} className="detail-block-card">
                      <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                      <p className="detail-block-body">{item.body}</p>
                      {item.items ? (
                        <ul className="detail-inline-list">
                          {item.items.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {project.problemSummary || project.solutionSummary || displayedFlowSteps ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">문제 - 해결 - 흐름</p>
                    <h2 className="detail-structured-title">
                      {isCompactCase
                        ? "핵심 서비스 구조만 압축해 보여줍니다."
                        : "서비스 구조가 어떻게 정리됐는지 보여줍니다."}
                    </h2>
                  </div>
                </div>

                <div className="detail-logic-grid">
                  <div className="detail-logic-column">
                    <p className="detail-logic-label">문제</p>
                    <div className="detail-logic-stack">
                      {project.problemSummary?.map((item, index) => (
                        <article key={item} className="detail-fact-card">
                          <span className="detail-fact-number">{String(index + 1).padStart(2, "0")}</span>
                          <p>{item}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="detail-logic-column">
                    <p className="detail-logic-label">해결</p>
                    <div className="detail-logic-stack">
                      {project.solutionSummary?.map((item) => (
                        <article key={item.title} className="detail-block-card">
                          <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                          <p className="detail-block-body">{item.body}</p>
                          {item.items ? (
                            <ul className="detail-inline-list">
                              {item.items.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="detail-logic-column">
                    <p className="detail-logic-label">{project.flowHeading ?? "흐름"}</p>
                    <div className="detail-flow-stack">
                      {displayedFlowSteps?.map((item) => (
                        <article key={`${item.step}-${item.title}`} className="detail-flow-card">
                          <div className="detail-flow-top">
                            <span className="detail-flow-step">{item.step}</span>
                            {item.meta ? <span className="detail-flow-meta">{item.meta}</span> : null}
                          </div>
                          <h3 className="detail-flow-title">{item.title}</h3>
                          <p className="detail-flow-body">{item.body}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                {project.structureOutcome ? <p className="detail-outcome-bar">{project.structureOutcome}</p> : null}
              </section>
            ) : null}

            {project.serviceStructure && !isCompactCase ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">서비스 구조</p>
                    <h2 className="detail-structured-title">핵심 구조가 어떻게 유지되는지 보여줍니다.</h2>
                  </div>
                </div>
                <div className="detail-block-grid">
                  {project.serviceStructure.map((item) => (
                    <article key={item.title} className="detail-block-card">
                      <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                      <p className="detail-block-body">{item.body}</p>
                      {item.items ? (
                        <ul className="detail-inline-list">
                          {item.items.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {project.iaGroups && !isCompactCase ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">정보 구조</p>
                    <h2 className="detail-structured-title">핵심 그룹이 어떻게 나뉘는지 보여줍니다.</h2>
                  </div>
                </div>
                <div className="detail-ia-grid">
                  {project.iaGroups.map((group) => (
                    <article key={group.title} className="detail-ia-card">
                      <h3 className="detail-ia-title">{group.title}</h3>
                      <ul className="detail-inline-list">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {project.screenGuide && !isCompactCase ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">Figma 화면 가이드</p>
                    <h2 className="detail-structured-title">가장 먼저 보여줘야 하는 화면들을 정리했습니다.</h2>
                  </div>
                </div>
                <div className="detail-screen-grid">
                  {project.screenGuide.map((screen) => (
                    <article key={screen.title} className="detail-screen-card">
                      <h3 className="detail-screen-title">{screen.title}</h3>
                      <p className="detail-screen-purpose">{screen.purpose}</p>
                      <div className="case-chip-group">
                        {screen.components.map((item) => (
                          <span key={item} className="case-chip case-chip-soft">
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="detail-screen-focus">{screen.focus}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

          </div>

          {project.currentStatus.length ? (
            <div className="detail-status-frame detail-status-inline">
              <p className="detail-section-eyebrow">현재 읽는 포인트</p>
              <div className="detail-status-grid">
                {project.currentStatus.map((item) => (
                  <div key={item} className="detail-status-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      <div className="detail-frame detail-return-rail">
        <Link href="/creative" className="back-link inline-link">
          ← Back to Creative
        </Link>
      </div>
    </main>
  );
}

function accentText(accent: "aqua" | "orange" | "indigo") {
  switch (accent) {
    case "aqua":
      return "text-aqua";
    case "orange":
      return "text-orange";
    case "indigo":
      return "text-indigo";
  }
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

function renderProofVisual(item: PlaceholderMedia) {
  if (!item.src) {
    return (
      <div className="detail-proof-file">
        <span className="detail-proof-file-kind">LINK</span>
        <strong>{item.label}</strong>
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className="detail-proof-visual detail-proof-visual-video">
        <video className="detail-media-video" controls playsInline preload="metadata" poster={item.poster}>
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="detail-proof-visual">
      <Image
        src={item.src}
        alt={item.alt ?? item.label}
        fill
        sizes="(max-width: 1100px) 100vw, 34vw"
        className="detail-media-image"
        style={{ objectFit: item.fit ?? "cover" }}
      />
    </div>
  );
}
