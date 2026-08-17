import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'data-collection', title: '2. Data We Collect' },
    { id: 'processing-purpose', title: '3. Processing Purposes' },
    { id: 'data-sharing', title: '4. Third-Party Sharing' },
    { id: 'security-standards', title: '5. Security Protocols' },
    { id: 'regulatory-compliance', title: '6. PCI Compliance' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 grid-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#2D6FD3] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-[#1E4E8C]/10 border border-[#2D6FD3]/30 mb-6 inline-block">
            Legal & Security
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-luxury tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[var(--color-text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
            Last Updated: June 2026. Please read this Privacy Policy carefully to understand our data storage, collection, and clearance procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          {/* Left Navigation (1/4 width) */}
          <div className="col-span-1 hidden lg:block sticky top-28 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 px-3">Sections</h3>
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
            <section id="introduction" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4A90FF]/10 flex items-center justify-center text-[#4A90FF]">
                  <Eye size={16} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">1. Introduction</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Let's Pay ("we", "us", or "our") values the integrity and privacy of your corporate identity and customer records. This Privacy Policy details how we handle payment processing logs, merchant identifiers, user details, and settlement parameters when utilizing our payment link and dashboard portals.
              </p>
            </section>

            {/* Section 2 */}
            <section id="data-collection" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22E67A]/10 flex items-center justify-center text-[#22E67A]">
                  <Shield size={16} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">2. Data We Collect</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                To route transactions reliably, we collect essential operational fields from checkout portals, payment link forms, and merchant dashboard setups:
              </p>
              <div className="space-y-3 pl-3">
                {[
                  "Merchant Identifiers (account numbers, business names, banking corridors).",
                  "Transaction payloads (amounts, currencies, card routing nodes, UPI IDs).",
                  "Client diagnostic data (IP addresses, transaction durations, routing success flags).",
                  "Contact information for onboarding, validation, and operations notifications."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#22E67A] shrink-0 mt-0.5" />
                    <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="processing-purpose" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4A90FF]/10 flex items-center justify-center text-[#4A90FF]">
                  <Lock size={16} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">3. Processing Purposes</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                All collected records are strictly limited to the execution and optimization of billing. We do not engage in merchant behavior profiling, credit scoring, or advertising resale. Your ledgers remain private, isolated, and encrypted.
              </p>
            </section>

            {/* Section 4 */}
            <section id="data-sharing" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <h2 className="text-xl font-bold text-white tracking-tight">4. Third-Party Sharing</h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                We share data with bank network operators, national clearing houses, and card network infrastructure providers (Visa, Mastercard, RuPay, UPI rails) solely to complete settlements. No data is transferred to marketing brokers or unverified nodes.
              </p>
            </section>

            {/* Section 5 */}
            <section id="security-standards" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <h2 className="text-xl font-bold text-white tracking-tight">5. Security Protocols</h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                All payment operations enforce TLS 1.3 in-transit encryption. Database repositories use AES-256 block-level encryption keys rotated periodically. Database layers enforce strict multi-factor merchant logins and whitelisted IP limits to ensure complete account safety.
              </p>
            </section>

            {/* Section 6 */}
            <section id="regulatory-compliance" className="card-glass-main card-glow-hover p-8 space-y-4 scroll-mt-28">
              <h2 className="text-xl font-bold text-white tracking-tight">6. PCI Compliance</h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Let's Pay is certified annually as a PCI-DSS Level 1 service provider. Merchant checkout forms utilize sandboxed elements, ensuring card numbers bypass the merchant's hosting server entirely to eliminate attack vectors.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
