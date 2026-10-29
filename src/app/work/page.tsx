import type { Metadata } from "next";
import { FOKUS } from "@/data/fokus";

export const metadata: Metadata = {
  title: "Fokus Case Study",
  description: "Aman Jain's case study for Fokus, a cross-platform Flutter productivity app built around focused work, ambient environments and lightweight personal systems.",
  alternates: { canonical: "/work" },
};

const features = [
  "Focus sessions",
  "Ambient audio and visual scenes",
  "Reminders and notifications",
  "Productivity analytics",
  "Local persistence",
  "File and PDF workflows",
  "Desktop window controls",
  "Deep links",
];

const stack = [
  "Flutter / Dart",
  "Riverpod",
  "GetIt",
  "SharedPreferences",
  "just_audio",
  "flutter_local_notifications",
  "fl_chart",
  "file_picker",
  "Syncfusion PDF",
  "Google ML Kit",
  "window_manager",
  "Win32 / FFI",
  "app_links",
];

const screenshotSlots = [
  { title: "Focus session", note: "TODO(Aman): Add a genuine screenshot of a focus session." },
  { title: "Ambient environments", note: "TODO(Aman): Add a genuine screenshot of ambient audio and visual scenes." },
  { title: "Productivity analytics", note: "TODO(Aman): Add a genuine screenshot of the analytics view." },
  { title: "Desktop experience", note: "TODO(Aman): Add a genuine screenshot of the Windows app." },
];

export default function WorkPage() {
  return (
    <main className="aj-inner-page aj-work-page">
      <div className="aj-container">
        <header className="aj-inner-heading aj-work-hero">
          <p className="aj-eyebrow aj-eyebrow-accent">SELECTED WORK · CASE STUDY</p>
          <h1>{FOKUS.name} — {FOKUS.tagline}</h1>
          <p>{FOKUS.name} is a cross-platform Flutter productivity app designed to make deep work easier to start and easier to sustain. It brings focus sessions, ambient environments, reminders, analytics and local persistence into one application.</p>
          <div className="aj-work-hero-meta">
            <span>Cross-platform Flutter app</span>
            <span>Windows version on Microsoft Store</span>
            <span>Personal project · Active development</span>
          </div>
          <div className="aj-feature-actions aj-work-hero-actions">
            <a className="aj-button aj-button-primary" href={FOKUS.storeUrl} target="_blank" rel="noopener noreferrer">Get Fokus <span aria-hidden="true">↗</span></a>
            <a className="aj-button aj-button-outline" href={FOKUS.sourceUrl} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <section className="aj-case-section" aria-labelledby="problem-heading">
          <div className="aj-case-section-heading">
            <p className="aj-eyebrow aj-eyebrow-accent">01 · THE PROBLEM</p>
            <h2 id="problem-heading">Make focused work easier to begin and sustain.</h2>
          </div>
          <div className="aj-case-copy">
            <p>The project is built around a straightforward idea: a timer by itself is not a complete productivity system. Fokus combines focus sessions with ambient environments, reminders and lightweight personal systems so the work session sits inside a broader routine.</p>
            <p><strong>Who it is for:</strong> people who want a focused workspace with fewer separate tools for sessions, sound, reminders and progress.</p>
            <p className="aj-case-source-note">Project scope and feature descriptions are taken from the Fokus repository README.</p>
          </div>
        </section>

        <section className="aj-case-section aj-case-built" aria-labelledby="built-heading">
          <div className="aj-case-section-heading">
            <p className="aj-eyebrow aj-eyebrow-accent">02 · WHAT I BUILT</p>
            <h2 id="built-heading">A small productivity workspace, not just a timer.</h2>
          </div>
          <div className="aj-case-feature-grid">
            {features.map((feature, index) => (
              <article className="aj-case-feature" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="aj-case-section" aria-labelledby="screens-heading">
          <div className="aj-case-section-heading">
            <p className="aj-eyebrow aj-eyebrow-accent">03 · PRODUCT SCREENS</p>
            <h2 id="screens-heading">A closer look at Fokus.</h2>
            <p>Real app screenshots are not currently checked into the portfolio repository. These are explicit placeholders, not product screenshots.</p>
          </div>
          <div className="aj-case-screenshots">
            {screenshotSlots.map((slot, index) => (
              <figure className="aj-case-screenshot-placeholder" key={slot.title}>
                <div className="aj-case-placeholder-visual" role="img" aria-label={slot.note}>
                  <span className="aj-case-placeholder-index">0{index + 1}</span>
                  <span className="aj-case-placeholder-symbol" aria-hidden="true">＋</span>
                  <span className="aj-case-placeholder-title">{slot.title}</span>
                </div>
                <figcaption>{slot.note}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="aj-case-section aj-case-split" aria-labelledby="role-heading">
          <div>
            <p className="aj-eyebrow aj-eyebrow-accent">04 · MY ROLE</p>
            <h2 id="role-heading">The details should be specific.</h2>
            <p className="aj-case-placeholder-copy">TODO(Aman): Describe the parts of the project you personally designed, implemented and maintained. This is intentionally left blank rather than claiming unverified ownership.</p>
          </div>
          <div>
            <p className="aj-eyebrow aj-eyebrow-accent">05 · WHAT I LEARNED</p>
            <h2>Engineering notes.</h2>
            <p className="aj-case-placeholder-copy">TODO(Aman): Add two or three concrete technical or product lessons, plus what you plan to improve next.</p>
          </div>
        </section>

        <section className="aj-case-section" aria-labelledby="stack-heading">
          <div className="aj-case-section-heading">
            <p className="aj-eyebrow aj-eyebrow-accent">06 · STACK</p>
            <h2 id="stack-heading">Tools and integrations.</h2>
          </div>
          <div className="aj-work-tags aj-case-stack">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <p className="aj-case-source-note">The stack above is listed in the Fokus repository README; it is not a claim that each package is used by every platform build.</p>
        </section>

        <section className="aj-case-next">
          <div>
            <p className="aj-eyebrow aj-eyebrow-accent">NEXT</p>
            <h2>Fokus is still under active development.</h2>
            <p>The next update to this case study should add real app screenshots and specific examples of product decisions and engineering work.</p>
          </div>
          <div className="aj-feature-actions">
            <a className="aj-button aj-button-primary" href={FOKUS.storeUrl} target="_blank" rel="noopener noreferrer">Get Fokus <span aria-hidden="true">↗</span></a>
            <a className="aj-button aj-button-outline" href={FOKUS.sourceUrl} target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </main>
  );
}
