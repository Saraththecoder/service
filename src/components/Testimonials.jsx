import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const reviews = [
    {
      name: 'Ravi Kumar K.',
      location: 'Haranathapuram, Nellore',
      service: 'AC Service & Gas Leak Fix',
      rating: 5,
      comment: 'Extremely professional AC servicing! I booked a deep jet wash service. The technician arrived within 1 hour, diagnosed the gas leak in the condenser, fixed it right in front of me, and charged very reasonably. Highly recommended for Nellore residents!',
      date: '3 days ago'
    },
    {
      name: 'Priya Deviprasad',
      location: 'Vedayapalem, Nellore',
      service: 'Washing Machine Drum Repair',
      rating: 5,
      comment: 'My front-load washing machine was vibrating violently and making loud noises during the spin cycle. The technician quickly identified that the drum bearing had worn out. He replaced it with a genuine part and now it runs as quiet as new. Amazing doorstep service!',
      date: '1 week ago'
    },
    {
      name: 'Dr. Srinivas Reddy',
      location: 'Magunta Layout, Nellore',
      service: 'Double Door Refrigerator Cooling Fix',
      rating: 5,
      comment: 'Excellent and highly skilled team. Our double-door refrigerator stopped cooling suddenly on a hot afternoon. Called Oryon and they dispatched a technician in no time. He replaced the faulty defrost thermostat instantly. Transparent upfront pricing.',
      date: '2 weeks ago'
    },
    {
      name: 'Narendra B.',
      location: 'Balaji Nagar, Nellore',
      service: 'Multiple AC Routine Maintenance',
      rating: 5,
      comment: 'We booked routinely scheduled servicing for 3 AC units. The technicians arrived on time with proper equipment, covered our floors/walls to prevent dirty spray, and executed deep jet cleaning flawlessly. Superb attention to detail!',
      date: '1 month ago'
    }
  ];

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Slider animation configuration
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 bg-slate-50 text-[#0f172a] border-t border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#1565FF] text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            VERIFIED REVIEWS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            What Our Nellore Clients Say
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Read real feedback from homeowners, doctors, and businesses in Nellore who choose Oryon for doorstep appliance repair.
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          
          <div className="relative overflow-hidden min-h-[340px] sm:min-h-[260px] flex items-center justify-center p-0.5 rounded-3xl">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between"
              >
                
                {/* Review Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    
                    {/* User Avatar Circle */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1565FF] to-[#4A90FF] flex items-center justify-center text-white text-base font-extrabold font-heading shadow-md">
                      {reviews[activeIndex].name.split(' ').map(n=>n[0]).join('')}
                    </div>

                    <div className="text-left">
                      <h4 className="text-slate-900 text-base font-bold font-heading">
                        {reviews[activeIndex].name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {reviews[activeIndex].location}
                      </p>
                    </div>

                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 shrink-0" />
                    ))}
                  </div>
                </div>

                {/* Main Quote comment */}
                <div className="relative mb-6">
                  <MessageSquareQuote className="w-14 h-14 text-slate-100 absolute -top-5 -left-4 pointer-events-none" />
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed relative z-10 font-normal italic">
                    "{reviews[activeIndex].comment}"
                  </p>
                </div>

                {/* Footer details tag */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[10px] font-extrabold text-[#1565FF]">
                  <span className="uppercase tracking-widest bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded-md">
                    {reviews[activeIndex].service}
                  </span>
                  <span className="text-slate-400 font-medium">
                    {reviews[activeIndex].date}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 hover:border-[#1565FF]/40 text-slate-400 hover:text-[#1565FF] bg-white flex items-center justify-center transition-all duration-300 active:scale-90 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots */}
            <div className="flex gap-2.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 transition-all duration-300 cursor-pointer rounded-full ${
                    index === activeIndex ? 'w-8 bg-[#1565FF]' : 'w-2.5 bg-slate-200 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 hover:border-[#1565FF]/40 text-slate-400 hover:text-[#1565FF] bg-white flex items-center justify-center transition-all duration-300 active:scale-90 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
