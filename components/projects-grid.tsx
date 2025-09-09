"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

// This data can be easily updated by editing this array
const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, and secure payment processing.",
    image: "/project-ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.",
    image: "/project-taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/alexjohnson/task-manager",
    demoUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions and forecasts for multiple cities. Features include geolocation, search functionality, and data visualization.",
    image: "/project-weather.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
    image: "/project-portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/alexjohnson/portfolio",
    demoUrl: "https://alexjohnson.dev",
    featured: false,
  },
  {
    id: "5",
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and API integrations with major platforms.",
    image: "/project-analytics.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/alexjohnson/social-analytics",
    demoUrl: "https://analytics-demo.vercel.app",
    featured: true,
  },
  {
    id: "6",
    title: "Recipe Sharing Platform",
    description:
      "A community-driven recipe sharing platform where users can create, share, and discover recipes. Includes user profiles, ratings, and advanced search functionality.",
    image: "/project-recipes.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "NextAuth.js"],
    githubUrl: "https://github.com/alexjohnson/recipe-platform",
    demoUrl: "https://recipes-demo.vercel.app",
    featured: false,
  },
]

export function ProjectsGrid() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="space-y-12">
      {/* Featured Projects */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="text-accent">★</span>
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <Badge variant="secondary" className="ml-2">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-3 text-pretty leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
