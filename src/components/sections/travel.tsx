"use client";

import Image from "next/image";

export function Travel() {
  const cities = [
    { name: "Dubai", landmark: "Burj / Skyline", vector: "/china-vector.svg" }, // Dubai maps to china-vector.svg per project asset specification
    { name: "New York", landmark: "Metropolis", vector: "/flag-vector.svg" },
    { name: "Switzerland", landmark: "Alps & Lakes", vector: "/switzerland-vector.svg" },
    { name: "Paris", landmark: "Capital of Art", vector: "/italy-vector.svg" },
    { name: "Tokyo", landmark: "Neo Shibuya", vector: "/tokyo-tower-vector.svg" },
  ];

  return (
    <section className="projects-section !p-6 md:!p-16 lg:!p-24" id="travel">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10 relative">
        
        {/* Left Column: Information and City Chips */}
        <div className="w-full lg:w-1/2 reveal flex flex-col justify-center">
          <div className="section-label mb-6">
            ✦ WANDERLUST
          </div>
          
          <h2 className="projects-headline !m-0 !mb-8">
            Cities I<br />
            <span className="text-[var(--spidey-red)] drop-shadow-[0_0_25px_rgba(224,27,27,0.5)]">
              Will Conquer
            </span>
          </h2>
          
          <div className="spidey-card p-8 rounded-2xl mb-8">
            <p className="m-0 text-lg leading-relaxed text-[var(--spidey-white)]/90 font-medium">
              Building the life and the business to afford the freedom to go anywhere. Here are the places on my bucket list to secure the bag, hit the gym, and film content.
            </p>
          </div>
          
          {/* City Chips */}
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <span
                key={city.name}
                className="spidey-pill cursor-pointer"
              >
                {city.name}
              </span>
            ))}
          </div>

          <div className="mt-6 font-mono text-[11px] text-[var(--spidey-muted)] flex items-center gap-2 opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--spidey-red)]" />
            <span>Map Asset Note: Dubai routes to china-vector.svg</span>
          </div>
        </div>

        {/* Right Column: Clean Landmark Vector Showcase Cards (Replacing the globe) */}
        <div className="w-full lg:w-1/2 reveal">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cities.map((city, idx) => (
              <div
                key={city.name}
                className={`spidey-card p-6 rounded-2xl flex flex-col items-center text-center group ${
                  idx === 0 ? "sm:col-span-2 flex-row justify-start gap-5 text-left" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--spidey-carbon-light)] border border-[rgba(224,27,27,0.3)] flex items-center justify-center p-2.5 group-hover:border-[var(--spidey-red)] group-hover:shadow-[0_0_15px_rgba(224,27,27,0.4)] transition-all">
                  <Image
                    src={city.vector}
                    alt={city.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-white tracking-wider group-hover:text-[var(--spidey-red)] transition-colors mt-2">
                    {city.name}
                  </h4>
                  <p className="font-mono text-xs text-[var(--spidey-muted)]">
                    {city.landmark}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
