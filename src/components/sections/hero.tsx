"use client";

import { useState } from "react";
import Image from "next/image";

export function Hero() {
  const [theme, setTheme] = useState("BLUE");

  return (
    <section className={`hero theme-${theme.toLowerCase()}`}>
      {/* Background vector graphics / shapes emulation */}
      <div className="hero-bg-shapes">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-shape shape-4"></div>
      </div>

      <div className="hero-content">
        {/* Left column — text card */}
        <div className="hero-text-card">
          <h1 className="hero-headline">HEY!</h1>
          <hr className="hero-divider" />
          <p className="hero-pitch">
            You&apos;ve arrived at the portfolio of <strong>Aman Malu</strong> – a full stack finance creator, developer and analyst based in India. Feel free to explore my work and a few of my favourite things.
          </p>
        </div>

        {/* Right column — photo */}
        <div className="hero-visual">
          <div className="hero-photo-container">
            <Image
              src="/profle.png"
              alt="Hero Character"
              width={800}
              height={1000}
              priority
              className="hero-photo"
            />
          </div>
        </div>
      </div>

      {/* Theme Toggle element matching the image */}
      <div className="theme-toggle-wrap">
        <span className="toggle-label">GOLD</span>
        <div className="toggle-switch" onClick={() => setTheme(theme === "BLUE" ? "GOLD" : "BLUE")}>
          <div className={`toggle-knob ${theme === "GOLD" ? "active" : ""}`}></div>
        </div>
      </div>
    </section>
  );
}
