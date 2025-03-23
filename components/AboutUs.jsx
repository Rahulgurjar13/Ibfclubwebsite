import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  .navbar-container {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.9);
    padding: 0 1rem;
  }

  .event-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(255, 87, 34, 0.3);
  }
`;

// WhatsApp group link (replace with your actual WhatsApp group invite link)
const whatsappGroupLink = "https://chat.whatsapp.com/GBSbc0HutJM5Ld1f5RSv3F";

function PhotoGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/30"
            onClick={() => openModal(img)}
          >
            <div className="absolute inset-0 bg-black/60 opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black p-4 transform translate-y-0 transition-all duration-300 group-hover:bg-orange-600 group-hover:translate-y-0">
              <p className="text-white text-sm font-medium">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-[90vh] w-full transform transition duration-300 animate-fadeIn" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-orange-500/40"
            />
            <div className="bg-black p-4 rounded-b-lg">
              <p className="text-white text-lg">{selectedImage.description}</p>
            </div>
            <button 
              className="absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 transform transition duration-150"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Card({ children, className = "", hover = true }) {
  return (
    <div className={`
      rounded-xl border border-orange-600 bg-black w-full
      shadow-lg shadow-orange-500/10
      ${hover ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-orange-600/30 hover:-translate-y-2' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return (
    <div className="relative overflow-hidden rounded-t-xl bg-black p-6 border-b border-orange-600">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="relative z-10 flex flex-col space-y-2">{children}</div>
    </div>
  );
}

