import LiveCounter from './aboutComp.jsx';


const About = () => {
    return (
        <div>
            <section className= "p-10">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-800 text-base text-justify">
                        Welcome to LeapBytes, the display page of our firm where we specialize in Python, Scala, AWS, and similar technologies. As a global client-based services provider, we take pride in delivering innovative projects that cater to diverse businesses. Alongside our exceptional services, we offer comprehensive training programs to empower aspiring tech enthusiasts. With a team of dedicated professionals, we are committed to transforming ideas into efficient and scalable solutions, ensuring your success in the ever-evolving digital landscape. Join us at LeapBytes and let's script your success story together!
                    </p>
                </div>
            </section>
            <div className='flex row justify-center'>
                <LiveCounter maxCount={35} text = "Projects"/>
                <LiveCounter maxCount={10} text = "Happy Clients"/>
                <LiveCounter maxCount={5} text = "Years of Experience"/>
            </div>
        </div>
      );
};

export default About;