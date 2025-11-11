import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const developerInfo = {
    name: "Rahul Gujjar",
    role: "Website Developer",
    image: "https://blockchainweek-bu.vercel.app/images/rahul1.jpg",
    ethereum_address: "General Secretary",
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: "2px",
                height: "2px",
                background: Math.random() > 0.5 ? "#00F0FF" : "#B537F2",
                opacity: 0.3,
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75"
                  className="w-20"
                  alt="IBF Logo"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cloud Computing Society at Bennett University fosters cloud
              innovation through workshops, training programs, and
              collaboration, empowering students to master modern cloud
              technologies and infrastructure.
            </p>
            <div className="pt-4">
              <h4 className="text-white text-sm font-semibold mb-3">
                Join Our Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-black text-sm rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-[#00F0FF] border border-gray-800"
                  style={{ borderColor: "#1A1F35" }}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#00F0FF] to-[#4D77FF] text-black px-4 py-2 rounded-r-lg hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Services
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Training
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Partners
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → About Cloud
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Computing Guides
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Tutorials
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Development Tools
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Infrastructure
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  → Cloud Architecture Templates
                </span>
              </li>
            </ul>
          </div>

          {/* Developer Card */}
          <div
            className="bg-black p-6 rounded-xl border border-[#1A1F35] hover:border-[#00F0FF] transition-all duration-500 group"
            style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.1)" }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Developer</h3>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img
                  src={developerInfo.image}
                  alt={developerInfo.name}
                  className="w-40 h-40 rounded-full object-cover ring-2 ring-[#00F0FF] p-1 group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.5)" }}
                />
                <span
                  className="absolute bottom-0 right-0 w-4 h-4 bg-[#00FF88] rounded-full border-2 border-gray-800"
                  style={{ boxShadow: "0 0 10px rgba(0, 255, 136, 0.5)" }}
                ></span>
              </div>
              <h4 className="text-white text-lg font-medium">
                {developerInfo.name}
              </h4>
              <p className="text-gray-400 text-sm mb-3">{developerInfo.role}</p>
              <div
                className="text-xs font-mono text-[#00F0FF] bg-black px-3 py-1 rounded-full border border-[#00F0FF]"
                style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.3)" }}
              >
                {developerInfo.ethereum_address}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Cloud Computing Society. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white hover:text-[#00F0FF] text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-[#00F0FF] text-sm">
                Terms of Service
              </a>
            </div>
            <p className="text-white text-sm flex items-center gap-2">
              Made with
              <span className="text-[#FF00A8] animate-pulse">❤</span>
              by Rahul Gujjar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
