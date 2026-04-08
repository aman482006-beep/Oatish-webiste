export function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-label reveal">Work</div>
      <h2 className="projects-headline reveal">Things I&apos;ve <em>actually built</em></h2>
      <div className="proj-grid">
        <div className="proj-card tall reveal">
          <div>
            <div className="proj-card-accent"></div>
            <div className="proj-type">Finance · Excel</div>
            <div className="proj-name">Stock Analysis Toolkit — Indian Markets</div>
            <p className="proj-desc">A 4-sheet Excel workbook with 78 live formulas, conditional formatting, dashboard charts, and pre-loaded data for Indian companies in INR Crores. Built for real analysis, not for show.</p>
          </div>
          <div className="proj-chips">
            <span className="proj-chip">Excel</span>
            <span className="proj-chip">INR Data</span>
            <span className="proj-chip">Dashboards</span>
            <span className="proj-chip">NSE</span>
          </div>
        </div>
        <div className="proj-card reveal reveal-delay-1">
          <div className="proj-card-accent"></div>
          <div className="proj-type">Research</div>
          <div className="proj-name">Equity Research Report</div>
          <p className="proj-desc">Full buy-side research report with DCF, relative valuation, and investment thesis for an Indian company.</p>
          <div className="proj-chips">
            <span className="proj-chip">DCF</span>
            <span className="proj-chip">EV/EBITDA</span>
            <span className="proj-chip">Report</span>
          </div>
        </div>
        <div className="proj-card reveal reveal-delay-2">
          <div className="proj-card-accent"></div>
          <div className="proj-type">Study Tool</div>
          <div className="proj-name">CFA Resource Tracker (140+ Videos)</div>
          <p className="proj-desc">Excel tracker covering 140+ YouTube resources across all 11 CFA L1 study sections. Built for myself, used by others.</p>
          <div className="proj-chips">
            <span className="proj-chip">CFA</span>
            <span className="proj-chip">Excel</span>
            <span className="proj-chip">Self-study</span>
          </div>
        </div>
      </div>
    </section>
  );
}
