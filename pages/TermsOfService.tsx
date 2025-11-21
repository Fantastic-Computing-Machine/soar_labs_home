import React, { useEffect, useState } from 'react';
import PageShell from '../components/PageShell';

interface TermsSection {
  title: string;
  body: string;
  subPoints?: string[];
}

const TermsOfService: React.FC = () => {
  const [sections, setSections] = useState<TermsSection[]>([]);

  useEffect(() => {
    const loadSections = async () => {
      try {
        const response = await fetch('/api/terms-of-service.json');
        const data = (await response.json()) as TermsSection[];
        setSections(data);
      } catch (error) {
        console.error('Failed to load terms content', error);
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
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">Terms</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These sample terms outline the relationship between Soar Labs and customers of the Retrieval Augmented Generation platform.
            Swap this placeholder copy with the official agreement from your legal team.
          </p>
        </div>
        <div className="grid gap-4 max-w-3xl mx-auto">
          {sections.length === 0 && (
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-lg shadow-slate-200/40 text-slate-400 text-sm">
              Loading terms content...
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

export default TermsOfService;
