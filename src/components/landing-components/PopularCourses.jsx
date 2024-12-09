import React, { useEffect, useRef } from "react";
import { NDA, CDS, UPSC, HCS } from "../../utils/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularCourses = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
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
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const courses = [
    {
      title: "NDA",
      image: NDA,
    },
    {
      title: "CDS",
      image: CDS,
    },
    {
      title: "UPSC (CSE)",
      image: UPSC,
    },
    {
      title: "HCS",
      image: HCS,
    },
  ];

  return (
    <div className="relative w-full min-h-screen py-16 px-4 mt-[-50px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="bgvid2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-custom2 to-custom1 opacity-80 z-10"></div>
      <div className="relative z-20 max-w-6xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl font-bold py-2 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent text-center mb-12"
        >
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group overflow-hidden rounded-lg shadow-xl"
            >
              <div className="relative aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {course.title}
                  </h3>
                  <a
                    href="https://ramias.co.in"
                    className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
