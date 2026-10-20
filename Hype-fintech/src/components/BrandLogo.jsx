import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = ({ variant = 'dark', className = '', showTagline = false }) => {
  const isLight = variant === 'light'; // Light text for dark backgrounds (e.g. footer)
  
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Original Geometric Fintech Mark */}
      <div className="relative w-9 h-9 rounded-lg bg-[#3267D6] flex items-center justify-center shadow-sm group-hover:bg-[#2558C7] transition-colors shrink-0">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-5 h-5 text-white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized interconnected payment pulse / H-node */}
          <path 
            d="M5 6V18M19 6V18M5 12H19" 
            stroke="currentColor" 
            strokeWidth="2.75" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`text-xl font-extrabold tracking-tight leading-none ${isLight ? 'text-white' : 'text-[#0B1730]'}`}>
          Hype<span className="text-[#3267D6]">-Pay</span>
        </span>
        {showTagline && (
          <span className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${isLight ? 'text-slate-400' : 'text-[#667085]'}`}>
            Business Payments
          </span>
        )}
      </div>
    </Link>
  );
};

export default BrandLogo;
