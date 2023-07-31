import React from 'react';

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="relative border-4 mx-4 border-teal-900 overflow-hidden hover:border-transparent hover:shadow-xl hover:scale-105 hover:z-10 transition-all">
      <img
        src={imageUrl}
        alt="Image"
        className="block w-full h-48 object-cover"
      />
    </div>
  );
};

export default ImageComponent;