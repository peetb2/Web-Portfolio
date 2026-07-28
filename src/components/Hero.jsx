import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, Briefcase, UserCheck, Zap, Mail, FolderGit2 } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData, certificationsData } from '../data/portfolioData';
import AuroraBackground from './reactbits/AuroraBackground';

export default function Hero() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: `Hi there! I'm TurterAI, Peet's personal AI assistant! Ask me anything about Rachata's education, skills, projects, certifications, or background!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const chatScrollRef = useRef(null);  // ref on the scrollable chat container
  const chatBottomRef = useRef(null);   // sentinel at the bottom of messages

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

  // Scroll only the CHAT BOX — never the page
  useEffect(() => {
    const el = chatScrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading]);

  // Quick Action Pills Definition
  const quickPills = [
    { label: 'About me', query: 'Who is Rachata Pimsupsiri? Give me a quick summary.', icon: UserCheck },
    { label: 'Education', query: 'What is Rachata\'s educational background?', icon: Briefcase },
    { label: 'Skills', query: 'What technical skills and local AI frameworks does Rachata specialize in?', icon: Zap },
    { label: 'Projects', query: 'What featured projects has Rachata built?', icon: FolderGit2 },
    { label: 'Contact', query: 'How can I get in touch with Rachata Pimsupsiri?', icon: Mail }
  ];

  // Formulate portfolio context for Gemini API prompt
  const getSystemContext = () => {
    const skillsList = [
      ...(skillsData.localAI || []).map(s => s.name),
      ...(skillsData.frontend || []).map(s => s.name),
      ...(skillsData.backend || []).map(s => s.name)
    ].join(', ');

    const projectsList = projectsData.map(p => `${p.title} (${p.category}): ${p.description}`).join('\n- ');
    const educationList = educationData.map(e => `${e.school} (${e.period}) - ${e.degree}`).join('\n- ');
    const certsList = certificationsData.map(c => `${c.title} by ${c.issuer} (${c.date})`).join('\n- ');

    return `You are the official AI portfolio assistant for ${personalInfo.name} (${personalInfo.nameThai}) - ${personalInfo.title}.
You are TurterAI — Peet's personal AI assistant, speaking politely, concisely, enthusiastically, and accurately on behalf of Rachata Pimsupsiri (${personalInfo.nameThai}).

Portfolio Details:
- Name (English): ${personalInfo.name}
- Name (Thai): ${personalInfo.nameThai}
- Title: ${personalInfo.title}
- Location: ${personalInfo.location}
- Bio: ${personalInfo.bio}
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- Key Skills: ${skillsList}
- Education:
- ${educationList}
- Certifications:
- ${certsList}
- Featured Projects:
- ${projectsList}

