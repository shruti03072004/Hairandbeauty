import React, { useState } from 'react'

const Appointment = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  })

  const [status, setStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const selectService = (serviceName) => {
    setForm({ ...form, service: serviceName })
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', date: '', time: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const featuredServices = [
    { 
      title: 'Haircut', 
      emoji: '✂️',
      description: 'Professional cuts for all styles',
      duration: '45 min'
    },
    { 
      title: 'Hair Colouring', 
      emoji: '🎨',
      description: 'Vibrant colors & highlights',
      duration: '2 hours'
    },
    { 
      title: 'Hair Spa', 
      emoji: '💆',
      description: 'Relaxing treatment & therapy',
      duration: '1 hour'
    }
  ]

  const timeSlots = Array.from({ length: 11 }, (_, i) => {
    const hour = 11 + i
    const displayHour = hour > 12 ? hour - 12 : hour
    const ampm = hour >= 12 ? 'PM' : 'AM'
    return `${displayHour}:00 ${ampm}`
  })

  return (
    <section className="bg-[#F5F3EF] min-h-screen relative overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(3deg); }
          66% { transform: translate(-20px, 20px) rotate(-3deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(143, 106, 59, 0.3); }
          50% { box-shadow: 0 0 40px rgba(143, 106, 59, 0.5); }
        }

        .float-decoration {
          animation: float-gentle 10s ease-in-out infinite;
        }
      `}</style>

      {/* Floating background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-decoration"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#8f6a3b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-decoration" style={{animationDelay: '5s'}}></div>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-10 px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#8f6a3b]/10 border border-[#8f6a3b]/30">
          <span className="text-lg">📅</span>
          <span className="text-xs font-semibold text-[#8f6a3b] tracking-wide">EASY BOOKING</span>
        </div>

       

        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Select your favorite service, date & time, and leave the rest to us!
        </p>
      </div>

      {/* Booking Form */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-gradient-to-br from-[#8f6a3b] to-[#a8845f] px-6 py-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-1">Complete Your Booking</h2>
              <p className="text-sm text-white/90">Just a few steps to your perfect hair day!</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            
            {/* Success/Error Message */}
            {status && (
              <div className={`mb-6 p-4 rounded-xl border-2 flex items-center gap-3 ${
                status === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                <div className="text-2xl">
                  {status === 'success' ? '✓' : '✕'}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-0.5">
                    {status === 'success' ? 'Booking Confirmed!' : 'Booking Failed'}
                  </h4>
                  <p className="text-sm">
                    {status === 'success' 
                      ? 'You will receive confirmation shortly via email.' 
                      : 'Please try again or contact us for assistance.'}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-8">

              {/* Service Selection */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#8f6a3b]/10 rounded-lg flex items-center justify-center">
                    <span className="text-base">1️⃣</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Choose Your Service</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredServices.map((service, idx) => {
                    const isSelected = form.service === service.title
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => selectService(service.title)}
                        className={`group relative p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                          isSelected 
                            ? 'bg-[#8f6a3b] border-[#8f6a3b] text-white shadow-lg scale-105' 
                            : 'bg-white border-gray-200 hover:border-[#8f6a3b]/50 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-transform duration-300 ${
                            isSelected ? 'bg-white/20' : 'bg-[#8f6a3b]/10'
                          } group-hover:scale-110`}>
                            {service.emoji}
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected ? 'bg-white border-white' : 'border-gray-300'
                          }`}>
                            {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#8f6a3b]"></div>}
                          </div>
                        </div>
                        <h4 className={`text-lg font-bold mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h4>
                        <p className={`text-sm mb-2 ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                        <div className={`text-xs font-semibold ${isSelected ? 'text-white/80' : 'text-[#8f6a3b]'}`}>
                          ⏱ {service.duration}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Date Selection */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#8f6a3b]/10 rounded-lg flex items-center justify-center">
                      <span className="text-base">2️⃣</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Pick a Date</h3>
                  </div>
                  
                  <div className="relative">
                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={onChange}
                      onFocus={() => setFocusedField('date')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full border-2 rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none ${
                        focusedField === 'date'
                          ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10'
                          : 'border-gray-200 hover:border-[#8f6a3b]/50'
                      }`}
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#8f6a3b]/10 rounded-lg flex items-center justify-center">
                      <span className="text-base">3️⃣</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Select Time</h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto pr-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setForm({ ...form, time })}
                        className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          form.time === time
                            ? 'bg-[#8f6a3b] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-[#8f6a3b]/10 hover:text-[#8f6a3b]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#8f6a3b]/10 rounded-lg flex items-center justify-center">
                    <span className="text-base">4️⃣</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Your Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        className={`w-full border-2 rounded-lg px-4 py-3 pr-10 transition-all duration-300 focus:outline-none ${
                          focusedField === 'name'
                            ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10'
                            : 'border-gray-200 hover:border-[#8f6a3b]/50'
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f6a3b]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+91 9876543210"
                        className={`w-full border-2 rounded-lg px-4 py-3 pr-10 transition-all duration-300 focus:outline-none ${
                          focusedField === 'phone'
                            ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10'
                            : 'border-gray-200 hover:border-[#8f6a3b]/50'
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f6a3b]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email - Full Width */}
                  <div className="relative md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        className={`w-full border-2 rounded-lg px-4 py-3 pr-10 transition-all duration-300 focus:outline-none ${
                          focusedField === 'email'
                            ? 'border-[#8f6a3b] ring-4 ring-[#8f6a3b]/10'
                            : 'border-gray-200 hover:border-[#8f6a3b]/50'
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f6a3b]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={submit}
                className="group relative w-full inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-[#8f6a3b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10">Confirm Booking</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a8845f] to-[#8f6a3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment