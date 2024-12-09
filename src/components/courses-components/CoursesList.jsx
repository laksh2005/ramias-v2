import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CoursesList = () => {
  const courseRefs = useRef([])

  useEffect(() => {
    courseRefs.current.forEach((ref, index) => {
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
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <div className="px-8 py-20 font-sans bg-gradient-to-t from-custom2 to-custom1">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent pb-2 inline-block">
          COURSES
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 max-w-7xl mx-auto">
        <div
          ref={(el) => (courseRefs.current[0] = el)}
          className="bg-black text-white rounded-2xl p-8 transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-2">Sanjeevani</h2>
          <p className="text-gray-400 mb-4">(Inclusive Comprehensive Course)</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Duration:</span>
              <span className="font-semibold">18 Months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Offline Fee:</span>
              <span className="font-semibold">₹1,50,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Online Fee:</span>
              <span className="font-semibold">₹80,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Batch Date:</span>
              <span className="font-semibold">Dec 16, 2024</span>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (courseRefs.current[1] = el)}
          className="bg-black text-white rounded-2xl p-8 transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-2">Nalanda</h2>
          <p className="text-gray-400 mb-4">(Foundation Course)</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Duration:</span>
              <span className="font-semibold">3 Years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Offline Fee:</span>
              <span className="font-semibold">₹3,00,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Online Fee:</span>
              <span className="font-semibold">₹2,00,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Batch Date:</span>
              <span className="font-semibold">Dec 16, 2024</span>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (courseRefs.current[2] = el)}
          className="bg-black text-white rounded-2xl p-8 transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-2">CSAT</h2>
          <p className="text-gray-400 mb-4">(Civil Services Aptitude Test)</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Duration:</span>
              <span className="font-semibold">3 Months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Offline Fee:</span>
              <span className="font-semibold">₹30,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Online Fee:</span>
              <span className="font-semibold">₹20,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Batch Date:</span>
              <span className="font-semibold text-gray-500">Coming Soon</span>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (courseRefs.current[3] = el)}
          className="bg-black text-white rounded-2xl p-8 transform transition-transform duration-300 hover:-translate-y-1 border hover:border-orange-500 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-2">Optional Course</h2>
          <p className="text-gray-400 mb-4">(for UPSC Aspirant)</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Duration:</span>
              <span className="font-semibold text-gray-500">Coming Soon</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Offline Fee:</span>
              <span className="font-semibold text-gray-500">Coming Soon</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Online Fee:</span>
              <span className="font-semibold text-gray-500">Coming Soon</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Batch Date:</span>
              <span className="font-semibold text-gray-500">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesList
