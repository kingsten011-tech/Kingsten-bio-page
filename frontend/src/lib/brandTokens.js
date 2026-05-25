/** Brand-adaptive glow tokens — muted neon-inspired, premium low-saturation */
export const BRAND_TOKENS = {
  atlassian: {
    color: '#0052CC',
    glow: 'rgba(0, 82, 204, 0.14)',
    neonBloom: 'rgba(56, 132, 255, 0.2)',
    edge: 'rgba(56, 132, 255, 0.35)',
    backlight:
      'radial-gradient(ellipse 72% 58% at 68% 46%, rgba(56, 132, 255, 0.16) 0%, rgba(0, 82, 204, 0.06) 42%, transparent 72%)',
  },
  postman: {
    color: '#FF6C37',
    glow: 'rgba(255, 108, 55, 0.14)',
    neonBloom: 'rgba(255, 140, 90, 0.18)',
    edge: 'rgba(255, 140, 90, 0.32)',
    backlight:
      'radial-gradient(ellipse 70% 56% at 66% 44%, rgba(255, 140, 90, 0.14) 0%, rgba(255, 108, 55, 0.05) 45%, transparent 70%)',
  },
  thetradedesk: {
    color: '#0099DA',
    glow: 'rgba(0, 153, 218, 0.12)',
    neonBloom: 'rgba(64, 196, 255, 0.18)',
    edge: 'rgba(64, 196, 255, 0.3)',
    backlight:
      'radial-gradient(ellipse 70% 56% at 68% 46%, rgba(64, 196, 255, 0.14) 0%, transparent 68%)',
  },
  google: {
    color: '#4285F4',
    glow: 'rgba(66, 133, 244, 0.12)',
    neonBloom: 'rgba(120, 170, 255, 0.16)',
    edge: 'rgba(66, 133, 244, 0.28)',
    edgeGradient:
      'linear-gradient(135deg, rgba(66,133,244,0.28) 0%, rgba(52,168,83,0.14) 35%, rgba(251,188,5,0.1) 65%, rgba(234,67,53,0.16) 100%)',
    backlight:
      'radial-gradient(ellipse 74% 60% at 66% 42%, rgba(120,170,255,0.12) 0%, rgba(52,168,83,0.06) 32%, rgba(251,188,5,0.05) 52%, rgba(255,120,100,0.06) 68%, transparent 76%)',
  },
  thoughtworks: {
    color: '#8311FA',
    glow: 'rgba(131, 17, 250, 0.11)',
    neonBloom: 'rgba(167, 139, 250, 0.18)',
    edge: 'rgba(167, 139, 250, 0.3)',
    backlight:
      'radial-gradient(ellipse 70% 56% at 68% 46%, rgba(167, 139, 250, 0.14) 0%, transparent 68%)',
  },
  oracle: {
    color: '#C74634',
    glow: 'rgba(199, 70, 52, 0.12)',
    neonBloom: 'rgba(230, 120, 100, 0.16)',
    edge: 'rgba(230, 120, 100, 0.28)',
    backlight:
      'radial-gradient(ellipse 70% 56% at 68% 46%, rgba(230, 120, 100, 0.12) 0%, transparent 68%)',
  },
  careernet: {
    color: '#5a7e10',
    glow: 'rgba(90, 126, 16, 0.11)',
    neonBloom: 'rgba(140, 180, 80, 0.15)',
    edge: 'rgba(140, 180, 80, 0.26)',
    backlight:
      'radial-gradient(ellipse 70% 56% at 68% 46%, rgba(140, 180, 80, 0.12) 0%, transparent 68%)',
  },
};

export const brandGlowStyle = (id) => {
  const brand = BRAND_TOKENS[id];
  if (!brand) return {};
  return {
    '--card-glow-brand': brand.glow,
    '--card-glow-edge': brand.edge,
    '--card-neon-bloom': brand.neonBloom ?? brand.glow,
  };
};
