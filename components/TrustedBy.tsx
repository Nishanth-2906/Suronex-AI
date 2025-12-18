
import React from 'react';

const TrustedBy: React.FC = () => {
  const brands = ['TECHCORP', 'FINTECH+', 'HEALTHSEC', 'DATAFLOW', 'CLOUDNET'];
  
  return (
    <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter text-gray-300">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
