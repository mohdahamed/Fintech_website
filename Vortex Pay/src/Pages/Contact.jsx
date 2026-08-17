import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import LocationMap from './LocationMap';

// Custom hook for scroll-triggered animations
const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contactRef, contactInView] = useInView();
  const [formRef, formInView] = useInView();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In production, send to backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Message submitted:', formData);
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-16 sm:mb-20 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-3 sm:mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div ref={contactRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className={`bg-white/5 border border-emerald-500/20 rounded-lg p-8 backdrop-blur hover:border-emerald-500/50 transition-all transform ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: contactInView ? '0ms' : '0ms' }}>
            <Mail className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-slate-300">support@vortexpay.com</p>
            <p className="text-slate-400 text-sm mt-2">Response time: 24 hours</p>
          </div>
          <div className={`bg-white/5 border border-emerald-500/20 rounded-lg p-8 backdrop-blur hover:border-emerald-500/50 transition-all transform ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: contactInView ? '100ms' : '0ms' }}>
            <Phone className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-slate-300">+1 (555) 123-4567</p>
            <p className="text-slate-400 text-sm mt-2">Available 24/7</p>
          </div>
          <div className={`bg-white/5 border border-emerald-500/20 rounded-lg p-8 backdrop-blur hover:border-emerald-500/50 transition-all transform ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: contactInView ? '200ms' : '0ms' }}>
            <MapPin className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Headquarters</h3>
            <p className="text-slate-300">VORTEXPAY HQ</p>
            <p className="text-slate-300">Lucknow, Uttar Pradesh</p>
            <p className="text-slate-300">India 226001</p>
            <p className="text-slate-400 text-sm mt-2">📞 +91 (522) 123-4567</p>
          </div>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className={`bg-white/5 border border-emerald-500/20 rounded-lg p-8 backdrop-blur transition-all transform ${formInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {/* Name */}
              {/* <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-all"
                  placeholder="Your name"
                />
              </div> */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name Group */}
                <div className="flex flex-col">
                  <label className="block text-lg font-semibold mb-2 text-white">
                    First Name 
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-all"
                    placeholder="John"
                  />
                </div>

                {/* Last Name Group */}
                <div className="flex flex-col">
                  <label className="block text-lg font-semibold mb-2 text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-all"
                  placeholder="What is this about?"
                />
              </div>
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-all resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 text-slate-950 font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={20} />}
              </button>
            </form>

            {submitted && (
              <div className="mt-6 bg-emerald-500/20 border border-emerald-500 text-emerald-300 rounded-lg px-6 py-4 flex items-center gap-3 animate-fadeInUp">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold">Message Sent!</h4>
                  <p className="text-sm">Thank you for reaching out. We'll respond within 24 hours.</p>
                </div>
              </div>
            )}
          </div>

          {/* Map Section */}
          <div className={`hidden lg:block bg-white/5 border border-emerald-500/20 rounded-lg overflow-hidden backdrop-blur transition-all transform ${formInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-full h-[500px] relative group">
              {/* Embedded OpenStreetMap - Lucknow, India */}
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.84,26.80,80.96,26.88&layer=mapnik&marker=26.8467,80.9462"
                style={{ border: 'none', borderRadius: '0.5rem' }}
                title="VortexPay Headquarters - Lucknow"
              ></iframe>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h4 className="font-bold text-white mb-1">VORTEXPAY HQ</h4>
                <p className="text-slate-300 text-sm mb-2">Lucknow, Uttar Pradesh, India</p>
                <a
                  href="https://www.openstreetmap.org/?mlat=26.8467&mlon=80.9462&zoom=15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                >
                  View on Map <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
