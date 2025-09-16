"use client";

import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Vanilla Intelligence Team",
      role: "Supervisor",
      company: "Vanilla Intelligence",
      image: "/testimonials/vanilla-intelligence.jpg",
      content:
        "Shubham's work on UI optimization and AI system deployment has been exceptional. His technical skills and attention to detail resulted in a 25% performance improvement on our client's website.",
      rating: 5,
      project: "Seraphic Advisors Website",
    },
    {
      name: "Localhost Community",
      role: "Developer Community",
      company: "IIIT Pune",
      image: "/testimonials/localhost-community.jpg",
      content:
        "As a core member, Shubham has been instrumental in organizing technical events and fostering a collaborative environment for 400+ developers. His leadership and technical expertise are invaluable.",
      rating: 5,
      project: "Community Leadership",
    },
    {
      name: "Google & AMD Hackathon",
      role: "Hackathon Recognition",
      company: "Google & AMD",
      image: "/testimonials/hackathon-badge.jpg",
      content:
        "Selected as top-60 finalist among 300+ teams in the West Regionals of 'Solving for India' Hackathon. Demonstrated exceptional problem-solving skills and innovative thinking.",
      rating: 5,
      project: "Hackathon Achievement",
    },
    {
      name: "Competitive Programming",
      role: "Platform Recognition",
      company: "CodeChef, CodeForces, LeetCode",
      image: "/testimonials/competitive-programming.jpg",
      content:
        "Solved 500+ DSA problems with impressive ratings: CodeChef (1639), CodeForces (1162), LeetCode (1565). Demonstrates strong algorithmic thinking and problem-solving capabilities.",
      rating: 5,
      project: "Competitive Programming",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Don&apos;t just take my word for it. Here&apos;s what some of my
            clients have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-background to-muted/50 border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                          <Image
                            src={
                              testimonials[currentIndex].image ||
                              "/placeholder.svg?height=96&width=96"
                            }
                            alt={testimonials[currentIndex].name}
                            width={96}
                            height={96}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                          <Quote className="h-4 w-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>

                      <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                      </blockquote>

                      <div>
                        <div className="font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[currentIndex].role} at{" "}
                          {testimonials[currentIndex].company}
                        </div>
                        <Badge variant="secondary" className="mt-2">
                          {testimonials[currentIndex].project}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
