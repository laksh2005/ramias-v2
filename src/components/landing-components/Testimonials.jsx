import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const headingRef = useRef(null);
  const testimonialsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: testimonial,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const testimonials = [
    {
      name: "Deepak Tiwari",
      stars: "⭐⭐⭐⭐⭐",
      quote: "Awesome place to study for IAS aspirants in India. Ram Sir is one of the best and finest teachers in the IAS Test prep domain",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/Testimonials/unnamed_5-0801233.png",
    },
    {
      name: "Varun Kohli",
      stars: "⭐⭐⭐⭐⭐",
      quote: "The personalized attention and detailed study material helped me crack the exam. Forever grateful to Ram Sir and the entire team.",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/Testimonials/unnamed-0798248.png",
    },
    {
      name: "Pallavi Chauhan",
      stars: "⭐⭐⭐⭐⭐",
      quote: "The strategic guidance and mock tests were instrumental in my success. Ram IAS Academy truly understands what aspirants need.",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/Testimonials/unnamed_3-0799991.png",
    },
    {
      name: "Prashant Anand",
      stars: "⭐⭐⭐⭐⭐",
      quote: "Joining Ram IAS Academy was the best decision of my preparation journey. The faculty's dedication is unmatched.",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/Testimonials/unnamed_4-0801233.png",
    },
  ];

  return (
    <div className="relative bg-black/50 min-h-screen py-16">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="bgvid1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      <div className="relative container mx-auto px-4 z-20">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl py-2 font-bold text-center mb-16 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent"
        >
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialsRef.current[index] = el)}
              className="flex justify-center"
            >
              <div
                className={`
                  bg-gradient-to-br from-gray-800 to-black rounded-xl
                  p-8 shadow-lg shadow-yellow-500/30 transform hover:scale-105 transition duration-300
                  border border-yellow-500/30 hover:border-yellow-500 max-w-md w-full flex flex-col gap-4
                `}
              >
                <div className="flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover shadow-lg shadow-yellow-500/30"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-yellow-400">
                    {testimonial.name}
                  </h3>
                  <div className="text-yellow-500 text-lg mt-2">
                    {testimonial.stars}
                  </div>
                  <p className="text-white text-sm mt-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
