import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, RefreshCw, CreditCard, Send, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import heroIllustration from '../assets/hero-illustration.png';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <span className="hero-tagline">Secure Digital Payments</span>
              <h1 className="hero-title">Connecting Money. <br />Empowering Futures.</h1>
              <p className="hero-subtitle">
                The fastest and most secure way to handle digital payments. 
                Power your business with our robust fintech infrastructure.
              </p>
              <div className="hero-btns">
                <a href="https://agent.yugaconnect.com" className="btn btn-primary">Login to Portal</a>
                <Link to="/about" className="btn btn-outline">Learn More</Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-container"
            >
              <img src={heroIllustration} alt="YUGA CONNECT Fintech" className="hero-img-main" />
            </motion.div>
          </div>
        </div>
        {/* Subtle background graphic */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50%',
          height: '70%',
          background: 'var(--bg-subtle)',
          borderRadius: '100px 0 0 100px',
          zIndex: -1
        }}></div>
        <div className="connection-graphic line-pattern" style={{ inset: 0, opacity: 0.05 }}></div>
      </section>

      {/* Features Section */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why YUGA CONNECT?</h2>
            <p className="section-subtitle">We provide the building blocks for your business to scale with secure and efficient payment solutions.</p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <div className="feature-icon"><Zap size={32} /></div>
              <h3>Fast Processing</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Instant transaction processing to ensure your business never stops moving.
              </p>
            </div>
            
            <div className="card">
              <div className="feature-icon"><ShieldCheck size={32} /></div>
              <h3>Maximum Security</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Bank-grade encryption and advanced fraud prevention to keep your money safe.
              </p>
            </div>
            
            <div className="card">
              <div className="feature-icon"><RefreshCw size={32} /></div>
              <h3>High Reliability</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                99.9% uptime guarantee with multiple redundant server locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive fintech solutions tailored for modern business needs.</p>
          </div>
          
          <div className="grid-3">
            <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(0, 45, 114, 0.1)' }}><CreditCard size={32} /></div>
              <h3>Payin</h3>
              <p style={{ color: 'var(--text-muted)', margin: '1rem 0 1.5rem' }}>
                Accept payments from customers seamlessly with our integrated payment gateway.
              </p>
              <Link to="/payin" className="btn-link" style={{ color: 'var(--primary)', fontWeight: '600' }}>Explore Payin &rarr;</Link>
            </div>
            
            <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(123, 44, 191, 0.1)' }}><Send size={32} /></div>
              <h3>Payout</h3>
              <p style={{ color: 'var(--text-muted)', margin: '1rem 0 1.5rem' }}>
                Automate vendor payments, salaries, and bulk disbursements with ease.
              </p>
              <Link to="/payout" className="btn-link" style={{ color: 'var(--accent)', fontWeight: '600' }}>Explore Payout &rarr;</Link>
            </div>
            
            <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(0, 45, 114, 0.1)' }}><FileText size={32} /></div>
              <h3>BBPS</h3>
              <p style={{ color: 'var(--text-muted)', margin: '1rem 0 1.5rem' }}>
                Integrated bill payment services for utilities, recharges, and more.
              </p>
              <Link to="/bbps" className="btn-link" style={{ color: 'var(--primary)', fontWeight: '600' }}>Explore BBPS &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Trusted by 5000+ <br />Businesses Worldwide</h2>
              <p style={{ color: 'var(--text-muted)', margin: '1.5rem 0 2rem' }}>
                We believe in creating a transparent and secure financial environment. 
                Our platform is designed to handle complex payment flows while keeping the user experience simple.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} color="var(--accent)" />
                  <span style={{ fontWeight: '500' }}>Real-time Analytics Dashboard</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} color="var(--accent)" />
                  <span style={{ fontWeight: '500' }}>24/7 Priority Customer Support</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} color="var(--accent)" />
                  <span style={{ fontWeight: '500' }}>Easy API Integration</span>
                </li>
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--primary)', color: 'var(--white)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to transform your payments?</h3>
                <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Join the YUGA CONNECT ecosystem today and experience the difference.</p>
                <a href="https://agent.yugaconnect.com" className="btn" style={{ background: 'var(--white)', color: 'var(--primary)' }}>Login to Portal</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
