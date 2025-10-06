import React, { useState, useEffect, useCallback, useMemo } from 'react';
import logo from '../assets/images/logo.png';

// Constants
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
  { key: 'benefits', name: 'Benefits', sectionId: 'benefits' },
  { key: 'testimony', name: 'Testimonies', sectionId: 'testimonies' },
  { key: 'nailGallery', name: 'Nail Gallery', sectionId: 'nailGallery' },
  { key: 'meetMe', name: 'Meet Me', sectionId: 'meetMe' },
  { key: 'contactMe', name: 'Contact Me', sectionId: 'contactMe' }
];

// Icon Components
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

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

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Utility Functions
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const scrollToElement = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Custom Hook - Updated to exclude 'home' section
const useScrollTracking = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Only track sections that are in the navigation (excluding 'home')
      const sections = NAV_TABS.map(tab => tab.sectionId);
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection

      // Start with no active section
      let newActiveSection = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          newActiveSection = sections[i];
          break;
        }
      }

      setActiveSection(newActiveSection);
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return activeSection;
};

// Sub-components
const Logo = () => (
  <div className="flex-shrink-0 flex items-center">
    <img 
      src={logo} 
      alt="Beauty Studio Logo" 
      className="h-12 w-auto rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
      loading="lazy"
    />
    <h1 
      className="text-2xl font-bold hidden" 
      style={{ color: COLORS.primary }}
    >
      Beauty Studio
    </h1>
  </div>
);

const NavigationButton = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      isActive
        ? 'text-white shadow-lg transform scale-105 focus:ring-white'
        : 'hover:text-white focus:ring-gray-400'
    }`}
    style={{
      backgroundColor: isActive ? COLORS.primary : 'transparent',
      color: isActive ? COLORS.background : COLORS.primary,
    }}
  >
    {tab.name}
  </button>
);

const SocialButton = ({ platform, onClick, children, ariaLabel }) => (
  <button 
    onClick={onClick}
    className="p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
    style={{ color: COLORS.primary }}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

const ContactButton = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${className}`}
    style={{ backgroundColor: COLORS.primary, color: COLORS.background }}
    aria-label="Contact us"
  >
    <PhoneIcon />
    <span>Contact Me</span>
  </button>
);

const BookNowButton = ({onClick, className = ""}) =>(
  <button
    onClick={onClick}
    className={`flex items-center bg-canvas-black text-canvas-white space-x-2 px-6 py-3 rounded-2xl font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${className}`}
  >
    <a
    href='https://booksy.com/en-us/774723_the-nail-canvas_nail-salon_16218_savannah?do=invite&utm_medium=merchant_customer_invite'
    target='_blank'
    >
    Book Now
    </a>
  </button>
)

const MobileNavigationButton = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`block px-4 py-3 rounded-full text-base font-medium w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      isActive ? 'text-white shadow-md focus:ring-white' : 'focus:ring-gray-400'
    }`}
    style={{
      backgroundColor: isActive ? COLORS.primary : 'transparent',
      color: isActive ? COLORS.background : COLORS.primary
    }}
  >
    {tab.name}
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollTracking();

  // Event handlers
  const handleNavClick = useCallback((sectionId) => {
    scrollToElement(sectionId);
    setIsOpen(false);
  }, []);

  const handleSocialClick = useCallback((platform) => {
    const url = SOCIAL_MEDIA_LINKS[platform];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleContactClick = useCallback(() => {
    scrollToElement('contactMe');
    setIsOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Memoized styles
  const navbarStyle = useMemo(() => ({
    backgroundColor: COLORS.secondary,
    width: '90%'
  }), []);

  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.primary} 50%, ${COLORS.accent} 100%)`
  }), []);

  const mobileMenuStyle = useMemo(() => ({
    backgroundColor: COLORS.background
  }), []);

  const dividerStyle = useMemo(() => ({
    backgroundColor: COLORS.accent
  }), []);

  return (
    <>
      <nav 
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl shadow-lg backdrop-blur-sm"
        style={navbarStyle}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center">
                {/* Navigation Links */}
                <div className="flex items-baseline space-x-3">
                  {NAV_TABS.map((tab) => (
                    <NavigationButton
                      key={tab.key}
                      tab={tab}
                      isActive={activeSection === tab.sectionId}
                      onClick={() => handleNavClick(tab.sectionId)}
                    />
                  ))}
                </div>
                
                {/* Divider */}
                <div className="h-8 w-px mx-6" style={dividerStyle}></div>
                
                {/* Social Media & Contact */}
                <div className="flex items-center space-x-3">
                  <SocialButton 
                    platform="facebook" 
                    onClick={() => handleSocialClick('facebook')}
                    ariaLabel="Visit our Facebook page"
                  >
                    <FacebookIcon />
                  </SocialButton>
                  <SocialButton 
                    platform="twitter" 
                    onClick={() => handleSocialClick('twitter')}
                    ariaLabel="Visit our Twitter profile"
                  >
                    <TwitterIcon />
                  </SocialButton>
                  <SocialButton 
                    platform="instagram" 
                    onClick={() => handleSocialClick('instagram')}
                    ariaLabel="Visit our Instagram profile"
                  >
                    <InstagramIcon />
                  </SocialButton>
                  <ContactButton onClick={handleContactClick} className="ml-2" />
                  <BookNowButton></BookNowButton>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-300 shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                style={{ color: COLORS.primary }}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className="px-4 pt-4 pb-6 space-y-2 sm:px-6 shadow-lg rounded-b-2xl" 
            style={mobileMenuStyle}
          >
            {NAV_TABS.map((tab) => (
              <MobileNavigationButton
                key={tab.key}
                tab={tab}
                isActive={activeSection === tab.sectionId}
                onClick={() => handleNavClick(tab.sectionId)}
              />
            ))}

            <div className="h-px my-4" style={dividerStyle}></div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center space-x-4">
                <SocialButton 
                  platform="facebook" 
                  onClick={() => handleSocialClick('facebook')}
                  ariaLabel="Visit our Facebook page"
                >
                  <FacebookIcon />
                </SocialButton>
                <SocialButton 
                  platform="twitter" 
                  onClick={() => handleSocialClick('twitter')}
                  ariaLabel="Visit our Twitter profile"
                >
                  <TwitterIcon />
                </SocialButton>
                <SocialButton 
                  platform="instagram" 
                  onClick={() => handleSocialClick('instagram')}
                  ariaLabel="Visit our Instagram profile"
                >
                  <InstagramIcon />
                </SocialButton>
              </div>
              
              <ContactButton onClick={handleContactClick} className="mx-4" />
            </div>
          </div>
        </div>

        {/* Decorative gradient bar */}
        <div 
          className="absolute bottom-0 left-4 right-4 h-1 rounded-full" 
          style={gradientStyle}
        ></div>
      </nav>
      
      {/* Bottom margin spacer to prevent overlap with next component */}
      <div className="h-32"></div>
    </>
  );
};

export default Navbar;