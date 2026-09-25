import React, { useState, useEffect, useRef } from 'react';
import { aboutContent } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function About() {
  const [sectionRef, isVisible] = useScrollEntrance({ threshold: 0.12 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);

  // Check for prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Auto-transition interval
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aboutContent.blocks.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  // Pause temporarily on user action (resumes after 4 seconds)
  const pauseTemporarily = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
    pauseTemporarily();
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    pauseTemporarily();
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    pauseTemporarily();
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] border-b border-[#e5e7eb] dark:border-[#272c3b] overflow-hidden"
    >
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10 relative z-10">
        
        {/* Section Header & Headline Statement */}
        <div 
          className={`space-y-4 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100 font-sans">
              {aboutContent.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base font-normal text-[#5f6368] dark:text-slate-300 leading-relaxed max-w-3xl">
            "{aboutContent.quote}"
          </p>
        </div>

        {/* 3 Focus Cards with Staggered Entrance & Horizontal Active Transition */}
        <div 
          className="space-y-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {aboutContent.blocks.map((block, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={block.number}
                  onClick={() => handleCardClick(idx)}
                  style={{
                    transitionDelay: isVisible ? `${150 + idx * 70}ms` : '0ms'
                  }}
                  className={`relative p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-500 ease-out select-none group overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
                  } ${
                    isActive
                      ? 'bg-white dark:bg-[#181b24] border-2 border-[#F59E0B] -translate-y-1 shadow-md'
                      : 'bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] hover:border-slate-300 dark:hover:border-slate-700 opacity-90 hover:opacity-100 shadow-xs'
                  }`}
                >
                  {/* Top Orange Accent Line for Active Card */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B] rounded-t-xl transition-all duration-500" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-base sm:text-lg font-bold font-mono transition-colors duration-300 ${
                          isActive ? 'text-[#F59E0B]' : 'text-[#9ca3af] dark:text-slate-500'
                        }`}
                      >
                        {block.number}
                      </span>
                      <span className="text-[#d1d5db] dark:text-slate-600 font-mono">—</span>
                      <span
                        className={`text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-[#F59E0B]' : 'text-[#171717] dark:text-slate-200'
                        }`}
                      >
                        {block.title}
                      </span>
                    </div>

                    {/* Playful Detail: Small sliding arrow on active card hover */}
                    <span
                      className={`inline-block text-base font-bold transition-all duration-200 ${
                        isActive
                          ? 'text-[#F59E0B] opacity-100 translate-x-0 group-hover:translate-x-1.5'
                          : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {/* Supporting Line Revealed on Active Card */}
                  <div
                    className={`text-xs font-mono font-semibold pt-3 transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-[#5f6368] dark:text-slate-300 opacity-100 translate-y-0'
                        : 'text-[#9ca3af] dark:text-slate-500 opacity-60'
                    }`}
                  >
                    {block.tags}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator Dots */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {aboutContent.blocks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-2.5 h-2.5 bg-[#F59E0B] scale-110'
                    : 'w-2 h-2 bg-[#e5e7eb] dark:bg-[#374151] hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stable Education Section with Staggered Entrance */}
        <div className="pt-8 border-t border-[#e5e7eb] dark:border-[#272c3b] space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F59E0B]">
            EDUCATION
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutContent.education.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  transitionDelay: isVisible ? `${400 + idx * 70}ms` : '0ms'
                }}
                className={`p-4 sm:p-5 rounded-xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] shadow-xs hover:border-[#F59E0B] transition-all duration-500 ease-out flex items-center justify-between ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#171717] dark:text-slate-100">
                    {edu.degree}
                  </div>
                  <div className="text-xs sm:text-sm text-[#5f6368] dark:text-slate-400 font-normal mt-1">
                    {edu.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
