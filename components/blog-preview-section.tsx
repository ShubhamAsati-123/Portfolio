"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";

export function BlogPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: "Building an AI Interview Platform with Next.js and Judge0 API",
      excerpt:
        "Learn how I built Interview.io - a full-stack AI interview platform that automates coding assessments in 7+ languages with 95%+ accuracy using ML models.",
      image: "/blog/interview-platform.jpg",
      category: "AI/ML",
      readTime: "10 min read",
      publishDate: "2024-08-15",
      views: 1850,
      slug: "building-ai-interview-platform-nextjs-judge0",
    },
    {
      title: "From 0 to 500+ DSA Problems: My Competitive Programming Journey",
      excerpt:
        "My journey of solving 500+ Data Structures and Algorithms problems across multiple platforms and achieving strong ratings on CodeChef, CodeForces, and LeetCode.",
      image: "/blog/competitive-programming.jpg",
      category: "DSA",
      readTime: "8 min read",
      publishDate: "2024-07-20",
      views: 2300,
      slug: "competitive-programming-journey-500-problems",
    },
    {
      title: "Optimizing Website Performance: 25% Improvement Case Study",
      excerpt:
        "A detailed case study of how I revamped the Seraphic Advisors website UI and implemented SEO optimizations that resulted in 25% performance improvement.",
      image: "/blog/performance-optimization.jpg",
      category: "Performance",
      readTime: "12 min read",
      publishDate: "2024-06-10",
      views: 1420,
      slug: "website-performance-optimization-case-study",
    },
  ];

  return (
    <section
      id="blog"
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
            Latest Articles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            From the Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Insights, tutorials, and thoughts on web development, AI, and
            technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg?height=300&width=400"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views}
                  </div>
                </div>
                <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-medium group-hover:text-primary"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
