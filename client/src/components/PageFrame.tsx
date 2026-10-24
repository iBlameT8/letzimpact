import type { ReactNode } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteNav } from "@/components/SiteNav";
import { ContactFooter } from "@/components/sections/ContactFooter";

export function PageFrame({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer?: boolean;
}) {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#07060B] text-[#EDEAF1] selection:bg-[#EC12D8]/40">
      <CursorGlow />
      <SiteNav />
      <main className="relative pt-20">{children}</main>
      {footer && <ContactFooter />}
      <FloatingWhatsApp />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  highlight,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 82% 14%, rgba(162,80,227,0.24), transparent 65%), radial-gradient(42% 42% at 12% 55%, rgba(76,201,240,0.12), transparent 68%)",
        }}
      />
      <div className="container">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 font-mono-acc text-[10px] uppercase tracking-[0.22em] text-white/55 sm:text-[11px]">
            <span className="h-px w-8 bg-[#EC12D8]" />
            {eyebrow}
          </div>
          <h1 className="mt-6 font-display text-[42px] font-bold leading-[0.96] tracking-tight sm:text-6xl lg:text-[84px]">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
          <div className="mt-7 max-w-2xl text-[16px] leading-relaxed text-white/65 sm:text-[18px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
