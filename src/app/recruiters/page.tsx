import type { Metadata } from "next";
import Link from "next/link";
import { currentlyOpenTo } from "@/data/profile";
import { ResumeDownload } from "@/components/sections/resume-download";

export const metadata: Metadata = {
  title: "Recruiters | Aman Jain",
  description: "Education, internships, CFA candidate status, skills and selected qualifications for recruiters and collaborators.",
  alternates: { canonical: "/recruiters" },
};

export default function RecruitersPage() {
  const skillsCategories = [
    {
      category: "Finance & Analytics",
      skills: [
        "Financial Analysis",
        "Financial Modelling Fundamentals",
        "Valuation Fundamentals",
        "Portfolio Risk & Return Analysis",
        "Market Research",
        "Financial Data Analysis",
      ],
    },
    {
      category: "Business & Commercial",
      skills: [
        "Commercial Analysis",
        "Finance-Related Business Problems",
        "Sales & Marketing Analytics",
        "Competitive Market Research",
      ],
    },
    {
      category: "Technology & Software",
      skills: [
        "Microsoft Excel (Advanced Formulas)",
        "Python (Pandas, NumPy, FastAPI)",
        "GitHub & Version Control",
        "Financial Data Workflows & APIs",
        "AI-Assisted Development",
        "Full-Stack Web (Next.js, PostgreSQL)",
      ],
    },
    {
      category: "Content & Communication",
      skills: [
        "Finance Content Creation",
        "Explaining Technical & Financial Concepts",
        "Video Editing (DaVinci Resolve)",
        "Visual Presentation (Canva)",
      ],
    },
  ];

  const credentials = [
    {
      title: "Learn to Analyse Stocks",
      issuer: "SOIC (School of Intrinsic Compounding)",
      focus: "Fundamental stock analysis, business moat evaluation, and reading Indian annual reports.",
    },
    {
      title: "Investment Banking Simulator",
      issuer: "Financial Valuation Simulation",
      focus: "Core transaction mechanics, DCF projections, and comparable company analysis.",
    },
    {
      title: "Financial Modeling & Excel Analysis",
      issuer: "Professional Coursework",
      focus: "Dynamic three-statement modeling, sensitivity tables, and scenario forecasting.",
    },
    {
      title: "Private Equity & Venture Capital Course",
      issuer: "Academic & Professional Seminar",
      focus: "Term sheets, capitalization tables, deal sourcing, and investment committee evaluations.",
    },
    {
      title: "Investor Awareness & Market Regulations",
      issuer: "SEBI / NISM Programs",
      focus: "Regulatory guidelines, investor protection protocols, and financial market integrity.",
    },
  ];

  return (
    <div className="aj-editorial-page aj-recruiters-page min-h-screen bg-[var(--tech-bg)] text-[var(--tech-text)] pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Introduction */}
        <div className="mb-14 pb-10 border-b border-[rgba(224,27,27,0.28)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>EXECUTIVE BRIEFING · RECRUITERS & FOUNDERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-4">
            Recruiters
          </h1>
          <p className="text-lg font-mono text-[var(--tech-accent)] mb-6">
            Education, professional experience, skills and selected qualifications.
          </p>
          <p className="text-[var(--tech-text-muted)] text-base leading-relaxed max-w-3xl font-sans">
            I&apos;m <strong className="text-white font-semibold">Aman Jain</strong>, a BBA student at CHRIST (Deemed to be University) in Bengaluru specializing in Finance & Marketing Analytics. My interests span finance, analytical tools, fintech, technology and educational content. This page brings together my academic background, experience and selected work in one structured location.
          </p>
          <p className="aj-currently-line"><strong>Currently:</strong> {currentlyOpenTo}</p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="mailto:jain.aman3789@gmail.com?subject=Opportunity%20Inquiry%20-%20Aman%20Jain"
              className="px-6 py-3 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all shadow-[0_0_20px_rgba(224,27,27,0.2)]"
            >
              Get In Touch Directly
            </a>
            <a
              href="https://www.linkedin.com/in/amanmalu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>LinkedIn Profile</span>
              <span className="text-[var(--tech-accent)]">↗</span>
            </a>
            <a
              href="https://github.com/aman482006-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>GitHub</span>
              <span className="text-[var(--tech-accent)]">↗</span>
            </a>
            <ResumeDownload />
          </div>
        </div>

        {/* Section A: Professional Summary */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">01 · OVERVIEW</div>
          <h2 className="text-2xl font-bold font-display text-white mb-4">Professional Summary</h2>
          <div className="p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] text-base leading-relaxed text-[var(--tech-text-muted)] font-sans">
            I&apos;m a BBA student focused on Finance & Marketing Analytics, with internship exposure in finance and commercial business environments. Alongside my academic work, I build analytical and technology-oriented projects and create finance-focused educational content. My goal is to apply quantitative discipline, business curiosity, and practical engineering skills to financial analysis, fintech, or investment research teams.
          </div>
        </div>

        {/* Section B & C: Education & CFA Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Section B: Education */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">02 · ACADEMICS</div>
            <h2 className="text-2xl font-bold font-display text-white mb-4">Education</h2>
            <div className="p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] h-[calc(100%-3rem)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2.5 py-0.5 rounded border border-[var(--tech-accent)]/20 mb-3 inline-block">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  CHRIST (Deemed to be University)
                </h3>
                <div className="text-sm font-mono text-[var(--tech-accent)] mb-3">
                  Bengaluru, India
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2">
                  BBA — Finance & Marketing Analytics
                </div>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans mb-4">
                  Rigorous curriculum connecting corporate finance, investment analysis, econometrics, statistical modeling, and business marketing strategy.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(224,27,27,0.28)] flex items-center justify-between text-xs font-mono text-[var(--tech-text-muted)]">
                <span>Period: 2024 – 2027</span>
                <span className="text-emerald-400 font-semibold">Expected: 2027</span>
              </div>
            </div>
          </div>

          {/* Section C: CFA Program */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">03 · PROFESSIONAL CREDENTIALS</div>
            <h2 className="text-2xl font-bold font-display text-white mb-4">CFA Program</h2>
            <div className="p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] h-[calc(100%-3rem)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2.5 py-0.5 rounded border border-[var(--tech-accent)]/20 mb-3 inline-block">
                  Active Candidate Status
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  CFA Institute
                </h3>
                <div className="text-sm font-mono text-[var(--tech-accent)] mb-3">
                  Chartered Financial Analyst Program
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2">
                  CFA Level II Candidate
                </div>
                <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans mb-4">
                  Focused on asset valuation (equity, fixed income, derivatives, alternative investments), financial reporting & analysis, corporate issuers, and ethical standards.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(224,27,27,0.28)] text-[11px] font-mono text-white/50">
                <span>Note: Current registration flagged as Level II candidate in accordance with CFA Institute compliance standards.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section D: Professional Experience */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">04 · WORK HISTORY</div>
          <h2 className="text-2xl font-bold font-display text-white mb-6">Professional Experience</h2>
          
          <div className="space-y-6">
            {/* Internship 1: Nuvama Wealth */}
            <div className="p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] hover:border-[var(--tech-accent)]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white">Nuvama Wealth</h3>
                  <div className="text-sm font-mono text-[var(--tech-accent)] font-semibold">Finance Intern</div>
                </div>
                <div className="text-xs font-mono text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-3 py-1 rounded border border-[rgba(224,27,27,0.28)] w-fit">
                  July 2026 – August 2026 · Bengaluru, India
                </div>
              </div>
              <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans">
                Finance internship engaging with wealth management operations, client investment structures, and market research workflows at one of India&apos;s leading wealth advisory institutions.
              </p>
            </div>

            {/* Internship 2: DAGAS */}
            <div className="p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] hover:border-[var(--tech-accent)]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white">DAGAS</h3>
                  <div className="text-sm font-mono text-[var(--tech-accent)] font-semibold">Finance Intern</div>
                </div>
                <div className="text-xs font-mono text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-3 py-1 rounded border border-[rgba(224,27,27,0.28)] w-fit">
                  April 2026 – July 2026 · Bengaluru, India
                </div>
              </div>
              <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans">
                Commercial finance exposure within the Sales & Marketing Department in the tyre manufacturing and distribution business, including exposure to the RALCO / Ralson brand distribution networks and trade credit dynamics.
              </p>
            </div>
          </div>
        </div>

        {/* Section E: Skills */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">05 · COMPETENCIES</div>
          <h2 className="text-2xl font-bold font-display text-white mb-6">Categorized Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsCategories.map((group) => (
              <div key={group.category} className="p-6 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)]">
                <h3 className="text-lg font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--tech-accent)]" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[rgba(224,27,27,0.28)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section F: Certifications & Courses */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">06 · VERIFIED LEARNING</div>
          <h2 className="text-2xl font-bold font-display text-white mb-6">Certifications & Specialized Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="p-6 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[var(--tech-accent)] uppercase tracking-wider mb-2">
                    {c.issuer}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2">{c.title}</h3>
                  <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans">{c.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section H & J: Résumé & Contact for Opportunities */}
        <div className="p-5 sm:p-12 rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-3">07 · NEXT STEPS</div>
            <h2 className="text-3xl font-bold font-display text-white mb-4">
              Let&apos;s connect.
            </h2>
            <p className="text-sm sm:text-base text-[var(--tech-text-muted)] leading-relaxed font-sans mb-8">
              For professional opportunities, internships, analyst roles, project collaborations, or to request a full official curriculum vitae, feel free to reach out directly.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:jain.aman3789@gmail.com?subject=Professional%20Opportunity%20-%20Aman%20Jain"
                className="px-6 py-3.5 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all shadow-[0_0_20px_rgba(224,27,27,0.2)]"
              >
                Request Official Résumé via Email
              </a>
              <a
                href="https://www.linkedin.com/in/amanmalu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
