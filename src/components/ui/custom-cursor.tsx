"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // default true to avoid flash on mobile

  useEffect(() => {
    // Check for touch / fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouch(false);
    } else {
      setIsTouch(true);
      return;
    }

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    let animationFrameId: number;

    const animateCursor = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        aria-hidden="true"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--spidey-red)] shadow-[0_0_10px_var(--spidey-red)]" />
      </div>

      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out will-change-transform ${
          isHovered
            ? "scale-175 border-[var(--spidey-red)] bg-[rgba(224,27,27,0.12)] shadow-[0_0_24px_rgba(224,27,27,0.4)]"
            : "scale-100 border-[rgba(224,27,27,0.4)] bg-transparent"
        }`}
        aria-hidden="true"
      >
        <div className="w-8 h-8 rounded-full border border-current" />
      </div>
    </>
  );
}
