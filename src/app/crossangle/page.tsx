"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { DetailMediaGallery } from "@/components/detail-media-gallery";
import type { Accent } from "@/data/portfolio";
import { workCaseMap as creativeWorkCaseMap } from "@/data/portfolio.creative";
import {
  adsbSupportingProof,
  footerContent,
  gtmWorkflowContent,
  heroContent,
  heroTitleLines,
  jdCapabilityChips,
  mainEvidenceContent,
  siteTitle,
  sftiSupportingProof,
  web3ProductUsageNotesContent,
  workCaseMap,
} from "@/data/portfolio.crossangle";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function CrossanglePage() {
  const flagshipCase = workCaseMap["aheya"];
  const aheyaResearchSteps = flagshipCase.flowSteps?.slice(0, 2) ?? [];
  const detailProblemGroups = flagshipCase.detailProblemGroups ?? [];
  const problemResearchGroups = detailProblemGroups.slice(0, 2);
  const problemSolutionGroups = detailProblemGroups.slice(2, 4);
  const hasDetailProblemGroups = problemResearchGroups.length > 0 && problemSolutionGroups.length > 0;
  const projectPackageSection = flagshipCase.detailMediaSections?.[0];
  const aheyaCreativeSection = creativeWorkCaseMap["aheya"]?.detailMediaSections?.[0];
  const heroPoster = flagshipCase.coverImage ?? {
    src: "/aheya/home-hero.webp",
    alt: "AHEYA homepage hero screenshot.",
    fit: "contain" as const,
  };

  return (
    <main className="cinema-shell bluegarage-shell tainai-shell crossangle-shell">
      <div className="cinema-orb cinema-orb-aqua" />
      <div className="cinema-orb cinema-orb-indigo" />
      <div className="cinema-orb cinema-orb-orange" />

      <section className="page-frame hero-frame tainai-hero-frame">
        <header className="topbar">
          <Link href="/crossangle" className="brand-lockup">
            <span className="brand-dot" />
            <span>{siteTitle}</span>
          </Link>
          <nav className="topnav">
            <a href="#workflow">Workflow</a>
            <a href="#research-01">Research</a>
            <a href="#problem">Insight/Apply</a>
            <a href="#project-package">Project Profile</a>
            <a href="#content">Content</a>
          </nav>
        </header>

        <div className="bluegarage-hero-poster">
          <motion.section {...fadeUp} className="hero-copy tainai-hero-copy">
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

            <div className="case-chip-group crossangle-hero-jd-chips" aria-label="Xangle GTM JD fit">
              {jdCapabilityChips.map((chip) => (
                <span key={chip} className="case-chip case-chip-soft">
                  {chip}
                </span>
              ))}
            </div>

            <div className="crossangle-hero-workflow-strip" aria-label="Xangle GTM work flow">
              {gtmWorkflowContent.cards.map((item) => (
                <a key={item.label} href="#workflow" className="crossangle-hero-workflow-item" data-accent={item.accent}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </a>
              ))}
            </div>

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
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="bluegarage-poster-stage tainai-hero-poster-stage"
          >
            <a
              href="https://aheyabaraya.xyz"
              target="_blank"
              rel="noreferrer"
              className="bluegarage-poster-media-shell tainai-hero-poster-shell crossangle-hero-live-link"
              aria-label="AHEYABARAYA live site open"
            >
              <div className="bluegarage-poster-media">
                <Image
                  src={heroPoster.src}
                  alt={heroPoster.alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 42vw"
                  className="bluegarage-poster-image"
                  style={{ objectFit: heroPoster.fit ?? "cover" }}
                  priority
                />
              </div>
              <div className="bluegarage-poster-overlay tainai-hero-poster-overlay" />
            </a>
          </motion.aside>
        </div>

        <motion.section {...fadeUp} className="crossangle-usage-notes-panel" aria-labelledby="usage-notes-title">
          <div className="crossangle-usage-notes-copy">
            <p className="eyebrow text-aqua">{web3ProductUsageNotesContent.eyebrow}</p>
            <h2 id="usage-notes-title">
              {web3ProductUsageNotesContent.titleLines.map((line) => (
                <span key={line} className="crossangle-usage-notes-title-line">
                  {line}
                </span>
              ))}
            </h2>
            <p>{web3ProductUsageNotesContent.summary}</p>
            <strong>{web3ProductUsageNotesContent.connection}</strong>
          </div>

          <div className="crossangle-usage-notes-grid" aria-label="Web3 product usage evidence thumbnails">
            {web3ProductUsageNotesContent.cards.map((card) => (
              <article
                key={card.label}
                className="crossangle-usage-note-card"
                data-accent={card.accent}
                aria-label={`${card.label}: ${card.body}`}
              >
                <div className="crossangle-usage-note-media">
                  <Image src={card.image.src} alt={card.image.alt} fill sizes="(max-width: 900px) 50vw, 14vw" />
                </div>
                <div className="crossangle-usage-note-copy">
                  <span>{card.label}</span>
                  <small>{card.tag}</small>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="workflow" className="crossangle-workflow-panel">
          <div className="crossangle-workflow-head">
            <p className="eyebrow text-aqua">{gtmWorkflowContent.eyebrow}</p>
            <h2>{gtmWorkflowContent.title}</h2>
          </div>
          <div className="crossangle-workflow-grid">
            {gtmWorkflowContent.cards.map((item) => (
              <article key={item.label} className="crossangle-workflow-card" data-accent={item.accent}>
                <div className="crossangle-workflow-topline">
                  <span>{item.step}</span>
                  <strong>{item.label}</strong>
                </div>
                <h3>{item.title}</h3>
                <ul className="crossangle-workflow-body-list">
                  {item.body.split("\n").map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
                <div className="crossangle-workflow-proof">
                  <div>
                    <span>{item.proof.split("→")[0].trim()}</span>
                    <ul>
                      {item.proof
                        .split("→")
                        .slice(1)
                        .join("→")
                        .split(",")
                        .map((entry) => entry.trim())
                        .filter(Boolean)
                        .map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <span>{item.output.split("→")[0].trim()}</span>
                    <ul>
                      {item.output
                        .split("→")
                        .slice(1)
                        .join("→")
                        .split(",")
                        .map((entry) => entry.trim())
                        .filter(Boolean)
                        .map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </section>

      <motion.section
        {...fadeUp}
        id="research-evidence"
        className="page-frame crossangle-main-frame crossangle-detail-shell detail-shell-aheya crossangle-inline-detail-shell"
      >
        {aheyaResearchSteps.map((item, index) => {
          const stepAccent = aheyaStepAccent(index, "aqua");
          const researchFields = parseResearchBody(item.body);

          return (
            <section
              key={item.step + item.title}
              id={`research-0${index + 1}`}
              className="detail-slide detail-stage detail-stage-research-slide"
            >
              <div className="detail-stage-topline">
                <span className={`detail-slide-index ${accentText(stepAccent)}`}>
                  {String(index + 2).padStart(2, "0")}. Research 0{index + 1}
                </span>
              </div>
              <div className="detail-stage-copy">
                <p className={`eyebrow ${accentText(stepAccent)}`}>{flagshipCase.flowHeading}</p>
                <h2 className="detail-slide-title">{item.title}</h2>
                <p className="detail-slide-subcopy">
                  각 리서치를 질문, 방식, 근거/출처, 도출 결론 순서로 한 장에 압축했습니다.
                </p>
              </div>

              <div className="detail-research-slide-grid">
                <article className={`detail-research-panel detail-research-panel-main ${accentBar(stepAccent)}`}>
                  <span className="detail-research-panel-label">조사 설계</span>
                  <dl className="detail-research-fields detail-research-fields-large">
                    <div>
                      <dt>조사 목적</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "조사 목적"))}</dd>
                    </div>
                    <div>
                      <dt>조사한 것 / 방식</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "조사한 것 / 방식"))}</dd>
                    </div>
                    <div>
                      <dt>근거 / 출처</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "근거 / 출처"))}</dd>
                    </div>
                  </dl>
                </article>

                <article className={`detail-research-panel detail-research-panel-proof ${accentBar(stepAccent)}`}>
                  <span className="detail-research-panel-label">도출 결론</span>
                  {renderAheyaResearchVisual(index)}
                  <div className="detail-research-metric-list">
                    {getAheyaResearchMetrics(index).map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                  <dl className="detail-research-fields detail-research-fields-large">
                    <div>
                      <dt>결론 / 해석</dt>
                      <dd>{renderResearchFieldValue(getResearchField(researchFields, "판단"))}</dd>
                    </div>
                  </dl>
                  {item.meta ? <span className="detail-process-step-meta">{item.meta}</span> : null}
                </article>
              </div>
            </section>
          );
        })}

        {hasDetailProblemGroups ? (
          <section id="problem" className="detail-slide detail-stage detail-stage-problem">
            <div className="detail-stage-topline">
              <span className="detail-slide-index text-orange">04. Research → Problem</span>
            </div>
            <div className="detail-stage-copy">
              <p className="eyebrow text-orange">Problem Insight</p>
              <h2 className="detail-slide-title">Research → Problem</h2>
              <p className="detail-slide-subcopy">
                리서치 두 축을 AHEYABARAYA의 문제 정의와 적용 방향으로 연결했습니다.
              </p>
            </div>

            <div className="detail-problem-grid">
              <div className="detail-problem-aheya-shell">
                <article className="detail-block-card detail-problem-pair-card detail-problem-aheya-card detail-problem-aheya-problem">
                  <p className="detail-problem-pair-kicker">Research</p>
                  <div className="detail-problem-aheya-blocks">
                    {problemResearchGroups.map((item) => (
                      <div key={item.title} className="detail-problem-aheya-block">
                        <p className={`eyebrow ${accentText(item.accent ?? "orange")}`}>{item.title}</p>
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
                  {problemSolutionGroups.map((item, index) => (
                    <div key={item.title} className="detail-problem-aheya-solution-unit">
                      <article className="detail-block-card detail-problem-pair-card detail-problem-aheya-card detail-problem-pair-card-right">
                        <p className="detail-problem-pair-kicker">Problem 0{index + 1}</p>
                        <p className={`eyebrow ${accentText(item.accent ?? "aqua")}`}>{item.title}</p>
                        <p className="detail-block-body">{item.body}</p>
                        {item.items?.length ? (
                          <ul className="detail-inline-list">
                            {item.items.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </article>

                      {index < problemSolutionGroups.length - 1 ? (
                        <div className="detail-problem-aheya-stack-arrow" aria-hidden="true">
                          ↓
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {projectPackageSection ? (
          <section id="project-package" className="detail-slide detail-stage detail-stage-evidence">
            <div className="detail-stage-topline">
              <span className="detail-slide-index text-aqua">05. Project Profile</span>
            </div>
            <div className="detail-stage-copy">
              <p className="eyebrow text-aqua">{projectPackageSection.eyebrow}</p>
              <h2 className="detail-slide-title">{projectPackageSection.title}</h2>
            </div>
            <DetailMediaGallery
              items={projectPackageSection.items}
              columns={projectPackageSection.columns ?? 3}
              layout={projectPackageSection.layout}
            />
          </section>
        ) : null}
      </motion.section>

      <motion.section {...fadeUp} id="content" className="page-frame crossangle-main-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">{mainEvidenceContent.content.eyebrow}</p>
            <h2 className="section-title">{mainEvidenceContent.content.title}</h2>
          </div>
        </div>

        <div className="crossangle-main-x-embed-grid" aria-label="AHEYABARAYA X posting samples">
          <DetailMediaGallery
            columns={5}
            items={mainEvidenceContent.content.posts.map((post) => ({
              label: `${post.label} · ${post.date}`,
              note: post.title,
              hideText: true,
              embedType: "x" as const,
              embedUrl: post.href,
              embedText: post.original,
              href: post.href,
              hrefLabel: "X에서 보기",
              displaySize: "compact" as const,
            }))}
          />
        </div>

        <div className="crossangle-video-strip">
          {mainEvidenceContent.content.videos.map((video) => (
            <article key={video.title} className="crossangle-video-card">
              <video className="crossangle-video" controls playsInline preload="metadata" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
              </video>
              <div>
                <span>{video.label}</span>
                <h3>{video.title}</h3>
                <p>{video.note}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {aheyaCreativeSection ? (
        <motion.section
          {...fadeUp}
          id="aheya-creative-proof"
          className="page-frame crossangle-main-frame crossangle-aheya-creative-proof"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow text-aqua">AHEYA Creative Surface</p>
              <h2 className="section-title">{aheyaCreativeSection.title}</h2>
            </div>
            <Link href="/creative/work/aheya" className="inline-link">
              AHEYA 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {aheyaCreativeSection.summary ? (
            <p className="crossangle-aheya-creative-summary">{aheyaCreativeSection.summary}</p>
          ) : null}

          <DetailMediaGallery
            items={aheyaCreativeSection.items.map((item) => ({
              ...item,
              href: "https://aheyabaraya.xyz/",
              hrefLabel: "AHEYABARAYA 이동",
            }))}
            columns={aheyaCreativeSection.columns ?? 2}
            layout={aheyaCreativeSection.layout}
            imageClickBehavior="href"
          />
        </motion.section>
      ) : null}

      <motion.section {...fadeUp} id="shortform-proof" className="page-frame crossangle-main-frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">{adsbSupportingProof.eyebrow}</p>
            <h2 className="section-title">{adsbSupportingProof.title}</h2>
          </div>
        </div>

        <article className="crossangle-adsb-proof-card">
          <div className="crossangle-adsb-proof-media">
            <video
              className="crossangle-video"
              controls
              playsInline
              preload="metadata"
              poster={adsbSupportingProof.media.poster}
            >
              <source src={adsbSupportingProof.media.src} type="video/mp4" />
            </video>
          </div>

          <div className="crossangle-adsb-proof-copy">
            <span className="crossangle-card-label">{adsbSupportingProof.label}</span>
            <small className="crossangle-support-period">{adsbSupportingProof.period}</small>
            <h3>{adsbSupportingProof.caseTitle}</h3>
            <p>{adsbSupportingProof.body}</p>
            <ul className="crossangle-solution-list">
              {adsbSupportingProof.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="crossangle-adsb-proof-caveat">{adsbSupportingProof.caveat}</p>
            <div className="crossangle-adsb-proof-links">
              <Link href={adsbSupportingProof.detailHref} className="inline-link">
                ADSB 상세 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={adsbSupportingProof.reelHref} target="_blank" rel="noreferrer" className="inline-link">
                Instagram Reel
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        <article className="crossangle-adsb-proof-card crossangle-sfti-proof-card">
          <div className="crossangle-adsb-proof-media crossangle-sfti-proof-media">
            <Image
              src={sftiSupportingProof.image.src}
              alt={sftiSupportingProof.image.alt}
              width={1200}
              height={1600}
              className="crossangle-sfti-proof-image"
              sizes="(max-width: 1100px) 100vw, 46vw"
            />
          </div>

          <div className="crossangle-adsb-proof-copy">
            <span className="crossangle-card-label">{sftiSupportingProof.label}</span>
            <small className="crossangle-support-period">{sftiSupportingProof.period}</small>
            <h3>{sftiSupportingProof.caseTitle}</h3>
            <p>{sftiSupportingProof.body}</p>
            <ul className="crossangle-solution-list">
              {sftiSupportingProof.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="crossangle-adsb-proof-caveat">{sftiSupportingProof.caveat}</p>
            <div className="crossangle-adsb-proof-links">
              <Link href={sftiSupportingProof.detailHref} className="inline-link">
                SFTI 상세 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </motion.section>

      <footer className="page-frame footer-frame">
        <p>{footerContent.line}</p>
        <span>{footerContent.meta}</span>
      </footer>
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
      return "detail-card-aqua";
    case "orange":
      return "detail-card-orange";
    case "indigo":
      return "detail-card-indigo";
  }
}

function aheyaStepAccent(index: number, fallback: Accent): Accent {
  const accents: Accent[] = ["aqua", "orange", "indigo", "orange"];

  return accents[index] ?? fallback;
}

function getResearchField(fields: Array<{ label: string; value: string }>, label: string) {
  return fields.find((field) => field.label === label)?.value ?? "";
}

function renderResearchFieldValue(value: string) {
  const lines = value
    .split(/\n|(?=•\s)/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return value;
  }

  return (
    <ul className="detail-research-field-list">
      {lines.map((line) => (
        <li key={line}>{line.replace(/^•\s*/, "")}</li>
      ))}
    </ul>
  );
}

function getAheyaResearchMetrics(index: number) {
  if (index === 1) {
    return [
      "ACP: Job / Memo / Escrow",
      "Flow: Request -> Evaluation -> Completion",
      "결론: 품질 평가 기록 필요",
    ];
  }

  return [
    "조사: EVM/Base·Solana 잔여 자산 흐름",
    "잔여 형태: native gas token + project token",
    "적용: 제품·서비스 소비 / 소액 후원",
  ];
}

function parseResearchBody(body: string) {
  const labelMap = [
    { marker: "질문", label: "조사 목적" },
    { marker: "방식", label: "조사한 것 / 방식" },
    { marker: "근거", label: "근거 / 출처" },
    { marker: "판단", label: "판단" },
  ] as const;
  const positions = labelMap
    .map((item) => {
      const index = body.indexOf(`${item.marker}:`);

      return index >= 0 ? { ...item, index } : null;
    })
    .filter((item): item is (typeof labelMap)[number] & { index: number } => Boolean(item))
    .sort((a, b) => a.index - b.index);

  if (!positions.length) {
    return [{ label: "요약", value: body }];
  }

  return positions.map((item, index) => {
    const start = item.index + item.marker.length + 1;
    const end = positions[index + 1]?.index ?? body.length;

    return {
      label: item.label,
      value: body.slice(start, end).trim().replace(/\.$/, ""),
    };
  });
}

function renderAheyaResearchVisual(index: number) {
  if (index === 1) {
    return (
      <div className="detail-research-visual detail-research-flow" aria-label="ACP lifecycle and quality evaluation gap">
        {["Request", "Negotiation", "Transaction", "Evaluation", "Completion"].map((item) => (
          <span key={item}>{item}</span>
        ))}
        <strong>+ 품질 평가 기록</strong>
      </div>
    );
  }

  return (
    <div className="detail-research-visual detail-research-timeline detail-research-conclusion" aria-label="Research 01 conclusion from residual on-chain assets to product/service use">
      {[
        ["조사 대상", "에어드랍·퀘스트·거래 이후 지갑 잔여"],
        ["남는 형태", "소액 native gas token + project token"],
        ["방치 이유", "금액·gas·체인\n용도 장벽"],
        ["AHEYA 적용", "제품·서비스 소비 / 소액 후원 / 피드백"],
      ].map(([date, label]) => (
        <div key={date}>
          <strong>{date}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
