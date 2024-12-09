import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import localfont from "next/font/local";
import Header from "@/sections/Header";

/* Define and import local fonts with custom variables for styling. */
const gilroy = localfont({
  src: [
    {
      path: "../public/fonts/Gilroy-ExtraBold.otf",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const openSans = localfont({
  src: [
    {
      path: "../public/fonts/OpenSans-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-openSans",
});

/* Page metadata for SEO and display purposes. */
export const metadata: Metadata = {
  title: "Jinlin Wei",
  description: "Bruno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${gilroy.variable} ${openSans.variable}`}>
      {/* Set the document language to French and apply global font styles. */}
      <body>
        <Header />
        {/* Render the page header and child components dynamically. */}
        {children}
        {/* Integrate analytics and speed insights for performance tracking. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
