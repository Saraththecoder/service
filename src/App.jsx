import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import InquiryForm from './components/InquiryForm';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import MapsEmbed from './components/MapsEmbed';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'services' | 'book' | 'faqs' | 'contact'
  const [selectedService, setSelectedService] = useState('');

  // Scroll to top automatically on page change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [currentPage]);

  // Hook called when user taps Book Now on Services page catalog
  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    setCurrentPage('book');
  };

  const handleResetSelectedService = () => {
    setSelectedService('');
  };

  // Nav scroll/page jump helper
  const handleBookTrigger = () => {
    setCurrentPage('book');
  };

  // Page switcher renderer with elegant Framer Motion transition envelopes
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Elite Hero with Vetted Technician matching */}
            <Hero onBookClick={handleBookTrigger} />
            
            {/* Core trust indicators */}
            <WhyChooseUs />
            
            {/* Highlights horizontal timeline */}
            <Process />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Detailed high-contrast catalog cards */}
            <Services onSelectService={handleSelectService} />
          </motion.div>
        );
      case 'book':
        return (
          <motion.div
            key="book-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Large Visual interactive booking form */}
            <InquiryForm 
              selectedService={selectedService} 
              resetSelectedService={handleResetSelectedService} 
            />
          </motion.div>
        );
      case 'faqs':
        return (
          <motion.div
            key="faqs-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Accordion list */}
            <Faq />
            
            {/* Verified slider reviews */}
            <Testimonials />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Map coordinates and hub dispatch info */}
            <MapsEmbed />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-700">
      
      {/* Sticky Frost Glass Navbar */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Multi-Page Router Area with AnimatePresence */}
      <main className="w-full">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Premium Graphical Footer */}
      <Footer onBookClick={handleBookTrigger} onPageChange={setCurrentPage} />

      {/* Floating Call & WhatsApp support links */}
      <FloatingActions />

    </div>
  );
}

export default App;
