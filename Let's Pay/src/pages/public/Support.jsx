import { useState } from 'react';
import { Mail, LifeBuoy, CheckCircle2, ChevronRight, ArrowRight, MessageCircle } from 'lucide-react';

export default function Support() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2D6FD3] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-[#1E4E8C]/10 border border-[#2D6FD3]/30 mb-6 inline-block">
            Support Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-luxury tracking-tight mb-4">
            How Can We Assist You Today?
          </h1>
          <p className="text-[var(--color-text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
            Our specialized fintech operations team is available around the clock to support your account operations, transaction tracking, and merchant accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Email Support */}
          <div className="card-glass-blue card-glow-hover p-6 flex flex-col justify-between h-[220px] relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#4A90FF]/10 flex items-center justify-center mb-4 text-[#4A90FF]">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Email Operations</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                Open a support ticket for ledger issues, settlements, custom charges, or merchant onboarding queries.
              </p>
            </div>
            <a href="mailto:support@letspay.co.in" className="text-[#4A90FF] font-bold text-xs flex items-center gap-1 hover:underline self-start">
              support@letspay.co.in <ChevronRight size={14} />
            </a>
          </div>

          {/* Card 2: Hotlines */}
          <div className="card-glass-green card-glow-hover p-6 flex flex-col justify-between h-[220px] relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#22E67A]/10 flex items-center justify-center mb-4 text-[#22E67A]">
                <MessageCircle size={20} />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">WhatsApp Chat</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                Reach out to our dedicated support team directly via WhatsApp for quick assistance and inquiries.
              </p>
            </div>
            <a href="https://wa.me/919177791100" className="text-[#22E67A] font-bold text-xs flex items-center gap-1 hover:underline self-start">
              +91 91777 91100 <ChevronRight size={14} />
            </a>
          </div>

          {/* Card 3: System Status */}
          <div className="card-glass-blue card-glow-hover p-6 flex flex-col justify-between h-[220px] relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#4A90FF]/10 flex items-center justify-center mb-4 text-[#4A90FF]">
                <LifeBuoy size={20} />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">System Status</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                Monitor live operational uptime for our payment link gateways, bank clearing switches, and ledger networks.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#22E67A] font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-[#22E67A] animate-pulse"></span>
              99.99% Systems Operational
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">Submit a Support Ticket</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Describe your payout template issue or account discrepancy in detail. Our average response time for high-tier enterprise partners is under 15 minutes.
            </p>
            <div className="space-y-4">
              {[
                "Instant bank routing diagnostics.",
                "Merchant dashboard configuration.",
                "Custom settlement setup assistance.",
                "Transaction and security audits."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#22E67A]" />
                  <span className="text-xs font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass-main card-glow-hover p-8 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Merchant Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#030816] border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]/40 transition-colors" 
                  placeholder="e.g. Acme Tech"
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Merchant Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#030816] border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]/40 transition-colors" 
                  placeholder="name@company.com"
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Issue Description</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-[#030816] border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]/40 transition-colors resize-none" 
                  placeholder="Include transaction ID or bank RRN if applicable..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#2d6fd3] hover:bg-[#4a90ff] text-white font-bold py-3 rounded-lg text-xs transition-colors blue-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Ticket <ArrowRight size={14} />
              </button>
            </form>

            {formSubmitted && (
              <div className="absolute inset-0 bg-[#091020]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#22E67A]/10 border border-[#22E67A]/25 flex items-center justify-center text-[#22E67A] mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Ticket Submitted</h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 max-w-[240px]">
                  Thank you! Our operations agent is reviewing your ticket and will follow up shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
