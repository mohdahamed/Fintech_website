import React from 'react';
import { Shield, FileText, Scale, HelpCircle } from 'lucide-react';

export default function Terms() {
  const lastUpdated = "June 1, 2026";

  return (
    <div className="bg-white min-h-screen text-slate-700">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              <Scale className="h-4 w-4 text-royal-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Legal & Compliance
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Please read these terms carefully. They define the agreement between your business and Marbow Eduro Private Limited for using the Magic Pay Solution platform.
            </p>
            <p className="text-xs text-slate-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="space-y-10 animate-fade-in-up">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">1</span>
              Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              By accessing our website, integrating our payment APIs, or registering an account on the merchant agent portal (located at <a href="https://agent.magicpaysolution.com" target="_blank" rel="noopener noreferrer" className="text-royal-600 hover:underline">https://agent.magicpaysolution.com</a>), you agree to be bound by these Terms & Conditions. If you do not agree, you must immediately discontinue using our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">2</span>
              Scope of Services
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 mb-2">
              Magic Pay Solution (operated by Marbow Eduro Private Limited) provides business-to-business (B2B) payment infrastructure, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li><strong>Payin Gateway:</strong> Collection mechanisms for credit card, debit card, Netbanking, and UPI networks.</li>
              <li><strong>Payout Disbursements:</strong> Automated tools for bulk payouts, merchant settlements, vendor transfers, and IMPS/NEFT transfers.</li>
              <li><strong>BBPS Node:</strong> Access to the Bharat Bill Payment System network to fetch and clear utility invoices.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">3</span>
              Merchant Eligibility & Onboarding
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Merchants must complete the regulatory Know-Your-Customer (KYC) process on our portal before collecting public payments. You agree to provide accurate, verified information, including business registration proofs, PAN details, and bank account credentials. We reserve the right to suspend accounts that provide false or misleading information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">4</span>
              Fees, Settlements & Reserves
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Transaction service fees are computed per successful transaction based on the pricing tier established in your Merchant Agreement. Settlement cycles run on standard T+1 or T+2 schedules directly into your registered bank account. We reserve the right to hold settlement payouts in a reserve balance to cover potential chargebacks, payment disputes, or suspicious transaction volumes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">5</span>
              Prohibited Activities
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              You agree not to use Magic Pay Solution to process payments for restricted or illegal items, including unauthorized financial services, gambling, pirated goods, or products that violate Indian laws. Breach of this section will trigger immediate account termination and reporting to compliance regulators.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">6</span>
              Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Magic Pay Solution and Marbow Eduro Private Limited shall not be liable for any indirect, incidental, or consequential damages resulting from connection drops, bank node failures, or transaction processing interruptions by third-party UPI or card networks.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">7</span>
              Jurisdiction & Governing Law
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Medchal-Malkajgiri District, Telangana.
            </p>
          </div>

          {/* Contact Support Block */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-royal-600" />
                Have questions about these terms?
              </h3>
              <p className="text-xs text-slate-500">
                Contact our compliance desk for clarifications regarding payment protocols.
              </p>
            </div>
            <div className="flex flex-col text-left md:text-right">
              <span className="text-xs font-bold text-navy-900">Marbow Eduro Private Limited</span>
              <span className="text-xs text-slate-600 mt-1">Plot:136, Venkateshwar nagar, Quthbullahpur</span>
              <span className="text-xs text-slate-600">Medchal, Telangana-500055</span>
              <a href="tel:+918498901997" className="text-sm font-bold text-royal-600 mt-2 hover:underline">
                Support: +91 8498901997
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
