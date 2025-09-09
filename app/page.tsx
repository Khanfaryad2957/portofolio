"use client"

import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import { Timeline } from "@/components/timeline"
import { SkillsShowcase } from "@/components/skills-showcase"
import { ProjectsGrid } from "@/components/projects-grid"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ContactForm } from "@/components/contact-form"
import { ScrollAnimation, StaggeredAnimation } from "@/components/scroll-animations"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Heart, Linkedin, GraduationCap } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BackToTop />

      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Profile Image */}
            <ScrollAnimation className="relative inline-block">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 relative animate-float">
                <img
                  src="/Subhash.jpg"
                  alt="Professional headshot"
                  className="w-full h-full rounded-full object-cover border-4 border-primary shadow-2xl hover-lift"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
              </div>
            </ScrollAnimation>

            {/* Name and Title */}
            <ScrollAnimation delay={200} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
                Hi, I'm <span className="text-gradient">Subhash Chandra Pal</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                PhD Research Scholar in Biomedical Image Processing
              </p>
              <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Passionate researcher specializing in biomedical image processing, machine learning, and deep learning
                applications. Currently pursuing PhD at NIT Durgapur with expertise in pattern recognition and AI-driven
                healthcare solutions.
              </p>
            </ScrollAnimation>

            {/* Call to Action Buttons */}
            <ScrollAnimation delay={400} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 glow-on-hover"
              >
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 glow-on-hover"
              >
                Contact Me
              </button>
            </ScrollAnimation>

            {/* Quick Stats */}
            <StaggeredAnimation className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center stagger-item animate-on-scroll hover-lift">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Research</div>
              </div>
              <div className="text-center stagger-item animate-on-scroll hover-lift">
                <div className="text-2xl font-bold text-primary">Multiple</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="text-center stagger-item animate-on-scroll hover-lift">
                <div className="text-2xl font-bold text-primary">PhD</div>
                <div className="text-sm text-muted-foreground">Candidate</div>
              </div>
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get to know more about my research journey, academic background, and passion for biomedical image
              processing.
            </p>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Information */}
            <ScrollAnimation delay={200} className="space-y-8">
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Personal Info</h3>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      I'm a dedicated PhD research scholar specializing in biomedical image processing at the National
                      Institute of Technology (NIT) Durgapur. My research focuses on developing advanced machine
                      learning and deep learning algorithms for medical image analysis, with applications in pattern
                      recognition and healthcare diagnostics.
                    </p>

                    <div className="grid gap-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Durgapur, West Bengal, India</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <a
                          href="https://www.linkedin.com/in/subhashchandra-pal-239615246"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span className="text-foreground">PhD Candidate (Expected May 2025)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground">PhD in Biomedical Image Processing</h4>
                      <p className="text-primary font-medium">National Institute of Technology (NIT) Durgapur</p>
                      <p className="text-sm text-muted-foreground">Sep 2021 - May 2025 (Expected)</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Research focus on advanced machine learning algorithms for medical image analysis
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">M.Tech in Power Electronics and Machine Drives</h4>
                      <p className="text-primary font-medium">National Institute of Technology (NIT) Durgapur</p>
                      <p className="text-sm text-muted-foreground">Aug 2018 - May 2020</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">B.Tech in Electrical Engineering</h4>
                      <p className="text-primary font-medium">
                        Maulana Abul Kalam Azad University of Technology, West Bengal
                      </p>
                      <p className="text-sm text-muted-foreground">2013 - 2017</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Interests & Certifications */}
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-accent animate-pulse-slow" />
                    Research Interests & Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Pattern Recognition",
                      "Machine Learning",
                      "Deep Learning",
                      "Biomedical Imaging",
                      "Medical AI",
                      "Computer Vision",
                      "Signal Processing",
                      "Healthcare Technology",
                      "Research Publications",
                    ].map((interest, index) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className={`text-sm hover:scale-105 transition-transform stagger-${(index % 6) + 1}`}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                    <Badge variant="outline" className="text-sm">
                      IEEE INDICON 2024
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    Dedicated to advancing the field of biomedical image processing through innovative research and
                    contributing to the development of AI-driven healthcare solutions that can make a real impact on
                    patient care.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Timeline */}
            <ScrollAnimation delay={400}>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">My Journey</h3>
              <Timeline />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive overview of my technical skills and proficiency levels across different technologies and
              tools.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <SkillsShowcase />
          </ScrollAnimation>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A selection of projects that showcase my skills in full-stack development, UI/UX design, and
              problem-solving.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <ProjectsGrid />
          </ScrollAnimation>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              My professional journey and the roles that have shaped my expertise in full-stack development.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <ExperienceTimeline />
          </ScrollAnimation>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can collaborate.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
