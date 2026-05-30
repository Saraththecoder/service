import React from 'react';
import InquiryForm from '../components/InquiryForm';

const BookPage = ({ selectedService, resetSelectedService }) => {
  return (
    <>
      <title>Book Certified Doorstep Appliance Repair in Nellore | Door Step Service</title>
      <meta 
        name="description" 
        content="Schedule your same-day doorstep technician dispatch in Nellore. Simple 2-step booking for AC service, refrigerator diagnostics, and washing machine drum repairs. Waived diagnostic fee." 
      />
      <meta name="keywords" content="book ac service nellore, schedule fridge repair nellore, washing machine technician request, doorstep appliance dispatch nellore" />
      <link rel="canonical" href="https://oryontechnologies.net/book" />
      <meta name="robots" content="index, follow" />

      {/* OG Tags */}
      <meta property="og:title" content="Book Certified Doorstep Appliance Repair in Nellore" />
      <meta property="og:description" content="Get your home appliance serviced inside Nellore city borders within 90 minutes. Transparent rates, certified field engineers, and 30-day structural warranty." />
      <meta property="og:url" content="https://oryontechnologies.net/book" />
      <meta property="og:type" content="website" />

      <div>
        <InquiryForm 
          selectedService={selectedService} 
          resetSelectedService={resetSelectedService} 
        />
      </div>
    </>
  );
};

export default BookPage;
