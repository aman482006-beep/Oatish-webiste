"use client";

import Link from "next/link";
import Image from "next/image";

export function ThreePillars() {
  const pillars = [
    {
      title: "FINANCE",
      tag: "ANALYSIS & MARKETS",
      description:
        "Exploring financial analysis, financial markets, investment concepts, risk, and the business problems behind the numbers.",
      skills: ["Financial Analysis", "Valuation Fundamentals", "Portfolio Risk", "Market Breadth"],
      icon: (
        <svg className="w-6 h-6 text-[var(--tech-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "BUILD",
      tag: "AI & SOFTWARE",
      description:
        "Experimenting with AI, financial-data tools, dashboards, software projects, and practical automation.",
      skills: ["FastAPI & Python", "Next.js & React", "Multi-Agent Workflows", "Data Pipelines"],
      icon: (
        <svg className="w-6 h-6 text-[var(--tech-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "CREATE",
      tag: "CONTENT & COMMUNITY",
      description:
        "Sharing what I learn through finance education, explanatory videos, career resources, and digital content.",
      skills: ["Finance Explainers", "Visual Breakdowns", "Student Guides", "Video Production"],
      icon: (
        <svg className="w-6 h-6 text-[var(--tech-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pillars" className="relative py-24 px-6 sm:px-12 lg:px-20 bg-[var(--tech-bg)] border-t border-[#232936]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>THE THREE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white max-w-2xl leading-[1.1]">
              Finance × Technology × Communication
            </h2>
          </div>
          <p className="text-[var(--tech-text-muted)] text-sm sm:text-base max-w-md font-mono leading-relaxed">
            &ldquo;I study finance. I build with technology. I create to make ideas useful.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-xl bg-[var(--tech-card)] border border-[#232936] hover:border-[var(--tech-accent)]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-2.5 py-1 rounded border border-[#232936]">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display tracking-wide text-white mb-3 group-hover:text-[var(--tech-accent)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[var(--tech-text-muted)] text-sm leading-relaxed mb-6 font-sans">
                  {pillar.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase text-white/50 tracking-wider mb-2">Focus Areas</div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[#232936]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SelectedWorkPreview() {
  const projects = [
    {
      title: "Market Monitor",
      subtitle: "Indian Equity-Market Intelligence Terminal",
      category: "Finance & Data Engineering",
      badge: "Flagship Project",
      description:
        "Full-stack market intelligence terminal ingesting Indian equity data into PostgreSQL with FastAPI backend & Next.js UI. Features market breadth analytics, advance/decline distribution, relative volume scanners, and a deterministic market-regime classification engine.",
      tags: ["FastAPI", "PostgreSQL", "Next.js", "Financial Analytics", "Python"],
      repo: "https://github.com/aman482006-beep/market-monitor",
      demo: null,
      disclaimer: null,
    },
    {
      title: "Ideas to Execution",
      subtitle: "Independent VC Storytelling & Interactive Founder Process",
      category: "Product & Design",
      badge: "Interactive Experience",
      description:
        "An independent interactive experience exploring venture-capital research, editorial UI design, portfolio company presentation, and an interactive 30-day founder-process timeline with fluid animations.",
      tags: ["Next.js", "GSAP & Motion", "Venture Capital", "Interactive UX"],
      repo: "https://github.com/aman482006-beep/ideas-to-execution",
      demo: "https://aman482006-beep.github.io/ideas-to-execution/",
      disclaimer:
        "Disclaimer: Independent exploratory project inspired by public information about 8i Ventures. Not affiliated with, endorsed by, or operated by 8i Ventures.",
    },

  ];

  return (
    <section id="work-preview" className="py-24 px-6 sm:px-12 lg:px-20 bg-[var(--tech-bg-secondary)] border-t border-[#232936]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-[1.1]">
              Selected Work
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--tech-accent)] text-[var(--tech-accent)] hover:bg-[var(--tech-accent)] hover:text-[#0B0D12] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 w-fit"
          >
            <span>View Case Studies</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="p-8 rounded-xl bg-[var(--tech-card)] border border-[#232936] hover:border-[var(--tech-accent)]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2.5 py-1 rounded border border-[var(--tech-accent)]/20">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-2 py-0.5 rounded border border-[#232936]">
                    {proj.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-wide text-white mb-1 group-hover:text-[var(--tech-accent)] transition-colors">
                  {proj.title}
                </h3>
                <div className="text-xs font-mono text-[var(--tech-accent)] mb-4">{proj.subtitle}</div>

                <p className="text-[var(--tech-text-muted)] text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {proj.disclaimer && (
                  <div className="mb-6 p-3 rounded-md bg-[var(--tech-bg)] border border-[#232936] text-[11px] font-mono text-[var(--tech-text-muted)] leading-normal">
                    {proj.disclaimer}
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[#232936]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#232936]">
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[var(--tech-accent)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Repository</span>
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--tech-accent)] hover:underline"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                  <Link
                    href="/work"
                    className="ml-auto text-xs font-mono text-[var(--tech-text-muted)] hover:text-white transition-colors"
                  >
                    Full Case Study →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CreatorPreview() {
  return (
    <section id="creator-preview" className="py-24 px-6 sm:px-12 lg:px-20 bg-[var(--tech-bg)] border-t border-[#232936]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>CONTENT CREATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Learning finance. Building things. Sharing the journey.
            </h2>
            <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed mb-8 font-sans">
              I create finance and career-focused content to make complex ideas easier to understand. This is where I document what I learn and share useful resources, concepts and experiments.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/creator"
                className="px-6 py-3 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all duration-200"
              >
                Explore Creator Hub
              </Link>
              <a
                href="https://www.youtube.com/@AmanJain-4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-[#232936] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <span>YouTube</span>
                <span className="text-[var(--tech-accent)]">↗</span>
              </a>
              <a
                href="https://www.instagram.com/aman.ja1n/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-[#232936] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <span>Instagram</span>
                <span className="text-[var(--tech-accent)]">↗</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-[var(--tech-card)] border border-[#232936] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center shrink-0 text-[var(--tech-accent)] font-mono font-bold">
                01
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-xl mb-1">Finance Education</h3>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  Financial concepts, mutual funds, investment fundamentals, and clear explainers breaking down how markets actually operate.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[var(--tech-card)] border border-[#232936] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center shrink-0 text-[var(--tech-accent)] font-mono font-bold">
                02
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-xl mb-1">Learning & Careers</h3>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  CFA-related student preparation, career roadmaps, finance certifications, and curated study frameworks.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[var(--tech-card)] border border-[#232936] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center shrink-0 text-[var(--tech-accent)] font-mono font-bold">
                03
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-xl mb-1">Tools & Experiments</h3>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  Software tools, AI workflows, dashboards, and code experiments built to test ideas in the open.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecruiterPreview() {
  return (
    <section id="recruiter-preview" className="py-20 px-6 sm:px-12 lg:px-20 bg-[var(--tech-bg-secondary)] border-t border-[#232936]">
      <div className="max-w-7xl mx-auto p-8 sm:p-12 rounded-2xl bg-[var(--tech-card)] border border-[#232936] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(224,27,27,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-bg)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>FOR HIRING MANAGERS & FOUNDERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4 leading-tight">
              Want to know more about my professional background?
            </h2>
            <p className="text-[var(--tech-text-muted)] text-sm sm:text-base leading-relaxed font-sans">
              Explore my education at CHRIST University, CFA Level II candidacy, internships at Nuvama Wealth & DAGAS, technical skills, and verified qualifications in one structured location.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="/recruiters"
              className="px-8 py-4 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] text-center transition-all duration-200 shadow-[0_0_20px_rgba(224,27,27,0.25)]"
            >
              Explore Recruiters Section →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPreview() {
  return (
    <section id="contact-preview" className="py-24 px-6 sm:px-12 lg:px-20 bg-[var(--tech-bg)] border-t border-[#232936]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-6">
          Have something interesting in mind?
        </h2>
        <p className="text-[var(--tech-text-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-sans">
          Whether it&apos;s a professional opportunity, a project collaboration, or a creator partnership, let&apos;s connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:jain.aman3789@gmail.com"
            className="px-8 py-3.5 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(224,27,27,0.2)]"
          >
            Email: jain.aman3789@gmail.com
          </a>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-lg border border-[#232936] text-white hover:border-white/40 font-mono text-xs uppercase tracking-wider transition-all duration-200"
          >
            Open Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
}
