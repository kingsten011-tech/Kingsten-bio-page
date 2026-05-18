import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureProject = () => (
  <div
    data-testid="featured-project"
    className="bg-[#0E0E0C] text-white rounded-2xl p-8 lg:p-12 mb-6 relative overflow-hidden group cursor-pointer hover:bg-[#15140f] transition-colors"
  >
    <div className="flex items-start justify-between gap-6">
      <div className="flex-1 max-w-3xl">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFD56B] text-black font-mono text-[11px] font-bold tracking-wider">
            IN PROGRESS
          </span>
          <span className="font-mono text-xs text-white/40">@ Atlassian</span>
        </div>
        <h3 className="font-display font-black text-4xl lg:text-5xl mb-5 tracking-tight">Recruiter Canvas</h3>
        <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-7 max-w-2xl">
          Building a unified recruiting application integrating ATS, scheduling, and reporting systems —
          reducing manual effort, improving recruiter efficiency, and accelerating hiring through better
          pipeline visibility and analytics. A more complex evolution of existing recruiter cockpits.
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {['Pipeline visibility', 'Faster hiring', 'Recruiter productivity'].map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#CFEA6B]/30 bg-[#CFEA6B]/5 font-mono text-[11px] text-[#CFEA6B]"
            >
              → {p}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {['#ats-integration', '#scheduling', '#analytics'].map((tag, i) => (
            <span key={i} className="font-mono text-xs text-white/40">{tag}</span>
          ))}
        </div>
      </div>
      <ArrowUpRight size={22} className="text-white/40 group-hover:text-[#CFEA6B] group-hover:rotate-12 transition-all flex-shrink-0" />
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div
    data-testid={`project-${project.id}`}
    className="bg-white rounded-2xl p-6 lg:p-8 border border-black/5 hover:border-black/15 transition-all group cursor-pointer h-full flex flex-col"
  >
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider ${project.statusColor}`}>
          {project.status}
        </span>
        <span className="font-mono text-xs text-black/40">@ {project.company}</span>
      </div>
      <ArrowUpRight size={18} className="text-black/30 group-hover:text-black group-hover:rotate-12 transition-all" />
    </div>
    <h3 className="font-display font-black text-2xl lg:text-[28px] leading-tight tracking-tight text-black mb-4">
      {project.title}
    </h3>
    <p className="text-sm text-black/70 leading-relaxed mb-6 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.bullets.map((b, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1.5 rounded-md bg-black/[0.04] border border-black/5 font-mono text-[11px] text-black/70"
        >
          → {b}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-3">
      {project.tags.map((t, i) => (
        <span key={i} className="font-mono text-[11px] text-black/35">{t}</span>
      ))}
    </div>
  </div>
);

const projects = [
  {
    id: 'postbot',
    status: 'SHIPPED',
    statusColor: 'bg-[#D4F1B5] text-[#3b6308]',
    company: 'Postman',
    title: 'Postbot AI — Founding Team',
    description: 'Built the founding engineering team for Postbot AI alongside co-founder Abhijit Kane. The product is now projected to drive $2M+ ARR.',
    bullets: ['$2M+ ARR projection', 'First AI Applied Engineer', 'GA-ready org'],
    tags: ['#ai-ml', '#founding-hiring', '#leadership'],
  },
  {
    id: 'performance',
    status: 'GA 2025',
    statusColor: 'bg-[#E0DAFB] text-[#4a3da7]',
    company: 'Postman',
    title: 'Performance Testing — Founding Team',
    description: "Recruited the founding engineering org for Postman's Performance Testing product, slated for general availability in 2025.",
    bullets: ['GA-ready team', 'Cross-functional hires'],
    tags: ['#performance', '#backend', '#founding-hiring'],
  },
  {
    id: 'apac',
    status: 'ADOPTED',
    statusColor: 'bg-[#CFE9F5] text-[#1f5778]',
    company: 'The Trade Desk',
    title: 'APAC Hiring Playbook',
    description: 'Designed APAC hiring strategy — interviewer calibration, candidate prep docs, unified hiring process, onboarding flow — used across Singapore, Australia & India.',
    bullets: ['~70% source→offer PTR', 'DEI-first pipeline', 'Cross-region adoption'],
    tags: ['#process-design', '#calibration', '#dei'],
  },
  {
    id: 'insights',
    status: 'CONTRIBUTOR',
    statusColor: 'bg-[#F8D2E2] text-[#9b2c5e]',
    company: 'Google',
    title: 'Talent Insights',
    description: 'Contributed to a cross-team initiative analyzing decline patterns — decoding the why and where of candidate drop-offs to improve funnel quality.',
    bullets: ['Decline RCA', 'Funnel quality', 'Leadership reporting'],
    tags: ['#analytics', '#funnel', '#strategy'],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="bg-[#F7F4EA] py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-sm text-black/40 mb-6">// Notable Projects</div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-black max-w-2xl">
            Built, not just billed.
          </h2>
          <p className="font-mono text-xs text-black/40 max-w-sm leading-relaxed">
            initiatives that went beyond filling roles — founding teams, internal tooling, and process design.
          </p>
        </div>

        <FeatureProject />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
