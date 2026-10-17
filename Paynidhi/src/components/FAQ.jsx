import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-white border-t border-ink-100">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-brass-600 mb-4">
            Support
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900">
            Common questions
          </h2>
        </div>
        
        <div className="space-y-0 border-t border-ink-100">
          <details className="group border-b border-ink-100" open>
            <summary className="cursor-pointer list-none py-6 flex items-center justify-between focus:outline-none">
              <span className="text-[15px] font-semibold text-ink-900 group-open:text-brass-600 transition-colors">
                Why choose Niditi Solutions for digital payments?
              </span>
              <span className="text-ink-400 group-open:rotate-45 group-open:text-brass-600 transition-transform duration-200 text-xl leading-none font-light ml-4">+</span>
            </summary>
            <div className="pb-6 text-sm text-ink-500 leading-relaxed pr-8">
              A seamless digital payment experience tailored to Indian retailers — fast transactions, multiple payment rails, and support around the clock. Our platform is built for stability even in low-connectivity environments.
            </div>
          </details>
          
          <details className="group border-b border-ink-100">
            <summary className="cursor-pointer list-none py-6 flex items-center justify-between focus:outline-none">
              <span className="text-[15px] font-semibold text-ink-900 group-open:text-brass-600 transition-colors">
                Are there hidden charges?
              </span>
              <span className="text-ink-400 group-open:rotate-45 group-open:text-brass-600 transition-transform duration-200 text-xl leading-none font-light ml-4">+</span>
            </summary>
            <div className="pb-6 text-sm text-ink-500 leading-relaxed pr-8">
              No. All fees are disclosed up front. Every transaction shows its full breakdown before you confirm, ensuring complete transparency for your retail business.
            </div>
          </details>
          
          <details className="group border-b border-ink-100">
            <summary className="cursor-pointer list-none py-6 flex items-center justify-between focus:outline-none">
              <span className="text-[15px] font-semibold text-ink-900 group-open:text-brass-600 transition-colors">
                What about transaction failures or security?
              </span>
              <span className="text-ink-400 group-open:rotate-45 group-open:text-brass-600 transition-transform duration-200 text-xl leading-none font-light ml-4">+</span>
            </summary>
            <div className="pb-6 text-sm text-ink-500 leading-relaxed pr-8">
              Every transaction is logged and reconciled automatically. We utilize bank-grade encryption and maintain a dedicated support desk to instantly resolve any edge cases.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
