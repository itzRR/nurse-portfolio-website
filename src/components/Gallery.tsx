import React from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';
import { GALLERY } from '../data';

export const Gallery: React.FC = () => {
  return (
    <section 
      id="gallery" 
      className="relative py-24 px-6 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      {/* Decorative calm background elements */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-aqua-glow/5 dark:bg-aqua-glow/2 blur-3xl pointer-events-none transform -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            Clinical <span className="font-serif italic text-ocean-blue">Environments Gallery</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Aesthetic medical environments
          </p>
        </div>

        {/* Masonry or staggered layouts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto font-sans">
          {GALLERY.map((item, index) => {
            // Determine column span based on aspect ratio
            const isWide = item.aspectRatio === 'wide';
            const isTall = item.aspectRatio === 'tall';
            const colSpan = isWide ? 'md:col-span-8' : isTall ? 'md:col-span-4' : 'md:col-span-6';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`${colSpan} relative rounded-3xl overflow-hidden shadow-md group h-80 md:h-[380px] cursor-pointer border border-[#07354d]/5 dark:border-white/5`}
              >
                {/* Floating frame overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#0369a1]/10 transition-colors duration-500 z-10" />

                {/* Parallax Image tag */}
                <motion.img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-750 origin-center filter grayscale-[10%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://picsum.photos/seed/${item.id}/800/600`;
                  }}
                />

                {/* The bottom ocean reflection gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500 z-10" />

                {/* Slide Up Description bar (cinematic details) */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white text-left flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-sky-blue mb-1 flex items-center">
                    <Icon name="Compass" className="mr-1" size={10} />
                    Active Practice Mode
                  </span>
                  
                  <h3 className="text-lg md:text-xl font-serif font-light tracking-tight mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-200 leading-relaxed font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.subtitle}
                  </p>
                </div>

                {/* Absolute light reflections inside */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[8.5px] uppercase font-mono tracking-wider text-[#07354d] dark:text-sky-blue shadow-sm border border-white/40 z-30 opacity-90 backdrop-blur-md">
                  ICU Practice Protocol
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
