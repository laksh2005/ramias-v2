import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { UserCircle, GraduationCap, Users, Trophy, BookOpen, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CoursesFeatures = () => {
  const headingRef = useRef(null);
  const featureRefs = useRef([]);

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

    featureRefs.current.forEach((ref, index) => {
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

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-yellow-500" />,
      title: "Experience Faculty",
      description: "Learn From Experience Faculty Under The Guidance Of Ram Sir"
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "Regular Doubt Clearing Session",
      description: "The Regular Doubt Solving During The Classes Of Every Subject Help To Draw More Clarity And Ease Preparation Process"
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Continuous Class Test",
      description: "Regular Class Test During And At The End Of Every Subject Conducted To Help Strengthen The Preparation."
    },
    {
      icon: <UserCircle className="w-12 h-12 text-yellow-500" />,
      title: "Extended Learning With LMS",
      description: "An Extended Support Beyond Classroom Through LMS"
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Test Series",
      description: "Prelims And Mains Test Series Designed And Simulated Exam Structure With Relevant Question as Per UPSC Trend"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
      title: "Comprehensive Study Material",
      description: "Well Research And Comprehensive Study Material On All The Subjects Of General Study Prelims & Mains"
    }
  ];

  return (
    <div className=''>
      <div className="relative bg-black/50 min-h-screen py-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden"
        >
          <source src="bgvid1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-70 min-h-screen mt-[-80px] z-10">
          <div className="relative container mx-auto px-4 py-16">
            <div ref={headingRef} className="text-center mb-4">
              <h1 className="text-3xl mt-6 py-2 md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent pb-2 inline-block">
                Get to heights with exclusive course features
              </h1>
            </div>
            <div className="relative z-10 px-4 sm:px-8 py-8 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/40"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-yellow-500/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-yellow-500">
                        {feature.title}
                      </h3>
                      <p className="text-white text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesFeatures;
