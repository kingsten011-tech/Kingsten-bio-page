import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Effective Sourcing Strategies',
    provider: 'SocialTalent',
    id: '125822',
    description: 'Advanced techniques for effective talent sourcing across multiple channels',
  },
  {
    title: 'Strategic Sourcing Models',
    provider: 'SocialTalent',
    id: '119079',
    description: 'Strategic frameworks for building scalable sourcing processes',
  },
  {
    title: 'Expert Sourcing',
    provider: 'SocialTalent',
    description: 'Master-level sourcing techniques for hard-to-fill technical roles',
  },
];

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'GRD School of Commerce and International Business',
    period: '2016 - 2018',
    focus: 'HR, Marketing, and Finance',
  },
  {
    degree: 'BSc in Design and Visual Communications',
    institution: 'PSG College of Arts and Science',
    period: '2012 - 2015',
    focus: 'Photography and Visual Design',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-xs text-[#8fb339] mb-8">
          <span className="opacity-60">/* ————— section: certifications & education ————— */</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          Certifications & Education
        </h2>

        {/* Certifications */}
        <div className="mb-16">
          <div className="font-mono text-sm text-[#8fb339] mb-6">
            <span className="text-[#1a1a1a] opacity-60">const</span> certifications = [
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#fdfcf9] border border-[#e5e3db] rounded-lg p-6 hover:border-[#8fb339] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-white rounded group-hover:bg-[#8fb339] transition-colors">
                    <Award size={20} className="text-[#8fb339] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1a1a1a] mb-1">{cert.title}</h3>
                    <div className="font-mono text-xs text-[#8fb339]">{cert.provider}</div>
                    {cert.id && (
                      <div className="font-mono text-xs text-[#1a1a1a]/40 mt-1">ID: {cert.id}</div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
          <div className="font-mono text-sm text-[#8fb339] mt-6">
            ];
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="font-mono text-sm text-[#8fb339] mb-6">
            <span className="text-[#1a1a1a] opacity-60">const</span> education = [
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#fdfcf9] border-l-4 border-[#8fb339] rounded-r-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">{edu.degree}</h3>
                    <p className="text-[#1a1a1a]/80 mb-1">{edu.institution}</p>
                    <p className="text-sm text-[#1a1a1a]/60">
                      <span className="font-mono text-[#8fb339]">{edu.period}</span> • {edu.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-mono text-sm text-[#8fb339] mt-6">
            ];
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
