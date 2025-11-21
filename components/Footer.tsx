import { MailIcon } from 'lucide-react';
import React from 'react';

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
              The enterprise-grade Retrieval Augmented Generation platform for building intelligent, context-aware AI applications at scale.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Platform (soon)</h4>
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
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:connect@soarlabs.tech"
                  className="text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-2"
                >
                  <MailIcon size={18} />
                  <span>connect@soarlabs.tech</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm flex flex-col md:flex-row md:items-center md:gap-3 text-center md:text-left">
            <span>© {new Date().getFullYear()} Soar Labs Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a
              href="/privacy"
              className="hover:text-brand-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-brand-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
