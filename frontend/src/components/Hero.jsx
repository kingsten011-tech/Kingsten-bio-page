import React from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';

const TerminalWindow = () => (
  <div data-testid="hero-terminal" className="bg-[#0E0E0C] rounded-xl overflow-hidden shadow-2xl shadow-black/20 w-full max-w-md mx-auto">
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
      </div>
      <span className="font-mono text-xs text-white/40 ml-2">~ /kingsten</span>
    </div>
    {/* Terminal body */}
    <div className="p-5 font-mono text-[13px] leading-relaxed">
      <div className="text-white/60 mb-3">
        <span className="text-[#CFEA6B]">$</span> whoami <span className="text-[#CFEA6B]">--role</span>="recruiter" <span className="text-[#CFEA6B]">--years</span>=8<span className="animate-pulse">_</span>
      </div>
      <div className="text-white/90 space-y-1">
        <div>{'{'}</div>
        <div className="pl-4">
          <span className="text-[#CFEA6B]">"name"</span>: <span className="text-amber-200">"Kingsten Jones"</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#CFEA6B]">"role"</span>: <span className="text-amber-200">"Tech Hiring Specialist"</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#CFEA6B]">"yoe"</span>: <span className="text-orange-300">8</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#CFEA6B]">"focus"</span>: [<span className="text-amber-200">"AI/ML"</span>, <span className="text-amber-200">"Platform"</span>,
        </div>
        <div className="pl-8">
          <span className="text-amber-200">"Leadership"</span>],
        </div>
        <div className="pl-4">
          <span className="text-[#CFEA6B]">"markets"</span>: <span className="text-orange-300">5</span>
        </div>
        <div>{'}'}</div>
      </div>
    </div>
  </div>
);

const StatBox = ({ value, label }) => (
  <div className="bg-white/60 border border-black/5 rounded-xl px-4 py-4 backdrop-blur-sm">
    <div className="font-display text-2xl md:text-3xl font-black text-black leading-none mb-2">{value}</div>
    <div className="font-mono text-[10px] tracking-widest text-black/50 uppercase">{label}</div>
  </div>
);

const CompanyLogos = () => {
  const companies = [
    { name: 'Postman', text: 'POSTMAN', color: 'text-orange-500' },
    { name: 'The Trade Desk', text: 'theTradeDesk', color: 'text-black' },
    { name: 'Google', text: 'Google', color: 'text-blue-600' },
    { name: 'Thoughtworks', text: 'ThoughtWorks', color: 'text-black' },
    { name: 'Oracle', text: 'ORACLE', color: 'text-red-600' },
    { name: 'Atlassian', text: 'ATLASSIAN', color: 'text-[#0052CC]' },
  ];
  return (
    <div className="mt-20 lg:mt-28">
      <div className="font-mono text-xs text-black/40 mb-6">// Trusted By Teams At</div>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-80">
        {companies.map((c, i) => (
          <div key={i} className={`font-bold text-lg tracking-tight ${c.color}`}>
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative bg-[#F1EDE3] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #00000040 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 bg-white/70 border border-black/5 rounded-full px-4 py-2 mb-12 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7DAF15] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7DAF15]"></span>
          </span>
          <span className="font-mono text-xs text-black/70">open to talk talent strategy</span>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="font-mono text-sm text-black/40 mb-6">// Hello, World</div>

            <h1 className="font-display font-black text-[#0a0a0a] leading-[0.95] tracking-tight mb-8">
              <span className="block text-5xl md:text-7xl lg:text-[88px]">Kingsten Jones.</span>
              <span className="block text-4xl md:text-6xl lg:text-[76px] text-black/30 font-black mt-3">
                I hire the people who build
              </span>
              <span className="block text-4xl md:text-6xl lg:text-[76px] font-black mt-1 relative w-fit">
                <span className="relative z-10">the products</span>
              </span>
              <span className="block text-4xl md:text-6xl lg:text-[76px] font-black relative w-fit mt-1">
                <span className="relative z-10">you use.</span>
                <span className="absolute left-0 right-0 bottom-2 lg:bottom-3 h-2 lg:h-3 bg-[#CFEA6B] -z-0 -rotate-1"></span>
              </span>
            </h1>

            <p className="text-base lg:text-lg text-black/70 max-w-xl leading-relaxed mb-10">
              Building engineering teams across India, Singapore, Australia, Hong Kong &amp; London.
              Currently building specialty teams at <span className="font-semibold text-black">Atlassian</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={() => scrollTo('experience')}
                data-testid="see-journey-btn"
                className="inline-flex items-center gap-3 bg-black text-white pl-6 pr-5 py-3.5 rounded-full font-mono text-sm hover:bg-black/85 transition-all group"
              >
                see the journey
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="mailto:kingstenjones2@gmail.com"
                data-testid="hero-email-link"
                className="inline-flex items-center gap-2 bg-white/70 border border-black/10 pl-5 pr-5 py-3.5 rounded-full font-mono text-sm hover:bg-white transition-all"
              >
                <Mail size={14} className="text-black/60" />
                kingstenjones2@gmail.com
              </a>
              <div className="inline-flex items-center gap-2 font-mono text-sm text-black/60 ml-1">
                <MapPin size={14} />
                Bangalore, India
              </div>
            </div>
          </div>

          {/* Right: Terminal + Stats */}
          <div className="space-y-6">
            <TerminalWindow />
            <div className="grid grid-cols-4 gap-3">
              <StatBox value="8+" label="Years" />
              <StatBox value="200+" label="Hires" />
              <StatBox value="5" label="Markets" />
              <StatBox value="7" label="Companies" />
            </div>
          </div>
        </div>

        <CompanyLogos />
      </div>
    </section>
  );
};

export default Hero;
