import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SIR } from "../../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="inset-0 bg-gradient-to-b from-custom2 to-custom1 min-h-screen relative mt-[-40px] mb-[-40px]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-4">
          <h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent pb-2 inline-block"
            ref={headingRef}
          >
            About RAM IAS
          </h1>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img
            src={SIR}
            alt="RAM IAS Background"
            className="w-96 object-cover opacity-10 rounded-3xl"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-8 py-8 pt-20">
          <div
            className="bg-transparent rounded-xl p-6 sm:p-8 max-w-4xl mx-auto"
            ref={contentRef}
          >
            <p className="text-white text-2xl sm:text-lg leading-relaxed">
              Ram IAS Academy, founded in 2015 by Mr. Ram Chandra (Ram Sir), is
              a prominent institute for Civil Services Examination (CSE)
              preparation. Guided by the philosophy{" "}
              <span className="italic font-semibold text-yellow-300">
                "sa vidya ya vimuktaye"
              </span>{" "}
              (knowledge is what liberates), the academy aims to help students
              achieve their dreams of joining the Civil Services, including
              I.A.S., I.F.S., I.P.S., and other Central/State administrations.
              Over the years, it has successfully helped numerous students
              secure{" "}
              <span className="italic font-semibold text-yellow-300">
                top positions
              </span>{" "}
              in the Civil Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
