// Letzimpact — Neon Atelier
// THE centerpiece: 3 social-media packages on a horizontal-feel rail.
// Middle card is the "most picked" with a full gradient border.
// Each Let's-grow CTA opens WhatsApp with a tailored prefilled message.

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/brand";
import { SectionLabel } from "@/components/sections/Services";

type Pkg = {
  id: string;
  tag: string;
  name: string;
  pitch: string;
  videos: string;
  promos: string;
  features: string[];
  best: boolean;
  accent: string;
  waMessage: string;
};

const PKGS: Pkg[] = [
  {
    id: "starter",
    tag: "Managed presence",
    name: "Starter",
    pitch:
      "For brands that want to look alive online without losing their evenings.",
    videos: "8 videos / month",
    promos: "+ 3 promo posts",
    features: [
      "Instagram & TikTok",
      "Content planning & posting",
      "Light community management",
      "Monthly performance report",
    ],
    best: false,
    accent: "#4CC9F0",
    waMessage:
      "Hey Letzimpact, I'm interested in the Starter package — let's talk.",
  },
  {
    id: "growth",
    tag: "Performance growth",
    name: "Growth",
    pitch:
      "For brands ready to actually grow — more output, sharper strategy, real momentum.",
    videos: "12–14 videos / month",
    promos: "+ 5 promo posts",
    features: [
      "Instagram & TikTok",
      "Content strategy & optimisation",
      "Active community management",
      "Monthly analysis & growth insights",
    ],
    best: true,
    accent: "#EC12D8",
    waMessage:
      "Hey Letzimpact, I'm looking at the Growth package — when can we chat?",
  },
  {
    id: "authority",
    tag: "Full brand management",
    name: "Authority",
    pitch:
      "For brands done playing — full management, multi-platform, weekly tuning.",
    videos: "16–18 videos / month",
    promos: "+ 8 promo posts",
    features: [
      "Multi-platform content distribution",
      "Brand & campaign strategy",
      "Full community & DM management",
      "Weekly analysis & optimisation",
    ],
    best: false,
    accent: "#A250E3",
    waMessage:
      "Hey Letzimpact, the Authority package looks like us — let's set up a call.",
  },
];

const PACKAGES_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425995922/GCvcXy9rLoydAuyh5uZw78/packages-bg-8Es6JTNzk9xWjuAFAsPLg4.webp";

export function Packages() {
  return (
    <section id="packages" className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage: `url(${PACKAGES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#07060B]/70"
      />

      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel num="03" label="Packages" />
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Three ways to work with us. <span className="text-gradient">Pick one.</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/65 sm:text-[16px] lg:col-span-5">
            Every package is monthly, no hidden tiers, no surprise upsells. Pricing is
            tailored on the call because brands aren't all built the same — but the
            scope is exactly what you see here.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3">
          {PKGS.map((p, i) => (
            <PackageCard key={p.id} pkg={p} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center font-mono-acc text-[10px] uppercase tracking-[0.16em] text-white/40 sm:mt-10 sm:text-[11px] sm:tracking-[0.18em]">
          Not sure which one fits? Talk to us — five minutes is enough.
        </p>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: Pkg; index: number }) {
  const Wrapper = pkg.best ? "div" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group relative ${pkg.best ? "lg:-translate-y-4" : ""}`}
      style={{ willChange: "transform" }}
    >
      {/* gradient border for best */}
      {pkg.best && (
        <div
          aria-hidden
          className="absolute -inset-[1.5px] rounded-[26px]"
          style={{
            background:
              "linear-gradient(135deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
            opacity: 0.95,
          }}
        />
      )}
      <Wrapper
        className={`relative flex h-full flex-col overflow-hidden rounded-[22px] p-6 sm:rounded-[24px] sm:p-7 lg:p-8 ${
          pkg.best
            ? "bg-[#0B0913]"
            : "bg-white/[0.03] ring-1 ring-white/10"
        }`}
      >
        {/* accent corner */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
          style={{ background: pkg.accent }}
        />

        <div className="relative flex items-center justify-between">
          <span
            className="font-mono-acc text-[11px] uppercase tracking-[0.18em]"
            style={{ color: pkg.accent }}
          >
            / 0{index + 1} · {pkg.tag}
          </span>
          {pkg.best && (
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/85 ring-1 ring-white/15 backdrop-blur">
              Most picked
            </span>
          )}
        </div>

        <h3 className="relative mt-5 font-display text-[38px] font-bold leading-[1] tracking-tight sm:mt-6 sm:text-[44px]">
          {pkg.name}
        </h3>
        <p className="relative mt-3 text-[14.5px] leading-relaxed text-white/65">
          {pkg.pitch}
        </p>

        <div className="relative mt-6 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:mt-7">
          <div className="font-display text-[22px] font-semibold tracking-tight sm:text-2xl">
            {pkg.videos}
          </div>
          <div className="mt-1 font-mono-acc text-xs uppercase tracking-[0.18em] text-white/55">
            {pkg.promos}
          </div>
        </div>

        <ul className="relative mt-6 space-y-3">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[14.5px] text-white/80">
              <span
                className="mt-[3px] grid h-5 w-5 flex-shrink-0 place-items-center rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${pkg.accent}66, transparent)`,
                  boxShadow: `inset 0 0 0 1px ${pkg.accent}55`,
                }}
              >
                <Check className="h-3 w-3" style={{ color: pkg.accent }} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="relative mt-8 pt-7">
          <div className="hairline mb-7" />
          <a
            href={waLink(pkg.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4 text-left font-display text-[15px] font-semibold tracking-tight transition-all ${
              pkg.best
                ? "text-white"
                : "text-white/90 hover:text-white"
            }`}
            style={
              pkg.best
                ? {
                    background:
                      "linear-gradient(115deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
                  }
                : { background: "rgba(255,255,255,0.06)" }
            }
          >
            <span className="flex items-center gap-2.5">
              Let's grow
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:rotate-45" />
            {!pkg.best && (
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100"
                style={{
                  background: `linear-gradient(115deg, ${pkg.accent}55, transparent)`,
                }}
              />
            )}
          </a>
        </div>
      </Wrapper>
    </motion.div>
  );
}
