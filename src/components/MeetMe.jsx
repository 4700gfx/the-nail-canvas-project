import React, { useState } from 'react';

const MeetMe = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { icon: '🏆', number: '8+', label: 'Years Experience', description: 'Perfecting the art of nail design' },
    { icon: '💅', number: '2,500+', label: 'Happy Clients', description: 'Beautiful transformations delivered' },
    { icon: '🎨', number: '150+', label: 'Custom Designs', description: 'Unique artworks created monthly' },
    { icon: '⭐', number: '5.0', label: 'Perfect Rating', description: 'Consistently exceptional service' }
  ];

  const certifications = [
    { title: 'Master Nail Technician', org: 'International Nail Academy', year: '2018' },
    { title: 'Gel Extension Specialist', org: 'Professional Beauty Institute', year: '2019' },
    { title: 'Nail Art Certification', org: 'Artistic Nail Design', year: '2020' },
    { title: 'Luxury Spa Treatments', org: 'Elite Beauty College', year: '2021' }
  ];

  const values = [
    {
      icon: '✨',
      title: 'Artistic Excellence',
      description: 'Every nail is a canvas for creative expression and technical precision.'
    },
    {
      icon: '💖',
      title: 'Personal Care',
      description: 'Building lasting relationships through attentive, personalized service.'
    },
    {
      icon: '🌟',
      title: 'Luxury Experience',
      description: 'Creating memorable moments of relaxation and self-care luxury.'
    },
    {
      icon: '🎯',
      title: 'Continuous Growth',
      description: 'Always learning new techniques to offer the latest in nail artistry.'
    }
  ];

  return (
    <section id='meetMe' className="min-h-screen relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Enhanced Background with animated gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-canvas-pink/8 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-canvas-brown/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-canvas-pink/5 to-canvas-brown/5 rounded-full blur-[140px]"></div>

      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <div className="inline-block relative">
              <h1 className="maharlika-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-canvas-brown tracking-tight">
                Meet Melant
              </h1>
              <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-1 bg-gradient-to-r from-canvas-pink via-canvas-brown to-canvas-pink rounded-full"></div>
            </div>
            <h2 className="breathing-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-canvas-brown/90 leading-tight">
              Master Nail Artist + Owner
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-6 md:mb-8 px-4">
            <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-transparent via-canvas-pink to-canvas-brown rounded-full"></div>
            <span className="tenor-font text-base sm:text-lg md:text-xl lg:text-2xl text-canvas-black text-center">
              The Creative Force Behind The Nail Canvas
            </span>
            <span className="text-xl md:text-2xl">👑</span>
            <div className="h-[2px] w-12 md:w-16 bg-gradient-to-l from-transparent via-canvas-pink to-canvas-brown rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
          
          {/* Left Sidebar - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-8 lg:self-start">
            {/* Enhanced Profile Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-white/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-canvas-pink/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-canvas-brown/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center space-y-5 md:space-y-6">
                {/* Profile Image with gradient border */}
                <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-canvas-pink to-canvas-brown rounded-full animate-pulse"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-pink-100 to-amber-100 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-5xl sm:text-6xl">💅🏽</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="breathing-font text-2xl md:text-3xl font-bold text-canvas-brown mb-2">Melant Edenfield</h3>
                  <p className="tenor-font text-base md:text-lg text-canvas-pink font-semibold">Founder & Lead Artist</p>
                  <p className="tenor-font text-sm text-canvas-black/60 mt-2">Savannah, GA • Est. 2016</p>
                </div>
                
                <div className="pt-4 border-t border-canvas-brown/10">
                  <p className="tenor-font text-sm text-canvas-black/80 italic leading-relaxed">
                    "Transforming nails into masterpieces, one canvas at a time."
                  </p>
                </div>
              </div>
            </div>

            {/* Refined Quick Stats */}
            <div className="space-y-3 md:space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-lg hover:shadow-2xl hover:shadow-canvas-pink/20 transition-all duration-500 cursor-pointer border border-white/50 hover:border-canvas-pink/30"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="flex-1">
                      <div className="tenor-font text-xl md:text-2xl font-bold text-canvas-brown">{stat.number}</div>
                      <div className="tenor-font text-xs md:text-sm font-medium text-canvas-black/70">{stat.label}</div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredStat === index ? 'max-h-20 mt-3' : 'max-h-0'
                  }`}>
                    <p className="tenor-font text-xs md:text-sm text-canvas-black/60 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            
            {/* Modern Navigation Tabs */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl p-2 shadow-lg border border-white/50">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'story', name: 'My Story', icon: '📖' },
                  { id: 'expertise', name: 'Expertise', icon: '🎯' },
                  { id: 'values', name: 'My Values', icon: '💎' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative p-3 md:p-4 rounded-xl font-semibold transition-all duration-500 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 overflow-hidden ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-canvas-pink to-canvas-brown text-white shadow-xl shadow-canvas-pink/30 scale-105'
                        : 'text-canvas-brown hover:bg-white hover:text-canvas-pink'
                    }`}
                  >
                    <span className="text-lg md:text-xl">{tab.icon}</span>
                    <span className="tenor-font text-xs sm:text-sm md:text-base">{tab.name}</span>
                    {activeTab !== tab.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-canvas-pink/5 to-canvas-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Content Area */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden min-h-[500px] border border-white/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-canvas-pink/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-canvas-brown/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {activeTab === 'story' && (
                  <div className="space-y-6 md:space-y-8 animate-fade-in">
                    <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                      <div className="text-3xl md:text-4xl">📖</div>
                      <h3 className="breathing-font text-2xl sm:text-3xl md:text-4xl font-bold text-canvas-brown">My Journey to The Nail Canvas</h3>
                    </div>
                    
                    <div className="space-y-6 text-canvas-black/80 leading-relaxed">
                      <p className="tenor-font text-base md:text-lg lg:text-xl leading-relaxed">
                        Welcome to The Nail Canvas! I'm Melant Edenfield, and for over 8 years, I've been passionate about transforming nails into stunning works of art. What started as a fascination with nail design in beauty school has evolved into a thriving business built on creativity, precision, and genuine care for each client.
                      </p>
                      
                      <p className="tenor-font text-sm md:text-base lg:text-lg leading-relaxed">
                        In 2016, I founded The Nail Canvas with a simple vision: to create a luxury nail experience that goes beyond just polish. I wanted to build a space where artistry meets relaxation, where every client feels pampered and leaves with nails that are truly unique expressions of their personality.
                      </p>
                      
                      <p className="tenor-font text-sm md:text-base lg:text-lg leading-relaxed">
                        My approach combines technical expertise with artistic flair. Whether you're looking for a classic French manicure, intricate 3D nail art, or the latest gel extension techniques, I bring the same level of dedication and attention to detail to every service. Each appointment is an opportunity to create something beautiful together.
                      </p>
                      
                      <p className="tenor-font text-sm md:text-base lg:text-lg leading-relaxed">
                        What I love most about this work is the relationships I build with my clients. Many have become like family to me, and seeing their confidence shine through their beautiful nails never gets old. Your satisfaction and happiness are what drive my passion every single day.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-canvas-pink/10 to-canvas-brown/10 rounded-2xl md:rounded-3xl p-6 md:p-8 mt-8 border border-canvas-pink/20">
                      <p className="tenor-font text-canvas-brown font-semibold text-center italic text-sm md:text-base lg:text-lg leading-relaxed">
                        "Every nail tells a story, and I'm here to help you tell yours beautifully."
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'expertise' && (
                  <div className="space-y-6 md:space-y-8 animate-fade-in">
                    <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                      <div className="text-3xl md:text-4xl">🎯</div>
                      <h3 className="breathing-font text-2xl sm:text-3xl md:text-4xl font-bold text-canvas-brown">Professional Expertise + Training</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                      {certifications.map((cert, index) => (
                        <div key={index} className="group bg-gradient-to-br from-white to-canvas-pink/5 rounded-2xl md:rounded-3xl p-5 md:p-6 hover:shadow-xl hover:shadow-canvas-pink/20 transition-all duration-500 border border-canvas-pink/10 hover:border-canvas-pink/30">
                          <div className="flex items-start space-x-3 md:space-x-4">
                            <div className="bg-gradient-to-r from-canvas-pink to-canvas-brown text-white rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold text-base md:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {cert.year.slice(-2)}
                            </div>
                            <div className="flex-1">
                              <h4 className="breathing-font font-bold text-canvas-brown mb-1 text-sm md:text-base">{cert.title}</h4>
                              <p className="tenor-font text-xs md:text-sm text-canvas-black/70 mb-1">{cert.org}</p>
                              <p className="tenor-font text-xs text-canvas-black/50">{cert.year}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                      <h4 className="breathing-font text-xl md:text-2xl font-semibold text-canvas-brown">Specialized Skills</h4>
                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-3 md:space-y-4">
                          {[
                            'Advanced Gel Extension Techniques',
                            '3D Nail Art & Sculptural Designs',
                            'Custom Hand-Painted Artwork',
                            'Luxury Spa Manicure & Pedicure'
                          ].map((skill, idx) => (
                            <div key={idx} className="flex items-start space-x-3 group">
                              <span className="text-canvas-pink text-lg group-hover:scale-125 transition-transform duration-300">✨</span>
                              <span className="tenor-font text-canvas-black/80 text-sm md:text-base">{skill}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          {[
                            'Problem Nail Solutions',
                            'Color Theory & Design Consultation',
                            'Nail Health & Strengthening',
                            'Special Event & Bridal Nails'
                          ].map((skill, idx) => (
                            <div key={idx} className="flex items-start space-x-3 group">
                              <span className="text-canvas-brown text-lg group-hover:scale-125 transition-transform duration-300">🎯</span>
                              <span className="tenor-font text-canvas-black/80 text-sm md:text-base">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="space-y-6 md:space-y-8 animate-fade-in">
                    <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                      <div className="text-3xl md:text-4xl">💎</div>
                      <h3 className="breathing-font text-2xl sm:text-3xl md:text-4xl font-bold text-canvas-brown">What Drives My Passion</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      {values.map((value, index) => (
                        <div key={index} className="group space-y-3 md:space-y-4 p-5 md:p-6 bg-gradient-to-br from-white to-canvas-brown/5 rounded-2xl md:rounded-3xl hover:shadow-xl hover:shadow-canvas-brown/20 transition-all duration-500 border border-canvas-brown/10 hover:border-canvas-brown/30">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300">{value.icon}</div>
                            <h4 className="tenor-font text-lg md:text-xl font-bold text-canvas-brown">{value.title}</h4>
                          </div>
                          <p className="tenor-font text-canvas-black/80 leading-relaxed text-sm md:text-base">{value.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-gradient-to-r from-canvas-pink/10 via-canvas-brown/5 to-canvas-pink/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-canvas-pink/20">
                      <h4 className="breathing-font text-xl md:text-2xl font-bold text-canvas-brown mb-4 md:mb-6 text-center">My Promise to You</h4>
                      <p className="tenor-font text-canvas-black/80 text-center leading-relaxed text-sm md:text-base lg:text-lg">
                        When you choose The Nail Canvas, you're not just getting a service – you're investing in an experience. 
                        I promise to listen to your vision, respect your time, use only the highest quality products, 
                        and deliver results that exceed your expectations. Your happiness and nail health are my top priorities.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetMe;