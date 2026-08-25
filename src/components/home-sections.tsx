"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const services = ["Social Media Marketing", "Digital Marketing & SEO", "Web Designing", "Web Development", "AI Automation Tasks"];
const work = ["Carpools UAE", "Ultimate Group International", "Apex Signal", "AI Automation Tool"];

// Keep each section visible in the server-rendered fallback; Motion only refines its position on hydration.
const reveal = { hidden: { opacity: 1, y: 22 }, visible: { opacity: 1, y: 0 } };

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="max-w-2xl"><p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">{eyebrow}</p><h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">{title}</h2></div>;
}

export function HomeSections() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: true, amount: 0.18 };
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <section className="border-t border-[var(--line)] py-24 sm:py-32 lg:py-40">
        <Container>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}><SectionHeading eyebrow="SERVICES" title="Built for a clear digital presence." /></motion.div>
          <motion.div className="mt-14 grid border-t border-[var(--line)] sm:grid-cols-2 lg:mt-18 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}>
            {services.map((service, index) => <motion.div key={service} variants={reveal} transition={transition} className="group min-h-44 border-b border-[var(--line)] py-7 sm:border-r sm:px-6 sm:py-8 lg:min-h-52 lg:first:pl-0 lg:last:border-r-0"><span className="text-xs text-[#87a6ff]">0{index + 1}</span><h3 className="mt-10 max-w-48 text-lg leading-snug text-white transition group-hover:text-[#a9beff]">{service}</h3></motion.div>)}
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-[var(--line)] py-24 sm:py-32 lg:py-40">
        <Container>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport} transition={transition} className="flex flex-wrap items-end justify-between gap-8"><SectionHeading eyebrow="SELECTED WORK" title="Work in focus." /><Link href="/work" className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white transition hover:text-[#9ab5ff]">VIEW ALL <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></motion.div>
          <motion.div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-18 lg:gap-6" initial="hidden" whileInView="visible" viewport={viewport} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}>
            {work.map((title, index) => <motion.article key={title} variants={reveal} transition={transition} className="group relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[#080b18] p-5 sm:p-6"><div aria-hidden className={`absolute inset-0 opacity-80 transition duration-700 group-hover:scale-105 ${index % 2 === 0 ? "bg-[radial-gradient(circle_at_25%_25%,rgba(72,113,255,0.22),transparent_42%),linear-gradient(135deg,#0b1023,#060812_72%)]" : "bg-[radial-gradient(circle_at_75%_30%,rgba(142,101,255,0.16),transparent_40%),linear-gradient(135deg,#111126,#060812_72%)]"}`} /><div aria-hidden className="absolute inset-[12%] border border-white/[0.07]" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-start justify-between"><span className="text-[10px] font-semibold tracking-[0.18em] text-[#9ab5ff]">SELECTED PROJECT</span><ArrowUpRight size={17} className="text-white/70" /></div><h3 className="max-w-48 text-xl text-white sm:text-2xl">{title}</h3></div></motion.article>)}
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-[var(--line)] py-24 sm:py-32 lg:py-40">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}><SectionHeading eyebrow="ABOUT" title="A focused creative practice." /><p className="mt-7 max-w-md leading-7 text-[var(--muted)]">A concise introduction and perspective will live here.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white transition hover:text-[#9ab5ff]">MORE ABOUT ME <ArrowRight size={15} /></Link></motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }} className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden border border-[var(--line)] bg-[#090c19]"><div aria-hidden className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,7,17,0.28),transparent_60%)]" /><Image src="/assets/affan-portrait.png" alt="Affan" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center grayscale-[0.15]" /></motion.div>
        </Container>
      </section>

      <section className="border-t border-[var(--line)] py-24 sm:py-32 lg:py-40">
        <Container><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport} transition={transition} className="relative overflow-hidden border border-[var(--line)] px-6 py-16 sm:px-12 sm:py-22 lg:px-18 lg:py-28"><div aria-hidden className="absolute -right-32 -top-32 size-80 rounded-full bg-[rgba(82,133,255,0.09)] blur-[80px]" /><p className="relative text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">START A CONVERSATION</p><h2 className="relative mt-6 max-w-4xl font-serif text-4xl leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">LET&apos;S BUILD SOMETHING GREAT.</h2><motion.div className="relative mt-10" whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }}><Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#527fff] px-5 text-xs font-semibold tracking-[0.12em] text-white transition hover:bg-[#668fff]">LET&apos;S TALK <ArrowUpRight size={15} /></Link></motion.div></motion.div></Container>
      </section>
    </>
  );
}
