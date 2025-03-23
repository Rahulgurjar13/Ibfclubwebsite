import React, { useState } from 'react';

const JuniorTeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  // Junior tech team members
  const techTeam = [
    {
      id: 1,
      name: "Ryan Cooper",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Crafting elegant solutions with React, Node.js and modern web technologies."
    },
    {
      id: 2,
      name: "Mia Chen",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Specializing in cross-platform mobile applications with Flutter and React Native."
    },
    {
      id: 3,
      name: "Devon Rodriguez",
      role: "Data Engineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Building robust data pipelines and analytics infrastructure."
    },
    {
      id: 4,
      name: "Aisha Patel",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Creating intuitive and beautiful user experiences focused on accessibility."
    }
  ];

  // Junior marketing team members
  const marketingTeam = [
    {
      id: 5,
      name: "Leo Garcia",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Developing engaging content strategies across multiple platforms."
    },
    {
      id: 6,
      name: "Sofia Williams",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Growing our brand presence through strategic social media campaigns."
    },
    {
      id: 7,
      name: "Jordan Lee",
      role: "SEO Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Optimizing our digital footprint for maximum visibility and engagement."
    },
    {
      id: 8,
      name: "Emma Davis",
      role: "Growth Marketer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Driving user acquisition through data-driven growth strategies."
    }
  ];

  // Junior management team members
  const managementTeam = [
    {
      id: 9,
      name: "Liam Jones",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Ensuring projects are delivered on time, within scope and budget."
    },
    {
      id: 10,
      name: "Olivia Martinez",
      role: "HR Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Building our culture and ensuring our team has everything they need to succeed."
    },
    {
      id: 11,
      name: "Noah Thompson",
      role: "Account Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Managing client relationships and ensuring exceptional service delivery."
    },
    {
      id: 12,
      name: "Ava Brown",
      role: "Finance Analyst",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Providing financial insights to support strategic business decisions."
    }
  ];

  // Component to render team member cards
  const TeamMemberCard = ({ member }) => (
    <div 
      key={member.id} 
      className="group relative flex flex-col mx-4"
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
  );

  // Section header component
  const SectionHeader = ({ title, color = "orange-500" }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-4">
        <span className={`text-${color} mr-2`}>•</span> {title}
      </h2>
      <div className={`h-0.5 w-16 bg-${color}`}></div>
    </div>
  );

  return (
    <div className="bg-black text-white py-24 px-8 lg:px-24">
      {/* Main Header */}
      <div className="mb-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Our <span className="text-orange-500">Core</span> Teams
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Behind our leadership are dedicated professionals who bring innovation and excellence to every aspect of our business.
        </p>
      </div>

      {/* Tech Team Section */}
      <div className="mb-32">
        <SectionHeader title="Technology Team" color="blue-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mx-auto max-w-7xl">
          {techTeam.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Marketing Team Section */}
      <div className="mb-32">
        <SectionHeader title="Marketing Team" color="green-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mx-auto max-w-7xl">
          {marketingTeam.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Management Team Section */}
      <div>
        <SectionHeader title="Management Team" color="purple-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mx-auto max-w-7xl">
          {managementTeam.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuniorTeamSection;