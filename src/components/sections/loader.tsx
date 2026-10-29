"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<SVGGElement>(null);
  const rightRef = useRef<SVGGElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip if visited in this session or prefers reduced motion
    const visited = sessionStorage.getItem("spidey_visited");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (visited || prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("spidey_visited", "true");
          setVisible(false);
        },
      });

      // Find all stroke drawing lines in the SVG
      const strokeElements = containerRef.current?.querySelectorAll(".loader-stroke");

      if (strokeElements && strokeElements.length > 0) {
        strokeElements.forEach((el) => {
          const path = el as SVGGeometryElement;
          const len = path.getTotalLength ? path.getTotalLength() : 300;
          gsap.set(path, {
            strokeDasharray: len,
            strokeDashoffset: len,
            opacity: 1,
          });
        });

        // 1. Draw strokes (0.8s)
        tl.to(strokeElements, {
          strokeDashoffset: 0,
          duration: 0.85,
          ease: "power2.out",
          stagger: 0.04,
        });
      }

      // 2. Red pulse glow behind emblem (0.4s)
      tl.to(
        pulseRef.current,
        {
          opacity: 0.85,
          scale: 1.35,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // 3. Halves split open and slide apart (0.55s)
      tl.to(
        leftRef.current,
        {
          x: -120,
          opacity: 0,
          duration: 0.55,
          ease: "power3.inOut",
        },
        "+=0.1"
      );

      tl.to(
        rightRef.current,
        {
          x: 120,
          opacity: 0,
          duration: 0.55,
          ease: "power3.inOut",
        },
        "<"
      );

      // 4. Fade container out to reveal hero
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "-=0.25"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--spidey-black)] select-none pointer-events-auto"
    >
      {/* Red ambient pulse behind the emblem */}
      <div
        ref={pulseRef}
        className="absolute w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(224,27,27,0.6)_0%,rgba(143,13,13,0.25)_40%,transparent_70%)] blur-[40px] opacity-0 pointer-events-none"
      />

      <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Left Half */}
          <g ref={leftRef} id="loader-left">
            <path
              className="loader-stroke"
              d="M 100 68 L 93 78 L 100 84 Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <path
              className="loader-stroke"
              d="M 100 86 L 90 102 L 94 122 L 100 138 Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <path
              className="loader-stroke"
              d="M 94 88 L 74 62 L 62 30 L 52 38"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="loader-stroke"
              d="M 92 95 L 64 78 L 44 68 L 36 78"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="loader-stroke"
              d="M 92 108 L 62 120 L 42 144 L 46 156"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="loader-stroke"
              d="M 95 118 L 76 142 L 64 174 L 72 182"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Right Half */}
          <g ref={rightRef} id="loader-right">
            <path
              className="loader-stroke"
              d="M 100 68 L 107 78 L 100 84 Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <path
              className="loader-stroke"
              d="M 100 86 L 110 102 L 106 122 L 100 138 Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <path
              className="loader-stroke"
              d="M 106 88 L 126 62 L 138 30 L 148 38"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="loader-stroke"
              d="M 108 95 L 136 78 L 156 68 L 164 78"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="loader-stroke"
              d="M 108 108 L 138 120 L 158 144 L 154 156"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="loader-stroke"
              d="M 105 118 L 124 142 L 136 174 L 128 182"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <button
        onClick={() => {
          sessionStorage.setItem("spidey_visited", "true");
          setVisible(false);
        }}
        className="mt-8 text-xs font-mono tracking-widest text-[var(--spidey-red)] uppercase opacity-60 hover:opacity-100 transition-opacity"
      >
        [ SKIP INTRO ]
      </button>
    </div>
  );
}
