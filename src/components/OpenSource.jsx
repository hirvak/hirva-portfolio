import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, GitPullRequest } from 'lucide-react';
import { openSourceContribution } from '../data/portfolioData';

export default function OpenSource() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Play animation only once per page load
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="open-source" 
      className="relative py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] border-b border-[#e5e7eb] dark:border-[#272c3b] overflow-hidden"
    >
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8 relative z-10">
        
        {/* Section Header with Fade-Up Entrance */}
        <div 
          className={`flex items-end justify-between border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100 font-sans">
              Open Source
            </h2>
            <p className="text-xs sm:text-sm text-[#5f6368] dark:text-slate-400 font-medium mt-1">
              Infrastructure testing, hash determinism & boundary verification
            </p>
          </div>

          <a
            href={openSourceContribution.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-xs sm:text-sm font-bold text-[#171717] dark:text-slate-200 hover:text-[#F59E0B] inline-flex items-center gap-1.5 transition-colors cursor-pointer select-none"
          >
            <span>View GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Dynavec Glassmorphic Highlight Card with Scale-In Entrance */}
        <div 
          className={`p-6 sm:p-8 rounded-xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] space-y-6 shadow-xs transition-all duration-500 ease-out hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-lg ${
            isVisible ? 'opacity-100 translate-y-0 scale-100 delay-150' : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e7eb] dark:border-[#272c3b] pb-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                {/* Dynavec Icon with Colored Background Glow */}
                <span className="p-2 rounded-lg bg-[#F59E0B]/10 dark:bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] shadow-xs">
                  <GitPullRequest className="w-5 h-5" />
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-[#171717] dark:text-slate-100 tracking-tight">
                  {openSourceContribution.project}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-normal text-[#5f6368] dark:text-slate-300">
                {openSourceContribution.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F59E0B]">
              MY CONTRIBUTION
            </div>

            {/* Staggered Contribution Tags Entrance */}
            <div className="flex flex-wrap gap-2.5 font-mono">
              {openSourceContribution.contributionTags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    transitionDelay: isVisible ? `${250 + idx * 70}ms` : '0ms'
                  }}
                  className={`px-3.5 py-1.5 rounded-lg bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] text-xs font-medium text-[#171717] dark:text-slate-200 transition-all duration-300 hover:border-[#F59E0B] hover:text-[#F59E0B] hover:bg-amber-50/50 dark:hover:bg-amber-950/20 cursor-default select-none ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
