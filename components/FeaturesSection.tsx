import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white/40 backdrop-blur-3xl relative overflow-hidden" id="product">
      {/* Decorative Blurs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-50/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-50/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Built for Enterprise Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Soar Labs isn't just a wrapper. It's a robust infrastructure designed to handle millions of documents with enterprise-grade security.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
    feature: typeof FEATURES[0];
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 group cursor-default relative overflow-hidden h-full flex flex-col"
    >
      {/* Background Gradient Reveal */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Container */}
      <div className="relative z-10 w-14 h-14 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-500 transition-colors duration-300 shadow-sm">
        {/* Icon Animation */}
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <feature.icon size={28} strokeWidth={1.5} />
        </motion.div>
      </div>

      <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">
        {feature.title}
      </h3>
      
      <p className="relative z-10 text-slate-600 text-base leading-relaxed flex-grow">
        {feature.description}
      </p>

      {/* Subtle decorative animated corner */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-100/0 to-brand-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Bottom animated line */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
    </motion.div>
  );
};

export default FeaturesSection;
