import React from 'react';

const Navigation = ({ onContactClick, onWorkClick }) => {
  return (
    <nav className="animate-fade-in" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2.5rem 4rem',
      zIndex: 50,
      pointerEvents: 'auto'
    }}>
      {/* Brand Logo / Name */}
      <div className="brand-logo-container">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="brand-logo"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            letterSpacing: '0.25em',
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            transition: 'color 0.3s',
            display: 'block'
          }}
        >
          void. Lite
        </a>
        {/* Subtle curved underline in red */}
        <div className="brand-underline-wrapper">
          <svg
            viewBox="0 0 150 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <path
              className="brand-underline-path"
              d="M 4 12 C 40 2, 110 2, 146 12 C 110 6, 40 6, 4 12 Z"
              fill="var(--accent)"
            />
          </svg>
        </div>
      </div>

      {/* Nav Menu Links */}
      <div className="nav-links" style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <a
          href="#work"
          onClick={onWorkClick}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            position: 'relative',
            paddingBottom: '4px',
            transition: 'color 0.3s'
          }}
          className="nav-link-item"
        >
          Work
        </a>
        <a
          href="#contact"
          onClick={onContactClick}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            position: 'relative',
            paddingBottom: '4px',
            transition: 'color 0.3s'
          }}
          className="nav-link-item"
        >
          Contact
        </a>
      </div>

      <style>{`
        .nav-link-item:hover {
          color: var(--text-primary) !important;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s var(--transition-smooth);
        }
        .nav-link-item:hover::after {
          width: 100%;
        }
        .brand-logo-container {
          position: relative;
          display: inline-block;
          cursor: none;
        }
        .brand-underline-wrapper {
          position: absolute;
          bottom: -6px;
          left: 2%;
          width: 96%;
          pointer-events: none;
          opacity: 0.85;
          transform: translateY(-1px);
          transition: transform 0.3s var(--transition-smooth);
        }
        .brand-logo-container:hover .brand-underline-wrapper {
          transform: translateY(1px) scaleX(1.03);
        }
        .brand-underline-path {
          transition: fill 0.3s var(--transition-smooth), filter 0.3s var(--transition-smooth);
        }
        .brand-logo-container:hover .brand-logo {
          color: var(--accent) !important;
        }
        .brand-logo-container:hover .brand-underline-path {
          fill: var(--text-primary) !important;
          filter: drop-shadow(0 0 4px var(--accent));
        }
        @media (max-width: 768px) {
          nav {
            padding: 2rem 2rem !important;
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
