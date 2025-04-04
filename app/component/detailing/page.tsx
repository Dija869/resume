// components/SkillsExperience.jsx
import React from 'react';

const SkillsExperience = () => {
  // Skills data with percentages
  const skills = [
    { name: "EMAIL MARKETING", percentage: 98 },
    { name: "SEO AND SEM", percentage: 94 },
    { name: "COPYWRITING", percentage: 90 },
    { name: "DATA ANALYSIS", percentage: 85 },
    { name: "CONTENT MARKETING", percentage: 98 },
    { name: "CONTENT CREATION", percentage: 80 },
  ];

  // Experience data
  const experiences = [
    {
      period: "2023 - PRESENT",
      title: "Creative Director",
      company: "@flatheme",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
      period: "2021 - 2023",
      title: "Marketing Team Lead",
      company: "@flatheme",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        period: "2018 - 2021",
        title: "Marketing Specialist",
        company: "@flatheme",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      },
      {
        period: "2015 - 2018",
        title: "Solution Architect",
        company: "@flatheme",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      }
  ];

  return (
    <div className="px-6 py-16" id="resume">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-800 font-medium tracking-wider text-sm">
                  {skill.name}
                </h3>
                <span className="text-gray-800 font-medium text-sm">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1">
                <div 
                  className="bg-gray-800 h-1" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0 text-left">
                <div className="inline-block bg-[#ffffff4d] border-gray-300 rounded-full border-dashed border-1 py-2 px-6 text-gray-600 text-sm">
                  {exp.period}
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title} <i className="text-gray-400">{exp.company}</i>
                </h3>
                <p className="mt-2 text-gray-600">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;