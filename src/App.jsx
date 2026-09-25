import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AdvancedSkillHighlights from './components/AdvancedSkillHighlights';
import OpenSource from './components/OpenSource';
import Achievements from './components/Achievements';
import Collaboration from './components/Collaboration';
import FutureGoals from './components/FutureGoals';
import DebuggingPersonality from './components/DebuggingPersonality';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Light theme is DEFAULT
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#171717] dark:bg-[#0f1117] dark:text-slate-100 transition-colors duration-200 selection:bg-[#F59E0B] selection:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <QuickHighlights />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AdvancedSkillHighlights />
        <OpenSource />
        <Achievements />
        <Collaboration />
        <FutureGoals />
        <DebuggingPersonality />
        <Contact />
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
