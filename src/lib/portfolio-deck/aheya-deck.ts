import type { DeckContent } from "./types";
import { aheyaSlides } from "./projects/aheya";

export const aheyaDeck: DeckContent = {
  navTitle: "AHEYA Portfolio Deck",
  introKicker: "AHEYA Product / GTM Portfolio",
  introTitle: "AHEYA의 first-signal product/GTM planning만 분리해 보여줍니다.",
  introBody:
    "AI builder의 공개 아이디어를 후원, 피드백, 공유, 저장 흐름으로 연결한 서비스 프로토타입과 공개 메시지 구조를 AHEYA 단독 사례로 읽습니다.",
  hideIntro: true,
  footerNote: "AHEYA Product / GTM Portfolio",
  focusAreas: ["Product Planning", "GTM Strategy", "Signal-based Decision Making", "Public Content Workflow"],
  coverCases: [
    {
      title: "AHEYA / AHEYABARAYA",
      label: "Product / GTM Case",
      body: "First-signal flow, message framing, public content surface, signal review",
    },
  ],
  sectionMeta: [{ label: "AHEYA", title: "Product / GTM Planning + Signal Review", range: "09", href: "#slide-09" }],
  slides: aheyaSlides,
};
