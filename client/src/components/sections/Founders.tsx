// LëtzImpact — Neon Atelier
// Founder section: editorial portrait profile.

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";
import { useI18n } from "@/lib/i18n";

const ANAS = "/founders/anas-ourabi.jpg";

export function Founders() {
  const { copy } = useI18n();

  return (
    <section
      id="founders"
      className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <SectionLabel num="04" label={copy.founders.label} />
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {copy.founders.heading}{" "}
              <span className="text-gradient">{copy.founders.highlight}</span>.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-[16px]">
              {copy.founders.intro}
            </p>
          </div>
          <div className="lg:col-span-6">
            <FounderCard img={ANAS} name="Anas Ourabi" role="Founder · CEO" />
          </div>
        </div>

        {/* Values strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:mt-16 lg:grid-cols-4"
        >
          {copy.founders.values.map(v => (
            <div
              key={v.k}
              className="bg-[#0A0911] p-5 transition-colors hover:bg-[#0E0C18] sm:p-6"
            >
              <div className="font-display text-lg font-semibold tracking-tight">
                {v.k}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                {v.v}
              </p>
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
      className={`group relative flex h-full flex-col ${
        offset ? "lg:translate-y-8" : ""
      }`}
    >
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-3xl lg:aspect-[4/4.5]">
        <img
          src={img}
          alt={`${name}, ${role}`}
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
      </div>
      <div className="flex flex-1 flex-col justify-center pt-4 sm:pt-5">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {name}
          </h3>
          <p className="mt-2 font-mono-acc text-[11px] uppercase tracking-[0.18em] text-white/45">
            {role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
