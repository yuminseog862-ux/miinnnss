import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GIGR / AI Content Creator Portfolio",
  description:
    "GIGR 지원용 AI 콘텐츠 크리에이터 포트폴리오. 캐릭터, 장면, 짧은 문장으로 광고 훅과 숏폼 자산을 만든 작업을 정리합니다.",
};

export default function GigrLayout({ children }: { children: ReactNode }) {
  return children;
}
