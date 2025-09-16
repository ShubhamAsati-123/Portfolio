"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ExternalLink, Github, Star, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewProject, setPreviewProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Interview.io",
      description:
        "Full-stack AI interview platform with Judge0, Codex API, and ML logic for automated coding assessments in 7+ languages with 95%+ accuracy.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      previewImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      category: "ai",
      technologies: [
        "Next.js",
        "Judge0 API",
        "Codex API",
        "Machine Learning",
        "TypeScript",
      ],
      stars: 95,
      liveUrl: "#",
      githubUrl: "https://github.com/ShubhamAsati-123/interview-io",
      featured: true,
    },
    {
      id: 2,
      title: "BookTreasure",
      description:
        "Full-stack e-commerce platform for trading second-hand books with secure Stripe payments, processing 100+ transactions in testing phase.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      previewImage:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      category: "web",
      technologies: [
        "Next.js",
        "MongoDB",
        "Stripe",
        "Recoil",
        "Machine Learning",
      ],
      stars: 85,
      liveUrl: "#",
      githubUrl: "https://github.com/ShubhamAsati-123/booktreasure",
      featured: true,
    },
    {
      id: 3,
      title: "Ride Sharing App",
      description:
        "GPS-enabled ride-sharing platform with real-time route tracking and interactive maps via Mapbox, reducing travel planning time by 35%.",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      previewImage:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&q=80",
      category: "web",
      technologies: [
        "Next.js",
        "Mapbox",
        "MongoDB",
        "GPS Integration",
        "Real-time Tracking",
      ],
      stars: 75,
      liveUrl: "#",
      githubUrl: "https://github.com/ShubhamAsati-123/ride-sharing-app",
      featured: true,
    },
    {
      id: 4,
      title: "Seraphic Advisors Website",
      description:
        "Revamped entire UI and optimized SEO, improving performance by 25% and significantly increasing search engine visibility.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      previewImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      category: "web",
      technologies: [
        "Next.js",
        "SEO Optimization",
        "Performance Optimization",
        "UI/UX",
      ],
      stars: 70,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Black Silk Website",
      description:
        "Designed and developed website using Next.js with advanced features like membership access, live chat, and event scheduling.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      previewImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
      category: "web",
      technologies: [
        "Next.js",
        "Live Chat",
        "Event Scheduling",
        "Membership System",
        "Responsive Design",
      ],
      stars: 80,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Generative AI System",
      description:
        "Deployed Generative AI system on Linux VPS, handling backend setup, model serving, and endpoint management.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      previewImage:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&q=80",
      category: "ai",
      technologies: [
        "Linux",
        "VPS Deployment",
        "AI/ML",
        "Backend Development",
        "Model Serving",
      ],
      stars: 90,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
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
                    src={
                      project.image || "/placeholder.svg?height=200&width=300"
                    }
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
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPreviewProject(project)}
                      className="flex-1"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
          <p className="text-muted-foreground">
            No projects found matching your criteria.
          </p>
        </div>
      )}

      {/* Project Preview Modal */}
      <Dialog
        open={!!previewProject}
        onOpenChange={() => setPreviewProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              {previewProject?.title} Preview
            </DialogTitle>
          </DialogHeader>
          {previewProject && (
            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image
                  src={previewProject.previewImage}
                  alt={`${previewProject.title} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {previewProject.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {previewProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {previewProject.technologies.map(
                    (tech: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  {previewProject.liveUrl && previewProject.liveUrl !== "#" && (
                    <Button asChild>
                      <Link
                        href={previewProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Live Site
                      </Link>
                    </Button>
                  )}
                  {previewProject.githubUrl &&
                    previewProject.githubUrl !== "#" && (
                      <Button variant="outline" asChild>
                        <Link
                          href={previewProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
