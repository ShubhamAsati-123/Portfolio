import MainNavigation from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "ShuAI",
      description: "An AI assistant powered by OpenAI that can answer questions, generate content, and more.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      liveUrl: "https://shuai.shubhamasati.tech",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "My personal website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://shubhamasati.tech",
      githubUrl: "#",
      featured: true,
    },
    // Add more projects as needed
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shubham Asati. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
