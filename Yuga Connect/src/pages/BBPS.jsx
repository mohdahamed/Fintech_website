import React from 'react';
import { FileText, Smartphone, Zap, Coffee, Tv, Wifi, ShieldCheck, CreditCard, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BBPS = () => {
  const categories = [
    { icon: <Zap size={24} />, name: 'Electricity', count: '70+ Boards' },
    { icon: <Smartphone size={24} />, name: 'Mobile Postpaid', count: 'All Operators' },
    { icon: <Wifi size={24} />, name: 'Broadband', count: '50+ Providers' },
    { icon: <Tv size={24} />, name: 'DTH', count: 'All Operators' },
    { icon: <Coffee size={24} />, name: 'Water & Gas', count: '100+ Cities' },
    { icon: <CreditCard size={24} />, name: 'Credit Card', count: 'Major Banks' },
  ];

  const benefits = [
    { title: "Instant Confirmation", desc: "Customers receive instant SMS and digital receipts for every successful payment." },
    { title: "Secure Transactions", desc: "Fully compliant with NPCI guidelines and industry security standards." },
    { title: "Multiple Modes", desc: "Support for UPI, Netbanking, Cards, and Wallet payments for all billers." }
  ];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="hero-tagline" style={{ color: 'rgba(255,255,255,0.8)' }}>NPCI Powered Bill Payments</span>
          <h1 className="page-title">BBPS Integration</h1>
          <p className="page-subtitle">Enable 20,000+ billers on your platform with a single, robust API integration via Bharat Bill Pay System.</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">One API for All Utilities</h2>
            <p className="section-subtitle">Connect your customers to thousands of billers across multiple categories instantly.</p>
          </div>
          
          <div className="grid-3">
            {categories.map((cat, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                <div className="feature-icon" style={{ flexShrink: 0, margin: 0 }}>{cat.icon}</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>{cat.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="contact-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>The Gold Standard of <br />Bill Payments</h2>
              <p style={{ color: 'var(--text-muted)', margin: '1.5rem 0' }}>
                BBPS is a centralized interoperable bill payment system in India. By integrating YUGA CONNECT BBPS, you get access to a reliable, NPCI-governed framework.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px' }}>
                    <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ marginBottom: '0.2rem' }}>{b.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><ShieldCheck size={48} /></div>
              <h3>RBI & NPCI Authorized</h3>
              <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
                Our BBPS stack is built on official standards ensuring your transactions are safe, compliant, and always processed.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ fontSize: '0.9rem', fontWeight: '500' }}>✓ 100% Interoperable</li>
                <li style={{ fontSize: '0.9rem', fontWeight: '500' }}>✓ End-to-End Encryption</li>
                <li style={{ fontSize: '0.9rem', fontWeight: '500' }}>✓ Centralized Dispute Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section>
        <div className="container">
           <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '4rem', border: 'none', background: '#f8fafc' }}>
             <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Developer First Docs</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Our unified API allows you to fetch bills and process payments with minimal code. We handle the complexity of different biller protocols for you.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://agent.yugaconnect.com" className="btn btn-primary">Login to Portal</a>
                  <Link to="/contact" className="btn btn-outline">View Docs</Link>
                </div>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--accent)' }}>POST</span> /v1/bills/fetch <br />
                  {`{`} <br />
                  &nbsp;&nbsp;"biller_id": "MSEB00001", <br />
                  &nbsp;&nbsp;"customer_id": "1234567890" <br />
                  {`}`}
                </div>
             </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default BBPS;
