import React, { useState } from 'react';
import CTA from '../components/CTA';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally this would submit to an API
    alert('Thank you for your message. Our team will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="bg-paper border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side - Contact Info */}
            <div>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-brass-600 mb-4">
                Support & Inquiries
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mb-6 leading-tight">
                Let's build your retail network together.
              </h1>
              <p className="text-ink-500 text-lg mb-12 leading-relaxed">
                Whether you're looking to become an agent, integrate our BBPS APIs, or just have a general question, our dedicated support team is ready to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-600 shrink-0 shadow-sm">
                    <i className="fas fa-envelope text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink-900 mb-1">Email Us</h3>
                    <p className="text-sm text-ink-500 mb-2">For general support and business inquiries.</p>
                    <a href="mailto:support@paynidipro.in" className="text-sm font-semibold text-brass-600 hover:text-brass-700 transition-colors">support@paynidipro.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-600 shrink-0 shadow-sm">
                    <i className="fas fa-phone-alt text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink-900 mb-1">Call Us</h3>
                    <p className="text-sm text-ink-500 mb-2">Available Mon-Sat, 9:00 AM to 6:00 PM.</p>
                    <a href="tel:+919450751274" className="text-sm font-semibold text-brass-600 hover:text-brass-700 transition-colors">919450751274</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-600 shrink-0 shadow-sm">
                    <i className="fas fa-map-marker-alt text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink-900 mb-1">Headquarters</h3>
                    <p className="text-sm text-ink-500">Niditi Solutions Private Limited<br/>India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl border border-ink-200 shadow-sm p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-ink-900 mb-2">Send a Message</h3>
              <p className="text-sm text-ink-500 mb-8">Fill out the form below and we'll reply within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-semibold tracking-wide uppercase text-ink-600">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-paper border border-ink-200 rounded-md px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[11px] font-semibold tracking-wide uppercase text-ink-600">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-paper border border-ink-200 rounded-md px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] font-semibold tracking-wide uppercase text-ink-600">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-paper border border-ink-200 rounded-md px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[11px] font-semibold tracking-wide uppercase text-ink-600">Inquiry Type</label>
                  <select 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-paper border border-ink-200 rounded-md px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em 1.2em' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="agent">Become an Agent</option>
                    <option value="api">API Integration</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-semibold tracking-wide uppercase text-ink-600">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-paper border border-ink-200 rounded-md px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 text-white text-sm font-semibold px-8 py-3.5 hover:bg-ink-800 transition-colors shadow-sm mt-2"
                >
                  Send Message
                  <i className="fas fa-paper-plane text-xs"></i>
                </button>
                <p className="text-[11px] text-ink-400 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default ContactPage;
