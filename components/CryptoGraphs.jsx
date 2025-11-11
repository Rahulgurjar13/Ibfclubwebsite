import React, { useState, useEffect, useRef } from "react";

const CryptoGraphs = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const canvasRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@bennett\.edu\.in$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        type: "error",
        message: "Please use your Bennett University email (@bennett.edu.in)",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message: "✓ Successfully added to waitlist!",
      });
      setEmail("");
      setIsSubmitting(false);

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

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
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
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

  const styles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    @keyframes moveLine1 {
      0% { transform: translate(-100%, -100%) rotate(-45deg); }
      100% { transform: translate(200vw, 200vh) rotate(-45deg); }
    }
    
    @keyframes moveLine2 {
      0% { transform: translate(100vw, -100%) rotate(-45deg); }
      100% { transform: translate(-100%, 200vh) rotate(-45deg); }
    }

    .waitlist-container {
      animation: fadeIn 0.8s ease-out;
    }
    
    .tech-line {
      position: absolute;
      width: 1px;
      height: 100vh;
      pointer-events: none;
      background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.4) 20%, rgba(59, 130, 246, 0.6) 50%, rgba(59, 130, 246, 0.4) 80%, transparent 100%);
    }
    
    .tech-line-purple {
      background: linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.4) 20%, rgba(147, 51, 234, 0.6) 50%, rgba(147, 51, 234, 0.4) 80%, transparent 100%);
    }
    
    .tech-line-1 {
      animation: moveLine1 25s linear infinite;
    }
    
    .tech-line-2 {
      animation: moveLine2 30s linear infinite;
      animation-delay: 5s;
    }
    
    .tech-line-3 {
      animation: moveLine1 35s linear infinite;
      animation-delay: 10s;
    }
    
    .tech-line-4 {
      animation: moveLine2 28s linear infinite;
      animation-delay: 15s;
    }
    
    .submit-button {
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    }
    
    .submit-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    .submit-button:hover::before {
      left: 100%;
    }
    
    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(37, 99, 235, 0.4);
    }
    
    .email-input {
      transition: all 0.3s ease;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(10px);
    }
    
    .email-input:focus {
      background: rgba(15, 23, 42, 0.8);
      border-color: rgba(59, 130, 246, 0.5);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .title-gradient {
      background: linear-gradient(135deg, #ffffff 0%, #00f0ff 100%);
      background-size: 200% 200%;
      animation: shimmer 3s ease-in-out infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Realistic Star Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #020111 0%, #000 100%)",
        }}
      />

      {/* Main Content */}
      <div className="waitlist-container relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Title Section */}
        <div className="mb-16">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/30 mb-10 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400"></span>
            </span>
            <span className="text-blue-300 text-sm font-semibold tracking-wide">
              LIMITED SPOTS • JOIN NOW
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="title-gradient block">Core Members</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 block mt-2">
              Waiting List
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4 font-light leading-relaxed">
            Be the first to know when applications open.
            <br className="hidden md:block" />
            Join our exclusive waitlist for core team positions.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto px-4"
        >
          <div className="relative w-full sm:flex-1 z-20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enrollmentNumber@bennett.edu.in"
              required
              disabled={isSubmitting}
              className="email-input relative z-20 w-full px-6 py-5 border-2 border-gray-800/50 rounded-xl text-white placeholder-gray-500 outline-none text-base disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ pointerEvents: "auto" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button relative z-20 w-full sm:w-auto px-12 py-5 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed text-base whitespace-nowrap"
            style={{ pointerEvents: "auto" }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`mt-6 p-5 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
              submitStatus.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-300"
                : "bg-red-500/10 border-red-500/30 text-red-300"
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-base font-medium">
              {submitStatus.message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoGraphs;
