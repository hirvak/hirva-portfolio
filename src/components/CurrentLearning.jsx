import React from 'react';
import { ArrowDown } from 'lucide-react';
import { currentLearningProgression } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function CurrentLearning() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });

  return (
    <section ref={ref} id="learning-path" className="py-12 sm:py-16 md:py-20 bg-[#fafaf8]/80 dark:bg-[#0f1117]/80 backdrop-blur-sm border-b border-[#e5e7eb] dark:border-[#272c3b]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
            {currentLearningProgression.title}
          </h2>
        </div>

        {/* Visual Progression Path */}
        <div className={`p-6 sm:p-8 rounded-xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] shadow-xs space-y-6 hover:border-[#F59E0B] transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#171717] dark:text-slate-100">
            {currentLearningProgression.path.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="px-4 py-3 rounded-lg bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] text-center w-full md:w-auto font-mono text-xs font-semibold">
                  {item}
                </div>
                {idx < currentLearningProgression.path.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-[#F59E0B] md:-rotate-90 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-2 border-t border-[#e5e7eb] dark:border-[#272c3b] text-center text-xs font-mono italic text-[#5f6368] dark:text-slate-400">
            "{currentLearningProgression.headline}"
          </div>
        </div>

      </div>
    </section>
  );
}

