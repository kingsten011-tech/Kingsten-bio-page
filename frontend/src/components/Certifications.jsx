import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    institution: 'GRD School of Commerce & International Business',
    degree: 'MBA — HR (with Marketing & Finance)',
    period: '2016 — 2018',
  },
  {
    institution: 'PSG College of Arts and Science',
    degree: 'B.Sc. Design & Visual Communications',
    period: '2012 — 2015',
    note: 'Pursued for the love of photography.',
  },
];

const certifications = [
  { title: 'Effective Sourcing Strategies', provider: 'SocialTalent', id: '125822' },
  { title: 'Strategic Sourcing Models', provider: 'SocialTalent', id: '119079' },
  { title: 'Expert Sourcing', provider: 'SocialTalent', id: '245332' },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="bg-[#F7F4EA] py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Education */}
          <div>
            <div className="font-mono text-xs text-black/40 mb-5">// Education</div>
            <h2 className="font-display font-black text-2xl md:text-3xl lg:text-[40px] leading-[1.05] tracking-tight text-black mb-10">
              Roots in business &amp; design.
            </h2>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  data-testid={`education-${i}`}
                  className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0E0E0C] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-[#CFEA6B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base text-black leading-tight mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-[13px] text-black/70 mb-1.5">{edu.degree}</p>
                    <div className="font-mono text-[11px] text-black/40">{edu.period}</div>
                    {edu.note && (
                      <p className="text-[11px] italic text-black/40 mt-2.5">{edu.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="font-mono text-xs text-black/40 mb-5">// Certifications</div>
            <h2 className="font-display font-black text-2xl md:text-3xl lg:text-[40px] leading-[1.05] tracking-tight text-black mb-10">
              Always sharpening.
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  data-testid={`certification-${i}`}
                  className="bg-white border border-black/5 rounded-2xl p-5 flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5C0] flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-[#7DAF15]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-sm text-black leading-tight">
                      {cert.title}
                    </h3>
                    <div className="font-mono text-[11px] text-black/50 mt-1">{cert.provider}</div>
                  </div>
                  <div className="inline-flex items-center px-2.5 py-1.5 rounded-md bg-[#F8D2E2]/40 border border-[#F8D2E2] font-mono text-[10px] text-[#9b2c5e]">
                    ID: {cert.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
