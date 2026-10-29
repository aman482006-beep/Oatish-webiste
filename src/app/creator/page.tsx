"use client";

import Link from "next/link";

interface ContentItem {
  id: string;
  title: string;
  category: "Finance Education" | "Learning & Careers" | "Tools & Experiments";
  platform: "YouTube" | "Instagram";
  url: string;
  summary: string;
  topics: string[];
}

const featuredContent: ContentItem[] = [
  {
    id: "content-1",
    title: "Understanding Mutual Funds & Expense Ratios: A Practical Breakdown",
    category: "Finance Education",
    platform: "YouTube",
    url: "https://www.youtube.com/@AmanJain-4",
    summary:
      "A clear walk-through analyzing how expense ratios, tracking errors, and index composition influence long-term compound returns for beginner and intermediate retail investors.",
    topics: ["Mutual Funds", "Compound Interest", "Retail Investing"],
  },
  {
    id: "content-2",
    title: "CFA Candidate Preparation: Structuring a Daily Study System",
    category: "Learning & Careers",
    platform: "YouTube",
    url: "https://www.youtube.com/@AmanJain-4",
    summary:
      "Documenting personal revision routines, question bank scheduling, and ethics framework review tactics for finance students balancing academic coursework with exam prep.",
    topics: ["CFA Prep", "Study Systems", "Time Allocation"],
  },
  {
    id: "content-3",
    title: "Visualizing Market Breadth with Python & Financial APIs",
    category: "Tools & Experiments",
    platform: "YouTube",
    url: "https://www.youtube.com/@AmanJain-4",
    summary:
      "Demonstrating how to fetch NSE ticker series, calculate advance/decline distribution, and inspect relative volume surges using Python scripts and lightweight web interfaces.",
    topics: ["Python", "Market Data", "Financial Dashboards"],
  },
  {
    id: "content-4",
    title: "Deconstructing Balance Sheets: The Quick Ratio vs. Working Capital",
    category: "Finance Education",
    platform: "Instagram",
    url: "https://www.instagram.com/aman.ja1n/",
    summary:
      "Carousel format dissecting corporate liquidity metrics with real balance sheet snippets from Indian listed firms.",
    topics: ["Balance Sheets", "Liquidity", "Financial Ratios"],
  },
  {
    id: "content-5",
    title: "5 Useful Tools for Finance Students in 2026",
    category: "Tools & Experiments",
    platform: "Instagram",
    url: "https://www.instagram.com/aman.ja1n/",
    summary:
      "Curated walkthrough of open-source financial modeling spreadsheets, SEC/MCA filing scrapers, and terminal layouts that improve research speed.",
    topics: ["Productivity", "Finance Tools", "Student Resources"],
  },
  {
    id: "content-6",
    title: "The Reality of Finance Internships: What Actually Moves the Needle",
    category: "Learning & Careers",
    platform: "Instagram",
    url: "https://www.instagram.com/aman.ja1n/",
    summary:
      "Reflections on working with real financial datasets, learning corporate workflows, and building practical domain knowledge beyond textbook formulas.",
    topics: ["Career Roadmaps", "Internships", "Skill Building"],
  },
];

export default function CreatorPage() {
  return (
    <div className="min-h-screen bg-[var(--tech-bg)] text-[var(--tech-text)] pt-36 pb-28 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section A: Introduction */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>CONTENT & CREATOR HUB</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Finance, learning and useful ideas — shared in public.
          </h1>
          <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed font-sans mb-8">
            I create educational content around finance, investing concepts, career resources and the tools I explore along the way. My goal is to make useful ideas easier to understand and apply.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.youtube.com/@AmanJain-4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,133,71,0.25)]"
            >
              <span>Subscribe on YouTube</span>
              <span className="font-sans font-bold">↗</span>
            </a>
            <a
              href="https://www.instagram.com/aman.ja1n/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[#232936] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Follow on Instagram</span>
              <span className="text-[var(--tech-accent)] font-bold">↗</span>
            </a>
          </div>
        </div>

        {/* Section B: Content Categories */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6">Content Pillars</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-[var(--tech-card)] border border-[#232936] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center text-[var(--tech-accent)] mb-6 font-mono font-bold text-lg">
                  01
                </div>
                <h2 className="text-2xl font-bold font-display text-white mb-3">Finance Education</h2>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans mb-6">
                  Financial concepts, mutual funds, investment fundamentals, valuation frameworks, and finance explainers that bridge textbook theory with practical market mechanics.
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--tech-accent)]">Key format: Breakdowns & Explainers</div>
            </div>

            <div className="p-8 rounded-xl bg-[var(--tech-card)] border border-[#232936] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center text-[var(--tech-accent)] mb-6 font-mono font-bold text-lg">
                  02
                </div>
                <h2 className="text-2xl font-bold font-display text-white mb-3">Learning & Careers</h2>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans mb-6">
                  CFA-related preparation strategies, undergraduate career roadmaps, analytical certifications, and curated study templates for ambitious students.
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--tech-accent)]">Key format: Guides & Study Blueprints</div>
            </div>

            <div className="p-8 rounded-xl bg-[var(--tech-card)] border border-[#232936] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[#232936] flex items-center justify-center text-[var(--tech-accent)] mb-6 font-mono font-bold text-lg">
                  03
                </div>
                <h2 className="text-2xl font-bold font-display text-white mb-3">Tools & Experiments</h2>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans mb-6">
                  Practical software walkthroughs, AI-assisted development tools, market dashboards, and open-source automation workflows relevant to finance analysis.
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--tech-accent)]">Key format: Demos & Tutorials</div>
            </div>
          </div>
        </div>

        {/* Section C: Featured Content */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-2">CATALOGUE</div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Recent Episodes & Posts</h2>
            </div>
            <div className="text-xs font-mono text-[var(--tech-text-muted)]">
              Direct links to official YouTube & Instagram posts
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-[var(--tech-card)] border border-[#232936] hover:border-[var(--tech-accent)]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2 py-0.5 rounded border border-[var(--tech-accent)]/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--tech-text-muted)] bg-[var(--tech-bg)] px-2 py-0.5 rounded border border-[#232936]">
                      {item.platform}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[var(--tech-accent)] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--tech-text-muted)] leading-relaxed font-sans mb-6">
                    {item.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--tech-bg)] text-[var(--tech-text-muted)] border border-[#232936]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#232936] flex items-center justify-between text-xs font-mono text-[var(--tech-text-muted)] group-hover:text-white transition-colors">
                    <span>Watch / View Post</span>
                    <span className="text-[var(--tech-accent)] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Section E: Partnerships */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[var(--tech-card)] border border-[#232936] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-bg)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
              <span>COLLABORATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
              Let&apos;s create something useful.
            </h2>
            <p className="text-[var(--tech-text-muted)] text-sm sm:text-base leading-relaxed font-sans mb-8">
              I&apos;m open to relevant collaborations across finance education, technology, student resources, career development and other topics that genuinely fit my audience.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:jain.aman3789@gmail.com?subject=Collaboration%20Inquiry%20-%20Aman%20Jain"
                className="px-6 py-3.5 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all shadow-[0_0_20px_rgba(255,133,71,0.2)]"
              >
                Discuss a Collaboration
              </a>
              <span className="text-xs font-mono text-[var(--tech-text-muted)]">
                Direct inquiry: <strong className="text-white">jain.aman3789@gmail.com</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
