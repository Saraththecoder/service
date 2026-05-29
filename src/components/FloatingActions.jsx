import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        isVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-end">
      
      {/* Call Button */}
      <motion.a
        href="tel:9701308392"
        className="relative w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] group active:scale-95 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-40 group-hover:opacity-75 transition duration-300 group-hover:scale-110 animate-pulse" />
        <Phone className="w-6 h-6 relative z-10" />
        <span className="absolute right-16 bg-slate-900 border border-white/10 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Call Support (9701308392)
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919701308392?text=Hi%20Oryon%20Home%20Services,%20I%20would%20like%20to%20book%20a%20repair%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full flex items-center justify-center bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] group active:scale-95 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-600 blur opacity-40 group-hover:opacity-75 transition duration-300 group-hover:scale-110 animate-pulse" />
        <MessageCircle className="w-7 h-7 relative z-10" />
        <span className="absolute right-16 bg-slate-900 border border-white/10 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Chat
        </span>
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 backdrop-blur-md active:scale-95 shadow-xl group"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;
