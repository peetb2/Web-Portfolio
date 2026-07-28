import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2, Layers, Cpu, Sparkles, X } from 'lucide-react';
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
          '0 25px 65px -12px rgba(22, 163, 74, 0.22), 0 12px 35px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px var(--border-color)',
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
      <div className="device-screen-box" style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden', background: 'var(--bg-primary)' }}>
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

/* ─── Architecture Deep Dive / What I Did Modal ─── */
function ArchitectureModal({ project, onClose }) {
  const [lang, setLang] = useState('en');

  if (!project) return null;

  const isTH = lang === 'th';
  const info = project.whatIDid;

  const roleText = info
    ? (isTH ? info.roleThai : info.role)
    : (isTH && project.studentRoleThai ? project.studentRoleThai : project.studentRole);

  const goalText = info ? (isTH ? info.goalThai : info.goal) : null;
  const builtText = info ? (isTH ? info.whatIBuiltThai : info.whatIBuilt) : null;
  const resultText = info ? (isTH ? info.resultThai : info.result) : null;

  const overviewText = isTH && project.architectureDetails?.overviewThai
    ? project.architectureDetails.overviewThai
    : (project.longDescription || project.description);

  const achievements = isTH
    ? (project.architectureDetails?.keyContributionsThai || project.highlightsThai || project.highlights)
    : (project.architectureDetails?.keyContributions || project.highlights || []);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%', maxWidth: '750px', maxHeight: '88vh',
          overflowY: 'auto', padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(22, 163, 74, 0.3)',
          position: 'relative',
          background: 'var(--bg-secondary)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(22, 163, 74, 0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls: Language Switcher & Close Button */}
        <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 10 }}>
          {/* Language Switcher Toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            background: 'var(--bg-primary)', padding: '3px 4px',
            borderRadius: '999px', border: '1px solid rgba(22, 163, 74, 0.3)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '0.25rem 0.65rem', borderRadius: '999px', border: 'none',
                background: lang === 'en' ? '#16a34a' : 'transparent',
                color: lang === 'en' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang('th')}
              style={{
                padding: '0.25rem 0.65rem', borderRadius: '999px', border: 'none',
                background: lang === 'th' ? '#16a34a' : 'transparent',
                color: lang === 'th' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              TH
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(22, 163, 74, 0.1)',
              border: '1px solid rgba(22, 163, 74, 0.3)',
              color: 'var(--text-primary)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(22, 163, 74, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(22, 163, 74, 0.1)')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingRight: '120px' }}>
          <div style={{
            padding: '0.6rem', borderRadius: '12px',
            background: 'rgba(22, 163, 74, 0.15)', color: '#16a34a',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Cpu size={26} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {isTH ? 'สิ่งที่ฉันทำ / สิ่งที่พัฒนารับผิดชอบ' : 'What I Did / Core Contributions'}
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              {isTH ? `สิ่งที่ฉันทำใน ${project.title.split('–')[0].trim()}` : `What I Did in ${project.title.split('–')[0].trim()}`}
            </h3>
          </div>
        </div>

        {/* My Role Banner */}
        {roleText && (
          <div style={{
            marginBottom: '1.25rem', padding: '0.85rem 1.1rem', borderRadius: '12px',
            background: 'rgba(22, 163, 74, 0.08)', border: '1px solid rgba(22, 163, 74, 0.25)',
            display: 'flex', alignItems: 'center', gap: '0.75rem'
          }}>
            <Sparkles size={20} color="#16a34a" style={{ flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {isTH ? 'บทบาทหลัก (My Role)' : 'My Role'}
              </span>
              <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 700, marginTop: '2px' }}>
                {roleText}
              </div>
            </div>
          </div>
        )}

        {/* The Goal */}
        {goalText && (
          <div style={{
            marginBottom: '1.25rem', padding: '1rem 1.15rem', borderRadius: '12px',
            background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
          }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {isTH ? 'เป้าหมายของโปรเจกต์ (The Goal)' : 'The Goal'}
            </h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              {goalText}
            </p>
          </div>
        )}

        {/* What I Built Overview */}
        {builtText && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              {isTH ? 'สิ่งที่ฉันสร้างและวางสถาปัตยกรรม (What I Built)' : 'What I Built'}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
              {builtText}
            </p>
          </div>
        )}

        {/* Detailed Technical Work Items */}
        {info && info.items && info.items.length > 0 ? (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
              {isTH ? 'การดำเนินงานทางวิศวกรรมเชิงลึก (Key Technical Work)' : 'Key Technical Engineering Work'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {info.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem 1.15rem', borderRadius: '12px',
                    background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  <div style={{ fontSize: '0.925rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" />
                    {isTH && item.titleThai ? item.titleThai : item.title}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                    {isTH && item.descThai ? item.descThai : item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Fallback Key Contributions for projects without detailed whatIDid */
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              {isTH ? 'ผลงานและความสำเร็จทางเทคนิค (Technical Achievements)' : 'Key Technical Achievements'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex', gap: '0.75rem', padding: '0.85rem 1rem',
                    borderRadius: '10px', background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)', alignItems: 'flex-start'
                  }}
                >
                  <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: 1.5, fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Result */}
        {resultText && (
          <div style={{
            marginBottom: '1.5rem', padding: '1rem 1.15rem', borderRadius: '12px',
            background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.3)',
          }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 0.35rem 0' }}>
              {isTH ? 'ผลลัพธ์ของระบบ (The Result)' : 'The Result'}
            </h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
              {resultText}
            </p>
          </div>
        )}

        {/* Tech Stack Grid */}
        <div>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
            {isTH ? 'เทคโนโลยีและเครื่องมือที่ใช้ (Technologies & Tools)' : 'Technologies & Tools'}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: '0.35rem 0.75rem', borderRadius: '8px',
                  background: 'rgba(22, 163, 74, 0.1)',
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  color: '#16a34a', fontSize: '0.8rem', fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Projects Section ─────────────────────────────────────────────── */
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArchModal, setShowArchModal] = useState(false);
  const project = projectsData[activeIndex];

  const goPrev = () => {
    setShowArchModal(false);
    setActiveIndex((i) => (i - 1 + projectsData.length) % projectsData.length);
  };
  const goNext = () => {
    setShowArchModal(false);
    setActiveIndex((i) => (i + 1) % projectsData.length);
  };

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
        padding: '4.5rem 1.5rem',
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
          .proj-layout { grid-template-columns: 1fr !important; gap: 2rem !important; min-height: auto !important; }
          .proj-info-col { padding-left: 0 !important; }
        }
        @media (max-width: 640px) {
          .device-screen-box { height: 230px !important; }
          #projects { padding: 3.5rem 1rem !important; }
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
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800, color: 'var(--text-primary)', margin: 0,
          }}>
            Projects Showcase
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem', fontSize: '0.95rem' }}>
            Full-stack projects, local AI platforms, and cloud tools.
          </p>
        </div>

        {/* Two-column showcase - Strict parent minHeight stops navigation jump */}
        <div
          key={project.id}
          className="proj-layout proj-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 420px',
            gap: '2.5rem',
            alignItems: 'stretch',
            minHeight: '700px',
          }}
        >
          {/* LEFT – Device frame */}
          <div className="device-frame-wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              paddingLeft: '0.5rem',
            }}
          >
            {/* Title row */}
            <div>
              <div style={{
                display: 'flex', alignItems: 'center',
                gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap',
              }}>
                {/* Thicker, softer green title accent bar */}
                <div style={{
                  width: '6px', height: '30px', borderRadius: '999px', flexShrink: 0,
                  background: 'linear-gradient(180deg, #22c55e 0%, #16a34a 100%)',
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)',
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

            {/* Highlights with crisp green checkmark icons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              {(project.highlights || []).slice(0, 4).map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.25rem' }}>
                  <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: 1.5, fontWeight: 500 }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech stack badges with primary/secondary visual hierarchy — mt-8 (2rem) for breathing room */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '2rem' }}>
              {project.tags.map((tag, idx) => {
                const isPrimary = idx < 4;
                return (
                  <span
                    key={idx}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      background: isPrimary ? '#16a34a' : 'rgba(22, 163, 74, 0.06)',
                      border: isPrimary ? '1px solid #16a34a' : '1px solid rgba(22, 163, 74, 0.35)',
                      color: isPrimary ? '#ffffff' : '#16a34a',
                      fontSize: '0.77rem',
                      fontWeight: isPrimary ? 700 : 600,
                      letterSpacing: '0.03em',
                      boxShadow: isPrimary ? '0 2px 8px rgba(22, 163, 74, 0.22)' : 'none',
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* CTA buttons pinned to bottom via mt-auto sitting strictly side-by-side */}
            <div
              className="proj-btn-row flex flex-row items-center gap-4"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem',
                marginTop: 'auto',
                flexWrap: 'nowrap',
              }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '0.75rem 1.25rem', borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  border: 'none', color: '#ffffff',
                  fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <GitBranch size={16} /> View GitHub Source Code <ArrowUpRight size={14} />
              </a>

              <button
                onClick={() => setShowArchModal(true)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '0.75rem 1.25rem', borderRadius: '10px',
                  background: 'transparent',
                  border: '1.5px solid #16a34a', color: '#16a34a',
                  fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(22, 163, 74, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Sparkles size={16} /> What I Did
              </button>
            </div>
          </div>
        </div>

        {/* Architecture Deep Dive Modal */}
        {showArchModal && (
          <ArchitectureModal
            project={project}
            onClose={() => setShowArchModal(false)}
          />
        )}

        {/* Project navigator — project selector pills */}
        {projectsData.length > 1 && (
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap',
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
