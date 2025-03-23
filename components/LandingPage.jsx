import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import Navbar from './Navbar'; // Adjust the import path based on your file structure

const LandingPage = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff5722,
      color2: 0xffffff,
      size: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Vanta Background */}
      <div ref={vantaRef} className="absolute inset-0 z-0" style={{ opacity: '90%' }}></div>

      {/* Stars background */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: '40%' }}>
        <div className="absolute w-1 h-1 bg-white rounded-full top-20 left-10 sm:left-40" style={{ opacity: '30%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-60 left-5 sm:left-20" style={{ opacity: '40%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-10 left-20 sm:left-80" style={{ opacity: '30%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-40 right-10 sm:right-60" style={{ opacity: '40%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-80 right-5 sm:right-40" style={{ opacity: '30%' }}></div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <Navbar /> {/* Responsive Navbar component */}

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center mt-10 sm:mt-20 text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-black bg-opacity-70 border border-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8 1.6a.6.6 0 00-1 .4L10 8.5a.6.6 0 00.5.7h.2L6.5 11a.6.6 0 000 1.2l2.8 1.5a.6.6 0 00.8-.2l3.3-6a.6.6 0 00-.2-.8l-.8-.4.2-3.8a.6.6 0 00-.8-.9z" />
              <path d="M5.5 4.7a.6.6 0 00-1 .4L3.8 11a.6.6 0 00.5.7h.2L.3 13.2a.6.6 0 000 1.2l2.8 1.5a.6.6 0 00.8-.2l3.3-6a.6.6 0 00-.2-.8l-.8-.4.2-3.8a.6.6 0 00-.8-.9z" />
            </svg>
            <span className="text-sm sm:text-base">Decentralization at your fingertips</span>
          </div>

          <div className="max-w-4xl w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
              <div className="mb-2">BLOCKCHAIN</div>
              <div className="text-orange-500">INDIAN FARTENITY</div>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
              Unleash the power of blockchain with our cutting-edge decentralized solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:shadow-none">
                Join IBF Today
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent border border-white text-white font-medium hover:bg-orange-600/10 hover:text-white hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
                Contact Us
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Arc effect */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10">...</div>
    </div>
  );
};

export default LandingPage;