"use client";

import { useEffect, useRef } from "react";
import {
  MapPin,
  Linkedin,
  Mail,
  ArrowDown,
  FileText,
  Anchor,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = heroRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0c1222]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#ccfbf1,transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.15),transparent)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/25 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-200/15 dark:bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Status pill */}
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-400 text-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for hire</span>
                <span className="mx-1 text-slate-300 dark:text-slate-600">
                  |
                </span>
                <MapPin className="w-3.5 h-3.5" />
                <span>Paris, France</span>
              </div>
            </div>

            {/* Name + Headline */}
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                Soe Wai
                <span className="text-teal-600 dark:text-teal-400"> Htoo</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-2">
                Project Manager & Marine Engineer
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/60">
                  <Anchor className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  Marine Construction
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/60">
                  International Business
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/60">
                  5+ Years
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I manage complexity — from coordinating{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                30+ contractors
              </span>{" "}
              on million-dollar vessel builds to analyzing global markets and
              delivering structured projects on time.
            </p>

            {/* Key stats row */}
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-350 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
                  $10M
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Projects Managed
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
                  30+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Contractors Led
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
                  5+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Years Experience
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-400 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/25 dark:hover:shadow-teal-500/20"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/soe-wai-htoo-6b9a5b99/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 hover:border-teal-500/40 text-slate-700 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:border-teal-500/40 rounded-xl transition-all duration-200"
              >
                <Linkedin className="w-4.5 h-4.5" />
                LinkedIn
              </a>
              <a
                href="mailto:kosoewaihtoo@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 hover:border-teal-500/40 text-slate-700 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:border-teal-500/40 rounded-xl transition-all duration-200"
              >
                <Mail className="w-4.5 h-4.5" />
                Email
              </a>
              <a
                href="/resume.pdf"
                download="Soe_Wai_Htoo_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 hover:border-teal-500/40 text-slate-700 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:border-teal-500/40 rounded-xl transition-all duration-200"
              >
                <FileText className="w-4.5 h-4.5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-teal-300/30 dark:border-teal-500/15" />
              <div className="absolute -inset-1 bg-teal-500/15 dark:bg-teal-400/10 rounded-2xl blur-2xl scale-105" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-white/50 dark:border-slate-700/50 shadow-xl shadow-teal-500/10 dark:shadow-teal-500/5">
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
          <a
            href="#about"
            className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
