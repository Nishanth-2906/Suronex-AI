
import React from 'react';
import { AlertTriangle, Clock, FileWarning } from 'lucide-react';
import { motion } from 'framer-motion';

const SecurityGap: React.FC = () => {
  const gaps = [
    {
      icon: <AlertTriangle className="text-rose-400" />,
      title: 'Hidden Risks',
      desc: 'Undetected vulnerabilities lurk in your infrastructure, waiting to be exploited by sophisticated threats.',
      bg: 'bg-rose-500/10'
    },
    {
      icon: <Clock className="text-amber-400" />,
      title: 'Slow Audits',
      desc: 'Manual compliance checks take weeks, leaving critical gaps in your security posture unaddressed.',
      bg: 'bg-amber-500/10'
    },
    {
      icon: <FileWarning className="text-orange-400" />,
      title: 'Outdated Compliance',
      desc: 'Regulatory requirements evolve rapidly. Static compliance frameworks can\'t keep pace with change.',
      bg: 'bg-orange-500/10'
    }
  ];

  return (
    <section id="solutions" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Security Gap</h2>
          <p className="text-gray-400 text-lg">Traditional approaches leave your enterprise exposed</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gaps.map((gap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-10 rounded-3xl group hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${gap.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {gap.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{gap.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {gap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityGap;
