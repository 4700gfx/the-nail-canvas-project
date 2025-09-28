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
        name: "Classic Manicure",
        description: "Experience our refined classic manicure, a gentle treatment that uses exfoliating nail bits to softly smooth and cleanse your nails and cuticles without the use of water. This method helps maintain nail strength and health while preparing your nails for a flawless finish.",
        price: 30,
        duration: "40 min",
        popular: false,
        features: ["Cuticle Treatment", "Hand Massage", "Base & Top Coat", "Polish Application"],
        highlight: "Perfect for maintaining healthy, beautiful nails"
      },
      {
        name: "Spa Manicure",
        description: "Indulge in our rejuvenating manicure experience, beginning with a relaxing warm soak that softens your skin and nails. This is followed by an exfoliating scrub to gently polish away dryness, and a deeply moisturizing hand massage to nourish and soothe tired muscles.",
        price: 45,
        duration: "60 min", 
        popular: true,
        features: ["Long-lasting Formula", "UV/LED Curing", "Chip-resistant", "Mirror Shine Finish"],
        highlight: "Our most popular choice - lasts 2-3 weeks!"
      },
      {
        name: "Russian Manicure",
        description: "Experience the precision and elegance of our Russian Manicure, a meticulous technique that focuses on perfect cuticle care and nail shaping using specialized tools. This advanced method ensures flawless nail preparation, creating a clean, polished canvas that extends the life of your manicure.",
        price: 50,
        duration: "85 min",
        popular: false,
        features: ["Precision White Tips", "Custom Base Color", "Hand Buffing", "Professional Finish"],
        highlight: "Timeless elegance that never goes out of style"
      },
      {
        name: "Long Full Set",
        description: "Immerse yourself in pure indulgence with our signature spa experience. This premium treatment includes aromatic soaks, gentle exfoliation, hydrating masks, and an extended relaxation massage that transforms your hands into silk.",
        price: 75,
        duration: "90 min",
        popular: false,
        features: ["Aromatherapy Soak", "Sugar Scrub Exfoliation", "Hydrating Mask", "Extended Massage"],
        highlight: "The ultimate pampering experience for your hands"
      }
    ],
    pedicures: [
      {
        name: "Classic Pedicure",
        description: "Treat your feet to essential luxury with our comprehensive foot care ritual. Featuring a relaxing soak, thorough cleansing, callus removal, nail shaping, and a beautiful polish finish that leaves you walking on clouds.",
        price: 35,
        duration: "60 min",
        popular: false,
        features: ["Warm Foot Soak", "Callus Removal", "Nail Trimming", "Moisturizing Treatment"],
        highlight: "Essential foot care for healthy, beautiful feet"
      },
      {
        name: "Gel Pedicure", 
        description: "Elevate your pedicure with our long-lasting gel formula that withstands everything from beach days to workout sessions. Enjoy weeks of perfect color with a mirror-like finish that maintains its brilliance.",
        price: 50,
        duration: "75 min",
        popular: true,
        features: ["Durable Gel Polish", "Extended Wear", "High-gloss Finish", "Chip-resistant Formula"],
        highlight: "Perfect for active lifestyles - lasts 3-4 weeks!"
      },
      {
        name: "Deluxe Spa Pedicure w/ Polish",
        description: "Escape into paradise with our ultimate foot spa journey. Hot stone therapy melts away tension while paraffin treatments deeply nourish your skin. This transformative experience includes extended massage and premium products.",
        price: 60,
        duration: "90 min",
        popular: false,
        features: ["Hot Stone Therapy", "Paraffin Treatment", "Sea Salt Scrub", "Reflexology Massage"],
        highlight: "Pure bliss - our most indulgent foot treatment"
      },
      {
        name: "Polygel Full Set Pedicure",
        description: "Elevate your pedicure with our Polygel Toes Full Set, combining the strength and flexibility of gel with the lightweight comfort of acrylic. This innovative nail enhancement sculpts and extends your toenails to perfection, delivering a natural yet flawless look.",
        price: 55,
        duration: "75 min",
        popular: false,
        features: ["Therapeutic Treatment", "Problem Nail Care", "Callus Removal", "Health Assessment"],
        highlight: "Professional care for challenging foot conditions"
      }
    ],
    extensions: [
      {
        name: "Gel Extensions - Short",
        description: "Perfect for the professional who desires subtle elegance. Our short gel extensions add just the right amount of length and strength while maintaining a natural appearance that's ideal for everyday activities.",
        price: 50,
        duration: "120 min",
        popular: false,
        features: ["Natural Length", "Custom Shape", "Reinforced Strength", "Professional Appearance"],
        highlight: "Ideal for professional environments and daily wear"
      },
      {
        name: "Gel Extensions - Medium",
        description: "Strike the perfect balance between practicality and glamour. These medium-length extensions offer versatility for both work and play, providing elegant length that's comfortable and stunning for any occasion.",
        price: 55,
        duration: "135 min",
        popular: true,
        features: ["Versatile Length", "Comfortable Wear", "Elegant Appearance", "Durable Construction"],
        highlight: "The perfect length for any lifestyle - our top choice!"
      },
      {
        name: "Gel Extensions - Long",
        description: "Make a bold statement with our dramatic long extensions that command attention. Crafted for those who love to showcase their style, these extensions offer maximum impact with superior strength and breathtaking beauty.",
        price: 65,
        duration: "150 min",
        popular: false,
        features: ["Statement Length", "Maximum Impact", "Superior Strength", "Show-stopping Appeal"],
        highlight: "For those who dare to be bold and beautiful"
      },
      {
        name: "Extension Fill-In",
        description: "Maintain your gorgeous extensions with our professional fill-in service. We refresh the growth area, reinforce the structure, and perfect the shape to keep your nails looking freshly done between full appointments.",
        price: 75,
        duration: "90 min",
        popular: false,
        features: ["Growth Area Refresh", "Structure Reinforcement", "Shape Perfection", "Color Touch-up"],
        highlight: "Keep your extensions looking perfect between visits"
      }
    ],
    nailart: [
      {
        name: "Simple Nail Art",
        description: "Add a touch of personality with our charming simple designs. Perfect for accent nails or subtle patterns, these artistic touches enhance your manicure with clean lines, geometric shapes, or delicate details.",
        price: 15,
        duration: "30 min",
        popular: false,
        features: ["Accent Nail Designs", "Geometric Patterns", "Clean Lines", "Subtle Enhancement"],
        highlight: "Perfect way to add personality to your manicure"
      },
      {
        name: "Custom Nail Art",
        description: "Transform your nails into personal masterpieces with our bespoke artwork. Each design is hand-painted with precision, featuring intricate details, custom colors, and artistic flair that reflects your unique style and vision.",
        price: 35,
        duration: "60 min",
        popular: true,
        features: ["Hand-painted Designs", "Custom Colors", "Intricate Details", "Personal Consultation"],
        highlight: "Your vision brought to life by our skilled artists"
      },
      {
        name: "Full Set Artwork",
        description: "Commission a complete nail art collection with our most comprehensive artistic service. Every nail becomes a canvas for intricate storytelling, featuring cohesive themes, premium materials, and museum-quality attention to detail.",
        price: 95,
        duration: "150 min",
        popular: false,
        features: ["Complete Art Collection", "Cohesive Themes", "Premium Materials", "Museum-quality Detail"],
        highlight: "The ultimate artistic expression - every nail a masterpiece"
      }
    ]
  };

  const categories = [
    { id: 'manicures', name: 'Manicures', icon: '💅', desc: 'Hand Perfection' },
    { id: 'pedicures', name: 'Pedicures', icon: '🌺', desc: 'Foot Luxury' },
    { id: 'extensions', name: 'Extensions', icon: '✨', desc: 'Length & Strength' },
    { id: 'nailart', name: 'Nail Art', icon: '🎨', desc: 'Artistic Expression' }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
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

        /* Use colors from Navbar component */
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

      {/* Animated Background accents - updated with navbar colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200 to-transparent rounded-full blur-3xl animate-float" style={{background: 'radial-gradient(circle, rgba(244, 188, 204, 0.12) 0%, transparent 70%)'}}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-800 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s', background: 'radial-gradient(circle, rgba(92, 35, 20, 0.1) 0%, transparent 70%)'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-float" style={{animationDelay: '4s', background: 'radial-gradient(circle, rgba(255, 195, 215, 0.08) 0%, rgba(92, 35, 20, 0.05) 100%)'}}></div>

      <div className="w-[90%] mx-auto px-6 lg:px-8">
        
        {/* Enhanced Header Section */}
        <div className={`text-center mb-20 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="space-y-6 mb-12">
            <h1 className="maharlika-font text-7xl lg:text-8xl leading-none text-gradient">
              Pricing
            </h1>
            <h2 className="breathing-font text-3xl lg:text-4xl font-semibold text-canvas-brown leading-none">
              Luxury Services + Transparent Pricing
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-pink-300 to-red-900"></div>
            <span className="breathing-font text-2xl text-canvas-black">Premium Care for Every Budget</span>
            <span className="text-2xl">💎</span>
            <div className="h-px w-16 bg-gradient-to-l from-pink-300 to-red-900"></div>
          </div>
          
          <p className="tenor-font text-lg text-canvas-black max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of professional nail care with our comprehensive menu of services. Each treatment is carefully crafted to deliver exceptional results that exceed your expectations. Discover the perfect service for your style and schedule below.
          </p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className={`bg-canvas-white rounded-3xl sleek-shadow p-8 mb-16 max-w-5xl mx-auto ${mounted ? 'animate-fadeIn stagger-2' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group p-6 rounded-2xl font-semibold transition-all duration-500 transform ${
                  activeCategory === category.id
                    ? 'bg-canvas-pink text-white shadow-lg scale-105 animate-shimmer'
                    : 'text-canvas-brown hover:scale-102'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: activeCategory === category.id ? '#F4BCCC' : 'rgba(244, 188, 204, 0.08)',
                  ':hover': activeCategory !== category.id ? { backgroundColor: 'rgba(244, 188, 204, 0.12)' } : {}
                }}
              >
                <div className="text-center space-y-2 transition-all duration-300">
                  <div className={`text-3xl mb-2 transition-transform duration-300 ${activeCategory === category.id ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                    {category.icon}
                  </div>
                  <div className="breathing-font text-lg">{category.name}</div>
                  <div className="tenor-font text-sm opacity-80">{category.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Pricing Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {pricingData[activeCategory].map((service, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className={`group relative bg-canvas-white rounded-3xl p-8 sleek-shadow card-hover transition-all duration-500 overflow-hidden ${
                service.popular ? 'border-2 border-canvas-pink popular-glow' : ''
              } ${mounted ? 'animate-slideIn' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.1 + 0.3}s`}}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge - Fixed positioning */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 popular-badge">
                  <div className="bg-canvas-pink text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap animate-bounce">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Background decoration with animation */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transform translate-x-16 -translate-y-16 transition-all duration-500 ${hoveredService === index ? 'scale-150 opacity-100' : 'opacity-50'}`} style={{backgroundColor: 'rgba(244, 188, 204, 0.15)'}}></div>
              <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full blur-xl transform -translate-x-12 translate-y-12 transition-all duration-500 ${hoveredService === index ? 'scale-125 opacity-100' : 'opacity-50'}`} style={{backgroundColor: 'rgba(92, 35, 20, 0.1)'}}></div>

              {/* Service Content */}
              <div className={`relative z-10 space-y-6 ${service.popular ? 'mt-4' : ''}`}>
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="breathing-font text-2xl lg:text-3xl font-bold text-canvas-brown leading-tight transition-colors duration-300 group-hover:text-red-800">
                    {service.name}
                  </h3>
                  <div className="inline-block px-4 py-2 rounded-full transition-all duration-300" style={{backgroundColor: 'rgba(244, 188, 204, 0.12)', ':hover': {backgroundColor: 'rgba(244, 188, 204, 0.18)'}}}>
                    <span className="tenor-font text-sm text-canvas-brown font-medium">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="tenor-font text-base text-canvas-black leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="breathing-font text-sm font-semibold text-canvas-brown tracking-wider">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
                        <span className="text-canvas-pink text-sm transition-transform duration-300 hover:scale-110">✓</span>
                        <span className="tenor-font text-sm text-canvas-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Duration */}
                <div className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${hoveredService === index ? 'shadow-md' : ''}`} style={{backgroundColor: hoveredService === index ? 'rgba(244, 188, 204, 0.18)' : 'rgba(244, 188, 204, 0.12)'}}>
                  <div className="space-y-1">
                    <div className="maharlika-font text-4xl font-bold text-canvas-brown transition-all duration-300 group-hover:scale-110 group-hover:text-red-800">
                      ${service.price}
                    </div>
                    <div className="tenor-font text-sm text-canvas-black">
                      Starting price
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="tenor-font text-3xl font-italic text-canvas-brown transition-all duration-300 group-hover:text-red-800">
                      {service.duration}
                    </div>
                    <div className="tenor-font text-sm text-canvas-black">
                      Treatment time
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  service.popular
                    ? 'bg-canvas-pink text-white hover:bg-red-300 shadow-lg hover:shadow-xl'
                    : 'bg-canvas-brown text-white hover:bg-canvas-black shadow-md hover:shadow-lg'
                }`}>
                  Book {service.name}
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                hoveredService === index ? 'opacity-20' : 'opacity-0'
              }`} style={{background: 'linear-gradient(135deg, rgba(244, 188, 204, 0.1), rgba(92, 35, 20, 0.1))'}}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className={`bg-canvas-brown rounded-3xl p-12 text-center sleek-shadow relative overflow-hidden ${mounted ? 'animate-fadeInUp stagger-4' : 'opacity-0'}`}>
          {/* Animated background decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-20 rounded-full blur-2xl animate-float" style={{backgroundColor: 'rgb(244, 188, 204)'}}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 rounded-full blur-xl animate-float" style={{animationDelay: '3s', backgroundColor: 'rgb(92, 35, 20)'}}></div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h3 className="maharlika-font text-4xl lg:text-5xl font-bold text-canvas-white">
                Ready to Experience Luxury?
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-12 bg-gradient-to-r from-pink-300 to-white"></div>
                <span className="breathing-font text-xl text-canvas-pink">Your Perfect Nails Await</span>
                <div className="h-px w-12 bg-gradient-to-l from-pink-300 to-white"></div>
              </div>
            </div>
            
            <p className="tenor-font text-lg text-canvas-white max-w-2xl mx-auto leading-relaxed">
              Transform your nails into works of art with our expert care and premium services. Book your appointment today and discover why discerning clients choose The Nail Canvas for their beauty needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <button className="bg-canvas-pink px-10 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Book Your Appointment Now
              </button>
              <button className="bg-canvas-white px-10 py-4 rounded-full font-bold text-canvas-brown transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:bg-gray-50">
                Call (555) 123-NAILS
              </button>
            </div>

            {/* Trust indicators with staggered animation */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-20">
              <div className="text-center animate-fadeInUp stagger-1">
                <div className="maharlika-font text-3xl font-bold text-canvas-pink mb-2 transition-transform duration-300 hover:scale-110">500+</div>
                <div className="tenor-font text-sm text-canvas-white">Happy Clients</div>
              </div>
              <div className="text-center animate-fadeInUp stagger-2">
                <div className="maharlika-font text-3xl font-bold text-canvas-pink mb-2 transition-transform duration-300 hover:scale-110">⭐ 5.0</div>
                <div className="tenor-font text-sm text-canvas-white">Perfect Rating</div>
              </div>
              <div className="text-center animate-fadeInUp stagger-3">
                <div className="maharlika-font text-3xl font-bold text-canvas-pink mb-2 transition-transform duration-300 hover:scale-110">3+</div>
                <div className="tenor-font text-sm text-canvas-white">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-pink-300 to-transparent animate-fadeIn"></div>
    </section>
  );
};

export default Pricing;