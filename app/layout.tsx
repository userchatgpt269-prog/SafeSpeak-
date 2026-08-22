import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SafeSpeak — Speak freely. Stay safe.",
  description:
    "SafeSpeak is an anonymous support chat with real-time translation and AI-assisted safety monitoring. Talk to someone, in your language, without giving up your identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-canvas text-ink`}>
        {children}
      </body>
    </html>
  );
}
