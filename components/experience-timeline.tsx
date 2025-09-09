"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  technologies: string[]
  achievements: string[]
}

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2024",
    endDate: "Present",
    current: true,
    description: [
      "Lead development of scalable web applications serving 100K+ users",
      "Architect and implement microservices using Node.js and Docker",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with product and design teams to deliver user-centric solutions",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led migration to microservices architecture",
      "Reduced deployment time by 60% with CI/CD improvements",
    ],
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    startDate: "Jun 2022",
    endDate: "Dec 2023",
    current: false,
    description: [
      "Built and maintained multiple client-facing applications",
      "Developed RESTful APIs and integrated third-party services",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
    achievements: [
      "Delivered 15+ projects on time and within budget",
      "Increased client satisfaction scores by 25%",
      "Implemented automated testing reducing bugs by 50%",
    ],
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    startDate: "Aug 2021",
    endDate: "May 2022",
    current: false,
    description: [
      "Developed responsive websites and web applications",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Optimized websites for performance and SEO",
      "Maintained and updated existing client websites",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "Webpack"],
    achievements: [
      "Improved website loading speeds by 35% on average",
      "Successfully launched 20+ client websites",
      "Achieved 98% client approval rate for delivered projects",
    ],
  },
  {
    id: "4",
    title: "Junior Developer Intern",
    company: "Local Web Solutions",
    location: "Berkeley, CA",
    startDate: "Jun 2020",
    endDate: "Jul 2021",
    current: false,
    description: [
      "Assisted in developing small business websites",
      "Learned industry best practices and development workflows",
      "Participated in client meetings and requirement gathering",
      "Contributed to internal tools and documentation",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    achievements: [
      "Completed 10+ successful website projects",
      "Received outstanding intern performance review",
      "Contributed to company's internal style guide",
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experienceData.map((experience, index) => (
        <Card key={experience.id} className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                  {experience.current && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Current</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span className="font-medium text-primary">{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {experience.startDate} - {experience.endDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-accent mt-1.5 text-xs">★</span>
                      <span className="text-pretty">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
