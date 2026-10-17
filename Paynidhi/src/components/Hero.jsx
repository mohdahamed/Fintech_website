import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-ink-100">
      {/* Premium Subtle Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e4e2_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>

      {/* Soft Gradient Orb for premium feel */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brass-500/10 blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-5 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-200 bg-white/80 backdrop-blur-sm mb-8 shadow-sm">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-700">
              Digital Payments, Simplified
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-900 leading-[1.05] tracking-tight mb-6">
            One ledger for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-900 to-ink-600">
              every bill
            </span>
            , recharge & transfer.
          </h1>

          <p className="text-ink-500 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-lg">
            Niditi Solutions Private Limited runs the robust payment rails
            behind thousands of Indian retailers, reconciled instantly in one
            place.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="https://agent.paynidipro.in"
              className="inline-flex items-center justify-center rounded-lg bg-ink-900 text-white text-sm font-semibold px-8 py-4 hover:bg-ink-800 transition-all hover:shadow-[0_4px_12px_rgba(12,14,12,0.15)] hover:-translate-y-0.5"
            >
              Get Started Now
            </a>
            <Link
              to="/about"
              className="group text-ink-600 text-sm font-semibold hover:text-ink-900 transition-colors flex items-center gap-2 px-4 py-4"
            >
              Learn how it works
              <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-8 pt-8 border-t border-ink-200/60">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-ink-900">
                ₹2Cr+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ink-500 font-bold mt-1">
                Daily Volume
              </span>
            </div>
            <div className="w-px h-10 bg-ink-200"></div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-ink-900">
                10k+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ink-500 font-bold mt-1">
                Active Agents
              </span>
            </div>
            <div className="w-px h-10 bg-ink-200 hidden sm:block"></div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-display text-2xl font-bold text-ink-900">
                24/7
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ink-500 font-bold mt-1">
                Support Desk
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Product UI Mockup */}
        <div className="relative lg:pl-10">
          {/* Main Dashboard Widget */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 ring-1 ring-ink-900/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-ink-100 flex items-center justify-between bg-paper/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brass-400 to-brass-600 flex items-center justify-center text-white shadow-sm">
                  <i className="fas fa-wallet text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-ink-900 tracking-tight">
                    Today's Ledger
                  </div>
                  <div className="text-[11px] text-ink-400 font-ledger font-medium">
                    20 Sep 2026
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-[10px] font-bold tracking-widest uppercase border border-sage-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
                Live
              </div>
            </div>

            {/* Summary Cards */}
            <div className="p-6 grid grid-cols-2 gap-4 border-b border-ink-100 bg-white/50">
              <div>
                <div className="text-[10px] text-ink-400 font-bold uppercase tracking-widest mb-1.5">
                  Total Credit
                </div>
                <div className="font-ledger text-3xl font-semibold text-ink-900 tracking-tight">
                  ₹48,920.00
                </div>
              </div>
              <div>
                <div className="text-[10px] text-ink-400 font-bold uppercase tracking-widest mb-1.5">
                  Total Debit
                </div>
                <div className="font-ledger text-3xl font-semibold text-ink-900 tracking-tight">
                  ₹12,410.00
                </div>
              </div>
            </div>

            {/* Transaction List */}
            <div className="p-6 space-y-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-ink-400 mb-2">
                Recent Transactions
              </div>

              <div className="flex items-center justify-between group/txn cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-paper border border-ink-100 flex items-center justify-center text-ink-600 group-hover/txn:bg-ink-900 group-hover/txn:text-white group-hover/txn:border-ink-900 transition-colors">
                    <i className="fas fa-bolt text-xs"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      BBPS — Electricity
                    </div>
                    <div className="text-[11px] text-ink-400 font-medium">
                      ID: TXN-8932
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-ledger text-sm font-bold text-ink-900">
                    ₹1,240.00
                  </div>
                  <div className="text-[11px] text-sage-600 font-bold tracking-wide uppercase mt-0.5">
                    Success
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between group/txn cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-paper border border-ink-100 flex items-center justify-center text-ink-600 group-hover/txn:bg-ink-900 group-hover/txn:text-white group-hover/txn:border-ink-900 transition-colors">
                    <i className="fas fa-mobile-alt text-xs"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      Mobile Recharge
                    </div>
                    <div className="text-[11px] text-ink-400 font-medium">
                      Jio Prepaid
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-ledger text-sm font-bold text-ink-900">
                    ₹299.00
                  </div>
                  <div className="text-[11px] text-sage-600 font-bold tracking-wide uppercase mt-0.5">
                    Success
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between group/txn cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-paper border border-ink-100 flex items-center justify-center text-ink-600 group-hover/txn:bg-ink-900 group-hover/txn:text-white group-hover/txn:border-ink-900 transition-colors">
                    <i className="fas fa-id-card text-xs"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      PAN Application
                    </div>
                    <div className="text-[11px] text-ink-400 font-medium">
                      New Request
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-ledger text-sm font-bold text-ink-900">
                    ₹107.00
                  </div>
                  <div className="text-[11px] text-brass-600 font-bold tracking-wide uppercase mt-0.5">
                    Pending
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Notification - Animated */}
          <div className="absolute -bottom-6 -left-8 bg-white/95 backdrop-blur-md border border-ink-200/60 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex items-center gap-4 w-72 hidden md:flex">
            <div className="w-10 h-10 rounded-full bg-sage-50 text-sage-600 flex items-center justify-center shrink-0 border border-sage-100">
              <i className="fas fa-check text-sm"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-ink-900">
                Settlement Complete
              </div>
              <div className="text-xs text-ink-500 font-medium mt-0.5">
                Bank transfer successful
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
