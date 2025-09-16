"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Copy } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function InteractiveCodeEditor() {
  const [activeTab, setActiveTab] = useState("react")
  const [isRunning, setIsRunning] = useState(false)

  const codeExamples = {
    react: {
      title: "React Component",
      language: "jsx",
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`,
    },
    nextjs: {
      title: "Next.js API Route",
      language: "javascript",
      code: `// pages/api/users.js
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await fetchUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    
    try {
      const user = await createUser({ name, email });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create user' });
    }
  }
}`,
    },
    ai: {
      title: "AI Integration",
      language: "typescript",
      code: `import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function generateResponse(prompt: string) {
  try {
    const { text } = await generateText({
      model: openai('gpt-4'),
      prompt: prompt,
      temperature: 0.7,
      maxTokens: 150,
    });

    return {
      success: true,
      response: text,
    };
  } catch (error) {
    console.error('AI generation failed:', error);
    return {
      success: false,
      error: 'Failed to generate response',
    };
  }
}`,
    },
  }

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code)
    toast({
      title: "Copied to clipboard!",
      description: "Code has been copied to your clipboard.",
    })
  }

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      toast({
        title: "Code executed!",
        description: "This is a demo - code would run in a real environment.",
      })
    }, 2000)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Interactive Code Examples</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(codeExamples[activeTab as keyof typeof codeExamples].code)}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleRun} disabled={isRunning}>
              <Play className="h-4 w-4 mr-2" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {Object.entries(codeExamples).map(([key, example]) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(key)}
            >
              {example.title}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Badge variant="secondary" className="absolute top-4 right-4 z-10">
            {codeExamples[activeTab as keyof typeof codeExamples].language}
          </Badge>
          <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto text-sm">
            <code>{codeExamples[activeTab as keyof typeof codeExamples].code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}
