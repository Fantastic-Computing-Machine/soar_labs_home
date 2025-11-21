import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PipelineSection from './components/PipelineSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import StatsSection from './components/StatsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-900 relative">
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <PipelineSection />
        <FeaturesSection />
        <UseCasesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;