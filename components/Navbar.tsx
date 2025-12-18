
import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
        <div className="flex items-center gap-2 cursor-target">
          <Shield className="w-8 h-8 text-indigo-500 fill-indigo-500/20" />
          <span className="text-xl font-bold tracking-tight">Suronex</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-target px-2 py-1"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-medium bg-white/5 uppercase tracking-wider text-gray-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
            AI-Powered Security Platform
          </div>
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-target">
            Sign In
          </button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: [
                "0 0 0px rgba(99, 102, 241, 0)",
                "0 0 20px rgba(99, 102, 241, 0.6)",
                "0 0 0px rgba(99, 102, 241, 0)"
              ]
            }}
            transition={{ 
              boxShadow: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 cursor-target"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
