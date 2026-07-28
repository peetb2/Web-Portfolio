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
    studentRole: "Lead Backend & AI Infrastructure Engineer",
    studentRoleThai: "Lead Backend & AI Infrastructure Engineer (วิศวกรผู้ดูแลระบบหลังบ้านและโครงสร้างพื้นฐาน AI)",
    highlights: [
      "Benchmarked and deployed local LLMs via Docker Desktop & vLLM/Ollama, optimizing GPU VRAM allocation for smooth inference.",
      "Engineered a custom multi-device token-sharing architecture and API key engine using Supabase PostgreSQL & Node.js/FastAPI.",
      "Built an OpenAI-compatible REST API proxy endpoint to integrate local models seamlessly into the Continue VS Code AI coding agent.",
      "Architected a full-stack SaaS portal with real-time token tracking, key lifecycle management, and in-browser AI chat."
    ],
    highlightsThai: [
      "ทดสอบ Benchmark และ Deploy Local LLM ผ่าน Docker Desktop & vLLM/Ollama พร้อมปรับแต่งการจัดสรร VRAM ของ GPU ให้ประมวลผลได้อย่างลื่นไหล",
      "ออกแบบและพัฒนาระบบสถาปัตยกรรมแชร์ Token หลายเครื่องและระบบ API Key ด้วย Supabase PostgreSQL & Node.js/FastAPI",
      "สร้าง REST API Proxy Endpoint ที่รองรับมาตรฐาน OpenAI เพื่อเชื่อมต่อโมเดล Local เข้ากับ Continue (VS Code AI Coding Agent)",
      "พัฒนาระบบ SaaS แบบ Full-Stack พร้อมระบบติดตามการใช้ Token แบบ Real-time, ระบบจัดการวงจร Access Key และ AI Chat ในเบราว์เซอร์"
    ],
    architectureDetails: {
      overview: "AI Hub is built around a hybrid local-cloud architecture: containerized GPU LLM inference engines (Ollama & vLLM on Docker Desktop) coupled with Supabase PostgreSQL cloud authentication and token management.",
      overviewThai: "AI Hub ถูกออกแบบด้วยสถาปัตยกรรมแบบ Hybrid Local-Cloud: รวมระบบประมวลผล Local LLM บน GPU (Ollama & vLLM บน Docker Desktop) เข้ากับระบบ Cloud Authentication และการจัดการ Token ของ Supabase PostgreSQL",
      keyContributions: [
        "Benchmarked and deployed local LLMs via Docker Desktop & vLLM/Ollama, optimizing GPU VRAM allocation for smooth inference.",
        "Engineered a custom multi-device token-sharing architecture and API key system using Supabase PostgreSQL & Node.js/FastAPI.",
        "Built an OpenAI-compatible REST API proxy endpoint to integrate local models seamlessly into the Continue (VS Code) AI coding agent.",
        "Architected a full-stack SaaS portal with real-time token tracking, key lifecycle management, and in-browser AI chat."
      ],
      keyContributionsThai: [
        "ทดสอบ Benchmark และ Deploy Local LLM ผ่าน Docker Desktop & vLLM/Ollama พร้อมปรับแต่งการจัดสรร VRAM ของ GPU ให้ประมวลผลได้อย่างลื่นไหล",
        "ออกแบบและพัฒนาระบบสถาปัตยกรรมแชร์ Token หลายเครื่องและระบบ API Key ด้วย Supabase PostgreSQL & Node.js/FastAPI",
        "สร้าง REST API Proxy Endpoint ที่รองรับมาตรฐาน OpenAI เพื่อเชื่อมต่อโมเดล Local เข้ากับ Continue (VS Code AI Coding Agent)",
        "พัฒนาระบบ SaaS แบบ Full-Stack พร้อมระบบติดตามการใช้ Token แบบ Real-time, ระบบจัดการวงจร Access Key และ AI Chat ในเบราว์เซอร์"
      ]
    },
    whatIDid: {
      role: "Lead Backend & AI Infrastructure Engineer",
      roleThai: "Lead Backend & AI Infrastructure Engineer",
      goal: "Build a secure, self-hosted API gateway and management platform that allows teams to share and monetize access to local, hardware-constrained LLMs without relying on expensive cloud providers.",
      goalThai: "สร้างแพลตฟอร์ม API Gateway และระบบจัดการ License แบบ Self-hosted เพื่อให้ทีมสามารถแชร์โควตาการใช้งาน Local LLMs ได้อย่างปลอดภัย โดยไม่ต้องจ่ายค่าบริการแพง ให้กับ Cloud Provider ภายนอก",
      whatIBuilt: "While the visual UI design was handled separately, I engineered the entire functional full-stack architecture, from the local AI deployment up to the database schema and API routing.",
      whatIBuiltThai: "ถึงแม้งานดีไซน์ภาพรวมของ UI จะมีคนดูแลแยกต่างหาก แต่ในฝั่งของระบบการทำงาน ผมเป็นคนขึ้นโครงสร้าง Full-Stack Architecture ทั้งหมด ตั้งแต่การเซต Local AI ไปจนถึงการออกแบบ Database Schema และ API Routing ครบ:",
      items: [
        {
          title: "Local AI Infrastructure & Benchmarking",
          titleThai: "เซตระบบ Local AI & การทำ Benchmarking",
          desc: "I containerized the local LLM environment using Docker Desktop. A major part of this was researching and benchmarking model performance against local GPU constraints. For instance, I optimized our resource allocation by specifically targeting the Qwen 2.5 32B model over the massive 397B version, ensuring smooth, high-speed inference without hardware bottlenecks.",
          descThai: "ผมนำ Local LLM มาทำ Containerize รันบน Docker Desktop งานหินของส่วนนี้คือการรีเสิร์ชและเทสต์ประสิทธิภาพโมเดลให้บาลานซ์กับข้อจำกัดของ GPU ยกตัวอย่างเช่น ผมเทสต์และตัดสินใจเลือกใช้โมเดล Qwen 3.5 ขนาด 27B แทนที่จะเป็นตัว 397B เพื่อให้ระบบรัน Inference ได้ลื่นไหลที่สุดโดยที่ Hardware ไม่โหลดจนเกินไป"
        },
        {
          title: "The Custom API Gateway",
          titleThai: "สร้าง Custom API Gateway",
          desc: "I architected a public external gateway (/api/v1/) that acts as an OpenAI-compatible proxy. This allows external clients—like the Continue.dev VS Code extension—to seamlessly consume the local models.",
          descThai: "ผมออกแบบ Public Gateway (/api/v1/) ให้ทำหน้าที่เป็น Proxy ที่รองรับ API มาตรฐานเดียวกับ OpenAI (OpenAI-compatible) ทำให้ Client ภายนอกอย่าง Extension Continue.dev บน VS Code สามารถยิง API มาใช้งาน Local Models ของเราได้แบบเนียนๆ"
        },
        {
          title: "Security & Key Management",
          titleThai: "ระบบความปลอดภัย & การจัดการ API Key",
          desc: "I built a highly secure token and license key system. Plain API secrets are never stored; I engineered a custom validation logic using SHA-256 hashing and salt. I also implemented Supabase Row Level Security (RLS) to ensure strict data isolation between standard users and admins.",
          descThai: "ผมพัฒนาระบบ License Key ขึ้นมาเอง โดยไม่เก็บ API Secret เป็น Text เปล่า ลง Database เด็ดขาด แต่ใช้การทำ Hashing ด้วย SHA-256 ผสมกับ Salt นอกจากนี้ ผมยังเขียน Row Level Security (RLS) บน Supabase เพื่อแบ่งแยกสิทธิ์การเข้าถึงข้อมูลระหว่าง User ทั่วไปกับ Admin อย่างเด็ดขาด"
        },
        {
          title: "Usage Tracking & Guardrails",
          titleThai: "ระบบโควตา & AI Guardrails",
          desc: "To prevent server overload, I developed a monthly token quota system that tracks character consumption per user at the database level. I also engineered backend prompt guardrails to strictly confine the AI's responses to coding-related topics before the request ever reaches the Ollama server.",
          descThai: "เพื่อป้องกัน Server ล่มจากการใช้งานหนัก ผมได้เขียนระบบคำนวณ Token รายเดือนที่คอยแทร็กปริมาณการพิมพ์ของ User ลึกถึงระดับ Database และยังเซต Backend Guardrails ดัก Prompt ไว้ก่อนส่งไปหา Ollama Server เพื่อบังคับให้ AI ตอบแค่คำถามที่เกี่ยวกับการเขียนโค้ดเท่านั้น"
        },
        {
          title: "Full-Stack Integration",
          titleThai: "ประกอบร่าง Full-Stack",
          desc: "I wired up the Next.js 16 (App Router) frontend to the Supabase backend, handling user authentication, role-based access control (RBAC), and real-time chat history persistence.",
          descThai: "ผมเชื่อมต่อหน้าบ้านที่เขียนด้วย Next.js 16 (App Router) เข้ากับหลังบ้านอย่าง Supabase เพื่อจัดการระบบ Authentication, การแบ่ง Role ผู้ใช้งาน (RBAC) และการเซฟประวัติแชทแบบ Real-time"
        }
      ],
      result: "A robust, production-ready local AI gateway that successfully bridges secure, hardware-optimized local LLMs with a fully functional SaaS management layer.",
      resultThai: "เราได้ระบบ Local AI Gateway ที่พร้อมรันบน Production จริง เป็นแพลตฟอร์มที่ผสานการทำงานระหว่าง Local LLMs ที่ปรับจูนมาอย่างดี เข้ากับระบบจัดการหลังบ้านสไตล์ SaaS ได้อย่างสมบูรณ์แบบ"
    }
  },
  {
    id: "project-resumescreener",
    title: "AI Resume Screener – AWS Serverless Resume Parser",
    category: "Serverless Cloud AI",
    description: "Cloud-native AI resume screening application powered by AWS Lambda, Amazon S3, and API Gateway. Automatically parses candidate resumes, extracts tech skills and contact details with regex, and calculates weighted candidate scores in real-time.",
    longDescription: "AI Resume Screener is a full-stack serverless web application designed to automate candidate evaluation for HR and tech recruiters. Candidates' resumes are uploaded via a drag-and-drop React interface directly into an Amazon S3 bucket with CORS configuration. The upload triggers an AWS Lambda Python backend through Amazon API Gateway REST endpoints. The Lambda function retrieves the file using boto3, uses regular expressions to extract candidate metadata (Name, Email), scans for matching technical skills (Python, AWS, React, SQL, Machine Learning), and calculates candidate suitability scores. Results are streamed back to the React frontend and displayed in interactive candidate data tables and detailed result pages.",
    studentRole: "Solo Cloud Architect & Full-Stack Developer (Engineered React 19 drag-and-drop UI, AWS Lambda Python parser with regex skill extraction, S3 CORS security policy, and API Gateway REST integration)",
    studentRoleThai: "สถาปนิก Cloud & นักพัฒนา Full-Stack เดี่ยว (พัฒนาระบบ UI แบบ Drag-and-Drop ด้วย React 19, ระบบแกะสลัก Resume ด้วย Python AWS Lambda & Regex, กำหนด Security Policy CORS บน S3 และเชื่อมต่อ API Gateway REST)",
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
      "Engineered serverless Python AWS Lambda parser with boto3 & regex for automated candidate metadata & skill extraction.",
      "Architected direct S3 bucket upload pipelines with secure CORS policies and API Gateway REST integration.",
      "Implemented automated weighted scoring algorithms to evaluate candidate tech stack match in real-time.",
      "Developed dynamic React 19 drag-and-drop interface with interactive candidate analytics and score tables."
    ],
    highlightsThai: [
      "พัฒนาระบบ Serverless Python บน AWS Lambda ร่วมกับ boto3 & Regex สำหรับสกัดข้อมูลผู้สมัครและทักษะทางเทคนิคอัตโนมัติ",
      "ออกแบบ Pipeline อัปโหลดไฟล์ตรงไปยัง S3 Bucket พร้อมกำหนด Security Policy CORS และเชื่อมต่อ API Gateway REST",
      "พัฒนาอัลกอริทึมการคำนวณคะแนนแบบถ่วงน้ำหนัก (Weighted Scoring) เพื่อประเมินความเหมาะสมของผู้สมัครแบบ Real-time",
      "สร้างหน้าจอ React 19 แบบ Drag-and-Drop พร้อมตารางแสดงข้อมูลวิเคราะห์และคะแนนผู้สมัครแบบ Interactive"
    ],
    architectureDetails: {
      overview: "AI Resume Screener utilizes an event-driven serverless architecture on AWS (Lambda, S3, API Gateway) to provide instantaneous resume parsing without persistent server overhead.",
      overviewThai: "AI Resume Screener ใช้สถาปัตยกรรมแบบ Event-Driven Serverless บน AWS (Lambda, S3, API Gateway) เพื่อให้สามารถประมวลผลและแกะสลัก Resume ได้ทันทีโดยไม่ต้องรันเซิร์ฟเวอร์ค้างไว้",
      keyContributions: [
        "Engineered serverless Python AWS Lambda parser with boto3 & regex for automated candidate metadata & skill extraction.",
        "Architected direct S3 bucket upload pipelines with secure CORS policies and API Gateway REST integration.",
        "Implemented automated weighted scoring algorithms to evaluate candidate tech stack match in real-time.",
        "Developed dynamic React 19 drag-and-drop interface with interactive candidate analytics and score tables."
      ],
      keyContributionsThai: [
        "พัฒนาระบบ Serverless Python บน AWS Lambda ร่วมกับ boto3 & Regex สำหรับสกัดข้อมูลผู้สมัครและทักษะทางเทคนิคอัตโนมัติ",
        "ออกแบบ Pipeline อัปโหลดไฟล์ตรงไปยัง S3 Bucket พร้อมกำหนด Security Policy CORS และเชื่อมต่อ API Gateway REST",
        "พัฒนาอัลกอริทึมการคำนวณคะแนนแบบถ่วงน้ำหนัก (Weighted Scoring) เพื่อประเมินความเหมาะสมของผู้สมัครแบบ Real-time",
        "สร้างหน้าจอ React 19 แบบ Drag-and-Drop พร้อมตารางแสดงข้อมูลวิเคราะห์และคะแนนผู้สมัครแบบ Interactive"
      ]
    },
    whatIDid: {
      role: "Solo Cloud Architect & Full-Stack Developer",
      roleThai: "Solo Cloud Architect & Full-Stack Developer",
      goal: "To build an automated resume screening application that saves HR and tech recruiters valuable time by leveraging a cloud-native, serverless AWS architecture to read, extract skills, and evaluate candidates in real-time.",
      goalThai: "สร้างระบบคัดกรองเรซูเม่ (Resume Screening) แบบอัตโนมัติ เพื่อช่วย HR และ Recruiter ประหยัดเวลา โดยใช้สถาปัตยกรรม Cloud-native แบบ Serverless บน AWS ในการอ่าน สกัดข้อมูลทักษะ และประเมินคะแนนผู้สมัครได้แบบ Real-time",
      whatIBuilt: "I engineered this project completely end-to-end, handling everything from the frontend user interface to the underlying AWS cloud infrastructure.",
      whatIBuiltThai: "โปรเจกต์นี้ผมลุยเดี่ยวออกแบบระบบแบบ End-to-End ตั้งแต่การเขียนหน้าบ้าน ไปจนถึงการวางโครงสร้าง Cloud Infrastructure ทั้งหมดบน AWS ครับ:",
      items: [
        {
          title: "Frontend Architecture (React 19)",
          titleThai: "พัฒนาระบบ Frontend (React 19)",
          desc: "I built a dynamic drag-and-drop interface for seamless resume uploads, paired with an interactive dashboard for candidate analytics. To optimize system performance and prevent server bottlenecks, I architected the frontend to execute direct uploads to an Amazon S3 bucket.",
          descThai: "ผมเขียนหน้า UI แบบ Drag-and-drop เพื่อให้ผู้ใช้งานอัปโหลดเรซูเม่ได้ง่ายๆ พร้อมระบบ Dashboard สำหรับแสดงผลคะแนนผู้สมัคร และที่สำคัญคือผมออกแบบให้ Frontend อัปโหลดไฟล์ตรงเข้า Amazon S3 Bucket ได้เลย (Direct Upload) เพื่อลดคอขวดและเพิ่มความเร็วของระบบ"
        },
        {
          title: "Serverless Backend (AWS)",
          titleThai: "วางสถาปัตยกรรม Serverless Backend (AWS)",
          desc: "I designed an event-driven cloud pipeline connecting Amazon API Gateway to AWS Lambda. I also implemented strict security measures, configuring robust CORS policies for the S3 bucket to ensure secure file handling.",
          descThai: "ผมวาง Data Pipeline โดยเชื่อม Amazon API Gateway เข้ากับ AWS Lambda แบบ Serverless พร้อมทั้งเซ็ตระบบ Security อย่าง CORS Policy สำหรับ S3 Upload อย่างรัดกุมเพื่อให้ระบบปลอดภัยที่สุด"
        },
        {
          title: "Data Extraction (Python Parser)",
          titleThai: "สร้างระบบสกัดข้อมูล (Python Parser)",
          desc: "I developed a Python-based Lambda function utilizing Boto3 that triggers instantly upon file upload. I wrote advanced Regular Expressions (Regex) to automatically parse the document, extract candidate metadata, and accurately identify specific technical skills.",
          descThai: "ผมเขียน Lambda Function ด้วย Python โดยใช้ Boto3 ดึงไฟล์มาประมวลผลทันทีที่มีการอัปโหลด พร้อมกับเขียน Regular Expressions (Regex) ขั้นสูง เพื่อสกัดข้อมูล Metadata (เช่น ชื่อ, คอนแทค) และกวาดหา Technical Skills ของผู้สมัครออกมาแบบอัตโนมัติ"
        },
        {
          title: "Real-Time Scoring Algorithm",
          titleThai: "พัฒนาระบบประเมินผล (Scoring Algorithm)",
          desc: "I implemented a custom algorithm to calculate a weighted suitability score based on the candidate's extracted tech stack. The backend streams these analytics directly to the frontend, instantly updating the interactive candidate tables.",
          descThai: "ผมเขียน Algorithm เพื่อนำ Tech Skills ที่สกัดมาได้ ไปคำนวณความเหมาะสมกับตำแหน่งงาน (Weighted Scoring) และส่งผลลัพธ์กลับไปแสดงผลที่ตารางหน้าบ้านแบบ Real-time ทันที"
        }
      ],
      result: "A 100% serverless web application that is lightning-fast, auto-scaling, and highly cost-optimized. This project serves as a strong demonstration of designing, building, and deploying production-ready AWS cloud architectures.",
      resultThai: "เราได้ Web Application แบบ Serverless 100% ที่ทำงานได้รวดเร็ว สเกลตัวเองได้อัตโนมัติตามจำนวนคนใช้งาน (Auto-scaling) และตอบโจทย์การใช้งานจริง ซึ่งโชว์ให้เห็นถึงทักษะในการออกแบบ AWS Architecture ที่เน้นทั้งประสิทธิภาพและการจัดการต้นทุน (Cost-optimization) ครับ"
    }
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



