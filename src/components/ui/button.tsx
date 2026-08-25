import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = { href: string; children: React.ReactNode; className?: string };
export function Button({ href, children, className }: ButtonProps) {
  return <Link href={href} className={cn("inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[var(--blue)] hover:bg-[rgba(82,133,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)]", className)}>{children}</Link>;
}
