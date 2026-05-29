import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
        scrolled 
          ? 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-slate-800/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center space-x-2' group"
        >
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-ocean-blue to-aqua-glow p-[1px] shadow-sm">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
              <Icon 
                name="Waves" 
                className="text-ocean-blue dark:text-sky-blue group-hover:text-white transition-colors duration-300" 
                size={18} 
              />
            </div>
          </div>
          <div className="ml-3 flex flex-col">
            <span className="font-serif text-lg font-light tracking-tight text-slate-900 dark:text-white">
              Hasara Mudalige
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#0EA5E9] dark:text-[#22D3EE]">
              Critical Care Nurse
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/20 dark:bg-slate-950/20 px-3 py-1.5 rounded-full border border-[#07354d]/5 dark:border-white/5 backdrop-blur-md font-sans">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-xs font-light text-slate-705 dark:text-slate-300 tracking-[0.05em] hover:text-ocean-blue dark:hover:text-aqua-glow rounded-full transition-all duration-300 relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-ocean-blue/5 dark:bg-sky-blue/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Utility Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Theme switcher button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-white/50 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/30 text-slate-700 dark:text-slate-300 hover:text-ocean-blue dark:hover:text-aqua-glow hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Icon name={darkMode ? 'Sun' : 'Moon'} size={15} />
          </button>

          {/* Call-to-Action button */}
          <a
            href="#contact"
            className="relative overflow-hidden group px-5 py-2 rounded-full bg-[#07354d] text-white font-mono uppercase text-[10px] tracking-widest font-bold transition-all duration-300 shadow-sm hover:bg-slate-850 border border-white/10"
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <span>Contact Hasara</span>
              <Icon name="ArrowRight" className="ml-1 group-hover:translate-x-1 transition-transform" size={11} />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger + theme switcher */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/50 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/30 text-slate-700 dark:text-slate-300"
          >
            <Icon name={darkMode ? 'Sun' : 'Moon'} size={15} />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/30 text-slate-800 dark:text-white"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-lg py-5 overflow-hidden"
          >
            <div className="px-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-ocean-blue dark:hover:text-aqua-glow transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-1 px-5 py-3 rounded-xl bg-gradient-to-r from-ocean-blue to-deep-sea text-white font-semibold text-sm"
                >
                  <span>Connect with Hasara</span>
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
