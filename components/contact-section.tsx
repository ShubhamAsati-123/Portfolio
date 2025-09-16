"use client";

import type React from "react";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset();
      } else {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can also reach out to me through these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:contact@shubhamasati.tech"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@shubhamasati.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/shubhamasati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/shubhamasati
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a
                      href="https://github.com/ShubhamAsati-123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/ShubhamAsati-123
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="mb-6 text-primary-foreground/90">
                  I&apos;m currently available for freelance work and open to
                  new opportunities. If you have a project that needs my
                  expertise, let&apos;s talk!
                </p>
                <Button variant="secondary" asChild>
                  <a href="mailto:contact@shubhamasati.tech">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
