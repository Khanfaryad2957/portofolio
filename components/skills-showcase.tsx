"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "design"
  icon: string
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 88, category: "frontend", icon: "▲" },
  { name: "JavaScript", level: 95, category: "frontend", icon: "🟨" },
  { name: "HTML5", level: 98, category: "frontend", icon: "🌐" },
  { name: "CSS3", level: 92, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "💨" },
  { name: "Vue.js", level: 75, category: "frontend", icon: "💚" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
  { name: "Python", level: 80, category: "backend", icon: "🐍" },
  { name: "Express.js", level: 85, category: "backend", icon: "🚀" },
  { name: "PostgreSQL", level: 78, category: "backend", icon: "🐘" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃" },
  { name: "GraphQL", level: 70, category: "backend", icon: "🔗" },
  { name: "REST APIs", level: 90, category: "backend", icon: "🔌" },

  // Tools
  { name: "Git", level: 92, category: "tools", icon: "📝" },
  { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  { name: "AWS", level: 70, category: "tools", icon: "☁️" },
  { name: "Vercel", level: 88, category: "tools", icon: "▲" },
  { name: "Webpack", level: 72, category: "tools", icon: "📦" },
  { name: "Jest", level: 80, category: "tools", icon: "🧪" },

  // Design
  { name: "Figma", level: 85, category: "design", icon: "🎯" },
  { name: "Adobe XD", level: 75, category: "design", icon: "🎨" },
  { name: "UI/UX Design", level: 80, category: "design", icon: "✨" },
]

const categoryColors = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  tools: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  design: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
}

const categoryNames = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
  design: "Design",
}

export function SkillsShowcase() {
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category)
        return (
          <div key={category}>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-foreground">{categoryNames[category]}</h3>
              <Badge className={categoryColors[category]}>{categorySkills.length} skills</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorySkills.map((skill) => (
                <Card key={skill.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
