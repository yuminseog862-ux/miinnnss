import { ProjectPage } from "@/components/portfolio-hub/portfolio-pages";
import { getProject } from "@/lib/portfolio-hub/content";

export default function MusinsaPage() {
  const project = getProject("musinsa");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
