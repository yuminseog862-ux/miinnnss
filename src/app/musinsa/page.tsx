import type { Metadata } from "next";

const deckSrc = "/musinsa/record/presentation/musinsa-mujinjang-case-study.html";

export const metadata: Metadata = {
  title: "Musinsa Mujinjang AI Ad Contest Case Study",
  description:
    "2026 무신사 무진장 인공지능 광고 공모전 제출 케이스. 축원굿의 성공 기원 구조를 무신사 오렌지 신호가 이어지는 글로벌 패션 릴레이로 번역한 3인 팀 AI 광고 제작 기록.",
};

export default function MusinsaPortfolioPage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        margin: 0,
        background: "#030405",
      }}
    >
      <iframe
        title="무신사 무진장 인공지능 광고 공모전 제출 케이스"
        src={deckSrc}
        style={{
          display: "block",
          width: "100vw",
          height: "100svh",
          border: 0,
          background: "#030405",
        }}
      />
    </main>
  );
}
