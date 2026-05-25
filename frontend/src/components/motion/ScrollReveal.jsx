import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const ease = [0.22, 1, 0.36, 1];

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -4% 0px' }}
      transition={{ duration: 0.55, ease, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
