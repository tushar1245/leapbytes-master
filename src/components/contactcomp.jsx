import React from 'react';

const CompanyInfo = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 ">LeapBytes</h2>
      <p className="mb-4 text-justify mt-5">
      Welcome to LeapBytes, your ultimate destination for innovative technology solutions and startup support. With years of experience in the Information Technology (IT) industry, LeapBytes has been catering to businesses of all sizes and industries with comprehensive IT solutions. Our seasoned team specializes in crafting customized web applications using Agile approaches, DevOps, and cutting-edge technologies like Graph. With a skilled team, dedication to high-quality code, and a streamlined process that eliminates unnecessary overheads, we ensure that your business reaches new heights of success in the digital realm. Join us at LeapBytes and let's embark on a journey of transformative possibilities together.
      </p>
      <div className="flex items-center justify-center space-x-4 mt-10">
        <div className="">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-green-600 text-4xl"></i>
            </a>
        </div>
        <div className="">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-green-600 text-4xl"></i>
            </a>
        </div>
        <div className="">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-green-600 text-2xl"></i>
            </a>
        </div>
        <div className="">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-green-600 text-4xl"></i>
            </a>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default CompanyInfo;
