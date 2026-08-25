export type NavigationItem = { label: string; href: string };
export type PageContent = { eyebrow: string; title: string; description: string };

export const navigation: NavigationItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const pages: Record<"home" | "work" | "services" | "about" | "contact", PageContent> = {
  home: { eyebrow: "Portfolio", title: "A considered digital practice.", description: "This space is being prepared for selected work and a clear introduction." },
  work: { eyebrow: "Work", title: "Selected work, in due course.", description: "A focused archive of projects will live here." },
  services: { eyebrow: "Services", title: "Ways to work together.", description: "Service details will be shared here." },
  about: { eyebrow: "About", title: "The person behind the practice.", description: "A personal introduction will live here." },
  contact: { eyebrow: "Contact", title: "Start a conversation.", description: "Contact details will be shared here." },
};
