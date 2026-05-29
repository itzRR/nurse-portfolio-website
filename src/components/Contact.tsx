import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { PERSONAL_INFO } from '../data';

export const Contact: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Interactive Sunset Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic Stars / Sparkles
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
    }

    const stars: Star[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.45), // Stars only in the upper twilight sky
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005
    }));

    let waveAge = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Sunset Sky into Indigo Dark Starry Space Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#0F172A'); // Starry Slate Dark (Night)
      skyGrad.addColorStop(0.35, '#1E1B4B'); // Deep Indigo Space
      skyGrad.addColorStop(0.55, '#4C1D95'); // Imperial Purple Horizon
      skyGrad.addColorStop(0.70, '#BE185D'); // Crimson Twilight Pink
      skyGrad.addColorStop(0.85, '#F97316'); // Golden Sunset Orange
      skyGrad.addColorStop(1, '#0C4A6E'); // Deep Sea blue edge
      
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Twinkling Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.speed = -star.speed;
        }
        ctx.globalAlpha = Math.max(0.1, star.alpha);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0; // reset

      // 3. Draw Sunset Water Reflection ripple lines
      waveAge += 0.008;
      const oceanLevel = height * 0.8;
      
      ctx.save();
      ctx.globalAlpha = 0.55;
      
      // Draw horizontal shimmer stripes echoing sunset sunset hues
      for (let yPos = oceanLevel; yPos < height; yPos += 4) {
        const progress = (yPos - oceanLevel) / (height - oceanLevel);
        const amplitude = (5 + progress * 20);
        const waveX = Math.sin(yPos * 0.1 + waveAge * 10) * amplitude;
        
        ctx.beginPath();
        ctx.strokeStyle = yPos % 8 === 0 ? '#F97316' : '#BE185D'; // alternations of sunset gold or twilight pink
        ctx.lineWidth = 1 + progress * 2;
        ctx.moveTo(width / 2 - 120 - waveX, yPos);
        ctx.lineTo(width / 2 + 120 + waveX, yPos);
        ctx.stroke();
      }
      ctx.restore();

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate standard SMTP server sync delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 overflow-hidden"
    >
      {/* Sunset Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover select-none z-0 pointer-events-none" 
      />

      {/* Decorative starry / twilight ambient lighting nodes */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent z-10" />

      <div className="max-w-6xl mx-auto relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Triage metadata / Reach cards */}
        <div className="lg:col-span-5 text-left text-white space-y-6">
          
          <div className="space-y-4">
            <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#22D3EE] font-bold bg-[#22D3EE]/10 px-3.5 py-1 rounded-full border border-sky-blue/20 w-fit inline-block">
              REMEDIAL COORDINATION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight leading-tight">
              Begin your healing journey <span className="font-serif italic text-sky-blue">with Hasara</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#22D3EE]" />
          </div>

          <p className="text-xs text-slate-350 leading-relaxed max-w-md font-sans">
            Whether coordinating shift SBAR transitions, requesting mobile coastal health clinics, or securing medical commentary, feel free to drop a message. Hasara answers within 12 standard nursing shifts.
          </p>

          <div className="space-y-4 pt-4 font-sans">
            
            {/* Quick contact panels */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 text-[#22D3EE]">
                <Icon name="Mail" size={15} />
              </div>
              <div className="flex flex-col">
                <span className="text-[7.5px] uppercase font-mono tracking-wider text-slate-400">EMAIL RESIDENCE</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-bold font-mono hover:text-[#22D3EE] transition-colors">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 text-[#22D3EE]">
                <Icon name="Phone" size={15} />
              </div>
              <div className="flex flex-col">
                <span className="text-[7.5px] uppercase font-mono tracking-wider text-slate-400">CLINICAL TELEMETRIC PHONE</span>
                <span className="text-xs font-bold font-mono">{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 text-[#22D3EE]">
                <Icon name="MapPin" size={15} />
              </div>
              <div className="flex flex-col">
                <span className="text-[7.5px] uppercase font-mono tracking-wider text-slate-404">PRACTICE REGION</span>
                <span className="text-xs font-semibold">{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>

          {/* Social Links: circular glowing blue buttons */}
          <div className="pt-6 space-y-2">
            <h4 className="text-[8px] uppercase font-mono tracking-[0.15em] text-slate-400">Professional Networks</h4>
            <div className="flex space-x-3.5">
              {['LinkedIn', 'Twitter', 'DocDoc', 'GitHub'].map((social, si) => (
                <a
                  key={si}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 dark:bg-slate-900/45 border border-white/10 flex items-center justify-center text-[#22D3EE] hover:text-white hover:bg-[#0EA5E9] hover:border-transparent hover:scale-110 shadow-lg shadow-sky-blue/5 hover:shadow-[#0EA5E9]/30 transition-all duration-300"
                  aria-label={social}
                >
                  <Icon name={si === 0 ? 'User' : si === 1 ? 'Navigation' : si === 2 ? 'HeartPulse' : 'Waves'} size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Glassmorphism Sunset Form with floating labels */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div className="w-full max-w-xl bg-slate-950/45 dark:bg-slate-950/65 backdrop-blur-xl border border-white/10 dark:border-slate-800/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            
            {/* Top glass gradient shine decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent" />

            <form onSubmit={handleFormSubmit} className="space-y-6 text-left font-sans">
              <h3 className="text-xl font-serif font-light text-white mb-2">
                Draft Bedside Message
              </h3>

              {/* Patient Full Name */}
              <div className="relative group border-b border-white/10 hover:border-[#22D3EE]/65 transition-colors py-1.5 matches-peer">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent text-sm pb-1 pt-4 text-white focus:outline-none placeholder-transparent border-0"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-0 top-3 text-[9px] uppercase font-mono tracking-wider text-slate-400 peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#22D3EE] transition-all duration-300 pointer-events-none"
                >
                  Full Name / Patient Representative
                </label>
              </div>

              {/* Patient Email */}
              <div className="relative group border-b border-white/10 hover:border-[#22D3EE]/65 transition-colors py-1.5 matches-peer">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent text-sm pb-1 pt-4 text-white focus:outline-none placeholder-transparent border-0"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 top-3 text-[9px] uppercase font-mono tracking-wider text-slate-400 peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#22D3EE] transition-all duration-300 pointer-events-none"
                >
                  Secured Email Triage
                </label>
              </div>

              {/* Message Subject */}
              <div className="relative group border-b border-white/10 hover:border-[#22D3EE]/65 transition-colors py-1.5 matches-peer">
                <input 
                  type="text" 
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="peer w-full bg-transparent text-sm pb-1 pt-4 text-white focus:outline-none placeholder-transparent border-0"
                />
                <label 
                  htmlFor="subject"
                  className="absolute left-0 top-3 text-[9px] uppercase font-mono tracking-wider text-slate-400 peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#22D3EE] transition-all duration-300 pointer-events-none"
                >
                  Subject of Consultation
                </label>
              </div>

              {/* Message Content */}
              <div className="relative group border-b border-white/10 hover:border-[#22D3EE]/65 transition-colors py-1.5 matches-peer">
                <textarea 
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent text-sm pb-1 pt-4 text-white focus:outline-none placeholder-transparent border-0 resize-none no-scrollbar"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-3 text-[9px] uppercase font-mono tracking-wider text-slate-400 peer-placeholder-shown:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#22D3EE] transition-all duration-300 pointer-events-none"
                >
                  Detailed Message Description
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#07354d] text-white hover:bg-slate-800 border border-white/15 hover:border-[#22D3EE]/30 font-mono uppercase text-[10px] tracking-widest font-bold cursor-pointer hover:scale-[1.01] transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="animate-spin" size={12} />
                      <span>Sending Secured Triage...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={12} className="text-[#22D3EE]" />
                      <span>Transmit Bedside Protocol</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Responses */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2.5 mt-3"
                  >
                    <Icon name="CheckCircle2" size={14} className="text-emerald-400" />
                    <span>Success! Hasara Mudalige's clinical SMTP terminal has logged and secured this triage request successfully.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center space-x-2.5 mt-3"
                  >
                    <Icon name="ShieldAlert" size={14} className="text-rose-400" />
                    <span>Triage Error. Please complete all mandatory fields correctly before transmitting.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>

          </div>
        </div>

      </div>

      {/* Signature Foot notes */}
      <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-450 z-20 gap-3">
        <span>© 2026 Hasara Mudalige, BSN, RN. All Rights Reserved.</span>
        <span>Registered Practice License #RN-8940322</span>
      </div>
    </section>
  );
};
