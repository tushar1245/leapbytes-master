import React, { useEffect, useState } from 'react';
import DecoratedBox from './techsolBox';
const TechSol = () => {

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const elementsToMoveUp = document.querySelectorAll('.move-up-on-scroll'); // Replace this with the class name of elements you want to move up on scroll
  //     elementsToMoveUp.forEach((element) => {
  //       const boundingRect = element.getBoundingClientRect();
  //       const { top, bottom } = boundingRect;

  //       // Check if the element is partially or fully in the viewport
  //       if (top <= window.innerHeight && bottom >= 0) {
  //         element.classList.add('move-up');
  //       } else {
  //         element.classList.remove('move-up');
  //       }
  //     });
  //   };

  //   // Add the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Remove the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const [showMore, setShowMore] = useState(false);
  // const totalComponents = showMore ? 6 : 2;



  // const handleClickShowMore = () => {
  //   setShowMore(true);
  // };

  // const handleClickHide = () => {
  //   setShowMore(false);
  // };
  const initialComponentsToShow = 6;

  const [componentsToShow, setComponentsToShow] = useState(initialComponentsToShow);

  const handleShowMore = () => {
    setComponentsToShow((prevCount) => prevCount + 9); // Show 3 more components when "Show more" is clicked
  };

  const handleShowLess = () => {
    setComponentsToShow(initialComponentsToShow); // Show the initial number of components when "Show less" is clicked
  };

  const data = [
    { title: 'Python', info: 'Python is the heartbeat of LeapBytes, driving innovation and efficiency in every solution we create. Our Python experts leverage the language simplicity and versatility to craft robust applications and software. From web development to data analysis, Python rich ecosystem allows us to deliver tailored solutions that align perfectly with your business needs. Embracing Python power, we pave the way for transformative possibilities and position your business at the forefront of technological advancements.'},
    { title: 'Scala', info: 'Scala is a key enabler of cutting-edge solutions at LeapBytes. With Scala functional programming capabilities, we develop high-performance and scalable applications. As our language of choice, Scala empowers us to craft efficient and elegant solutions that drive business growth. By leveraging Scala expressive syntax and compatibility with Java, we unlock new dimensions of innovation, ensuring your business stays ahead in the dynamic digital landscape.' },
    { title: 'Machine Learning', info: 'Machine Learning is at the heart of LeapBytes transformative solutions. Utilizing ML algorithms, we empower businesses to extract valuable insights from data, optimize processes, and make informed decisions. With our expertise, clients unlock the true potential of AI-driven technology, gaining a competitive edge in their respective industries.' },
    { title: 'AWS', info: 'AWS Services are the backbone of LeapBytes cloud-powered innovations. Leveraging the scalable infrastructure and extensive offerings of Amazon Web Services, we deliver secure, reliable, and cost-efficient solutions. From cloud migration to serverless architecture, our expertise in AWS ensures our clients digital transformation journeys are seamless and future-proof.' },
    {title: 'DevOps', info: 'DevOps is at the core of our development philosophy at LeapBytes. With a seamless integration of development and operations, we deliver continuous, high-quality software solutions. Our DevOps experts streamline workflows, automate processes, and ensure rapid deployment, reducing time-to-market and enhancing collaboration. Embracing a culture of agility and innovation, we empower businesses to stay ahead in the competitive digital landscape with efficient and reliable DevOps practices.'},
    {title: 'Cloud Computing', info: 'Cloud computing is the backbone of innovation at LeapBytes. Leveraging the power of cloud infrastructure, we deliver scalable and cost-effective solutions to businesses worldwide. Our cloud experts design and implement cloud-native applications, ensuring flexibility, security, and high availability. With cloud computing, we enable businesses to optimize resources, drive efficiency, and embark on a transformative journey to success in the ever-evolving digital world.'},
    {title: 'Tableau', info: 'At LeapBytes, we harness the potential of Tableau to unlock powerful data visualization and analytics for your business. Our Tableau experts create interactive and insightful dashboards, enabling you to explore data with ease. With Tableau intuitive interface and real-time data updates, we empower you to make data-driven decisions. Trust LeapBytes for Tableau solutions that drive business growth and propel you towards success.'},
    { title: 'Fullstack Development', info: 'Full-stack development is our forte at LeapBytes. With expertise in front-end and back-end technologies, we create end-to-end solutions that seamlessly integrate user interfaces with robust server-side functionalities. Our full-stack prowess empowers businesses to deliver exceptional user experiences and achieve their goals with unmatched efficiency and effectiveness.' },
    { title: 'Databases', info: 'Databases form the bedrock of data management at LeapBytes. With our expertise in various database technologies, we ensure secure, reliable, and efficient storage and retrieval of data. From relational databases like MySQL and PostgreSQL to NoSQL databases like MongoDB and Cassandra, we tailor the database solutions to suit the unique needs of each project. Trust LeapBytes for database solutions that lay a solid foundation for your business success.' },
    { title: 'Microsoft Azure', info: 'With a forward-looking approach, LeapBytes harnesses the capabilities of Microsoft Azure to empower businesses on their digital journey. From cloud migration to building scalable applications, our expertise in Azure ensures seamless integration and robust solutions. As a Microsoft partner, we leverage Azure powerful ecosystem to deliver secure, reliable, and innovative services, driving your business towards a future of endless possibilities.' },
    { title: 'Salesforce', info: 'At LeapBytes, we unlock the potential of Salesforce to transform your customer experience. As certified Salesforce experts, we tailor CRM solutions to streamline sales, marketing, and service processes. From customization to integration, we ensure seamless connectivity across your organization, empowering you to build strong customer relationships and drive sustainable growth. Trust LeapBytes for Salesforce solutions that elevate your business to new heights of success.' }
  ]

  return (
    
    
    <div>
        
      
      <div className="grid grid-cols-3  gap-5 mt-10">
        {data.slice(0, componentsToShow).map((data, index) => (
          <DecoratedBox key={index} heading={data.title} text={data.info} />
        ))}
      </div>
      <div className="text-center">
      {componentsToShow < data.length ? (
        <button onClick={handleShowMore} className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          Show more
        </button>
      ) : (
        <button onClick={handleShowLess} className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          Show less
        </button>
      )}
  </div>
      
    </div>

        
        
        
        
    //      <div className="grid grid-cols-3 gap-4">
    //     {data.from({ length: totalComponents }).map((data, index) => (
    //       <DecoratedBox key={index} heading = {data.title} text = {data.info} />
    //     ))}
    //   </div> }
    //     {<div className="container mx-auto p-4 flex row justify-center">
    //         <DecoratedBox heading = "Python" text = " Python is the cornerstone of our innovative solutions. Leveraging the language's versatility and robustness, we create cutting-edge applications and software that drive business growth, ensuring our clients stay at the forefront of technological advancements."/>
    //         <DecoratedBox heading = "Scala" text = "Scala takes center stage at LeapBytes, empowering our team to craft high-performance and scalable solutions. Harnessing the language's functional programming capabilities, we deliver advanced applications that elevate businesses, ensuring they thrive in the dynamic digital landscape."/>
    //         <DecoratedBox heading = "Machine Learning" text = "Machine Learning is at the heart of LeapBytes' transformative solutions. Utilizing ML algorithms, we empower businesses to extract valuable insights from data, optimize processes, and make informed decisions. With our expertise, clients unlock the true potential of AI-driven technology, gaining a competitive edge in their respective industries."/>
    //     </div>
    //     <div className="container mx-auto p-4 flex row justify-center">
    //         <DecoratedBox heading = "AWS" text = "AWS Services are the backbone of LeapBytes' cloud-powered innovations. Leveraging the scalable infrastructure and extensive offerings of Amazon Web Services, we deliver secure, reliable, and cost-efficient solutions. From cloud migration to serverless architecture, our expertise in AWS ensures our clients' digital transformation journeys are seamless and future-proof."/>
    //         <DecoratedBox heading = "Fullstack Development" text = "Full-stack development is our forte at LeapBytes. With expertise in front-end and back-end technologies, we create end-to-end solutions that seamlessly integrate user interfaces with robust server-side functionalities. Our full-stack prowess empowers businesses to deliver exceptional user experiences and achieve their goals with unmatched efficiency and effectiveness."/>
    //         <DecoratedBox heading = "SQL" text = "SQL is the backbone of data management at LeapBytes. With our proficiency in SQL, we harness the power of databases to organize, retrieve, and manipulate data efficiently. From crafting complex queries to optimizing database performance, our SQL expertise enables businesses to make data-driven decisions and unlock valuable insights that drive success.     "/>
    //     </div> 
    //     {!showMore ? (
    //     <button onClick={handleClickShowMore} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
    //       Show more
    //     </button>
    //   ) : (
    //     <button onClick={handleClickHide} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
    //       Hide
    //     </button>
    //   )}
    // </div>
  );
};

export default TechSol;
