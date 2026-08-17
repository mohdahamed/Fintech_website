import { Shield, Lock, Eye, CheckCircle2, ShieldCheck, HeartHandshake, Check, X } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    { id: 'trust-guarantee', title: '1. Our Trust Pledge' },
    { id: 'data-collection', title: '2. Data We Collect' },
    { id: 'processing-purpose', title: '3. How We Use Data' },
    { id: 'security-standards', title: '4. Security Protocols' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> Legal & Security
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy <span className="text-[#3B82F6]">Policy</span>
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Clear guidelines on how your business information is stored, processed, and protected. Last Updated: June 2026.
          </p>
        </div>

        {/* Trust Pledge Banner */}
        <div id="trust-guarantee" className="bg-[#050816] border border-[#233452] rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#22E67A]">
              <HeartHandshake size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Our 4 Pledges to Every Merchant</h2>
              <p className="text-xs text-slate-400">Clear rules on how we handle your business information.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#22E67A] font-bold text-xs uppercase flex items-center gap-1"><Check size={14} /> Zero Data Selling</span>
              <p className="text-xs text-slate-300">We never sell, rent, or monetize your business or customer records to anyone.</p>
            </div>
            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#3B82F6] font-bold text-xs uppercase flex items-center gap-1"><Check size={14} /> Bank-Grade Encryption</span>
              <p className="text-xs text-slate-300">All data transfers use 256-bit SSL encryption and PCI-DSS Level 1 vaults.</p>
            </div>
            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#8B5CF6] font-bold text-xs uppercase flex items-center gap-1"><Check size={14} /> Strict RBI Compliance</span>
              <p className="text-xs text-slate-300">Fully aligned with Reserve Bank of India (RBI) merchant processing rules.</p>
            </div>
            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#22E67A] font-bold text-xs uppercase flex items-center gap-1"><Check size={14} /> Full Control</span>
              <p className="text-xs text-slate-300">You can request full export or deletion of your account records at any time.</p>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          
          {/* Navigation Sidebar */}
          <div className="col-span-1 hidden lg:block sticky top-32 space-y-2 bg-[#050816] p-4 rounded-2xl border border-[#233452]">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Table of Contents</h3>
            {sections.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className="block text-xs font-semibold text-slate-300 hover:text-[#3B82F6] px-3 py-2 rounded-lg hover:bg-[#111B2F] transition-all"
              >
                {sec.title}
              </a>
            ))}
          </div>

          {/* Clauses Area */}
          <div className="col-span-1 lg:col-span-3 space-y-8">
            
            {/* Section 1: Introduction */}
            <section className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#3B82F6]">
                  <Eye size={16} />
                </div>
                <h2 className="text-xl font-bold text-white">1. Introduction</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                AuraPay ("we", "us", or "our") respects your corporate identity and transaction records. This Privacy Policy details how we gather, process, and protect your information when utilizing our merchant portal and payment links.
              </p>
            </section>

            {/* Section 2: Data We Collect */}
            <section id="data-collection" className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#22E67A]">
                  <Shield size={16} />
                </div>
                <h2 className="text-xl font-bold text-white">2. Data We Collect</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-[#22E67A] uppercase flex items-center gap-1"><Check size={14} /> What We Collect</h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li>• Business Name, GST & Bank Account Details</li>
                    <li>• Transaction Amount, Order ID & Timestamps</li>
                    <li>• UPI VPA handles for payment confirmation</li>
                  </ul>
                </div>

                <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-red-400 uppercase flex items-center gap-1"><X size={14} /> What We Never Store</h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li>• Raw Debit / Credit Card Numbers</li>
                    <li>• CVV / Security Pins</li>
                    <li>• NetBanking Login Credentials or Passwords</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Processing Purposes */}
            <section id="processing-purpose" className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#8B5CF6]">
                  <Lock size={16} />
                </div>
                <h2 className="text-xl font-bold text-white">3. How We Use Your Data</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your data is strictly utilized for verifying merchant business authenticity (KYC), completing bank transfers, preventing financial fraud, and fulfilling Reserve Bank of India (RBI) compliance audits.
              </p>
            </section>

            {/* Section 4: Security Protocols */}
            <section id="security-standards" className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#3B82F6]">
                  <CheckCircle2 size={16} />
                </div>
                <h2 className="text-xl font-bold text-white">4. PCI-DSS Security Protocols</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                All data transmission between your merchant portal and bank nodes is guarded by certified PCI-DSS Level 1 encryption standards, protecting your business against unauthorized access.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
