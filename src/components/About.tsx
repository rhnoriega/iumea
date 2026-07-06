import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Wine, CheckCircle, Terminal, Laptop, Cpu, Settings } from 'lucide-react';
import founderImg from '../assets/images/founder_portrait_1783059836680.jpg';
import dinnerImg from '../assets/images/bilge_colleague_dinner_1783272033602.jpg';
import workingImg from '../assets/images/bilge_working_focus_1783272046382.jpg';

interface AboutProps {
  onOpenConsultation: () => void;
}

const SOFTWARES = [
  { name: 'Lightspeed (Ambassador)', type: 'EPOS & Inventory Management', highlight: true },
  { name: 'Deputy', type: 'Staff Rota & Labour Costing', highlight: false },
  { name: 'Square', type: 'Agile POS & Card Terminals', highlight: false },
  { name: 'Blinq', type: 'Digital QR Menus & CRM Systems', highlight: false },
  { name: 'Predicomm', type: 'Bespoke Restaurant POS Solutions', highlight: false },
  { name: 'Micros', type: 'Enterprise Legacy POS Architectures', highlight: false },
  { name: 'Ordermate', type: 'Table Service Optimization POS', highlight: false },
  { name: 'Toast', type: 'All-In-One Restaurant Management', highlight: false },
  { name: 'Zonal', type: 'High-Volume Pub & Bar EPOS Ecosystems', highlight: false },
  { name: 'Tebi', type: 'Modern Independent Retail & Bistro POS', highlight: false },
];

