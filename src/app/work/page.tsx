import Link from "next/link";
import { FOKUS } from "@/data/fokus";

export default function WorkPage() {
  return (
    <main className="aj-inner-page">
      <div className="aj-container">
        <div className="aj-inner-heading">
          <p className="aj-eyebrow aj-eyebrow-accent">SELECTED WORK</p>
          <h1>One project. Built with intent.</h1>
          <p>I&apos;m keeping this page focused on the work I&apos;m ready to share. I&apos;ll add more projects here as they&apos;re ready.</p>
        </div>
        <article className="aj-work-case">
          <div className="aj-work-art">
            <div className="aj-focus-glow" />
            <div className="aj-phone aj-phone-back">
              <div className="aj-phone-notch" /><span className="aj-phone-small">OVERVIEW</span><strong>Analytics</strong>
              <div className="aj-chart-bars"><i /><i /><i /><i /><i /><i /><i /></div>
              <span className="aj-mini-line" /><span className="aj-mini-line short" />
            </div>
            <div className="aj-phone aj-phone-front">
              <div className="aj-phone-notch" /><div className="aj-fokus-mark">◉</div><strong>Fokus</strong><span className="aj-phone-muted">Focus Together</span>
              <div className="aj-phone-task"><i /> Deep Work <b>45m</b></div><div className="aj-phone-task"><i /> CFA Study <b>30m</b></div><div className="aj-phone-task"><i /> Reading <b>20m</b></div><div className="aj-phone-cta">Get started →</div>
            </div>
          </div>
          <div className="aj-work-details">
            <p className="aj-app-kicker">PRODUCTIVITY <span>•</span> FLUTTER APP <span>•</span> WINDOWS STORE</p>
            <h2>Fokus</h2>
            <p className="aj-work-tagline">Stay on Track, Together.</p>
            <p>A focus and productivity app built around keeping your goals visible and building consistent routines. This project page will stay intentionally simple until there is more work I want to showcase.</p>
            <div className="aj-work-tags"><span>Productivity</span><span>Focus systems</span><span>Windows</span><span>Community</span></div>
            <div className="aj-feature-actions">
              <a className="aj-button aj-button-primary" href={FOKUS.storeUrl} target="_blank" rel="noopener noreferrer">Get Fokus <span aria-hidden="true">↗</span></a>
              <a className="aj-button aj-button-outline" href={FOKUS.sourceUrl} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
        <div className="aj-work-footnote"><span className="aj-footnote-dot" /> More projects will appear here when they&apos;re ready to share.</div>
      </div>
    </main>
  );
}
