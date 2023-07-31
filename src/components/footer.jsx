import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">© Copyright 2023 LeapBytes. All rights reserved.</p>
          <div className="ml-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-200 mx-1"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-200 mx-1"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-200 mx-1"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
