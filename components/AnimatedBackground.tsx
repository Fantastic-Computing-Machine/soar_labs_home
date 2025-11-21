import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(86,100,245,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(11,200,169,0.12),_transparent_60%)]" />

      {!prefersReducedMotion && (
        <>
          <motion.div
            aria-hidden
            animate={{
              scale: [1, 1.08, 1],
              x: [0, 35, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-brand-200/30 blur-[80px]"
            style={{ willChange: 'transform' }}
          />
          <motion.div
            aria-hidden
            animate={{
              scale: [1, 1.05, 1],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent-200/30 blur-[70px]"
            style={{ willChange: 'transform' }}
          />
        </>
      )}

      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
