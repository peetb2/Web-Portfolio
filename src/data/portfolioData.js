export const personalInfo = {
  name: "Rachata Pimsupsiri",
  nameThai: "รชฏะ พิมพ์ทรัพย์ศิริ",
  brandName: "RachataAI",
  title: "Local AI Engineer & Full-Stack Architect",
  location: "Open to Remote & Global Collaborations",
  status: "Local AI & LLM Engineering Specialist",
  bio: "Hi, I'm currently focusing my path as an AI Engineer and Full-Stack Developer. I'm incredibly passionate about bridging the gap between local AI infrastructure and modern web applications. My work spans the entire stack—from containerizing local LLMs via Docker with GPU acceleration and engineering serverless AWS backends (Lambda, S3, API Gateway), right through to developing the frontends that tie it all together. My projects range from a license key management system for an AI Hub to an AI Resume Screener. I love building practical, scalable tools end-to-end. Feel free to chat with the AI assistant on this page to learn more about my work!",
  avatar: "/hero_avatar.jpg",
  email: "rachata.pims@bumail.net",
  phone: "0624068468",
  languages: [
    { name: "Thai", proficiency: "Native Speaker" },
    { name: "English", proficiency: "Advanced (TOEIC 840)" }
  ],
  socials: {
    github: "https://github.com/peetb2",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    devto: "https://dev.to"
  }
};

export const skillsData = {
  languages: [
    { name: "Python", desc: "AWS Lambda, Boto3, FastAPI & Regex parsing", badge: "Advanced", icon: "Terminal" },
    { name: "JavaScript & TypeScript", desc: "Type-safe React 19, ES6+, Node.js & Web APIs", badge: "Advanced", icon: "FileCode" },
    { name: "SQL", desc: "Supabase & PostgreSQL relational queries", badge: "Proficient", icon: "Database" },
    { name: "HTML5 & CSS3", desc: "Responsive layouts & custom animations", badge: "Advanced", icon: "Code2" }
  ],
  localAI: [
    { name: "Docker & Ollama", desc: "Docker Desktop containerized LLM pipelines on GPU", badge: "Production", icon: "Box" },
    { name: "vLLM & Llama 3", desc: "Local open-source model serving & token inference", badge: "Production", icon: "Bot" },
    { name: "Continue.dev", desc: "VS Code AI agent extension & custom API key endpoints", badge: "Production", icon: "Terminal" }
  ],
  cloud: [
    { name: "AWS Lambda & Gateway", desc: "Serverless Python functions & REST API endpoints", badge: "Intermediate", icon: "Zap" },
    { name: "Amazon S3 & Amplify", desc: "Cloud object bucket storage & frontend hosting", badge: "Intermediate", icon: "Globe" }
  ],
  frontend: [
    { name: "React 19 & Next.js", desc: "Client state architecture, Next.js SSR & React Router", badge: "Advanced", icon: "Code2" },
    { name: "Tailwind CSS", desc: "Utility-first modern styling & responsive design", badge: "Advanced", icon: "Palette" },
    { name: "Material-UI", desc: "MUI component styling & dropzone file handling", badge: "Proficient", icon: "Palette" }
  ],
  backend: [
    { name: "Node.js & FastAPI", desc: "Express RESTful microservices & server logic", badge: "Advanced", icon: "Server" },
    { name: "Supabase & PostgreSQL", desc: "Cloud database & user auth management", badge: "Production", icon: "Database" }
  ]
};

