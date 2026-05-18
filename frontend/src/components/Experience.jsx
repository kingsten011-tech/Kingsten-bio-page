import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'Atlassian',
    role: 'Senior Recruiter - Tech - Speciality Roles',
    period: 'Aug 2025 - Present',
    location: 'Bangalore, India',
    highlights: [
      'Hired senior IC (P50-P70) and leadership levels (M70) including ML Engineers, Backend Engineers, SREs, DevOps Engineers, Security Engineers across AI/ML, Search, and Data',
      'Achieved 170% of hiring targets in Q2 and Q3, consistently delivering on high-priority and niche roles',
      'Closed the first ML Security Engineer hire and filled a critical aging Search role within 2 weeks through targeted headhunting',
      'Contributed to building Recruiter Canvas - a unified recruiting application integrating ATS, scheduling, and reporting systems',
      'Mentored recruiters and sourcing teams on advanced sourcing, pipeline strategy, and candidate engagement'
    ],
    teams: 'Rovo Search, ITSM, Jira AI, Central AI, Security ML engineers',
  },
  {
    company: 'Postman',
    role: 'Staff Tech Talent Partner (IC 4)',
    period: 'March 2024 - Aug 2025',
    duration: '1.6 years',
    location: 'Bangalore, India',
    highlights: [
      'Hired 30+ people across levels from Sr EMs to Principal SEs, including AI, Data, and Platform roles',
      'Built the Postbot AI founding team with Co-founder Abhijit Kane (expected to generate 2+ million dollars in business)',
      'Increased PTRs from 15:1 to 8:1 and strategized lean, fast processes',
      'Achieved offer to acceptance ratio of >95% and acceptance to joining ratio of >90%',
      'Created rubrics and interview guidelines for different engineering levels'
    ],
    teams: 'Postman API, Postbot AI, API Client, Performance Testing, Automation testing',
  },
  {
    company: 'The Trade Desk',
    role: 'Senior Recruiter - Tech - India / APAC',
    period: 'Jul 2022 - Nov 2023',
    duration: '1 year 7 months',
    location: 'Bangalore, India',
    highlights: [
      'Led Tech Hiring in Bangalore, building the initial team from scratch with Director of Engineering APAC',
      'Led RPO/Sourcing Team of 4 people, hired for Singapore, Australia (Head of Product Design, Principal Designer, Principal Engineer)',
      'Achieved PTR of approximately 70% from source to close',
      'Maintained 35-45% diversity in active pipeline through social media sourcing',
      'Set benchmarks for Compensation and Benefits through market research'
    ],
    teams: 'Front-End and Backend Software Engineers, Design, Product',
  },
  {
    company: 'Google',
    role: 'Recruiter Tech, Horizontals - India',
    period: 'Feb 2021 - July 2022',
    duration: '1 year 6 months',
    location: 'Bangalore, India',
    highlights: [
      'Closed 50+ software engineering roles with remarkable PTR throughout the funnel',
      'Received "Delivery Superstar Award" for Q1 2022 and closed highest number of offers in the team',
      'Promoted from Recruiter 1 to Recruiter 2 within 1 year',
      'Developed sourcing strategies using internal ATS, LinkedIn, and GitHub',
      'Served as single point of contact for declines in India'
    ],
    teams: 'Backend, Eng Prod, Full Stack, Cloud Storage, Cloud Networking',
  },
  {
    company: 'Thoughtworks',
    role: 'Technical Recruiter (Contract)',
    period: 'Mar 2020 - Feb 2021',
    duration: '1 year',
    location: 'Coimbatore, Tamil Nadu, India',
    highlights: [
      'Owned complete recruitment cycle from Sourcing to Offer creation',
      'Built training modules for sourcing from social media platforms',
      'Developed data-driven approaches for identifying and closing candidates'
    ],
  },
  {
    company: 'Oracle',
    role: 'Talent Sourcer (Contract)',
    period: 'Mar 2019 - Feb 2020',
    duration: '1 year',
    location: 'Bangalore, India',
    highlights: [
      'Sourced talent from LinkedIn, GitHub, Stackoverflow using Boolean strings and X-Ray searches',
      'Experienced in volume and niche hiring, coordinated recruitment events',
      'Conducted recruitment research to understand pool availability and CTC for specific skills'
    ],
    teams: 'Linux Engineering, ODA, OCI, Oracle Financials, MySQL, OMCS',
  },
  {
    company: 'Careernet',
    role: 'Recruiter',
    period: 'May 2018 - Mar 2019',
    duration: '11 months',
    location: 'Bangalore, India',
    highlights: [
      'Worked with leading Semicon product clients: Nvidia, Sandisk, Qualcomm, Aricent, HP',
      'Focused on niche requirements and senior-level roles in Embedded and Application Software',
      'Built strategies and researched new sourcing methods'
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-[#8fb339] ring-4 ring-white z-10" />

      {/* Card */}
      <div className="ml-8 pb-12">
        <div
          className="bg-white border border-[#e5e3db] rounded-lg p-6 hover:border-[#8fb339] transition-all duration-300 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={18} className="text-[#8fb339]" />
                <h3 className="font-bold text-xl text-[#1a1a1a]">{exp.company}</h3>
              </div>
              <p className="text-[#1a1a1a]/80 font-medium mb-1">{exp.role}</p>
              <div className="font-mono text-xs text-[#1a1a1a]/60">
                {exp.period} {exp.duration && `• ${exp.duration}`}
              </div>
              <div className="font-mono text-xs text-[#8fb339] mt-1">{exp.location}</div>
            </div>
            <button className="text-[#1a1a1a]/40 hover:text-[#8fb339] transition-colors">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {expanded && (
            <div className="mt-6 space-y-4 animate-in fade-in duration-300">
              {exp.teams && (
                <div className="bg-[#fdfcf9] rounded p-3 border-l-2 border-[#8fb339]">
                  <div className="font-mono text-xs text-[#8fb339] mb-1">// teams & products</div>
                  <p className="text-sm text-[#1a1a1a]/80">{exp.teams}</p>
                </div>
              )}
              <div>
                <div className="font-mono text-xs text-[#8fb339] mb-3">// key achievements</div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-[#1a1a1a]/80 flex gap-2">
                      <span className="text-[#8fb339] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#fdfcf9]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="font-mono text-xs text-[#8fb339] mb-8">
          <span className="opacity-60">/* ————— section: experience ————— */</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
          Experience Timeline
        </h2>
        <p className="text-lg text-[#1a1a1a]/60 mb-12 font-mono text-sm">
          <span className="text-[#8fb339]">8+</span> years building high-performing engineering teams
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-8 bottom-0 w-[2px] bg-[#e5e3db]" />

          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
