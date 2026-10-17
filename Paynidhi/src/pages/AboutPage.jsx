import React from 'react';
import CTA from '../components/CTA';

const AboutPage = () => {
  const values = [
    {
      title: "Trust & Transparency",
      description: "We believe in clear pricing, instant reporting, and zero hidden fees. What you see is exactly what you get.",
      icon: "fa-handshake"
    },
    {
      title: "Uncompromising Security",
      description: "We treat every transaction with bank-grade encryption to protect retailers and their customers alike.",
      icon: "fa-shield-check"
    },
    {
      title: "Relentless Speed",
      description: "Time is money. Our infrastructure is built to process transactions and settlements instantly, without delays.",
      icon: "fa-bolt"
    },
    {
      title: "Agent First Approach",
      description: "We succeed only when our retail agents succeed. Our 24/7 support ensures you're never left in the dark.",
      icon: "fa-headset"
    }
  ];

  return (
    <>
      {/* Hero Section for About Page */}
      <section className="bg-white py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-brass-600 mb-4">
            Our Story
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-900 mb-6 max-w-4xl mx-auto leading-tight">
            Empowering India's retail network with seamless digital payments.
          </h1>
          <p className="text-ink-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Niditi Solutions Private Limited was founded with a single mission: to make financial services accessible, reliable, and profitable for retailers across the country.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-paper py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-900 mb-6 shadow-sm">
                <i className="fas fa-bullseye text-lg"></i>
              </div>
              <h2 className="font-display text-3xl font-semibold text-ink-900 mb-4">Our Mission</h2>
              <p className="text-ink-500 text-base leading-relaxed">
                To build the most reliable and efficient digital payment infrastructure for Indian retailers. We strive to provide a single, unified ledger that simplifies BBPS, mobile recharges, and money transfers, allowing agents to process transactions with absolute confidence and zero downtime.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-900 mb-6 shadow-sm">
                <i className="fas fa-eye text-lg"></i>
              </div>
              <h2 className="font-display text-3xl font-semibold text-ink-900 mb-4">Our Vision</h2>
              <p className="text-ink-500 text-base leading-relaxed">
                To bridge the digital financial divide across India by transforming every local retail shop into a powerful, modernized digital banking hub. We envision a future where financial inclusion is driven by the very merchants who serve their communities every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section (Extracted from original About) */}
      <section className="bg-white py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-ink-900">
              By the numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-ink-200">
            <div>
              <div className="font-ledger text-4xl font-semibold text-ink-900 mb-2">10K+</div>
              <div className="text-xs text-ink-500 uppercase tracking-wide font-medium">Active Retailers</div>
            </div>
            <div>
              <div className="font-ledger text-4xl font-semibold text-ink-900 mb-2">28</div>
              <div className="text-xs text-ink-500 uppercase tracking-wide font-medium">States Served</div>
            </div>
            <div>
              <div className="font-ledger text-4xl font-semibold text-ink-900 mb-2">99.8%</div>
              <div className="text-xs text-ink-500 uppercase tracking-wide font-medium">Platform Uptime</div>
            </div>
            <div>
              <div className="font-ledger text-4xl font-semibold text-ink-900 mb-2">24/7</div>
              <div className="text-xs text-ink-500 uppercase tracking-wide font-medium">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-brass-600 mb-4">
              Our Principles
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
              The values that drive us forward
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-ink-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-ink-50 flex items-center justify-center text-ink-900 mb-5">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-3">{value.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default AboutPage;
