import React from 'react';
import { advancedHighlights } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function AdvancedSkillHighlights() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });

  return (
    <section ref={ref} id="core-capabilities" className="relative py-12 sm:py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] dark:bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F59E0B] mb-2 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
            Core Technical Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advancedHighlights.map((item, idx) => (
            <div
              key={idx}
              style={{
                transitionDelay: isVisible ? `${(idx + 1) * 70}ms` : '0ms'
              }}
              className={`p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] space-y-2 shadow-xs hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-md transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              <h3 className="font-semibold text-lg text-[#171717] dark:text-slate-100 tracking-tight">
                {item.title}
              </h3>
              <div className="font-mono text-xs text-[#F59E0B] font-semibold">
                {item.stack}
              </div>
              <p className="text-sm font-normal text-[#5f6368] dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

