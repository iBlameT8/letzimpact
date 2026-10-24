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
      className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <SectionLabel num="04" label={copy.founders.label} />
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70 sm:text-lg">
              {copy.founders.intro}
            </p>
          </div>
          <div className="lg:col-span-6">
            <FounderCard img={ANAS} name="Anas Ourabi" role="Founder · CEO" />
          </div>
        </div>

      </div>
    </section>
  );
}

function FounderCard({
  img,
  name,
  role,
}: {
  img: string;
  name: string;
  role: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col"
    >
      <div className="relative aspect-[4/5] w-full max-w-[440px] shrink-0 overflow-hidden rounded-[2rem] lg:ml-auto">
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
      <div className="flex w-full max-w-[440px] flex-1 flex-col justify-center pt-4 sm:pt-5 lg:ml-auto">
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
