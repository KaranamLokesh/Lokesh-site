import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Lokesh Karanam</span>
          </h1>
          <div className="text-lg sm:text-xl text-muted-foreground mb-4 space-y-1">
            <p>SOFTWARE DEVELOPER • DATA ENGINEER • MACHINE LEARNING ENGINEER</p>
          </div>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            5+ years of experience specializing in ML model deployment, MLOps, and big data technologies in cloud
            environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://github.com/KaranamLokesh"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/lokesh-karanam/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://lokeshkaranam.me"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-6 w-6" />
              <span className="sr-only">Website</span>
            </Link>
            <Link
              href="mailto:lokeshkaranam3@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
