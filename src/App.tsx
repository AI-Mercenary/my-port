import { useState } from "react"
import { BrainCircuit, Cloud, Code, FileText, Globe, GraduationCap, Handshake, Medal, Menu, Rocket, ScanEye, Trophy, Users, X, type LucideIcon } from "lucide-react"
import profilePhoto from "./assets/profile.png"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons"
const LOBE = "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1/icons"
const SIMPLE = "https://cdn.simpleicons.org"

const dev = (name: string, variant = "original") => `${DEVICON}/${name}/${name}-${variant}.svg`

// Open-source brand logos: Devicon, LobeHub Icons, Simple Icons
const TECH_ICONS: Record<string, string> = {
  Python: dev("python"),
  JavaScript: dev("javascript"),
  TypeScript: dev("typescript"),
  Java: dev("java"),
  C: dev("c"),
  "C++": dev("cplusplus"),
  React: dev("react"),
  "React.js": dev("react"),
  "Next.js": dev("nextjs"),
  "Node.js": dev("nodejs"),
  "Express.js": dev("express"),
  FastAPI: dev("fastapi"),
  GraphQL: dev("graphql", "plain"),
  Tailwind: dev("tailwindcss"),
  "Tailwind CSS": dev("tailwindcss"),
  Vite: dev("vitejs"),
  Docker: dev("docker"),
  "CI/CD": dev("githubactions"),
  Firebase: dev("firebase"),
  MongoDB: dev("mongodb"),
  MERN: dev("mongodb"),
  PostgreSQL: dev("postgresql"),
  MySQL: dev("mysql"),
  Supabase: dev("supabase"),
  TensorFlow: dev("tensorflow"),
  PyTorch: dev("pytorch"),
  OpenCV: dev("opencv"),
  "Scikit-learn": dev("scikitlearn"),
  Streamlit: dev("streamlit"),
  AWS: `${LOBE}/aws-color.svg`,
  SageMaker: `${LOBE}/aws-color.svg`,
  "AWS SageMaker": `${LOBE}/aws-color.svg`,
  "AWS S3": `${LOBE}/aws-color.svg`,
  "AWS Lambda": `${LOBE}/aws-color.svg`,
  "Amazon Translate": `${LOBE}/aws-color.svg`,
  "Amazon Comprehend": `${LOBE}/aws-color.svg`,
  "Amazon Textract": `${LOBE}/aws-color.svg`,
  "Amazon Bedrock": `${LOBE}/bedrock-color.svg`,
  Ollama: `${LOBE}/ollama.svg`,
  "Swagger UI": dev("swagger"),
  OpenAI: `${LOBE}/openai.svg`,
  Gemini: `${LOBE}/gemini-color.svg`,
  "Gemini API": `${LOBE}/gemini-color.svg`,
  LangChain: `${LOBE}/langchain-color.svg`,
  LangGraph: `${LOBE}/langgraph-color.svg`,
  LlamaIndex: `${LOBE}/llamaindex-color.svg`,
  CrewAI: `${LOBE}/crewai-color.svg`,
  n8n: `${LOBE}/n8n-color.svg`,
  Langfuse: `${LOBE}/langfuse-color.svg`,
  LangSmith: `${LOBE}/langsmith-color.svg`,
  Razorpay: `${SIMPLE}/razorpay`,
  WebRTC: `${SIMPLE}/webrtc`,
  MediaPipe: `${SIMPLE}/mediapipe`,
}

function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const src = TECH_ICONS[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className="shrink-0 object-contain"
    />
  )
}

type Star = { s: string; t: string; a: string; r: string[] }

