import React, { useState } from 'react';
import {
  MapPin, Mail, Phone, ExternalLink, Link, MessageCircle,
  Cpu, Globe, Bot, Sparkles, ArrowRight, GraduationCap
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const [lang, setLang] = useState('EN');

  const highlights = [
    { icon: Bot,     label: 'Local AI & LLMs',      desc: 'On-device model deployment, fine-tuning & RAG pipelines' },
    { icon: Globe,   label: 'Full-Stack Web',        desc: 'React 19, Next.js, Node.js, FastAPI & modern UI craft' },
    { icon: Cpu,     label: 'GPU Acceleration',      desc: 'CUDA 12, PyTorch, GGUF quantization, vLLM inference' },
    { icon: Sparkles,label: 'AI Product Builder',    desc: 'End-to-end AI apps from architecture to polished UX' },
  ];

  const bioTexts = {
    EN: {
      p1: "Hi, I'm currently focusing my path as an AI Engineer and Full-Stack Developer. I'm incredibly passionate about bridging the gap between local AI infrastructure and modern web applications.",
      p2: "My work spans the entire stack—from containerizing local LLMs via Docker with GPU acceleration and engineering serverless AWS backends (Lambda, S3, API Gateway), right through to developing the frontends that tie it all together.",
      p3: "My projects range from a license key management system for an AI Hub to an AI Resume Screener. I love building practical, scalable tools end-to-end. Feel free to chat with the AI assistant on this page to learn more about my work!"
    },
    TH: {
      p1: "สวัสดีครับ ผมกำลังเน้นพัฒนาตัวเองในสาย AI Engineer และ Full-Stack Developer โดยส่วนตัวผมอินกับการผสาน Local AI Infrastructure เข้ากับ Web Application สมัยใหม่ครับ",
      p2: "งานของผมครอบคลุมตั้งแต่การจับ Local LLMs มาลง Docker รันบน GPU, การขึ้นระบบ Backend บน AWS (พวก Lambda, S3, API Gateway) ไปจนถึงการเขียน Frontend มารองรับการใช้งาน",
      p3: "โปรเจกต์ที่ผมทำมีตั้งแต่ระบบจัดการ License Key สำหรับ AI Hub ไปจนถึง AI Resume Screener ผมชอบสร้างเครื่องมือที่ใช้งานได้จริงแบบครบวงจรตั้งแต่หน้าบ้านยันหลังบ้าน ลองคุยกับ AI Assistant บนเว็บนี้เพื่อถามเกี่ยวกับโปรเจกต์ต่าง ๆ ของผมได้เลยครับ"
    }
  };

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
            The Person Behind the <span className="gradient-text">Code</span>
          </h2>
          <p>
            Local AI Engineer &amp; Full-Stack Architect — building intelligent,
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
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {personalInfo.name}
              </h3>
              {personalInfo.nameThai && (
                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                  ({personalInfo.nameThai})
                </div>
              )}
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', fontWeight: 600, margin: 0 }}>
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

            {/* Education Card */}
            <div className="glass-card" style={{ padding: '1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <GraduationCap size={18} color="#16a34a" />
                <span>Education / การศึกษา</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {educationData && educationData.map((edu, idx) => (
                  <div key={idx} style={{ paddingLeft: '0.75rem', borderLeft: '2px solid rgba(22, 163, 74, 0.3)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>{edu.school}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 600, marginTop: '2px' }}>{edu.period} • {edu.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spoken Languages Card */}
            <div className="glass-card" style={{ padding: '1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <Globe size={18} color="#16a34a" />
                <span>Spoken Languages / ภาษา</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {personalInfo.languages && personalInfo.languages.map((langItem, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(22, 163, 74, 0.3)' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>{langItem.name}</span>
                    <span style={{ fontSize: '0.78rem', color: '#16a34a', fontWeight: 700, background: 'rgba(22,163,74,0.08)', padding: '2px 9px', borderRadius: '999px', border: '1px solid rgba(22,163,74,0.2)' }}>{langItem.proficiency}</span>
                  </div>
                ))}
              </div>
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
              {/* Header row with AI Badge & Language Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.25)',
                  color: '#16a34a', fontSize: '0.78rem', fontWeight: 700,
                  padding: '3px 10px', borderRadius: '9999px',
                  letterSpacing: '0.04em',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} className="animate-pulse-glow" />
                  &nbsp;AI-NATIVE ENGINEER
                </div>

                {/* EN / TH Language Switcher Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--bg-primary)', padding: '3px 4px', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => setLang('EN')}
                    style={{
                      padding: '3px 11px',
                      borderRadius: '999px',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      background: lang === 'EN' ? '#16a34a' : 'transparent',
                      color: lang === 'EN' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      boxShadow: lang === 'EN' ? '0 2px 8px rgba(22, 163, 74, 0.25)' : 'none',
                    }}
                  >
                    🇬🇧 EN
                  </button>
                  <button
                    onClick={() => setLang('TH')}
                    style={{
                      padding: '3px 11px',
                      borderRadius: '999px',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      background: lang === 'TH' ? '#16a34a' : 'transparent',
                      color: lang === 'TH' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      boxShadow: lang === 'TH' ? '0 2px 8px rgba(22, 163, 74, 0.25)' : 'none',
                    }}
                  >
                    🇹🇭 TH
                  </button>
                </div>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                Engineering Local AI Infrastructure &amp; Serverless Systems
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem' }}>
                {bioTexts[lang].p1}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem', marginTop: '1rem' }}>
                {bioTexts[lang].p2}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem', marginTop: '1rem' }}>
                {bioTexts[lang].p3}
              </p>
            </div>

            {/* Highlight cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-responsive">
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
          </div>
        </div>
      </div>
    </section>
  );
}
