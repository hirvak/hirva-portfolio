import React, { useState } from 'react';
import TechLogo from './TechLogos';
import { cloudSkillsList } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function Skills() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });
  const [hoveredSkillId, setHoveredSkillId] = useState(null);

  return (
    <section ref={ref} id="skills" className="relative py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100 font-sans">
              What I Work With
            </h2>
            <p className="text-sm sm:text-base text-[#666666] dark:text-slate-400 font-medium mt-1">
              Tools and technologies I use to build, experiment and ship.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5f6368] dark:text-slate-400 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-ping inline-block" />
            <span>Hover to explore stack</span>
          </div>
        </div>

        {/* Responsive Flex-Wrap Technology Playground Container */}
        <div className={`p-6 sm:p-8 sm:py-10 rounded-2xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] shadow-xs transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-full">
            {cloudSkillsList.map((skill, idx) => {
              const isPrimary = skill.priority === 'primary';
              const isHovered = hoveredSkillId === skill.id;

              return (
                <div
                  key={skill.id}
                  style={{
                    transitionDelay: isVisible ? `${(idx % 12) * 40}ms` : '0ms'
                  }}
                  onMouseEnter={() => setHoveredSkillId(skill.id)}
                  onMouseLeave={() => setHoveredSkillId(null)}
                  onClick={() => setHoveredSkillId(hoveredSkillId === skill.id ? null : skill.id)}
                  className={`relative inline-flex items-center gap-2.5 rounded-[14px] border transition-all duration-300 ease-out select-none shadow-xs cursor-pointer ${
                    isPrimary
                      ? 'h-[52px] sm:h-[56px] px-5 sm:px-6'
                      : 'h-[46px] sm:h-[52px] px-4 sm:px-5'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'
                  } ${
                    isHovered
                      ? 'bg-white dark:bg-[#181b24] border-[#F59E0B] shadow-md -translate-y-1 scale-105 z-30'
                      : 'bg-white/90 dark:bg-[#1f2330]/90 border-[#e5e7eb] dark:border-[#272c3b] hover:border-[#F59E0B]'
                  }`}
                >
                  {/* Official CDN Brand Logo Box */}
                  <div className={`flex items-center justify-center shrink-0 ${isPrimary ? 'w-6 h-6' : 'w-5 h-5'}`}>
                    <TechLogo name={skill.id} className="w-full h-full object-contain pointer-events-none" />
                  </div>

                  {/* Technology Label */}
                  <span className={`font-sans whitespace-nowrap transition-colors duration-200 ${
                    isPrimary
                      ? 'text-base sm:text-[17px] font-bold tracking-tight'
                      : 'text-sm sm:text-[15px] font-semibold tracking-tight'
                  } ${
                    isHovered ? 'text-[#F59E0B]' : 'text-[#171717] dark:text-slate-100'
                  }`}>
                    {skill.name}
                  </span>

                  {/* Fast Floating Description Popover Tooltip on Hover / Tap */}
                  {isHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 sm:w-72 p-3.5 rounded-xl bg-[#171717] dark:bg-[#1c202b] border border-[#F59E0B]/60 text-white shadow-xl z-50 pointer-events-none transition-all duration-200 ease-out animate-fadeIn">
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-700/80 mb-1.5">
                        <div className="w-4 h-4 shrink-0">
                          <TechLogo name={skill.id} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-[#F59E0B] font-sans">{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-400 ml-auto uppercase">{skill.category}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-200 font-sans leading-snug">
                        {skill.description}
                      </p>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-[#171717] dark:border-t-[#1c202b]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

