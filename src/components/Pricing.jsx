import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('manicures');
  const [hoveredService, setHoveredService] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pricingData = {
    manicures: [
      {
        name: "Manicure",
        description: "Classic nail care with expert shaping, cuticle treatment, and your choice of regular polish. Perfect for maintaining healthy, beautiful nails.",
        price: 30,
        duration: "45 min",
        popular: false,
        features: ["Nail Shaping", "Cuticle Care", "Hand Massage", "Regular Polish"],
        highlight: "Timeless beauty and care"
      },
      {
        name: "Manicure w/ Gel",
        description: "Elevate your manicure with long-lasting gel polish that provides superior shine and chip-resistance for up to 2-3 weeks.",
        price: 45,
        duration: "60 min",
        popular: true,
        features: ["Nail Shaping", "Cuticle Treatment", "Hand Massage", "Gel Polish"],
        highlight: "Our most popular choice - lasts weeks!"
      },
      {
        name: "Spa Manicure",
        description: "Indulge in a luxurious experience with warm soak, exfoliating scrub, hydrating mask, and extended massage for ultimate relaxation.",
        price: 40,
        duration: "60 min",
        popular: false,
        features: ["Warm Soak", "Exfoliating Scrub", "Hydrating Mask", "Extended Massage"],
        highlight: "Pure pampering for your hands"
      },
      {
        name: "Russian Manicure",
        description: "Indulge in a luxurious experience with warm soak, exfoliating scrub, hydrating mask, and extended massage for ultimate relaxation.",
        price: 40,
        duration: "60 min",
        popular: false,
        features: ["Warm Soak", "Exfoliating Scrub", "Hydrating Mask", "Extended Massage"],
        highlight: "Pure pampering for your hands"
      },

      {
        name: "Spa Manicure w/ Gel",
        description: "The ultimate combination of spa luxury and long-lasting gel polish. Enjoy premium pampering with weeks of perfect color.",
        price: 55,
        duration: "75 min",
        popular: false,
        features: ["Spa Treatment", "Premium Products", "Gel Polish", "Extended Care"],
        highlight: "Luxury meets longevity"
      },
      {
        name: "MANicure",
        description: "Designed specifically for men's nails and hands. Professional grooming with nail trimming, buffing, and cuticle care.",
        price: 25,
        duration: "40 min",
        popular: false,
        features: ["Nail Trimming", "Buffing", "Cuticle Care", "Hand Treatment"],
        highlight: "Professional grooming for men"
      },
      {
        name: "MANicure w/ Gel",
        description: "Men's professional nail care enhanced with clear or natural gel for a polished, well-groomed appearance that lasts.",
        price: 40,
        duration: "55 min",
        popular: false,
        features: ["Professional Grooming", "Gel Treatment", "Natural Finish", "Long-lasting"],
        highlight: "Refined and sophisticated"
      }
    ],
    pedicures: [
      {
        name: "Basic Pedicure",
        description: "Essential foot care with warm soak, nail trimming, callus removal, and your choice of regular polish for beautiful, healthy feet.",
        price: 35,
        duration: "50 min",
        popular: false,
        features: ["Warm Soak", "Nail Trimming", "Callus Removal", "Regular Polish"],
        highlight: "Essential foot care"
      },
      {
        name: "Basic Pedicure w/ Gel",
        description: "Classic pedicure enhanced with chip-resistant gel polish that keeps your toes looking perfect for 3-4 weeks.",
        price: 50,
        duration: "65 min",
        popular: true,
        features: ["Complete Foot Care", "Gel Polish", "Extended Wear", "Mirror Finish"],
        highlight: "Perfect for active lifestyles"
      },
      {
        name: "Deluxe Pedicure",
        description: "Premium foot spa experience with sugar scrub exfoliation, hydrating mask, hot stone massage, and extended pampering.",
        price: 50,
        duration: "75 min",
        popular: false,
        features: ["Sugar Scrub", "Hydrating Mask", "Hot Stone Massage", "Premium Care"],
        highlight: "Ultimate foot indulgence"
      },
      {
        name: "Deluxe Pedicure w/ Gel",
        description: "Our most luxurious pedicure combining spa-quality treatments with long-lasting gel polish for the ultimate foot transformation.",
        price: 65,
        duration: "90 min",
        popular: false,
        features: ["Deluxe Spa Treatment", "Gel Polish", "Hot Stone Therapy", "Extended Massage"],
        highlight: "Pure bliss for your feet"
      }
    ],
    extensions: [
      {
        name: "Short Full Set",
        description: "Professional gel extensions in a natural short length. Perfect for those who want subtle elegance and strength.",
        price: 60,
        duration: "120 min",
        popular: false,
        features: ["Custom Shape", "Natural Length", "Reinforced Strength", "Professional Finish"],
        highlight: "Ideal for everyday elegance"
      },
      {
        name: "Medium Full Set",
        description: "Versatile medium-length extensions that strike the perfect balance between practicality and glamour for any occasion.",
        price: 70,
        duration: "135 min",
        popular: true,
        features: ["Versatile Length", "Custom Design", "Durable Build", "Show-stopping Shine"],
        highlight: "The perfect length - most popular!"
      },
      {
        name: "Long Full Set",
        description: "Dramatic long extensions for those who love to make a statement. Maximum length with superior strength and beauty.",
        price: 80,
        duration: "150 min",
        popular: false,
        features: ["Statement Length", "Bold Impact", "Maximum Strength", "Glamorous Finish"],
        highlight: "For the bold and beautiful"
      },
      {
        name: "Extra Long Full Set",
        description: "Our most dramatic extension service. Ultra-long nails crafted with precision for those who demand show-stopping impact.",
        price: 95,
        duration: "165 min",
        popular: false,
        features: ["Ultra-Long Length", "Maximum Drama", "Expert Construction", "Unforgettable Style"],
        highlight: "Ultimate glamour and drama"
      },
      {
        name: "Short Fill",
        description: "Maintain your short gel extensions with professional fill-in service. Refresh growth area and perfect the shape.",
        price: 40,
        duration: "75 min",
        popular: false,
        features: ["Growth Area Fill", "Shape Maintenance", "Polish Refresh", "Strength Check"],
        highlight: "Keep them looking fresh"
      },
      {
        name: "Medium Fill",
        description: "Professional maintenance for your medium extensions. We'll fill, reshape, and refresh for continued perfection.",
        price: 50,
        duration: "90 min",
        popular: false,
        features: ["Complete Fill-in", "Reshaping", "Structure Check", "Color Refresh"],
        highlight: "Maintain your perfect look"
      },
      {
        name: "Long Fill",
        description: "Expert fill-in service for long extensions. Restore strength, perfect the shape, and maintain your dramatic length.",
        price: 60,
        duration: "105 min",
        popular: false,
        features: ["Growth Fill", "Length Maintenance", "Reinforcement", "Polish Update"],
        highlight: "Keep the drama alive"
      },
      {
        name: "Extra Long Fill",
        description: "Specialized maintenance for ultra-long extensions. Comprehensive care to keep your statement nails flawless.",
        price: 70,
        duration: "120 min",
        popular: false,
        features: ["Complete Maintenance", "Ultra-Long Care", "Structure Reinforcement", "Perfect Finish"],
        highlight: "Preserve your dramatic look"
      },
      {
        name: "Short Rebalance",
        description: "Complete rebalancing service for short extensions. Restore structure, correct shape, and ensure optimal nail health.",
        price: 50,
        duration: "90 min",
        popular: false,
        features: ["Structure Correction", "Shape Restoration", "Product Reapplication", "Health Check"],
        highlight: "Restore and perfect"
      },
      {
        name: "Medium Rebalance",
        description: "Full rebalancing treatment for medium extensions. Comprehensive restoration of shape, strength, and beauty.",
        price: 60,
        duration: "105 min",
        popular: false,
        features: ["Complete Rebalance", "Structure Rebuild", "Shape Correction", "Full Restoration"],
        highlight: "Comprehensive renewal"
      },
      {
        name: "Long Rebalance",
        description: "Expert rebalancing for long extensions. Extensive care to restore integrity and beauty to your dramatic length.",
        price: 70,
        duration: "120 min",
        popular: false,
        features: ["Full Structure Reset", "Length Correction", "Strength Restoration", "Complete Refresh"],
        highlight: "Complete transformation"
      },
      {
        name: "Extra Long Rebalance",
        description: "Premium rebalancing service for ultra-long extensions. Meticulous restoration to maintain show-stopping perfection.",
        price: 85,
        duration: "135 min",
        popular: false,
        features: ["Ultra-Long Rebalance", "Complete Reconstruction", "Maximum Care", "Flawless Finish"],
        highlight: "Ultimate restoration"
      }
    ]
  };

  const categories = [
    { id: 'manicures', name: 'Manicures', icon: '💅', desc: 'Hand Perfection' },
    { id: 'pedicures', name: 'Pedicures', icon: '🌺', desc: 'Foot Luxury' },
    { id: 'extensions', name: 'Extensions + Fills', icon: '✨', desc: 'Length & Strength' }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(244, 188, 204, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .popular-badge {
          transform: translateY(-50%);
          z-index: 20;
        }

        .text-gradient {
          background: linear-gradient(135deg, #5C2314, #F4BCCC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sleek-shadow {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .popular-glow {
          box-shadow: 0 0 30px rgba(244, 188, 204, 0.4), 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .bg-canvas-pink { background-color: #F4BCCC; }
        .bg-canvas-brown { background-color: #5C2314; }
        .bg-canvas-white { background-color: #FFF9F7; }
        .bg-canvas-black { background-color: #2D2D2D; }
        .text-canvas-pink { color: #FFC3D7; }
        .text-canvas-brown { color: #5C2314; }
        .text-canvas-white { color: #FFFFFF; }
        .text-canvas-black { color: #2D2D2D; }
        .border-canvas-pink { border-color: #F4BCCC;}

        .maharlika-font { font-family: 'Maharlika', serif; font-weight: bold; }
        .breathing-font { font-family: 'Breathing', sans-serif; }
        .tenor-font { font-family: 'Tenor Sans', serif; }
      `}</style>

      {/* Animated Background accents */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-bl from-pink-200 to-transparent rounded-full blur-3xl animate-float" style={{background: 'radial-gradient(circle, rgba(244, 188, 204, 0.12) 0%, transparent 70%)'}}></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-gradient-to-tr from-yellow-800 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s', background: 'radial-gradient(circle, rgba(92, 35, 20, 0.1) 0%, transparent 70%)'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full blur-3xl animate-float" style={{animationDelay: '4s', background: 'radial-gradient(circle, rgba(255, 195, 215, 0.08) 0%, rgba(92, 35, 20, 0.05) 100%)'}}></div>

      <div className="w-[95%] sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header Section */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="maharlika-font text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none text-gradient">
              Pricing
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0 mb-6 sm:mb-8 px-4">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-pink-300 to-red-900 hidden sm:block"></div>
            <span className="breathing-font text-lg sm:text-xl lg:text-2xl text-canvas-black text-center"> Luxury Services + Transparent Pricing</span>
            <span className="text-xl sm:text-2xl">💎</span>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-pink-300 to-red-900 hidden sm:block"></div>
          </div>
          
          <p className="tenor-font text-sm sm:text-base lg:text-lg text-canvas-black max-w-3xl mx-auto leading-relaxed px-4">
            Experience the artistry of professional nail care with our comprehensive menu of services. Each treatment is carefully crafted to deliver exceptional results that exceed your expectations.
          </p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className={`bg-canvas-white rounded-2xl sm:rounded-3xl sleek-shadow p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 max-w-5xl mx-auto ${mounted ? 'animate-fadeIn stagger-2' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 transform ${
                  activeCategory === category.id
                    ? 'bg-canvas-pink text-white shadow-lg scale-105 animate-shimmer'
                    : 'text-canvas-brown hover:scale-102'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: activeCategory === category.id ? '#F4BCCC' : 'rgba(244, 188, 204, 0.08)'
                }}
              >
                <div className="text-center space-y-1 sm:space-y-2 transition-all duration-300">
                  <div className={`text-2xl sm:text-3xl mb-1 sm:mb-2 transition-transform duration-300 ${activeCategory === category.id ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                    {category.icon}
                  </div>
                  <div className="breathing-font text-base sm:text-lg">{category.name}</div>
                  <div className="tenor-font text-xs sm:text-sm opacity-80">{category.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Pricing Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {pricingData[activeCategory].map((service, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className={`group relative bg-canvas-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 sleek-shadow card-hover transition-all duration-500 overflow-hidden ${
                service.popular ? 'border-2 border-canvas-pink popular-glow' : ''
              } ${mounted ? 'animate-slideIn' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.1 + 0.3}s`}}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 transform -translate-x-1/2 popular-badge">
                  <div className="bg-canvas-pink text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap animate-bounce">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-2xl transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 transition-all duration-500 ${hoveredService === index ? 'scale-150 opacity-100' : 'opacity-50'}`} style={{backgroundColor: 'rgba(244, 188, 204, 0.15)'}}></div>
              <div className={`absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 rounded-full blur-xl transform -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12 transition-all duration-500 ${hoveredService === index ? 'scale-125 opacity-100' : 'opacity-50'}`} style={{backgroundColor: 'rgba(92, 35, 20, 0.1)'}}></div>

              {/* Service Content */}
              <div className={`relative z-10 space-y-4 sm:space-y-5 lg:space-y-6 ${service.popular ? 'mt-3 sm:mt-4' : ''}`}>
                {/* Header */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <h3 className="breathing-font text-xl sm:text-2xl lg:text-3xl font-bold text-canvas-brown leading-tight transition-colors duration-300 group-hover:text-red-800">
                    {service.name}
                  </h3>
                  <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300" style={{backgroundColor: 'rgba(244, 188, 204, 0.12)'}}>
                    <span className="tenor-font text-xs sm:text-sm text-canvas-brown font-medium">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="tenor-font text-sm sm:text-base text-canvas-black leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="breathing-font text-xs sm:text-base font-semibold text-canvas-brown tracking-wider">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
                        <span className="text-canvas-pink text-xs sm:text-sm transition-transform duration-300 hover:scale-110">✓</span>
                        <span className="tenor-font text-xs sm:text-sm text-canvas-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Duration */}
                <div className={`flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${hoveredService === index ? 'shadow-md' : ''}`} style={{backgroundColor: hoveredService === index ? 'rgba(244, 188, 204, 0.18)' : 'rgba(244, 188, 204, 0.12)'}}>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="maharlika-font text-3xl sm:text-4xl font-bold text-canvas-brown transition-all duration-300 group-hover:scale-110 group-hover:text-red-800">
                      ${service.price}
                    </div>
                    <div className="tenor-font text-xs sm:text-sm text-canvas-black">
                      Starting price
                    </div>
                  </div>
                  <div className="text-right space-y-0.5 sm:space-y-1">
                    <div className="tenor-font text-2xl sm:text-3xl font-italic text-canvas-brown transition-all duration-300 group-hover:text-red-800">
                      {service.duration}
                    </div>
                    <div className="tenor-font text-xs sm:text-sm text-canvas-black">
                      Treatment time
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  service.popular
                    ? 'bg-canvas-pink text-white hover:bg-red-300 shadow-lg hover:shadow-xl'
                    : 'bg-canvas-brown text-white hover:bg-canvas-black shadow-md hover:shadow-lg'
                }`}>
                  <a
                  href='https://booksy.com/en-us/774723_the-nail-canvas_nail-salon_16218_savannah?do=invite&utm_medium=merchant_customer_invite'
                  target='_blank'
                  >
                    Book {service.name}
                  </a>
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-500 ${
                hoveredService === index ? 'opacity-20' : 'opacity-0'
              }`} style={{background: 'linear-gradient(135deg, rgba(244, 188, 204, 0.1), rgba(92, 35, 20, 0.1))'}}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className={`bg-canvas-brown rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center sleek-shadow relative overflow-hidden ${mounted ? 'animate-fadeInUp stagger-4' : 'opacity-0'}`}>
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 opacity-20 rounded-full blur-2xl animate-float" style={{backgroundColor: 'rgb(244, 188, 204)'}}></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 opacity-20 rounded-full blur-xl animate-float" style={{animationDelay: '3s', backgroundColor: 'rgb(92, 35, 20)'}}></div>
          
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="maharlika-font text-3xl sm:text-4xl lg:text-5xl font-bold text-canvas-white">
                Ready to Experience Luxury?
              </h3>
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-pink-300 to-white"></div>
                <span className="breathing-font text-base sm:text-lg lg:text-xl text-canvas-pink">Your Perfect Nails Await</span>
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-pink-300 to-white"></div>
              </div>
            </div>
            
            <p className="tenor-font text-sm sm:text-base lg:text-lg text-canvas-white max-w-2xl mx-auto leading-relaxed px-4">
              Transform your nails into works of art with our expert care and premium services. Book your appointment today and discover why discerning clients choose The Nail Canvas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-2 sm:pt-4">
              <button className="bg-canvas-pink px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-white text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  <a
                  href='https://booksy.com/en-us/774723_the-nail-canvas_nail-salon_16218_savannah?do=invite&utm_medium=merchant_customer_invite'
                  target='_blank'
                  >
                  Book Your Appointment 
                  </a>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white border-opacity-20">
              <div className="text-center animate-fadeInUp stagger-1">
                <div className="maharlika-font text-2xl sm:text-3xl font-bold text-canvas-pink mb-1 sm:mb-2 transition-transform duration-300 hover:scale-110">500+</div>
                <div className="tenor-font text-xs sm:text-sm text-canvas-white">Happy Clients</div>
              </div>
              <div className="text-center animate-fadeInUp stagger-2">
                <div className="maharlika-font text-2xl sm:text-3xl font-bold text-canvas-pink mb-1 sm:mb-2 transition-transform duration-300 hover:scale-110">⭐ 5.0</div>
                <div className="tenor-font text-xs sm:text-sm text-canvas-white">Perfect Rating</div>
              </div>
              <div className="text-center animate-fadeInUp stagger-3">
                <div className="maharlika-font text-2xl sm:text-3xl font-bold text-canvas-pink mb-1 sm:mb-2 transition-transform duration-300 hover:scale-110">3+</div>
                <div className="tenor-font text-xs sm:text-sm text-canvas-white">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-12 sm:h-16 bg-gradient-to-b from-pink-300 to-transparent animate-fadeIn"></div>
    </section>
  );
};

export default Pricing;