import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue } from 'framer-motion';

const CtaSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const prefersReducedMotion = useReducedMotion();
  const staticOffset = useMotionValue(0);

  // Parallax values
  const dynamicY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const dynamicY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y1 = prefersReducedMotion ? staticOffset : dynamicY1;
  const y2 = prefersReducedMotion ? staticOffset : dynamicY2;

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl shadow-brand-500/20 group">
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 transition-all duration-1000"></div>
            
            {/* Noise Overlay for Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            {/* Floating Shapes with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"
                />
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div 
                    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"
                />
            </motion.div>

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                Ready to build intelligent apps?
                </h2>
                <p className="text-xl text-brand-50 mb-10 max-w-2xl mx-auto font-medium">
                Start indexing your data today. No credit card required for the developer tier.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-brand-600 hover:bg-brand-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-xl shadow-black/5"
                    >
                        Get Started for Free
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-700/30 border border-white/30 text-white hover:bg-brand-700/50 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        Contact Sales <ArrowRight size={18} />
                    </motion.button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
