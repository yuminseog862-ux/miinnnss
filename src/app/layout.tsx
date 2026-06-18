import type { Metadata } from "next";

import { MainPageCta } from "@/components/main-page-cta";

export const metadata: Metadata = {
  title: "AI Creative Portfolio",
  description: "Public portfolio hub for AI creative short-form, IP content, and service prototype work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, background: "#020303" }}>
        {children}
        <MainPageCta />
      </body>
    </html>
  );
}
