import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Optional: Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-open {
          animation: slideDown 0.3s ease-out;
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
        style={{ backgroundColor: "#8f6a3b" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✂️</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl tracking-tight">YourSalon</h1>
                <p className="text-white/70 text-xs">Hair & Beauty</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <a 
                  className="nav-link text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  className="nav-link text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
                  href="/services"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  className="nav-link text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  className="nav-link text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <a
              href="/book"
              className="hidden md:inline-flex items-center justify-center gap-2 bg-white text-[#8f6a3b] px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-label="menu-btn"
              type="button"
              className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 active:scale-90 transition-all"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div 
            className="mobile-menu-open md:hidden border-t border-white/10"
            style={{ backgroundColor: "#8f6a3b" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <ul className="flex flex-col space-y-1 mb-6">
                <li>
                  <a 
                    href="/" 
                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    🏠 Home
                  </a>
                </li>
                <li>
                  <a 
                    href="/services" 
                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    ✂️ Services
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    ℹ️ About
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    📧 Contact
                  </a>
                </li>
              </ul>

              {/* Mobile CTA Button */}
              <a
                href="/appointment"
                className="flex items-center justify-center gap-2 bg-white text-[#8f6a3b] px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/90 active:scale-95 transition-all shadow-lg w-full"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;