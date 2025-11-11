import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
            animationDelay: `${Math.random() * 4}s`, width: '4px', height:
            '4px', background: Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.6)' :
            'rgba(181, 55, 242, 0.6)', borderRadius: '50%', boxShadow: `0 0 12px
            $
            {Math.random() > 0.5
              ? "rgba(0, 240, 255, 0.4)"
              : "rgba(181, 55, 242, 0.4)"}
            `, }} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full transform transition duration-300 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
    <div
      className={`
      rounded-xl border border-[#00F0FF] bg-black w-full
      shadow-lg
      ${
        hover
          ? "transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          : ""
      }
      ${className}
    `}
      style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.1)" }}
    >
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return (
    <div className="relative overflow-hidden rounded-t-xl bg-black p-6 border-b border-[#00F0FF]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="relative z-10 flex flex-col space-y-2">{children}</div>
    </div>
  );
}

function CardTitle({ children, className = "" }) {
  return (
    <h3
      className={`text-2xl sm:text-3xl font-bold text-[#00F0FF] ${className}`}
    >
      {children}
    </h3>
  );
}

function CardDescription({ children }) {
  return (
    <p className="text-sm sm:text-base text-white leading-relaxed">
      {children}
    </p>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="bg-black border border-[#00F0FF] rounded-lg p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#4D77FF] group transform"
      style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)" }}
    >
      <div className="text-[#00F0FF] mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-[#00F0FF] font-semibold text-lg mb-2 group-hover:text-[#4D77FF] transition-colors duration-300">
        {title}
      </h4>
      <p className="text-white text-sm group-hover:text-[#E2E8F0] transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-[#00F0FF] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)" }}
    >
      <button
        className="w-full flex items-center justify-between bg-black p-4 text-left hover:bg-[#0F1628] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-[#00F0FF]">{title}</h3>
        <span
          className={`text-[#00F0FF] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-black text-white">{children}</div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // Star animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w,
      h,
      stars = [];
    const shootingStars = [];
    let animationId;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    // Generate stars with depth
    const numStars = 400;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2,
        o: Math.random(),
        twinkle: Math.random() * 0.05 + 0.01,
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, w, h);

      // Background glow
      const grad = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, h);
      grad.addColorStop(0, "rgba(20,20,40,0.3)");
      grad.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw twinkling stars
      for (let s of stars) {
        s.o += (Math.random() - 0.5) * s.twinkle;
        s.o = Math.max(0.1, Math.min(1, s.o));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= 0.01;
        if (sh.life <= 0) shootingStars.splice(i, 1);

        const tail = ctx.createLinearGradient(
          sh.x - sh.vx * 20,
          sh.y - sh.vy * 20,
          sh.x,
          sh.y
        );
        tail.addColorStop(0, "rgba(255,255,255,0)");
        tail.addColorStop(1, `rgba(255,255,255,${sh.life})`);
        ctx.strokeStyle = tail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sh.x - sh.vx * 20, sh.y - sh.vy * 20);
        ctx.lineTo(sh.x, sh.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${sh.life})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(drawStars);
    }

    // Create shooting stars occasionally
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        const startX = Math.random() * w * 0.5;
        const startY = Math.random() * h * 0.4;
        shootingStars.push({
          x: startX,
          y: startY,
          vx: 8 + Math.random() * 4,
          vy: 8 + Math.random() * 4,
          life: 1,
        });
      }
    }, 1200);

    drawStars();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      clearInterval(shootingStarInterval);
    };
  }, []);

  const features = [
    {
      icon: "☁️",
      title: "Cloud Architecture Workshops",
      description:
        "Hands-on learning experiences with industry experts on cloud platforms, serverless computing, and microservices architecture.",
    },
    {
      icon: "💡",
      title: "Hackathons",
      description:
        "Competitive coding events focused on cloud-native applications with mentorship, networking opportunities, and exciting prizes.",
    },
    {
      icon: "🤝",
      title: "Industry Partnerships",
      description:
        "Collaborations with top cloud service providers offering internships and career opportunities in cloud computing.",
    },
    {
      icon: "👥",
      title: "Community Building",
      description:
        "Creating a vibrant network of cloud computing enthusiasts, DevOps engineers, and cloud architects.",
    },
    {
      icon: "🎯",
      title: "Real-world Projects",
      description:
        "Encouragement and support for building scalable cloud applications and contributing to cloud-native open-source projects.",
    },
    {
      icon: "🔗",
      title: "Technical Training",
      description:
        "In-depth training on containerization, Kubernetes, CI/CD pipelines, and cloud infrastructure management.",
    },
  ];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-black text-white pb-12 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #020111 0%, #000 100%)",
        }}
      />

      <div className="navbar-container relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 overflow-hidden py-20 px-6 sm:px-10 mb-12">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className="inline-block p-2 px-4 bg-black backdrop-blur-sm rounded-full mb-4 border border-[#00F0FF] hover:border-[#4D77FF] hover:shadow-lg transition-all duration-300 transform"
            style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)" }}
          >
            <p className="text-sm text-white">
              Bennett University's Official Cloud Computing Club
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gradient-holographic hover:text-[#4D77FF] transition-colors duration-300">
            Cloud Computing Club
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto mb-8">
            Empowering students with knowledge, skills, and opportunities in the
            world of cloud computing and next-gen infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #00F0FF 0%, #4D77FF 100%)",
                color: "#000000",
                boxShadow: "0 0 40px rgba(0, 240, 255, 0.6)",
              }}
            >
              Join Our Community
            </a>
            <button
              className="px-8 py-3 rounded-full bg-transparent border-2 border-[#B537F2] text-[#B537F2] font-medium hover:bg-gradient-to-r hover:from-[#B537F2] hover:to-[#FF00A8] hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              style={{ boxShadow: "0 0 20px rgba(181, 55, 242, 0.4)" }}
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
            <CardTitle>About Cloud Computing Club</CardTitle>
            <CardDescription>
              The Cloud Computing Club is the official cloud technology club of
              Bennett University, dedicated to empowering students with
              knowledge, skills, and opportunities in the world of cloud
              computing and modern infrastructure. At CCC, we believe that cloud
              computing is the future, and we aim to bridge the gap between
              students and the industry by fostering a strong community of cloud
              architects, DevOps engineers, and innovators.
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
                    <span className="text-cyan-400 mr-2">📚</span>
                    <span>
                      Educate through cloud computing workshops, mentorship, and
                      hands-on learning.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">💡</span>
                    <span>
                      Innovate by fostering real-world cloud infrastructure
                      projects.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🤝</span>
                    <span>
                      Connect students with cloud service providers and tech
                      leaders.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🏆</span>
                    <span>
                      Create opportunities via cloud hackathons, competitions,
                      and events.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🚀</span>
                    <span>
                      Inspire leadership in the evolving cloud-native ecosystem.
                    </span>
                  </li>
                </ul>
              </Accordion>

              <Accordion title="What We Do">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">☁️</span>
                    <span>
                      Host workshops on AWS, Azure, Google Cloud &
                      containerization.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">💡</span>
                    <span>
                      Organize cloud-native hackathons with mentorship & prizes.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🤝</span>
                    <span>
                      Collaborate with top cloud providers & tech startups.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🌍</span>
                    <span>
                      Connect students with cloud architects & DevOps experts.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🔗</span>
                    <span>
                      Conduct hands-on training on Kubernetes, Docker & CI/CD.
                    </span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <span className="text-cyan-400 mr-2">🏅</span>
                    <span>
                      Recognize and reward top talent in cloud infrastructure
                      development.
                    </span>
                  </li>
                </ul>
              </Accordion>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
              <div
                className="text-center p-4 bg-black rounded-lg border border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#4D77FF] transform"
                style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)" }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#00F0FF] mb-1 transition-transform duration-300 hover:scale-110 transform">
                  500+
                </p>
                <p className="text-white text-sm">Community Members</p>
              </div>
              <div
                className="text-center p-4 bg-black rounded-lg border border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#4D77FF] transform"
                style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)" }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#00F0FF] mb-1 transition-transform duration-300 hover:scale-110 transform">
                  20+
                </p>
                <p className="text-white text-sm">Workshops Conducted</p>
              </div>
              <div
                className="text-center p-4 bg-black rounded-lg border border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#4D77FF] transform"
                style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)" }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#00F0FF] mb-1 transition-transform duration-300 hover:scale-110 transform">
                  15+
                </p>
                <p className="text-white text-sm">Industry Partners</p>
              </div>
              <div
                className="text-center p-4 bg-black rounded-lg border border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#4D77FF] transform"
                style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)" }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#00F0FF] mb-1 transition-transform duration-300 hover:scale-110 transform">
                  5+
                </p>
                <p className="text-white text-sm">Hackathons Organized</p>
              </div>
            </div>

            <div
              className="bg-black rounded-xl p-8 border border-[#00F0FF] text-center transition-all duration-300 hover:shadow-xl hover:border-[#4D77FF]"
              style={{ boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)" }}
            >
              <h3 className="text-2xl font-bold text-[#00F0FF] mb-4">
                Join the Cloud Computing Revolution
              </h3>
              <p className="text-white max-w-2xl mx-auto mb-6">
                Whether you're a cloud expert or just getting started, Cloud
                Computing Club welcomes you to be part of our growing community
                of innovators shaping the future of cloud infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #00F0FF 0%, #4D77FF 100%)",
                    color: "#000000",
                    boxShadow: "0 0 40px rgba(0, 240, 255, 0.6)",
                  }}
                >
                  Join CCC Today
                </a>
                <button
                  className="px-8 py-3 rounded-full bg-black border-2 border-[#B537F2] text-[#B537F2] font-medium hover:bg-gradient-to-r hover:from-[#B537F2] hover:to-[#FF00A8] hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                  style={{ boxShadow: "0 0 20px rgba(181, 55, 242, 0.4)" }}
                  onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
}
