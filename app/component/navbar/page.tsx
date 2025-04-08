"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Updated navItems with type and path information
  const navItems = [
    { name: 'HOME', type: 'page', path: '/' },
    { name: 'ABOUT', type: 'hash', path: '#about' },
    { name: 'SERVICES', type: 'hash', path: '#services' },
    { name: 'PORTFOLIO', type: 'page', path: '/portfolio' },
    { name: 'RESUME', type: 'hash', path: '#resume' },
    { name: 'CONTACT', type: 'page', path: '/contact' },
    { name: 'BLOG', type: 'page', path: '/blog' }
  ];

  // Function to handle navigation based on link type
  const handleNavigation = (item: { name: string; type: string; path: string }, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.type === 'hash') {
      e.preventDefault();
      const element = document.querySelector(item.path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <div className='w-full mx-auto px-15'>
      <nav className="bg-white dark:bg-gray-800 shadow-sm rounded-br-2xl rounded-bl-2xl max-w-4xl fixed top-0 z-50">
        {/* Container with exact width from your image */}
        <div className="mx-auto px-4" >
          <div className="flex justify-between h-16 items-center">

            {/* Mobile menu button - hidden on md+ screens */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
              >
                <span className="sr-only">Open menu</span>
                <span className="font-medium">MENU</span>
              </button>
            </div>

            {/* Desktop navigation - shown on md+ screens */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium text-sm"
                  style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
                  onClick={(e) => handleNavigation(item, e)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Dark mode toggle
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium text-sm hidden lg:block"
              style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
            >
              {darkMode ? 'LIGHT VERSION' : 'DARK VERSION'}
            </button> */}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 pb-3 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
                onClick={(e) => handleNavigation(item, e)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}