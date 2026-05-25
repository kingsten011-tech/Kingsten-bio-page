import React from 'react';

const ShowcaseInsightAside = ({ insight, tags, tagVariant = 'lime' }) => (
  <aside className="flex flex-col">
    <div className="premium-card-inner relative rounded-2xl bg-white/70 backdrop-blur-sm border border-black/5 p-4 lg:p-5 flex flex-col">
      <div className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2">
        {insight.title}
      </div>
      <p className="text-[13px] text-black/70 leading-snug">{insight.body}</p>
      {tags?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-dashed border-black/10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={
                  tagVariant === 'lime'
                    ? 'inline-flex items-center px-3 py-1.5 rounded-md bg-[#0E0E0C] font-mono text-[10px] text-[#CFEA6B]'
                    : 'inline-flex items-center px-3 py-1.5 rounded-md bg-black/[0.04] border border-black/5 font-mono text-[10px] text-black/65'
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </aside>
);

export default ShowcaseInsightAside;