export default function About({ onOpenConsultation }: AboutProps) {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-card-dark/45" id="story">
      {/* Decorative blurry glowing background accent */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-brand-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Stunning Image Grid Showcase (Bilge's Field & Studio Gallery) */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1" id="story-visual-container">
            {/* Main Founder Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-card-dark bg-brand-card shadow-2xl"
            >
              <div className="absolute -inset-1 rounded-2xl border border-brand-neon/10 pointer-events-none" />
              <img
                src={founderImg}
                alt="Bilge Eroglu, Founder and Director of IUMEA"
className="w-full h-auto object-cover grayscale-[15%] contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"                referrerPolicy="no-referrer"
              />
              {/* Overlay with subtle label */}
              <div className="absolute bottom-3 left-3 bg-brand-accent/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                <p className="text-[9px] font-mono text-white uppercase tracking-widest">FOUNDER & DIRECTOR</p>
              </div>
            </motion.div>

            {/* In-action Action Collage Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Working/Focus photo */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl border border-brand-card-dark bg-brand-card shadow-lg"
              >
                <img
                  src={workingImg}
                  alt="Bilge drafting operational frameworks"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-brand-accent/90 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                  <p className="text-[8px] font-mono text-white uppercase">SYSTEMS AUDITING</p>
                </div>
              </motion.div>

              {/* Dinner/Colleague photo */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-square overflow-hidden rounded-2xl border border-brand-card-dark bg-brand-card shadow-lg"
              >
                <img
                  src={dinnerImg}
                  alt="Bilge and colleague in-venue dining setup"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-brand-accent/90 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                  <p className="text-[8px] font-mono text-white uppercase">IN-VENUE LAUNCHES</p>
                </div>
              </motion.div>
            </div>

            {/* Float Card: Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-brand-card border border-brand-card-dark/60 rounded-xl p-4 shadow-xl flex items-center gap-3"
              id="story-experience-badge"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-neon text-brand-dark">
                <Wine className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-bold text-sm leading-tight text-brand-accent">15+ Years</p>
                <p className="text-[10px] font-mono text-stone-500 mt-0.5">INTERNATIONAL OPERATIONAL FOOTPRINT</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder's Story & Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-brand-accent" id="story-text-container">
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-neon uppercase block mb-3">
              THE SOUL BEHIND THE METRICS
            </span>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8 uppercase leading-[1.05]" id="story-title">
              Hands-On Operational<br className="hidden sm:inline" />
              Blueprints & Systems.
            </h2>

            <div className="space-y-6 text-stone-600 font-sans text-base leading-relaxed" id="story-narrative">
              <p>
                I'm <span className="text-brand-accent font-semibold">Bilge Eroglu</span>, founder and director of IUMEA, a consulting and operations support company I established five years ago in response to the massive operational shifts following COVID. IUMEA was created to bring a practical, direct, and solution-focused approach to a rapidly evolving hospitality and boutique business landscape.
              </p>
              
              <p>
                I grew up working in my family’s restaurants in Türkiye, taking on a wide range of roles from an early age. Since then, my professional journey has taken me across the United States, Africa, Australia, and the UK, working at every level of the industry—from pot wash and front of house to operating in Michelin-starred kitchens, running pop-ups, and recruiting internationally for Marriott USA culinary internship programmes.
              </p>

              <p>
                These diverse, real-world experiences shaped a hands-on, highly adaptable approach to business systems and led me to build my own consultancy. Today, I support businesses with operations, systems integrations, project execution, and delivery.
              </p>

              <p>
                I'm known for my strong work ethic, professionalism, and people-first approach. I often work best as an outside perspective brought in to identify bottlenecks, simplify technical operations, audit EPOS ecosystems, and help move things forward.
              </p>
            </div>

            {/* In-text Quote block */}
            <div className="my-8 pl-5 border-l-2 border-brand-neon/60 bg-brand-card p-5 rounded-r-xl" id="story-quote">
              <Quote className="h-6 w-6 text-brand-neon mb-2 opacity-80" />
              <p className="text-sm italic font-medium text-stone-850">
                "True operational excellence isn't captured on a flat spreadsheet; it is built in the live flow of the space, the cultural alignment of the crew, and the robustness of the system tool stack."
              </p>
              <p className="text-xs font-mono text-stone-500 mt-3 uppercase tracking-wider">
                — Bilge Eroglu, Founder & Director
              </p>
            </div>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" id="story-pillars">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-brand-neon mt-0.5 shrink-0" />
                <span className="text-sm text-stone-600 font-medium"><span className="text-brand-accent font-semibold">Authentic execution</span> by active global operators</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-brand-neon mt-0.5 shrink-0" />
                <span className="text-sm text-stone-600 font-medium">Concept development backed by strict <span className="text-brand-accent font-semibold">systems audits</span></span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-brand-accent hover:bg-brand-neon text-brand-dark font-display font-semibold text-sm tracking-tight rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md inline-flex items-center gap-2 animate-pulse"
              id="story-cta-btn"
            >
              Consult with Bilge
            </button>
          </div>

        </div>

        {/* Systems & POS Integration Section */}
        <div className="mt-20 pt-16 border-t border-brand-card-dark/45" id="story-systems-mastery">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-neon uppercase block mb-2">
              SYSTEMS & INTEGRATIONS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-accent tracking-tight uppercase">
              Operations Software Expertise
            </h3>
            <p className="text-stone-600 text-sm max-w-2xl mt-2 font-sans">
              Bilge is highly proficient in auditing, configuring, and operating the industry's leading POS, inventory, labor, and digital payment systems—driving efficiency through clean data structure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SOFTWARES.map((sw, idx) => (
              <motion.div
                key={sw.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-5 rounded-xl flex flex-col justify-between group transition-all duration-300 ${
                  sw.highlight 
                    ? 'bg-brand-card border-2 border-brand-neon/60 shadow-lg shadow-brand-neon/5' 
                    : 'bg-brand-card border border-brand-card-dark/60 hover:border-brand-neon/40'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`h-1.5 w-6 rounded transition-all duration-300 group-hover:w-10 ${
                      sw.highlight ? 'bg-brand-neon' : 'bg-brand-neon/40 group-hover:bg-brand-neon'
                    }`} />
                    {sw.highlight && (
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-brand-neon text-brand-dark font-extrabold uppercase">
                        AMBASSADOR
                      </span>
                    )}
                  </div>
                  <p className="font-display font-bold text-sm sm:text-base text-brand-accent group-hover:text-brand-neon transition-colors leading-snug">
                    {sw.name.replace(' (Ambassador)', '')}
                  </p>
                  <p className="text-[9px] font-mono text-stone-500 mt-2 uppercase tracking-wider leading-relaxed">
                    {sw.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
