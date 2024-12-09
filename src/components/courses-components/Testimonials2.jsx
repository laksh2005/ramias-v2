import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials2 = () => {
  const headingRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    testimonialRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const testimonials = [
    {
      name: "Sneha Gupta",
      post: "Successful UPSC Candidate",
      text: "Joining Ram IAS Academy was the best decision I made for my UPSC journey. The structured approach to syllabus completion and the quality mock tests helped me understand the exam pattern thoroughly. The motivational sessions kept me going even during tough times.",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/upsc/Screenshot_2024-12-06_113651-3465230.png",
    },
    {
      name: "Raghav Verma",
      post: "UPSC Topper 2023",
      text: "The faculty at Ram IAS Academy is truly exceptional. They simplified even the toughest concepts and were always approachable for doubts. The personalized feedback on my essay writing and mock interviews proved to be a game-changer.",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/upsc/Screenshot_2024-12-06_113859-3465355.png",
    },
    {
      name: "Arjun Patel",
      post: "Civil Service Aspirant",
      text: "The crash course at Ram IAS Academy provided me with everything I needed to prepare effectively in a short time. The study materials, daily quizzes, and previous year question analysis were incredibly useful. Highly recommended",
      image: "https://content.app-sources.com/s/867156994188144021/uploads/upsc/bo-2101683.jpg",
    },
    {
      name: "Ananya Sharma",
      post: "UPSC Aspirant",
      text: "Ram IAS Academy provided me with a clear roadmap for my UPSC preparation. The comprehensive study materials, insightful lectures, and regular tests helped me build confidence and stay on track. Thanks to their guidance, I cleared my prelims on the first attempt!",
      image: "https://content.app-sources.com/s/278668856424966711/uploads/upsc/Screenshot_2024-12-06_113356-3465075.png",
    },
  ];

  return (
    <div className="relative bg-black/50 min-h-screen py-16 mt-[-110px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="bgvid1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-32 z-20">
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
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="flex justify-center"
            >
              <div
                className={`bg-gradient-to-br from-gray-800 to-black rounded-xl p-8 shadow-lg shadow-yellow-500/30 transform hover:scale-105 transition duration-300 border border-yellow-500/30 hover:border-yellow-500 max-w-md w-full flex flex-col gap-4`}
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
                    {testimonial.post}
                  </div>
                  <p className="text-white text-sm mt-4 italic leading-relaxed">
                    "{testimonial.text}"
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

export default Testimonials2;
