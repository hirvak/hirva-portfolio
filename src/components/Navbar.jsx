import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Open Source', href: '#open-source' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none">
      <div className={`max-w-[1240px] mx-auto rounded-full bg-white/85 dark:bg-[#181b24]/85 backdrop-blur-md border border-[#e5e7eb] dark:border-[#272c3b] px-6 py-3 shadow-md flex items-center justify-between pointer-events-auto transition-all duration-300 ${
        scrolled ? 'shadow-lg border-[#d1d5db] dark:border-[#374151]' : ''
      }`}>
        
        {/* Brand Name */}
        <a
          href="#home"
          className="text-base sm:text-lg font-bold tracking-tight text-[#171717] dark:text-slate-100 hover:text-[#F59E0B] transition-colors font-sans"
        >
          Hirva Kansara
        </a>

        {/* Text Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-200 hover:text-[#F59E0B] dark:hover:text-[#F59E0B] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Theme Toggle & Mobile Menu Button) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark/light theme"
            className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#1f2330] text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors shadow-xs"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#F59E0B]" /> : <Moon className="w-4 h-4 text-[#F59E0B]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#1f2330] text-[#171717] dark:text-slate-200 lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[1240px] mx-auto mt-2 rounded-2xl bg-white/95 dark:bg-[#181b24]/95 backdrop-blur-md border border-[#e5e7eb] dark:border-[#272c3b] px-6 pt-4 pb-6 space-y-3 shadow-xl pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-[#171717] dark:text-slate-200 hover:text-[#F59E0B]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

