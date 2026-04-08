"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Briefcase, Award } from "lucide-react";

const certifications = [
  { name: "CFA Level 1", status: "Cleared", highlighted: true },
  { name: "NISM Series XV – Research Analyst", status: null, highlighted: false },
  { name: "NISM Series VIII – Equity Derivatives", status: null, highlighted: false },
  { name: "Financial Modeling & Forecasting", status: null, highlighted: false },
  { name: "DCF Valuation", status: null, highlighted: false },
];

export function Qualifications() {
  return (
    <section id="qualifications" className="relative w-full py-32 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-32" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Credentials
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
            Education & credentials
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Education & Experience */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gold-dim border border-gold/20 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold">Education</h3>
              </div>

              <div className="relative pl-6 ml-4 border-l border-border">
                <div className="relative pb-2">
                  <div className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-gold glow-dot" />
                  <h4 className="font-semibold text-base tracking-tight">
                    BBA (Finance & Marketing Analytics)
                  </h4>
                  <p className="text-foreground/60 text-sm mt-0.5">Christ University</p>
                  <span className="inline-block mt-2 text-xs font-medium tracking-wider uppercase text-muted px-2.5 py-1 rounded-full bg-accent border border-border">
                    2024 – 2027
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent border border-border flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-foreground/60" />
                </div>
                <h3 className="font-heading text-xl font-bold">Experience</h3>
              </div>

              <div className="relative pl-6 ml-4 border-l border-border">
                <div className="relative pb-2">
                  <div className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-foreground/30 border-2 border-background" />
                  <h4 className="font-semibold text-base tracking-tight">
                    Event Coordinator & Volunteer
                  </h4>
                  <p className="text-foreground/60 text-sm mt-0.5">Finance & Management Events</p>
                  <p className="text-sm mt-2 text-muted font-light leading-relaxed">
                    Execution and coordination for major college financial symposiums.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gold-dim border border-gold/20 flex items-center justify-center">
                <Award className="h-4 w-4 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold">Certifications & Licenses</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 card-hover ${
                    cert.highlighted
                      ? "border-gold/30 bg-gold-dim"
                      : "border-border bg-surface hover:bg-surface-elevated"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      cert.highlighted
                        ? "bg-gold/15"
                        : "bg-accent"
                    }`}
                  >
                    <BadgeCheck
                      className={`h-4.5 w-4.5 ${
                        cert.highlighted ? "text-gold" : "text-foreground/40"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm tracking-tight truncate">
                      {cert.name}
                    </h4>
                    {cert.status && (
                      <span className="text-xs text-gold font-medium">{cert.status}</span>
                    )}
                  </div>
                  {cert.highlighted && (
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/20">
                      Verified
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
