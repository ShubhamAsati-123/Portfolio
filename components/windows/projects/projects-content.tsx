'use client'
import { FolderOpen, Github, ExternalLink } from 'lucide-react'

export default function ProjectsContent() {
  const projects = [
    {
      name: 'Interview.io',
      desc: 'AI-powered interview platform with comprehensive coding environment and dynamic assessments',
      tech: 'Next.js, Shadcn UI, Judge0 API, Codex API, ML',
      github: '#'
    },
    {
      name: 'BookTreasure',
      desc: 'Digital marketplace for trading second-hand books with secure payments and ML-powered search',
      tech: 'Next.js, MongoDB, Stripe, Recoil, ML',
      github: '#',
      impact: '30% boost in search precision'
    },
    {
      name: 'Ride Sharing App',
      desc: 'User-centric transportation platform with interactive mapping and intuitive navigation',
      tech: 'Next.js, DummyJson, MongoDB, Mapbox',
      github: '#'
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-win11-text text-base mb-4 flex items-center gap-2">
        <FolderOpen size={18} className="text-win11-blue" />
        Featured Projects
      </h2>
      {projects.map((proj, i) => (
        <div key={i} className="bg-win11-bg-secondary p-4 rounded-lg border border-win11 hover:shadow-md hover:border-win11-blue/50 transition-all duration-150 group">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-bold text-win11-text text-sm group-hover:text-win11-blue transition-colors">
                {proj.name}
              </h3>
              <p className="text-win11-text-secondary text-xs mt-1 leading-relaxed">
                {proj.desc}
              </p>
              {proj.impact && (
                <p className="text-win11-blue text-xs font-semibold mt-2">✓ {proj.impact}</p>
              )}
            </div>
            <a href={proj.github} className="text-win11-blue hover:text-win11-blue-hover transition-colors flex-shrink-0">
              <Github size={16} />
            </a>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {proj.tech.split(', ').map(tech => (
              <span key={tech} className="text-xs bg-win11-blue/10 text-win11-blue px-2 py-1 rounded-md font-medium border border-win11-blue/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
