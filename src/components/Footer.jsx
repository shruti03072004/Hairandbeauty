import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Haircuts & Styling", href: "#" },
    { name: "Hair Spa", href: "#" },
    { name: "Coloring", href: "#" },
    { name: "Treatments", href: "#" }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .wave-animation {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>

      <footer className="relative w-full bg-gradient-to-br from-[#8f6a3b] via-[#a8845f] to-[#8f6a3b] text-white overflow-hidden">
        
        {/* Decorative wave at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F5F3EF"></path>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-12">
          
          {/* Top Section - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-2xl">✂️</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight">YourSalonName</h2>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6 text-base max-w-md">
                GOOD HAIR DAYS, JUST GOT BETTER ✨
                <br />
                From classic cuts to modern makeovers — we've got you covered.
              </p>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Stay Updated</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                  />
                  <button className="px-6 py-3 bg-white text-[#8f6a3b] rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-white rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-white rounded-full"></span>
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-sm text-white/80 text-center md:text-left">
              © 2025 YourSalonName. All rights reserved. Made with ❤️
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold mr-2">Follow Us:</span>
              
              {/* Facebook */}
              <a
                href="#"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    stroke="currentColor"
                    className="stroke-white group-hover:stroke-[#8f6a3b] transition-colors"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                    stroke="currentColor"
                    className="stroke-white group-hover:stroke-[#8f6a3b] transition-colors"
                    strokeWidth="2"
                  />
                  <circle 
                    cx="12" 
                    cy="12" 
                    r="4" 
                    stroke="currentColor"
                    className="stroke-white group-hover:stroke-[#8f6a3b] transition-colors"
                    strokeWidth="2" 
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6
                    2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5
                    c2.2 2.6 5.6 4.1 9 4
                    -.9-4.2 4-6.6 7-3.8
                    1.1 0 3-1.2 3-1.2z"
                    stroke="currentColor"
                    className="stroke-white group-hover:stroke-[#8f6a3b] transition-colors"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative bottom pattern */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </footer>
    </>
  );
};

export default Footer;