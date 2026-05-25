import { useEffect } from 'react';
import { useMotionCapabilities } from '../../hooks/useMotionCapabilities';

const SPARK_SELECTOR = '.spark-interactive';

const createSpark = (x, y, index) => {
  const spark = document.createElement('span');
  spark.className = 'spark-particle';
  const angle = (Math.PI * 2 * index) / 4 + Math.random() * 0.6;
  const distance = 6 + Math.random() * 14;
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  spark.style.setProperty('--spark-x', `${Math.cos(angle) * distance}px`);
  spark.style.setProperty('--spark-y', `${Math.sin(angle) * distance}px`);
  document.body.appendChild(spark);
  window.setTimeout(() => spark.remove(), 520);
};

const SparkProvider = () => {
  const { sparks } = useMotionCapabilities();

  useEffect(() => {
    if (!sparks) return undefined;

    const cooldown = new WeakMap();
    const maxSparks = window.innerWidth < 768 ? 2 : 4;

    const onOver = (event) => {
      const el = event.target.closest(SPARK_SELECTOR);
      if (!el) return;

      const last = cooldown.get(el) || 0;
      if (Date.now() - last < 280) return;
      cooldown.set(el, Date.now());

      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width * (0.35 + Math.random() * 0.3);
      const y = rect.top + rect.height * (0.35 + Math.random() * 0.3);

      for (let i = 0; i < maxSparks; i += 1) {
        createSpark(x, y, i);
      }
    };

    document.addEventListener('mouseover', onOver, { passive: true });
    return () => document.removeEventListener('mouseover', onOver);
  }, [sparks]);

  return null;
};

export default SparkProvider;
