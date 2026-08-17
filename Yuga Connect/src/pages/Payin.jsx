import React from 'react';
import { CreditCard, Smartphone, Globe, ShieldCheck, Zap, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Payin = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Instant Onboarding",
      desc: "Start accepting payments in minutes with our fully digital KYC and instant activation process."
    },
    {
      icon: <Globe size={24} />,
      title: "100+ Payment Modes",
      desc: "Support for all major Credit/Debit cards, 50+ Netbanking banks, UPI, and popular Wallets."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "PCI-DSS Compliant",
      desc: "Bank-grade security with industry-standard encryption and advanced fraud detection systems."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-time Analytics",
      desc: "Comprehensive dashboard to track every transaction, settlement, and customer insight in real-time."
    }
  ];

  const solutions = [
    {
      title: "Standard Checkout",
      desc: "A pre-built, responsive checkout page that works seamlessly on all devices.",
      list: ["Custom Branding", "Retry Logic", "Multiple Languages"]
    },
    {
      title: "Payment Links",
      desc: "Create and share payment links via SMS, Email, or WhatsApp. No website needed.",
      list: ["Instant Creation", "Partial Payments", "Automated Reminders"]
    },
    {
      title: "Subscription Payments",
      desc: "Automate recurring billing for your customers with flexible subscription plans.",
      list: ["e-Mandate Support", "UPI Autopay", "Flexible Cycles"]
    }
  ];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="hero-tagline" style={{ color: 'rgba(255,255,255,0.8)' }}>Payment Collection Simplified</span>
          <h1 className="page-title">Payin Solutions</h1>
          <p className="page-subtitle">The most advanced and reliable payment gateway infrastructure for modern Indian businesses.</p>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div className="feature-icon" style={{ marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">One Platform, Multiple Solutions</h2>
            <p className="section-subtitle">We offer specialized products to handle every type of incoming payment flow.</p>
          </div>
          
          <div className="grid-3">
            {solutions.map((s, i) => (
              <div key={i} className="card" style={{ borderTop: i === 1 ? '4px solid var(--accent)' : '4px solid var(--primary)' }}>
                <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{s.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {s.list.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                      <CheckCircle size={16} color="var(--primary)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section>
        <div className="container">
          <div className="contact-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Developer-First <br />Integration</h2>
              <p style={{ color: 'var(--text-muted)', margin: '1.5rem 0' }}>
                Our APIs are built by developers, for developers. Clean documentation, powerful SDKs, and easy-to-use plugins for all major platforms.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-subtle)', border: 'none' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>REST APIs</h4>
                  <p style={{ fontSize: '0.85rem' }}>Seamless server-side integration with robust error handling.</p>
                </div>
                <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-subtle)', border: 'none' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Mobile SDKs</h4>
                  <p style={{ fontSize: '0.85rem' }}>Native Android and iOS SDKs for the smoothest mobile experience.</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: '3rem', background: 'var(--primary)', color: 'var(--white)' }}>
              <h3>Ready to start?</h3>
              <p style={{ opacity: 0.8, margin: '1.5rem 0 2rem' }}>Join thousands of merchants who trust YUGA CONNECT for their payment needs.</p>
              <a href="https://agent.yugaconnect.com" className="btn" style={{ background: 'var(--white)', color: 'var(--primary)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                Login to Portal <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payin;
