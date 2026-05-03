// Letzimpact — Neon Atelier
// Hero: diagonal split, oversized headline left, animated gradient orb right.
// Brand commitments: Space Grotesk display, off-white body, glass chips,
// brand gradient (#EC12D8 → #A250E3 → #4CC9F0), magenta primary CTA.

import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";
import { MagneticButton } from "@/components/MagneticButton";
import { WhatsAppGlyph } from "@/components/SiteNav";

const HERO_ORB =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425995922/GCvcXy9rLoydAuyh5uZw78/hero-orb-PCjnA7jMozUDMU7uYod6Vx.webp";

const TICKER_ITEMS = [
  "Short-form that stops the scroll",
  "Built in Luxembourg · made for the world",
  "Strategy + filming + editing under one roof",
  "Posts your competitors will quietly study",
  "We don't chase trends · we engineer them",
];

function HeadlineWord({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 lg:pt-52 lg:pb-32"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(162,80,227,0.22), transparent 60%), radial-gradient(40% 40% at 10% 80%, rgba(76,201,240,0.18), transparent 60%), radial-gradient(50% 40% at 50% 0%, rgba(236,18,216,0.12), transparent 70%)",
        }}
      />
      <GridLines />

      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT — text */}
          <div className="relative z-10 lg:col-span-7">
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] px-3.5 py-1.5 ring-1 ring-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#EC12D8] ping-soft" />
                <span className="relative h-2 w-2 rounded-full bg-[#EC12D8]" />
              </span>
              <span className="font-mono-acc text-[11px] uppercase tracking-[0.18em] text-white/70">
                Live · Booking Q3 2026
              </span>
            </motion.div>

            {/* headline */}
            <h1 className="font-display text-[44px] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-[80px]">
              <span className="block overflow-hidden">
                <HeadlineWord delay={0.05}>Social media</HeadlineWord>
              </span>
              <span className="block overflow-hidden">
                <HeadlineWord delay={0.18}>that&nbsp;</HeadlineWord>
                <HeadlineWord delay={0.28}>
                  <span className="text-gradient">actually</span>
                </HeadlineWord>
              </span>
              <span className="block overflow-hidden">
                <HeadlineWord delay={0.42}>does the work.</HeadlineWord>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/70"
            >
              We're <span className="text-white">Letzimpact</span> — a Luxembourg-based duo
              that plans, films and runs short-form content for brands who'd rather
              build attention than rent it. Strategy, shoots and management — under one roof,
              dressed sharp, kept honest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <MagneticButton
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Open WhatsApp chat with Letzimpact"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Start on WhatsApp
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                href="#packages"
                onClick={() => {
                  const el = document.getElementById("packages");
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                strength={0.25}
              >
                See the packages
                <ArrowDownRight className="h-4 w-4" />
              </MagneticButton>
            </motion.div>

            {/* meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.95 }}
              className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 font-mono-acc text-[11px] uppercase tracking-[0.18em] text-white/45"
            >
              <div>
                <div className="text-[22px] font-display font-semibold tracking-tight text-white">
                  IG · TT
                </div>
                native short-form
              </div>
              <div>
                <div className="text-[22px] font-display font-semibold tracking-tight text-white">
                  2&nbsp;founders
                </div>
                no agency overhead
              </div>
              <div>
                <div className="text-[22px] font-display font-semibold tracking-tight text-white">
                  +352
                </div>
                based in {BRAND.location}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — orb */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative mx-auto aspect-square w-full max-w-[520px]"
            >
              {/* soft halo */}
              <div
                aria-hidden
                className="absolute inset-[-20%] rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(236,18,216,0.45), rgba(162,80,227,0.30) 45%, rgba(76,201,240,0.20) 70%, transparent 80%)",
                }}
              />
              <motion.img
                src={HERO_ORB}
                alt=""
                className="floaty relative z-10 h-full w-full select-none object-contain"
                draggable={false}
                animate={{ rotate: [0, 4, -3, 0] }}
                transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
              />
              {/* tiny floating chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="glass absolute -left-4 top-10 hidden items-center gap-2 rounded-full px-3 py-1.5 text-[12px] sm:flex"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#EC12D8]" />
                Hooks · cuts · captions
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.8 }}
                className="glass absolute bottom-12 -right-2 hidden items-center gap-2 rounded-full px-3 py-1.5 text-[12px] sm:flex"
              >
                <span className="h-2 w-2 rounded-full bg-[#4CC9F0]" />
                Posting · DMs · reports
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative mt-20 border-y border-white/10 bg-white/[0.02] py-5">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
                {TICKER_ITEMS.map((t, i) => (
                  <div
                    key={`${k}-${i}`}
                    className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight text-white/55"
                  >
                    <span className="text-[#EC12D8]">✦</span>
                    {t}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
      }}
    />
  );
}
