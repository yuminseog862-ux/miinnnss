import type { DeckContent } from "./types";
import { adsbSlides } from "./projects/adsb";

export const adsbDeck: DeckContent = {
  navTitle: "ADSB AI-assisted Short-form Execution",
  introKicker: "2025 Industry–Academia Collaboration",
  introTitle: "ADSB AI-assisted Short-form Execution",
  introBody:
    "Andersson Bell의 브랜드 무드를 dog-and-ball hook과 고정 앵글 장면 규칙으로 좁히고, 이미지·영상 후보 비교와 피드백 반영을 15초 AI 숏폼으로 연결한 제작 사례입니다.",
  hideIntro: true,
  footerNote: "ADSB AI-assisted Short-form Execution · 2025 Industry–Academia Collaboration",
  focusAreas: ["Brand Reading", "Prompt Direction", "Motion Direction", "Feedback Revision", "Short-form Execution"],
  coverCases: [
    {
      title: "ADSB AI-assisted Short-form Execution",
      label: "2025 Industry–Academia Collaboration",
      body: "Brand research, shotboard, AI frame/motion direction, feedback revision, final Reel",
    },
  ],
  sectionMeta: [{ label: "ADSB", title: "Brand reading → 15s short-form execution", range: "30", href: "#slide-30" }],
  slides: adsbSlides,
};
