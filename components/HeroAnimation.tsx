import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }}></div>

      <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
        {/* Connecting Path */}
        <motion.path
          d="M 140 200 L 300 200 C 350 200 350 200 400 200 C 450 200 450 200 700 200"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Stage 1: Documents (Ingest) - Shifted Right to avoid clipping */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <rect x="100" y="160" width="60" height="80" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
          <line x1="115" y1="180" x2="145" y2="180" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="115" y1="200" x2="145" y2="200" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="115" y1="220" x2="135" y2="220" stroke="#cbd5e1" strokeWidth="2" />
          
          {/* Decoration */}
          <circle cx="100" cy="160" r="4" fill="#3b82f6" />
          
          <text x="130" y="270" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif" fontWeight="600">Raw Data</text>
        </motion.g>

        {/* Moving Packet 1 */}
        <motion.circle
          r="6"
          fill="#3b82f6"
        >
          <animateMotion
            path="M 160 200 L 300 200"
            dur="2s"
            repeatCount="indefinite"
          />
        </motion.circle>

        {/* Stage 2: Processor (Chunk/Embed) */}
        <motion.g transform="translate(350, 200)">
             <motion.circle 
                r="45" 
                fill="#eff6ff" 
                stroke="#3b82f6" 
                strokeWidth="2"
                strokeDasharray="5,5"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
             <motion.circle 
                r="35" 
                fill="#ffffff" 
                stroke="#93c5fd" 
                strokeWidth="1"
            />
            <motion.rect 
                x="-15" y="-15" width="30" height="30" fill="#3b82f6" rx="4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.g>
        <text x="350" y="270" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif" fontWeight="600">Vectorize</text>

         {/* Moving Packet 2 (Multiple particles) */}
         {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="4"
              fill="#14b8a6"
            >
            <animateMotion
                path="M 400 200 L 600 200"
                dur="1.5s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
            />
            </motion.circle>
         ))}

        {/* Stage 3: LLM/Insight (Generate) */}
        <motion.g
          transform="translate(650, 200)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
           <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0d9488', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
            </linearGradient>
           </defs>
          <polygon points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17" fill="url(#grad1)" />
           
           {/* Sparkle Icon inside */}
           <motion.path
             d="M -10 5 L 0 15 L 10 -10"
             fill="none"
             stroke="#fff"
             strokeWidth="3"
             strokeLinecap="round"
             strokeLinejoin="round"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
           />
           <text x="0" y="60" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif" fontWeight="600">Insight</text>
        </motion.g>

      </svg>
      
      {/* Floating label for 'AI' */}
      <motion.div 
        className="absolute top-8 right-8 bg-white border border-brand-100 text-brand-600 px-4 py-2 rounded-xl text-xs font-mono shadow-lg flex items-center gap-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Processing: 12ms
      </motion.div>
    </div>
  );
};

export default HeroAnimation;