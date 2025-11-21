import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PIPELINE_STEPS } from '../constants';

const PipelineSection: React.FC = () => {
  const connectorRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-white/30 backdrop-blur-3xl relative overflow-hidden" id="how-it-works">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
      ></div>
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

        <div className="relative" ref={connectorRef}>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-brand-400 to-accent-400"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
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

const PipelineStep: React.FC<{ step: typeof PIPELINE_STEPS[number]; index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px 0px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-lg z-10 hidden md:flex items-center justify-center text-brand-600">
        <motion.div
          className="w-3 h-3 rounded-full bg-brand-600"
          animate={isInView ? { scale: [0.5, 1.2, 1], boxShadow: ['0 0 0px rgba(86,100,245,0)', '0 0 20px rgba(86,100,245,0.5)', '0 0 0px rgba(86,100,245,0)'] } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>

      <div className={`w-full md:w-[calc(50%-48px)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`inline-flex p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm text-brand-600 mb-6 ${isEven ? 'ml-auto' : ''}`}>
          <step.icon size={28} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
        <h4 className="text-lg text-brand-600 font-medium mb-4">{step.subtitle}</h4>
        <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
      </div>

      <div className="w-full md:w-[calc(50%-48px)]">
        <div className="bg-white/60 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden shadow-xl shadow-slate-200/40 group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent"></div>
          {index === 0 && <VisualIngest active={isInView} />}
          {index === 1 && <VisualProcess active={isInView} />}
          {index === 2 && <VisualRetrieve active={isInView} />}
          {index === 3 && <VisualGenerate active={isInView} />}
        </div>
      </div>
    </motion.div>
  );
};

const VisualIngest = ({ active }: { active: boolean }) => (
  <div className="flex gap-4 items-end relative z-10">
    {[0, 1, 2].map((item) => (
      <motion.div
        key={item}
        initial={{ y: -120, opacity: 0, rotate: -10 + item * 5 }}
        animate={active ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ delay: 0.1 * item, duration: 0.6 }}
        className={`w-16 h-24 bg-white rounded-lg border ${item === 1 ? 'border-brand-200 shadow-xl' : 'border-slate-200 shadow-lg'} flex flex-col p-2`}
      >
        <div className="w-10 h-1 bg-slate-100 rounded mb-1"></div>
        <div className="w-full flex-1 bg-slate-50/50 rounded"></div>
        {item === 1 && <div className="mt-auto self-end w-3 h-3 bg-brand-500 rounded-full"></div>}
      </motion.div>
    ))}
  </div>
);

const VisualProcess = ({ active }: { active: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      className="absolute w-56 h-56 rounded-full border border-dashed border-brand-200/60"
      animate={active ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute w-40 h-40 rounded-full border border-dashed border-slate-200"
      animate={active ? { rotate: -360 } : { rotate: 0 }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
    />
    <div className="relative w-24 h-24 bg-white rounded-xl border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden z-10">
      <div className="grid grid-cols-3 gap-1.5 opacity-30">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-brand-600 rounded-[2px]" />
        ))}
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-brand-500/20 to-transparent"
        initial={{ y: '-100%' }}
        animate={active ? { y: ['-100%', '100%'] } : { y: '-100%' }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  </div>
);

const VisualRetrieve = ({ active }: { active: boolean }) => (
  <div className="relative z-10 w-56 h-56 grid grid-cols-4 gap-3 p-4">
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="rounded-md bg-slate-100"
        animate={active && [5, 10, 15].includes(i) ? { scale: [1, 1.1, 1], backgroundColor: ['#e0e7ff', '#c7d2fe', '#e0e7ff'] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    ))}
    <motion.div
      className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
      animate={active ? { rotate: [-10, 10, -10] } : { rotate: 0 }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative w-full h-full">
        <div className="absolute left-1/2 top-1/2 w-4 h-16 bg-accent-500 rounded-full origin-top -rotate-45 translate-x-[18px] translate-y-[18px] shadow-md"></div>
        <div className="absolute inset-0 rounded-full border-[6px] border-accent-500 bg-white/10 backdrop-blur-sm shadow-2xl"></div>
        <div className="absolute top-3 right-3 w-3 h-1.5 bg-white/60 rounded-full rotate-45"></div>
      </div>
    </motion.div>
  </div>
);

const VisualGenerate = ({ active }: { active: boolean }) => (
  <motion.div className="w-full max-w-[280px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 flex flex-col gap-4 z-10">
    <div className="flex items-center gap-3 mb-2 border-b border-slate-100 pb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-2.5 w-24 bg-slate-800 rounded-full"></div>
        <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
      </div>
    </div>
    <div className="space-y-3">
      {[0.9, 0.8, 1].map((width, idx) => (
        <div key={idx} className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-slate-300 rounded-full"
            initial={{ width: '0%' }}
            animate={active ? { width: `${width * 100}%` } : { width: '0%' }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          />
        </div>
      ))}
      <motion.div
        className="mt-4 p-3 bg-brand-50 rounded-lg border border-brand-100"
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="h-2.5 w-full bg-white rounded-full overflow-hidden">
          <motion.div className="h-full bg-brand-500 rounded-full" initial={{ width: '0%' }} animate={active ? { width: '70%' } : { width: '0%' }} transition={{ duration: 0.8, delay: 1 }} />
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default PipelineSection;
