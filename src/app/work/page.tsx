"use client";

const FOKUS_STORE_URL = "https://apps.microsoft.com/detail/9p7njldq8gkk?hl=en-GB&gl=IN";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--tech-bg)] text-[var(--tech-text)] pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--tech-accent)]/30 bg-[var(--tech-card)] text-[var(--tech-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tech-accent)]" />
            <span>APPS & TOOLS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-5">
            Fokus App
          </h1>
          <p className="text-[var(--tech-text-muted)] text-base sm:text-lg leading-relaxed font-sans">
            Explore Fokus App for Windows. I’m keeping this section focused on the app for now and will add my next project when it is ready to share.
          </p>
        </div>

        <article className="max-w-4xl rounded-2xl bg-[var(--tech-card)] border border-[rgba(224,27,27,0.28)] p-5 sm:p-10 hover:border-[var(--tech-accent)]/50 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--tech-bg)] border border-[rgba(224,27,27,0.28)] flex items-center justify-center shrink-0 text-[var(--tech-accent)]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-accent)] bg-[var(--tech-accent)]/10 px-2.5 py-1 rounded border border-[var(--tech-accent)]/20">
                  Windows App
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--tech-text-muted)]">
                  Free download
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-wide text-white mb-3">
                Fokus App
              </h2>
              <p className="text-sm sm:text-base text-[var(--tech-text-muted)] leading-relaxed max-w-2xl mb-7">
                Get Fokus App from the Microsoft Store and install it on your Windows device.
              </p>
              <a
                href={FOKUS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 min-h-11 rounded-lg bg-[var(--tech-accent)] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--tech-accent-hover)] transition-all duration-200"
              >
                <span>Get Fokus App on Microsoft Store</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
