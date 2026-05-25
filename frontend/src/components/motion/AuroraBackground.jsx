import React from 'react';
import { useMotionCapabilities } from '../../hooks/useMotionCapabilities';

const AuroraBackground = () => {
  const { aurora } = useMotionCapabilities();

  if (!aurora) return null;

  return (
    <div aria-hidden="true" className="aurora-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
    </div>
  );
};

export default AuroraBackground;
