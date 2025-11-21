import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const INTERACTIVE_SELECTORS = 'a, button, [role="button"], input, textarea, select';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const hoverScale = useSpring(1, { damping: 25, stiffness: 300 });
  const hoverBackground = useMotionValue('transparent');
  const hoverBorder = useMotionValue('rgba(129, 140, 248, 0.45)');
  const rafRef = useRef<number>();

  useEffect(() => {
    const updateHoverState = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      const isInteractive = element?.closest(INTERACTIVE_SELECTORS);

      if (isInteractive) {
        hoverScale.set(2.4);
        hoverBackground.set('rgba(59, 130, 246, 0.12)');
        hoverBorder.set('rgba(59, 130, 246, 0.3)');
      } else {
        hoverScale.set(1);
        hoverBackground.set('transparent');
        hoverBorder.set('rgba(129, 140, 248, 0.45)');
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
      });
      updateHoverState(event.target);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [cursorX, cursorY, hoverBackground, hoverBorder, hoverScale]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-600 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] hidden md:block border"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: hoverScale,
          backgroundColor: hoverBackground,
          borderColor: hoverBorder,
        }}
      />
    </>
  );
};

export default CustomCursor;
