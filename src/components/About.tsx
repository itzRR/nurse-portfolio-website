import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';
import { PERSONAL_INFO, JOURNEY_TIMELINE } from '../data';

export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'education' | 'experience' | 'value' | 'achievement'>('all');

  const filteredTimeline = activeCategory === 'all' 
    ? JOURNEY_TIMELINE 
    : JOURNEY_TIMELINE.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Entire Path', icon: 'Sparkles' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'experience', label: 'Clinical Experience', icon: 'Briefcase' },
    { id: 'value', label: 'Nursing Values', icon: 'Compass' },
    { id: 'achievement', label: 'Awards', icon: 'Award' }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950/60 transition-colors duration-500"
    >
      {/* Decorative Horizon background effects */}
      <div className="absolute top-24 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-blue/25 to-transparent dark:via-sky-blue/10 pointer-events-none" />
      <div className="absolute top-48 right-12 w-96 h-96 rounded-full bg-sky-blue/5 dark:bg-sky-blue/2 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -left-12 bottom-12 w-96 h-96 rounded-full bg-ocean-blue/5 dark:bg-ocean-blue/2 opacity-60 blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            The Story of <span className="font-serif italic text-ocean-blue">Hasara Mudalige</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Storytelling & Clinical Timeline
          </p>
        </div>

        {/* Narrative bio content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 font-sans">
          
          {/* Narrative Image showcase - Editorial Soft Arch Shape */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-t-[140px] rounded-b-[32px] overflow-hidden shadow-2xl group border-[3px] border-white dark:border-slate-800">
              <img 
                src="/images/about_1_1780073995572.png"
                alt="Hasara Mudalige Bedside Presentation"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1582750433449-6490e28c9f7a?auto=format&fit=crop&q=80&w=600&h=750";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07354d]/90 via-[#0EA5E9]/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
              
              {/* Inner overlay quote */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                <span className="text-[9px] uppercase font-mono tracking-[0.15em] text-sky-blue flex items-center mb-1 bg-white/10 w-fit px-2 py-0.5 rounded">
                  <Icon name="Compass" className="mr-1.5 animate-spin-slow" size={12} />
                  Philosophical View
                </span>
                <p className="font-serif italic text-sm text-slate-100 leading-relaxed">
                  "Healing is not solely correcting a heart rhythm — it is anchoring an anxious mother, stabilizing an upset spouse, and creating absolute, quiet safety."
                </p>
              </div>
            </div>
            
            {/* Decal circle bubble styled with fine lines */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full border border-sky-blue/30 bg-white/80 dark:bg-[#07354d]/90 backdrop-blur-xl flex flex-col items-center justify-center -space-y-0.5 shadow-xl">
              <Icon name="Waves" className="text-ocean-blue mb-1" size={16} />
              <span className="font-serif text-xl font-bold text-[#07354d] dark:text-white">BSN</span>
              <span className="text-[7px] uppercase font-mono tracking-widest text-slate-500 dark:text-sky-200">SPECIALIST</span>
            </div>
          </div>

          {/* Core Biography detail */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-serif text-[#07354d] dark:text-white font-light leading-snug">
              Bridging the Depth of Clinical Science & <span className="italic">Peaceful Bedside</span> Stillness
            </h3>
            
            <p className="text-slate-700 dark:text-slate-350 leading-relaxed text-sm">
              {PERSONAL_INFO.bio}
            </p>

            {/* Core Values grid with fine outlines and typography */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="glass-card p-5 rounded-2xl flex items-start space-x-3.5 border border-[#07354d]/10 dark:border-white/5">
                <div className="p-2.5 rounded-xl bg-sky-blue/15 dark:bg-sky-blue/5 text-ocean-blue">
                  <Icon name="Heart" size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold uppercase font-mono tracking-[0.1em] text-[#07354d] dark:text-white">
                    Sustained Compassion
                  </h4>
                  <p className="text-[11px] text-slate-505 dark:text-slate-400 leading-normal">
                    A calm bedside demeanor designed carefully to relieve systemic emotional strain.
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-start space-x-3.5 border border-[#07354d]/10 dark:border-white/5">
                <div className="p-2.5 rounded-xl bg-aqua-glow/15 dark:bg-aqua-glow/5 text-aqua-glow">
                  <Icon name="Activity" size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold uppercase font-mono tracking-[0.1em] text-[#07354d] dark:text-white">
                    Clinical Precision
                  </h4>
                  <p className="text-[11px] text-slate-550 dark:text-slate-400 leading-normal">
                    Continuous monitoring, rigorous safety parameters, and diagnostic telemetry analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Timeline Controls */}
        <div className="relative mb-10 text-center">
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 max-w-3xl mx-auto p-1 rounded-full bg-white/20 dark:bg-slate-900/10 border border-[#07354d]/10 dark:border-white/5 shadow-inner backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider flex items-center space-x-1.5 transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-[#07354d] text-white dark:bg-white dark:text-slate-900 shadow-sm' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-500/10'
                }`}
              >
                <Icon name={cat.icon} size={11} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Animated Horizontal Timeline track / Flow */}
        <div className="relative max-w-5xl mx-auto py-8">
          
          {/* Vertical axis line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[1px] bg-gradient-to-b from-ocean-blue/30 via-aqua-glow/20 to-[#07354d]/5 pointer-events-none transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {filteredTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } items-start md:items-center`}
                >
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-ocean-blue flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                  </div>

                  {/* Card Content (Glassmorphic) */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                    isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="glass-card hover:glass-panel p-6 rounded-2xl text-left border-l-2 border-[#ea580c] dark:border-sky-blue hover:scale-[1.01] transition-all duration-305 shadow-md hover:shadow-lg group relative"
                    >
                      {/* Floating mini Year badge */}
                      <span className="absolute top-4 right-4 bg-sky-blue/10 dark:bg-sky-blue/5 text-[#07354d] dark:text-sky-blue font-mono font-bold text-[10px] px-2.5 py-1 rounded-full border border-sky-blue/20">
                        {item.year}
                      </span>

                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-ocean-blue">
                          <Icon name={item.icon} size={14} />
                        </div>
                        <h4 className="text-[9px] font-bold uppercase font-mono tracking-[0.15em] text-[#0ea5e9]">
                          {item.category}
                        </h4>
                      </div>

                      <h3 className="text-lg font-serif font-light text-[#07354d] dark:text-white mb-2 group-hover:text-ocean-blue transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
