import React from 'react'

const Footer = () => {
  return (
    <div className="text-yellow-500 py-10 bg-custom1 z-[0]">
  <div className="container mx-auto px-8 py-10 flex flex-wrap justify-between items-start p-2 border-t border-t-gray-100">
    <div className="w-full md:w-1/4 mb-6">
      <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
        Our Location & Contact
      </h2>
      <p className="text-yellow text-lg">
        M- 28 Second Floor, in front of STATE BANK OF INDIA, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122001
      </p>
    </div>

    <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
      <div className="flex justify-center space-x-8">
        <a href="tel:7419998920" className="text-white hover:text-white">
          <i className="fa fa-phone text-xl"></i>
          <p className="mt-2 text-yellow-500">74199 98920</p>
        </a>
        <a href="mailto:care@ramias.co.in" className="text-white hover:text-white">
          <i className="fa fa-envelope text-xl"></i>
          <p className="mt-2 text-yellow-500">care@ramias.co.in</p>
        </a>
      </div>
    </div>

    <div className="w-full md:w-1/4 mb-6 text-left">
      <h3 className="font-bold text-xl mb-4 px-4 py-2 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
        Quick Links
      </h3>
      <ul>
        <li className="mb-3">
          <a
            href="/"
            className="px-4 py-2 text-yellow-500 font-bold hover:bg-gradient-to-r from-white to-yellow-500 hover:text-black rounded-full transition duration-300 ease-in-out"
          >
            Home
          </a>
        </li>
        <li className="mb-3">
          <a
            href="/courses"
            className="px-4 py-2 text-yellow-500 font-bold hover:bg-gradient-to-r from-white to-yellow-500 hover:text-black rounded-full transition duration-300 ease-in-out"
          >
            Courses
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div className="text-center text-gray-500 mt-[-40px]">
    ©2024 Ram IAS Academy, All rights reserved.
  </div>
</div>

  )
}

export default Footer