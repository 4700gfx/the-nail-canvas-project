import React from 'react';
import logo from '../assets/images/logo.png';

// Constants from Navbar
const COLORS = {
  primary: '#5C2314',
  secondary: '#F4BCCC',
  accent: '#FFC3D7',
  background: '#FFF9F7',
  white: '#FFFFFF'
};

const SOCIAL_MEDIA_LINKS = {
  facebook: 'https://www.facebook.com/thenailcanvas912',
  twitter: 'https://www.tiktok.com/@nailgal_912',
  instagram: 'https://www.instagram.com/nailgal_912/'
};

const NAV_TABS = [
  { key: 'aboutUs', name: 'About Us', sectionId: 'about' },
  { key: 'treatments', name: 'Treatments', sectionId: 'treatments' },
  { key: 'testimony', name: 'Testimonies', sectionId: 'testimonies' },
  { key: 'nailGallery', name: 'Nail Gallery', sectionId: 'nailGallery' },
  { key: 'meetMe', name: 'Meet Me', sectionId: 'meetMe' },
  { key: 'contactMe', name: 'Contact Me', sectionId: 'contactMe' }
];

// Icon Components from Navbar
const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Additional Icons for Footer
const PhoneIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Utility function
const scrollToElement = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Footer = () => {
  const handleNavClick = (sectionId) => {
    scrollToElement(sectionId);
  };

  const handleSocialClick = (platform) => {
    const url = SOCIAL_MEDIA_LINKS[platform];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/3 to-amber-50/3 rounded-full blur-3xl"></div>
      
      {/* Decorative top gradient bar */}
      <div 
        className="h-2 w-full"
        style={{
          background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.secondary} 50%, ${COLORS.accent} 100%)`
        }}
      ></div>

      <div className="relative z-10 w-[90%] mx-auto px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="The Nail Canvas Logo" 
                className="h-12 w-auto rounded-lg shadow-sm"
                loading="lazy"
              />
              <div>
                <h3 className="text-2xl font-bold" style={{ color: COLORS.background, fontFamily: 'serif' }}>
                  The Nail Canvas
                </h3>
                <p className="text-sm" style={{ color: COLORS.accent }}>
                  Artistry in Every Detail
                </p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed" style={{ color: COLORS.background }}>
              Transform your nails into works of art with our luxury nail services. 
              Experience the perfect blend of creativity, precision, and pampering at Miami's premier nail studio.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                aria-label="Visit our Twitter profile"
              >
                <TwitterIcon />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                aria-label="Visit our Instagram profile"
              >
                <InstagramIcon />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold" style={{ color: COLORS.background }}>
              Quick Links
            </h4>
            <div className="space-y-3">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleNavClick(tab.sectionId)}
                  className="block text-sm transition-all duration-300 hover:translate-x-2 focus:outline-none focus:translate-x-2"
                  style={{ color: COLORS.accent }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold" style={{ color: COLORS.background }}>
              Our Services
            </h4>
            <div className="space-y-3">
              {[
                'Classic Manicure',
                'Gel Extensions',
                'Custom Nail Art',
                'Luxury Spa Pedicure',
                'French Manicure',
                '3D Nail Art'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-xs" style={{ color: COLORS.accent }}>💅</span>
                  <span className="text-sm" style={{ color: COLORS.accent }}>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold" style={{ color: COLORS.background }}>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.accent }}>
                  <LocationIcon style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: COLORS.background }}>Address</p>
                  <p className="text-sm" style={{ color: COLORS.accent }}>
                    2515 MLK Blvd <br />
                    Savannah, Georgia 31415
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.accent }}>
                  <PhoneIcon style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: COLORS.background }}>Phone</p>
                  <p className="text-sm" style={{ color: COLORS.accent }}>(912)-398-3353 </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.accent }}>
                  <EmailIcon style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: COLORS.background }}>Email</p>
                  <p className="text-sm" style={{ color: COLORS.accent }}>thenailcanvas912@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.accent }}>
                  <ClockIcon style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: COLORS.background }}>Hours</p>
                  <p className="text-sm" style={{ color: COLORS.accent }}>
                    Mon + Tues & Thurs - Sat: 9AM-6PM<br />
                    Sunday & Wednesday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold" style={{ color: COLORS.background, fontFamily: 'serif' }}>
                  Stay Beautiful with Us
                </h3>
                <p className="text-sm" style={{ color: COLORS.accent }}>
                  Subscribe to get exclusive nail art inspiration, beauty tips, and special offers delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-pink-300 focus:bg-white/20 transition-all duration-300"
                />
                <button
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderColor: COLORS.accent + '40' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm" style={{ color: COLORS.accent }}>
                © 2024 The Nail Canvas. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <button className="text-xs hover:underline transition-all duration-300" style={{ color: COLORS.accent }}>
                  Privacy Policy
                </button>
                <button className="text-xs hover:underline transition-all duration-300" style={{ color: COLORS.accent }}>
                  Terms of Service
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm" style={{ color: COLORS.accent }}>Made with</span>
              <span className="text-pink-400">4700 GFX Studios 🌐</span>
              <span className="text-sm" style={{ color: COLORS.accent }}>in Miami</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-t from-transparent" style={{ backgroundColor: COLORS.accent }}></div>
    </footer>
  );
};

export default Footer;