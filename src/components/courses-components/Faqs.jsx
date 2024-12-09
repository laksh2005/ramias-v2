import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const faqsData = [
    {
        question: "What is the best way to start preparing for UPSC exam?",
        answer: "Start by building a strong foundation with the General Studies Foundation Course. Focus on understanding the syllabus and regularly take mock tests.",
    },
    {
        question: "Do you offer both online and offline classes for UPSC preparation?",
        answer: "Yes, we provide both online and offline courses, including interactive doubt-solving sessions and mock tests.",
    },
    {
        question: "How do I enroll in the UPSC preparation courses?",
        answer: "You can easily enroll by visiting our website and selecting the course that suits you, then proceeding with registration.",
    },
    {
        question: "How long does it take to prepare for the UPSC exam?",
        answer: "On average, aspirants take 1-2 years to prepare. It depends on factors such as your understanding of the syllabus, the time you can dedicate to daily study, and your previous knowledge.",
    },
    {
        question: "Can I balance my job with UPSC preparation?",
        answer: "Yes, many aspirants successfully prepare for the UPSC exam while working. It requires a disciplined study schedule, effective time management, and dedication. ",
    },
]

const Faqs = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".faq-item", {
      opacity: 0,
      y:50,
      duration: 4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".faqs-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  const [openindex, setopenIndex] = useState(null);

    const toggleFAQ=(index)=>{
        setopenIndex(openindex === index ? null : index);
    };

  return (
    <div className="faqs-component px-8 py-20 flex flex-col items-center bg-gradient-to-b from-custom1 to-custom2">
        <h1 className="title big-text font-bold text-4xl text-center mb-20 bg-gradient-to-t from-yellow-500 to-white text-transparent bg-clip-text">
            <span className="text-orange-500">F</span>requently
            <span className="text-orange-500"> A</span>sked 
            <span className="text-orange-500"> Q</span>uestion<span className="text-white">s</span>
        </h1>

        <div className="px-10 w-7/12 ques-container">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`mb-5 rounded-full  transition-transform transform hover:-translate-y-3 hover:shadow-lg duration-300 text-white border ${openindex === index ? 'border-yellow-500' : 'border-orange-500'}`}
          >
            <div className="ques-box flex justify-between px-6 py-1 m-4 cursor-pointer space-y-3" onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-bold text-lg flex-1 text-left my-auto">{faq.question}</h2>
              <span className="text-2xl text-white font-bold mx-4">
                {openindex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`px-6 py-3 overflow-hidden transition-all duration-900 ease-in-out ${
                openindex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-semibold m-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
</div>
  )
}

export default Faqs