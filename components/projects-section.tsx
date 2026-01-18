"use client"

import { useEffect, useRef } from "react"
import { Search, Ship, LineChart, Code } from "lucide-react"

const projects = [
  {
    title: "Search Quality Evaluation",
    organization: "TELUS Digital",
    description:
      "Evaluated hundreds of real-world search queries, rating Page Quality, Needs Met, and trustworthiness with focus on user intent and accuracy.",
    skills: ["Content Evaluation", "Analytical Thinking", "Quality Assurance"],
    icon: Search,
  },
  {
    title: "Ship Construction & Marine Design",
    organization: "Engineering Projects",
    description:
      "Supported end-to-end ship construction and design projects, managing timelines, documentation, and stakeholder communication.",
    skills: ["Project Planning", "Stakeholder Management", "Technical Documentation"],
    icon: Ship,
  },
  {
    title: "International Business Strategy",
    organization: "IAE Montpellier",
    description:
      "Conducted market and financial feasibility analysis, developed strategic recommendations for international expansion.",
    skills: ["Business Analysis", "Financial Evaluation", "Strategic Thinking"],
    icon: LineChart,
  },
  {
    title: "Data Analysis Mini Projects",
    organization: "Personal Projects",
    description:
      "Cleaned and analyzed datasets using Python, extracted insights to support decision-making with focus on data accuracy.",
    skills: ["Python", "Data Cleaning", "Problem Solving"],
    icon: Code,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="h-full p-6 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{project.organization}</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
