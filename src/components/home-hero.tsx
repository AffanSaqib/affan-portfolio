"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const headline = ["I BUILD BRANDS", "THAT GET", "ATTENTION."];
const particles = [
  { left: "9%", top: "24%", delay: 0.4 },
  { left: "79%", top: "14%", delay: 1.1 },
  { left: "90%", top: "70%", delay: 0.7 },
  { left: "16%", top: "84%", delay: 1.5 },
];

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const entrance = reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[13%] top-[-16rem] size-[38rem] rounded-full bg-[rgba(65,110,255,0.07)] blur-[120px]" />
        <div className="absolute bottom-[-24rem] right-[-12rem] size-[38rem] rounded-full bg-[rgba(126,85,255,0.045)] blur-[140px]" />
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute size-1 rounded-full bg-[#7a9cff]/40"
            style={{ left: particle.left, top: particle.top }}
            animate={reduceMotion ? undefined : { opacity: [0.15, 0.7, 0.15], y: [0, -12, 0] }}
            transition={{ duration: 4 + index, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <Container className="grid min-h-[calc(100svh-4.5rem)] items-center gap-y-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-12 lg:gap-y-7 lg:py-12 xl:gap-x-20">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={entrance} className="relative z-10 lg:col-start-1 lg:row-start-1">
          <p className="mb-7 text-[10px] font-semibold tracking-[0.18em] text-[#87a6ff] sm:text-xs sm:tracking-[0.22em]">
            DIGITAL MARKETING · SMM · DEVELOPMENT · CREATIVE
          </p>
          <h1 className="font-serif text-[clamp(2.6rem,9.2vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em] text-white">
            {headline.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: reduceMotion ? 0 : "110%", opacity: reduceMotion ? 1 : 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...entrance, delay: reduceMotion ? 0 : 0.18 + index * 0.13 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...entrance, delay: reduceMotion ? 0 : 0.65 }} className="mt-8 text-sm tracking-[0.025em] text-[var(--muted)] sm:text-base">
            Marketing. Social. Development. Creative.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...entrance, delay: reduceMotion ? 0 : 0.28 }} className="relative order-2 mx-auto w-full max-w-[32rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
          <motion.div animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative aspect-square">
            <motion.div aria-hidden className="absolute inset-[-6%] rounded-full border border-[rgba(110,145,255,0.23)]" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }} />
            <motion.div aria-hidden className="absolute inset-[4%] rounded-full border border-dashed border-[rgba(151,114,255,0.17)]" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} />
            <div aria-hidden className="absolute inset-[11%] rounded-full bg-[radial-gradient(circle_at_48%_32%,rgba(71,119,255,0.25),transparent_62%)] blur-2xl" />
            <div className="absolute inset-[7%] overflow-hidden rounded-full border border-white/10 bg-[#080b18] shadow-[0_24px_90px_rgba(0,0,0,0.5)]">
              <Image src="/assets/affan-portrait.png" alt="Affan" fill priority sizes="(max-width: 1024px) 85vw, 45vw" className="object-cover object-center" />
            </div>
            <span aria-hidden className="absolute left-[7%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8dabff] shadow-[0_0_18px_5px_rgba(82,133,255,0.42)]" />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...entrance, delay: reduceMotion ? 0 : 0.76 }} className="order-3 flex flex-wrap gap-3 lg:col-start-1 lg:row-start-2">
          <HeroLink href="/work" primary>VIEW MY WORK</HeroLink>
          <HeroLink href="/contact">LET&apos;S TALK</HeroLink>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={`group inline-flex min-h-12 items-center gap-3 rounded-full border px-5 text-xs font-semibold tracking-[0.12em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#87a6ff] ${primary ? "border-[#668fff] bg-[#527fff] text-white hover:bg-[#668fff]" : "border-white/15 bg-white/[0.02] text-white hover:border-[#668fff] hover:bg-white/[0.06]"}`}>
        {children}
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
