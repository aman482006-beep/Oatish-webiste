"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[1000] pointer-events-none bg-[var(--aj-line)]"
      aria-hidden="true"
    >
      <div
        className="aj-scroll-progress-fill h-full bg-[var(--aj-orange)] transition-transform duration-75 ease-out origin-left relative"
        style={{ transform: `scaleX(${progress / 100})` }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--aj-orange)]" />
      </div>
    </div>
  );
}
