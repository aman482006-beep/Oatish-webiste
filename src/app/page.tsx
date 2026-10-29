"use client";

import { type FormEvent } from "react";
import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    handle: "@aman.ja1n",
    href: "https://www.instagram.com/aman.ja1n/",
  },
  {
    label: "YouTube",
    handle: "@AmanJain-4",
    href: "https://www.youtube.com/@AmanJain-4",
  },
  {
    label: "GitHub",
    handle: "aman482006-beep",
    href: "https://github.com/aman482006-beep",
  },
  {
    label: "LinkedIn",
    handle: "in/amanmalu",
    href: "https://www.linkedin.com/in/amanmalu/",
  },
];

const sideQuests = [
  {
    icon: "📊",
    title: "One more chart",
    description:
      "One market question can turn into a full-on finance rabbit hole. I have accepted my fate.",
  },
  {
    icon: "🛠️",
    title: "Build it to understand it",
    description:
      "I like turning ideas into little tools, dashboards, and AI experiments instead of leaving them as notes.",
  },
  {
    icon: "🎬",
    title: "Learn it, then share it",
    description:
      "I make videos about things I’m figuring out. Teaching something is a pretty good way to learn it twice.",
  },
  {
    icon: "🕷️",
    title: "The Spider-Verse agenda",
    description:
      "The black-and-red website might have given away that I have a very strong opinion about the theme.",
  },
];

export default function Home() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`A message from ${name} via my website`);
    const body = encodeURIComponent(
      `Hey Aman,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );

    window.location.href = `mailto:jain.aman3789@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Personal intro */}
      <section className="relative flex min-h-[72svh] items-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-16">
        <div className="pointer-events-none absolute left-[-10rem] top-28 h-72 w-72 rounded-full bg-[#e11b1b]/[0.07] blur-3xl" />
        <div className="relative mx-auto w-full max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/spiderman/emblem.svg"
              alt=""
              width={30}
              height={30}
              className="h-7 w-7 object-contain"
              priority
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-white/50 sm:text-xs">
              Welcome to my corner of the internet
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            Hey, I’m Aman.
            <span className="mt-2 block text-[#e11b1b]">I collect side quests.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Finance rabbit holes, little tech experiments, videos, and ideas that
            turn into projects at 2 a.m. Basically, if I get curious about
            something, there’s a good chance I’ll try to make something out of it.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 transition-colors hover:border-[#e11b1b]/60 hover:bg-[#e11b1b]/[0.06]"
              >
                <span className="text-sm font-medium text-white">{social.label}</span>
                <span className="text-xs text-white/35 transition-colors group-hover:text-[#e11b1b]">↗</span>
              </a>
            ))}
          </div>

          <a
            href="#side-quests"
            className="mt-10 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#e11b1b]"
          >
            A few things about me <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Fun things, not a CV */}
      <section
        id="side-quests"
        className="border-t border-white/[0.07] px-5 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#e11b1b]">
            The lore, basically
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My current side quests<span className="text-[#e11b1b]">.</span>
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {sideQuests.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-colors hover:border-[#e11b1b]/40 sm:p-6"
              >
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact is intentionally the final homepage section */}
      <section
        id="contact"
        className="border-t border-white/[0.07] px-5 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#e11b1b]">
              Last stop
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a message for me?
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              A cool idea, a question, or just saying hi — send it my way.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs text-white/55">
                Your name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="What should I call you?"
                  className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e11b1b]/70"
                />
              </label>
              <label className="block text-xs text-white/55">
                Your email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e11b1b]/70"
                />
              </label>
            </div>

            <label className="block text-xs text-white/55">
              Your message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e11b1b]/70"
              />
            </label>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-5 text-white/35">
                This opens your email app with the message ready for you to send.
              </p>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#e11b1b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11b1b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                Send message <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
