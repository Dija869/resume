"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const LatestWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Cordoba",
      image: "/cordoba.jpg",
      category: 'marketing',
      backgroundColor: 'bg-tranparent'
    },
    {
      id: 2,
      title: "Brand Kahani",
      image: "/brandKahani.jpg",
      category: 'branding',
      backgroundColor: 'bg-tranparent'
    },
    {
      id: 3,
      title: "Food Recipe",
      image: "/food_recipe.png",
      category: 'marketing',
      backgroundColor: 'bg-tranparent'
    },
    {
      id: 4,
      title: "TODO App",
      image: "/todo.jpg",
      category: 'branding',
      backgroundColor: 'bg-tranparent'
    },
    {
      id: 5,
      title: "ATM App",
      image: "/bank.jpg",
      category: 'marketing',
      backgroundColor: 'bg-tranparent'
    },
    {
      id: 6,
      title: "Calculator",
      image: "/calculator.png",
      category: 'branding',
      backgroundColor: 'bg-tranparent'
    },
    // Add more projects as needed
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-16 px-4" id="portfolio">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-gray-800 mb-12">Latest Works</h2>

        <div className="flex justify-end mb-8 gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'all'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Show All
          </button>
          {/* <button
            onClick={() => setActiveFilter('marketing')}
            className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'marketing'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Marketing
          </button>
          <button
            onClick={() => setActiveFilter('branding')}
            className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'branding'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Branding
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`relative aspect-[3/2] `}>
                  <Image
                    src={ `/images${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:bg-transparent"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-medium text-white">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;