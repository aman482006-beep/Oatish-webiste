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
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 h-[72px] px-6 sm:px-10 lg:px-16 flex items-center justify-between ${
        scrolled
          ? "bg-[#0B0D12]/95 backdrop-blur-md border-b border-[#232936] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#0B0D12]/80 backdrop-blur-sm border-b border-white/[0.06]"
      }`}
    >
      {/* Brand Logo */}
      <Link
        href="/"
        className="flex items-center gap-3 font-display tracking-wider text-xl text-white group select-none"
        aria-label="Aman Jain Portfolio Home"
      >
        <Image
          src="/spiderman/emblem.svg"
          alt="Aman Jain Emblem"
          width={32}
          height={32}
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          priority
        />
        <div className="flex flex-col">
          <span className="font-bold tracking-widest text-sm text-white">
            AMAN <span className="text-[var(--tech-accent)]">JAIN</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[var(--tech-text-muted)] -mt-1 hidden sm:block">
            FINANCE × TECH
          </span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-1.5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? "bg-[rgba(255,133,71,0.15)] text-[var(--tech-accent)] font-semibold border border-[rgba(255,133,71,0.3)] shadow-[0_0_12px_rgba(255,133,71,0.15)]"
                  : "text-[var(--tech-text-muted)] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="px-1.5 py-0.2 rounded text-[8px] bg-[var(--tech-accent)] text-[#0B0D12] font-mono font-bold tracking-wider">
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Action CTA */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/contact"
          className="px-5 py-2 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[var(--tech-accent-hover)] transition-all duration-200 shadow-[0_0_15px_rgba(255,133,71,0.25)] hover:shadow-[0_0_22px_rgba(255,133,71,0.4)]"
        >
          LET&apos;S TALK
        </Link>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 text-white hover:text-[var(--tech-accent)] transition-colors focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-[#0B0D12]/98 backdrop-blur-xl border-b border-[#232936] p-6 shadow-2xl flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-colors flex items-center justify-between ${
                  isActive
                    ? "bg-[rgba(255,133,71,0.15)] text-[var(--tech-accent)] font-semibold border border-[rgba(255,133,71,0.3)]"
                    : "text-[var(--tech-text-muted)] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-[var(--tech-accent)] text-[#0B0D12] font-mono font-bold tracking-wider">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-lg bg-[var(--tech-accent)] text-[#0B0D12] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[var(--tech-accent-hover)] transition-all"
          >
            LET&apos;S TALK
          </Link>
        </div>
      )}
    </nav>
  );
}
