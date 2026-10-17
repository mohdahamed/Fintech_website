import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/brand/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "text-ink-900 font-bold border-b-2 border-ink-900 pb-1" : "text-ink-600 font-semibold hover:text-ink-900 transition-colors";
  };

  const isMobileActive = (path) => {
    return location.pathname === path ? "text-ink-900 text-sm font-bold" : "text-ink-600 text-sm font-semibold hover:text-ink-900";
  };

  return (
    <header className="bg-white border-b border-ink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <Link to="/">
            <img src={logo} alt="Paynidi Logo" className="h-12 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-[14px]">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
          <Link to="/services" className={isActive("/services")}>Services</Link>
          <Link to="/contact" className={isActive("/contact")}>Contact</Link>
        </nav>
        
        {/* Right Buttons */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-3">
          <a href="https://agent.paynidipro.in" className="rounded-lg border border-ink-200 bg-white text-ink-900 hover:bg-paper text-[13px] font-bold px-5 py-2.5 transition-colors">
            Log In
          </a>
          <a href="https://agent.paynidipro.in" className="rounded-lg bg-ink-900 hover:bg-ink-800 text-white text-[13px] font-bold px-5 py-2.5 transition-colors">
            Agent Portal
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ink-800 focus:outline-none w-10 h-10 flex items-center justify-center rounded-md hover:bg-paper transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-ink-100 absolute w-full left-0 top-[72px] shadow-sm">
          <div className="flex flex-col px-5 py-6 space-y-5">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={isMobileActive("/")}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={isMobileActive("/about")}>About</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={isMobileActive("/services")}>Services</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={isMobileActive("/contact")}>Contact</Link>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-ink-100">
              <a href="https://agent.paynidipro.in" className="text-center border border-ink-200 rounded-lg text-ink-700 text-sm font-medium px-4 py-2.5 hover:bg-paper transition-colors">Log In</a>
              <a href="https://agent.paynidipro.in" className="text-center rounded-lg bg-ink-900 text-white text-sm font-medium px-4 py-2.5 hover:bg-ink-800 transition-colors">Agent Portal</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
