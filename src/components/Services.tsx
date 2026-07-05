import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { Compass, GlassWater, Sparkles, BarChart3, X, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceId?: string) => void;
}

// Icon mapper to dynamically render Lucide icons
const IconMap: Record<string, React.ComponentType<any>> = {
  Compass: Compass,
  GlassWater: GlassWater,
  Sparkles: Sparkles,
  BarChart3: BarChart3,
};

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="py-24 bg-brand-dark relative border-t border-brand-card-dark/45" id="services">
      {/* Decorative subtle gradient background spotlight */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-mono tracking-[0.25em] text-brand-neon uppercase block mb-3">
            PRACTICAL HOSPITALITY COGNITION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-accent tracking-tight mb-5" id="services-title">
            Our Consulting Practices
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans" id="services-subtitle">
            We operate at the intersection of cultural curation and fiscal discipline. Our frameworks are custom-tailored to boost guest lifetime value and operational gross margin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = IconMap[service.icon] || Compass;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-brand-card border border-brand-card-dark/60 hover:border-brand-neon/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand-neon/5"
              >
                {/* Decorative glowing gradient circle on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />

                <div>
                  {/* Service Icon Container */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-card-dark border border-brand-card-dark/40 text-brand-neon group-hover:bg-brand-neon group-hover:text-brand-dark transition-all duration-350 mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Service Category */}
                  <span className="text-[10px] font-mono tracking-wider text-brand-neon uppercase block mb-2">
                    {service.category} DIVISION
                  </span>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-accent mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Service Brief Description */}
                  <p className="text-stone-600 text-sm font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Trigger removed as per user request */}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="service-modal-overlay">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-brand-card border border-brand-card-dark text-brand-accent z-10"
              id="service-modal"
            >
              <div className="h-1 bg-brand-neon w-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-card-dark">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-neon/10 text-brand-neon">
                    {React.createElement(IconMap[selectedService.icon] || Compass, { className: 'h-5 w-5' })}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg tracking-tight text-brand-accent">
                      {selectedService.title}
                    </h3>
                    <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">{selectedService.category} consulting focus</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 text-stone-500 hover:text-brand-accent rounded-full hover:bg-brand-card-dark transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-2">Practice Overview</h4>
                  <p className="text-stone-700 font-sans text-sm md:text-base leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-3">Core Deliverables & Outputs</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-brand-dark p-3 rounded-xl border border-brand-card-dark/50">
                        <CheckCircle className="h-4 w-4 text-brand-neon mt-0.5 shrink-0" />
                        <span className="text-xs font-medium text-stone-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 border-t border-brand-card-dark bg-brand-card-dark/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-mono text-stone-500">Consultations are completely confidential.</p>
                <button
                  onClick={() => {
                    const svcId = selectedService.id;
                    setSelectedService(null);
                    onOpenConsultation(svcId);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-brand-neon hover:bg-brand-neon-hover text-brand-dark font-display font-semibold text-xs tracking-tight rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
                >
                  Inquire About This Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
