"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

interface Testimonial {
  id: number
  name: string
  content: string
  rating: number
}

export default function Skills() {
  // Tech logos with SVG and names
  const techLogos = [
    {
      name: "HTML",
      svg: (
        <svg viewBox="0 0 32 32" className="w-12 h-12  mb-2">
          <path fill="#E44D26" d="M6 28L4 3h24l-2 25-10 3-10-3z"></path>
          <path fill="#F16529" d="M26 5H16v24.5l8-2.5 2-22z"></path>
          <path fill="#ffffff" d="M16 13.5h-4l-.5-5.5h4.5v-4h-8l.5 5 1 11h6.5v-4h-4l-.3-3.5h4.3v-3z"></path>
          <path fill="#ebebeb" d="M16 24h-3l-.4-5h-3l.7 8.5 5.7 1.5v-5z"></path>
          <path fill="#ffffff" d="M19.5 13.5l.5-5.5h-4v3h3.5l-.3 3.5h-3.2v3h3l-.4 5-2.6 1v4l5.5-2 .1-2 .6-7h-2.2z"></path>
        </svg>
      )
    },
    {
      name: "CSS",
      svg: (
        <svg viewBox="0 0 32 32" className="w-12 h-12 mb-2">
          <path fill="#1572B6" d="M6 28L4 3h24l-2 25-10 3-10-3z"></path>
          <path fill="#33A9DC" d="M26 5H16v24.5l8-2.5 2-22z"></path>
          <path fill="#ffffff" d="M16 13.5h7.5l-.5 5.5h-7v4h6.5l-.7 7.5-5.8 2v-4l3-1 .2-3h-3.2v-11z"></path>
          <path fill="#ebebeb" d="M16 24l-5.4-1.5-.4-4h3l.2 2 2.6.5v3zm-3.9-8.5l.3-3.5h7.6v-3H9.5l.5 6.5h6v3h-4z"></path>
        </svg>
      )
    },
    {
      name: "Bootstrap",
      svg: (
        <svg viewBox="0 0 32 32" className="w-12 h-12 mb-2">
          <path fill="#7952B3" d="M6 4h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
          <path fill="#ffffff" d="M21.5 17.5c0 1.75-1.34 3.1-3.28 3.1h-5.24v-11h5.07c1.7 0 3.03 1.2 3.03 2.77 0 1.2-.84 2.2-1.95 2.53v.07c1.45.32 2.37 1.47 2.37 2.53zm-5.98-5.67v3.57h2.28c1 0 1.65-.66 1.65-1.76 0-1.05-.6-1.81-1.53-1.81h-2.4zm0 8.43h2.37c1.09 0 1.78-.74 1.78-1.9 0-1.16-.7-1.96-1.9-1.96h-2.25v3.86z"></path>
        </svg>
      )
    },
    {
      name: "Tailwind",
      svg: (
        <svg viewBox="0 0 32 32" className="w-12 h-12 mb-2">
          <path fill="#44A8B3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"></path>
        </svg>
      )
    },
    {
      name: "React",
      svg: (
        <svg viewBox="0 0 32 32" className="w-12 h-12 mb-2">
          <circle cx="16" cy="16" r="2.1" fill="#61DAFB"></circle>
          <path fill="#61DAFB" d="M16 6.5c6.1 0 11.1 2.1 11.1 5.5s-5 5.5-11.1 5.5S4.9 15.4 4.9 12s5-5.5 11.1-5.5zM16 20c6.1 0 11.1 2.1 11.1 5.5s-5 5.5-11.1 5.5S4.9 28.9 4.9 25.5s5-5.5 11.1-5.5z"></path>
          <path fill="#61DAFB" d="M25.5 16a5.56 5.56 0 0 1-2.8 4.8c-2.7 2-7.2 2-9.9 0a5.56 5.56 0 0 1-2.8-4.8 5.56 5.56 0 0 1 2.8-4.8c2.7-2 7.2-2 9.9 0a5.56 5.56 0 0 1 2.8 4.8z"></path>
        </svg>
      )
    },
    {
      name: "Next.js",
      svg: (
        <svg viewBox="0 0 32 32" className="w-12 h-12 mr-2 mb-2">
          <path fill="currentColor" d="M23.749 28.126c-.16 0-.418-.04-.65-.301l-9.148-10.946v11.176h-2.282V11.143c0-.562.502-.986 1.065-.986.213 0 .438.045.603.159.173.122.327.3.43.525l9.249 11.306V10.973h2.252v16.253c0 .506-.416.901-.957.901h-.562v-.001zm-21.2-17.16h2.854v17.16h-2.854v-17.16zm29.198 17.199H29.2V8.73c0-.323.262-.585.585-.585h1.378c.323 0 .585.262.585.585l-.001 19.435z" />
        </svg>
      )
    }
  ]

  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Anna Morrison",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
      rating: 5,
    },
    {
      id: 2,
      name: "John Smith",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = React.useState<Testimonial>(testimonials[0]);

  const goToNext = () => {
    setCurrentTestimonial((prev) => {
      const currentIndex = testimonials.findIndex((t) => t.id === prev.id);
      return testimonials[(currentIndex + 1) % testimonials.length];
    });
  };

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => {
      const currentIndex = testimonials.findIndex((t) => t.id === prev.id);
      return testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length];
    });
  };

  return (
    <section className="container mx-auto px-6 pb-16" id="services">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 items-center">
        {/* Left Side - Tech Logos with names */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="bg-[hsla(0,0%,100%,.3)] flex flex-col lg:flex-row items-center justify-center border-1 border-dashed border-gray-300 rounded-xl py-4 px-4"
            >
              {tech.svg}
              <span className="text-center font-semibold text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Right Side - Fixed Testimonial Card with Changing Content */}
        <div className="shadow-sm bg-white rounded-2xl p-8 relative">
          {/* Rating Stars */}
          <div className="flex space-x-1 text-yellow-500 text-xl mb-2">{"★★★★★"}</div>

          {/* Testimonial Text - Changes with carousel */}
          <p className="text-gray-700 min-h-[60px]">{currentTestimonial.content}</p>

          {/* Author Name - Changes with carousel */}
          <p className="font-bold text-gray-900 mt-4">{currentTestimonial.name}</p>

          {/* Decorative Bottom Corner Button with Navigation */}
          <div className="absolute bottom-0 right-0 w-20 h-10 bg-gray-900 text-white rounded-tl-3xl rounded-br-2xl flex items-center justify-center ">
            <button
              onClick={goToPrevious}
              className="h-6 w-5 mr-1 cursor-pointer flex items-center justify-center bg-transparent text-white hover:bg-gray-800 rounded-full"
            >
              <ChevronLeft size={12} />
            </button>
            <button
              onClick={goToNext}
              className="h-6 w-5 cursor-pointer flex items-center justify-center bg-transparent text-white hover:bg-gray-800 rounded-full"
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}