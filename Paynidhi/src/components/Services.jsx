import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="bg-paper border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-ink-200 bg-white mb-6 shadow-sm">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-ink-700">Our Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-tight tracking-tight">
            Financial infrastructure for your <span className="text-brass-600">retail business.</span>
          </h2>
        </div>
        
        <div className="space-y-16">
          {/* BBPS Service */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="w-10 h-10 rounded bg-white border border-ink-200 flex items-center justify-center text-ink-900 mb-6 shadow-sm">
                <i className="fas fa-file-invoice text-sm"></i>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">BBPS Settlements</h3>
              <p className="text-ink-500 text-[15px] leading-relaxed mb-6">
                Bharat Bill Payment System integrated directly into your ledger. Process electricity, water, gas, and fastag payments with instant confirmation and automated reconciliation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[13px] text-ink-600">
                  <i className="fas fa-check text-sage-500 mt-0.5 text-[10px]"></i>
                  <span>Support for all major billers nationwide</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-ink-600">
                  <i className="fas fa-check text-sage-500 mt-0.5 text-[10px]"></i>
                  <span>Instant customer receipts generation</span>
                </li>
              </ul>
              <Link to="/bbps" className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-900 hover:text-brass-600 transition-colors">
                Explore BBPS <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-ink-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-3">
                <div className="bg-paper rounded-xl border border-ink-100 p-8 flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-5 border-b border-ink-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-ink-200 shadow-sm flex items-center justify-center">
                        <i className="fas fa-bolt text-brass-500 text-xs"></i>
                      </div>
                      <div className="text-sm font-bold text-ink-900 tracking-tight">Electricity Bill</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-sage-50 text-sage-600 text-[10px] font-bold tracking-widest uppercase border border-sage-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
                      Paid
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-[10px] text-ink-400 font-bold uppercase tracking-widest mb-1.5">Consumer No.</div>
                      <div className="text-sm font-semibold text-ink-900 font-mono">4589 2300 1192</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-ink-400 font-bold uppercase tracking-widest mb-1.5">Biller</div>
                      <div className="text-sm font-semibold text-ink-900">MSEDCL</div>
                    </div>
                  </div>
                  <div className="mt-3 bg-white border border-ink-200 shadow-sm rounded-lg p-5 flex items-center justify-between relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-sage-500"></div>
                    <span className="text-[13px] font-bold text-ink-600 uppercase tracking-widest">Total Amount</span>
                    <span className="font-ledger text-2xl font-bold text-ink-900 tracking-tight">₹2,450.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recharge Service */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-ink-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-3">
                <div className="bg-paper rounded-xl border border-ink-100 p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-white border border-ink-200 shadow-sm flex items-center justify-center">
                      <i className="fas fa-mobile-alt text-ink-600"></i>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-ink-900 tracking-tight font-mono">+91 98765 43210</div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-ink-400 mt-1">Airtel Prepaid • Maharashtra</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-brass-400 rounded-xl p-5 flex items-center justify-between cursor-pointer relative overflow-hidden group/plan">
                      <div className="absolute right-0 top-0 w-16 h-16 bg-brass-500/5 rounded-bl-full transition-transform group-hover/plan:scale-110"></div>
                      <div>
                        <div className="text-sm font-bold text-ink-900 mb-1 tracking-tight">Hero Unlimited</div>
                        <div className="text-[11px] font-semibold text-ink-500">2GB/Day • 28 Days</div>
                      </div>
                      <div className="font-ledger text-xl font-bold text-ink-900 tracking-tight relative z-10">₹299</div>
                    </div>
                    <div className="bg-white border border-ink-200 rounded-xl p-5 flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div>
                        <div className="text-sm font-bold text-ink-900 mb-1 tracking-tight">Data Add-on</div>
                        <div className="text-[11px] font-semibold text-ink-500">6GB Total • Active Validity</div>
                      </div>
                      <div className="font-ledger text-xl font-bold text-ink-900 tracking-tight">₹61</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="w-10 h-10 rounded bg-white border border-ink-200 flex items-center justify-center text-ink-900 mb-6 shadow-sm">
                <i className="fas fa-broadcast-tower text-sm"></i>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">Mobile & DTH Recharge</h3>
              <p className="text-ink-500 text-[15px] leading-relaxed mb-6">
                Fast, reliable recharge services for all major operators. Browse plans, execute transactions instantly, and track commissions in real-time on your dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[13px] text-ink-600">
                  <i className="fas fa-check text-sage-500 mt-0.5 text-[10px]"></i>
                  <span>All major telecom operators supported</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-ink-600">
                  <i className="fas fa-check text-sage-500 mt-0.5 text-[10px]"></i>
                  <span>Zero downtime architecture</span>
                </li>
              </ul>
              <Link to="/recharge" className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-900 hover:text-brass-600 transition-colors">
                Explore Recharge <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
