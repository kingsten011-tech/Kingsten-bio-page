import React, { useEffect, useRef, useState } from 'react';
import { useMotionCapabilities } from '../../hooks/useMotionCapabilities';

const lerp = (start, end, amount) => start + (end - start) * amount;

const HeroGlassLight = () => {
  const { heroGlass } = useMotionCapabilities();
  const sectionRef = useRef(null);
  const target = useRef({ x: 50, y: 40 });
  const current = useRef({ x: 50, y: 40 });
  const [render, setRender] = useState({ x: 50, y: 40 });

  useEffect(() => {
    if (!heroGlass) return undefined;

    const section = sectionRef.current?.closest('#hero');
    if (!section) return undefined;

    let frame = 0;

    const onMove = (event) => {
      const rect = section.getBoundingClientRect();
      target.current = {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      };
    };

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      setRender({ x: current.current.x, y: current.current.y });
      frame = requestAnimationFrame(tick);
    };

    section.addEventListener('mousemove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [heroGlass]);

  if (!heroGlass) return null;

  return (
    <div
      ref={sectionRef}
      aria-hidden="true"
      className="hero-glass-light pointer-events-none absolute inset-0 z-[1]"
      style={{
        background: `
          radial-gradient(ellipse 50% 42% at ${render.x}% ${render.y}%,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 38%,
            transparent 70%),
          radial-gradient(ellipse 38% 32% at ${render.x + 3}% ${render.y - 5}%,
            rgba(203, 213, 225, 0.03) 0%,
            transparent 58%)
        `,
      }}
    />
  );
};

export default HeroGlassLight;
