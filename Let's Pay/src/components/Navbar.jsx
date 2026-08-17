import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import LogoImg from '../assets/Logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pay-In', path: '/pay-in' },
    { name: 'Payout', path: '/payout' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020817]/85 backdrop-blur-xl border-b border-[#233452]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <div className="h-12 bg-white px-2.5 py-1 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden">
              <img src={LogoImg} alt="Let's Pay Logo" className="h-full w-auto object-contain" />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#4A90FF] ${
                  location.pathname === link.path ? 'text-[#4A90FF]' : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://agent.letspay.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all blue-glow">
              Get Started <ArrowRight size={16} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-elevated absolute top-20 left-0 w-full border-b border-[var(--color-border-color)]"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-elevated)] rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://agent.letspay.co.in/" target="_blank" rel="noopener noreferrer" className="block mt-4 text-center bg-[var(--color-primary)] text-white px-5 py-3 rounded-lg text-base font-medium" onClick={() => setIsOpen(false)}>
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
