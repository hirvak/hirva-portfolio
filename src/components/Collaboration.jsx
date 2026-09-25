import React from 'react';
import { collaborationVisual } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function Collaboration() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });

  return (
    <section ref={ref} id="collaboration" className="relative py-12 sm:py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
            Collaboration & Leadership
          </h2>
        </div>

        {/* Headline */}
        <p className={`text-xl sm:text-2xl font-semibold text-[#171717] dark:text-slate-100 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          "{collaborationVisual.headline}"
        </p>

        {/* 3 Compact Concept Blocks / Quadrants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
          {collaborationVisual.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                transitionDelay: isVisible ? `${(idx + 1) * 80}ms` : '0ms'
              }}
              className={`p-5 rounded-xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] space-y-2 shadow-xs hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-md transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                {item.title}
              </div>
              <div className="text-sm font-semibold text-[#171717] dark:text-slate-200">
                {item.tags}
              </div>
            </div>
          ))}
        </div>

        {/* Tiny Playful Line */}
        <div className={`pt-1 text-xs font-mono text-[#5f6368] dark:text-slate-400 italic transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          "{collaborationVisual.playfulLine}"
        </div>

      </div>
    </section>
  );
}

