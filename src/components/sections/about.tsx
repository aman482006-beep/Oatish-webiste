"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  const [isUnmasked, setIsUnmasked] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-[var(--tech-bg)] flex items-center justify-center overflow-hidden border-t border-[rgba(224,27,27,0.28)]"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[rgba(224,27,27,0.1)] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-[var(--spidey-red-deep)] opacity-10 blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10 sm:gap-12 lg:gap-16 z-10 relative">
        
        {/* Left Side: Interactive Spider-Man -> Face Hover Card */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div
            className="w-full max-w-[360px] sm:max-w-[480px] aspect-[4/5] relative rounded-3xl overflow-hidden border border-[rgba(224,27,27,0.28)] bg-[var(--tech-card)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group select-none shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            onMouseEnter={() => setIsUnmasked(true)}
            onMouseLeave={() => setIsUnmasked(false)}
            onClick={() => setIsUnmasked(!isUnmasked)}
          >
            {/* Real Face Layer Underneath */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/profile-2.png"
                alt="Aman Jain Revealed"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
            </div>

            {/* Spider-Man Mask Layer on Top (Peels / Fades on Hover) */}
            <div
              className={`absolute inset-0 w-full h-full z-10 transition-all duration-700 ease-out bg-[#000000] ${
                isUnmasked
                  ? "opacity-0 -translate-y-8 scale-105 pointer-events-none"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              <Image
                src="/spiderman/mask.png"
                alt="Spider-Man Mask"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-75" />
            </div>

            {/* Subtle Hover Cue Banner */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full bg-[#000000]/80 backdrop-blur-md border border-[var(--spidey-red)]/50 text-[10px] font-mono tracking-widest text-white uppercase shadow-[0_0_10px_rgba(224,27,27,0.3)]">
              {isUnmasked ? "● IDENTITY REVEALED" : "✦ TAP OR TAP OR HOVER TO UNMASK"}
            </div>

            {/* Red flash sweep effect on hover transition */}
            <div
              className={`absolute inset-0 z-15 bg-[var(--spidey-red)] mix-blend-screen pointer-events-none transition-opacity duration-300 ${
                isUnmasked ? "opacity-25" : "opacity-0"
              }`}
            />
          </div>

          {/* Floating badge with Spider-Man Red */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-6 sm:-right-4 bg-[#000000] text-white px-3 sm:px-7 py-3 sm:py-4 rounded-2xl border-2 border-[var(--spidey-red)] transform sm:rotate-[-3deg] transition-transform z-20 shadow-[0_10px_30px_rgba(224,27,27,0.3)] max-w-[calc(100%-1rem)] text-center">
            <span className="font-display text-lg sm:text-2xl font-bold block tracking-wider text-center">FINANCE × TECH</span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[var(--spidey-red)] text-center block mt-0.5">
              BUILDING IN PUBLIC
            </span>
          </div>
        </div>

        {/* Right Side: Content Block */}
        <div className="w-full lg:w-1/2 p-5 sm:p-10 lg:p-12 bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] rounded-3xl text-white relative z-10 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-bg)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>ABOUT AMAN JAIN</span>
          </div>
          
          <h2 className="font-display font-bold leading-[1.05] tracking-tight mb-6 text-white uppercase text-3xl sm:text-5xl">
            NOT JUST A<br />
            <span className="text-[var(--spidey-red)]">FINANCE GUY</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed text-[var(--tech-text)]/90 font-sans mb-5">
            I&apos;m a BBA student studying <strong className="text-white font-semibold">Finance & Marketing Analytics</strong> at CHRIST University in Bengaluru. I explore the intersections between financial markets, algorithmic software, and public learning.
          </p>
          
          <p className="text-sm sm:text-base leading-relaxed text-[var(--tech-text-muted)] font-sans mb-6">
            Currently preparing as a <strong className="text-white font-semibold">CFA Level II candidate</strong>, building financial terminal tools in Python, and documenting my learning journey through video content so I can test and share ideas in public.
          </p>
          
          <div className="bg-[var(--tech-bg)] border-l-4 border-[var(--tech-accent)] p-5 mb-8 rounded-r-xl">
            <p className="text-sm sm:text-base font-sans text-white/90 leading-relaxed italic">
              &ldquo;I study finance. I build with technology. I create to make ideas useful.&rdquo;
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { icon: "📊", text: "Financial Analytics" },
              { icon: "💻", text: "Python & Next.js" },
              { icon: "📈", text: "CFA Level II Candidate" },
              { icon: "🎬", text: "Creator" },
              { icon: "🏛️", text: "CHRIST University" },
              { icon: "🚀", text: "Building in Public" }
            ].map((pillar) => (
              <span
                key={pillar.text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] text-xs font-mono text-[var(--tech-text-muted)] hover:text-white hover:border-[var(--tech-accent)]/40 transition-colors select-none"
              >
                <span>{pillar.icon}</span>
                <span>{pillar.text}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
