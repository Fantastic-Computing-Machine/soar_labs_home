import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageShellProps {
  children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-900 relative">
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
