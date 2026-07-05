import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenConsultation = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    } else {
      setPreselectedService('');
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setPreselectedService('');
  };

  return (
    <div className="bg-brand-dark min-h-screen font-sans selection:bg-brand-neon selection:text-brand-dark text-brand-accent overflow-hidden" id="boutique-hospitality-root">
      {/* Structural horizontal border grids */}
      <div className="fixed inset-0 z-0 bg-brand-dark pointer-events-none" />
      
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Services / Consulting Practices Section */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* Bio / Founder Story Section */}
        <About onOpenConsultation={() => handleOpenConsultation()} />

        {/* Brand new styled projects grid */}
        <Projects />

        {/* Contact Us Form & FAQ Section */}
        <Contact onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Interactive Scheduling consultation modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        preselectedService={preselectedService}
      />
    </div>
  );
}

