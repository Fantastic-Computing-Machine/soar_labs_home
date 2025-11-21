import React, { useEffect, useState } from 'react';
import PageShell from '../components/PageShell';

interface PolicySection {
  title: string;
  body: string;
  subPoints?: string[];
}

const PrivacyPolicy: React.FC = () => {
  const [sections, setSections] = useState<PolicySection[]>([]);

  useEffect(() => {
    const loadSections = async () => {
      try {
        const response = await fetch('/api/privacy-policy.json');
        const data = (await response.json()) as PolicySection[];
        setSections(data);
      } catch (error) {
        console.error('Failed to load privacy policy content', error);
      }
    };

    loadSections();
  }, []);

  return (
    <PageShell>
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white font-display text-2xl mb-4">
            S
          </div>
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">Privacy</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This page explains how Soar Labs collects, uses, and safeguards information within the Retrieval Augmented Generation platform. Replace this placeholder content with your official legal copy.
          </p>
        </div>
        <div className="grid gap-4 max-w-3xl mx-auto">
          {sections.length === 0 && (
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-lg shadow-slate-200/40 text-slate-400 text-sm">
              Loading policy content...
            </div>
          )}
          {sections.map((section) => (
            <div key={section.title} className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-lg shadow-slate-200/40">
              <h2 className="text-xl font-display text-slate-900 mb-2">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{section.body}</p>
              {'subPoints' in section && section.subPoints && (
                <ul className="mt-3 space-y-1 text-sm text-slate-500 list-disc list-inside">
                  {section.subPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default PrivacyPolicy;
