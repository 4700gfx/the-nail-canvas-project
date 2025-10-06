import React, { useState, useEffect, useCallback } from 'react';

const Testimony = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonyData = [
    {
      id: 1,
      name: "Sarah Martinez",
      location: "Downtown Miami",
      rating: 5,
      text: "The Nail Canvas is absolutely incredible! Every detail is perfect, from the relaxing atmosphere to the stunning nail art. I've never felt more pampered in my life. The attention to detail is unmatched!",
      service: "Luxury Manicure & Custom Art"
    },
    {
      id: 2,
      name: "Jessica Thompson",
      location: "Coral Gables",
      rating: 5,
      text: "I'm obsessed with my gel extensions! The nail tech truly is an artist. The quality is exceptional and my nails have never looked better. This place is pure luxury from start to finish.",
      service: "Gel Extensions"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Brickell",
      rating: 5,
      text: "Best nail salon experience I've ever had! The custom nail art exceeded my expectations. It's clear they care about every single client. I'm a customer for life!",
      service: "Custom Nail Art"
    },
    {
      id: 4,
      name: "Ashley Chen",
      location: "South Beach",
      rating: 5,
      text: "The spa pedicure was heavenly! Such a peaceful, luxurious environment. The results speak for themselves - my nails look like art pieces. Absolutely worth every penny!",
      service: "Spa Pedicure"
    },
    {
      id: 5,
      name: "Nicole Williams",
      location: "Aventura",
      rating: 5,
      text: "Professional, clean, and absolutely gorgeous results every time. The Nail Canvas has ruined me for other salons - nothing compares to this level of artistry and care.",
      service: "Luxury Manicure"
    },
    {
      id: 6,
      name: "Isabella Garcia",
      location: "Wynwood",
      rating: 5,
      text: "I drive 45 minutes just to come here because it's THAT good. The nail tech is incredibly talented and the space is so serene. My nails are always flawless!",
      service: "Custom Design"
    }
  ];

  const changeTestimonial = useCallback((newIndex) => {
    if (newIndex === currentTestimonial || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  }, [currentTestimonial, isAnimating]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((currentTestimonial + 1) % testimonyData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [changeTestimonial, currentTestimonial, testimonyData.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-2xl transition-all duration-300 ${
          index < rating ? "text-yellow-400 animate-pulse" : "text-gray-300"
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section id='testimonies' className="min-h-screen relative overflow-hidden mt-20">
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-10px,0);
          }
          70% {
            transform: translate3d(0,-5px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out forwards;
        }

        .animate-rotateIn {
          animation: rotateIn 0.7s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .testimonial-transition {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-fade-enter {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }

        .testimonial-fade-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Navbar color scheme */
        .bg-canvas-pink { background-color: #F4BCCC; }
        .bg-canvas-brown { background-color: #5C2314; }
        .bg-canvas-white { background-color: #FFF9F7; }
        .bg-canvas-black { background-color: #2D2D2D; }
        .text-canvas-pink { color: #FFC3D7; }
        .text-canvas-brown { color: #5C2314; }
        .text-canvas-white { color: #FFFFFF; }
        .text-canvas-black { color: #2D2D2D; }
        .border-canvas-pink { border-color: #F4BCCC; }

        .maharlika-font { 
          font-family: 'Maharlika', serif; 
          font-weight: bold; 
        }
        .breathing-font { 
          font-family: 'Breathing', sans-serif; 
        }
        .tenor-font { 
          font-family: 'Tenor Sans', serif; 
        }

        .sleek-shadow {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }

        .btn-secondary {
          background-color: #FFF9F7;
          color: #5C2314;
          border: 2px solid #F4BCCC;
        }

        .btn-secondary:hover {
          background-color: #F4BCCC;
          color: #FFFFFF;
        }

        .dot-pulse {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dot-pulse:hover {
          transform: scale(1.3);
        }

        .quote-mark {
          background: linear-gradient(135deg, #F4BCCC, #FFC3D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Enhanced Background accents */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-float" 
        style={{background: 'radial-gradient(circle, rgba(244, 188, 204, 0.12) 0%, transparent 70%)'}}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-float" 
        style={{
          animationDelay: '3s',
          background: 'radial-gradient(circle, rgba(92, 35, 20, 0.1) 0%, transparent 70%)'
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float" 
        style={{
          animationDelay: '1.5s',
          background: 'radial-gradient(circle, rgba(255, 195, 215, 0.08) 0%, transparent 70%)'
        }}
      ></div>

      <div className="w-[90%] mx-auto px-6 lg:px-4 py-16">
        {/* Enhanced Header Section */}
        <div className={`header-container mx-auto text-center mb-16 space-y-6 ${mounted ? 'animate-slideInFromLeft' : 'opacity-0'}`}>
          <h1 className="maharlika-font text-5xl lg:text-6xl text-canvas-brown">
            Our Testimonies
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-gradient-to-r from-pink-300 to-red-900"></div>
            <h3 className="breathing-font text-lg text-canvas-black">
              Hear It From The Source 💅🏽
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-pink-300 to-red-900"></div>
          </div>
          <p className="tenor-font text-sm text-canvas-black max-w-2xl mx-auto opacity-80 leading-relaxed">
            Discover why our clients consider us their beauty destination. Real experiences from real people who trust us with their nail care.
          </p>
        </div>

        {/* Enhanced Main Testimonial Display */}
        <div className={`testimony-container max-w-6xl mx-auto ${mounted ? 'animate-zoomIn stagger-2' : 'opacity-0'}`}>
          <div className="bg-canvas-brown rounded-3xl sleek-shadow p-8 lg:p-12 relative overflow-hidden card-hover">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl animate-float" style={{backgroundColor: 'rgba(255, 249, 247, 0.15)'}}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-xl animate-float" style={{backgroundColor: 'rgba(255, 249, 247, 0.1)', animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full blur-lg animate-float" style={{backgroundColor: 'rgba(255, 195, 215, 0.12)', animationDelay: '4s'}}></div>

            {/* Current Testimonial */}
            <div className={`relative z-10 testimonial-transition ${isAnimating ? 'testimonial-fade-enter' : 'testimonial-fade-active'}`}>
              <div className="text-center mb-8">
                {/* Enhanced Quote Icon */}
                <div className="text-6xl quote-mark mb-4 animate-bounce-slow">"</div>
                
                {/* Testimonial Text */}
                <p className="tenor-font text-lg lg:text-xl leading-relaxed text-canvas-white mb-6 max-w-4xl mx-auto">
                  {testimonyData[currentTestimonial].text}
                </p>

                {/* Enhanced Rating */}
                <div className="flex justify-center mb-6 space-x-1">
                  {renderStars(testimonyData[currentTestimonial].rating)}
                </div>

                {/* Enhanced Client Info */}
                <div className="space-y-3">
                  <h4 className="breathing-font text-xl font-semibold text-canvas-white">
                    {testimonyData[currentTestimonial].name}
                  </h4>
                  <p className="tenor-font text-sm text-canvas-white opacity-75">
                    📍 {testimonyData[currentTestimonial].location}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: 'rgba(255, 249, 247, 0.15)'}}>
                    <span className="tenor-font text-xs text-canvas-white font-medium">
                      ✨ {testimonyData[currentTestimonial].service}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Dots */}
            <div className="flex justify-center space-x-4 mt-8">
              {testimonyData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeTestimonial(index)}
                  className={`dot-pulse rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'w-4 h-4 scale-125 shadow-lg'
                      : 'w-3 h-3 hover:scale-110'
                  }`}
                  style={{
                    backgroundColor: index === currentTestimonial ? '#FFF9F7' : 'rgba(255, 249, 247, 0.4)'
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-200 to-pink-300 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentTestimonial + 1) / testimonyData.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          {/* Enhanced Summary Stats Row */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ${mounted ? 'animate-slideInFromRight stagger-3' : 'opacity-0'}`}>
            <div className="stats-card text-center rounded-2xl p-6 bg-canvas-white sleek-shadow card-hover group">
              <div className="maharlika-font text-3xl font-bold text-canvas-brown mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-600">⭐ 5.0</div>
              <div className="tenor-font text-base text-canvas-black mb-1 font-semibold">Perfect Rating</div>
              <div className="tenor-font text-xs text-canvas-black opacity-70">Across All Reviews</div>
            </div>
            
            <div className="stats-card text-center rounded-2xl p-6 bg-canvas-white sleek-shadow card-hover group">
              <div className="maharlika-font text-3xl font-bold text-canvas-brown mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-600">500+</div>
              <div className="tenor-font text-base text-canvas-black mb-1 font-semibold">Happy Clients</div>
              <div className="tenor-font text-xs text-canvas-black opacity-70">And Growing Daily</div>
            </div>
            
            <div className="stats-card text-center rounded-2xl p-6 bg-canvas-white sleek-shadow card-hover group">
              <div className="maharlika-font text-3xl font-bold text-canvas-brown mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-600">100%</div>
              <div className="tenor-font text-base text-canvas-black mb-1 font-semibold">Satisfaction</div>
              <div className="tenor-font text-xs text-canvas-black opacity-70">Guaranteed Results</div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className={`text-center mt-20 ${mounted ? 'animate-slideInFromBottom stagger-4' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="breathing-font text-xl font-semibold text-canvas-brown">
                  Ready to Join Our Happy Clients?
                </h3>
                <p className="tenor-font text-sm text-canvas-black max-w-2xl mx-auto opacity-90 leading-relaxed">
                  Ready to experience the luxury that everyone's talking about? Book your appointment today and see why our clients can't stop raving about us.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-canvas-pink px-8 py-3 rounded-full font-semibold text-white text-base card-hover shadow-lg">
                  <a
                  href='https://booksy.com/en-us/774723_the-nail-canvas_nail-salon_16218_savannah?do=invite&utm_medium=merchant_customer_invite'
                  target='_blank'
                  >
                  Book Your Experience  
                  </a>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center items-center space-x-6 pt-6 border-t border-pink-100 mt-8">
                <div className="flex items-center space-x-2 text-xs text-canvas-black opacity-75">
                  <span>🏆</span>
                  <span className="tenor-font">Award Winning</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-canvas-black opacity-75">
                  <span>💎</span>
                  <span className="tenor-font">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-canvas-black opacity-75">
                  <span>🤝</span>
                  <span className="tenor-font">Trusted Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-pink-300 to-transparent animate-fadeIn"></div>
    </section>
  );
};

export default Testimony;