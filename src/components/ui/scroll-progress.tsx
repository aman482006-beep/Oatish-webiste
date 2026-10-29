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
      className="fixed top-0 left-0 right-0 h-[2px] z-[1000] pointer-events-none bg-black/40"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[var(--spidey-red)] shadow-[0_0_8px_var(--spidey-red),0_0_16px_var(--spidey-red)] transition-[width] duration-75 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* Subtle glowing web droplet on the thread head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
      </div>
    </div>
  );
}
