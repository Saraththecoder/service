import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Clock, Award, Sparkles, Star, Check } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-50 text-slate-900">
      
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
          
          {/* Left Column: Authoritative Sales Copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#1565FF] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4A90FF]" />
              <span>Vetted Doorstep Appliance Care</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Appliance Care, <br />
              <span className="text-glow-gradient">Re-engineered for Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-10"
            >
              Restore comfort to your home with Nellore's elite doorstep service for ACs, refrigerators, and washing machines. Backed by certified local engineers, flat rates, and zero hidden charges.
            </motion.p>

            {/* Horizontal Trust Badges */}
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
                <span className="text-slate-500 text-xs font-medium">Doorstep SLA</span>
              </div>
              <div className="flex flex-col items-start gap-1 border-l border-slate-200/80 pl-4">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#1565FF]" /> 100%
                </span>
                <span className="text-slate-500 text-xs font-medium">Genuine Parts</span>
              </div>
              <div className="flex flex-col items-start gap-1 border-l border-slate-200/80 pl-4">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4.5 h-4.5 text-[#1565FF]" /> 30-Day
                </span>
                <span className="text-slate-500 text-xs font-medium">Work Warranty</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
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

          {/* Right Column: Vetted Technician Match Card (White Base) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm overflow-hidden group hover:border-[#1565FF]/30 transition-all duration-500"
            >
              
              {/* Header: Status */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#1565FF]">
                    Nellore Central Dispatch
                  </span>
                </div>
                <div className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[#1565FF] text-[9px] font-bold">
                  TECH ACTIVE
                </div>
              </div>

              {/* Technician Match Profile */}
              <div className="space-y-6">
                
                {/* Visual profile match details */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  
                  {/* Photo frame */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100 relative">
                    <img 
                      src="/technician_headshot.png" 
                      alt="Verified Lead Technician" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-slate-900 text-sm font-extrabold font-heading">
                        Ramesh Kumar K.
                      </h4>
                      <span className="inline-flex items-center gap-0.5 bg-blue-500/10 border border-blue-500/20 text-[#1565FF] text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                        LEAD TECH
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Senior HVAC & Appliance Specialist
                    </p>
                    
                    {/* Stars ratings */}
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex text-yellow-400">
                        <Star className="w-3 h-3 fill-yellow-400 shrink-0" />
                        <Star className="w-3 h-3 fill-yellow-400 shrink-0" />
                        <Star className="w-3 h-3 fill-yellow-400 shrink-0" />
                        <Star className="w-3 h-3 fill-yellow-400 shrink-0" />
                        <Star className="w-3 h-3 fill-yellow-400 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-800 font-extrabold font-heading ml-0.5">
                        4.9 Rating
                      </span>
                      <span className="text-[9px] text-slate-400 font-medium">
                        (280+ Jobs in Nellore)
                      </span>
                    </div>

                  </div>
                </div>

                {/* Dispatch Progress Timeline */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block text-left">
                    Active Dispatch Journey
                  </span>
                  
                  <div className="space-y-4">
                    {/* Step 1: Request Received */}
                    <div className="flex gap-3 text-left">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-slate-800 text-xs font-bold font-heading">Booking Received</h5>
                        <p className="text-[10px] text-slate-500">Service ticket generated instantly</p>
                      </div>
                    </div>

                    {/* Step 2: Tech Assigned */}
                    <div className="flex gap-3 text-left">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-slate-800 text-xs font-bold font-heading">Technician Matched</h5>
                        <p className="text-[10px] text-slate-500">Lead Tech Ramesh assigned to your job</p>
                      </div>
                    </div>

                    {/* Step 3: En Route */}
                    <div className="flex gap-3 text-left">
                      <div className="w-5 h-5 rounded-full bg-[#1565FF] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(21,101,255,0.2)] animate-pulse">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <div>
                        <h5 className="text-[#1565FF] text-xs font-bold font-heading animate-pulse">Dispatching En Route</h5>
                        <p className="text-[10px] text-slate-500">Technician arriving within 90 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
