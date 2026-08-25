"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const links = ["Contact link placeholder", "Social link placeholder 01", "Social link placeholder 02"];

export function ContactForm() {
  const [notice, setNotice] = useState("");
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Form submission will be available soon.");
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute right-[-10rem] top-0 -z-10 size-[38rem] rounded-full bg-[rgba(80,121,255,0.065)] blur-[130px]" />
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">CONTACT</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">LET&apos;S BUILD SOMETHING GREAT.</h1>
            <p className="mt-8 max-w-md leading-7 text-[var(--muted)]">Share a little about what you have in mind.</p>
            <div id="contact-links" className="mt-14 border-t border-[var(--line)] pt-6"><p className="text-[10px] font-semibold tracking-[0.18em] text-white/45">ELSEWHERE</p><div className="mt-4 grid gap-1">{links.map((link) => <a key={link} href="#contact-links" className="group flex items-center justify-between py-3 text-sm text-[var(--muted)] transition hover:text-white"><span>{link}</span><ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div></div>
          </motion.div>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }} className="border border-[var(--line)] bg-white/[0.015] p-6 sm:p-9 lg:p-11">
            <div className="grid gap-7"><div><label htmlFor="name" className="text-xs font-medium tracking-[0.1em] text-white">NAME</label><input id="name" name="name" type="text" autoComplete="name" required className="mt-3 w-full border-b border-[var(--line)] bg-transparent py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#7199ff]" placeholder="Your name" /></div><div><label htmlFor="email" className="text-xs font-medium tracking-[0.1em] text-white">EMAIL</label><input id="email" name="email" type="email" autoComplete="email" required className="mt-3 w-full border-b border-[var(--line)] bg-transparent py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#7199ff]" placeholder="Your email" /></div><div><label htmlFor="message" className="text-xs font-medium tracking-[0.1em] text-white">PROJECT / MESSAGE</label><textarea id="message" name="message" required rows={5} className="mt-3 w-full resize-y border-b border-[var(--line)] bg-transparent py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#7199ff]" placeholder="A few details about your project" /></div></div>
            <motion.button type="submit" whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }} className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#527fff] px-5 text-xs font-semibold tracking-[0.12em] text-white transition hover:bg-[#668fff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#87a6ff]">SEND <Send size={15} /></motion.button>
            <p aria-live="polite" className="mt-4 text-sm text-[var(--muted)]">{notice}</p>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
