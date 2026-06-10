import { ProjectPage } from "@/components/portfolio-hub/portfolio-pages";
import { getProject } from "@/lib/portfolio-hub/content";

export default function LoomPage() {
  const project = getProject("loom");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
