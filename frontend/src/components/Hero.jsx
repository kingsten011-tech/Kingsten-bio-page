import React from 'react';
import { ArrowDown, Mail, MapPin, Download } from 'lucide-react';

const TerminalWindow = () => (
  <div data-testid="hero-terminal" className="bg-[#0E0E0C] rounded-xl overflow-hidden shadow-2xl shadow-black/20 w-full max-w-md mx-auto">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
      </div>
      <span className="font-mono text-xs text-white/40 ml-2">~ /kingsten</span>
    </div>
    <div className="p-5 font-mono text-[12px] leading-relaxed">
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
  <div className="bg-white/60 border border-black/5 rounded-xl px-4 py-3.5 backdrop-blur-sm">
    <div className="font-display text-xl md:text-2xl font-black text-black leading-none mb-1.5">{value}</div>
    <div className="font-mono text-[9px] tracking-widest text-black/50 uppercase">{label}</div>
  </div>
);

const LOGOS = [
  { type: 'icon', name: 'Atlassian', slug: 'atlassian', color: '0052CC', textColor: '#0052CC' },
  { type: 'icon', name: 'Postman', slug: 'postman', color: 'FF6C37', textColor: '#FF6C37' },
  { type: 'google', name: 'Google' },
  { type: 'image', name: 'Oracle', src: '/images/oracle.png', height: 'h-12' },
  { type: 'image', name: 'Thoughtworks', src: '/images/thoughtworks.png', height: 'h-10' },
  { type: 'wordmark', name: 'theTradeDesk', className: 'text-black font-bold tracking-tight text-xl' },
];

const LogoItem = ({ logo }) => {
  if (logo.type === 'wordmark') {
    return (
      <div className="flex items-center h-10 px-5 flex-shrink-0">
        <span className={logo.className}>{logo.name}</span>
      </div>
    );
  }
  if (logo.type === 'image') {
    return (
      <div className="flex items-center h-10 px-5 flex-shrink-0">
        <img
          src={logo.src}
          alt={logo.name}
          className={`${logo.height} w-auto object-contain ${logo.rounded ? 'rounded-md' : ''}`}
          loading="lazy"
        />
      </div>
    );
  }
  if (logo.type === 'google') {
    return (
      <div className="flex items-center gap-2.5 h-10 px-5 flex-shrink-0">
        <svg viewBox="0 0 48 48" className="h-7 w-7">
          <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84a10.12 10.12 0 0 1-4.4 6.64v5.52h7.1c4.16-3.83 6.58-9.47 6.58-16.17Z"/>
          <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.55-5.33l-7.1-5.52a13.5 13.5 0 0 1-20.13-7.07h-7.34v5.7A22 22 0 0 0 24 46Z"/>
          <path fill="#FBBC05" d="M10.32 28.08a13.21 13.21 0 0 1 0-8.16v-5.7H2.98a22 22 0 0 0 0 19.56l7.34-5.7Z"/>
          <path fill="#EA4335" d="M24 9.92c3.23 0 6.13 1.11 8.41 3.3l6.3-6.3A22 22 0 0 0 24 2C15.46 2 8.07 6.9 4.36 14.22l7.34 5.7A13.16 13.16 0 0 1 24 9.92Z"/>
        </svg>
        <span className="font-medium text-xl tracking-tight text-black/85" style={{ fontFamily: 'Arial, sans-serif' }}>
          Google
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2.5 h-10 px-5 flex-shrink-0">
      <img
        src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`}
        alt={logo.name}
        className="h-7 w-7 object-contain"
        loading="lazy"
      />
      <span className="font-bold text-xl tracking-tight" style={{ color: logo.textColor }}>
        {logo.name}
      </span>
    </div>
  );
};

const CompanyLogos = () => {
  // Duplicate the logos to create the infinite marquee effect
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <div className="mt-20 lg:mt-24">
      <div className="font-mono text-xs text-black/40 mb-6">// Trusted By Teams At</div>
      <div
        data-testid="company-marquee"
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex gap-8 animate-marquee">
          {marqueeLogos.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative bg-[#F1EDE3] pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #00000040 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 bg-white/70 border border-black/5 rounded-full px-3.5 py-1.5 mb-10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7DAF15] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7DAF15]"></span>
          </span>
          <span className="font-mono text-[11px] text-black/70">open to talk talent strategy</span>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="font-mono text-xs text-black/40 mb-5">// Hello, World</div>

            <h1 className="font-display font-black text-[#0a0a0a] leading-[0.95] tracking-tight mb-7">
              <span className="block text-4xl md:text-5xl lg:text-[60px] whitespace-nowrap">Kingsten Jones.</span>
              <span className="block text-3xl md:text-4xl lg:text-[52px] text-black/30 font-black mt-3">
                I hire the people who build
              </span>
              <span className="block text-3xl md:text-4xl lg:text-[52px] font-black mt-1 relative w-fit">
                <span className="relative z-10">the products</span>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-[52px] font-black relative w-fit mt-1">
                <span className="relative z-10">you use.</span>
                <span className="absolute left-0 right-0 bottom-1.5 lg:bottom-2 h-2 lg:h-2.5 bg-[#CFEA6B] -z-0 -rotate-1"></span>
              </span>
            </h1>

            <p className="text-sm lg:text-base text-black/70 max-w-xl leading-relaxed mb-8">
              Building engineering teams across India, Singapore, Australia, Hong Kong &amp; London.
              Currently building specialty teams at <span className="font-semibold text-black">Atlassian</span>.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => scrollTo('experience')}
                data-testid="see-journey-btn"
                className="inline-flex items-center gap-2.5 bg-black text-white pl-5 pr-4 py-3 rounded-full font-mono text-[13px] hover:bg-black/85 transition-all group"
              >
                see the journey
                <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download="Kingsten-Jones-Resume.pdf"
                data-testid="download-resume-btn"
                className="inline-flex items-center gap-2 bg-[#CFEA6B] hover:bg-[#bcd957] text-black pl-5 pr-4 py-3 rounded-full font-mono text-[13px] transition-all group"
              >
                <Download size={13} />
                resume.pdf
              </a>
              <a
                href="mailto:kingstenjones2@gmail.com"
                data-testid="hero-email-link"
                className="inline-flex items-center gap-2 bg-white/70 border border-black/10 pl-4 pr-4 py-3 rounded-full font-mono text-[13px] hover:bg-white transition-all"
              >
                <Mail size={13} className="text-black/60" />
                kingstenjones2@gmail.com
              </a>
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-black/60">
              <MapPin size={13} />
              Bangalore, India
            </div>
          </div>

          <div className="space-y-5">
            <TerminalWindow />
            <div className="grid grid-cols-4 gap-2.5">
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
