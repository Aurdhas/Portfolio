import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurdhas Houndegnon | Portfolio",
  description:
    "Portfolio de Fifame Aurdhas Houndegnon Denakpo — Statisticienne & Développeuse Web Full-stack basée à Cotonou, Bénin.",
  keywords: ["portfolio", "développeuse", "statisticienne", "Next.js", "Bénin"],
  authors: [{ name: "Aurdhas Houndegnon Denakpo" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}