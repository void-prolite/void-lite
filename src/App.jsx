import React, { useState, useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectDrawer from './components/ProjectDrawer';

// Image assets (copied in the setup phase)
import atmosImg from './assets/atmos.png';
import launchforgeImg from './assets/launchforge.png';
import tbcImg from './assets/tbc.png';
import luminaImg from './assets/lumina.png';

const projectsData = [
  {
    id: 'atmos',
    name: 'Atmos Insight',
    category: 'Interactive Weather Dashboard',
    image: atmosImg,
    description: 'An evocative weather sensory visualization that translates atmospheric readings into immersive sonic and visual feedback.',
    oneLiner: 'Sensory Weather Visualization Platform',
    fullDescription: 'Atmos Insight reimagines weather applications. It is not just about forecasting; it is about sensory connection. By mapping meteorological metrics like humidity, wind turbulence, and solar index directly to real-time SVG layouts and custom CSS-in-JS shaders, Atmos creates a digital replica of the natural atmosphere inside a high-contrast dark dashboard.',
    tech: ['React', 'CSS Canvas Shaders', 'SVG Animations', 'Geolocation API'],
    highlights: [
      'Real-time meteorological sensory mapping',
      'Dynamic glassmorphic weather cards',
      'Automated location and misty particle system animations'
    ],
    url: 'https://atmos-lite.vercel.app/'
  },
  {
    id: 'launchforge',
    name: 'Forge Launch',
    category: 'High-Performance SaaS Waitlist',
    image: launchforgeImg,
    description: 'A premium waitlist and launch engine designed to model micro-conversions and capture user momentum with gorgeous metrics.',
    oneLiner: 'Advanced SaaS Waitlist & Lead Accelerator',
    fullDescription: 'Forge Launch is an editorial approach to SaaS marketing. Moving away from standard colorful vectors, it introduces solid layouts, sharp lines, and highly detailed interactive metric graphs. It provides clients with an exact waitlist lead dashboard, invite-only access simulation, and ultra-fast load times on a premium design frame.',
    tech: ['React', 'ChartJS / SVG Metrics', 'CSS Custom Grids', 'Performance Opt.'],
    highlights: [
      'Waitlist signups & invite-only access engine',
      'Ultra-responsive geometric metric dashboards',
      'Cinematic dark mode borders with micro-glows'
    ],
    url: 'https://launch-forge-lite.vercel.app/'
  },
  {
    id: 'tbc',
    name: 'The Bangalore Cafe',
    category: 'Luxury Gastronomy Website',
    image: tbcImg,
    description: 'A sensory restaurant showcase featuring elegant editorial grids and an advanced secure table booking reservation engine.',
    oneLiner: 'Fine Dining Reservation & Heritage Showcase',
    fullDescription: 'The Bangalore Cafe is a luxury digital storefront built for a high-end culinary destination. The website pairs rich food photography with a gold serif design system and an intuitive reservation system. It integrates custom date verification (ensuring past dates are blocklisted) and live seating availability to streamline bookings with confidence.',
    tech: ['React', 'Bespoke Date Engine', 'Intersection Observer', 'Gourmet Typography'],
    highlights: [
      'Robust validation blocking past date booking entries',
      'Cinematic image loading and section reveals',
      'Full integration of culinary menu showcase drawer'
    ],
    url: 'https://the-bangalore-cafe-lite.vercel.app/'
  },
  {
    id: 'lumina',
    name: 'Lumina Estates',
    category: 'Premium Real Estate Portfolio',
    image: luminaImg,
    description: 'A high-contrast luxury real estate registry showcasing villa installations in a signature pitch-black and electric orange aesthetic.',
    oneLiner: 'Bespoke Black & Orange Architectural Registry',
    fullDescription: 'Lumina Estates is a masterclass in premium real estate presentation. Rejecting the standard sterile white layouts of modern templates, it utilizes a confident, striking color scheme of deep pitch-black and energetic electric-orange accents. This cinematic backdrop highlights modern architectural villa installations, dynamic environmental lighting controls, and premium high-contrast user interfaces built for modern web browsers.',
    tech: ['React', 'High-Contrast CSS Styling', 'Bespoke Ambient Glows', 'Luxury Typography'],
    highlights: [
      'Striking high-contrast black and electric orange branding architecture',
      'Bespoke editorial grid structures rejecting default white templates',
      'Interactive premium villa cards and environmental glows'
    ],
    url: 'https://lumina-estates-lite.vercel.app/'
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useRef(null);

  const scrollToSection = (e, ref) => {
    e.preventDefault();
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Premium custom mouse interaction */}
      <CustomCursor />

      {/* Main Container */}
      <main style={{
        backgroundColor: 'var(--bg-primary)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative'
      }}>
        {/* minimal header navigation overlay */}
        <Navigation
          onWorkClick={(e) => scrollToSection(e, gridRef)}
          onContactClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Cinematic centered Hero section */}
        <Hero
          onScrollDown={(e) => scrollToSection(e, gridRef)}
        />

        {/* Bespoke projects display grid (2x2) */}
        <ProjectGrid
          projects={projectsData}
          onProjectClick={(proj) => setSelectedProject(proj)}
          gridRef={gridRef}
        />

        {/* Premium Project Showcase Details (Right-Side Drawer) */}
        <ProjectDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Minimal Editorial Footer (Contact Section) */}
        <footer
          id="contact"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border)',
            padding: '8rem 4rem 4rem 4rem',
            width: '100%',
            color: 'var(--text-primary)',
            position: 'relative',
            zIndex: 10
          }}
        >
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '6rem'
          }}>
            {/* Main Contact Block */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '2rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: 'var(--accent)',
                textTransform: 'uppercase'
              }}>
                02 &mdash; COMMISSION / TALK
              </span>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                maxWidth: '900px'
              }}>
                Let's construct the next <br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>immersive installation.</span>
              </h2>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem 4rem',
                marginTop: '1.5rem',
                width: '100%'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}>
                    Email
                  </span>
                  <a
                    href="mailto:void.prolite@gmail.com"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: 300,
                      color: 'var(--text-primary)',
                      borderBottom: '1px solid var(--accent)',
                      paddingBottom: '8px',
                      display: 'inline-block',
                      transition: 'color 0.3s'
                    }}
                    className="email-link"
                  >
                    void.prolite@gmail.com
                  </a>
                </div>


              </div>
            </div>

            {/* Accent Separator */}
            <div style={{ height: '1px', width: '100%', backgroundColor: 'var(--border)' }} />

            {/* Bottom Meta Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '2rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)'
            }}>
              {/* Copyright */}
              <div>
                <p>&copy; {new Date().getFullYear()} Void. Lite. All Rights Reserved.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.7rem', opacity: 0.7 }}>Bespoke digital architecture.</p>
              </div>

              {/* Editorial signature */}
              <div className="footer-signature-container">
                <div style={{
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                  fontWeight: 300,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginTop: '-0.75rem',
                  textShadow: '0 0 10px rgba(var(--accent-rgb), 0.1)',
                  transition: 'text-shadow 0.4s var(--transition-smooth), color 0.4s var(--transition-smooth)'
                }} className="footer-signature">
                  Void. Lite
                </div>

              </div>

              <div style={{
                display: 'flex',
                gap: '2.5rem'
              }}>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">Instagram</a>
              </div>
            </div>
          </div>

          <style>{`
            .email-link:hover, .phone-link:hover {
              color: var(--accent) !important;
            }
            .footer-social-link {
              transition: color 0.3s;
            }
            .footer-social-link:hover {
              color: var(--accent) !important;
            }
            .footer-signature-container {
              position: relative;
              display: inline-block;
              cursor: none;
              transition: transform 0.4s var(--transition-smooth);
            }
            .footer-signature-container:hover {
              transform: scale(1.06);
            }
            .footer-signature {
              cursor: none;
              transition: text-shadow 0.4s var(--transition-smooth), color 0.4s var(--transition-smooth) !important;
            }
            .footer-signature-container:hover .footer-signature {
              text-shadow: 0 0 25px rgba(var(--accent-rgb), 0.4) !important;
              color: var(--accent) !important;
            }

            @media (max-width: 768px) {
              footer {
                padding: 5rem 2rem 3rem 2rem !important;
              }
              .email-link {
                font-size: 1.4rem !important;
              }
            }
          `}</style>
        </footer>
      </main>
    </>
  );
}

export default App;
