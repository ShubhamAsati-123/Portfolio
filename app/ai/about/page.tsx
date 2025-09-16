import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Brain, Cpu, Lock } from "lucide-react"
import Link from "next/link"

export default function AiAboutPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">About ShuAI</h1>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-xl text-muted-foreground">
          ShuAI is an AI assistant created by Shubham Asati, powered by OpenAI's advanced language models.
        </p>

        <h2>How ShuAI Works</h2>
        <p>
          ShuAI uses OpenAI's GPT models to understand and respond to your questions and requests. The AI has been
          fine-tuned to provide helpful, accurate, and thoughtful responses across a wide range of topics.
        </p>

        <h2>Capabilities</h2>
        <p>
          ShuAI can help you with various tasks, including answering questions, generating creative content, explaining
          complex topics, and providing information on a wide range of subjects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2 text-primary" />
              Powered by OpenAI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ShuAI leverages OpenAI's powerful language models to provide intelligent and contextually relevant
              responses.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2 text-primary" />
              Privacy-Focused
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your conversations with ShuAI are handled with care. We prioritize your privacy and data security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cpu className="h-5 w-5 mr-2 text-primary" />
              Built with Next.js
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ShuAI is built using Next.js and modern web technologies to provide a fast, responsive user experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="h-5 w-5 mr-2 text-primary" />
              Continuously Improving
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ShuAI is constantly being improved to provide better responses and a more helpful experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Created by Shubham Asati</h2>
        <p className="text-muted-foreground mb-6">
          ShuAI is a project by Shubham Asati, a full stack developer passionate about AI and web technologies.
        </p>
        <Link href="https://shubhamasati.tech" className="text-primary hover:underline">
          Visit Shubham's Website
        </Link>
      </div>
    </main>
  )
}
