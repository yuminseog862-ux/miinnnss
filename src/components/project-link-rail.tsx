import { ArrowUpRight, Github, Globe2, Instagram, ShieldCheck } from "lucide-react";

import type { ProjectExternalLink } from "@/data/portfolio";

type ProjectLinkRailProps = {
  links: ProjectExternalLink[];
  className?: string;
};

export function ProjectLinkRail({ links, className }: ProjectLinkRailProps) {
  if (!links.length) {
    return null;
  }

  return (
    <div className={["project-link-rail", className].filter(Boolean).join(" ")}>
      {links.map((link) => (
        <a
          key={`${link.kind}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="project-link-pill"
          data-accent={link.accent ?? "indigo"}
          aria-label={link.label}
        >
          <span className="project-link-badge">{renderLinkGlyph(link.kind)}</span>
          <span className="project-link-text">{link.label}</span>
          <ArrowUpRight className="project-link-arrow" />
        </a>
      ))}
    </div>
  );
}

function renderLinkGlyph(kind: ProjectExternalLink["kind"]) {
  switch (kind) {
    case "site":
      return <Globe2 className="project-link-icon" />;
    case "trust":
      return <ShieldCheck className="project-link-icon" />;
    case "instagram":
      return <Instagram className="project-link-icon" />;
    case "github":
      return <Github className="project-link-icon" />;
    case "x":
    default:
      return <span className="project-link-xmark">X</span>;
  }
}
