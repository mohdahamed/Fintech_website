import React from 'react';
import { Send, Users, Activity, Layers, CheckCircle, Clock, Zap, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Payout = () => {
  const modes = [
    { name: "IMPS", time: "Instant (24/7)", desc: "Perfect for immediate fund transfers up to ₹5 Lakhs." },
    { name: "NEFT", time: "30-60 Mins", desc: "Cost-effective for high-volume scheduled payments." },
    { name: "RTGS", time: "Real-time", desc: "Designed for high-value transfers above ₹2 Lakhs." },
    { name: "UPI", time: "Instant (24/7)", desc: "Quick payouts to VPA or linked mobile numbers." }
  ];

  const useCases = [
    {
      title: "Vendor Payments",
      desc: "Automate settlements to your suppliers and vendors with proper TDS management."
    },
    {
      title: "Employee Salaries",
      desc: "Disburse thousands of salaries in a single click with automated payout scheduling."
    },
    {
      title: "Customer Refunds",
      desc: "Improve customer trust by processing instant refunds back to the source."
    },
    {
      title: "Partner Commissions",
      desc: "Distribute commissions to your agents and partners across the country instantly."
    }
  ];

  return (
    <main>
      <section className="page-header" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <span className="hero-tagline" style={{ color: 'rgba(255,255,255,0.8)' }}>Automated Disbursement Engine</span>
          <h1 className="page-title">Payout Services</h1>
          <p className="page-subtitle">Disburse funds instantly to any bank account, UPI ID, or wallet, 24/7, even on bank holidays.</p>
        </div>
      </section>

      {/* Stats/Benefits */}
      <section>
        <div className="container">
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--accent)' }}><Zap size={32} /></div>
              <h3>99.9% Success Rate</h3>
              <p style={{ color: 'var(--text-muted)' }}>Intelligent routing ensures your payouts never fail due to bank downtimes.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--accent)' }}><Clock size={32} /></div>
              <h3>24x7x365 Availability</h3>
              <p style={{ color: 'var(--text-muted)' }}>Send money anytime, including weekends and public holidays.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--accent)' }}><ShieldAlert size={32} /></div>
              <h3>Smart Error Handling</h3>
              <p style={{ color: 'var(--text-muted)' }}>Automatic retries and instant notifications for failed transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payout Modes */}
      <section style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Multiple Payout Channels</h2>
            <p className="section-subtitle">Choose the mode that best fits your business needs and urgency.</p>
          </div>
          
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {modes.map((mode, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{mode.name}</h4>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.8rem', opacity: 0.7 }}>{mode.time}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tailored for Every Business</h2>
            <p className="section-subtitle">From startups to large enterprises, our payout engine scales with you.</p>
          </div>
          
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {useCases.map((use, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '2rem' }}>
                <div className="feature-icon" style={{ flexShrink: 0, backgroundColor: 'rgba(123, 44, 191, 0.1)', color: 'var(--accent)' }}><CheckCircle size={24} /></div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{use.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{use.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="card" style={{ padding: '4rem', background: 'var(--primary)', color: 'var(--white)', textAlign: 'center', borderRadius: '32px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Streamline Your Disbursements</h2>
            <p style={{ opacity: 0.8, maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
              Stop manual transfers. Start automating your payouts today with YUGA CONNECT's powerful API-driven engine.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="https://agent.yugaconnect.com" className="btn" style={{ background: 'var(--white)', color: 'var(--primary)', padding: '1rem 2.5rem' }}>Login to Portal</a>
              <Link to="/contact" className="btn btn-outline" style={{ border: '2px solid var(--white)', color: 'var(--white)', padding: '1rem 2.5rem' }}>Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payout;
