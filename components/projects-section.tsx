"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "ShuAI - AI Assistant",
      description:
        "An intelligent AI assistant powered by OpenAI's GPT models. Features real-time chat, context awareness, and multi-domain knowledge support.",
      image: "/projects/shuai-preview.jpg",
      tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
      liveUrl: "https://shuai.shubhamasati.tech",
      githubUrl: "https://github.com/shubhamasati/shuai",
      featured: true,
      schema: {
        "@type": "SoftwareApplication",
        name: "ShuAI",
        description: "AI assistant powered by OpenAI for intelligent conversations",
        applicationCategory: "AI Assistant",
        operatingSystem: "Web Browser",
        url: "https://shuai.shubhamasati.tech",
      },
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
      image: "/projects/ecommerce-preview.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      schema: {
        "@type": "WebApplication",
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        applicationCategory: "E-Commerce",
        operatingSystem: "Web Browser",
      },
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with team collaboration features and real-time updates.",
      image: "/projects/taskmanager-preview.jpg",
      tags: ["React", "Firebase", "Redux", "Material UI", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      schema: {
        "@type": "WebApplication",
        name: "Task Management App",
        description: "Productivity app for task and project management",
        applicationCategory: "Productivity",
        operatingSystem: "Web Browser",
      },
    },
    {
      title: "Weather Dashboard",
      description:
        "A comprehensive weather application providing current conditions, forecasts, and weather maps for locations worldwide.",
      image: "/projects/weather-preview.jpg",
      tags: ["JavaScript", "Weather API", "Chart.js", "CSS Grid", "Responsive"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      schema: {
        "@type": "WebApplication",
        name: "Weather Dashboard",
        description: "Weather application with forecasts and interactive maps",
        applicationCategory: "Weather",
        operatingSystem: "Web Browser",
      },
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-muted/50"
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="container">
        <header className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and solution,
            showcasing different aspects of full-stack development.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <article
                key={index}
                className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 rounded-lg"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <Card className="h-full border-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg?height=400&width=600"}
                      alt={`${project.title} - Screenshot showing the application interface`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle itemProp="name">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4" itemProp="description">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" itemProp="keywords">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button variant="default" size="sm" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          itemProp="url"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      ...project.schema,
                      author: {
                        "@type": "Person",
                        name: "Shubham Asati",
                      },
                    }),
                  }}
                />
              </article>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <article
                key={index}
                className="overflow-hidden border hover:border-primary/50 transition-all duration-300 rounded-lg"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle itemProp="name">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4" itemProp="description">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" itemProp="keywords">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button variant="default" size="sm" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          itemProp="url"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </article>
            ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://github.com/shubhamasati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more projects on Shubham Asati's GitHub profile"
            >
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
