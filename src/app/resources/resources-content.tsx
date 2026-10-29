"use client";

import { useMemo, useState, type FormEvent } from "react";

type ResourceCategory = "finance" | "cfa" | "creator";
type FilterCategory = "all" | ResourceCategory;

type Resource = {
  id: string;
  category: ResourceCategory;
  title: string;
  description: string;
  format: string;
  tags: string[];
};

const resources: Resource[] = [
  {
    id: "stock-toolkit",
    category: "finance",
    title: "Stock Analysis Toolkit — Indian Markets",
    description: "A workbook concept for financial ratios, statement analysis, conditional formatting and Indian-equity analysis in INR crores.",
    format: "Excel workbook",
    tags: ["Excel", "Financial analysis", "Valuation"],
  },
  {
    id: "dcf-model",
    category: "finance",
    title: "DCF Valuation & Sensitivity Analysis Model",
    description: "A template concept for WACC, terminal value and bull/base/bear scenario sensitivity.",
    format: "Excel template",
    tags: ["DCF", "WACC", "Sensitivity"],
  },
  {
    id: "cfa-tracker",
    category: "cfa",
    title: "CFA Master Study & Review Tracker",
    description: "A study-tracker concept for curriculum modules and spaced-repetition review checkpoints.",
    format: "Spreadsheet",
    tags: ["CFA", "Revision", "Study systems"],
  },
  {
    id: "cfa-formulas",
    category: "cfa",
    title: "CFA Core Valuation & Formula Reference",
    description: "A quick-reference concept for Financial Statement Analysis, Quantitative Methods and Fixed Income calculations.",
    format: "PDF guide",
    tags: ["Formulas", "FSA", "Fixed Income"],
  },
  {
    id: "reels-scripting",
    category: "creator",
    title: "Finance Content Storytelling & Script Framework",
    description: "A framework concept for turning complex finance topics into clear, structured short-form videos.",
    format: "Document",
    tags: ["Content", "Storytelling", "Video"],
  },
  {
    id: "equity-report-template",
    category: "finance",
    title: "Equity Research Report Template",
    description: "A report-structure concept covering company overview, industry context, financial analysis and risk factors.",
    format: "Document template",
    tags: ["Company analysis", "Reports", "Risk"],
  },
];

const filters: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All resources" },
  { id: "finance", label: "Finance" },
  { id: "cfa", label: "CFA study" },
  { id: "creator", label: "Creator tools" },
];

export function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [requestText, setRequestText] = useState("");
  const filtered = useMemo(
    () => activeCategory === "all" ? resources : resources.filter((resource) => resource.category === activeCategory),
    [activeCategory],
  );

  function handleRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const request = requestText.trim();
    if (!request) return;
    const subject = encodeURIComponent("Resource request - Aman Jain portfolio");
    const body = encodeURIComponent(`Hi Aman,\n\nI'd like to request a resource about:\n${request}\n\nThanks.`);
    window.location.href = `mailto:jain.aman3789@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main id="main" className="aj-inner-page aj-resources-page">
      <div className="aj-container">
        <header className="aj-inner-heading">
          <p className="aj-eyebrow aj-eyebrow-accent">RESOURCE LIBRARY</p>
          <h1>Useful tools for learning finance.</h1>
          <p>This page collects resource ideas for finance, CFA study and content creation. The listings below are currently placeholders: files and public access links still need to be added before they are available to download.</p>
        </header>

        <div className="aj-resource-filters" role="group" aria-label="Filter resources by category">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              className={"aj-resource-filter" + (activeCategory === filter.id ? " is-active" : "")}
              aria-pressed={activeCategory === filter.id}
              onClick={() => setActiveCategory(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <section className="aj-resource-grid" aria-label="Resource listings">
          {filtered.map((resource) => (
            <article className="aj-resource-card" key={resource.id}>
              <div className="aj-resource-card-top">
                <span className="aj-resource-format">{resource.format}</span>
                <span className="aj-resource-placeholder">COMING SOON</span>
              </div>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <div className="aj-resource-tags">
                {resource.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="aj-resource-footer">
                <span>TODO(Aman): Add file and verify description</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </section>

        <section className="aj-resource-request" aria-labelledby="resource-request-heading">
          <div>
            <p className="aj-eyebrow aj-eyebrow-accent">REQUEST A RESOURCE</p>
            <h2 id="resource-request-heading">What would be useful?</h2>
            <p>Send a resource idea by email. This opens a draft in your email app; it does not submit data to the website.</p>
          </div>
          <form onSubmit={handleRequest}>
            <label htmlFor="resource-request">Resource topic</label>
            <textarea id="resource-request" value={requestText} onChange={(event) => setRequestText(event.target.value)} rows={3} placeholder="e.g. a portfolio analysis workbook" required />
            <button type="submit" className="aj-button aj-button-primary">Draft email request <span aria-hidden="true">↗</span></button>
          </form>
        </section>
      </div>
    </main>
  );
}
