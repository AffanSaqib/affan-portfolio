"use client";

import { Bot, Code2, Palette, Search, Share2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const services = [
  { title: "Social Media Marketing", description: "Clear social direction and content for your business pages.", icon: Share2 },
  { title: "Digital Marketing & SEO", description: "Focused digital strategy and search-ready foundations.", icon: Search },
  { title: "Web Designing", description: "Clean, considered interfaces shaped for your audience.", icon: Palette },
  { title: "Web Development", description: "Modern web experiences built around your requirements.", icon: Code2 },
  { title: "AI Automation Tasks", description: "Practical workflow automation for repeatable digital tasks.", icon: Bot },
];

export function ServicesList() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] as const };
  return <section className="relative overflow-hidden bg-[#0b1728] py-20 sm:py-28 lg:py-32"><div aria-hidden className="pointer-events-none absolute right-[-16rem] top-[-10rem] -z-10 size-[34rem] rounded-full bg-[rgba(125,86,255,0.055)] blur-[125px]" /><Container><motion.div initial={{ opacity: 1, y: reduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="max-w-3xl"><p className="text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">SERVICES</p><h1 className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">Built with intent.</h1><p className="mt-7 max-w-lg leading-7 text-[var(--muted)]">Focused digital and creative support for the work ahead.</p></motion.div><motion.div className="mt-14 grid border-t border-[var(--line)] sm:grid-cols-2 lg:mt-20" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}>{services.map((service, index) => { const Icon = service.icon; return <motion.article key={service.title} variants={{ hidden: { opacity: 1, y: reduceMotion ? 0 : 18 }, visible: { opacity: 1, y: 0 } }} transition={transition} className="group border-b border-[var(--line)] p-6 sm:min-h-80 sm:p-9 lg:p-11 odd:sm:border-r last:sm:col-span-2 last:sm:border-r-0 last:sm:bg-white/[0.015]"><motion.div whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.3, ease: "easeOut" }} className="flex h-full flex-col"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white/[0.02] text-[#91aeff] transition group-hover:border-[#668fff] group-hover:bg-[rgba(82,127,255,0.1)]"><Icon size={19} strokeWidth={1.5} /></span><span className="text-xs text-white/35">0{index + 1}</span></div><div className="mt-12"><h2 className="text-2xl tracking-[-0.035em] text-white sm:text-3xl">{service.title}</h2><p className="mt-4 max-w-sm leading-7 text-[var(--muted)]">{service.description}</p></div></motion.div></motion.article>; })}</motion.div></Container></section>;
}
