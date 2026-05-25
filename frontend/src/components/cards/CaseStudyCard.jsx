import React from 'react';
import CompanyLogo from '../CompanyLogo';
import CardGlowBorder from '../motion/CardGlowBorder';
import { brandGlowStyle } from '../../lib/brandTokens';

/** Matches Notable Projects — plain logo on card surface */
const CaseStudyCard = ({ study }) => (
  <div
    data-testid={`case-study-${study.id}`}
    className="premium-card ambient-surface spark-interactive relative overflow-hidden bg-white rounded-2xl site-card-pad border border-black/5 hover:border-black/15 flex flex-col touch-manipulation"
    style={brandGlowStyle(study.brandId)}
  >
    <CardGlowBorder brand />
    <div className="relative z-[1] flex flex-col">
      <div className="card-logo-row">
        <CompanyLogo id={study.brandId} size="sm" />
      </div>

      <p className="font-mono text-[10px] uppercase tracking-wider text-black/40 mb-1.5">
        {study.category}
      </p>
      <h3 className="font-display font-black text-lg lg:text-xl leading-tight tracking-tight text-black mb-3">
        {study.title}
      </h3>

      <ul className="space-y-1.5 mb-4">
        {study.highlights.map((item, i) => (
          <li key={i} className="text-[13px] text-black/75 leading-snug flex gap-2">
            <span className="text-[#7DAF15] font-mono text-[10px] mt-0.5 flex-shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-black/10">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-1 rounded-md bg-black/[0.04] border border-black/5 font-mono text-[10px] text-black/65"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudyCard;
