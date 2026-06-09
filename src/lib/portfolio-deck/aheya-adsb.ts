import type { DeckContent } from "./types";
import { aheyaSlides } from "./projects/aheya";
import { aheyaAppendixSlides } from "./projects/aheya-appendix";
import { adsbSlides } from "./projects/adsb";
import { commonSlides } from "./projects/common";
import { supportSlides } from "./projects/support";

const slides = [...commonSlides, ...aheyaSlides, ...adsbSlides, ...supportSlides, ...aheyaAppendixSlides];

export const aheyaAdsbDeck: DeckContent = {
  navTitle: "Product/GTM Planner — AI-assisted Execution & Signal Review",
  introKicker: "AHEYA-led Product/GTM Planning Portfolio",
  introTitle: "초기 아이디어를 제품 구조, GTM 메시지, AI-assisted 실행 루프, 다음 판단 단위로 좁힙니다.",
  introBody:
    "AHEYA는 AI 앱 아이디어를 public page, small support, Good/Improve feedback, saved record, measurement read model로 좁힌 flagship case입니다. ADSB는 공유된 brand reading을 dog-and-ball hook, motif rule, prompt/motion direction, image-to-video sequence로 압축한 second main case입니다. AB-Luna와 SFTI-CMU는 workflow와 research communication support evidence로 읽습니다.",
  footerNote: "Product/GTM Planner — AI-assisted Execution & Signal Review",
  focusAreas: [
    "Product/GTM Planning",
    "AI-assisted Execution",
    "Signal Review",
    "Decision Read Model",
    "GTM Message Execution",
    "Support Evidence",
  ],
  coverCases: [
    {
      title: "AHEYA / AHEYABARAYA",
      label: "Flagship Case",
      body: "AI 앱 아이디어를 행동 경로, 메시지, 측정 단위로 좁힌 초기 반응 확인 설계 사례",
    },
    {
      title: "ADSB",
      label: "Second Main Case",
      body: "Shared brand reading을 hook, motif rule, prompt/motion direction으로 수렴시킨 creative direction case",
    },
    {
      title: "AB-Luna",
      label: "Workflow Support",
      body: "AI output 이후 handoff 문제를 product layer로 정의한 support evidence",
    },
    {
      title: "SFTI-CMU",
      label: "Research Support",
      body: "감각적 AI content idea를 external reader-ready research structure로 재배치한 support evidence",
    },
  ],
  sectionMeta: [
    { label: "Cover", title: "Positioning", range: "01", href: "#slide-01" },
    { label: "AHEYA", title: "초기 반응 확인 Product/GTM Planning", range: "09", href: "#slide-09" },
    { label: "ADSB", title: "AI Short-form Creative Direction", range: "30", href: "#slide-30" },
    { label: "AB-Luna", title: "Supporting Evidence", range: "38", href: "#slide-38" },
    { label: "SFTI", title: "Research Communication Support", range: "45", href: "#slide-45" },
    { label: "Appendix", title: "Technical Boundary Evidence", range: "49", href: "#slide-49" },
  ],
  slides,
};
