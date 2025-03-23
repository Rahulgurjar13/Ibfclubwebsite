import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="mx-auto max-w-7xl border border-gray-800 rounded-full bg-black bg-opacity-20 backdrop-blur-sm px-8 py-2 my-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75"
              className="h-9"
              alt="IBF Logo"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <Link to="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/Events" className="hover:text-gray-300 text-gray-400">
            Events
          </Link>
          <Link to="/team" className="hover:text-gray-300 text-gray-400">
            Our Team
          </Link>
          <Link to="/about-us" className="hover:text-gray-300 text-gray-400">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-gray-300 text-gray-400">
            Contact us
          </Link>
        </div>

        <button
          onClick={handleRegisterClick}
          className="flex items-center px-5 py-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
            <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
          </svg>
          Register
        </button>
      </nav>
    </div>
  );
};

export default Navbar;