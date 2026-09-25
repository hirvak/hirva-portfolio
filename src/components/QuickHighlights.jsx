import React from 'react';
import { quickStats } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function QuickHighlights() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-8 bg-white/60 dark:bg-[#181b24]/60 backdrop-blur-sm border-b border-[#e5e7eb] dark:border-[#272c3b]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e7eb] dark:divide-[#272c3b]">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                transitionDelay: isVisible ? `${idx * 70}ms` : '0ms'
              }}
              className={`flex flex-col items-center justify-center text-center transition-all duration-500 ease-out ${
                idx > 0 ? 'pt-4 sm:pt-0' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#171717] dark:text-slate-100 tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
