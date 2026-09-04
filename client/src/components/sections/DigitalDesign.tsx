// LëtzImpact — Digital Design
// Five transparent objects in separate rows, without labels or overlap.

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";
import { useI18n } from "@/lib/i18n";

const CDN =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797";

const ITEMS = [
  {
    src: `${CDN}/WipVkkqoYQOrKVyH.png`,
    alt: "3D vehicle wrap design on a commercial van",
    width: "max-w-5xl",
  },
  {
    src: `${CDN}/zrOmsVJOfSfKiONM.png`,
    alt: "3D mannequins presenting branded workwear",
    width: "max-w-3xl",
  },
  {
    src: `${CDN}/CEOYaMTFqODIQHkX.png`,
    alt: "Construction fence banner design",
    width: "max-w-5xl",
  },
  {
    src: `${CDN}/aFhTZreqIlIraLnR.png`,
    alt: "3D commercial vehicle wrap design",
    width: "max-w-5xl",
  },
  {
    src: `${CDN}/inCuFodyvwXhdXNA.png`,
    alt: "Construction fence banner design",
    width: "max-w-5xl",
  },
] as const;

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
        className="pointer-events-none absolute -left-24 top-[52%] h-96 w-96 rounded-full bg-[#EC12D8]/[0.075] blur-[140px]"
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

        <div className="mt-10 space-y-16 sm:mt-14 sm:space-y-24 lg:space-y-32">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.75,
                delay: 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex w-full justify-center ${index === 3 ? "pt-8 sm:pt-12 lg:pt-16" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                className={`h-auto w-full object-contain drop-shadow-[0_28px_34px_rgba(0,0,0,0.46)] ${item.width}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
