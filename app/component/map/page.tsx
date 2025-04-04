import Image from 'next/image';
import React from 'react';

const GoogleMapsComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
    <div className="max-w-6xl mx-auto h-96 relative mb-20 bg-gray-100 rounded-3xl border-gray-200 overflow-hidden">
      {/* Map Background - Light beige color to simulate map */}
      <div className="absolute inset-0 bg-amber-50">
        {/* Streets */}
        <div className="absolute transform rotate-45 bg-blue-200 h-32 w-96 left-0 top-24"></div>
        <div className="absolute transform rotate-45 bg-blue-200 h-24 w-96 top-0 right-24"></div>
        <div className="absolute transform rotate-135 bg-blue-200 h-24 w-full top-64 right-0"></div>
        
        {/* Area labels */}
        <div className="absolute top-16 right-24 text-gray-500 text-xs">56</div>
        <div className="absolute top-56 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs">55</div>
        <div className="absolute bottom-24 left-24 text-gray-500 text-xs">54</div>
        
        {/* Street labels */}
        <div className="absolute transform rotate-45 top-16 left-40 text-gray-600 text-xs">Hanover Pl</div>
        <div className="absolute transform rotate-45 top-48 left-0 text-gray-600 text-xs">Long Acre</div>
        <div className="absolute transform rotate-135 top-64 right-48 text-gray-600 text-xs">Hanover Pl</div>
      </div>
      
      {/* Red Marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="h-6 w-6 relative">
          <div className="absolute h-6 w-6 bg-red-500 rounded-full"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-4 w-4 bg-red-500 transform rotate-45 top-4 left-1 rounded-sm"></div>
        </div>
      </div>
      
      {/* Place Markers */}
      <div className="absolute top-1/3 right-1/4">
        <div className="flex items-center">
          <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white">A</div>
          <span className="ml-2 bg-white px-2 py-1 rounded text-sm text-blue-500 font-medium">Honey Birdette</span>
        </div>
      </div>
      
      <div className="absolute top-2/3 right-24">
        <div className="flex items-center">
          <div className="h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.5V2.1c0-.5.4-.9.9-.9h.2c.5 0 .9.4.9.9v2.4c0 .5-.4.9-.9.9h-.2c-.5 0-.9-.4-.9-.9zm5 2c.3-.4.8-.5 1.2-.3l.1.1c.4.3.5.8.3 1.2l-1.2 2.1c-.3.4-.8.5-1.2.3l-.1-.1c-.4-.3-.5-.8-.3-1.2l1.2-2.1zm-10 0l1.2 2.1c.3.4.1.9-.3 1.2l-.1.1c-.4.3-.9.1-1.2-.3L2.4 7.5c-.3-.4-.1-.9.3-1.2l.1-.1c.4-.2.9-.1 1.2.3zM7 14c0 1.7 1.3 3 3 3s3-1.3 3-3v-4c0-1.7-1.3-3-3-3s-3 1.3-3 3v4z"/>
            </svg>
          </div>
          <div className="ml-2 flex flex-col">
            <span className="bg-white px-2 py-1 rounded text-sm text-orange-500 font-medium">Amorino Gelato -</span>
            <span className="bg-white px-2 py-1 rounded text-sm text-orange-500 font-medium">London Long Acre</span>
            <span className="bg-white px-2 py-1 rounded text-xs text-gray-500">Ice Cream</span>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute top-0 left-0 bg-white shadow-md">
        <div className="flex">
          <button className="px-4 py-2 font-medium text-black bg-white">Map</button>
          <button className="px-4 py-2 font-medium text-gray-600 bg-gray-100">Satellite</button>
        </div>
      </div>
      
      {/* Zoom Controls */}
      <div className="absolute bottom-16 right-4 flex flex-col">
        <button className="bg-white p-2 shadow-md mb-1 rounded-sm">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="bg-white p-2 shadow-md rounded-sm">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
      
      {/* Full Screen Button */}
      <button className="absolute top-4 right-4 bg-white p-2 shadow-md rounded-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      </button>
      
      {/* Reset View Button */}
      <button className="absolute top-16 right-4 bg-white p-2 shadow-md rounded-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8v8a4 4 0 004 4h8m-4-4v-4m-4 4h8" />
        </svg>
      </button>
      
      {/* Person Button */}
      <button className="absolute top-32 right-4 bg-white p-2 shadow-md rounded-sm">
        <svg className="h-4 w-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Google Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-1 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center">
          <Image width={50} height={50} src="/images/google_logo.svg" alt="Google" className="h-6" />
        </div>
        <div className="flex items-center space-x-4">
          <span>Keyboard shortcuts</span>
          <span>Map data ©2025 Google</span>
          <span>Terms</span>
          <span>Report a map error</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GoogleMapsComponent;