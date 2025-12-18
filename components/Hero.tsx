
import React from 'react';
import { PlayCircle, Eye } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Antigravity from './Antigravity.tsx';
import Security3D from './Security3D.tsx';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const modelOpacity = useTransform(scrollY, [0, 300], [0.6, 0]);

  return (
    <section className="relative pt-48 pb-24 px-6 overflow-hidden min-h-[100vh] flex flex-col justify-center">
      {/* Parallax Decorative Background Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-[15%] left-[10%] w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"
      />
      
      {/* Low-Poly 3D Model Background */}
      <motion.div 
        style={{ opacity: modelOpacity }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center translate-y-[-10%]"
      >
        <div className="w-[1200px] h-[800px] opacity-40">
          <Security3D />
        </div>
      </motion.div>
      
      {/* Antigravity Field Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
         <Antigravity
            count={250}
            magnetRadius={8}
            ringRadius={9}
            waveSpeed={0.3}
            waveAmplitude={0.8}
            particleSize={1.2}
            lerpSpeed={0.04}
            color={'#6366f1'}
            autoAnimate={true}
            particleVariance={0.8}
            particleShape="capsule"
          />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ scale }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            AI-Driven Security, <br />
            Uncompromised Compliance. <br />
            <span className="gradient-text">Instantly.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Suronex monitors your enterprise infrastructure 24/7, detecting vulnerabilities before they become threats.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 text-white cursor-target">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-white cursor-target">
            Watch Demo <PlayCircle className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
          className="relative mx-auto w-64 h-64 flex items-center justify-center"
        >
          {/* Centered Interactive Visual */}
          <div className="absolute inset-0 pointer-events-auto cursor-pointer">
             <Antigravity
                count={150}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={1.5}
                lerpSpeed={0.05}
                color={'#06b6d4'}
                autoAnimate={true}
                particleVariance={1}
                particleShape="sphere"
              />
          </div>
          
          <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping opacity-20" />
          <div className="absolute inset-4 rounded-full border border-indigo-500/30 animate-pulse opacity-40" />
          <div className="absolute inset-8 rounded-full border border-indigo-500/40" />
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.2)",
                "0 0 40px rgba(99, 102, 241, 0.4)",
                "0 0 20px rgba(99, 102, 241, 0.2)"
              ]
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-900 to-indigo-700 flex items-center justify-center shadow-2xl border border-white/10 relative z-10 cursor-target"
          >
            <Eye className="w-12 h-12 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
