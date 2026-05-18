import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-[#fdfcf9] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#e5e3db 1px, transparent 1px),
                              linear-gradient(90deg, #e5e3db 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="space-y-6">
          {/* Terminal-style greeting */}
          <div className="font-mono text-sm text-[#8fb339] mb-4">
            <span className="opacity-60">// initializing...</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-tight">
            Kingsten Jones
          </h1>

          <div className="font-mono text-sm md:text-base text-[#8fb339] space-y-1">
            <p><span className="text-[#1a1a1a] opacity-60">const</span> role = <span className="text-[#8fb339]">"Senior Tech Recruiter"</span>;</p>
            <p><span className="text-[#1a1a1a] opacity-60">const</span> experience = <span className="text-[#8fb339]">"8+ years"</span>;</p>
            <p><span className="text-[#1a1a1a] opacity-60">const</span> location = <span className="text-[#8fb339]">"Bangalore, India"</span>;</p>
          </div>

          <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-2xl leading-relaxed pt-4">
            Technology Hiring Specialist building high-performing engineering teams across global markets. 
            Proven expertise in executive sourcing, engineering leadership hiring, and talent strategy.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#contact"
              className="font-mono text-sm px-6 py-3 bg-[#8fb339] text-white hover:bg-[#7a9e2f] transition-all duration-300 rounded inline-flex items-center gap-2 hover:gap-3"
            >
              Get in touch
              <span>→</span>
            </a>
            <a
              href="https://in.linkedin.com/in/kingsten-jones-646242125"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-6 py-3 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#fdfcf9] transition-all duration-300 rounded"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#1a1a1a]/40 hover:text-[#8fb339] transition-colors cursor-pointer animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
