"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.07]"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src="/profile-image.jpg"
                alt="Shubham Asati - Full Stack Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
          </div>

          <h1 className="font-poppins text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-muted-foreground text-xl md:text-2xl font-normal mb-2">Hi, I&apos;m</span>
            Shubham Asati
          </h1>
          <div className="mt-6 h-12 md:h-16">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Specialist",
                2000,
                "AI Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-primary"
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I love to build things that make a difference. Passionate about creating elegant solutions to complex
            problems using modern web technologies and AI integration.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#projects" aria-label="View my portfolio projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" download aria-label="Download Shubham Asati's resume">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/shubhamasati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shubham Asati's GitHub profile"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/shubhamasati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shubham Asati's LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