Instructions:
- CRITICAL THAI NAME RULE: Rachata's Thai name is strictly "รชฏะ พิมพ์ทรัพย์ศิริ". You MUST ALWAYS use the exact spelling "รชฏะ พิมพ์ทรัพย์ศิริ" whenever writing or responding with his name in Thai.
- Keep answers concise, clear, and helpful (2-4 sentences unless bullet points are requested).
- If asked about projects, highlight AI Hub (self-hosted local LLM platform) and AI Resume Screener (AWS Lambda serverless parser).
- If asked about skills, highlight Local LLMs (Ollama, vLLM), Docker Desktop, AWS Serverless (Lambda, S3, API Gateway), React 19, and Full-Stack development.
- Always maintain high contrast clarity and friendly tone.`;
  };

  // Call Gemini API with model fallback
  const fetchGeminiResponse = async (userPrompt, chatHistory) => {
    const candidateModels = [
      'gemini-3.6-flash',
      'gemini-3.5-flash',
      'gemini-2.0-flash',
      'gemini-flash-latest',
      'gemini-3.1-flash-lite'
    ];

    const systemContext = getSystemContext();

    // Format chat history for context
    const conversationPayload = [
      {
        role: 'user',
        parts: [{ text: `${systemContext}\n\nUser Question: ${userPrompt}` }]
      }
    ];

    for (const model of candidateModels) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: conversationPayload })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return text.trim();
          }
        }
      } catch (err) {
        console.warn(`Model ${model} failed, trying fallback...`, err);
      }
    }

    // Smart Local Fallback Answer if API calls encounter rate limit or network issue
    const lowerPrompt = userPrompt.toLowerCase();
    if (lowerPrompt.includes('education') || lowerPrompt.includes('school') || lowerPrompt.includes('university')) {
      return `${personalInfo.name} is currently studying Information Technology at Bangkok University (2023 - Present) and graduated from Triamudom Suksa Pattanakarn Suvarnabhumi School (2016 - 2022).`;
    } else if (lowerPrompt.includes('about') || lowerPrompt.includes('who')) {
      return `${personalInfo.name} is a Local AI Specialist & Full-Stack Architect based in ${personalInfo.location}. ${personalInfo.bio}`;
    } else if (lowerPrompt.includes('skill') || lowerPrompt.includes('tech')) {
      return `${personalInfo.name} specializes in Local LLMs (Ollama, vLLM), Docker Desktop, AWS Serverless (Lambda, S3, API Gateway), TypeScript, Next.js, Tailwind CSS, React 19, Node.js, and Supabase.`;
    } else if (lowerPrompt.includes('project')) {
      return `Rachata's featured projects are AI Hub (self-hosted local LLM platform with Docker Desktop, Ollama, vLLM, and multi-PC key sharing) and AI Resume Screener (cloud-native AWS Lambda, S3, and API Gateway resume parser).`;
    } else if (lowerPrompt.includes('contact') || lowerPrompt.includes('email') || lowerPrompt.includes('reach')) {
      return `You can reach Rachata Pimsupsiri via email at ${personalInfo.email} or by phone at ${personalInfo.phone}.`;
    }

    return `Rachata Pimsupsiri is a ${personalInfo.title} passionate about building high-performance web applications and privacy-first local AI pipelines. Feel free to explore his portfolio below or ask specifically about his skills, projects, or contact details!`;
  };

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || input.trim();
    if (!query || isLoading) return;

    const userMessage = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);
    setIsSpeaking(true);

    try {
      const aiReplyText = await fetchGeminiResponse(query, messages);
      const aiMessage = { id: Date.now() + 1, sender: 'assistant', text: aiReplyText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          text: `Rachata Pimsupsiri is a Local AI Specialist & Full-Stack Architect. You can reach him at ${personalInfo.email} or check out his technical skills and projects below!`
        }
      ]);
    } finally {
      setIsLoading(false);
      setIsSpeaking(false);
    }
  };

  const handlePillClick = (pillQuery) => {
    handleSendMessage(pillQuery);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'assistant',
        text: `Hi there! I'm TurterAI, Peet's personal AI assistant! Ask me anything about Rachata's work, experience in Local AI & React, technical skills, projects, or background!`
      }
    ]);
  };

  return (
    <AuroraBackground>
      <section
        id="hero"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '640px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '4.25rem',
          paddingBottom: '1rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%' }}>
          
          {/* ── Top Middle: Dynamic Turtle Avatar & Greeting ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            
            {/* Dynamic Turtle Avatar — circle, shake when speaking */}
            <div
              style={{
                position: 'relative',
                width: '120px',
                height: '120px',
                flexShrink: 0,
              }}
            >
              {/* Outer glow ring */}
              <div style={{
                position: 'absolute',
                inset: '-5px',
                borderRadius: '50%',
                background: isSpeaking
                  ? 'conic-gradient(from 0deg, #22c55e, #16a34a, #10b981, #22c55e)'
                  : 'conic-gradient(from 0deg, rgba(22,163,74,0.5), rgba(34,197,94,0.2), rgba(22,163,74,0.5))',
                animation: isSpeaking ? 'spin 1.5s linear infinite' : 'spin 8s linear infinite',
                padding: '3px',
              }} />
              {/* Circle clip container */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(22, 163, 74, 0.35)',
                  boxShadow: isSpeaking
                    ? '0 0 0 4px rgba(22,163,74,0.15), 0 0 28px rgba(22,163,74,0.4)'
                    : '0 0 0 4px rgba(22,163,74,0.08), 0 8px 32px rgba(22,163,74,0.18)',
                  background: '#fff',
                  animation: isSpeaking ? 'turtleShake 0.38s ease-in-out infinite' : 'none',
                }}
              >
                <img
                  src="/turtle_idle.png"
                  alt="Turtle avatar idle"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: isSpeaking ? 0 : 1,
                    transition: 'opacity 0.05s step-end',
                    pointerEvents: 'none',
                  }}
                />
                <img
                  src="/turtle_speaking.png"
                  alt="Turtle avatar speaking"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: isSpeaking ? 1 : 0,
                    transition: 'opacity 0.05s step-start',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>

            {/* Name label */}
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}>
                Hi, I'm <span className="gradient-text">Rachata Pimsupsiri</span>
              </h1>
            </div>

          </div>

          {/* ── Middle: Centered Chat Assistant Container ── */}
          <div style={{ width: '100%', maxWidth: '860px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0.3rem 0', minHeight: 0 }}>
            <style>{`
              @media (max-width: 640px) {
                .hero-chat-box { max-height: 460px !important; border-radius: 16px !important; }
                .hero-chat-messages { padding: 1rem !important; min-height: 180px !important; }
              }
            `}</style>
            <div
              className="hero-chat-box"
              style={{
                width: '100%',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(22,163,74,0.15)',
                boxShadow: '0 20px 50px -12px rgba(22,163,74,0.12), 0 8px 20px -4px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                color: '#0f172a',
                transition: 'all 0.3s ease',
                maxHeight: 'calc(100vh - 290px)',
              }}
            >
            {/* Chat Box Top Header Bar — Compact Sleek Header */}
            <div
              style={{
                padding: '0.55rem 1.15rem',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                {/* Assistant Mini Avatar */}
                <div
                  style={{
                    position: 'relative',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid rgba(22, 163, 74, 0.4)',
                    boxShadow: '0 2px 8px rgba(22, 163, 74, 0.18)',
                    flexShrink: 0,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/turtle_idle.png"
                    alt=""
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: isSpeaking ? 0 : 1,
                      transition: 'opacity 0.05s step-end',
                    }}
                  />
                  <img
                    src="/turtle_speaking.png"
                    alt=""
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: isSpeaking ? 1 : 0,
                      transition: 'opacity 0.05s step-start',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '1px',
                      right: '1px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: isSpeaking ? '#f59e0b' : '#10b981',
                      border: '1.5px solid #ffffff',
                      zIndex: 2,
                    }}
                  />
                </div>
                {/* Sleek inline title & status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: 700, color: '#0d1f12' }}>TurterAI</span>
                  <span style={{ color: '#cbd5e1' }}>•</span>
                  <span style={{ color: '#16a34a', fontWeight: 600, fontSize: '0.76rem' }}>Peet's AI Assistant</span>
                </div>
              </div>

              {/* Compact Reset Chat Action */}
              <button
                onClick={handleResetChat}
                title="Reset Conversation"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  background: 'transparent',
                  border: '1px solid #cbd5e1',
                  color: '#64748b',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.color = '#0f172a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#64748b';
                }}
              >
                <RefreshCw size={12} />
                <span>Reset</span>
              </button>
            </div>

            {/* Chat Messages Display Area */}
            <div
              ref={chatScrollRef}
              className="hero-chat-messages"
              style={{
                flex: 1,
                minHeight: '220px',
                maxHeight: 'calc(100vh - 410px)',
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                background: '#ffffff',
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      maxWidth: '85%',
                      flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Sender Avatar */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: msg.sender === 'user' ? '#16a34a' : '#ffffff',
                        color: msg.sender === 'user' ? '#ffffff' : '#16a34a',
                        border: msg.sender === 'user' ? 'none' : '2px solid rgba(22, 163, 74, 0.35)',
                        boxShadow: '0 2px 6px rgba(22, 163, 74, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        overflow: 'hidden',
                      }}
                    >
                      {msg.sender === 'user' ? (
                        <User size={16} />
                      ) : (
                        <img
                          src="/turtle_idle.png"
                          alt="TurterAI"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      style={{
                        background: msg.sender === 'user' ? '#16a34a' : '#f0faf4',
                        color: msg.sender === 'user' ? '#ffffff' : '#0d1f12',
                        padding: '0.85rem 1.15rem',
                        borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        border: msg.sender === 'user' ? '1px solid #15803d' : '1px solid rgba(22, 163, 74, 0.18)',
                        boxShadow: '0 2px 8px rgba(22, 163, 74, 0.06)',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator when waiting for response */}
              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(22, 163, 74, 0.12)',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Bot size={18} />
                  </div>
                  <div
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #e2e8f0',
                      borderRadius: '18px 18px 18px 4px',
                      padding: '0.85rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        animation: 'bounceDots 1.4s infinite ease-in-out 0s',
                      }}
                    />
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        animation: 'bounceDots 1.4s infinite ease-in-out 0.2s',
                      }}
                    />
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        animation: 'bounceDots 1.4s infinite ease-in-out 0.4s',
                      }}
                    />
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Quick Action Pill Buttons Row - PLACED JUST ABOVE TEXT INPUT FIELD */}
            <div
              style={{
                padding: '0.75rem 1.25rem 0.4rem 1.25rem',
                background: '#ffffff',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                overflowX: 'auto',
                scrollbarWidth: 'none',
              }}
            >
              {quickPills.map((pill, idx) => {
                const IconComp = pill.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handlePillClick(pill.query)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.95rem',
                      borderRadius: '9999px',
                      background: '#f0faf4',
                      border: '1px solid rgba(22, 163, 74, 0.25)',
                      color: '#3d6b4f',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 1px 3px rgba(22, 163, 74, 0.06)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#16a34a';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#16a34a';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f0faf4';
                      e.currentTarget.style.color = '#3d6b4f';
                      e.currentTarget.style.borderColor = 'rgba(22, 163, 74, 0.25)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <IconComp size={14} />
                    <span>{pill.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Text Input Field at Bottom */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              style={{
                padding: '0.85rem 1.25rem 1.25rem 1.25rem',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '14px',
                  padding: '0.85rem 1.15rem',
                  fontSize: '0.95rem',
                  color: '#0f172a',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  fontWeight: 500,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#16a34a';
                  e.target.style.background = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(22, 163, 74, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(22, 163, 74, 0.25)';
                  e.target.style.background = '#f8fafc';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: !input.trim() || isLoading ? '#e5f3ec' : 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                  color: !input.trim() || isLoading ? '#7aab8c' : '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: !input.trim() || isLoading ? 'none' : '0 4px 14px rgba(22, 163, 74, 0.4)',
                }}
              >
                <Send size={18} />
              </button>
            </form>
            </div>{/* end chat box */}

            {/* Quick links to scroll down */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                marginTop: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                flexWrap: 'wrap',
                flexShrink: 0,
              }}
            >
              <span>Explore:</span>
              <a href="#about" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>About</a>
              <span>•</span>
              <a href="#skills" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>Skills</a>
              <span>•</span>
              <a href="#projects" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>Projects</a>
              <span>•</span>
              <a href="#certifications" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>Certifications</a>
              <span>•</span>
              <a href="#contact" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
            </div>
          </div>{/* end middle column */}
        </div>{/* end container */}

        <style>{`
          @keyframes bounceDots {
            0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
            40% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes turtleShake {
            0%   { transform: rotate(0deg)   translateX(0px);   }
            15%  { transform: rotate(-4deg)  translateX(-3px);  }
            30%  { transform: rotate(4deg)   translateX(3px);   }
            45%  { transform: rotate(-3deg)  translateX(-2px);  }
            60%  { transform: rotate(3deg)   translateX(2px);   }
            75%  { transform: rotate(-2deg)  translateX(-1px);  }
            90%  { transform: rotate(1deg)   translateX(1px);   }
            100% { transform: rotate(0deg)   translateX(0px);   }
          }
        `}</style>
      </section>
    </AuroraBackground>
  );
}
