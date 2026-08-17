import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  HelpCircle, ShieldCheck, Clock, RefreshCw, ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'payin',
    message: ''
  });
  
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'payin',
      message: ''
    });
    setFormState('idle');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full hover:border-royal-500 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-royal-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Support & sales
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Connect With Our Integration Teams
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Have questions about api integrations, service pricing, or onboarding compliance? Submit details to connect directly with our payments architects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Contact & Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (Col 5) */}
          <div className="lg:col-span-5 space-y-8 text-left animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-navy-900">Direct Support Channels</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with our dedicated departments directly for rapid issue resolution.
              </p>
            </div>

            {/* Support Details */}
            <div className="space-y-5">
              <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5">
                  <Mail className="h-5 w-5 text-royal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Email Correspondence</h4>
                  <p className="text-xs text-slate-600 mt-1">General: support@magicpaysolution.com</p>
                  <p className="text-xs text-slate-600">Enterprise sales: sales@magicpaysolution.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5">
                  <Phone className="h-5 w-5 text-royal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Helpline Number</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Support: <a href="tel:+918498901997" className="hover:text-royal-600 font-semibold">+91 8498901997</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 text-royal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Corporate Head Office</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Marbow Eduro Private Limited Plot:136, Venkateshwar nagar, Quthbullahpur, medchal, Telangana-500055
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4.5 w-4.5 text-royal-600 animate-pulse-slow" />
                <span className="text-xs font-semibold text-slate-700">Avg response: 15 mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4.5 w-4.5 text-accent-emerald animate-pulse-slow" />
                <span className="text-xs font-semibold text-slate-700">Encrypted transmission</span>
              </div>
            </div>
          </div>

          {/* Form Side (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-10 premium-shadow text-left animate-slide-in-right">
            {formState === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-extrabold text-navy-900">Enterprise Inquiry Form</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-600 transition-all font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-600 transition-all font-medium"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-600 transition-all font-medium"
                      placeholder="+91 99887 76655"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-600 transition-all font-medium"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-600 transition-all font-medium"
                  >
                    <option value="payin">Payin Payment Gateway</option>
                    <option value="payout">Payout Bulk Transfers</option>
                    <option value="bbps">BBPS Utility Integrations</option>
                    <option value="custom">Custom Enterprise Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-600 transition-all font-medium"
                    placeholder="Briefly describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm active:scale-95"
                >
                  Submit Inquiry
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}

            {formState === 'submitting' && (
              <div className="py-20 flex flex-col items-center justify-center space-y-4 animate-fade-in-up">
                <RefreshCw className="h-10 w-10 text-royal-600 animate-spin" />
                <div className="text-center">
                  <p className="text-sm font-bold text-navy-900">Transmitting Request Data</p>
                  <p className="text-xs text-slate-500 mt-1">Securing connection to sales ledger...</p>
                </div>
              </div>
            )}

            {formState === 'success' && (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center rounded-full animate-pulse-glow">
                  <CheckCircle2 className="h-6 w-6 text-accent-emerald" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">Inquiry Received Successfully</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. A payment architect has been assigned to your ticket and will email you at <span className="font-semibold text-navy-900">{formData.email}</span> shortly.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded transition-all duration-200 hover:scale-105"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Headquarters Location Map Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10 animate-fade-in-up">
            <span className="text-xs font-bold text-royal-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
              Corporate Headquarters
            </span>
            <h3 className="text-2xl font-extrabold text-navy-900">Telangana Operations & Engineering Hub</h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              Visit our primary office facility or map directions to our registered corporate headquarters in Medchal.
            </p>
          </div>
          
          {/* Interactive Google Map Container with Floating HQ Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden premium-shadow relative grid grid-cols-1 lg:grid-cols-12 min-h-[460px] animate-fade-in-up">
            {/* Map Embed Column */}
            <div className="lg:col-span-8 relative min-h-[340px] lg:min-h-[460px] bg-slate-900">
              <iframe
                title="Marbow Eduro HQ Location Map"
                src="https://maps.google.com/maps?q=Plot%20136%2C%20Venkateshwar%20nagar%2C%20Quthbullahpur%2C%20Medchal%2C%20Telangana%20500055&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[340px] lg:min-h-[460px] border-0 filter grayscale contrast-125 brightness-90 hover:filter-none transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Badge */}
              <div className="absolute top-4 left-4 bg-navy-900/90 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Interactive Map</span>
              </div>
            </div>

            {/* Location Information Sidebar Column */}
            <div className="lg:col-span-4 bg-navy-900 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-royal-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="h-4 w-4 text-royal-400" />
                  <span>Head Office Location</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Marbow Eduro HQ</h4>
                
                <div className="space-y-4 text-xs text-slate-300">
                  <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-xl space-y-2">
                    <p className="font-bold text-white text-sm">Marbow Eduro Private Limited</p>
                    <p className="leading-relaxed text-slate-300">
                      Plot No. 136, Venkateshwar Nagar, Quthbullahpur, Medchal-Malkajgiri District, Telangana - 500055, India
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-slate-800 pt-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Operating Hours:</span>
                      <span className="font-semibold text-slate-200">Mon - Sat: 9am - 7pm IST</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Facility Status:</span>
                      <span className="inline-flex items-center text-emerald-400 font-semibold gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Open & Active
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Direct Helpline:</span>
                      <a href="tel:+918498901997" className="font-semibold text-royal-400 hover:underline">
                        +91 8498901997
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+136+Venkateshwar+nagar+Quthbullahpur+medchal+Telangana+500055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-royal-600 hover:bg-royal-500 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href="tel:+918498901997"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all"
                >
                  <Phone className="h-3.5 w-3.5 text-royal-400" />
                  <span>Call Corporate Operations</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
