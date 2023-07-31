import React from 'react';

const ContactInfo = () => {
  return (
    <div className="text-center mt-20">
      <div className="flex items-center justify-center space-x-4">
        <a href="mailto:your.email@example.com">
          <i className="far fa-envelope text-green-600 text-2xl"></i>
        </a>
        <h2 className='mb-4'>
            naveen@gmail.com
        </h2>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <a href="tel:+11234567890">
          <i className="fas fa-phone-alt text-green-500 text-2xl"></i>
        </a>
        <h2 className='mb-4'>
            +91 1234567890
        </h2>
      </div>
      
    </div>
  );
};

export default ContactInfo;
