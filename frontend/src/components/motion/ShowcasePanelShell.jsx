import React from 'react';
import CompanyLogo from '../CompanyLogo';
import CardGlowBorder from './CardGlowBorder';
import { BRAND_TOKENS, brandGlowStyle } from '../../lib/brandTokens';

/** Shared active card shell: glow border, watermark, ambient bloom */
const ShowcasePanelShell = ({ brandId, testId, children }) => {
  const brand = BRAND_TOKENS[brandId];
  const borderStyle = brand?.edgeGradient ? { background: brand.edgeGradient } : undefined;

  return (
    <article
      data-testid={testId}
      className="premium-card ambient-surface spark-interactive relative z-[1] w-full rounded-3xl border border-black/5 overflow-hidden shadow-lg shadow-black/[0.04]"
      style={{
        ...brandGlowStyle(brandId),
        background: `linear-gradient(148deg, ${brand.glow} 0%, rgba(255,255,255,0.92) 38%, #ffffff 72%)`,
        boxShadow: `0 12px 40px -16px rgba(10,10,9,0.08), 0 0 0 1px ${brand.color}20, 0 0 40px -12px ${brand.neonBloom}, 0 0 64px -18px ${brand.glow}, 0 0 88px -28px rgba(167, 139, 250, 0.06), inset 0 1px 0 rgba(255,255,255,0.75)`,
      }}
    >
      <CardGlowBorder brand active style={borderStyle} />

      <div
        aria-hidden="true"
        className="experience-panel-bloom"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 88% 42%, ${brand.glow} 0%, transparent 62%)`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-[1] w-[min(48%,360px)] max-h-[75%] flex items-center justify-end overflow-visible"
      >
        <CompanyLogo
          id={brandId}
          size="xl"
          watermark
          className="h-28 w-28 md:h-36 md:w-36 translate-x-4 md:translate-x-6"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 z-[1]"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 12% 0%, ${brand.glow} 0%, transparent 55%)`,
        }}
      />

      <div className="relative z-[2] site-card-pad lg:px-7">{children}</div>
    </article>
  );
};

export default ShowcasePanelShell;
