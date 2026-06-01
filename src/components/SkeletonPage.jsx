import React from 'react';

const SkeletonPage = () => {
  return (
    <div style={{
      backgroundColor: 'var(--bg-primary, #050505)',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 4rem',
      gap: '4rem',
      boxSizing: 'border-box',
    }}>
      {/* Header Skeleton */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '150px', height: '24px', backgroundColor: '#151515', borderRadius: '4px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ width: '80px', height: '16px', backgroundColor: '#151515', borderRadius: '4px', animation: 'pulse 1.5s infinite' }}></div>
          <div style={{ width: '80px', height: '16px', backgroundColor: '#151515', borderRadius: '4px', animation: 'pulse 1.5s infinite' }}></div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '2rem' }}>
        <div style={{ width: '60%', height: '80px', backgroundColor: '#151515', borderRadius: '8px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ width: '40%', height: '24px', backgroundColor: '#151515', borderRadius: '4px', animation: 'pulse 1.5s infinite' }}></div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default SkeletonPage;
