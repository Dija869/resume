"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'ABOUT',
    'SERVICES',
    'PORTFOLIO',
    'RESUME',
    'CONTACT',
    'BLOG'
  ];

  return (
    <div className='container'>
      <nav className="bg-white dark:bg-gray-800 shadow-sm fixed rounded-br-2xl rounded-bl-2xl max-w-4xl lg:ml-10 xl:ml-25 z-10 top-0">
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
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium text-sm"
                  style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium text-sm hidden lg:block"
              style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
            >
              {darkMode ? 'LIGHT VERSION' : 'DARK VERSION'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 pb-3 px-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}