export type Accent = "aqua" | "amber" | "violet" | "cyan" | "danger";

export type SlideVariant = "cover" | "toc" | "split" | "process" | "matrix" | "evidence";

export type SlideSection = "Common" | "AHEYA" | "ADSB" | "SFTI" | "AB-Luna" | "Appendix";

export type SlideTable = {
  headers: string[];
  rows: string[][];
};

export type SlideMedia = {
  src: string;
  alt: string;
  label: string;
};

export type SlideLink = {
  label: string;
  href: string;
  description: string;
};

export type Slide = {
  no: number;
  section: SlideSection;
  title: string;
  label: string;
  accent: Accent;
  variant: SlideVariant;
  intent: string;
  claim: string;
  include: string[];
  slots: string[];
  process?: string[];
  table?: SlideTable;
  media?: SlideMedia;
  links?: SlideLink[];
  note?: string;
};

export type SectionMeta = {
  label: string;
  title: string;
  range: string;
  href: string;
};

export type CoverCase = {
  title: string;
  label: string;
  body: string;
};

export type DeckContent = {
  navTitle: string;
  introKicker: string;
  introTitle: string;
  introBody: string;
  footerNote: string;
  focusAreas: string[];
  coverCases: CoverCase[];
  sectionMeta: SectionMeta[];
  slides: Slide[];
};

export function paddedSlideNo(no: number) {
  return String(no).padStart(2, "0");
}
