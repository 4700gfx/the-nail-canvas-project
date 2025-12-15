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

  // Triple the images for seamless infinite scroll
  const infiniteImages = [...filteredImages, ...filteredImages, ...filteredImages];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && carouselRef.current) {
      scrollIntervalRef.current = setInterval(() => {
        const carousel = carouselRef.current;
        const scrollAmount = 1.5;
        
        carousel.scrollLeft += scrollAmount;
        
        // Reset scroll when reaching the end for infinite effect
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = carousel.scrollWidth / 3;
        }
      }, 30);
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
        const scrollAmount = 0.8;
        
        bgCarousel.scrollLeft += scrollAmount;
        
        if (bgCarousel.scrollLeft >= bgCarousel.scrollWidth - bgCarousel.clientWidth) {
          bgCarousel.scrollLeft = 0;
        }
      }, 50);
    }

    return () => {
      if (backgroundScrollRef.current) {
        clearInterval(backgroundScrollRef.current);
      }
    };
  }, []);

  // Manual navigation with smoother experience
  const scrollLeft = () => {
    setIsAutoScrolling(false);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 4000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 4000);
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id='nailGallery' className="min-h-screen relative overflow-hidden py-24 w-full">
      {/* Enhanced Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={backgroundCarouselRef}
          className="flex h-full overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...benefitImages, ...benefitImages, ...benefitImages, ...benefitImages, ...benefitImages].map((image, index) => (
            <div
              key={`bg-${index}`}
              className="flex-shrink-0 w-screen h-full relative"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #FF3CD7, #5C2314)';
                }}
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>
          ))}
        </div>
        
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90"></div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-canvas-pink/8 rounded-full blur-[120px] z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-canvas-brown/8 rounded-full blur-[100px] z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-[95%] max-w-[1600px] mx-auto px-6 lg:px-8 relative z-20">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6 lg:space-y-8">
          <div className="inline-block">
            <h1 className="maharlika-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-canvas-brown tracking-tight relative px-4">
              Our Gallery
              <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-canvas-pink via-canvas-brown to-canvas-pink rounded-full"></div>
            </h1>
          </div>
          
          <div className="flex items-center justify-center space-x-3 md:space-x-4 lg:space-x-6 px-4">
            <div className="h-[2px] w-8 md:w-12 lg:w-16 bg-gradient-to-r from-transparent via-canvas-pink to-canvas-brown rounded-full"></div>
            <h3 className="breathing-font text-lg sm:text-xl md:text-2xl lg:text-3xl text-canvas-black font-light">
              Artistry in Every Detail
            </h3>
            <div className="h-[2px] w-8 md:w-12 lg:w-16 bg-gradient-to-l from-transparent via-canvas-pink to-canvas-brown rounded-full"></div>
          </div>
          
          <p className="tenor-font text-sm sm:text-base md:text-lg lg:text-xl text-canvas-black/80 max-w-3xl mx-auto leading-relaxed px-6">
            Explore our portfolio of stunning nail designs, from classic elegance to bold artistic expressions. 
            Each set tells a unique story of creativity and craftsmanship.
          </p>
        </div>

        {/* Modern Category Filter */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl sleek-shadow p-4 md:p-6 lg:p-8 mb-12 md:mb-16 max-w-5xl mx-auto border border-white/50">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsAutoScrolling(true);
                }}
                className={`group relative px-4 md:px-6 lg:px-7 py-2.5 md:py-3 lg:py-3.5 rounded-full font-medium transition-all duration-500 overflow-hidden text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-canvas-pink text-white shadow-xl shadow-canvas-pink/30 scale-105'
                    : 'bg-white/70 text-canvas-brown hover:bg-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-1.5 md:space-x-2">
                  <span className="text-base md:text-lg">{category.icon}</span>
                  <span className="tenor-font hidden sm:inline">{category.name}</span>
                  <span className="tenor-font sm:hidden">{category.name.split(' ')[0]}</span>
                </span>
                {selectedCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-canvas-pink/10 to-canvas-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Carousel Container */}
        <div className="relative">
          {/* Refined Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 lg:w-16 lg:h-16 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl hover:shadow-canvas-pink/30 transition-all duration-500 hover:scale-110 hover:bg-canvas-pink hover:text-white group border border-white/50"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 lg:w-16 lg:h-16 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl hover:shadow-canvas-pink/30 transition-all duration-500 hover:scale-110 hover:bg-canvas-pink hover:text-white group border border-white/50"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-scroll indicator with animation */}
          <div className="absolute top-0 right-2 md:right-4 z-30">
            <div className={`px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-500 backdrop-blur-md border ${
              isAutoScrolling 
                ? 'bg-canvas-pink/20 text-canvas-brown border-canvas-pink/40 shadow-lg' 
                : 'bg-white/80 text-canvas-black/70 border-white/50'
            }`}>
              <span className="flex items-center space-x-2">
                {isAutoScrolling ? (
                  <>
                    <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-canvas-pink rounded-full animate-pulse"></span>
                    <span className="hidden sm:inline">Auto-scrolling</span>
                    <span className="sm:hidden">Auto</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full"></span>
                    <span>Paused</span>
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Enhanced Carousel Track */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-scroll md:overflow-x-hidden scroll-smooth gap-4 md:gap-6 lg:gap-8 py-4 md:py-6 px-4 md:px-2 snap-x snap-mandatory md:snap-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteImages.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[340px] h-[480px] sm:h-[520px] md:h-[440px] relative group cursor-pointer snap-center"
                onMouseEnter={() => setHoveredImage(`${item.id}-${index}`)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {/* Modern Card Container */}
                <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-2xl transition-all duration-700 group-hover:shadow-canvas-pink/30 group-hover:shadow-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredImage === `${item.id}-${index}`
                        ? 'scale-110 brightness-105' 
                        : 'scale-100'
                    }`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 
                        'linear-gradient(135deg, #FF3CD7, #5C2314)';
                    }}
                  />
                  
                  {/* Enhanced Overlay Gradient - Always visible on mobile */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-700 ${
                    hoveredImage === `${item.id}-${index}` ? 'opacity-100' : 'md:opacity-0 opacity-100'
                  }`} />
                  
                  {/* Enhanced Content Overlay - Always visible on mobile */}
                  <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-all duration-700 ${
                    hoveredImage === `${item.id}-${index}`
                      ? 'translate-y-0 opacity-100' 
                      : 'md:translate-y-8 md:opacity-0 translate-y-0 opacity-100'
                  }`}>
                    <div className="text-white space-y-2 md:space-y-3">
                      <div className="inline-block mb-1 md:mb-2">
                        <span className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium text-white border border-white/30">
                          {categories.find(cat => cat.id === item.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="breathing-font text-xl md:text-2xl font-semibold leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="tenor-font text-sm text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Refined Hover Border Effect */}
                  <div className={`absolute inset-0 border-[3px] border-canvas-pink rounded-2xl md:rounded-3xl transition-all duration-500 ${
                    hoveredImage === `${item.id}-${index}` ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`} />
                </div>

                {/* Floating Action Icon - Hidden on mobile */}
                <div className={`hidden md:flex absolute top-6 right-6 w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl items-center justify-center shadow-xl transition-all duration-500 border border-white/50 ${
                  hoveredImage === `${item.id}-${index}`
                    ? 'scale-100 opacity-100 rotate-0' 
                    : 'scale-75 opacity-0 rotate-45'
                }`}>
                  <svg className="w-6 h-6 text-canvas-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Gradient Fade Edges - Hidden on mobile */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-20"></div>
          <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="text-center mt-16 md:mt-20 lg:mt-24 px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl md:rounded-[2.5rem] sleek-shadow p-8 md:p-12 lg:p-14 max-w-5xl mx-auto relative overflow-hidden border border-white/50">
            {/* Animated decorative elements */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-canvas-pink/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-canvas-brown/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              <h2 className="maharlika-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-canvas-brown tracking-tight leading-tight">
                Ready to Create Your Masterpiece?
              </h2>
              
              <p className="tenor-font text-base md:text-lg lg:text-xl text-canvas-black/80 max-w-3xl mx-auto leading-relaxed">
                Let's bring your nail art vision to life. Book your appointment today and experience 
                the artistry that sets us apart from the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center pt-4 md:pt-6">
                <a
                  href='https://booksy.com/en-us/774723_the-nail-canvas_nail-salon_16218_savannah?do=invite&utm_medium=merchant_customer_invite'
                  target='_blank'
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-canvas-pink to-canvas-brown rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <button className="relative bg-gradient-to-r from-canvas-pink to-canvas-brown px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-white text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto">
                    <span className="flex items-center justify-center space-x-2">
                      <span>View Pricing</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-canvas-pink/60 via-canvas-brown/40 to-transparent rounded-full"></div>
    </section>
  );
};

export default Gallery;