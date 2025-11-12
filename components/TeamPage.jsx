import React, { useState, useEffect, useRef } from "react";
import JuniorTeamSection from "./JuniorTeamSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TeamPage = () => {
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

  const teamMembers = [
    {
      id: 1,
      name: "Shreyash Mishra",
      role: "President",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Passionate leader with a vision for innovation and growth.",
    },
    {
      id: 2,
      name: "Archit Gupta",
      role: "Vice President",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Strategic leader focused on sustainable growth and operational excellence.",
    },
    {
      id: 3,
      name: "Rahul Gujjar",
      role: "General Secretary",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      bio: "Dedicated to managing club operations and fostering member engagement.",
    },
  ];

  const LeadershipCard = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Define badge colors and designs based on role
    const getBadgeConfig = (role) => {
      if (role === "President") {
        return {
          bgColor: "bg-cyan-500",
          borderColor: "border-cyan-400",
          textColor: "text-white",
          shadowColor: "shadow-cyan-700/20",
        };
      } else if (role === "Vice President") {
        return {
          bgColor: "bg-purple-500",
          borderColor: "border-purple-400",
          textColor: "text-white",
          shadowColor: "shadow-purple-700/20",
        };
      } else if (role === "General Secretary") {
        return {
          bgColor: "bg-green-500",
          borderColor: "border-green-400",
          textColor: "text-white",
          shadowColor: "shadow-green-700/20",
        };
      } else {
        return {
          bgColor: "bg-gray-700",
          borderColor: "border-gray-600",
          textColor: "text-white",
          shadowColor: "shadow-gray-900/20",
        };
      }
    };

    const badgeConfig = getBadgeConfig(person.role);

    return (
      <div className="flex flex-col" key={person.id}>
        <div
          className="overflow-hidden rounded-lg bg-gray-900 mb-4 border-2 border-gray-800 relative h-72 w-56 mx-auto transition-all duration-300 ease-in-out"
          style={{
            borderColor: isHovered ? "#00F0FF" : "#1f2937",
            boxShadow: isHovered
              ? "0 10px 20px -5px rgba(0, 0, 0, 0.3)"
              : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-top transition-all duration-300"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Position Badge (Bottom of image) */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-3">
            <div
              className={`${badgeConfig.bgColor} ${badgeConfig.textColor} px-4 py-1 text-sm font-medium border ${badgeConfig.borderColor} rounded-full ${badgeConfig.shadowColor} shadow-lg backdrop-blur-sm bg-opacity-90 transform transition-transform duration-300`}
              style={{
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {person.role}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-4">
          <h3
            className="text-lg font-semibold text-white transition-colors duration-300"
            style={{ color: isHovered ? "#00F0FF" : "" }}
          >
            {person.name}
          </h3>
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #020111 0%, #000 100%)",
        }}
      />

      <Navbar className="relative z-10 m-0 p-0" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 px-8 lg:px-24 pt-16">
          <div className="transform transition-all duration-300 ease-in-out hover:translate-x-2">
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Meet Our <br />
              <span className="text-white">Visionary</span>{" "}
              <span className="text-cyan-400">Team</span>
            </h1>
            <div className="h-1 w-24 bg-cyan-400 mt-6"></div>
          </div>
          <div className="flex items-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team is our biggest strength! We are a passionate group of
              innovators dedicated to exploring cloud computing technology and
              pushing the boundaries of cloud-native infrastructure.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 py-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leaders guiding our club toward innovation and
              excellence in cloud computing.
            </p>
          </div>

          <div className="flex justify-center gap-16 mx-auto mb-24">
            {teamMembers.map((member) => (
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
