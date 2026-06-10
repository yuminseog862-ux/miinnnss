import { ProjectPage } from "@/components/portfolio-hub/portfolio-pages";
import { getProject } from "@/lib/portfolio-hub/content";

export default function AdsbPage() {
  const project = getProject("adsb");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
