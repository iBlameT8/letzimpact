// Letzimpact — Neon Atelier
// 5-step process timeline with scroll-driven gradient line.

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/sections/Services";
import { useI18n } from "@/lib/i18n";

export function Process() {
  const { copy } = useI18n();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-20 sm:py-28 lg:py-36">
      <div className="container">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel num="02" label={copy.process.label} />
              <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {copy.process.heading}{" "}
                <span className="text-gradient">{copy.process.highlight}</span>{" "}
                {copy.process.ending}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-[16px]">
                {copy.process.intro}
              </p>
            </div>
          </div>

          <div ref={wrapRef} className="relative lg:col-span-7">
            {/* base line */}
            <div className="absolute bottom-2 left-[19px] top-2 w-px bg-white/10" />
            {/* gradient progress line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[19px] top-2 w-px"
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
                  boxShadow: "0 0 16px rgba(236,18,216,0.6)",
                }}
              />
            </motion.div>

            <ul className="space-y-8 sm:space-y-10">
              {copy.process.steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-14"
                >
                  <span
                    aria-hidden
                    className="absolute left-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-[#0A0911] ring-1 ring-white/15"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #EC12D8, #A250E3 60%, #4CC9F0)",
                      }}
                    />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-acc text-xs text-white/40">
                      {copy.process.stepLabel} {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-[22px] font-semibold leading-tight tracking-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-white/65 sm:text-[15px]">
                    {s.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
