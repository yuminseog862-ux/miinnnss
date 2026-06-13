import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Creative Portfolio",
  description: "Public portfolio hub for AI creative short-form, IP content, and service prototype work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
