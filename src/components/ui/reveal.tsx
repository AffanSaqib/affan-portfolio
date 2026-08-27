"use client";

import { motion } from "motion/react";

type RevealProps = { children: React.ReactNode; className?: string };
export function Reveal({ children, className }: RevealProps) {
  return <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: "easeOut" }}>{children}</motion.div>;
}
