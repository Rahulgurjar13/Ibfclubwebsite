import React, { useState } from 'react';

const JuniorTeamSection = () => {
  const teams = {
    tech: [
      { id: 1, name: "Ryan Cooper", role: "Full Stack Developer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Crafting elegant solutions with React, Node.js and modern web technologies." },
      { id: 2, name: "Mia Chen", role: "Mobile Developer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Specializing in cross-platform mobile applications with Flutter and React Native." },
      { id: 3, name: "Devon Rodriguez", role: "Data Engineer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Building robust data pipelines and analytics infrastructure." },
      { id: 4, name: "Aisha Patel", role: "UX/UI Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Creating intuitive and beautiful user experiences focused on accessibility." }
    ],
    marketing: [
      { id: 5, name: "Leo Garcia", role: "Content Strategist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Developing engaging content strategies across multiple platforms." },
      { id: 6, name: "Sofia Williams", role: "Social Media Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Growing our brand presence through strategic social media campaigns." },
      { id: 7, name: "Jordan Lee", role: "SEO Specialist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Optimizing our digital footprint for maximum visibility and engagement." },
      { id: 8, name: "Emma Davis", role: "Growth Marketer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Driving user acquisition through data-driven growth strategies." }
    ],
    management: [
      { id: 9, name: "Liam Jones", role: "Project Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Ensuring projects are delivered on time, within scope and budget." },
      { id: 10, name: "Olivia Martinez", role: "HR Specialist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Building our culture and ensuring our team has everything they need to succeed." },
      { id: 11, name: "Noah Thompson", role: "Account Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Managing client relationships and ensuring exceptional service delivery." },
      { id: 12, name: "Ava Brown", role: "Finance Analyst", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Providing financial insights to support strategic business decisions." }
    ],
    pr_outreach: [
      { id: 13, name: "Ethan Kim", role: "PR Coordinator", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Building relationships with media and community partners." },
      { id: 14, name: "Zara Ahmed", role: "Event Planner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Organizing impactful events to promote our mission." },
      { id: 15, name: "Lucas Wright", role: "Outreach Specialist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Expanding our network through strategic outreach initiatives." },
      { id: 16, name: "Maya Singh", role: "Communications Lead", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Crafting compelling narratives for our public presence." }
    ],
    design: [
      { id: 17, name: "Isabella Ross", role: "Graphic Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Creating visually stunning designs for our brand identity." },
      { id: 18, name: "Gabriel Ortiz", role: "Motion Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Bringing our concepts to life through animated visuals." },
      { id: 19, name: "Sophie Turner", role: "Web Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Designing responsive and engaging web interfaces." },
      { id: 20, name: "Elijah Hayes", role: "Brand Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Developing consistent branding across all platforms." }
    ],
    multimedia: [
      { id: 21, name: "Harper Nguyen", role: "Video Editor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Producing high-quality video content for our audience." },
      { id: 22, name: "Mason Patel", role: "Photographer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Capturing moments that tell our story visually." },
      { id: 23, name: "Luna Garcia", role: "Audio Engineer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Creating immersive audio experiences for our projects." },
      { id: 24, name: "Caleb Moore", role: "Multimedia Producer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Overseeing multimedia content creation and delivery." }
    ],
    research: [
      { id: 25, name: "Amelia Clark", role: "Blockchain Researcher", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Exploring cutting-edge blockchain technologies and trends." },
      { id: 26, name: "Owen Phillips", role: "Data Analyst", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Analyzing data to inform our strategic decisions." },
      { id: 27, name: "Ruby Khan", role: "Market Researcher", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Studying market trends to guide our growth strategy." },
      { id: 28, name: "Henry Sullivan", role: "Tech Analyst", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80", bio: "Evaluating emerging technologies for implementation." }
    ]
  };

  const MemberCard = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const getRoleBadgeColor = (id) => {
      if (id <= 4) return "bg-blue-100 text-blue-800 border-blue-200"; // Tech
      if (id <= 8) return "bg-green-100 text-green-800 border-green-200"; // Marketing
      if (id <= 12) return "bg-purple-100 text-purple-800 border-purple-200"; // Management
      if (id <= 16) return "bg-yellow-100 text-yellow-800 border-yellow-200"; // PR & Outreach
      if (id <= 20) return "bg-pink-100 text-pink-800 border-pink-200"; // Design
      if (id <= 24) return "bg-indigo-100 text-indigo-800 border-indigo-200"; // Multimedia
      return "bg-red-100 text-red-800 border-red-200"; // Research
    };
    
    return (
      <div className="flex flex-col" key={person.id}>
        <div 
          className="overflow-hidden rounded-lg bg-gray-900 mb-4 border-2 border-gray-800 relative transform transition-all duration-300 ease-in-out"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
            boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.7)' : 'none',
            borderColor: isHovered ? '#f97316' : '#1f2937'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={person.image}
            alt={person.name}
            className="w-full object-cover object-center transition-all duration-300"
            style={{ 
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{person.name}</h3>
            <p className="text-gray-400 text-sm">{person.role}</p>
          </div>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(person.id)} border`}>
            {person.id <= 4 ? 'Developer' : 
             person.id <= 8 ? 'Marketing' : 
             person.id <= 12 ? 'Operations' : 
             person.id <= 16 ? 'PR & Outreach' : 
             person.id <= 20 ? 'Design' : 
             person.id <= 24 ? 'Multimedia' : 'Research'}
          </span>
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

  const TeamGrid = ({ teamMembers }) => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
      {teamMembers.map(member => (
        <MemberCard key={member.id} person={member} />
      ))}
    </div>
  );

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-16 ">
        <div className="mb-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Core</span> Teams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Behind our leadership is a team of passionate blockchain enthusiasts who drive innovation and excellence in every aspect of our club.
          </p>
        </div>

        <div className="mb-20">
          <TeamHeader heading="Technology Team" />
          <TeamGrid teamMembers={teams.tech} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Marketing Team" />
          <TeamGrid teamMembers={teams.marketing} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Management Team" />
          <TeamGrid teamMembers={teams.management} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="PR & Outreach Team" />
          <TeamGrid teamMembers={teams.pr_outreach} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Design Team" />
          <TeamGrid teamMembers={teams.design} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Multimedia Team" />
          <TeamGrid teamMembers={teams.multimedia} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Research Team" />
          <TeamGrid teamMembers={teams.research} />
        </div>
      </div>
    </div>
  );
};

export default JuniorTeamSection;