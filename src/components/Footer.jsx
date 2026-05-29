import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const Footer = ({ onBookClick, onPageChange }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, view) => {
    e.preventDefault();
    onPageChange(view);
  };

  return (
    <footer className="relative bg-white text-slate-500 overflow-hidden border-t border-slate-100">
      
      {/* -------------------- SECTION 6: CTA BANNER (Light slate-50 contrast) -------------------- */}
      <div className="relative border-b border-slate-150 py-20 px-4 bg-slate-50 overflow-hidden w-full">
        
        {/* Soft elegant background spotlights (Extremely faint) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-[90px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#1565FF] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RAPID RESPONSE HELPLINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Need Quick Appliance Repair?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Don't let a broken AC, refrigerator, or washing machine interrupt your routine. Tap below to call or chat with our Nellore technicians immediately.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-5 pt-4 max-w-3xl mx-auto"
          >
            
            {/* Direct Call Button (Vibrant Blue) */}
            <motion.a
              href="tel:9701308392"
              className="relative px-8 py-5 rounded-2xl text-base font-extrabold text-white shadow-md shadow-[#1565FF]/20 flex items-center justify-center gap-3 group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-[#1565FF] hover:bg-[#4A90FF] transition-all duration-300" />
              <Phone className="w-6 h-6 relative z-10 animate-bounce" />
              <div className="flex flex-col items-start relative z-10 text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200">
                  Call Support Now
                </span>
                <span className="text-lg leading-tight font-extrabold">9701308392</span>
              </div>
            </motion.a>

            {/* Direct WhatsApp (Vibrant Green) */}
            <motion.a
              href="https://wa.me/919701308392?text=Hi%20Oryon%20Home%20Services,%20I%20need%20doorstep%20appliance%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 rounded-2xl text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-3 transition-all duration-300 shadow-md shadow-emerald-600/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200">
                  WhatsApp Support
                </span>
                <span className="text-lg leading-tight font-extrabold">Chat on WhatsApp</span>
              </div>
            </motion.a>

            {/* Online Book trigger */}
            <motion.button
              onClick={onBookClick}
              className="px-8 py-5 rounded-2xl text-sm font-extrabold text-slate-700 border border-slate-200 hover:border-[#1565FF]/30 hover:text-[#1565FF] bg-white flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-widest text-slate-400">Fast Booking</span>
                <span className="font-extrabold">Book Online</span>
              </div>
            </motion.button>

          </motion.div>

        </div>
      </div>

      {/* -------------------- SECTION 7: GRAPHICAL ACCESSIBILITY FOOTER (ONLY ICONS CHOOSE) -------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full text-center bg-white">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Logo Brand Header (Slate & Blue) */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[#1565FF] to-[#4A90FF] p-[1px] shadow-sm">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#1565FF]" />
              </div>
            </div>
            <div className="flex flex-col items-center mt-2 text-left">
              <span className="font-heading font-extrabold text-2xl tracking-widest text-slate-900">
                ORYON
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#4A90FF] mt-0.5">
                Home Services Nellore
              </span>
            </div>
          </div>

          <p className="text-xs uppercase tracking-wider text-slate-400 font-extrabold">
            TAP ICONS BELOW TO CONNECT WITH US DIRECTLY
          </p>

          {/* --- HIGH ACCESSIBILITY ACTION ICON GRID (ONLY ICONS CHOOSE) --- */}
          <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-md w-full justify-center">
            
            {/* Phone Call (Blue) */}
            <motion.a
              href="tel:9701308392"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1565FF] flex flex-col items-center justify-center text-[#1565FF] hover:text-white hover:bg-[#1565FF] transition-all duration-300 shadow-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider mt-1.5 text-slate-400 group-hover:text-blue-100">
                Call
              </span>
            </motion.a>

            {/* WhatsApp Chat (Green) */}
            <motion.a
              href="https://wa.me/919701308392?text=Hi%20Oryon%20Home%20Services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 flex flex-col items-center justify-center text-emerald-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 shadow-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider mt-1.5 text-slate-400 group-hover:text-emerald-100">
                WhatsApp
              </span>
            </motion.a>

            {/* Google Maps Pin Nav (Red) */}
            <motion.a
              href="https://maps.google.com/?q=Haranathapuram,Nellore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500 flex flex-col items-center justify-center text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300 shadow-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider mt-1.5 text-slate-400 group-hover:text-red-100">
                Location
              </span>
            </motion.a>

            {/* Email Support (Cyan) */}
            <motion.a
              href="mailto:support@oryonhomeservices.com"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 flex flex-col items-center justify-center text-cyan-600 hover:text-white hover:bg-cyan-600 transition-all duration-300 shadow-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider mt-1.5 text-slate-400 group-hover:text-cyan-100">
                Email
              </span>
            </motion.a>

          </div>

          {/* Social Links (Facebook, Instagram, Youtube Inline SVGs styled for light theme) */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-500/40 text-slate-400 hover:text-blue-500 flex items-center justify-center transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <FacebookIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 hover:border-pink-500/40 text-slate-400 hover:text-pink-500 flex items-center justify-center transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <InstagramIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 hover:border-red-500/40 text-slate-400 hover:text-red-500 flex items-center justify-center transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <YoutubeIcon className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 mt-8 border-t border-slate-100 w-full flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {currentYear} ORYON HOME SERVICES. All rights reserved. Registered under local Nellore service bounds.
            </p>
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500 animate-pulse" />
              <span>for Nellore residents</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

// Inline brand SVGs for rock-solid Vite builds
const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const YoutubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
);

export default Footer;
