import React from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="relative py-24 px-6 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      {/* Decorative sea lines and particles */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean-blue/5 via-aqua-glow/30 to-sky-blue/5" />
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-aqua-glow/5 dark:bg-aqua-glow/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-deep-sea/5 dark:bg-deep-sea/2 blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#07354d] dark:text-white tracking-tight">
            Comprehensive <span className="font-serif italic text-deep-sea">Care & Services</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0369a1] to-transparent mx-auto" />
          <p className="text-xs font-mono tracking-[0.2em] text-[#0ea5e9] uppercase">
            Clinical disciplines & expertise
          </p>
        </div>

        {/* Services Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv, index) => (
            <motion.div
              key={serv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card hover:glass-panel p-8 rounded-3xl border border-[#07354d]/10 dark:border-white/5 hover:border-sky-blue/30 dark:hover:border-aqua-glow/30 shadow-md hover:shadow-xl transition-all duration-305 flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-white/20 dark:bg-slate-900/10"
            >
              {/* Dynamic light reflection line inside */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div>
                {/* Floating 3D-like Medical Icon */}
                <div className="relative mb-6">
                  {/* Outer pulse circle */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-ocean-blue to-aqua-glow opacity-25 blur-md absolute -inset-1 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Core Icon vessel */}
                  <div className="relative w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center p-3 text-ocean-blue dark:text-[#22D3EE] group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-ocean-blue group-hover:to-aqua-glow group-hover:border-transparent transition-all duration-300">
                    <Icon name={serv.icon} size={22} />
                  </div>
                </div>

                {/* Service Detail */}
                <h3 className="text-xl font-serif font-light text-[#07354d] dark:text-white mb-3 group-hover:text-ocean-blue dark:group-hover:text-aqua-glow transition-colors">
                  {serv.title}
                </h3>
                
                <p className="text-xs text-slate-750 dark:text-slate-350 leading-relaxed mb-6">
                  {serv.description}
                </p>

                {/* Sub Features Bullet List with Check circles */}
                <ul className="space-y-2.5 font-sans">
                  {serv.detailedFeatures.map((feat, fi) => (
                    <li key={fi} className="flex items-start space-x-2 text-xs text-slate-800 dark:text-slate-400">
                      <div className="mt-0.5 p-0.5 bg-sky-blue/15 dark:bg-sky-blue/5 text-ocean-blue rounded-full">
                        <Icon name="CheckCircle2" size={10} />
                      </div>
                      <span className="leading-tight font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action/Indicator Link at bottom */}
              <div className="mt-8 pt-4 border-t border-[#07354d]/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-[#07354d] dark:text-slate-200">
                <span>View Protocols</span>
                <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center group-hover:bg-ocean-blue group-hover:text-white transition-all duration-300">
                  <Icon name="ArrowRight" size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medical Mission Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-3xl border border-sky-blue/25 bg-gradient-to-r from-sky-blue/5 via-white/50 to-aqua-glow/5 flex flex-col md:flex-row items-center justify-between text-left gap-6 shadow-md"
        >
          <div className="space-y-2 max-w-2xl font-sans">
            <span className="text-[9px] uppercase font-mono font-bold tracking-[0.2em] text-[#0ea5e9] flex items-center">
              <Icon name="ShieldAlert" className="mr-1.5 animate-pulse" size={11} />
              CLINICAL GUARANTEE & CARE STANDARDS
            </span>
            <h4 className="text-lg font-serif font-light text-[#07354d] dark:text-white">
              SBAR Communication & Patient Triage Protocols Active
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
              Every procedure is completed in absolute compliance with HIPAA confidentiality guidelines, ANA nursing standards, and Joint Commission patient safety checklists.
            </p>
          </div>
          <a 
            href="#contact" 
            className="flex items-center space-x-1.5 px-6 py-3.5 rounded-full bg-[#07354d] text-white hover:bg-slate-800 font-semibold text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap shadow-sm text-center"
          >
            <span>Request Consultation</span>
            <Icon name="ArrowRight" size={11} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
