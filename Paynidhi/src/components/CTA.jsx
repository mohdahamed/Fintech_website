import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-ink-900 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-ink-800 rounded-2xl border border-ink-700 p-10 md:p-16 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Ready to simplify your retail payments?
          </h2>
          <p className="text-ink-300 text-base md:text-lg mb-8 max-w-2xl">
            Join thousands of retailers across India using PayNidi Pro to manage BBPS, mobile recharges, and money transfers in one unified ledger.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-sm text-ink-100">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-brass-500"></i>
              <span>Zero setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-brass-500"></i>
              <span>Instant onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-brass-500"></i>
              <span>Highest success rate</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="https://agent.paynidipro.in" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brass-500 text-white text-sm font-semibold px-8 py-3.5 hover:bg-brass-600 transition-colors shadow-sm">
              Create Agent Account
            </a>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-ink-600 bg-transparent text-white text-sm font-semibold px-8 py-3.5 hover:bg-ink-700 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
