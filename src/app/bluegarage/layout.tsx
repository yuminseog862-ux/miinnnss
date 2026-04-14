import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yumin Seog / AI Creative Planning / Character-led Identity Systems",
  description:
    "Portfolio for Blue Garage AI Artist / Creative Planning. Character-led identity systems, emotional clarity, and buildable creative direction across product, visuals, and public channels.",
};

export default function BlueGarageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
