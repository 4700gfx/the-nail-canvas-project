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
    { title: '3D Nail Art Certification', org: 'Artistic Nail Design', year: '2020' },
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
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Enhanced Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/5 to-amber-50/5 rounded-full blur-3xl"></div>

      <div className="w-[90%] mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="space-y-6 mb-12">
            <h1 className="text-7xl lg:text-8xl leading-none font-bold bg-gradient-to-r from-pink-600 to-amber-800 bg-clip-text text-transparent" style={{fontFamily: 'serif'}}>
              Meet Melant
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-amber-900 leading-none">
              Master Nail Artist & Owner
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-amber-600"></div>
            <span className="text-2xl text-gray-800">The Creative Force Behind The Nail Canvas</span>
            <span className="text-2xl">👑</span>
            <div className="h-px w-16 bg-gradient-to-l from-pink-400 to-amber-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          
          {/* Left Sidebar - Profile Image & Quick Stats */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-8 lg:self-start">
            {/* Profile Image Container */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-50/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10 text-center space-y-6">
                {/* Profile Image Placeholder */}
                <div className="mx-auto w-48 h-48 bg-gradient-to-br from-pink-200 to-amber-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-6xl">👩‍🎨</div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Melant Edenfield</h3>
                  <p className="text-lg text-pink-600 font-medium">Founder & Lead Artist</p>
                  <p className="text-sm text-gray-600 mt-2">Miami, FL • Est. 2016</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-700 italic">
                    "Transforming nails into masterpieces, one canvas at a time."
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats - Simplified for sidebar */}
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{stat.icon}</div>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-amber-900">{stat.number}</div>
                      <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                  {hoveredStat === index && (
                    <div className="text-xs text-gray-500 mt-2 transition-all duration-300">
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area - Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'story', name: 'My Story', icon: '📖' },
                  { id: 'expertise', name: 'Expertise', icon: '🎯' },
                  { id: 'values', name: 'My Values', icon: '💎' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden min-h-[500px]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                {activeTab === 'story' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="text-4xl">📖</div>
                      <h3 className="text-4xl font-bold text-amber-900">My Journey to The Nail Canvas</h3>
                    </div>
                    
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                      <p className="text-xl leading-relaxed">
                        Welcome to The Nail Canvas! I'm Melant Edenfield, and for over 8 years, I've been passionate about transforming nails into stunning works of art. What started as a fascination with nail design in beauty school has evolved into a thriving business built on creativity, precision, and genuine care for each client.
                      </p>
                      
                      <p>
                        In 2016, I founded The Nail Canvas with a simple vision: to create a luxury nail experience that goes beyond just polish. I wanted to build a space where artistry meets relaxation, where every client feels pampered and leaves with nails that are truly unique expressions of their personality.
                      </p>
                      
                      <p>
                        My approach combines technical expertise with artistic flair. Whether you're looking for a classic French manicure, intricate 3D nail art, or the latest gel extension techniques, I bring the same level of dedication and attention to detail to every service. Each appointment is an opportunity to create something beautiful together.
                      </p>
                      
                      <p>
                        What I love most about this work is the relationships I build with my clients. Many have become like family to me, and seeing their confidence shine through their beautiful nails never gets old. Your satisfaction and happiness are what drive my passion every single day.
                      </p>
                    </div>
                    
                    <div className="bg-pink-50 rounded-2xl p-6 mt-8">
                      <p className="text-pink-800 font-medium text-center italic">
                        "Every nail tells a story, and I'm here to help you tell yours beautifully."
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'expertise' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="text-4xl">🎯</div>
                      <h3 className="text-4xl font-bold text-amber-900">Professional Expertise & Training</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="bg-gradient-to-r from-pink-500 to-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                              {cert.year.slice(-2)}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-amber-900 mb-1">{cert.title}</h4>
                              <p className="text-sm text-gray-600 mb-1">{cert.org}</p>
                              <p className="text-xs text-gray-500">{cert.year}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-amber-900">Specialized Skills</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-pink-500">✨</span>
                            <span className="text-gray-700">Advanced Gel Extension Techniques</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-pink-500">✨</span>
                            <span className="text-gray-700">3D Nail Art & Sculptural Designs</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-pink-500">✨</span>
                            <span className="text-gray-700">Custom Hand-Painted Artwork</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-pink-500">✨</span>
                            <span className="text-gray-700">Luxury Spa Manicure & Pedicure</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-amber-500">🎯</span>
                            <span className="text-gray-700">Problem Nail Solutions</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-amber-500">🎯</span>
                            <span className="text-gray-700">Color Theory & Design Consultation</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-amber-500">🎯</span>
                            <span className="text-gray-700">Nail Health & Strengthening</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-amber-500">🎯</span>
                            <span className="text-gray-700">Special Event & Bridal Nails</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="text-4xl">💎</div>
                      <h3 className="text-4xl font-bold text-amber-900">What Drives My Passion</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {values.map((value, index) => (
                        <div key={index} className="space-y-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{value.icon}</div>
                            <h4 className="text-xl font-bold text-amber-900">{value.title}</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{value.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-gradient-to-r from-pink-50 to-amber-50 rounded-2xl p-8">
                      <h4 className="text-xl font-bold text-amber-900 mb-4 text-center">My Promise to You</h4>
                      <p className="text-gray-700 text-center leading-relaxed">
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-amber-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'serif'}}>Ready to Create Magic Together?</h3>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              I can't wait to meet you and bring your nail vision to life. Let's schedule your personalized consultation 
              and start your journey to the most beautiful nails you've ever had.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your Consultation
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105">
                Follow My Work on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;