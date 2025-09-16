"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillRadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "AI/ML", level: 75 },
    { name: "Database", level: 80 },
    { name: "DevOps", level: 70 },
    { name: "UI/UX", level: 85 },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI)
      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw axes
    const angleStep = (2 * Math.PI) / skills.length
    skills.forEach((_, index) => {
      const angle = index * angleStep - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Draw skill polygon
    ctx.beginPath()
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const skillRadius = (radius * skill.level) / 100
      const x = centerX + skillRadius * Math.cos(angle)
      const y = centerY + skillRadius * Math.sin(angle)

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.closePath()
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw skill points and labels
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const skillRadius = (radius * skill.level) / 100
      const x = centerX + skillRadius * Math.cos(angle)
      const y = centerY + skillRadius * Math.sin(angle)

      // Draw point
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()

      // Draw label
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 20) * Math.sin(angle)

      ctx.fillStyle = "#1f2937"
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.fillText(skill.name, labelX, labelY)
      ctx.fillText(`${skill.level}%`, labelX, labelY + 15)
    })
  }, [])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Skill Radar</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas ref={canvasRef} width={300} height={300} className="w-full h-auto" />
      </CardContent>
    </Card>
  )
}
