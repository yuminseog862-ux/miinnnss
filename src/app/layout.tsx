import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work / Portfolio",
  description:
    "Selected work archive built for public case-study publishing without exposing raw documents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
