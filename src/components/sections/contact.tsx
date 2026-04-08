"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 px-6 overflow-hidden">
      <div className="section-divider max-w-4xl mx-auto mb-32" />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-dim border border-gold/20"
          >
            <Sparkles className="w-6 h-6 text-gold" />
          </motion.div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
            Let&apos;s work{" "}
            <span className="text-gradient-gold">together</span>
          </h2>

          <p className="text-foreground/60 text-lg font-light leading-relaxed max-w-xl mx-auto">
            Whether you have an opportunity or just want to discuss finance,
            data, and value investing — my inbox is always open.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-4"
          >
            <a
              href="mailto:aman.malu@example.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-background font-medium text-sm tracking-wide hover:bg-gold-light transition-all duration-300 shadow-[0_4px_24px_rgba(184,150,62,0.25)] hover:shadow-[0_8px_40px_rgba(184,150,62,0.4)] active:scale-[0.97]"
            >
              <Mail className="w-4.5 h-4.5" />
              Send me an email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Subtle bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs text-muted tracking-wide pt-4"
          >
            Typically responds within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
