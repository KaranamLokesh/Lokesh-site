import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Data Expert Capstone Project",
      description:
        "A comprehensive data engineering capstone project demonstrating advanced data processing, analytics, and pipeline development skills.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Data Engineering", "Analytics", "SQL"],
      liveUrl: "https://github.com/KaranamLokesh/dataexpert-lokesh-capstone",
      githubUrl: "https://github.com/KaranamLokesh/dataexpert-lokesh-capstone",
    },
    {
      title: "TabMate",
      description:
        "An innovative tab management solution designed to enhance productivity and streamline browser workflow management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "Browser Extension", "Web APIs", "UI/UX"],
      liveUrl: "https://github.com/KaranamLokesh/TabMate",
      githubUrl: "https://github.com/KaranamLokesh/TabMate",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      liveUrl: "https://github.com/KaranamLokesh",
      githubUrl: "https://github.com/KaranamLokesh",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
