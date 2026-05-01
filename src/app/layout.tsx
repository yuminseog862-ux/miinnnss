import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minnns creative planning / Product x GTM x AI Creative Portfolio",
  description:
    "Portfolio focused on product planning, GTM messaging, AI image and video direction, and web3 product strategy.",
  icons: {
    icon: "/aheya/logo.png",
    shortcut: "/aheya/logo.png",
    apple: "/aheya/logo.png",
  },
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
