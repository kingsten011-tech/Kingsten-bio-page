/** Shared magnify / focus transitions for premium showcase panels */

export const showcaseTransition = (reduced) =>
  reduced
    ? { duration: 0.15, ease: [0.22, 1, 0.36, 1] }
    : {
        type: 'spring',
        stiffness: 420,
        damping: 34,
        mass: 0.82,
      };

export const showcasePanelVariants = (reduced) => ({
  initial: {
    opacity: 0,
    scale: reduced ? 1 : 0.92,
    y: reduced ? 0 : 12,
    filter: reduced ? 'blur(0px)' : 'blur(12px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    scale: reduced ? 1 : 0.96,
    y: reduced ? 0 : -8,
    filter: reduced ? 'blur(0px)' : 'blur(10px)',
  },
});

export const showcaseBacklightVariants = (reduced) => ({
  initial: { opacity: reduced ? 0.55 : 0 },
  animate: { opacity: 0.55 },
  exit: { opacity: 0 },
});
