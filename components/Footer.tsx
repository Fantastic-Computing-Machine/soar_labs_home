import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-white font-bold text-xs">S</div>
                <span className="font-display text-xl font-bold text-slate-900 tracking-tight">
                Soar Labs
                </span>
            </div>
            <p className="text-slate-500 mt-4 max-w-sm text-sm leading-relaxed">
              The enterprise-grade RAG platform for building intelligent, context-aware AI applications at scale.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors p-2 bg-white border border-slate-200 rounded-full"><Github size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors p-2 bg-white border border-slate-200 rounded-full"><Twitter size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors p-2 bg-white border border-slate-200 rounded-full"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="https://docs.soarlabs.tech" className="hover:text-brand-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Legal</a></li>
              <li><a href="mailto:connect@soarlabs.tech" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Soar Labs Inc. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;