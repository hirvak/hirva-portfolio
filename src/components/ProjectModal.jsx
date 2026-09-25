import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white/95 dark:bg-[#181b24]/95 backdrop-blur-md rounded-xl border border-[#e5e7eb] dark:border-[#272c3b] shadow-2xl overflow-hidden my-8 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#e5e7eb] dark:border-[#272c3b] flex items-start justify-between gap-4 bg-[#fafaf8] dark:bg-[#0f1117]">
          <div>
            <span className="px-2.5 py-0.5 rounded bg-[#FEF3C7] dark:bg-[#F59E0B]/20 text-[#171717] dark:text-[#F59E0B] text-xs font-mono font-bold uppercase">
              Case Study
            </span>
            <h3 className="text-2xl font-bold text-[#171717] dark:text-slate-100 mt-2">
              {project.title}
            </h3>
            <p className="text-xs text-[#5f6368] dark:text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
            {project.playfulLine && (
              <p className="text-xs italic text-[#F59E0B] mt-1 font-mono">
                "{project.playfulLine}"
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded border border-[#e5e7eb] dark:border-[#272c3b] text-[#5f6368] dark:text-slate-400 hover:text-[#171717] dark:hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto text-[#171717] dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-1">
            <h4 className="font-bold text-[#171717] dark:text-slate-100 text-sm uppercase tracking-wider">
              Overview
            </h4>
            <p className="p-3.5 rounded bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b]">
              {project.overview}
            </p>
          </div>

          {project.objective && (
            <div className="space-y-1">
              <h4 className="font-bold text-[#171717] dark:text-slate-100 text-sm uppercase tracking-wider">
                Objective
              </h4>
              <p className="p-3.5 rounded bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b]">
                {project.objective}
              </p>
            </div>
          )}

          {project.technicalApproach && (
            <div className="space-y-1">
              <h4 className="font-bold text-[#171717] dark:text-slate-100 text-sm uppercase tracking-wider">
                Technical Approach
              </h4>
              <p className="p-3.5 rounded bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b]">
                {project.technicalApproach}
              </p>
            </div>
          )}

          {project.keyFeatures && (
            <div className="space-y-1">
              <h4 className="font-bold text-[#171717] dark:text-slate-100 text-sm uppercase tracking-wider">
                Key Features
              </h4>
              <ul className="space-y-1.5 p-3.5 rounded bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b]">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] space-y-1">
                <div className="text-amber-600 dark:text-amber-500 text-xs font-mono font-bold uppercase flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> Challenge
                </div>
                <p className="text-xs">{project.challenges}</p>
              </div>

              <div className="p-3.5 rounded bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] space-y-1">
                <div className="text-emerald-600 dark:text-emerald-500 text-xs font-mono font-bold uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solution
                </div>
                <p className="text-xs">{project.solutions}</p>
              </div>
            </div>
          )}

          <div className="pt-1">
            <div className="text-xs font-bold text-[#5f6368] dark:text-slate-400 uppercase mb-2">Technologies</div>
            <div className="flex flex-wrap gap-2 font-mono">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#FEF3C7] dark:bg-[#F59E0B]/15 text-xs font-semibold text-[#171717] dark:text-[#F59E0B]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#e5e7eb] dark:border-[#272c3b] flex items-center justify-between bg-[#fafaf8] dark:bg-[#0f1117]">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded border border-[#e5e7eb] dark:border-[#272c3b] text-xs font-semibold text-[#5f6368] dark:text-slate-400 hover:text-[#171717]"
          >
            Close
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs flex items-center gap-1 shadow-sm"
          >
            <span>View Repository ↗</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
