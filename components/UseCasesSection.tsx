import React from 'react';
import { USE_CASES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const UseCasesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white/40 backdrop-blur-3xl" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Use Cases</h2>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Deploy anywhere</h2>
                <p className="text-slate-600 max-w-xl text-lg">
                From internal tools to customer-facing products, Soar Labs powers the next generation of AI applications.
                </p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-800 transition-colors mt-4 md:mt-0 px-6 py-3 rounded-full bg-brand-50/50 border border-brand-100">
                View all case studies <ArrowUpRight size={18} />
            </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {USE_CASES.map((useCase, index) => (
            <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl border border-slate-100 aspect-[4/3] lg:aspect-video cursor-pointer shadow-md hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
            >
              <img
                src={useCase.image}
                alt={useCase.title}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex gap-2 mb-4">
                    {useCase.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/10">{tag}</span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-200 transition-colors">{useCase.title}</h3>
                <p className="text-slate-200 text-sm max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 leading-relaxed">
                    {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
            <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-bold">
                View all case studies <ArrowUpRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
