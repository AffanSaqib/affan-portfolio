"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { navigation } from "@/lib/content";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[#08111f]/88 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <motion.div initial={{ opacity: 1, x: reduceMotion ? 0 : -12 }} animate={{ opacity: 1, x: 0 }} transition={transition}>
          <Link href="/" className="block rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition hover:border-[#6d8dff]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#87a6ff]" aria-label="Home">
            <Image src="/assets/affan-digital-works-logo.png" alt="Affan Digital Works" width={60} height={60} priority className="size-11 rounded-full object-contain sm:size-12" />
          </Link>
        </motion.div>
        <motion.nav initial={{ opacity: 1, y: reduceMotion ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }} aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="relative py-2 text-sm text-[var(--muted)] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#87a6ff]">
              {item.label}
            </Link>
          ))}
        </motion.nav>
        <motion.button initial={{ opacity: 1, x: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.14 }} type="button" className="grid size-10 place-items-center rounded-full border border-[var(--line)] text-white md:hidden" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </Container>
      {isOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full z-20 border-b border-[var(--line)] bg-[#050711]/98 backdrop-blur md:hidden">
          <Container className="grid py-4">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="border-b border-[var(--line)] py-4 text-sm text-[var(--muted)] last:border-0 hover:text-white">
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
