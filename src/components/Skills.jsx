import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Layers,
  Cpu,
  Server,
  Globe,
  Database,
  Zap,
  Terminal,
  GitBranch,
  Box,
  Wrench,
  CheckCircle2,
  PenTool,
  Bot,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SpotlightCard from './reactbits/SpotlightCard';

const iconMap = {
  Code2,
  FileCode,
  Palette,
  Layers,
  Cpu,
  Server,
  Globe,
  Database,
  Zap,
  Terminal,
  GitBranch,
  Box,
  Wrench,
  CheckCircle2,
  Bot,
  Sparkles,
  Figma: PenTool
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'localAI', label: 'Local AI & LLMs' },
    { id: 'cloud', label: 'AWS & Cloud' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
  ];

  const getFilteredSkills = () => {
    const langs = skillsData.languages || [];
    const local = skillsData.localAI || [];
    const cloud = skillsData.cloud || [];
    const fe = skillsData.frontend || [];
    const be = skillsData.backend || [];

    if (activeCategory === 'languages') return langs;
    if (activeCategory === 'localAI') return local;
    if (activeCategory === 'cloud') return cloud;
    if (activeCategory === 'frontend') return fe;
    if (activeCategory === 'backend') return be;
    return [...langs, ...local, ...cloud, ...fe, ...be];
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="badge badge-purple" style={{ marginBottom: '0.75rem' }}>
            Technical Proficiency
          </span>
          <h2>Skills & Technologies</h2>
          <p>A comprehensive overview of my tech stack, frameworks, and development tools.</p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                background: activeCategory === cat.id ? 'var(--gradient-glow)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with React Bits SpotlightCard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {getFilteredSkills().map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(22, 163, 74, 0.25)"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  height: '100%',
                  minHeight: '180px',
                  background: 'var(--bg-card)',
                }}
              >
                {/* Top Row: Icon on far left, Badge on far right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '12px', background: 'transparent' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(22, 163, 74, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent size={22} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      padding: '0.25rem 0.7rem',
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                      background:
                        skill.badge === 'Production'
                          ? '#16a34a'
                          : skill.badge === 'Intermediate'
                          ? 'rgba(16, 185, 129, 0.1)'
                          : 'rgba(22, 163, 74, 0.1)',
                      color:
                        skill.badge === 'Production'
                          ? '#ffffff'
                          : skill.badge === 'Intermediate'
                          ? '#0d9488'
                          : '#16a34a',
                      border:
                        skill.badge === 'Production'
                          ? 'none'
                          : skill.badge === 'Intermediate'
                          ? '1px solid rgba(16, 185, 129, 0.3)'
                          : '1px solid rgba(22, 163, 74, 0.25)',
                    }}
                  >
                    {skill.badge}
                  </span>
                </div>

                {/* Title & Subtitle Content Block with 8px flex gap */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', background: 'transparent' }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      margin: 0,
                    }}
                  >
                    {skill.name}
                  </h3>

                  {skill.desc && (
                    <p
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {skill.desc}
                    </p>
                  )}
                </div>

                {/* Pinned Bottom Accent Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '3px',
                    borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                    marginTop: '16px',
                    opacity: 0.85,
                  }}
                />
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
