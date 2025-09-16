import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { SimpleHeroSection } from "@/components/simple-hero-section";
import { AboutSection } from "@/components/about-section";
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { EducationSection } from "@/components/education-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { ContactSection } from "@/components/contact-section";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingElements } from "@/components/ui/floating-elements";
import { LiveChatWidget } from "@/components/advanced/live-chat";
import { ProjectShowcase } from "@/components/advanced/project-showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shubham Asati | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Shubham Asati, a passionate full stack developer specializing in React, Next.js, Node.js, and AI integration. View projects, skills, and contact information.",
  openGraph: {
    title: "Shubham Asati | Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Shubham Asati, a passionate full stack developer specializing in React, Next.js, Node.js, and AI integration.",
    url: "https://shubhamasati.tech",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubham Asati - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Asati | Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Shubham Asati, a passionate full stack developer specializing in React, Next.js, Node.js, and AI integration.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shubhamasati.tech",
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ScrollProgress />
      <FloatingElements />

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <MainNav />
      </header>

      <main className="flex-1">
        <SimpleHeroSection />
        <AboutSection />
        <EnhancedSkillsSection />
        <ExperienceTimeline />
        <EducationSection />

        {/* Enhanced Project Showcase */}
        <section id="projects" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Project Portfolio
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Browse through my complete project portfolio with advanced
                filtering and search capabilities.
              </p>
            </div>
            <ProjectShowcase />
          </div>
        </section>

        <TestimonialsSection />
        <BlogPreviewSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <BackToTop />
      <LiveChatWidget />
    </div>
  );
}
