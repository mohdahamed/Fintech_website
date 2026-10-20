import React from 'react';

const AnimatedGradientBox = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Subtle soft backdrop accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#EEF4FF]/50 to-transparent blur-3xl opacity-60" />
    </div>
  );
};

export default AnimatedGradientBox;
