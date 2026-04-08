"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    // A small delay to ensure DOM is fully painted
    const initObserver = () => {
      const reveals = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("up");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
      );
      reveals.forEach((el) => observer.observe(el));
      
      return observer;
    };
    
    const observer = initObserver();
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
