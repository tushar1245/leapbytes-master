import React from 'react';
import CompanyInfo from './contactcomp';
import ContactInfo from './contactDetail';
import ContactForm from './contactform';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-center space-x-6">
        <div className="w-full md:w-1/3">
          <CompanyInfo />
        </div>
        <div className="w-full md:w-1/3">
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
