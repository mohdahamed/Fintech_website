import { Terminal, Scale, ShieldAlert } from 'lucide-react';

export default function Terms() {
  const sections = [
    { id: 'agreement', title: '1. Agreement Terms' },
    { id: 'merchant-rules', title: '2. Merchant Conduct' },
    { id: 'settlement-terms', title: '3. Settlements & Fees' },
    { id: 'payout-cycles', title: '4. Payout Policy' },
    { id: 'limits-of-liability', title: '5. Liability Boundaries' },
    { id: 'governing-law', title: '6. Governing Law' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 grid-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#2D6FD3] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-[#1E4E8C]/10 border border-[#2D6FD3]/30 mb-6 inline-block">
            Legal Agreements
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-luxury tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-[var(--color-text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
            Effective Date: June 2026. Please read this Merchant Service Agreement carefully before utilizing our payment collections and payout portals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          {/* Left Navigation (1/4 width) */}
          <div className="col-span-1 hidden lg:block sticky top-28 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 px-3">Agreement Sections</h3>
            {sections.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className="block text-xs font-semibold text-[var(--color-text-muted)] hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {sec.title}
              </a>
            ))}
          </div>

          {/* Right Content Area (3/4 width) */}
          <div className="col-span-1 lg:col-span-3 space-y-12">
            
            {/* Section 1 */}
            <section id="agreement" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4A90FF]/10 flex items-center justify-center text-[#4A90FF]">
                  <Scale size={16} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">1. Agreement Terms</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                By creating a merchant account, deploying our checkout links, or utilizing our payout dashboard consoles, you agree to comply with this Merchant Service Agreement. If you do not accept these policies, do not access our payment flows.
              </p>
            </section>

            {/* Section 2 */}
            <section id="merchant-rules" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22E67A]/10 flex items-center justify-center text-[#22E67A]">
                  <ShieldAlert size={16} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">2. Merchant Conduct</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Merchants are strictly prohibited from using Let's Pay pipelines for:
              </p>
              <div className="space-y-3 pl-3">
                {[
                  "Unregistered money transmission or currency speculation.",
                  "Facilitating transactions for illicit products or services.",
                  "Bypassing card scheme regulations (Visa/Mastercard merchant codes).",
                  "Intentionally triggering automated payout loops to exploit settlement corridors."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-2 shrink-0"></span>
                    <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="settlement-terms" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4A90FF]/10 flex items-center justify-center text-[#4A90FF]">
                  <Terminal size={16} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">3. Settlements & Fees</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Fees are calculated per processed transaction and automatically deducted during settlement cycles. We reserve the right to temporarily freeze settlements or hold a deposit reserve if dispute/chargeback ratios exceed 1.0% of monthly merchant volume.
              </p>
            </section>

            {/* Section 4 */}
            <section id="payout-cycles" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <h2 className="text-xl font-bold text-white tracking-tight">4. Payout Policy</h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Outgoing bulk payouts must be backed by pre-funded merchant balance accounts. Payout clearance relies on local banking networks (IMPS, UPI, ACH rails), and Let's Pay is not responsible for downstream clearing delays originating at beneficiary bank nodes.
              </p>
            </section>

            {/* Section 5 */}
            <section id="limits-of-liability" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <h2 className="text-xl font-bold text-white tracking-tight">5. Liability Boundaries</h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                In no event will Let's Pay be liable for lost revenues, business interruption, or indirect losses arising from portal outages, bank transfer delays, or system route switches. Our aggregate liability is capped at the processing fees paid to us by the merchant during the immediate 30-day period prior to the claim.
              </p>
            </section>

            {/* Section 6 */}
            <section id="governing-law" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <h2 className="text-xl font-bold text-white tracking-tight">6. Governing Law</h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                This Merchant Service Agreement is governed by local corporate laws and financial guidelines. Any disputes arising under this agreement will be settled through fast-track arbitration services before competent authorities.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
