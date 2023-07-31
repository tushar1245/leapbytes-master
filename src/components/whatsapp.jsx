import React from 'react';

const WhatsAppButton = () => {
  
  const whatsappPhoneNumber = '9682512127';
  const whatsappMessage = 'Hello! I have a question for you.';

  const handleWhatsAppClick = () => {
    
    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    
    window.open(whatsappLink, '_blank');
  };

  return (
    
    
    
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4  px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
    >
      <i className="fab fa-whatsapp text-4xl"></i>
            
    </button>
  );
};

export default WhatsAppButton;
