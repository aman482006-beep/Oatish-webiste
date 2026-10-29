"use client";

import { useState } from "react";

type InquiryCategory = "Professional Opportunities" | "Project Collaborations" | "Creator & Brand Partnerships" | "General";

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<InquiryCategory>("Professional Opportunities");
  const [copied, setCopied] = useState(false);

  const categories: { label: InquiryCategory; subject: string; bodyTemplate: string }[] = [
    {
      label: "Professional Opportunities",
      subject: "Professional Opportunity Inquiry - Aman Jain",
      bodyTemplate: "Hi Aman,\n\nI came across your portfolio and would like to discuss an opportunity regarding...",
    },
    {
      label: "Project Collaborations",
      subject: "Project Collaboration - Aman Jain",
      bodyTemplate: "Hi Aman,\n\nI saw your finance and technology work and wanted to explore collaborating on...",
    },
    {
      label: "Creator & Brand Partnerships",
      subject: "Creator Collaboration - Aman Jain",
      bodyTemplate: "Hi Aman,\n\nI follow your educational content on finance/tech and would love to propose a collaboration around...",
    },
    {
      label: "General",
      subject: "Connecting with Aman Jain",
      bodyTemplate: "Hi Aman,\n\nWanted to reach out after exploring your website...",
    },
  ];

  const currentCategory = categories.find((c) => c.label === selectedCategory) || categories[0];
  const mailtoHref = `mailto:jain.aman3789@gmail.com?subject=${encodeURIComponent(
    currentCategory.subject
  )}&body=${encodeURIComponent(currentCategory.bodyTemplate)}`;

  const copyEmail = () => {
    navigator.clipboard.writeText("jain.aman3789@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/amanmalu/",
      handle: "in/amanmalu",
      description: "Professional updates, career milestones, and networking",
    },
    {
      label: "GitHub",
      url: "https://github.com/aman482006-beep",
      handle: "aman482006-beep",
      description: "Repositories, algorithmic tools, and open-source code",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@AmanJain-4",
      handle: "@AmanJain-4",
      description: "Long-form finance breakdowns, study systems, and tech experiments",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/aman.ja1n/",
      handle: "@aman.ja1n",
      description: "Bite-sized finance carousels, student life, and insights",
    },
  ];

  return (
    <div className="aj-editorial-page aj-contact-page min-h-screen bg-[var(--tech-bg)] text-[var(--tech-text)] pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-[rgba(224,27,27,0.28)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>DIRECT INQUIRIES & CONNECT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-4">
            Let&apos;s connect.
          </h1>
          <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            I&apos;m open to interesting opportunities, useful projects, thoughtful collaborations and conversations around finance, technology and content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Action Card: Categorized Email Dispatch */}
          <div className="lg:col-span-2 p-5 sm:p-10 rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--tech-accent)] mb-2">
                STEP 1 · SELECT INQUIRY PURPOSE
              </div>
              <h2 className="text-2xl font-bold font-display text-white mb-6">
                What would you like to discuss?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => setSelectedCategory(cat.label)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.label
                        ? "bg-[var(--tech-bg)] border-[var(--tech-accent)] text-white shadow-[0_0_15px_rgba(224,27,27,0.15)]"
                        : "bg-[var(--tech-bg)]/50 border-[rgba(224,27,27,0.28)] text-[var(--tech-text-muted)] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="text-xs font-mono font-bold mb-1">{cat.label}</div>
                    <div className="text-[11px] font-sans opacity-75 truncate">{cat.subject}</div>
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] mb-8 font-mono text-xs">
                <div className="text-[10px] uppercase text-white/50 tracking-wider mb-2">Pre-configured Subject Line</div>
                <div className="text-[var(--tech-accent)] font-semibold mb-3">{currentCategory.subject}</div>
                <div className="text-[10px] uppercase text-white/50 tracking-wider mb-1">Destination Address</div>
                <div className="text-white break-all">jain.aman3789@gmail.com</div>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(224,27,27,0.28)] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={mailtoHref}
                className="w-full sm:w-fit justify-center px-5 sm:px-6 py-3.5 min-h-11 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all shadow-[0_0_20px_rgba(224,27,27,0.25)] flex items-center gap-2"
              >
                <span>Launch Email Client</span>
                <span className="font-bold">↗</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-fit justify-center px-5 py-3.5 min-h-11 rounded-lg border border-[rgba(224,27,27,0.28)] text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{copied ? "Copied to Clipboard!" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>

          {/* Social Channels & Fast Direct Info */}
          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)]">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--tech-accent)] mb-2">LOCATION & TIMEZONE</div>
              <div className="text-white font-bold font-display text-xl mb-1">Bengaluru, India</div>
              <div className="text-xs font-mono text-[var(--tech-text-muted)]">IST (UTC+5:30) · Open to global remote discussions</div>
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-white/50 pt-2 px-1">
              Active Public Channels
            </div>

            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] hover:border-[var(--tech-accent)]/50 transition-all flex flex-col justify-between group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold font-display text-lg text-white group-hover:text-[var(--tech-accent)] transition-colors">
                    {s.label}
                  </span>
                  <span className="text-xs font-mono text-[var(--tech-accent)]">↗</span>
                </div>
                <div className="text-xs font-mono text-white/70 mb-2 break-words">{s.handle}</div>
                <div className="text-[11px] text-[var(--tech-text-muted)] font-sans">{s.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
