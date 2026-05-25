import React from 'react';
import { Terminal, Wrench, Heart } from 'lucide-react';
import CardGlowBorder from './motion/CardGlowBorder';

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
      className="site-section bg-[#F1EDE3]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="font-mono text-xs text-black/40 mb-4">// Skills</div>
        <h2 className="font-display font-black text-[2rem] sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.05] tracking-tight text-black mb-6 lg:mb-8">
          The recruiting stack.
        </h2>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {columns.map(({ id, label, Icon, items }) => (
            <div
              key={id}
              data-testid={`stack-column-${id}`}
              className="premium-card ambient-surface spark-interactive relative overflow-hidden bg-white rounded-3xl site-card-pad border border-black/5"
            >
              <CardGlowBorder />
              <div className="relative z-[1]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0E0E0C] flex items-center justify-center">
                    <Icon size={18} className="text-[#CFEA6B]" />
                  </div>
                  <div className="font-mono text-[11px] tracking-widest text-black/60">{label}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#F1EDE3] border border-black/5 font-mono text-[11px] text-black/75 hover:bg-[#E8E4D8] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
