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
  { title: 'Expert Sourcing', provider: 'SocialTalent', id: '—' },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="bg-[#F7F4EA] py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <div className="font-mono text-sm text-black/40 mb-6">// Education</div>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[52px] leading-[1.02] tracking-tight text-black mb-12">
              Roots in business &amp; design.
            </h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  data-testid={`education-${i}`}
                  className="bg-white border border-black/5 rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0E0E0C] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={20} className="text-[#CFEA6B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-black leading-tight mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-black/70 mb-2">{edu.degree}</p>
                    <div className="font-mono text-xs text-black/40">{edu.period}</div>
                    {edu.note && (
                      <p className="text-xs italic text-black/40 mt-3">{edu.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="font-mono text-sm text-black/40 mb-6">// Certifications</div>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[52px] leading-[1.02] tracking-tight text-black mb-12">
              Always sharpening.
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  data-testid={`certification-${i}`}
                  className="bg-white border border-black/5 rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E8F5C0] flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-[#7DAF15]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base text-black leading-tight">
                      {cert.title}
                    </h3>
                    <div className="font-mono text-xs text-black/50 mt-1">{cert.provider}</div>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#F8D2E2]/40 border border-[#F8D2E2] font-mono text-[11px] text-[#9b2c5e]">
                    id: {cert.id}
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
