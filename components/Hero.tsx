import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import React from 'react';
import HeroAnimation from './HeroAnimation';

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const orbAnimation = prefersReducedMotion
    ? undefined
    : {
      animate: { y: [-30, 20, -30], x: [-10, 10, -10] },
      transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
    };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Technical Grid with Fade Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Fluid Gradient Orbs with Parallax */}
        <motion.div {...orbAnimation} className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%]">
          <div className="w-full h-full rounded-full bg-purple-100/40 blur-[100px] animate-blob mix-blend-multiply filter"></div>
        </motion.div>
        <motion.div {...orbAnimation} className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%]">
          <div className="w-full h-full rounded-full bg-brand-100/40 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
        </motion.div>
        <motion.div {...orbAnimation} className="absolute top-[20%] left-[20%] w-[40%] h-[40%]">
          <div className="w-full h-full rounded-full bg-accent-100/40 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-brand-100 text-brand-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
                </span>
                v2.0 Now Available with Gemini 1.5 Pro Support
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/50 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default">
                <TrendingUp size={14} className="text-emerald-600" />
                Open for Funding
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Transform knowledge into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Intelligence</span>.
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Soar Labs is the enterprise-ready Retrieval Augmented Generation platform that connects your data to LLMs in milliseconds. Secure, scalable, and effortlessly simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://console.soarlabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Building Free <ArrowRight size={20} />
              </a>
              <button className="bg-white/60 backdrop-blur-sm hover:bg-white/80 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 border border-slate-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
                <Play size={20} fill="currentColor" className="text-brand-600" /> View Demo
              </button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 font-medium">
              <span>Trusted by innovators</span>
              <div className="flex gap-6 opacity-40 grayscale mix-blend-multiply">
                {/* Placeholder Company Logos */}
                {/* <div className="h-8 w-24 bg-slate-800 rounded-md"></div>
                <div className="h-8 w-24 bg-slate-800 rounded-md"></div>
                <div className="h-8 w-24 bg-slate-800 rounded-md"></div> */}
              </div>
            </div>
          </motion.div>

          {/* Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             {/* Glow behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-accent-500/20 rounded-[2rem] blur-xl -z-10"></div>
            <HeroAnimation />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
