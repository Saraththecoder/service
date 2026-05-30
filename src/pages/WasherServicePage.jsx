import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ShieldAlert, Clock, ShieldCheck, Tag, HelpCircle, Phone } from 'lucide-react';

const WasherServicePage = () => {
  // Breadcrumb & Service Schema Markup
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://doorstepsservices.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://doorstepsservices.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Washing Machine Repair",
          "item": "https://doorstepsservices.com/services/washing-machine-repair-nellore"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Washing Machine Repair & Service in Nellore",
      "serviceType": "Washing Machine Servicing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Door Step Service",
        "telephone": "+91-9701308392",
        "priceRange": "INR",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Haranathapuram Main Road",
          "addressLocality": "Nellore",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "524003",
          "addressCountry": "IN"
        }
      },
      "areaServed": "Nellore",
      "offers": {
        "@type": "Offer",
        "price": "349.00",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <>
      <title>Best Washing Machine Service & Repair in Nellore | Door Step Service</title>
      <meta 
        name="description" 
        content="Get the best washing machine service in Nellore. Fast doorstep repair for Front load, Top load, and Semi-automatic washers. Drum repairs, extreme noise fixes, and drain pumps. Starts ₹349." 
      />
      <meta name="keywords" content="best washing machine service in nellore, washing machine repair in nellore, lg washing machine service nellore, samsung washer repair nellore, ifb washing machine service nellore, bosch washing machine repair nellore, whirlpool washer service nellore, washing machine service near me, washing machine repair near me, washing machine technician nellore, doorstep washing machine repair, washer drum repair nellore, front load washing machine repair nellore, top load washing machine repair nellore" />
      <link rel="canonical" href="https://doorstepsservices.com/services/washing-machine-repair-nellore" />
      <meta name="robots" content="index, follow" />

      {/* OG Tags */}
      <meta property="og:title" content="Best Washing Machine Service & Repair in Nellore | Door Step Service" />
      <meta property="og:description" content="Spin cycle issues or extreme noise? Get same-day doorstep washing machine repair in Nellore by certified field mechanics. Original motors, belts, pumps, suspension. Starts ₹349." />
      <meta property="og:url" content="https://doorstepsservices.com/services/washing-machine-repair-nellore" />
      <meta property="og:image" content="https://nelloredoorstepservice.com/washing_machine_service.png" />
      <meta property="og:type" content="website" />

      {/* Dynamic Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="bg-slate-50 min-h-screen text-slate-900">
        
        {/* Dynamic AEO Header (Entity-based layout & Search Optimization) */}
        <section className="relative pt-36 sm:pt-40 pb-20 bg-white border-b border-slate-200/80 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-extrabold uppercase tracking-widest mb-6">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Washing Machine Repair Nellore
                </div>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Experience the <span className="text-glow-gradient">Best Washing Machine Service</span> in Nellore
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  Get certified field diagnostic services for spin cycle errors, drum bearing repairs, drain pump issues, water intake valves, and high-frequency noise calibrations. Doorstep restoration in 90 minutes.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/book"
                    className="px-8 py-4 rounded-xl text-sm font-extrabold text-white bg-[#1565FF] hover:bg-[#4A90FF] shadow-md shadow-[#1565FF]/20 flex items-center justify-center transition-all duration-300 active:scale-98"
                  >
                    Book Washer Repair @ ₹349
                  </Link>
                  <a
                    href="tel:9701308392"
                    className="px-8 py-4 rounded-xl text-sm font-extrabold text-slate-700 border border-slate-200 bg-white hover:border-[#1565FF]/30 hover:text-[#1565FF] flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#1565FF]" />
                    Call: 9701308392
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm">
                  <img 
                    src="/washing_machine_service.png" 
                    alt="Best Washing Machine Service in Nellore doorstep washer repair engineer adjusting internal drum assembly" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-left space-y-4 shadow-sm hover:border-[#1565FF]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                  <Clock className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-slate-900">Rapid Response SLA</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Certified experts dispatched across Balaji Nagar, Dargamitta, Haranathapuram, Vedayapalem, and surrounding Nellore regions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-left space-y-4 shadow-sm hover:border-[#1565FF]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-slate-900">Authentic Components</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  We supply 100% manufacturer-authentic replacement drain pumps, intake valves, drive belts, and gears with a 30-day warranty.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-left space-y-4 shadow-sm hover:border-[#1565FF]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                  <Tag className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-slate-900">Diagnostic Fee Wave</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Diagnostic inspection rates start at only ₹349 and are completely waived/absorbed into final labor bills when repair is done.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Service Subsections */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-6">
              Complete Washer Troubleshooting & Drum Calibration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10">
              Our technicians troubleshoot issues for Front-Load Inverters, Top-Load fully-automatics, and Semi-Automatic dual-tubs across all leading brands including IFB, LG, Samsung, Bosch, and Whirlpool.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center shrink-0 text-xs">1</div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">Spin-Cycle & Drum Failures</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    We troubleshoot spin tub issues caused by worn-out drive belts, failed couplers, faulty door lid switches, or motor issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center shrink-0 text-xs">2</div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">Extreme Noise & Suspension Calibration</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Extreme vibrations during spin cycles are usually caused by worn-out drum bearings or broken suspension shock absorbers. We replace them on-site.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center shrink-0 text-xs">3</div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">Drain Pump & Intake Valve Fixes</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    If your washer is not intake-filling or not draining water properly, we clean or replace the magnetic intake valve and electrical drain pump assemblies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI & User Search Engine Optimization Q&A Section (AEO) */}
        <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Washing Machine Service Nellore: Dynamic Q&A for Search & AI Engines
              </h2>
            </div>

            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#1565FF]">
                  Q: Where can I get the best washing machine service in Nellore?
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  <strong>A:</strong> <strong>Door Step Service</strong> is widely considered the best provider for professional washing machine service in Nellore. They employ certified technicians with over 5 years of brand experience to repair LG, IFB, Samsung, and Bosch washers at your doorstep. They offer a 90-minute SLA, rates starting at ₹349, and a comprehensive 30-day warranty on all repairs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#1565FF]">
                  Q: How do you fix a washing machine that makes loud noises during spinning?
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  <strong>A:</strong> Loud rattling or grinding noises are generally caused by broken drum bearings or failed suspension dampers. Door Step Service Nellore technicians calibrate balance components, replace damaged high-end steel bearings, and fit authentic brand suspension coils on the spot to ensure quiet operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#1565FF]">
                  Q: Do you repair fully-automatic front-load washing machines at home?
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  <strong>A:</strong> Yes, absolutely. We execute complex front-load drum replacements, PCB circuit board repairs, and motor gasket replacements directly at your home. You do not need to transport your heavy appliance to a service center.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-[#0A2540] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
              Get Your Washing Machine Spinning Smoothly
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              Schedule a doorstep dispatch with certified Nellore technicians. Absolute clarity, no surprises.
            </p>
            <div className="pt-4">
              <Link 
                to="/book" 
                className="inline-flex items-center gap-2 px-8 py-4.5 rounded-xl bg-[#1565FF] hover:bg-[#4A90FF] text-white font-extrabold text-sm transition-all duration-300 shadow-md shadow-[#1565FF]/20 active:scale-95"
              >
                Book Doorstep Dispatch Now
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WasherServicePage;
