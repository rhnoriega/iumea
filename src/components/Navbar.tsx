import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import IumeaLogo from './IumeaLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'The Story', href: '#story' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Account for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/85 backdrop-blur-md border-b border-gray-800/60 py-4'
            : 'bg-transparent py-6'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="logo-brand"
          >
            <IumeaLogo className="w-11 h-11 text-brand-neon transition-all duration-300 group-hover:scale-105" />
            <div>
              <span className="font-display font-black text-xl tracking-widest text-white block leading-none">
                IUMÆ
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" id="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-brand-neon transition-colors duration-200 relative py-1.5 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Book CTA */}
          <div className="hidden md:flex items-center gap-4" id="desktop-cta-section">
            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-neon hover:bg-brand-neon-hover text-brand-dark font-display font-semibold text-xs tracking-tight rounded-xl transition-all hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg shadow-brand-neon/10"
              id="navbar-consultation-btn"
            >
              Book Consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/40 transition-colors"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-30 md:hidden" id="mobile-nav-menu">
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-dark/95 backdrop-blur-lg"
              id="mobile-nav-backdrop"
            />

            {/* Sidebar element */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-card border-l border-gray-800 p-8 flex flex-col justify-between"
              id="mobile-nav-container"
            >
              <div className="pt-20">
                <span className="text-[10px] font-mono tracking-[0.3em] text-brand-neon block uppercase mb-6">
                  EST. LONDON / UK
                </span>
                
                <nav className="flex flex-col gap-6 text-xl font-display font-semibold text-white">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="hover:text-brand-neon transition-colors duration-200 border-b border-gray-850 pb-3"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="space-y-6">
                <div className="h-px bg-gray-800" />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-neon hover:bg-brand-neon-hover text-brand-dark font-display font-bold text-sm tracking-tight rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-brand-neon/20 cursor-pointer"
                  id="mobile-menu-consultation-btn"
                >
                  Book Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                
                <p className="text-center text-[10px] font-mono text-gray-500">
                  © 2026 IUMEA LTD.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
