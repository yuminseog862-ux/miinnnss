import type { DeckContent } from "./types";
import { adsbSlides } from "./projects/adsb";

export const adsbDeck: DeckContent = {
  navTitle: "ADSB Portfolio Deck",
  introKicker: "ADSB AI-assisted Short-form Portfolio",
  introTitle: "ADSB의 AI-assisted short-form execution만 분리해 보여줍니다.",
  introBody:
    "Andersson Bell 산학공동연구에서 브랜드 무드를 dog-and-ball hook, prompt direction, image-to-video iteration으로 좁힌 숏폼 제작 사례를 ADSB 단독 흐름으로 읽습니다.",
  hideIntro: true,
  footerNote: "ADSB AI-assisted Short-form Portfolio",
  focusAreas: ["Brand Reading", "Prompt Direction", "Motion Direction", "Feedback Revision", "Short-form Execution"],
  coverCases: [
    {
      title: "ADSB",
      label: "AI-assisted Content Execution",
      body: "Brand mood reading, prompt/motion direction, Instagram short-form output",
    },
  ],
  sectionMeta: [{ label: "ADSB", title: "AI-assisted Content Execution", range: "30", href: "#slide-30" }],
  slides: adsbSlides,
};
