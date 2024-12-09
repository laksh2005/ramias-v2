import { useEffect, useRef } from 'react';
import '@dotlottie/player-component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className='mt-[-175px]'>
      <div className="px-8 py-20 font-sans bg-gradient-to-b from-custom2 to-custom1">
        <div className="card-container flex flex-col z-10 space-y-8">
          <div
            className="card flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-8"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="feature-img flex w-full md:w-1/3 mx-8 justify-center">
              <dotlottie-player
                src="https://lottie.host/3d91ed3c-30f5-45b5-8703-266e035823a0/0CfXxT5Nrg.json"
                background="transparent"
                speed="1"
                style={{ width: '200px', height: '200px' }}
                loop
                autoplay
              />
            </div>
            <div className="z-10 feature-card transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 w-full md:w-2/3 p-8 text-center rounded-3xl">
              <h2 className="feature text-4xl p-2 md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text mb-8 relative z-20">
                9+ Years
              </h2>
              <p className="feature-desc text-white text-lg md:text-xl">
                of Excellence
              </p>
            </div>
          </div>

          <div
            className="card flex flex-col md:flex-row-reverse items-center w-full space-y-4 md:space-y-0 md:space-x-reverse md:space-x-8"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="feature-img flex w-full md:w-1/3 mx-8 justify-center">
              <dotlottie-player
                src="https://lottie.host/7e790c90-5970-4b4d-8d8c-faeb80135040/1SrLYKqGQC.json"
                background="transparent"
                speed="1"
                style={{ width: '200px', height: '200px' }}
                loop
                autoplay
              />
            </div>
            <div className="z-10 feature-card transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 w-full md:w-2/3 p-8 text-center rounded-3xl">
              <h2 className="feature text-4xl md:text-6xl p-2 font-bold bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text mb-10 leading-tight">
                2000+
              </h2>
              <p className="feature-desc text-white text-lg md:text-xl">
                Students Community
              </p>
            </div>
          </div>

          <div
            className="card flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-8"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="feature-img flex w-full md:w-1/3 mx-8 justify-center">
              <dotlottie-player
                src="https://lottie.host/6ad5e39a-ae20-4250-b3b1-f7187f412f90/8pN6j52WzB.json"
                background="transparent"
                speed="1"
                style={{ width: '200px', height: '200px' }}
                loop
                autoplay
              />
            </div>
            <div className="z-10 feature-card transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 w-full md:w-2/3 p-8 text-center rounded-3xl">
              <h2 className="feature text-4xl md:text-6xl p-2 font-bold bg-gradient-to-l from-white to-yellow-500 text-transparent bg-clip-text mb-8">
                1500+
              </h2>
              <p className="feature-desc text-white text-lg md:text-xl">
                Success Stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
