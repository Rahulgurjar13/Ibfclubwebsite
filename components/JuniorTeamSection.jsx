import React, { useState } from "react";

const JuniorTeamSection = () => {
  const teams = {
    tech: [
      {
        id: 1,
        name: "Arjun Sharma",
        role: "Full Stack Developer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Crafting elegant solutions with React, Node.js and modern web technologies.",
      },
      {
        id: 2,
        name: "Priya Nair",
        role: "Mobile Developer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Specializing in cross-platform mobile applications with Flutter and React Native.",
      },
      {
        id: 3,
        name: "Rohan Patel",
        role: "Data Engineer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Building robust data pipelines and analytics infrastructure.",
      },
      {
        id: 4,
        name: "Ananya Gupta",
        role: "UX/UI Designer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Creating intuitive and beautiful user experiences focused on accessibility.",
      },
    ],
    marketing: [
      {
        id: 5,
        name: "Vikram Singh",
        role: "Content Strategist",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Developing engaging content strategies across multiple platforms.",
      },
      {
        id: 6,
        name: "Neha Kapoor",
        role: "Social Media Manager",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Growing our brand presence through strategic social media campaigns.",
      },
      {
        id: 7,
        name: "Karan Malhotra",
        role: "SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Optimizing our digital footprint for maximum visibility and engagement.",
      },
      {
        id: 8,
        name: "Diya Verma",
        role: "Growth Marketer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Driving user acquisition through data-driven growth strategies.",
      },
    ],
    management: [
      {
        id: 9,
        name: "Aditya Rao",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Ensuring projects are delivered on time, within scope and budget.",
      },
      {
        id: 10,
        name: "Shreya Iyer",
        role: "HR Specialist",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Building our culture and ensuring our team has everything they need to succeed.",
      },
      {
        id: 11,
        name: "Rahul Khanna",
        role: "Account Manager",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Managing client relationships and ensuring exceptional service delivery.",
      },
      {
        id: 12,
        name: "Pooja Desai",
        role: "Finance Analyst",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Providing financial insights to support strategic business decisions.",
      },
    ],
    pr_outreach: [
      {
        id: 13,
        name: "Sameer Joshi",
        role: "PR Coordinator",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Building relationships with media and community partners.",
      },
      {
        id: 14,
        name: "Tara Menon",
        role: "Event Planner",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Organizing impactful events to promote our mission.",
      },
      {
        id: 15,
        name: "Nikhil Reddy",
        role: "Outreach Specialist",
        image:
          "https://images.unsplash.com/photo-1360250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Expanding our network through strategic outreach initiatives.",
      },
      {
        id: 16,
        name: "Riya Chopra",
        role: "Communications Lead",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Crafting compelling narratives for our public presence.",
      },
    ],
    design: [
      {
        id: 17,
        name: "Ishita Bose",
        role: "Graphic Designer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Creating visually stunning designs for our brand identity.",
      },
      {
        id: 18,
        name: "Aryan Thakur",
        role: "Motion Designer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Bringing our concepts to life through animated visuals.",
      },
      {
        id: 19,
        name: "Sana Kulkarni",
        role: "Web Designer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Designing responsive and engaging web interfaces.",
      },
      {
        id: 20,
        name: "Kabir Mehra",
        role: "Brand Designer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Developing consistent branding across all platforms.",
      },
    ],
    multimedia: [
      {
        id: 21,
        name: "Meera Pillai",
        role: "Video Editor",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Producing high-quality video content for our audience.",
      },
      {
        id: 22,
        name: "Yash Dubey",
        role: "Photographer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Capturing moments that tell our story visually.",
      },
      {
        id: 23,
        name: "Kavya Jain",
        role: "Audio Engineer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Creating immersive audio experiences for our projects.",
      },
      {
        id: 24,
        name: "Siddharth Roy",
        role: "Multimedia Producer",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Overseeing multimedia content creation and delivery.",
      },
    ],
    research: [
      {
        id: 25,
        name: "Aisha Siddiqui",
        role: "Cloud Researcher",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Exploring cutting-edge cloud computing technologies and trends.",
      },
      {
        id: 26,
        name: "Omkar Yadav",
        role: "Data Analyst",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Analyzing data to inform our strategic decisions.",
      },
      {
        id: 27,
        name: "Tanvi Shah",
        role: "Market Researcher",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Studying market trends to guide our growth strategy.",
      },
      {
        id: 28,
        name: "Harsh Vardhan",
        role: "Tech Analyst",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
        bio: "Evaluating emerging technologies for implementation.",
      },
    ],
  };

  const MemberCard = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getRoleBadgeColor = (id) => {
      if (id <= 4) return "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"; // Tech
      if (id <= 8) return "bg-green-500/20 text-green-400 border-green-500/50"; // Marketing
      if (id <= 12)
        return "bg-purple-500/20 text-purple-400 border-purple-500/50"; // Management
      if (id <= 16)
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"; // PR & Outreach
      if (id <= 20) return "bg-pink-500/20 text-pink-400 border-pink-500/50"; // Design
      if (id <= 24) return "bg-blue-500/20 text-blue-400 border-blue-500/50"; // Multimedia
      return "bg-red-500/20 text-red-400 border-red-500/50"; // Research
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
