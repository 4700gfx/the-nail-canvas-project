// ContactModal.js - Add this as a new component file

import React, { useState, useEffect } from 'react';

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ContactModal = ({ isOpen, onClose }) => {
  const COLORS = {
    primary: '#5C2314',
    secondary: '#F4BCCC',
    accent: '#FFC3D7',
    background: '#FFF9F7',
    white: '#FFFFFF'
  };

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const FORMSPREE_FORM_ID = 'xeorldwp'; 
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          _subject: `New contact form submission from ${formState.name}`,
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2500);
      } else {
        console.error('Formspree error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
      />
      
      <div 
        className="relative w-full max-w-md rounded-3xl shadow-2xl transform transition-all animate-fadeIn"
        style={{ backgroundColor: COLORS.background }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
          style={{ color: COLORS.primary }}
          aria-label="Close modal"
        >
          <XIcon />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <h2 
              className="text-3xl font-bold mb-2"
              style={{ color: COLORS.primary }}
            >
              Get in Touch
            </h2>
            <p className="text-sm" style={{ color: COLORS.primary, opacity: 0.7 }}>
              We'd love to hear from you! Fill out the form below.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
                style={{ color: COLORS.primary }}
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  borderColor: COLORS.accent,
                  backgroundColor: COLORS.white
                }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-2"
                style={{ color: COLORS.primary }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  borderColor: COLORS.accent,
                  backgroundColor: COLORS.white
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium mb-2"
                style={{ color: COLORS.primary }}
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  borderColor: COLORS.accent,
                  backgroundColor: COLORS.white
                }}
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium mb-2"
                style={{ color: COLORS.primary }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none"
                style={{ 
                  borderColor: COLORS.accent,
                  backgroundColor: COLORS.white
                }}
                placeholder="Tell us how we can help you..."
              />
            </div>

            {submitStatus === 'success' && (
              <div 
                className="p-4 rounded-xl text-center font-medium animate-slideDown"
                style={{ backgroundColor: '#d4edda', color: '#155724' }}
              >
                ✓ Message sent successfully! We'll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div 
                className="p-4 rounded-xl text-center font-medium animate-slideDown"
                style={{ backgroundColor: '#f8d7da', color: '#721c24' }}
              >
                ✗ Oops! Something went wrong. Please try again.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !formState.name || !formState.email || !formState.message}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ 
                backgroundColor: COLORS.primary, 
                color: COLORS.background 
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <SendIcon />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

