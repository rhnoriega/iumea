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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-28 bg-brand-dark" id="hero">
      {/* Immersive background image with sophisticated gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Atmospheric East London boutique hotel lounge bar"
          className="w-full h-full object-cover object-center opacity-[0.80] grayscale filter"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Color overlay to fuse with brand palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/65 to-brand-dark/30" />
      </div>

      {/* Decorative vertical lines for corporate-creative grid feel */}
      <div className="absolute inset-y-0 left-10 w-px bg-white/5 hidden xl:block" />
      <div className="absolute inset-y-0 right-10 w-px bg-white/5 hidden xl:block" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings and CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start" id="hero-content">
          {/* Location stats card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-3 rounded-3xl bg-brand-card border border-brand-card-dark text-brand-accent text-xs font-mono mb-6 shadow-sm shadow-brand-card/20"
            id="hero-tag"
          >
            <Sparkles className="h-4 w-4 text-brand-neon" />
            <span>EST. LONDON • OPERATIONS SUPPORT</span>
          </motion.div>

          {/* Main Title heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-brand-accent tracking-tight leading-[1.05] mb-6 uppercase"
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
            className="text-stone-700 text-base sm:text-lg md:text-xl max-w-2xl font-sans font-normal leading-relaxed mb-10"
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
              className="px-8 py-4 bg-brand-card border border-brand-card-dark text-brand-accent font-display font-bold text-sm tracking-tight rounded-xl transition-all hover:scale-[1.03] active:scale-[0.97] duration-200 cursor-pointer shadow-lg shadow-brand-card/30 text-center"
              id="hero-cta-book"
            >
              Book a Consultation
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-brand-card border border-brand-card-dark text-brand-accent font-display font-semibold text-sm tracking-tight rounded-xl transition-all hover:bg-brand-card-dark/70 hover:scale-[1.03] active:scale-[0.97] duration-200 cursor-pointer shadow-lg shadow-brand-card/30 text-center"
              id="hero-cta-explore"
            >
              Explore Services
            </button>
          </motion.div>
        </div>        
      </div>
    </section>
  );
}
