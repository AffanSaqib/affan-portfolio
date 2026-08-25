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
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[#05060d]/88 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between">
        <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }} animate={{ opacity: 1, x: 0 }} transition={transition}>
          <Link href="/" className="block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#87a6ff]" aria-label="Home">
            <Image src="/assets/affan-digital-works-logo.png" alt="Affan Digital Works" width={48} height={48} priority className="size-10 object-contain sm:size-11" />
          </Link>
        </motion.div>
        <motion.nav initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }} aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="relative py-2 text-sm text-[var(--muted)] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#87a6ff]">
              {item.label}
            </Link>
          ))}
        </motion.nav>
        <motion.button initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.14 }} type="button" className="grid size-10 place-items-center rounded-full border border-[var(--line)] text-white md:hidden" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
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
