
import React from 'react';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Security', 'Roadmap']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Support', 'Status']
    }
  ];

  return (
    <footer className="bg-[#05040f] pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 cursor-target">
              <Shield className="w-10 h-10 text-indigo-500 fill-indigo-500/20" />
              <span className="text-2xl font-bold tracking-tight">Suronex</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              AI-driven security and compliance platform for modern enterprises. We protect your digital assets with the power of intelligence.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white cursor-target">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white cursor-target">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white cursor-target">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>

          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-gray-200">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm cursor-target">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-xs">
            © 2024 Suronex. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors cursor-target">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors cursor-target">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors cursor-target">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
