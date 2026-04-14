import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { WorkCase } from "@/data/portfolio";
import { workCaseMap, workCases } from "@/data/portfolio.bluegarage";

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
      title: "Blue Garage Portfolio",
    };
  }

  return {
    title: `${project.title} / Blue Garage Portfolio`,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export default async function BlueGarageWorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = workCaseMap[slug];

  if (!project) {
    notFound();
  }

  const isCompactCase = project.detailDensity === "compact";
  const displayedFlowSteps = isCompactCase ? project.flowSteps?.slice(0, 4) : project.flowSteps;

  return (
    <main className="detail-shell">
      <div className="detail-orb detail-orb-aqua" />
      <div className="detail-orb detail-orb-indigo" />

      <section className="detail-frame detail-hero">
        <Link href="/bluegarage" className="back-link">
          <ArrowLeft className="h-4 w-4" />
          Back to Blue Garage
        </Link>

        <div className="detail-hero-grid">
          <div>
            <p className={`eyebrow ${accentText(project.accent)}`}>{project.eyebrow}</p>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-oneliner">{project.oneLiner}</p>
            <p className="detail-summary-copy">{project.summary}</p>
          </div>

          <aside className="detail-summary-panel">
            <div className="detail-summary-row">
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>
            <div className="detail-summary-row">
              <span>Best fit</span>
              <strong>{project.roles.join(" / ")}</strong>
            </div>
            <div className="detail-summary-row">
              <span>Proof</span>
              <strong>{project.evidence.join(" / ")}</strong>
            </div>
            <div className="detail-summary-row">
              <span>Year</span>
              <strong>{project.year}</strong>
            </div>
          </aside>
        </div>
      </section>

      {hasStructuredSections(project) ? (
        <>
          <section className="detail-frame detail-content-grid">
            <article className="detail-panel">
              <p className="detail-section-eyebrow">Why this case</p>
              <div className="detail-paragraphs">
                {project.overview.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>

            <article className="detail-panel">
              <p className="detail-section-eyebrow">Scope I owned</p>
              <ul className="detail-list">
                {project.whatIDid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          {project.problemSummary ? (
            <section className="detail-frame detail-structured-frame">
              <div className="detail-structured-header">
                <div>
                  <p className="detail-section-eyebrow">Market / problem summary</p>
                  <h2 className="detail-structured-title">What makes this case matter.</h2>
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
            <section className="detail-frame detail-structured-frame">
              <div className="detail-structured-header">
                <div>
                  <p className="detail-section-eyebrow">Why this direction</p>
                  <h2 className="detail-structured-title">Three judgments behind the concept.</h2>
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
            <section className="detail-frame detail-logic-frame">
              <div className="detail-structured-header">
                <div>
                  <p className="detail-section-eyebrow">Problem - solution - flow</p>
                  <h2 className="detail-structured-title">
                    {isCompactCase
                      ? "The strongest parts of the service logic, kept compact."
                      : "The service logic, rebuilt for the web."}
                  </h2>
                </div>
              </div>

              <div className="detail-logic-grid">
                <div className="detail-logic-column">
                  <p className="detail-logic-label">Problem</p>
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
                  <p className="detail-logic-label">Solution</p>
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
                  <p className="detail-logic-label">{project.flowHeading ?? "Flow"}</p>
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
            <section className="detail-frame detail-structured-frame">
              <div className="detail-structured-header">
                <div>
                  <p className="detail-section-eyebrow">Service structure</p>
                  <h2 className="detail-structured-title">How the system stays legible beyond the headline.</h2>
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
            <section className="detail-frame detail-structured-frame">
              <div className="detail-structured-header">
                <div>
                  <p className="detail-section-eyebrow">Information architecture</p>
                  <h2 className="detail-structured-title">The core groups that make the concept navigable.</h2>
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
            <section className="detail-frame detail-structured-frame">
              <div className="detail-structured-header">
                <div>
                  <p className="detail-section-eyebrow">Figma screen guide</p>
                  <h2 className="detail-structured-title">The first four surfaces that make the concept legible.</h2>
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

          <section className="detail-frame detail-content-grid">
            <article className="detail-panel">
              <p className="detail-section-eyebrow">Deliverables / proof</p>
              <ul className="detail-list">
                {project.whatExists.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="detail-panel">
              <p className="detail-section-eyebrow">What I optimized for</p>
              <ul className="detail-list">
                {project.keyDecisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>
        </>
      ) : (
        <section className="detail-frame detail-content-grid">
          <article className="detail-panel">
            <p className="detail-section-eyebrow">Why this case</p>
            <div className="detail-paragraphs">
              {project.overview.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="detail-panel">
            <p className="detail-section-eyebrow">Scope I owned</p>
            <ul className="detail-list">
              {project.whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <p className="detail-section-eyebrow">Deliverables / proof</p>
            <ul className="detail-list">
              {project.whatExists.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <p className="detail-section-eyebrow">What I optimized for</p>
            <ul className="detail-list">
              {project.keyDecisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      <section className="detail-frame detail-gallery-frame">
        <div className="detail-gallery-header">
          <div>
            <p className="detail-section-eyebrow">Visual surfaces</p>
            <p className="detail-gallery-intro">{project.galleryIntro}</p>
          </div>
          <Link href="/bluegarage" className="inline-link">
            Return to Blue Garage
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="detail-media-grid">
          {project.placeholderMedia.map((item) => (
            <article
              key={item.label}
              className={item.featured ? "detail-media-card detail-media-card-featured" : "detail-media-card"}
            >
              {item.src ? (
                <div
                  className={
                    item.featured ? "detail-media-visual detail-media-visual-featured" : "detail-media-visual"
                  }
                >
                  {item.type === "video" ? (
                    <video
                      className="detail-media-video"
                      controls
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt ?? item.label}
                      fill
                      sizes={item.featured ? "(max-width: 1100px) 100vw, 100vw" : "(max-width: 1100px) 100vw, 33vw"}
                      className="detail-media-image"
                      style={{ objectFit: item.fit ?? "contain" }}
                      priority={item.featured}
                    />
                  )}
                </div>
              ) : null}
              <p className="detail-media-label">{item.label}</p>
              <p className="detail-media-note">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-frame detail-status-frame">
        <p className="detail-section-eyebrow">How to read this case now</p>
        <div className="detail-status-grid">
          {project.currentStatus.map((item) => (
            <div key={item} className="detail-status-item">
              {item}
            </div>
          ))}
        </div>
      </section>
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

function hasStructuredSections(project: WorkCase) {
  return Boolean(
    project.problemSummary ||
      project.solutionSummary ||
      project.flowSteps ||
      project.serviceStructure ||
      project.iaGroups ||
      project.screenGuide ||
      project.coreJudgments,
  );
}
