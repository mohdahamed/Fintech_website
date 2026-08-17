import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

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
    <nav className="fixed top-0 w-full z-50 bg-[#020817]/90 backdrop-blur-xl border-b border-[#233452]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Link */}
          <Link to="/" className="flex items-center">
            <div className="h-14 sm:h-16 flex items-center justify-center overflow-hidden">
              <img 
                src="/Logo.png" 
                alt="AuraPay Logo" 
                className="h-full max-h-14 sm:max-h-16 w-auto object-contain rounded" 
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                  location.pathname === link.path ? 'text-[#3B82F6] font-bold' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://agent.aurapay.co.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg"
            >
              Get Started <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#111B2F] border border-[#233452] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#050816] border-b border-[#233452] shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-[#111B2F] text-[#3B82F6] font-bold border border-[#233452]' 
                      : 'text-slate-300 hover:bg-[#111B2F] hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <a 
                  href="https://agent.aurapay.co.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full bg-[#3B82F6] text-white px-5 py-3 rounded-lg text-base font-bold shadow-lg" 
                  onClick={() => setIsOpen(false)}
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
