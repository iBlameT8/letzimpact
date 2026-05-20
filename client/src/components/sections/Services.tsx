// Letzimpact — Neon Atelier
// "What we actually do" — services grid using glass cards on a dark canvas.
// Tone: confident, slightly cocky, never corporate.

import { motion } from "framer-motion";
import { Camera, Megaphone, BarChart3, Calendar, Sparkles, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Svc = {
  num: string;
  title: string;
  body: string;
  icon: LucideIcon;
  hue: string; // accent color
};

const SERVICES: Svc[] = [
  {
    num: "01",
    title: "Short-form content",
    body: "Reels and TikToks built around a hook, a story and a reason to stop scrolling. Filmed by us, edited by us, posted by us.",
    icon: Camera,
    hue: "#EC12D8",
  },
  {
    num: "02",
    title: "Account management",
    body: "We handle the calendar, the captions, the comments and the DMs. You handle running your business.",
    icon: Megaphone,
    hue: "#A250E3",
  },
  {
    num: "03",
    title: "Strategy & positioning",
    body: "A clear angle for your brand across every social media platform — what to say, who to say it to, and why anyone should care.",
    icon: Sparkles,
    hue: "#4CC9F0",
  },
  {
    num: "04",
    title: "Performance & reporting",
    body: "Monthly numbers without the buzzwords. What worked, what didn't, what we're changing next month.",
    icon: BarChart3,
    hue: "#EC12D8",
  },
  {
    num: "05",
    title: "Launches & campaigns",
    body: "Product drops, openings, promos. Timed content sprints designed to make a moment, not just a post.",
    icon: Rocket,
    hue: "#A250E3",
  },
  {
    num: "06",
    title: "Weekly check-ins",
    body: "Fifteen-minute calls. Real updates, real feedback, no slide decks pretending to be insights.",
    icon: Calendar,
    hue: "#4CC9F0",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36">
      <div className="container">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel num="01" label="What we actually do" />
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Six things, done <span className="text-gradient">properly</span>.
              Not sixty things, done loosely.
            </h2>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
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
