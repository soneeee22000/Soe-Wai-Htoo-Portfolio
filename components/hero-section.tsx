"use client"

import { useEffect, useRef } from "react"
import { MapPin, Linkedin, ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-100/40 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>France</span>
              </div>
            </div>

            <h1 className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-2">
                Soe Wai Htoo
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-light">
                Aspiring Project Manager
              </span>
            </h1>

            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              International Business Engineering Graduate with expertise in Data & Quality Analysis. Building
              structured, high-impact projects in international environments.
            </p>

            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-400 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/soe-wai-htoo-6b9a5b99/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border border-slate-300 hover:border-blue-500/50 text-slate-700 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white rounded-lg transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur-2xl scale-110" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden border border-blue-500/20">
                <Image
                  src="/images/9274d6b5-0622-426f-b718-f591d0568fbd.jpeg"
                  alt="Soe Wai Htoo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
