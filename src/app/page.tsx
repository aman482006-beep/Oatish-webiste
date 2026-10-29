import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import {
  ThreePillars,
  SelectedWorkPreview,
  CreatorPreview,
  RecruiterPreview,
  ContactPreview,
} from "@/components/sections/home-sections";

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO (Preserved untouched) */}
      <Hero />

      {/* SECTION 2: ABOUT / INTERACTIVE UNMASK (Preserved untouched) */}
      <About />

      {/* SECTION B: THREE PILLARS (Finance x Technology x Communication) */}
      <ThreePillars />

      {/* SECTION C: SELECTED WORK PREVIEW */}
      <SelectedWorkPreview />

      {/* SECTION D: CREATOR PREVIEW */}
      <CreatorPreview />

      {/* SECTION E: RECRUITER PREVIEW */}
      <RecruiterPreview />

      {/* SECTION F: CONTACT PREVIEW */}
      <ContactPreview />
    </>
  );
}
