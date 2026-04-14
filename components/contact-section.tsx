"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import {
  Linkedin,
  MapPin,
  Mail,
  Send,
  CheckCircle,
  AlertTriangle,
  Globe,
  Clock,
} from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setErrorMessage("Form is not connected yet. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      setErrorMessage("Something went wrong. Please try again soon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {"Let's"} Connect
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {"I'm"} actively seeking a Project Manager, PMO Analyst, or Project
            Engineer role in maritime, offshore energy, logistics, or
            international operations. Based in Paris — available immediately,
            open to hybrid and on-site.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-medium">
                      Location
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Paris, Ile-de-France, France
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:kosoewaihtoo@gmail.com"
                className="block p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-medium">
                      Email
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      kosoewaihtoo@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/soe-wai-htoo-6b9a5b99/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-medium">
                      LinkedIn
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      Connect with me
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://soe-wai-htoo-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-medium">
                      Portfolio
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      soe-wai-htoo-portfolio.vercel.app
                    </p>
                  </div>
                </div>
              </a>

              <div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-medium">
                      Availability
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      Immediately available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:text-slate-600 dark:disabled:text-slate-300 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-center text-sm text-slate-500 dark:text-slate-500">
                I typically respond within 24 hours.
              </p>
              {errorMessage ? (
                <div className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="w-4 h-4 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
