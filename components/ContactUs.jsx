import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Combined and enhanced CSS (unchanged)
const styles = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); opacity: 0.7; }
  }

  .shimmer {
    background: linear-gradient(90deg, transparent, rgba(255, 87, 34, 0.2), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  .header-gradient {
    background: linear-gradient(90deg, #ff5722, #ff8a50, #ff5722);
    background-size: 200% auto;
    animation: gradientFlow 5s ease infinite;
  }

  .glow {
    box-shadow: 0 0 15px rgba(255, 87, 34, 0.5);
  }

  .card {
    background: rgba(15, 15, 18, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 87, 34, 0.15);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 87, 34, 0.5);
    box-shadow: 0 10px 30px rgba(255, 87, 34, 0.2);
  }

  .form-input {
    background: rgba(10, 10, 12, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .form-input:focus {
    border-color: #ff5722;
    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.25);
    background: rgba(20, 20, 22, 0.9);
  }

  .primary-button {
    background: linear-gradient(45deg, #ff5722, #ff8a50);
    background-size: 200% 200%;
    animation: gradientFlow 5s ease infinite;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .primary-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    transform: rotate(30deg);
    transition: transform 0.6s;
    opacity: 0;
  }

  .primary-button:hover::after {
    transform: rotate(30deg) translate(100%, 100%);
    opacity: 1;
  }

  .primary-button:hover:not(:disabled) {
    box-shadow: 0 0 25px rgba(255, 87, 34, 0.5);
    transform: translateY(-3px) scale(1.01);
  }

  .navbar-container {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.95);
    backdrop-blur-md;
    border-bottom: 1px solid rgba(255, 87, 34, 0.15);
  }

  .social-icon {
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .social-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 87, 34, 0.8);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: -1;
  }

  .social-icon:hover {
    transform: translateY(-3px);
    color: white;
  }

  .social-icon:hover::before {
    transform: scale(1);
  }

  .highlight-text {
    position: relative;
    display: inline-block;
  }

  .highlight-text::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, transparent, #ff5722, transparent);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease;
  }

  .highlight-text:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .form-label-animation {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  const handleFocus = (name) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const socialLinks = [
    { 
      icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z', 
      name: 'Twitter',
      url: 'https://x.com/IBF_Community?t=33pZSiTWdG5aNDt_4xHKLQ&s=09'
    },
    { 
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22', 
      name: 'GitHub',
      url: '#'
    },
    { 
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z', 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/indian-blockchain-fraternity/'
    },
    { 
      icon: 'M2 2h20v20H2V2zm14 9.37A4 4 0 1 1 12.63 8a4 4 0 0 1 3.37 3.37zm1.5-4.87h.01', 
      name: 'Instagram',
      url: 'https://www.instagram.com/ibf.bu/'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-[float_4s_ease-in-out_infinite]"
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

      {/* Navbar */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className=" text-orange-500 bg-clip-text text-4xl md:text-5xl font-bold inline-block mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out to us with any questions or inquiries.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-8">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="bg-green-900/50 border border-green-500/50 text-green-200 px-6 py-4 rounded-lg mb-6 animate-fade-in flex items-center">
                <div className="mr-4 flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-green-300/80 text-sm">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className={`form-label-animation block text-sm font-medium mb-2 ${
                    focusedInput === 'name' || formData.name 
                      ? 'text-orange-400 transform scale-105 origin-left' 
                      : 'text-gray-300'
                  }`}>
                    Name <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={`form-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 ${
                        formErrors.name 
                          ? 'border-red-500' 
                          : (focusedInput === 'name' ? 'border-orange-400 glow' : '')
                      }`}
                      placeholder="Your name"
                    />
                    {focusedInput === 'name' && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 shimmer"></div>
                    )}
                  </div>
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="email" className={`form-label-animation block text-sm font-medium mb-2 ${
                    focusedInput === 'email' || formData.email 
                      ? 'text-orange-400 transform scale-105 origin-left' 
                      : 'text-gray-300'
                  }`}>
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`form-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 ${
                        formErrors.email 
                          ? 'border-red-500' 
                          : (focusedInput === 'email' ? 'border-orange-400 glow' : '')
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {focusedInput === 'email' && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 shimmer"></div>
                    )}
                  </div>
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className={`form-label-animation block text-sm font-medium mb-2 ${
                  focusedInput === 'subject' || formData.subject 
                    ? 'text-orange-400 transform scale-105 origin-left' 
                    : 'text-gray-300'
                }`}>
                  Subject <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className={`form-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 ${
                      formErrors.subject 
                        ? 'border-red-500' 
                        : (focusedInput === 'subject' ? 'border-orange-400 glow' : '')
                    }`}
                    placeholder="What's on your mind?"
                  />
                  {focusedInput === 'subject' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 shimmer"></div>
                  )}
                </div>
                {formErrors.subject && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {formErrors.subject}
                  </p>
                )}
              </div>

              <div className="relative">
                <label htmlFor="message" className={`form-label-animation block text-sm font-medium mb-2 ${
                  focusedInput === 'message' || formData.message 
                    ? 'text-orange-400 transform scale-105 origin-left' 
                    : 'text-gray-300'
                }`}>
                  Message <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows="6"
                    className={`form-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 ${
                      formErrors.message 
                        ? 'border-red-500' 
                        : (focusedInput === 'message' ? 'border-orange-400 glow' : '')
                    }`}
                    placeholder="Tell us more..."
                  />
                  {focusedInput === 'message' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 shimmer"></div>
                  )}
                </div>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`primary-button w-full py-4 px-8 rounded-lg font-semibold text-white ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">Visit Us</p>
                    <p className="text-gray-400">
                      Bennett University, Plot No 8-11,<br />
                      TechZone II, Greater Noida,<br />
                      Uttar Pradesh 201310
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">Email Us</p>
                    <a href="mailto:ibf@bennett.edu.in" className="text-orange-400 hover:text-orange-300 highlight-text transition-colors">
                      ibf@bennett.edu.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">Call Us</p>
                    <p className="text-gray-400">+91 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-icon flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-orange-500/20 text-orange-500"
                    aria-label={social.name}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;