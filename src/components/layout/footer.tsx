import { Container } from "@/components/ui/container";
export function Footer() { return <footer className="border-t border-[var(--line)]"><Container className="flex min-h-20 items-center justify-between gap-4 py-5 text-xs text-[var(--muted)]"><span>Portfolio</span><span>© {new Date().getFullYear()}</span></Container></footer>; }
