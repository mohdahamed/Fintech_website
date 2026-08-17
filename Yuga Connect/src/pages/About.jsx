import React from 'react';
import { Target, Eye, Heart, Users, Award, ShieldCheck, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { icon: <ShieldCheck size={28} />, title: "Trust First", desc: "Security is not a feature; it's our foundation. We handle every rupee with the utmost care." },
    { icon: <Zap size={28} />, title: "Speed Matters", desc: "In the digital age, speed is everything. Our systems are optimized for millisecond latency." },
    { icon: <Globe size={28} />, title: "Inclusive Growth", desc: "We build tools that empower businesses of all sizes, from local shops to global enterprises." },
    { icon: <Users size={28} />, title: "Customer Centric", desc: "Your success is our success. Our support team is available 24/7 to help you scale." }
  ];

  const milestones = [
    { year: "2023", title: "Inception", desc: "YUGA CONNECT was founded with a vision to simplify digital payments in India." },
    { year: "2024", title: "BBPS Launch", desc: "Became an official partner for Bharat Bill Pay System, enabling thousands of billers." },
    { year: "2025", title: "Enterprise Suite", desc: "Launched automated payout and settlement systems for large-scale businesses." },
    { year: "2026", title: "Global Vision", desc: "Expanding our footprint to support international payment collections." }
  ];

  return (
    <main>
      {/* Header */}
      <section className="page-header" style={{ padding: '120px 0' }}>
        <div className="container">
          <h1 className="page-title">Powering the Future <br />of Digital Finance</h1>
          <p className="page-subtitle">We are on a mission to build the most robust, secure, and user-friendly payment infrastructure for the next billion users.</p>
        </div>
      </section>

      {/* Vision/Mission */}
      <section>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="card" style={{ padding: '3rem', borderLeft: '6px solid var(--primary)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(0, 45, 114, 0.1)' }}><Target size={32} /></div>
              <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                To democratize financial technology by providing accessible, high-performance payment tools that help businesses grow, scale, and thrive in a digital-first economy.
              </p>
            </div>
            <div className="card" style={{ padding: '3rem', borderLeft: '6px solid var(--accent)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(123, 44, 191, 0.1)' }}><Eye size={32} /></div>
              <h2 style={{ marginBottom: '1.5rem' }}>Our Vision</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                To become the preferred global infrastructure for digital transactions, known for our absolute reliability, innovative engineering, and unwavering integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Values That Drive Us</h2>
            <p className="section-subtitle">Our culture is built on a set of core principles that guide every decision we make and every product we build.</p>
          </div>
          
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ margin: '0 auto 1.5rem', background: 'var(--white)' }}>{v.icon}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey So Far</h2>
            <p className="section-subtitle">From a bold idea to a leading fintech infrastructure provider.</p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--border)', transform: 'translateX(-50%)' }} className="desktop-only"></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  textAlign: i % 2 === 0 ? 'right' : 'left',
                  position: 'relative'
                }}>
                  <div className="card" style={{ width: '45%', padding: '2rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '1.5rem' }}>{m.year}</span>
                    <h4 style={{ margin: '0.5rem 0' }}>{m.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{m.desc}</p>
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '4px solid var(--white)',
                    boxShadow: '0 0 0 4px var(--bg-subtle)'
                  }} className="desktop-only"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 4rem', background: 'var(--bg-subtle)', border: 'none' }}>
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Ready to build the future?</h2>
              <p style={{ color: 'var(--text-muted)' }}>Join us on our mission to revolutionize the digital economy.</p>
            </div>
            <a href="https://agent.yugaconnect.com" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Login to Portal <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
