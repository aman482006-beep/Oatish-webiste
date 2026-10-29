"use client";

import { useState } from "react";
import Link from "next/link";

type ProjectCategory = "All" | "Finance" | "AI & Technology" | "Product & Design";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "Finance" | "AI & Technology" | "Product & Design";
  categories: ProjectCategory[];
  repoUrl: string;
  demoUrl?: string;
  isSecondary?: boolean;
  statusTag: string;
  disclaimer?: string;
  attribution?: string;
  overview: string;
  problem: string;
  contribution: string;
  approach: string;
  technologies: string[];
  architecture: string[];
  limitations: string[];
}

const projects: CaseStudy[] = [
  {
    id: "market-monitor",
    title: "Market Monitor",
    subtitle: "Indian Equity-Market Intelligence Terminal",
    category: "Finance",
    categories: ["All", "Finance"],
    repoUrl: "https://github.com/aman482006-beep/market-monitor",
    statusTag: "Flagship Engineering Project",
    overview:
      "A comprehensive market intelligence terminal designed to ingest, process, and analyze Indian equity market data. The platform couples a high-throughput backend with a modular Next.js dashboard, delivering real-time breadth metrics, relative volume scanners, and algorithmic market regime classification.",
    problem:
      "Retail and student analysts frequently lack accessible, institutional-grade tools to observe broader market health across NSE/BSE indices. Commercial terminals are prohibitively expensive, while retail broker interfaces isolate individual tickers without holistic breadth analytics.",
    contribution:
      "Architected the full system end-to-end: configured the PostgreSQL schema, authored FastAPI data ingestion routines, built mathematical breadth aggregators (Advance/Decline line, 52-week Highs/Lows index, sector relative volume), and implemented the responsive Next.js frontend.",
    approach:
      "Separated ingestion workers from analytical compute routines. Ingestion handles periodic snapshots from market data providers, normalizes price action into structured PostgreSQL tables, and serves deterministic metrics via cached FastAPI endpoints to the frontend dashboard.",
    technologies: [
      "Python 3.11",
      "FastAPI",
      "PostgreSQL",
      "Next.js 14",
      "Tailwind CSS",
      "Pandas / NumPy",
      "Uvicorn",
      "Docker",
    ],
    architecture: [
      "Data Ingestion: Scheduled asynchronous tasks polling market data APIs with fallback mock fixtures.",
      "Database Layer: PostgreSQL database with time-series indexed tables for daily OHLCV and calculated aggregates.",
      "Analytics Engine: Deterministic market regime classifier (Trend Strength, Breadth Divergence, Sector Rotation).",
      "Frontend UI: Component-based Next.js dashboard displaying synchronized charts, sector heatmaps, and volume breakout feeds.",
    ],
    limitations: [
      "Data latency is bounded by third-party provider polling quotas rather than direct exchange tick feeds.",
      "Sector rotation models currently evaluate daily closing snapshots; intraday real-time recalculation is in active development.",
    ],
  },
  {
    id: "agentic-finance-lab",
    title: "Agentic Finance Research Lab",
    subtitle: "AI-Powered Financial Research & Portfolio Risk Guardian",
    category: "AI & Technology",
    categories: ["All", "Finance", "AI & Technology"],
    repoUrl: "https://github.com/aman482006-beep/Aman-trading-agent",
    statusTag: "Research & Systems Experiment",
    attribution:
      "Framework Attribution: This project utilizes and forks the upstream TradingAgents framework created by Tauric Research. My individual engineering contributions are located within the custom agent_lab directory and custom portfolio guardian implementation.",
    disclaimer:
      "Strict Notice: This software is purely an academic research and engineering prototype. It does NOT generate guaranteed trading returns, automated buy/sell orders, or professional financial advice.",
    overview:
      "An experimental multi-agent research harness designed to structure qualitative financial analysis and enforce quantitative risk controls. The system features a Research Copilot that parses filings and market reports with evidence tracking, paired with a deterministic Portfolio Guardian.",
    problem:
      "Language models used in finance are notorious for hallucinations, unverified claims, and erratic decision traces. Without deterministic boundary guards and mathematical concentration checks, LLM reasoning cannot be safely applied in analytical workflows.",
    contribution:
      "Engineered the custom `agent_lab` evaluation pipeline and the deterministic Portfolio Guardian module. Implemented structured citation tracking requiring agents to attach verifiable source documents to every synthesis claim, and built stress-test scenario handlers.",
    approach:
      "Designed a strict two-stage pipeline: (1) Generative Multi-Agent Synthesis with Confidence Scoring where agents deliberate Bull/Bear perspectives; (2) Deterministic Portfolio Guardian that enforces mathematical constraints (Max Sector Weight <= 25%, Volatility VaR caps) completely independent of LLM whims.",
    technologies: [
      "Python",
      "LangChain / Custom Agent Harness",
      "Tauric Research TradingAgents Core",
      "NumPy / SciPy",
      "Structured JSON Validation (Pydantic)",
    ],
    architecture: [
      "Research Copilot: Multi-agent debate environment (Fundamental Analyst, Macro Analyst, Risk Skeptic).",
      "Evidence Tracker: Document citation index binding agent deductions to extracted filing passages.",
      "Portfolio Guardian: Hard-coded mathematical validator evaluating concentration, correlation matrices, and historical stress scenarios.",
      "Trace Visualizer: Exportable JSON decision traces outlining confidence intervals and failure flags.",
    ],
    limitations: [
      "Agent deliberation quality is dependent on the context window and token latency of underlying models.",
      "Stress testing scenarios rely on historical volatility benchmarks and do not predict unprecedented black-swan events.",
    ],
  },
  {
    id: "ideas-to-execution",
    title: "Ideas to Execution",
    subtitle: "Independent Venture Capital Storytelling & Interactive Founder Process",
    category: "Product & Design",
    categories: ["All", "Product & Design"],
    repoUrl: "https://github.com/aman482006-beep/ideas-to-execution",
    demoUrl: "https://aman482006-beep.github.io/ideas-to-execution/",
    statusTag: "Interactive Web Experience",
    disclaimer:
      "Independent Project Disclaimer: This project is an independent creative and technical exercise inspired by publicly available information about 8i Ventures. It is NOT the official website or product of 8i Ventures and is NOT affiliated with, sponsored by, or endorsed by 8i Ventures.",
    overview:
      "A high-polish editorial website exploring venture capital storytelling, founder onboarding, and interactive visual narratives. The platform translates early-stage investment philosophies into an engaging, responsive digital journey.",
    problem:
      "Most venture capital websites are static, text-heavy brochures that fail to convey the dynamic, founder-centric journey of early-stage venture building. Complex venture theses require intuitive, editorial presentation.",
    contribution:
      "Conceptualized the entire narrative structure, researched public early-stage venture methodologies, created the visual identity, and coded the interactive application from scratch using modern frontend animation standards.",
    approach:
      "Constructed an interactive 30-day founder execution roadmap featuring scroll-linked animations, dynamic phase transitions, and responsive typography that adapts seamlessly across mobile and ultra-wide screens.",
    technologies: [
      "HTML5 / TypeScript",
      "Tailwind CSS",
      "GSAP / ScrollTrigger",
      "Responsive Layout Grids",
      "GitHub Pages Deployment",
    ],
    architecture: [
      "Narrative Engine: Section-by-section visual progression illustrating the path from pre-seed validation to scale.",
      "Interactive 30-Day Timeline: Dynamic roadmap detailing founder sprints, milestone checklists, and venture partner touchpoints.",
      "Performance Layer: Asset optimization ensuring sub-second paint times and fluid 60fps scroll transitions.",
    ],
    limitations: [
      "Contains conceptual case studies based solely on public domain information rather than internal proprietary portfolio data.",
    ],
  },
  {
    id: "air-math-ai",
    title: "Air Math AI",
    subtitle: "Experimental Webcam Gesture Mathematics Workspace",
    category: "AI & Technology",
    categories: ["All", "AI & Technology"],
    repoUrl: "https://github.com/aman482006-beep/Airmath-AI",
    statusTag: "Secondary Engineering Experiment",
    isSecondary: true,
    overview:
      "An experimental webcam-driven computational workspace that enables users to draw mathematical equations in mid-air using hand gestures, extracting handwriting via OCR and solving expressions symbolically with SymPy.",
    problem:
      "Typing complex mathematical equations using standard keyboards or LaTeX markup is slow and unintuitive for students solving interactive algebraic problems in real time.",
    contribution:
      "Developed the webcam gesture tracking integration using MediaPipe landmarks, engineered the virtual drawing canvas with smoothing interpolation, and connected the browser client to a FastAPI backend running SymPy.",
    approach:
      "Processed hand landmark coordinates to detect pinch-and-draw gestures, rendered vector strokes onto an HTML5 canvas overlay, and piped rendered frame buffers over WebSockets for OCR recognition and mathematical parsing.",
    technologies: [
      "Python",
      "FastAPI",
      "MediaPipe / OpenCV",
      "SymPy (Symbolic Math)",
      "HTML5 Canvas",
      "WebSockets",
    ],
    architecture: [
      "Vision Pipeline: MediaPipe Hand tracking isolated to index fingertip coordinate delta tracking.",
      "Canvas Engine: Double-buffered HTML5 canvas smoothing handwritten strokes.",
      "Solving Engine: FastAPI backend parsing LaTeX/OCR output into SymPy trees for step-by-step simplification.",
    ],
    limitations: [
      "Gesture accuracy degrades under poor lighting conditions or low webcam frame rates.",
      "Symbolic OCR is currently limited to elementary algebra, polynomials, and single-variable calculus.",
    ],
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<string | null>("market-monitor");

  const filteredProjects = projects.filter((p) => p.categories.includes(activeFilter));

  const currentModalProject = projects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-[var(--tech-bg)] text-[var(--tech-text)] pt-36 pb-28 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>PORTFOLIO CASE STUDIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Selected Work
          </h1>
          <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed font-sans">
            Projects exploring financial markets, AI systems, analytical tools and digital experiences. Each case study documents the problem, my contribution, the approach, and what I learned.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#232936]">
          {(["All", "Finance", "AI & Technology", "Product & Design"] as ProjectCategory[]).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--tech-accent)] text-[#0B0D12] font-bold shadow-[0_0_15px_rgba(255,133,71,0.3)]"
                    : "bg-[var(--tech-card)] text-[var(--tech-text-muted)] hover:text-white border border-[#232936] hover:border-white/20"
                }`}
              >
                {filter}
                <span className="ml-2 text-[10px] opacity-75 font-normal">
                  ({filter === "All" ? projects.length : projects.filter((p) => p.categories.includes(filter)).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-8 rounded-xl bg-[var(--tech-card)] border border-[#232936] hover:border-[var(--tech-accent)]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2.5 py-1 rounded border border-[var(--tech-accent)]/20">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-2 py-0.5 rounded border border-[#232936]">
                    {proj.statusTag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-wide text-white mb-1 group-hover:text-[var(--tech-accent)] transition-colors">
                  {proj.title}
                </h2>
                <div className="text-xs font-mono text-[var(--tech-accent)] mb-4">{proj.subtitle}</div>

                <p className="text-[var(--tech-text-muted)] text-sm leading-relaxed mb-6 font-sans">
                  {proj.overview}
                </p>

                {proj.attribution && (
                  <div className="mb-4 p-3 rounded-md bg-[var(--tech-bg)] border border-[#232936] text-[11px] font-mono text-[var(--tech-text-muted)] leading-relaxed">
                    {proj.attribution}
                  </div>
                )}

                {proj.disclaimer && (
                  <div className="mb-6 p-3 rounded-md bg-[var(--tech-bg)] border border-[#232936] text-[11px] font-mono text-[var(--tech-text-muted)] leading-relaxed">
                    {proj.disclaimer}
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[#232936]"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.technologies.length > 5 && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[#232936]">
                      +{proj.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#232936]">
                  <button
                    onClick={() => setSelectedProject(proj.id)}
                    className="px-4 py-2 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] text-xs font-mono uppercase font-bold tracking-wider hover:bg-[var(--tech-accent-hover)] transition-colors cursor-pointer"
                  >
                    Read Full Case Study
                  </button>

                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[var(--tech-accent)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}

                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--tech-accent)] hover:underline"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Viewer */}
        {currentModalProject && (
          <div id="case-study-detail" className="p-8 sm:p-12 rounded-2xl bg-[var(--tech-card)] border border-[var(--tech-accent)]/30 scroll-mt-32">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#232936]">
              <div>
                <span className="text-xs font-mono text-[var(--tech-accent)] uppercase tracking-wider block mb-1">
                  CASE STUDY ANALYSIS · {currentModalProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
                  {currentModalProject.title}
                </h3>
                <div className="text-sm font-mono text-[var(--tech-text-muted)] mt-1">
                  {currentModalProject.subtitle}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={currentModalProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[var(--tech-bg)] border border-[#232936] text-white hover:border-white/30 text-xs font-mono flex items-center gap-2"
                >
                  <span>View Repository</span>
                  <span className="text-[var(--tech-accent)]">↗</span>
                </a>
                {currentModalProject.demoUrl && (
                  <a
                    href={currentModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs font-bold hover:bg-[var(--tech-accent-hover)] flex items-center gap-2"
                  >
                    <span>Launch Live Demo</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>

            {currentModalProject.attribution && (
              <div className="p-4 rounded-lg bg-[var(--tech-bg)] border border-amber-500/30 text-amber-200/90 text-xs font-mono leading-relaxed mb-8">
                {currentModalProject.attribution}
              </div>
            )}

            {currentModalProject.disclaimer && (
              <div className="p-4 rounded-lg bg-[var(--tech-bg)] border border-blue-500/30 text-blue-200/90 text-xs font-mono leading-relaxed mb-8">
                {currentModalProject.disclaimer}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-xl bg-[var(--tech-bg)] border border-[#232936]">
                <h4 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--tech-accent)]" />
                  Problem & Motivation
                </h4>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  {currentModalProject.problem}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--tech-bg)] border border-[#232936]">
                <h4 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--tech-accent)]" />
                  My Individual Contribution
                </h4>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  {currentModalProject.contribution}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[var(--tech-bg)] border border-[#232936] mb-8">
              <h4 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--tech-accent)]" />
                Technical & Analytical Approach
              </h4>
              <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans mb-4">
                {currentModalProject.approach}
              </p>

              <div className="mt-4 pt-4 border-t border-[#232936]/60">
                <div className="text-xs font-mono uppercase text-white/50 tracking-wider mb-3">System Architecture & Modules</div>
                <ul className="space-y-2">
                  {currentModalProject.architecture.map((item, idx) => (
                    <li key={idx} className="text-xs font-mono text-[var(--tech-text-muted)] flex items-start gap-2">
                      <span className="text-[var(--tech-accent)] mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-[var(--tech-bg)] border border-[#232936]">
                <h4 className="text-lg font-bold font-display text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--tech-accent)]" />
                  Technologies & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-[var(--tech-card)] text-white border border-[#232936]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[var(--tech-bg)] border border-[#232936]">
                <h4 className="text-lg font-bold font-display text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Limitations & Future Work
                </h4>
                <ul className="space-y-2">
                  {currentModalProject.limitations.map((lim, idx) => (
                    <li key={idx} className="text-xs font-mono text-[var(--tech-text-muted)] flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">›</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
