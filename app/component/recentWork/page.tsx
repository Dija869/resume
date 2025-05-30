"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface WorkItem {
  id: number
  title: string
  image: string
  color: string
}

const works: WorkItem[] = [
  {
    id: 1,
    title: "Cordoba",
    image: "/cordoba.jpg",
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Brand Kahani",
    image: "/brandKahani.jpg",
    color: "bg-red-200",
  },
  {
    id: 3,
    title: "Food Recipe",
    image: "/food_recipe.png",
    color: "bg-blue-200",
  },
  {
    id: 4,
    title: "TODO App",
    image: "/todo.jpg",
    color: "bg-purple-200",
  },
  {
    id: 5,
    title: "ATM App",
    image: "/bank.jpg",
    color: "bg-purple-100",
  },
  {
    id: 6,
    title: "Calculator",
    image: "/calculator.png",
    color: "bg-blue-200",
  },
]

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === works.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? works.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <div className="container mx-auto bg-slate-800 rounded-xl py-8 relative overflow-hidden px-4 md:px-8">
      <div className="flex flex-wrap md:flex-col lg:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide py-4"
          style={{
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.7)',
            color: 'transparent',
            textShadow: '0 0 1px rgba(160, 174, 192, 0.1)'
          }}>
          My Recent Work
        </h1>
                
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-4 md:gap-10 w-full overflow-x-hidden scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {works.map((work) => (
          <div
            key={work.id}
            className={`min-w-full md:min-w-[530px] h-64 md:h-72 rounded-lg overflow-hidden flex-shrink-0 snap-center ${work.color} relative`}
          >
            <Image
              src={`/images${work.image}`}
              alt={work.title}
              fill
              className="object-cover mix-blend-multiply"
            />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="text-gray-200 text-xl md:text-2xl font-bold opacity-60">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>

     

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}