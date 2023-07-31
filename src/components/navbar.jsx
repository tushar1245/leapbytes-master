import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };
  
  
    return (
    <nav className="bg-green-500 fixed w-full top-0 z-50" id="111">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-gray-700 text-4xl font-bold ">L</span>
            <span className="text-gray-700  text-3xl font-bold ">eap</span>
            <span className="text-gray-700  text-4xl font-bold ">B</span>  
            <span className="text-gray-700  text-3xl font-bold ">ytes</span>          
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-900 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#112"
                className="text-gray-900 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <div
                className="relative inline-block text-left z-10"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <button
                  type="button"
                  className="text-gray-900 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Solutions
                  <svg
                    className="w-4 h-4 inline-block ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute bg-white py-2 w-36 rounded-md shadow-lg"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-300"
                    >
                      Python
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-300"
                    >
                      Machine Learning
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-300"
                    >
                      Microsoft Azure
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-300"
                    >
                      Scala
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-300"
                    >
                      DevOps
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-900 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Partners
              </a>
              <a
                href="#113"
                className="text-gray-900 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#114"
                className="text-gray-900 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
