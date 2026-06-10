import { ProjectPage } from "@/components/portfolio-hub/portfolio-pages";
import { getProject } from "@/lib/portfolio-hub/content";

export default function AheyaPage() {
  const project = getProject("aheya");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
