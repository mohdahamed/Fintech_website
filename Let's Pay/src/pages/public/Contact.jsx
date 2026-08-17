import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2D6FD3] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-[#1E4E8C]/10 border border-[#2D6FD3]/30 mb-6 inline-block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-luxury mb-4">Contact Our Team</h1>
          <p className="text-[var(--color-text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about payout tools, merchant settlements, or commercial volume pricing? We're here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="card-glass-main card-glow-hover p-6 border border-white/5 flex gap-4">
              <Mail className="text-[#4A90FF]" size={24} />
              <div>
                <h3 className="text-white font-bold text-sm">Email Us</h3>
                <a href="mailto:support@letspay.co.in" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] text-xs mt-1 block transition-colors">support@letspay.co.in</a>
              </div>
            </div>
            <div className="card-glass-main card-glow-hover p-6 border border-white/5 flex gap-4">
              <Phone className="text-[#22E67A]" size={24} />
              <div>
                <h3 className="text-white font-bold text-sm">WhatsApp Chat</h3>
                <a href="https://wa.me/919177791100" className="text-[var(--color-text-muted)] hover:text-[#22E67A] text-xs mt-1 block transition-colors">+91 91777 91100</a>
              </div>
            </div>
            <div className="card-glass-main card-glow-hover p-6 border border-white/5 flex gap-4">
              <MapPin className="text-[#4A90FF]" size={24} />
              <div>
                <h3 className="text-white font-bold text-sm">Visit Our HQ</h3>
                <p className="text-[var(--color-text-muted)] text-[11px] mt-1 leading-relaxed">#21 MIND SPACE RAHEJA IT PARK HI TECH CITY HYDERABAD 500081 TELANGANA INDIA.</p>
              </div>
            </div>
          </div>
          <div className="card-glass-main card-glow-hover p-8 border border-white/5 relative">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#030816] border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]/40 transition-colors" 
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#030816] border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]/40 transition-colors" 
                  placeholder="name@company.com"
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-[#030816] border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]/40 transition-colors resize-none" 
                  placeholder="How can we help your business commercial payments flow?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#2d6fd3] hover:bg-[#4a90ff] text-white font-bold py-3 rounded-lg text-xs transition-colors blue-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Message <ArrowRight size={14} />
              </button>
            </form>

            {submitted && (
              <div className="absolute inset-0 bg-[#091020]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#22E67A]/10 border border-[#22E67A]/25 flex items-center justify-center text-[#22E67A] mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Message Sent</h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 max-w-[240px]">
                  Thank you! Our operations team has received your message and will respond within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
