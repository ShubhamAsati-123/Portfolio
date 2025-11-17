export default function ProjectsContent() {
  const projects = [
    {
      name: 'Project Alpha',
      desc: 'Modern web application with real-time features',
      tech: 'React, TypeScript, Tailwind'
    },
    {
      name: 'Project Beta',
      desc: 'Collaboration platform with instant messaging',
      tech: 'Next.js, WebSocket, Node.js'
    },
    {
      name: 'Project Gamma',
      desc: 'Interactive data visualization dashboard',
      tech: 'React, D3.js, Express'
    }
  ]

  return (
    <div className="space-y-4">
      {projects.map((proj, i) => (
        <div key={i} className="bg-win11-bg-secondary p-4 rounded-lg border border-win11 hover:shadow-md hover:border-win11-blue/50 transition-all duration-150 group cursor-pointer">
          {/* CHANGE: Improved card design with better typography hierarchy and hover states */}
          <h3 className="font-bold text-win11-text text-sm group-hover:text-win11-blue transition-colors">
            {proj.name}
          </h3>
          <p className="text-win11-text-secondary text-sm mt-2 leading-relaxed">
            {proj.desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {proj.tech.split(', ').map(tech => (
              <span key={tech} className="text-xs bg-win11-blue/10 text-win11-blue px-2.5 py-1 rounded-md font-medium border border-win11-blue/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
