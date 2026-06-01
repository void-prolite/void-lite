import React from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';

const NotFoundPage = () => {
  return (
    <>
      <CustomCursor />
      <div style={{
        backgroundColor: 'var(--bg-primary, #050505)',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--text-primary, #ffffff)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 68, 0, 0.15) 0%, transparent 60%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }} />

        <h1 style={{
          fontFamily: 'var(--font-serif, "Playfair Display", serif)',
          fontSize: 'clamp(5rem, 15vw, 12rem)',
          fontWeight: 300,
          lineHeight: 1,
          margin: 0,
          color: 'var(--accent, #ff4400)',
          textShadow: '0 0 40px rgba(255, 68, 0, 0.3)'
        }}>
          404
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans, "Inter", sans-serif)',
          fontSize: '1.2rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginTop: '1rem',
          marginBottom: '3rem',
          opacity: 0.7
        }}>
          Lost in the void
        </p>

        <Link to="/" style={{
          fontFamily: 'var(--font-sans, "Inter", sans-serif)',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--bg-primary, #050505)',
          backgroundColor: 'var(--text-primary, #ffffff)',
          padding: '1rem 3rem',
          textDecoration: 'none',
          borderRadius: '2px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'var(--accent, #ff4400)';
          e.target.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'var(--text-primary, #ffffff)';
          e.target.style.color = 'var(--bg-primary, #050505)';
        }}>
          Return to Base
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
