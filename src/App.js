import React, { useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import ImageCarousel from './components/carousel.jsx';
import TextIntro from './components/textIntro.jsx';
import Separator from './components/separator.jsx';
import About from './components/about.jsx'
import MovingClients from './components/clients.jsx';
import TechSol from './components/techsolution.jsx';
import TechStack from './components/techstack.jsx';
import ContactUs from './components/contact.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Footer from './components/footer.jsx';
import WhatsAppButton from './components/whatsapp.jsx';






function App() {
  
  useEffect(() => {
    const handleScroll = () => {
      const elementsToZoom = document.querySelectorAll('.zoom-on-scroll'); // Replace this with the class name of elements you want to zoom out on scroll
      elementsToZoom.forEach((element) => {
        const boundingRect = element.getBoundingClientRect();
        const { top, bottom } = boundingRect;

        // Check if the element is partially or fully in the viewport
        if (top <= window.innerHeight && bottom >= 0) {
          element.classList.add('zoom-out');
        } else {
          element.classList.remove('zoom-out');
        }
      });
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  
  return (
    <div className='bg-opacity-100 bg-center bg-cover bg-gradient-to-r from-teal-200 to-purple-300 bg-fixed'>
      <Navbar />
      <div className='pt-16' id="111">
        <div className="flex">
          <div className="w-1/2">
            
            <ImageCarousel />
          </div>
          <div className="w-1/2">
          <TextIntro />
          </div>
        </div>
      </div>
      <div className='pt-15' id = "112" > 
      <Separator text = "About" />
      <About />
      </div>
      
     
      <MovingClients />

      <div className='pt-16' id='113'>
        <Separator text = "Tech Solutions" />
      </div>
      
      <TechSol />

      <div className='mt-10'>
        <Separator text = "Tech Stack" />
      </div>
      <div className='mt-10 zoom-on-scroll'>
        <TechStack />
      </div>
      <div className='mt-10'>
        <Separator text = "Contact Us" />
      </div>
      <ContactUs />
      <WhatsAppButton />
      <Footer />
    </div>
      
    
  );
}

export default App;
