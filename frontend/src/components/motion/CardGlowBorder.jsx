import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Gradient border overlay — sits above ambient ::before/::after layers.
 * Parent must be `position: relative` with `overflow: hidden` as needed.
 */
const CardGlowBorder = ({ dark = false, brand = false, active = false, className, style }) => (
  <div
    aria-hidden="true"
    className={cn(
      'card-glow-border',
      dark && 'card-glow-border-dark',
      brand && 'card-glow-border--brand',
      active && 'card-glow-border--active',
      className
    )}
    style={style}
  />
);

export default CardGlowBorder;
