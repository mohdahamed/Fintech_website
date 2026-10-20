import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Globe, Instagram, Mail, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-[#0B1730] text-white pt-16 pb-12 border-t border-[#182338]">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">

          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BrandLogo variant="light" showTagline={true} />
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Business-oriented payment solutions designed to simplify collections, disbursements, and utility bill operations across India.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2.5">
              <a 
                href="https://x.com/CodersWaap" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#3267D6] hover:border-[#3267D6] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/linkedin.comwaapcoders.in/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#3267D6] hover:border-[#3267D6] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://waapcoders.in/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Website"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#3267D6] hover:border-[#3267D6] transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/waap.coders?igsh=NXp6b3BkN2pxZzY0&utm_source=ig_contact_invite" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#3267D6] hover:border-[#3267D6] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-sm tracking-wide text-white uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Payment Collection (Pay In)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Business Payouts (Pay Out)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  BBPS Utility Payments
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                  Payment Links & Invoicing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm tracking-wide text-white uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-400 hover:text-white transition-colors">
                  Merchant Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-sm tracking-wide text-white uppercase mb-4">
              Contact Desk
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3267D6] shrink-0" />
                <a href="mailto:hello@hype-pay.com" className="hover:text-white transition-colors">
                  hello@hype-pay.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3267D6] shrink-0" />
                <a href="mailto:support@hype-pay.com" className="hover:text-white transition-colors">
                  support@hype-pay.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3267D6] shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Hype-Pay Technologies. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
            <Link to="/services" className="hover:text-slate-300 transition-colors">
              Terms & Service
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
