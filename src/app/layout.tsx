import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content Marketing Portfolio",
  description: "Common resume and portfolio routing hub for AI content marketing projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
