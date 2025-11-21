import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, useReducedMotion, useMotionValue } from 'framer-motion';
import { PIPELINE_STEPS } from '../constants';

const PipelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: connectorProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const connectorHeight = useTransform(connectorProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-white/30 backdrop-blur-3xl relative overflow-hidden" id="how-it-works">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px' 
      }}></div>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 font-bold tracking-wide uppercase text-xs mb-4 bg-brand-50/80 inline-block px-3 py-1 rounded-full border border-brand-100"
            >
              How It Works
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
            >
              From raw data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">instant answers</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
            >
                We handle the complexity of chunking, embedding, and retrieval so you can focus on building great AI experiences.
            </motion.p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Connecting Line (Vertical) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block">
             <motion.div 
                className="w-full bg-gradient-to-b from-brand-400 to-accent-400"
                style={{ height: connectorHeight }}
             />
          </div>
          
          {PIPELINE_STEPS.map((step, index) => (
            <PipelineStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PipelineStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const prefersReducedMotion = useReducedMotion();
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const staticProgress = useMotionValue(0.6);
  const progressValue = prefersReducedMotion ? staticProgress : smoothProgress;

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Center Node (Desktop) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-lg z-10 hidden md:flex items-center justify-center text-brand-600">
        <motion.div 
            className="w-4 h-4 rounded-full bg-brand-600"
            style={{ 
                scale: useTransform(progressValue, [0.4, 0.5, 0.6], [0, 1.2, 1]),
                boxShadow: useTransform(progressValue, [0.5, 0.6], ["0px 0px 0px rgba(86, 100, 245, 0)", "0px 0px 20px rgba(86, 100, 245, 0.6)"])
            }}
        />
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-[calc(50%-48px)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`inline-flex p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm text-brand-600 mb-6 ${isEven ? 'ml-auto' : ''}`}>
          <step.icon size={28} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
        <h4 className="text-lg text-brand-600 font-medium mb-4">{step.subtitle}</h4>
        <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
      </div>

      {/* Visual Side (Diagram/Illustration) */}
      <div className="w-full md:w-[calc(50%-48px)]">
        <div className="bg-white/60 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden shadow-xl shadow-slate-200/40 group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent"></div>
            
            {/* Abstract representation of the step driven by scroll */}
            {index === 0 && <VisualIngest progress={progressValue} />}
            {index === 1 && <VisualProcess progress={progressValue} />}
            {index === 2 && <VisualRetrieve progress={progressValue} />}
            {index === 3 && <VisualGenerate progress={progressValue} />}
        </div>
      </div>
    </motion.div>
  );
};

// --- Scroll-Driven Micro-Visuals ---

// 1. Ingest: Documents stacking/falling in
const VisualIngest = ({ progress }: { progress: MotionValue<number> }) => {
    // Documents falling in with rotation and slight bounce effect
    const y1 = useTransform(progress, [0, 0.4], [-150, 0]);
    const r1 = useTransform(progress, [0, 0.4], [-20, -5]);
    const o1 = useTransform(progress, [0, 0.2], [0, 1]);

    const y2 = useTransform(progress, [0.2, 0.6], [-150, 0]);
    const r2 = useTransform(progress, [0.2, 0.6], [10, 0]);
    const o2 = useTransform(progress, [0.2, 0.4], [0, 1]);

    const y3 = useTransform(progress, [0.4, 0.8], [-150, 0]);
    const r3 = useTransform(progress, [0.4, 0.8], [-10, 5]);
    const o3 = useTransform(progress, [0.4, 0.6], [0, 1]);
    
    return (
        <div className="flex gap-4 items-end relative z-10" style={{ perspective: 1000 }}>
            <motion.div style={{ y: y1, rotate: r1, opacity: o1 }} className="w-16 h-24 bg-white rounded-lg border border-slate-200 shadow-lg flex flex-col p-2 origin-bottom-left">
                 <div className="w-8 h-1 bg-slate-100 rounded mb-1"></div>
                 <div className="w-10 h-1 bg-slate-100 rounded mb-1"></div>
                 <div className="w-full flex-1 bg-slate-50/50 rounded mt-2"></div>
            </motion.div>
            <motion.div style={{ y: y2, rotate: r2, opacity: o2, zIndex: 10 }} className="w-16 h-24 bg-white rounded-lg border border-brand-200 shadow-xl flex flex-col p-2 -ml-6 mb-2">
                 <div className="w-8 h-1 bg-brand-100 rounded mb-1"></div>
                 <div className="w-10 h-1 bg-brand-100 rounded mb-1"></div>
                 <div className="w-6 h-1 bg-brand-100 rounded mb-1"></div>
                 <div className="mt-auto self-end w-3 h-3 bg-brand-500 rounded-full"></div>
            </motion.div>
            <motion.div style={{ y: y3, rotate: r3, opacity: o3 }} className="w-16 h-24 bg-white rounded-lg border border-slate-200 shadow-lg flex flex-col p-2 -ml-6 origin-bottom-right">
                 <div className="w-8 h-1 bg-slate-100 rounded mb-1"></div>
                 <div className="w-full flex-1 bg-slate-50/50 rounded mt-2"></div>
            </motion.div>
        </div>
    );
};

// 2. Process: Scanning/Transforming
const VisualProcess = ({ progress }: { progress: MotionValue<number> }) => {
    const rotate = useTransform(progress, [0.2, 0.8], [0, 180]);
    const scanY = useTransform(progress, [0.2, 0.8], ["0%", "200%"]);
    
    return (
        <div className="relative w-full h-full flex items-center justify-center">
             {/* Outer Orbit */}
             <motion.div style={{ rotate }} className="absolute w-56 h-56 rounded-full border border-dashed border-brand-200/60" />
             <motion.div style={{ rotate: useTransform(progress, [0, 1], [0, -180]) }} className="absolute w-40 h-40 rounded-full border border-dashed border-slate-200" />
             
             {/* Pulse Effect Background */}
             <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 bg-brand-200/30 rounded-full"
             />

             {/* Central Node */}
             <div className="relative w-24 h-24 bg-white rounded-xl border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden z-10">
                 <div className="grid grid-cols-3 gap-1.5 opacity-30">
                     {[...Array(9)].map((_, i) => <div key={i} className="w-3 h-3 bg-brand-600 rounded-[2px]" />)}
                 </div>
                 {/* Scanner Line */}
                 <motion.div 
                    className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-brand-500/20 to-transparent border-t-2 border-brand-500"
                    style={{ top: scanY }}
                 />
             </div>
             
             {/* Floating Particles */}
             <motion.div 
                className="absolute w-3 h-3 bg-accent-400 rounded-full shadow-lg shadow-accent-400/50" 
                style={{ 
                    x: useTransform(progress, [0, 1], [-80, 80]),
                    y: useTransform(progress, [0, 0.5, 1], [-40, -60, -40])
                }}
             />
             <motion.div 
                className="absolute w-2 h-2 bg-brand-400 rounded-full shadow-lg shadow-brand-400/50" 
                style={{ 
                    x: useTransform(progress, [0, 1], [80, -80]),
                    y: useTransform(progress, [0, 0.5, 1], [40, 60, 40])
                }}
             />
        </div>
    );
};

// 3. Retrieve: Search Lens and Highlighting
const VisualRetrieve = ({ progress }: { progress: MotionValue<number> }) => {
    // Fluid movement path for the lens
    const lensX = useTransform(progress, [0, 0.3, 0.6, 1], [-40, 40, -20, 0]);
    const lensY = useTransform(progress, [0, 0.3, 0.6, 1], [-30, 20, 30, -10]);
    const lensRotate = useTransform(progress, [0, 1], [-10, 10]);
    const lensScale = useTransform(progress, [0.2, 0.5, 0.8], [1, 1.1, 1]);
    
    return (
        <div className="relative z-10 w-56 h-56 grid grid-cols-4 gap-3 p-4">
            {[...Array(16)].map((_, i) => {
                // Highlight specific nodes as lens passes over (approximate timing)
                const isHighlighted = i === 5 || i === 10 || i === 15; 
                return (
                    <motion.div 
                        key={i}
                        className={`rounded-md transition-colors duration-500 ${isHighlighted ? 'bg-brand-100' : 'bg-slate-100'}`}
                        style={{ 
                            opacity: isHighlighted ? useTransform(progress, [0.3, 0.7], [0.4, 1]) : 0.3,
                            scale: isHighlighted ? useTransform(progress, [0.3, 0.7], [1, 1.1]) : 1
                        }}
                    />
                )
            })}
            
            {/* Search Lens - Redesigned to be cohesive */}
            <motion.div 
                className="absolute top-1/2 left-1/2 w-20 h-20"
                style={{ x: lensX, y: lensY, rotate: lensRotate, scale: lensScale, marginLeft: -40, marginTop: -40 }}
            >
                <div className="relative w-full h-full">
                     {/* Handle - positioned to connect perfectly to the bottom right */}
                     <div className="absolute left-1/2 top-1/2 w-4 h-16 bg-accent-500 rounded-full origin-top transform -rotate-45 translate-x-[18px] translate-y-[18px] shadow-md"></div>

                     {/* Lens Circle */}
                     <div className="absolute inset-0 rounded-full border-[6px] border-accent-500 bg-white/10 backdrop-blur-sm shadow-2xl shadow-accent-500/20 z-10"></div>
                     
                     {/* Lens Glare */}
                     <div className="absolute top-3 right-3 w-3 h-1.5 bg-white/60 rounded-full transform rotate-45 z-20"></div>
                </div>
            </motion.div>
        </div>
    );
};

// 4. Generate: Text Typing / Response Construction
const VisualGenerate = ({ progress }: { progress: MotionValue<number> }) => {
    // Typing effect logic
    const width1 = useTransform(progress, [0.1, 0.3], ["0%", "100%"]);
    const width2 = useTransform(progress, [0.3, 0.5], ["0%", "80%"]);
    const width3 = useTransform(progress, [0.5, 0.7], ["0%", "90%"]);
    const width4 = useTransform(progress, [0.7, 0.9], ["0%", "60%"]);

    return (
        <motion.div className="w-full max-w-[280px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 flex flex-col gap-4 z-10">
            {/* AI Assistant Header */}
            <div className="flex items-center gap-3 mb-2 border-b border-slate-100 pb-4">
                 <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                 </div>
                 <div className="flex flex-col gap-1">
                    <div className="h-2.5 w-24 bg-slate-800 rounded-full"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                 </div>
            </div>
            
            {/* Animated Text Lines - Typing Effect */}
            <div className="space-y-3">
                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div style={{ width: width1 }} className="h-full bg-slate-300 rounded-full" />
                </div>
                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div style={{ width: width2 }} className="h-full bg-slate-300 rounded-full" />
                </div>
                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div style={{ width: width3 }} className="h-full bg-slate-300 rounded-full" />
                </div>
                
                 {/* Highlighted Answer */}
                 <motion.div 
                    className="mt-4 p-3 bg-brand-50 rounded-lg border border-brand-100"
                    style={{ 
                        opacity: useTransform(progress, [0.75, 0.85], [0, 1]), 
                        y: useTransform(progress, [0.75, 0.85], [10, 0]) 
                    }}
                >
                     <div className="h-2.5 w-full bg-white rounded-full overflow-hidden mb-2">
                        <motion.div style={{ width: width4 }} className="h-full bg-brand-500 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PipelineSection;
