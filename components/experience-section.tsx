"use client"

import { useEffect, useRef } from "react"
import { Calendar, Building2 } from "lucide-react"

const experiences = [
  {
    title: "Personalized Internet Assessor",
    company: "TELUS Digital Co., Ltd",
    period: "Jun 2024 – Present",
    type: "Remote, Part-Time",
    description: [
      "Evaluate online search results for relevance, accuracy, and quality",
      "Apply structured Page Quality and Needs Met guidelines",
      "Perform content analysis, tone evaluation, and cultural appropriateness checks",
    ],
  },
  {
    title: "Founder",
    company: "ShopAce – Online Retail Services",
    period: "2021 – 2022",
    type: "Entrepreneurship",
    description: [
      "Founded and managed an online retail business from setup to daily operations",
      "Handled business planning, supplier coordination, pricing, and customer relations",
      "Gained hands-on experience in entrepreneurship and end-to-end business operations",
    ],
  },
  {
    title: "Project Engineer",
    company: "Kabar Services Co., Ltd",
    period: "Oct 2018 – Apr 2021",
    type: "Full-Time",
    description: [
      "Coordinated ship construction and engineering projects",
      "Managed schedules, drawings, and technical documentation",
      "Ensured compliance with technical and quality standards",
    ],
  },
  {
    title: "Assistant Engineer / Team Leader",
    company: "C. Than and Associates Marine Design Firm",
    period: "Apr 2016 – Aug 2018",
    type: "Full-Time",
    description: [
      "Supported ship design and engineering calculations",
      "Led small technical teams and coordinated daily tasks",
      "Assisted in project planning and progress monitoring",
    ],
  },
]

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/15 to-transparent dark:from-blue-500/50 dark:via-blue-500/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}>
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                      <div
                        className={`flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                      <div
                        className={`flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          {exp.type}
                        </span>
                      </div>
                      <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-700 dark:text-slate-300 text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
