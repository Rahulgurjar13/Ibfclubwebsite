import React, { useState } from 'react';
import JuniorTeamSection from './JuniorTeamSection';
import Navbar from './Navbar'; // Adjust the import path based on your project structure
import Footer from './Footer';

const TeamPage = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Passionate leader with a vision for innovation and growth."
    },
    {
      id: 2,
      name: "Jordyn Gouse",
      role: "Vice President & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Strategic leader focused on sustainable growth and operational excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Optional: Background layer (could add Vanta or stars here if desired) */}
      <div className="absolute inset-0 z-0" style={{ opacity: '90%' }}></div>

      {/* Navbar at the top with no space above */}
      <Navbar className="relative z-10 m-0 p-0" /> {/* Ensure no margin or padding */}

      {/* Content container */}
      <div className="relative z-10">
        {/* Header Section with spacing below Navbar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 px-8 lg:px-24 pt-16">
          <div className="transform transition-all duration-500 hover:translate-x-2">
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

        {/* Leadership Section */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Leadership</span>
          </h1>
        </div>

        {/* Team Grid with only two cards and centered */}
        <div className="flex justify-center gap-16 mx-auto max-w-7xl mb-32 px-8">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className="group relative flex flex-col w-64"
              onMouseEnter={() => setActiveTeamMember(member.id)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              <div className="aspect-w-1 aspect-h-1 mb-5 overflow-hidden rounded-md shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 filter group-hover:brightness-75"
                />
                {/* Bio overlay on hover */}
                <div className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 ${activeTeamMember === member.id ? 'opacity-100' : ''}`}>
                  <p className="text-white text-center">{member.bio}</p>
                </div>
              </div>
              <div className="transform transition-all duration-300 group-hover:translate-x-2 py-2">
                <h3 className="text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors duration-300">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <div className="h-0.5 w-0 bg-orange-500 mt-2 transition-all duration-300 group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div> 

        <JuniorTeamSection />
      </div>
      <Footer></Footer>
    </div>
    
  );
};

export default TeamPage;