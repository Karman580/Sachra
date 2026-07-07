import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sachra.ai"),
  title: {
    default: "Sachra — The Trust Infrastructure for Autonomous AI",
    template: "%s — Sachra",
  },
  description:
    "Sachra creates an immutable Agent Transaction Record for every autonomous AI action — enabling trust, compliance, auditing, and settlement across AI ecosystems.",
  keywords: [
    "AI trust infrastructure",
    "agent transaction record",
    "AI compliance",
    "AI audit",
    "autonomous agents",
    "AI governance",
    "agent settlement",
  ],
  openGraph: {
    title: "Sachra — The Trust Infrastructure for Autonomous AI",
    description:
      "Every AI decision. Verified, auditable, accountable, trusted. Sachra records every autonomous action as an immutable Agent Transaction Record.",
    url: "https://sachra.ai",
    siteName: "Sachra",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachra — The Trust Infrastructure for Autonomous AI",
    description:
      "Every AI decision. Verified, auditable, accountable, trusted.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
