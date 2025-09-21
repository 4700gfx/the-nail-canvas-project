import React, { useState } from 'react';

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('manicures');

  const pricingData = {
    manicures: [
      {
        name: "Classic Manicure",
        description: "Traditional nail care with cuticle treatment, filing, and polish",
        price: 35,
        duration: "45 min",
        popular: false
      },
      {
        name: "Gel Manicure",
        description: "Long-lasting gel polish with professional base and top coat",
        price: 45,
        duration: "60 min", 
        popular: true
      },
      {
        name: "French Manicure",
        description: "Timeless elegant white tips with natural or nude base",
        price: 50,
        duration: "60 min",
        popular: false
      },
      {
        name: "Luxury Spa Manicure",
        description: "Premium experience with exfoliation, mask, and extended massage",
        price: 75,
        duration: "90 min",
        popular: false
      }
    ],
    pedicures: [
      {
        name: "Classic Pedicure",
        description: "Essential foot care with soak, scrub, and polish application",
        price: 45,
        duration: "60 min",
        popular: false
      },
      {
        name: "Gel Pedicure", 
        description: "Durable gel polish pedicure that lasts weeks longer",
        price: 55,
        duration: "75 min",
        popular: true
      },
      {
        name: "Luxury Spa Pedicure",
        description: "Ultimate relaxation with hot stones, paraffin, and extended massage",
        price: 85,
        duration: "90 min",
        popular: false
      },
      {
        name: "Medical Pedicure",
        description: "Therapeutic treatment for problem nails and callus removal",
        price: 95,
        duration: "75 min",
        popular: false
      }
    ],
    extensions: [
      {
        name: "Gel Extensions - Short",
        description: "Natural-looking gel extensions with shape and length customization",
        price: 65,
        duration: "120 min",
        popular: false
      },
      {
        name: "Gel Extensions - Medium",
        description: "Medium length gel extensions perfect for everyday elegance",
        price: 75,
        duration: "135 min",
        popular: true
      },
      {
        name: "Gel Extensions - Long",
        description: "Statement long extensions for dramatic, show-stopping nails",
        price: 85,
        duration: "150 min",
        popular: false
      },
      {
        name: "Extension Fill-In",
        description: "Maintenance service to refresh and extend your current set",
        price: 45,
        duration: "90 min",
        popular: false
      }
    ],
    nailart: [
      {
        name: "Simple Nail Art",
        description: "Basic designs, accent nails, or simple patterns (2-3 nails)",
        price: 15,
        duration: "30 min",
        popular: false
      },
      {
        name: "Custom Nail Art",
        description: "Detailed artwork, hand-painted designs, or intricate patterns",
        price: 35,
        duration: "60 min",
        popular: true
      },
      {
        name: "3D Nail Art",
        description: "Dimensional elements, crystals, charms, and textured designs",
        price: 55,
        duration: "90 min",
        popular: false
      },
      {
        name: "Full Set Artwork",
        description: "Complete custom design across all nails with premium detailing",
        price: 95,
        duration: "150 min",
        popular: false
      }
    ]
  };

  const categories = [
    { id: 'manicures', name: 'Manicures', icon: '💅' },
    { id: 'pedicures', name: 'Pedicures', icon: '🦶' },
    { id: 'extensions', name: 'Extensions', icon: '✨' },
    { id: 'nailart', name: 'Nail Art', icon: '🎨' }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-16">
      {/* Background accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-pink-50 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-orange-50 to-transparent rounded-full blur-3xl opacity-15"></div>

      <div className="w-[90%] mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="space-y-4 mb-8">
            <h2 className="maharlika-font text-6xl lg:text-7xl leading-none">
              <span className="text-gradient">The Nail Canvas</span>
            </h2>
            <h3 className="breathing-font text-5xl lg:text-6xl font-semibold text-canvas-brown leading-none">
              Pricing
            </h3>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-canvas-pink to-canvas-brown"></div>
            <span className="breathing-font text-xl text-canvas-black">Premium Pricing for Premium Care</span>
            <div className="h-px w-12 bg-gradient-to-l from-canvas-pink to-canvas-brown"></div>
          </div>
          
          <p className="tenor-font text-sm text-canvas-black max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for exceptional nail services. Each treatment is crafted with precision and care to give you the perfect results you deserve. Look at our pricing below and click the button below when you are ready to book your first appointment 
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                activeCategory === category.id
                  ? 'bg-canvas-pink text-white shadow-lg'
                  : 'service-tag text-canvas-brown hover:bg-canvas-pink/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingData[activeCategory].map((service, index) => (
            <div
              key={index}
              className={`relative bg-canvas-white rounded-3xl p-8 sleek-shadow hover-lift transition-all duration-300 ${
                service.popular ? 'border-2 border-canvas-pink' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-canvas-pink text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Content */}
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <h4 className="breathing-font text-2xl font-bold text-canvas-brown leading-tight">
                    {service.name}
                  </h4>
                  <p className="tenor-font text-sm text-canvas-black leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Price and Duration */}
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="maharlika-font text-4xl font-bold text-canvas-brown">
                      ${service.price}
                    </span>
                    <span className="tenor-font text-sm text-canvas-black bg-gray-100 px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Book Button */}
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  service.popular
                    ? 'bg-canvas-pink text-white hover:bg-pink-600'
                    : 'btn-secondary hover:bg-canvas-brown hover:text-white'
                }`}>
                  Book This Service
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-canvas-pink/10 rounded-full blur-sm"></div>
              <div className="absolute bottom-6 left-4 w-6 h-6 bg-canvas-brown/10 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-canvas-brown rounded-3xl p-8 mt-16 text-center sleek-shadow">
          <h4 className="breathing-font text-3xl font-bold text-canvas-pink mb-4">
            Ready to Treat Yourself?
          </h4>
          <p className="tenor-font text-sm text-canvas-white mb-6 max-w-xl mx-auto">
            Book your appointment today and experience the luxury you deserve. We can't wait to create your perfect nails!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-canvas-pink px-8 py-4 rounded-full font-semibold text-white text-md hover-lift">
              Book Now
            </button>
            <button className="bg-canvas-white px-8 py-4 rounded-full font-semibold hover-lift text-md">
              Call (555) 123-NAIL
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-canvas-pink/50 to-transparent"></div>
    </section>
  );
};

export default Pricing;