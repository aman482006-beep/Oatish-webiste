"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent } from "react";
import { LatestVideos } from "@/components/sections/latest-videos";

const socials = [
  { label: "GitHub", href: "https://github.com/aman482006-beep", mark: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanmalu/", mark: "in" },
  { label: "YouTube", href: "https://www.youtube.com/@AmanJain-4", mark: "▶" },
  { label: "Instagram", href: "https://www.instagram.com/aman.ja1n/", mark: "◎" },
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

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = encodeURIComponent("A message from " + name + " via amanmalu.me");
  const body = encodeURIComponent("Hey Aman,\n\n" + message + "\n\nFrom: " + name + "\nEmail: " + email);
  window.location.href = "mailto:jain.aman3789@gmail.com?subject=" + subject + "&body=" + body;
}

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
                  <span className={"aj-social-mark aj-social-" + social.mark.replace(/[^a-z0-9]/gi, "")}>{social.mark}</span>
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
              <Image src="/profile-2.png" alt="Aman Jain" fill priority sizes="(max-width: 900px) 78vw, 440px" className="aj-profile-image" />
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
            <Link className="aj-text-link" href="/work">View project <span aria-hidden="true">→</span></Link>
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
              <div className="aj-app-kicker">PRODUCTIVITY <span>•</span> WEB APP <span>•</span> COMMUNITY</div>
              <h3>Fokus</h3>
              <p>A minimal study and productivity platform to help you focus, track progress and stay accountable with friends. Built around a clean interface and the idea that progress is easier together.</p>
              <div className="aj-feature-actions">
                <Link href="/work" className="aj-button aj-button-primary">View project <span aria-hidden="true">→</span></Link>
                <a href="https://github.com/aman482006-beep/FOKUS-PRODUCTIVITY" target="_blank" rel="noopener noreferrer" className="aj-button aj-button-outline"><span aria-hidden="true">⌘</span> View on GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div id="creator"><LatestVideos /></div>

      <section className="aj-section aj-recruiters-section" id="recruiters">
        <div className="aj-container aj-recruiters-grid">
          <div className="aj-recruiter-intro">
            <p className="aj-eyebrow aj-eyebrow-accent">RECRUITERS</p>
            <h2>A quick overview.</h2>
            <p>My education, internships, skills and career interests in one place.</p>
            <Link href="/recruiters" className="aj-button aj-button-primary">View full profile <span aria-hidden="true">→</span></Link>
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
          <div className="aj-contact-action">
            <span className="aj-paper-plane" aria-hidden="true">↗</span>
            <form onSubmit={handleContactSubmit} className="aj-contact-form">
              <label><span>Your name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label><span>Your email</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label className="aj-message-field"><span>Message</span><textarea name="message" required rows={2} placeholder="What would you like to talk about?" /></label>
              <button type="submit" className="aj-button aj-button-primary">Let&apos;s talk <span aria-hidden="true">→</span></button>
              <p className="aj-form-note">Opens your email app with the message ready to send.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