const EXPERIENCE: {
  company: string
  date: string
  role: string
  star: Star
  tags: string[]
}[] = [
  {
    company: "DATAi2i Private Limited",
    date: "May 2026 – Present",
    role: "Junior AI Engineer",
    star: {
      s: "Pharma, life sciences and tech clients needed AI that works on real domain data — multilingual documents, domain-specific search, and models they could trust in production.",
      t: "Build and ship RAG systems, GenAI agents and NLP pipelines on AWS — and validate model quality before it reaches clients.",
      a: "Built RAG pipelines and GenAI agents for client use cases. Developed NLP pipelines for multilingual translation, text classification, NER and contextual search, and fine-tuned LLMs for domain accuracy. Built on AWS AI/ML services — SageMaker, Bedrock, Lambda, S3, Translate, Comprehend and Textract. Built internal applications and AI tools. Tested ML models and delivered accuracy insights and evaluation reports, shipping through CI/CD.",
      r: ["30% reduction in deployment time", "25% accuracy gain over baseline", "Promoted before graduating"],
    },
    tags: ["AWS SageMaker", "Amazon Bedrock", "AWS Lambda", "AWS S3", "Amazon Translate", "Amazon Comprehend", "Amazon Textract", "RAG", "GenAI Agents", "NLP", "LLM Fine-tuning", "Model Evaluation", "CI/CD"],
  },
  {
    company: "ZenithZap Beverages Private Limited",
    date: "Aug 2025 – Oct 2025",
    role: "AI Engineer & Full-Stack Developer Intern",
    star: {
      s: "A sports beverage brand had no digital presence and no way to handle customer queries at scale.",
      t: "Build the brand's website end-to-end and add AI features on top of it.",
      a: "Developed the website with React.js, Node.js and Express.js. Integrated a conversational AI chatbot via LLM APIs and Ollama models. Added server-side caching to cut response latency.",
      r: [
        "5,000+ visitors",
        "30% increase in brand visibility",
        "25% fewer support queries",
        "40% lower response latency",
      ],
    },
    tags: ["React.js", "Node.js", "Express.js", "LLM APIs", "Ollama"],
  },
  {
    company: "DATAi2i Private Limited",
    date: "May 2025 – Jul 2025",
    role: "AI Engineer Intern",
    star: {
      s: "Teams spent hours searching 120+ internal documents — keyword search returned noisy results.",
      t: "Build AI chatbots and an enterprise RAG assistant, and research how transformer models could improve internal tools.",
      a: "Built AI chatbots, internal RAG systems and AI agents, and worked hands-on with transformer models through applied AI research. Owned the full SDLC of an Enterprise RAG with semantic search — LangChain, LangGraph, Gemini and OpenAI APIs, MongoDB, Streamlit, semantic chunking and dense-vector indexing.",
      r: ["70% faster document retrieval", "70% top-1 precision", "60% fewer off-topic results"],
    },
    tags: ["Python", "LangChain", "LangGraph", "Gemini API", "OpenAI", "Transformers", "RAG", "Semantic Search", "MongoDB", "Streamlit"],
  },
  {
    company: "BMARG Innovative Solutions",
    date: "Jan 2025 – Apr 2025",
    role: "Software Engineer Intern",
    star: {
      s: "Clinics managed doctor appointments and payments manually — slow and error-prone.",
      t: "Build CureHouz — a full-stack doctor appointment and clinic management prototype.",
      a: "Built the MERN-stack app with Razorpay payments and Firebase Authentication. Profiled and resolved Node.js scheduling bottlenecks with clinical staff.",
      r: ["Prototype tested with 500+ users", "35% reduction in onboarding time", "40% faster page loads"],
    },
    tags: ["MERN", "React.js", "Node.js", "Razorpay", "Firebase"],
  },
]

