import type { DeckContent } from "./types";
import { aheyaSlides } from "./projects/aheya";
import { aheyaAppendixSlides } from "./projects/aheya-appendix";
import { adsbSlides } from "./projects/adsb";
import { commonSlides } from "./projects/common";
import { supportSlides } from "./projects/support";

const slides = [...commonSlides, ...aheyaSlides, ...adsbSlides, ...supportSlides, ...aheyaAppendixSlides];

export const aheyaAdsbDeck: DeckContent = {
  navTitle: "Product x GTM x AI Creative Portfolio",
  introKicker: "AHEYA / ADSB / AB-Luna / SFTI Portfolio Master",
  introTitle: "초기 아이디어를 제품 구조, 시장 메시지, 콘텐츠 실험으로 전환합니다.",
  introBody:
    "AHEYA는 product/GTM/content validation, ADSB는 AI creative content production을 보여주는 main case입니다. AB-Luna와 SFTI-CMU는 AI workflow와 research writing support evidence로 읽습니다.",
  footerNote: "Product x GTM x AI Creative Portfolio",
  focusAreas: [
    "Product Planning",
    "GTM Strategy",
    "Marketing Strategy",
    "Content Creation",
    "AI-assisted Execution",
    "Signal-based Decision Making",
  ],
  coverCases: [
    {
      title: "AHEYA / AHEYABARAYA",
      label: "Flagship Case",
      body: "PM, GTM, Marketing, Content 실험 흐름",
    },
    {
      title: "ADSB",
      label: "Second Main Case",
      body: "AI 기반 콘텐츠 크리에이션, 브랜드 해석, 숏폼 제작 흐름",
    },
    {
      title: "AB-Luna",
      label: "Workflow Support",
      body: "AI handoff MVP와 UX 개선 흐름",
    },
    {
      title: "SFTI-CMU",
      label: "Research Support",
      body: "영어 리서치 문서화와 외부 제출 구조화",
    },
  ],
  sectionMeta: [
    { label: "Cover", title: "Positioning", range: "01", href: "#slide-01" },
    { label: "AHEYA", title: "Product / GTM / Content Validation", range: "09", href: "#slide-09" },
    { label: "ADSB", title: "AI Creative Content Production", range: "30", href: "#slide-30" },
    { label: "AB-Luna", title: "Supporting Evidence", range: "38", href: "#slide-38" },
    { label: "SFTI", title: "Research Support", range: "45", href: "#slide-45" },
    { label: "Appendix", title: "Technical Archive", range: "49", href: "#slide-49" },
  ],
  slides,
};
