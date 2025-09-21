import React, { useState, useEffect } from 'react';

const Testimony = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonyData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonyData.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="min-h-screen relative overflow-hidden mt-20">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-canvas-pink/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-canvas-brown/10 to-transparent rounded-full blur-3xl"></div>

      <div className="w-[90%] mx-auto px-6 lg:px-4 py-16">
        {/* Header Section */}
        <div className="header-container mx-auto text-center mb-16 space-y-4">
          <h1 className="maharlika-font text-6xl lg:text-7xl text-canvas-brown">
            Our Testimonies
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-gradient-to-r from-canvas-pink to-canvas-brown"></div>
            <h3 className="breathing-font text-2xl text-canvas-black">
              Hear It From The Source 💅🏽
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-canvas-pink to-canvas-brown"></div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="testimony-container max-w-6xl mx-auto">
          <div className="bg-canvas-pink rounded-3xl sleek-shadow p-8 lg:p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-canvas-pink/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-canvas-brown/5 rounded-full blur-xl"></div>

            {/* Current Testimonial */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                {/* Quote Icon */}
                <div className="text-6xl text-canvas-pink/20 mb-4">"</div>
                
                {/* Testimonial Text */}
                <p className="tenor-font text-xl lg:text-xl leading-relaxed text-canvas-black mb-8 max-w-4xl mx-auto">
                  {testimonyData[currentTestimonial].text}
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-6 text-2xl">
                  {renderStars(testimonyData[currentTestimonial].rating)}
                </div>

                {/* Client Info */}
                <div className="space-y-2">
                  <h4 className="breathing-font text-2xl font-semibold text-canvas-brown">
                    {testimonyData[currentTestimonial].name}
                  </h4>
                  <p className="tenor-font text-canvas-black">
                    {testimonyData[currentTestimonial].location}
                  </p>
                  <div className="inline-block px-4 py-2 bg-canvas-pink/10 rounded-full">
                    <span className="tenor-font text-sm text-canvas-brown font-medium">
                      {testimonyData[currentTestimonial].service}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonyData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover-lift ${
                    index === currentTestimonial
                      ? 'bg-canvas-pink scale-125'
                      : 'bg-canvas-pink/30 hover:bg-canvas-pink/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Summary Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="stats-card text-center rounded-2xl p-8 bg-canvas-white sleek-shadow hover-lift">
              <div className="maharlika-font text-4xl font-bold text-canvas-brown mb-2">⭐ 4.0</div>
              <div className="tenor-font text-canvas-black mb-1">Perfect Rating</div>
              <div className="tenor-font text-sm text-canvas-black opacity-70">Across All Reviews</div>
            </div>
            
            <div className="stats-card text-center rounded-2xl p-8 bg-canvas-white sleek-shadow hover-lift">
              <div className="maharlika-font text-4xl font-bold text-canvas-brown mb-2">500+</div>
              <div className="tenor-font text-canvas-black mb-1">Happy Clients</div>
              <div className="tenor-font text-sm text-canvas-black opacity-70">And Growing Daily</div>
            </div>
            
            <div className="stats-card text-center rounded-2xl p-8 bg-canvas-white sleek-shadow hover-lift">
              <div className="maharlika-font text-4xl font-bold text-canvas-brown mb-2">100%</div>
              <div className="tenor-font text-canvas-black mb-1">Satisfaction</div>
              <div className="tenor-font text-sm text-canvas-black opacity-70">Guaranteed Results</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="space-y-6">
              <p className="tenor-font text-lg text-canvas-black max-w-2xl mx-auto">
                Ready to experience the luxury that everyone's talking about? Book your appointment today and see why our clients can't stop raving about us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-canvas-pink px-8 py-4 rounded-full font-semibold text-white text-lg hover-lift">
                  Book Your Experience
                </button>
                <button className="btn-secondary px-8 py-4 rounded-full font-semibold hover-lift">
                  Read More Reviews
                </button>
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

export default Testimony;