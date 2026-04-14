"use client";

import { useEffect, useRef } from "react";
import { Ship, LineChart, Code, Search } from "lucide-react";

const projects = [
  {
    title: "Ship Construction & Marine Design",
    organization: "Engineering Projects",
    description:
      "Led coordination of vessel construction projects valued at $1M–$10M at Kabar Services, managing 30+ contractors across engineering, procurement, and operations. Oversaw 100+ technical drawings and multi-phase schedules. Also performed structural and hydrostatic calculations using AutoCAD, Maxsurf, and STAAD Pro during marine design work at C. Than and Associates.",
    skills: [
      "Project Management",
      "AutoCAD",
      "Maxsurf",
      "STAAD Pro",
      "Technical Documentation",
      "QC Compliance",
    ],
    icon: Ship,
  },
  {
    title: "International Business Strategy",
    organization: "IAE Montpellier",
    description:
      "Developed a market entry and financial feasibility study for an international expansion case during the Master's program at IAE Montpellier. Conducted competitive analysis, financial modelling, and risk assessment. Delivered strategic recommendations to a panel of professors and industry professionals.",
    skills: [
      "Business Analysis",
      "Financial Modelling",
      "Market Research",
      "Strategic Planning",
      "PowerPoint",
    ],
    icon: LineChart,
  },
  {
    title: "Data Analysis Projects",
    organization: "Personal Projects",
    description:
      "Built a series of data cleaning and analysis scripts using Python (Pandas) to process structured datasets, identify inconsistencies, and extract actionable insights. Projects include exploratory data analysis, summary statistics generation, and data visualization using Matplotlib.",
    skills: [
      "Python",
      "Pandas",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Matplotlib",
    ],
    icon: Code,
  },
  {
    title: "Search Quality Evaluation",
    organization: "TELUS Digital",
    description:
      "Applied structured analytical frameworks (Page Quality, Needs Met) to evaluate hundreds of real-world search queries for relevance, accuracy, and user intent alignment. Maintained high accuracy scores across multilingual and cross-cultural content categories, demonstrating consistent analytical discipline in a remote, self-directed environment.",
    skills: [
      "Quality Assurance",
      "Analytical Thinking",
      "Content Evaluation",
      "Cross-Cultural Analysis",
      "Attention to Detail",
    ],
    icon: Search,
    note: "Confidential — details available on request",
  },
];

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="h-full p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-teal-600 dark:text-teal-400">
                      {project.organization}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {"note" in project && project.note ? (
                  <p className="text-xs text-slate-500 dark:text-slate-500 italic mb-4">
                    {project.note}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600"
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
  );
}
