
import React from 'react';
import { Bot, BarChart3, RotateCw, Layers, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Detection',
      desc: 'Machine learning algorithms identify threats with unprecedented accuracy.',
      icon: <Bot className="text-indigo-400" />
    },
    {
      title: 'Real-Time Analytics',
      desc: 'Comprehensive dashboards provide instant visibility into your security posture.',
      icon: <BarChart3 className="text-cyan-400" />
    },
    {
      title: 'Automated Compliance',
      desc: 'Stay compliant with SOC 2, ISO 27001, GDPR, and more automatically.',
      icon: <RotateCw className="text-indigo-400" />
    },
    {
      title: 'Infrastructure Scanning',
      desc: 'Continuous monitoring of cloud, on-premise, and hybrid environments.',
      icon: <Layers className="text-cyan-400" />
    },
    {
      title: 'Instant Response',
      desc: 'Automated threat mitigation reduces response time from hours to seconds.',
      icon: <Zap className="text-indigo-400" />
    },
    {
      title: 'Team Collaboration',
      desc: 'Built-in tools for security teams to coordinate and respond effectively.',
      icon: <Users className="text-cyan-400" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="platform" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Enterprise-Grade Features</h2>
          <p className="text-gray-400 text-lg">Everything you need to secure your infrastructure</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(99, 102, 241, 0.3)"
              }}
              className="glass-card p-10 rounded-3xl transition-all group border-transparent cursor-target"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-indigo-600/20 group-hover:scale-110 transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
