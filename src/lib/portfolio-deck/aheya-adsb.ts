import type { DeckContent } from "./types";
import { aheyaSlides } from "./projects/aheya";
import { aheyaAppendixSlides } from "./projects/aheya-appendix";
import { adsbSlides } from "./projects/adsb";
import { commonSlides } from "./projects/common";
import { supportSlides } from "./projects/support";

const slides = [...commonSlides, ...aheyaSlides, ...adsbSlides, ...supportSlides, ...aheyaAppendixSlides];

export const aheyaAdsbDeck: DeckContent = {
  navTitle: "Product / GTM / AI-assisted Execution Portfolio",
  introKicker: "AHEYA-led Product / GTM Portfolio",
  introTitle: "초기 아이디어를 제품 구조, GTM 메시지, AI-assisted execution loop로 전환합니다.",
  introBody:
    "AHEYA는 product/GTM planning과 signal review를 보여주는 flagship case입니다. ADSB는 prompt, storyboard, image-to-video iteration을 통해 GTM/content 실행력을 보조하는 second main case입니다. AB-Luna와 SFTI-CMU는 workflow와 research communication support evidence로 읽습니다.",
  footerNote: "Product / GTM / AI-assisted Execution Portfolio",
  focusAreas: [
    "Product Planning",
    "GTM Strategy",
    "Signal-based Decision Making",
    "AI-assisted Execution",
    "Marketing Strategy",
    "GTM Content Workflow",
  ],
  coverCases: [
    {
      title: "AHEYA / AHEYABARAYA",
      label: "Flagship Case",
      body: "Product/GTM planning, message framing, signal review",
    },
    {
      title: "ADSB",
      label: "Second Main Case",
      body: "Brand reading, prompt/motion direction, short-form execution workflow",
    },
    {
      title: "AB-Luna",
      label: "Workflow Support",
      body: "AI handoff MVP와 UX 개선 흐름",
    },
    {
      title: "SFTI-CMU",
      label: "Research Support",
      body: "Research communication과 English structuring support",
    },
  ],
  sectionMeta: [
    { label: "Cover", title: "Positioning", range: "01", href: "#slide-01" },
    { label: "AHEYA", title: "Product / GTM Planning + Signal Review", range: "09", href: "#slide-09" },
    { label: "ADSB", title: "AI-assisted Content Execution", range: "30", href: "#slide-30" },
    { label: "AB-Luna", title: "Supporting Evidence", range: "38", href: "#slide-38" },
    { label: "SFTI", title: "Research Communication Support", range: "45", href: "#slide-45" },
    { label: "Appendix", title: "Technical Evidence / Appendix", range: "49", href: "#slide-49" },
  ],
  slides,
};
