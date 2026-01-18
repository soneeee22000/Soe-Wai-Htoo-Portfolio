"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master's Degree – International Business Engineering",
    institution: "IAE Montpellier, University of Montpellier",
    location: "France",
    period: "Sep 2022 – Aug 2024",
    highlights: [
      "Project Management & Strategic Planning",
      "International Business & Operations",
      "Financial Analysis & Decision-Making",
      "Cross-cultural teamwork and communication",
    ],
  },
  {
    degree: "International Exchange Program",
    institution: "Lehman College, City University of New York",
    location: "USA",
    period: "Aug 2023 – Dec 2023",
    highlights: ["Global business & management courses", "International teamwork and academic collaboration"],
  },
  {
    degree: "Bachelor's Degree – Marine Engineering",
    institution: "Myanmar Maritime University",
    location: "Myanmar",
    period: "Nov 2011 – Feb 2017",
    highlights: ["GPA: 4.05 / 5", "Engineering fundamentals, ship systems, and technical design"],
  },
]

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="p-6 md:p-8 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 md:text-right">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 ml-16 md:ml-16">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
