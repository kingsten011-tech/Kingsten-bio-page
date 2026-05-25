import React from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0a0a09] text-white border-t border-white/5 py-10"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#CFEA6B] ring-offset-2 ring-offset-[#0a0a09]">
              <img src="/images/profile.jpg" alt="Kingsten" className="w-full h-full object-cover" />
            </div>
            <div className="font-mono text-sm">
              <span className="text-white">kingsten-jones</span>
              <span className="text-white/40">.bio</span>
            </div>
          </div>

          {/* Right pills */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:kingstenjones2@gmail.com"
              data-testid="footer-email"
              className="premium-link premium-card-dark ambient-surface-dark spark-interactive inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-4 py-2.5 rounded-full font-mono text-xs text-white/80"
            >
              <Mail size={13} />
              Email
            </a>
            <a
              href="https://in.linkedin.com/in/kingsten-jones-646242125"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              className="premium-link premium-card-dark ambient-surface-dark spark-interactive inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-4 py-2.5 rounded-full font-mono text-xs text-white/80 group"
            >
              <Linkedin size={13} />
              LinkedIn
              <ArrowUpRight size={12} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-white/30">// Crafted With Care · {year}</p>
          <p className="font-mono text-[11px] text-white/30">© Kingsten Jones</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
