"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const expertise = ["Digital Marketing & SEO", "Social Media Marketing", "Web Development", "Branding & Design"];
const skillPlaceholders = ["Skill / tool placeholder", "Skill / tool placeholder", "Skill / tool placeholder", "Skill / tool placeholder", "Skill / tool placeholder", "Skill / tool placeholder"];
const certificationPlaceholders = ["Certification placeholder", "Certification placeholder", "Certification placeholder"];

export function AboutProfile() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute left-[-18rem] top-[20rem] -z-10 size-[36rem] rounded-full bg-[rgba(76,113,255,0.06)] blur-[130px]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={transition} className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-[var(--line)] bg-[#090c19]">
            <div aria-hidden className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_45%,rgba(5,7,17,0.36))]" />
            <Image src="/assets/affan-portrait.png" alt="Affan" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center" />
            <motion.span aria-hidden className="absolute bottom-7 left-7 z-20 size-2 rounded-full bg-[#8dabff] shadow-[0_0_18px_5px_rgba(82,133,255,0.38)]" animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }} transition={{ duration: 3, repeat: Infinity }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">ABOUT AFFAN</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl">A clear creative point of view.</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">Affan works across marketing, social, development, and design to shape considered digital experiences.</p>
            <div className="mt-12 border-t border-[var(--line)]"><p className="mt-6 text-[10px] font-semibold tracking-[0.18em] text-white/45">EXPERTISE</p><div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">{expertise.map((item, index) => <div key={item} className="flex items-center gap-3 text-sm text-white"><span className="text-xs text-[#87a6ff]">0{index + 1}</span>{item}</div>)}</div></div>
          </motion.div>
        </div>

        <div className="mt-24 grid gap-16 border-t border-[var(--line)] pt-16 sm:mt-32 sm:pt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition}><p className="text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">SKILLS & TOOLS</p><h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em] text-white sm:text-5xl">In the toolkit.</h2></motion.div>
          <motion.div className="grid gap-3 sm:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } } }}>{skillPlaceholders.map((item, index) => <motion.div key={index} variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 12 }, visible: { opacity: 1, y: 0 } }} transition={transition} className="flex min-h-16 items-center gap-3 border border-[var(--line)] px-5 text-sm text-[var(--muted)]"><Sparkles size={15} className="text-[#87a6ff]" strokeWidth={1.5} />{item}</motion.div>)}</motion.div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[var(--line)] pt-16 sm:mt-28 sm:pt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition}><p className="text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">CERTIFICATIONS</p><h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em] text-white sm:text-5xl">Still to be added.</h2></motion.div>
          <motion.div className="grid gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }}>{certificationPlaceholders.map((item, index) => <motion.div key={index} variants={{ hidden: { opacity: 0, x: reduceMotion ? 0 : 12 }, visible: { opacity: 1, x: 0 } }} transition={transition} className="flex min-h-18 items-center justify-between border border-[var(--line)] px-5 text-sm text-[var(--muted)]"><span>{item}</span><ArrowUpRight size={16} className="text-white/30" /></motion.div>)}</motion.div>
        </div>
      </Container>
    </section>
  );
}