const PROJECTS: {
  name: string
  year: string
  desc: string
  star: Star
  tags: string[]
  href?: string
}[] = [
  {
    name: "Vaultiq — Enterprise Document Search",
    year: "2025",
    desc: "Semantic RAG pipeline for internal knowledge retrieval",
    star: {
      s: "Teams lost hours searching 120+ docs — keyword search was noisy and imprecise.",
      t: "Build a production RAG tool with measurable retrieval accuracy.",
      a: "Semantic search with dense-vector indexing and semantic segmentation, orchestrated with LangChain + LangGraph over Gemini, OpenAI and Ollama models. Monitored via Langfuse + LangSmith.",
      r: ["70% faster search", "60% fewer off-topic results"],
    },
    tags: ["Python", "LangChain", "LangGraph", "Gemini API", "OpenAI", "Ollama", "MongoDB", "RAG", "Semantic Search"],
    href: "https://vaultiq-ai.vercel.app",
  },
  {
    name: "AdaFit — AI Fitness Coach",
    year: "2025",
    desc: "Multi-step agentic pipeline for personalized fitness planning",
    star: {
      s: "Generic fitness apps give one-size-fits-all plans with no real goal-awareness.",
      t: "Build an agentic system that reasons about goals and generates structured plans.",
      a: "LangGraph + LangChain pipeline with goal-parsing and synthesis stages. React.js frontend.",
      r: ["3× faster plan generation", "Multi-step agentic reasoning in production"],
    },
    tags: ["Python", "LangChain", "LangGraph", "OpenAI", "Ollama", "React.js"],
    href: "https://ada-fit.vercel.app",
  },
  {
    name: "LifePathBot — AI Student Success Platform",
    year: "2025",
    desc: "LLM-backed platform for student goal tracking and guidance",
    star: {
      s: "Students lacked one place to manage documents, goals, and get intelligent guidance.",
      t: "Build a multi-format ingestion platform with LLM insights and analytics — validate with real users.",
      a: "React, TypeScript, Vite, Tailwind, Firebase. Supported PDF, DOCX, PPTX. Built analytics dashboard.",
      r: ["200+ students in pilot", "Multi-format LLM-driven insights"],
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Firebase", "Ollama"],
    href: "https://lifepath-bot.vercel.app",
  },
  {
    name: "Exam Integrity Monitor",
    year: "2024",
    desc: "Real-time browser-based proctoring at 30 FPS",
    star: {
      s: "Online exams had no scalable proctoring — human monitors couldn't cover thousands of sessions.",
      t: "Build a real-time computer vision proctoring system that runs entirely in the browser.",
      a: "30 FPS webcam pipeline using MediaPipe, face-api.js, WebRTC. Pure JavaScript, no server needed.",
      r: ["60% reduction in proctor workload", "1,000+ exam sessions monitored"],
    },
    tags: ["JavaScript", "WebRTC", "MediaPipe", "face-api.js"],
  },
]

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "1st Place — Smart India Hackathon (Internal Round)",
    meta: "GITAM University · 2025",
    detail: "Won first place in the university's internal round of the Smart India Hackathon, outranking 400+ competing teams.",
  },
  {
    icon: GraduationCap,
    title: "Selected — IIT Delhi Summer School",
    meta: "Computer Graphics & Computer Vision · IIT Delhi",
    detail: "Selected for IIT Delhi's Computer Graphics & Computer Vision Summer School — chosen from 1,500+ applicants.",
  },
  {
    icon: Medal,
    title: "Top 10 — Techkriti Technical Innovation Event",
    meta: "IIT Kanpur",
    detail: "Placed in the top 10 at the Technical Innovation Event of Techkriti, IIT Kanpur's annual technical festival.",
  },
  {
    icon: Rocket,
    title: "President — GITAM Aero Astro Club",
    meta: "GITAM University · 2025–26",
    detail: "Leading a STEM club of 50+ members across tech and non-tech domains.",
  },
  {
    icon: Users,
    title: "Operations Lead — IEEE Computer Society, GITAM Chapter",
    meta: "GITAM University · 2024–25",
    detail: "Organized workshops and cross-department initiatives for the chapter.",
  },
]

