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

    // Keep the existing GSAP reveal behavior for sections already marked .reveal.
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

    // Add restrained Spider-Verse motion to the current Next.js pages without
    // changing their layout, palette, copy, or component structure.
    const motionSelector = [
      'main > section > div[class*="max-w-7xl"][class*="flex"][class*="relative"] > div',
      'main [class*="grid-cols-"] > div',
      'main [class*="space-y-4"] > div',
      "main article",
      "main h1",
      "main h2",
    ].join(",");

    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(motionSelector)
    ).filter((element) => !element.closest(".reveal"));

    const candidateSet = new Set(candidates);
    const targets = candidates.filter((element) => {
      let ancestor = element.parentElement;
      while (ancestor && ancestor.tagName !== "MAIN") {
        if (candidateSet.has(ancestor)) return false;
        ancestor = ancestor.parentElement;
      }
      return true;
    });

    // Stagger sibling cards lightly; avoid a long chain of delayed elements.
    targets.forEach((element) => {
      const siblings = targets.filter(
        (candidate) => candidate.parentElement === element.parentElement
      );
      const siblingIndex = Math.max(0, siblings.indexOf(element));
      const delay = Math.min(siblingIndex, 3) * 75;
      element.style.setProperty("--spider-motion-delay", `${delay}ms`);
      element.classList.add("spider-motion-ready");
    });

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -6% 0px",
        }
      );
      targets.forEach((target) => observer?.observe(target));
    } else {
      targets.forEach((target) => target.classList.add("is-visible"));
    }

    // Refresh scroll triggers once the page has settled and content is measured.
    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      batchTriggers.forEach((trigger) => trigger.kill());
      targets.forEach((target) => {
        target.classList.remove("spider-motion-ready", "is-visible");
        target.style.removeProperty("--spider-motion-delay");
      });
    };
  }, []);

  return null;
}
