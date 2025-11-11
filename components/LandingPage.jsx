import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import Navbar from "./Navbar"; // Adjust the import path based on your file structure

const LandingPage = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x00f0ff,
      color2: 0xb537f2,
      size: 1,
      backgroundColor: 0x000000,
      points: 12,
      maxDistance: 25,
      spacing: 18,
      showDots: true,
    });

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
        style={{ opacity: "90%" }}
      ></div>

      {/* Stars background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ opacity: "40%" }}
      >
        <div
          className="absolute w-1 h-1 bg-[#00F0FF] rounded-full top-20 left-10 sm:left-40 animate-pulse"
          style={{ boxShadow: "0 0 10px #00F0FF" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#B537F2] rounded-full top-60 left-5 sm:left-20 animate-pulse"
          style={{ boxShadow: "0 0 10px #B537F2" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#00F0FF] rounded-full top-10 left-20 sm:left-80 animate-pulse"
          style={{ boxShadow: "0 0 10px #00F0FF" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#FF00A8] rounded-full top-40 right-10 sm:right-60 animate-pulse"
          style={{ boxShadow: "0 0 10px #FF00A8" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#00F0FF] rounded-full top-80 right-5 sm:right-40 animate-pulse"
          style={{ boxShadow: "0 0 10px #00F0FF" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-[#4D77FF] rounded-full top-32 left-60 animate-pulse"
          style={{ boxShadow: "0 0 15px #4D77FF" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#B537F2] rounded-full top-72 right-32 animate-pulse"
          style={{ boxShadow: "0 0 10px #B537F2" }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <Navbar /> {/* Responsive Navbar component */}
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center mt-10 sm:mt-20 text-center px-4 sm:px-6 lg:px-8">
          <div
            className="inline-flex items-center space-x-2 bg-black bg-opacity-70 border-2 border-[#00F0FF] rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12"
            style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#00F0FF]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
            </svg>
            <span
              className="text-sm sm:text-base text-[#00F0FF]"
              style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.6)" }}
            >
              ☁️ Next-Gen Cloud Infrastructure
            </span>
          </div>

          <div className="max-w-4xl w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
              <div className="mb-2 text-white text-glow-white">
                CLOUD COMPUTING
              </div>
              <div
                className="text-gradient-holographic"
                style={{ fontSize: "1em" }}
              >
                FUTURE READY
              </div>
            </h1>

            <p className="text-[#A0AEC0] text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
              Unleash the power of cloud computing with cutting-edge distributed
              infrastructure and AI-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                style={{
                  background:
                    "linear-gradient(135deg, #00F0FF 0%, #4D77FF 100%)",
                  color: "#000000",
                  boxShadow: "0 0 40px rgba(0, 240, 255, 0.6)",
                  animation: "neon-pulse 2s infinite",
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 0 60px rgba(0, 240, 255, 0.9)";
                  e.target.style.transform = "translateY(-4px) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "0 0 40px rgba(0, 240, 255, 0.6)";
                  e.target.style.transform = "translateY(0) scale(1)";
                }}
              >
                Join Cloud Club
              </button>
              <button
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border-2 text-[#B537F2]"
                style={{
                  background: "transparent",
                  borderColor: "#B537F2",
                  boxShadow: "0 0 20px rgba(181, 55, 242, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #B537F2 0%, #FF00A8 100%)";
                  e.target.style.color = "#FFFFFF";
                  e.target.style.boxShadow = "0 0 40px rgba(181, 55, 242, 0.6)";
                  e.target.style.transform = "translateY(-4px) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#B537F2";
                  e.target.style.boxShadow = "0 0 20px rgba(181, 55, 242, 0.4)";
                  e.target.style.transform = "translateY(0) scale(1)";
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Arc effect */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10">
        ...
      </div>
    </div>
  );
};

export default LandingPage;
