import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/aman482006-beep", mark: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanmalu/", mark: "in" },
  { label: "YouTube", href: "https://www.youtube.com/@AmanJain-4", mark: "▶" },
  { label: "Instagram", href: "https://www.instagram.com/aman.ja1n/", mark: "◎" },
];

export function Footer() {
  return (
    <footer className="aj-footer">
      <div className="aj-container aj-footer-inner">
        <Link href="/" className="aj-brand" aria-label="Aman Jain — Home">
          <span className="aj-brand-monogram">AJ<span>.</span></span>
          <span className="aj-brand-name">AMAN JAIN</span>
        </Link>
        <nav aria-label="Footer navigation" className="aj-footer-nav">
          <Link href="/">Home</Link><Link href="/work">Work</Link><Link href="/creator">Creator</Link><Link href="/recruiters">Recruiters</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link>
        </nav>
        <div className="aj-footer-socials">
          {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}><span className={"aj-footer-social-mark aj-footer-mark-" + social.mark.replace(/[^a-z0-9]/gi, "").toLowerCase()} aria-hidden="true">{social.mark}</span></a>)}
        </div>
        <p className="aj-footer-copy">© {new Date().getFullYear()} Aman Jain.<br />Built with curiosity.</p>
      </div>
    </footer>
  );
}
