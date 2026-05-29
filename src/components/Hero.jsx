import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Clock, Award, Sparkles, Star, Check } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-40 pb-20 overflow-hidden bg-slate-50 text-slate-900">
      
      {/* 1. Subtle Elegant Radial Backlight Overlays (Extremely Soft for Light Theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1565FF]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-[#4A90FF]/4 blur-[120px]" />
      </div>

      {/* 2. Sleek Matrix Grid Alignment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.012)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* 3. Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Vetted Technician Photo (First Image) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start w-full order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm hover:border-[#1565FF]/30 transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.01 }}
            >
              <img 
                src="/vetted_technician_hero.png" 
                alt="Door Step Service Certified Local Technician" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Right Column: Rebranded Copy, Badges & CTA Dials (Then Text) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start order-2 lg:order-2">
            
            {/* Same-Day Status Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-[#1565FF] text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm shrink-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-700 font-heading">Same-Day Service Active in Nellore</span>
            </motion.div>

            {/* Simplified Headline (Reduced Text for High Accessibility) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] mb-4"
            >
              Easy Doorstep Repair <br />
              <span className="text-glow-gradient">AC, Fridge & Washer</span>
            </motion.h1>

            {/* Streamlined Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg font-bold leading-relaxed max-w-2xl mb-8"
            >
              Professional local technicians in Nellore. Fast repair, genuine parts, and a 30-day warranty.
            </motion.p>

            {/* Horizontal Trust Badges (Universal Accessibility Indicators) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 w-full max-w-xl mb-10 border-t border-b border-slate-200/80 py-6"
            >
              <div className="flex flex-col items-start gap-1">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4.5 h-4.5 text-[#1565FF]" /> 90 Min
                </span>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Doorstep SLA</span>
              </div>
              <div className="flex flex-col items-start gap-1 border-l border-slate-200/80 pl-4">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#1565FF]" /> 100%
                </span>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Genuine Parts</span>
              </div>
              <div className="flex flex-col items-start gap-1 border-l border-slate-200/80 pl-4">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4.5 h-4.5 text-[#1565FF]" /> 30-Day
                </span>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Work Warranty</span>
              </div>
            </motion.div>

            {/* CTA Buttons below copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="tel:9701308392"
                className="relative px-8 py-4.5 rounded-xl text-sm font-extrabold text-white shadow-md shadow-[#1565FF]/20 flex items-center justify-center gap-2.5 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-[#1565FF] hover:bg-[#4A90FF] transition-all duration-300" />
                <Phone className="w-4 h-4 relative z-10" />
                <span className="relative z-10 tracking-wider">Call Support: 9701308392</span>
              </motion.a>

              <motion.button
                onClick={onBookClick}
                className="px-8 py-4.5 rounded-xl text-sm font-extrabold text-slate-700 border border-slate-200 hover:border-[#1565FF]/30 hover:text-[#1565FF] bg-white flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-4 h-4" />
                <span className="tracking-wider">Book Dispatch Visit</span>
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
