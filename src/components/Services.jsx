  import React from 'react'

  const Services = () => {
    return (
      <section id='about' className='flex flex-col py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-pink-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-300 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-pink-400 rounded-full blur-lg animate-bounce delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-purple-200 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-14 h-14 sm:w-20 sm:h-20 bg-pink-200 rounded-full blur-lg animate-bounce delay-1500"></div>
        </div>

        <div className="relative z-10">
          {/* Enhanced Main Title */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className='maharlika-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 bg-clip-text text-canvas-brown mx-auto leading-tight hover:scale-105 transition-transform duration-500 cursor-default drop-shadow-sm'>
              What We Offer
            </h1>
            <h3 className='breathing-font text-xl sm:text-2xl md:text-3xl text-canvas-brown mt-2'>
              Our Mission + Values
            </h3>
            <div className="flex items-center justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-transparent to-pink-500 rounded-full"></div>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
            </div>
            <p className="tenor-font text-xs sm:text-sm md:text-base text-gray-600 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
                Discover our premium nail services, thoughtfully designed to pamper, protect, and enhance your natural beauty. At The Nail Canvas, we are dedicated to delivering not only stunning results but also a safe, healthy, and rejuvenating experience every time.
            </p>
          </div>

          <div className='max-w-[95%] sm:max-w-[92%] xl:max-w-[90%] mx-auto'>
            {/* Enhanced Services Grid - Responsive */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              
              {/* Service 1 - Enhanced */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-100/50 hover:border-pink-300/50 hover:-translate-y-2 sm:hover:-translate-y-3 hover:bg-white/90 h-full flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className='breathing-font text-2xl sm:text-3xl text-gray-800 mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors duration-300 font-semibold'>
                      Peace of Mind
                    </h2>
                  </div>
                  
                  <div className="flex-grow">
                    <p className='tenor-font text-xs sm:text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 sm:mb-6'>
                      With our innovative nail design system, we create stunning, odor-free sets that put the health of your natural nails first. Our premium gel formulations are free from harsh chemicals, keeping your nails strong, beautiful, and nourished while delivering flawless, long-lasting results.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                    <div className="flex items-center mt-3 sm:mt-4 text-xs sm:text-sm text-pink-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <span>Chemical-free formulations</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 - Enhanced */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100/50 hover:border-purple-300/50 hover:-translate-y-2 sm:hover:-translate-y-3 hover:bg-white/90 h-full flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h2 className='breathing-font text-2xl sm:text-3xl text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300 font-semibold'>
                      Luxurious + Efficient Design
                    </h2>
                  </div>
                  
                  <div className="flex-grow">
                    <p className='tenor-font text-xs sm:text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 sm:mb-6'>
                      Our innovative approach blends elegance with efficiency, giving you flawless results that honor your time without ever sacrificing quality or artistry. Every design is thoughtfully crafted with cutting-edge techniques and premium materials, delivering a finish worthy of any magazine cover.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                    <div className="flex items-center mt-3 sm:mt-4 text-xs sm:text-sm text-purple-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <span>Premium techniques & materials</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 - Enhanced */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-100/50 hover:border-pink-300/50 hover:-translate-y-2 sm:hover:-translate-y-3 hover:bg-white/90 h-full flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h2 className='breathing-font text-2xl sm:text-3xl text-gray-800 mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors duration-300 font-semibold'>
                      A Full Experience
                    </h2>
                  </div>
                  
                  <div className="flex-grow">
                    <p className='tenor-font text-xs sm:text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 sm:mb-6'>
                      At The Nail Canvas, beauty is only the beginning. We offer a complete journey of relaxation, pampering, and personalized self-care that leaves you feeling refreshed and renewed. Each appointment is your private escape, enhanced with curated music, soothing aromatherapy, and luxurious treatments crafted for your well-being.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                    <div className="flex items-center mt-3 sm:mt-4 text-xs sm:text-sm text-pink-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <span>Complete relaxation journey</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
              <div className="inline-flex flex-col items-center">
                <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-sm sm:text-md shadow-xl hover:shadow-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 relative overflow-hidden mb-3 sm:mb-4 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center">
                    Experience Our Services
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <p className="tenor-font text-xs sm:text-sm text-gray-500">Book your appointment today</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Services