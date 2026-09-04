// LëtzImpact — Digital Design
// Open editorial composition: transparent 3D objects, no cards or project labels.

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";
import { useI18n } from "@/lib/i18n";

const CDN =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797";

const ASSETS = {
  emesaBanner: `${CDN}/CEOYaMTFqODIQHkX.png`,
  emesaWorkwear: `${CDN}/zrOmsVJOfSfKiONM.png`,
  emesaVan: `${CDN}/WipVkkqoYQOrKVyH.png`,
  amVan: `${CDN}/aFhTZreqIlIraLnR.png`,
  amBanner: `${CDN}/inCuFodyvwXhdXNA.png`,
} as const;

const imageMotion = {
  initial: { opacity: 0, y: 28, scale: 0.975 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
};

export function DigitalDesign() {
  const { copy } = useI18n();

  return (
    <section
      id="digital-design"
      aria-labelledby="digital-design-heading"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] h-[440px] w-[70vw] -translate-x-1/2 rounded-full bg-[#4CC9F0]/[0.055] blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[44%] h-96 w-96 rounded-full bg-[#EC12D8]/[0.075] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-[8%] h-96 w-96 rounded-full bg-[#A250E3]/[0.07] blur-[140px]"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <SectionLabel num="01.1" label={copy.digitalDesign.label} />
          <h2
            id="digital-design-heading"
            className="mt-5 max-w-3xl font-display text-[34px] font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            {copy.digitalDesign.heading}{" "}
            <span className="text-gradient">
              {copy.digitalDesign.highlight}
            </span>
            . {copy.digitalDesign.ending}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/58 sm:text-base">
            {copy.digitalDesign.intro}
          </p>
        </motion.div>

        <div className="relative mt-6 sm:mt-8 lg:mt-2">
          <div className="relative grid gap-0 lg:block lg:h-[790px]">
            <motion.img
              {...imageMotion}
              transition={{
                duration: 0.85,
                delay: 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={ASSETS.emesaVan}
              alt="3D vehicle wrap design on a commercial van"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="relative z-20 mx-auto w-[116%] max-w-none -translate-x-[8%] drop-shadow-[0_28px_35px_rgba(0,0,0,0.48)] sm:w-[105%] sm:-translate-x-[2%] lg:absolute lg:-right-[7%] lg:top-0 lg:w-[78%] lg:translate-x-0 xl:-right-[5%] xl:w-[76%]"
            />

            <motion.img
              {...imageMotion}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={ASSETS.emesaWorkwear}
              alt="3D mannequins presenting branded workwear"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="relative z-30 mx-auto -mt-16 w-[74%] drop-shadow-[0_25px_28px_rgba(0,0,0,0.42)] sm:-mt-24 sm:w-[58%] lg:absolute lg:-left-[2%] lg:top-[238px] lg:mt-0 lg:w-[37%] xl:left-0 xl:w-[35%]"
            />

            <motion.img
              {...imageMotion}
              transition={{
                duration: 0.8,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={ASSETS.emesaBanner}
              alt="Construction fence banner design"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="relative z-10 mx-auto -mt-12 w-[110%] max-w-none -translate-x-[5%] drop-shadow-[0_22px_28px_rgba(0,0,0,0.42)] sm:-mt-20 sm:w-[96%] sm:translate-x-0 lg:absolute lg:bottom-[8px] lg:right-[1%] lg:mt-0 lg:w-[61%] lg:translate-x-0"
            />

            <ScribbleNote
              text={copy.digitalDesign.notes[0]}
              className="right-[1%] top-[28%] z-40 hidden lg:block"
              direction="left"
            />
            <ScribbleNote
              text={copy.digitalDesign.notes[1]}
              className="left-[2%] top-[43%] z-40 hidden lg:block"
              direction="right"
            />
            <ScribbleNote
              text={copy.digitalDesign.notes[2]}
              className="bottom-[7%] left-[43%] z-40 hidden lg:block"
              direction="right"
            />
          </div>

          <div
            aria-hidden
            className="mx-auto my-8 h-px w-[72%] bg-gradient-to-r from-transparent via-white/12 to-transparent sm:my-10 lg:my-2"
          />

          <div className="relative grid items-center gap-0 lg:h-[510px] lg:grid-cols-12">
            <motion.img
              {...imageMotion}
              transition={{
                duration: 0.85,
                delay: 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={ASSETS.amVan}
              alt="3D commercial vehicle wrap design"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="relative z-20 mx-auto w-[116%] max-w-none -translate-x-[8%] drop-shadow-[0_30px_34px_rgba(0,0,0,0.5)] sm:w-[102%] sm:-translate-x-[1%] lg:absolute lg:-left-[6%] lg:top-0 lg:w-[67%] lg:translate-x-0 xl:-left-[4%] xl:w-[65%]"
            />

            <motion.img
              {...imageMotion}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={ASSETS.amBanner}
              alt="Construction fence banner design"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="relative z-10 mx-auto -mt-10 w-[108%] max-w-none -translate-x-[4%] drop-shadow-[0_24px_28px_rgba(0,0,0,0.4)] sm:-mt-16 sm:w-[92%] sm:translate-x-0 lg:absolute lg:bottom-[20px] lg:right-0 lg:mt-0 lg:w-[51%] lg:translate-x-0"
            />

            <ScribbleNote
              text={copy.digitalDesign.notes[3]}
              className="right-[5%] top-[12%] z-40 hidden lg:block"
              direction="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScribbleNote({
  text,
  className,
  direction,
}: {
  text: string;
  className: string;
  direction: "left" | "right";
}) {
  const pointsRight = direction === "right";

  return (
    <motion.div
      initial={{ opacity: 0, rotate: pointsRight ? -2 : 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.32 }}
      className={`pointer-events-none absolute w-44 ${className}`}
    >
      <span
        className={`block text-[22px] leading-none text-white/68 ${
          pointsRight ? "text-left" : "text-right"
        }`}
        style={{ fontFamily: '"Caveat", cursive' }}
      >
        {text}
      </span>
      <svg
        aria-hidden
        viewBox="0 0 180 54"
        className={`mt-1 h-12 w-full overflow-visible text-white/34 ${
          pointsRight ? "" : "-scale-x-100"
        }`}
        fill="none"
      >
        <path
          d="M6 14C48 6 76 38 122 31C143 28 157 20 172 12"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M161 9L173 12L167 23"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
