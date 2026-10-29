import Image from "next/image";
import Link from "next/link";
import { LatestVideos } from "@/components/sections/latest-videos";
import { FOKUS } from "@/data/fokus";
import { financeWork } from "@/data/finance-work";
import { currentlyOpenTo } from "@/data/profile";
import { ResumeDownload } from "@/components/sections/resume-download";
import { SocialIcon, type SocialIconName } from "@/components/layout/social-icon";

const socials: { label: string; href: string; icon: SocialIconName }[] = [
  { label: "GitHub", href: "https://github.com/aman482006-beep", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanmalu/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@AmanJain-4", icon: "youtube" },
  { label: "Instagram", href: "https://www.instagram.com/aman.ja1n/", icon: "instagram" },
];

const pillars = [
  {
    number: "01",
    title: "Finance",
    icon: "↗",
    tone: "peach",
    description: "Exploring financial analysis, markets, investment concepts, risk, and the business problems behind the numbers.",
  },
  {
    number: "02",
    title: "Build",
    icon: "</>",
    tone: "blue",
    description: "Experimenting with AI, financial-data tools, dashboards, software projects, and practical automation.",
  },
  {
    number: "03",
    title: "Create",
    icon: "▷",
    tone: "green",
    description: "Sharing what I learn through finance education, explanatory videos, career resources, and digital content.",
  },
];

export default function Home() {
  return (
    <main className="aj-home">
      <section className="aj-hero">
        <div className="aj-container aj-hero-grid">
          <div className="aj-hero-copy">
            <p className="aj-eyebrow"><span /> FINANCE × TECHNOLOGY × COMMUNICATION</p>
            <h1>I study finance.<br /><em>I build</em> with technology.<br />I create to make ideas useful.</h1>
            <p className="aj-lede">
              I&apos;m Aman Jain, a BBA student at CHRIST University exploring financial analysis, fintech, AI-powered tools and educational content. I like turning what I learn into projects I can test, improve and share.
            </p>
            <div className="aj-hero-actions">
              <a className="aj-button aj-button-primary" href="#featured">Explore my work <span aria-hidden="true">→</span></a>
              <a className="aj-button aj-button-outline" href="#creator">Explore my content</a>
            </div>
            <div className="aj-socials" aria-label="Social links">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <span className="aj-social-mark"><SocialIcon name={social.icon} /></span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="aj-hero-visual" aria-label="A portrait of Aman Jain">
            <div className="aj-orbit aj-orbit-one" />
            <div className="aj-orbit aj-orbit-two" />
            <div className="aj-note aj-note-left">Ideas<br />Markets<br />Tech<br />Progress…<span aria-hidden="true">↘</span></div>
            <div className="aj-note aj-note-right">Same curiosity.<br />Different ways. ☺</div>
            <div className="aj-photo-backdrop" />
            <div className="aj-photo-frame">
              <Image src="/profile-2.png" alt="Portrait of Aman Jain" fill preload sizes="(max-width: 900px) 78vw, 440px" className="aj-profile-image" />
            </div>
            <div className="aj-photo-caption"><strong>BBA</strong><span>Finance &amp; Marketing Analytics</span><span>CHRIST University</span><span>Bengaluru, India</span></div>
            <span className="aj-spark aj-spark-one" aria-hidden="true">〰</span>
            <span className="aj-spark aj-spark-two" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section className="aj-section aj-pillars-section" id="explore">
        <div className="aj-container">
          <div className="aj-section-topline">
            <p className="aj-eyebrow">THREE AREAS I EXPLORE</p>
            <p className="aj-topline-aside">Different interests. A common mindset. <span>← →</span></p>
          </div>
          <div className="aj-pillar-grid">
            {pillars.map((pillar) => (
              <article className={"aj-pillar aj-pillar-" + pillar.tone} key={pillar.title}>
                <div className="aj-pillar-icon" aria-hidden="true">{pillar.icon}</div>
                <div className="aj-pillar-copy">
                  <div className="aj-pillar-head"><h2>{pillar.title}</h2><span>{pillar.number}</span></div>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aj-section aj-featured-section" id="featured">
        <div className="aj-container">
          <div className="aj-section-heading aj-section-heading-inline">
            <div><p className="aj-eyebrow aj-eyebrow-accent">FEATURED PROJECT</p><h2>Focus <span>— Stay on Track, Together.</span></h2></div>
            <Link className="aj-text-link" href="/work">View case study <span aria-hidden="true">→</span></Link>
          </div>
          <article className="aj-feature-card">
            <div className="aj-focus-art" aria-label="Fokus app interface concept">
              <div className="aj-focus-glow" />
              <div className="aj-phone aj-phone-back">
                <div className="aj-phone-notch" />
                <span className="aj-phone-small">OVERVIEW</span><strong>Analytics</strong>
                <div className="aj-chart-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                <span className="aj-mini-line" /><span className="aj-mini-line short" />
              </div>
              <div className="aj-phone aj-phone-front">
                <div className="aj-phone-notch" />
                <div className="aj-fokus-mark">◉</div>
                <strong>Fokus</strong><span className="aj-phone-muted">Focus Together</span>
                <div className="aj-phone-task"><i /> Deep Work <b>45m</b></div>
                <div className="aj-phone-task"><i /> CFA Study <b>30m</b></div>
                <div className="aj-phone-task"><i /> Reading <b>20m</b></div>
                <div className="aj-phone-cta">Get started →</div>
              </div>
              <div className="aj-focus-note">Less noise.<br />More focus.</div>
            </div>
            <div className="aj-feature-content">
              <div className="aj-app-kicker">PRODUCTIVITY <span>•</span> FLUTTER <span>•</span> WINDOWS STORE</div>
              <h3>{FOKUS.name}</h3>
              <p>A cross-platform Flutter productivity app built around focused work, ambient environments and lightweight personal systems. It combines focus sessions, ambient audio, reminders, analytics and local persistence.</p>
              <div className="aj-feature-actions">
                <a href={FOKUS.storeUrl} target="_blank" rel="noopener noreferrer" className="aj-button aj-button-primary">Get Fokus <span aria-hidden="true">↗</span></a>
                <a href={FOKUS.sourceUrl} target="_blank" rel="noopener noreferrer" className="aj-button aj-button-outline"><span aria-hidden="true">⌘</span> View on GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </section>


      <section className="aj-section aj-finance-work-section" id="finance-work">
        <div className="aj-container">
          <div className="aj-section-heading aj-section-heading-inline">
            <div>
              <p className="aj-eyebrow aj-eyebrow-accent">SELECTED FINANCE WORK</p>
              <h2>Proof behind the finance side.</h2>
              <p className="aj-heading-subtitle">Models and analysis belong here when the underlying files are ready to share.</p>
            </div>
            <Link className="aj-text-link" href="/work">View all work <span aria-hidden="true">→</span></Link>
          </div>
          <div className="aj-finance-work-grid">
            {financeWork.map((item) => (
              <article className="aj-finance-work-card" key={item.id}>
                <div className="aj-finance-work-card-top">
                  <span className="aj-finance-format">{item.format}</span>
                  <span className="aj-finance-status">PLACEHOLDER</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="aj-finance-takeaway">{item.takeaway}</p>
                <span className="aj-finance-work-pending">TODO(Aman): Add {item.format} file</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="creator"><LatestVideos /></div>

      <section className="aj-section aj-recruiters-section" id="recruiters">
        <div className="aj-container aj-recruiters-grid">
          <div className="aj-recruiter-intro">
            <p className="aj-eyebrow aj-eyebrow-accent">RECRUITERS</p>
            <h2>A quick overview.</h2>
            <p>My education, internships, skills and career interests in one place.</p>
            <p className="aj-currently-line"><strong>Currently:</strong> {currentlyOpenTo}</p>
            <div className="aj-recruiter-actions">
              <Link href="/recruiters" className="aj-button aj-button-primary">View full profile <span aria-hidden="true">→</span></Link>
              <ResumeDownload compact />
            </div>
          </div>
          <div className="aj-recruiter-facts">
            <article><span className="aj-fact-icon">⌂</span><h3>Education</h3><p>BBA — Finance &amp; Marketing Analytics<br />CHRIST University<br />(2024–2027)</p></article>
            <article><span className="aj-fact-icon">▣</span><h3>Internships</h3><p>Nuvama Wealth<br />DAGAS<br />Finance internships</p></article>
            <article><span className="aj-fact-icon">▤</span><h3>CFA</h3><p><strong>Level II</strong><br />Candidate</p></article>
            <article><span className="aj-fact-icon">▥</span><h3>Skills</h3><p>Finance · Analysis<br />Python · Excel<br />Content · Video</p></article>
          </div>
        </div>
      </section>

      <section className="aj-section aj-contact-section" id="contact">
        <div className="aj-container aj-contact-grid">
          <div className="aj-contact-intro">
            <p className="aj-eyebrow aj-eyebrow-accent">CONTACT</p>
            <h2>Have something interesting in mind?</h2>
            <p>Whether it&apos;s a professional opportunity, a project collaboration, or just a conversation, I&apos;m always open to connect.</p>
          </div>
          <div className="aj-contact-action aj-contact-action-home">
            <span className="aj-paper-plane" aria-hidden="true">↗</span>
            <a href="mailto:jain.aman3789@gmail.com?subject=Hello%20Aman%20%E2%80%94%20from%20your%20website" className="aj-button aj-button-primary">Let&apos;s talk <span aria-hidden="true">→</span></a>
          </div>
          <div className="aj-contact-details">
            <a href="mailto:jain.aman3789@gmail.com" className="aj-contact-detail"><span aria-hidden="true">✉</span> jain.aman3789@gmail.com</a>
            <p className="aj-contact-detail"><span aria-hidden="true">⌖</span> Bengaluru, India</p>
            <p className="aj-contact-note">Open to opportunities, projects and collaborations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
