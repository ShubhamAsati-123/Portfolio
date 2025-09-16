import MainNavigation from "@/components/main-navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            Hello! I&apos;m Shubham Asati, a passionate full stack developer with expertise in building modern web
            applications.
          </p>

          <h2>My Journey</h2>
          <p>
            I started my coding journey several years ago and have since worked on a variety of projects ranging from
            small websites to complex web applications. I&apos;m particularly interested in creating tools and
            applications that solve real-world problems and make a positive impact.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, Express, Python, Django</li>
            <li>Database: MongoDB, PostgreSQL, MySQL</li>
            <li>DevOps: Docker, AWS, Vercel</li>
            <li>AI/ML: TensorFlow, PyTorch, OpenAI API</li>
          </ul>

          <h2>Interests</h2>
          <p>
            Beyond coding, I&apos;m interested in artificial intelligence, machine learning, and how these technologies
            can be leveraged to create innovative solutions. I&apos;m also passionate about open-source software and
            contributing to the developer community.
          </p>

          <h2>Let&apos;s Connect</h2>
          <p>
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about technology. Feel
            free to reach out through the contact page or connect with me on LinkedIn or GitHub.
          </p>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shubham Asati. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
