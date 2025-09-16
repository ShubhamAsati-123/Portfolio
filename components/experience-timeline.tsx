"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Building } from "lucide-react"

export function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Testing Labs",
      location: "Mumbai, India",
      period: "2025 - Present",
      type: "Full-time",
      description: "Started my professional journey building websites and learning modern development practices.",
      achievements: [
        "Completed 15+ websites",
        "Learned modern frameworks",
        "Improved development workflow",
        "Built responsive designs",
      ],
      technologies: ["Nextjs", "Tailwindcss", "JavaScript", "MOngoDB", "Firebase"],
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-muted/50"
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl">
            A timeline of my professional experience and growth in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={experience.type === "Full-time" ? "default" : "secondary"}>
                          {experience.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>

                      <div className="flex items-center gap-4 mb-3 text-muted-foreground">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {experience.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{experience.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
