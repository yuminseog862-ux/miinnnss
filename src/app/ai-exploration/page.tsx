import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import { AiExplorationPortfolioPage } from "@/components/ai-exploration/ai-exploration-portfolio-page";

export const metadata: Metadata = {
  title: "AI Exploration | AI Creative Portfolio",
  description:
    "새로운 AI 변화를 실제 제작 문제에 적용하고, 실패와 선택의 이유를 다음 실험에 남긴 AI Research & Exploration 포트폴리오.",
};

/** Single text face for the whole AI Exploration portfolio (headlines + body). */
const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ai-body",
  display: "swap",
});

export default function AiExplorationRoute() {
  return (
    <div className={bodyFont.variable}>
      <AiExplorationPortfolioPage />
    </div>
  );
}
