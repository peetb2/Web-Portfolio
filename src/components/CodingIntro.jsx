import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Zap, SkipForward, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CodingIntro({ onComplete }) {
  const [loadProgress, setLoadProgress] = useState(0);
  const [bootStage, setBootStage] = useState(0);
  const [streamedText, setStreamedText] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const [flyTurtle, setFlyTurtle] = useState(false);   // triggers the fly-to-hero animation
  const [turtleBig, setTurtleBig]  = useState(false);  // briefly scale up before flying

  const fullWelcomeMsg = "Welcome to my Portfolio";

  /* ── Progress bar ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setBootStage(1); return 100; }
        return prev + 4;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bootStage === 1) {
      const t = setTimeout(() => setBootStage(2), 600);
      return () => clearTimeout(t);
    }
  }, [bootStage]);

  /* ── Token stream ── */
  useEffect(() => {
    if (bootStage === 2) {
      let idx = 0;
      const iv = setInterval(() => {
        if (idx < fullWelcomeMsg.length) {
          setStreamedText(fullWelcomeMsg.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(iv);
          setTimeout(() => setBootStage(3), 300);
        }
      }, 50);
      return () => clearInterval(iv);
    }
  }, [bootStage]);

  /* ── Auto-exit with turtle fly animation ── */
  useEffect(() => {
    if (bootStage === 3) {
      const t = setTimeout(() => finishIntro(), 1200);
      return () => clearTimeout(t);
    }
  }, [bootStage]);

  const handleSkip = () => finishIntro();

  const finishIntro = () => {
    // 1. Scale turtle big (200ms)
    setTurtleBig(true);
    setTimeout(() => {
      // 2. Fly to hero position (500ms transition)
      setFlyTurtle(true);
      setIsExiting(true);
      // 3. Unmount intro after animation completes
      setTimeout(() => { if (onComplete) onComplete(); }, 700);
    }, 250);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') handleSkip();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        /* ── White + Green theme ── */
        background: '#f0faf4',
        color: '#0d1f12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* ── Soft green radial + dot-grid background ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 50% 40%, rgba(22, 163, 74, 0.14) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(22,163,74,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient green glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '520px', height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(34,197,94,0.07) 50%, transparent 80%)',
          filter: 'blur(70px)',
          animation: 'pulseCore 4s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* ── Skip button ── */}
      <button
        onClick={handleSkip}
        style={{
          position: 'absolute', top: '2rem', right: '2rem', zIndex: 20,
          background: 'rgba(22, 163, 74, 0.08)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(22, 163, 74, 0.3)',
          color: '#16a34a',
          padding: '0.65rem 1.35rem', borderRadius: '9999px',
          fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 20px rgba(22, 163, 74, 0.12)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(22, 163, 74, 0.18)';
          e.currentTarget.style.borderColor = 'rgba(22, 163, 74, 0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(22, 163, 74, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(22, 163, 74, 0.3)';
        }}
      >
        <span>Skip Intro</span>
        <SkipForward size={14} />
      </button>

      {/* ── Main card ── */}
      <div
        className="p-5 sm:p-9"
        style={{
          width: '100%', maxWidth: '820px',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(24px)',
          borderRadius: '28px',
          border: '1.5px solid rgba(22, 163, 74, 0.2)',
          boxShadow: '0 30px 80px -15px rgba(22, 163, 74, 0.15), 0 0 0 1px rgba(255,255,255,0.8)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          position: 'relative', zIndex: 10,
        }}
      >
        {/* ── Top badges bar ── */}
        <div
          className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between w-full mb-6 pb-4 border-b border-emerald-500/10 gap-3"
          style={{
            width: '100%', marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(22, 163, 74, 0.12)',
          }}
        >
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3">
            <div
              style={{
                position: 'relative',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '2px solid rgba(22, 163, 74, 0.4)',
                boxShadow: '0 2px 8px rgba(22, 163, 74, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src="/turtle_idle.png"
                alt="TurterAI"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#0d1f12' }}>
                Turter<span style={{ color: '#16a34a' }}>AI</span> Neural Engine
              </div>
              <div
                className="text-xs md:text-sm break-all break-words mt-0.5"
                style={{ color: '#3d6b4f', fontFamily: 'monospace' }}
              >
                LOCAL MODEL: turterai-llama-3-8b-q4_k_m.gguf
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-row gap-2 mt-4 md:mt-0 flex-wrap justify-center md:justify-start">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 0.8rem', borderRadius: '9999px',
              background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.3)',
              color: '#16a34a', fontSize: '0.75rem', fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>
              <ShieldCheck size={14} /><span>100% On-Device</span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 0.8rem', borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#059669', fontSize: '0.75rem', fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>
              <Zap size={14} /><span>148tok/s CUDA 12.4</span>
            </div>
          </div>
        </div>

        {/* ── Center turtle logo (circle) ── */}
        <div
          style={{
            position: 'relative',
            width: '160px', height: '160px',
            margin: '0.5rem 0 2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Outer spinning ring */}
          <div style={{
            position: 'absolute', inset: '-18px', borderRadius: '50%',
            border: '2.5px dashed rgba(22, 163, 74, 0.35)',
            animation: 'spin 14s linear infinite',
          }} />
          {/* Second ring */}
          <div style={{
            position: 'absolute', inset: '-34px', borderRadius: '50%',
            border: '1.5px solid rgba(34, 197, 94, 0.2)',
            animation: 'spinReverse 18s linear infinite',
          }} />
          {/* Glow halo */}
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(22,163,74,0.22) 0%, transparent 70%)',
            filter: 'blur(12px)',
            animation: 'pulseCore 2.5s ease-in-out infinite alternate',
          }} />
          {/* Circle turtle image */}
          <div style={{
            width: '140px', height: '140px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid rgba(22, 163, 74, 0.4)',
            boxShadow: '0 0 30px rgba(22, 163, 74, 0.35), 0 0 0 6px rgba(22,163,74,0.08)',
            background: '#fff',
            animation: 'pulseCore 2.5s ease-in-out infinite alternate',
          }}>
            <img
              src="/turtle_idle.png"
              alt="Rachata turtle logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ── Phase 1: Loading ── */}
        {bootStage === 0 && (
          <div style={{ width: '100%', maxWidth: '560px', textAlign: 'center', animation: 'fadeIn 0.3s ease-out' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '0.85rem', color: '#3d6b4f',
              marginBottom: '0.6rem', fontWeight: 600, fontFamily: 'monospace',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} color="#16a34a" />
                Loading Model Weights into GPU VRAM...
              </span>
              <span style={{ color: '#16a34a' }}>{loadProgress}%</span>
            </div>
            <div style={{
              width: '100%', height: '10px', borderRadius: '9999px',
              background: 'rgba(22, 163, 74, 0.08)', padding: '2px',
              border: '1px solid rgba(22, 163, 74, 0.15)', overflow: 'hidden',
            }}>
              <div style={{
                width: `${loadProgress}%`, height: '100%', borderRadius: '9999px',
                background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 60%, #10b981 100%)',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
                transition: 'width 0.05s linear',
              }} />
            </div>
            <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#7aab8c', fontFamily: 'monospace' }}>
              Allocating 5.4GB GPU Memory • 33 CUDA Layers • Tensor Cores Ready
            </div>
          </div>
        )}

        {/* ── Phase 2: Warmup ── */}
        {bootStage === 1 && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            color: '#16a34a', fontSize: '0.9rem', fontWeight: 600,
            fontFamily: 'monospace', animation: 'fadeIn 0.3s ease-out',
          }}>
            <div style={{
              width: '16px', height: '16px',
              border: '2px solid #16a34a', borderTopColor: 'transparent',
              borderRadius: '50%', animation: 'spin 0.7s linear infinite',
            }} />
            Initializing Local LLM Attention Heads &amp; KV Cache...
          </div>
        )}

        {/* ── Phase 3 & 4: Token stream ── */}
        {(bootStage === 2 || bootStage === 3) && (
          <div style={{
            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
            animation: 'fadeInScale 0.5s ease-out forwards',
          }}>
            {/* Live prompt badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: '9999px',
              background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.35)',
              color: '#16a34a', fontSize: '0.8rem', fontWeight: 700,
              marginBottom: '1rem', boxShadow: '0 0 20px rgba(22, 163, 74, 0.2)',
            }}>
              <CheckCircle2 size={16} />
              <span>ON-DEVICE MODEL RESPONSE</span>
            </div>

            {/* Welcome text stream */}
            <div style={{
              background: 'rgba(240, 250, 244, 0.95)',
              border: '1.5px solid rgba(22, 163, 74, 0.2)',
              borderRadius: '16px', padding: '1.5rem 2.5rem',
              textAlign: 'center', marginBottom: '1.75rem',
              boxShadow: '0 10px 30px rgba(22, 163, 74, 0.08), inset 0 0 20px rgba(22,163,74,0.04)',
              maxWidth: '680px', width: '100%',
            }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 900, margin: 0,
                background: 'linear-gradient(135deg, #0d1f12 0%, #16a34a 50%, #22c55e 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 0 15px rgba(22, 163, 74, 0.25))',
              }}>
                {streamedText}
                {bootStage === 2 && (
                  <span style={{
                    display: 'inline-block', width: '10px', height: '0.9em',
                    background: '#22c55e', marginLeft: '4px', verticalAlign: 'baseline',
                    boxShadow: '0 0 12px #22c55e',
                  }} className="animate-pulse" />
                )}
              </h1>
            </div>

            {/* Launching indicator */}
            {bootStage === 3 && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: '#16a34a', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600,
                animation: 'fadeIn 0.3s ease-out',
              }}>
                <div style={{
                  width: '12px', height: '12px',
                  border: '2px solid #16a34a', borderTopColor: 'transparent',
                  borderRadius: '50%', animation: 'spin 0.6s linear infinite',
                }} />
                <span>Launching TurterAI Portfolio...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Keyboard hint ── */}
      <div
        className="hidden md:flex"
        style={{
          marginTop: '1.5rem', color: 'rgba(22, 163, 74, 0.55)',
          fontSize: '0.825rem', alignItems: 'center', gap: '0.5rem', zIndex: 10,
        }}
      >
        <Sparkles size={14} color="#16a34a" />
        <span>Press <kbd style={{ background: 'rgba(22,163,74,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#16a34a' }}>ENTER</kbd> or <kbd style={{ background: 'rgba(22,163,74,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#16a34a' }}>ESC</kbd> to skip intro</span>
      </div>

      {/* ── Flying turtle overlay (animates from center → hero position on exit) ── */}
      {turtleBig && (
        <div
          style={{
            position: 'fixed',
            zIndex: 999999,
            /*
              Start: centered in viewport, big (220px)
              End:   top of hero section (approx 8rem + 60px margin from top = ~188px from top,
                     horizontally centered). We animate via CSS keyframe.
            */
            top: flyTurtle ? 'calc(8rem + 56px)' : '50%',
            left: '50%',
            transform: flyTurtle
              ? 'translate(-50%, 0) scale(1)'
              : 'translate(-50%, -50%) scale(1.6)',
            transition: flyTurtle
              ? 'top 0.65s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.65s cubic-bezier(0.34, 1.2, 0.64, 1)'
              : 'transform 0.25s ease-out',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid rgba(22, 163, 74, 0.4)',
            boxShadow: flyTurtle
              ? '0 0 30px rgba(22, 163, 74, 0.3), 0 0 0 6px rgba(22,163,74,0.07)'
              : '0 0 60px rgba(22, 163, 74, 0.5), 0 0 0 10px rgba(22,163,74,0.1)',
            background: '#fff',
            pointerEvents: 'none',
          }}
        >
          <img
            src="/turtle_idle.png"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes pulseCore {
          from { transform: scale(0.96); opacity: 0.85; }
          to   { transform: scale(1.05); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
