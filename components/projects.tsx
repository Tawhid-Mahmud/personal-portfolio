import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-commerce Website"
            description="A full-featured online store built with Next.js and integrated with Stripe for payments."
            image="/placeholder.svg?height=200&width=400"
            tags={["Next.js", "React", "Stripe", "Tailwind CSS"]}
            demoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Task Management App"
            description="A productivity application for managing tasks and projects with real-time updates."
            image="/placeholder.svg?height=200&width=400"
            tags={["React", "Firebase", "Redux", "Material UI"]}
            demoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A responsive portfolio website showcasing my work and skills (the one you're viewing now)."
            image="/placeholder.svg?height=200&width=400"
            tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
            demoLink="#"
            repoLink="#"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, image, tags, demoLink, repoLink }) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLink className="w-4 h-4" /> Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <Github className="w-4 h-4" /> Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
