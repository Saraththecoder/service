import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, AlertCircle, CheckCircle2, ShieldCheck, ArrowRight, Loader2, Wind, Disc, Check } from 'lucide-react';

const InquiryForm = ({ selectedService, resetSelectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    issue: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync selected service from other sections
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
      if (resetSelectedService) resetSelectedService();
    }
  }, [selectedService]);

  const nelloreLocations = [
    'Haranathapuram',
    'Vedayapalem',
    'Balaji Nagar',
    'Dargamitta',
    'Podalakur Road',
    'Magunta Layout',
    'Stonehousepet',
    'Santhapet',
    'Others / Nellore Surroundings'
  ];

  // Visual Appliance Selector options for highly intuitive tapping
  const appliances = [
    {
      id: 'ac',
      enLabel: 'AC Service',
      icon: Wind,
      color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200'
    },
    {
      id: 'refrigerator',
      enLabel: 'Refrigerator',
      icon: RefrigeratorIcon,
      color: 'bg-blue-500/10 text-blue-600 border-blue-200'
    },
    {
      id: 'washing-machine',
      enLabel: 'Washing Machine',
      icon: Disc,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200'
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter mobile number';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please tap to select an appliance';
    }
    
    if (!formData.location) {
      newErrors.location = 'Please select your area location';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectAppliance = (applianceId) => {
    setFormData(prev => ({ ...prev, service: applianceId }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate server dispatch call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      location: '',
      issue: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="book-appointment" className="relative py-24 bg-slate-50 text-slate-900 border-t border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Easy instructions */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#1565FF] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm" >
              FREE BOOKING
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Easy 2-Step Repair Dispatch
            </h2>
            
            <div className="space-y-4 mt-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                <strong>Simple Booking:</strong> 1. Tap the icon of your broken appliance, 2. Enter your name and mobile number.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                A certified local engineer will arrive at your doorstep in Nellore within 90 minutes.
              </p>
            </div>

            <div className="space-y-6 mt-8 w-full max-w-md">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 items-center shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-200 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#1565FF]" />
                </div>
                <div className="text-left">
                  <h4 className="text-slate-800 text-sm font-bold font-heading">No Booking Fee</h4>
                  <p className="text-slate-500 text-xs">Registration is free. Pay only after diagnostics.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 items-center shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-200 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#1565FF]" />
                </div>
                <div className="text-left">
                  <h4 className="text-slate-800 text-sm font-bold font-heading">Certified Vetted Techs</h4>
                  <p className="text-slate-500 text-xs">Background-checked, highly-rated Nellore experts.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Inquiry Form Card */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="relative w-full max-w-2xl bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="visual-booking-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="font-heading font-extrabold text-xl text-slate-800">
                        Request Service
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Tap your appliance, enter details, and book your technician.
                      </p>
                    </div>

                    {/* --- STEP 1: VISUAL APPLIANCE TAP CARDS --- */}
                    <div className="space-y-3">
                      <label className="text-xs font-extrabold text-[#1565FF] uppercase tracking-wider block">
                        1. Tap Your Appliance
                      </label>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {appliances.map((app) => {
                          const Icon = app.icon;
                          const isSelected = formData.service === app.id;
                          
                          return (
                            <div
                              key={app.id}
                              onClick={() => handleSelectAppliance(app.id)}
                              className={`relative p-2.5 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer select-none transition-all duration-300 border ${
                                isSelected
                                  ? 'bg-blue-500/5 border-[#1565FF] shadow-sm text-[#1565FF] scale-[1.03]'
                                  : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-200 hover:text-slate-800'
                              }`}
                            >
                              {/* Selection Checked Overlay */}
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#1565FF] flex items-center justify-center text-white text-[10px] shadow-sm">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              )}

                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${
                                isSelected ? 'bg-[#1565FF] text-white' : 'bg-white text-slate-400 border border-slate-100 shadow-sm'
                              }`}>
                                <Icon className="w-5 h-5" />
                              </div>

                              <span className="text-[10px] font-extrabold uppercase block tracking-wider font-heading">
                                {app.enLabel}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {errors.service && (
                        <motion.span
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs font-semibold flex items-center gap-1.5 mt-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.service}
                        </motion.span>
                      )}
                    </div>

                    {/* --- STEP 2: PHONE & NAME --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`w-full bg-slate-50 border ${
                              errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#1565FF]/60'
                            } rounded-xl py-3.5 pl-11 pr-4 text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#1565FF]/30 transition-all duration-300 placeholder:text-slate-400`}
                          />
                        </div>
                        {errors.name && (
                          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Phone input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength="10"
                            placeholder="10-Digit Mobile Number"
                            className={`w-full bg-slate-50 border ${
                              errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#1565FF]/60'
                            } rounded-xl py-3.5 pl-11 pr-4 text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#1565FF]/30 transition-all duration-300 placeholder:text-slate-400`}
                          />
                        </div>
                        {errors.phone && (
                          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Dropdown: Location Area in Nellore */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Select Location in Nellore
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${
                          errors.location ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#1565FF]/60'
                        } rounded-xl py-3.5 px-4 text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#1565FF]/30 transition-all duration-300 cursor-pointer`}
                      >
                        <option value="">Select Area</option>
                        {nelloreLocations.map((loc) => (
                          <option key={loc} value={loc} className="bg-white">
                            {loc}
                          </option>
                        ))}
                      </select>
                      {errors.location && (
                        <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.location}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative py-4 rounded-xl text-sm font-extrabold text-white overflow-hidden group flex items-center justify-center gap-2 shadow-md shadow-[#1565FF]/10 active:scale-98 transition-transform disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-[#1565FF] hover:bg-[#4A90FF] transition-all duration-300" />
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Booking in Progress...</span>
                        </>
                      ) : (
                        <>
                          <span>BOOK DIAGNOSTIC VISIT NOW</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                  </motion.form>
                ) : (
                  
                  /* Large visual Success panel overlay (Prinstine White ticket layout) */
                  <motion.div
                    key="visual-success"
                    className="py-10 px-4 text-center flex flex-col items-center justify-center space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <motion.div 
                      className="relative flex items-center justify-center w-20 h-20 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-600 shadow-sm mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-extrabold text-2xl text-slate-800">
                        Service Booking Successful!
                      </h3>
                    </div>
                    
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-normal">
                      Hi <strong className="text-slate-800">{formData.name}</strong>, our local Nellore technician is matched. We will call you at <strong className="text-slate-800">{formData.phone}</strong> in under 15 minutes!
                    </p>

                    <div className="w-full max-w-xs p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-500 font-bold">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span>Area Location:</span>
                        <strong className="text-slate-800">{formData.location}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Response SLA:</span>
                        <strong className="text-emerald-600 font-extrabold">90 Minutes (Same Day)</strong>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg border border-slate-200 hover:border-[#1565FF]/40 text-slate-500 hover:text-[#1565FF] bg-white text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      Submit Another Request
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Refrigerator Icon drawer
const RefrigeratorIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" />
    <path d="M5 10h14" />
    <path d="M9 5v3" />
    <path d="M9 13v4" />
  </svg>
);

export default InquiryForm;
