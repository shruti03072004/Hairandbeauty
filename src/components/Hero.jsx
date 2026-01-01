import React from 'react'
import heroImg from '../assets/hero.png'   // adjust path based on your folder
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f3ef] dark:bg-[#1a1a1a]">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#a37b5c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#836249] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#dacabe] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#a37b5c]/10 dark:bg-[#a37b5c]/20 border border-[#a37b5c]/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a37b5c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a37b5c]"></span>
            </span>
            <span className="text-sm font-medium text-[#4a4a4a] dark:text-[#b7b7b7]">
              Premium Hair Care Experience
            </span>
          </div>

          {/* Main heading with gradient effect */}
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            <span className="block text-[#1a1a1a] dark:text-[#ffffff] mb-2 animate-fade-in-up">
              GOOD HAIR DAYS,
            </span>
            <span className="block bg-gradient-to-r from-[#a37b5c] via-[#836249] to-[#a37b5c] bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              JUST GOT BETTER
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg md:text-xl lg:text-2xl font-light text-[#4a4a4a] dark:text-[#b7b7b7] max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            From classic cuts to modern makeovers — we've got you covered.
          </p>

          {/* CTA Button with modern design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <a
              href="/book"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#ffffff] bg-[#a37b5c] rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-[#836249] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-[#4a4a4a] dark:text-[#b7b7b7] animate-fade-in-up animation-delay-800">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#a37b5c]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#a37b5c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#a37b5c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Easy Online Booking</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#a37b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
 <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    
    <Services/>
    <About/>
    <Contact/>
   </>
  )
}

export default Hero
