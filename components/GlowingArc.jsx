import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const LandingPage = () => {
  const vantaRef = useRef(null);
  
  useEffect(() => {
    // Initialize Vanta effect
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
      color: 0xff5722,           // Orange to match your theme
      color2: 0xffffff,          // White secondary color
      size: 1.2,                 // Slightly larger globe
      backgroundColor: 0x000000, // Black background
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true
    });

    // Cleanup on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Vanta Background */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 z-0"
      ></div>
      
      {/* Stars background (optional - might remove if using Vanta) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-20 left-40 opacity-30"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-60 left-20 opacity-40"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-10 left-80 opacity-30"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-40 right-60 opacity-40"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-80 right-40 opacity-30"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Navbar container with dark background */}
        <div className="mx-auto max-w-7xl border border-gray-800 rounded-full bg-black bg-opacity-20 backdrop-blur-sm px-8 py-2 my-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.5C17.5 15 25 17.5 20 25C15 17.5 22.5 15 20 7.5Z" fill="#FF5722" />
                </svg>
                <span className="text-xl font-bold">Darken</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-gray-300">Solutions</a>
              <a href="#" className="hover:text-gray-300 text-gray-400">Products</a>
              <a href="#" className="hover:text-gray-300 text-gray-400">About Us</a>
              <a href="#" className="hover:text-gray-300 text-gray-400">Pricing</a>
              <a href="#" className="hover:text-gray-300 text-gray-400">Blog</a>
              <a href="#" className="hover:text-gray-300 text-gray-400">Cart (0)</a>
            </div>
            
            <button className="flex items-center px-5 py-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
                <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
              </svg>
              Sign up
            </button>
          </nav>
        </div>
        
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center mt-20 text-center px-4">
          <div className="inline-flex items-center space-x-2 bg-black bg-opacity-70 border border-gray-800 rounded-full px-6 py-3 mb-12">
            <svg className="w-4 h-4 text-orange-500" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8 1.6a.6.6 0 00-1 .4L10 8.5a.6.6 0 00.5.7h.2L6.5 11a.6.6 0 000 1.2l2.8 1.5a.6.6 0 00.8-.2l3.3-6a.6.6 0 00-.2-.8l-.8-.4.2-3.8a.6.6 0 00-.8-.9z" />
              <path d="M5.5 4.7a.6.6 0 00-1 .4L3.8 11a.6.6 0 00.5.7h.2L.3 13.2a.6.6 0 000 1.2l2.8 1.5a.6.6 0 00.8-.2l3.3-6a.6.6 0 00-.2-.8l-.8-.4.2-3.8a.6.6 0 00-.8-.9z" />
            </svg>
            <span>Take Full Control of Your Task</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-7xl font-bold mb-8 tracking-tight">
              <div className="mb-2">BLOCKCHAIN</div>
              <div className="text-orange-500">INDIAN FARTENITY</div>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Unlock the full potential of your data with our suite of analytics tools
            </p>
            
            <div className="flex justify-center space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
                Download app
              </button>
              <button className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors">
                Talk to sales
              </button>
            </div>
          </div>
        </main>
      </div>
      
      {/* Arc effect */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <defs>
            <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 87, 34, 0)" />
              <stop offset="50%" stopColor="rgba(255, 87, 34, 0.9)" />
              <stop offset="100%" stopColor="rgba(255, 87, 34, 0)" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>
          <path 
            fill="none" 
            stroke="url(#orangeGlow)" 
            strokeWidth="3"
            d="M0,140 C320,280 960,280 1440,140"
            filter="url(#blur)"
          />
          <path 
            fill="none" 
            stroke="rgba(255, 87, 34, 0.4)"
            strokeWidth="3"
            d="M0,160 C320,300 960,300 1440,160"
            filter="url(#blur)"
          />
          <path 
            fill="none" 
            stroke="rgba(255, 87, 34, 0.2)"
            strokeWidth="5"
            d="M0,180 C320,320 960,320 1440,180"
            filter="url(#blur)"
          />
        </svg>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 transform translate-y-16 opacity-40">
          <div className="absolute w-full h-full bg-orange-500/30 rounded-full scale-x-150 blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 transform translate-y-12 opacity-30">
          <div className="absolute w-full h-full bg-orange-500/40 rounded-full scale-x-150 blur-xl"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent blur-sm"></div>
      </div>
    </div>
  );
};

export default LandingPage;