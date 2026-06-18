import type { DeckContent } from "./types";
import { sftiSlides } from "./projects/sfti";

export const sftiDeck: DeckContent = {
  navTitle: "SFTI-CMU Portfolio Deck",
  introKicker: "SFTI-CMU Research Communication Portfolio",
  introTitle: "SFTI-CMU의 research communication support만 분리해 보여줍니다.",
  introBody:
    "AI-generated emotional content 아이디어를 niche fashion brand의 콘텐츠 확장 한계와 identity-based visual clustering 관점으로 좁힌 영문 초록/포스터 구조화 사례를 SFTI 단독 흐름으로 읽습니다.",
  hideIntro: true,
  footerNote: "SFTI-CMU Research Communication Portfolio",
  focusAreas: ["Research Framing", "English Abstract", "Poster Structure", "Revision Evidence"],
  coverCases: [
    {
      title: "SFTI-CMU",
      label: "Research Communication Support",
      body: "Research framing, English abstract structuring, poster-style organization, revision evidence",
    },
  ],
  sectionMeta: [{ label: "SFTI", title: "Research Communication Support", range: "45", href: "#slide-45" }],
  slides: sftiSlides,
};
