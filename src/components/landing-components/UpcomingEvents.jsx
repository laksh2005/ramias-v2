import React, { useEffect, useRef } from "react";
import { HARYANA, WEBINAR } from "../../utils/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UpcomingEvents = () => {
  const eventRefs = useRef([]);

  useEffect(() => {
    eventRefs.current.forEach((event, index) => {
      gsap.fromTo(
        event,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: event,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const events = [
    {
      title: "Haryana Civil Services Test Series",
      image: HARYANA,
      text: "Available In Online/Offline Mode",
      desc: "Haryana Civil Services & Prelims Test Series 2024",
    },
    {
      title: "IAS Rambaan Webinar 2.0 2025",
      image: WEBINAR,
      text: "Coming Soon",
      desc: "Unlock expert strategies, proven techniques, and actionable insights to ace UPSC 2025.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-custom2 to-custom1 py-16 px-4 mt-[-0px] mb-[-250px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              ref={(el) => (eventRefs.current[index] = el)}
              className="relative group overflow-hidden rounded-lg shadow-xl"
            >
              <div className="relative aspect-video">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">
                    {event.title}
                  </h3>
                  <a
                    href="https://ramias.co.in"
                    className="px-6 py-2 bg-gray-400 p-8 m-8 text-gray-900 rounded-full font-semibold 
                             hover:bg-gray-300 transition-colors duration-300"
                  >
                    {event.desc}
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

export default UpcomingEvents;
