import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';

const Home = ({ onBookClick }) => {
  // JSON-LD Organization Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Door Step Service",
    "alternateName": "Nellore Door Step Service",
    "url": "https://oryontechnologies.net",
    "logo": "https://oryontechnologies.net/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9701308392",
      "contactType": "customer service",
      "areaServed": "Nellore",
      "availableLanguage": ["English", "Telugu", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/doorstepservicenellore",
      "https://instagram.com/doorstepservicenellore"
    ]
  };

  return (
    <>
      <title>Best Doorstep Appliance Repair Service in Nellore | Door Step Service</title>
      <meta 
        name="description" 
        content="Looking for the best AC service in Nellore, or refrigerator and washing machine repair? Door Step Service provides certified expert field technicians, 100% genuine parts, same-day 90-min doorstep response, and a 30-day warranty." 
      />
      <meta name="keywords" content="best ac service in nellore, best refrigerator service in nellore, best washing machine service in nellore, ac repair in nellore, fridge repair nellore, washing machine repair nellore, lg ac service nellore, samsung fridge service nellore, doorstep appliance repair nellore, local technician nellore, ac service near me, fridge repair near me, washing machine repair near me, doorstep service nellore, voltas ac repair nellore, ifb washing machine service nellore" />
      <link rel="canonical" href="https://oryontechnologies.net/" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Best Doorstep Appliance Repair Service in Nellore | Door Step Service" />
      <meta property="og:description" content="Certified AC, Refrigerator, and Washing Machine repair in Nellore. Fast same-day doorstep diagnostics, genuine parts, and 30-day work warranty." />
      <meta property="og:url" content="https://oryontechnologies.net/" />
      <meta property="og:image" content="https://oryontechnologies.net/logo.png" />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Doorstep Appliance Repair Service in Nellore | Door Step Service" />
      <meta name="twitter:description" content="Certified AC, Refrigerator, and Washing Machine repair in Nellore. Same-day doorstep diagnostics, genuine parts, and 30-day warranty." />
      <meta name="twitter:image" content="https://oryontechnologies.net/logo.png" />

      {/* Dynamic JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Main Page Layout */}
      <div>
        {/* Elite Hero with Vetted Technician matching */}
        <Hero onBookClick={onBookClick} />
        
        {/* Core trust indicators */}
        <WhyChooseUs />
        
        {/* Highlights horizontal timeline */}
        <Process />

        {/* Verified slider reviews */}
        <Testimonials />

        {/* FAQ Accordion List */}
        <Faq />
      </div>
    </>
  );
};

export default Home;
