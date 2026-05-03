// Letzimpact — Neon Atelier
// 5-step process timeline with scroll-driven gradient line.

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/sections/Services";

const STEPS = [
  {
    n: "01",
    title: "We listen first.",
    body: "A short call to understand the brand, the audience and what good actually looks like for you. No templates, no speedruns.",
  },
  {
    n: "02",
    title: "We build the plan.",
    body: "A monthly content roadmap: hooks, angles, formats, posting cadence. You see exactly what's coming before we shoot a single frame.",
  },
  {
    n: "03",
    title: "We shoot it.",
    body: "Filming days where we actually show up — gear, lighting and direction sorted. You don't have to direct anything, you just turn up and be yourself.",
  },
  {
    n: "04",
    title: "We run it.",
    body: "Edits, captions, scheduling, comments, DMs. The account is treated like ours: replied to in hours, not when we feel like it.",
  },
  {
    n: "05",
    title: "We tune it.",
    body: "Each month we look at what hit and what flopped, and we change the next month accordingly. Honest reports, no vanity metrics.",
  },
];

export function Process() {
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
              <SectionLabel num="02" label="How we work" />
              <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                A clean, boring process — for very <span className="text-gradient">un-boring</span> content.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-[16px]">
                You shouldn't have to babysit your agency. Five steps, repeated every month.
                You always know where we are, where we're going, and why.
              </p>
            </div>
          </div>

          <div ref={wrapRef} className="relative lg:col-span-7">
            {/* base line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />
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
              {STEPS.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
                      STEP {s.n}
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
