import React from 'react'
import benefit1 from '../assets/images/benefits-pics-1.jpeg'
import benefit2 from '../assets/images/benefits-pics-2.jpeg'
import benefit3 from '../assets/images/benefits-pics-3.jpeg'

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Odorless + Safe",
      description: "Experience the ultimate comfort with our advanced gel formulations that eliminate harsh chemical odors while using only non-toxic, skin-safe compounds. Perfect for sensitive individuals and pregnant clients.",
      image: benefit1,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      hoverColor: "emerald-600"
    },
    {
      id: 2,
      title: "Long-Lasting Beauty",
      description: "Our premium gel system delivers exceptional durability with chip-resistant formulas that maintain their stunning appearance for weeks. Say goodbye to frequent touch-ups and hello to lasting perfection.",
      image: benefit2,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      hoverColor: "purple-600"
    },
    {
      id: 3,
      title: "Nail Health First",
      description: "Our innovative approach strengthens and protects your natural nails while delivering stunning results. Enriched with nourishing ingredients that promote healthy nail growth and prevent damage.",
      image: benefit3,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-rose-400 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      hoverColor: "rose-600"
    }
  ]

  return (
    <section className='flex flex-col py-20 px-6 relative overflow-hidden'>
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-48 h-48 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-300 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-8 shadow-xl animate-pulse">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className='maharlika-font text-6xl md:text-7xl lg:text-8xl text-canvas-brown leading-tight hover:scale-105 transition-transform duration-500 cursor-default py-2'>
            Benefits
          </h1>

          <h3 className='breathing-font text-2xl text-canvas-brown mb-2'>
            The Benefits of Gel Designs 
          </h3>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <p className="tenor-font text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative advantages of our advanced Gel-Based Nail Design system, 
            where beauty meets wellness in perfect harmony. Look into the benefits of The Nail Canvas benefits below:
          </p>
        </div>

        {/* Benefits Cards - Polished White Design */}
        <div className="space-y-8 mb-20">
          {benefitsData.map((benefit, index) => (
            <div key={benefit.id} className="group p-2">
              <div className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-100 flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:h-52 relative group-hover:scale-[1.02]`}>
                
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
                
                {/* Image Section */}
                <div className="relative overflow-hidden md:w-1/2 h-52 md:h-full p-6 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-8 right-8 w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-700 z-10`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {benefit.icon.props.children}
                    </svg>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-50 group-hover:scale-110 transition-transform duration-500 z-10">
                    <span className="breathing-font text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">{benefit.id}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative z-10">
                  <h3 className={`breathing-font text-2xl md:text-2xl mt-5 font-bold text-gray-800 mb-4 group-hover:text-${benefit.hoverColor} transition-colors duration-500`}>
                    {benefit.title}
                  </h3>
                  
                  <p className="tenor-font text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-500 mb-6">
                    {benefit.description}
                  </p>

                  {/* Enhanced Bottom Section */}
                  <div>
                    <div className={`w-24 h-1.5 bg-gradient-to-r ${benefit.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100 mb-4`}></div>
                    
                    <div className={`flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 group-hover:translate-x-2`}>
                      <span className={`text-${benefit.hoverColor}`}>Discover more benefits</span>
                      <div className={`ml-3 w-8 h-8 bg-gradient-to-r ${benefit.gradient} rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits