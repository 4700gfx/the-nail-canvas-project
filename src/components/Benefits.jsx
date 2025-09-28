import React, { useState, useEffect, useRef } from 'react';
import benefit1 from '../assets/images/benefits-pics-1.jpeg'
import benefit2 from '../assets/images/benefits-pics-2.jpeg'
import benefit3 from '../assets/images/benefits-pics-3.jpeg'

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const [cardStates, setCardStates] = useState({});
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const benefitsData = [
    {
      id: 1,
      title: "Odorless + Safe",
      description: "Experience the ultimate comfort with our advanced gel formulations that eliminate harsh chemical odors while using only non-toxic, skin-safe compounds. Perfect for sensitive individuals and pregnant clients.",
      image: benefit1,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      hoverColor: "emerald-600"
    },
    {
      id: 2,
      title: "Long-Lasting Beauty",
      description: "Our premium gel system delivers exceptional durability with chip-resistant formulas that maintain their stunning appearance for weeks. Say goodbye to frequent touch-ups and hello to lasting perfection.",
      image: benefit2,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      hoverColor: "purple-600"
    },
    {
      id: 3,
      title: "Nail Health First",
      description: "Our innovative approach strengthens and protects your natural nails while delivering stunning results. Enriched with nourishing ingredients that promote healthy nail growth and prevent damage.",
      image: benefit3,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-rose-400 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      hoverColor: "rose-600"
    }
  ]

  // Enhanced Intersection Observer for in/out view animations
  useEffect(() => {
    // Main section observer for overall visibility
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) {
            setSectionInView(entry.isIntersecting);
            if (entry.isIntersecting) {
              setHeaderVisible(true);
              setTimeout(() => setBackgroundVisible(true), 200);
            } else {
              // Animate out when section leaves view completely
              setHeaderVisible(false);
              setBackgroundVisible(false);
              setVisibleCards([]);
              setCardStates({});
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px -100px 0px'
      }
    );

    // Individual card observer for granular control
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = cardRefs.current.indexOf(entry.target);
          if (cardIndex !== -1) {
            setCardStates(prev => ({
              ...prev,
              [cardIndex]: {
                inView: entry.isIntersecting,
                intersectionRatio: entry.intersectionRatio
              }
            }));

            if (entry.isIntersecting) {
              setVisibleCards(prev => {
                if (!prev.includes(cardIndex)) {
                  return [...prev, cardIndex];
                }
                return prev;
              });
            } else {
              // Remove card from visible when it goes completely out of view
              setTimeout(() => {
                setVisibleCards(prev => prev.filter(index => index !== cardIndex));
              }, 300);
            }
          }
        });
      },
      { 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    cardRefs.current.forEach(ref => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  // Initial entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
      setTimeout(() => setBackgroundVisible(true), 300);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className='flex flex-col py-20 px-6 relative overflow-hidden'>
      {/* Enhanced Background decorative elements with in/out view animations */}
      <div className={`absolute inset-0 opacity-5 transition-all duration-2000 ease-out ${
        sectionInView && backgroundVisible ? 'scale-100 opacity-5' : 'scale-75 opacity-0'
      }`}>
        <div 
          className={`absolute top-32 left-20 w-40 h-40 bg-emerald-300 rounded-full blur-3xl transition-all duration-1500 ease-out ${
            sectionInView ? 'translate-x-0 translate-y-0' : '-translate-x-20 -translate-y-10'
          }`}
          style={{
            animation: sectionInView && backgroundVisible ? 'floatSlow 8s ease-in-out infinite, pulse 3s ease-in-out infinite' : 'none',
            animationDelay: '0s, 0s'
          }}
        ></div>
        <div 
          className={`absolute bottom-40 right-16 w-48 h-48 bg-purple-300 rounded-full blur-3xl transition-all duration-1500 ease-out delay-300 ${
            sectionInView ? 'translate-x-0 translate-y-0' : 'translate-x-20 translate-y-10'
          }`}
          style={{
            animation: sectionInView && backgroundVisible ? 'floatSlow 10s ease-in-out infinite reverse, pulse 3s ease-in-out infinite' : 'none',
            animationDelay: '1s, 1s'
          }}
        ></div>
        <div 
          className={`absolute top-1/2 left-1/2 w-32 h-32 bg-pink-300 rounded-full blur-2xl transition-all duration-1500 ease-out delay-600 ${
            sectionInView ? 'translate-x-0 translate-y-0 scale-100' : 'translate-x-10 -translate-y-5 scale-75'
          }`}
          style={{
            animation: sectionInView && backgroundVisible ? 'floatSlow 6s ease-in-out infinite, pulse 3s ease-in-out infinite' : 'none',
            animationDelay: '2s, 2s'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Enhanced Header Section with in/out view animations */}
        <div className={`text-center mb-24 transition-all duration-1000 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-8 shadow-xl transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'
          }`}
          style={{
            animation: headerVisible && sectionInView ? 'pulse 2s ease-in-out infinite, rotate 20s linear infinite' : 'none'
          }}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className={`maharlika-font text-6xl md:text-7xl lg:text-8xl text-canvas-brown leading-tight cursor-default py-2 transition-all duration-1000 ease-out delay-200 ${
            headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{
            animation: headerVisible && sectionInView ? 'shimmerText 3s ease-in-out infinite' : 'none'
          }}>
            <span 
              className={`inline-block transition-all duration-700 ${
                headerVisible ? 'scale-100 rotate-0' : 'scale-90 rotate-3'
              } hover:scale-105`}
              style={{
                background: 'linear-gradient(45deg, #5C2314, #8B4513, #5C2314)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Benefits
            </span>
          </h1>

          <h3 className={`breathing-font text-2xl text-canvas-brown mb-2 transition-all duration-800 ease-out delay-400 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            The Benefits of Gel Designs 
          </h3>
          
          <div className={`flex items-center justify-center space-x-4 mb-8 transition-all duration-1000 ease-out delay-600 ${
            headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div 
              className="h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: headerVisible ? '64px' : '0px',
                animation: headerVisible && sectionInView ? 'pulse 2s ease-in-out infinite' : 'none'
              }}
            ></div>
            <div 
              className="h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1200 ease-out delay-100"
              style={{
                width: headerVisible ? '96px' : '0px',
                animation: headerVisible && sectionInView ? 'gradientShift 4s ease-in-out infinite' : 'none'
              }}
            ></div>
            <div 
              className="h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full transition-all duration-1000 ease-out delay-200"
              style={{
                width: headerVisible ? '64px' : '0px',
                animation: headerVisible && sectionInView ? 'pulse 2s ease-in-out infinite 1s' : 'none'
              }}
            ></div>
          </div>
          
          <p className={`tenor-font text-md text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Discover the transformative advantages of our advanced Gel-Based Nail Design system, 
            where beauty meets wellness in perfect harmony. Look into the benefits of The Nail Canvas benefits below:
          </p>
        </div>

        {/* Benefits Cards with enhanced in/out view animations */}
        <div className="space-y-8 mb-20">
          {benefitsData.map((benefit, index) => {
            const cardState = cardStates[index] || { inView: false, intersectionRatio: 0 };
            const isVisible = visibleCards.includes(index);
            const parallaxOffset = cardState.inView ? (1 - cardState.intersectionRatio) * 20 : 0;
            
            return (
              <div 
                key={benefit.id} 
                ref={el => cardRefs.current[index] = el}
                className="group p-2"
              >
                <div 
                  className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col md:flex-row ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  } md:h-52 relative group-hover:scale-[1.02] transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transform: `translateY(${isVisible ? (parallaxOffset + 'px') : '50px'})`,
                    transition: 'all 0.8s ease-out',
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                
                  {/* Enhanced gradient overlay with dynamic opacity */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} transition-all duration-700 rounded-3xl ${
                    cardState.inView ? 'opacity-0 group-hover:opacity-5' : 'opacity-0'
                  }`}></div>
                
                  {/* Image Section with parallax and enhanced animations */}
                  <div className="relative overflow-hidden md:w-1/2 h-52 md:h-full p-6 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                        style={{
                          transform: `scale(${isVisible ? 1 : 0.8}) translateY(${parallaxOffset * 0.5}px)`,
                          opacity: isVisible ? 1 : 0,
                          transition: `all 1s ease-out ${index * 150 + 200}ms`
                        }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-700 ${
                        cardState.inView ? 'opacity-0 group-hover:opacity-100' : 'opacity-30'
                      }`}></div>
                    </div>
                  
                    {/* Floating Icon with enhanced in/out animations */}
                    <div 
                      className={`absolute top-8 right-8 w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-700 z-10`}
                      style={{
                        transform: `scale(${isVisible ? 1 : 0.3}) rotate(${isVisible ? '0deg' : '-180deg'})`,
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.8s ease-out ${index * 150 + 400}ms`,
                        animation: isVisible && cardState.inView ? `floatIcon 3s ease-in-out infinite ${index * 150 + 800}ms` : 'none'
                      }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {benefit.icon.props.children}
                      </svg>
                    </div>

                    {/* Number Badge with bounce and out animation */}
                    <div 
                      className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-50 group-hover:scale-110 transition-transform duration-500 z-10"
                      style={{
                        transform: `translateX(${isVisible ? '0px' : '-40px'}) scale(${isVisible ? 1 : 0.5})`,
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.6s ease-out ${index * 150 + 500}ms`
                      }}
                    >
                      <span 
                        className="breathing-font text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent"
                        style={{
                          transform: `scale(${isVisible ? 1 : 0})`,
                          transition: `transform 0.4s ease-out ${index * 150 + 700}ms`
                        }}
                      >
                        {benefit.id}
                      </span>
                    </div>
                  </div>

                  {/* Content Section with enhanced staggered animations */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative z-10">
                    <h3 
                      className={`breathing-font text-2xl md:text-2xl mt-5 font-bold text-gray-800 mb-4 group-hover:text-${benefit.hoverColor} transition-colors duration-500`}
                      style={{
                        transform: `translateX(${isVisible ? '0px' : (index % 2 === 0 ? '30px' : '-30px')})`,
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.8s ease-out ${index * 150 + 300}ms`
                      }}
                    >
                      {benefit.title}
                    </h3>
                  
                    <p 
                      className="tenor-font text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-500 mb-6"
                      style={{
                        transform: `translateY(${isVisible ? '0px' : '20px'})`,
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.8s ease-out ${index * 150 + 500}ms`
                      }}
                    >
                      {benefit.description}
                    </p>

                    {/* Enhanced Bottom Section with sophisticated reveal animations */}
                    <div>
                      <div 
                        className={`h-1.5 bg-gradient-to-r ${benefit.gradient} rounded-full mb-4 transition-all duration-700`}
                        style={{
                          width: isVisible && cardState.inView ? '96px' : '0px',
                          opacity: isVisible ? 1 : 0,
                          transition: `all 0.8s ease-out ${index * 150 + 700}ms`
                        }}
                      ></div>
                    
                      <div 
                        className={`flex items-center text-sm font-semibold transition-all duration-700 delay-200 ${
                          cardState.inView ? 'group-hover:opacity-100 group-hover:translate-x-2' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{
                          opacity: isVisible ? 0.7 : 0,
                          transform: `translateX(${isVisible ? '0px' : '-20px'})`,
                          transition: `all 0.6s ease-out ${index * 150 + 900}ms`
                        }}
                      >
                        <span className={`text-${benefit.hoverColor}`}>Discover more benefits</span>
                        <div className={`ml-3 w-8 h-8 bg-gradient-to-r ${benefit.gradient} rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) translateX(10px) rotate(120deg); 
          }
          66% { 
            transform: translateY(5px) translateX(-8px) rotate(240deg); 
          }
        }
        
        @keyframes shimmerText {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes gradientShift {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes floatIcon {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-5px); 
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
        
        @keyframes parallaxFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          50% { 
            transform: translateY(-10px) translateX(5px); 
          }
        }
        
        .group:hover .group-hover\\:rotate-45 {
          transform: rotate(45deg);
        }
        
        .section-exit {
          animation: slideOut 0.6s ease-out forwards;
        }
        
        .section-enter {
          animation: slideInFromTop 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Benefits