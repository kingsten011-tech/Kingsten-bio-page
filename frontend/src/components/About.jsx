import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import CardGlowBorder from './motion/CardGlowBorder';

const Achievement = ({ children }) => (
  <div className="premium-card ambient-surface spark-interactive relative bg-white border border-black/5 rounded-2xl p-4 flex items-start gap-3 overflow-hidden">
    <CardGlowBorder />
    <div className="w-6 h-6 rounded-md bg-[#E8F5C0] flex items-center justify-center flex-shrink-0 mt-0.5">
      <Sparkles size={12} className="text-[#7DAF15]" />
    </div>
    <p className="text-[13px] text-black/80 leading-relaxed">{children}</p>
  </div>
);

const StrengthPill = ({ children }) => (
  <span className="premium-link ambient-surface spark-interactive inline-flex items-center px-3.5 py-1.5 rounded-full border border-black/10 bg-white/60 font-mono text-[11px] text-black/70 hover:border-black/30">
    {children}
  </span>
);

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="site-section relative bg-[#F1EDE3] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="font-mono text-xs text-black/40 mb-4">// About</div>
        <h2 className="font-display font-black text-[2rem] sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.05] tracking-tight text-black mb-8 lg:mb-10 max-w-3xl">
          Designing talent strategy that helps teams build faster and smarter.
        </h2>

        <div className="grid lg:grid-cols-[0.6fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Profile photo card — smaller */}
          <div className="relative max-w-sm">
            <div className="absolute -inset-2.5 bg-[#CFEA6B]/40 rounded-3xl blur-sm" />
            <div className="premium-card ambient-surface spark-interactive relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5">
              <CardGlowBorder />
              <img
                src="/images/profile.jpg"
                alt="Kingsten Jones"
                data-testid="profile-photo"
                className="w-full aspect-[4/4.5] object-cover"
              />
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-display font-black text-xl text-black leading-tight">Kingsten Jones</div>
                  <div className="font-mono text-[11px] text-black/50 mt-0.5">Tech Hiring Specialist</div>
                  <div className="font-mono text-[11px] text-black/40 mt-1.5 flex items-center gap-1">
                    <MapPin size={10} />
                    Bangalore, India
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#E8F5C0] px-2.5 py-1 rounded-full flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7DAF15]"></span>
                  <span className="font-mono text-[10px] text-[#5a7e10] uppercase tracking-wider">Open</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base text-black/80 leading-relaxed mb-8 max-w-xl">
              Technology Hiring Specialist with 8+ years of experience across global markets.
              I partner with engineering leadership to recruit high-performing software, ML, and
              platform teams — end-to-end, data-driven, and candidate-first.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              <Achievement>170% of hiring targets in Q2 &amp; Q3 at Atlassian</Achievement>
              <Achievement>&gt;95% offer-to-acceptance ratio at Postman</Achievement>
              <Achievement>Built the Postbot AI founding team (projected $2M+ ARR)</Achievement>
              <Achievement>Promoted from Recruiter I → Recruiter II at Google in 1 year</Achievement>
            </div>

            <div>
              <div className="font-mono text-[11px] text-black/40 mb-3">// Strengths</div>
              <div className="flex flex-wrap gap-2">
                <StrengthPill>Executive Sourcing</StrengthPill>
                <StrengthPill>Engineering Leadership Hiring</StrengthPill>
                <StrengthPill>Stakeholder Partnership</StrengthPill>
                <StrengthPill>Talent Strategy</StrengthPill>
                <StrengthPill>Market Intelligence</StrengthPill>
                <StrengthPill>Interviewer Calibration</StrengthPill>
                <StrengthPill>Interviewer Analysis</StrengthPill>
                <StrengthPill>Training &amp; Mentoring</StrengthPill>
                <StrengthPill>Data Driven Hiring</StrengthPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
