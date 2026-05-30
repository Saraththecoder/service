import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your initial diagnostic and service charges?',
      answer: 'Our base doorstep diagnostic fee is highly transparent: AC services start at ₹299, refrigerators at ₹399, and washing machines at ₹349. If you proceed with the suggested repair work, the diagnostic fee is completely absorbed, and you only pay for actual parts and labor as per our transparent rate chart.'
    },
    {
      question: 'Do you offer same-day doorstep repairs inside Nellore?',
      answer: 'Yes, absolutely! We prioritize urgent restoration requests. Once a booking is generated online or via phone, we dispatch the nearest certified local technician in Nellore to arrive at your door within 90 minutes.'
    },
    {
      question: 'Are the replacement spare parts genuine? Do they carry a warranty?',
      answer: 'We never compromise on product integrity. We utilize only 100% authentic, manufacturer-certified spare parts accompanied by direct warranties. Additionally, Door Step Service provides a robust 30-day structural guarantee on all labor and repair workmanship.'
    },
    {
      question: 'Which specific locations and surrounding areas in Nellore do you service?',
      answer: 'We cover the entire Nellore city limits and surrounding neighborhoods including Haranathapuram, Vedayapalem, Balaji Nagar, Dargamitta, Podalakur Road, Magunta Layout, Stonehousepet, Santhapet, and adjacent micro-locations.'
    },
    {
      question: 'Are your field technician staff background-checked and certified?',
      answer: 'Your safety and comfort are paramount. Every field technician in the Door Step Service team undergoes a stringent multi-point background check and is fully certified, possessing a minimum of 5 years of brand-specific experience in diagnosing complex high-end appliances.'
    },
    {
      question: 'How do I schedule an emergency or late-night service request?',
      answer: 'For emergency or rapid dispatch after standard operating hours, we suggest clicking our floating Call button directly to speak with our 24/7 support dispatch coordinator or sending a high-priority WhatsApp chat detailing the issue.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="relative pt-36 sm:pt-40 pb-24 bg-white text-slate-900 border-t border-b border-slate-100">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#1565FF] text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight"
          >
            Frequently Answered Questions
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4">
            Got queries regarding warranties, bookings, or pricing? Find rapid answers right here.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-350 ${
                  isOpen ? 'border-[#1565FF]/45 bg-slate-50 shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none transition-colors group cursor-pointer"
                >
                  <span className={`font-heading font-extrabold text-sm sm:text-base pr-4 transition-colors duration-300 ${
                    isOpen ? 'text-[#1565FF]' : 'text-slate-700 group-hover:text-slate-950'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? 'border-[#1565FF]/30 bg-blue-500/5 text-[#1565FF]' : 'border-slate-200 text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
