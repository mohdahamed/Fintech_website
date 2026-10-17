import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicyPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ink-900 py-24 border-b border-ink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700 bg-ink-800 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-300">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Refund Policy
          </h1>
          <p className="text-ink-300 text-lg max-w-2xl mx-auto">
            Information regarding service cancellations and refunds.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-5 py-20">
        <div className="space-y-6 text-ink-600 leading-relaxed text-lg">
          <p>
            The Refund amount in case of any cancellation of services will be refunded within 48 hours. The refund will be processed only after we get a refund from the service provider/Bank, after deducting the applicable service charges and cancellation charges.
          </p>

          <div className="bg-paper border border-ink-200 rounded-xl p-8 mt-10">
            <h4 className="font-bold text-ink-900 mb-2">Contact Us</h4>
            <p className="text-ink-600 mb-0">For any refund related queries, please email us at <a href="mailto:support@paynidipro.in" className="text-brass-600 hover:text-brass-700 font-semibold transition-colors">support@paynidipro.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
