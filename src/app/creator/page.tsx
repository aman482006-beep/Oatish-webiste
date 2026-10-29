"use client";

import { LatestVideos } from "@/components/sections/latest-videos";

export default function CreatorPage() {
  return (
    <div className="min-h-screen bg-[var(--tech-bg)] text-[var(--tech-text)] pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section A: Introduction */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>CONTENT & CREATOR HUB</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Finance, learning and useful ideas — shared in public.
          </h1>
          <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed font-sans mb-8">
            I create educational content around finance, investing concepts, career resources and the tools I explore along the way. My goal is to make useful ideas easier to understand and apply.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://www.youtube.com/@AmanJain-4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(224,27,27,0.25)]"
            >
              <span>Subscribe on YouTube</span>
              <span className="font-sans font-bold">↗</span>
            </a>
            <a
              href="https://www.instagram.com/aman.ja1n/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Follow on Instagram</span>
              <span className="text-[var(--tech-accent)] font-bold">↗</span>
            </a>
          </div>
        </div>

        <LatestVideos />

        {/* Section B: Content Categories */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6">Content Pillars</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center text-[var(--tech-accent)] mb-6 font-mono font-bold text-lg">
                  01
                </div>
                <h2 className="text-2xl font-bold font-display text-white mb-3">Finance Education</h2>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans mb-6">
                  Financial concepts, mutual funds, investment fundamentals, valuation frameworks, and finance explainers that bridge textbook theory with practical market mechanics.
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--tech-accent)]">Key format: Breakdowns & Explainers</div>
            </div>

            <div className="p-5 sm:p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center text-[var(--tech-accent)] mb-6 font-mono font-bold text-lg">
                  02
                </div>
                <h2 className="text-2xl font-bold font-display text-white mb-3">Learning & Careers</h2>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed font-sans mb-6">
                  CFA-related preparation strategies, undergraduate career roadmaps, analytical certifications, and curated study templates for ambitious students.
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--tech-accent)]">Key format: Guides & Study Blueprints</div>
            </div>

            <div className="p-5 sm:p-5 sm:p-8 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center text-[var(--tech-accent)] mb-6 font-mono font-bold text-lg">
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

        {/* Section E: Partnerships */}
        <div className="p-5 sm:p-12 rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] relative overflow-hidden">
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

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:jain.aman3789@gmail.com?subject=Collaboration%20Inquiry%20-%20Aman%20Jain"
                className="px-6 py-3.5 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all shadow-[0_0_20px_rgba(224,27,27,0.2)]"
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
