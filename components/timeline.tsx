"use client"

import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  year: string
  title: string
  organization: string
  description: string
  type: "education" | "career"
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    organization: "Tech Company Inc.",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    type: "career",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    organization: "StartupXYZ",
    description:
      "Built and maintained multiple client projects, focusing on modern web technologies and user experience.",
    type: "career",
  },
  {
    year: "2021",
    title: "Bachelor of Computer Science",
    organization: "University Name",
    description: "Graduated with honors, specializing in software engineering and web development.",
    type: "education",
  },
  {
    year: "2020",
    title: "Junior Developer Intern",
    organization: "Local Agency",
    description:
      "First professional experience working with HTML, CSS, JavaScript, and learning industry best practices.",
    type: "career",
  },
]

export function Timeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-center">
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">{item.year}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        item.type === "education"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {item.type === "education" ? "Education" : "Career"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{item.organization}</p>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
