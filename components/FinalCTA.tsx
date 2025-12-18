
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Ready to Secure Your <br /> Enterprise?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join hundreds of companies protecting their infrastructure with Suronex AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/40 text-lg cursor-target">
            Start Free 30-Day Trial
          </button>
          <button className="w-full sm:w-auto px-10 py-5 glass-card bg-white/5 rounded-xl font-bold hover:bg-white/10 transition-all text-lg border-white/10 cursor-target">
            Schedule Demo
          </button>
        </div>

        <p className="text-sm text-gray-500">
          No credit card required &bull; Full access &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