function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-2xl sm:text-3xl font-bold text-orange-500 ${className}`}>{children}</h3>
  );
}

function CardDescription({ children }) {
  return (
    <p className="text-sm sm:text-base text-white leading-relaxed">{children}</p>
  );
}

function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 ${className}`}>{children}</div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-black border border-orange-600 rounded-lg p-5 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-2 hover:border-orange-500 group transform">
      <div className="text-orange-500 mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h4 className="text-orange-500 font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors duration-300">{title}</h4>
      <p className="text-white text-sm group-hover:text-orange-50 transition-colors duration-300">{description}</p>
    </div>
  );
}

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-orange-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
      <button 
        className="w-full flex items-center justify-between bg-black p-4 text-left hover:bg-orange-950/20 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-orange-500">{title}</h3>
        <span className={`text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 bg-black text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const navigate = useNavigate();

  const features = [
    { 
      icon: "🚀", 
      title: "Blockchain Workshops", 
      description: "Hands-on learning experiences with industry experts on blockchain technologies, NFTs, and DeFi fundamentals."
    },
    { 
      icon: "💡", 
      title: "Hackathons", 
      description: "Competitive coding events with mentorship, networking opportunities, and exciting prizes."
    },
    { 
      icon: "🤝", 
      title: "Industry Partnerships", 
      description: "Collaborations with top blockchain firms offering internships and career opportunities."
    },
    { 
      icon: "👥", 
      title: "Community Building", 
      description: "Creating a vibrant network of Web3 enthusiasts, developers, and innovators."
    },
    { 
      icon: "🎯", 
      title: "Real-world Projects", 
      description: "Encouragement and support for building practical blockchain applications and open-source contributions."
    },
    { 
      icon: "🔗", 
      title: "Technical Training", 
      description: "In-depth training on smart contract development, dApp creation, and blockchain infrastructure."
    }
  ];

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-black text-white pb-12 relative overflow-hidden">
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

      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="relative overflow-hidden py-20 px-6 sm:px-10 mb-12">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block p-2 px-4 bg-black backdrop-blur-sm rounded-full mb-4 border border-orange-600 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform">
            <p className="text-sm text-white">Bennett University's Official Blockchain Club</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-orange-500 hover:text-orange-400 transition-colors duration-300">
            Indian Blockchain Fraternity
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto mb-8">
            Empowering students with knowledge, skills, and opportunities in the world of blockchain and Web3
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:shadow-none"
            >
              Join Our Community
            </a>
            <button 
              className="px-8 py-3 rounded-full bg-transparent border border-orange-500 text-orange-500 font-medium hover:bg-orange-600/10 hover:text-orange-400 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-16 relative z-10">
        <Card>
          <CardHeader>
            <CardTitle>About IBF</CardTitle>
            <CardDescription>
              The Indian Blockchain Fraternity (IBF) is the official blockchain club of Bennett University, dedicated to empowering students with knowledge, skills, and opportunities in the world of blockchain and Web3.
              At IBF, we believe that blockchain is the future, and we aim to bridge the gap between students and the industry by fostering a strong community of developers, enthusiasts, and innovators.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Accordion title="Our Mission">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">📚</span>
                    <span>Educate through workshops, mentorship, and hands-on learning.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">💡</span>
                    <span>Innovate by fostering real-world blockchain projects.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🤝</span>
                    <span>Connect students with industry leaders and startups.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🏆</span>
                    <span>Create opportunities via hackathons, competitions, and events.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🚀</span>
                    <span>Inspire leadership in the evolving Web3 ecosystem.</span>
                  </li>
                </ul>
              </Accordion>

              <Accordion title="What We Do">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🚀</span>
                    <span>Host workshops on blockchain, NFTs & DeFi.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">💡</span>
                    <span>Organize hackathons with mentorship & prizes.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🤝</span>
                    <span>Collaborate with top blockchain firms & startups.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🌍</span>
                    <span>Connect students with industry leaders & experts.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🔗</span>
                    <span>Conduct hands-on training on smart contracts & dApps.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-orange-500 mr-2">🏅</span>
                    <span>Recognize and reward top talent in blockchain development.</span>
                  </li>
                </ul>
              </Accordion>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
              <div className="text-center p-4 bg-black rounded-lg border border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 hover:border-orange-500 transform">
                <p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1 transition-transform duration-300 hover:scale-110 transform">500+</p>
                <p className="text-white text-sm">Community Members</p>
              </div>
              <div className="text-center p-4 bg-black rounded-lg border border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 hover:border-orange-500 transform">
                <p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1 transition-transform duration-300 hover:scale-110 transform">20+</p>
                <p className="text-white text-sm">Workshops Conducted</p>
              </div>
              <div className="text-center p-4 bg-black rounded-lg border border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 hover:border-orange-500 transform">
                <p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1 transition-transform duration-300 hover:scale-110 transform">15+</p>
                <p className="text-white text-sm">Industry Partners</p>
              </div>
              <div className="text-center p-4 bg-black rounded-lg border border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 hover:border-orange-500 transform">
                <p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1 transition-transform duration-300 hover:scale-110 transform">5+</p>
                <p className="text-white text-sm">Hackathons Organized</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500">Club Highlights</h3>
              <PhotoGallery 
                images={[
                  {
                    url: "/images/1.jpeg",
                    alt: "Team Photo",
                    description: "Our amazing team at the annual blockchain conference"
                  },
                  {
                    url: "/images/2.jpeg",
                    alt: "Workshop",
                    description: "Smart Contract Development Workshop"
                  },
                  {
                    url: "/images/g4.JPG",
                    alt: "Hackathon",
                    description: "Winners of the 2024 Blockchain Hackathon"
                  },
                  {
                    url: "/images/g6.JPG",
                    alt: "Guest Speaker",
                    description: "Industry expert sharing insights on Web3 technologies"
                  },
                  {
                    url: "/images/g8.jpeg",
                    alt: "Event",
                    description: "Students networking at our quarterly blockchain meetup"
                  },
                  {
                    url: "/images/g5.JPG",
                    alt: "Project Demo",
                    description: "Project showcase from our talented members"
                  }
                ]}
              />
            </div>

            <div className="bg-black rounded-xl p-8 border border-orange-600 text-center transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Join the Blockchain Revolution</h3>
              <p className="text-white max-w-2xl mx-auto mb-6">
                Whether you're a blockchain expert or just getting started, IBF welcomes you to be part of our growing community of innovators shaping the future of Web3.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:shadow-md"
                >
                  Join IBF Today
                </a>
                <button 
                  className="px-8 py-3 rounded-full bg-black border border-orange-500 text-orange-500 font-medium hover:bg-orange-600/10 hover:text-orange-400 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                  onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='pt-4'>
        <Footer />
      </div>
    </div>
  ); 
}