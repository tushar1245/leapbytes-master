import Slider from 'react-slick';
// import '../carousel.css';
const ImageCarousel = () => {
  

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // Auto slides to be enabled
        autoplaySpeed: 3000, 
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const imageUrls = [
    'https://thumbs.dreamstime.com/z/career-growth-development-advancement-design-information-related-to-professional-d-illustration-isolated-white-105447871.jpg?w=768',
    'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*r_Rf_XgFzYMoS9vO.jpg',
    ];

    return (
    
        <div className="p-4">
            <div className="carousel-container">
            <Slider {...settings}>
            {imageUrls.map((url, index) => (
                <div key={index} className="w-full">
                <img src={url} alt={`Image ${index + 1}`} className="w-full rounded-r-full" />
                </div>
            ))}
            </Slider>
        </div>
      </div>
  



        //   <Slider {...settings}>
        //     {imageUrls.map((url, index) => (
        //       <div key={index} className="w-full">
        //         <img src={url} alt={`Image ${index + 1}`} className="w-full rounded" />
        //       </div>
        //     ))}
        //   </Slider>
        
      );
    };

export default ImageCarousel;
