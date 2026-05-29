import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { SKILLS } from '../data';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Helper to resolve island size classes
  const getSizeClasses = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
      case 'lg':
        return 'w-64 h-64 md:w-72 md:h-72';
      case 'md':
        return 'w-56 h-56 md:w-60 md:h-60';
      default:
        return 'w-44 h-44 md:w-48 md:h-48';
    }
  };

  return (
    <section 
      id="skills" 
      className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Absolute Dynamic water particle ripples */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14, 165, 233, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            Clinical <span className="font-serif italic text-ocean-blue">Islands of Skill</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Refined clinical competencies
          </p>
        </div>

        {/* Narrative indicator */}
        <div className="text-center mb-10 max-w-xl mx-auto font-sans">
          <p className="text-xs text-slate-750 dark:text-slate-400 leading-relaxed">
            Hover or tap each floating island representing medical competency. Concordant with top-tier healthcare literature, see the expanding ripple triggers and select to inspect clinical attributes, tags, and proficiency metrics.
          </p>
        </div>

        {/* Interactive Floating Basin Layout */}
        <div className="relative min-h-[550px] w-full flex items-center justify-center py-8">
          
          {/* Dynamic grid or visual map of floating islands */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-5xl">
            {SKILLS.map((skill, index) => {
              const isHovered = hoveredSkill === skill.id;
              const isSelected = selectedSkill === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  className={`relative flex items-center justify-center ${getSizeClasses(skill.islandSize)}`}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(isSelected ? null : skill.id)}
                  
                  // Continuous smooth 3D floating movement
                  animate={{
                    y: [0, -12, 0],
                    rotateZ: [0, 1.5, -1.5, 0],
                  }}
                  transition={{
                    duration: 5.5 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                >
                  
                  {/* Neon Glowing Ripple Rings (Expanding concentric circles when hovered) */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        <motion.div 
                          initial={{ scale: 0.9, opacity: 0.6 }}
                          animate={{ scale: 1.4, opacity: 0 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                          className="absolute inset-0 rounded-full border border-aqua-glow/30 pointer-events-none z-0"
                        />
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0.8 }}
                          animate={{ scale: 1.8, opacity: 0 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 2.0, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                          className="absolute inset-0 rounded-full border border-ocean-blue/20 pointer-events-none z-0"
                        />
                      </>
                    )}
                  </AnimatePresence>

                  {/* Water Reflection Circle shadows underneath */}
                  <div className={`absolute bottom-[-15px] left-[10%] right-[10%] h-5 bg-gradient-to-r from-ocean-blue/10 to-aqua-glow/10 rounded-full blur-md transition-all duration-500 scale-95 ${
                    isHovered ? 'scale-110 opacity-60 blur-lg' : 'opacity-30'
                  }`} />

                  {/* The actual Glassmorphic Island */}
                  <div className={`absolute inset-0 rounded-full glass-card border border-[#07354d]/10 dark:border-white/5 shadow-lg backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-[1.04] cursor-pointer z-10 ${
                    isSelected ? 'ring-1 ring-aqua-glow shadow-2xl scale-[1.05]' : 'hover:border-sky-blue/50'
                  }`}>
                    
                    {/* Floating Heart / Wave pulse decor inside card */}
                    <div className="absolute top-4 w-6 h-[1px] bg-sky-blue/40 pointer-events-none" />

                    {/* Skill Icon / Circle */}
                    <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full mb-3 flex items-center justify-center bg-white/70 dark:bg-slate-800 p-2 text-ocean-blue dark:text-sky-blue border border-slate-100 dark:border-slate-700/80 transition-colors ${
                      isHovered ? 'bg-gradient-to-tr from-ocean-blue to-aqua-glow text-white border-transparent shadow shadow-ocean-blue/30' : ''
                    }`}>
                      <Icon name={index % 2 === 0 ? 'HeartPulse' : 'Activity'} size={16} />
                    </div>

                    {/* Skill Name */}
                    <h3 className="font-serif text-sm md:text-base font-light text-slate-900 dark:text-white leading-tight mb-2">
                      {skill.name}
                    </h3>

                    {/* Mini proficiency percent */}
                    <div className="flex items-center space-x-1 mb-1 font-mono">
                      <span className="text-[9px] uppercase tracking-wider text-slate-550 dark:text-slate-450">Proficiency:</span>
                      <span className="text-[10px] font-bold text-ocean-blue dark:text-aqua-glow">{skill.proficiency}%</span>
                    </div>

                    {/* Hidden expandable details on click/hover */}
                    <div className={`transition-all duration-500 overflow-hidden text-[10px] text-slate-700 dark:text-slate-400 leading-relaxed font-sans ${
                      isSelected || isHovered ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="line-clamp-2 mb-2 font-medium">{skill.description}</p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {skill.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-ocean-blue/10 dark:bg-sky-blue/5 text-ocean-blue dark:text-[#22D3EE] text-[8px] font-mono font-bold border border-sky-blue/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Details block at bottom for active selected islands */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-xl mx-auto mt-12 glass-panel p-6 rounded-3xl border border-sky-blue/30 text-left relative z-20"
            >
              {(() => {
                const active = SKILLS.find(s => s.id === selectedSkill);
                if (!active) return null;
                return (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-serif font-black text-slate-900 dark:text-white">
                        {active.name}
                      </h4>
                      <button 
                        onClick={() => setSelectedSkill(null)}
                        className="p-1 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                      >
                        <Icon name="X" size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                      {active.description}
                    </p>
                    
                    {/* Scale bar wrapper */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        <span>Evaluation Score</span>
                        <span>{active.proficiency}% Elite Mastery</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-[1px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${active.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-ocean-blue to-aqua-glow shadow"
                        />
                      </div>
                    </div>

                    {/* Skill Tags list */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {active.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-800 dark:text-sky-blue font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
