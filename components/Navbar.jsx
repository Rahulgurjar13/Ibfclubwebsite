import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
    { path: "/contact-us", label: "Contact us" },
  ];

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <div
        className="hidden md:block mx-auto max-w-7xl border border-[#1A1F35] rounded-full glassmorphism px-8 py-2 my-4"
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="relative group">
              <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 bg-[#00F0FF] transition-opacity duration-300"></span>
              <img
                src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75"
                className="h-9 relative transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                alt="Cloud Club Logo"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))",
                }}
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
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-[#00F0FF]"
                      : "text-[#E2E8F0] group-hover:text-[#00F0FF]"
                  } lg:text-base md:text-sm`}
                  style={{
                    textShadow: isActive(item.path)
                      ? "0 0 10px rgba(0, 240, 255, 0.5)"
                      : "none",
                  }}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00F0FF] transition-all duration-300 ${
                    isActive(item.path)
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-70"
                  }`}
                  style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)" }}
                />
                <span className="absolute -inset-2 rounded-lg bg-[#00F0FF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>

          <a
            href="https://lu.ma/2risnlos"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center px-5 py-2 rounded-full border-2 border-[#00F0FF] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#4D77FF]"
            style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 text-[#00F0FF] group-hover:text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
              <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
            </svg>
            <span className="relative z-10 text-[#00F0FF] group-hover:text-black group-hover:font-medium transition-all duration-300">
              Register
            </span>
          </a>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div
        className="md:hidden mx-auto border border-[#1A1F35] rounded-2xl glassmorphism px-4 py-2 my-4"
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="relative">
            <img
              src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75"
              className="h-8"
              alt="Cloud Club Logo"
              style={{ filter: "drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))" }}
            />
          </Link>

          {/* Mobile Register Button */}
          <div className="flex items-center space-x-2">
            <a
              href="https://lu.ma/2risnlos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm px-3 py-1.5 rounded-full border-2 border-[#00F0FF] text-[#00F0FF] hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#4D77FF] hover:text-black transition-all duration-300"
              style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)" }}
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
              className="p-2 rounded-lg hover:bg-[#0F1628] transition-colors focus:outline-none text-[#00F0FF]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-3 pb-2 pt-1 border-t border-[#1A1F35]">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-3 rounded-lg ${
                    isActive(item.path)
                      ? "bg-[#0F1628] text-[#00F0FF] border border-[#00F0FF]"
                      : "text-[#E2E8F0] hover:bg-[#0F1628] hover:text-[#00F0FF]"
                  } transition-colors`}
                  style={{
                    textShadow: isActive(item.path)
                      ? "0 0 10px rgba(0, 240, 255, 0.5)"
                      : "none",
                  }}
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
