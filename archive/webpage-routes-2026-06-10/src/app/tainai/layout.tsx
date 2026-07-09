import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minnns / TainAI 지원용 포트폴리오",
  description:
    "TainAI 지원을 위해 정리한 포트폴리오입니다. AHEYA, AB-Luna, Aurora, ILYSB 중심으로 문제 정의, 화면, 운영, 보류 판단 기록을 모았습니다.",
  icons: {
    icon: "/aheya/logo.png",
    shortcut: "/aheya/logo.png",
    apple: "/aheya/logo.png",
  },
};

export default function TainaiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
