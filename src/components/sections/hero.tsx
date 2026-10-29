"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const [hudActive, setHudActive] = useState(true);

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-[var(--tech-bg)] pt-24 pb-12 px-4 sm:pb-16 sm:px-12 lg:px-20 select-none">
      
      {/* Cinematic Red Ambient Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(224,27,27,0.2)_0%,rgba(143,13,13,0.06)_50%,transparent_75%)] blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(224,27,27,0.08)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

      {/* Massive Background Typography Layer for Depth */}
      <div
        className="absolute bottom-6 right-0 font-display text-[clamp(8rem,24vw,22rem)] text-white/[0.03] tracking-tighter leading-none select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        SPIDEY
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
        
        {/* Left Column: Headline, Pitch & Interactive Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center py-6 z-20">
          
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--spidey-red)]/40 bg-[var(--tech-card)] text-[var(--spidey-red)] font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] mb-5 sm:mb-6 shadow-[0_0_15px_rgba(224,27,27,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[var(--spidey-red)] animate-ping" />
            <span>FINANCE / TECHNOLOGY / CREATE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-[clamp(2.35rem,9.5vw,4.6rem)] sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] mb-6">
            I STUDY FINANCE.<br />
            <span className="text-[var(--spidey-red)]">I BUILD</span> WITH TECH.<br />
            I CREATE TO MAKE IDEAS USEFUL.
          </h1>

          <div className="w-16 sm:w-16 sm:w-20 h-[3px] bg-[var(--spidey-red)] mb-6 shadow-[0_0_10px_var(--spidey-red)]" />

          {/* Authentic Pitch Text */}
          <p className="text-base sm:text-lg text-[var(--tech-text)]/90 leading-relaxed font-body max-w-xl mb-8">
            I&apos;m <strong className="text-white font-bold">Aman Jain</strong>, a BBA student at{" "}
            <span className="text-[var(--tech-accent)] font-semibold">CHRIST University</span> exploring financial analysis, fintech, AI-powered tools and educational content. I like turning what I learn into projects I can test, improve and share.
          </p>

          {/* Action CTAs */}
          <div className="flex w-full sm:w-auto flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="/work" className="spidey-btn w-full sm:w-auto justify-center">
              Explore My Work
            </Link>
            <Link
              href="/creator"
              className="spidey-pill w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>✦</span> Explore My Content
            </Link>
          </div>

          {/* Subtle links to GitHub & LinkedIn */}
          <div className="flex items-center gap-4 mt-6 text-xs font-mono text-[var(--tech-text-muted)]">
            <span>External:</span>
            <a
              href="https://github.com/aman482006-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--tech-accent)] transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/amanmalu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--tech-accent)] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
          </div>

          {/* Red HUD Status Toggle */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10 w-full max-w-md">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--tech-text-muted)]">
              SUIT HUD
            </span>
            <button
              onClick={() => setHudActive(!hudActive)}
              className="relative w-12 h-6 rounded-full bg-[var(--tech-card)] border border-[var(--spidey-red)]/60 p-0.5 cursor-pointer transition-colors shadow-[0_0_8px_rgba(224,27,27,0.3)]"
              aria-label="Toggle Suit HUD"
            >
              <div
                className={`w-4 h-4 rounded-full bg-[var(--spidey-red)] transition-transform duration-300 ${
                  hudActive ? "translate-x-6 shadow-[0_0_10px_#ff0000]" : "translate-x-0 bg-white/50"
                }`}
              />
            </button>
            <span className="font-mono text-xs text-[var(--spidey-red)] font-semibold tracking-wider">
              {hudActive ? "ONLINE" : "STANDBY"}
            </span>
          </div>

        </div>

        {/* Right Column: Towering, Large Transparent Spider-Man Figure */}
        <div className="w-full lg:w-1/2 h-[min(58vh,360px)] min-h-[250px] sm:h-[550px] lg:h-[700px] relative flex items-end justify-center lg:justify-end pointer-events-none z-10">
          <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] h-full animate-spidey-float flex items-end justify-center">
            <Image
              src="/spiderman/hero-spiderman-transparent.png"
              alt="Spider-Man"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_15px_45px_rgba(224,27,27,0.35)] filter contrast-105 brightness-105"
              sizes="(max-width: 1024px) 90vw, 620px"
            />
          </div>
        </div>

      </div>

      {/* Hanging Web Strand Scroll Indicator at bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-auto">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-white/50 hover:text-[var(--spidey-red)] transition-colors cursor-pointer"
          aria-label="Scroll down to About"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase group-hover:text-[var(--spidey-red)] transition-colors">
            SCROLL
          </span>
          <div className="relative w-[1.5px] h-8 bg-gradient-to-b from-white/30 via-[var(--spidey-red)] to-[var(--spidey-red)] shadow-[0_0_6px_var(--spidey-red)] animate-strand-swing origin-top">
            <div className="absolute -bottom-1 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[var(--spidey-red)] shadow-[0_0_6px_var(--spidey-red)]" />
          </div>
        </a>
      </div>

    </section>
  );
}
