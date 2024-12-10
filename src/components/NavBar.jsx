import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import gsap from 'gsap';

const ScrollingText = () => {
  useEffect(() => {
    gsap.to(".scrolling-text", {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="scrolling-text text-sm font-medium w-full md:w-auto overflow-hidden whitespace-nowrap box-border animate-[scroll-left_10s_linear_infinite]">
      <a href="https://ramias.co.in/" className="text-white hover:text-yellow-500 transition">
        New Batches Starting Soon! Enroll now at the best IAS academy in Gurgaon for unmatched
        guidance and results. Call 7419998920 to secure your spot! 📞
      </a>
    </div>
  );
};

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative top-0 left-0 w-full bg-transparent text-white z-[20]">
      <div className="bg-transparent text-white px-32 py-4">
        <div className="container mx-auto flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fa fa-phone text-orange-300"></i>
              <span className="font-semibold text-orange-300">7419998920</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa fa-envelope-o text-orange-300"></i>
              <span className="font-semibold text-orange-300">care@ramias.co.in</span>
            </div>
          </div>

          <div className="flex items-center justify-center px-40 space-x-4">
            <a
              href="https://ramias.co.in/"
              className="bg-yellow-500 text-black font-semibold text-sm py-2 px-6 rounded-full hover:bg-orange-600 transition"
            >
              ANNOUNCEMENTS
            </a>
            <ScrollingText /> {/* Use the ScrollingText component here */}
          </div>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ramiasofficial" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook text-orange-300 transition duration-300 ease-in-out transform hover:scale-105"></i>
            </a>
            <a href="https://x.com/ramiasofficial" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter text-orange-300 transition duration-300 ease-in-out transform hover:scale-105"></i>
            </a>
            <a href="https://www.youtube.com/@ramsir58/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play text-orange-300 transition duration-300 ease-in-out transform hover:scale-105"></i>
            </a>
            <a href="https://www.linkedin.com/company/ram-ias-coaching/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin text-orange-300 transition duration-300 ease-in-out transform hover:scale-105"></i>
            </a>
            <a href="https://www.instagram.com/ramiasofficial" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram text-orange-300 transition duration-300 ease-in-out transform hover:scale-105"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-transparent">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto relative">
          <div className="pl-1">
            <img
              className="w-40 h-auto cursor-pointer"
              alt="logo"
              src={LOGO}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-center space-x-6 sm:space-x-8">
            <ul className="flex space-x-4 sm:space-x-8 items-center">
              <li className="px-4 py-2 text-lg sm:text-xl text-gray-300 font-bold hover:bg-gradient-to-l from-orange-600 to-yellow-500 hover:text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                <a href="/">Home</a>
              </li>
              <li className="px-4 py-2 text-lg sm:text-xl text-gray-300 font-bold hover:bg-gradient-to-l from-orange-600 to-yellow-500 hover:text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                <a href="/courses">Courses</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
