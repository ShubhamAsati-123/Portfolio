"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-muted/50"
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container">
        <header className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" itemProp="name">
            Who I Am
          </h2>
          <p className="text-muted-foreground max-w-2xl" itemProp="description">
            I&apos;m a passionate full stack developer with a love for creating elegant, efficient solutions to complex
            problems. My journey in tech has been driven by curiosity and a desire to make a positive impact through
            innovative web applications and AI integration.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                <p className="text-muted-foreground">
                  Proficient in modern web technologies including React, Next.js, Node.js, TypeScript, and AI
                  integration. I build scalable, performant applications with clean, maintainable code following
                  industry best practices.
                </p>
              </article>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-muted-foreground">
                  I enjoy tackling complex challenges and finding innovative solutions. My analytical approach helps me
                  break down problems systematically and build effective, user-centered solutions that address
                  real-world needs.
                </p>
              </article>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
                <p className="text-muted-foreground">
                  The tech landscape is always evolving, and so am I. I&apos;m committed to continuous learning and
                  staying at the forefront of industry trends, particularly in AI, web performance, and user experience
                  design.
                </p>
              </article>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
