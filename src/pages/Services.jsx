import React, { useState } from 'react'

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: 1,
      image: "/service 11.jpg",
      title: "Haircuts & Styling",
      description: "From chic bobs to sharp fades — we create styles that suit your personality and lifestyle. Perfect for both men and women.",
      icon: "✂️"
    },
    {
      id: 2,
      image: "/service2.jpg",
      title: "Hair Spa & Treatments",
      description: "Revitalize your hair with nourishing spas, deep conditioning, and scalp therapy to restore shine and health.",
      icon: "💆"
    },
    {
      id: 3,
      image: "/service 3.jpg",
      title: "Coloring & Highlights",
      description: "Whether it's balayage, ombré, or bold shades — our experts ensure flawless, vibrant colors that turn heads.",
      icon: "🎨"
    }
  ]

  return (
    <div className="bg-[#F5F3EF] min-h-screen relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      
        * {
            font-family: 'Poppins', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .image-overlay {
          background: linear-gradient(135deg, rgba(143, 106, 59, 0.1) 0%, rgba(143, 106, 59, 0.05) 100%);
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(143, 106, 59, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-animation"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-animation" style={{animationDelay: '2s'}}></div>

      {/* Heading Section */}
      <div className="pt-24 pb-8 text-center px-4 relative z-10">
        {/* Subtitle badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#8f6a3b]/10 border border-[#8f6a3b]/20">
          <span className="text-2xl">✨</span>
          <span className="text-sm font-semibold text-[#8f6a3b] tracking-wide">WHAT WE OFFER</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight mb-4">
          Our <span className="bg-gradient-to-r from-[#8f6a3b] via-[#a8845f] to-[#8f6a3b] bg-clip-text text-transparent">Services</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
          Expert hair care for men and women, all in one place
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#8f6a3b]"></div>
          <div className="w-2 h-2 bg-[#8f6a3b] rounded-full"></div>
          <div className="w-24 h-0.5 bg-[#8f6a3b]"></div>
          <div className="w-2 h-2 bg-[#8f6a3b] rounded-full"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#8f6a3b]"></div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-24 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={service.image} 
                    alt={service.title}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon badge on image */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                    {service.icon}
                  </div>

                  {/* Shimmer effect on hover */}
                  {hoveredCard === service.id && (
                    <div className="absolute inset-0 shimmer-effect pointer-events-none"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Category tag */}
                  <div className="inline-block mb-3">
                    <span className="text-xs font-bold text-[#8f6a3b] uppercase tracking-wider px-3 py-1 bg-[#8f6a3b]/10 rounded-full">
                      {service.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 font-medium leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-[#8f6a3b] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#8f6a3b] to-[#a8845f] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">Ready to transform your look?</p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#8f6a3b] rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Book Your Service</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#a8845f] to-[#8f6a3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services