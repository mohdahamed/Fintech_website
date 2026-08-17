import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, User, Menu, X } from 'lucide-react';
import logo from '../assets/Logo2.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMobileMenu} className="flex items-center">
              <img src={logo} alt="HYPE Logo" className="h-12 md:h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-brand-cyan transition-colors px-3 py-2 rounded-md font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 pl-2 pr-4 py-1.5 bg-brand-card border border-white/10 rounded-full hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-7 h-7 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center text-xs font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-white">{user.name.split(' ')[0]}</span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-brand-card border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 py-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-slate-800 transition-colors"
                      >
                        <LogOut className="w-4 h-4" /> Log out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="bg-gradient-hype text-white px-8 py-2.5 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95">
                    Log In
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className="block text-lg font-medium hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 text-slate-300 hover:text-white"
                  >
                    <LayoutDashboard size={20} /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 text-red-400 hover:text-red-300 text-left"
                  >
                    <LogOut size={20} /> Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-hype text-white px-6 py-3 rounded-full font-bold text-center hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
