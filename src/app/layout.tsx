import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Portfolio", template: "%s | Portfolio" },
  description: "A personal portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(82,133,255,0.055),transparent_65%)]" />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
