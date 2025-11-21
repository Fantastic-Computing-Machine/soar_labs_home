import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import PageShell from './components/PageShell';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const PipelineSection = lazy(() => import('./components/PipelineSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const UseCasesSection = lazy(() => import('./components/UseCasesSection'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const CtaSection = lazy(() => import('./components/CtaSection'));

const SectionFallback = () => (
  <div className="my-20 flex justify-center" aria-hidden="true">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
  </div>
);

const DeferredSection: React.FC<{ delay?: number; children: () => React.ReactNode }> = ({ delay = 0, children }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShouldRender(true), delay);
    return () => window.clearTimeout(timeout);
  }, [delay]);

  return shouldRender ? <>{children()}</> : <SectionFallback />;
};

const LandingPage: React.FC = () => {
  useEffect(() => {
    const prefetch = () => {
      import('./components/PipelineSection');
      import('./components/FeaturesSection');
      import('./components/UseCasesSection');
      import('./components/StatsSection');
      import('./components/CtaSection');
    };

    if (document.readyState === 'complete') {
      const idleId = (window as typeof window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback?.(prefetch);
      if (!idleId) {
        const timeout = window.setTimeout(prefetch, 1200);
        return () => window.clearTimeout(timeout);
      }
      return () => {
        (window as typeof window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId as number);
      };
    }

    window.addEventListener('load', prefetch, { once: true });
    return () => window.removeEventListener('load', prefetch);
  }, []);

  return (
    <PageShell>
      <Hero />
      <DeferredSection delay={600}>
        {() => (
          <Suspense fallback={<SectionFallback />}>
            <PipelineSection />
          </Suspense>
        )}
      </DeferredSection>
      <DeferredSection delay={900}>
        {() => (
          <Suspense fallback={<SectionFallback />}>
            <FeaturesSection />
          </Suspense>
        )}
      </DeferredSection>
      <DeferredSection delay={1200}>
        {() => (
          <Suspense fallback={<SectionFallback />}>
            <UseCasesSection />
          </Suspense>
        )}
      </DeferredSection>
      <DeferredSection delay={1500}>
        {() => (
          <Suspense fallback={<SectionFallback />}>
            <StatsSection />
          </Suspense>
        )}
      </DeferredSection>
      <DeferredSection delay={1800}>
        {() => (
          <Suspense fallback={<SectionFallback />}>
            <CtaSection />
          </Suspense>
        )}
      </DeferredSection>
    </PageShell>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
