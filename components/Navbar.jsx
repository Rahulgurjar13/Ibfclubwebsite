import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if link is active
  const isActive = (path) => location.pathname === path;

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links data
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/Events", label: "Events" },
    { path: "/team", label: "Our Team" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact-us", label: "Contact us" }
  ];

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <div className="hidden md:block mx-auto max-w-7xl border border-gray-800 rounded-full bg-black bg-opacity-20 backdrop-blur-sm px-8 py-2 my-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="relative group">
              <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
              <img
                src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75"
                className="h-9 relative transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                alt="IBF Logo"
              />
            </Link>
          </div>
          
          <div className="flex items-center lg:space-x-8 md:space-x-6">
            {navLinks.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="group relative py-1"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(item.path) 
                    ? 'text-white' 
                    : 'text-gray-400 group-hover:text-white'
                } lg:text-base md:text-sm`}>
                  {item.label}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-70'
                }`} />
                <span className="absolute -inset-2 rounded-lg bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>
          
          <a
            href="https://lu.ma/2risnlos"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center px-5 py-2 rounded-full border border-gray-700 hover:border-white transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <svg
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
              <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
            </svg>
            <span className="relative z-10 group-hover:font-medium transition-all duration-300">Register</span>
          </a>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden mx-auto border border-gray-800 rounded-2xl bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 my-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative">
            <img
              src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75"
              className="h-8"
              alt="IBF Logo"
            />
          </Link>

          {/* Mobile Register Button */}
          <div className="flex items-center space-x-2">
            <a
              href="https://lu.ma/2risnlos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm px-3 py-1.5 rounded-full border border-gray-700"
            >
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
                <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
              </svg>
              Register
            </a>

            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-3 pb-2 pt-1 border-t border-gray-800">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`py-2 px-3 rounded-lg ${
                    isActive(item.path) 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  } transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;