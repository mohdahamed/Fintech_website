import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-[#233452] pt-16 pb-10 mt-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Evenly Balanced 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">

          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <div className="h-16 py-1 flex items-center justify-start overflow-hidden">
                <img src="/Logo.png" alt="AuraPay Logo" className="h-full w-auto object-contain rounded" />
              </div>
            </Link>
            <p className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase">
              SIMPLE. SMART. SECURE.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Powering modern payment infrastructure for ambitious businesses worldwide. Scalable, secure, and blazing fast.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://wa.me/919666423455" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#111B2F] border border-[#233452] text-slate-300 hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors" title="WhatsApp Chat"><MessageSquare size={18} /></a>
              <a href="https://aurapay.co.in/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#111B2F] border border-[#233452] text-slate-300 hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors" title="AuraPay Official Website"><Globe size={18} /></a>
              <a href="mailto:care.aurapay@gmail.com" className="p-2 rounded-lg bg-[#111B2F] border border-[#233452] text-slate-300 hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors" title="Email Support"><Mail size={18} /></a>
            </div>
          </div>

          {/* Column 2: Products (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/pay-in" className="text-slate-300 hover:text-[#3B82F6] transition-colors">Pay-In Collection</Link></li>
              <li><Link to="/payout" className="text-slate-300 hover:text-[#3B82F6] transition-colors">Payouts Engine</Link></li>
              <li><a href="https://agent.aurapay.co.in/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#3B82F6] transition-colors">Merchant Portal</a></li>
              <li><Link to="/pay-in" className="text-slate-300 hover:text-[#3B82F6] transition-colors">Payment Links</Link></li>
            </ul>
          </div>

          {/* Column 3: Company & Support (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-300 hover:text-[#3B82F6] transition-colors">About Us</Link></li>
              <li><Link to="/support" className="text-slate-300 hover:text-[#3B82F6] transition-colors">Support Center</Link></li>
              <li><Link to="/faqs" className="text-slate-300 hover:text-[#3B82F6] transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-[#3B82F6] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Corporate HQ (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Corporate Contact</h3>
            <p className="flex items-center gap-2 text-sm text-slate-300">
              <Mail size={15} className="text-[#3B82F6] shrink-0" />
              <a href="mailto:care.aurapay@gmail.com" className="hover:text-white transition-colors">care.aurapay@gmail.com</a>
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-300">
              <Phone size={15} className="text-[#22E67A] shrink-0" />
              <a href="https://wa.me/919666423455" className="hover:text-white transition-colors">+91 9666423455</a>
            </p>

            <div className="mt-3 bg-[#111B2F] border border-[#233452] p-4 rounded-2xl space-y-2 hover:border-[#3B82F6] transition-all">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#3B82F6] uppercase tracking-wider">
                <MapPin size={14} /> Corporate Headquarters
              </div>
              <div className="text-xs text-slate-300 space-y-0.5 leading-relaxed">
                <p className="font-bold text-white">#21 Mind Space Raheja IT Park</p>
                <p className="text-slate-300">Hi-Tech City, Hyderabad - 500081</p>
                <p className="text-slate-400">Telangana, India</p>
              </div>
              <a
                href="https://maps.google.com/?q=Raheja+Mindspace+IT+Park+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#3B82F6] hover:text-[#4A90FF] hover:underline pt-1 transition-colors"
              >
                Get Directions ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#233452] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} AuraPay. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
