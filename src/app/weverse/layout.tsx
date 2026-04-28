import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minnns / Weverse 서비스기획 지원 포트폴리오",
  description:
    "Weverse 서비스기획 지원을 위해 정리한 포트폴리오. 서비스 구조, 공개 표면, 콘텐츠 엔트리, handoff 구조 중심.",
  icons: {
    icon: "/aheya/logo.png",
    shortcut: "/aheya/logo.png",
    apple: "/aheya/logo.png",
  },
};

export default function WeverseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
