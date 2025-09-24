import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const services = [
    'Classic Manicure',
    'Gel Manicure', 
    'French Manicure',
    'Luxury Spa Manicure',
    'Classic Pedicure',
    'Gel Pedicure',
    'Luxury Spa Pedicure',
    'Medical Pedicure',
    'Gel Extensions - Short',
    'Gel Extensions - Medium',
    'Gel Extensions - Long',
    'Extension Fill-In',
    'Simple Nail Art',
    'Custom Nail Art',
    '3D Nail Art',
    'Full Set Artwork',
    'Consultation'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen relative overflow-hidden py-20 flex items-center justify-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4" style={{fontFamily: 'serif'}}>
            Thank You!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your inquiry has been received! We'll contact you within 24 hours to confirm your appointment and discuss your perfect nail experience.
          </p>
          <div className="flex items-center justify-center space-x-4 text-pink-600">
            <span>💅</span>
            <span className="font-medium">We can't wait to pamper you!</span>
            <span>💎</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/5 to-amber-50/5 rounded-full blur-3xl"></div>

      <div className="w-[90%] mx-auto px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="space-y-6 mb-12">
            <h1 className="text-7xl lg:text-8xl leading-none font-bold bg-gradient-to-r from-pink-600 to-amber-800 bg-clip-text text-transparent" style={{fontFamily: 'serif'}}>
              Contact Us
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-amber-900 leading-none">
              Book Your Luxury Experience
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-amber-600"></div>
            <span className="text-2xl text-gray-800">Let's Create Something Beautiful</span>
            <span className="text-2xl">💎</span>
            <div className="h-px w-16 bg-gradient-to-l from-pink-400 to-amber-600"></div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your nails into works of art? Fill out the form below and our team will contact you to schedule your perfect appointment. We can't wait to pamper you!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/30 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-50/30 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-900 flex items-center">
                <span className="mr-3">👤</span>
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    First Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 ${
                        errors.firstName 
                          ? 'border-red-300 bg-red-50' 
                          : focusedField === 'firstName'
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Last Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 ${
                        errors.lastName 
                          ? 'border-red-300 bg-red-50' 
                          : focusedField === 'lastName'
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 ${
                        errors.email 
                          ? 'border-red-300 bg-red-50' 
                          : focusedField === 'email'
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 ${
                        errors.phone 
                          ? 'border-red-300 bg-red-50' 
                          : focusedField === 'phone'
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 border-t pt-8">
              <h3 className="text-2xl font-bold text-amber-900 flex items-center">
                <span className="mr-3">💅</span>
                Service Details
              </h3>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Desired Service *
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 appearance-none cursor-pointer ${
                      errors.service 
                        ? 'border-red-300 bg-red-50' 
                        : focusedField === 'service'
                          ? 'border-pink-400 bg-pink-50'
                          : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('preferredDate')}
                    onBlur={() => setFocusedField('')}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 cursor-pointer ${
                      focusedField === 'preferredDate'
                        ? 'border-pink-400 bg-pink-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('preferredTime')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 appearance-none cursor-pointer ${
                        focusedField === 'preferredTime'
                          ? 'border-pink-400 bg-pink-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 border-t pt-8">
              <h3 className="text-2xl font-bold text-amber-900 flex items-center">
                <span className="mr-3">💬</span>
                Additional Information
              </h3>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Special Requests or Questions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows={4}
                  className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 resize-none ${
                    focusedField === 'message'
                      ? 'border-pink-400 bg-pink-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Tell us about any special requests, nail art ideas, or questions you might have..."
                />
              </div>
            </div>

            <div className="pt-8 border-t">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 to-amber-600 text-white hover:from-pink-600 hover:to-amber-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Your Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send My Request</span>
                    <span>✨</span>
                  </div>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                * Required fields. We'll respond within 24 hours to confirm your appointment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">📞</div>
            <h4 className="font-bold text-amber-900 mb-2">Call Us</h4>
            <p className="text-gray-700">(555) 123-NAILS</p>
            <p className="text-sm text-gray-500 mt-2">Mon-Sat: 9AM-6PM</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">📧</div>
            <h4 className="font-bold text-amber-900 mb-2">Email Us</h4>
            <p className="text-gray-700">hello@nailcanvas.com</p>
            <p className="text-sm text-gray-500 mt-2">We reply within 4 hours</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">📍</div>
            <h4 className="font-bold text-amber-900 mb-2">Visit Us</h4>
            <p className="text-gray-700">123 Beauty Lane<br/>Miami, FL 33180</p>
            <p className="text-sm text-gray-500 mt-2">Free parking available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;