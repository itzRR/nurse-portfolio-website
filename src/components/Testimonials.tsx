import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Wave bottom decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-ocean-blue/5 dark:bg-ocean-blue/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-aqua-glow/5 dark:bg-aqua-glow/2 blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            Bedside <span className="font-serif italic text-ocean-blue">Testimonials & Reviews</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Heartfelt feedback from patients & peers
          </p>
        </div>

        {/* Carousel / Interactive Floating speech bubble */}
        <div className="relative max-w-4xl mx-auto py-4 min-h-[350px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {TESTIMONIALS.map((t, idx) => {
              if (idx !== activeIndex) return null;
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -10, 0] // Gentle ocean wave continuous float
                  }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ 
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    default: { duration: 0.5 }
                  }}
                  className="w-full font-sans"
                >
                  {/* Speech Bubble Container (Glassmorphic) */}
                  <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[#07354d]/10 dark:border-white/5 shadow-md relative text-left select-none bg-white/20 dark:bg-slate-900/10">
                    
                    {/* Big Quote mark overlay in waterblue color */}
                    <span className="absolute top-6 left-6 font-serif text-7xl font-bold opacity-10 text-ocean-blue select-none leading-none pointer-events-none">
                      “
                    </span>

                    {/* Speech bubble pointy trail at bottom */}
                    <div className="absolute bottom-[-14px] left-16 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white/30 dark:border-t-slate-900/40 filter drop-shadow-[0_4px_4px_rgba(14,165,233,0.02)]" />

                    {/* Quote statement */}
                    <p className="font-serif italic font-light text-base md:text-lg lg:text-xl text-slate-800 dark:text-slate-200 leading-relaxed relative z-10 mb-8 pt-4">
                      "{t.quote}"
                    </p>

                    {/* Author Info footer */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-[#07354d]/5 dark:border-white/5">
                      
                      {/* Avatar Circle using dynamic avatar generator seed */}
                      <div className="relative w-12 h-12 rounded-full border border-sky-blue/30 overflow-hidden shadow">
                        <img 
                          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${t.avatarSeed}`}
                          alt={t.author} 
                          className="w-full h-full object-cover bg-sky-blue/10 font-sans"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${t.author}`;
                          }}
                        />
                      </div>

                      {/* Author credentials */}
                      <div className="flex flex-col text-left">
                        <span className="font-serif text-sm font-light text-[#07354d] dark:text-white">
                          {t.author}
                        </span>
                        <div className="flex flex-wrap items-center text-[10px] uppercase font-mono tracking-wider font-semibold text-[#0ea5e9]">
                          <span>{t.designation}</span>
                          <span className="mx-1.5 opacity-50">•</span>
                          <span className="text-slate-500">{t.relation}</span>
                        </div>
                      </div>

                      {/* Verification badge */}
                      <div className="ml-auto hidden sm:flex items-center space-x-1 glass-card px-2.5 py-1 rounded-full border border-[#07354d]/10 dark:border-white/5">
                        <Icon name="CheckCircle2" className="text-ocean-blue" size={11} />
                        <span className="text-[8px] font-mono tracking-wider text-slate-500 font-bold">VERIFIED COHORT</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Left / Right slider toggles */}
          <div className="absolute bottom-[-60px] md:bottom-[20px] md:right-[40px] flex items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/20 dark:bg-slate-900/10 border border-[#07354d]/10 dark:border-white/5 text-[#07354d] dark:text-slate-300 hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-350 cursor-pointer shadow-sm"
              aria-label="Previous Testimonial"
            >
              <Icon name="ArrowLeft" size={12} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#07354d] text-white border border-transparent hover:scale-105 active:scale-95 transition-all duration-350 cursor-pointer shadow-md"
              aria-label="Next Testimonial"
            >
              <Icon name="ArrowRight" size={12} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
