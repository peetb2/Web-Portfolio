import React from 'react';

export default function AuroraBackground({ children, className = '' }) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={className}
    >
      {/* Aurora Ambient Mesh – Green & White palette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.55,
          pointerEvents: 'none',
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(22, 163, 74, 0.22), transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(34, 197, 94, 0.18), transparent 70%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(16, 185, 129, 0.15), transparent 70%)
          `,
          filter: 'blur(55px)',
          animation: 'auroraMove 15s ease-in-out infinite alternate',
        }}
      />

      {/* Subtle dot-grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>

      <style>{`
        @keyframes auroraMove {
          0%   { transform: scale(1)    translateY(0px)   rotate(0deg);  }
          50%  { transform: scale(1.08) translateY(-18px) rotate(1.5deg); }
          100% { transform: scale(1.04) translateY(8px)   rotate(-1.5deg); }
        }
      `}</style>
    </div>
  );
}
