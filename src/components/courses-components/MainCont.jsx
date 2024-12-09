import React from 'react'
import { COURSE } from '../../utils/constants';
import { Link } from 'react-router-dom';

const MainCont = () => {

  return (
<div className="relative h-screen w-full flex items-center justify-start bg-cover overflow-show ">
  <div className="absolute z-10 left-16 mt-[-160px]">
    <h1 className="big-heading font-sans text-6xl font-bold leading-tight tracking-wide mb-6">
      <div className="mb-2 bg-gradient-to-l from-orange-500 to-yellow-500 bg-clip-text text-transparent">GS Prelims & Mains Foundation</div>
      <div className="text-white">Course for UPSC CSE 2025</div>
    </h1>

    <button className="bot-button bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-gradient-to-l from-custom1 to-custom2 flex space-x-4 text-custom2 text-2xl font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white border border-transparent">
      <Link to="/courses" className="flex items-center justify-center space-x-2">
        <span>Enroll Now</span>
      </Link>
    </button>
  </div>

  <img
    className="absolute top-0 left-0 object-cover h-full w-full z-0 mt-[-173px]"
    alt="mainpic"
    src={COURSE}
  />
</div>


    )
}

export default MainCont