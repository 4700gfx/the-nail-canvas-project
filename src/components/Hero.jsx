
import nailPic1 from '../assets/images/nail-pic-1.png'
import nailPic2 from '../assets/images/nail-pic-2.png'
import nailPic3 from '../assets/images/nail-pic-3.png'
import nailPic4 from '../assets/images/nail-pic-4.png'
import nailPic5 from '../assets/images/nail-pic-5.png'
import nailPic6 from '../assets/images/nail-pic-6.jpeg'
import nailPic7 from '../assets/images/nail-pic-7.jpeg'

// Mock nail images - replace with your actual imported images
const nailImages = [
  nailPic1, 
  nailPic2,
  nailPic3,
  nailPic4,
  nailPic4,
  nailPic5,
  nailPic6, 
  nailPic7
];

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden mt-2">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-50 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-20"></div>

      <div className="w-[90%] mx-auto px-6 lg:px-4 py-12 bg-canvas-white rounded-3xl sleek-shadow mt-8 mb-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ minHeight: '75vh' }}>
          
          {/* Left Content - Text Section */}
          <div className="space-y-10 ml-10">
            {/* Main Headlines */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="maharlika-font text-7xl lg:text-8xl xl:text-9xl leading-none">
                  <span className="text-gradient">Luxurious</span>
                </h1>
                <h2 className="breathing-font text-8xl lg:text-6xl xl:text-7xl font-semibold text-canvas-brown leading-none">
                  Nails
                </h2>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-gradient-to-r from-canvas-pink to-canvas-brown"></div>
                <span className="breathing-font text-2xl text-canvas-black">From a Nail Tech That Cares</span>
                <span className="text-2xl">💅🏽</span>
              </div>
            </div>

            {/* Description Card */}
            <div>
              <p className="tenor-font text-sm leading-relaxed text-canvas-black mb-6">
                At <span className="font-bold text-canvas-brown">The Nail Canvas</span>, we believe your nails are your canvas for self-expression. Step into our luxurious, serene space where every detail is designed to make you feel pampered and confident.
              </p>

              <p className='tenor-font text-sm leading-relaxed text-canvas-black mb-8'>
                Our expert nail technician combines years of professional artistry with an eye for perfection, delivering results that go beyond ordinary manicures. From timeless classics to bold, trend-setting designs — each set is a personalized masterpiece that reflects your unique style.
              </p>
              
              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="service-tag px-4 py-2 rounded-full text-sm font-medium text-canvas-brown">
                  Luxury Manicures
                </span>
                <span className="service-tag px-4 py-2 rounded-full text-sm font-medium text-canvas-brown">
                  Spa Pedicures
                </span>
                <span className="service-tag px-4 py-2 rounded-full text-sm font-medium text-canvas-brown">
                  Custom Nail Art
                </span>
                <span className="service-tag px-4 py-2 rounded-full text-sm font-medium text-canvas-brown">
                  Gel Extensions
                </span>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-canvas-pink px-8 py-4 rounded-full font-semibold text-white text-lg hover-lift">
                  Book Your Appointment
                </button>
                <button className="btn-secondary px-8 py-4 rounded-full font-semibold hover-lift">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="stats-card text-center rounded-2xl p-6 hover-lift">
                <div className="maharlika-font text-3xl font-bold text-canvas-brown mb-1">500+</div>
                <div className="tenor-font text-sm text-canvas-black">Happy Clients</div>
              </div>
              <div className="stats-card text-center rounded-2xl p-6 hover-lift">
                <div className="maharlika-font text-3xl font-bold text-canvas-brown mb-1">⭐ 5.0</div>
                <div className="tenor-font text-sm text-canvas-black">Average Rating</div>
              </div>
              <div className="stats-card text-center rounded-2xl p-6 hover-lift">
                <div className="maharlika-font text-3xl font-bold text-canvas-brown mb-1">3+</div>
                <div className="tenor-font text-sm text-canvas-black">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            <div className="relative h-[550px] overflow-hidden rounded-3xl sleek-shadow">
              {/* Light blur overlays for top and bottom */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling Grid */}
              <div className="scrolling-grid h-full">
                <div className="grid grid-cols-2 gap-4 p-6" style={{ height: '200%' }}>
                  {/* Double the images for seamless loop */}
                  {[...nailImages, ...nailImages, ...nailImages, ...nailImages].map((image, index) => (
                    <div 
                      key={index}
                      className="relative overflow-hidden rounded-2xl hover-lift"
                      style={{ 
                        height: index % 4 === 0 ? '220px' : 
                               index % 3 === 0 ? '180px' : 
                               index % 2 === 0 ? '160px' : '200px' 
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`Nail art design ${(index % nailImages.length) + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 
                            index % 2 === 0 
                              ? 'linear-gradient(135deg, #FF3CD7, #ff1cc7)' 
                              : 'linear-gradient(135deg, #5C2314, #4a1e0f)';
                        }}
                      />
                      
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-canvas-pink/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-canvas-brown/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-canvas-pink/50 to-transparent"></div>
    </section>
  );
};

export default Hero;