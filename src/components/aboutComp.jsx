import React, { useState, useEffect } from 'react';

const IncrementingCounter = ({ maxCount , text}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    let canIncrement = true; // To track if the counting can be performed

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && canIncrement) {
          canIncrement = false; // Disable counting to prevent multiple increments
          setIsVisible(true); // Mark the component as visible
          setCount(0); // Reset the count to 0
          const interval = setInterval(() => {
            setCount((prevCount) => {
              const nextCount = prevCount + 1;
              return nextCount <= maxCount ? nextCount : maxCount;
            });
          }, 40);

          // Clear the interval and enable counting after some time (e.g., 5 seconds)
          setTimeout(() => {
            clearInterval(interval);
            canIncrement = true; // Enable counting again
          }, 5000); // Adjust the time (in milliseconds) as needed
        } else if (!entry.isIntersecting) {
          setIsVisible(false); // Mark the component as not visible
        }
      });
    }, options);

    observer.observe(document.getElementById('counter-box'));

    return () => observer.disconnect();
  }, [maxCount]);

  return (
    <div className="bg-teal-400 border border-green-700 p-4 rounded mx-8" id="counter-box" style={{ width: '270px' }}>
      <p className="text-center text-gray-700 text-4xl font-bold">{isVisible ? count : maxCount}+</p>
      <p className="text-center text-gray-700 text-2xl font-bold mt-2">{text}</p>
    </div>
  );
};

export default IncrementingCounter;
