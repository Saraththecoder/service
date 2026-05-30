import React from 'react';
import { Helmet } from 'react-helmet-async';
import MapsEmbed from '../components/MapsEmbed';

const ContactPage = () => {
  // Dynamic JSON-LD LocalBusiness Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Door Step Service",
    "image": "https://doorstepsservices.com/logo.png",
    "telephone": "+91-9701308392",
    "email": "support@doorstepsservices.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Haranathapuram Main Road, near Children's Park",
      "addressLocality": "Nellore",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "524003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.4447,
      "longitude": 79.9198
    },
    "url": "https://doorstepsservices.com/contact",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us & Dispatch Hub Location | Door Step Service Nellore</title>
        <meta 
          name="description" 
          content="Get in touch with Door Step Service in Nellore. View our dispatch address near Haranathapuram, call our emergency 24-hr helpline 9701308392, or request service vans." 
        />
        <meta name="keywords" content="contact door step service nellore, ac repair phone number nellore, fridge technician contact nellore, doorstep service dispatch office" />
        <link rel="canonical" href="https://doorstepsservices.com/contact" />
        <meta name="robots" content="index, follow" />

        {/* OG Tags */}
        <meta property="og:title" content="Contact Us & Dispatch Hub Location | Door Step Service Nellore" />
        <meta property="og:description" content="Reach our doorstep repair dispatch center in Nellore. Active call/WhatsApp support (9701308392) and 24-hr emergency response services." />
        <meta property="og:url" content="https://doorstepsservices.com/contact" />
        <meta property="og:type" content="website" />

        {/* Dynamic JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div>
        <MapsEmbed />
      </div>
    </>
  );
};

export default ContactPage;
