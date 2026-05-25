import React from 'react';
import CompanyLogo from '../CompanyLogo';

/** Logo + company name — plain inline, no boxed container */
const CompanyIdentityBlock = ({ brandId, company, badge }) => (
  <div className="company-identity-block flex items-center gap-3 sm:gap-3.5 mb-3 pb-3.5 border-b border-black/[0.06]">
    <CompanyLogo id={brandId} size="lg" className="flex-shrink-0" />
    <div className="min-w-0 flex flex-wrap items-center gap-2 sm:gap-2.5">
      <h3 className="font-display font-black text-2xl lg:text-[1.75rem] text-black leading-[1.08] tracking-tight">
        {company}
      </h3>
      {badge && (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#CFEA6B] font-mono text-[10px] font-bold tracking-wider text-black">
          {badge}
        </span>
      )}
    </div>
  </div>
);

export default CompanyIdentityBlock;
