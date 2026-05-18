import React from 'react';
import { Terminal, Wrench, Heart } from 'lucide-react';

const columns = [
  {
    id: 'core',
    label: 'CORE CRAFT',
    Icon: Terminal,
    items: [
      'Executive Sourcing',
      'Engineering Leadership Hiring',
      'Talent Strategy',
      'Market Intelligence',
      'Stakeholder Partnership',
      'Interviewer Calibration',
      'DEI Hiring',
      'AI/ML Hiring',
    ],
  },
  {
    id: 'toolkit',
    label: 'TOOLKIT',
    Icon: Wrench,
    items: [
      'LinkedIn Recruiter',
      'Boolean / X-Ray',
      'GitHub Sourcing',
      'Stack Overflow',
      'ATS (Greenhouse, Workday)',
      'Excel / Sheets',
      'Photoshop',
    ],
  },
  {
    id: 'signals',
    label: 'SIGNALS',
    Icon: Heart,
    items: [
      'Communication',
      'Mentorship',
      'Data Storytelling',
      'Cross-cultural Hiring',
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="bg-[#F1EDE3] py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-sm text-black/40 mb-6">// Stack</div>
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-black mb-14 lg:mb-20">
          The recruiting stack.
        </h2>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {columns.map(({ id, label, Icon, items }) => (
            <div
              key={id}
              data-testid={`stack-column-${id}`}
              className="bg-white rounded-3xl p-7 lg:p-8 border border-black/5"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#0E0E0C] flex items-center justify-center">
                  <Icon size={20} className="text-[#CFEA6B]" />
                </div>
                <div className="font-mono text-xs tracking-widest text-black/60">{label}</div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3.5 py-2 rounded-lg bg-[#F1EDE3] border border-black/5 font-mono text-[12px] text-black/75 hover:bg-[#E8E4D8] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
