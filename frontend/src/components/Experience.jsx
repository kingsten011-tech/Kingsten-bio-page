import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import CompanyLogo from './CompanyLogo';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const BRAND = {
  atlassian: { color: '#0052CC', glow: 'rgba(0, 82, 204, 0.1)' },
  postman: { color: '#FF6C37', glow: 'rgba(255, 108, 55, 0.1)' },
  thetradedesk: { color: '#0099DA', glow: 'rgba(0, 153, 218, 0.09)' },
  google: { color: '#4285F4', glow: 'rgba(66, 133, 244, 0.09)' },
  thoughtworks: { color: '#8311FA', glow: 'rgba(131, 17, 250, 0.08)' },
  oracle: { color: '#C74634', glow: 'rgba(199, 70, 52, 0.09)' },
  careernet: { color: '#5a7e10', glow: 'rgba(90, 126, 16, 0.09)' },
};

const experiences = [
  {
    id: 'atlassian',
    company: 'Atlassian',
    role: 'Senior Recruiter — Tech, Specialty Roles',
    period: 'Aug 2025 — Present',
    location: 'Bangalore, India',
    summary:
      'Core Product & R&D specialty hiring across Rovo Search, ITSM, Jira AI, Central AI, and Security ML.',
    badge: 'NOW',
    tags: ['AI/ML', 'Search', 'Security', 'Leadership'],
    sections: [
      {
        title: 'Hiring Scope',
        items: [
          'Senior IC (P50–P70) and leadership (M70) across ML, Backend, SRE, DevOps & Security.',
          'Specialty roles across Rovo Search, ITSM, Jira AI, Central AI, and Security ML.',
        ],
      },
      {
        title: 'Impact',
        items: [
          '170% of hiring targets in Q2 & Q3 on niche, high-priority roles.',
          'Closed first ML Security Engineer hire; critical Search role in 2 weeks via headhunting.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['Rovo Search', 'ITSM', 'Jira AI', 'Central AI', 'Security ML'],
      },
      {
        title: 'Hiring Geography',
        items: ['Bangalore, India — global specialty alignment'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'Data-led hiring velocity for AI-native product surfaces and security-critical engineering at senior depth.',
    },
  },
  {
    id: 'postman',
    company: 'Postman',
    role: 'Staff Tech Talent Partner (IC4)',
    period: 'Mar 2024 — Aug 2025',
    location: 'Bangalore, India',
    summary: 'Led hiring across Core Products, Data and AI — 6 business groups in parallel.',
    tags: ['AI', 'Platform', 'Founding Team'],
    sections: [
      {
        title: 'Hiring Scope',
        items: [
          '30+ hires from Sr EM to Principal SE across AI, Data, and Platform.',
          'Six business groups in parallel — core product and growth surfaces.',
        ],
      },
      {
        title: 'Impact',
        items: [
          'Built Postbot AI founding team with Co-founder Abhijit Kane (projected $2M+ ARR).',
          'PTR improved 15:1 → 8:1; >95% offer-to-acceptance, >90% acceptance-to-joining.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['Core Products', 'Data', 'AI / Postbot', 'Platform Engineering'],
      },
      {
        title: 'Hiring Geography',
        items: ['Bangalore, India'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'Founding-team construction and interviewer calibration for high-leverage AI product hiring.',
    },
  },
  {
    id: 'thetradedesk',
    company: 'The Trade Desk',
    role: 'Senior Recruiter — Tech, India / APAC',
    period: 'Jul 2022 — Nov 2023',
    location: 'Bangalore, India',
    summary: 'Built the Bangalore tech team from scratch with the Director of Engineering APAC.',
    tags: ['APAC', 'Design', 'Frontend', 'Backend'],
    sections: [
      {
        title: 'Hiring Scope',
        items: [
          'Greenfield Bangalore tech build with Director of Engineering APAC.',
          'Senior roles across India, Singapore, and Australia.',
        ],
      },
      {
        title: 'Impact',
        items: [
          'Led RPO/sourcing team of 4; ~70% source→close PTR.',
          '35–45% diversity sustained in active pipeline.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['Engineering APAC', 'Design', 'Frontend', 'Backend'],
      },
      {
        title: 'Hiring Geography',
        items: ['India', 'Singapore', 'Australia'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'Candidate-friendly funnel design and APAC hiring strategy from zero-to-team.',
    },
  },
  {
    id: 'google',
    company: 'Google',
    role: 'Recruiter — Tech, Horizontals India',
    period: 'Feb 2021 — Jul 2022',
    location: 'Bangalore, India',
    summary: '50+ software engineering hires across backend, full-stack, cloud storage & networking.',
    tags: ['SWE', 'Cloud', 'DEI'],
    sections: [
      {
        title: 'Hiring Scope',
        items: [
          '50+ SWE roles — backend, full-stack, cloud storage, and networking.',
          'Remarkable PTR performance across the full funnel.',
        ],
      },
      {
        title: 'Impact',
        items: [
          'Delivery Superstar Award (Q1 2022); promoted to Recruiter II in under a year.',
          'Single point of contact for India declines; cross-functional with HC & comp.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['Horizontals India', 'Cloud Storage', 'Networking', 'Backend / Full-stack'],
      },
      {
        title: 'Hiring Geography',
        items: ['Bangalore, India'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'High-volume SWE delivery with ATS, LinkedIn, and GitHub sourcing at Google scale.',
    },
  },
  {
    id: 'thoughtworks',
    company: 'Thoughtworks',
    role: 'Technical Recruiter (Contract)',
    period: 'Mar 2020 — Feb 2021',
    location: 'Coimbatore, India',
    summary: 'Owned the full recruitment cycle and built sourcing training modules.',
    tags: ['Full-cycle', 'Training'],
    sections: [
      {
        title: 'Hiring Scope',
        items: ['End-to-end ownership from sourcing through offer creation.'],
      },
      {
        title: 'Impact',
        items: [
          'Authored social-media sourcing playbooks adopted by the team.',
          'Data-driven identification and closure of niche technical talent.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['Consulting delivery teams', 'Technical consulting hires'],
      },
      {
        title: 'Hiring Geography',
        items: ['Coimbatore, India'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'Playbook-driven sourcing training and full-cycle ownership in a consulting model.',
    },
  },
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Talent Sourcer (Contract)',
    period: 'Mar 2019 — Feb 2020',
    location: 'Bangalore, India',
    summary: 'Sourced for Linux Eng, OCI, ODA, MySQL, Oracle Financials, and support orgs.',
    tags: ['Sourcing', 'X-Ray'],
    sections: [
      {
        title: 'Hiring Scope',
        items: [
          'Linux Eng, OCI, ODA, MySQL, Oracle Financials, and support organizations.',
          'Volume + niche hiring with Boolean / X-Ray research.',
        ],
      },
      {
        title: 'Impact',
        items: [
          'Lead generation via headhunting, referencing, and team mapping.',
          'Recruitment research for talent pool and CTC insights.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['OCI', 'Linux Engineering', 'MySQL', 'Financials'],
      },
      {
        title: 'Hiring Geography',
        items: ['Bangalore, India'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'Deep technical sourcing across cloud and database engineering pipelines.',
    },
  },
  {
    id: 'careernet',
    company: 'Careernet',
    role: 'Recruiter',
    period: 'May 2018 — Mar 2019',
    location: 'Bangalore, India',
    summary:
      'Predominantly worked on leading semicon product clients — Nvidia, Sandisk, Qualcomm, Aricent, HP.',
    tags: ['Semiconductors', 'Startups'],
    sections: [
      {
        title: 'Hiring Scope',
        items: [
          'Niche & senior Embedded and Application Software roles.',
          'Clients: Nvidia, Sandisk, Qualcomm, Aricent, HP.',
        ],
      },
      {
        title: 'Impact',
        items: [
          'Role-fitment-first bridge to top tech companies.',
          'Researched and shipped new sourcing methodologies.',
        ],
      },
      {
        title: 'Teams Supported',
        items: ['Semiconductor product clients', 'Embedded & Application Software'],
      },
      {
        title: 'Hiring Geography',
        items: ['Bangalore, India'],
      },
    ],
    insight: {
      title: 'Strategic Focus',
      body: 'Early-career foundation in niche semicon hiring and client-partner delivery.',
    },
  },
];

const transition = (reduced) => ({
  duration: reduced ? 0.15 : 0.34,
  ease: [0.22, 1, 0.36, 1],
});

const panelVariants = (reduced) => ({
  initial: {
    opacity: 0,
    y: reduced ? 0 : 12,
    filter: reduced ? 'blur(0px)' : 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    y: reduced ? 0 : -8,
    filter: reduced ? 'blur(0px)' : 'blur(4px)',
  },
});

const SectionBlock = ({ title, items }) => (
  <div className="rounded-2xl bg-[#F1EDE3]/70 border border-black/[0.04] p-4 lg:p-5 h-full">
    <h4 className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-[13px] text-black/75 leading-relaxed flex gap-2">
          <span className="text-[#7DAF15] font-mono text-[10px] mt-1 flex-shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CompanySelector = ({ activeId, onSelect }) => (
  <div
    className="flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin"
    data-testid="experience-company-selector"
    role="tablist"
    aria-label="Select company"
  >
    {experiences.map((exp) => {
      const brand = BRAND[exp.id];
      const isActive = activeId === exp.id;
      return (
        <button
          key={exp.id}
          type="button"
          role="tab"
          aria-selected={isActive}
          data-testid={`experience-selector-${exp.id}`}
          onClick={() => onSelect(exp.id)}
          className={`premium-card ambient-surface spark-interactive flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all duration-300 ${
            isActive
              ? 'bg-white shadow-md shadow-black/[0.06] border-black/10'
              : 'bg-white/60 border-black/5 hover:bg-white hover:border-black/10'
          }`}
          style={
            isActive
              ? {
                  boxShadow: `0 8px 24px -10px rgba(10,10,9,0.08), 0 0 0 1px ${brand.color}22, 0 0 20px -6px ${brand.glow}`,
                  borderColor: `${brand.color}33`,
                }
              : undefined
          }
        >
          <CompanyLogo id={exp.id} size="sm" />
          <span className="font-mono text-[11px] text-black/70 whitespace-nowrap pr-0.5">
            {exp.company}
          </span>
        </button>
      );
    })}
  </div>
);

const ExperiencePanel = ({ exp, ...motionProps }) => {
  const brand = BRAND[exp.id];

  return (
    <motion.article
      {...motionProps}
      data-testid={`experience-card-${exp.id}`}
      className="premium-card ambient-surface spark-interactive relative rounded-3xl border border-black/5 overflow-hidden shadow-lg shadow-black/[0.04]"
      style={{
        background: `linear-gradient(148deg, ${brand.glow} 0%, rgba(255,255,255,0.92) 38%, #ffffff 72%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 12% 0%, ${brand.glow} 0%, transparent 55%)`,
        }}
      />

      <div className="relative p-6 lg:p-9">
        <div className="grid lg:grid-cols-[1fr_240px] gap-8 lg:gap-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <CompanyLogo id={exp.id} size="lg" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-black text-2xl lg:text-[28px] text-black leading-tight">
                    {exp.company}
                  </h3>
                  {exp.badge && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#CFEA6B] font-mono text-[10px] font-bold tracking-wider text-black">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm lg:text-base text-black/80 mt-1">{exp.role}</p>
              </div>
            </div>

            <div className="font-mono text-[11px] text-black/40 flex flex-wrap items-center gap-3 mb-5">
              <span>{exp.period}</span>
              <span className="flex items-center gap-1">
                <MapPin size={10} />
                {exp.location}
              </span>
            </div>

            <p className="text-sm lg:text-base text-black/70 leading-relaxed mb-8 max-w-2xl">
              {exp.summary}
            </p>

            <div
              className="grid sm:grid-cols-2 gap-3 lg:gap-4"
              data-testid={`experience-points-${exp.id}`}
            >
              {exp.sections.map((section) => (
                <SectionBlock key={section.title} title={section.title} items={section.items} />
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-black/5 p-5 lg:p-6 h-full flex flex-col">
              <div className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-3">
                {exp.insight.title}
              </div>
              <p className="text-[13px] text-black/70 leading-relaxed flex-1">{exp.insight.body}</p>
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-dashed border-black/10">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#0E0E0C] font-mono text-[10px] text-[#CFEA6B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.article>
  );
};

const Experience = () => {
  const [activeId, setActiveId] = useState('atlassian');
  const reducedMotion = usePrefersReducedMotion();
  const activeExp = experiences.find((e) => e.id === activeId) ?? experiences[0];

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="bg-[#F1EDE3] py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-xs text-black/40 mb-5">// Experience</div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 lg:mb-12">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-tight text-black max-w-3xl">
            Where <span className="italic">I've</span>{' '}
            <span className="text-black/30">built teams.</span>
          </h2>
          <p className="font-mono text-[11px] text-black/40 max-w-xs">
            Select a company to explore scope and impact.
          </p>
        </div>

        <div className="space-y-5 lg:space-y-6">
          <AnimatePresence mode="wait" initial={false}>
            <ExperiencePanel
              key={activeExp.id}
              exp={activeExp}
              variants={panelVariants(reducedMotion)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition(reducedMotion)}
            />
          </AnimatePresence>

          <CompanySelector activeId={activeId} onSelect={setActiveId} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
