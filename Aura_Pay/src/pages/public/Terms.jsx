import { ShieldCheck, FileText, Scale, CheckCircle2, AlertTriangle, Check, X } from 'lucide-react';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> Clear & Fair Merchant Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Terms of <span className="text-[#3B82F6]">Service</span>
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Simple, honest terms governing your merchant portal and payout operations. Last Updated: June 2026.
          </p>
        </div>

        {/* 3 Core Commitments Banner */}
        <div className="bg-[#050816] border border-[#233452] rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-[#22E67A]" size={20} /> What You Can Expect From AuraPay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#3B82F6] font-bold text-xs uppercase block">1. Transparent Pricing</span>
              <p className="text-xs text-slate-300">Zero hidden maintenance fees or surprise charges. All transaction fees are clearly stated upfront.</p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#22E67A] font-bold text-xs uppercase block">2. Guaranteed Settlements</span>
              <p className="text-xs text-slate-300">Your funds are settled directly into your linked bank account on agreed schedule (T+0 or T+1).</p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl space-y-2">
              <span className="text-[#8B5CF6] font-bold text-xs uppercase block">3. Dedicated Support</span>
              <p className="text-xs text-slate-300">Direct escalation desk via WhatsApp, Phone, or Email for settlement support.</p>
            </div>
          </div>
        </div>

        {/* Detailed Clauses */}
        <div className="space-y-8">
          
          {/* Clause 1 */}
          <div className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#3B82F6]">
                <FileText size={16} />
              </div>
              <h3 className="text-xl font-bold text-white">1. Merchant Account & KYC Verification</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              To operate an active merchant account on AuraPay, you agree to provide valid business credentials (GST, PAN, and Bank Account details). Standard KYC verification is mandated under financial regulatory guidelines.
            </p>
          </div>

          {/* Clause 2 */}
          <div className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-[#22E67A]">
                <Scale size={16} />
              </div>
              <h3 className="text-xl font-bold text-white">2. Settlements & Transaction Processing</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Payments collected via UPI, Payment Links, Cards, or NetBanking are automatically credited to your linked merchant bank account. Agreed platform processing fees will be deducted directly from gross settlement totals.
            </p>
          </div>

          {/* Clause 3 */}
          <div className="bg-[#050816] border border-[#233452] rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#111B2F] border border-[#233452] flex items-center justify-center text-red-400">
                <AlertTriangle size={16} />
              </div>
              <h3 className="text-xl font-bold text-white">3. Prohibited Activities & Fair Usage</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              AuraPay maintains a strict zero-tolerance policy against illegal activities, unauthorized financial schemes, or fraudulent money movements. Accounts engaging in unauthorized practices will be suspended immediately.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
