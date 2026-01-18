"use client"

import { useEffect, useRef } from "react"
import { Globe, Monitor, Code2, DraftingCompass, Ruler, Wrench } from "lucide-react"

const coreSkills = [
  "Project Management",
  "Financial & Business Analysis",
  "Analytical Thinking",
  "Team Collaboration",
  "Cross-Cultural Communication",
]

const technicalSkills = [
  { name: "Microsoft Office", icon: Monitor, detail: "Excel, PowerPoint, Word" },
  { name: "Python (Data Cleaning)", icon: Code2, detail: "Pandas, data prep" },
  { name: "AutoCAD", icon: DraftingCompass, detail: "2D/3D drafting" },
  { name: "Maxsurf", icon: Ruler, detail: "Marine design tools" },
  { name: "STAAD Pro", icon: Wrench, detail: "Structural analysis" },
]

const languages = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "French", level: "A2" },
]

const certificates = [
  "Bloomberg Market Concepts (BMC) – 2023",
  "Bloomberg ESG Certificate - 2023",
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
    <section id="skills" ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 p-4 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{skill.name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{skill.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Languages */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Languages
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center hover:border-blue-500/30 transition-colors"
                >
                  <p className="text-slate-900 dark:text-white font-medium mb-1">{lang.name}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-400 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Certificates & Diplomas</h3>
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
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
