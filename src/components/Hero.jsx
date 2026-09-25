import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollEntrance } from '../hooks/useScrollEntrance';

const CODE_SNIPPET = `from fastapi import FastAPI, Depends

app = FastAPI(title="Hirva's Backend API")

@app.get("/api/v1/health")
async def health_check():
    return {
        "status": "online",
        "developer": "Hirva Kansara",
        "focus": ["FastAPI", "YOLOv8", "PostgreSQL"],
        "metrics": {"latency_ms": 1.2, "uptime": "99.9%"}
    }`;

export default function Hero() {
  const [ref, isVisible] = useScrollEntrance({ threshold: 0.1 });
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect loop
  useEffect(() => {
    let index = 0;
    let timer;

    const typeNextChar = () => {
      if (index <= CODE_SNIPPET.length) {
        setDisplayedCode(CODE_SNIPPET.slice(0, index));
        index++;
        timer = setTimeout(typeNextChar, 35);
      } else {
        setIsTyping(false);
        // Reset after 5 seconds pause
        timer = setTimeout(() => {
          index = 0;
          setIsTyping(true);
          typeNextChar();
        }, 5000);
      }
    };

    typeNextChar();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#fafaf8] dark:bg-[#0f1117] overflow-hidden border-b border-[#e5e7eb] dark:border-[#272c3b]"
    >
      {/* Soft Colorful Background Gradient Glowing Blobs (SaaS Style) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div 
            className={`lg:col-span-7 space-y-6 sm:space-y-7 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            {/* Positioning Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] dark:bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F59E0B] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span>{personalInfo.universityTag}</span>
            </div>

            {/* H1 Name - Solid High-Contrast Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#171717] dark:text-slate-100 tracking-tight leading-none font-sans">
              {personalInfo.name}
            </h1>

            {/* Role Subheading */}
            <div className="text-base sm:text-lg md:text-xl font-bold text-[#F59E0B] tracking-tight">
              {personalInfo.heroSubheading}
            </div>

            {/* Main Statement with Electric Cyan/Blue Gradient Highlights */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#374151] dark:text-slate-200 leading-relaxed max-w-2xl">
              I build backend systems that stay{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400 font-bold">
                fast
              </span>{' '}
              under load,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400 font-bold">
                secure
              </span>{' '}
              under access control, and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400 font-bold">
                reliable
              </span>{' '}
              in production.
            </p>

            {/* Playful Personal Detail */}
            <div className="text-xs sm:text-sm font-mono text-[#5f6368] dark:text-slate-400 italic">
              "{personalInfo.heroPlayfulTagline}"
            </div>

            {/* CTA Button Hierarchy - 100% Opaque & Fully Readable */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA: Solid Dark Button */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full bg-[#171717] text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 font-bold text-sm sm:text-base hover:scale-105 transition-all shadow-md flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary CTA: Solid Dark Filled Button */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-3.5 rounded-full bg-[#1f2937] text-white hover:bg-slate-700 dark:bg-[#1e2330] dark:hover:bg-[#283042] border border-slate-600/50 font-bold text-sm sm:text-base transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Tertiary CTA: LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-3.5 rounded-full bg-white dark:bg-[#181b24] text-[#171717] dark:text-slate-200 border border-[#d1d5db] dark:border-[#374151] hover:border-[#F59E0B] font-semibold text-sm transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Quaternary CTA: Resume */}
              <a
                href={personalInfo.resumePath}
                download="Hirva_Kansara_Resume.pdf"
                className="px-4 py-3.5 rounded-full bg-white dark:bg-[#181b24] text-[#171717] dark:text-slate-200 border border-[#d1d5db] dark:border-[#374151] hover:border-[#F59E0B] font-semibold text-sm transition-all flex items-center gap-2 shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Technical Focus Line */}
            <div className="text-xs font-mono font-semibold text-[#5f6368] dark:text-slate-400 uppercase tracking-wider pt-2">
              Focused on Backend Engineering · AI/ML · Computer Vision · APIs · Open Source
            </div>

          </div>

          {/* Right Column: Theme-Aware Animated Code Terminal (5 cols) */}
          <div 
            className={`lg:col-span-5 transition-all duration-500 ease-out delay-150 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            <div className="rounded-xl bg-white dark:bg-[#0f141d] border border-[#d1d5db] dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden transition-colors duration-200">
              
              {/* macOS Style Window Header (Light Grey in Light Mode, Dark in Dark Mode) */}
              <div className="px-4 py-3 bg-[#f3f4f6] dark:bg-[#171d2a] border-b border-[#e5e7eb] dark:border-slate-800 flex items-center justify-between transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#374151] dark:text-slate-300 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>main.py</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal Code Display with Light/Dark VS Code Syntax Highlighting */}
              <div className="p-5 overflow-x-auto min-h-[260px] font-mono text-xs sm:text-sm bg-white dark:bg-[#0f141d] text-[#1f2937] dark:text-slate-200 leading-relaxed selection:bg-blue-500/20 dark:selection:bg-cyan-500/30 transition-colors">
                <div className="table w-full">
                  {displayedCode.split('\n').map((line, lIdx) => {
                    const tokens = line.split(/(\b(?:from|import|async|def|return)\b|".*?"|@\w+\.\w+|\b\d+\.?\d*%\b|\b\d+\.?\d*\b)/g);
                    return (
                      <div key={lIdx} className="table-row">
                        <span className="table-cell select-none pr-3.5 text-[#9ca3af] dark:text-slate-600 text-right text-xs font-mono w-6">
                          {lIdx + 1}
                        </span>
                        <span className="table-cell whitespace-pre-wrap">
                          {tokens.map((token, tIdx) => {
                            if (!token) return null;
                            if (/^\b(from|import|async|def|return)\b$/.test(token)) {
                              return <span key={tIdx} className="text-purple-700 dark:text-purple-400 font-bold">{token}</span>;
                            }
                            if (/^".*?"$/.test(token)) {
                              return <span key={tIdx} className="text-emerald-700 dark:text-emerald-400 font-medium">{token}</span>;
                            }
                            if (/^@\w+\.\w+/.test(token)) {
                              return <span key={tIdx} className="text-amber-700 dark:text-amber-400 font-semibold">{token}</span>;
                            }
                            if (/^\d+\.?\d*%?$/.test(token)) {
                              return <span key={tIdx} className="text-blue-700 dark:text-cyan-300 font-semibold">{token}</span>;
                            }
                            return <span key={tIdx} className="text-[#1f2937] dark:text-slate-200">{token}</span>;
                          })}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="pl-6 mt-1">
                  <span className={`inline-block w-2 h-4 bg-blue-600 dark:bg-cyan-400 align-middle ${isTyping ? 'animate-pulse' : 'animate-ping'}`} />
                </div>
              </div>

              {/* Terminal Status Bar */}
              <div className="px-4 py-2 bg-[#f9fafb] dark:bg-[#121624] border-t border-[#e5e7eb] dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-[#4b5563] dark:text-slate-300 transition-colors">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 inline-block animate-pulse"></span>
                  FastAPI Uvicorn running
                </span>
                <span className="font-semibold text-[#6b7280] dark:text-slate-400">Port: 8000</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


