// components/EducationCards.jsx
import React from 'react';

const EducationCards = () => {
  const educationItems = [
    {
      degree: 'Business Administration',
      institution: 'University of Business',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6" />
        </svg>
      )
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Science',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6" />
        </svg>
      )
    }
  ];

  return (
    <section className='container mx-auto px-6'>
    <div className="">
      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#9c7ece] rounded-3xl p-10 text-white shadow-md"
            >
              <div className="opacity-50 mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-2">
                {item.degree}
              </h3>
              
              <p className="text-indigo-100">
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default EducationCards;