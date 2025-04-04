"use client"
import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

interface Testimonial {
  id: number
  name: string
  content: string
  rating: number
}

export default function Skills() {
  // Array of different logo images
  const logos = [
    "/images/client_1.png",
    "/images/client_2.png",
    "/images/client_3.png",
    "/images/client_4.png",
    "/images/client_5.png",
    "/images/client_6.png",
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
    <section className="container mx-auto px-6 py-15" id="services">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 items-center">
        {/* Left Side - Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-[hsla(0,0%,100%,.3)] flex items-center justify-center border-1 border-dashed border-gray-300 rounded-xl py-5 px-6"
            >
              <Image
                width={120}
                height={100}
                src={logo || "/placeholder.svg"}
                alt={`Brand Logo ${index + 1}`}
                className="h-10"
              />
            </div>
          ))}
        </div>

        
          {/* Right Side - Fixed Testimonial Card with Changing Content */}
          <div className="shadow-sm bg-white rounded-2xl p-6 relative">
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



