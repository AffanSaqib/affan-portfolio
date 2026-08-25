"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const categories = ["All", "Digital Marketing & SEO", "Social Media Marketing", "Web Development", "Branding & Design"] as const;
type Category = (typeof categories)[number];
type Project = { title: string; category: Exclude<Category, "All">; detail: string; tone: "blue" | "violet" | "ink" };

const projects: Project[] = [
  { title: "Carpools UAE", category: "Social Media Marketing", detail: "Business page project", tone: "blue" },
  { title: "Ultimate Group International", category: "Social Media Marketing", detail: "Business page project", tone: "violet" },
  { title: "Apex Signal", category: "Social Media Marketing", detail: "Business page project", tone: "ink" },
  { title: "AI Automation Tool", category: "Web Development", detail: "Development & automation project", tone: "violet" },
  { title: "WTFStudio Ecommerce Store Management", category: "Web Development", detail: "Ecommerce & store management project", tone: "blue" },
];

const tones = {
  blue: "bg-[radial-gradient(circle_at_25%_20%,rgba(72,113,255,0.18),transparent_38%),linear-gradient(135deg,#0c1330,#060812_70%)]",
  violet: "bg-[radial-gradient(circle_at_74%_25%,rgba(148,100,255,0.13),transparent_36%),linear-gradient(135deg,#161128,#060812_70%)]",
  ink: "bg-[radial-gradient(circle_at_50%_86%,rgba(74,124,214,0.13),transparent_42%),linear-gradient(135deg,#101421,#060812_70%)]",
};

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const reduceMotion = useReducedMotion();
  const visibleProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32"><div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[38rem] -translate-x-1/2 rounded-full bg-[rgba(73,112,255,0.06)] blur-[130px]" /><Container><motion.div initial={{ opacity: 1, y: reduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}><p className="text-[10px] font-semibold tracking-[0.2em] text-[#87a6ff] sm:text-xs">SELECTED WORK</p><h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">A focused body of work.</h1></motion.div><div className="mt-12 flex gap-2 overflow-x-auto border-y border-[var(--line)] py-4 sm:mt-16">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition ${activeCategory === category ? "bg-[#527fff] text-white" : "text-[var(--muted)] hover:bg-white/[0.05] hover:text-white"}`}>{category}</button>)}</div><motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6"><AnimatePresence mode="popLayout">{visibleProjects.map((project, index) => <motion.article layout key={project.title} initial={{ opacity: 1, scale: reduceMotion ? 1 : 0.97, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.045 }} className="group"><motion.div whileHover={reduceMotion ? undefined : { y: -5 }} transition={{ duration: 0.3, ease: "easeOut" }} className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[#080b18] p-5 sm:p-6"><div aria-hidden className={`absolute inset-0 transition duration-700 group-hover:scale-105 ${tones[project.tone]}`} /><div aria-hidden className="absolute inset-[11%] border border-white/[0.07] transition duration-500 group-hover:inset-[9%]" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-start justify-between"><span className="text-[10px] font-semibold tracking-[0.17em] text-[#9ab5ff]">{project.category.toUpperCase()}</span><ArrowUpRight size={17} className="text-white/60 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></div><h2 className="max-w-64 text-xl text-white sm:text-2xl">{project.title}</h2></div></motion.div><div className="flex items-center justify-between gap-4 py-4"><p className="text-xs text-[var(--muted)]">{project.detail}</p><span className="text-[10px] tracking-[0.15em] text-white/45">0{index + 1}</span></div></motion.article>)}</AnimatePresence></motion.div></Container></section>;
}
