"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "WORK", href: "/work" },
    { label: "CREATOR", href: "/creator" },
    { label: "RECRUITERS", href: "/recruiters", badge: "HIRING" },
    { label: "RESOURCES", href: "/resources" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] h-[68px] sm:h-[72px] px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-3 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/95 backdrop-blur-md border-b border-[rgba(224,27,27,0.28)] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#000000]/80 backdrop-blur-sm border-b border-white/[0.06]"
      }`}
    >
      <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 font-display tracking-wider text-xl text-white group select-none" aria-label="Aman Jain Portfolio Home">
        <Image src="/spiderman/emblem.svg" alt="Aman Jain Emblem" width={32} height={32} className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110" priority />
        <div className="flex flex-col min-w-0">
          <span className="font-bold tracking-widest text-[13px] sm:text-sm text-white whitespace-nowrap">AMAN <span className="text-[var(--tech-accent)]">JAIN</span></span>
          <span className="text-[9px] font-mono tracking-widest text-[var(--tech-text-muted)] -mt-1 hidden sm:block">FINANCE × TECH</span>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-1.5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.label} href={link.href} aria-current={isActive ? "page" : undefined}
              className={`relative min-h-10 px-3 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                isActive ? "bg-[rgba(224,27,27,0.15)] text-[var(--tech-accent)] font-semibold border border-[rgba(224,27,27,0.3)] shadow-[0_0_12px_rgba(224,27,27,0.15)]" : "text-[var(--tech-text-muted)] hover:text-white hover:bg-white/[0.04]"
              }`}>
              <span>{link.label}</span>
              {link.badge && <span className="px-1.5 py-0.5 rounded text-[8px] bg-[var(--tech-accent)] text-white font-mono font-bold tracking-wider">{link.badge}</span>}
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Link href="/contact" className="min-h-10 px-5 py-2 rounded-lg bg-[var(--tech-accent)] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[var(--tech-accent-hover)] transition-all duration-200 shadow-[0_0_15px_rgba(224,27,27,0.25)] hover:shadow-[0_0_22px_rgba(224,27,27,0.4)]">LET&apos;S TALK</Link>
      </div>

      <button type="button" onClick={() => setMobileMenuOpen((open) => !open)}
        className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white hover:border-[var(--tech-accent)] hover:text-[var(--tech-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tech-accent)]"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
        </svg>
      </button>

      <div id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!mobileMenuOpen}
        className={`lg:hidden absolute top-[68px] sm:top-[72px] left-0 right-0 max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain bg-[#000000]/[0.98] backdrop-blur-xl border-b border-[rgba(224,27,27,0.28)] px-4 sm:px-6 py-4 sm:py-6 shadow-2xl flex flex-col gap-2 transition-all duration-200 ${
          mobileMenuOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2 pointer-events-none"
        }`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={isActive ? "page" : undefined} tabIndex={mobileMenuOpen ? 0 : -1}
              className={`min-h-11 px-4 py-3 rounded-lg text-sm font-mono tracking-wider transition-colors flex items-center justify-between gap-3 ${
                isActive ? "bg-[rgba(224,27,27,0.15)] text-[var(--tech-accent)] font-semibold border border-[rgba(224,27,27,0.3)]" : "text-[var(--tech-text-muted)] hover:text-white hover:bg-white/[0.04]"
              }`}>
              <span>{link.label}</span>
              {link.badge && <span className="px-1.5 py-0.5 rounded text-[9px] bg-[var(--tech-accent)] text-white font-mono font-bold tracking-wider">{link.badge}</span>}
            </Link>
          );
        })}
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} tabIndex={mobileMenuOpen ? 0 : -1}
          className="mt-2 min-h-11 text-center flex items-center justify-center py-3 px-4 rounded-lg bg-[var(--tech-accent)] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[var(--tech-accent-hover)] transition-all">LET&apos;S TALK</Link>
      </div>
    </nav>
  );
}
