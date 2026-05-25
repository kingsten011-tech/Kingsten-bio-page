import React from 'react';
import { motion } from 'framer-motion';
import CompanyLogo from '../CompanyLogo';
import CardGlowBorder from './CardGlowBorder';
import { BRAND_TOKENS, brandGlowStyle } from '../../lib/brandTokens';

/** Normalized logo viewport — equal visual weight across brands */
export const LogoSlot = ({ brandId, className = '' }) => (
  <span className={`logo-slot ${className}`}>
    <CompanyLogo id={brandId} size="selector" />
  </span>
);

export const LogoSelectorButton = ({
  brandId,
  isActive,
  onClick,
  ariaLabel,
  testId,
  reducedMotion,
  duplicateHint,
}) => {
  const brand = BRAND_TOKENS[brandId];

  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-label={ariaLabel}
      data-testid={testId}
      onClick={onClick}
      whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      animate={
        reducedMotion
          ? undefined
          : {
              scale: isActive ? 1.04 : 1,
            }
      }
      transition={{ type: 'spring', stiffness: 460, damping: 28 }}
      className={`logo-selector-btn premium-card ambient-surface spark-interactive relative flex-shrink-0 snap-center ${
        isActive ? 'logo-selector-btn--active logo-selector-btn--neon' : ''
      }`}
      style={{
        ...brandGlowStyle(brandId),
        ...(isActive && brand
          ? {
              boxShadow: `0 12px 32px -10px rgba(10,10,9,0.12), 0 0 0 1px ${brand.color}28, 0 0 32px -6px ${brand.neonBloom}, 0 0 48px -12px ${brand.glow}`,
              borderColor: `${brand.color}35`,
            }
          : {}),
      }}
    >
      <CardGlowBorder brand active={isActive} />
      <LogoSlot brandId={brandId} className="relative z-[1]" />
      {duplicateHint && (
        <span
          aria-hidden="true"
          className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-colors ${
            isActive ? 'bg-[#7DAF15]' : 'bg-black/15'
          }`}
        />
      )}
    </motion.button>
  );
};

export const LogoSelectorRow = ({
  items,
  activeId,
  onSelect,
  reducedMotion,
  testIdPrefix = 'selector',
  ariaLabel = 'Select item',
}) => (
  <div
    className="logo-selector-row flex justify-center w-full"
    data-testid={`${testIdPrefix}-row`}
    role="tablist"
    aria-label={ariaLabel}
  >
    <div className="logo-selector-track inline-flex flex-nowrap sm:flex-wrap justify-start sm:justify-center items-center gap-2.5 max-w-full px-1 pb-1">
      {items.map((item) => (
        <LogoSelectorButton
          key={item.id}
          brandId={item.brandId}
          isActive={activeId === item.id}
          onClick={() => onSelect(item.id)}
          ariaLabel={item.ariaLabel ?? item.label}
          testId={`${testIdPrefix}-${item.id}`}
          reducedMotion={reducedMotion}
          duplicateHint={item.duplicateHint}
        />
      ))}
    </div>
  </div>
);
