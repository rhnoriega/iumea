import React from 'react';
import { ArrowUp, ArrowUpRight, Github } from 'lucide-react';
import IumeaLogo from './IumeaLogo';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
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
    <footer className="bg-brand-dark border-t border-brand-card-dark/45 text-stone-500 py-16 relative" id="app-footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-brand-card-dark/45">
          
          {/* Brand/Slogan Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <IumeaLogo className="w-9 h-9 text-brand-neon" />
              <span className="font-display font-black text-sm tracking-widest text-brand-accent uppercase">
                IUMÆ
              </span>
            </div>
            
            <p className="text-xs text-stone-600 font-sans leading-relaxed max-w-sm">
              We design narrative-driven boutique spaces and configure streamlined operational systems that elevate guest experience, cultivate motivated team cultures, and maximize bottom-line profit.
            </p>

            <p className="text-[10px] font-mono text-stone-400">
              EST. LONDON / UK • ALWAYS BESPOKE
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-brand-accent tracking-widest uppercase">PRACTICE PATHS</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-neon hover:underline transition-colors"
                >
                  Consulting Services
                </a>
              </li>
              <li>
                <a
                  href="#ambience"
                  onClick={(e) => handleLinkClick(e, '#ambience')}
                  className="hover:text-brand-neon hover:underline transition-colors"
                >
                  Systems & Operations
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleLinkClick(e, '#story')}
                  className="hover:text-brand-neon hover:underline transition-colors"
                >
                  The Founder Story
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, '#projects')}
                  className="hover:text-brand-neon hover:underline transition-colors"
                >
                  Bespoke Client Projects
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-brand-neon hover:underline transition-colors"
                >
                  Consulting FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Direct contact summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-brand-accent tracking-widest uppercase">OFFICE CONVERSATIONS</h4>
            <div className="text-xs font-sans text-stone-600 space-y-1.5">
              <p>Email: <a href="mailto:hello@iumea.uk" className="hover:text-brand-neon underline">hello@iumea.uk</a></p>
              <p>Phone: <a href="tel:+447946000000" className="hover:text-brand-neon">+44 (0) 7946 000 000</a></p>
              <p>Studio: <span className="text-stone-500">London, United Kingdom</span></p>
            </div>
          </div>

        </div>

        {/* Lower footer / Copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono">
          <p className="text-stone-400">
            © 2026 IUMEA LTD. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 text-stone-500 hover:text-brand-neon transition-colors group cursor-pointer"
              id="back-to-top"
            >
              BACK TO TOP 
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
