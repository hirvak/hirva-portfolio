import React from 'react';
import { FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingResume() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={personalInfo.resumePath}
        download="Hirva_Kansara_Resume.pdf"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 border border-cyan-400/30 transition-all transform hover:scale-105"
        aria-label="Floating download resume button"
      >
        <FileText className="w-4 h-4 animate-bounce" />
        <span className="hidden sm:inline">Download Resume</span>
      </a>
    </div>
  );
}
