"use client"

import { useEffect, useRef } from "react"
import { Target, Briefcase, GraduationCap } from "lucide-react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am a <span className="text-blue-400 font-medium">Project Management–oriented professional</span> with a
              strong foundation in engineering, business strategy, and data-driven analysis. I hold a Master's degree in
              International Business Engineering from IAE Montpellier and bring over 5 years of hands-on experience in
              technical project coordination.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I have worked in international and remote environments, collaborating across cultures and industries. I am
              currently seeking a permanent Project Management role where I can contribute structure, clarity, and
              measurable impact.
            </p>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 grid gap-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Education</h3>
                  <p className="text-slate-400">Master's in International Business Engineering</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Experience</h3>
                  <p className="text-slate-400">5+ years in technical project coordination</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Objective</h3>
                  <p className="text-slate-400">Seeking permanent PM role in international environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
