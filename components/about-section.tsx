"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Rocket } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-muted/50"
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container">
        <header className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            itemProp="name"
          >
            Who I Am
          </h2>
          <p className="text-muted-foreground max-w-2xl" itemProp="description">
            I&apos;m an aspiring Software Engineer pursuing B.Tech in Computer
            Science at IIIT Pune with strong CS fundamentals. Currently working
            as a Web Development Intern at Vanilla Intelligence, I have
            experience building scalable apps using Next.js, Firebase, and
            MongoDB. My passion for problem-solving is reflected in solving 500+
            DSA problems and achieving top-60 finalist status in Google & AMD
            Hackathon.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Technical Expertise
                </h3>
                <p className="text-muted-foreground">
                  Proficient in C++, Python, JavaScript, TypeScript, React.js,
                  Next.js, Express.js, MongoDB, and PostgreSQL. Experienced with
                  Docker, Git, Firebase, and VPS deployment. I build scalable
                  applications with clean, maintainable code and have strong
                  foundations in data structures, algorithms, and system design.
                </p>
              </article>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-muted-foreground">
                  I enjoy tackling complex challenges through competitive
                  programming and real-world projects. With 500+ DSA problems
                  solved across LeetCode, CodeChef, and CodeForces, I have
                  developed strong analytical skills. My competitive ratings
                  include CodeChef: 1639, CodeForces: 1162, and LeetCode: 1565.
                </p>
              </article>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Continuous Learner
                </h3>
                <p className="text-muted-foreground">
                  Currently pursuing B.Tech at IIIT Pune (CGPA: 7.76), I&apos;m
                  committed to continuous learning and contributing to the tech
                  community. As a Core Member of Localhost – IIIT Pune Developer
                  Community, I co-lead 400+ developers and organize technical
                  events, workshops, and hackathons.
                </p>
              </article>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
