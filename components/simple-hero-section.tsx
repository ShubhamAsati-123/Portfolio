"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";

export function SimpleHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.07]"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 backdrop-blur-sm">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">SA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="font-poppins text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                <span className="block text-muted-foreground text-xl md:text-2xl font-normal mb-4">
                  Hi, I&apos;m
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Shubham Asati
                </span>
              </h1>
            </div>

            {/* Role text */}
            <div className="mt-6 h-16 md:h-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
                Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Aspiring Software Engineer with strong CS fundamentals and
              experience building scalable apps using Next.js, Firebase, and
              MongoDB. Solved 500+ DSA problems and achieved top-60 finalist
              status in Google & AMD Hackathon. Currently pursuing B.Tech in
              Computer Science at IIIT Pune with a passion for innovation and
              problem-solving.
            </p>

            {/* Stats section */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center lg:text-left">
                <span className="font-bold text-2xl">500+</span>
                <p className="text-sm text-muted-foreground mt-1">
                  DSA Problems
                </p>
              </div>
              <div className="text-center lg:text-left">
                <span className="font-bold text-2xl">10+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="text-center lg:text-left">
                <span className="font-bold text-2xl">1639</span>
                <p className="text-sm text-muted-foreground mt-1">
                  CodeChef Rating
                </p>
              </div>
              <div className="text-center lg:text-left">
                <span className="font-bold text-2xl">60</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Top Hackathon Rank
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button size="lg" asChild>
                <Link href="#projects" aria-label="View my portfolio projects">
                  <span className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="/resume.pdf"
                  download
                  aria-label="Download Shubham Asati's resume"
                >
                  <span className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </span>
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="mt-10 flex justify-center lg:justify-start space-x-6">
              <Link
                href="https://github.com/ShubhamAsati-123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Visit Shubham Asati's GitHub profile"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/shubham-asati-054ba124b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Visit Shubham Asati's LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Simple visual element */}
          <div className="hidden lg:block h-96">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse opacity-50" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-4">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
