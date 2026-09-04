// LëtzImpact — Neon Atelier
// Services grid using glass cards on a dark canvas.
// Tone: confident, slightly cocky, never corporate.

import { motion } from "framer-motion";
import {
  BarChart3,
  Camera,
  Megaphone,
  PenTool,
  Rocket,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Svc = {
  num: string;
  title: string;
  body: string;
  icon: LucideIcon;
  hue: string;
};

const SERVICE_STYLE: { num: string; icon: LucideIcon; hue: string }[] = [
  { num: "01", icon: Camera, hue: "#EC12D8" },
  { num: "02", icon: Megaphone, hue: "#A250E3" },
  { num: "03", icon: Sparkles, hue: "#4CC9F0" },
  { num: "04", icon: BarChart3, hue: "#EC12D8" },
  { num: "05", icon: Rocket, hue: "#A250E3" },
  { num: "06", icon: PenTool, hue: "#4CC9F0" },
];

export function Services() {
  const { copy } = useI18n();
  const services = SERVICE_STYLE.map((style, index) => ({
    ...style,
    ...copy.services.items[index],
  }));

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36">
      <div className="container">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel num="01" label={copy.services.label} />
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {copy.services.heading}{" "}
              <span className="text-gradient">{copy.services.highlight}</span>.{" "}
              {copy.services.ending}
            </h2>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.num} svc={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ svc, index }: { svc: Svc; index: number }) {
  const Icon = svc.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08 + Math.floor(index / 3) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.05] sm:p-7"
    >
      {/* hover accent */}
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
        style={{ background: svc.hue }}
      />
      <div className="relative flex items-center justify-between">
        <span
          className="grid h-11 w-11 place-items-center rounded-xl ring-1 ring-white/10"
          style={{
            background: `linear-gradient(135deg, ${svc.hue}33, transparent)`,
          }}
        >
          <Icon className="h-[18px] w-[18px]" style={{ color: svc.hue }} />
        </span>
        <span className="font-mono-acc text-xs text-white/35">/ {svc.num}</span>
      </div>
      <h3 className="relative mt-7 font-display text-2xl font-semibold leading-tight tracking-tight">
        {svc.title}
      </h3>
      <p className="relative mt-3 text-[14.5px] leading-relaxed text-white/65">
        {svc.body}
      </p>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:w-full"
      />
    </motion.div>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/55 sm:gap-3 sm:text-[11px] sm:tracking-[0.22em]">
      <span className="text-[#EC12D8]">/{num}</span>
      <span className="h-px w-7 bg-white/20 sm:w-10" />
      {label}
    </div>
  );
}
