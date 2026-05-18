import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 'atlassian',
    company: 'Atlassian',
    role: 'Senior Recruiter — Tech, Specialty Roles',
    period: 'Aug 2025 — Present',
    location: 'Bangalore, India',
    summary: 'Core Product & R&D specialty hiring across Rovo Search, ITSM, Jira AI, Central AI, and Security ML.',
    points: [
      'Hired across senior IC (P50–P70) and leadership (M70) levels: ML, Backend, SRE, DevOps, Security & Engineering Managers.',
      '170% of hiring targets in Q2 & Q3; consistently delivering on niche, high-priority roles.',
      'Closed the first ML Security Engineer hire and filled a critical aging Search role within 2 weeks via targeted headhunting.',
      'Driving data-led decisions using PTR, time-to-fill and pipeline analytics; mentoring sourcers on advanced strategy.',
    ],
    tags: ['AI/ML', 'Search', 'Security', 'Leadership'],
    badge: 'NOW',
  },
  {
    id: 'postman',
    company: 'Postman',
    role: 'Staff Tech Talent Partner (IC4)',
    period: 'Mar 2024 — Aug 2025',
    location: 'Bangalore, India',
    summary: 'Led hiring across Core Products, Data and AI — 6 business groups in parallel.',
    points: [
      'Hired 30+ across levels from Sr EM to Principal SE — AI, Data and Platform.',
      'Built the Postbot AI founding team with Co-founder Abhijit Kane (projected $2M+ ARR).',
      'Increased PTR from 15:1 → 8:1; rubrics and interviewer calibration for engineering levels.',
      '>95% offer-to-acceptance ratio and >90% acceptance-to-joining ratio.',
    ],
    tags: ['AI', 'Platform', 'Founding Team'],
  },
  {
    id: 'thetradedesk',
    company: 'The Trade Desk',
    role: 'Senior Recruiter — Tech, India / APAC',
    period: 'Jul 2022 — Nov 2023',
    location: 'Bangalore, India',
    summary: 'Built the Bangalore tech team from scratch with the Director of Engineering APAC.',
    points: [
      'Led an RPO/sourcing team of 4; closed senior roles across India, Singapore & Australia.',
      'Designed candidate-friendly hiring processes informed by funnel data.',
      '~70% source→close PTR; 35–45% diversity sustained in the active pipeline.',
      'Owned APAC hiring strategy, interviewer calibration and onboarding documents.',
    ],
    tags: ['APAC', 'Design', 'Frontend', 'Backend'],
  },
  {
    id: 'google',
    company: 'Google',
    role: 'Recruiter — Tech, Horizontals India',
    period: 'Feb 2021 — Jul 2022',
    location: 'Bangalore, India',
    summary: '50+ software engineering hires across backend, full-stack, cloud storage & networking.',
    points: [
      'Closed 50+ SWE roles with remarkable PTR across the funnel.',
      'Received the Delivery Superstar Award (Q1 2022) and was promoted to Recruiter II in under a year.',
      'Sourcing strategies via internal ATS, LinkedIn and GitHub; single point of contact for India declines.',
      'Cross-functional with HC, comp and upleveling teams.',
    ],
    tags: ['SWE', 'Cloud', 'DEI'],
  },
  {
    id: 'thoughtworks',
    company: 'Thoughtworks',
    role: 'Technical Recruiter (Contract)',
    period: 'Mar 2020 — Feb 2021',
    location: 'Coimbatore, India',
    summary: 'Owned the full recruitment cycle and built sourcing training modules.',
    points: [
      'End-to-end ownership from sourcing through offer creation.',
      'Authored social-media sourcing playbooks used by the team.',
      'Data-driven approach to identifying and closing candidates.',
    ],
    tags: ['Full-cycle', 'Training'],
  },
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Talent Sourcer (Contract)',
    period: 'Mar 2019 — Feb 2020',
    location: 'Bangalore, India',
    summary: 'Sourced for Linux Eng, OCI, ODA, MySQL, Oracle Financials, and support orgs.',
    points: [
      'Sourced talent via Naukri, LinkedIn, GitHub, Stack Overflow using Boolean/X-Ray.',
      'Volume + niche hiring; recruitment research for pool & CTC insights.',
      'Lead generation through headhunting, referencing and team mapping.',
    ],
    tags: ['Sourcing', 'X-Ray'],
  },
  {
    id: 'careernet',
    company: 'Careernet',
    role: 'Recruiter',
    period: 'May 2018 — Mar 2019',
    location: 'Bangalore, India',
    summary: 'Predominantly worked on leading semicon product clients — Nvidia, Sandisk, Qualcomm, Aricent, HP.',
    points: [
      'Bridged talent to top tech companies — role-fitment first.',
      'Niche & senior-level roles across Embedded and Application Software.',
      'Researched and shipped new sourcing methodologies.',
    ],
    tags: ['Semiconductors', 'Startups'],
  },
];

const ExperienceCard = ({ exp, isOpen, onToggle }) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[34px] top-7 w-3 h-3 rounded-full bg-white ring-2 ring-black/30 z-10">
        {isOpen && <div className="absolute inset-0.5 rounded-full bg-[#7DAF15]" />}
      </div>

      <div
        data-testid={`experience-card-${exp.id}`}
        className={`bg-white rounded-2xl border border-black/5 transition-all overflow-hidden ${
          isOpen ? 'shadow-lg shadow-black/5' : 'hover:border-black/15'
        }`}
      >
        <button
          onClick={onToggle}
          data-testid={`experience-toggle-${exp.id}`}
          className="w-full text-left p-6 lg:p-8 flex items-start justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="font-display font-black text-2xl lg:text-3xl text-black">{exp.company}</h3>
              {exp.badge && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#CFEA6B] font-mono text-[10px] font-bold tracking-wider text-black">
                  {exp.badge}
                </span>
              )}
            </div>
            <div className="text-base lg:text-lg text-black/80 mb-1">{exp.role}</div>
            <div className="font-mono text-xs text-black/40 flex flex-wrap items-center gap-3">
              <span>{exp.period}</span>
              <span className="flex items-center gap-1">
                <MapPin size={11} />
                {exp.location}
              </span>
            </div>
            {!isOpen && (
              <p className="text-sm text-black/60 mt-3 leading-relaxed">{exp.summary}</p>
            )}
          </div>
          <ChevronDown
            size={20}
            className={`text-black/30 flex-shrink-0 mt-2 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="px-6 lg:px-8 pb-8">
            <p className="text-base text-black/70 mb-6 leading-relaxed">{exp.summary}</p>
            <div
              className="border-t border-dashed border-black/15 pt-6 space-y-3"
              data-testid={`experience-points-${exp.id}`}
            >
              {exp.points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-sm text-[#7DAF15] font-bold w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm lg:text-base text-black/80 leading-relaxed flex-1">{point}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#0E0E0C] font-mono text-[11px] text-[#CFEA6B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const [openId, setOpenId] = useState('atlassian');

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="bg-[#F1EDE3] py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-sm text-black/40 mb-6">// Experience</div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 lg:mb-20">
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-black max-w-3xl">
            Where <span className="italic">I've</span>{' '}
            <span className="text-black/30">built teams.</span>
          </h2>
          <p className="font-mono text-xs text-black/40 max-w-xs">
            click any role to expand the impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 lg:pl-10">
          {/* Vertical line */}
          <div className="absolute left-[6px] top-3 bottom-3 w-px bg-black/15" />

          <div className="space-y-4 lg:space-y-5">
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                isOpen={openId === exp.id}
                onToggle={() => setOpenId(openId === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
