import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';
import { CERTIFICATIONS } from '../data';

export const Certifications: React.FC = () => {
  const [rotatedCard, setRotatedCard] = useState<string | null>(null);

  return (
    <section 
      id="certifications" 
      className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Wave bottom decoration */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-blue/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-ocean-blue/5 dark:bg-ocean-blue/2 blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            Board <span className="font-serif italic text-ocean-blue">Certifications & Licenses</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0284c7] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Accredited qualifications & active status
          </p>
        </div>

        {/* Certifications Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto font-sans">
          {CERTIFICATIONS.map((cert, index) => {
            const isRotated = rotatedCard === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setRotatedCard(cert.id)}
                onMouseLeave={() => setRotatedCard(null)}
                style={{ perspective: 1000 }}
                className="relative cursor-pointer group h-96 select-none"
              >
                {/* 3D rotate container container */}
                <motion.div
                  animate={{
                    rotateY: isRotated ? 12 : 0,
                    rotateX: isRotated ? -8 : 0,
                    z: isRotated ? 15 : 0
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-full glass-card hover:glass-panel rounded-3xl border border-[#07354d]/10 dark:border-white/5 shadow-md group-hover:shadow-2xl overflow-hidden flex flex-col justify-between p-5 relative transform-gpu bg-white/20 dark:bg-slate-900/10"
                >
                  
                  {/* Glossy light sweep effect inside */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />

                  {/* Top content */}
                  <div>
                    {/* Visual representative header illustration */}
                    <div className="w-full h-24 rounded-2xl overflow-hidden mb-4 border border-[#07354d]/5 dark:border-white/5 relative">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://picsum.photos/seed/${cert.id}/400/300`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      
                      {/* Certified check stamp overlay */}
                      <div className="absolute bottom-2 right-2 bg-emerald-600 text-white p-1 rounded-full shadow-sm">
                        <Icon name="CheckCircle2" size={10} />
                      </div>
                    </div>

                    {/* Cert specs */}
                    <div className="text-left space-y-1">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#0ea5e9]">
                        {cert.issuer}
                      </span>
                      <h3 className="text-sm font-serif font-light text-[#07354d] dark:text-white leading-snug group-hover:text-ocean-blue dark:group-hover:text-sky-blue transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom credential details */}
                  <div className="border-t border-[#07354d]/5 dark:border-white/5 pt-4 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono mb-2 text-slate-500">
                      <span>ACQUIRED ON</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{cert.date}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/60 dark:bg-slate-900/30 border border-[#07354d]/5 dark:border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[7.5px] uppercase font-mono text-slate-500">REGISTRY ID</span>
                          <span className="text-[9px] font-bold font-mono text-[#07354d] dark:text-slate-300">
                            {cert.credentialId}
                          </span>
                        </div>
                        <div className="h-4 w-4 bg-ocean-blue/5 rounded flex items-center justify-center text-ocean-blue dark:text-sky-blue">
                          <Icon name="ExternalLink" size={9} />
                        </div>
                      </div>
                    )}
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
