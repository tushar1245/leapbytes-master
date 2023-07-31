import React from 'react';

const DecoratedBox = ({text, heading}) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-500 w-auto rounded-lg p-6 shadow-lg mx-5 mb-4  hover:bg-gray-700  hover:cursor-pointer transform hover:scale-105 transition-all">
      <h2 className="text-3xl font-bold text-gray-700 mb-5 border-b-2 border-white">{heading}</h2>
      <p className="text-black text-justify">
        {text}
      </p>
    </div>
  );
};

export default DecoratedBox;
