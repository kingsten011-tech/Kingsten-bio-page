import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { MOTION_EASE } from '../../lib/motionTokens';

/**
 * Scroll-aware card: subtle entrance + soft focus when near viewport center.
 * No scroll trapping — natural document flow only.
 */
const FocusCard = ({ children, className = '', index = 0 }) => {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [lightMotion, setLightMotion] = useState(false);
  const inFocus = useInView(ref, {
    amount: 0.55,
    margin: '-18% 0px -18% 0px',
  });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setLightMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -5% 0px' }}
      animate={
        lightMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : {
              opacity: inFocus ? 1 : 0.9,
              y: inFocus ? 0 : 2,
              scale: inFocus ? 1 : 0.997,
            }
      }
      transition={{
        opacity: { duration: 0.35, ease: MOTION_EASE },
        y: { duration: 0.38, ease: MOTION_EASE },
        scale: { duration: 0.38, ease: MOTION_EASE },
        delay: index * 0.06,
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default FocusCard;
