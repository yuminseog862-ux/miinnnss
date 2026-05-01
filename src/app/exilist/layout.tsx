import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minnns / Exilist Web3 마케팅 매니저 Role-Fit Draft",
  description:
    "Exilist Web3 블록체인 마케팅 매니저 지원 검토를 위해 기존 AHEYABARAYA, CrossAngle, Creative, TainAI 자산을 정직하게 재구성한 role-fit draft입니다.",
  icons: {
    icon: "/aheya/logo.png",
    shortcut: "/aheya/logo.png",
    apple: "/aheya/logo.png",
  },
};

export default function ExilistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
