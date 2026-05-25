import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  showcaseBacklightVariants,
  showcasePanelVariants,
  showcaseTransition,
} from '../../lib/showcaseMotion';
import { BRAND_TOKENS } from '../../lib/brandTokens';
import { LogoSelectorRow } from './LogoSelector';

/**
 * Centered premium showcase: magnify panel + ambient backlight + logo selector row.
 */
const PremiumShowcase = ({
  activeId,
  onSelect,
  activeBrandId,
  selectorItems,
  reducedMotion,
  selectorTestIdPrefix,
  selectorAriaLabel,
  panelTestId,
  children,
}) => {
  const brand = BRAND_TOKENS[activeBrandId];

  return (
    <div className="premium-showcase space-y-4 sm:space-y-5">
      <div className="premium-showcase-stage relative flex justify-center px-0 sm:px-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeId}
            className="experience-showcase relative w-full max-w-[1200px]"
            variants={showcasePanelVariants(reducedMotion)}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={showcaseTransition(reducedMotion)}
            data-testid={panelTestId}
          >
            {brand?.backlight && (
              <motion.div
                aria-hidden="true"
                className="experience-card-backlight"
                style={{ background: brand.backlight }}
                variants={showcaseBacklightVariants(reducedMotion)}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={showcaseTransition(reducedMotion)}
              />
            )}
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      <LogoSelectorRow
        items={selectorItems}
        activeId={activeId}
        onSelect={onSelect}
        reducedMotion={reducedMotion}
        testIdPrefix={selectorTestIdPrefix}
        ariaLabel={selectorAriaLabel}
      />
    </div>
  );
};

export default PremiumShowcase;
