import React from 'react';

const Contact = () => {
  return (
<div className="relative min-h-screen flex items-center justify-center p-4">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="bgvid2.mp4" type="video/mp4" />
  </video>

  <div className="relative w-full max-w-5xl backdrop-blur-sm rounded-3xl overflow-hidden z-10">
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 p-8 bg-gradient-to-b from-custom2 to-custom1 bg-opacity-20 rounded-lg">
        <h2 className="text-4xl text-center font-bold mb-6 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
          Reach Us!
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-black bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-black bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-black bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
              Courses
            </label>
            <select
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-black text-gray-200 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              required
            >
              <option value="">Select Course</option>
              <option value="UPSC">UPSC</option>
              <option value="CDS">CDS</option>
              <option value="NDA">NDA</option>
              <option value="HCS">HCS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
              Brief Message
            </label>
            <textarea
              placeholder="Brief Message"
              rows={2}
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-black bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 hover:bg-yellow-700 transition-colors duration-300 font-medium  rounded-full"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-3/12 md:w-1/2 bg-gradient-to-t from-custom2 to-custom1 p-8 text-white flex flex-col justify-center bg-opacity-20">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-l from-white to-yellow-500 bg-clip-text text-transparent">
          Curious about our programs?
        </h2>
        <p className="text-lg mb-6 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
          Reach out to us to get all your queries cleared. Our team is here to help you make the right choice for your future.
        </p>
        <div className="space-y-4">
          <p className="flex items-center gap-2">
            <span className="text-yellow-500">✉</span> care@ramias.co.in
          </p>
          <p className="flex items-center gap-2">
            <span className="text-yellow-500">📱</span> +917419998920
          </p>
          <p className="flex items-center gap-2">
            <span className="text-yellow-500">📍</span> M- 28 Second Floor, in front of STATE BANK OF INDIA, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122001
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
  );
};

export default Contact;