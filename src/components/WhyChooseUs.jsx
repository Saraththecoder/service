import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Truck, Zap, Shield, Sparkles, HeartHandshake, CircleDollarSign } from 'lucide-react';

const CountUp = ({ to, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end)) return;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  
  const stats = [
    { value: '1000', suffix: '+', label: 'Happy Customers' },
    { value: '5', suffix: '+', label: 'Years Experience' },
    { value: '24', suffix: '/7', label: 'Emergency Support' },
    { value: '100', suffix: '%', label: 'Same Day Resolution' }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Doorstep Service',
      description: 'Zero hassle for you. Our technicians come fully equipped to diagnose and repair your appliances right in the convenience of your Nellore home.',
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      icon: Zap,
      title: 'Fast Response Time',
      description: 'We value your schedule. Experience Nellore’s quickest dispatch, with technicians arriving at your doorstep within 90 minutes of booking confirmation.',
      color: 'text-yellow-600 bg-yellow-50 border-yellow-100'
    },
    {
      icon: CircleDollarSign,
      title: 'Affordable Pricing',
      description: 'No hidden charges or unpleasant surprises. We provide highly transparent upfront estimates before commencing any repair work.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    },
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Your premium appliances are in safe hands. Our background-checked experts undergo rigorous technical training on all modern brands.',
      color: 'text-[#1565FF] bg-blue-50 border-blue-100'
    },
    {
      icon: Sparkles,
      title: 'Genuine Spare Parts',
      description: 'We never compromise on quality. We utilize only 100% authentic manufacturer-certified spare parts accompanied by direct warranties.',
      color: 'text-purple-600 bg-purple-50 border-purple-100'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Satisfaction',
      description: 'Our work doesn’t end with a quick fix. We stand firmly behind our service quality with a dedicated 30-day post-repair support window.',
      color: 'text-pink-600 bg-pink-50 border-pink-100'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="why-us" className="relative py-24 bg-white text-slate-900 border-t border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Core Stats Bar (Clean Frosted slate-50) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-[0_4px_30px_rgba(0,0,0,0.01)] mb-24 relative overflow-hidden">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col justify-center relative z-10 py-4 first:border-0 border-l border-slate-200 max-md:even:border-l-0 max-md:nth-3:border-l-0">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-glow-gradient">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-slate-500 text-xs sm:text-sm font-semibold mt-2 block tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#1565FF] text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            WHY CHOOSE US
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Redefining Appliance Service Standards
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            We take pride in providing a highly premium, reliable experience starting from booking all the way to doorstep execution and warranty coverage.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgba(21, 101, 255, 0.25)' }}
                className="bg-white hover:bg-slate-50 border border-slate-200/80 p-8 rounded-3xl transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col items-start text-left"
              >
                <div className={`p-3 rounded-xl border mb-6 flex items-center justify-center shrink-0 ${feature.color}`}>
                  <Icon className="w-5.5 h-5.5" />
                </div>
                
                <h3 className="font-heading font-extrabold text-lg text-slate-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
