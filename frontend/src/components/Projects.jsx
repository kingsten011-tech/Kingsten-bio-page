import React from 'react';
import { Rocket, Users, TrendingUp, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Recruiter Canvas',
    company: 'Atlassian',
    icon: Rocket,
    description: 'Building a unified Recruiting application integrating ATS, scheduling, and reporting systems.',
    impact: [
      'Reduced manual effort for recruiters by automating repetitive tasks',
      'Improved recruiter efficiency through better pipeline visibility',
      'Accelerated hiring process with real-time analytics and reporting',
      'Enhanced collaboration between recruiting teams'
    ],
    tech: ['ATS Integration', 'Scheduling System', 'Analytics', 'Reporting Dashboard'],
    highlight: true,
  },
  {
    title: 'Postbot AI Founding Team',
    company: 'Postman',
    icon: Zap,
    description: 'Built the founding team for Postbot AI working closely with Co-founder Abhijit Kane.',
    impact: [
      'Expected to generate 2+ million dollars in business',
      'Hired the first AI Applied Engineer for Postman',
      'Established hiring rubrics and interview guidelines',
      'Created talent pipeline for AI/ML roles'
    ],
    tech: ['AI/ML Hiring', 'Founding Team Building', 'Talent Strategy'],
  },
  {
    title: 'Global Hiring Process Standardization',
    company: 'The Trade Desk',
    icon: Users,
    description: 'Led global projects to standardize and optimize hiring processes across APAC regions.',
    impact: [
      'Implemented interviewer calibration across regions',
      'Created unified hiring process documentation',
      'Developed candidate preparation materials',
      'Established APAC hiring strategies'
    ],
    tech: ['Process Design', 'Training', 'Documentation', 'Regional Strategy'],
  },
  {
    title: 'Talent Insights & DEI Initiatives',
    company: 'Google',
    icon: TrendingUp,
    description: 'Participated in talent insights project to understand candidate behaviors and improve diversity.',
    impact: [
      'Analyzed candidate decline patterns and reasons',
      'Implemented new DEI-focused sourcing methods',
      'Improved candidate experience metrics',
      'Enhanced diversity in hiring pipeline'
    ],
    tech: ['Data Analysis', 'DEI Strategy', 'Candidate Experience'],
  },
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  return (
    <div
      className={`bg-white border-2 rounded-lg p-6 hover:border-[#8fb339] transition-all duration-300 h-full flex flex-col ${
        project.highlight ? 'border-[#8fb339] shadow-lg shadow-[#8fb339]/10' : 'border-[#e5e3db]'
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-[#8fb339]/10 rounded-lg">
          <Icon size={24} className="text-[#8fb339]" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-[#1a1a1a] mb-1">{project.title}</h3>
          <div className="font-mono text-xs text-[#8fb339]">{project.company}</div>
        </div>
      </div>

      <p className="text-[#1a1a1a]/80 mb-6 leading-relaxed">{project.description}</p>

      <div className="mb-6">
        <div className="font-mono text-xs text-[#8fb339] mb-3">// impact</div>
        <ul className="space-y-2">
          {project.impact.map((item, idx) => (
            <li key={idx} className="text-sm text-[#1a1a1a]/80 flex gap-2">
              <span className="text-[#8fb339]">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="font-mono text-xs text-[#8fb339] mb-2">// areas</div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#fdfcf9] border border-[#e5e3db] rounded text-xs font-mono text-[#1a1a1a]/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-xs text-[#8fb339] mb-8">
          <span className="opacity-60">/* ————— section: notable projects ————— */</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Notable Projects
          </h2>
          <p className="text-lg text-[#1a1a1a]/60 font-mono text-sm">
            Building systems and teams that drive impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
