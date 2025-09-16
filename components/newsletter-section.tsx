"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, CheckCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail("")
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to my newsletter.",
      })
    }, 1500)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-50/50 to-pink-50/50 dark:from-primary/5 dark:via-purple-950/20 dark:to-pink-950/20">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="outline" className="mb-4">
                  Stay Updated
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="text-muted-foreground">
                  Get the latest updates on web development, AI trends, and exclusive content delivered to your inbox.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" disabled={isLoading} className="sm:w-auto">
                    {isLoading ? (
                      "Subscribing..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Successfully subscribed!</span>
                </div>
              )}

              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. I respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
