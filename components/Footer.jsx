import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const developerInfo = {
    name: 'Rahul Gujjar',
    role: 'Website Developer',
    image: 'https://blockchainweek-bu.vercel.app/images/rahul1.jpg',
    ethereum_address: 'Tech Team Member'
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  useEffect(() => {
    const starsContainer = document.querySelector(".stars");
    const meteorShower = document.querySelector(".meteor-shower");

    const starsConfig = {
      background: 600,
      twinkling: 150,
      falling: 80,
      pulsing: 25,
      moving: 40,
      rotating: 10
    };

    createStars('background', starsConfig.background, 0.5, 1.5);
    createStars('twinkling', starsConfig.twinkling, 1, 2.5);
    createStars('falling', starsConfig.falling, 1, 2);
    createStars('pulsing', starsConfig.pulsing, 2, 3.5);
    createStars('moving', starsConfig.moving, 1, 2);
    createStars('rotating', starsConfig.rotating, 2, 4);

    createShootingStarInterval();
    createCometInterval();
    setTimeout(createConstellation, 2000);
    setTimeout(startMeteorShowerInterval, 5000);

    function createStars(type, count, minSize, maxSize) {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = `star ${type}`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        const size = Math.random() * (maxSize - minSize) + minSize;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        if (type === 'twinkling') {
          star.style.animationDelay = `${Math.random() * 4}s`;
          star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        }
        
        if (type === 'falling') {
          star.style.animationDelay = `${Math.random() * 30}s`;
          star.style.animationDuration = `${Math.random() * 20 + 10}s`;
        }
        
        if (type === 'pulsing') {
          star.style.animationDelay = `${Math.random() * 2}s`;
          star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        }
        
        if (type === 'moving') {
          star.style.animationDuration = `${Math.random() * 80 + 40}s`;
          star.style.animationDelay = `${Math.random() * -40}s`;
          star.style.top = `${Math.random() * 100}%`;
        }
        
        if (type === 'rotating') {
          star.style.animationDelay = `${Math.random() * 8}s`;
        }
        
        starsContainer.appendChild(star);
      }
    }

    function createShootingStarInterval() {
      setInterval(createShootingStar, 800);
    }

    function createShootingStar() {
      const star = document.createElement("div");
      star.className = "star shooting";
      
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * (window.innerHeight * 0.7);
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      
      const length = Math.random() * 150 + 50;
      star.style.width = `${length}px`;
      const angle = Math.random() * 60 - 30;
      star.style.transform = `rotate(${angle}deg)`;
      
      starsContainer.appendChild(star);
      
      const duration = Math.random() * 0.7 + 0.3;
      const keyframes = [
        { opacity: 0, transform: `rotate(${angle}deg) translateX(0)` },
        { opacity: 1, transform: `rotate(${angle}deg) translateX(${length * 0.2}px)` },
        { opacity: 1, transform: `rotate(${angle}deg) translateX(${length * 0.8}px)` },
        { opacity: 0, transform: `rotate(${angle}deg) translateX(${length + 50}px)` }
      ];
      
      star.animate(keyframes, {
        duration: duration * 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
      
      setTimeout(() => {
        star.remove();
      }, duration * 1000 + 100);
    }

    function createCometInterval() {
      setInterval(createComet, Math.random() * 7000 + 8000);
    }

    function createComet() {
      const comet = document.createElement("div");
      comet.className = "star comet";
      starsContainer.appendChild(comet);
      
      setTimeout(() => {
        comet.remove();
      }, 6000);
    }

    function createConstellation() {
      const constellation = document.createElement("div");
      constellation.className = "constellation";
      
      const centerX = window.innerWidth * (0.3 + Math.random() * 0.4);
      const centerY = window.innerHeight * (0.3 + Math.random() * 0.4);
      
      const starCount = Math.floor(Math.random() * 4) + 6;
      const starPositions = [];
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 50;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${Math.random() * 1 + 2}px`;
        star.style.height = star.style.width;
        star.style.boxShadow = `0 0 10px 2px rgba(255, 255, 255, 0.6)`;
        
        constellation.appendChild(star);
        starPositions.push({ x, y });
      }
      
      for (let i = 0; i < starPositions.length; i++) {
        const connections = Math.floor(Math.random() * 2) + 1;
        
        for (let j = 0; j < connections; j++) {
          const nextStarIndex = (i + j + 1) % starPositions.length;
          
          const line = document.createElement("div");
          line.className = "constellation-line";
          
          const start = starPositions[i];
          const end = starPositions[nextStarIndex];
          
          const length = Math.sqrt(
            Math.pow(end.x - start.x, 2) + 
            Math.pow(end.y - start.y, 2)
          );
          
          const angle = Math.atan2(end.y - start.y, end.x - start.x);
          
          line.style.width = `${length}px`;
          line.style.left = `${start.x}px`;
          line.style.top = `${start.y}px`;
          line.style.transform = `rotate(${angle}rad)`;
          
          constellation.appendChild(line);
        }
      }
      
      starsContainer.appendChild(constellation);
    }

    function startMeteorShowerInterval() {
      setInterval(() => {
        if (Math.random() > 0.7) {
          createMeteorShower();
        }
      }, 20000);
    }

    function createMeteorShower() {
      const meteorCount = Math.floor(Math.random() * 15) + 10;
      const startX = Math.random() * window.innerWidth;
      const startY = -100;
      
      for (let i = 0; i < meteorCount; i++) {
        setTimeout(() => {
          createMeteor(startX, startY);
        }, i * 200);
      }
    }

    function createMeteor(startX, startY) {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      
      const x = startX + (Math.random() * 200 - 100);
      const y = startY + (Math.random() * 100);
      
      const size = Math.random() * 100 + 50;
      meteor.style.width = `${size}px`;
      meteor.style.height = `${Math.random() * 2 + 1}px`;
      meteor.style.left = `${x}px`;
      meteor.style.top = `${y}px`;
      
      const duration = Math.random() * 0.5 + 0.5;
      meteor.style.animationDuration = `${duration}s`;
      
      meteorShower.appendChild(meteor);
      
      setTimeout(() => {
        meteor.remove();
      }, duration * 1000 + 100);
    }
  }, []);

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      <style jsx>{`
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }
        
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .star {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          filter: blur(0.2px);
        }
        
        .star.twinkling {
          animation: twinkle 4s infinite ease-in-out;
        }
        
        .star.shooting {
          position: absolute;
          height: 2px;
          background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1) 20%, rgba(255,255,255,1));
          border-radius: 0;
          filter: blur(0px);
          transform-origin: center right;
          overflow: visible;
        }
        
        .star.shooting::after {
          content: '';
          position: absolute;
          top: -1px;
          right: 0;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0.7);
        }
        
        .star.comet {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          box-shadow: 0 0 20px 2px rgba(120, 180, 255, 0.8);
          animation: comet 6s linear infinite;
          opacity: 0;
        }
        
        .star.comet::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 1px;
          background: linear-gradient(to left, rgba(255,255,255,0.8), rgba(255,255,255,0));
          transform: translate(-100%, -50%);
        }
        
        .star.falling {
          animation: falling 30s linear infinite;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.8;
            filter: blur(0.2px) brightness(1);
            transform: scale(1);
          }
          50% {
            opacity: 1;
            filter: blur(0.5px) brightness(1.8);
            transform: scale(1.2);
          }
        }
        
        @keyframes falling {
          from {
            transform: translateY(-5vh) translateX(0);
          }
          to {
            transform: translateY(105vh) translateX(10vw);
          }
        }
        
        @keyframes comet {
          0% {
            transform: translate(-10vw, -10vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(110vw, 50vh);
            opacity: 0;
          }
        }
        
        .star.pulsing {
          animation: pulse 3s infinite alternate ease-in-out;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
          }
          100% {
            transform: scale(1.5);
            box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.6);
          }
        }
        
        .star.moving {
          animation: moving linear infinite;
        }
        
        @keyframes moving {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(100vw, 0, 0);
          }
        }
        
        .star.rotating {
          background: linear-gradient(45deg, #fff, #88f);
          animation: rotating 8s linear infinite;
        }
        
        @keyframes rotating {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .constellation {
          position: absolute;
          opacity: 0;
          animation: appear 10s ease-in-out forwards;
          animation-delay: 3s;
        }
        
        .constellation-line {
          position: absolute;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          transform-origin: left center;
        }
        
        @keyframes appear {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        .meteor-shower {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .meteor {
          position: absolute;
          background: linear-gradient(to bottom right, rgba(255,255,255,0), rgba(255,255,255,1));
          transform: rotate(45deg);
          animation: meteor 1s linear forwards;
          opacity: 0;
        }
        
        @keyframes meteor {
          0% {
            opacity: 0;
            transform: rotate(45deg) translateX(0) translateY(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translateX(200vh) translateY(200vh);
          }
        }
      `}</style>

      <div className="stars-container">
        <div className="stars"></div>
      </div>
      <div className="meteor-shower"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75" className='w-20' alt="IBF Logo" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Indian Blockchain Fraternity at Bennett University fosters blockchain innovation through workshops, hackathons, and collaboration, empowering students in Web3 technologies.
            </p>
            <div className="pt-4">
              <h4 className="text-white text-sm font-semibold mb-3">Join Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-black text-sm rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-800"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Timeline</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Workshop</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Sponsors</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ About Us</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Blockchain Guides</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Hands-on Tutorials</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Development Toolkits</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Code Repositories</span></li>
              <li><span className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">→ Smart Contract Templates</span></li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-500 group">
            <h3 className="text-white text-lg font-semibold mb-6">Developer</h3>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img 
                  src={developerInfo.image} 
                  alt={developerInfo.name}
                  className="w-40 h-40 rounded-full object-cover ring-2 ring-orange-500 p-1 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500 rounded-full border-2 border-gray-800"></span>
              </div>
              <h4 className="text-white text-lg font-medium">{developerInfo.name}</h4>
              <p className="text-gray-400 text-sm mb-3">{developerInfo.role}</p>
              <div className="text-xs font-mono text-orange-500 bg-black px-3 py-1 rounded-full">
                {developerInfo.ethereum_address}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} IBF. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white hover:text-orange-500 text-sm">Privacy Policy</a>
              <a href="#" className="text-white hover:text-orange-500 text-sm">Terms of Service</a>
            </div>
            <p className="text-white text-sm flex items-center gap-2">
              Made with 
              <span className="text-orange-500 animate-pulse">❤</span>
              by Rahul Gujjar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;