import "@/styles/globals.css";
import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import Navbar from "@/components/main-nav";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const fontSans = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-caveat",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Shubham Asati - Full Stack Developer",
  description:
    "Portfolio of Shubham Asati, a passionate full stack developer building innovative solutions.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-gray-900 to-black font-sans antialiased py-8 px-10 md:py-8 md:px-60",
          fontSans.variable,
          inter.variable,
          playfair.variable,
          firaCode.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="mt-16 ">{children}</div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
