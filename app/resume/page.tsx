import MainNavigation from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Resume</h1>
          <Button asChild>
            <Link href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Link>
          </Button>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2>Shubham Asati</h2>
            <p>Full Stack Developer | AI Enthusiast</p>
            <p>
              <a href="mailto:contact@shubhamasati.tech">contact@shubhamasati.tech</a> |{" "}
              <a href="https://shubhamasati.tech">shubhamasati.tech</a>
            </p>
          </section>

          <section className="mb-8">
            <h3>Summary</h3>
            <p>
              Passionate full stack developer with expertise in modern web technologies and AI integration. Experienced
              in building responsive, user-friendly applications with a focus on performance and scalability.
            </p>
          </section>

          <section className="mb-8">
            <h3>Skills</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, Python, Django, RESTful APIs
              </li>
              <li>
                <strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis
              </li>
              <li>
                <strong>DevOps:</strong> Docker, AWS, Vercel, CI/CD, Git
              </li>
              <li>
                <strong>AI/ML:</strong> TensorFlow, PyTorch, OpenAI API, Hugging Face
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3>Experience</h3>

            <div className="mb-4">
              <h4>Senior Full Stack Developer</h4>
              <p>Company Name | Location | 2021 - Present</p>
              <ul>
                <li>Developed and maintained multiple web applications using React, Next.js, and Node.js</li>
                <li>Implemented AI features using OpenAI API and custom ML models</li>
                <li>Led a team of 3 developers, mentoring junior team members</li>
                <li>Improved application performance by 40% through code optimization and caching strategies</li>
              </ul>
            </div>

            <div>
              <h4>Full Stack Developer</h4>
              <p>Previous Company | Location | 2018 - 2021</p>
              <ul>
                <li>Built responsive web applications using React and Express</li>
                <li>Designed and implemented RESTful APIs for mobile and web clients</li>
                <li>Collaborated with UX/UI designers to implement user-friendly interfaces</li>
                <li>Participated in code reviews and implemented best practices</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3>Education</h3>
            <div>
              <h4>Bachelor of Science in Computer Science</h4>
              <p>University Name | Graduation Year</p>
            </div>
          </section>

          <section>
            <h3>Projects</h3>
            <ul>
              <li>
                <strong>ShuAI</strong> - An AI assistant powered by OpenAI that can answer questions and generate
                content.
                <a href="https://shuai.shubhamasati.tech"> View Project</a>
              </li>
              <li>
                <strong>Personal Website</strong> - A multi-tenant Next.js application showcasing my portfolio and
                projects.
                <a href="https://shubhamasati.tech"> View Project</a>
              </li>
              {/* Add more projects as needed */}
            </ul>
          </section>
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
