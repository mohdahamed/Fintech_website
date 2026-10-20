import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Merchant Stories', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(11,23,48,0.06)] border-b border-[#E5E9F0]' 
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E5E9F0]/60'
      }`}
    >
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between h-18">
          
          {/* Hype-Pay Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    active 
                      ? 'text-[#3267D6] bg-[#EEF4FF]' 
                      : 'text-[#182338] hover:text-[#3267D6] hover:bg-[#F7F8FA]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#3267D6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className="fintech-btn-primary text-sm inline-flex items-center gap-1.5 py-2.5 px-5 rounded-lg group shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#182338] hover:bg-[#F7F8FA] rounded-lg border border-[#E5E9F0] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-[#E5E9F0] ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 py-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.path)
                  ? 'text-[#3267D6] bg-[#EEF4FF]'
                  : 'text-[#182338] hover:bg-[#F7F8FA]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-[#E5E9F0]">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="w-full fintech-btn-primary text-center py-3 text-sm flex items-center justify-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
