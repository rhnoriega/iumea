import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';
import heroImg from '../assets/images/london_hospitality_hero_1783059822617.jpg';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = servicesSection.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16" id="hero">
      {/* Immersive background image with sophisticated gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Atmospheric East London boutique hotel lounge bar"
          className="w-full h-full object-cover object-center scale-[1.03] filter brightness-[0.38] contrast-[1.05]"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Color overlay to fuse with brand palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/30" />
      </div>

      {/* Decorative vertical lines for corporate-creative grid feel */}
      <div className="absolute inset-y-0 left-10 w-px bg-white/5 hidden xl:block" />
      <div className="absolute inset-y-0 right-10 w-px bg-white/5 hidden xl:block" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings and CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start" id="hero-content">
          {/* Creative Location Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-mono mb-6"
            id="hero-tag"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>EST. LONDON • OPERATIONS SUPPORT</span>
          </motion.div>

          {/* Main Title heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6 uppercase"
            id="hero-heading"
          >
            All Things <br className="hidden sm:inline" />
            Operations, <br />
            Always <span className="text-brand-neon font-extrabold italic relative underline decoration-brand-accent decoration-2 underline-offset-4">Bespoke</span>.
          </motion.h1>

          {/* Subheading description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl font-sans font-normal leading-relaxed mb-10"
            id="hero-subheading"
          >
            I help independent brands, premium restaurants, and boutique venues set up their systems, smooth out floor operations, and refine their menus. Straightforward, hands-on, and down-to-earth support when you need it.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            id="hero-actions"
          >
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-brand-neon hover:bg-brand-neon-hover text-brand-dark font-display font-bold text-sm tracking-tight rounded-xl transition-all hover:scale-[1.03] active:scale-[0.97] duration-200 cursor-pointer shadow-lg shadow-brand-neon/25 text-center"
              id="hero-cta-book"
            >
              Book a Consultation
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-display font-semibold text-sm tracking-tight rounded-xl border border-white/10 hover:border-white/25 transition-all text-center"
              id="hero-cta-explore"
            >
              Explore Services
            </button>
          </motion.div>
        </div>        
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" id="scroll-indicator">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Discover More</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-center justify-center rounded-full border border-gray-800 bg-brand-dark/50"
        >
          <ArrowDown className="h-4 w-4 text-brand-neon" />
        </motion.div>
      </div>
    </section>
  );
}
