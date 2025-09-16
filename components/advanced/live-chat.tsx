"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, Minimize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm Shubham's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input: string): string => {
    const responses = {
      hello: "Hello! Nice to meet you. I'm here to help answer questions about Shubham's work and experience.",
      projects:
        "Shubham has worked on various projects including ShuAI (an AI assistant), e-commerce platforms, and modern web applications using React, Next.js, and Node.js.",
      skills:
        "Shubham specializes in full-stack development with expertise in React, Next.js, TypeScript, Node.js, and AI integration.",
      contact: "You can reach Shubham at contact@shubhamasati.tech or connect on LinkedIn and GitHub.",
      experience:
        "Shubham has 3+ years of experience in full-stack development, working with modern technologies and building scalable applications.",
      default:
        "That's an interesting question! For more detailed information, feel free to explore the portfolio or contact Shubham directly.",
    }

    const lowerInput = input.toLowerCase()
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) return responses.hello
    if (lowerInput.includes("project")) return responses.projects
    if (lowerInput.includes("skill")) return responses.skills
    if (lowerInput.includes("contact")) return responses.contact
    if (lowerInput.includes("experience")) return responses.experience
    return responses.default
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div className="fixed bottom-6 right-6 z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button onClick={() => setIsOpen(!isOpen)} size="lg" className="rounded-full w-14 h-14 shadow-lg">
          {isOpen ? <Minimize2 className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-80 md:w-96"
          >
            <Card className="shadow-2xl border-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/profile-image.jpg" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm">AI Assistant</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        Online
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      disabled={isTyping}
                    />
                    <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping} size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
