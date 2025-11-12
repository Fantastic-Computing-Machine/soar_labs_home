import "./App.css";
import Landing from "./Landing";
import Feature from "./Feature";
import { Vortex } from "./components/vortex";
import Navbar from "./components/Navbar";
import RagFlow from "./RagFlow";
import UseCases from "./UseCases";
import Footer from "./Footer";
import PricingComparison from "./PricingComparison";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

const AppContent = () => {
  const { isLight } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--page-bg)] text-[color:var(--text-primary)] transition-colors duration-500">
      <Vortex
        backgroundColor={isLight ? "#f7f8fc" : "#000000"}
        blendMode={isLight ? "source-over" : "lighter"}
        containerClassName="fixed inset-0 z-0 h-screen w-screen pointer-events-none blur-[2px]"
      />

      <div className="relative z-10 flex flex-col gap-20">
        <Navbar />
        <Landing />
        <Feature />
        <RagFlow />
        <UseCases />
        <PricingComparison />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
