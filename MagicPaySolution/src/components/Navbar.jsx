import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Payin', path: '/payin' },
    { name: 'Payout', path: '/payout' },
    { name: 'BBPS', path: '/bbps' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 premium-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Magic Pay Solution Logo"
                className="h-12 sm:h-16 w-auto rounded object-contain transition-all duration-300 group-hover:scale-[1.03]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-2 ${isActive(link.path)
                  ? 'text-royal-600'
                  : 'text-slate-600 hover:text-navy-900'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://agent.magicpaysolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm cursor-pointer"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-navy-900 hover:bg-slate-50 focus:outline-none transition-colors duration-200 cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors ${isActive(link.path)
                  ? 'text-royal-600 bg-blue-50/50'
                  : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 px-3 flex flex-col space-y-3">
              <a
                href="https://agent.magicpaysolution.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
