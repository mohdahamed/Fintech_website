import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> 24/7 Merchant Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch with <span className="text-[#3B82F6]">AuraPay</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Have questions about gateway integration, settlement cycles, or enterprise payout limits? Our team is available round the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 flex gap-4 items-start hover:border-[#3B82F6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Email Support</h3>
                <p className="text-xs text-slate-400 mt-1">Direct response from payment operations</p>
                <a href="mailto:care.aurapay@gmail.com" className="text-xs text-[#3B82F6] font-semibold mt-2 inline-block hover:underline">
                  care.aurapay@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 flex gap-4 items-start hover:border-[#22E67A] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#22E67A] shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Mobile & WhatsApp</h3>
                <p className="text-xs text-slate-400 mt-1">Instant support and merchant onboarding</p>
                <a href="https://wa.me/919666423455" className="text-xs text-[#22E67A] font-semibold mt-2 inline-block hover:underline">
                  +91 9666423455
                </a>
              </div>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 flex gap-4 items-start hover:border-[#8B5CF6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#8B5CF6] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">Corporate Headquarters</h3>
                <div className="text-xs text-slate-300 space-y-0.5 leading-relaxed">
                  <p className="font-bold text-white">#21 Mind Space Raheja IT Park</p>
                  <p className="text-slate-300">Hi-Tech City, Hyderabad - 500081</p>
                  <p className="text-slate-400">Telangana, India</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Raheja+Mindspace+IT+Park+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8B5CF6] font-bold mt-2.5 inline-flex items-center gap-1 hover:underline"
                >
                  View Location on Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#050816] border border-[#233452] rounded-2xl p-8 shadow-2xl relative">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare size={18} className="text-[#3B82F6]" /> Send Us a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Business Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Subject</label>
                <input
                  type="text"
                  className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder="Merchant Integration / Settlement Inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  placeholder="Tell us about your business volume and requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-bold py-3.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
              >
                Send Inquiry <ArrowRight size={14} />
              </button>
            </form>

            {submitted && (
              <div className="absolute inset-0 bg-[#050816]/95 rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#22E67A]/10 border border-[#22E67A]/30 flex items-center justify-center text-[#22E67A] mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
                  Thank you for reaching out! Our payment operations team will review your inquiry and get back to you within 2 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* NEW UNIQUE SECTION: Service Level Agreement & Escalation SLA */}
        <div className="mt-20 bg-[#050816] border border-[#233452] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#3B82F6] font-bold text-xs uppercase tracking-wider block mb-2">Merchant SLA</span>
            <h2 className="text-3xl font-bold text-white">Guaranteed Operational Response SLA</h2>
            <p className="text-slate-400 text-sm mt-1">Our dedicated payment support team operates under strict response SLA timeframes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111B2F] border border-[#233452] p-6 rounded-2xl space-y-2">
              <span className="text-[#22E67A] font-bold text-xl block">&lt; 5 Minutes</span>
              <h4 className="font-bold text-white text-base">WhatsApp & Mobile Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Direct instant response for urgent settlement and account inquiries.</p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] p-6 rounded-2xl space-y-2">
              <span className="text-[#3B82F6] font-bold text-xl block">&lt; 1 Hour</span>
              <h4 className="font-bold text-white text-base">KYC & Account Onboarding</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Fast-track merchant verification and payment link activation.</p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] p-6 rounded-2xl space-y-2">
              <span className="text-[#8B5CF6] font-bold text-xl block">&lt; 2 Hours</span>
              <h4 className="font-bold text-white text-base">Email Ticket Resolution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Comprehensive technical and ledger audit escalation responses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
