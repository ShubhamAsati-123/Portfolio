'use client'
import { Briefcase, Calendar, ArrowRight } from 'lucide-react'

export default function ExperienceContent() {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Vanilla Intelligence',
      period: 'May 2025 - Present',
      achievements: [
        'Redesigned and optimized Seraphic Advisors website, improving performance by 50% and SEO rankings',
        'Built and deployed Black Silk website using Next.js with membership, chat, and event scheduling',
        'Integrated GenAI capabilities with backend workflows and automated data extraction using Selenium'
      ]
    },
    {
      title: 'Co-Head, Developer Student Club',
      company: 'Localhost - IIIT Pune',
      period: 'Aug 2023 - Present',
      achievements: [
        'Leading developer community of 400+ members',
        'Orchestrated 5+ successful technical events',
        'Developed localhost website for IIIT Pune'
      ]
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-win11-text text-base mb-4 flex items-center gap-2">
        <Briefcase size={18} className="text-win11-blue" />
        Professional Experience
      </h2>
      {experiences.map((exp, i) => (
        <div key={i} className="bg-win11-bg-secondary p-4 rounded-lg border border-win11 hover:shadow-md hover:border-win11-blue/50 transition-all duration-150">
          <div className="flex justify-between items-start gap-3 mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-win11-text text-sm">{exp.title}</h3>
              <p className="text-win11-blue text-xs font-semibold mt-1">{exp.company}</p>
            </div>
            <div className="flex items-center gap-1 text-win11-text-secondary text-xs whitespace-nowrap">
              <Calendar size={12} />
              <span>{exp.period}</span>
            </div>
          </div>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, j) => (
              <li key={j} className="flex gap-2 text-win11-text-secondary text-xs leading-relaxed">
                <ArrowRight size={12} className="text-win11-blue flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
