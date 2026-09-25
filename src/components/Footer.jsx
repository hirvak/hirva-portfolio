import React from 'react';
import { Mail, Phone, ArrowUp, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function Footer({ darkMode, setDarkMode }) {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer ref={ref} className="pt-8 pb-10 md:pb-12 bg-[#fafaf8]/80 dark:bg-[#0f1117]/80 backdrop-blur-sm text-[#171717] dark:text-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        
        {/* Four Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-2">
          
          {/* Col 1: Personal Identity (4 Cols) */}
          <div
            style={{ transitionDelay: isVisible ? '60ms' : '0ms' }}
            className={`lg:col-span-4 space-y-4 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            <h3 className="text-xl font-bold text-[#171717] dark:text-slate-100 tracking-tight">
              {personalInfo.name}
            </h3>
            <div className="text-xs font-bold text-[#F59E0B]">
              {personalInfo.heroSubheading}
            </div>
            <p className="text-xs text-[#5f6368] dark:text-slate-400 font-normal leading-relaxed max-w-sm">
              "Building backend systems, experimenting with AI, and learning by shipping."
            </p>
            
            {/* Social Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#181b24] text-xs font-semibold text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub ↗</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#181b24] text-xs font-semibold text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </div>

          {/* Col 2: Contact (3 Cols) */}
          <div
            style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
            className={`lg:col-span-3 space-y-3 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#5f6368] dark:text-slate-400">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-xs font-medium">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-[#171717] dark:text-slate-200 hover:text-[#F59E0B] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span className="group-hover:underline truncate">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:+91${personalInfo.phone}`}
                className="flex items-center gap-2 text-[#171717] dark:text-slate-200 hover:text-[#F59E0B] transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span className="group-hover:underline">+91 {personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation (3 Cols) */}
          <div
            style={{ transitionDelay: isVisible ? '180ms' : '0ms' }}
            className={`lg:col-span-3 space-y-3 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#5f6368] dark:text-slate-400">
              NAVIGATION
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#5f6368] dark:text-slate-300 hover:text-[#F59E0B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumePath}
                  download="Hirva_Kansara_Resume.pdf"
                  className="text-[#F59E0B] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Resume PDF ↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Settings (2 Cols) */}
          <div
            style={{ transitionDelay: isVisible ? '240ms' : '0ms' }}
            className={`lg:col-span-2 space-y-4 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#5f6368] dark:text-slate-400">
              SETTINGS
            </h4>
            
            <div className="space-y-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1.5 rounded border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#181b24] text-xs font-semibold text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors flex items-center gap-2"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <button
                onClick={scrollToTop}
                className="text-xs font-semibold text-[#5f6368] dark:text-slate-400 hover:text-[#F59E0B] transition-colors flex items-center gap-1"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className={`pt-6 border-t border-[#e5e7eb] dark:border-[#272c3b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-[#5f6368] dark:text-slate-400 font-medium">
            © {currentYear} Hirva Kansara. All rights reserved.
          </div>

          <div className="text-xs font-mono text-[#5f6368] dark:text-slate-400 italic">
            "Still debugging. Still learning. Still shipping."
          </div>

          <div className="text-[#5f6368] dark:text-slate-400 font-mono text-[11px]">
            Built with React · Vite · Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}

