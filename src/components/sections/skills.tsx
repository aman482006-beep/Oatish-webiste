export function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <div>
          <div className="section-label reveal">What I Can Do</div>
          <h2 className="skills-headline reveal">Built skills,<br /><em>not just a CV</em></h2>
        </div>
        <p className="section-desc reveal" style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "400px" }}>
          Every skill here has been tested in real projects — not just listed. From financial models to content design to video editing.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-card reveal">
          <span className="skill-emoji">📊</span>
          <div className="skill-name">MS Excel</div>
          <div className="skill-desc">Advanced modeling, dashboards, live formulas, conditional formatting</div>
          <div className="skill-level">
            <div className="level-pip filled"></div><div className="level-pip filled"></div>
            <div className="level-pip filled"></div><div className="level-pip filled"></div>
            <div className="level-pip filled"></div>
          </div>
        </div>
        <div className="skill-card reveal reveal-delay-1">
          <span className="skill-emoji">📈</span>
          <div className="skill-name">Equity Research</div>
          <div className="skill-desc">SOIC-certified, DCF, relative valuation, buy/sell thesis</div>
          <div className="skill-level">
            <div className="level-pip filled"></div><div className="level-pip filled"></div>
            <div className="level-pip filled"></div><div className="level-pip filled"></div>
            <div className="level-pip"></div>
          </div>
        </div>
        <div className="skill-card reveal reveal-delay-2">
          <span className="skill-emoji">🎨</span>
          <div className="skill-name">Graphic Design</div>
          <div className="skill-desc">Visual content, branding, social media assets</div>
          <div className="skill-level">
            <div className="level-pip filled"></div><div className="level-pip filled"></div>
            <div className="level-pip filled"></div><div className="level-pip"></div>
            <div className="level-pip"></div>
          </div>
        </div>
        <div className="skill-card reveal reveal-delay-3">
          <span className="skill-emoji">🎬</span>
          <div className="skill-name">Video Editing</div>
          <div className="skill-desc">Reels, YouTube content, fast-cut storytelling</div>
          <div className="skill-level">
            <div className="level-pip filled"></div><div className="level-pip filled"></div>
            <div className="level-pip filled"></div><div className="level-pip"></div>
            <div className="level-pip"></div>
          </div>
        </div>
        <div className="skill-card wide reveal">
          <span className="skill-emoji">🐍</span>
          <div>
            <div className="skill-name">Python & Data</div>
            <div className="skill-desc">Beginner-level scripting for data analysis, automation, and financial calculations. Growing this actively.</div>
            <div className="skill-level">
              <div className="level-pip filled"></div><div className="level-pip filled"></div>
              <div className="level-pip"></div><div className="level-pip"></div>
              <div className="level-pip"></div>
            </div>
          </div>
        </div>
        <div className="skill-card wide reveal reveal-delay-1">
          <span className="skill-emoji">✍️</span>
          <div>
            <div className="skill-name">Content Creation</div>
            <div className="skill-desc">Finance reels, LinkedIn posts, carousels — turning complex ideas into scroll-stopping content for young Indian audiences.</div>
            <div className="skill-level">
              <div className="level-pip filled"></div><div className="level-pip filled"></div>
              <div className="level-pip filled"></div><div className="level-pip filled"></div>
              <div className="level-pip"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