export const projectsData = [
  {
    id: "project-aihub",
    title: "AI Hub – Local AI Platform & Key Management",
    category: "AI SaaS",
    description: "Self-hosted AI platform powered by Docker Desktop containerized local LLMs (Ollama/vLLM) and Supabase that lets users buy time-limited, model-specific access keys. One key activates across multiple PCs — perfect for corporate teams sharing token budgets without buying individual accounts.",
    longDescription: "AI Hub is a full-stack SaaS platform built with Supabase and Docker Desktop containers (Ollama, vLLM) on my PC with GPU acceleration, monetizing access through a key-based system. Users purchase a key by choosing an AI model and subscription duration. That single key can be activated on multiple machines simultaneously, sharing a token pool — ideal for companies deploying AI to a whole team. Inside the web dashboard, activated users can chat with the AI directly in the browser or generate API keys to plug into the Continue VS Code extension, turning it into a coding agent. The backend handles Docker container orchestration, Supabase authentication & database management, key validation, token accounting, and multi-device session management.",
    studentRole: "Solo Full-Stack Developer & AI Infrastructure Owner (Architected Docker Desktop containerized LLM pipelines, Supabase auth & data layer, key generation system, token-sharing logic, chatbot UI, and Continue-compatible API key endpoint)",
    image: "/mainmenu.png",
    screenshots: [
      { src: "/mainmenu.png",    label: "Main Menu" },
      { src: "/login.png",       label: "Login Page" },
      { src: "/dashboardsn.png", label: "User Dashboard" },
      { src: "/aichat.png",      label: "AI Chat" },
      { src: "/licenseadmin.png",label: "License Admin" },
      { src: "/adminapi.png",    label: "API Key Management" },
      { src: "/admin.png",       label: "Admin Panel" },
    ],
    tags: ["Docker Desktop", "Supabase", "PostgreSQL", "React 19", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Ollama", "vLLM", "FastAPI", "API Keys"],
    liveUrl: "https://github.com/peetb2/AI-Hub",
    githubUrl: "https://github.com/peetb2/AI-Hub",
    featured: true,
    highlights: [
      "Docker Desktop containerized GPU local LLM execution",
      "Supabase cloud database & user authentication backend",
      "Buy keys with custom model & date range selection",
      "One key activates on unlimited PCs (shared token pool)",
      "In-browser AI chatbot for activated users",
      "Generate API keys for Continue (VS Code) coding agent",
      "Corporate-friendly: team-wide AI access without per-seat billing",
      "Real-time token usage tracking per key"
    ]
  },
  {
    id: "project-resumescreener",
    title: "AI Resume Screener – AWS Serverless Resume Parser",
    category: "Serverless Cloud AI",
    description: "Cloud-native AI resume screening application powered by AWS Lambda, Amazon S3, and API Gateway. Automatically parses candidate resumes, extracts tech skills and contact details with regex, and calculates weighted candidate scores in real-time.",
    longDescription: "AI Resume Screener is a full-stack serverless web application designed to automate candidate evaluation for HR and tech recruiters. Candidates' resumes are uploaded via a drag-and-drop React interface directly into an Amazon S3 bucket with CORS configuration. The upload triggers an AWS Lambda Python backend through Amazon API Gateway REST endpoints. The Lambda function retrieves the file using boto3, uses regular expressions to extract candidate metadata (Name, Email), scans for matching technical skills (Python, AWS, React, SQL, Machine Learning), and calculates candidate suitability scores. Results are streamed back to the React frontend and displayed in interactive candidate data tables and detailed result pages.",
    studentRole: "Solo Cloud Architect & Full-Stack Developer (Engineered React 19 drag-and-drop UI, AWS Lambda Python parser with regex skill extraction, S3 CORS security policy, and API Gateway REST integration)",
    image: "/mainmenuaiscreen.png",
    screenshots: [
      { src: "/mainmenuaiscreen.png", label: "Upload Resume Page" },
      { src: "/aiscreening.png",       label: "Automated Candidate Scoring" },
      { src: "/Aws.png",               label: "AWS Serverless Cloud Architecture" },
    ],
    tags: ["AWS Lambda", "Amazon S3", "API Gateway", "AWS Amplify", "Python", "React 19", "Material-UI", "Boto3", "Serverless"],
    liveUrl: "https://github.com/peetb2/AI-Screening-resume",
    githubUrl: "https://github.com/peetb2/AI-Screening-resume",
    featured: true,
    highlights: [
      "Drag-and-drop resume upload directly to Amazon S3 bucket",
      "Serverless Python AWS Lambda backend parser (boto3 & regex)",
      "Automated skill extraction & candidate scoring logic",
      "Amazon API Gateway REST API endpoint integration",
      "AWS Amplify backend configuration & security CORS policies",
      "Interactive candidate score table & detailed result views"
    ]
  }
];

export const educationData = [
  {
    school: "Bangkok University",
    degree: "Information Technology",
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
    id: "cert-ai-microsoft",
    title: "AI Skills for Business Professionals",
    issuer: "Microsoft Thailand & THAI MOOC",
    date: "28 July 2026",
    credentialId: "60b48eab",
    image: "/aicert.png",
    description: "Official certification awarded by Microsoft Thailand in partnership with THAI MOOC (Ministry of Higher Education, Science, Research and Innovation) covering practical AI application, prompt engineering, and intelligent workflow optimization."
  }
];



