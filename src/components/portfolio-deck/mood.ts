import type { Slide } from "@/lib/portfolio-deck/types";

export type MoodKey = "general" | "abLuna" | "content" | "document" | "strategy" | "gtm" | "adsb" | "material";

export const moodAsset: Record<MoodKey, string> = {
  general: "/portfolio/mood-assets/01-aheya-planning-general.webp",
  abLuna: "/portfolio/mood-assets/02-ab-luna.webp",
  content: "/portfolio/mood-assets/03-aheya-content.webp",
  document: "/portfolio/mood-assets/04-sfti-doc-interface.webp",
  strategy: "/portfolio/mood-assets/05-aheya-strategy-cube.webp",
  adsb: "/portfolio/mood-assets/06-content-strategy-direction.webp",
  gtm: "/portfolio/mood-assets/07-aheya-gtm-glass-hero.webp",
  material: "/portfolio/mood-assets/08-glass-ui-materials.webp",
};

export function moodForSlide(slide: Slide): MoodKey {
  if (slide.section === "AB-Luna") {
    return "abLuna";
  }

  if (slide.section === "SFTI") {
    return "document";
  }

  if (slide.section === "ADSB") {
    return "adsb";
  }

  if (slide.section === "Appendix") {
    return "strategy";
  }

  const haystack = [slide.title, slide.label, slide.intent, slide.claim, ...slide.include, ...slide.slots]
    .join(" ")
    .toLowerCase();

  if (slide.section === "AHEYA") {
    if (/(gtm|go-to-market|market|launch|channel|funnel|activation|signal|positioning|시장|채널|런칭|퍼널|검증|신호)/.test(haystack)) {
      return "gtm";
    }

    if (/(strategy|mvp|scope|roadmap|metric|tracking|decision|framework|system|전략|구조|범위|지표|판단|로드맵|가설|우선순위)/.test(haystack)) {
      return "strategy";
    }

    if (/(content|creative|visual|story|copy|campaign|marketing|short-form|콘텐츠|크리에이티브|비주얼|세계관|카피|캠페인|이미지|영상)/.test(haystack)) {
      return "content";
    }

    return "general";
  }

  if (slide.variant === "cover") {
    return "material";
  }

  return "general";
}
