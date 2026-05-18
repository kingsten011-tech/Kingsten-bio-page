import React from 'react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fdfcf9]/95 backdrop-blur-sm border-b border-[#e5e3db]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="font-mono text-sm text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
          <span className="text-[#8fb339]">//</span> kingsten.dev
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="font-mono text-xs text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
            <span className="text-[#8fb339]">[</span>about<span className="text-[#8fb339]">]</span>
          </button>
          <button onClick={() => scrollToSection('experience')} className="font-mono text-xs text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
            <span className="text-[#8fb339]">[</span>experience<span className="text-[#8fb339]">]</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="font-mono text-xs text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
            <span className="text-[#8fb339]">[</span>projects<span className="text-[#8fb339]">]</span>
          </button>
          <button onClick={() => scrollToSection('skills')} className="font-mono text-xs text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
            <span className="text-[#8fb339]">[</span>skills<span className="text-[#8fb339]">]</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-mono text-xs px-4 py-2 bg-[#8fb339] text-white hover:bg-[#7a9e2f] transition-colors rounded">
            contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1a1a1a] hover:text-[#8fb339] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfcf9] border-t border-[#e5e3db] px-6 py-4">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="font-mono text-xs text-left text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
              <span className="text-[#8fb339]">[</span>about<span className="text-[#8fb339]">]</span>
            </button>
            <button onClick={() => scrollToSection('experience')} className="font-mono text-xs text-left text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
              <span className="text-[#8fb339]">[</span>experience<span className="text-[#8fb339]">]</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="font-mono text-xs text-left text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
              <span className="text-[#8fb339]">[</span>projects<span className="text-[#8fb339]">]</span>
            </button>
            <button onClick={() => scrollToSection('skills')} className="font-mono text-xs text-left text-[#1a1a1a] hover:text-[#8fb339] transition-colors">
              <span className="text-[#8fb339]">[</span>skills<span className="text-[#8fb339]">]</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="font-mono text-xs px-4 py-2 bg-[#8fb339] text-white hover:bg-[#7a9e2f] transition-colors rounded text-left">
              contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
