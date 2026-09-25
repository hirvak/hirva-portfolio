import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, Eye, Server, Layers, Cpu, Database, Bot } from 'lucide-react';
import { allProjects, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function Projects() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef(null);

  // Update progress indicator based on scroll position
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth } = carouselRef.current;
    const cardWidth = scrollWidth / allProjects.length;
    const index = Math.min(
      allProjects.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(index);
  };

  const scrollToProject = useCallback((index) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.scrollWidth / allProjects.length;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, []);

  const handlePrev = () => {
    pauseTemporarily();
    const nextIdx = (activeIndex - 1 + allProjects.length) % allProjects.length;
    scrollToProject(nextIdx);
  };

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % allProjects.length;
    scrollToProject(nextIdx);
  }, [activeIndex, scrollToProject]);

  const handleManualNext = () => {
    pauseTemporarily();
    handleNext();
  };

  // Pause autoplay temporarily and resume after 4 seconds
  const pauseTemporarily = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  // Autoplay effect (advance every ~3.8s, pause on hover/interaction or reduced motion)
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused || selectedProject) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(interval);
  }, [handleNext, isPaused, selectedProject]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleManualNext();
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    pauseTemporarily();
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      pauseTemporarily();
    }
  };

  const renderVisualIcon = (type) => {
    const map = {
      'computer-vision': <Eye className="w-7 h-7 text-[#F59E0B]" />,
      'backend-system': <Server className="w-7 h-7 text-[#F59E0B]" />,
      'operations-logistics': <Layers className="w-7 h-7 text-[#F59E0B]" />,
      'data-ml': <Cpu className="w-7 h-7 text-[#F59E0B]" />,
      'api-service': <Database className="w-7 h-7 text-[#F59E0B]" />,
      'agentic-ai': <Bot className="w-7 h-7 text-[#F59E0B]" />
    };
    return map[type] || <Server className="w-7 h-7 text-[#F59E0B]" />;
  };

  return (
    <section ref={ref} id="projects" className="relative py-12 sm:py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#e5e7eb] dark:border-[#272c3b] pb-4 gap-4 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#5f6368] dark:text-slate-400 mt-1">
              Things I've built while learning backend engineering, AI/ML and computer vision.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#181b24] text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleManualNext}
                aria-label="Next project"
                className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#272c3b] bg-white dark:bg-[#181b24] text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#171717] dark:text-slate-200 hover:text-[#F59E0B] inline-flex items-center gap-1"
            >
              <span>@hirvak on GitHub ↗</span>
            </a>
          </div>
        </div>

        {/* Horizontal Project Carousel Showcase with Autoplay */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setIsPaused(false);
          }}
          onMouseEnter={() => setIsPaused(true)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => pauseTemporarily()}
          tabIndex={0}
          aria-label="Projects Carousel"
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-1 focus:ring-[#F59E0B]/50 rounded"
        >
          {allProjects.map((proj, idx) => (
            <div
              key={proj.id}
              style={{
                transitionDelay: isVisible ? `${(idx + 1) * 70}ms` : '0ms'
              }}
              className={`w-[86vw] sm:w-[380px] md:w-[440px] shrink-0 snap-start rounded-2xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] p-6 space-y-4 hover:border-[#F59E0B] shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out group flex flex-col justify-between relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              {/* Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F59E0B] transition-colors duration-200"></div>

              <div className="space-y-4 pt-1">
                {/* Visual Banner Header */}
                <div className="h-28 rounded-xl bg-[#fafaf8]/80 dark:bg-[#0f1117]/80 border border-[#e5e7eb] dark:border-[#272c3b] flex items-center justify-between px-5 relative overflow-hidden group-hover:border-[#F59E0B]/40 transition-colors">
                  <div className="p-3 rounded-md bg-[#FEF3C7] dark:bg-[#F59E0B]/10 border border-[#F59E0B]/30">
                    {renderVisualIcon(proj.visualType)}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5f6368] dark:text-slate-400">
                    {proj.category}
                  </span>
                </div>

                {/* Title & Short Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#171717] dark:text-slate-100 group-hover:translate-x-1 transition-transform duration-200">
                    {proj.title}
                  </h3>
                  <p className="text-sm font-normal text-[#5f6368] dark:text-slate-300 leading-relaxed line-clamp-2">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Tech Stack Tags (Mono) */}
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {proj.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#FEF3C7] dark:bg-[#F59E0B]/15 text-[11px] font-semibold text-[#171717] dark:text-[#F59E0B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Highlight Callout Box */}
                <div className="p-3 rounded-lg bg-[#fafaf8]/80 dark:bg-[#0f1117]/80 border border-[#e5e7eb] dark:border-[#272c3b] space-y-0.5 text-xs">
                  <span className="font-bold text-[#171717] dark:text-slate-200 block text-[11px] uppercase tracking-wider font-mono">
                    Key Highlight:
                  </span>
                  <p className="text-[#5f6368] dark:text-slate-300 font-normal leading-relaxed">
                    {proj.keyHighlight}
                  </p>
                </div>
              </div>

              {/* Action Row - Hero CTA Hierarchy */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb] dark:border-[#272c3b] mt-4">
                {proj.hasModal ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(proj);
                    }}
                    className="px-3.5 py-1.5 rounded-full border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#181b24] text-xs font-semibold text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-1.5 rounded-full bg-[#171717] text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 font-bold text-xs flex items-center gap-1 transition-transform group-hover:translate-x-0.5 shadow-sm"
                >
                  <span>View Repository ↗</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Progress & Indicator */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs font-mono font-bold text-[#5f6368] dark:text-slate-400">
            0{activeIndex + 1} / 0{allProjects.length}
          </div>

          <div className="flex items-center gap-1.5">
            {allProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  pauseTemporarily();
                  scrollToProject(idx);
                }}
                aria-label={`Go to project ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'bg-[#F59E0B] w-6'
                    : 'bg-[#e5e7eb] dark:bg-[#272c3b] hover:bg-[#F59E0B]/50'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
