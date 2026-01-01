import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all fields.');
      return;
    }

    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      content: "123 Salon Street, Your City, Your State"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      content: "+91 9050431211"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "info@yoursalon.com"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Facebook", icon: "👍", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" }
  ];

  return (
    <div className="bg-[#F5F3EF] min-h-screen py-20 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        @keyframes float-gentle {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .float-decoration {
          animation: float-gentle 10s ease-in-out infinite;
        }

        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(143, 106, 59, 0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Floating background decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-decoration"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-decoration" style={{animationDelay: '5s'}}></div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-[#8f6a3b]/10 border border-[#8f6a3b]/30">
          <span className="text-xl">✉️</span>
          <span className="text-sm font-semibold text-[#8f6a3b] tracking-wide">GET IN TOUCH</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Contact <span className="bg-gradient-to-r from-[#8f6a3b] via-[#a8845f] to-[#8f6a3b] bg-clip-text text-transparent">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          Questions, appointments, or feedback? Reach out and we'll get back to you as soon as possible!
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8f6a3b]/10 to-transparent rounded-bl-full"></div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2 relative">Send us a Message</h2>
              <p className="text-slate-500 mb-8 relative">Fill out the form and we'll be in touch soon!</p>

              <div className="space-y-6 relative">
                {success && (
                  <div className="bg-[#8f6a3b]/10 border border-[#8f6a3b]/30 text-[#8f6a3b] p-4 rounded-xl text-center font-semibold animate-pulse">
                    ✓ Your message has been sent successfully!
                  </div>
                )}

                {/* Name Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      className={`w-full p-4 pr-12 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                          ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10' 
                          : 'border-gray-200 hover:border-[#8f6a3b]/50'
                      }`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f6a3b]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      className={`w-full p-4 pr-12 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10' 
                          : 'border-gray-200 hover:border-[#8f6a3b]/50'
                      }`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f6a3b]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="How can we help?"
                      className={`w-full p-4 pr-12 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'subject' 
                          ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10' 
                          : 'border-gray-200 hover:border-[#8f6a3b]/50'
                      }`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f6a3b]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="5"
                    placeholder="Tell us more about your needs..."
                    className={`w-full p-4 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10' 
                        : 'border-gray-200 hover:border-[#8f6a3b]/50'
                    }`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#8f6a3b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a8845f] to-[#8f6a3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8f6a3b]/20 to-[#8f6a3b]/10 rounded-xl flex items-center justify-center text-[#8f6a3b] group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#8f6a3b] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span>Follow Us</span>
                <span className="text-2xl">✨</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group flex items-center gap-2 px-5 py-3 bg-[#8f6a3b]/10 hover:bg-[#8f6a3b] text-[#8f6a3b] hover:text-white rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="font-semibold text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-[#8f6a3b] to-[#a8845f] rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Business Hours</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;