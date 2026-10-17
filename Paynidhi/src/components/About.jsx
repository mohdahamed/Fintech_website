import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="bg-white border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Text Content */}
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-brass-600 mb-4">
              About Paynidi Pro
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 leading-tight mb-6">
              Trusted across India's retail payment network
            </h2>
            <p className="text-ink-500 text-base leading-relaxed mb-8">
              Niditi Solutions Private Limited simplifies financial transactions for retailers, distributors and agents nationwide. We provide a secure, dependable destination for everyday payments, from bill settlements to mobile recharges, operating on a robust infrastructure built for scale.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-900 border-b border-ink-900 pb-0.5 hover:text-brass-600 hover:border-brass-600 transition-colors">
              Read our story
              <i className="fas fa-arrow-right text-[10px]"></i>
            </Link>
          </div>
          
          {/* Right Metrics Strip - Clean fintech style */}
          <div className="bg-paper rounded-xl p-8 border border-ink-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              <div className="relative sm:after:content-[''] sm:after:absolute sm:after:right-0 sm:after:top-2 sm:after:bottom-2 sm:after:w-px sm:after:bg-ink-200">
                <div className="font-ledger text-3xl md:text-4xl text-ink-900 mb-2">10K+</div>
                <div className="text-[11px] font-medium text-ink-500 uppercase tracking-wide">Active Retailers</div>
              </div>
              <div>
                <div className="font-ledger text-3xl md:text-4xl text-ink-900 mb-2">28</div>
                <div className="text-[11px] font-medium text-ink-500 uppercase tracking-wide">States Served</div>
              </div>
              <div className="relative sm:after:content-[''] sm:after:absolute sm:after:right-0 sm:after:top-2 sm:after:bottom-2 sm:after:w-px sm:after:bg-ink-200 border-t border-ink-200 pt-10 sm:border-t-0 sm:pt-0">
                <div className="font-ledger text-3xl md:text-4xl text-ink-900 mb-2">99.8%</div>
                <div className="text-[11px] font-medium text-ink-500 uppercase tracking-wide">Uptime</div>
              </div>
              <div className="border-t border-ink-200 pt-10 sm:border-t-0 sm:pt-0">
                <div className="font-ledger text-3xl md:text-4xl text-ink-900 mb-2">24/7</div>
                <div className="text-[11px] font-medium text-ink-500 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
