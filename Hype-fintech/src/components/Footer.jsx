import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import logo from '../assets/Logo2Foot.png';

const Footer = () => {
  return (
    <footer className="bg-brand-card rounded section-padding m-1">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Link to="/">
                <img src={logo} alt="HYPE Logo" className="h-12 w-auto" />
              </Link>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              The hyper payments engine built for scale. Fast, secure, and developer-friendly financial infrastructure for the modern web.
            </p>
            {/* Social Links old */}
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Payments</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Cards</Link></li>
              <li><Link to="/testimonials" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Customers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Social Links</h4>
            <div className="flex gap-4">
              <a href="https://x.com/CodersWaap" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/linkedin.comwaapcoders.in/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://waapcoders.in/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/waap.coders?igsh=NXp6b3BkN2pxZzY0&utm_source=ig_contact_invite" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Hyper Payments Engine. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
