"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function ProjectShowcase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "ShuAI - AI Assistant",
      description: "Advanced AI chatbot with natural language processing and context awareness.",
      image: "/projects/shuai-preview.jpg",
      category: "ai",
      technologies: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      stars: 45,
      liveUrl: "https://shuai.shubhamasati.tech",
      githubUrl: "https://github.com/shubhamasati/shuai",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "/projects/ecommerce-preview.jpg",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      stars: 32,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard with real-time data visualization and reporting.",
      image: "/projects/analytics-preview.jpg",
      category: "web",
      technologies: ["React", "D3.js", "WebSocket", "Express"],
      stars: 28,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "/projects/banking-preview.jpg",
      category: "mobile",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      stars: 41,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "AI Image Generator",
      description: "AI-powered image generation tool with custom style transfer.",
      image: "/projects/ai-image-preview.jpg",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      stars: 67,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "Modern social media platform with real-time messaging and content sharing.",
      image: "/projects/social-preview.jpg",
      category: "web",
      technologies: ["Next.js", "Socket.io", "Redis", "PostgreSQL"],
      stars: 53,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI/ML" },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{project.stars}</span>
                  </div>
                </div>

                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button variant="default" size="sm" asChild className="flex-1">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
