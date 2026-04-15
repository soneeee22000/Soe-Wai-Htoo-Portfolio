"use client";

import { useEffect, useRef } from "react";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Project Engineer",
    company: "Kabar Services Co., Ltd",
    period: "Oct 2018 – Apr 2021",
    location: "Yangon, Myanmar",
    type: "Full-Time",
    description: [
      "Led end-to-end coordination of vessel construction projects valued at $1M–$10M, managing 30+ contractors across engineering, procurement, and site operations",
      "Built and tracked multi-phase project schedules, overseeing 100+ technical drawings and documentation workflows to maintain on-time milestone delivery",
      "Served concurrently as Procurement Manager and Project Accountant — conducting vendor negotiations, purchase orders, budget analysis, and cost reduction across multiple active projects",
      "Implemented quality and compliance checks at every project phase, reducing rework and supporting long-term client retention",
      "Managed stakeholder coordination and labor relations across teams of 70+ workers throughout full construction cycles",
    ],
  },
  {
    title: "Assistant Engineer / Team Leader",
    company: "C. Than and Associates Marine Design Firm",
    period: "Apr 2016 – Aug 2018",
    location: "Yangon, Myanmar",
    type: "Full-Time",
    description: [
      "Promoted to Team Leader of the Quality Control team post-internship based on performance and technical reliability",
      "Supervised a team of 5 engineers on marine design and construction inspection projects — coordinating task allocation, technical reviews, and deadline tracking",
      "Executed structural and hydrostatic engineering calculations using AutoCAD, Maxsurf, and STAAD Pro to deliver classification-compliant ship designs",
      "Designed and implemented a streamlined QC reporting and monitoring system that improved issue detection speed and documentation accuracy across the team",
      "Conducted design drawing checks and ship structure inspections in accordance with classification society regulations",
    ],
  },
  {
    title: "Founder & Operator",
    company: "ShopAce Online Retail",
    period: "Aug 2020 – Dec 2021",
    location: "Yangon, Myanmar",
    type: "Entrepreneurship",
    description: [
      "Founded and operated a full e-commerce business end-to-end — supplier sourcing, inventory management, pricing strategy, and customer experience",
      "Negotiated terms with 3+ vendors and coordinated logistics end-to-end",
      "Applied data analytics for customer segmentation and personalized outreach, driving repeat purchase rate",
    ],
  },
  {
    title: "Personalized Internet Assessor",
    company: "TELUS Digital Co., Ltd",
    period: "Jun 2024 – Present",
    location: "Remote",
    type: "Part-Time",
    description: [
      "Evaluate search result quality across relevance, accuracy, tone, and cultural appropriateness using structured Page Quality and Needs Met frameworks",
      "Apply cross-cultural and multilingual judgment to assess content across diverse regional and linguistic contexts",
      "Maintain consistently high accuracy scores across hundreds of evaluated queries, demonstrating analytical discipline and attention to detail",
    ],
  },
];

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-teal-500/15 to-transparent dark:from-teal-500/50 dark:via-teal-500/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div
                  className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}
                >
                  <div
                    className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}
                  >
                    <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5">
                      <div
                        className={`flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="text-slate-400 dark:text-slate-500">
                          · {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div
                        className={`flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400">
                          {exp.type}
                        </span>
                      </div>
                      <ul className="space-y-2.5 text-left">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-1.5 shrink-0" />
                            <span>{item}</span>
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
  );
}
