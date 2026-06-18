// Letzimpact — Neon Atelier
// THE centerpiece: 3 social media packages on a horizontal feel rail.
// Middle card is the most picked option with a full gradient border.
// Each CTA opens WhatsApp with a tailored prefilled message.

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/sections/Services";
import { waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

type Pkg = {
  tag: string;
  name: string;
  pitch: string;
  videos: string;
  promos: string;
  features: readonly string[];
  waMessage: string;
  best: boolean;
  accent: string;
};

const PACKAGE_STYLE = [
  { best: false, accent: "#4CC9F0" },
  { best: true, accent: "#EC12D8" },
  { best: false, accent: "#A250E3" },
];

export function Packages() {
  const { copy } = useI18n();
  const packages = PACKAGE_STYLE.map((style, index) => ({
    ...style,
    ...copy.packages.items[index],
  }));

  return (
    <section
      id="packages"
      className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#07060B]/70" />

      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel num="03" label={copy.packages.label} />
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {copy.packages.heading}{" "}
              <span className="text-gradient">{copy.packages.highlight}</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/65 sm:text-[16px] lg:col-span-5">
            {copy.packages.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <PackageCard
              key={p.name}
              pkg={p}
              index={i}
              mostPicked={copy.packages.mostPicked}
              cta={copy.packages.cta}
            />
          ))}
        </div>

        <p className="mt-8 text-center font-mono-acc text-[10px] uppercase tracking-[0.16em] text-white/40 sm:mt-10 sm:text-[11px] sm:tracking-[0.18em]">
          {copy.packages.note}
        </p>
      </div>
    </section>
  );
}

function PackageCard({
  pkg,
  index,
  mostPicked,
  cta,
}: {
  pkg: Pkg;
  index: number;
  mostPicked: string;
  cta: string;
}) {
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
          pkg.best ? "bg-[#0B0913]" : "bg-white/[0.03] ring-1 ring-white/10"
        }`}
      >
        {/* accent corner */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
          style={{ background: pkg.accent }}
        />

        <div className="relative flex items-center justify-between gap-3">
          <span
            className="font-mono-acc text-[11px] uppercase tracking-[0.18em]"
            style={{ color: pkg.accent }}
          >
            / 0{index + 1} · {pkg.tag}
          </span>
          {pkg.best && (
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/85 ring-1 ring-white/15 backdrop-blur">
              {mostPicked}
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
          {pkg.features.map(f => (
            <li
              key={f}
              className="flex items-start gap-3 text-[14.5px] text-white/80"
            >
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
          <a
            href={waLink(pkg.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4 text-left font-display text-[15px] font-semibold tracking-tight transition-all ${
              pkg.best ? "text-white" : "text-white/90 hover:text-white"
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
            <span className="flex items-center gap-2.5">{cta}</span>
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
