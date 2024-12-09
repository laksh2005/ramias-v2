import React, { useEffect, useRef } from "react";
import { INTRO } from "../../utils/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const headingRef = useRef(null);
  const textBoxRef = useRef(null);

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

    gsap.fromTo(
      textBoxRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: textBoxRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="inset-0 bg-gradient-to-b from-custom2 to-custom1 min-h-screen relative mt-[-173px] mb-[-40px] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div ref={headingRef} className="text-center mb-4">
          <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent pb-2 inline-block">
            Comprehensive Offline and Online Programs
          </h1>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-0 rounded-3xl pt-32">
          <img
            src={INTRO}
            alt="intro"
            className="w-104 px-[370px] object-cover opacity-30 rounded-3xl"
          />
        </div>

        <div ref={textBoxRef} className="relative z-10 px-4 sm:px-8 py-8 pt-20">
          <div className="bg-transparent rounded-xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
            <p className="text-white text-2xl leading-relaxed mb-6 text-center">
              Our expert faculty, led by the renowned{" "}
              <span className="font-semibold text-orange-400">Ram Sir</span>,
              brings unmatched expertise and dedication to guide you through
              every stage of your{" "}
              <span className="font-semibold text-orange-400">
                UPSC preparation
              </span>
              . With{" "}
              <span className="font-semibold text-orange-400">
                personalized mentorship and regular doubt-clearing sessions
              </span>
              , we ensure you stay ahead in achieving your goal of cracking the
              UPSC exam.
            </p>
            <h3 className="text-white text-2xl font-bold mb-4 text-center">
              Here's what you'll get:
            </h3>
            <ul className="list-disc list-inside text-white text-2xl leading-relaxed text-left">
              <li>
                <span className="font-semibold text-orange-400">
                  Comprehensive study materials
                </span>{" "}
                tailored for the UPSC syllabus.
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Mock tests and past years'
                </span>{" "}
                question papers for hands-on exam experience.
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Daily practice quizzes
                </span>{" "}
                to enhance accuracy, speed, and confidence.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
