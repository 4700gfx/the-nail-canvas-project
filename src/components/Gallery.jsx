import React, { useState, useEffect, useRef } from 'react';
import nailPic1 from '../assets/images/nail-pic-1.png';
import nailPic2 from '../assets/images/nail-pic-2.png';
import nailPic3 from '../assets/images/nail-pic-3.png';
import nailPic4 from '../assets/images/nail-pic-4.png';
import nailPic5 from '../assets/images/nail-pic-5.png';
import nailPic6 from '../assets/images/nail-pic-6.jpeg';
import nailPic7 from '../assets/images/nail-pic-7.jpeg';
import nailPic8 from '../assets/images/nail-pic-8.jpeg';
import nailPic9 from '../assets/images/nail-pic-9.png';
import nailPic10 from '../assets/images/nail-pic-10.jpeg';
import nailPic11 from '../assets/images/nail-pic-11.jpeg';
import benefit1 from '../assets/images/benefits-pics-1.jpeg'
import benefit2 from '../assets/images/benefits-pics-2.jpeg'
import benefit3 from '../assets/images/benefits-pics-3.jpeg'


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const backgroundCarouselRef = useRef(null);
  const backgroundScrollRef = useRef(null);

  // Gallery data with categories and descriptions
  const galleryData = [
    {
      id: 1,
      image: nailPic1,
      category: 'luxury-manicures',
      title: 'Classic French Elegance',
      description: 'Timeless French manicure with a modern twist'
    },
    {
      id: 2,
      image: nailPic2,
      category: 'custom-art',
      title: 'Floral Fantasy',
      description: 'Hand-painted floral designs with intricate details'
    },
    {
      id: 3,
      image: nailPic3,
      category: 'gel-extensions',
      title: 'Glamour Extensions',
      description: 'Long-lasting gel extensions with perfect shape'
    },
    {
      id: 4,
      image: nailPic4,
      category: 'luxury-manicures',
      title: 'Nude Perfection',
      description: 'Sophisticated nude tones for everyday elegance'
    },
    {
      id: 5,
      image: nailPic5,
      category: 'custom-art',
      title: 'Abstract Artistry',
      description: 'Bold abstract patterns with metallic accents'
    },
    {
      id: 6,
      image: nailPic6,
      category: 'spa-pedicures',
      title: 'Summer Vibes',
      description: 'Bright and cheerful pedicure designs'
    },
    {
      id: 7,
      image: nailPic7,
      category: 'gel-extensions',
      title: 'Stiletto Glam',
      description: 'Dramatic stiletto shape with gradient colors'
    },
    {
      id: 8,
      image: nailPic8,
      category: 'custom-art',
      title: 'Geometric Precision',
      description: 'Clean geometric patterns with bold colors'
    },
    {
      id: 9,
      image: nailPic9,
      category: 'luxury-manicures',
      title: 'Rose Gold Romance',
      description: 'Romantic rose gold with delicate shimmer'
    },
    {
      id: 10,
      image: nailPic10,
      category: 'spa-pedicures',
      title: 'Tropical Paradise',
      description: 'Vibrant tropical-inspired pedicure art'
    },
    {
      id: 11,
      image: nailPic11,
      category: 'custom-art',
      title: 'Marble Masterpiece',
      description: 'Luxurious marble effect with gold veining'
    }
  ];

  // Background benefit images for carousel
  const benefitImages = [benefit1, benefit2, benefit3];

  const categories = [
    { id: 'all', name: 'All Designs', icon: '✨' },
    { id: 'luxury-manicures', name: 'Luxury Manicures', icon: '💅' },
    { id: 'custom-art', name: 'Custom Nail Art', icon: '🎨' },
    { id: 'gel-extensions', name: 'Gel Extensions', icon: '💎' },
    { id: 'spa-pedicures', name: 'Spa Pedicures', icon: '🌺' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  // Double the images for seamless infinite scroll
  const infiniteImages = [...filteredImages, ...filteredImages, ...filteredImages];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && carouselRef.current) {
      scrollIntervalRef.current = setInterval(() => {
        const carousel = carouselRef.current;
        const scrollAmount = 2; // Smooth scrolling speed
        
        carousel.scrollLeft += scrollAmount;
        
        // Reset scroll when reaching the end for infinite effect
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = carousel.scrollWidth / 3; // Reset to middle third
        }
      }, 30); // Smooth 30ms intervals
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, selectedCategory]);

  // Background carousel auto-scroll
  useEffect(() => {
    if (backgroundCarouselRef.current) {
      backgroundScrollRef.current = setInterval(() => {
        const bgCarousel = backgroundCarouselRef.current;
        const scrollAmount = 1; // Slower speed for background
        
        bgCarousel.scrollLeft += scrollAmount;
        
        // Reset scroll for infinite effect
        if (bgCarousel.scrollLeft >= bgCarousel.scrollWidth - bgCarousel.clientWidth) {
          bgCarousel.scrollLeft = 0;
        }
      }, 50); // Slower intervals for background
    }

    return () => {
      if (backgroundScrollRef.current) {
        clearInterval(backgroundScrollRef.current);
      }
    };
  }, []);

  // Manual navigation functions
  const scrollLeft = () => {
    setIsAutoScrolling(false);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id='nailGallery' className="min-h-screen relative overflow-hidden py-20 w-8/10 mx-auto rounded-4xl">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={backgroundCarouselRef}
          className="flex h-full overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Triple the benefit images for seamless loop */}
          {[...benefitImages, ...benefitImages, ...benefitImages, ...benefitImages, ...benefitImages].map((image, index) => (
            <div
              key={`bg-${index}`}
              className="flex-shrink-0 w-screen h-full relative"
            >
              <img
                src={image}
                alt={`Background benefit ${index}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #FF3CD7, #5C2314)';
                }}
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>
        
        {/* Additional gradient overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>
      </div>

      {/* Subtle foreground accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-canvas-pink/10 to-transparent rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-canvas-brown/10 to-transparent rounded-full blur-3xl z-10"></div>

      <div className="w-[95%] mx-auto px-6 lg:px-4 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="maharlika-font text-6xl lg:text-7xl text-canvas-brown">
            Our Gallery
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-gradient-to-r from-canvas-pink to-canvas-brown"></div>
            <h3 className="breathing-font text-2xl text-canvas-black">
              Artistry in Every Detail
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-canvas-pink to-canvas-brown"></div>
          </div>
          
          <p className="tenor-font text-lg text-canvas-black max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of stunning nail designs, from classic elegance to bold artistic expressions. 
            Each set tells a unique story of creativity and craftsmanship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-canvas-white rounded-2xl sleek-shadow p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsAutoScrolling(true);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                  selectedCategory === category.id
                    ? 'bg-canvas-pink text-white shadow-lg'
                    : 'bg-canvas-pink/10 text-canvas-brown hover:bg-canvas-pink/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="tenor-font">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-canvas-white rounded-full flex items-center justify-center shadow-lg hover-lift transition-all duration-300 hover:bg-canvas-pink hover:text-white"
          >
            <span className="text-2xl">←</span>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-canvas-white rounded-full flex items-center justify-center shadow-lg hover-lift transition-all duration-300 hover:bg-canvas-pink hover:text-white"
          >
            <span className="text-2xl">→</span>
          </button>

          {/* Auto-scroll indicator */}
          <div className="absolute top-4 right-4 z-20">
            <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoScrolling 
                ? 'bg-canvas-pink/20 text-canvas-brown border border-canvas-pink/30' 
                : 'bg-canvas-white/90 text-canvas-black border border-gray-200'
            }`}>
              {isAutoScrolling ? '▶ Auto-scrolling' : '⏸ Paused'}
            </div>
          </div>

          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteImages.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-80 h-96 relative group cursor-pointer"
                onMouseEnter={() => setHoveredImage(`${item.id}-${index}`)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-canvas-white sleek-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredImage === `${item.id}-${index}`
                        ? 'scale-110 brightness-110' 
                        : 'scale-100'
                    }`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 
                        'linear-gradient(135deg, #FF3CD7, #5C2314)';
                    }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                    hoveredImage === `${item.id}-${index}` ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Content Overlay */}
                  <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
                    hoveredImage === `${item.id}-${index}`
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="text-white space-y-2">
                      <h3 className="breathing-font text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="tenor-font text-sm text-white/90">
                        {item.description}
                      </p>
                      
                      {/* Category Badge */}
                      <div className="inline-block">
                        <span className="bg-canvas-pink px-3 py-1 rounded-full text-xs font-medium text-white">
                          {categories.find(cat => cat.id === item.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 border-2 border-canvas-pink rounded-2xl transition-all duration-300 ${
                    hoveredImage === `${item.id}-${index}` ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`} />
                </div>

                {/* Floating Action Button */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-canvas-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hoveredImage === `${item.id}-${index}`
                    ? 'scale-100 opacity-100' 
                    : 'scale-75 opacity-0'
                }`}>
                  <span className="text-canvas-pink text-xl">🔍</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20">
          <div className="bg-canvas-white rounded-3xl sleek-shadow p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-canvas-pink/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-canvas-brown/5 rounded-full blur-xl"></div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="maharlika-font text-4xl lg:text-5xl text-canvas-brown">
                Ready to Create Your Masterpiece?
              </h2>
              <p className="tenor-font text-lg text-canvas-black max-w-2xl mx-auto">
                Let's bring your nail art vision to life. Book your appointment today and experience 
                the artistry that sets us apart from the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-canvas-pink px-8 py-4 rounded-full font-semibold text-white text-lg hover-lift">
                  <a
                  href='https://booksy.com/en-us/774723_the-nail-canvas_nail-salon_16218_savannah?do=invite&utm_medium=merchant_customer_invite'
                  target='_blank'
                  >
                  View Pricing
                  </a>
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

export default Gallery;