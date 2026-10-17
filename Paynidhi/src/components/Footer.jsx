import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/brand/logo.png';

const Footer = () => {
  return (
    <footer className="bg-ink-900 text-ink-100 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        <div className="md:col-span-5 lg:col-span-4">
          <Link to="/">
            <img src={logo} alt="Paynidi Logo" className="h-12 w-auto mb-6" />
          </Link>
          <p className="text-[13px] text-ink-300 leading-relaxed pr-8 font-medium">
            A single ledger for recharge, bill payments, and money transfer — built for India's retail payment network.
          </p>
        </div>
        
        <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
          <h4 className="font-display font-bold text-white text-[16px] mb-6">Quick Links</h4>
          <ul className="space-y-3 text-[13px] text-ink-300 font-medium">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-3 lg:col-span-2">
          <h4 className="font-display font-bold text-white text-[16px] mb-6">Services</h4>
          <ul className="space-y-3 text-[13px] text-ink-300 font-medium">
            <li><Link to="/recharge" className="hover:text-white transition-colors">Recharge</Link></li>
            <li><Link to="/bbps" className="hover:text-white transition-colors">BBPS</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-12 lg:col-span-2">
          <h4 className="font-display font-bold text-white text-[16px] mb-6">Contact</h4>
          <ul className="space-y-3 text-[13px] text-ink-300 font-medium">
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-brass-500 mt-1 text-[11px]"></i>
              <span>India</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-envelope text-brass-500 mt-1 text-[11px]"></i>
              <span>support@paynidipro.in</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-phone-alt text-brass-500 mt-1 text-[11px]"></i>
              <span>919450751274</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-5 py-6 text-[11px] text-ink-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Paynidi — All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter text-sm"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin-in text-sm"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f text-sm"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
