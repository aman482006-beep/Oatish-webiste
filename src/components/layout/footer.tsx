import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--tech-bg)] border-t border-[#232936] text-[var(--tech-text-muted)] pt-12 pb-8 px-6 sm:px-12 lg:px-20">
      {/* Spider-Man hanging web strand from top edge */}
      <div className="absolute top-0 right-16 sm:right-28 pointer-events-none z-10 flex flex-col items-center animate-strand-swing origin-top">
        <div className="w-[1.5px] h-14 bg-gradient-to-b from-white/30 via-[var(--tech-accent)] to-[var(--tech-accent)] shadow-[0_0_8px_var(--tech-accent)]" />
        <div className="w-5 h-5 rounded-full bg-[var(--tech-card)] border border-[var(--tech-accent)] p-1 flex items-center justify-center shadow-[0_0_10px_var(--tech-accent)]">
          <Image
            src="/spiderman/emblem.svg"
            alt=""
            width={14}
            height={14}
            className="w-3.5 h-3.5 object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#232936]/60">
        <div>
          <div className="text-2xl font-bold font-display tracking-wider text-white mb-2">
            AMAN <span className="text-[var(--tech-accent)]">JAIN</span>
          </div>
          <p className="text-xs font-mono text-[var(--tech-text-muted)] max-w-sm">
            Finance × Technology × Communication. BBA student at CHRIST University exploring analytical tools, fintech, and public learning.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
          <li><Link href="/" className="hover:text-[var(--tech-accent)] transition-colors">Home</Link></li>
          <li><Link href="/work" className="hover:text-[var(--tech-accent)] transition-colors">Work</Link></li>
          <li><Link href="/creator" className="hover:text-[var(--tech-accent)] transition-colors">Creator</Link></li>
          <li><Link href="/recruiters" className="text-[var(--tech-accent)] hover:underline">Recruiters</Link></li>
          <li><Link href="/resources" className="hover:text-[var(--tech-accent)] transition-colors">Resources</Link></li>
          <li><Link href="/contact" className="hover:text-[var(--tech-accent)] transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[var(--tech-text-muted)]/70 gap-4">
        <div>© 2026 Aman Jain · amanmalu.me · All rights reserved</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/aman482006-beep" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/amanmalu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <span>·</span>
          <a href="https://www.youtube.com/@AmanJain-4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
          <span>·</span>
          <a href="https://www.instagram.com/aman.ja1n/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
