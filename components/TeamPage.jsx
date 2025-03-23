import React, { useState } from 'react';
import JuniorTeamSection from './JuniorTeamSection';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Aditya krishna sharma",
      role: "President",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Passionate leader with a vision for innovation and growth."
    },
    {
      id: 2,
      name: "Indresh Agrawal",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Strategic leader focused on sustainable growth and operational excellence."
    }
  ];

  const LeadershipCard = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Define badge colors and designs based on role
    const getBadgeConfig = (role) => {
      if (role === "President") {
        return {
          bgColor: "bg-orange-500",
          borderColor: "border-orange-400",
          textColor: "text-white",
          shadowColor: "shadow-orange-700/20"
        };
      } else if (role === "Vice President") {
        return {
          bgColor: "bg-blue-500",
          borderColor: "border-blue-400",
          textColor: "text-white",
          shadowColor: "shadow-blue-700/20"
        };
      } else {
        return {
          bgColor: "bg-gray-700",
          borderColor: "border-gray-600",
          textColor: "text-white",
          shadowColor: "shadow-gray-900/20"
        };
      }
    };
    
    const badgeConfig = getBadgeConfig(person.role);
    
    return (
      <div className="flex flex-col" key={person.id}>
        <div 
          className="overflow-hidden rounded-lg bg-gray-900 mb-4 border-2 border-gray-800 relative h-72 w-56 mx-auto transition-all duration-300 ease-in-out"
          style={{ 
            borderColor: isHovered ? '#f97316' : '#1f2937',
            boxShadow: isHovered ? '0 10px 20px -5px rgba(0, 0, 0, 0.3)' : 'none'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-top transition-all duration-300"
            style={{ 
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Position Badge (Bottom of image) */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-3">
            <div className={`${badgeConfig.bgColor} ${badgeConfig.textColor} px-4 py-1 text-sm font-medium border ${badgeConfig.borderColor} rounded-full ${badgeConfig.shadowColor} shadow-lg backdrop-blur-sm bg-opacity-90 transform transition-transform duration-300`}
                 style={{
                   transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                 }}
            >
              {person.role}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center mb-4">
          <h3 className="text-lg font-semibold text-white transition-colors duration-300" 
            style={{ color: isHovered ? '#f97316' : '' }}>
            {person.name}
          </h3>
        </div>
      </div>
    );
  };

  const TeamHeader = ({ heading, accentColor = "orange-500" }) => (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-4">
        <span className={`text-${accentColor} mr-2`}>{heading}</span>
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0" style={{ opacity: '90%' }}></div>

      <Navbar className="relative z-10 m-0 p-0" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 px-8 lg:px-24 pt-16">
          <div className="transform transition-all duration-300 ease-in-out hover:translate-x-2">
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Meet Our <br />
              <span className="text-white">Visionary</span> <span className="text-orange-500">Team</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 mt-6"></div>
          </div>
          <div className="flex items-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team is our biggest strength! We are a passionate group of innovators dedicated to exploring blockchain technology and pushing the boundaries of decentralization.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 py-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-orange-500">Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leaders guiding our company toward innovation and excellence.
            </p>
          </div>

          <div className="flex justify-center gap-16 mx-auto mb-24">
            {teamMembers.map(member => (
              <LeadershipCard key={member.id} person={member} />
            ))}
          </div>
        </div>

        <JuniorTeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;