
import React from 'react';
import { Zap, Search, Bell, ShieldCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Connect',
      desc: 'Seamlessly integrate with your existing infrastructure in minutes. No disruption, no downtime.',
      icon: <Zap className="w-5 h-5 text-indigo-400" />
    },
    {
      num: '02',
      title: 'Analyze',
      desc: 'Our AI continuously scans for vulnerabilities, anomalies, and compliance gaps across your entire network.',
      icon: <Search className="w-5 h-5 text-cyan-400" />
    },
    {
      num: '03',
      title: 'Alert',
      desc: 'Receive instant notifications about critical threats with actionable insights and remediation steps.',
      icon: <Bell className="w-5 h-5 text-indigo-400" />
    },
    {
      num: '04',
      title: 'Protect',
      desc: 'Automated responses neutralize threats before they escalate, keeping your enterprise secure 24/7.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section id="resources" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Suronex Works</h2>
          <p className="text-gray-400 text-lg">Continuous AI monitoring for enterprise-grade security</p>
        </div>

        <div className="space-y-24 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 hidden md:block" />
          
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-center md:text-left">
                <div className={`flex flex-col ${i % 2 !== 0 ? 'md:items-end md:text-right' : ''}`}>
                  <span className="text-2xl font-black text-gray-200 mb-2">{step.num}. {step.title}</span>
                  <p className="text-gray-400 leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-indigo-900 border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  {step.icon}
                </div>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
