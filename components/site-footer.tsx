import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="font-poppins text-xl font-bold">
            Shubham Asati
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Full Stack Developer | Building things that make a difference
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/shubhamasati" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/shubhamasati" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:contact@shubhamasati.tech">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shubham Asati. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
