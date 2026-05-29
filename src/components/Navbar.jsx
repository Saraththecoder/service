import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';

const Navbar = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Services', view: 'services' },
    { name: 'Book Service', view: 'book' },
    { name: 'FAQs', view: 'faqs' },
    { name: 'Contact Us', view: 'contact' },
  ];

  const handleLinkClick = (e, view) => {
    e.preventDefault();
    setIsOpen(false);
    onPageChange(view);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-45 bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Brand (Slate & Blue) */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-[#1565FF] to-[#4A90FF] p-[1px] shadow-sm">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5.5 h-5.5 text-[#1565FF]" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-xl tracking-wider text-slate-900 group-hover:text-[#1565FF] transition-colors duration-300">
                  ORYON
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#4A90FF] -mt-1">
                  Home Services
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.view;
                  
                  return (
                    <a
                      key={link.name}
                      href={`#${link.view}`}
                      onClick={(e) => handleLinkClick(e, link.view)}
                      className={`relative text-sm font-bold tracking-wide transition-colors py-2 px-1 ${
                        isActive ? 'text-[#1565FF]' : 'text-slate-500 hover:text-slate-950'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span 
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1565FF]" 
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Book online CTA Button */}
              <motion.button
                onClick={() => onPageChange('book')}
                className="relative px-6 py-2.5 rounded-xl text-sm font-extrabold text-white overflow-hidden shadow-sm shadow-[#1565FF]/20 active:scale-95 transition-transform"
                whileHover={{ scale: 1.03 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#1565FF] to-[#4A90FF]" />
                <span className="relative z-10">Book Support</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-950 hover:bg-slate-50 focus:outline-none border border-slate-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.view;
                  
                  return (
                    <a
                      key={link.name}
                      href={`#${link.view}`}
                      onClick={(e) => handleLinkClick(e, link.view)}
                      className={`block px-4 py-3.5 rounded-xl text-base font-bold text-left transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-500/5 text-[#1565FF]' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                
                {/* Mobile CTAs */}
                <div className="pt-4 px-4 flex flex-col gap-3">
                  <a
                    href="tel:9701308392"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-extrabold bg-slate-50 hover:bg-slate-100 active:scale-95 transition-transform"
                  >
                    <Phone className="w-4.5 h-4.5 text-[#1565FF]" />
                    Call: 9701308392
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onPageChange('book');
                    }}
                    className="w-full py-3 rounded-xl bg-[#1565FF] hover:bg-[#4A90FF] text-white text-sm font-extrabold text-center shadow-md active:scale-95 transition-transform"
                  >
                    Book Appointment
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
