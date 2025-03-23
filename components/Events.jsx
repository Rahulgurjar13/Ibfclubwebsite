import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


// Inline CSS for animations and custom styles
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .float-animation {
    animation: float 4s ease-in-out infinite;
  }

  .pulse-animation {
    animation: pulse 2s ease-in-out infinite;
  }

  .event-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(255, 87, 34, 0.3);
  }

  .tab-button {
    transition: all 0.3s ease;
  }

  .tab-button:hover {
    background-color: #ff8a65;
  }

  .navbar-container {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.9);
    padding: 0 1rem;
  }
`;

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Inject styles into the document head once on mount
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Expanded upcoming events with blockchain focus
  const upcomingEvents = [
    {
      title: 'Mid Sem Hunt',
      date: '15 September 2024',
      desc: 'A campus-wide blockchain treasure hunt using smart contracts.',
      location: 'Bennett University Campus',
      time: '10:00 AM - 3:00 PM',
    },
    {
      title: 'GCCP (Global Crypto Coding Program)',
      date: '10-20 October 2024',
      desc: 'Collaborate globally to solve blockchain coding challenges.',
      location: 'Online',
      time: 'All Day',
    },
    {
      title: 'Cloud with Internet of Things (CIoT-2024)',
      date: '07-11 October 2024',
      desc: 'Workshop on integrating blockchain with IoT devices.',
      location: 'Tech Lab, BU',
      time: '9:00 AM - 5:00 PM',
    },
    {
      title: 'Cloud Hackathon',
      date: '18 October 2024',
      desc: '24-hour hackathon to build decentralized cloud applications.',
      location: 'Main Auditorium',
      time: '10:00 AM (Start)',
    },
    {
      title: 'Expert Talk: Blockchain Future',
      date: '12 November 2024',
      desc: 'Industry experts discuss blockchain trends and opportunities.',
      location: 'Seminar Hall',
      time: '2:00 PM - 4:00 PM',
    },
    {
      title: 'Cloud Ops: Blockchain Operations',
      date: '10-20 January 2025',
      desc: 'Hands-on training for blockchain deployment in the cloud.',
      location: 'Online & On-Campus',
      time: '10:00 AM - 1:00 PM (Daily)',
    },
    {
      title: 'Web3 Workshop',
      date: '25 February 2025',
      desc: 'Learn to build Web3 applications with Ethereum.',
      location: 'Computer Lab 3',
      time: '11:00 AM - 3:00 PM',
    },
  ];

  // Expanded past events with blockchain focus
  const pastEvents = [
    {
      title: 'LearNowX Ideathon Collab, 2023',
      date: '15-16 April 2023',
      desc: 'Brainstormed innovative blockchain solutions.',
      photos: true,
      location: 'Online',
    },
    {
      title: 'Study Jams Info Session, 2023',
      date: '20 May 2023',
      desc: 'Introduction to blockchain technology and its applications.',
      photos: true,
      location: 'Lecture Hall 2',
    },
    {
      title: 'Study Jams Workshop, 2023',
      date: '25-26 May 2023',
      desc: 'Hands-on coding session for smart contracts.',
      photos: true,
      location: 'Tech Lab',
    },
    {
      title: 'Microsoft Azure Fundamentals Industry Training, 2022',
      date: '10-12 October 2022',
      desc: 'Certified training on Azure blockchain services.',
      photos: true,
      location: 'Online',
    },
    {
      title: 'Microsoft Azure Training Session, 2021',
      date: '15 August 2021',
      desc: 'Introductory blockchain training with Azure tools.',
      photos: true,
      location: 'Online',
    },
    {
      title: 'Visit to Microsoft, Gurugram, 2021',
      date: '20 November 2021',
      desc: 'Tour of Microsoft’s blockchain development center.',
      photos: true,
      location: 'Gurugram, India',
    },
    {
      title: 'Blockchain Basics Bootcamp, 2020',
      date: '5-7 December 2020',
      desc: 'Foundational course on blockchain concepts.',
      photos: true,
      location: 'Online',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              width: '4px',
              height: '4px',
              background: 'rgba(255, 87, 34, 0.6)',
              borderRadius: '50%',
              boxShadow: '0 0 12px rgba(255, 87, 34, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Navbar Container */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text pulse-animation">
            Blockchain Club Events
          </span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-2">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`tab-button px-8 py-3 text-lg font-semibold rounded-lg ${
              activeTab === 'upcoming'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`tab-button px-8 py-3 text-lg font-semibold rounded-lg ${
              activeTab === 'past'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event, index) => (
            <div
              key={index}
              className="event-card bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500"
            >
              {/* Event Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              </div>

              {/* Event Details */}
              <p className="text-orange-400 text-sm mb-2">{event.date}</p>
              <p className="text-gray-400 text-sm mb-2">{event.desc}</p>
              <p className="text-gray-500 text-xs mb-2">Location: {event.location}</p>
              {event.time && <p className="text-gray-500 text-xs mb-4">Time: {event.time}</p>}

              {/* Photos Link for Past Events */}
              {event.photos && (
                <a
                  href="#"
                  className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <span>View Photos</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}

              {/* Register Button for Upcoming Events */}
              {activeTab === 'upcoming' && (
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Register Now
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No {activeTab} events available at the moment. Stay tuned for updates!
          </div>
        )}

        
        
        
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Events;