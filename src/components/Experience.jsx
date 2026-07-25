import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            Career Timeline
          </span>
          <h2>Work Experience</h2>
          <p>A history of my professional roles, engineering contributions, and achievements.</p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20px',
              width: '2px',
              background: 'var(--border-color)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: '50px',
                }}
              >
                {/* Timeline Icon Node */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '2px solid var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    boxShadow: 'var(--shadow-glow)',
                  }}
                >
                  <Briefcase size={20} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <span className="badge badge-purple" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} /> {exp.period}
                      </span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginTop: '0.25rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                      }}
                    >
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{exp.description}</p>

                  {/* Bullet achievements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
