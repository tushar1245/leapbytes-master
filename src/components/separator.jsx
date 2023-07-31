import React from 'react';

const Separator = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex-grow h-px bg-slate-400"></div>
      <div className="px-4 text-black font-bold text-2xl">{text}</div>
      <div className="flex-grow h-px bg-slate-400"></div>
    </div>
  );
};

export default Separator; 