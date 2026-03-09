import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { workCaseMap, workCases } from "@/data/portfolio";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = workCaseMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="detail-shell">
      <div className="detail-orb detail-orb-aqua" />
      <div className="detail-orb detail-orb-indigo" />

      <section className="detail-frame detail-hero">
        <Link href="/" className="back-link">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="detail-hero-grid">
          <div>
            <p className={`eyebrow ${accentText(project.accent)}`}>{project.section}</p>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-oneliner">{project.oneLiner}</p>
          </div>

          <aside className="detail-summary-panel">
            <div className="detail-summary-row">
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>
            <div className="detail-summary-row">
              <span>Year</span>
              <strong>{project.year}</strong>
            </div>
            <div className="detail-summary-row">
              <span>Roles</span>
              <strong>{project.roles.join(" / ")}</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="detail-frame detail-content-grid">
        <article className="detail-panel">
          <p className="detail-section-eyebrow">Overview</p>
          <div className="detail-paragraphs">
            {project.overview.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>

        <article className="detail-panel">
          <p className="detail-section-eyebrow">What I did</p>
          <ul className="detail-list">
            {project.whatIDid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <p className="detail-section-eyebrow">What exists</p>
          <ul className="detail-list">
            {project.whatExists.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <p className="detail-section-eyebrow">Key decisions</p>
          <ul className="detail-list">
            {project.keyDecisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-frame detail-gallery-frame">
        <div className="detail-gallery-header">
          <div>
            <p className="detail-section-eyebrow">Gallery / placeholder media</p>
            <p className="detail-gallery-intro">{project.galleryIntro}</p>
          </div>
          <Link href="/" className="inline-link">
            Return home
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="detail-media-grid">
          {project.placeholderMedia.map((item) => (
            <article key={item.label} className="detail-media-card">
              {item.src ? (
                <div className="detail-media-visual">
                  <Image
                    src={item.src}
                    alt={item.alt ?? item.label}
                    fill
                    sizes="(max-width: 1100px) 100vw, 33vw"
                    className="detail-media-image"
                  />
                </div>
              ) : null}
              <p className="detail-media-label">{item.label}</p>
              <p className="detail-media-note">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-frame detail-status-frame">
        <p className="detail-section-eyebrow">Current status</p>
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
