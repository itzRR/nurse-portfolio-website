import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { EXPERIENCES } from '../data';

export const Experiences: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Helper mapping types to custom icons
  const getTypeIcon = (type: 'Hospital' | 'Clinic' | 'Community' | 'Volunteer') => {
    switch (type) {
      case 'Hospital':
        return 'HeartPulse';
      case 'Clinic':
        return 'Stethoscope';
      case 'Volunteer':
        return 'Heart';
      default:
        return 'Users';
    }
  };

  return (
    <section 
      id="experience" 
      className="relative py-24 px-6 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      {/* Decorative calm background elements */}

      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-sky-blue/5 dark:bg-sky-blue/2 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            Clinical <span className="font-serif italic text-ocean-blue">Service Map</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0369a1] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Clinical service & medical history map
          </p>
        </div>

        {/* Narrative guide */}
        <div className="text-center mb-12 max-w-lg mx-auto font-sans">
          <p className="text-xs text-slate-750 dark:text-slate-400 leading-relaxed">
            Click on any glassy record card below to expand and dive into specific clinical achievements, telemetry implementations, and applied methodologies.
          </p>
        </div>

        {/* Experiences list layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto font-sans">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedCard === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setExpandedCard(isExpanded ? null : exp.id)}
                className={`glass-card hover:glass-panel p-6 md:p-8 rounded-3xl border border-[#07354d]/10 dark:border-white/5 transition-all duration-305 flex flex-col cursor-pointer relative overflow-hidden h-fit select-none shadow hover:shadow-lg bg-white/20 dark:bg-slate-900/10 ${
                  isExpanded ? 'ring-1 ring-ocean-blue' : 'hover:scale-[1.01]'
                }`}
              >
                {/* Visual top highlight matching the editorial theme */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-blue to-ocean-blue" />
                
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    {/* Period & Category tags */}
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-ocean-blue dark:text-aqua-glow bg-ocean-blue/5 px-2.5 py-0.5 rounded-full border border-sky-blue/20">
                        {exp.period}
                      </span>
                      <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-450 bg-slate-100/80 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-serif font-light text-[#07354d] dark:text-white pt-1">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-450">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Header Triage Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/60 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-ocean-blue">
                    <Icon name={getTypeIcon(exp.type)} size={15} />
                  </div>
                </div>

                {/* Subtitle location indicator */}
                <div className="flex items-center text-[10px] font-mono text-slate-500 mt-2 space-x-1">
                  <Icon name="MapPin" size={10} />
                  <span>{exp.location}</span>
                </div>

                {/* Simple summary paragraph */}
                <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Expand indicator link */}
                <div className="mt-5 flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-[0.12em] text-ocean-blue dark:text-aqua-glow font-bold">
                  <Icon name={isExpanded ? 'ArrowLeft' : 'Sparkles'} size={10} className={isExpanded ? 'rotate-90' : ''} />
                  <span>{isExpanded ? 'Collapse Clinical View' : 'Inspect Achievements'}</span>
                </div>

                {/* Expandable Details container */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-6 pt-6 border-t border-[#07354d]/5 dark:border-white/5 space-y-5 text-left select-text cursor-default"
                      onClick={(e) => e.stopPropagation()} // Stop bubbling up
                    >
                      {/* Achievements Checklist */}
                      <div className="space-y-3">
                        <h4 className="text-[9px] uppercase font-mono tracking-widest text-slate-500">
                          Achievements Checklist
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((ach, ai) => (
                            <li key={ai} className="flex items-start space-x-2.5 text-xs text-slate-750 dark:text-slate-400">
                              <div className="mt-0.5 p-0.5 bg-sky-blue/15 dark:bg-sky-blue/5 text-ocean-blue rounded-full">
                                <Icon name="CheckCircle2" size={10} />
                              </div>
                              <span className="leading-tight font-medium">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Methodology Applied */}
                      <div className="space-y-2">
                        <h4 className="text-[9px] uppercase font-mono tracking-widest text-slate-500">
                          Applied Skills & Tools
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skillsApplied.map((skill, skI) => (
                            <span key={skI} className="px-2 py-0.5 rounded bg-[#07354d]/5 dark:bg-sky-blue/5 border border-[#07354d]/10 dark:border-sky-blue/10 text-[9px] font-mono text-[#07354d] dark:text-sky-blue font-bold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
