import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { contactVisual, personalInfo } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function Contact() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });

  return (
    <section ref={ref} id="contact" className="relative pt-16 sm:pt-20 md:pt-24 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-10 space-y-4 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] dark:bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F59E0B] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
            Let's Connect
          </h2>

          <p className="text-sm sm:text-base font-normal text-[#5f6368] dark:text-slate-300 max-w-2xl leading-relaxed">
            {contactVisual.quote}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3.5 rounded-full bg-[#171717] text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 font-bold text-sm sm:text-base hover:scale-105 transition-all shadow-md inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#F59E0B]" />
              <span>Say Hello</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white dark:bg-[#181b24] text-[#171717] dark:text-slate-200 border border-[#d1d5db] dark:border-[#374151] hover:border-[#F59E0B] font-semibold text-sm transition-all inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}


