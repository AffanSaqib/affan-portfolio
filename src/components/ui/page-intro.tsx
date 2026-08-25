import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import type { PageContent } from "@/lib/content";
export function PageIntro({ eyebrow, title, description }: PageContent) { return <Container className="py-24 sm:py-32 lg:py-40"><Reveal><p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[var(--blue)]">{eyebrow}</p><h1 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p></Reveal></Container>; }
