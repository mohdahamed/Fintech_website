import React, { useState } from 'react';
import { Shield, Zap, BarChart3, CheckCircle2, Menu, X, ArrowRight, LogOut, User } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import SignupModal from './SignupModal';
import Footer from './Footer';

// --- Navbar Component ---
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const location = useLocation();
    const { user, logout, setShowSignup, showSignup } = useAuth();
    
    const navLinks = [
        { name: 'Features', href: '/features' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
        <nav className="fixed w-full max-h-lg z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center gap-4">
                <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter text-emerald-400 hover:text-emerald-300 transition-colors flex-shrink-0">
                    VORTEX<span className="text-white">PAY</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`transition-colors text-xs lg:text-sm font-medium ${location.pathname === link.href
                                ? 'text-emerald-400'
                                : 'text-slate-300 hover:text-emerald-400'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
                    {user ? (
                        <div className="relative">
                            <button 
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-white hover:border-emerald-500 transition-all"
                            >
                                <User size={18} />
                                <span className="text-sm font-medium">{user.email.split('@')[0]}</span>
                            </button>
                            
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-emerald-500/20 rounded-xl shadow-xl z-10 animated-in">
                                    <div className="p-3 border-b border-emerald-500/10">
                                        <p className="text-xs text-slate-400">Logged in as</p>
                                        <p className="text-sm font-bold text-white truncate">{user.email}</p>
                                    </div>
                                    <button 
                                        onClick={() => { logout(); setShowUserMenu(false); }}
                                        className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 flex items-center gap-2 transition-all rounded-b-lg"
                                    >
                                        <LogOut size={16} /> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button 
                            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-2 rounded-full font-bold transition-all transform cursor-pointer hover:scale-105 active:scale-95"
                            onClick={() => setShowSignup(true)}
                        >
                            Login
                        </button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10 p-4 sm:p-6 flex flex-col space-y-3 sm:space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base sm:text-lg transition-colors py-2 px-2 rounded ${location.pathname === link.href
                                ? 'text-emerald-400 bg-emerald-500/10'
                                : 'text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/5'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {user ? (
                        <button 
                            onClick={() => { logout(); setIsOpen(false); }}
                            className="text-base sm:text-lg text-red-400 hover:text-red-300 flex items-center gap-2 transition-colors mt-4 pt-4 border-t border-white/10 py-2 px-2"
                        >
                            <LogOut size={18} /> Logout
                        </button>
                    ) : (
                        <button 
                            onClick={() => { setShowSignup(true); setIsOpen(false); }}
                            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-3 rounded-full font-bold transition-all w-full mt-4 text-base sm:text-lg"
                        >
                            Open Account
                        </button>
                    )}
                </div>
            )}
        </nav>
        
        <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
        
        <Outlet />
        <Footer />
        </>
    );
};
export default Navbar;