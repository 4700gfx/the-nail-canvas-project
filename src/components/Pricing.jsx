import React, { useState } from 'react';

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('manicures');
  const [hoveredService, setHoveredService] = useState(null);

  const pricingData = {
    manicures: [
      {
        name: "Classic Manicure",
        description: "Indulge in our signature classic treatment featuring meticulous cuticle care, precision shaping, and a flawless polish application that leaves your hands feeling refreshed and looking effortlessly elegant.",
        price: 35,
        duration: "45 min",
        popular: false,
        features: ["Cuticle Treatment", "Hand Massage", "Base & Top Coat", "Polish Application"],
        highlight: "Perfect for maintaining healthy, beautiful nails"
      },
      {
        name: "Gel Manicure",
        description: "Experience the ultimate in long-lasting luxury with our premium gel system. Enjoy up to 3 weeks of chip-free, high-gloss perfection with our professional-grade gel formula and expert application techniques.",
        price: 45,
        duration: "60 min", 
        popular: true,
        features: ["Long-lasting Formula", "UV/LED Curing", "Chip-resistant", "Mirror Shine Finish"],
        highlight: "Our most popular choice - lasts 2-3 weeks!"
      },
      {
        name: "French Manicure",
        description: "Achieve timeless sophistication with our modern French manicure. Featuring crisp white tips and your choice of nude, pink, or clear base, this classic style is perfected with our precision technique and premium polishes.",
        price: 50,
        duration: "60 min",
        popular: false,
        features: ["Precision White Tips", "Custom Base Color", "Hand Buffing", "Professional Finish"],
        highlight: "Timeless elegance that never goes out of style"
      },
      {
        name: "Luxury Spa Manicure",
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
        price: 45,
        duration: "60 min",
        popular: false,
        features: ["Warm Foot Soak", "Callus Removal", "Nail Trimming", "Moisturizing Treatment"],
        highlight: "Essential foot care for healthy, beautiful feet"
      },
      {
        name: "Gel Pedicure", 
        description: "Elevate your pedicure with our long-lasting gel formula that withstands everything from beach days to workout sessions. Enjoy weeks of perfect color with a mirror-like finish that maintains its brilliance.",
        price: 55,
        duration: "75 min",
        popular: true,
        features: ["Durable Gel Polish", "Extended Wear", "High-gloss Finish", "Chip-resistant Formula"],
        highlight: "Perfect for active lifestyles - lasts 3-4 weeks!"
      },
      {
        name: "Luxury Spa Pedicure",
        description: "Escape into paradise with our ultimate foot spa journey. Hot stone therapy melts away tension while paraffin treatments deeply nourish your skin. This transformative experience includes extended massage and premium products.",
        price: 85,
        duration: "90 min",
        popular: false,
        features: ["Hot Stone Therapy", "Paraffin Treatment", "Sea Salt Scrub", "Reflexology Massage"],
        highlight: "Pure bliss - our most indulgent foot treatment"
      },
      {
        name: "Medical Pedicure",
        description: "Specialized therapeutic care for problematic feet featuring advanced techniques for ingrown nails, thick calluses, and nail disorders. Our expert approach combines medical precision with spa luxury for optimal foot health.",
        price: 95,
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
        price: 65,
        duration: "120 min",
        popular: false,
        features: ["Natural Length", "Custom Shape", "Reinforced Strength", "Professional Appearance"],
        highlight: "Ideal for professional environments and daily wear"
      },
      {
        name: "Gel Extensions - Medium",
        description: "Strike the perfect balance between practicality and glamour. These medium-length extensions offer versatility for both work and play, providing elegant length that's comfortable and stunning for any occasion.",
        price: 75,
        duration: "135 min",
        popular: true,
        features: ["Versatile Length", "Comfortable Wear", "Elegant Appearance", "Durable Construction"],
        highlight: "The perfect length for any lifestyle - our top choice!"
      },
      {
        name: "Gel Extensions - Long",
        description: "Make a bold statement with our dramatic long extensions that command attention. Crafted for those who love to showcase their style, these extensions offer maximum impact with superior strength and breathtaking beauty.",
        price: 85,
        duration: "150 min",
        popular: false,
        features: ["Statement Length", "Maximum Impact", "Superior Strength", "Show-stopping Appeal"],
        highlight: "For those who dare to be bold and beautiful"
      },
      {
        name: "Extension Fill-In",
        description: "Maintain your gorgeous extensions with our professional fill-in service. We refresh the growth area, reinforce the structure, and perfect the shape to keep your nails looking freshly done between full appointments.",
        price: 45,
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
        name: "3D Nail Art",
        description: "Enter a world of dimensional beauty with our sculptural nail art. Featuring raised elements, premium crystals, delicate charms, and textured designs that create stunning visual depth and tactile luxury.",
        price: 55,
        duration: "90 min",
        popular: false,
        features: ["Dimensional Elements", "Premium Crystals", "Textured Designs", "Luxury Materials"],
        highlight: "Sculptural art that adds stunning dimension"
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
      {/* Enhanced Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-canvas-pink/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-canvas-brown/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-canvas-pink/5 to-canvas-brown/5 rounded-full blur-3xl"></div>

      <div className="w-[90%] mx-auto px-6 lg:px-8">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="space-y-6 mb-12">
            <h1 className="maharlika-font text-7xl lg:text-8xl leading-none text-gradient">
              Pricing
            </h1>
            <h2 className="breathing-font text-3xl lg:text-4xl font-semibold text-canvas-brown leading-none">
              Luxury Services, Transparent Pricing
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-canvas-pink to-canvas-brown"></div>
            <span className="breathing-font text-2xl text-canvas-black">Premium Care for Every Budget</span>
            <span className="text-2xl">💎</span>
            <div className="h-px w-16 bg-gradient-to-l from-canvas-pink to-canvas-brown"></div>
          </div>
          
          <p className="tenor-font text-lg text-canvas-black max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of professional nail care with our comprehensive menu of services. Each treatment is carefully crafted to deliver exceptional results that exceed your expectations. Discover the perfect service for your style and schedule below.
          </p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="bg-canvas-white rounded-3xl sleek-shadow p-8 mb-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group p-6 rounded-2xl font-semibold transition-all duration-300 hover-lift ${
                  activeCategory === category.id
                    ? 'bg-canvas-pink text-white shadow-lg scale-105'
                    : 'bg-canvas-pink/5 text-canvas-brown hover:bg-canvas-pink/10 hover:scale-102'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{category.icon}</div>
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
              key={index}
              className={`group relative bg-canvas-white rounded-3xl p-8 sleek-shadow hover-lift transition-all duration-500 overflow-hidden ${
                service.popular ? 'border-2 border-canvas-pink shadow-2xl scale-105' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-canvas-pink text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-canvas-pink/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-canvas-brown/5 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>

              {/* Service Content */}
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="breathing-font text-2xl lg:text-3xl font-bold text-canvas-brown leading-tight">
                    {service.name}
                  </h3>
                  <div className="inline-block px-4 py-2 bg-canvas-pink/10 rounded-full">
                    <span className="tenor-font text-sm text-canvas-brown font-medium">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="tenor-font text-base text-canvas-black leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="breathing-font text-sm font-semibold text-canvas-brown uppercase tracking-wider">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-canvas-pink text-sm">✓</span>
                        <span className="tenor-font text-sm text-canvas-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Duration */}
                <div className="flex items-center justify-between p-4 bg-canvas-pink/5 rounded-2xl">
                  <div className="space-y-1">
                    <div className="maharlika-font text-4xl font-bold text-canvas-brown">
                      ${service.price}
                    </div>
                    <div className="tenor-font text-sm text-canvas-black">
                      Starting price
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="breathing-font text-xl font-semibold text-canvas-brown">
                      {service.duration}
                    </div>
                    <div className="tenor-font text-sm text-canvas-black">
                      Treatment time
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover-lift ${
                  service.popular
                    ? 'bg-canvas-pink text-white hover:bg-pink-600 shadow-lg'
                    : 'bg-canvas-brown text-white hover:bg-canvas-black shadow-md'
                }`}>
                  Book {service.name}
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-canvas-pink/10 to-canvas-brown/10 rounded-3xl transition-opacity duration-300 ${
                hoveredService === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="bg-canvas-brown rounded-3xl p-12 text-center sleek-shadow relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-canvas-pink/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-canvas-brown/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h3 className="maharlika-font text-4xl lg:text-5xl font-bold text-canvas-white">
                Ready to Experience Luxury?
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-12 bg-gradient-to-r from-canvas-pink to-white"></div>
                <span className="breathing-font text-xl text-canvas-pink">Your Perfect Nails Await</span>
                <div className="h-px w-12 bg-gradient-to-l from-canvas-pink to-white"></div>
              </div>
            </div>
            
            <p className="tenor-font text-lg text-canvas-white max-w-2xl mx-auto leading-relaxed">
              Transform your nails into works of art with our expert care and premium services. Book your appointment today and discover why discerning clients choose The Nail Canvas for their beauty needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <button className="bg-canvas-pink px-10 py-4 rounded-full font-bold text-white text-lg hover-lift shadow-lg hover:shadow-xl transition-all duration-300">
                Book Your Appointment Now
              </button>
              <button className="bg-canvas-white px-10 py-4 rounded-full font-bold text-canvas-brown hover-lift shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50">
                Call (555) 123-NAILS
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-canvas-white/20">
              <div className="text-center">
                <div className="maharlika-font text-3xl font-bold text-canvas-pink mb-2">500+</div>
                <div className="tenor-font text-sm text-canvas-white">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="maharlika-font text-3xl font-bold text-canvas-pink mb-2">⭐ 5.0</div>
                <div className="tenor-font text-sm text-canvas-white">Perfect Rating</div>
              </div>
              <div className="text-center">
                <div className="maharlika-font text-3xl font-bold text-canvas-pink mb-2">3+</div>
                <div className="tenor-font text-sm text-canvas-white">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-canvas-pink/50 to-transparent"></div>
    </section>
  );
};

export default Pricing;