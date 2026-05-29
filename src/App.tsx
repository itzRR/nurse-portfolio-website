/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experiences } from './components/Experiences';
import { Certifications } from './components/Certifications';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Sync dark class on Document element for Tailwind dark mode classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500`}>
      {/* Dynamic Header / Navigation panel */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Portfolio contents structured modularly */}
      <main>
        {/* Immersive 3d floating waves Hero Banner */}
        <Hero />

        {/* Storytelling & detailed clinical timeline */}
        <About />

        {/* Clinical disciplines & holistic care services */}
        <Services />

        {/* 3D floating skills islands on calm sea */}
        <Skills />

        {/* Multi-tier interactive clinical experiences timeline map */}
        <Experiences />

        {/* Accredited certificates, credentials & digital securers */}
        <Certifications />

        {/* High-contrast picture gallery overlay with ocean reflections */}
        <Gallery />

        {/* Floating review bubbles from colleagues and patients */}
        <Testimonials />

        {/* Breathtaking sunset contact form transforming to starry nights */}
        <Contact />
      </main>
    </div>
  );
}
