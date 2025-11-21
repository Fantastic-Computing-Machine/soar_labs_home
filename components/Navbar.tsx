import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 group flex items-center gap-2" aria-label="Soar Labs home">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-lg transform group-hover:rotate-6 transition-transform shadow-lg shadow-brand-500/30">
              S
            </div>
            <span className="font-display text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
              Soar Labs
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="/#product"
                className="text-slate-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Product
              </a>
              <a
                href="/#solutions"
                className="text-slate-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Solutions
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
              >
                Pricing (soon)
              </a>
              <a
                href="https://docs.soarlabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
              >
                Developers <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* <a
                href="https://console.soarlabs.tech"
                className="text-slate-600 hover:text-brand-600 font-medium text-sm"
             >
                Log in
             </a> */}
            <a
              href="https://console.soarlabs.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Product', 'Solutions', 'Developers', 'Pricing'].map((item) => {
                const hrefMap: Record<string, string> = {
                  Product: '/#product',
                  Solutions: '/#solutions',
                  Developers: 'https://docs.soarlabs.tech',
                  Pricing: '/#pricing',
                };
                const isExternal = item === 'Developers';
                return (
                  <a
                    key={item}
                    href={hrefMap[item]}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-slate-600 hover:text-brand-600 hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
              <a
                href="https://docs.soarlabs.tech"
                className="text-slate-600 hover:text-brand-600 hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                Documentation
              </a>
              <a
                href="https://console.soarlabs.tech"
                className="text-slate-600 hover:text-brand-600 hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                Log in
              </a>
              <button className="w-full text-left mt-4 bg-brand-600 text-white px-4 py-3 rounded-md font-semibold shadow-md">
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
