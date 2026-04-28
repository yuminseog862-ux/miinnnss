import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minnns / Xangle GTM 지원 포트폴리오",
  description:
    "Xangle GTM Team 지원을 위해 정리한 포트폴리오입니다. AHEYABARAYA를 메인 케이스로 두고 시장 리서치, 데일리 콘텐츠, 프로젝트 정보 정리, X 운영, 숏폼 제작 근거를 보여줍니다.",
  icons: {
    icon: "/aheya/logo.png",
    shortcut: "/aheya/logo.png",
    apple: "/aheya/logo.png",
  },
};

export default function CrossangleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
