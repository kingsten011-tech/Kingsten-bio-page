import React, { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F1EDE3]/90 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        {/* Logo with profile */}
        <button
          data-testid="brand-logo"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#CFEA6B] ring-offset-2 ring-offset-[#F1EDE3]">
            <img
              src="/images/profile.jpg"
              alt="Kingsten Jones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-mono text-[15px] tracking-tight">
            <span className="text-black">kingsten-jones</span>
            <span className="text-black/40">.bio</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              data-testid={`nav-${item}`}
              className="font-mono text-[13px] text-black/60 hover:text-black transition-colors"
            >
              <span className="text-black/30">/ </span>
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          data-testid="get-in-touch-btn"
          className="hidden md:inline-flex items-center gap-2 bg-black text-white pl-5 pr-4 py-2.5 rounded-full font-mono text-[13px] hover:bg-black/80 transition-all hover:gap-3"
        >
          Get In Touch
          <ArrowUpRight size={14} />
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          <Menu size={24} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F1EDE3] border-t border-black/5 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-mono text-sm text-left text-black/70 hover:text-black"
              >
                <span className="text-black/30">/ </span>
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
