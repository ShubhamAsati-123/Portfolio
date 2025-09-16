"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const frontendSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "HTML / CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
  ]

  const otherSkills = [
    { name: "Git / GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 75 },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20"
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;ve developed a diverse skill set throughout my career, focusing on both frontend and backend
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Other</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "GraphQL",
            "Redux",
            "Tailwind CSS",
            "Git",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-muted rounded-lg p-3 text-center text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