const SKILLS: { icon: LucideIcon; category: string; tags: string[] }[] = [
  {
    icon: BrainCircuit,
    category: "Generative AI & LLMs",
    tags: ["LLMs", "RAG", "LLM Fine-tuning", "Prompt Engineering", "Vector Search", "LangChain", "LangGraph", "LlamaIndex", "CrewAI", "n8n", "Ollama", "Langfuse", "LangSmith"],
  },
  { icon: Code, category: "Languages", tags: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL"] },
  { icon: Globe, category: "Web & Backend", tags: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Swagger UI", "Streamlit", "Tailwind CSS"] },
  { icon: Cloud, category: "Cloud, DBs & DevOps", tags: ["AWS SageMaker", "Amazon Bedrock", "AWS Lambda", "AWS S3", "Amazon Translate", "Amazon Comprehend", "Amazon Textract", "Docker", "CI/CD", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { icon: ScanEye, category: "ML & Computer Vision", tags: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NLP", "MLOps"] },
  {
    icon: Handshake,
    category: "Soft Skills",
    tags: ["Ownership", "Leadership", "Communication", "Stakeholder Management", "Problem Solving", "Teamwork", "Adaptability", "Quick Learner", "Agile"],
  },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-chip px-2.5 py-[5px] text-[12.5px] font-medium leading-none text-chip-ink">
      {typeof children === "string" && <TechIcon name={children} />}
      {children}
    </span>
  )
}

function StarBlock({ star }: { star: Star }) {
  const rows: [string, React.ReactNode][] = [
    ["S", star.s],
    ["T", star.t],
    ["A", star.a],
  ]
  return (
    <div className="space-y-3">
      {rows.map(([k, v]) => (
        <div key={k} className="flex gap-3">
          <span className="mt-[2px] w-4 shrink-0 font-display text-[13px] font-bold text-accent">{k}</span>
          <p className="text-[15px] leading-[1.65] text-ink-soft">{v}</p>
        </div>
      ))}
      <div className="flex gap-3">
        <span className="mt-[2px] w-4 shrink-0 font-display text-[13px] font-bold text-accent">R</span>
        <ul className="space-y-1.5">
          {star.r.map((item) => (
            <li key={item} className="flex gap-2 text-[15px] leading-[1.5] text-ink">
              <span className="text-accent">→</span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-[36px] font-bold leading-none tracking-[-0.01em] sm:text-[44px]">{children}</h2>
      <div className="mt-5 h-[3px] w-12 bg-accent" />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-bg/85 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-end px-6 md:px-10">
          <div className="hidden flex-1 items-center justify-between md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent px-5 py-2.5 text-[14px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          >
            {menuOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-hairline bg-bg px-6 pb-6 md:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-hairline py-4 text-[16px] font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex h-12 items-center justify-center bg-accent text-[15px] font-semibold text-on-accent"
            >
              Hire Me
            </a>
          </div>
        )}
      </header>

      <main id="top" className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* HERO */}
        <section className="flex min-h-[calc(100vh-72px)] flex-col justify-center py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <img
                src={profilePhoto}
                alt="Sampath Varma Datla"
                className="mx-auto mb-10 h-40 w-40 rounded-full border border-hairline object-cover outline outline-1 outline-offset-[8px] outline-hairline lg:hidden"
              />
              <h1 className="font-display text-[44px] font-bold leading-[1.04] tracking-[-0.02em] sm:text-[54px] lg:text-[60px]">
                Sampath Varma Datla
              </h1>
              <p className="mt-5 text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]">
                <span className="font-medium text-ink">AI/ML Engineer &amp; Full-Stack Developer</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">LLM Systems &amp; Agentic AI</span>
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="flex h-12 items-center justify-center bg-accent px-7 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
                >
                  View My Work ↓
                </a>
                <a
                  href="/Sampath_Varma_Datla_Resume.pdf"
                  download
                  className="flex h-12 items-center justify-center border border-ink px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>

            <div className="hidden justify-center lg:flex lg:translate-y-4">
              <img
                src={profilePhoto}
                alt="Sampath Varma Datla"
                className="h-[340px] w-[340px] rounded-full border border-hairline object-cover outline outline-1 outline-offset-[12px] outline-hairline"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 border-t border-hairline py-24">
          <div className="max-w-[760px]">
            <SectionLabel>About Me</SectionLabel>
            <div className="mt-10 space-y-6 text-[16px] leading-[1.8] text-ink-soft sm:text-[17px]">
              <p className="text-[19px] leading-[1.6] text-ink sm:text-[21px]">
                I'm an AI/ML Engineer. B.Tech in Computer Science from GITAM University.
              </p>
              <p>
                I build end-to-end — RAG pipelines, LLM agents, full-stack platforms. Not just to learn the tech, but
                because I like taking an idea all the way to something that actually works.
              </p>
              <p>
                I've shipped four production systems across healthcare, ed-tech, and e-commerce. Got promoted at DATAi2i
                before graduating. Each project taught me something the next one needed.
              </p>
              <p>
                I'm curious by default. If there's a new framework or approach that solves something better, I'll pick it
                up and use it. That's just how I work.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 border-t border-hairline py-24">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-10 space-y-6">
            {EXPERIENCE.map((exp) => (
              <article
                key={exp.company + exp.date}
                className="group grid gap-6 rounded-[8px] border border-hairline border-l-[3px] border-l-transparent bg-surface p-8 transition-all hover:border-l-accent hover:shadow-[0_8px_30px_rgba(13,13,13,0.06)] lg:grid-cols-[0.3fr_0.7fr]"
              >
                <div>
                  <h3 className="font-display text-[20px] font-semibold leading-snug">{exp.company}</h3>
                  <p className="mt-1 text-[14px] text-ink-soft">{exp.date}</p>
                  <p className="mt-3 text-[15px] font-medium text-accent">{exp.role}</p>
                </div>
                <div>
                  <StarBlock star={exp.star} />
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
                    {exp.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 border-t border-hairline py-24">
          <SectionLabel>Projects</SectionLabel>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col rounded-[8px] border border-hairline border-l-[3px] border-l-transparent bg-surface p-8 transition-all hover:border-l-accent hover:shadow-[0_8px_30px_rgba(13,13,13,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[20px] font-semibold leading-snug">{p.name}</h3>
                  <span className="shrink-0 text-[14px] font-medium text-ink-soft">{p.year}</span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
                <div className="mt-6">
                  <StarBlock star={p.star} />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {p.href && (
                <div className="mt-auto pt-7">
                  <div className="border-t border-hairline pt-5">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                      View Live Project <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                  </div>
                </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 border-t border-hairline py-24">
          <SectionLabel>Skills</SectionLabel>
          <div className="mt-10 divide-y divide-hairline border-y border-hairline">
            {SKILLS.map((row) => (
              <div key={row.category} className="grid gap-4 py-6 lg:grid-cols-[0.3fr_0.7fr]">
                <div className="flex items-center gap-2.5">
                  <row.icon size={18} strokeWidth={1.75} className="text-accent" />
                  <h3 className="font-display text-[16px] font-semibold">{row.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="scroll-mt-24 border-t border-hairline py-24">
          <SectionLabel>Achievements</SectionLabel>
          <div className="mt-10 divide-y divide-hairline border-y border-hairline">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.title}
                className="grid grid-cols-[40px_1fr] items-start gap-x-5 gap-y-1 py-6 transition-colors hover:bg-surface md:grid-cols-[40px_0.45fr_0.55fr] md:items-center md:gap-x-8 md:px-4"
              >
                <span className="row-span-2 flex h-10 w-10 items-center justify-center rounded-[8px] bg-tagbg text-accent md:row-span-1">
                  <a.icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-[18px] font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-accent">{a.meta}</p>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft md:mt-0">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 border-t border-hairline py-28">
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="font-display text-[36px] font-semibold tracking-tight sm:text-[44px]">
              Let's build something.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-ink-soft">
              I'm looking for roles where I can own AI systems end-to-end — from architecture to deployment.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sdatla394@gmail.com"
                className="flex h-12 items-center bg-accent px-6 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/sampath-varma-datla"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center border border-ink px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AI-Mercenary"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center border border-ink px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                GitHub
              </a>
              <a
                href="/Sampath_Varma_Datla_Resume.pdf"
                download
                className="flex h-12 items-center gap-2 border border-ink px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                <FileText size={18} strokeWidth={1.75} />
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-8 text-[13px] text-ink-soft md:px-10">
          Sampath Varma Datla · 2026
        </div>
      </footer>
    </div>
  )
}
