import React from 'react';
import {
  MapPin, Mail, Phone, ExternalLink, Link, MessageCircle,
  Cpu, Globe, Bot, Sparkles, ArrowRight, Star
} from 'lucide-react';
import { personalInfo, testimonialsData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    { icon: Bot,     label: 'Local AI & LLMs',      desc: 'On-device model deployment, fine-tuning & RAG pipelines' },
    { icon: Globe,   label: 'Full-Stack Web',        desc: 'React 19, Next.js, Node.js, FastAPI & modern UI craft' },
    { icon: Cpu,     label: 'GPU Acceleration',      desc: 'CUDA 12, PyTorch, GGUF quantization, vLLM inference' },
    { icon: Sparkles,label: 'AI Product Builder',    desc: 'End-to-end AI apps from architecture to polished UX' },
  ];

  const socials = [
    { icon: ExternalLink, href: personalInfo.socials.github,   label: 'GitHub'   },
    { icon: Link,         href: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle,href: personalInfo.socials.twitter,  label: 'Twitter'  },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{ position: 'relative', background: 'var(--bg-secondary)' }}
    >
      {/* Subtle background orbs */}
      <div className="bg-glow-orb-1" />
      <div className="bg-glow-orb-2" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ── Section header ── */}
        <div className="section-title">
          <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            About Me
          </span>
          <h2>
            The Person Behind the{' '}
            <span className="gradient-text">Code</span>
          </h2>
          <p>
            Local AI Specialist &amp; Full-Stack Architect — building intelligent,
            privacy-first applications that ship fast and scale further.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* ── Left: avatar + contact ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>

            {/* Circle avatar */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '200px', height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(22,163,74,0.35)',
                boxShadow: '0 0 0 8px rgba(22,163,74,0.07), 0 20px 60px rgba(22,163,74,0.2)',
                background: '#fff',
              }}>
                <img
                  src="/turtle_idle.png"
                  alt={personalInfo.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Online dot */}
              <span style={{
                position: 'absolute', bottom: '12px', right: '12px',
                width: '18px', height: '18px', borderRadius: '50%',
                background: '#22c55e',
                border: '3px solid #fff',
                boxShadow: '0 0 10px #22c55e',
              }} className="animate-pulse-glow" />
            </div>

            {/* Name + title */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                {personalInfo.name}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                {personalInfo.title}
              </p>
            </div>

            {/* Contact info */}
            <div className="glass-card" style={{ padding: '1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: Mail,   value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                { icon: Phone,  value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                { icon: MapPin, value: personalInfo.location, href: null },
              ].map(({ icon: Icon, value, href }) => (
                <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                    background: 'rgba(22,163,74,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-primary)',
                  }}>
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a href={href} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none', wordBreak: 'break-all' }}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(22,163,74,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(22,163,74,0.4)';
                    e.currentTarget.style.color = '#16a34a';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Sparkles size={16} />
              Let's Work Together
              <ArrowRight size={16} />
            </a>
          </div>

          {/* ── Right: bio + highlights + stats ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Bio card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.25)',
                color: '#16a34a', fontSize: '0.78rem', fontWeight: 700,
                padding: '3px 10px', borderRadius: '9999px', marginBottom: '1rem',
                letterSpacing: '0.04em',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} className="animate-pulse-glow" />
                &nbsp;AI-NATIVE ENGINEER
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                Building the Future, One Model at a Time
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem' }}>
                {personalInfo.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem', marginTop: '1rem' }}>
                My passion is bridging the gap between cutting-edge AI research and production-ready
                web products — from RAG pipelines with sub-50ms retrieval to polished React UIs that
                feel instant. Ask my AI assistant on this page anything about my work!
              </p>
            </div>

            {/* Highlight cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(22,163,74,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-primary)',
                  }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
              }}
            >
              {personalInfo.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass-card"
                  style={{ padding: '1.1rem', textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: '2rem', fontWeight: 900,
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1, marginBottom: '0.3rem',
                  }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1.3 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            {testimonialsData && testimonialsData.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  What People Say
                </h4>
                {testimonialsData.map((t, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.65rem' }}>
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={14} fill="#22c55e" color="#22c55e" />
                      ))}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '0.85rem' }}>
                      "{t.quote}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <img
                        src={t.avatar}
                        alt={t.name}
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(22,163,74,0.3)' }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
