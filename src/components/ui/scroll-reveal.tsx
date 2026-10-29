"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReducedMotion) {
      gsap.set(".reveal", { opacity: 1, x: 0 });
      return;
    }

    // Set initial state for elements marked with .reveal
    // Clean entry from the right
    gsap.set(".reveal", {
      opacity: 0,
      x: 50,
    });

    const batchTriggers = ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: "auto",
        });
      },
    });

    // Refresh after DOM layout is stabilized
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      batchTriggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
