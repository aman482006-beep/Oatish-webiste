export function Credentials() {
  return (
    <section className="credentials" id="credentials">
      <div className="section-label reveal">✦ Background</div>
      <h2 className="cred-title reveal">Education &<br /><em>Certifications</em></h2>

      {/* Featured CFA card */}
      <div className="cred-featured reveal">
        <div className="cred-featured-glow"></div>
        <div className="cred-featured-content">
          <div className="cred-featured-icon">📈</div>
          <div className="cred-featured-text">
            <div className="cred-featured-name">CFA Level 1 — Cleared</div>
            <div className="cred-featured-detail">Score: 1740 · Chartered Financial Analyst Program</div>
          </div>
          <span className="cred-badge gold-badge">Passed</span>
        </div>
      </div>

      <div className="cred-grid">
        <div className="cred-item reveal">
          <div className="cred-left"><div className="cred-dot"></div><div className="cred-name">BBA Finance & Marketing Analytics · 2024–2027</div></div>
          <span className="cred-badge">Ongoing</span>
        </div>
        <div className="cred-item reveal reveal-delay-1">
          <div className="cred-left"><div className="cred-dot"></div><div className="cred-name">Investment Banking Simulator</div></div>
          <span className="cred-badge">Certified</span>
        </div>
        <div className="cred-item reveal reveal-delay-2">
          <div className="cred-left"><div className="cred-dot"></div><div className="cred-name">SOIC Stock Analysis</div></div>
          <span className="cred-badge gold-badge">Certified</span>
        </div>
        <div className="cred-item reveal reveal-delay-3">
          <div className="cred-left"><div className="cred-dot"></div><div className="cred-name">Equity Research Certification</div></div>
          <span className="cred-badge">Certified</span>
        </div>
        <div className="cred-item reveal">
          <div className="cred-left"><div className="cred-dot"></div><div className="cred-name">Excel for Finance</div></div>
          <span className="cred-badge">Certified</span>
        </div>
      </div>
    </section>
  );
}
