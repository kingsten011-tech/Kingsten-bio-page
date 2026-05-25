import React, { useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';
import PremiumShowcase from './motion/PremiumShowcase';
import CompanyIdentityBlock from './showcase/CompanyIdentityBlock';
import ShowcasePanelShell from './motion/ShowcasePanelShell';
import ShowcaseInsightAside from './showcase/ShowcaseInsightAside';
import { ShowcaseSectionBlock } from './showcase/ShowcaseSectionGrid';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

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

const ExperiencePanel = ({ exp }) => (
  <ShowcasePanelShell brandId={exp.id} testId={`experience-card-${exp.id}`}>
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-5 lg:gap-6 items-start">
      <div>
        <CompanyIdentityBlock brandId={exp.id} company={exp.company} badge={exp.badge} />

        <p className="font-display font-bold text-base sm:text-lg text-black/85 leading-snug mb-3">
          {exp.role}
        </p>

        <div className="font-mono text-[11px] text-black/40 flex flex-wrap items-center gap-3 mb-4">
          <span>{exp.period}</span>
          <span className="flex items-center gap-1">
            <MapPin size={10} />
            {exp.location}
          </span>
        </div>

        <p className="text-sm text-black/70 leading-relaxed mb-5 max-w-2xl">
          {exp.summary}
        </p>

        <div
          className="grid sm:grid-cols-2 gap-2.5 lg:gap-3"
          data-testid={`experience-points-${exp.id}`}
        >
          {exp.sections.map((section) => (
            <ShowcaseSectionBlock key={section.title} title={section.title} items={section.items} />
          ))}
        </div>
      </div>

      <ShowcaseInsightAside insight={exp.insight} tags={exp.tags} tagVariant="lime" />
    </div>
  </ShowcasePanelShell>
);

const Experience = () => {
  const [activeId, setActiveId] = useState('atlassian');
  const reducedMotion = usePrefersReducedMotion();
  const activeExp = experiences.find((e) => e.id === activeId) ?? experiences[0];

  const selectorItems = useMemo(
    () =>
      experiences.map((exp) => ({
        id: exp.id,
        brandId: exp.id,
        ariaLabel: exp.company,
      })),
    []
  );

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="site-section bg-[#F1EDE3]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="font-mono text-xs text-black/40 mb-4">// Experience</div>
        <div className="site-section-header flex items-end justify-between flex-wrap gap-4 sm:gap-5">
          <h2 className="font-display font-black text-[2rem] sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.05] tracking-tight text-black max-w-3xl">
            Where <span className="italic">I've</span>{' '}
            <span className="text-black/30">built teams.</span>
          </h2>
          <p className="font-mono text-[11px] text-black/40 max-w-xs">
            Select a company to explore scope and impact.
          </p>
        </div>

        <PremiumShowcase
          activeId={activeId}
          onSelect={setActiveId}
          activeBrandId={activeExp.id}
          selectorItems={selectorItems}
          reducedMotion={reducedMotion}
          selectorTestIdPrefix="experience-selector"
          selectorAriaLabel="Select company"
          panelTestId="experience-showcase-panel"
        >
          <ExperiencePanel exp={activeExp} />
        </PremiumShowcase>
      </div>
    </section>
  );
};

export default Experience;
