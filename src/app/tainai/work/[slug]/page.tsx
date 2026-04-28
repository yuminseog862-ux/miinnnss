import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { DetailMediaGallery } from "@/components/detail-media-gallery";
import { ProjectLinkRail } from "@/components/project-link-rail";
import type { Accent, PlaceholderMedia } from "@/data/portfolio";
import { siteTitle, workCaseMap, workCases } from "@/data/portfolio.tainai";

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
      title: "TainAI 지원용 포트폴리오",
    };
  }

  return {
    title: `${project.title} / TainAI 지원용 포트폴리오`,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export default async function TainaiWorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = workCaseMap[slug];

  if (!project) {
    notFound();
  }

  const isCompactCase = project.detailDensity === "compact";
  const displayedFlowSteps = isCompactCase ? project.flowSteps?.slice(0, 4) : project.flowSteps;
  const leadMediaLayout = project.detailLeadLayout ?? "stack";
  const leadMediaLimit =
    project.detailLeadCount === "all"
      ? project.placeholderMedia.length
      : project.detailLeadCount ??
        (project.galleryColumns === 4 ? Math.min(4, project.placeholderMedia.length) : Math.min(3, project.placeholderMedia.length));
  const leadMediaCount =
    leadMediaLayout === "carousel" || leadMediaLayout === "comparison"
      ? project.placeholderMedia.length
      : leadMediaLimit;
  const leadMediaSection = project.detailLeadSection ?? {
    eyebrow: "대표 자료",
    title: "이 케이스를 가장 빠르게 읽히게 하는 핵심 자료",
    summary: "이 케이스를 가장 빠르게 읽히게 하는 자료만 먼저 둡니다.",
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
  const leadMediaItems =
    leadMediaLayout === "carousel" || leadMediaLayout === "comparison"
      ? project.placeholderMedia
      : project.placeholderMedia.slice(0, leadMediaCount);
  const remainingMediaItems =
    leadMediaLayout === "carousel" || leadMediaLayout === "comparison"
      ? []
      : project.placeholderMedia.slice(leadMediaCount);
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
  const hasEvidenceSection = Boolean(
    leadMediaItems.length || remainingMediaItems.length || project.detailMediaSections?.length,
  );
  const leadMediaVariant =
    leadMediaLayout === "grid" &&
    leadMediaItems.length === 3 &&
    leadMediaItems.every((item) => item.type !== "video" && !item.stackedMedia?.length)
      ? "compact-strip"
      : "default";
  const problemItems = Array.isArray(project.problemSummary)
    ? project.problemSummary
    : project.detailProblemGroups?.length
      ? []
      : project.overview;
  const pairedProblemGroups =
    project.detailProblemGroups?.length === 4
      ? {
          left: project.detailProblemGroups.slice(0, 2),
          right: project.detailProblemGroups.slice(2, 4),
        }
      : null;
  const aheyaProblemLayout =
    project.slug === "aheya" && pairedProblemGroups
      ? {
          problems: pairedProblemGroups.left,
          solutions: pairedProblemGroups.right,
        }
      : null;
  const mergedProblemLayout =
    pairedProblemGroups && ["ab-luna-relay", "ilysb", "ab-aurora"].includes(project.slug)
      ? {
          problem: {
            title:
              project.slug === "ab-luna-relay"
                ? "GPT와 Gemini 사이의 끊김"
                : project.slug === "ilysb"
                  ? "조용한 호감 표현 가설"
                  : "브리프와 방향 기준 문제",
            body: `${pairedProblemGroups.left[0]?.body ?? ""} ${pairedProblemGroups.left[1]?.body ?? ""}`.trim(),
            items: Array.from(new Set(pairedProblemGroups.left.flatMap((item) => item.items ?? []))),
          },
          solution: {
            title:
              project.slug === "ab-luna-relay"
                ? "공통 상태 저장소 + UX 수정"
                : project.slug === "ilysb"
                  ? "실제 동작 앱 + 테스트 결론"
                  : "direction-first 구조",
            body: `${pairedProblemGroups.right[0]?.body ?? ""} ${pairedProblemGroups.right[1]?.body ?? ""}`.trim(),
            items: Array.from(new Set(pairedProblemGroups.right.flatMap((item) => item.items ?? []))),
          },
        }
      : null;
  const hasCoverGlance = Boolean(heroHighlights.length);
  const hasProblemSection = Boolean(problemItems.length || project.detailProblemGroups?.length);
  const hasProcessSection = Boolean(
    !project.hideJudgmentSlide && (project.solutionSummary?.length || displayedFlowSteps?.length),
  );
  const hasDecisionSection = Boolean(
    project.structureOutcome ||
      project.roles.length ||
      project.evidence.length,
  );
  const hasAppendixSection = Boolean(
    !project.hideJudgmentSlide &&
      (project.coreJudgments?.length ||
        project.serviceStructure?.length ||
        project.iaGroups?.length ||
        project.screenGuide?.length ||
        project.supplementalSections?.length),
  );
  const hasSolutionSummary = Boolean(project.solutionSummary?.length);
  const hasFlowSteps = Boolean(displayedFlowSteps?.length);

  return (
    <main className={`detail-shell bluegarage-shell detail-shell-${project.slug}`}>
      <div className="detail-orb detail-orb-aqua" />
      <div className="detail-orb detail-orb-indigo" />

      <header className="detail-frame topbar detail-topbar">
        <Link href="/tainai" className="brand-lockup">
          <span className="brand-dot" />
          <span>{siteTitle}</span>
        </Link>
        <nav className="topnav">
          <a href="#cover">개요</a>
          {hasProblemSection ? <a href="#problem">문제와 해결</a> : null}
          {hasProcessSection ? <a href="#process">프로세스</a> : null}
          {hasEvidenceSection ? <a href="#evidence">대표 자료</a> : null}
          {hasDecisionSection ? <a href="#decision">다음 결정</a> : null}
          {hasAppendixSection ? <a href="#appendix">부록</a> : null}
        </nav>
      </header>

      <section id="cover" className="detail-frame detail-slide detail-stage detail-stage-cover">
        <div className="detail-stage-topline">
          <span className={`detail-slide-index ${accentText(project.accent)}`}>01. Hero</span>
        </div>

        <div className="detail-cover-grid">
          <div className="detail-cover-main">
            <div className="detail-slide-topline">
              <span className="detail-slide-kicker">
                {project.section} / {project.year}
              </span>
              <span className="detail-stage-status">{project.status}</span>
            </div>

            <p className={`eyebrow ${accentText(project.accent)}`}>{project.eyebrow}</p>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-oneliner">{project.oneLiner}</p>
            <p className="detail-summary-copy">{project.summary}</p>

            {project.externalLinks?.length ? (
              <ProjectLinkRail links={project.externalLinks} className="detail-project-links" />
            ) : null}
          </div>

          {heroProof ? (
            <div className="detail-cover-side">
              <aside className="detail-proof-card detail-proof-card-hero">
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
            </div>
          ) : null}
        </div>

        {hasCoverGlance ? (
          <div className="detail-cover-glance">
            <div className="detail-cover-glance-top">
              <span className={`detail-slide-index ${accentText(project.accent)}`}>At a Glance</span>
            </div>
            <div className="detail-cover-glance-grid">
              {heroHighlights.map((card) => (
                <article
                  key={card.title}
                  className={`detail-mockup-card detail-mockup-card-compact ${accentBar(card.accent ?? project.accent)}`}
                >
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
          </div>
        ) : null}
      </section>

      {hasProblemSection ? (
        <section id="problem" className="detail-frame detail-slide detail-stage detail-stage-problem">
          <div className="detail-stage-topline">
            <span className={`detail-slide-index ${accentText(project.accent)}`}>02. 문제와 해결 구조</span>
          </div>
          <div className="detail-stage-copy">
            <h2 className="detail-slide-title">문제와 해결 구조</h2>
          </div>
          <div className="detail-problem-grid">
            {aheyaProblemLayout ? (
              <div className="detail-problem-aheya-shell">
                <article className="detail-block-card detail-problem-pair-card detail-problem-aheya-card detail-problem-aheya-problem">
                  <p className="detail-problem-pair-kicker">문제</p>
                  <div className="detail-problem-aheya-blocks">
                    {aheyaProblemLayout.problems.map((item) => (
                      <div key={item.title} className="detail-problem-aheya-block">
                        <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                        <p className="detail-block-body">{item.body}</p>
                        {item.items?.length ? (
                          <ul className="detail-inline-list">
                            {item.items.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>

                <div className="detail-problem-aheya-main-arrow" aria-hidden="true">
                  →
                </div>

                <div className="detail-problem-aheya-solution-stack">
                  {aheyaProblemLayout.solutions.map((item, index) => (
                    <div key={item.title} className="detail-problem-aheya-solution-unit">
                      <article className="detail-block-card detail-problem-pair-card detail-problem-aheya-card detail-problem-pair-card-right">
                        <p className="detail-problem-pair-kicker">Solution 0{index + 1}</p>
                        <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                        <p className="detail-block-body">{item.body}</p>
                        {item.items?.length ? (
                          <ul className="detail-inline-list">
                            {item.items.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </article>

                      {index < aheyaProblemLayout.solutions.length - 1 ? (
                        <div className="detail-problem-aheya-stack-arrow" aria-hidden="true">
                          ↓
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                {project.structureOutcome ? (
                  <div className="detail-problem-judgment">
                    <span className="detail-problem-judgment-label">핵심 판단</span>
                    <p>{project.structureOutcome}</p>
                  </div>
                ) : null}
              </div>
            ) : mergedProblemLayout ? (
              <div className="detail-problem-pair-stack">
                <div className="detail-problem-pair-row">
                  <article className="detail-block-card detail-problem-pair-card detail-problem-pair-card-left">
                    <p className="detail-problem-pair-kicker">문제</p>
                    <p className={`eyebrow ${accentText(project.accent)}`}>{mergedProblemLayout.problem.title}</p>
                    <p className="detail-block-body">{mergedProblemLayout.problem.body}</p>
                    {mergedProblemLayout.problem.items.length ? (
                      <ul className="detail-inline-list">
                        {mergedProblemLayout.problem.items.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>

                  <div className="detail-problem-pair-arrow" aria-hidden="true">
                    →
                  </div>

                  <article className="detail-block-card detail-problem-pair-card detail-problem-pair-card-right">
                    <p className="detail-problem-pair-kicker">Solution</p>
                    <p className={`eyebrow ${accentText(project.accent)}`}>{mergedProblemLayout.solution.title}</p>
                    <p className="detail-block-body">{mergedProblemLayout.solution.body}</p>
                    {mergedProblemLayout.solution.items.length ? (
                      <ul className="detail-inline-list">
                        {mergedProblemLayout.solution.items.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </div>

                {project.structureOutcome ? (
                  <div className="detail-problem-judgment">
                    <span className="detail-problem-judgment-label">핵심 판단</span>
                    <p>{project.structureOutcome}</p>
                  </div>
                ) : null}
              </div>
            ) : pairedProblemGroups ? (
              <div className="detail-problem-pair-stack">
                {pairedProblemGroups.left.map((item, index) => {
                  const rightItem = pairedProblemGroups.right[index];
                  if (!rightItem) {
                    return null;
                  }

                  return (
                    <div key={`${item.title}-${rightItem.title}`} className="detail-problem-pair-row">
                      <article className="detail-block-card detail-problem-pair-card detail-problem-pair-card-left">
                        <p className="detail-problem-pair-kicker">문제 0{index + 1}</p>
                        <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                        <p className="detail-block-body">{item.body}</p>
                        {item.items?.length ? (
                          <ul className="detail-inline-list">
                            {item.items.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </article>

                      <div className="detail-problem-pair-arrow" aria-hidden="true">
                        →
                      </div>

                      <article className="detail-block-card detail-problem-pair-card detail-problem-pair-card-right">
                        <p className="detail-problem-pair-kicker">Solution 0{index + 1}</p>
                        <p className={`eyebrow ${accentText(rightItem.accent ?? project.accent)}`}>{rightItem.title}</p>
                        <p className="detail-block-body">{rightItem.body}</p>
                        {rightItem.items?.length ? (
                          <ul className="detail-inline-list">
                            {rightItem.items.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </article>
                    </div>
                  );
                })}

                {project.structureOutcome ? (
                  <div className="detail-problem-judgment">
                    <span className="detail-problem-judgment-label">핵심 판단</span>
                    <p>{project.structureOutcome}</p>
                  </div>
                ) : null}
              </div>
            ) : project.detailProblemGroups?.length ? (
              <div className="detail-block-grid detail-block-grid-problem">
                {project.detailProblemGroups.map((item) => (
                  <article key={item.title} className="detail-block-card">
                    <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                    <p className="detail-block-body">{item.body}</p>
                    {item.items?.length ? (
                      <ul className="detail-inline-list">
                        {item.items.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
            {problemItems.length ? (
              <div
                className={`detail-statement-grid detail-statement-grid-wide${
                  problemItems.length === 1 ? " detail-statement-grid-single" : ""
                }`}
              >
                {problemItems.map((item, index) => (
                  <article key={item} className="detail-statement-card">
                    {problemItems.length > 1 ? (
                      <span className="detail-statement-index">{String(index + 1).padStart(2, "0")}</span>
                    ) : null}
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {hasProcessSection ? (
        <section id="process" className="detail-frame detail-slide detail-stage">
          <div className="detail-stage-topline">
            <span className={`detail-slide-index ${accentText(project.accent)}`}>03. 작업 과정</span>
          </div>
          <div className="detail-stage-copy">
            <h2 className="detail-slide-title">작업 과정</h2>
          </div>

          <div className="detail-slide-section-stack">
            {hasSolutionSummary || hasFlowSteps ? (
              <section className="detail-slide-subpanel detail-process-panel">
                {hasFlowSteps ? (
                  <div className="detail-process-flow-shell">
                    <div className="detail-structured-header detail-process-flow-header">
                      <div>
                        <p className="detail-section-eyebrow">{project.flowHeading ?? "흐름"}</p>
                        <h3 className="detail-structured-title">의사결정 흐름</h3>
                      </div>
                    </div>
                    <div className="detail-flow-timeline">
                      {displayedFlowSteps?.map((item) => (
                        <article key={`${item.step}-${item.title}`} className="detail-flow-card detail-flow-card-timeline">
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
                ) : null}

                {hasSolutionSummary ? (
                  <div className="detail-process-ribbon-shell">
                    <div className="detail-process-ribbon-heading">
                      <p className="detail-section-eyebrow">구현한 구조</p>
                    </div>
                    <div className="detail-process-ribbon">
                      {project.solutionSummary?.map((item) => (
                        <article key={item.title} className="detail-process-ribbon-card">
                          <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                          <p className="detail-process-ribbon-body">{item.body}</p>
                          {item.items?.length ? (
                            <p className="detail-process-ribbon-items">{item.items.join(" / ")}</p>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            ) : null}
          </div>

        </section>
      ) : null}

      {hasEvidenceSection ? (
        <section id="evidence" className="detail-frame detail-slide detail-stage">
          {!project.hideLeadStageLabel ? (
            <div className="detail-stage-topline">
              <span className={`detail-slide-index ${accentText(project.accent)}`}>04. 대표 자료</span>
            </div>
          ) : null}
          <div className="detail-stage-copy">
            <h2 className="detail-slide-title">{leadMediaSection.title}</h2>
            {leadMediaSection.summary || project.galleryIntro ? (
              <p className="detail-slide-subcopy">{leadMediaSection.summary || project.galleryIntro}</p>
            ) : null}
          </div>

          <div className="detail-slide-section-stack">
            {leadMediaItems.length ? (
              <section className="detail-slide-subpanel">
                <div>
                  <p className="detail-section-eyebrow">{leadMediaSection.eyebrow}</p>
                  {project.galleryIntro ? <p className="detail-gallery-intro">{project.galleryIntro}</p> : null}
                </div>

                <DetailMediaGallery
                  items={leadMediaItems}
                  columns={project.galleryColumns}
                  layout={leadMediaLayout}
                  variant={leadMediaVariant}
                />
              </section>
            ) : null}

            {project.detailMediaSections?.map((section) => (
              <section key={section.title} className="detail-slide-subpanel">
                <div>
                  <p className="detail-section-eyebrow">{section.eyebrow}</p>
                  <h2 className="detail-structured-title">{section.title}</h2>
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

      {hasDecisionSection ? (
        <section id="decision" className="detail-frame detail-slide detail-stage">
          <div className="detail-stage-topline">
            <span className={`detail-slide-index ${accentText(project.accent)}`}>05. 최종 판단</span>
          </div>
          <div className="detail-stage-copy">
            <h2 className="detail-slide-title">최종 판단</h2>
          </div>

          {(project.roles.length || project.evidence.length) ? (
            <div className="detail-decision-grid">
              <div className="detail-meta-grid detail-meta-grid-wide">
                {project.roles.length ? (
                  <article className="detail-chip-panel">
                    <p className="detail-section-eyebrow">담당 범위</p>
                    <div className="case-chip-group">
                      {project.roles.map((item) => (
                        <span key={item} className="case-chip case-chip-soft">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ) : null}

                {project.evidence.length ? (
                  <article className="detail-chip-panel">
                    <p className="detail-section-eyebrow">참고 자료</p>
                    <div className="case-chip-group">
                      {project.evidence.map((item) => (
                        <span key={item} className="case-chip case-chip-soft">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ) : null}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {hasAppendixSection ? (
        <section id="appendix" className="detail-frame detail-slide detail-stage">
          <div className="detail-stage-topline">
            <span className={`detail-slide-index ${accentText(project.accent)}`}>06. 참고 자료</span>
          </div>
          <div className="detail-stage-copy">
            <h2 className="detail-slide-title">참고 자료</h2>
          </div>

          <div className="detail-slide-section-stack">
            {!project.hideJudgmentSlide && project.coreJudgments ? (
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

            {!project.hideJudgmentSlide && project.serviceStructure && !isCompactCase ? (
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

            {!project.hideJudgmentSlide && project.iaGroups && !isCompactCase ? (
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

            {!project.hideJudgmentSlide && project.screenGuide && !isCompactCase ? (
              <section className="detail-slide-subpanel">
                <div className="detail-structured-header">
                  <div>
                    <p className="detail-section-eyebrow">화면 가이드</p>
                    <h2 className="detail-structured-title">가장 먼저 보여줘야 하는 화면입니다.</h2>
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

            {!project.hideJudgmentSlide &&
              project.supplementalSections?.map((section) => (
                <section key={section.title} className="detail-slide-subpanel">
                  <div className="detail-structured-header">
                    <div>
                      <p className="detail-section-eyebrow">{section.eyebrow}</p>
                      <h2 className="detail-structured-title">{section.title}</h2>
                    </div>
                  </div>

                  {section.summary ? <p className="detail-outcome-bar">{section.summary}</p> : null}

                  <div
                    className={
                      section.layout === "three"
                        ? "detail-block-grid detail-block-grid-judgments"
                        : "detail-block-grid"
                    }
                  >
                    {section.cards.map((item) => (
                      <article key={item.title} className="detail-block-card">
                        <p className={`eyebrow ${accentText(item.accent ?? project.accent)}`}>{item.title}</p>
                        <p className="detail-block-body">{item.body}</p>
                        {item.items ? <p className="detail-appendix-meta-line">{item.items.map((point) => `- ${point}`).join("  ")}</p> : null}
                      </article>
                    ))}
                  </div>

                  {section.caption ? <p className="detail-outcome-bar">{section.caption}</p> : null}
                </section>
              ))}
          </div>
        </section>
      ) : null}

      <div className="detail-frame detail-return-rail">
        <Link href="/tainai" className="back-link inline-link">
          ← TainAI 페이지로 돌아가기
        </Link>
      </div>
    </main>
  );
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
        priority
      />
    </div>
  );
}
