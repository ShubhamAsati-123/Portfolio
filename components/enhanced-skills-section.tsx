"use client"

import { useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { SkillsCubes } from "@/components/three/interactive-cube"
import { SkillRadarChart } from "@/components/advanced/skill-radar"

export function EnhancedSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeView, setActiveView] = useState("bars")

  const skillCategories = {
    frontend: [
      { name: "React / Next.js", level: 95, color: "#61dafb" },
      { name: "TypeScript", level: 90, color: "#3178c6" },
      { name: "HTML / CSS", level: 95, color: "#e34f26" },
      { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
      { name: "JavaScript", level: 92, color: "#f7df1e" },
      { name: "Vue.js", level: 75, color: "#4fc08d" },
    ],
    backend: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express", level: 80, color: "#000000" },
      { name: "Python", level: 78, color: "#3776ab" },
      { name: "MongoDB", level: 75, color: "#47a248" },
      { name: "PostgreSQL", level: 70, color: "#336791" },
      { name: "GraphQL", level: 72, color: "#e10098" },
    ],
    tools: [
      { name: "Git / GitHub", level: 85, color: "#f05032" },
      { name: "Docker", level: 70, color: "#2496ed" },
      { name: "AWS", level: 65, color: "#ff9900" },
      { name: "Vercel", level: 88, color: "#000000" },
      { name: "CI/CD", level: 75, color: "#326ce5" },
      { name: "Figma", level: 80, color: "#f24e1e" },
    ],
    ai: [
      { name: "OpenAI API", level: 85, color: "#412991" },
      { name: "TensorFlow", level: 65, color: "#ff6f00" },
      { name: "Hugging Face", level: 70, color: "#ff9d00" },
      { name: "LangChain", level: 75, color: "#1c3c3c" },
      { name: "Vector DBs", level: 68, color: "#ff6b6b" },
      { name: "RAG Systems", level: 72, color: "#4ecdc4" },
    ],
  }

  const allTechnologies = [
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
    "Docker",
    "AWS",
    "Python",
    "TensorFlow",
    "OpenAI",
    "Vercel",
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
            I&apos;ve developed a diverse skill set throughout my career, focusing on modern technologies and best
            practices.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={activeView === "bars" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveView("bars")}
            >
              Progress Bars
            </Button>
            <Button variant={activeView === "3d" ? "default" : "ghost"} size="sm" onClick={() => setActiveView("3d")}>
              3D Interactive
            </Button>
            <Button
              variant={activeView === "radar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveView("radar")}
            >
              Radar Chart
            </Button>
          </div>
        </div>

        {/* Skills Content */}
        {activeView === "bars" && (
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }} />
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-3" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}

        {activeView === "3d" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SkillsCubes />
            <p className="text-center text-muted-foreground mt-4">Click and drag to interact with the 3D skill cubes</p>
          </motion.div>
        )}

        {activeView === "radar" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <SkillRadarChart />
          </motion.div>
        )}

        {/* Technology Tags */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
