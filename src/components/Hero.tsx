import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Icon } from './Icon';
import { PERSONAL_INFO } from '../data';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate motion springs for "3D depth mouse follow"
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Rotate and translate layers based on spring coords
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);
  const translateX = useTransform(springX, [-300, 300], [-15, 15]);
  const translateY = useTransform(springY, [-300, 300], [-15, 15]);

  // Track scroll position for subtle parallax
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move handler for circular image frame physics
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    // Calculate difference from center
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Canvas wave, particles, and light rays animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // Particle class for shiny ocean bubbles
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      opacity: number = 0;
      color: string = '';

      constructor() {
        this.reset();
        this.y = Math.random() * height; // Start at different heights initially
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 20;
        this.size = Math.random() * 4 + 1.5;
        this.speedY = -(Math.random() * 0.8 + 0.3);
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.color = Math.random() > 0.5 ? '#22D3EE' : '#7DD3FC'; // Aqua Glow or Sky Blue
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // Horizontal drift swing
        this.speedX += Math.sin(this.y * 0.01) * 0.01;

        if (this.y < height * 0.3 || this.x < 0 || this.x > width) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => new Particle());

    // Sine wave details
    let angle = 0;
    const wave1 = { y: height * 0.88, length: 0.005, amplitude: 22, speed: 0.015 };
    const wave2 = { y: height * 0.91, length: 0.003, amplitude: 15, speed: -0.01 };
    const wave3 = { y: height * 0.94, length: 0.007, amplitude: 10, speed: 0.02 };

    const drawRay = (x: number, beamWidth: number, targetX: number, opacity: number) => {
      ctx.save();
      const gradient = ctx.createLinearGradient(x, 0, targetX, height);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.06)'); // Aqua Glow hint
      gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x - beamWidth / 2, 0);
      ctx.lineTo(x + beamWidth / 2, 0);
      ctx.lineTo(targetX + beamWidth, height);
      ctx.lineTo(targetX - beamWidth, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // 1. Draw Sky to Sea Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (isDark) {
        bgGrad.addColorStop(0, '#020617'); // slate-950
        bgGrad.addColorStop(0.5, '#0f172a'); // slate-900
        bgGrad.addColorStop(1, '#07354d'); // deep sea base
      } else {
        bgGrad.addColorStop(0, '#E0F2FE'); // light sky blue (representing cloudless horizon)
        bgGrad.addColorStop(0.5, '#BAE6FD'); // sky blue
        bgGrad.addColorStop(1, '#0EA5E9'); // sea-blue base
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Sun rays from top right corner
      drawRay(width * 0.8, 120, width * 0.4, 0.25);
      drawRay(width * 0.85, 80, width * 0.6, 0.20);
      drawRay(width * 0.75, 150, width * 0.2, 0.15);

      // 2. Draw Floating Particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // 3. Draw Water Waves
      angle += 0.01;

      const drawWaveLayer = (wave: typeof wave1, color: string) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        for (let i = 0; i <= width; i++) {
          const y = wave.y + Math.sin(i * wave.length + angle * wave.speed * 100) * wave.amplitude;
          ctx.lineTo(i, y);
        }
        
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      };

      // Back wave
      drawWaveLayer(wave2, isDark ? 'rgba(3, 105, 161, 0.2)' : 'rgba(3, 105, 161, 0.4)'); // Deep Sea Blue
      // Mid wave
      drawWaveLayer(wave1, isDark ? 'rgba(14, 165, 233, 0.3)' : 'rgba(14, 165, 233, 0.65)'); // Ocean Blue
      // Front wave (highly reflective)
      drawWaveLayer(wave3, isDark ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.85)'); // Aqua Glow

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Animated Ocean & Sky Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover select-none z-0 pointer-events-none" 
      />

      {/* Floating Cloud Overlays (HTML for Framer Motion controls) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
        <motion.div 
          initial={{ x: -100, y: 80, opacity: 0.15 }}
          animate={{ x: '110%' }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[250px] h-[80px] rounded-full bg-white/40 blur-2xl"
        />
        <motion.div 
          initial={{ x: '100%', y: 150, opacity: 0.2 }}
          animate={{ x: '-15%' }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[350px] h-[100px] rounded-full bg-white/55 blur-2xl"
        />
      </div>

      {/* Hero content container with Editorial layout styling */}
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-20">
        
        {/* Left column: Editorial Typography Headlines */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-slate-950 text-left">
          
          {/* Subtle medical badge as an elegant uppercase tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 dark:border-slate-800/10 text-xs font-semibold text-ocean-blue shadow-sm"
          >
            <Icon name="Sparkles" className="animate-pulse text-ocean-blue" size={13} />
            <span className="tracking-[0.15em] uppercase font-mono text-[9px] text-indigo-950 dark:text-sky-200">TRUSTED HEALER & HEALTH ADVOCATE</span>
          </motion.div>
 
          {/* Heading with elegant Georgia italic style and dramatic layout */}
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight text-[#07354d] dark:text-white leading-[1.05]"
            >
              Compassion in <span className="font-serif italic text-deep-sea dark:text-sky-blue">Every</span> Care, Excellence in <span className="font-serif italic text-white drop-shadow-md">Every</span> Moment
            </motion.h1>
          </div>
 
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-900 dark:text-slate-200 font-normal max-w-xl leading-relaxed"
          >
            {PERSONAL_INFO.subheading}
          </motion.p>
 
          {/* Quick Editorial Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-lg bg-white/20 dark:bg-slate-900/10 backdrop-blur-md p-4 rounded-2xl border border-white/30 dark:border-white/5 shadow-inner"
          >
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div key={i} className="text-center p-1 border-r border-[#07354d]/10 dark:border-white/10 last:border-0">
                <span className="block font-serif text-xl md:text-2xl font-light text-[#07354d] dark:text-sky-blue">
                  {stat.value}
                </span>
                <span className="text-[8px] uppercase font-mono tracking-wider text-slate-800 dark:text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
 
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center gap-4 pt-3 w-full sm:w-auto"
          >
            <a 
              href="#services"
              className="px-6 py-3.5 rounded-full bg-[#07354d] border border-[#07354d] text-white font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 hover:scale-[1.03] transition-all duration-305 shadow-md shadow-[#07354d]/15 text-center flex-1 sm:flex-none"
            >
              View Services
            </a>
            <a 
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-white/20 dark:bg-slate-900/10 backdrop-blur-md border border-white/60 dark:border-slate-850 text-[#07354d] dark:text-white font-semibold text-xs tracking-wider uppercase hover:bg-white/40 dark:hover:bg-slate-900/30 hover:scale-[1.03] transition-all duration-305 text-center flex-1 sm:flex-none"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
 
        {/* Right column: Interactive 3D floating EDITORIAL ARCH profile frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div 
            style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
            className="relative w-72 h-[380px] md:w-80 md:h-[440px] flex items-center justify-center cursor-pointer group"
          >
            {/* Ambient Editorial Back Glow */}
            <div className="absolute inset-4 rounded-t-[180px] rounded-b-[40px] bg-gradient-to-tr from-aqua-glow to-ocean-blue opacity-50 blur-2xl group-hover:opacity-75 w-full h-full scale-105 transition-all duration-700 animate-pulse" />
 
            {/* Glass frame boundary in signature arched outline */}
            <div className="absolute inset-0 rounded-t-[180px] rounded-b-[40px] bg-white/15 border-2 border-white/30 dark:border-slate-800/20 shadow-2xl backdrop-blur-xl animate-[bounce_8s_ease-in-out_infinite]" />
 
            {/* Arched image and overlay */}
            <div className="absolute inset-4 rounded-t-[160px] rounded-b-[32px] overflow-hidden border-4 border-white dark:border-slate-900 shadow-inner z-10">
              <img 
                src={PERSONAL_INFO.profileImage}
                alt="Hasara Mudalige Portfolio Image" 
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600";
                }}
              />
              {/* Dynamic Ocean wave overlay at bottom of picture */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#07354d]/80 via-[#0369A1]/30 to-transparent pointer-events-none" />
            </div>
 
            {/* Floating Glass Badges */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 glass-panel px-3 py-1.5 rounded-full shadow-lg border border-white/60 flex items-center space-x-1.5 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-bold font-mono text-[#07354d] dark:text-white">Shift Active</span>
            </motion.div>
 
            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 right-[-20px] glass-panel p-4 rounded-2xl shadow-lg border border-white/60 flex items-center space-x-2 z-20"
            >
              <Icon name="HeartPulse" className="text-rose-500 animate-[pulse_1.5s_infinite]" size={14} />
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase font-mono tracking-wider font-extrabold text-slate-700 dark:text-slate-300">HEART RATE</span>
                <span className="text-[10px] font-bold text-[#07354d] dark:text-white">98 BPM (Normal)</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
 
      {/* Decorative ocean bottom curve divider */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none overflow-hidden h-20 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent" />
    </section>
  );
};
