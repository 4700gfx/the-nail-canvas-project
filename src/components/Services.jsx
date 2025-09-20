import React from 'react'

const Services = () => {
  return (
    <section className='flex flex-col py-20 px-6 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className='maharlika-font text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 bg-clip-text text-transparent mx-auto leading-tight hover:scale-105 transition-transform duration-500 cursor-default'>
            What We Offer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className='max-w-[95%] xl:max-w-[90%] mx-auto'>
          {/* Image Grid Placeholder */}
          <div className='mb-10 -mx-6'>
            <div className='bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300 rounded-3xl h-96 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-white/50 backdrop-blur-sm'>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-purple-600 font-medium text-lg">Stunning Nail Art Gallery Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 -mx-4">
            
            {/* Service 1 */}
            <div className="group mx-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-300 hover:-translate-y-2 min-h-[420px]">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className='breathing-font text-3xl text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300'>
                    Peace of Mind
                  </h2>
                </div>
                <p className='tenor-font text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300'>
                  With our advanced Gel Design system, we create effective, odorless and beautiful nail sets that prioritize the health of your natural nails. Our premium gel formulations are free from harmful chemicals, ensuring your nails remain strong and healthy while achieving stunning results.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group mx-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300 hover:-translate-y-2 min-h-[420px]">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h2 className='breathing-font text-3xl text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300'>
                    Luxurious + Efficient Design
                  </h2>
                </div>
                <p className='tenor-font text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300'>
                  Our innovative approach seamlessly combines elegance with efficiency, delivering stunning results that respect your valuable time without compromising on quality or artistry. Each design is meticulously crafted using cutting-edge techniques and premium materials for magazine-worthy results.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group mx-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-300 hover:-translate-y-2 min-h-[420px]">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className='breathing-font text-3xl text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300'>
                    A Full Experience
                  </h2>
                </div>
                <p className='tenor-font text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300'>
                  Beyond creating beautiful nails, we provide a complete journey of relaxation, pampering, and personalized self-care that leaves you feeling refreshed and renewed. Every appointment is designed as your personal escape with curated music, aromatherapy, and luxurious treatments.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Experience Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services