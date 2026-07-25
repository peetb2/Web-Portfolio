export const personalInfo = {
  name: "Rachata Pimsupsiri",
  brandName: "RachataAI",
  title: "Local AI Specialist & Full-Stack Architect",
  location: "Open to Remote & Global Collaborations",
  status: "Local AI & LLM Engineering Specialist",
  bio: "Passionate software engineer and Local AI specialist dedicated to building privacy-first on-device LLM architectures, fine-tuning quantized models (Ollama, GGUF, vLLM), and creating high-performance web applications powered by React 19 and modern AI pipelines.",
  avatar: "/hero_avatar.jpg",
  email: "rachata.pimsupsiri.dev@gmail.com",
  phone: "+1 (555) 019-2834",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    devto: "https://dev.to"
  },
  stats: [
    { label: "Local AI Models Deployed", value: "15+" },
    { label: "Years Experience", value: "4+" },
    { label: "Code Commits", value: "1.4k+" },
    { label: "Inference Latency", value: "<15ms" }
  ]
};

export const skillsData = {
  localAI: [
    { name: "Local LLMs (Ollama / vLLM / llama.cpp)", level: 95, icon: "Bot" },
    { name: "Model Quantization (GGUF / AWQ / EXL2)", level: 90, icon: "Cpu" },
    { name: "RAG & Vector DBs (Chroma / Pinecone / Qdrant)", level: 92, icon: "Database" },
    { name: "PyTorch / Transformers / HuggingFace", level: 88, icon: "Zap" },
    { name: "LangChain / LlamaIndex / Agentic Workflows", level: 90, icon: "Sparkles" }
  ],
  frontend: [
    { name: "React 19 / Next.js", level: 95, icon: "Code2" },
    { name: "JavaScript (ES6+) / TypeScript", level: 92, icon: "FileCode" },
    { name: "Tailwind CSS / Glassmorphism UI", level: 90, icon: "Palette" },
    { name: "Redux Toolkit / Zustand", level: 88, icon: "Layers" }
  ],
  backend: [
    { name: "Node.js / Express / Fastify", level: 90, icon: "Server" },
    { name: "Python / FastAPI / AsyncIO", level: 92, icon: "Terminal" },
    { name: "PostgreSQL / MongoDB / Redis", level: 85, icon: "Database" },
    { name: "Docker & GPU Acceleration (CUDA)", level: 85, icon: "Box" }
  ]
};

export const projectsData = [
  {
    id: "project-1",
    title: "NovaDash – Analytics & Finance Platform",
    category: "Full Stack",
    description: "Real-time interactive financial analytics dashboard featuring live currency exchange streams, customizable widgets, dark theme UI, and multi-tenant data visualization.",
    longDescription: "NovaDash is built with React 19, TypeScript, and Tailwind CSS on the frontend, powered by a Node.js Express websocket backend. It enables financial analysts to visualize real-time market metrics with sub-second latency.",
    studentRole: "Lead Frontend Developer & UI Architect (Designed grid layout, websocket hooks, & Chart.js integration)",
    image: "/project_1.jpg",
    figmaUrl: "https://figma.com",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Chart.js", "Figma"],
    liveUrl: "https://example.com/novadash",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Sub-second websocket live data streaming",
      "Customizable glassmorphism grid layout",
      "Export reports to PDF & CSV",
      "Role-based permission access"
    ]
  },
  {
    id: "project-2",
    title: "AuraAI – Intelligent Workspace & Copilot",
    category: "AI / Web Apps",
    description: "AI-assisted writing and code generation desktop-web app integrated with LLM APIs, syntax highlighting, and interactive agent history.",
    longDescription: "AuraAI streamlines developer productivity by providing an inline code explanation engine, prompt history manager, and markdown artifact exporter built with Vite + React and Node.js.",
    studentRole: "Full Stack Developer (Engineered local AI prompt pipelines, Zustand state store & responsive UI)",
    image: "/project_2.jpg",
    figmaUrl: "https://figma.com",
    tags: ["React", "AI APIs", "Vite", "Zustand", "Lucide Icons"],
    liveUrl: "https://example.com/auraai",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Streamed markdown & code execution",
      "Keyboard shortcut workflow",
      "Local storage session persistence",
      "Custom dark UI theme generator"
    ]
  },
  {
    id: "project-3",
    title: "EcoStore – Responsive E-Commerce UI",
    category: "Frontend",
    description: "Modern headless e-commerce store front with interactive product filter drawer, instant cart state management, checkout simulation, and micro-animations.",
    longDescription: "Designed for high conversion rates, EcoStore delivers dynamic page transitions, responsive image optimization, and accessible shopping cart management.",
    studentRole: "Frontend Developer (Crafted UI components, cart context manager & Stripe checkout modal)",
    image: "/project_1.jpg",
    figmaUrl: "https://figma.com",
    tags: ["React", "CSS Modules", "Context API", "Stripe API"],
    liveUrl: "https://example.com/ecostore",
    githubUrl: "https://github.com",
    featured: false,
    highlights: [
      "Instant fuzzy search filtering",
      "Stripe payment UI modal integration",
      "Dynamic stock availability counters",
      "Lighthouse 98+ Performance score"
    ]
  }
];

export const educationData = [
  {
    school: "Bangkok University",
    degree: "Computer Science & Software Development",
    period: "2023 - Present",
    status: "Current Student"
  },
  {
    school: "Triamudom Suksa Pattanakarn Suvarnabhumi School",
    degree: "High School Diploma",
    period: "2016 - 2022",
    status: "Graduated"
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Local AI & LLM Architecture Specialist",
    issuer: "Open Source AI Community",
    date: "2024",
    credentialId: "AI-LOCAL-2024-99",
    description: "On-device model quantization (GGUF), vLLM inference optimization, and RAG pipelines."
  },
  {
    id: "cert-2",
    title: "Full-Stack React & Web Architecture",
    issuer: "Tech Academy Workshop",
    date: "2023",
    credentialId: "REACT-FS-2023-402",
    description: "Modern React 19 state management, component architecture, and responsive web design."
  },
  {
    id: "cert-3",
    title: "Python & Machine Learning Foundations",
    issuer: "DeepLearning.AI / Coursera",
    date: "2023",
    credentialId: "DL-PY-88321",
    description: "Supervised learning, neural networks, PyTorch fundamentals, and data analytics."
  }
];

export const testimonialsData = [
  {
    quote: "Rachata delivered our company dashboard ahead of schedule with flawless code quality and an exquisite user interface. Highly recommended!",
    name: "Sarah Jenkins",
    role: "Product VP at TechVentures",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Working with Rachata was a breeze. Exceptional problem solving skills, great communicator, and mastery over React and modern web tech.",
    name: "David Chen",
    role: "CTO at CloudScale Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

