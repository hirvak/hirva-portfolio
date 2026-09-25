import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, CheckCircle2, ArrowRight, Sparkles, Target, BookOpen, GitCommit } from 'lucide-react';
import { futureGoalsVisual } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

export default function FutureGoals() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });
  const [imgError, setImgError] = useState(false);
  const [githubStats, setGithubStats] = useState({
    public_repos: null,
    followers: null,
    loading: true
  });

  // Fetch real-time live public profile data from GitHub API
  useEffect(() => {
    fetch('https://api.github.com/users/hirvak')
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limited');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.public_repos === 'number') {
          setGithubStats({
            public_repos: data.public_repos,
            followers: data.followers || 0,
            loading: false
          });
        }
      })
      .catch(() => {
        // Safe fallback if rate limited or offline
        setGithubStats({
          public_repos: 6,
          followers: 0,
          loading: false
        });
      });
  }, []);

  // Fallback activity heatmap squares generator if image fails to load or offline
  const generateHeatmapDays = () => {
    const days = [];
    for (let i = 0; i < 112; i++) {
      const intensity = Math.floor(Math.sin(i * 0.3) * 2 + Math.cos(i * 0.7) * 2 + 1.5);
      const clamped = Math.max(0, Math.min(4, intensity));
      days.push(clamped);
    }
    return days;
  };

  const activityDays = generateHeatmapDays();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1: return 'bg-amber-500/20 dark:bg-amber-500/30';
      case 2: return 'bg-amber-500/45 dark:bg-amber-500/50';
      case 3: return 'bg-amber-500/75 dark:bg-amber-500/80';
      case 4: return 'bg-amber-500 dark:bg-amber-400';
      default: return 'bg-[#e5e7eb] dark:bg-[#272c3b]';
    }
  };

  return (
    <section ref={ref} id="future-aspirations" className="relative py-12 sm:py-16 md:py-20 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className={`border-b border-[#e5e7eb] dark:border-[#272c3b] pb-4 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] dark:bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F59E0B] mb-2 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            <span>{futureGoalsVisual.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-slate-100">
            {futureGoalsVisual.title}
          </h2>
        </div>

        {/* 1. Visual Progression Timeline ("Now" -> "Next" -> "Goal") */}
        <div className={`p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] shadow-xs space-y-6 hover:border-[#F59E0B] transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}>
          <div className="flex items-center justify-between border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <h3 className="font-bold text-base text-[#171717] dark:text-slate-100 tracking-tight">
                Engineering Growth Roadmap
              </h3>
            </div>
            <span className="text-xs font-mono text-[#5f6368] dark:text-slate-400">
              Continuous Skill Evolution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {futureGoalsVisual.timeline.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-5 rounded-xl bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] space-y-3 flex flex-col justify-between hover:border-[#F59E0B]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                      step.stage === 'NOW' 
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                        : step.stage === 'NEXT'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-300 dark:border-blue-800'
                    }`}>
                      {step.stage}
                    </span>

                    <span className="text-[11px] font-mono text-[#5f6368] dark:text-slate-400">
                      {step.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#171717] dark:text-slate-100 tracking-tight">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#5f6368] dark:text-slate-300 leading-relaxed mt-1.5">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e5e7eb] dark:border-[#272c3b]/60 flex flex-wrap gap-1.5">
                  {step.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-[#181b24] border border-[#e5e7eb] dark:border-[#272c3b] text-[11px] font-mono font-medium text-[#171717] dark:text-slate-200"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Arrow connector for desktop */}
                {idx < futureGoalsVisual.timeline.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white dark:bg-[#181b24] border border-[#e5e7eb] dark:border-[#272c3b] items-center justify-center text-[#F59E0B] shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. GitHub Activity & Active Learning Roadmap Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}>

          {/* Left Column: GitHub Activity & Real Live Data */}
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] shadow-xs space-y-4 hover:border-[#F59E0B] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-[#171717] dark:text-slate-100" />
                  <div>
                    <h3 className="font-bold text-base text-[#171717] dark:text-slate-100 tracking-tight">
                      GitHub Activity
                    </h3>
                    <p className="text-xs text-[#5f6368] dark:text-slate-400 font-mono">
                      @hirvak
                    </p>
                  </div>
                </div>

                <a
                  href={futureGoalsVisual.github.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-[#e5e7eb] dark:border-[#272c3b] bg-[#fafaf8] dark:bg-[#0f1117] text-xs font-mono font-semibold text-[#171717] dark:text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Activity Heatmap Graph */}
              <div className="p-4 rounded-xl bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#5f6368] dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{futureGoalsVisual.github.contributionsLabel}</span>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    ● Live Contributions
                  </span>
                </div>

                {/* Live Image Embed with Interactive Fallback */}
                {!imgError ? (
                  <div className="overflow-x-auto py-1">
                    <img
                      src={`https://ghchart.rshah.org/F59E0B/${futureGoalsVisual.github.username}`}
                      alt="Hirva Kansara GitHub Contributions"
                      onError={() => setImgError(true)}
                      className="w-full min-w-[320px] rounded object-contain filter dark:invert dark:hue-rotate-180"
                    />
                  </div>
                ) : (
                  <div className="space-y-2 py-1">
                    <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-1">
                      {activityDays.map((level, idx) => (
                        <div
                          key={idx}
                          className={`w-2.5 h-2.5 rounded-xs ${getHeatmapColor(level)} transition-colors`}
                          title={`Contributions level: ${level}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#5f6368] dark:text-slate-400">
                      <span>Less</span>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-xs bg-[#e5e7eb] dark:bg-[#272c3b]" />
                        <span className="w-2 h-2 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-2 rounded-xs bg-amber-500/60" />
                        <span className="w-2 h-2 rounded-xs bg-amber-500" />
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Live GitHub Stats Row (Fetched via GitHub API) */}
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#e5e7eb] dark:border-[#272c3b] text-center font-mono">
              <div className="p-3 rounded-lg bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b]">
                <div className="text-base font-bold text-[#171717] dark:text-slate-100">
                  {githubStats.loading ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    githubStats.public_repos
                  )}
                </div>
                <div className="text-[10px] text-[#5f6368] dark:text-slate-400 uppercase tracking-wider mt-0.5">
                  Public Repos
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b]">
                <div className="text-base font-bold text-[#F59E0B]">
                  Dynavec
                </div>
                <div className="text-[10px] text-[#5f6368] dark:text-slate-400 uppercase tracking-wider mt-0.5">
                  Contributor
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Learning Roadmap Card (2 Items, No Percentages/Bars) */}
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#181b24]/80 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#272c3b] shadow-xs space-y-4 hover:border-[#F59E0B] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#e5e7eb] dark:border-[#272c3b] pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#F59E0B]" />
                  <div>
                    <h3 className="font-bold text-base text-[#171717] dark:text-slate-100 tracking-tight">
                      Active Learning Roadmap
                    </h3>
                    <p className="text-xs text-[#5f6368] dark:text-slate-400 font-mono">
                      Continuous Improvement & Specializations
                    </p>
                  </div>
                </div>
                <Target className="w-4 h-4 text-[#F59E0B]" />
              </div>

              {/* Clean List Items (No Percentages, No Progress Bars) */}
              <div className="space-y-4">
                {futureGoalsVisual.learningCertifications.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#fafaf8] dark:bg-[#0f1117] border border-[#e5e7eb] dark:border-[#272c3b] space-y-1.5 hover:border-[#F59E0B]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#F59E0B] shrink-0" />
                      <span className="font-bold text-sm text-[#171717] dark:text-slate-100">
                        {item.name}
                      </span>
                    </div>

                    <p className="text-xs text-[#5f6368] dark:text-slate-400 pl-7 leading-relaxed font-mono">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#e5e7eb] dark:border-[#272c3b] text-center text-xs font-mono italic text-[#5f6368] dark:text-slate-400">
              "Building backend systems and learning by shipping continuously."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
