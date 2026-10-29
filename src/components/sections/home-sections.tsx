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
    <section id="pillars" className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-[var(--tech-bg)] border-t border-[rgba(224,27,27,0.28)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>THE THREE PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white max-w-2xl leading-[1.1]">
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
              className="group relative p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] hover:border-[var(--tech-accent)]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-2.5 py-1 rounded border border-[rgba(224,27,27,0.28)]">
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
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[rgba(224,27,27,0.28)]"
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
  return (
    <section id="work-preview" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-[var(--tech-bg-secondary)] border-t border-[rgba(224,27,27,0.28)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>FEATURED APP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Fokus App
          </h2>
          <p className="text-[var(--tech-text-muted)] text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            A focus app for Windows, available as a free download from the Microsoft Store. More projects will be added here when they are ready to share.
          </p>
        </div>

        <div className="max-w-3xl p-7 sm:p-9 rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] hover:border-[var(--tech-accent)]/50 transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center shrink-0 text-[var(--tech-accent)]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2.5 py-1 rounded border border-[var(--tech-accent)]/20">
                  Windows App
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-text-muted)]">
                  Free download
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display tracking-wide text-white mb-2 group-hover:text-[var(--tech-accent)] transition-colors">
                Fokus App
              </h3>
              <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed mb-5">
                Find Fokus App on the Microsoft Store and install it on Windows.
              </p>
              <a
                href="https://apps.microsoft.com/detail/9p7njldq8gkk?hl=en-GB&gl=IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-fit px-5 py-3 min-h-11 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all duration-200"
              >
                <span>Get Fokus App</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreatorPreview() {
  return (
    <section id="creator-preview" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-[var(--tech-bg)] border-t border-[rgba(224,27,27,0.28)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>CONTENT CREATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Learning finance. Building things. Sharing the journey.
            </h2>
            <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed mb-8 font-sans">
              I create finance and career-focused content to make complex ideas easier to understand. This is where I document what I learn and share useful resources, concepts and experiments.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/creator"
                className="px-6 py-3 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all duration-200"
              >
                Explore Creator Hub
              </Link>
              <a
                href="https://www.youtube.com/@AmanJain-4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <span>YouTube</span>
                <span className="text-[var(--tech-accent)]">↗</span>
              </a>
              <a
                href="https://www.instagram.com/aman.ja1n/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <span>Instagram</span>
                <span className="text-[var(--tech-accent)]">↗</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-6 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center shrink-0 text-[var(--tech-accent)] font-mono font-bold">
                01
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-xl mb-1">Finance Education</h3>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  Financial concepts, mutual funds, investment fundamentals, and clear explainers breaking down how markets actually operate.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center shrink-0 text-[var(--tech-accent)] font-mono font-bold">
                02
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-xl mb-1">Learning & Careers</h3>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans">
                  CFA-related student preparation, career roadmaps, finance certifications, and curated study frameworks.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center shrink-0 text-[var(--tech-accent)] font-mono font-bold">
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
    <section id="recruiter-preview" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-20 bg-[var(--tech-bg-secondary)] border-t border-[rgba(224,27,27,0.28)]">
      <div className="max-w-7xl mx-auto p-5 sm:p-12 rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] relative overflow-hidden">
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
              className="w-full sm:w-auto justify-center px-5 sm:px-8 py-3.5 sm:py-4 min-h-11 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] text-center transition-all duration-200 shadow-[0_0_20px_rgba(224,27,27,0.25)]"
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
    <section id="contact-preview" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-[var(--tech-bg)] border-t border-[rgba(224,27,27,0.28)]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-6">
          Have something interesting in mind?
        </h2>
        <p className="text-[var(--tech-text-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-sans">
          Whether it&apos;s a professional opportunity, a project collaboration, or a creator partnership, let&apos;s connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:jain.aman3789@gmail.com"
            className="px-8 py-3.5 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(224,27,27,0.2)]"
          >
            Email: jain.aman3789@gmail.com
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3.5 min-h-11 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/40 font-mono text-xs uppercase tracking-wider transition-all duration-200"
          >
            Open Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
}
