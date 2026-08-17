import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, LogIn, User, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="YUGA CONNECT" className="logo-img" />
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginLeft: '1.5rem', borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem' }}>
            <a href="https://agent.yugaconnect.com" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LogIn size={20} /> Login
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <a href="https://agent.yugaconnect.com" className="btn btn-primary" onClick={closeMenu} style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <LogIn size={20} /> Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
