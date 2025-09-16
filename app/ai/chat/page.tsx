"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, User } from "lucide-react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Chat with ShuAI</h1>

      <Card className="flex-1 p-4 mb-4 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <Bot className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Welcome to ShuAI!</h3>
              <p className="text-muted-foreground max-w-md">
                I'm your AI assistant. Ask me anything, and I'll do my best to help you.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-3 rounded-lg p-4",
                  message.role === "user" ? "bg-muted ml-12" : "bg-primary/10 mr-12",
                )}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {message.role === "user" ? (
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <User className="h-5 w-5" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="font-medium">{message.role === "user" ? "You" : "ShuAI"}</div>
                  <div className="prose dark:prose-invert">{message.content}</div>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      </Card>
    </main>
  )
}
