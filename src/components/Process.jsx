import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck2, ShieldAlert, BadgeCheck } from 'lucide-react';

const Process = () => {
  
  const steps = [
    {
      num: '01',
      title: 'Easy Booking',
      subtitle: 'STEP ONE',
      description: 'Tap our call button or fill out the booking form online in under 60 seconds.',
      icon: PhoneCall,
      color: 'from-blue-500 to-[#1565FF]',
      borderStyle: 'border-blue-500/20 text-[#1565FF]'
    },
    {
      num: '02',
      title: 'Smart Dispatch',
      subtitle: 'STEP TWO',
      description: 'Our team assigns the highest-rated certified technician in your Nellore neighborhood.',
      icon: CalendarCheck2,
      color: 'from-blue-600 to-[#4A90FF]',
      borderStyle: 'border-blue-600/20 text-blue-600'
    },
    {
      num: '03',
      title: 'Diagnostics',
      subtitle: 'STEP THREE',
      description: 'The technician arrives on time, inspects the issue, and provides a clear, upfront quote.',
      icon: ShieldAlert,
      color: 'from-[#4A90FF] to-[#1565FF]',
      borderStyle: 'border-[#4A90FF]/20 text-[#4A90FF]'
    },
    {
      num: '04',
      title: 'Expert Repair',
      subtitle: 'STEP FOUR',
      description: 'We execute the repair instantly using genuine spares and conduct thorough safety tests.',
      icon: BadgeCheck,
      color: 'from-[#1565FF] to-blue-500',
      borderStyle: 'border-[#1565FF]/20 text-emerald-500'
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-white text-[#0f172a] border-t border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#1565FF] text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            HOW IT WORKS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Our Simple & Seamless Journey
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            From the initial touchpoint to final resolution, experience complete transparency and elite craftsmanship.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Desktop connecting static progress line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[56px] left-[12%] right-[12%] h-[3px] bg-slate-100 z-0 rounded-full">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-[#1565FF] to-[#4A90FF] rounded-full" 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Grid Layout of steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  
                  {/* Icon Circle Hub */}
                  <div className="relative flex items-center justify-center w-28 h-28 mb-6 group-hover:scale-105 transition-all duration-300">
                    
                    {/* Ring background */}
                    <div className="absolute inset-0 rounded-full bg-slate-50 border-2 border-slate-100 group-hover:border-[#1565FF]/30 transition-colors duration-300 shadow-sm" />

                    {/* Step Icon inside (high contrast light) */}
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-slate-200/80 group-hover:border-[#1565FF]/20 transition-colors duration-300 relative z-10 shadow-sm">
                      <Icon className="w-6 h-6 text-[#1565FF]" />
                    </div>

                    {/* Step Number Display Badge */}
                    <div className={`absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-gradient-to-tr ${step.color} p-[1px] shadow-sm flex items-center justify-center z-20`}>
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-extrabold text-[#1565FF]">
                          {step.num}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Copy content details */}
                  <div className="relative z-10 px-2 lg:px-0 space-y-2">
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#4A90FF] block">
                      {step.subtitle}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-800 group-hover:text-[#1565FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 font-normal">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
