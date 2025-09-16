import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AiHomePage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
      <section className="py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Welcome to <span className="text-primary">ShuAI</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Your personal AI assistant powered by OpenAI. Ask questions, get creative content, and more.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/ai/chat">
            <MessageSquare className="h-5 w-5 mr-2" />
            Start Chatting
          </Link>
        </Button>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">What can ShuAI do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Answer Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get answers to your questions on a wide range of topics, from technical problems to general knowledge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Generate Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create blog posts, marketing copy, code snippets, and more with AI-powered content generation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="h-5 w-5 mr-2 text-primary" />
                Learn & Explore
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore new topics, learn new skills, and get personalized explanations tailored to your level of
                understanding.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">Start a conversation with ShuAI and experience the power of AI.</p>
        <Button asChild>
          <Link href="/ai/chat">
            <MessageSquare className="h-5 w-5 mr-2" />
            Start Chatting
          </Link>
        </Button>
      </section>
    </main>
  )
}
