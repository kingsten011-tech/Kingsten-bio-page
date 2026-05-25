import React from 'react';
import CompanyLogo from './CompanyLogo';

const FeatureProject = () => (
  <div
    data-testid="featured-project"
    className="premium-card-dark ambient-surface-dark spark-interactive bg-[#0E0E0C] text-white rounded-2xl p-7 lg:p-10 mb-5 relative overflow-hidden"
  >
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#FFD56B] text-black font-mono text-[10px] font-bold tracking-wider">
          IN PROGRESS
        </span>
        <CompanyLogo id="atlassian" size="sm" />
      </div>
      <h3 className="font-display font-black text-3xl lg:text-[40px] mb-4 tracking-tight leading-tight">
        Recruiter Canvas
      </h3>
      <p className="text-sm lg:text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
        Building a unified recruiting application integrating ATS, scheduling, and reporting systems —
        reducing manual effort, improving recruiter efficiency, and accelerating hiring through better
        pipeline visibility and analytics. A more complex evolution of existing recruiter cockpits.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {['Pipeline visibility', 'Faster hiring', 'Recruiter productivity'].map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#CFEA6B]/30 bg-[#CFEA6B]/5 font-mono text-[10px] text-[#CFEA6B]"
          >
            → {p}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {['#ats-integration', '#scheduling', '#analytics'].map((tag, i) => (
          <span key={i} className="font-mono text-[11px] text-white/40">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div
    data-testid={`project-${project.id}`}
    className="premium-card ambient-surface spark-interactive bg-white rounded-2xl p-5 lg:p-7 border border-black/5 hover:border-black/15 h-full flex flex-col"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider ${project.statusColor}`}>
        {project.status}
      </span>
      <CompanyLogo id={project.companyId} size="sm" />
    </div>
    <h3 className="font-display font-black text-xl lg:text-2xl leading-tight tracking-tight text-black mb-3">
      {project.title}
    </h3>
    <p className="text-[13px] text-black/70 leading-relaxed mb-5 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-3">
      {project.bullets.map((b, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1.5 rounded-md bg-black/[0.04] border border-black/5 font-mono text-[10px] text-black/70"
        >
          → {b}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-3">
      {project.tags.map((t, i) => (
        <span key={i} className="font-mono text-[10px] text-black/35">{t}</span>
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
    companyId: 'postman',
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
    companyId: 'postman',
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
    companyId: 'thetradedesk',
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
    companyId: 'google',
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
      className="bg-[#F7F4EA] py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-xs text-black/40 mb-5">// Notable Projects</div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 lg:mb-14">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-tight text-black max-w-2xl">
            Built, not just billed.
          </h2>
          <p className="font-mono text-[11px] text-black/40 max-w-sm leading-relaxed">
            Initiatives that went beyond filling roles — founding teams, internal tooling, and process design.
          </p>
        </div>

        <FeatureProject />

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
