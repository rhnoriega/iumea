import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, Building2, User, Mail, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const TIME_SLOTS = [
  '09:30 AM (GMT)',
  '11:00 AM (GMT)',
  '02:00 PM (GMT)',
  '03:30 PM (GMT)',
  '05:00 PM (GMT)'
];

export default function ConsultationModal({ isOpen, onClose, preselectedService = '' }: ConsultationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    service: preselectedService || 'concept',
    date: '',
    time: '',
    notes: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate the next 5 working days (excluding Sat/Sun) starting from today
  const getUpcomingDays = () => {
    const days = [];
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    let current = new Date();
    
    while (days.length < 5) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sat & Sun
        days.push({
          rawDate: current.toISOString().split('T')[0],
          formatted: current.toLocaleDateString('en-GB', options),
          dayNum: current.getDate(),
          dayName: current.toLocaleDateString('en-GB', { weekday: 'short' })
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const days = getUpcomingDays();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please provide your venue or business name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBook = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = 'Please pick a consultation date';
    if (!formData.time) newErrors.time = 'Please choose a preferred time slot';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Save to localStorage for demo persistence
      const currentBookings = JSON.parse(localStorage.getItem('hospitality_consultations') || '[]');
      currentBookings.push({
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('hospitality_consultations', JSON.stringify(currentBookings));
      
      setStep(1);
      // Trigger a custom success state handled locally or custom success callback
      // For now, let's show an beautiful complete animation inside the modal
      setIsBookedSuccess(true);
    }, 1500);
  };

  const [isBookedSuccess, setIsBookedSuccess] = useState(false);

  const resetAndClose = () => {
    setIsBookedSuccess(false);
    setStep(1);
    setFormData({
      name: '',
      businessName: '',
      email: '',
      service: preselectedService || 'concept',
      date: '',
      time: '',
      notes: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="consultation-modal-overlay">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-brand-dark/90 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-brand-card border border-brand-card-dark/60 shadow-2xl text-brand-accent z-10"
            id="modal-box"
          >
            {/* Top design accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-accent via-brand-neon to-brand-accent" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-brand-card-dark/60" id="modal-header">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-neon text-brand-dark">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg tracking-tight">
                    {isBookedSuccess ? 'Consultation Booked' : 'Book a Consultation'}
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">EST. LONDON 2026</p>
                </div>
              </div>
              <button
                onClick={resetAndClose}
                className="rounded-full p-1.5 text-stone-500 hover:text-brand-accent hover:bg-brand-card-dark/60 transition-colors cursor-pointer"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[80vh]" id="modal-body">
              {isBookedSuccess ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                  id="success-screen"
                >
                  <div className="relative mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-neon text-brand-dark"
                    >
                      <CheckCircle2 className="h-10 w-10 text-brand-dark" />
                    </motion.div>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-neon"></span>
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-bold tracking-tight mb-2 text-brand-neon">
                    Session Confirmed!
                  </h4>
                  
                  <div className="max-w-md bg-brand-dark border border-brand-card-dark/60 rounded-xl p-5 mb-6 text-sm text-stone-600 font-sans space-y-2.5 text-left">
                    <div className="flex justify-between border-b border-brand-card-dark/80 pb-2">
                      <span className="text-stone-500">Consultant:</span>
                      <span className="font-semibold text-brand-accent">Founder (Boutique Hospitality)</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-card-dark/80 pb-2">
                      <span className="text-stone-500">Venue / Business:</span>
                      <span className="font-semibold text-brand-accent">{formData.businessName}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-card-dark/80 pb-2">
                      <span className="text-stone-500">Service Category:</span>
                      <span className="font-semibold text-brand-accent capitalize">{formData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-card-dark/80 pb-2">
                      <span className="text-stone-500">Scheduled Date:</span>
                      <span className="font-semibold text-brand-neon flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> 
                        {days.find(d => d.rawDate === formData.date)?.formatted || formData.date}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Scheduled Time:</span>
                      <span className="font-semibold text-brand-neon flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {formData.time}
                      </span>
                    </div>
                  </div>

                  <p className="text-stone-500 text-xs mb-8 max-w-sm">
                    A calendar invitation with a video link and preliminary brief questions has been dispatched to <span className="text-brand-accent font-medium">{formData.email}</span>. We look forward to reshaping your space.
                  </p>

                  <button
                    onClick={resetAndClose}
                    className="px-6 py-2.5 bg-brand-accent text-brand-dark font-semibold font-display tracking-tight rounded-xl hover:bg-brand-neon transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-md cursor-pointer"
                    id="finish-booking-btn"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                /* Stepper Forms */
                <div>
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between mb-8 text-xs font-mono" id="step-indicators">
                    <div className="flex items-center gap-2">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full font-bold ${step === 1 ? 'bg-brand-neon text-brand-dark' : 'bg-brand-accent text-brand-dark'}`}>1</span>
                      <span className={step === 1 ? 'text-brand-accent font-semibold' : 'text-stone-500'}>BUSINESS INTENT</span>
                    </div>
                    <div className="h-px flex-1 bg-brand-card-dark mx-4" />
                    <div className="flex items-center gap-2">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full font-bold ${step === 2 ? 'bg-brand-neon text-brand-dark' : 'bg-brand-card-dark text-stone-500'}`}>2</span>
                      <span className={step === 2 ? 'text-brand-accent font-semibold' : 'text-stone-500'}>SCHEDULE CALL</span>
                    </div>
                  </div>

                  {step === 1 ? (
                    /* Step 1: Info & Intent */
                    <form onSubmit={handleNextStep} className="space-y-4" id="step1-form">
                      <div>
                        <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-1.5" htmlFor="name">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Saskia Vance"
                            className={`w-full bg-brand-dark border ${errors.name ? 'border-red-500' : 'border-brand-card-dark/80'} focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm transition-all text-brand-accent placeholder-stone-400`}
                          />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-1.5" htmlFor="businessName">
                            Venue / Business Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                            <input
                              type="text"
                              id="businessName"
                              name="businessName"
                              value={formData.businessName}
                              onChange={handleInputChange}
                              placeholder="e.g. The Brass Peacock"
                              className={`w-full bg-brand-dark border ${errors.businessName ? 'border-red-500' : 'border-brand-card-dark/80'} focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm transition-all text-brand-accent placeholder-stone-400`}
                            />
                          </div>
                          {errors.businessName && <p className="text-red-500 text-xs mt-1 font-mono">{errors.businessName}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-1.5" htmlFor="email">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="saskia@brasspeacock.com"
                              className={`w-full bg-brand-dark border ${errors.email ? 'border-red-500' : 'border-brand-card-dark/80'} focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm transition-all text-brand-accent placeholder-stone-400`}
                            />
                          </div>
                          {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-1.5" htmlFor="service">
                          Consulting Focus
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-brand-dark border border-brand-card-dark/80 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none rounded-xl px-4 py-2.5 text-sm transition-all text-brand-accent cursor-pointer"
                        >
                          <option value="concept">Concept & Brand Architecture</option>
                          <option value="menu">Menu & Beverage Engineering</option>
                          <option value="training">Modern Culture & Service Training</option>
                          <option value="operations">Operational Systems & Tech Stack</option>
                          <option value="all">Full Venue Launch / Turnaround Retainer</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-1.5" htmlFor="notes">
                          Project Brief / Current Pain Points (Optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="e.g. Opening high-end cocktail bar in Shoreditch this October, looking for specialized beverage program & supplier negotiation."
                          className="w-full bg-brand-dark border border-brand-card-dark/80 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none rounded-xl px-4 py-2.5 text-sm transition-all text-brand-accent placeholder-stone-400 resize-none"
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          className="flex items-center gap-2 px-6 py-3 bg-brand-neon text-brand-dark font-display font-semibold text-sm tracking-tight rounded-xl hover:bg-brand-neon-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-brand-neon/15"
                          id="modal-next-btn"
                        >
                          Continue to Calendar
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Step 2: Date & Time Picker */
                    <div className="space-y-6" id="step2-form">
                      {/* Date Picker */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-3">
                          Select a Date *
                        </label>
                        <div className="grid grid-cols-5 gap-2" id="date-picker-grid">
                          {days.map((d) => (
                            <button
                              key={d.rawDate}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, date: d.rawDate }));
                                if (errors.date) setErrors(prev => { const copy = { ...prev }; delete copy.date; return copy; });
                              }}
                              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                                formData.date === d.rawDate
                                  ? 'bg-brand-accent border-brand-accent text-brand-dark scale-[1.03] shadow-md shadow-brand-accent/25 font-bold'
                                  : 'bg-brand-dark border-brand-card-dark/80 hover:border-brand-neon text-stone-600 hover:text-brand-neon'
                              }`}
                            >
                              <span className="text-[10px] font-mono tracking-wider opacity-60 uppercase">{d.dayName}</span>
                              <span className="text-lg font-display font-bold leading-none mt-1">{d.dayNum}</span>
                            </button>
                          ))}
                        </div>
                        {errors.date && <p className="text-red-500 text-xs mt-1 font-mono">{errors.date}</p>}
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-stone-500 tracking-wider mb-3">
                          Select a Time Slot (London Time) *
                        </label>
                        <div className="grid grid-cols-2 gap-2" id="time-picker-grid">
                          {TIME_SLOTS.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, time: t }));
                                if (errors.time) setErrors(prev => { const copy = { ...prev }; delete copy.time; return copy; });
                              }}
                              className={`flex items-center gap-2 p-3 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                                formData.time === t
                                  ? 'bg-brand-neon border-brand-neon text-brand-dark scale-[1.02] font-bold'
                                  : 'bg-brand-dark border-brand-card-dark/80 hover:border-brand-neon text-stone-600 hover:text-brand-neon'
                              }`}
                            >
                              <Clock className="h-3.5 w-3.5 opacity-70" />
                              {t}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="text-red-500 text-xs mt-1 font-mono">{errors.time}</p>}
                      </div>

                      <div className="pt-4 flex justify-between items-center border-t border-brand-card-dark">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-2 text-xs font-mono text-stone-500 hover:text-brand-accent transition-colors cursor-pointer"
                          id="modal-back-btn"
                        >
                          ← BACK TO DETAILS
                        </button>

                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={handleBook}
                          className="flex items-center gap-2 px-6 py-3 bg-brand-neon text-brand-dark font-display font-semibold text-sm tracking-tight rounded-xl hover:bg-brand-neon-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed shadow-lg shadow-brand-neon/15"
                          id="confirm-booking-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-brand-dark" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Securing Slot...
                            </>
                          ) : (
                            <>
                              Confirm Consultation
                              <CheckCircle2 className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
