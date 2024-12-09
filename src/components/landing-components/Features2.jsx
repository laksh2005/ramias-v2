import { useEffect, useRef } from "react";
import gsap from "gsap";
import { RESULT } from "../../utils/constants";
import { UserCircle, GraduationCap, Users, Trophy, BookOpen, Clock } from "lucide-react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Features = () => {
  const headingRef = useRef(null);
  const featureRefs = useRef([]);

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

    featureRefs.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: feature,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: <UserCircle className="w-12 h-12 text-yellow-500" />,
      title: "Personalized Mentorship And Support",
      description:
        "Receive individual support and feedback to overcome challenges and improve continuously.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-yellow-500" />,
      title: "Tailored, Comprehensive Preparation",
      description:
        "Comprehensive and tailored coaching services for UPSC, NDA, and HCS.",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Supportive Community And Alumni Network",
      description:
        "Join a network of alumni and peers for guidance, collaboration, and motivation.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
      title: "Expert Guidance And Leadership",
      description:
        "Learn from experienced educators like Ram Sir, who guide you through the UPSC exam system.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Proven Success Stories from Ram IAS Academy",
      description:
        "Our students consistently rank at the top, showcasing the effectiveness of our program.",
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "Flexible Learning Schedule",
      description:
        "Balance your preparation with work or studies through our adaptable class timings and online resources.",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-custom2 to-custom1 min-h-screen relative mt-0">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-4">
          <h1
            ref={headingRef}
            className="text-4xl mt-6 py-2 md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent pb-2 inline-block"
          >
            What makes us unique
          </h1>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img
            src={RESULT}
            alt="result"
            className="w-full m-10 object-cover opacity-20 rounded-3xl"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-8 py-8 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 
                         transform hover:scale-105 transition-all duration-300
                         border border-yellow-500/20 hover:border-yellow-500/40"
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
  );
};

export default Features;
