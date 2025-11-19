import React, { useState } from "react";

const JuniorTeamSection = () => {
  const teams = {
    tech: [
      {
        id: 1,
        name: "Vishu Pratap",
        role: "Tech Team Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Leading technical development and innovation initiatives.",
      },
      {
        id: 2,
        name: "Anshul Bhathija",
        role: "Tech Team Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Supporting tech operations and project implementation.",
      },
      {
        id: 3,
        name: "Saksham Srivastva",
        role: "Tech Team Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Driving technical excellence and team collaboration.",
      },
    ],
    design: [
      {
        id: 4,
        name: "Kunal",
        role: "Design Team Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Leading design initiatives and creating stunning visual experiences.",
      },
      {
        id: 5,
        name: "Swamima",
        role: "Design Team Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Creating visually stunning designs for our brand identity.",
      },
      {
        id: 6,
        name: "Om Bansal",
        role: "Design Team Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Bringing creative concepts to life through innovative design.",
      },
    ],
    management: [
      {
        id: 7,
        name: "Varun",
        role: "Management Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Ensuring smooth operations and strategic planning.",
      },
      {
        id: 8,
        name: "Manish",
        role: "Management Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Coordinating team activities and resource management.",
      },
      {
        id: 9,
        name: "DONI",
        role: "Management Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Supporting organizational efficiency and team coordination.",
      },
    ],
    multimedia: [
      {
        id: 10,
        name: "Yash",
        role: "Multimedia Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Producing high-quality multimedia content for our audience.",
      },
      {
        id: 11,
        name: "Daksh",
        role: "Multimedia Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Creating engaging visual and audio content.",
      },
    ],
    content: [
      {
        id: 12,
        name: "Tanishq",
        role: "Content Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Developing engaging content strategies across multiple platforms.",
      },
      {
        id: 13,
        name: "Ashay",
        role: "Content Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Crafting compelling narratives for our audience.",
      },
    ],
    research: [
      {
        id: 14,
        name: "Vedant",
        role: "Research Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Leading research initiatives and technical documentation.",
      },
    ],
    social_media: [
      {
        id: 15,
        name: "Ayushka Mandal",
        role: "Social Media Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Growing our brand presence through strategic social media campaigns.",
      },
      {
        id: 16,
        name: "Shimon Sarin",
        role: "Social Media Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Managing social media engagement and content strategy.",
      },
      {
        id: 17,
        name: "Ryan",
        role: "Social Media Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Driving social media growth and community engagement.",
      },
    ],
    pr: [
      {
        id: 18,
        name: "Anushka",
        role: "PR Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Building relationships with media and community partners.",
      },
      {
        id: 19,
        name: "Lavnaya",
        role: "PR Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Managing public relations and brand communications.",
      },
    ],
    sponsorship: [
      {
        id: 20,
        name: "Aaryan",
        role: "Sponsorship Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Securing partnerships and sponsorship opportunities.",
      },
      {
        id: 21,
        name: "Krishna",
        role: "Sponsorship Co-Head",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Building strategic partnerships for club growth.",
      },
    ],
  };

  const MemberCard = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getRoleBadgeColor = (id) => {
      if (id <= 3) return "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"; // Tech Team
      if (id <= 6) return "bg-pink-500/20 text-pink-400 border-pink-500/50"; // Design Team
      if (id <= 9) return "bg-purple-500/20 text-purple-400 border-purple-500/50"; // Management
      if (id <= 11) return "bg-blue-500/20 text-blue-400 border-blue-500/50"; // Multimedia
      if (id <= 13) return "bg-green-500/20 text-green-400 border-green-500/50"; // Content
      if (id <= 14) return "bg-red-500/20 text-red-400 border-red-500/50"; // Research
      if (id <= 17) return "bg-indigo-500/20 text-indigo-400 border-indigo-500/50"; // Social Media
      if (id <= 19) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"; // PR
      return "bg-orange-500/20 text-orange-400 border-orange-500/50"; // Sponsorship
    };

    return (
      <div className="flex flex-col" key={person.id}>
        <div
          className="overflow-hidden rounded-lg bg-gray-900 mb-4 border-2 border-gray-800 relative transform transition-all duration-300 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isHovered
              ? "0 10px 25px -5px rgba(0, 240, 255, 0.4)"
              : "none",
            borderColor: isHovered ? "#00F0FF" : "#1f2937",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-full object-cover object-center transition-all duration-300"
            style={{
              filter: isHovered ? "brightness(1.1)" : "brightness(1)",
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{person.name}</h3>
            <p className="text-gray-400 text-sm">{person.role}</p>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
              person.id
            )} border`}
          >
            {person.id <= 4
              ? "Developer"
              : person.id <= 8
              ? "Marketing"
              : person.id <= 12
              ? "Operations"
              : person.id <= 16
              ? "PR & Outreach"
              : person.id <= 20
              ? "Design"
              : person.id <= 24
              ? "Multimedia"
              : "Research"}
          </span>
        </div>
      </div>
    );
  };

  const TeamHeader = ({ heading, accentColor = "cyan-400" }) => (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-4">
        <span className={`text-${accentColor} mr-2`}>{heading}</span>
      </h2>
    </div>
  );

  const TeamGrid = ({ teamMembers }) => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
      {teamMembers.map((member) => (
        <MemberCard key={member.id} person={member} />
      ))}
    </div>
  );

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-16 ">
        <div className="mb-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-cyan-400">Core</span> Teams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Behind our leadership is a team of passionate cloud computing
            enthusiasts who drive innovation and excellence in every aspect of
            our club.
          </p>
        </div>

        <div className="mb-20">
          <TeamHeader heading="Technology Team" />
          <TeamGrid teamMembers={teams.tech} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Design Team" />
          <TeamGrid teamMembers={teams.design} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Management Team" />
          <TeamGrid teamMembers={teams.management} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Multimedia Team" />
          <TeamGrid teamMembers={teams.multimedia} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Content Team" />
          <TeamGrid teamMembers={teams.content} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Research Team" />
          <TeamGrid teamMembers={teams.research} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Social Media Team" />
          <TeamGrid teamMembers={teams.social_media} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="PR Team" />
          <TeamGrid teamMembers={teams.pr} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Sponsorship Team" />
          <TeamGrid teamMembers={teams.sponsorship} />
        </div>
      </div>
    </div>
  );
};

export default JuniorTeamSection;
