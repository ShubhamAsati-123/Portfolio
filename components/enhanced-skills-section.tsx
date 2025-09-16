"use client";

import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function EnhancedSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = {
    programming: [
      { name: "C++", level: 90, color: "#00599c" },
      { name: "Python", level: 85, color: "#3776ab" },
      { name: "JavaScript", level: 88, color: "#f7df1e" },
      { name: "TypeScript", level: 82, color: "#3178c6" },
      { name: "Java", level: 75, color: "#ed8b00" },
    ],
    frontend: [
      { name: "React.js", level: 90, color: "#61dafb" },
      { name: "Next.js", level: 88, color: "#000000" },
      { name: "Redux", level: 80, color: "#764abc" },
      { name: "React Native", level: 75, color: "#61dafb" },
      { name: "HTML / CSS", level: 92, color: "#e34f26" },
    ],
    backend: [
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "FastAPI", level: 78, color: "#009688" },
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "MongoDB", level: 80, color: "#47a248" },
      { name: "PostgreSQL", level: 75, color: "#336791" },
    ],
    tools: [
      { name: "Docker", level: 75, color: "#2496ed" },
      { name: "Git / GitHub", level: 90, color: "#f05032" },
      { name: "Firebase", level: 85, color: "#ffca28" },
      { name: "Linux", level: 80, color: "#fcc624" },
      { name: "VPS Deployment", level: 78, color: "#326ce5" },
      { name: "Selenium", level: 70, color: "#43b02a" },
    ],
  };

  const allTechnologies = [
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "React.js",
    "Next.js",
    "Express.js",
    "Redux",
    "React Native",
    "FastAPI",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git",
    "GitHub",
    "Firebase",
    "Linux",
    "Selenium",
    "VPS Deployment",
    "Jest",
    "Cypress",
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;ve developed a diverse skill set throughout my career,
            focusing on modern technologies and best practices.
          </p>
        </div>

        {/* Simplified - only showing progress bars for now */}

        {/* Skills Content */}
        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Technology Tags */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
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
  );
}
