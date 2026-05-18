import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-mono text-sm text-[#8fb339] mb-3">
              <span className="opacity-60">//</span> kingsten.dev
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Building high-performing engineering teams across global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm text-[#8fb339] mb-3">// navigate</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-white/70 hover:text-[#8fb339] transition-colors">
                About
              </a>
              <a href="#experience" className="block text-sm text-white/70 hover:text-[#8fb339] transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-sm text-white/70 hover:text-[#8fb339] transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-sm text-white/70 hover:text-[#8fb339] transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-sm text-white/70 hover:text-[#8fb339] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-sm text-[#8fb339] mb-3">// connect</h3>
            <div className="flex gap-4">
              <a
                href="https://in.linkedin.com/in/kingsten-jones-646242125"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-[#8fb339] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kingstenjones2@gmail.com"
                className="p-2 bg-white/10 rounded hover:bg-[#8fb339] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 font-mono">
              © {currentYear} Kingsten Jones. All rights reserved.
            </p>
            <p className="text-xs text-white/40 font-mono">
              Built with React • Designed for impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
