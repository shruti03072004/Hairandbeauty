import React, { useState } from 'react'

const About = () => {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 1,
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      title: "Precision Haircuts",
      description: "Expert cuts tailored to your style — sharp, clean, and perfectly executed.",
    },
    {
      id: 2,
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
      title: "Creative Styling & Coloring",
      description: "Vibrant colors, trendy styles, and creative transformations for every hair type.",
    },
    {
      id: 3,
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      title: "Luxury Hair Treatments",
      description: "Nourishing treatments to keep your hair healthy, shiny, and full of life.",
    }
  ]

  return (
    <>
      <div className="bg-[#F5F3EF] min-h-screen py-20 relative overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
          * {
            font-family: 'Poppins', sans-serif;
          }

          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(5deg); }
            66% { transform: translate(-30px, 30px) rotate(-5deg); }
          }

          .float-decoration {
            animation: float-slow 8s ease-in-out infinite;
          }

          .feature-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .feature-card:hover {
            transform: translateX(8px);
          }

          .image-container {
            position: relative;
          }

          .image-container::before {
            content: '';
            position: absolute;
            inset: -10px;
            background: linear-gradient(135deg, rgba(143, 106, 59, 0.3), rgba(168, 132, 95, 0.3));
            border-radius: 1rem;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s;
          }

          .image-container:hover::before {
            opacity: 1;
          }
        `}</style>

        {/* Floating background decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-decoration"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-decoration" style={{animationDelay: '3s'}}></div>

        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-[#8f6a3b]/10 border border-[#8f6a3b]/30">
            <span className="text-xl">💇</span>
            <span className="text-sm font-semibold text-[#8f6a3b] tracking-wide">ABOUT US</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            About Our <span className="bg-gradient-to-r from-[#8f6a3b] via-[#a8845f] to-[#8f6a3b] bg-clip-text text-transparent">Salon</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the art of beauty and relaxation — where every style is crafted with care, creativity, and a personal touch.
          </p>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#8f6a3b]"></div>
            <div className="w-2 h-2 bg-[#8f6a3b] rounded-full"></div>
            <div className="w-24 h-0.5 bg-[#8f6a3b]"></div>
            <div className="w-2 h-2 bg-[#8f6a3b] rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#8f6a3b]"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Image Section */}
            <div className="flex-1 w-full">
              <div className="image-container group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                    src="/about ous img.jpg"
                    alt="About our salon" 
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8f6a3b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Floating stats badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#8f6a3b]">10+</div>
                        <div className="text-xs text-slate-600 font-medium">Years</div>
                      </div>
                      <div className="w-px h-10 bg-slate-300"></div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#8f6a3b]">5K+</div>
                        <div className="text-xs text-slate-600 font-medium">Clients</div>
                      </div>
                      <div className="w-px h-10 bg-slate-300"></div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#8f6a3b]">4.9★</div>
                        <div className="text-xs text-slate-600 font-medium">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full">
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Signature <span className="text-[#8f6a3b]">Services</span>
              </h2>
              
              <p className="text-base text-slate-600 mb-10 leading-relaxed">
                From classic cuts to modern styles, we offer personalized hair care and styling for everyone.
              </p>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className="feature-card group cursor-pointer"
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onMouseLeave={() => setActiveFeature(null)}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className={`flex items-start gap-5 p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ${activeFeature === feature.id ? 'ring-2 ring-[#8f6a3b]' : ''}`}>
                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#8f6a3b]/10 to-[#8f6a3b]/20 border-2 border-[#8f6a3b]/30 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <img 
                          src={feature.icon} 
                          alt={feature.title}
                          className="w-8 h-8"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#8f6a3b] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Progress bar animation */}
                        <div className="mt-3 w-0 h-1 bg-gradient-to-r from-[#8f6a3b] to-[#a8845f] rounded-full group-hover:w-full transition-all duration-500"></div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 text-[#8f6a3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#8f6a3b] rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Discover More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a8845f] to-[#8f6a3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About