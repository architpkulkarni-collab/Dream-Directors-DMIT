"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about-dmit" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass shadow-lg py-2"
          : "py-4 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/logo.jpg"
                alt="Dream Directors DMIT Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                DREAM DIRECTORS
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 tracking-widest">
                DMIT FINGERPRINT ANALYSIS
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer
                  text-slate-600 hover:text-primary-600 hover:bg-primary-50
                  dark:text-slate-300 dark:hover:text-primary-300 dark:hover:bg-primary-900/30"
              >
                {link.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-xl transition-all duration-300 cursor-pointer
                text-slate-500 hover:text-primary-600 hover:bg-primary-50
                dark:text-slate-400 dark:hover:text-yellow-400 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <a
              href="https://forms.gle/AVR3qhMDBynJNw1b6"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl btn-shimmer cursor-pointer
                bg-gradient-to-r from-primary-600 to-primary-700
                hover:from-primary-700 hover:to-primary-800
                text-white shadow-md hover:shadow-lg
                transition-all duration-300 transform hover:scale-[1.02]"
            >
              Inquiry
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-all cursor-pointer
                text-slate-500 hover:bg-primary-50
                dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl transition-all cursor-pointer
                text-slate-600 hover:bg-primary-50
                dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="glass rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all cursor-pointer
                  text-slate-600 hover:text-primary-600 hover:bg-primary-50
                  dark:text-slate-300 dark:hover:text-primary-300 dark:hover:bg-primary-900/30"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://forms.gle/AVR3qhMDBynJNw1b6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full mt-2 px-5 py-3 text-sm font-semibold rounded-xl cursor-pointer
                bg-gradient-to-r from-primary-600 to-primary-700
                text-white text-center shadow-md
                transition-all duration-300"
            >
              Schedule Your Session
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
