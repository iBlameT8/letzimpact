// Letzimpact — Neon Atelier
// Founders section: editorial double-portrait spread.

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";

const ANAS = "/founders/anas-ourabi.jpg";
const DZENAN = "/founders/dzenan-skoko.png";
const VALUES = [
  { k: "Clear strategy", v: "We say no to the wrong angle, even if it's loud." },
  { k: "Clean execution", v: "Files delivered, posts scheduled, comments answered." },
  { k: "Sharp content", v: "Hooks first. Aesthetics second. Both non-negotiable." },
  { k: "Honest reports", v: "If something flopped, we say so — and fix it." },
];

export function Founders() {
  return (
    <section id="founders" className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel num="04" label="The two of us" />
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Two nineteen-year-olds running social media like a <span className="text-gradient">real business</span>.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/65 sm:text-[16px] lg:col-span-5">
            We started Letzimpact because most agencies in Luxembourg either treat
            social like an afterthought or like a circus. We do neither. We talk like
            we mean it, we ship on time, and we treat your account like our reputation
            depends on it — because at this size, it does.
          </p>
        </div>

        {/* Founder pair */}
        <div className="mt-12 grid items-stretch gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
          <FounderCard
            img={ANAS}
            name="Anas Ourabi"
            role="Founder"
            offset
          />
          <FounderCard
            img={DZENAN}
            name="Dzenan Skoko"
            role="Co-founder"
          />
        </div>

        {/* Values strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:mt-16 lg:grid-cols-4"
        >
          {VALUES.map((v) => (
            <div
              key={v.k}
              className="bg-[#0A0911] p-5 transition-colors hover:bg-[#0E0C18] sm:p-6"
            >
              <div className="font-display text-lg font-semibold tracking-tight">
                {v.k}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">{v.v}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function FounderCard({
  img,
  name,
  role,
  offset = false,
}: {
  img: string;
  name: string;
  role: string;
  offset?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 ${
        offset ? "lg:translate-y-8" : ""
      }`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={img}
          alt={`${name} — ${role}`}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          draggable={false}
        />
        {/* gradient wash */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, rgba(7,6,11,0.85) 100%)",
          }}
        />
        {/* corner meta */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-[11px] font-mono-acc uppercase tracking-[0.18em] text-white/85 ring-1 ring-white/15 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#EC12D8]" />
          {role.split("·")[0].trim()}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {name}
          </h3>
          <span className="font-mono-acc text-[11px] uppercase tracking-[0.18em] text-white/40">
            LU
          </span>
        </div>

      </div>
    </motion.article>
  );
}
