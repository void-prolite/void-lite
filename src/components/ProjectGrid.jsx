import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onProjectClick, gridRef }) => {
  return (
    <section 
      id="work" 
      ref={gridRef}
      style={{
        padding: '8rem 4rem 10rem 4rem',
        backgroundColor: 'var(--bg-primary)',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        zIndex: 5
      }}
    >
      {/* Section Header */}
      <div 
        className="animate-slide-up"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '5rem',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          display: 'inline-block'
        }}>
          01 &mdash; ARCHIVE
        </span>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.1,
          letterSpacing: '-0.01em'
        }}>
          Selected Works
        </h2>
        <div style={{
          height: '1px',
          width: '80px',
          backgroundColor: 'rgba(255, 75, 62, 0.4)',
          marginTop: '1.5rem'
        }} />
      </div>

      {/* 2x2 Project Cards Grid */}
      <div className="stagger-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #work {
            padding: 5rem 2rem 6rem 2rem !important;
          }
          .stagger-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectGrid;
