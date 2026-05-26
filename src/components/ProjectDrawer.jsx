import React, { useState, useEffect } from 'react';

const ProjectDrawer = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'sandbox'
  const [sandboxState, setSandboxState] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setIsVisible(true);
      setActiveTab('overview');
      setSandboxState({}); // reset sandbox state
      
      // Lock scroll by recording the current position to prevent scroll-to-top jumps
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll'; // Prevent layout shift by keeping scrollbar
    }
    return () => {
      // Restore scroll position when unmounting or when project changes to null
      if (document.body.style.position === 'fixed') {
        const scrollY = parseInt(document.body.style.top || '0') * -1;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
      }
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Wait for transition out
  };

  // Simulated live sandboxes for each project
  const renderSandbox = () => {
    switch (project.id) {
      case 'atmos':
        return (
          <div className="sandbox-card">
            <h4 className="sandbox-title">Atmos &mdash; Interactive Sandbox</h4>
            <p className="sandbox-subtitle">Simulating real-time sensory atmospheric engine.</p>
            
            <div className="weather-dashboard">
              <div className="weather-header">
                <div>
                  <h3>{sandboxState.city || 'Bangalore, IN'}</h3>
                  <p>Misty &bull; Feels like {sandboxState.temp || '24'}°C</p>
                </div>
                <div className="weather-temp">
                  {sandboxState.temp || '24'}°C
                </div>
              </div>

              <div className="weather-controls">
                <button 
                  onClick={() => setSandboxState({ city: 'Reykjavik, IS', temp: '2', condition: 'snow' })}
                  className={`weather-btn ${sandboxState.city === 'Reykjavik, IS' ? 'active' : ''}`}
                >
                  Reykjavik
                </button>
                <button 
                  onClick={() => setSandboxState({ city: 'Tokyo, JP', temp: '19', condition: 'rain' })}
                  className={`weather-btn ${sandboxState.city === 'Tokyo, JP' ? 'active' : ''}`}
                >
                  Tokyo
                </button>
                <button 
                  onClick={() => setSandboxState({ city: 'Sahara, DZ', temp: '42', condition: 'sunny' })}
                  className={`weather-btn ${sandboxState.city === 'Sahara, DZ' ? 'active' : ''}`}
                >
                  Sahara
                </button>
                <button 
                  onClick={() => setSandboxState({ city: 'Bangalore, IN', temp: '24', condition: 'misty' })}
                  className={`weather-btn ${!sandboxState.city || sandboxState.city === 'Bangalore, IN' ? 'active' : ''}`}
                >
                  Reset
                </button>
              </div>

              {/* Weather Sensor Visualizations */}
              <div className="sensory-grid">
                <div className="sensor-item">
                  <span>HUMIDITY</span>
                  <strong>{sandboxState.condition === 'sunny' ? '12%' : sandboxState.condition === 'snow' ? '82%' : '65%'}</strong>
                </div>
                <div className="sensor-item">
                  <span>WIND SPEED</span>
                  <strong>{sandboxState.condition === 'snow' ? '32 km/h' : sandboxState.condition === 'sunny' ? '4 km/h' : '12 km/h'}</strong>
                </div>
                <div className="sensor-item">
                  <span>AIR QUALITY</span>
                  <strong>{sandboxState.condition === 'sunny' ? '98 AQI' : '45 AQI'}</strong>
                </div>
              </div>
            </div>
          </div>
        );

      case 'launchforge':
        return (
          <div className="sandbox-card">
            <h4 className="sandbox-title">LaunchForge &mdash; Interactive Sandbox</h4>
            <p className="sandbox-subtitle">Simulate real-time micro-conversion modeling.</p>
            
            <div className="saas-dashboard">
              <div className="saas-metrics">
                <div className="metric-box">
                  <span>ACTIVE USERS</span>
                  <div className="metric-val">{sandboxState.users || '1,424'}</div>
                </div>
                <div className="metric-box">
                  <span>CONVERSION RATE</span>
                  <div className="metric-val" style={{ color: 'var(--accent)' }}>
                    {sandboxState.conv || '3.42%'}
                  </div>
                </div>
              </div>

              <div className="dashboard-controls">
                <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>ADJUST MONTHLY AD SPEND</label>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="5000"
                  value={sandboxState.spend || 10000}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const users = Math.floor(val * 0.15 + 242);
                    const conv = (3.2 + (val / 10000) * 0.15).toFixed(2);
                    setSandboxState({ spend: val, users: users.toLocaleString(), conv: `${conv}%` });
                  }}
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    height: '4px',
                    borderRadius: '2px',
                    margin: '10px 0 20px 0',
                    cursor: 'none'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span>Spend: ${sandboxState.spend || 10000}</span>
                  <span>Est. MRR: ${( (sandboxState.spend || 10000) * 0.45 ).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tbc':
        return (
          <div className="sandbox-card">
            <h4 className="sandbox-title">The Bangalore Cafe &mdash; Reservation Sandbox</h4>
            <p className="sandbox-subtitle">Verify past-date logic and live booking mechanics.</p>
            
            <div className="tbc-dashboard">
              <div className="booking-status">
                {sandboxState.booked ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem', border: '1px solid var(--accent)', borderRadius: '8px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>RESERVATION CONFIRMED</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', marginTop: '0.5rem', fontSize: '2rem' }}>{sandboxState.guests} Guests</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{sandboxState.date} at {sandboxState.time}</p>
                    <button 
                      onClick={() => setSandboxState({})}
                      className="weather-btn"
                      style={{ marginTop: '1.2rem', padding: '6px 16px', fontSize: '0.75rem' }}
                    >
                      Book Another Table
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.target);
                    const selDate = new Date(fd.get('date'));
                    const today = new Date();
                    today.setHours(0,0,0,0);
                    
                    if (selDate < today) {
                      setSandboxState({ error: 'Warning: Dates in the past are blocklisted!' });
                      return;
                    }
                    setSandboxState({
                      booked: true,
                      guests: fd.get('guests'),
                      date: fd.get('date'),
                      time: fd.get('time')
                    });
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Guests</label>
                        <select name="guests" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border)', padding: '8px', outline: 'none', cursor: 'none' }}>
                          <option value="2">2 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="6">6 Guests</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Time</label>
                        <select name="time" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border)', padding: '8px', outline: 'none', cursor: 'none' }}>
                          <option value="7:00 PM">7:00 PM</option>
                          <option value="8:30 PM">8:30 PM</option>
                          <option value="9:45 PM">9:45 PM</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Date</label>
                      <input 
                        type="date" 
                        name="date" 
                        required 
                        style={{ width: '100%', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border)', padding: '8px', outline: 'none', cursor: 'none' }}
                      />
                    </div>
                    
                    {sandboxState.error && (
                      <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '12px', fontWeight: 600 }}>
                        {sandboxState.error}
                      </div>
                    )}
                    
                    <button type="submit" className="visit-btn" style={{ width: '100%', cursor: 'none' }}>
                      Verify & Reserve Table
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        );

      case 'lumina':
        const isOrangeBlack = sandboxState.theme !== 'white';
        return (
          <div className="sandbox-card" style={{
            transition: 'background-color 0.5s ease, border-color 0.5s ease',
            backgroundColor: isOrangeBlack ? 'rgba(7, 7, 8, 0.95)' : '#ffffff',
            borderColor: isOrangeBlack ? 'rgba(255, 107, 0, 0.3)' : '#e2e8f0',
            color: isOrangeBlack ? '#f5f4f0' : '#0f172a',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h4 className="sandbox-title" style={{
              color: isOrangeBlack ? '#f5f4f0' : '#0f172a',
              transition: 'color 0.5s',
              fontSize: '1.4rem'
            }}>Lumina Estates &mdash; Theme Simulator</h4>
            <p className="sandbox-subtitle" style={{
              color: isOrangeBlack ? 'var(--text-muted)' : '#64748b',
              transition: 'color 0.5s',
              fontSize: '0.8rem',
              marginBottom: '1.5rem'
            }}>Contrast generic templates with Lumina's signature pitch-black & energetic orange theme.</p>
            
            {/* Theme Toggle Selectors */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => setSandboxState({ theme: 'white' })}
                style={{
                  backgroundColor: !isOrangeBlack ? '#0f172a' : 'rgba(255, 255, 255, 0.04)',
                  color: !isOrangeBlack ? '#ffffff' : '#f5f4f0',
                  border: !isOrangeBlack ? '1px solid #0f172a' : '1px solid var(--border)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  padding: '8px 14px',
                  borderRadius: '4px',
                  cursor: 'none',
                  transition: 'all 0.3s'
                }}
              >
                Generic White Theme
              </button>
              <button 
                onClick={() => setSandboxState({ theme: 'orangeBlack' })}
                style={{
                  backgroundColor: isOrangeBlack ? '#ff6b00' : 'rgba(255, 255, 255, 0.04)',
                  color: isOrangeBlack ? '#070708' : '#8c8b90',
                  border: isOrangeBlack ? '1px solid #ff6b00' : '1px solid var(--border)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  padding: '8px 14px',
                  borderRadius: '4px',
                  cursor: 'none',
                  transition: 'all 0.3s',
                  boxShadow: isOrangeBlack ? '0 0 15px rgba(255, 107, 0, 0.35)' : 'none'
                }}
              >
                🔥 Premium Orange & Black (Active)
              </button>
            </div>

            {/* Interactive Villa Card Rendering based on theme */}
            <div style={{
              border: '1px solid',
              borderColor: isOrangeBlack ? 'rgba(255, 107, 0, 0.25)' : '#e2e8f0',
              borderRadius: '8px',
              backgroundColor: isOrangeBlack ? '#0d0d10' : '#f8fafc',
              padding: '1.5rem',
              transition: 'all 0.5s ease',
              boxShadow: isOrangeBlack ? '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 107, 0, 0.05)' : '0 4px 6px rgba(0, 0, 0, 0.02)'
            }}>
              {/* Card visual showcase */}
              <div style={{
                height: '140px',
                borderRadius: '6px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1rem',
                border: isOrangeBlack ? '1px solid rgba(255, 107, 0, 0.15)' : '1px solid #e2e8f0'
              }}>
                <img 
                  src={project.image} 
                  alt="Villa Lumina" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isOrangeBlack ? 'brightness(0.9) contrast(1.15)' : 'brightness(1.15) contrast(0.9)',
                    transition: 'filter 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: isOrangeBlack ? '#ff6b00' : '#0f172a',
                  color: isOrangeBlack ? '#070708' : '#ffffff',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  padding: '3px 8px',
                  borderRadius: '3px',
                  textTransform: 'uppercase',
                  boxShadow: isOrangeBlack ? '0 0 10px rgba(255, 107, 0, 0.4)' : 'none',
                  transition: 'all 0.5s ease'
                }}>
                  Lumina Elite
                </div>
              </div>

              {/* Title & Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: isOrangeBlack ? '#ff6b00' : '#64748b',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  transition: 'color 0.5s ease'
                }}>
                  ARCHITECTURAL REGISTRY
                </span>
                
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: isOrangeBlack ? 300 : 600,
                  color: isOrangeBlack ? '#f5f4f0' : '#0f172a',
                  lineHeight: 1.2,
                  transition: 'color 0.5s ease'
                }}>
                  The Amber Pavilion
                </h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                  fontWeight: 300,
                  color: isOrangeBlack ? '#8c8b90' : '#64748b',
                  transition: 'color 0.5s ease'
                }}>
                  A luxurious villa integrated with autonomous light sensors and carbon-neutral glass vaults, designed to capture natural solar glows.
                </p>

                <div style={{
                  height: '1px',
                  backgroundColor: isOrangeBlack ? 'rgba(255, 107, 0, 0.15)' : '#e2e8f0',
                  margin: '0.6rem 0',
                  transition: 'background-color 0.5s ease'
                }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    color: isOrangeBlack ? '#f5f4f0' : '#0f172a',
                    fontWeight: 600
                  }}>
                    $4,850,000
                  </span>
                  
                  <span style={{
                    fontSize: '0.65rem',
                    color: isOrangeBlack ? '#ff6b00' : '#0f172a',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {isOrangeBlack ? '🔥 VIEW IN LUXURY DARK' : 'VIEW DETAIL'}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-end',
      pointerEvents: 'auto'
    }}>
      {project.id === 'lumina' && (
        <style>{`
          :root {
            --accent: #ff6b00 !important;
            --accent-rgb: 255, 107, 0 !important;
            --accent-glow: rgba(255, 107, 0, 0.15) !important;
            --accent-glow-strong: rgba(255, 107, 0, 0.4) !important;
            --border-hover: rgba(255, 107, 0, 0.3) !important;
          }
          .visit-btn {
            background-color: #ff6b00 !important;
            color: #070708 !important;
            box-shadow: 0 10px 20px rgba(255, 107, 0, 0.25) !important;
          }
          .visit-btn:hover {
            background-color: #ff8533 !important;
            box-shadow: 0 15px 30px rgba(255, 107, 0, 0.45) !important;
          }
          .tech-pill {
            border-color: rgba(255, 107, 0, 0.2) !important;
          }
          .drawer-tab-btn.active::after {
            background-color: #ff6b00 !important;
          }
        `}</style>
      )}
      {/* Backdrop overlay */}
      <div 
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(7, 7, 8, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto'
        }}
      />

      {/* Drawer Panel */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        height: '100%',
        backgroundColor: 'var(--bg-drawer)',
        boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)',
        borderLeft: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s var(--transition-smooth)',
        overflowY: 'auto'
      }}>
        {/* Close Button Header */}
        <div className="drawer-animate-1" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 3rem',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'rgba(7, 7, 8, 0.3)'
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 700
          }}>
            SYSTEM: {project.category}
          </span>
          <button 
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.15em',
              fontWeight: 600,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'none',
              transition: 'color 0.3s'
            }}
            className="close-drawer-btn"
          >
            <span>Close</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Hero Image in Drawer */}
        <div className="drawer-animate-2" style={{
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)'
        }}>
          <img 
            src={project.image} 
            alt={project.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>

        {/* Main Details Area */}
        <div className="drawer-animate-3" style={{ padding: '3rem 3rem 4rem 3rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '0.5rem'
          }}>
            {project.name}
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
            marginBottom: '2rem'
          }}>
            {project.oneLiner}
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="drawer-tabs">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`drawer-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            >
              PROJECT DETAILS
            </button>
            <button 
              onClick={() => setActiveTab('sandbox')}
              className={`drawer-tab-btn ${activeTab === 'sandbox' ? 'active' : ''}`}
            >
              LAUNCH SIMULATOR
            </button>
          </div>

          <div style={{ height: '1px', width: '100%', backgroundColor: 'var(--border)', marginBottom: '2rem' }} />

          {/* Tab Contents */}
          {activeTab === 'overview' ? (
            <div className="tab-overview animate-fade-in">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>Architecture &amp; Concept</h4>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}>
                {project.fullDescription}
              </p>

              {/* Technologies */}
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Tech Specifications</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Highlights */}
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Key Highlights</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((highlight, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4
                  }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>&mdash;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="tab-sandbox animate-fade-in">
              {renderSandbox()}
            </div>
          )}

          {/* Footer CTA */}
          <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="visit-btn"
            >
              <span>Visit Page</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.3s' }} className="btn-arrow">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .close-drawer-btn:hover {
          color: var(--accent) !important;
        }

        .drawer-tabs {
          display: flex;
          gap: 2rem;
          margin-bottom: 0.5rem;
        }

        .drawer-tab-btn {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          padding-bottom: 0.5rem;
          cursor: none;
          position: relative;
          transition: color 0.3s;
        }

        .drawer-tab-btn:hover,
        .drawer-tab-btn.active {
          color: var(--text-primary);
        }

        .drawer-tab-btn::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1.5px;
          bottom: 0;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s var(--transition-smooth);
        }

        .drawer-tab-btn.active::after {
          width: 100%;
        }

        .tech-pill {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 6px 14px;
          border-radius: 100px;
        }

        /* Sandbox styling */
        .sandbox-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .sandbox-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .sandbox-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        /* Weather sandbox styles */
        .weather-dashboard {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .weather-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .weather-header h3 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 400;
        }

        .weather-header p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .weather-temp {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          font-weight: 300;
          color: var(--accent);
        }

        .weather-controls {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .weather-btn {
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: none;
          transition: all 0.3s;
        }

        .weather-btn:hover,
        .weather-btn.active {
          background-color: var(--accent);
          color: var(--text-dark);
          border-color: var(--accent);
        }

        .sensory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .sensor-item {
          background-color: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          padding: 10px;
          border-radius: 6px;
          text-align: center;
        }

        .sensor-item span {
          display: block;
          font-size: 0.6rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .sensor-item strong {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* SaaS Sandbox Styles */
        .saas-dashboard {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .saas-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 1.5rem;
        }

        .metric-box {
          background-color: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          padding: 12px 15px;
          border-radius: 6px;
        }

        .metric-box span {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 5px;
        }

        .metric-val {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 400;
          color: var(--text-primary);
        }

        .dashboard-controls {
          background-color: rgba(255,255,255,0.01);
          border: 1px solid var(--border);
          padding: 15px;
          border-radius: 6px;
        }

        /* Villa sandbox */
        .lumina-dashboard {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
        }

        /* Reservation forms */
        .tbc-dashboard {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
        }

        /* Large Action CTA Button */
        .visit-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--accent);
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 1.25rem 2rem;
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(255, 75, 62, 0.25);
          transition: all 0.3s;
          border: none;
        }

        .visit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(255, 75, 62, 0.45);
          background-color: #ff5e53;
        }

        .visit-btn:hover .btn-arrow {
          transform: translateX(4px) translateY(-2px);
        }

        @media (max-width: 768px) {
          .visit-btn {
            padding: 1rem 1.5rem !important;
          }
          .custom-cursor, .custom-cursor-ring {
            display: none !important;
          }
        }

        @keyframes drawerFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .drawer-animate-1 {
          opacity: 0;
          animation: drawerFadeIn 0.8s var(--transition-smooth) forwards;
          animation-delay: 0.1s;
        }
        .drawer-animate-2 {
          opacity: 0;
          animation: drawerFadeIn 0.8s var(--transition-smooth) forwards;
          animation-delay: 0.2s;
        }
        .drawer-animate-3 {
          opacity: 0;
          animation: drawerFadeIn 0.8s var(--transition-smooth) forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default ProjectDrawer;
