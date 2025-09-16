import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhamasati.tech"),
  title: {
    default: "Shubham Asati | Full Stack Developer & AI Enthusiast",
    template: "%s | Shubham Asati",
  },
  description:
    "Portfolio of Shubham Asati, a passionate full stack developer specializing in React, Next.js, Node.js, and AI integration. Building innovative web applications that make a difference.",
  keywords: [
    "Shubham Asati",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Developer",
    "Portfolio",
    "Mumbai Developer",
    "India Developer",
  ],
  authors: [{ name: "Shubham Asati", url: "https://shubhamasati.tech" }],
  creator: "Shubham Asati",
  publisher: "Shubham Asati",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhamasati.tech",
    title: "Shubham Asati | Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Shubham Asati, a passionate full stack developer specializing in React, Next.js, Node.js, and AI integration.",
    siteName: "Shubham Asati Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubham Asati - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Asati | Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Shubham Asati, a passionate full stack developer specializing in React, Next.js, Node.js, and AI integration.",
    images: ["/og-image.jpg"],
    creator: "@shubhamasati",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://shubhamasati.tech",
    languages: {
      "en-US": "https://shubhamasati.tech",
    },
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
        {/* <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rq1bjsio0x");
</script> */}
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
