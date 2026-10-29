"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const REVEAL_TIMING = {
  PIN_DISTANCE: "160%",       // Scroll distance for pinned timeline on desktop
  MASK_SCALE_START: 1.0,
  MASK_SCALE_PEAK: 1.15,
  RED_FLASH_OPACITY: 0.65,
  WIPE_START: 0.3,
  WIPE_END: 0.65,
  TEXT_REVEAL_START: 0.6,
};

export function MaskReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const maskLayerRef = useRef<HTMLDivElement>(null);
  const faceLayerRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mobile / reduced motion: simplified transition without pinning
    if (isMobile || isReduced) {
      const mobileTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(maskLayerRef.current, {
            opacity: 0,
            scale: 1.08,
            duration: 0.9,
            ease: "power2.out",
          });
          gsap.to(faceLayerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
          });
          gsap.to(textOverlayRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.25,
            ease: "power3.out",
          });
        },
      });

      return () => {
        mobileTrigger.kill();
      };
    }

    // Desktop: Pinned Cinematic ScrollTrigger
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinWrapRef.current,
          start: "top top",
          end: `+=${REVEAL_TIMING.PIN_DISTANCE}`,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.set(maskLayerRef.current, {
        scale: REVEAL_TIMING.MASK_SCALE_START,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
      });
      tl.set(faceLayerRef.current, {
        scale: 1.08,
        opacity: 0,
        filter: "blur(4px)",
      });
      tl.set(textOverlayRef.current, {
        opacity: 0,
        y: 30,
      });

      // 1. Scale mask gently
      tl.to(maskLayerRef.current, {
        scale: REVEAL_TIMING.MASK_SCALE_PEAK,
        duration: REVEAL_TIMING.WIPE_START,
        ease: "power1.inOut",
      });

      // 2. Red flash
      tl.to(
        flashRef.current,
        {
          opacity: REVEAL_TIMING.RED_FLASH_OPACITY,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        },
        REVEAL_TIMING.WIPE_START
      );

      // 3. Mask peel wipe upward
      tl.to(
        maskLayerRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          opacity: 0.1,
          y: -60,
          duration: REVEAL_TIMING.WIPE_END - REVEAL_TIMING.WIPE_START,
          ease: "power2.inOut",
        },
        REVEAL_TIMING.WIPE_START
      );

      // 4. Reveal Face underneath
      tl.to(
        faceLayerRef.current,
        {
          opacity: 1,
          scale: 1.0,
          filter: "blur(0px)",
          duration: REVEAL_TIMING.WIPE_END - REVEAL_TIMING.WIPE_START,
          ease: "power2.out",
        },
        REVEAL_TIMING.WIPE_START + 0.05
      );

      // 5. Text overlay fades in
      tl.to(
        textOverlayRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        },
        REVEAL_TIMING.TEXT_REVEAL_START
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reveal"
      ref={containerRef}
      className="relative w-full bg-[var(--spidey-black)] overflow-hidden"
    >
      <div
        ref={pinWrapRef}
        className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Subtle radial ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,27,27,0.12)_0%,rgba(5,5,5,0.98)_70%)] pointer-events-none" />

        {/* Cinematic 4:5 Portrait Frame */}
        <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.9)] bg-[var(--spidey-carbon)]">
          {/* Face Photo */}
          <div
            ref={faceLayerRef}
            className="absolute inset-0 w-full h-full will-change-transform opacity-0"
          >
            <Image
              src="/profile-2.png"
              alt="Aman Malu Revealed"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--spidey-black)] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--spidey-red)]/30 pointer-events-none" />
          </div>

          {/* Mask Layer */}
          <div
            ref={maskLayerRef}
            className="absolute inset-0 w-full h-full z-10 will-change-transform bg-[var(--spidey-black)]"
          >
            <Image
              src="/spiderman/mask.png"
              alt="Spider-Man Mask"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          {/* Quick Red Flash */}
          <div
            ref={flashRef}
            className="absolute inset-0 z-20 bg-[var(--spidey-red)] pointer-events-none opacity-0 mix-blend-screen"
          />
        </div>

        {/* Identity & Stat Chips Overlay */}
        <div
          ref={textOverlayRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 w-full px-6 text-center will-change-transform opacity-0"
        >
          <span className="font-mono text-xs tracking-widest text-[var(--spidey-red)] uppercase">
            IDENTITY CONFIRMED
          </span>

          <h2 className="text-4xl sm:text-5xl font-display text-white tracking-wider">
            AMAN <span className="text-[var(--spidey-red)]">MALU</span>
          </h2>

          <div className="flex items-center gap-3">
            <span className="px-4 py-1 rounded-full bg-[var(--spidey-red)] text-white font-display text-sm tracking-widest shadow-[0_0_12px_rgba(224,27,27,0.4)]">
              AGE 19
            </span>
            <span className="px-4 py-1 rounded-full border border-[var(--spidey-red)] bg-[var(--spidey-carbon)] text-[var(--spidey-red)] font-display text-sm tracking-widest">
              UNDEFEATED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
