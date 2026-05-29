import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const MapsEmbed = () => {
  return (
    <section id="contact" className="relative py-24 bg-slate-50 text-slate-900 border-t border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#1565FF] text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            LOCATE US
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Our Service Area in <span className="text-glow-gradient">Nellore</span>
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            We operate fully equipped service vans across Nellore, delivering rapid doorstep restoration whenever you book support.
          </p>
        </div>

        {/* Dual Column Layout: Contact Stats and Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Detail Panels */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Location Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 text-left flex items-start gap-4 hover:border-[#1565FF]/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-[#1565FF] shrink-0 shadow-sm">
                <MapPin className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="text-slate-800 text-sm font-bold font-heading">Dispatch Hub Address</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  DOOR STEP SERVICE<br />
                  Haranathapuram Main Road, near Children's Park,<br />
                  Nellore, Andhra Pradesh 524003, India
                </p>
              </div>
            </motion.div>

            {/* Helpline Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 text-left flex items-start gap-4 hover:border-[#1565FF]/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-[#1565FF] shrink-0 shadow-sm">
                <Phone className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="text-slate-800 text-sm font-bold font-heading">Service Helpline</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed font-semibold">
                  Phone: <a href="tel:9701308392" className="text-slate-800 hover:text-[#1565FF] transition-colors">9701308392</a><br />
                  WhatsApp: <a href="https://wa.me/919701308392" className="text-slate-800 hover:text-[#1565FF] transition-colors">9701308392</a>
                </p>
              </div>
            </motion.div>

            {/* Operation Hours Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 text-left flex items-start gap-4 hover:border-[#1565FF]/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-[#1565FF] shrink-0 shadow-sm">
                <Clock className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="text-slate-800 text-sm font-bold font-heading">Working Hours</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Monday – Sunday: 7:00 AM – 9:00 PM<br />
                  <span className="text-[#1565FF] font-extrabold text-[11px] uppercase tracking-wider block mt-1">
                    Emergency Dispatch: 24 Hours Active
                  </span>
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Map Embed (Standard High-Contrast and Clean) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 w-full min-h-[350px] bg-white border border-slate-200/80 rounded-3xl overflow-hidden p-2 shadow-sm relative"
          >
            <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-extrabold text-[#1565FF] shadow-sm tracking-wider uppercase">
              Nellore City Bounds
            </div>

            {/* Natural Legible Map without grayscale filter */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-slate-100">
              <iframe
                title="Door Step Service Area Map Nellore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123843.5186043125!2d79.91986424368945!3d14.444747738221665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf230782e4b3d%3A0xe54e6022e03943a5!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1717013893041!5m2!1sen!2sin"
                className="w-full h-full min-h-[360px] border-0 select-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MapsEmbed;
