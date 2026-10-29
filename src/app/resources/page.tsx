"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Resource {
  id: string;
  category: "finance" | "cfa" | "creator";
  title: string;
  description: string;
  format: string;
  badge: string;
  linkText: string;
  linkUrl: string;
  tags: string[];
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "finance" | "cfa" | "creator">("all");
  const [requestText, setRequestText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resources: Resource[] = [
    {
      id: "stock-toolkit",
      category: "finance",
      title: "Stock Analysis Toolkit — Indian Markets",
      description: "A 4-sheet master workbook with 78 pre-built live formulas, automated financial ratios, conditional formatting alerts, and financial statement modeling for Indian equities in INR Crores.",
      format: "XLSX Workbook",
      badge: "POPULAR",
      linkText: "ACCESS SHEET",
      linkUrl: "#",
      tags: ["Excel", "78 Formulas", "INR Crores", "Valuation"],
    },
    {
      id: "dcf-model",
      category: "finance",
      title: "DCF Valuation & Sensitivity Analysis Model",
      description: "Step-by-step Discounted Cash Flow valuation template featuring WACC calculation, terminal value multiples, and automated bull/base/bear sensitivity matrix.",
      format: "Excel Template",
      badge: "VALUATION",
      linkText: "ACCESS MODEL",
      linkUrl: "#",
      tags: ["DCF", "WACC", "Sensitivity Table", "SOIC Certified"],
    },
    {
      id: "cfa-tracker",
      category: "cfa",
      title: "CFA Master Study & Review Tracker",
      description: "Structured tracker mapping comprehensive video lectures across core CFA curriculum modules, accompanied by spaced-repetition revision checkpoints.",
      format: "Google Sheets / Excel",
      badge: "CFA STUDY",
      linkText: "OPEN TRACKER",
      linkUrl: "#",
      tags: ["CFA Prep", "Revision Matrix", "Curriculum Tracker"],
    },
    {
      id: "cfa-formulas",
      category: "cfa",
      title: "CFA Core Valuation & Formula Reference",
      description: "Concise formula cheat sheet focusing on Financial Statement Analysis, Quantitative Methods, and Fixed Income calculations.",
      format: "PDF Quick Guide",
      badge: "HIGH YIELD",
      linkText: "VIEW GUIDE",
      linkUrl: "#",
      tags: ["Formulas", "FSA", "Fixed Income", "Quantitative"],
    },
    {
      id: "reels-scripting",
      category: "creator",
      title: "Finance Content Storytelling & Script Framework",
      description: "The 3-act framework I use to deconstruct complex market concepts, financial news, and student discipline into high-retention short-form videos.",
      format: "Notion / PDF",
      badge: "PLAYBOOK",
      linkText: "READ FRAMEWORK",
      linkUrl: "#",
      tags: ["Content Creation", "Storytelling", "Short Form", "Growth"],
    },
    {
      id: "equity-report-template",
      category: "finance",
      title: "Buy-Side Equity Research Report Template",
      description: "Institutional-style equity research report structure covering Executive Summary, Industry Outlook, Financial Analysis, Risk Factors, and Target Price rationale.",
      format: "Word & Notion Doc",
      badge: "RESEARCH",
      linkText: "ACCESS TEMPLATE",
      linkUrl: "#",
      tags: ["Buy-Side", "Report Structure", "Thesis Building"],
    },
  ];

  const filtered = activeCategory === "all" 
    ? resources 
    : resources.filter((r) => r.category === activeCategory);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestText.trim()) return;
    setSubmitted(true);
    setRequestText("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[var(--tech-bg)] text-white pt-36 pb-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(224,27,27,0.14)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(143,13,13,0.1)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      {/* Spider Emblem Watermark */}
      <div className="absolute top-36 right-10 w-96 h-96 opacity-[0.03] pointer-events-none">
        <Image
          src="/spiderman/emblem.svg"
          alt=""
          fill
          className="object-contain filter invert"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--spidey-muted)] hover:text-[var(--spidey-red)] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK TO PORTFOLIO</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--spidey-red)]/50 bg-[var(--spidey-red)]/10 text-[var(--spidey-red)] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <span>✦</span> THE RESOURCE VAULT
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] mb-6">
            FINANCE & CREATOR<br />
            <span className="text-[var(--spidey-red)] drop-shadow-[0_0_25px_rgba(224,27,27,0.4)]">
              RESOURCES
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[var(--spidey-white)]/85 max-w-2xl font-body leading-relaxed">
            Curated financial models, CFA revision frameworks, and content playbooks built from my real-world projects. Download, copy, and apply them directly.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-6 border-b border-white/10">
          {[
            { id: "all", label: "ALL RESOURCES" },
            { id: "finance", label: "FINANCE & VALUATION" },
            { id: "cfa", label: "CFA & ACADEMIC PREP" },
            { id: "creator", label: "CREATOR PLAYBOOKS" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--spidey-red)] text-white border-[var(--spidey-red)] shadow-[0_0_15px_rgba(224,27,27,0.4)]"
                  : "bg-[var(--spidey-carbon)] text-[var(--spidey-muted)] border-white/10 hover:border-[var(--spidey-red)] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="spidey-card p-7 rounded-2xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-white/5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--spidey-muted)]">
                    {item.format}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-[var(--spidey-red)]/15 border border-[var(--spidey-red)]/40 text-[var(--spidey-red)]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-3 group-hover:text-[var(--spidey-red)] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--spidey-white)]/80 leading-relaxed font-body mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-[var(--spidey-carbon-light)] border border-white/5 text-[var(--spidey-white)]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={item.linkUrl}
                  onClick={(e) => {
                    if (item.linkUrl === "#") {
                      e.preventDefault();
                      alert(`Resource '${item.title}' is being finalized for public release! You can submit a request below to get early access.`);
                    }
                  }}
                  className="spidey-btn w-full !text-sm !py-2.5"
                >
                  {item.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Suggest / Request a Resource Section */}
        <div className="spidey-card p-8 sm:p-12 rounded-3xl border border-[var(--spidey-red)]/40 bg-[var(--spidey-carbon)] relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--spidey-red)] font-semibold block mb-2">
              ✦ COMMUNITY REQUESTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-4">
              WANT A SPECIFIC FINANCIAL MODEL OR TEMPLATE?
            </h2>
            <p className="text-sm sm:text-base text-[var(--spidey-white)]/80 font-body leading-relaxed mb-6">
              I regularly build custom spreadsheets, DCF calculators, and study systems. Drop your request below and I will prioritize adding it to the vault.
            </p>

            <form onSubmit={handleRequest} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                placeholder="e.g. IPO Analysis Spreadsheet, Option Pricing Model..."
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--spidey-carbon-light)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--spidey-red)] focus:shadow-[0_0_12px_rgba(224,27,27,0.3)] transition-all font-body"
                required
              />
              <button type="submit" className="spidey-btn !py-3 !px-6">
                SUBMIT REQUEST
              </button>
            </form>

            {submitted && (
              <p className="font-mono text-xs text-green-400 mt-3">
                ✓ Request received! I will notify the community when this is added.
              </p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
