/** Shared motion timing — premium, restrained */
export const MOTION_EASE = [0.22, 1, 0.36, 1];

export const MOTION_SPRING = {
  type: 'spring',
  stiffness: 380,
  damping: 32,
  mass: 0.85,
};

export const revealTransition = (reduced, delay = 0) =>
  reduced
    ? { duration: 0.01 }
    : { duration: 0.48, ease: MOTION_EASE, delay };
