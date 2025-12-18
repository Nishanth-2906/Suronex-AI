
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TrustedBy from './components/TrustedBy.tsx';
import SecurityGap from './components/SecurityGap.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Stats from './components/Stats.tsx';
import Features from './components/Features.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';
import TargetCursor from './components/TargetCursor.tsx';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Moving lines */}
      <div className="animated-line" style={{ left: '15%', animationDelay: '0s' }} />
      <div className="animated-line" style={{ left: '35%', animationDelay: '3s' }} />
      <div className="animated-line" style={{ left: '65%', animationDelay: '7s' }} />
      <div className="animated-line" style={{ left: '85%', animationDelay: '2s' }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] bg-animate-pulse" />
      <div className="absolute top-[60%] right-[5%] w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[80px] bg-animate-pulse" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] bg-animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <TargetCursor 
        spinDuration={3}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="hero-glow" />
      <BackgroundDecor />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <SecurityGap />
        <HowItWorks />
        <Stats />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
