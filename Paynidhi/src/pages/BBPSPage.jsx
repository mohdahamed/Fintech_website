import React from 'react';
import { Link } from 'react-router-dom';

const BBPSPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ink-900 py-24 border-b border-ink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700 bg-ink-800 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-300">Service</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Bharat Bill Payment System
          </h1>
          <p className="text-ink-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Accept payments for electricity, water, gas, broadband, FASTag, municipal tax, LIC premiums and more through the official BBPS network.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-5 py-24">
        <div className="grid grid-cols-1 gap-12">
          
          <div className="flex gap-8 items-start group">
            <div className="font-ledger text-brass-500 text-3xl md:text-4xl font-medium flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">01</div>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 tracking-tight">Easy Cash Transfer</h3>
              <p className="text-ink-500 text-lg leading-relaxed max-w-2xl">
                Retailers can print a transaction receipt with the Bank UTR for their customers, giving them a clear sense of safety on every payment.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 items-start group">
            <div className="font-ledger text-brass-500 text-3xl md:text-4xl font-medium flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">02</div>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 tracking-tight">Best Success Rate</h3>
              <p className="text-ink-500 text-lg leading-relaxed max-w-2xl">
                Transaction failures occur rarely with our services — we ensure the best success rate for every payment, as reliable as banks themselves.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 items-start group">
            <div className="font-ledger text-brass-500 text-3xl md:text-4xl font-medium flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">03</div>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 tracking-tight">24x7 Support</h3>
              <p className="text-ink-500 text-lg leading-relaxed max-w-2xl">
                A well-documented, easy-to-integrate JSON API with round-the-clock integration support for developers.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-ink-100 text-center">
            <a href="https://agent.paynidipro.in" className="inline-flex items-center justify-center rounded-lg bg-ink-900 text-white text-sm font-semibold px-8 py-4 hover:bg-ink-800 transition-colors shadow-sm">
              Get Started Now
            </a>
        </div>
      </section>
    </div>
  );
};

export default BBPSPage;
