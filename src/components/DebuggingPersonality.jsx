import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import { debuggingQuotes } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function DebuggingPersonality() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });
  const [msgIndex, setMsgIndex] = useState(0);

  const handleNextMessage = () => {
    setMsgIndex((prev) => (prev + 1) % debuggingQuotes.length);
  };

  return (
    <section ref={ref} className="py-10 sm:py-14 bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border-b border-[#e5e7eb] dark:border-[#272c3b]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className={`p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0f1117]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-md transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}>
          
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B]">
              Currently Debugging...
            </div>

            <p className="text-base sm:text-lg font-mono font-semibold text-[#171717] dark:text-slate-100">
              "{debuggingQuotes[msgIndex]}"
            </p>

            <div className="text-xs font-mono text-[#5f6368] dark:text-slate-400">
              STATUS: <span className="font-semibold text-[#171717] dark:text-slate-200">Still figuring that one out.</span>
            </div>
          </div>

          <button
            onClick={handleNextMessage}
            className="px-4 py-2 rounded-lg border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#181b24] hover:border-[#F59E0B] text-xs font-mono font-bold text-[#171717] dark:text-slate-200 hover:text-[#F59E0B] transition-colors flex items-center gap-2 shrink-0 shadow-xs active:scale-95"
          >
            <span>Try again</span>
            <RotateCw className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </section>
  );
}

