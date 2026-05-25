import { useEffect, useRef } from 'react';
import { useMotionCapabilities } from '../../hooks/useMotionCapabilities';

const SURFACE_SELECTOR = '.ambient-surface, .ambient-surface-dark';
const PROXIMITY_RADIUS = 340;
const lerp = (start, end, amount) => start + (end - start) * amount;

const AmbientInteraction = () => {
  const { ambient } = useMotionCapabilities();
  const pointer = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!ambient) return undefined;

    let frame = 0;

    const onMove = (event) => {
      pointer.current = { x: event.clientX, y: event.clientY };
    };

    const onLeave = () => {
      document.querySelectorAll(SURFACE_SELECTOR).forEach((el) => {
        el.style.setProperty('--ambient-prox', '0');
      });
    };

    const tick = () => {
      smooth.current.x = lerp(smooth.current.x, pointer.current.x, 0.09);
      smooth.current.y = lerp(smooth.current.y, pointer.current.y, 0.09);

      const surfaces = document.querySelectorAll(SURFACE_SELECTOR);
      const px = smooth.current.x;
      const py = smooth.current.y;

      surfaces.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -40 || rect.top > window.innerHeight + 40) {
          el.style.setProperty('--ambient-prox', '0');
          return;
        }

        const nearX = Math.max(rect.left, Math.min(px, rect.right));
        const nearY = Math.max(rect.top, Math.min(py, rect.bottom));
        const edgeDist = Math.hypot(px - nearX, py - nearY);
        const proximity = Math.max(0, 1 - edgeDist / PROXIMITY_RADIUS);

        const localX = ((px - rect.left) / rect.width) * 100;
        const localY = ((py - rect.top) / rect.height) * 100;
        const dx = px - (rect.left + rect.width / 2);
        const dy = py - (rect.top + rect.height / 2);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

        el.style.setProperty('--ambient-x', `${Math.max(0, Math.min(100, localX))}%`);
        el.style.setProperty('--ambient-y', `${Math.max(0, Math.min(100, localY))}%`);
        el.style.setProperty('--ambient-prox', proximity.toFixed(3));
        el.style.setProperty('--ambient-angle', `${angle}deg`);
        el.style.setProperty(
          '--ambient-depth',
          `${(proximity * 0.6).toFixed(3)}px`
        );
      });

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frame);
      document.querySelectorAll(SURFACE_SELECTOR).forEach((el) => {
        el.style.removeProperty('--ambient-prox');
        el.style.removeProperty('--ambient-x');
        el.style.removeProperty('--ambient-y');
        el.style.removeProperty('--ambient-angle');
        el.style.removeProperty('--ambient-depth');
      });
    };
  }, [ambient]);

  return null;
};

export default AmbientInteraction;
