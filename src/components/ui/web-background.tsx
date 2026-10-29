"use client";

import { useEffect, useRef } from "react";

export function WebBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;
    const animate = () => {
      curX += (mouseX - curX) * 0.04;
      curY += (mouseY - curY) * 0.04;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${curX - 350}px, ${curY - 350}px, 0)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[var(--spidey-black)]" aria-hidden="true">
      {/* Spiderweb SVG Texture Layer — subtle ~2.5% opacity for clean minimal depth */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] stroke-white"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="spiderweb-pattern" width="320" height="320" patternUnits="userSpaceOnUse">
            <line x1="160" y1="160" x2="0" y2="0" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="160" y2="0" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="320" y2="0" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="320" y2="160" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="320" y2="320" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="160" y2="320" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="0" y2="320" stroke="currentColor" strokeWidth="0.5" />
            <line x1="160" y1="160" x2="0" y2="160" stroke="currentColor" strokeWidth="0.5" />

            <circle cx="160" cy="160" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="160" cy="160" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="160" cy="160" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="160" cy="160" r="158" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spiderweb-pattern)" />
      </svg>

      {/* Floating interactive soft red radial glow that slowly drifts */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(224,27,27,0.12)_0%,rgba(143,13,13,0.04)_40%,transparent_70%)] blur-[90px] will-change-transform pointer-events-none"
      />
    </div>
  );
}

export function CornerWeb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-6 h-6 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity stroke-[var(--spidey-red)] ${className}`}
      aria-hidden="true"
    >
      <path d="M0 0 L40 0" strokeWidth="0.75" />
      <path d="M0 0 L0 40" strokeWidth="0.75" />
      <path d="M0 0 L30 30" strokeWidth="0.5" />
      <path d="M12 0 C12 6, 6 12, 0 12" strokeWidth="0.5" />
      <path d="M24 0 C24 13, 13 24, 0 24" strokeWidth="0.5" />
    </svg>
  );
}
