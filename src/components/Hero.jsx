import { useState, useEffect } from 'react';
import nailPic1 from '../assets/images/nail-pic-1.png'
import nailPic2 from '../assets/images/nail-pic-2.png'
import nailPic3 from '../assets/images/nail-pic-3.png'
import nailPic4 from '../assets/images/nail-pic-4.png'
import nailPic5 from '../assets/images/nail-pic-5.png'
import nailPic6 from '../assets/images/nail-pic-6.jpeg'
import nailPic7 from '../assets/images/nail-pic-7.jpeg'

// Mock nail images - replace with your actual imported images
const nailImages = [
  nailPic1, 
  nailPic2,
  nailPic3,
  nailPic4,
  nailPic4,
  nailPic5,
  nailPic6, 
  nailPic7
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Trigger initial animations
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setAnimationPhase(1), 300);
    const timer3 = setTimeout(() => setAnimationPhase(2), 600);
    const timer4 = setTimeout(() => setAnimationPhase(3), 900);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden mt-2">
      {/* Enhanced background accents with animation */}
      <div 
        className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-50 to-transparent rounded-full blur-3xl opacity-30 transition-all duration-[2000ms] ease-out ${
          isVisible ? 'translate-x-0 translate-y-0 scale-100' : 'translate-x-32 -translate-y-32 scale-75'
        }`}
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      <div 
        className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-20 transition-all duration-[2500ms] ease-out delay-300 ${
          isVisible ? 'translate-x-0 translate-y-0 scale-100' : '-translate-x-32 translate-y-32 scale-75'
        }`}
        style={{
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      ></div>

      <div className={`w-[90%] mx-auto px-6 lg:px-4 py-12 bg-canvas-white rounded-3xl sleek-shadow mt-8 mb-8 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ minHeight: '75vh' }}>
          
          {/* Left Content - Text Section */}
          <div className="space-y-10 ml-10">
            {/* Main Headlines */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className={`maharlika-font text-7xl lg:text-8xl xl:text-9xl leading-none transition-all duration-1000 ease-out ${
                  animationPhase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <span 
                    className="text-gradient inline-block"
                    style={{
                      animation: animationPhase >= 1 ? 'shimmer 3s ease-in-out infinite' : 'none'
                    }}
                  >
                    Luxurious
                  </span>
                </h1>
                <h2 className={`breathing-font text-8xl lg:text-6xl xl:text-7xl font-semibold text-canvas-brown leading-none transition-all duration-1000 ease-out delay-200 ${
                  animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Nails
                </h2>
              </div>
              
              <div className={`flex items-center space-x-4 transition-all duration-800 ease-out delay-400 ${
                animationPhase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <div 
                  className="h-px bg-gradient-to-r from-canvas-pink to-canvas-brown transition-all duration-1000 ease-out"
                  style={{
                    width: animationPhase >= 1 ? '48px' : '0px'
                  }}
                ></div>
                <span className="breathing-font text-2xl text-canvas-black">From a Nail Tech That Cares</span>
                <span 
                  className="text-2xl transition-transform duration-500 ease-out delay-600"
                  style={{
                    transform: animationPhase >= 1 ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
                    animation: animationPhase >= 2 ? 'bounce 2s ease-in-out infinite' : 'none'
                  }}
                >
                  💅🏽
                </span>
              </div>
            </div>

            {/* Description Card */}
            <div className={`transition-all duration-1000 ease-out delay-500 ${
              animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <p className="tenor-font text-sm leading-relaxed text-canvas-black mb-6">
                At <span className="font-bold text-canvas-brown">The Nail Canvas</span>, we believe your nails are a true work of art—a reflection of your individuality and style. Step into our serene, luxurious space, thoughtfully designed to inspire relaxation and leave you feeling pampered, confident, and renewed.
              </p>

              <p className='tenor-font text-sm leading-relaxed text-canvas-black mb-8'>
                Our expert nail technician combines years of professional artistry with an eye for perfection, delivering results that go beyond ordinary manicures. From timeless classics to bold, trend-setting designs — each set is a personalized masterpiece that reflects your unique style. Come and create your creation with the Nail Canvas   
              </p>
              
              {/* Service Tags with staggered animation */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Luxury Manicures', 'Spa Pedicures', 'Custom Nail Art', 'Gel Extensions'].map((tag, index) => (
                  <span 
                    key={tag}
                    className={`service-tag px-4 py-2 rounded-full text-sm font-medium text-canvas-brown transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg ${
                      animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                      animation: animationPhase >= 2 ? `slideInUp 0.6s ease-out ${600 + index * 100}ms both` : 'none'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons with hover animations */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-700 ${
                animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                <button 
                  className="bg-canvas-pink px-8 py-4 rounded-full font-semibold text-white text-lg hover-lift transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{
                    animation: animationPhase >= 3 ? 'pulse 2s ease-in-out infinite' : 'none'
                  }}
                >
                  Book Your Appointment
                </button>
                <button className="btn-secondary px-8 py-4 rounded-full font-semibold hover-lift transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Stats Row with counter animation */}
            <div className={`grid grid-cols-3 gap-6 transition-all duration-1000 ease-out delay-1000 ${
              animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '⭐ 5.0', label: 'Average Rating' },
                { value: '3+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`stats-card text-center rounded-2xl p-6 hover-lift transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg ${
                    animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: `${1000 + index * 150}ms`
                  }}
                >
                  <div 
                    className="maharlika-font text-3xl font-bold text-canvas-brown mb-1"
                    style={{
                      animation: animationPhase >= 3 ? `countUp 1s ease-out ${1200 + index * 150}ms both` : 'none'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="tenor-font text-sm text-canvas-black">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Gallery with enhanced animations */}
          <div className={`relative transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
          }`}>
            <div className="relative h-[550px] overflow-hidden rounded-3xl sleek-shadow">
              {/* Enhanced blur overlays */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling Grid with smoother animation */}
              <div 
                className="scrolling-grid h-full"
                style={{
                  animation: 'smoothScroll 25s linear infinite'
                }}
              >
                <div className="grid grid-cols-2 gap-4 p-6" style={{ height: '200%' }}>
                  {/* Double the images for seamless loop */}
                  {[...nailImages, ...nailImages, ...nailImages, ...nailImages].map((image, index) => (
                    <div 
                      key={index}
                      className={`relative overflow-hidden rounded-2xl hover-lift transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl ${
                        animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        height: index % 4 === 0 ? '220px' : 
                               index % 3 === 0 ? '180px' : 
                               index % 2 === 0 ? '160px' : '200px',
                        transitionDelay: `${(index % 8) * 100}ms`,
                        animation: `fadeInScale 0.8s ease-out ${300 + (index % 8) * 100}ms both`
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`Nail art design ${(index % nailImages.length) + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 
                            index % 2 === 0 
                              ? 'linear-gradient(135deg, #FF3CD7, #ff1cc7)' 
                              : 'linear-gradient(135deg, #5C2314, #4a1e0f)';
                        }}
                      />
                      
                      {/* Enhanced hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-300 ease-out"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Animated floating elements */}
            <div 
              className="absolute -top-4 -left-4 w-20 h-20 bg-canvas-pink/10 rounded-full blur-xl transition-all duration-1000 ease-out"
              style={{
                animation: 'float 4s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-canvas-brown/10 rounded-full blur-2xl transition-all duration-1000 ease-out delay-200"
              style={{
                animation: 'float 5s ease-in-out infinite reverse'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom decorative element */}
      <div 
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-canvas-pink/50 to-transparent transition-all duration-1000 ease-out delay-1200 ${
          animationPhase >= 3 ? 'w-px h-16 opacity-100' : 'w-0 h-0 opacity-0'
        }`}
      ></div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes smoothScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 60, 215, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(255, 60, 215, 0); }
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #FF3CD7, #5C2314);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .scrolling-grid {
          animation-play-state: running;
        }
        
        .scrolling-grid:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;