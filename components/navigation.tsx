"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDarkMode = resolvedTheme === "dark";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-[#0c1222]/90 backdrop-blur-md border-b border-slate-200 dark:border-teal-500/10"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            SWH<span className="text-teal-600 dark:text-teal-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-300 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white dark:hover:border-teal-500/50 transition-colors"
              aria-label={
                isMounted
                  ? isDarkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                  : "Toggle theme"
              }
            >
              {isMounted ? (
                isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <span className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-300 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white dark:hover:border-teal-500/50 transition-colors"
              aria-label={
                isMounted
                  ? isDarkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                  : "Toggle theme"
              }
            >
              {isMounted ? (
                isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <span className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-md",
          isMobileMenuOpen
            ? "max-h-96 border-b border-slate-200 dark:border-teal-500/10"
            : "max-h-0",
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
