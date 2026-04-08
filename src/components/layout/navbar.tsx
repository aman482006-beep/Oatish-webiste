"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simple geometric brutalist logo to match the aesthetic */}
          <rect x="10" y="20" width="20" height="60" fill="black" />
          <rect x="40" y="40" width="20" height="40" fill="black" />
          <rect x="70" y="10" width="20" height="70" fill="black" />
        </svg>
      </a>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#worlds">WORLDS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#socials">CONNECT</a></li>
        </ul>
        <a href="#socials" className="nav-cta">LET&apos;S TALK</a>
      </div>
    </nav>
  );
}
