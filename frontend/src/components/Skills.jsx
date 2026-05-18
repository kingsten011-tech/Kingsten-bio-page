import React from 'react';
import { Code, Users, TrendingUp, Target, Lightbulb, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Recruitment Expertise',
    icon: Target,
    skills: [
      'Executive Sourcing',
      'Tech Recruitment',
      'Engineering Leadership Hiring',
      'Full-Cycle Recruitment',
      'Niche & Volume Hiring',
      'Candidate Screening',
    ],
  },
  {
    title: 'Sourcing & Research',
    icon: Database,
    skills: [
      'Boolean Search',
      'X-Ray Search',
      'LinkedIn Recruiting',
      'GitHub Sourcing',
      'Social Media Recruiting',
      'Market Mapping',
    ],
  },
  {
    title: 'Strategy & Leadership',
    icon: Lightbulb,
    skills: [
      'Talent Strategy',
      'Stakeholder Partnership',
      'Market Intelligence',
      'Team Mentoring',
      'Process Optimization',
      'DEI Initiatives',
    ],
  },
  {
    title: 'Technical Knowledge',
    icon: Code,
    skills: [
      'AI/ML Roles',
      'Backend Engineering',
      'Frontend Engineering',
      'DevOps & SRE',
      'Cloud Technologies',
      'Security Engineering',
    ],
  },
  {
    title: 'Data & Analytics',
    icon: TrendingUp,
    skills: [
      'Hiring Metrics (PTR, TTF)',
      'Pipeline Analytics',
      'Compensation Benchmarking',
      'Data-Driven Decisions',
      'Reporting & Insights',
      'Market Research',
    ],
  },
  {
    title: 'Collaboration',
    icon: Users,
    skills: [
      'Stakeholder Management',
      'Cross-Functional Partnership',
      'Interviewer Training',
      'Candidate Experience',
      'Team Building',
      'Global Coordination',
    ],
  },
];

const SkillCard = ({ category }) => {
  const Icon = category.icon;
  return (
    <div className="bg-white border border-[#e5e3db] rounded-lg p-6 hover:border-[#8fb339] transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[#8fb339]/10 rounded group-hover:bg-[#8fb339] transition-colors">
          <Icon size={20} className="text-[#8fb339] group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-bold text-lg text-[#1a1a1a]">{category.title}</h3>
      </div>
      <div className="space-y-2">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-[#1a1a1a]/80">
            <span className="text-[#8fb339] font-mono text-xs">✓</span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#fdfcf9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-xs text-[#8fb339] mb-8">
          <span className="opacity-60">/* ————— section: skills ————— */</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#1a1a1a]/60 font-mono text-sm">
            <span className="text-[#8fb339]">Core competencies</span> across recruitment, strategy, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
