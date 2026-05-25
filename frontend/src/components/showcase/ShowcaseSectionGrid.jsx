import React from 'react';

export const ShowcaseBulletList = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((item, i) => (
      <li key={i} className="text-[13px] text-black/75 leading-relaxed flex gap-2">
        <span className="text-[#7DAF15] font-mono text-[10px] mt-1 flex-shrink-0">·</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const ShowcaseSectionBlock = ({ title, items }) => (
  <div className="premium-card-inner relative rounded-2xl bg-[#F1EDE3]/70 border border-black/[0.04] p-3 lg:p-4">
    <h4 className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2">{title}</h4>
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-[13px] text-black/75 leading-relaxed flex gap-2">
          <span className="text-[#7DAF15] font-mono text-[10px] mt-1 flex-shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
