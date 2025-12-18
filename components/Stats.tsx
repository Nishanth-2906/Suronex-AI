
import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    { label: '% Uptime', value: '99+' },
    { label: 'Threats Blocked Daily', value: '10000+' },
    { label: '% Faster Compliance', value: '85+' },
    { label: 'Enterprise Customers', value: '500+' }
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proof in the Numbers</h2>
          <p className="text-gray-400 text-lg">Real results from real enterprises</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5 }}
              className="glass-card p-12 rounded-3xl text-center flex flex-col items-center justify-center border-indigo-500/5 hover:border-indigo-500/20 transition-all"
            >
              <span className="text-4xl md:text-5xl font-black gradient-text mb-4 tracking-tighter">{stat.value}</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
