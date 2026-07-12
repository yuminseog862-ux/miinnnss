import type { Metadata } from "next";

import { AiExplorationPage } from "@/components/ai-exploration/ai-exploration-page";

export const metadata: Metadata = {
  title: "AI Exploration | AI Creative Portfolio",
  description:
    "AHEYA에서 26개의 IDOL 제작 단위, MV 실패와 개선, INK, Workbench까지 AI 변화를 실제 제작 병목에 적용한 실험 연대기.",
};

export default function AiExplorationRoute() {
  return <AiExplorationPage />;
}
