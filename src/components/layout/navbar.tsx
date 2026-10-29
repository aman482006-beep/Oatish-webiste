"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Creator", href: "/creator" },
  { label: "Recruiters", href: "/recruiters" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("aj-menu-open", mobileMenuOpen);
    return () => document.body.classList.remove("aj-menu-open");
  }, [mobileMenuOpen]);

  return (
    <header className={"aj-site-header" + (scrolled ? " is-scrolled" : "")}>
      <nav className="aj-nav aj-container" aria-label="Main navigation">
        <Link href="/" className="aj-brand" aria-label="Aman Jain — Home" onClick={() => setMobileMenuOpen(false)}>
          <span className="aj-brand-monogram">AJ<span>.</span></span>
          <span className="aj-brand-name">AMAN JAIN</span>
        </Link>

        <div className={"aj-nav-links" + (mobileMenuOpen ? " is-open" : "")} id="primary-navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return <Link key={link.href} href={link.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>;
          })}
          <Link href="/resources" className="aj-mobile-resource" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
          <Link href="/contact" className="aj-mobile-cta" onClick={() => setMobileMenuOpen(false)}>Let&apos;s connect <span aria-hidden="true">↗</span></Link>
        </div>

        <Link href="/contact" className="aj-nav-cta"> <span /> Let&apos;s connect <b aria-hidden="true">›</b> </Link>
        <button className="aj-menu-toggle" type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="primary-navigation" onClick={() => setMobileMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </nav>
    </header>
  );
}
