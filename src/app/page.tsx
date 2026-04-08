import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Travel } from "@/components/sections/travel";
import { Worlds } from "@/components/sections/worlds";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Socials } from "@/components/sections/socials";
import { Credentials } from "@/components/sections/credentials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Travel />
      <Worlds />
      <Skills />
      <Projects />
      <Socials />
      <Credentials />
    </>
  );
}
