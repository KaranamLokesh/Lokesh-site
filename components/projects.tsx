import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Data Expert Capstone Project",
      description:
        "A comprehensive data engineering capstone project demonstrating advanced data processing, analytics, and pipeline development skills.",
      technologies: ["Python", "Data Engineering", "Analytics", "SQL"],
      liveUrl: "https://github.com/KaranamLokesh/dataexpert-lokesh-capstone",
      githubUrl: "https://github.com/KaranamLokesh/dataexpert-lokesh-capstone",
    },
    {
      title: "TabMate",
      description:
        "An innovative tab management solution designed to enhance productivity and streamline browser workflow management.",
      technologies: ["JavaScript", "Browser Extension", "Web APIs", "UI/UX"],
      liveUrl: "https://github.com/KaranamLokesh/TabMate",
      githubUrl: "https://github.com/KaranamLokesh/TabMate",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-outline text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
