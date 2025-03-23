import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(255, 87, 34, 0.5); }
    50% { box-shadow: 0 0 20px rgba(255, 87, 34, 0.8); }
    100% { box-shadow: 0 0 5px rgba(255, 87, 34, 0.5); }
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(145deg, rgba(255, 87, 34, 0.8), rgba(255, 165, 0, 0.4));
    animation: float 4s ease-in-out infinite;
    filter: blur(1px);
  }

  .event-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: linear-gradient(135deg, rgba(40, 40, 45, 0.9), rgba(25, 25, 30, 0.95));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 87, 34, 0.1);
    height: auto;
  }

  .event-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(255, 87, 34, 0.2), 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 87, 34, 0.5);
  }

  .tab-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .tab-button:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ff5722, #ff9800);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .tab-button.active:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .tab-button:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .register-btn {
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .register-btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
    z-index: -1;
  }

  .register-btn:hover:before {
    left: 100%;
  }

  .event-icon {
    transition: all 0.3s ease;
  }

  .event-card:hover .event-icon {
    transform: rotate(360deg) scale(1.1);
  }

  .photos-link {
    position: relative;
    display: inline-block;
  }

  .photos-link:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #ff5722, #ff9800);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  .photos-link:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .header-text {
    background: linear-gradient(90deg, #ff5722, #ff9800, #ff5722);
    background-size: 200% auto;
    animation: gradient 3s ease infinite;
    -webkit-background-clip: text;
    background-clip: text;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .navbar-container {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 87, 34, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  
  .event-date-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px 10px;
    background: linear-gradient(135deg, #ff9800, #ff5722);
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    box-shadow: 0 2px 8px rgba(255, 87, 34, 0.4);
    transform: translateY(0);
    transition: all 0.3s ease;
    z-index: 10;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .event-card:hover .event-date-badge {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 87, 34, 0.6);
  }
  
  .placeholder-pulse {
    animation: placeholderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    background: linear-gradient(90deg, rgba(60, 60, 70, 0.8), rgba(40, 40, 50, 0.8), rgba(60, 60, 70, 0.8));
    background-size: 200% 100%;
  }
  
  @keyframes placeholderPulse {
    0% { background-position: 0% 0%; }
    100% { background-position: -200% 0%; }
  }

  .animated-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    background: radial-gradient(circle at center, rgba(20, 20, 25, 0.8) 0%, rgba(10, 10, 15, 1) 70%);
  }
  
  .main-content {
    padding-top: 0.5rem;
    padding-bottom: 3rem;
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .truncate-2-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .glassmorphism {
    background: rgba(25, 25, 30, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const upcomingEvents = [
    {
      title: 'Blockchain Week 2025',
      date: '14-20 April 2025',
      desc: 'Workshops, coding, talks & hackathon on blockchain.',
      location: 'Bennett University, Greater Noida',
      time: '6:30 PM',
      icon: 'network-wired',
      tags: ['Blockchain', 'Workshops'],
      registerLink: 'https://lu.ma/2risnlos'
    },
  ];

  const pastEvents = [
    {
      title: 'Intro to Blockchain & Web3',
      date: '10 Oct 2023',
      desc: 'Beginner-friendly session on blockchain and Web3 tech.',
      photos: true,
      location: 'Bennett University, Greater Noida',
      icon: 'book',
      tags: ['Workshop', 'Web3'],
    },
    {
      title: 'Solidity Bootcamp',
      date: '15-17 Mar 2023',
      desc: 'Hands-on smart contract coding with Solidity.',
      photos: true,
      location: 'Bennett University, Greater Noida',
      icon: 'code',
      tags: ['Bootcamp'],
    },
    {
      title: 'NFTs & Metaverse',
      date: '5 Dec 2022',
      desc: 'Seminar on NFTs and digital ownership.',
      photos: true,
      location: 'Bennett University, Greater Noida',
      icon: 'image',
      tags: ['Seminar', 'NFT'],
    },
    {
      title: 'Blockchain Hackathon 2022',
      date: '20-22 Sep 2022',
      desc: '48-hour blockchain app development challenge.',
      photos: true,
      location: 'Bennett University, Greater Noida',
      icon: 'laptop-code',
      tags: ['Hackathon'],
    },
    {
      title: 'Crypto Trading Workshop',
      date: '12 Aug 2022',
      desc: 'Practical session on crypto trading strategies.',
      photos: true,
      location: 'Bennett University, Greater Noida',
      icon: 'chart-line',
      tags: ['Workshop', 'Crypto'],
    },
  ];

  const icons = {
    'network-wired': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
      </svg>
    ),
    book: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    'laptop-code': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'chart-line': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v16H4V4z" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden">
      <div className="animated-bg">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 6 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 main-content">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="header-text text-transparent">Blockchain Club Events</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Join our cutting-edge events to stay ahead in the decentralized world</p>
        </div>

        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''} px-6 py-3 text-sm font-semibold rounded-lg flex items-center space-x-2 ${activeTab === 'upcoming' ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Upcoming Events</span>
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`tab-button ${activeTab === 'past' ? 'active' : ''} px-6 py-3 text-sm font-semibold rounded-lg flex items-center space-x-2 ${activeTab === 'past' ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Past Events</span>
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="event-card h-64 rounded-lg placeholder-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event, index) => (
              <div key={index} className="event-card rounded-lg p-5 relative overflow-hidden group">
                <div className="event-date-badge">
                  <span>{event.date}</span>
                </div>
                <div className="card-content">
                  <div className="flex items-center mb-3 mt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg event-icon">
                      {icons[event.icon] || (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white truncate">{event.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-800 text-orange-400 border border-orange-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-3 truncate-2-lines">{event.desc}</p>
                  <div className="space-y-1 mb-3 mt-auto">
                    <div className="flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs truncate">{event.location}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs">{event.time}</span>
                      </div>
                    )}
                  </div>
                  {event.photos && (
                    <a href="#" className="photos-link inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>View Photos</span>
                    </a>
                  )}
                  {activeTab === 'upcoming' && (
                    <a href={event.registerLink || '#'} target="_blank" rel="noopener noreferrer">
                      <button className="register-btn mt-3 w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-md text-sm font-medium shadow-lg hover:shadow-orange-500/30">
                        Register
                      </button>
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}

        {!loading && (activeTab === 'upcoming' ? upcomingEvents : pastEvents).length === 0 && (
          <div className="glassmorphism rounded-lg p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-400 mb-2">No {activeTab} events available</h3>
            <p className="text-gray-500 text-sm">Check back soon for updates</p>
          </div>
        )}

        <div className="mt-12 relative overflow-hidden rounded-lg glassmorphism p-6">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-700/10 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Join the <span className="text-transparent header-text">Blockchain Revolution</span>
              </h2>
              <p className="text-gray-300">
                Connect with innovators and stay at the forefront of blockchain technology through our events.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="register-btn px-5 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg text-sm font-medium">
                  Become a Member
                </button>
                <button className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-700">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-40 h-40 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;