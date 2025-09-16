"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Download, ArrowRight, Sparkles } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingSphere } from "@/components/three/floating-sphere"
import { ParticleBackground } from "@/components/three/particle-field"
import { Suspense } from "react"

export function EnhancedHeroSection() {
  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  if (!mounted) {
    return null
  }

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Three.js Background with error boundary */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        }
      >
        <ParticleBackground />
      </Suspense>

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.07]"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center lg:text-left"
          >
            {/* Profile Image with enhanced styling */}
            <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Shubham Asati - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="160px"
                  />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Main heading with enhanced typography */}
            <motion.div variants={itemVariants}>
              <h1 className="font-poppins text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                <span className="block text-muted-foreground text-xl md:text-2xl font-normal mb-4">Hi, I&apos;m</span>
                <GradientText className="block">Shubham Asati</GradientText>
              </h1>
            </motion.div>

            {/* Animated role text */}
            <motion.div variants={itemVariants} className="mt-6 h-16 md:h-20">
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
                  "Innovation Driver",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary"
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>

            {/* Enhanced description */}
            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              I love to build things that make a difference. Passionate about creating elegant solutions to complex
              problems using modern web technologies and AI integration. Let&apos;s build the future together.
            </motion.p>

            {/* Stats section */}
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center lg:text-left">
                <AnimatedCounter end={50} suffix="+" />
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter end={3} suffix="+" />
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter end={25} suffix="+" />
                <p className="text-sm text-muted-foreground mt-1">Technologies</p>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter end={100} suffix="%" />
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <MagneticButton size="lg" asChild>
                <Link href="#projects" aria-label="View my portfolio projects">
                  <span className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </MagneticButton>
              <MagneticButton size="lg" variant="outline" asChild>
                <Link href="/resume.pdf" download aria-label="Download Shubham Asati's resume">
                  <span className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Enhanced social links */}
            <motion.div variants={itemVariants} className="mt-10 flex justify-center lg:justify-start space-x-6">
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://github.com/shubhamasati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg transition-all duration-300"
                  aria-label="Visit Shubham Asati's GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://linkedin.com/in/shubhamasati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg transition-all duration-300"
                  aria-label="Visit Shubham Asati's LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Sphere with fallback */}
          <motion.div variants={itemVariants} className="hidden lg:block h-96">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse" />
                </div>
              }
            >
              <FloatingSphere />
            </Suspense>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-16 flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-4">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
