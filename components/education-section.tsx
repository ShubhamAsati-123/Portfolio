"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Indian Institute of Information Technology, Pune",
      location: "Pune, Maharashtra",
      period: "Nov 2022 - May 2026",
      status: "Pursuing",
      cgpa: "7.76",
      description:
        "Pursuing Bachelor of Technology in Computer Science and Engineering with strong academic performance and active participation in competitive programming.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "System Design",
        "Machine Learning",
        "Software Engineering",
      ],
      achievements: [
        "Maintaining CGPA of 7.76",
        "Solved 500+ Data Structures & Algorithms problems",
        "CodeChef Rating: 1639 (3-star)",
        "CodeForces Rating: 1200+ (Specialist)",
        "Selected for Google & AMD's Solving for India Hackathon (Top 60 out of 300+ teams)",
        "Core Member of Localhost – IIIT Pune Developer Community",
        "Active participant in competitive programming contests",
      ],
      technologies: [
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "DSA",
        "System Design",
        "Database Management",
        "Competitive Programming",
      ],
    },
  ];

  return (
    <section
      id="education"
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
            <GraduationCap className="h-4 w-4 mr-2" />
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My educational journey and academic achievements in computer science
            and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 lg:ml-4">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          CGPA
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {edu.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Key Coursework
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.coursework.map((course, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <span className="text-primary mr-2">•</span>
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Technical Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
