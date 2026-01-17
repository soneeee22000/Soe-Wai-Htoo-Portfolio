"use client"

import { useEffect, useRef } from "react"
import { Globe } from "lucide-react"

const coreSkills = [
  "Project Management",
  "Financial & Business Analysis",
  "Analytical Thinking",
  "Team Collaboration",
  "Cross-Cultural Communication",
]

const technicalSkills = [
  { name: "Microsoft Office", level: 90 },
  { name: "Python (Data Cleaning)", level: 70 },
  { name: "AutoCAD", level: 75 },
  { name: "Maxsurf", level: 65 },
  { name: "STAAD Pro", level: 60 },
]

const languages = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "French", level: "A2" },
]

const certificates = [
  "Bloomberg Market Concepts (BMC) – 2023",
  "ESG Certificate – 2023",
  "Creation & Branding, Retail & Customer Experience – Inside LVMH, 2023",
  "Project Management Diploma – ICM London, 2018",
  "Business Management & Administration Diploma – 2019",
]

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-24 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-white mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Languages
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-blue-500/30 transition-colors"
                >
                  <p className="text-white font-medium mb-1">{lang.name}</p>
                  <p className="text-sm text-blue-400">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-400 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-white mb-6">Certificates & Diplomas</h3>
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
