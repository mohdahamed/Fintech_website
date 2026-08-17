import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Mail } from 'lucide-react';
import LogoImg from '../assets/Logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-color)] pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="h-12 bg-white px-2.5 py-1 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden">
                <img src={LogoImg} alt="Let's Pay Logo" className="h-full w-auto object-contain" />
              </div>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
              Powering modern payment infrastructure for ambitious businesses worldwide. Scalable, secure, and blazing fast.
            </p>
            <div className="text-[var(--color-text-muted)] text-xs space-y-1.5 mb-6">
              <p className="font-semibold text-white/90">LETSPAY</p>
              <p>Email: <a href="mailto:support@letspay.co.in" className="hover:text-[#4A90FF] transition-colors">support@letspay.co.in</a></p>
              <p>WhatsApp Chat: <a href="https://wa.me/919177791100" className="hover:text-[#4A90FF] transition-colors">+91 91777 91100</a></p>
              <p>HQ: #21 MIND SPACE RAHEJA IT PARK HI TECH CITY HYDERABAD 500081 TELANGANA INDIA.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors"><Globe size={20} /></a>
              <a href="mailto:support@letspay.co.in" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/pay-in" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Pay-In Collection</Link></li>
              <li><Link to="/payout" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Payouts Engine</Link></li>
              <li><Link to="/pay-in" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Payment Links</Link></li>
              <li><Link to="/payout" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Smart Routing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Support Center</Link></li>
              <li><Link to="/faqs" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/about" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-[var(--color-text-muted)] hover:text-[#4A90FF] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} LETSPAY. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
