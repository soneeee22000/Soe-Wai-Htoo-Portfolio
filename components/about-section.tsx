"use client";

import { useEffect, useRef } from "react";
import { DollarSign, Users, MapPin } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              <span className="text-teal-600 dark:text-teal-400 font-medium">
                Marine Engineer and International Business graduate
              </span>{" "}
              with 5+ years coordinating large-scale construction and
              engineering projects. At Kabar Services, I led cross-functional
              teams across ship construction projects valued at $1M–$10M —
              simultaneously managing schedules, procurement, budget reporting,
              and quality compliance across 30+ contractors and 70+ workers.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I combine a technical engineering foundation with business
              strategy training from IAE Montpellier and an international
              exchange at CUNY Lehman College, New York. I work best in
              structured, fast-paced, international environments where precision
              and stakeholder coordination matter.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently seeking a Project Manager, PMO Analyst, or Project
              Engineer role in maritime, offshore energy, logistics, or
              international operations — based in Paris, open to hybrid and
              on-site.
            </p>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 grid gap-6">
            <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    Projects Managed
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    $1M–$10M vessel construction projects
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    Contractors Led
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    30+ contractors across engineering & operations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    Availability
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Open to Work · Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
