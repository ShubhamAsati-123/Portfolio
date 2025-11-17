'use client'
import { Code2, Database, Wrench, Zap } from 'lucide-react'

export default function SkillsContent() {
  const skills = {
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'Java'],
    'Frontend': ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Shadcn UI', 'Recoil'],
    'Backend': ['Express.js', 'FastAPI', 'Node.js', 'Judge0 API', 'Codex API'],
    'Databases': ['MongoDB', 'PostgreSQL', 'Redis', 'Clerk', 'Supabase'],
    'Tools & Tech': ['Docker', 'Firebase', 'Git', 'GitHub', 'Figma', 'Linux', 'VPS', 'Cypress']
  }

  const iconMap: Record<string, JSX.Element> = {
    'Languages': <Code2 size={14} />,
    'Frontend': <Zap size={14} />,
    'Backend': <Database size={14} />,
    'Databases': <Database size={14} />,
    'Tools & Tech': <Wrench size={14} />
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-win11-blue">{iconMap[category]}</span>
            <h3 className="font-bold text-win11-text text-sm">{category}</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {items.map(skill => (
              <div 
                key={skill} 
                className="bg-win11-blue/10 px-2.5 py-1.5 rounded-md border border-win11-blue/20 text-win11-blue text-xs font-medium hover:bg-win11-blue/20 hover:border-win11-blue/40 transition-all duration-150 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
