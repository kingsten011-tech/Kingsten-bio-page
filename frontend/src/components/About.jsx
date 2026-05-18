import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Code comment divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-xs text-[#8fb339] mb-8">
          <span className="opacity-60">/* ————— section: about ————— */</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
              Building teams that build the future
            </h2>
            <div className="font-mono text-xs text-[#8fb339] mb-4">
              <span className="text-[#1a1a1a] opacity-60">class</span> <span className="text-[#8fb339]">TechRecruiter</span> {'{'}
            </div>
          </div>

          <div className="space-y-6 text-[#1a1a1a]/80 leading-relaxed">
            <p>
              With over 8 years of experience in technology recruitment, I've had the privilege of working with some of the world's leading tech companies — <span className="font-semibold text-[#1a1a1a]">Atlassian, Postman, The Trade Desk, and Google</span>.
            </p>
            <p>
              My expertise lies in <span className="font-semibold text-[#1a1a1a]">executive sourcing, engineering leadership hiring, and talent strategy</span>. I've successfully placed over 100+ engineers across various specializations including AI/ML, Backend, Frontend, DevOps, SRE, and Security.
            </p>
            <p>
              Currently at Atlassian, I focus on Core Product and R&D Specialty Hiring, working with teams building cutting-edge products like Rovo Search, ITSM, Jira AI, and Central AI. I've consistently exceeded hiring targets, achieving <span className="font-semibold text-[#1a1a1a]">170% in Q2 and Q3</span>.
            </p>
            <p>
              Beyond recruitment, I'm passionate about building systems that improve hiring efficiency. I contributed to <span className="font-semibold text-[#1a1a1a]">Recruiter Canvas</span>, a unified recruiting application that integrates ATS, scheduling, and reporting — reducing manual effort and accelerating the hiring process.
            </p>
            <div className="font-mono text-xs text-[#8fb339] mt-6">
              {'}'}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#e5e3db]">
          <div>
            <div className="font-mono text-3xl font-bold text-[#8fb339] mb-2">8+</div>
            <div className="text-sm text-[#1a1a1a]/60">Years Experience</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-[#8fb339] mb-2">100+</div>
            <div className="text-sm text-[#1a1a1a]/60">Engineers Hired</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-[#8fb339] mb-2">170%</div>
            <div className="text-sm text-[#1a1a1a]/60">Target Achievement</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-[#8fb339] mb-2">5</div>
            <div className="text-sm text-[#1a1a1a]/60">Markets Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
