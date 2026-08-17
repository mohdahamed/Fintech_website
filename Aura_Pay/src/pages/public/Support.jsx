import { useState } from 'react';
import { Mail, LifeBuoy, CheckCircle2, ChevronRight, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Support() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> Merchant Support Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            How Can We <span className="text-[#3B82F6]">Assist You?</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Our specialized fintech operations team is available around the clock to assist with settlement accounts, gateway queries, and merchant onboarding.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3B82F6] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#020817] border border-[#233452] flex items-center justify-center mb-4 text-[#3B82F6]">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Email Operations</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Open a support ticket for ledger issues, settlements, custom charges, or merchant onboarding queries.
              </p>
            </div>
            <a href="mailto:care.aurapay@gmail.com" className="text-[#3B82F6] font-bold text-xs flex items-center gap-1 hover:underline mt-6">
              care.aurapay@gmail.com <ChevronRight size={14} />
            </a>
          </div>

          <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 flex flex-col justify-between hover:border-[#22E67A] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#020817] border border-[#233452] flex items-center justify-center mb-4 text-[#22E67A]">
                <MessageCircle size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Mobile & WhatsApp</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Reach out to our dedicated support team directly via Mobile or WhatsApp for fast resolution.
              </p>
            </div>
            <a href="https://wa.me/919666423455" className="text-[#22E67A] font-bold text-xs flex items-center gap-1 hover:underline mt-6">
              +91 9666423455 <ChevronRight size={14} />
            </a>
          </div>

          <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B5CF6] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#020817] border border-[#233452] flex items-center justify-center mb-4 text-[#8B5CF6]">
                <LifeBuoy size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Platform Health</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Monitor live operational status for payment link gateways, bank clearing switches, and ledger networks.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#22E67A] font-bold text-xs mt-6">
              <span className="w-2 h-2 rounded-full bg-[#22E67A]"></span>
              99.99% Systems Operational
            </div>
          </div>
        </div>

        {/* Ticket Form & Diagnostic Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold">Submit a Support Ticket</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Describe your payout template issue or account discrepancy in detail. Our response time for commercial partners is under 15 minutes.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Instant bank routing diagnostics.",
                "Merchant dashboard configuration.",
                "Custom settlement setup assistance.",
                "Transaction and security audits."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#22E67A]" />
                  <span className="text-xs font-semibold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#050816] border border-[#233452] rounded-2xl p-8 shadow-2xl relative">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Merchant ID / Email</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#3B82F6]" 
                    placeholder="merchant@company.com"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Issue Category</label>
                  <select className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#3B82F6]">
                    <option>Settlement Delay</option>
                    <option>Pay-In Callback Inquiry</option>
                    <option>Payout Batch Clearance</option>
                    <option>KYC / Account Setup</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Ticket Details</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-[#111B2F] border border-[#233452] rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#3B82F6] resize-none" 
                  placeholder="Include transaction IDs or bank reference numbers..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-bold py-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
              >
                Submit Ticket <ArrowRight size={14} />
              </button>
            </form>

            {formSubmitted && (
              <div className="absolute inset-0 bg-[#050816]/95 rounded-2xl flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#22E67A]/10 border border-[#22E67A]/30 flex items-center justify-center text-[#22E67A] mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Ticket Submitted</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed">
                  Ticket reference <span className="font-mono text-white">#TK-88910</span> has been assigned. You will receive an update via email shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
