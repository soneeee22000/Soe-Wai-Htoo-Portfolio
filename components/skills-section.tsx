"use client";

import { useEffect, useRef } from "react";
import {
  Globe,
  Monitor,
  Code2,
  DraftingCompass,
  Ruler,
  Wrench,
  BarChart3,
  FileText,
} from "lucide-react";

const coreSkills = [
  "Project Management",
  "Project Lifecycle & Scheduling",
  "Stakeholder Coordination",
  "Quality Assurance & Compliance",
  "Business Analysis",
  "Procurement & Budget Management",
  "Cross-Cultural Communication",
  "Risk Monitoring & Reporting",
];

const technicalSkills = [
  {
    name: "Microsoft Office",
    icon: Monitor,
    detail: "Excel · PowerPoint · Word",
  },
  {
    name: "Python (Pandas)",
    icon: Code2,
    detail: "Data cleaning, analysis & visualization",
  },
  {
    name: "AutoCAD",
    icon: DraftingCompass,
    detail: "Technical & engineering drawings",
  },
  { name: "Maxsurf", icon: Ruler, detail: "Marine hull design & hydrostatics" },
  {
    name: "STAAD Pro",
    icon: Wrench,
    detail: "Structural engineering calculations",
  },
  {
    name: "Data Analysis & Reporting",
    icon: BarChart3,
    detail: "Excel, Python, structured frameworks",
  },
  {
    name: "Document & Information Management",
    icon: FileText,
    detail: "Technical drawings, workflows, QC systems",
  },
];

const languages = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Full Professional" },
  { name: "French", level: "A2 / Limited Working" },
];

const certificates = [
  "Project Management Diploma · ICM London · 2018",
  "Bloomberg Market Concepts (BMC) · 2023",
  "Bloomberg ESG Certificate · 2023",
  "Inside LVMH — Creation & Branding · 2023",
  "Business Management & Administration Diploma · Strategy First University · 2019",
];

export function SkillsSection() {
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
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 hover:bg-teal-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/40 p-4 hover:border-teal-500/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {skill.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {skill.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              Languages
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-center hover:border-teal-500/30 transition-colors"
                >
                  <p className="text-slate-900 dark:text-white font-medium mb-1">
                    {lang.name}
                  </p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">
                    {lang.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-400 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Certificates & Diplomas
            </h3>
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
