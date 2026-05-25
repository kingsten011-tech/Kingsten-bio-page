import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useMotionCapabilities() {
  const reducedMotion = usePrefersReducedMotion();
  const [caps, setCaps] = useState({
    aurora: true,
    ambient: false,
    heroGlass: false,
    sparks: true,
  });

  useEffect(() => {
    const coarse = window.matchMedia('(hover: none)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const narrow = window.innerWidth < 768;
    const saveData = navigator.connection?.saveData === true;
    const lowCores = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

    const reduced = reducedMotion || saveData;
    const desktopFine = fine && !coarse && !narrow;

    setCaps({
      aurora: !reduced,
      ambient: !reduced && desktopFine,
      heroGlass: !reduced && desktopFine,
      sparks: !reduced && !narrow && !lowCores,
    });
  }, [reducedMotion]);

  return caps;
}
