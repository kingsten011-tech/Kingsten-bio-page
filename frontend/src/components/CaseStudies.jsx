import React from 'react';
import CaseStudyCard from './cards/CaseStudyCard';
import FocusCard from './motion/FocusCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      data-testid="case-studies-section"
      className="site-section bg-[#F7F4EA]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="font-mono text-xs text-black/40 mb-4">// Problems Solved</div>
        <div className="site-section-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-5">
          <h2 className="font-display font-black text-[2rem] sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.05] tracking-tight text-black max-w-2xl">
            Problems <span className="text-black/30">solved.</span>
          </h2>
          <p className="font-mono text-[11px] text-black/40 max-w-sm leading-relaxed">
            Strategic execution snapshots — same rhythm as notable projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 items-start">
          {caseStudies.map((study, index) => (
            <FocusCard key={study.id} index={index}>
              <CaseStudyCard study={study} />
            </FocusCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
