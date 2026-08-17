import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopBarLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => {
      setVisible(true);
      setProgress(30);
    }, 10);
    
    const t1 = setTimeout(() => setProgress(70), 100);
    const t2 = setTimeout(() => {
      setProgress(100);
      const t3 = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(t3);
    }, 300);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className="h-full bg-gradient-to-r from-[#4A90FF] to-[#22E67A] shadow-[0_0_8px_#4A90FF]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
