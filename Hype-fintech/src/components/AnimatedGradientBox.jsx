import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBox = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-brand-dark/80 z-10 
                      [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]">
      </div>
      
      {/* Cyan/Blue floating gradient orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -100, 100, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px]"
      />
      
      {/* Deep Blue floating gradient orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, 100, -100, -50, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[150px]"
      />
      
      {/* Secondary accent orb */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-hype opacity-20 rounded-full blur-[120px]"
      />
    </div>
  );
};

export default AnimatedGradientBox;
