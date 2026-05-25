import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { MOTION_EASE, revealTransition } from '../../lib/motionTokens';

const ScrollReveal = ({ children, delay = 0, className = '', y = 14 }) => {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06, margin: '0px 0px -3% 0px' }}
      transition={revealTransition(false, delay / 1000)}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

/** Section-level cinematic entrance with optional subtle depth */
export const ScrollFlowSection = ({ children, className = '', delay = 0 }) => {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.04, margin: '0px 0px -2% 0px' }}
      transition={{ duration: 0.52, ease: MOTION_EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollReveal;
