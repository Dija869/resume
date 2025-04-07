import Link from 'next/link';
import React from 'react';

const Cards = () => {
  return (
    <div className="container mx-auto px-6 py-16" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white p-12 rounded-2xl shadow-lg relative">
          <div className="flex flex-col justify-center items-left">
            <div className="text-gray-500 text-4xl mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(44, 57, 67, .4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="font-medium leading-[30px] mb-3 text-xl">Creating marketing strategies, and campaigns</h3>
          </div>
          <div className="absolute bottom-0 right-0 bg-gray-800 text-white p-4 rounded-tl-3xl rounded-br-2xl">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-14 rounded-2xl shadow-lg relative">
          <div className="flex flex-col justify-center items-left">
            <div className="text-gray-500 text-4xl mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(44, 57, 67, .4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
            </div>
            <h3 className="font-medium leading-[30px] mb-3 text-xl">Enhancing brand awareness, and generating leads</h3>
          </div>
          <div className="absolute bottom-0 right-0 bg-gray-800 text-white p-4 rounded-tl-3xl rounded-br-2xl">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#9c7ece] p-18 rounded-2xl shadow-lg text-white flex items-center justify-center flex-col">
          <div className="flex flex-col justify-center items-left">
            <h1 className="text-6xl font-bold tracking-wide p-6" style={{
              WebkitTextStroke: '1.5px rgba(160, 174, 192, 0.7)',
              color: 'transparent',
              textShadow: '0 0 1px rgba(160, 174, 192, 0.1)'
            }}>
              4,000+
            </h1>
            <p className="text-xl mt-2">Satisfied customers around the world during the past 10 years</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;

