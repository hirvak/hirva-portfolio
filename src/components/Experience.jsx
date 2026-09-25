import React from 'react';
import { experiences } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function Experience() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });

  return (
    <section ref={ref} id="experience" className="relative py-12 sm:py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
            Work Experience
          </h2>
        </div>

        {/* Timeline / Visual List */}
        <div className="relative border-l-2 border-[#F59E0B] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                transitionDelay: isVisible ? `${(idx + 1) * 70}ms` : '0ms'
              }}
              className={`relative group space-y-2 p-5 rounded-xl bg-white/70 dark:bg-[#1f2330]/70 backdrop-blur-xs border border-[#e5e7eb] dark:border-[#272c3b] hover:border-[#F59E0B] transition-all duration-500 ease-out shadow-xs hover:-translate-y-1 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-6 w-4 h-4 rounded-full bg-[#F59E0B] border-4 border-white dark:border-[#181b24]"></div>

              {/* Year & Duration Header */}
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-2xl font-extrabold text-[#171717] dark:text-slate-100">
                  {exp.year}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#171717] dark:text-slate-200">
                  {exp.company}
                </span>
                <span className="text-xs font-bold text-[#F59E0B] uppercase">
                  {exp.role}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#FEF3C7] dark:bg-[#F59E0B]/20 text-[11px] font-mono font-bold text-[#171717] dark:text-[#F59E0B]">
                  {exp.duration}
                </span>
              </div>

              {/* Tech Line (Mono) */}
              <div className="text-xs font-mono font-semibold text-[#5f6368] dark:text-slate-300">
                {exp.tech}
              </div>

              {/* 2 Concise Bullets */}
              <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-[#171717] dark:text-slate-300">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-[#F59E0B] font-bold mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

