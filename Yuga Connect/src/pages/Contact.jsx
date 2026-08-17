import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will get back to you soon.');
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Have questions? We're here to help. Reach out to our team for any inquiries or support.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Get in Touch</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                Whether you're looking to integrate our services or have a general question, our team is ready to assist you.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}><Mail size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>support@yugaconnect.com</p>
                    <p style={{ color: 'var(--text-muted)' }}>sales@yugaconnect.com</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}><Phone size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>+91 12345 67890</p>
                    <p style={{ color: 'var(--text-muted)' }}>Mon - Sat, 9am - 6pm</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}><MapPin size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>123, Fintech Hub, Bandra Kurla Complex,</p>
                    <p style={{ color: 'var(--text-muted)' }}>Mumbai, Maharashtra 400051</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-control" placeholder="+91 00000 00000" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="feature-icon" style={{ margin: '0 auto 1.5rem' }}><MessageSquare size={32} /></div>
          <h2 className="section-title">Common Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
            <div className="card" style={{ border: 'none' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>How long does integration take?</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Most businesses can go live within 24-48 hours after documentation submission and technical integration.</p>
            </div>
            <div className="card" style={{ border: 'none' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>What are the transaction fees?</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We offer competitive pricing based on your transaction volume. Contact our sales team for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
