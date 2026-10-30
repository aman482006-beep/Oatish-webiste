"use client";

import { useState, type FormEvent } from "react";

const resourceAreas = [
  {
    title: "Finance toolkits",
    description: "Clear, practical ways to explore financial statements, valuation assumptions and portfolio risk.",
  },
  {
    title: "CFA study systems",
    description: "Revision trackers, formula references and ways to organise a demanding study plan.",
  },
  {
    title: "Creator workflows",
    description: "Frameworks for turning a finance topic into a concise, useful video or visual explanation.",
  },
];

export function ResourcesContent() {
  const [requestText, setRequestText] = useState("");

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
          <p>I’m shaping this library around practical tools, not downloads for the sake of having downloads. These are the areas I plan to build and share as each resource is tested and ready.</p>
        </header>

        <section className="aj-resource-grid" aria-label="Planned resource areas">
          {resourceAreas.map((area) => (
            <article className="aj-resource-card" key={area.title}>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
              <a className="aj-resource-link" href="#resource-request">
                Suggest an idea <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </section>

        <section id="resource-request" className="aj-resource-request" aria-labelledby="resource-request-heading">
          <div className="aj-resource-request-copy">
            <h2 id="resource-request-heading">What should I build next?</h2>
            <p>Suggest a topic and I’ll use it to prioritise the next resources.</p>
          </div>
          <form onSubmit={handleRequest}>
            <label className="sr-only" htmlFor="resource-request-topic">Resource topic</label>
            <input
              id="resource-request-topic"
              type="text"
              value={requestText}
              onChange={(event) => setRequestText(event.target.value)}
              placeholder="e.g. a portfolio analysis workbook"
              required
            />
            <button type="submit" className="aj-button aj-button-primary">Draft email <span aria-hidden="true">↗</span></button>
            <small>Opens a draft in your email app; nothing is submitted on the website.</small>
          </form>
        </section>
      </div>
    </main>
  );
}
