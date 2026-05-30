import React from 'react';
import Services from '../components/Services';

const ServicesPage = ({ onSelectService }) => {
  // JSON-LD Service Schema for all three key appliances
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Appliance Repair Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Door Step Service",
      "image": "https://doorstepsservices.com/logo.png",
      "telephone": "+91-9701308392",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Haranathapuram Main Road, near Children's Park",
        "addressLocality": "Nellore",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "524003",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Nellore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Service & Repair",
            "description": "Expert diagnostics, cooling coils restoration, gas leakage plugging, and high-pressure jet wash wet servicing."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "299",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerator Repair",
            "description": "Single-door, double-door, and side-by-side low cooling diagnostics, compressor fittings, and defrost sensor repairs."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "399",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washing Machine Repair",
            "description": "Drum replacements, spin-cycle issues, motor repairs, intake pump issues, and extreme noise calibrations."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "349",
            "priceCurrency": "INR"
          }
        }
      ]
    }
  };

  return (
    <>
      <title>Professional AC, Fridge & Washing Machine Repair Services in Nellore | Door Step Service</title>
      <meta 
        name="description" 
        content="Choose from our premium doorstep appliance repair solutions in Nellore. Expert certified technicians for AC repair (starts ₹299), Refrigerator diagnostics (starts ₹399), and Washing Machine servicing (starts ₹349)." 
      />
      <meta name="keywords" content="best ac service in nellore, ac repair service nellore, best ac repair in nellore, best refrigerator repair nellore, washing machine repair service nellore, lg ac service nellore, samsung fridge service nellore, ifb washing machine service nellore, appliance service catalog, door step service price, local technician nellore" />
      <link rel="canonical" href="https://doorstepsservices.com/services" />
      <meta name="robots" content="index, follow" />

      {/* OG Tags */}
      <meta property="og:title" content="Professional AC, Fridge & Washing Machine Repair Services in Nellore" />
      <meta property="og:description" content="Transparent pricing, certified local experts, and 100% genuine replacement parts in Nellore. AC starts ₹299, Fridge ₹399, Washing Machine ₹349." />
      <meta property="og:url" content="https://doorstepsservices.com/services" />
      <meta property="og:type" content="website" />

      {/* Dynamic JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div>
        <Services onSelectService={onSelectService} />
      </div>
    </>
  );
};

export default ServicesPage;
