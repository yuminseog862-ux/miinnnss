import type { DeckContent } from "./types";
import { aheyaSlides } from "./projects/aheya";
import { aheyaAppendixSlides } from "./projects/aheya-appendix";
import { adsbSlides } from "./projects/adsb";
import { commonSlides } from "./projects/common";
import { supportSlides } from "./projects/support";

const slides = [...commonSlides, ...aheyaSlides, ...adsbSlides, ...supportSlides, ...aheyaAppendixSlides];

export const aheyaAdsbDeck: DeckContent = {
  navTitle: "Portfolio Deck System",
  introKicker: "AHEYA / ADSB / AB-Luna / SFTI Portfolio Master",
  introTitle: "제품 구조, GTM 메시지, 콘텐츠 실험, 판단 근거를 PPT-ready deck으로 정리했습니다.",
  introBody:
    "AHEYA는 Core Rail 본문과 Trust API/onchain/legacy appendix를 분리했습니다. ADSB는 두 번째 메인 콘텐츠 케이스, AB-Luna는 AI workflow와 사용자 리서치 검증면, SFTI는 research writing support case로 유지합니다.",
  footerNote: "AHEYA PM/GTM + ADSB Creative + AB-Luna/SFTI Support + Appendix",
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
    { label: "Common", title: "공통 / 도입부", range: "01-08", href: "#slide-01" },
    { label: "AHEYA", title: "PM + GTM + Marketing/Content", range: "09-29", href: "#slide-09" },
    { label: "ADSB", title: "AI Creative Content", range: "30-37", href: "#slide-30" },
    { label: "AB-Luna", title: "AI Workflow / Handoff MVP", range: "38-44", href: "#slide-38" },
    { label: "SFTI", title: "Research Writing / External Submission", range: "45-48", href: "#slide-45" },
    { label: "Appendix", title: "AHEYA Boundaries / Source Evidence", range: "49-52", href: "#slide-49" },
  ],
  slides,
};
