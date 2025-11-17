import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Asati - Software Developer",
  description: "The portfolio of Shubham Asati, a software developer.",
  keywords: [
    "portfolio",
    "software developer",
    "next.js",
    "react",
    "typescript",
  ],
  authors: [{ name: "Shubham Asati" }],
  creator: "Shubham Asati",
  openGraph: {
    title: "Shubham Asati - Software Developer",
    description: "The portfolio of Shubham Asati, a software developer.",
    url: "https://shubhamasati.tech",
    siteName: "Shubham Asati Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
