import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="YUGA CONNECT" className="logo-img" />
            </Link>
            <p>Connecting Money. Empowering Futures. The next generation digital payment ecosystem for modern businesses.</p>
            <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1.5rem' }}>
              <a href="https://www.facebook.com/people/Waapcoders/61586169614434/" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
              <a href="https://x.com/CodersWaap" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
              <a href="https://www.linkedin.com/company/linkedin.comwaapcoders.in/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://www.instagram.com/waap.coders?igsh=NXp6b3BkN2pxZzY0&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <Link to="/payin" className="footer-link">Payin Solutions</Link>
              <Link to="/payout" className="footer-link">Payout Services</Link>
              <Link to="/bbps" className="footer-link">BBPS Integration</Link>
              <Link to="/contact" className="footer-link">API Documentation</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
              <Link to="/contact" className="footer-link">Privacy Policy</Link>
              <Link to="/contact" className="footer-link">Terms of Service</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:support@yugaconnect.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} /> support@yugaconnect.com
              </a>
              <a href="tel:+911234567890" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} /> +91 12345 67890
              </a>
              <div className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} /> Mumbai, India
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YUGA CONNECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
