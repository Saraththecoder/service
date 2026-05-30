import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Services = ({ onSelectService }) => {
  
  const services = [
    {
      id: 'ac',
      title: 'AC Service & Repair',
      description: 'Expert diagnostics, cooling coils restoration, gas leakage plugging, and high-pressure jet wash wet servicing.',
      details: [
        'Complete split AC deep jet wash service',
        'Refrigerant gas charging & leak fix',
        'PC Board (PCB) troubleshooting'
      ],
      price: 'From ₹299',
      image: '/ac_service.png',
      badgeColor: 'bg-cyan-500/10 text-cyan-700 border-cyan-200',
      accentColor: 'border-l-cyan-500'
    },
    {
      id: 'refrigerator',
      title: 'Refrigerator Repair',
      description: 'Single-door, double-door, and side-by-side low cooling diagnostics, compressor fittings, and defrost sensor repairs.',
      details: [
        'Defrost heater & sensor repair',
        'Compressor fittings & gas refilling',
        'Thermostat testing & gaskets check'
      ],
      price: 'From ₹399',
      image: '/refrigerator_service.png',
      badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-200',
      accentColor: 'border-l-blue-500'
    },
    {
      id: 'washing-machine',
      title: 'Washing Machine Repair',
      icon: null,
      description: 'Drum replacements, spin-cycle issues, motor repairs, intake pump issues, and extreme noise calibrations.',
      details: [
        'Spin drum & structural bearings repair',
        'Water intake and drain pump fixes',
        'Suspension struts & noise calibration'
      ],
      price: 'From ₹349',
      image: '/washing_machine_service.png',
      badgeColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
      accentColor: 'border-l-indigo-500'
    }
  ];

  return (
    <section id="services" className="relative pt-36 sm:pt-40 pb-28 bg-slate-50 text-[#0f172a]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block in high contrast */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A2540]/5 border border-[#1565FF]/20 text-[#1565FF] text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Premium Repair & Maintenance
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Choose your appliance type below. All repairs are executed at your doorstep by licensed local field engineers.
          </p>
        </div>

        {/* Services Cards with Real Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => {
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectService(service.id)}
                className="group flex flex-col justify-between bg-white border border-slate-200/80 rounded-3xl transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(21,101,255,0.08)] overflow-hidden cursor-pointer"
              >
                
                {/* 1. Large High-Definition Service Image Frame */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle glass overlay banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 shadow-sm text-xs font-bold text-slate-800">
                    Verified Job
                  </div>
                </div>

                {/* 2. Text Details & Bullet Items */}
                <div className="p-7 flex-grow flex flex-col justify-between">
                  
                  <div className="text-left space-y-4">
                    
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 group-hover:text-[#1565FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="h-[1px] bg-slate-100 w-full" />

                    {/* Vetted features checklist */}
                    <ul className="space-y-3 pt-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                          <div className="w-4.5 h-4.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3.5]" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* 3. High-Contrast Footer Call to Action */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                        DIAGNOSTICS
                      </span>
                      <span className="text-base font-extrabold text-slate-800 font-heading">
                        {service.price}
                      </span>
                    </div>

                    <motion.div className="flex items-center gap-1.5 text-xs font-extrabold text-[#1565FF]">
                      <span className="bg-[#1565FF]/10 border border-[#1565FF]/20 group-hover:bg-[#1565FF] group-hover:text-white px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-1.5">
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </span>
                    </motion.div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
