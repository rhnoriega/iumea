import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, Sparkles, CheckCircle2, ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onOpenConsultation: () => void;
}

export default function Contact({ onOpenConsultation }: ContactProps) {
  // Contact Form State
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    message: '',
    budget: 'mid'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Please provide your name';
    if (!form.businessName.trim()) newErrors.businessName = 'Please provide your business or venue name';
    if (!form.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Please provide a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Persist contact message in localStorage
      const messages = JSON.parse(localStorage.getItem('hospitality_contact_messages') || '[]');
      messages.push({
        ...form,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('hospitality_contact_messages', JSON.stringify(messages));

      // Reset form fields
      setForm({
        name: '',
        businessName: '',
        email: '',
        message: '',
        budget: 'mid'
      });
    }, 1200);
  };

  return (
    <section className="py-24 bg-brand-dark relative border-t border-brand-card-dark/45" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Layout: Centered Chill Contact Card */}
        <div className="max-w-3xl mx-auto mb-24" id="contact-panel-wrapper">
          
          {/* Centered Big Orange/Red Contact Card */}
          <div className="relative bg-[#fe4515] text-[#fff0cc] p-10 sm:p-16 rounded-2xl flex flex-col items-center text-center overflow-hidden border border-[#fe4515]/20 shadow-2xl" id="contact-info-panel">
            
            {/* Absolute Rotating Star Ornament 1 (Left-Center) */}
            <div className="absolute left-6 sm:left-12 top-[45%] -translate-y-1/2 select-none pointer-events-none opacity-85 hidden sm:block">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#fff0cc] animate-[spin_30s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <line x1="50" y1="15" x2="50" y2="85" />
                <line x1="15" y1="50" x2="85" y2="50" />
                <line x1="26" y1="26" x2="74" y2="74" />
                <line x1="26" y1="74" x2="74" y2="26" />
              </svg>
            </div>

            {/* Absolute Rotating Star Ornament 2 (Bottom-Right) */}
            <div className="absolute right-6 sm:right-12 bottom-[15%] select-none pointer-events-none opacity-85 hidden sm:block">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#fff0cc] animate-[spin_45s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <line x1="50" y1="15" x2="50" y2="85" />
                <line x1="15" y1="50" x2="85" y2="50" />
                <line x1="26" y1="26" x2="74" y2="74" />
                <line x1="26" y1="74" x2="74" y2="26" />
              </svg>
            </div>

            {/* SAY HELLO Title */}
            <div className="w-full relative z-10 pt-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#fff0cc]/70 uppercase block mb-3">
                GET IN TOUCH
              </span>
              <h2 className="font-serif font-black text-5xl sm:text-6xl tracking-tight uppercase">
                Say Hello
              </h2>
            </div>

            {/* Friendly, Chill Paragraph */}
            <div className="relative z-10 max-w-xl mt-6 mb-10 text-center">
              <p className="text-sm sm:text-base leading-relaxed font-sans text-[#fff0cc]/90">
                I am always open to talking about floor operations, POS auditing, menus, or pop-ups. No formal briefs, questionnaires, or corporate intake forms needed here. If you want to talk about your project, need some support, or just want to bounce an idea around, drop me a line anytime. Let's keep it simple.
              </p>
            </div>

            {/* Center Stacked Information */}
            <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 border-t border-b border-[#fff0cc]/20 relative z-10">
              
              {/* Phone item */}
              <div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#fff0cc]/60 uppercase block mb-1">
                  PHONE
                </span>
                <a 
                  href="tel:+447984981825" 
                  className="font-serif font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity block duration-200"
                >
                  +44 7984981825
                </a>
              </div>

              {/* Socials item */}
              <div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#fff0cc]/60 uppercase block mb-1">
                  INSTAGRAM
                </span>
                <a 
                  href="https://instagram.com/iambilgeeroglu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-serif font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity block duration-200"
                >
                  @iambilgeeroglu
                </a>
              </div>

              {/* Email item */}
              <div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#fff0cc]/60 uppercase block mb-1">
                  EMAIL
                </span>
                <a 
                  href="mailto:hello@iumea.uk" 
                  className="font-serif font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity block duration-200"
                >
                  hello@iumea.uk
                </a>
              </div>

            </div>

            {/* Button to quickly pop up calendar consultation */}
            <div className="relative z-10 mt-10">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#fff0cc] text-[#fe4515] hover:bg-white font-display font-bold text-xs tracking-wider uppercase rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg inline-flex items-center gap-2"
                id="contact-consult-btn"
              >
                Schedule a call with Bilge <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile indicator / friendly footer note */}
            <div className="w-full relative z-10 mt-12">
              <p className="text-[8px] font-mono tracking-widest text-[#fff0cc]/50 uppercase">
                IUMÆ • ALWAYS BESPOKE
              </p>
            </div>

          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS PANEL */}
        <div className="border-t border-brand-card-dark/45 pt-20" id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* FAQ Left intro */}
            <div className="lg:col-span-4 text-brand-accent">
              <span className="text-[10px] font-mono tracking-[0.2em] text-brand-neon uppercase block mb-3">
                SOME HELPFUL INFO
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-4 uppercase">
                Common Questions
              </h3>
              <p className="text-stone-600 text-sm font-sans leading-relaxed mb-6">
                A few quick details on how I work, remote vs on-site support, software systems, and collaborations.
              </p>
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-stone-500">
                <HelpCircle className="h-4 w-4 text-brand-neon" /> HAVE QUESTIONS? DROP ME A LINE.
              </div>
            </div>

            {/* FAQ Right Accordions */}
            <div className="lg:col-span-8 space-y-3" id="faq-accordions">
              {FAQ_ITEMS.map((faq, idx) => {
                const isSelected = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-brand-card border border-brand-card-dark/60 hover:border-brand-card-dark rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isSelected ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-brand-accent focus:outline-none cursor-pointer"
                    >
                      <span className="font-display font-bold text-sm sm:text-base pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-brand-neon shrink-0 transition-transform duration-300 ${
                          isSelected ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-brand-card-dark/40 text-xs sm:text-sm font-sans text-stone-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
