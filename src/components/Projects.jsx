import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

/* ─── Browser-chrome device frame with auto-advancing screenshot carousel ─── */
function DeviceFrame({ screenshots, fallback, title }) {
  const images =
    screenshots && screenshots.length > 0
      ? screenshots
      : [{ src: fallback, label: title }];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % images.length),
      3200
    );
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
    resetTimer();
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
    resetTimer();
  };

  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow:
          '0 24px 60px rgba(22, 163, 74, 0.12), 0 0 0 1px var(--border-color)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        position: 'relative',
      }}
    >
      {/* Browser top-bar */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 8,
            background: 'var(--bg-card)',
            borderRadius: '6px',
            padding: '4px 12px',
            fontSize: '0.72rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          https://ai-hub.local
        </div>
      </div>

      {/* Screenshot area */}
      <div style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden', background: 'var(--bg-primary)' }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.label}
            onError={(e) => {
              console.error(`Failed to load image: ${img.src}`);
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              opacity: idx === current ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              pointerEvents: idx === current ? 'auto' : 'none',
              zIndex: idx === current ? 2 : 1,
            }}
          />
        ))}

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="device-arrow"
              style={{
                position: 'absolute', left: '0.75rem', top: '50%',
                transform: 'translateY(-50%)', zIndex: 6,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(22, 163, 74, 0.9)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                opacity: 0, transition: 'opacity 0.2s',
              }}
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={next}
              className="device-arrow"
              style={{
                position: 'absolute', right: '0.75rem', top: '50%',
                transform: 'translateY(-50%)', zIndex: 6,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(22, 163, 74, 0.9)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                opacity: 0, transition: 'opacity 0.2s',
              }}
            >
              <ChevronRight size={17} />
            </button>
          </>
        )}

        {/* Bottom: label + dot indicators */}
        <div
          style={{
            position: 'absolute', bottom: '0.9rem',
            left: '1rem', right: '1rem',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', zIndex: 5,
          }}
        >
          <span
            style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
              padding: '0.25rem 0.75rem', borderRadius: '999px',
              background: '#16a34a', color: '#ffffff',
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.3)',
            }}
          >
            {images[current].label}
          </span>

          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '5px' }}>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(idx);
                    resetTimer();
                  }}
                  style={{
                    width: idx === current ? '18px' : '6px',
                    height: '6px', borderRadius: '999px',
                    border: 'none', padding: 0, cursor: 'pointer',
                    background:
                      idx === current
                        ? '#16a34a'
                        : 'rgba(22, 163, 74, 0.35)',
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Projects Section ─────────────────────────────────────────────── */
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projectsData[activeIndex];

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + projectsData.length) % projectsData.length);
  const goNext = () =>
    setActiveIndex((i) => (i + 1) % projectsData.length);

  return (
    <section
      id="projects"
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* CSS helpers */}
      <style>{`
        .device-frame-wrap:hover .device-arrow { opacity: 1 !important; }

        @keyframes proj-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proj-animate { animation: proj-fade-up 0.55s ease both; }

        @media (max-width: 900px) {
          .proj-layout { grid-template-columns: 1fr !important; }
          .proj-info-col { padding-left: 0 !important; }
        }
      `}</style>

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', top: '15%', left: '-5%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(22, 163, 74, 0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}
      >
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800, color: 'var(--text-primary)', margin: 0,
          }}>
            Projects Showcase
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem', fontSize: '1rem' }}>
            Full-stack projects, local AI platforms, and digital experiences.
          </p>
        </div>

        {/* Two-column showcase */}
        <div
          key={project.id}
          className="proj-layout proj-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT – Device frame */}
          <div className="device-frame-wrap">
            <DeviceFrame
              screenshots={project.screenshots}
              fallback={project.image}
              title={project.title}
            />
          </div>

          {/* RIGHT – Project info */}
          <div
            className="proj-info-col"
            style={{
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
              paddingLeft: '1rem',
            }}
          >
            {/* Title row */}
            <div>
              <div style={{
                display: 'flex', alignItems: 'center',
                gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap',
              }}>
                {/* accent bar */}
                <div style={{
                  width: '4px', height: '28px', borderRadius: '3px', flexShrink: 0,
                  background: 'var(--gradient-brand)',
                }} />
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 800, color: 'var(--text-primary)', margin: 0, flex: 1,
                }}>
                  {project.title}
                </h3>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.925rem', lineHeight: 1.7, margin: 0,
              }}>
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {(project.highlights || []).slice(0, 4).map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <span style={{
                    color: 'var(--accent-primary)', fontWeight: 800,
                    fontSize: '1rem', lineHeight: 1.5, flexShrink: 0,
                  }}>
                    +
                  </span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: 1.55, fontWeight: 500 }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech stack badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.85rem', borderRadius: '8px',
                    background: 'rgba(22, 163, 74, 0.1)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.77rem', fontWeight: 600, letterSpacing: '0.03em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.25rem', flexWrap: 'wrap' }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '0.75rem 1.6rem', borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  border: 'none', color: '#ffffff',
                  fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <GitBranch size={18} /> View GitHub Source Code <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Project navigator — project selector pills */}
        {projectsData.length > 1 && (
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: '0.75rem', marginTop: '3.5rem', flexWrap: 'wrap',
          }}>
            <button
              onClick={goPrev}
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-primary)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
              title="Previous project"
            >
              <ChevronLeft size={18} />
            </button>

            {projectsData.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  border: idx === activeIndex ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  background: idx === activeIndex ? '#16a34a' : 'var(--bg-card)',
                  color: idx === activeIndex ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: idx === activeIndex ? '0 4px 14px rgba(22, 163, 74, 0.22)' : 'var(--shadow-sm)',
                }}
              >
                {p.title.split('–')[0].trim()}
              </button>
            ))}

            <button
              onClick={goNext}
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-primary)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
              title="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
