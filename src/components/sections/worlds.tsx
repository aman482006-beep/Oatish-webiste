export function Worlds() {
  return (
    <section className="worlds" id="worlds">
      <div className="worlds-header">
        <div className="section-label reveal" style={{ justifyContent: "center" }}>What I Do</div>
        <h2 className="worlds-title reveal">Three worlds,<br /><em>one life</em></h2>
      </div>
      <div className="worlds-grid">
        <div className="world-card finance reveal">
          <div className="world-num">01</div>
          <span className="world-icon">📊</span>
          <div className="world-title">Finance</div>
          <p className="world-desc">From equity research to CFA prep — I study markets, build models, and break down complex financial concepts into content anyone can understand. This is the grind behind the scenes.</p>
          <div className="world-tags">
            <span className="world-tag">Equity Research</span>
            <span className="world-tag">CFA L1</span>
            <span className="world-tag">DCF Modeling</span>
            <span className="world-tag">Excel</span>
          </div>
        </div>
        <div className="world-card fitness reveal reveal-delay-1">
          <div className="world-num">02</div>
          <span className="world-icon">🏋️</span>
          <div className="world-title">Fitness</div>
          <p className="world-desc">Lifting consistently, chasing 16-inch arms, and learning that discipline in the gym is the same muscle you use in life. I document the process — wins, struggles, and everything between.</p>
          <div className="world-tags">
            <span className="world-tag">Gym</span>
            <span className="world-tag">Consistency</span>
            <span className="world-tag">Progress</span>
          </div>
        </div>
        <div className="world-card life reveal reveal-delay-2">
          <div className="world-num">03</div>
          <span className="world-icon">🍜</span>
          <div className="world-title">Lifestyle</div>
          <p className="world-desc">Food, student life, real talk about building habits, battling procrastination, and figuring things out in real-time. No curated perfection — just honest documentation of a 19-year-old trying.</p>
          <div className="world-tags">
            <span className="world-tag">Food</span>
            <span className="world-tag">Student Life</span>
            <span className="world-tag">Habits</span>
            <span className="world-tag">Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
