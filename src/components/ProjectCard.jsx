import React from 'react';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`project-card-interactive project-card-${project.id} animate-slide-up delay-${index + 1}`}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        aspectRatio: '16 / 10.5',
        transition: 'border-color 0.6s var(--transition-smooth), box-shadow 0.6s var(--transition-smooth), transform 0.6s var(--transition-smooth)',
        cursor: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Premium diagonal reflection shimmer sheen */}
      <div className="card-sheen" style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '60%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
        transform: 'skewX(-25deg)',
        zIndex: 15,
        pointerEvents: 'none',
      }} />

      {/* Immersive screenshot/preview image */}
      <div className="card-image-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        <img 
          src={project.image} 
          alt={project.name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transition: 'transform 0.8s var(--transition-smooth)',
          }}
          className="project-image"
        />
      </div>

      {/* Cinematic overlay on hover */}
      <div className="card-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(7, 7, 8, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '3rem',
        opacity: 0,
        transition: 'opacity 0.6s var(--transition-smooth)',
        zIndex: 20
      }}>
        
        {/* Project Tag / Category */}
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
          transform: 'translateY(15px)',
          transition: 'transform 0.6s var(--transition-smooth), opacity 0.6s var(--transition-smooth)',
          opacity: 0,
          transitionDelay: '0.05s'
        }} className="overlay-tag">
          {project.category}
        </span>

        {/* Project Title (Editorial Serif) */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 3vw, 3.2rem)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.1,
          marginBottom: '1rem',
          transform: 'translateY(20px)',
          transition: 'transform 0.6s var(--transition-smooth), opacity 0.6s var(--transition-smooth)',
          opacity: 0,
          transitionDelay: '0.1s'
        }} className="overlay-title">
          {project.name}
        </h3>

        {/* Project One-line Description */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          fontWeight: 300,
          color: 'var(--text-muted)',
          maxWidth: '85%',
          marginBottom: '2rem',
          lineHeight: 1.5,
          transform: 'translateY(25px)',
          transition: 'transform 0.6s var(--transition-smooth), opacity 0.6s var(--transition-smooth)',
          opacity: 0,
          transitionDelay: '0.15s'
        }} className="overlay-desc">
          {project.description}
        </p>

        {/* View Details Link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          transform: 'translateY(30px)',
          transition: 'transform 0.6s var(--transition-smooth), opacity 0.6s var(--transition-smooth)',
          opacity: 0,
          transitionDelay: '0.2s',
          alignSelf: 'flex-start'
        }} className="overlay-link">
          <span>Explore Architecture</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.3s' }} className="link-arrow">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Static Footer label (displays basic name before hover on desktop, or as fallback on mobile) */}
      <div style={{
        marginTop: 'auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(180deg, transparent, rgba(7, 7, 8, 0.8))',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        transition: 'opacity 0.4s'
      }} className="card-footer-label">
        <h4 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          fontWeight: 400,
          color: 'var(--text-primary)'
        }}>
          {project.name}
        </h4>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent)'
        }}>
          {project.category}
        </span>
      </div>

      <style>{`
        /* Hover triggers */
        .project-card-interactive:hover {
          transform: translateY(-8px);
          border-color: var(--border-hover) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px var(--accent-glow) !important;
        }

        /* Custom hover for lumina (Orange/Black theme) */
        .project-card-lumina:hover {
          border-color: rgba(255, 107, 0, 0.4) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 107, 0, 0.25) !important;
        }
        .project-card-lumina .overlay-tag {
          color: #ff6b00 !important;
        }
        .project-card-lumina .card-footer-label span {
          color: #ff6b00 !important;
        }
        
        .project-card-interactive:hover .project-image {
          transform: scale(1.06);
        }

        .project-card-interactive:hover .card-overlay {
          opacity: 1 !important;
        }

        .project-card-interactive:hover .card-footer-label {
          opacity: 0 !important;
        }

        /* Staggered text animations on card hover */
        .project-card-interactive:hover .overlay-tag,
        .project-card-interactive:hover .overlay-title,
        .project-card-interactive:hover .overlay-desc,
        .project-card-interactive:hover .overlay-link {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }

        /* Hover effect on link arrow inside overlay */
        .project-card-interactive:hover .overlay-link:hover .link-arrow {
          transform: translateX(6px);
        }

        /* Diagonal light sweep animation */
        .project-card-interactive:hover .card-sheen {
          animation: sheenSweep 1.2s var(--transition-smooth) forwards;
        }

        @keyframes sheenSweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @media (max-width: 768px) {
          /* Stacks normally, simpler interactions on mobile */
          .card-overlay {
            padding: 2rem !important;
          }
          .project-card-interactive:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
