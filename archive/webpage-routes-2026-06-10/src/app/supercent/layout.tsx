import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minnns / 슈퍼센트 AI 애플리케이션 엔지니어 지원 포트폴리오",
  description:
    "슈퍼센트 AI 애플리케이션 엔지니어 지원을 위해 정리한 포트폴리오. AI workflow, orchestration, build speed, stop judgment 중심.",
  icons: {
    icon: "/aheya/logo.png",
    shortcut: "/aheya/logo.png",
    apple: "/aheya/logo.png",
  },
};

export default function SupercentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
