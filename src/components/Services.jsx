import React from 'react'

const Services = () => {
  return (
    <section className='flex flex-col py-2 px-6 relative overflow-hidden'>
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-lg animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-200 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-pink-200 rounded-full blur-lg animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Main Title */}
        <div className="text-center mb-20">
          <h1 className='maharlika-font text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 bg-clip-text text-canvas-brown mx-auto leading-tight hover:scale-105 transition-transform duration-500 cursor-default drop-shadow-sm'>
            What We Offer
          </h1>
          <h3 className='breathing-font text-3xl text-canvas-brown'>
            Our Mission + Values
          </h3>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-pink-500 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
          </div>
          <p className="tenor-font text-sm text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover our premium nail services designed to pamper, protect, and perfect your natural beauty. 
            Our dedication to providing a safe and healthy nail set and experience is everything that The Nail Canvas is about.
          </p>
        </div>

        <div className='max-w-[95%] xl:max-w-[90%] mx-auto'>
          {/* Enhanced Image Gallery Placeholder */}
          <div className='mb-16 -mx-6'>
            <div className='bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300 rounded-3xl h-96 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 backdrop-blur-sm relative overflow-hidden group'>
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/40 rounded-full animate-ping delay-0"></div>
                <div className="absolute bottom-8 right-12 w-6 h-6 bg-white/40 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/40 rounded-full animate-ping delay-500"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-12 h-12 text-purple-600 group-hover:text-pink-600 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="breathing-font text-2xl text-purple-700 font-semibold mb-3">Stunning Nail Art Gallery</h3>
                <p className="tenor-font text-purple-600 font-medium text-lg">Coming Soon - A showcase of our finest work</p>
              </div>
            </div>
          </div>

          {/* Enhanced Services Grid - Removed min-height and improved layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Service 1 - Enhanced */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-100/50 hover:border-pink-300/50 hover:-translate-y-3 hover:bg-white/90 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className='breathing-font text-3xl text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300 font-semibold'>
                    Peace of Mind
                  </h2>
                </div>
                
                <div className="flex-grow">
                  <p className='tenor-font text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6'>
                    With our advanced Gel Design system, we create effective, odorless and beautiful nail sets that prioritize the health of your natural nails. Our premium gel formulations are free from harmful chemicals, ensuring your nails remain strong and healthy while achieving stunning results.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  <div className="flex items-center mt-4 text-sm text-pink-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <span>Chemical-free formulations</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Enhanced */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100/50 hover:border-purple-300/50 hover:-translate-y-3 hover:bg-white/90 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h2 className='breathing-font text-3xl text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300 font-semibold'>
                    Luxurious + Efficient Design
                  </h2>
                </div>
                
                <div className="flex-grow">
                  <p className='tenor-font text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6'>
                    Our innovative approach seamlessly combines elegance with efficiency, delivering stunning results that respect your valuable time without compromising on quality or artistry. Each design is meticulously crafted using cutting-edge techniques and premium materials for magazine-worthy results.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  <div className="flex items-center mt-4 text-sm text-purple-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <span>Premium techniques & materials</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - Enhanced */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-100/50 hover:border-pink-300/50 hover:-translate-y-3 hover:bg-white/90 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className='breathing-font text-3xl text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300 font-semibold'>
                    A Full Experience
                  </h2>
                </div>
                
                <div className="flex-grow">
                  <p className='tenor-font text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6'>
                    Beyond creating beautiful nails, we provide a complete journey of relaxation, pampering, and personalized self-care that leaves you feeling refreshed and renewed. Every appointment is designed as your personal escape with curated music, aromatherapy, and luxurious treatments.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  <div className="flex items-center mt-4 text-sm text-pink-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <span>Complete relaxation journey</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden mb-4">
                <span className="relative z-10 flex items-center">
                  Experience Our Services
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="tenor-font text-sm text-gray-500">Book your appointment today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services