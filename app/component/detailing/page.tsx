// components/SkillsExperience.jsx
import React from 'react';

const SkillsExperience = () => {
  // Skills data with percentages
  const skills = [
    { name: "HTML5 AND CSS3", percentage: 98 },
    { name: "BOOTSTRAP", percentage: 90 },
    { name: "TAILWIND", percentage: 75 },
    { name: "JAVASCRIPT(ES5)", percentage: 70 },
    { name: "SEO AND SEM", percentage: 75 },
    { name: "CONTENT CREATION", percentage: 80 },
  ];

  // Experience data
  const experiences = [
    {
      period: "2025 - PRESENT",
    title: "Frontend Development Intern ",
      company: "@Orio_Technology",
      description: "Building responsive web interfaces using HTML, CSS, and Tailwind CSS - Learning and working with JavaScript (ES5), React, and Next.js - Practicing Git & GitHub for version control and team collaboration"
    },
    {
      period: "May 2024 - Nov 2024 ",
      title: "Web and Mobile App Development Course",
      company: "@SMIT",
      description: "In this Course, Created simple frontend projects using HTML and CSS, including portfolio sites, to-do apps, calculator , kids game and weather UI layout etc"
    },
    {
        period: "Nov 2023 - Jan 2024",
        title: "Sales & Application Engineering Internship ",
        company: "@Zimco_International",
        description: "Assisted in client demos and product application setup - Collaborated with the sales team to understand customer needs and provide technical support - Gained insights into the sales process and customer relationship management"
      },
      {
        period: "Jan 2020 - FEB 2024",
        title: "BS Physics (Electronics Specialization)",
        company: "@FUUAST",
        description: "Completed coursework in Electronics, Circuit Design, and Mathematical Physics - Engaged in project (BLUETOOTH CAR CONTROL) related to electronics and programming , enhancing practical knowledge"
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