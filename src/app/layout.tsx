import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#7c3aed",
};

export const metadata: Metadata = {
  title: "ActivityDeck - Fun Activities for Kids",
  description:
    "Swipe through 100+ activity ideas for kids aged 2-10. Filter by age, energy level, location and supplies needed. Never hear 'I'm bored' again.",
  keywords:
    "kids activities, family fun, children entertainment, indoor activities, outdoor activities, bored kids, activity ideas",
  authors: [{ name: "Arc Forge" }],
  openGraph: {
    title: "ActivityDeck - Fun Activities for Kids",
    description:
      "Swipe through 100+ activity ideas for kids aged 2-10. Filter by age, energy, location and supplies.",
    type: "website",
    url: "https://activity-deck.vercel.app",
    siteName: "ActivityDeck",
  },
  twitter: {
    card: "summary_large_image",
    title: "ActivityDeck - Fun Activities for Kids",
    description:
      "Swipe through 100+ activity ideas. Never hear 'I'm bored' again.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
