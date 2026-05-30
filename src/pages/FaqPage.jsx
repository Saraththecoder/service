import React from 'react';
import { Helmet } from 'react-helmet-async';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';

const FaqPage = () => {
  // Dynamic JSON-LD FAQ Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your initial diagnostic and service charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our base doorstep diagnostic fee is highly transparent: AC services start at ₹299, refrigerators at ₹399, and washing machines at ₹349. If you proceed with the suggested repair work, the diagnostic fee is completely absorbed, and you only pay for actual parts and labor as per our transparent rate chart."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day doorstep repairs inside Nellore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely! We prioritize urgent restoration requests. Once a booking is generated online or via phone, we dispatch the nearest certified local technician in Nellore to arrive at your door within 90 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Are the replacement spare parts genuine? Do they carry a warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We never compromise on product integrity. We utilize only 100% authentic, manufacturer-certified spare parts accompanied by direct warranties. Additionally, Door Step Service provides a robust 30-day structural guarantee on all labor and repair workmanship."
        }
      },
      {
        "@type": "Question",
        "name": "Which specific locations and surrounding areas in Nellore do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover the entire Nellore city limits and surrounding neighborhoods including Haranathapuram, Vedayapalem, Balaji Nagar, Dargamitta, Podalakur Road, Magunta Layout, Stonehousepet, Santhapet, and adjacent micro-locations."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Door Step Service Nellore</title>
        <meta 
          name="description" 
          content="Find quick answers about our doorstep repair services, pricing, warranty coverage, response times, and technician certifications in Nellore." 
        />
        <meta name="keywords" content="nellore appliance repair faq, door step service cost, ac repair warranty nellore, doorstep dispatch pricing AP" />
        <link rel="canonical" href="https://doorstepsservices.com/faqs" />
        <meta name="robots" content="index, follow" />

        {/* OG Tags */}
        <meta property="og:title" content="Frequently Asked Questions | Door Step Service Nellore" />
        <meta property="og:description" content="Got queries about doorstep appliance repairs in Nellore? Learn about diagnostic fees, warranty policies, certified parts, and response times." />
        <meta property="og:url" content="https://doorstepsservices.com/faqs" />
        <meta property="og:type" content="website" />

        {/* Dynamic JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div>
        <Faq />
        <Testimonials />
      </div>
    </>
  );
};

export default FaqPage;
