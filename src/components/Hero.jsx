import React from 'react';

const Hero = ({ onScrollDown }) => {
  return (
    <section style={{
      height: '100vh',
      height: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '0 2rem',
      backgroundColor: 'var(--bg-primary)',
      zIndex: 10,
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Immersive Floating Ambient Glow */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 1,
        pointerEvents: 'none',
        animation: 'slowFloat 15s infinite ease-in-out',
        top: '20%',
        left: '25%'
      }} />
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 1,
        pointerEvents: 'none',
        animation: 'slowFloatReverse 20s infinite ease-in-out',
        bottom: '10%',
        right: '15%'
      }} />

      {/* Editorial Category / Accent Tag */}
      <span className="animate-slide-up delay-1" style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.3em',
        color: 'var(--accent)',
        textTransform: 'uppercase',
        marginBottom: '2rem',
        display: 'block'
      }}>
        CREATIVE DIRECTION &bull; DIGITAL CRAFT
      </span>

      {/* Main Large Editorial Serif Heading */}
      <h1 className="animate-slide-up delay-2" style={{
        fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
        lineHeight: 0.95,
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 300,
        color: 'var(--text-primary)',
        maxWidth: '1200px',
        marginBottom: '2rem',
        letterSpacing: '-0.02em',
      }}>
        Crafting cinematic <br />
        <span style={{ fontStyle: 'normal', fontWeight: 400 }}>digital landscapes</span>
      </h1>

      <div className="accent-line animate-slide-up delay-3" />

      {/* Confident, editorial subtitle */}
      <p className="animate-slide-up delay-3" style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(0.95rem, 1.25vw, 1.2rem)',
        fontWeight: 300,
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '640px',
        marginTop: '0.5rem',
        letterSpacing: '0.02em'
      }}>
        A refined selection of four bespoke digital installations built for web browsers. Focused on premium visual rhythm, immaculate grids, and fluid interactions.
      </p>

      {/* Interactive bottom visual indicator */}
      <div 
        onClick={onScrollDown}
        className="animate-slide-up delay-5 hero-scroll-indicator" 
        style={{
          position: 'absolute',
          bottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 500,
          cursor: 'none',
          transition: 'color 0.3s'
        }}
      >
        <span>Explore Work</span>
        <div className="scroll-arrow-wrapper" style={{
          position: 'relative',
          width: '24px',
          height: '24px',
        }}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            style={{
              transition: 'transform 0.3s var(--transition-smooth)'
            }}
            className="scroll-arrow-svg"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        .hero-scroll-indicator:hover {
          color: var(--accent) !important;
        }
        .hero-scroll-indicator:hover .scroll-arrow-svg {
          transform: translateY(6px);
          animation-play-state: paused;
        }
        @keyframes slowFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -60px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes slowFloatReverse {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes arrowBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .scroll-arrow-svg {
          animation: arrowBob 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
