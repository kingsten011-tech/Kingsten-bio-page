import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

const Achievement = ({ children }) => (
  <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3">
    <div className="w-7 h-7 rounded-md bg-[#E8F5C0] flex items-center justify-center flex-shrink-0 mt-0.5">
      <Sparkles size={14} className="text-[#7DAF15]" />
    </div>
    <p className="text-sm text-black/80 leading-relaxed">{children}</p>
  </div>
);

const StrengthPill = ({ children }) => (
  <span className="inline-flex items-center px-4 py-2 rounded-full border border-black/10 bg-white/60 font-mono text-xs text-black/70 hover:border-black/30 transition-colors">
    {children}
  </span>
);

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#F1EDE3] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-sm text-black/40 mb-6">// about</div>
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-black mb-16 lg:mb-20 max-w-3xl">
          Talent strategy that reads like product strategy.
        </h2>

        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Profile photo card */}
          <div className="relative">
            <div className="absolute -inset-3 bg-[#CFEA6B]/40 rounded-3xl blur-sm" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5">
              <img
                src="/images/profile.jpg"
                alt="Kingsten Jones"
                data-testid="profile-photo"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-2xl text-black leading-tight">Kingsten Jones</div>
                  <div className="font-mono text-xs text-black/50 mt-1">Technology Hiring Specialist</div>
                  <div className="font-mono text-xs text-black/40 mt-2 flex items-center gap-1">
                    <MapPin size={11} />
                    Bangalore, India
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#E8F5C0] px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7DAF15]"></span>
                  <span className="font-mono text-[11px] text-[#5a7e10] uppercase tracking-wider">Open</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div>
            <p className="text-lg text-black/80 leading-relaxed mb-10 max-w-xl">
              Technology Hiring Specialist with 8+ years of experience across global markets.
              I partner with engineering leadership to recruit high-performing software, ML, and
              platform teams — end-to-end, data-driven, and candidate-first.
            </p>

            {/* Achievement grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              <Achievement>170% of hiring targets in Q2 &amp; Q3 at Atlassian</Achievement>
              <Achievement>&gt;95% offer-to-acceptance ratio at Postman</Achievement>
              <Achievement>Built the Postbot AI founding team (projected $2M+ ARR)</Achievement>
              <Achievement>Promoted from Recruiter I → Recruiter II at Google in 1 year</Achievement>
            </div>

            {/* Strengths */}
            <div>
              <div className="font-mono text-xs text-black/40 mb-4">// strengths</div>
              <div className="flex flex-wrap gap-2">
                <StrengthPill>Executive Sourcing</StrengthPill>
                <StrengthPill>Engineering Leadership Hiring</StrengthPill>
                <StrengthPill>Stakeholder Partnership</StrengthPill>
                <StrengthPill>Talent Strategy</StrengthPill>
                <StrengthPill>Market Intelligence</StrengthPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
